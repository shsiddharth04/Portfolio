import { 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Linkedin 
} from 'lucide-react';
import { ProjectItem, ServiceItem, SkillCategory, SocialLink, ThinkingProcessStep, ArchiveProjectItem } from './types';

export const HERO_DATA = {
  name: "Siddharth Sharma",
  title: "Business & Technology · Product & Platform Builder",
  headline: "Turning complex business problems into scalable products",
  subheadline: "I build platforms, systems, and workflows at the intersection of business thinking, no-code, and AI — with a strong bias toward execution.",
  ctaPrimary: "View Selected Work",
  ctaSecondary: "Download Resume",
  resumeLink: "https://drive.google.com/file/d/1CoO6oQku7Km6M8iSWHqQ_HPX3enzan86/view?usp=sharing"
};

export const CONTACT_INFO: SocialLink[] = [
  {
    label: "Email",
    value: "ylc27siddharth.sharma@mastersunion.org",
    href: "mailto:ylc27siddharth.sharma@mastersunion.org",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/siddharthsharm04/", 
    icon: Linkedin,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Product & Platform Building",
    description: "I take ideas from zero to MVP, owning product decisions, user flows, and validation end-to-end.",
    icon: Briefcase,
  },
  {
    title: "No-Code, Automation & AI",
    description: "I use no-code tools and AI workflows to build fast, iterate intelligently, and avoid unnecessary complexity.",
    icon: Cpu,
  },
  {
    title: "Decision-Making & Markets",
    description: "My trading experience has shaped how I think about risk, structure, and disciplined execution.",
    icon: TrendingUp,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Blue Lotus Value Tradelink",
    type: "B2B SaaS Platform",
    role: "Co-Founder & Director",
    description: "A B2B SaaS platform focused on smart raw-material inventory management and sub-MOQ procurement for manufacturers.",
    highlights: [
      "Led product design and tech strategy",
      "Built and launched MVP within 2 months",
      "Engaged manufacturing CXOs for validation",
      "Secured onboarding commitments from 15 companies"
    ],
    isPrimary: true,
    images: [
      "https://lh3.googleusercontent.com/d/1p7zLjQcngmA3R9EVZRf6cePZ4JrlNC3b",
      "https://lh3.googleusercontent.com/d/1h0vMt8IiuDuHlVzbfoDFY6EHnuWljmyO",
      "https://lh3.googleusercontent.com/d/1mHdnQuo9Xk6gr2HA3y1HALgIqDlmn8oz"
    ],
    caseStudy: [
      {
        id: "context",
        stepName: "Context",
        headline: "Solving excess raw-material inefficiency",
        subline: "Manufacturers were stuck with surplus, while buyers were blocked by high MOQs.",
        visual: {
          type: "diagram",
          data: {
            layout: "bottleneck",
            items: ["Manufacturers (Surplus)", "High MOQs", "Buyers (Blocked)"]
          }
        }
      },
      {
        id: "constraints",
        stepName: "Constraints",
        headline: "Speed mattered more than scale",
        subline: "We had to prove trust and utility before running out of runway.",
        visual: {
          type: "cards",
          data: ["Time-to-market pressure", "Trust gap (Buyer/Seller)", "Early-stage resources"]
        }
      },
      {
        id: "decision",
        stepName: "Key Decision",
        headline: "Validate demand before building infrastructure",
        subline: "We chose a lean workflow over a complex automated platform initially.",
        visual: {
          type: "decision",
          data: {
            // Updated to support 3-path visual: 1 chosen, 2 rejected
            options: [
              { label: "Heavy Custom Development", selected: false },
              { label: "Lean MVP + CXO Validation", selected: true },
              { label: "Traditional Agency Model", selected: false }
            ]
          }
        }
      },
      {
        id: "execution",
        stepName: "Execution Snapshot",
        headline: "From idea to MVP in 8 weeks",
        subline: "A rapid cycle of discovery, building, and direct outreach.",
        visual: {
          type: "timeline",
          data: ["Discovery Phase", "MVP Build", "CXO Outreach", "Iteration"]
        }
      },
      {
        id: "outcome",
        stepName: "Outcome & Learning",
        headline: "Validation before scale",
        subline: "Direct engagement proved the model worked.",
        visual: {
          type: "metrics",
          data: [
            { label: "Onboarded", value: "15 Companies" },
            { label: "Feedback", value: "CXO Validated" }
          ]
        }
      }
    ]
  },
  {
    title: "GigCulture (BookMyBeat)",
    type: "Marketplace Platform",
    role: "Founder / Product Builder",
    description: "Designed and built an artist booking platform enabling event hosts to discover and book artists, while helping artists access structured gig opportunities.",
    highlights: [
      "Built using no-code tools and AI-assisted workflows",
      "Designed end-to-end user journeys",
      "Core platform flows and UI completed"
    ],
    isPrimary: false,
    images: [
      "https://lh3.googleusercontent.com/d/18Trh8pehJcl-8aVMhR4FmPXfo7fvrFib",
      "https://lh3.googleusercontent.com/d/15qnA9OgjWFqp7CWBPpjJt42wHeeB9P7Z"
    ],
    caseStudy: [
      {
        id: "context",
        stepName: "Context",
        headline: "Artist booking was fragmented and informal",
        subline: "Reliant on chaotic DMs, phone calls, and spreadsheets.",
        visual: {
          type: "diagram",
          data: {
            layout: "chaos-to-order",
            items: ["DMs & Calls", "Spreadsheets", "Platform Hub"]
          }
        }
      },
      {
        id: "constraints",
        stepName: "Constraints",
        headline: "No engineering team, limited time",
        subline: "Had to build a complex two-sided marketplace solo.",
        visual: {
          type: "cards",
          data: ["Solo Founder Build", "No-code Constraint", "Supply Uncertainty"]
        }
      },
      {
        id: "decision",
        stepName: "Key Decision",
        headline: "Build workflows, not a perfect platform",
        subline: "Focus on the core transaction loop first.",
        visual: {
          type: "list",
          data: ["Artist Onboarding Flow", "Booking Logic Engine", "Admin Control Panel"]
        }
      },
      {
        id: "execution",
        stepName: "Execution Snapshot",
        headline: "Rapid iteration using no-code and AI",
        subline: "Leveraged tools to ship features that usually take months.",
        visual: {
          type: "image",
          data: "https://lh3.googleusercontent.com/d/18Trh8pehJcl-8aVMhR4FmPXfo7fvrFib"
        }
      },
      {
        id: "outcome",
        stepName: "Outcome & Learning",
        headline: "Execution reveals real friction",
        subline: "Getting the product in hands revealed the true bottlenecks.",
        visual: {
          type: "metrics",
          data: [
            { label: "Status", value: "MVP Built" },
            { label: "Completion", value: "Core Flows Done" }
          ]
        }
      }
    ]
  },
  {
    title: "Funding Pips",
    type: "Funded Trading Experience",
    role: "Funded Forex Trader",
    description: "Managed a funded trading account using disciplined risk management, liquidity-based strategies, and structured market analysis.",
    highlights: [
      "Passed multi-stage evaluation",
      "Achieved consistent profitability and payouts"
    ],
    isPrimary: false,
    images: [
      "https://lh3.googleusercontent.com/d/1myYq9m5Dt-4VzhwAhtmSyW6GfCTrHQXl",
      "https://lh3.googleusercontent.com/d/1QYeEGQWc2q7OabQYOo5sYO1HoBQcJtzp"
    ],
    caseStudy: [
      {
        id: "context",
        stepName: "Context",
        headline: "Trading under strict capital rules",
        subline: "Managing downside risk while seeking consistent upside.",
        visual: {
          type: "chart",
          data: { type: "drawdown-curve" }
        }
      },
      {
        id: "constraints",
        stepName: "Constraints",
        headline: "Rules defined every decision",
        subline: "Violating any parameter meant instant disqualification.",
        visual: {
          type: "cards",
          data: ["Max Daily Drawdown", "Profit Targets", "Time Limits"]
        }
      },
      {
        id: "decision",
        stepName: "Key Decision",
        headline: "Risk-first execution",
        subline: "Protect capital first, grow capital second.",
        visual: {
          type: "list",
          data: ["Fixed Risk % per Trade", "Liquidity Entries", "No Revenge Trading"]
        }
      },
      {
        id: "execution",
        stepName: "Execution Snapshot",
        headline: "Process over emotion",
        subline: "Adhering to the strategy regardless of market noise.",
        visual: {
          type: "image",
          data: "https://lh3.googleusercontent.com/d/1QYeEGQWc2q7OabQYOo5sYO1HoBQcJtzp"
        }
      },
      {
        id: "outcome",
        stepName: "Outcome & Learning",
        headline: "Consistency wins",
        subline: "Disciplined execution leads to funded status.",
        visual: {
          type: "image",
          data: "https://lh3.googleusercontent.com/d/1myYq9m5Dt-4VzhwAhtmSyW6GfCTrHQXl"
        }
      }
    ]
  },
];

