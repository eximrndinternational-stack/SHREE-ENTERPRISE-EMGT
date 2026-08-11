from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class Enquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: Optional[str] = ""
    email: EmailStr
    phone: Optional[str] = ""
    project_type: Optional[str] = ""
    location: Optional[str] = ""
    scale: Optional[str] = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class EnquiryCreate(BaseModel):
    name: str
    company: Optional[str] = ""
    email: EmailStr
    phone: Optional[str] = ""
    project_type: Optional[str] = ""
    location: Optional[str] = ""
    scale: Optional[str] = ""
    message: str


@api_router.get("/")
async def root():
    return {"message": "Shree Enterprise API"}


@api_router.post("/enquiry", response_model=Enquiry)
async def create_enquiry(payload: EnquiryCreate):
    enquiry = Enquiry(**payload.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    logger.info("New enquiry from %s <%s>", enquiry.name, enquiry.email)
    return enquiry


@api_router.get("/enquiry", response_model=List[Enquiry])
async def list_enquiries():
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
