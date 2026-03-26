// ─── META ────────────────────────────────────────────────────────────────────

export const META = {
  name: "Shardul Gupta",
  tagline: "I show up, figure it out, and make things move.",
  email: "sg.work004@gmail.com",
  linkedin: "https://www.linkedin.com/in/shardul-gupta-101896186/",
  notionPortfolio:
    "https://shardulgupta.notion.site/Body-Of-Work-Shardul-Gupta-1c29c6509142804f8331c7ac8400564b",
};

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────

export type WorkItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  hours?: string;
  accent: string;        // paint panel color
  tagline: string;       // one punchy line — shown on card face
  summary: string;       // 2 sentences — shown on card face
  skills: string[];
  // Full content (shown on expand)
  context: string;
  problem: string;
  approach: string;
  outcomes: string[];
  reflections: string[];
  highlight?: string;
};

export const WORK: WorkItem[] = [
  {
    id: "yelloskye",
    company: "YelloSKYE",
    role: "Business Apprentice",
    duration: "2025 — Present",
    accent: "#C9A227",
    tagline: "Currently building.",
    summary:
      "The most recent engagement. Open-ended scope, weekly deliverables, and a bias toward making things happen.",
    skills: ["Strategy", "Execution", "Documentation"],
    context:
      "YelloSKYE is an ongoing apprenticeship — the most current engagement, actively in progress.",
    problem: "Open-ended scope. Define the problem, own the process, ship the work.",
    approach:
      "Weekly deliverables, documented thinking, and a bias toward making things happen rather than theorising about them.",
    outcomes: ["In progress — the report is still being written."],
    reflections: ["Current work. Still learning."],
    highlight: "Current",
  },
  {
    id: "rayden",
    company: "Rayden Design Studio",
    role: "Business Development Apprentice",
    duration: "2025",
    accent: "#C2692A",
    tagline: "Built a B2B sales machine from nothing.",
    summary:
      "Rayden is a Pune premium design studio with strong products and zero outreach infrastructure. I built the entire system from scratch.",
    skills: ["B2B Outreach", "ICP Development", "Sales Messaging", "Market Research", "SOP Design"],
    context:
      "Rayden Design Studio is a Pune-based design firm founded by Mooshir and Parul Vahanvati, known for crafting functional serveware, home accessories, and soft furnishings. They partner with hospitality brands on custom tableware — but had no systematic B2B pipeline.",
    problem:
      "No outreach infrastructure. No ICP. No playbook. A cold market with zero existing relationships in the hospitality segment.",
    approach:
      "Built the entire system from scratch: developed 7 messaging templates, sourced 300+ leads via Apollo and manual research, and executed 228 cold reach-outs across email, Instagram, and LinkedIn. Ran full competitor research on 12+ rivals and 21 e-retailer platforms. Built the handover SOP so the work continued after I left.",
    outcomes: [
      "228 cold outreaches → 34+ replies → 20+ qualified meetings with hospitality decision-makers",
      "300+ lead database segmented by fit and channel",
      "21 strategic recommendations across SEO, listings, and e-retailer performance",
      "2 pitch decks, 1 product catalogue, 60+ SEO-optimised listings, and a handover-ready SOP",
      "Initiated 26 agency outreach threads to explore strategic alliances",
    ],
    reflections: [
      "Systems thinking: learned to design processes that are repeatable, scalable, and easy for others to adopt.",
      "Strategic communication: refined how I translate complex ideas into clear, action-oriented messaging.",
      "Independent ownership: gained confidence in managing high-responsibility work-streams end-to-end.",
    ],
    highlight: "228 outreaches → 20+ meetings",
  },
  {
    id: "therefore",
    company: "Therefore Design",
    role: "Business Development Apprentice",
    duration: "Jan – Mar 2025",
    hours: "9 weeks",
    accent: "#3D6B4F",
    tagline: "Strategy, storytelling, and credential decks that actually land.",
    summary:
      "A 9-week BD apprenticeship inside a Pune design consultancy — building credential decks for clients, researching CRM platforms, and attending live strategy sessions.",
    skills: ["Credential Decks", "Pitch Storytelling", "CRM Research", "Strategy Sessions", "BD Operations"],
    context:
      "Therefore Design is a Pune-based design consultancy. The apprenticeship was deeply embedded in their BD operations — attending client meetings, contributing to live strategy discussions, and building collaterals for real stakeholders.",
    problem:
      "Clients needed compelling credential decks. The team needed a sharp researcher and executor who could think fast and deliver under real timelines.",
    approach:
      "Applied the Pixar storytelling framework to build credential decks. Researched CRM platforms, attended strategy and BD meetings, and worked directly with senior team members to get collateral approved and shipped.",
    outcomes: [
      "Built a credential deck skeleton for The Food Ministry of India — 3 of 5 GTM case studies approved",
      "Attended 12+ meetings in Week 1 alone: 7 strategy sessions, 2 EP partner calls, 1 guest meeting",
      "Learned to work within a senior team with real timelines and real stakeholder expectations",
      "Built understanding of investor pitch structure, brand identity positioning, and single-message slide design",
    ],
    reflections: [
      "Learned that investor decks are ads, not reports — every slide sells a story.",
      "Discovered the discipline of working on ONE aspect of a deck at a time: messaging, then flow, then visuals, then design.",
      "Adapted quickly to a new professional environment with unfamiliar people and high expectations.",
    ],
    highlight: "Food Ministry deck built — 3 of 5 GTM case studies approved",
  },
  {
    id: "hide-and-sneak",
    company: "Hide & Sneak Store",
    role: "Sales & Brand Apprentice",
    duration: "May – July 2024",
    hours: "432 hours",
    accent: "#4A6B8A",
    tagline: "Learned sales by actually selling.",
    summary:
      "A premium sneaker store in Pune. First real retail environment — on-floor selling, brand content creation, and business operations, all day, every day.",
    skills: ["Retail Sales", "Instagram Content", "Brand Design", "Inventory Management"],
    context:
      "Hide & Sneak is a premium sneaker boutique in Pune. The apprenticeship was about as real as it gets — floor sales, brand content, store operations, and everything in between for 2.25 months straight.",
    problem:
      "Drive sales, build Instagram presence, and understand how a retail business actually runs from the inside.",
    approach:
      "On-floor selling every single day. Designed 50+ Instagram stories and 7 reels from scratch. Managed inward/outward inventory accounts. Designed a brand label for a shoe care kit, built a full product catalogue, assisted in professional video shoots and shelf talker design.",
    outcomes: [
      "50+ deals closed in 2 months",
      "~₹6L in total sales generated",
      "Biggest single sale: ₹48,400",
      "50+ Instagram stories, 7 reels, 4 posts created and published",
      "Brand label design, product catalogue, and shelf talker delivered",
    ],
    reflections: [
      "Sales isn't about convincing — it's about genuinely helping someone figure out what they want.",
      "Designed so much content that the principles of good design stopped being theoretical.",
      "The smallest inventory error can cascade into massive confusion. Precision matters.",
    ],
    highlight: "₹6L+ in sales",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export type TimelinePhase = {
  phase: string;
  items: string[];
};

export type Moment = {
  moment: string;
  why: string;
};

export type FullProject = {
  id: string;
  name: string;
  company: string;
  duration: string;
  year: string;
  hours?: string;
  tagline: string;
  summary: string;          // 2 sentences shown on card face
  overview: string;         // full paragraph shown on expand
  domain: string[];
  highlights: string[];
  timeline: TimelinePhase[];
  learnings: string[];
  moments: Moment[];
  isHero: boolean;
};

export const ALL_PROJECTS: FullProject[] = [
  // ── HERO 1 ──────────────────────────────────────────────────
  {
    id: "koel",
    name: "KOEL Research Initiative",
    company: "Kirloskar Oil Engines Ltd.",
    duration: "Aug – Oct 2024",
    year: "2024",
    hours: "500+ hours",
    tagline: "73 interviews. 5 cities. One boardroom.",
    summary:
      "Deep-dive consumer research for a Fortune 500 industrial company — from farms in Maharashtra to a presentation to the Managing Director.",
    overview:
      "Led a research initiative for KOEL to map user journeys, uncover insight-driven opportunities, and build a go-to-market strategy for their electric pumps segment. Won the internal bid to lead it. Conducted 73 interviews with farmers and retailers across 5 cities over 2.5 months. Synthesised 1000+ data points. Presented final findings to MD Gauri Kirloskar.",
    domain: ["Consumer Research", "GTM Strategy", "Insight Synthesis", "Fieldwork", "Stakeholder Mgmt"],
    highlights: [
      "Won the internal project bid — beat out other teams for the mandate",
      "73 farmer and retailer interviews across Maharashtra (5 cities) over 2.5 months",
      "Created and iterated research questionnaire 3+ times based on field feedback",
      "Synthesised 1000+ data points using 4Ps framework and Miro boards",
      "Mid-project review with VP of Product Milind Joshi to align expectations",
      "Final deck reviewed by Stahl founder Dhruv Aggarwal before the boardroom",
      "Presented to KOEL leadership including MD Gauri Kirloskar — inspired new GTM directions",
    ],
    timeline: [
      {
        phase: "Phase 1 — Setup",
        items: [
          "Won the internal bid to lead the project",
          "Researched KOEL, its market positioning, and competitors",
          "Kickoff meeting with VP of Product Milind Joshi",
          "Created a dynamic research questionnaire (iterated 3+ times)",
        ],
      },
      {
        phase: "Phase 2 — On-Ground Research",
        items: [
          "Conducted self-initiated interviews with farmers and retailers across Maharashtra",
          "Transcribed and analysed all 73 interviews manually",
          "Co-synthesised insights with project consultant Sid Madhusudan (Edify.ai)",
          "Clustered data using 4Ps framework and Miro boards",
        ],
      },
      {
        phase: "Phase 3 — Analysis & Presentation",
        items: [
          "Prioritised insights based on impact and feasibility",
          "Mid-project review with VP to align expectations",
          "Reviewed presentation with Dhruv Aggarwal (Founder, Stahl)",
          "Presented final insights to KOEL leadership including MD Gauri Kirloskar",
        ],
      },
    ],
    learnings: [
      "Ground-up research: competitor analysis, qualitative synthesis, and how to organise 1000+ data points into actionable insights",
      "The best interviews feel like conversations — you still get the data, but you get the human story too",
      "Insight format that worked: Context → Observation → Insight → Supporting Data → Action Points",
      "How to navigate corporate language and stakeholder expectations across levels — VP to MD",
      "Walking into a boardroom is a different skill set than walking into a farm. Learned both.",
    ],
    moments: [
      { moment: "Final presentation + cake cutting", why: "A satisfying end to an intense journey" },
      { moment: "Late night field visits in rural Maharashtra", why: "Realised what 'on-ground' truly means" },
      { moment: "Listening circle with teammates post-field", why: "Emotional processing of what we'd seen" },
      { moment: "The moment the heatmap visualised underserved clusters", why: "Saw strategy emerge from raw numbers — powerful" },
    ],
    isHero: true,
  },
  // ── HERO 2 ──────────────────────────────────────────────────
  {
    id: "stahl-5week",
    name: "5 Weeks, 5 Concepts",
    company: "Stahl",
    duration: "Aug – Oct 2025",
    year: "2025",
    hours: "217 hours",
    tagline: "Five weeks. Five domains. One premium cookware brand.",
    summary:
      "A sprint-style project where each week tackled a completely different problem — from customer research to legal risk assessment to CLV mapping.",
    overview:
      "Worked with Stahl — a premium Indian cookware brand — to strengthen both their consumer and business presence. Each week was a new domain: retailer research, brand storytelling, legal risk, and data-driven CLV. Combined creative, analytical, and strategic thinking across five very different problem types.",
    domain: ["Brand Strategy", "Legal Analysis", "Data / CLV", "Retail Comms", "Storytelling"],
    highlights: [
      "Conducted in-depth market, retailer, and customer research to uncover real buying behaviour gaps",
      "Developed Amazon PDP and corporate gifting narratives — turned product specs into emotion-led stories",
      "Designed on-ground dealer launch communication for new non-stick line, based on first-hand retailer visits",
      "Delivered a legal risk assessment of Flipkart agreement — identified contractual liabilities and proposed negotiation-ready revisions",
      "Used data and AI tools to map Customer Lifetime Value across regions, identifying high-potential micro-markets",
    ],
    timeline: [
      {
        phase: "Week 1 — Customer & Retailer Research",
        items: [
          "Visited retail stores in Pune to map customer experience touchpoints",
          "Spoke to dealers and customers about buying behaviour and brand perception",
          "A store owner's remark — 'People buy Hawkins because they've seen it for 30 years' — reframed how I think about legacy",
        ],
      },
      {
        phase: "Week 2 — Brand Storytelling",
        items: [
          "Developed Amazon PDP narratives that converted product features to benefit-led stories",
          "Wrote corporate gifting communication that made premium cookware feel like an obvious gift",
        ],
      },
      {
        phase: "Week 3 — Retail Launch Communication",
        items: [
          "Designed on-ground dealer communication for the new non-stick cookware line",
          "Based entire communication on first-hand retailer insights, not assumptions",
        ],
      },
      {
        phase: "Week 4 — Legal Risk",
        items: [
          "Reviewed Stahl's Flipkart agreement for liability exposure",
          "Identified key contractual risks and drafted negotiation-ready revisions",
          "Realised that a single ₹5,000 liability clause can define an entire business relationship",
        ],
      },
      {
        phase: "Week 5 — Data & CLV",
        items: [
          "Used AI and data tools to map Customer Lifetime Value across regions",
          "Identified underserved micro-markets via heatmap visualisation",
          "Recommended geo-targeted loyalty strategies for high-potential clusters",
        ],
      },
    ],
    learnings: [
      "Emotional connect drives purchase as much as product quality — especially in Indian retail",
      "Legal frameworks are strategy in disguise — a single clause can define an entire business relationship",
      "Seeing strategy emerge visually from raw data is how analytics earns credibility with a room",
      "Five completely different domains in five weeks taught me how to context-switch fast and still go deep",
    ],
    moments: [
      { moment: "Retailer saying 'People buy Hawkins because they've seen it for 30 years'", why: "One line reframed how I think about legacy, trust, and 'premium' in India" },
      { moment: "The Flipkart legal review day", why: "Made law feel less abstract and more like strategy" },
      { moment: "Heatmap visualising underserved CLV clusters", why: "Watching strategy emerge from numbers — a new kind of clarity" },
    ],
    isHero: true,
  },
  // ── HERO 3 ──────────────────────────────────────────────────
  {
    id: "history-lit-fest",
    name: "Ground-Up Distribution",
    company: "History Lit Fest",
    duration: "Jan 2024",
    year: "2024",
    hours: "130+ hours",
    tagline: "113 cafes. 9 colleges. 3 weeks.",
    summary:
      "High-volume ground-level outreach to build a distribution network for a history literature event — and ended up building something the colleges asked us to replicate for their own fests.",
    overview:
      "Led a 3-week ground-level outreach sprint to bring in local cafes and colleges as promotion partners for a history literature event. The results: 61 cafes and 9 colleges onboarded across Pune. Built a tracking system, iterated the pitch in real time, and managed 26 cafe meetings in a single day.",
    domain: ["Sales", "Ground Outreach", "Distribution", "Pitching", "Event Marketing"],
    highlights: [
      "Approached 113 cafes — 61 onboarded for in-store posters and promotion",
      "Pitched to 11 Pune colleges — 9 approved campus promotion",
      "Managed 26 back-to-back cafe meetings across Viman Nagar in a single day",
      "Reached out to the co-founder of the 5am Club for an event collaboration",
      "Garware College HOD asked us to help with their own outreach — a signal the model was credible",
      "Presented findings to a full faculty and mentor panel — received strong recognition",
    ],
    timeline: [
      {
        phase: "Week 1 — Setup & First Pitches",
        items: [
          "Mapped cafes by locality, built a neighbourhood-first strategy",
          "Developed pitch structure, talking points, and a feedback-capture system",
          "Started visiting cafes across Kothrud, Shivaji Nagar, Viman Nagar",
        ],
      },
      {
        phase: "Week 2 — Scaling",
        items: [
          "Tracked approvals in real time, iterated pitch based on rejections",
          "Managed 26 cafe meetings in a single day",
          "Built college outreach using warm intros and cold walk-ins",
        ],
      },
      {
        phase: "Week 3 — Closing",
        items: [
          "Pitched to Garware College's HOD — who asked for help on another outreach project",
          "Presented final model to a panel of faculty and program mentors",
          "Received recognition for building an original, scalable outreach model",
        ],
      },
    ],
    learnings: [
      "After the 30th pitch, you stop fearing rejection and start owning the conversation",
      "Gatekeepers — managers, waiters, assistants — often decide if you get through. Treat them like the decision-maker.",
      "A tracking sheet isn't admin work — it's how you spot patterns and double down on warm zones",
      "Quantity can't replace real conversations. The most successful pitches were the most human.",
    ],
    moments: [
      { moment: "Getting a discount at Kelly's Diner", why: "First 'yes' from a sceptical owner — felt like a real win" },
      { moment: "26-café day in Viman Nagar + plane spotting", why: "Exhausting and brilliant — the kind of hustle I thrive in" },
      { moment: "Garware College HOD asking for help", why: "First time I felt like a problem-solver, not just a student" },
    ],
    isHero: true,
  },
  // ── HERO 4 ──────────────────────────────────────────────────
  {
    id: "startup",
    name: "The Startup Sprint",
    company: "Let's Enterprise",
    duration: "Aug – Sep 2023",
    year: "2023",
    hours: "150+ hours",
    tagline: "Lemonade stands. Brownies in KP. 4AM at Market Yard.",
    summary:
      "A 3-week entrepreneurial sprint — test real business ideas, sell on the street, wake up at 4AM to source fresh fruit, and build a branded product from scratch.",
    overview:
      "An entrepreneurial sprint focused on testing and executing real micro-business ideas through street-level hustle. Ran lemonade stalls at 3 Pune locations, hosted a 3-day brownie stand in Koregaon Park, set up a vintage car event, organised a game night and open mic, and conceptualised, branded, and launched a curated fruit box venture — including 4AM visits to Market Yard.",
    domain: ["Entrepreneurship", "Sales", "Brand Positioning", "Event Management", "Product Dev"],
    highlights: [
      "Ran lemonade stalls at 3 different Pune locations — NDA centre, MG Road, and Nagar Road",
      "3-day brownie stand at Koregaon Park, targeting food-savvy crowds",
      "Set up a vintage car event, building connections with garage owners and collectors",
      "Organised a game night and open mic event — handled all logistics and marketing",
      "Conceptualised, branded, and launched a curated fruit box venture",
      "Procured fruits directly from Market Yard at 4AM, ensuring quality and margin control",
      "Hand-delivered boxes to first customers, collecting feedback in real time",
    ],
    timeline: [
      {
        phase: "Week 1 — Hustle & Exploration",
        items: [
          "Set up lemonade stands at NDA exam centre, MG Road, and Nagar Road",
          "Experimented with pitch lines, banner placement, and pricing",
          "Cold-approached people to test messaging and build confidence",
        ],
      },
      {
        phase: "Week 2 — Brownie Business & Events",
        items: [
          "Finalised recipe, packaging, and cost for brownie stand",
          "Ran 3-day sale at Koregaon Park — talked to buyers and small business owners",
          "Began ideation for vintage car event and parallel event planning",
        ],
      },
      {
        phase: "Week 3 — Fruit Box Venture",
        items: [
          "Designed and positioned a 'fresh-fruit curated box' brand",
          "4AM visit to Market Yard to understand pricing, freshness, and negotiation",
          "Managed inventory, packing, and delivery",
          "Collected direct feedback and iterated on the product",
        ],
      },
    ],
    learnings: [
      "Not every good idea is sustainable — execution and timing matter more than the idea itself",
      "The first 5 seconds of your pitch decides everything",
      "Packaging and vibe build trust before your product does",
      "People will pay more for consistent premium quality. Cutting corners is short-term thinking.",
      "Low-cost, high-speed testing is the fastest way to find what sticks",
    ],
    moments: [
      { moment: "Selling lemonade at NDA exam centre", why: "Learned how to grab attention in a loud, distracted crowd" },
      { moment: "Talking to KP customers during brownie sales", why: "Realised how narrative sells more than product" },
      { moment: "4AM visit to Market Yard", why: "The effort made it feel real — this wasn't a simulation" },
    ],
    isHero: true,
  },
  // ── HERO 5 ──────────────────────────────────────────────────
  {
    id: "stahl-retail",
    name: "Stahl Retail Design",
    company: "Stahl",
    duration: "Mar 2024",
    year: "2024",
    hours: "80+ hours",
    tagline: "Factory floor. Six stores. A prototype made of masking tape.",
    summary:
      "A hands-on retail design sprint with Stahl — factory visits, store research, moodboards, and a store layout prototype built in the office yard with basic materials.",
    overview:
      "Worked with Stahl to understand how customers interact with premium cookware in retail. Visited the Stahl factory in Pirangut, did store research across 6 Pune locations, built a moodboard with Slide Zoom storytelling, and prototyped a full store layout using masking tape in the office yard — all in direct collaboration with founder Dhruv Aggarwal and creative lead Juhi Patel.",
    domain: ["Retail Design", "Experience Mapping", "Prototyping", "Brand Research"],
    highlights: [
      "Visited Stahl's factory in Pirangut — watched utensil production live",
      "Direct interviews with founder Dhruv Aggarwal and creative lead Juhi Patel on brand philosophy",
      "Visited 6 Pune stores to map customer experience touchpoints",
      "Built a moodboard deck using PowerPoint Slide Zoom for layered visual storytelling",
      "Sketched floor plans and built low-fidelity store prototypes using masking tape",
      "Completed a full store concept design challenge in under 10 minutes",
    ],
    timeline: [
      {
        phase: "Phase 1 — Exploration",
        items: [
          "Visited Stahl factory — observed production and product quality standards",
          "Interviewed Dhruv and Juhi on brand story, values, and retail positioning",
          "Walked 6 stores to see how Stahl was being presented to customers",
        ],
      },
      {
        phase: "Phase 2 — Visualisation",
        items: [
          "Built moodboard using PowerPoint Slide Zoom for cinematic layering",
          "Sketched rough store layouts by hand, experimenting with different customer flows",
        ],
      },
      {
        phase: "Phase 3 — Prototyping",
        items: [
          "Built low-fidelity store prototypes with masking tape in the office yard",
          "Completed full store concept in under 10 minutes under pressure",
          "Iterated live with team feedback",
        ],
      },
    ],
    learnings: [
      "The best retail experiences don't scream — they whisper in details",
      "Sketching rough layouts with just pen and paper is more freeing than a polished tool",
      "Ask yourself: what's the ONE feeling I want someone to leave with? Everything else follows.",
      "Constraints (like using zero old elements) often lead to the most original ideas",
    ],
    moments: [
      { moment: "Watching utensil production at the factory", why: "Realised there's precision in cookware I'd never considered" },
      { moment: "Prototyping store layouts with masking tape", why: "Ideas can come alive incredibly fast with basic tools" },
      { moment: "10-minute layout challenge", why: "Taught me how clarity shows up under pressure" },
    ],
    isHero: true,
  },
  // ── NON-HERO (timeline page only) ───────────────────────────
  {
    id: "business-xray",
    name: "Business X-Ray",
    company: "Let's Enterprise",
    duration: "Oct 2023",
    year: "2023",
    hours: "14+ hours",
    tagline: "Reading businesses before building them.",
    summary:
      "Case studies on Fergusson College, Ritviz, and family businesses — using BMC and Porter's 5 Forces to understand how things actually work.",
    overview:
      "A 2-week project focused on learning how to analyse businesses and outreach models using real-world case studies and strategic tools. Blended desk research with interviews and field visits to understand how branding, communication, and competitive positioning work in practice.",
    domain: ["Business Strategy", "Case Studies", "BMC", "Competitive Research"],
    highlights: [
      "Case study on Fergusson College — breaking down positioning and communication",
      "Designed preliminary outreach strategy for Let's Enterprise's UG-MED program",
      "Built a case study on Ritviz — branding, scale, and audience engagement",
      "Mapped family businesses of team members and did competitor analysis on each",
    ],
    timeline: [
      {
        phase: "Week 1 — Case Studies",
        items: [
          "Visited Fergusson College, observed how they communicate with students and stakeholders",
          "Studied Ritviz's brand arc — from SoundCloud to NH7",
          "Internal research on Let's Enterprise UG-MED outreach goals",
        ],
      },
      {
        phase: "Week 2 — Business Research",
        items: [
          "Identified family businesses from team members and studied using BMC and Porter's 5 Forces",
          "Interviewed one business owner to get ground-level operational context",
          "Mapped competitive threats for small businesses",
        ],
      },
    ],
    learnings: [
      "Business Model Canvas is a tool for clarity and breakdown — not just a diagram",
      "Strategy and storytelling intersect when analysing public-facing brands like Ritviz",
      "Competitive research in non-digital sectors requires field interaction, not just desk work",
    ],
    moments: [
      { moment: "Sitting with students at Fergusson College", why: "Made the research real — reminded me how outreach actually lands" },
      { moment: "Learning about a teammate's family business", why: "Opened my eyes to the effort behind small family-run operations" },
    ],
    isHero: false,
  },
  {
    id: "product-dev",
    name: "Product Development Sprint",
    company: "Let's Enterprise",
    duration: "Oct – Nov 2023",
    year: "2023",
    hours: "54+ hours",
    tagline: "Six prototypes. ₹50 budget. One final pitch to Klug Avalon.",
    summary:
      "A 2-week product design sprint — ideate, prototype, and pitch a toy concept with a ₹50-per-piece constraint.",
    overview:
      "A 2-week product sprint to explore, prototype, and pitch a working toy concept. Brainstormed and rejected 7+ directions before locking on a cryptex toy. Made 6+ rough prototypes, sourced materials from across Pune, and presented to both faculty and the founding team of Klug Avalon.",
    domain: ["Product Design", "Prototyping", "Ideation", "Pitching"],
    highlights: [
      "Built first working prototype of a toy cryptex with just two team members",
      "6+ prototypes across multiple product directions before finding the right one",
      "Sourced raw materials from across Pune — hinges, magnets, hardware stores",
      "Final piece felt premium despite a ₹50-per-unit budget",
      "Pitched to faculty and to the founders of Klug Avalon",
    ],
    timeline: [
      {
        phase: "Week 1 — Ideation",
        items: [
          "Started with cryptex prototype — small team, late nights",
          "Made 6+ low-fidelity prototypes exploring different concepts",
          "Visited hardware and craft stores across Pune for affordable materials",
        ],
      },
      {
        phase: "Week 2 — Prototyping & Pitch",
        items: [
          "Built final prototype in an intense overnight sprint",
          "Added packaging, story, and user experience layers",
          "Presented to faculty, then to Klug Avalon's founding team",
        ],
      },
    ],
    learnings: [
      "Constant pivots aren't failure — they help you dig deeper into what should be made",
      "With ₹50 per piece, every decision had to be extremely deliberate — it sharpens thinking",
      "Packaging and the first unboxing moment are as important as the product itself",
    ],
    moments: [
      { moment: "Making the first prototype with one teammate", why: "No structure, just drive — felt like building from scratch" },
      { moment: "Running around Pune for raw materials", why: "Every screw and magnet was earned — made the final piece feel real" },
      { moment: "Final overnight prototype sprint", why: "Tiring and chaotic. One of the most satisfying builds." },
    ],
    isHero: false,
  },
  {
    id: "service-design",
    name: "Service Design — Salon",
    company: "Let's Enterprise",
    duration: "Nov – Dec 2023",
    year: "2023",
    hours: "104+ hours",
    tagline: "A salon, an empathy map, and a menu that actually got put up.",
    summary:
      "Spent 2 weeks inside a working salon — observing, interviewing, mapping the experience, and proposing improvements that the owner actually implemented.",
    overview:
      "A 2-week service design project inside a real salon. Visited 12+ salons before selecting one, spent 10+ hours shadowing customers and staff, interviewed the owner, built empathy maps and a full customer journey map, proposed service improvements — including a redesigned menu that was accepted, printed, and displayed in the salon.",
    domain: ["Service Design", "Ethnographic Research", "Empathy Mapping", "Customer Journey"],
    highlights: [
      "Visited 12+ salons before selecting one for deep observation",
      "10+ hours shadowing customers and staff in the selected salon",
      "Built photo-journal, empathy map, and customer journey map",
      "Proposed a redesigned service menu — accepted by the owner and installed in the salon",
      "Presented findings to a live audience without using a PPT deck",
    ],
    timeline: [
      {
        phase: "Week 1 — Observation",
        items: [
          "Visited 12+ salons, selected one for deep work",
          "Observed customer flow, service quality, and staff behaviour",
          "Built a photo-journal tracking experience patterns",
        ],
      },
      {
        phase: "Week 2 — Research & Implementation",
        items: [
          "Interviewed owner and staff for internal context",
          "Spoke with actual customers post-service",
          "Built empathy map and customer journey map",
          "Redesigned service menu — printed and installed in the salon",
          "Presented findings live, without slides",
        ],
      },
    ],
    learnings: [
      "Sometimes people take time to open up — consistency builds trust more than charm",
      "Customer journey maps aren't just tools — they're ways to understand friction points",
      "A good idea means nothing if the owner doesn't buy into it. Learn to simplify without losing the core.",
      "Presenting without a deck forces you to stay sharp, real, and speak to the room.",
    ],
    moments: [
      { moment: "A reserved staff member finally opening up", why: "Took time, but showed me that trust builds in silence and repetition" },
      { moment: "Our idea being accepted by the owner", why: "It felt real — not a class project, but something that lived on" },
      { moment: "Putting up the final menu in the salon", why: "Tangible proof that our research led to something useful" },
    ],
    isHero: false,
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Sprint",
    company: "Let's Enterprise",
    duration: "Dec 2023 – Jan 2024",
    year: "2023",
    hours: "37+ hours",
    tagline: "2 attendees at 10AM. 15 by end of day. ₹1000 budget.",
    summary:
      "A 2-week event marketing sprint — built the funnel, ran outreach to 100+ people, hacked free automation tools, and pulled off a full event with almost no budget.",
    overview:
      "A 2-week project that tested everything — from marketing funnels to live event execution. Went from a barely-alive idea to 20 paying customers with no real budget. Built email automation with Brevo, did in-person lead collection at Koregaon Park, cold-called strangers, and decorated a 1300 sq. ft. venue in 4 hours with ₹1000.",
    domain: ["Event Marketing", "Funnel Building", "Email Automation", "Cold Outreach"],
    highlights: [
      "Built a full TOFU–MOFU–BOFU marketing funnel using free tools",
      "Walked Koregaon Park, spoke to strangers, and collected leads manually",
      "Sent messages to 100+ people — personal network and cold outreach",
      "Built email automation using Brevo and Google Forms integration",
      "Decorated a 1300 sq. ft. venue in 4 hours with ₹1000",
      "Started the day with 2 paid attendees — finished with 15",
    ],
    timeline: [
      {
        phase: "Week 1 — Funnel Setup",
        items: [
          "Learned TOFU–MOFU–BOFU marketing frameworks",
          "Set up flows using free automation tools",
          "In-person lead collection at Koregaon Park",
          "Started testing message copy and urgency-based offers",
        ],
      },
      {
        phase: "Week 2 — Outreach & Event",
        items: [
          "Built email automation with Brevo — no budget, just trial and error",
          "Sent hundreds of messages; cold-called to sell tickets",
          "Event day: started with 2 paid attendees, closed at 15",
          "Set up full event space from scratch with ₹1000",
        ],
      },
    ],
    learnings: [
      "Clarity beats cleverness in messaging — simple, direct copy converts better",
      "Urgency (limited-time deals) moves people more than features",
      "A major miscommunication almost killed the project — clarify ownership before anything else",
      "You don't need money. We pulled off a full vibe with ₹1000 and hustle.",
    ],
    moments: [
      { moment: "Only 2 paid attendees at 10AM", why: "Gut punch moment — but we didn't quit. Finished with 15. That mattered." },
      { moment: "Staying up late finding a free automation tool", why: "Felt like solving a puzzle no one had answers to — and it worked" },
    ],
    isHero: false,
  },
  {
    id: "stahl-3d-sales",
    name: "3D Product Dev & Sales",
    company: "Let's Enterprise",
    duration: "Jan 2024",
    year: "2024",
    hours: "130+ hours",
    tagline: "A product, a pitch, and a 3-week ground-up distribution sprint.",
    summary:
      "Identify a problem, find a product idea, then go sell it — across cafes, colleges, and wherever else the pitch could land.",
    overview:
      "A 3-week project focused on identifying a problem statement, finding a product solution, and then distributing it through ground-level outreach. Ran parallel to the Lit Fest outreach project — building distribution, credibility, and pitching skills simultaneously.",
    domain: ["Product Dev", "Sales", "Distribution", "Cold Pitching"],
    highlights: [
      "Created a master outreach sheet to track leads, responses, and conversions",
      "Approached 113 cafes across Pune — 61 onboarded",
      "Pitched to 11 colleges — 9 approvals",
      "Built a neighbourhood-first pitching strategy from scratch",
      "26 cafe meetings in a single day",
    ],
    timeline: [
      {
        phase: "Week 1",
        items: ["Mapped cafes by locality", "Built pitch structure and feedback capture", "Started visits across Kothrud, Shivaji Nagar, Viman Nagar"],
      },
      {
        phase: "Week 2",
        items: ["Tracked approvals in real time", "26-cafe day in Viman Nagar", "Built college outreach via warm intros and cold walk-ins"],
      },
      {
        phase: "Week 3",
        items: ["Garware College HOD asked for help on their own outreach", "Presented final model to a full panel", "Recognition for building an original, scalable model"],
      },
    ],
    learnings: [
      "After the 30th pitch, something shifts — you stop fearing rejection",
      "Treat gatekeepers the same way you'd treat decision-makers",
      "Tracking patterns in rejections helps you double down on what works",
    ],
    moments: [
      { moment: "Getting a discount at Kelly's Diner", why: "First 'yes' from a sceptical owner" },
      { moment: "26-café day + plane spotting", why: "Exhausting and brilliant — the kind of hustle I thrive in" },
    ],
    isHero: false,
  },
  {
    id: "rural-immersion",
    name: "Rural Immersion",
    company: "Let's Enterprise",
    duration: "Mar 2024",
    year: "2024",
    hours: "140+ hours",
    tagline: "Drawing a village map by hand in Wardha.",
    summary:
      "A 1-week rural immersion in Girad and Mohegaon — living with a Sarpanch's family, conducting field interviews, and hand-drawing a village map.",
    overview:
      "A 1-week rural immersion project in Wardha, Maharashtra — starting at Sevagram Ashram and moving through Girad, Faridpur, and Mohegaon villages. Lived with a Sarpanch's family, interviewed farmers, teachers, and community leaders, and created a hand-drawn village map marking schools, fields, wells, and homes.",
    domain: ["Field Research", "Community Immersion", "Qualitative Interviews", "Documentation"],
    highlights: [
      "Travelled independently from Pune to Wardha, navigating local transport",
      "Spent time at Sevagram Ashram absorbing Gandhian philosophy",
      "Detailed tour of Girad village with local resident Vishnu",
      "Lived with the Sarpanch and his family in Mohegaon",
      "Interviewed farmers, teachers, and community leaders across 3 villages",
      "Created a hand-drawn village map marking key zones and landmarks",
    ],
    timeline: [
      { phase: "Day 1–2", items: ["Arrived at Sevagram Ashram", "Group reflections on purpose of the immersion"] },
      { phase: "Day 3–5", items: ["Trekked to tekdi hill", "Village tour with Vishnu", "Observed water distribution and farming"] },
      { phase: "Day 6–7", items: ["Visited Faridpur village", "Lived in Mohegaon with Sarpanch's family", "Interviews with farmers and teachers", "Drew village map"] },
    ],
    learnings: [
      "Immersion over observation — the only way to understand a community is to live in it",
      "Everyone has a story if you slow down enough to ask",
      "Field research across language and cultural barriers requires listening first, questions second",
    ],
    moments: [
      { moment: "Drawing water from a well", why: "Small task, big symbol — self-reliance made physical" },
      { moment: "Time on the tekdi hill", why: "Peaceful, panoramic — felt connected to the land" },
      { moment: "Train ride back home", why: "Reflected on how much had changed in 7 days" },
    ],
    isHero: false,
  },
  {
    id: "travel",
    name: "Village Immersion — UP",
    company: "Let's Enterprise",
    duration: "Apr 2024",
    year: "2024",
    hours: "~100 hours",
    tagline: "6 days. One village. A farm, a campfire, and a well.",
    summary:
      "A 6-day immersion in Khajur Gaon, Uttar Pradesh — making thread knots, guarding crops overnight, and doing a local market survey in Laalganj.",
    overview:
      "A 6-day rural immersion in Khajur Gaon, Uttar Pradesh, designed to engage with the daily realities of village life. Helped with embroidery initiatives, stayed overnight on a farm guarding crops from wild animals, managed cow sheds, and conducted a local market survey in Laalganj.",
    domain: ["Field Immersion", "Community Research", "Market Survey", "Ethnography"],
    highlights: [
      "Made embroidery thread knots and bundled threads for artisans",
      "Stayed overnight on a farm to guard crops from wild animals",
      "Cleaned cow sheds and prepared fodder mixes",
      "Conducted a local market survey in Laalganj",
      "Distributed embroidery supplies to local villagers",
    ],
    timeline: [
      { phase: "Day 1–2", items: ["Arrived, settled into village rhythm", "Learned bundling and embroidery knot work"] },
      { phase: "Day 3–4", items: ["Farm chores — cow dung, fodder, daily tasks", "Overnight stay guarding crops by campfire"] },
      { phase: "Day 5", items: ["Market survey in Laalganj", "Distribution of materials to embroidery workers"] },
      { phase: "Day 6", items: ["Final observation and journaling", "Reflection on key themes: attention, initiative, critical thinking"] },
    ],
    learnings: [
      "Stop assuming and start asking intentional questions — clarity upfront avoids poor execution",
      "Observation is a conscious act — once you notice it, you can't stop",
      "Even hard situations can spark ideas — if you stay alert to what's possible",
    ],
    moments: [
      { moment: "Sleeping on a farm under the stars", why: "Surreal, tough, and full of real-time problem-solving" },
      { moment: "Making thread knots with locals", why: "A meditative task that grounded me in their rhythm of work" },
    ],
    isHero: false,
  },
];

// Quick access for homepage hero section
export const HERO_PROJECTS = ALL_PROJECTS.filter((p) => p.isHero);

// ─── HOW I THINK ─────────────────────────────────────────────────────────────

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Build the system, not just the output.",
    body: "Every deliverable I produce includes a process: an SOP, a database, a template, a handoff doc. The goal is always a repeatable machine — not a one-time result.",
  },
  {
    number: "02",
    title: "Volume creates signal.",
    body: "228 cold outreaches. 113 cafes. 73 interviews. I run high-volume experiments not because quantity beats quality — but because volume generates the real-world data you need to know what's actually working.",
  },
  {
    number: "03",
    title: "Go on-ground before going to the slide.",
    body: "A store owner in Pune who says 'people buy Hawkins because they've seen it for 30 years' — that single line rewires how you think about legacy and premium. Go talk to people first.",
  },
  {
    number: "04",
    title: "Narrative is infrastructure.",
    body: "From Amazon PDPs to cold email templates to boardroom decks — how you tell the story determines what decisions get made. Build messaging with the same rigour as the product.",
  },
  {
    number: "05",
    title: "Own it end-to-end.",
    body: "Strategy without execution is a hypothesis. Execution without strategy is noise. I take projects from the problem statement to the handoff doc — every step in between.",
  },
  {
    number: "06",
    title: "Context → Insight → Action.",
    body: "This is the format I use for every research output: what's the situation, what did I observe, what does it mean, what evidence backs it, what should we do. Data without direction is trivia.",
  },
];