export const OTHER_PROJECTS: ArchiveProjectItem[] = [
  {
    project: "Carpooling Applications in India",
    category: "Market Research",
    timeframe: "2023",
    description: "Analyzed the viability of ride-sharing models in Indian metros, identifying regulatory bottlenecks and user adoption patterns."
  },
  {
    project: "Nurture Nest",
    category: "E-commerce / Dropshipping",
    timeframe: "2022",
    description: "Built and operated a niche dropshipping store for infant care products, utilizing targeted social advertising and supply chain optimization."
  },
  {
    project: "Fitness Delusions",
    category: "Wellness & Research Blog",
    timeframe: "2021",
    description: "A content platform deconstructing fitness myths through evidence-based research and clear scientific communication."
  }
];

export const ABOUT_TEXT_1 = "I operate at the intersection of business strategy and technical execution. My work is grounded in the belief that complex problems don't always need complex code—they need clear thinking, structured systems, and the right leverage. Whether it's building a B2B SaaS from scratch or automating internal workflows, I focus on velocity and value.";

export const ABOUT_TEXT_2 = "I am a builder who prefers shipping to theorizing. With a background in trading and product development, I approach every project with a risk-reward mindset: de-risking assumptions early and scaling what works. I don't just design interfaces; I engineer outcomes.";

