// SHREE ENTERPRISE — content database sourced from official company profile PDF.
// Do not fabricate. Fields not in the PDF are marked "To be updated".

export const COMPANY = {
  name: "SHREE ENTERPRISE",
  tagline: "Building With Trust",
  since: 2010,
  address: "Dreamland, Pabitra Para, PO & Dist. Jalpaiguri, West Bengal – 735101, India",
  phones: ["9800045678", "9832045678"],
  email: "shreeenterpriseof2010@gmail.com",
  gstin: "19ABVFS1008E1Z2",
  msme: "UDYAM-WB-09-0005666",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1644221150167-fb4fafa7f411?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000",
  workers: "https://images.unsplash.com/photo-1632201147654-f6f54427e538?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  sunset: "https://images.unsplash.com/photo-1630309904321-4f320230bced?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  craneMesh: "https://images.unsplash.com/photo-1785679788392-7f452fc0a62e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  frame: "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  bridge: "https://images.unsplash.com/photo-1515674744565-0d7112cd179a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  bridge2: "https://images.unsplash.com/photo-1522775559573-2f76d540932b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  excavator: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  loader: "https://images.unsplash.com/photo-1629807473015-41699c4471b5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  resi1: "https://images.unsplash.com/photo-1783878982670-2807fe60d348?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  resi2: "https://images.unsplash.com/photo-1778434842498-1b4f6daac33d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  resi3: "https://images.unsplash.com/photo-1770962282626-61b2f4931bf7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

export const METRICS = [
  { value: 15, suffix: "+", label: "Years Since 2010", href: "/about" },
  { value: 24, suffix: "+", label: "Documented Projects", href: "/projects" },
  { value: 26, suffix: "", label: "Equipment Units", href: "/equipment" },
  { value: 12, suffix: "+", label: "Government Works", href: "/projects?sector=Government" },
  { value: 21, suffix: "", label: "Team Members", href: "/people" },
  { value: 6, suffix: "", label: "Corporate & Govt Clients", href: "/#clients" },
];

export const MISSION = [
  { n: "01", title: "Infrastructure for the Nation", body: "Contributing to the development of the country's infrastructure through dependable civil and public works." },
  { n: "02", title: "Homes Across the Spectrum", body: "Developing luxury residences for HIGs and affordable housing for LIGs." },
  { n: "03", title: "Growth in Small Steps", body: "Becoming a successful, established construction company through consistent, disciplined progress." },
];

export const CAPABILITIES = [
  { slug: "residential", title: "Residential Construction", img: IMAGES.resi1, desc: "Apartments, villas and residential complexes — from G+4 apartment blocks to duplex villa clusters.", sectors: ["Residential"] },
  { slug: "healthcare", title: "Healthcare Construction", img: IMAGES.frame, desc: "Hospital and healthcare facilities including a G+3 oncology hospital currently under construction.", sectors: ["Healthcare"] },
  { slug: "roads", title: "Roads & Transportation", img: IMAGES.bridge, desc: "Bituminous roads, CC roads, paver-block roads, PMGSY works and road maintenance.", sectors: ["Roads"] },
  { slug: "water", title: "Water Infrastructure", img: IMAGES.bridge2, desc: "Overhead reservoirs, PHE water pipelines, borewells and solar-powered water systems.", sectors: ["Water Infrastructure"] },
  { slug: "drainage", title: "Drainage & Civil Works", img: IMAGES.craneMesh, desc: "Drains, culverts, guard walls, pathways and associated civil infrastructure.", sectors: ["Drainage"] },
  { slug: "government", title: "Government Works", img: IMAGES.sunset, desc: "Public infrastructure executed for NBDD, WBSRDA, Zilla Parishad, PHE, MGNREGS and BDO offices.", sectors: ["Government"] },
  { slug: "industrial", title: "Industrial & Corporate", img: IMAGES.workers, desc: "Civil works, structural and utility works for corporate clients such as Hindustan Coca-Cola Beverages.", sectors: ["Industrial"] },
  { slug: "material-supply", title: "Material Supply", img: IMAGES.excavator, desc: "Bulk supply of sand, aggregate, bricks, GSB, rubble and Pakur chips for major projects.", sectors: ["Material Supply"] },
  { slug: "area-development", title: "Area Development", img: IMAGES.loader, desc: "Roads, drainage, landscaping, river training and boundary walls as integrated site development.", sectors: ["Area Development"] },
];

// Curated from the profile. Values & dates verbatim from the PDF.
export const PROJECTS = [
  { slug: "vanya-awas-lataguri", name: "Vanya Awas — Lataguri", client: "Ambuja Neotia Group", location: "Lataguri", sector: "Residential", status: "Ongoing", value: "₹15,72,67,249", start: "01.01.2023", end: "19.07.2024", featured: true, type: "Corporate", img: IMAGES.resi1, gallery: [IMAGES.resi1, IMAGES.frame, IMAGES.resi3],
    scope: "5 nos of G+4 Apartment with 51 flats each — flagship residential complex within the Vanya Awas development.",
    subscopes: ["5 × G+4 Apartments (51 flats each) — ₹15,72,67,249", "30 × G+1 Duplex Villas — ₹8,54,63,276", "Area Development (drainage, roads, landscaping, river training, boundary wall) — ₹4,42,48,778", "Marketing office, temporary road & boundary wall — ₹1,11,85,236"] },
  { slug: "vanya-villas-lataguri", name: "Vanya Awas Villas — Lataguri", client: "Ambuja Neotia Group", location: "Lataguri", sector: "Residential", status: "Ongoing", value: "₹8,54,63,276", start: "01.01.2023", end: "28.05.2025", type: "Corporate", img: IMAGES.resi2, gallery: [IMAGES.resi2, IMAGES.resi3],
    scope: "30 nos of G+1 duplex villas as part of the Vanya Awas residential development at Lataguri." },
  { slug: "manipal-hospital-siliguri", name: "Manipal Hospital — Rangapani", client: "Manipal Hospital", location: "Siliguri", sector: "Healthcare", status: "Ongoing", value: "₹5,01,18,062", start: "01.03.2025", end: "Ongoing", featured: true, type: "Corporate", img: IMAGES.frame, gallery: [IMAGES.frame, IMAGES.workers],
    scope: "Construction of a G+3 oncology hospital at Rangapani, Siliguri." },
  { slug: "area-development-lataguri", name: "Area Development — Lataguri", client: "Ambuja Neotia Group", location: "Lataguri", sector: "Area Development", status: "Ongoing", value: "₹4,42,48,778", start: "01.01.2023", end: "Ongoing", type: "Corporate", img: IMAGES.loader, gallery: [IMAGES.loader, IMAGES.bridge],
    scope: "Drainage, road works, landscaping, river training and boundary wall for the Vanya Awas development." },
  { slug: "paver-road-noukaghat", name: "Paver Block Road — EWS & Utshadhara", client: "Ambuja Neotia Group", location: "Siliguri", sector: "Roads", status: "Ongoing", value: "₹5,48,53,197", start: "05.06.2021", end: "Ongoing", featured: true, type: "Corporate", img: IMAGES.bridge, gallery: [IMAGES.bridge, IMAGES.bridge2],
    scope: "Construction of road with paver block at EWS & Utshadhara, Noukaghat, Siliguri." },
  { slug: "jmc-bulk-material-supply", name: "Bulk Material Supply — Coca-Cola Factory", client: "JMC Projects (India) Ltd.", location: "Jalpaiguri", sector: "Material Supply", status: "Completed", value: "₹18,75,64,738", start: "Jun 2019", end: "01.08.2022", featured: true, type: "Corporate", img: IMAGES.excavator, gallery: [IMAGES.excavator, IMAGES.loader],
    scope: "Supply of bulk materials — sand, aggregate, bricks, GSB and rubble — for the Hindustan Coca-Cola Beverages factory at Raninagar, Jalpaiguri." },
  { slug: "spl-hospital-material-supply", name: "Bulk Material Supply — Super Speciality Hospital", client: "Shapoorji Pallonji & Co. Ltd.", location: "Jalpaiguri", sector: "Material Supply", status: "Completed", value: "₹2,57,08,722", start: "01.01.2014", end: "08.07.2016", type: "Corporate", img: IMAGES.loader, gallery: [IMAGES.loader],
    scope: "Supply of sand, aggregate, bricks, GSB, rubble and Pakur chips for Jalpaiguri Super Speciality Hospital." },
  { slug: "hccb-cc-road-drain", name: "CC Road & Drain — HCCB", client: "Hindustan Coca-Cola Beverages Ltd.", location: "Jalpaiguri", sector: "Industrial", status: "Completed", value: "₹45,58,092", start: "12.10.2022", end: "23.05.2023", type: "Corporate", img: IMAGES.workers, gallery: [IMAGES.workers],
    scope: "Construction of CC road and drain at the HCCB plant, Raninagar, Jalpaiguri." },
  { slug: "hccb-ammonia-tank", name: "HP Receiver (Ammonia Tank) — HCCB", client: "Hindustan Coca-Cola Beverages Ltd.", location: "Jalpaiguri", sector: "Industrial", status: "Completed", value: "₹21,25,789", start: "05.08.2022", end: "22.10.2022", type: "Corporate", img: IMAGES.craneMesh, gallery: [IMAGES.craneMesh],
    scope: "Reservoir tank / HP receiver civil works at HCCBL, Raninagar, Jalpaiguri." },
  { slug: "nbdd-college-holdibari", name: "College Building — Netaji Subhash Mahabidyalya", client: "N.B.D.D", location: "Cooch Behar", sector: "Government", status: "Completed", value: "₹2,31,84,667", start: "13.11.2014", end: "16.09.2016", type: "Government", img: IMAGES.frame, gallery: [IMAGES.frame],
    scope: "Construction of college building at Holdibari." },
  { slug: "phe-ohr-boxirhat", name: "PHE Water Pipeline with OHR — Boxirhat", client: "N.B.D.D", location: "Cooch Behar", sector: "Water Infrastructure", status: "Completed", value: "₹2,58,01,829", start: "24.11.2016", end: "05.02.2018", type: "Government", img: IMAGES.bridge2, gallery: [IMAGES.bridge2],
    scope: "Over head reservoir & water pipeline, Boxirhat Zone 1 & 2, Tufanganj Block, Cooch Behar." },
  { slug: "community-hall-garalbari", name: "Community Hall — Garalbari", client: "BDO, Sadar Block, Jalpaiguri", location: "Jalpaiguri", sector: "Government", status: "Completed", value: "₹67,46,803", start: "07.02.2019", end: "27.02.2020", type: "Government", img: IMAGES.sunset, gallery: [IMAGES.sunset],
    scope: "Construction of community hall at Garalbari G.P., Sadar Block, Jalpaiguri." },
  { slug: "solar-water-darjeeling", name: "Solar Dual-Pump Water Sources", client: "N.B.D.D", location: "Darjeeling", sector: "Water Infrastructure", status: "Completed", value: "₹38,54,926", start: "17.01.2019", end: "02.05.2019", type: "Government", img: IMAGES.bridge, gallery: [IMAGES.bridge],
    scope: "Installation of spot water sources with solar power dual pump and service tank for upliftment of tribal areas, Darjeeling." },
  { slug: "pmgsy-road-metiali", name: "PMGSY Bituminous Road — Metiali", client: "WBSRDA", location: "Jalpaiguri", sector: "Roads", status: "Completed", value: "₹1,41,93,972", start: "01.02.2021", end: "09.10.2021", type: "Government", img: IMAGES.bridge, gallery: [IMAGES.bridge],
    scope: "Construction of PMGSY bituminous road, Metiali Block, Jalpaiguri." },
  { slug: "phe-ohr-grassmore", name: "PHE Water Pipeline with OHR — Grass More", client: "P.H.Eng, Jalpaiguri Division", location: "Jalpaiguri", sector: "Water Infrastructure", status: "Completed", value: "₹90,50,019", start: "16.09.2019", end: "15.01.2021", type: "Government", img: IMAGES.bridge2, gallery: [IMAGES.bridge2],
    scope: "Over head reservoir & water pipeline at Grass More T.G." },
  { slug: "cc-road-mgnregs", name: "CC Road — Barapatiia", client: "MGNREGS", location: "Jalpaiguri", sector: "Roads", status: "Completed", value: "₹70,70,442", start: "08.01.2021", end: "12.05.2021", type: "Government", img: IMAGES.craneMesh, gallery: [IMAGES.craneMesh],
    scope: "Construction of CC road, Barapatiia Notun Bos G.P., Sadar Block, Jalpaiguri." },
  { slug: "bit-road-drain-chowrangi", name: "Bituminous Road with Drain — Chowrangi", client: "Jalpaiguri Zilla Parishad", location: "Jalpaiguri", sector: "Drainage", status: "Completed", value: "₹23,70,928", start: "05.11.2020", end: "09.11.2021", type: "Government", img: IMAGES.sunset, gallery: [IMAGES.sunset],
    scope: "Construction of bituminous road with drain, Chowrangi More." },
  { slug: "cc-road-culvert-mohitnagar", name: "CC Road & HP Culvert — Mohit Nagar", client: "Jalpaiguri Zilla Parishad", location: "Jalpaiguri", sector: "Drainage", status: "Completed", value: "₹24,06,163", start: "05.11.2020", end: "09.11.2021", type: "Government", img: IMAGES.loader, gallery: [IMAGES.loader],
    scope: "Construction of CC road with 2 × 600mm dia HP culverts and guard wall, Mohit Nagar Colony." },
  { slug: "apartment-desbandhu", name: "G+4 Apartment (16 flats) — Desbandhu Para", client: "Private Promoter Group", location: "Jalpaiguri", sector: "Residential", status: "Completed", value: "₹2,99,20,000", start: "08.08.2021", end: "18.07.2023", type: "Private", img: IMAGES.resi3, gallery: [IMAGES.resi3],
    scope: "Construction of G+4 residential apartment with 16 flats, Desbandhu Para, Jalpaiguri." },
  { slug: "apartment-ukilpara", name: "G+4 Apartment (16 flats) — Ukil Para", client: "Private Promoter Group", location: "Jalpaiguri", sector: "Residential", status: "Completed", value: "₹2,56,00,000", start: "05.03.2020", end: "11.07.2021", type: "Private", img: IMAGES.resi2, gallery: [IMAGES.resi2],
    scope: "Construction of G+4 residential apartment with 16 flats, Ukil Para, Jalpaiguri." },
  { slug: "spl-hospital-building", name: "Building Works — Super Speciality Hospital", client: "Shapoorji Pallonji & Co. Ltd.", location: "Jalpaiguri", sector: "Healthcare", status: "Completed", value: "₹5,68,384", start: "04.08.2014", end: "19.09.2014", type: "Corporate", img: IMAGES.frame, gallery: [IMAGES.frame],
    scope: "Construction of cement godown, lab and water vat at Jalpaiguri Super Speciality Hospital." },
  { slug: "pmgsy-maintenance-mal", name: "PMGSY Road Maintenance — Mal", client: "WBSRDA", location: "Jalpaiguri", sector: "Roads", status: "Completed", value: "₹35,49,468", start: "22.06.2020", end: "20.11.2020", type: "Government", img: IMAGES.bridge, gallery: [IMAGES.bridge],
    scope: "Maintenance of bituminous road, Block Mal, Jalpaiguri." },
  { slug: "bit-road-sakoajhora", name: "Bituminous Road — Sakoajhora", client: "Sakoajhora-I GP", location: "Dhupguri", sector: "Roads", status: "Completed", value: "₹35,17,864", start: "11.04.2016", end: "14.11.2016", type: "Government", img: IMAGES.bridge2, gallery: [IMAGES.bridge2],
    scope: "Construction of bituminous road, Sakoajhora-I GP, Dhupguri." },
];

export const CLIENTS = [
  "Ambuja Neotia Group", "Hindustan Coca-Cola Beverages Ltd.", "Shapoorji Pallonji & Co. Ltd.",
  "JMC Projects (India) Ltd.", "Medica North Bengal Clinic", "Government of West Bengal",
  "Manipal Hospital", "WBSRDA", "N.B.D.D", "Jalpaiguri Zilla Parishad", "P.H.E Jalpaiguri", "MGNREGS",
];

export const ACHIEVEMENTS = [
  "Currently undertaking residential complex development at Lataguri, West Bengal.",
  "Manipal Cancer Hospital under construction at Rangapani, Siliguri.",
  "Completed 20 villas and G+3 apartments at Lataguri.",
  "Successful service vendor of Hindustan Coca-Cola Beverages Ltd.",
  "Successful service vendor of Medica North Bengal Clinic.",
  "Successful service vendor of Shapoorji Pallonji Ltd.",
  "Successful contractor of the Government of West Bengal.",
  "Successful vendor of JMC Projects (India) Ltd.",
];

export const TEAM = {
  management: [
    { name: "Sankha Pani Das", role: "Partner", qual: "Co-Founder" },
    { name: "Saswata Mukherjee", role: "Partner", qual: "" },
  ],
  executive: [
    { name: "Pulak Sanyal", role: "Project-In-Charge", qual: "" },
    { name: "Sanjay Ghosh", role: "Technical Head", qual: "Diploma (Civil)" },
    { name: "Rajdeep Das", role: "Admin, Billing & Procurement Manager", qual: "B.Tech (Civil)" },
  ],
  engineers: [
    { name: "Rathindra Nath Roy", role: "EIC — Civil", qual: "Diploma (Civil)", exp: "6+ yrs" },
    { name: "Ranjit Kundu", role: "QA & QC", qual: "B.Tech (Civil)", exp: "6+ yrs" },
    { name: "Rajesh Sarkar", role: "EIC — Electrical", qual: "Diploma (Electrical)", exp: "5+ yrs" },
    { name: "Raju Paul", role: "JE — Civil", qual: "B.Tech (Civil)", exp: "3+ yrs" },
    { name: "Prodeep Ghosh", role: "JE — Civil", qual: "B.Tech (Civil)", exp: "1+ yrs" },
  ],
  office: [
    { name: "Samir Basak", role: "IT Manager", qual: "" },
    { name: "Animesh Chakraborty", role: "Accounts Manager", qual: "" },
    { name: "Pralay Adhikary", role: "Store Manager", qual: "" },
    { name: "Tapas Kr. Dey", role: "Office Assistant", qual: "" },
  ],
  supervisors: ["Debashis Sarkar", "Barun Dutta", "Partha Dey", "Ajiy Narayan", "Sujoy Ganguly", "Utpal Roy", "Arindam Paul"],
};

export const EQUIPMENT = [
  { cat: "Earthmoving", items: [["Backhoe Loader (JCB)", 3], ["Poklen", 3], ["Dumper", 2], ["Vibratory Roller (Volvo)", 1], ["Roller", 1]] },
  { cat: "Concrete", items: [["Mixture Machine (JP 1050)", 2], ["Vibrator Machine", 24], ["Vibrator Nozzle 60mm", 50], ["Vibrator Nozzle 40mm", 50], ["Concrete Carrier", 2], ["Concrete Pipe", "100 m"], ["Putzmeister Pressure Pump (Model 1404)", 1]] },
  { cat: "Surveying & QA/QC", items: [["Total Station", 1], ["Auto Level", 3], ["Concrete Cube Mould", 30], ["Slump Cone & Accessories", 2], ["Hilti Laser Layout Machine", 2]] },
  { cat: "Lifting & Handling", items: [["Farana Crane (22-ton)", 1], ["Material Lifting Machine", "Yes"], ["Mahindra Pick-up Van", 1], ["Tractor with Trolley", 5]] },
  { cat: "Water Management", items: [["Water Tanker (12,000 L)", 1], ["Water Pump", 5], ["Tulu Pump", 5]] },
  { cat: "Fabrication", items: [["Welding Machine", 7], ["Rod Cutting Machine", 15]] },
];

export const SCAFFOLDING = [
  ["Adjustable Pipe Props", "1,000 pcs"], ["Adjustable Spans (MS Beam)", "600 pcs"],
  ["U Heads", "2,200 pcs"], ["Scaffolding MS Pipe (40mm)", "2,000 pcs"],
  ["Joint Pins", "300 pcs"], ["Cuplock Horizontals 1.8m", "3,500 pcs"],
  ["Cuplock Horizontals 1.2m", "2,000 pcs"], ["Cuplock Verticals 2.5m", "300 pcs"],
  ["Shuttering Ply", "30,000 sq. ft."],
];

export const CREDENTIALS = [
  { name: "Trade Licence", authority: "Jalpaiguri Municipality", status: "Valid upto 27 Aug 2030" },
  { name: "GSTIN Certificate", authority: "WB GST Act, 2017", status: "Regular — 19ABVFS1008E1Z2" },
  { name: "PAN Card", authority: "Income Tax Dept.", status: "Verified" },
  { name: "EPF Registration", authority: "EPFO", status: "Active — JL/P2143313000" },
  { name: "ESIC Certificate", authority: "ESIC", status: "Registered 23 Jul 2020" },
  { name: "Labour Licence", authority: "ALC, Malbazar", status: "MAL/16/C/11/000010" },
  { name: "MSME (Udyam)", authority: "Ministry of MSME", status: "Small — Civil Works" },
];

export const SECTORS = ["Residential", "Healthcare", "Roads", "Water Infrastructure", "Drainage", "Government", "Industrial", "Material Supply", "Area Development"];
export const STATUSES = ["Ongoing", "Completed"];
export const LOCATIONS = ["Jalpaiguri", "Lataguri", "Siliguri", "Cooch Behar", "Darjeeling", "Dhupguri"];

// Approximate positions (%) for the stylised North Bengal map.
export const MAP_PINS = [
  { loc: "Darjeeling", x: 20, y: 22 }, { loc: "Siliguri", x: 34, y: 34 },
  { loc: "Lataguri", x: 52, y: 46 }, { loc: "Jalpaiguri", x: 62, y: 58 },
  { loc: "Dhupguri", x: 72, y: 50 }, { loc: "Cooch Behar", x: 86, y: 70 },
];
