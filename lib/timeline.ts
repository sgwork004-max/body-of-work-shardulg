export type TimelineEvent = {
  date: string;
  title: string;
  metric?: string;
  note?: string;
  tag: string;
  major?: boolean;
};

export type TimelineYear = {
  year: string;
  events: TimelineEvent[];
};

export const TIMELINE: TimelineYear[] = [
  {
    year: "2023",
    events: [
      {
        date: "Aug 2023",
        title: "Let's Enterprise — Day One",
        note: "No lectures. No assignments. Just show up to a real company and figure it out. Had to learn what \"work\" meant before doing any of it.",
        tag: "School",
      },
      {
        date: "Aug–Sep 2023",
        title: "Startup Sprint",
        metric: "Lemonade on MG Road. Brownies in KP. 4AM at Market Yard.",
        note: "Three business ideas in three weeks. Set up stalls, built a fruit box venture, sourced at Market Yard before sunrise. First time money felt real.",
        tag: "Entrepreneurship",
        major: true,
      },
      {
        date: "Oct 2023",
        title: "Business X-Ray",
        note: "Case studies on Fergusson College, Ritviz, and family businesses. First time I used BMC and Porter's Five Forces on something real.",
        tag: "Strategy",
      },
      {
        date: "Oct–Nov 2023",
        title: "Product Dev Sprint",
        metric: "6 prototypes. ₹50 per unit. Pitched to Klug Avalon.",
        note: "Built a toy cryptex with one teammate, late nights, hardware stores across Pune. The final piece felt premium despite an impossible budget.",
        tag: "Product",
        major: true,
      },
      {
        date: "Nov–Dec 2023",
        title: "Service Design — Salon",
        metric: "The menu we redesigned is still up on the wall.",
        note: "Visited 12 salons, shadowed customers for 10+ hours, built an empathy map. Proposed a redesigned service menu. The owner accepted and installed it.",
        tag: "Service Design",
        major: true,
      },
      {
        date: "Dec 2023",
        title: "Event Marketing Sprint",
        metric: "2 tickets at 10AM. 15 by the end of the day.",
        note: "Built a full TOFU–MOFU–BOFU funnel with ₹1000 and free tools. Decorated a 1300 sq.ft. venue in 4 hours. The event almost didn't happen.",
        tag: "Marketing",
        major: true,
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "Jan 2024",
        title: "History Lit Fest — Ground Outreach",
        metric: "113 cafes · 9 colleges · 26 meetings in one day.",
        note: "Built a full distribution network from zero. Garware College's HOD asked us to replicate the model for their own fest.",
        tag: "Sales",
        major: true,
      },
      {
        date: "Mar 2024",
        title: "Stahl Retail Design",
        metric: "Factory floor to masking-tape store prototype — in one sprint.",
        note: "Visited the Stahl factory in Pirangut, walked 6 Pune stores, and prototyped a full store layout using masking tape in the office yard. Direct collaboration with founder Dhruv Aggarwal.",
        tag: "Design",
        major: true,
      },
      {
        date: "Mar 2024",
        title: "Rural Immersion — Wardha, Maharashtra",
        metric: "Sevagram Ashram. 3 villages. A hand-drawn village map.",
        note: "Lived with a Sarpanch's family in Mohegaon. Drew water from a well. Mapped schools, fields, and homes by hand. Interviewed farmers, teachers, and community leaders.",
        tag: "Field Research",
        major: true,
      },
      {
        date: "Apr 2024",
        title: "Village Immersion — Khajur Gaon, UP",
        metric: "6 days. Slept on a farm. Guarded crops overnight.",
        note: "Made embroidery thread knots with artisans, cleaned cow sheds, conducted a local market survey in Laalganj. Sat by a campfire under the stars.",
        tag: "Field Research",
        major: true,
      },
      {
        date: "May–Jul 2024",
        title: "Hide & Sneak — Sales & Brand",
        metric: "₹6 lakhs in sales. Biggest deal: ₹48,400.",
        note: "432 hours on the floor of a premium sneaker boutique. 50+ deals closed. 50+ Instagram stories and 7 reels created and published. Learned that sales isn't convincing — it's helping someone figure out what they want.",
        tag: "Retail · Sales",
        major: true,
      },
      {
        date: "Aug–Oct 2024",
        title: "KOEL Research Initiative — Kirloskar Oil Engines",
        metric: "73 interviews · 5 cities · 1 boardroom presentation to the MD.",
        note: "Won the internal bid, conducted fieldwork across Maharashtra, synthesised 1000+ data points. Presented GTM insights to MD Gauri Kirloskar. Cake-cutting after.",
        tag: "Research · GTM",
        major: true,
      },
      {
        date: "Nov 2024",
        title: "Joined YelloSKYE — Founder's Office Intern",
        note: "Drone survey startup. Open-ended scope — no lane, no single brief. Strategy through execution, all at once.",
        tag: "Founder's Office",
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        date: "Dec 2024–Jan 2025",
        title: "MIS Automation @ YelloSKYE",
        metric: "Ops pipeline hits the founder's inbox at 18:30, every day. No manual work.",
        note: "Built the Daily Ops Tracker in Google Sheets and automated the founder's MIS briefing via Google Apps Script. Making invisible things visible changes what people fix.",
        tag: "Ops · Automation",
        major: true,
      },
      {
        date: "Jan–Mar 2025",
        title: "Therefore Design — BD Apprentice",
        metric: "200+ reach-outs · 328 hours · 9 weeks.",
        note: "Built outreach infrastructure, credential decks for real clients, and a CRM proposal from scratch inside a live strategy consultancy. Attended 12+ meetings in Week 1.",
        tag: "Business Development",
        major: true,
      },
      {
        date: "Mar 2025",
        title: "1st Runner-Up — FLAME Blaze Hackathon",
        tag: "Recognition",
        major: true,
      },
      {
        date: "May 2025–Present",
        title: "Rayden Design Studio — Business Development",
        metric: "228 outreaches · 34+ replies · 20+ meetings.",
        note: "Built the BD function from zero for a premium design studio targeting hospitality brands. ICP, database, cold email, pitch decks, and a handover SOP.",
        tag: "Business Development",
        major: true,
      },
      {
        date: "Nov 2024–Present",
        title: "YelloSKYE — Brand, Website, Hiring, DEX Launch",
        metric: "80+ candidates screened · 3 hired · First inbound lead via LinkedIn.",
        note: "Brand Messaging Framework built from customer interviews. Website rebuilt end-to-end (5+ iterations). DEX 3.0 launched. SEO audited against DroneDeploy.",
        tag: "Brand · Content · Hiring",
        major: true,
      },
      {
        date: "Aug–Oct 2025",
        title: "Stahl — 5 Weeks, 5 Domains",
        metric: "Customer research → brand storytelling → legal → CLV mapping.",
        note: "Each week a completely different problem type. Retail research, Amazon PDPs, a Flipkart legal risk assessment, and CLV heatmaps identifying underserved micro-markets.",
        tag: "Strategy · Brand",
        major: true,
      },
    ],
  },
  {
    year: "2026",
    events: [
      {
        date: "Jun 2026",
        title: "Graduation — BBA · Let's Enterprise",
        metric: "Three years. Nine companies. Everything figured out.",
        note: "This is what the work looks like.",
        tag: "Milestone",
        major: true,
      },
    ],
  },
];