export const SKILLS: SkillCategory[] = [
  {
    category: "Product & Strategy",
    skills: ["MVP Development", "GTM Strategy", "User Journey Mapping", "Product Roadmap", "Stakeholder Management"],
  },
  {
    category: "No-Code Development",
    skills: ["Bubble.io", "FlutterFlow", "Airtable", "Zapier/Make", "Webflow"],
  },
  {
    category: "AI & Automation",
    skills: ["LLM Prompting", "Workflow Automation", "AI Integration", "Process Optimization"],
  },
  {
    category: "Market Analysis",
    skills: ["Risk Management", "Technical Analysis", "Liquidity Strategy", "Financial Modeling"],
  },
];

export const THINKING_PROCESS: ThinkingProcessStep[] = [
  {
    id: "framing",
    label: "Framing",
    description: "Before writing code or designing screens, I deconstruct the core problem. I ask: Are we solving a symptom or a root cause?",
    exampleContext: "In Blue Lotus",
    exampleText: "We realized manufacturers didn't just need inventory software; they needed liquidity. The problem wasn't tracking stock, it was optimizing cash flow via sub-MOQ procurement."
  },
  {
    id: "assumptions",
    label: "Assumptions",
    description: "I explicitly list every implicit belief we hold about the user or market, then prioritize them by risk intensity.",
    exampleContext: "In GigCulture",
    exampleText: "We assumed artists wanted more gigs. Research showed they actually wanted *structured* gigs with guaranteed payments, shifting our focus from quantity to security."
  },
  {
    id: "constraints",
    label: "Constraints",
    description: "I view constraints (time, budget, tech) as design tools, not blockers. They force clarity and prevent scope creep.",
    exampleContext: "MVP Strategy",
    exampleText: "With a 2-month runway for Blue Lotus, we intentionally bypassed custom code for the backend, using Airtable and no-code tools to validate the market before funding ran out."
  },
  {
    id: "framework",
    label: "Decision",
    description: "I use asymmetric risk/reward frameworks to make decisions. I look for low-cost, high-leverage actions.",
    exampleContext: "Trading Psychology",
    exampleText: "In Forex markets, I only execute setups where the potential upside is at least 3x the defined risk. I apply this same 'stop-loss' logic to product features that aren't performing."
  },
  {
    id: "execution",
    label: "Execution",
    description: "Speed is a feature. I prioritize shipping functional value over polishing unused features.",
    exampleContext: "Build Velocity",
    exampleText: "By leveraging AI-assisted coding and no-code platforms, I reduced the development cycle for the GigCulture MVP by 60%, allowing for three rapid iteration cycles in one month."
  },
  {
    id: "feedback",
    label: "Feedback",
    description: "The system is never finished. I use quantitative data and qualitative interviews to calibrate the next loop.",
    exampleContext: "Validation",
    exampleText: "For Blue Lotus, we didn't just track signups; we sat with 15 CXOs to watch them use the tool, uncovering friction points that analytics missed."
  }
];