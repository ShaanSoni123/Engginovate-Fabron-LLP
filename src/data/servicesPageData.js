import facilityImage from "../assets/Engginovate.jpg";
import tanksExampleImage from "../assets/project1.jpg";

/** Cleaned content for the Services page (presentation flow). */
export const servicesPage = {
  hero: {
    title: "Capabilities & Delivery",
    subtitle:
      "Design-to-dispatch execution for heavy engineering, transformer-class fabrications, and load-bearing structures — anchored by disciplined QA and in-house manufacturing at Surat.",
  },

  introduction: {
    lead:
      "Engginovate Fabaron LLP is led by Foram Soni on more than twenty years of design and manufacturing experience across heavy engineering and power industries. An innovative, self-driven engineer, he has deep roots in core manufacturing for pressure vessels, heat exchangers, and reactors, including time in the core engineering and design groups of Larsen & Toubro — one of India’s largest engineering and construction firms.",
    founderNote:
      "He has conceived and industrialised over a hundred high-impact process improvements that drove measurable cost savings and quality gains. His structural system for kinetic energy turbines (4 × 5 kW) was the first in the world to hold turbines in a single row under extreme river flow, commissioned at Neyveli Lignite Corporation, Tamil Nadu.",
    coreBusiness: [
      "Fabrication of transformer and reactor tanks and core frames from 100 kVA up to 500 MVA class (including up to 765 kV applications) in a 25,000 sq. ft shop at Surat, served by a 15 MT EOT crane.",
      "Integrated design and manufacturing of structural buildings and engineered steel systems for industrial and infrastructure clients.",
    ],
    divisions: [
      {
        title: "Transformers & reactors — tanks & core frames",
        text: "Series and project-based fabrication for OEM and utility programmes, with documentation and QA aligned to international practice.",
      },
      {
        title: "Load-bearing structures — design + manufacture",
        text: "Spreader beams, gantries, FOBs, industrial sheds, pre-engineered buildings (PEBs), and bespoke heavy assemblies.",
      },
      {
        title: "Hydro kinetic power — projects & consultancy",
        text: "Specialist support for kinetic hydro installations, including structural innovation and deployment planning.",
      },
      {
        title: "Trading — raw materials & sub-assemblies",
        text: "Sourcing of transformer-grade raw materials and approved sub-assemblies to keep customer schedules predictable.",
      },
    ],
  },

  /** Two on-brand examples; swap images anytime. */
  spotlights: [
    {
      title: "Transformer & reactor-class fabrications",
      description:
        "Tank and core-frame programmes executed with crane-heavy handling, controlled welding, and coating cycles suited to utility and OEM specifications.",
      image: tanksExampleImage,
    },
    {
      title: "Surat fabrication footprint",
      description:
        "Consolidated heavy fabrication under one roof — from released drawings to dispatch — with traceable materials and stage-wise inspection.",
      image: facilityImage,
    },
  ],

  coreTeam: {
    intro: "Leadership and technical depth across design, manufacturing, and field coordination.",
    members: [
      { name: "Foram Soni", role: "BE Mechatronics, MBA (SPJIMR), NDT Level II", experience: "20+ years" },
      { name: "Veronica Soni", role: "BE Information & Technology", experience: "20+ years" },
      { name: "Briyan Bhandari", role: "BE Mechanical", experience: "6+ years" },
      { name: "Kaushal Desai", role: "DE Mechanical", experience: "16+ years" },
      { name: "Ramesh Gautam", role: "DPCT", experience: "16+ years" },
      { name: "Baby Kuriakose", role: "BTech Electrical, MBA Energy Management — South India", experience: "40+ years" },
    ],
    workforce: "40+ full-time skilled fabricators and technicians, averaging 15+ years of hands-on experience.",
    branch: {
      title: "Kerala branch (South India)",
      lines: [
        "Karayamparambu Signal Junction, Angamaly, Ernakulam District",
        "Kerala, India",
      ],
    },
  },

  capabilities: [
    {
      name: "15 MT EOT crane",
      specs: [
        ["Make", "Imported"],
        ["Year", "2015"],
        ["Span", "10,500 mm"],
        ["Hook height (under hook)", "6,060 mm"],
      ],
    },
    {
      name: "CNC plasma cutting",
      specs: [
        ["Capacity", "100 A (Hypertherm)"],
        ["Year", "2018"],
        ["Plate cutting", "MS / SS up to 32 mm thick"],
      ],
    },
    {
      name: "MIG / MAG welding (inverter)",
      specs: [
        ["Equipment", "Combo-401 i — 500 A, Warpp (India)"],
        ["Year", "2017"],
        ["Wire", "Ø 1.6 mm MIG"],
        ["Duty", "100% at rated conditions"],
      ],
    },
    {
      name: "MMA welding (inverter, HF)",
      specs: [
        ["Equipment", "INARC-400 i — 400 A, Warpp (India)"],
        ["Year", "2017"],
        ["Efficiency (full load)", "89%"],
        ["Duty", "60%"],
      ],
    },
    {
      name: "Portable blasting",
      specs: [
        ["Make", "Abrablast, Jodhpur"],
        ["Year", "2017"],
        ["Productivity", "≈ 12–15 m² cleaning rate"],
        ["Air", "15 HP screw compressor (Ingersoll Rand)"],
      ],
    },
    {
      name: "Airless spray painting",
      specs: [
        ["Make", "Graco (USA)"],
        ["Year", "2021"],
        ["Flow", "6 LPM"],
        ["Air", "15 HP screw compressor (Ingersoll Rand)"],
      ],
    },
  ],

  portableEquipment: [
    "Single- and three-phase arc welders",
    "Single- and three-phase MIG welders",
    "Profile cutting",
    "Lathes (2)",
    "Bandsaw",
    "Radial and pillar drilling",
    "Core cutting and pug cutting",
    "Grinding",
  ],

  processPhases: [
    {
      title: "Planning & material readiness",
      items: [
        "Drawing release aligned to the monthly fabrication plan.",
        "Cutting lists and job cards issued to shop fitters.",
        "BOM preparation, purchase requisitions, and inward QC on receipt.",
        "Consumables verified and replenished before line start.",
      ],
    },
    {
      title: "Cutting & machining",
      items: [
        "Marked plates verified before burning (PCL discipline).",
        "Cutting and machining to release accurate details for assembly.",
      ],
    },
    {
      title: "Assembly, welding & testing",
      items: [
        "Staged fit-up with dimensional checks after tack-up and after completion of welding.",
        "Supervisory review of job cards; leak testing where the job demands it.",
      ],
    },
    {
      title: "Surface preparation & painting",
      items: [
        "Shot blasting / mechanical cleaning once dimensional quality is cleared.",
        "Primer and finish coats per specification, with controlled curing before over-coating.",
      ],
    },
    {
      title: "Final quality & dispatch",
      items: [
        "Paint DFT, finish, and hold-point inspections.",
        "Final QC acceptance and readiness for dispatch or site integration.",
      ],
    },
  ],

  materials: {
    carbonAndLowAlloy:
      "Carbon steel; low-alloy grades including C–Mn, C–Mo, Cr–Mo, Cr–Mo–V, Ni, Cr–Mo–Ni, and related families as per design.",
    stainless:
      "Austenitic, ferritic, martensitic, duplex, and super-duplex stainless steels.",
    nonFerrous:
      "Aluminium, copper, brass, bronze, Monel, cupronickel, Inconel, titanium, Hastelloy C22 / C276 / C2000, and other specified alloys.",
  },

  rawMaterialChecks: [
    "Match material quality, thickness, and size to the approved drawing.",
    "Verify heat number, plate number, and inspection identifiers against mill certificates.",
    "Confirm reported properties against ASME Section II (Parts A / B) where applicable.",
    "Confirm NDE (e.g. UT) requirements are scheduled and recorded.",
    "Visual inward inspection for pitting, damage, or surface defects on both faces before acceptance.",
  ],

  designCodes: [
    "ASME Section VIII — Divisions I, II, III",
    "ASME Section III",
    "ASME Section I",
    "ASME Section IX",
    "ASME B30.20",
    "AWS D1.1 and related CBC / AWS references as applicable",
    "Indian Standards (IS) and DIN where invoked by contract",
    "Central Board of Irrigation and Power (CBIP) publications for designated power-sector work",
  ],

  executedJobs: [
    {
      title: "500 MVA core frame (400 / 220 / 33 kV)",
      client: "Power Grid Corporation of India Ltd (PGCIL)",
      for: "Transformers & Rectifiers (I) Ltd",
    },
    {
      title: "125 MVAr reactor frame (420 kV)",
      client: "PGCIL",
      for: "Transformers & Rectifiers (I) Ltd",
    },
    {
      title: "80 MVA transformer tanks (132 / 33 kV)",
      client: "Opera Energy programme",
      for: "Vidyut Transformers",
    },
    {
      title: "20 MVA transformer tanks (66 / 11.55 kV)",
      client: "Gujarat Energy Transmission Corporation (GETCO)",
      for: "IMP Powers Ltd",
    },
  ],

  trading: {
    title: "Trading — raw materials & sub-assemblies",
    body:
      "We support transformer OEMs and fabricators with dependable supply of approved raw materials and sub-assemblies — aligned to drawing, material class, and inspection requirements — so production lines stay fed and delivery dates stay credible.",
  },
};