// ─── WRITING ─────────────────────────────────────────────────────────────────

export type Essay = {
  title: string;
  publication: string;
  url: string;
  note: string;
};

export const ESSAYS: Essay[] = [
  {
    title: "Playing With Freedom — Unfiltered Discoveries of a 20-Year-Old",
    publication: "Conflexions",
    url: "https://letsenterprise.in/what-the-fck-do-i-do-now/",
    note: "On learning to operate without a fixed script.",
  },
  {
    title: "Designing the Room, Not the Candle",
    publication: "Conflexions",
    url: "https://letsenterprise.in/designing-the-room-not-the-candle/",
    note: "On environments, context, and how they shape everything.",
  },
  {
    title: "Crossing Over.",
    publication: "Conflexions",
    url: "https://letsenterprise.in/crossing-over/",
    note: "On thresholds — professional, personal, psychological.",
  },
  {
    title: "'Don't Give Up' Is Bad Advice",
    publication: "Medium",
    url: "https://medium.com/@escapingaverage/dont-give-up-is-bad-advice-here-s-why-c32a0ff7d5b9",
    note: "On knowing when quitting is the sharper move.",
  },
  {
    title: "Dis-traction: Why We're Missing the Point About Focus",
    publication: "Medium",
    url: "https://medium.com/@escapingaverage/dis-traction-why-were-missing-the-point-about-focus-in-the-digital-age-2c18522babbe",
    note: "On attention, digital overload, and what focus actually demands.",
  },
  {
    title: "Understanding My Irrational Self-Critic",
    publication: "Conflexions",
    url: "https://letsenterprise.in/understanding-my-irrational-self-critic/",
    note: "On the inner voice and learning to stop obeying it.",
  },
];
