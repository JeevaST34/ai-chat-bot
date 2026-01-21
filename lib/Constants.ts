import { BarChart3, Box, Briefcase, ClipboardList, Database, FileText, Globe, Headphones, MessageSquare, Phone, Smile, Star, Tag, Ticket, Trophy, Users, Workflow,MapPin } from "lucide-react";

export const brands = [
  {
    name: "Motilal Oswal",
    logo: "/images/marquee/adobe-xd-logo-svgrepo-com.svg",
    category: "Finance",
  },
  {
    name: "IIFL",
    logo: "/images/marquee/bmw-logo-svgrepo-com.svg",
    category: "Finance",
  },
  {
    name: "JM Financial",
    logo: "/images/marquee/byte-records-29744-logo-svgrepo-com.svg",
    category: "Finance",
  },
  {
    name: "Reliance",
    logo: "/images/marquee/facebook-icon-white-logo-svgrepo-com.svg",
    category: "Healthcare",
  },
  {
    name: "Chola MS",
    logo: "/images/marquee/forbes-logo-svgrepo-com.svg",
    category: "Healthcare",
  },
  {
    name: "upGrad",
    logo: "/images/marquee/google-icon-logo-svgrepo-com.svg",
    category: "Education",
  },
  {
    name: "FLAME",
    logo: "/images/marquee/mcdonald-s-15-logo-svgrepo-com.svg",
    category: "Education",
  },
  {
    name: "Uniathena",
    logo: "/images/marquee/slack-logo-svgrepo-com.svg",
    category: "Education",
  },
  {
    name: "Retail Brand",
    logo: "/images/marquee/snapchat-logo-svgrepo-com.svg",
    category: "Retail",
  },
  {
    name: "Auto Brand",
    logo: "/images/marquee/soundcloud-logo-svgrepo-com.svg",
    category: "Automotive",
  },
];


 export  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      highlights: [],
      features: [
        "AI Chatbot + Autoreply",
        "Basic Workflow Automation",
        "1 seat",
        "200 conversations/month",
      ],
      button: "Sign up free",
      highlighted: false,
    },
    {
      name: "Starter",
      price: { monthly: 39, yearly: 29 },
      features: [
        "Everything in Free",
        "Live Chat + Helpdesk",
        "5 seats",
        "5,000 conversations/month",
      ],
      button: "Get Started",
      highlighted: false,
    },
    {
      name: "Team",
      price: { monthly: 89, yearly: 69 },
      features: [
        "Everything in Starter",
        "Smart Ticketing + Mailbox",
        "Teams & Roles",
        "15 seats",
        "15,000 conversations/month",
      ],
      tag: "Most Popular",
      highlighted: true,
    },
    {
      name: "Business",
      price: { monthly: 249, yearly: 199 },
      features: [
        "Everything in Team",
        "Bot for multiple brands",
        "White-label options",
        "Unlimited seats",
        "60,000 conversations/month",
      ],
      button: "Start Now",
      highlighted: false,
    },
  ];

  export const otherFeatures = [
  {
    title: "Emotion & Intent Detection",
    icon: Smile,
    gradient: "bg-[#FEF3C7]",
    iconBg: "bg-orange-400",
    image: "/images/features/card-1.png",
  },
  {
    title: "AI-Curated Lead Forms",
    icon: FileText,
    gradient: "bg-[#DCFCE7]",
    iconBg: "bg-green-500",
    image: "/images/features/card-2.png",
  },
  {
    title: "Custom Chat Flows",
    icon: Workflow,
    gradient: "bg-[#E0E7FF]",
    iconBg: "bg-indigo-600",
    image: "/images/features/card-3.png",
    dark: true,
  },
  {
    title: "Track Team Activity",
    icon: BarChart3,
    gradient: "bg-[#EDE9FE]",
    iconBg: "bg-purple-500",
    image: "/images/features/card-4.png",
  },
  {
    title: "CSAT Report",
    icon: ClipboardList,
    gradient: "bg-[#DCFCE7]",
    iconBg: "bg-green-500",
    image: "/images/features/card-5.png",
  },
  {
    title: "Auto Collect Feedback",
    icon: Star,
    gradient: "bg-[#EDE9FE]",
    iconBg: "bg-purple-500",
    image: "/images/features/card-6.png",
  },
  {
    title: "Collect Phone/Email",
    icon: Phone,
    gradient: "bg-[#FCE7F3]",
    iconBg: "bg-pink-400",
    image: "/images/features/card-7.png",
  },
  {
    title: "Auto-tagging by AI",
    icon: Tag,
    gradient: "bg-[#EDE9FE]",
    iconBg: "bg-purple-500",
    image: "/images/features/card-8.png",
  },
];


export const features = [
  {
    title: "Resolve issues faster",
    description:
      "Resolve customer queries faster with AI Chatbots that are trained on your data and can understand customer intent.",
    image: "/images/articles/article-1.png",
    btnText: "Start Free Trial",
    reverse: true,
  },
  {
    title: "Generate more leads with 24/7 engagement",
    description:
      "Capture more leads and generate more revenue with AI Chatbots that engage visitors 24/7 and qualify buying intent.",
    image: "/images/articles/article-2.png",
    btnText: "Start Free Trial",
    
  },
];



export const TestimonialItems = [
  {
    type: "image",
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    label: "Emma",
  },
  {
    type: "text",
    name: "Edoardo Moreni",
    company: "Emma",
    text: "We chose AI Chatbot from the beginning because of its flexibility and level of automations it allowed.",
  },
  {
    type: "text",
    rating: true,
    text: "AI Chatbot is probably one of my favorite part of my business. It's just so good.",
  },
  {
    type: "text",
    quote: true,
    text: "We really enjoy being able to play with the possibility of the API, so much that it has become a mini-backoffice for us.",
  },
  {
    type: "image",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    label: "Reedsy",
  },
  {
    type: "text",
    rating: true,
    text: "Evaluated over 20 products, and Crisp came out on top.",
  },
  {
    type: "text",
    name: "Chris Sees",
    company: "Hoxton Mix",
    text: "AI Chatbot has been amazing and the first thing that really attracted me was the size of the chat widget.",
  },
  {
    type: "image",
    img: "https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg",
    label: "Hoxton Mix",
  },
  {
    type: "text",
    name: "Emmanuel Nataf",
    company: "Reedsy",
    text: "AI Chatbot has become a central asset for Reedsy, empowering the team to provide fast, personalized responses and better customer support through AI-powered solutions.",
  },
];

export const stats = [
  {
    value: "50K",
    label: "Documents Processed",
    change: "+24% this month",
    changeColor: "text-green-500",
    icon: "⚡",
    bg: "bg-gradient-to-br from-blue-50 to-white",
  },
  {
    value: "98.6%",
    label: "AI Accuracy Rate",
    sublabel: "Premium Performance",
    subColor: "text-purple-600",
    bg: "bg-gradient-to-br from-purple-50 to-white",
  },
  {
    value: "2.4s",
    label: "Average Query Time",
    change: "0.3s faster",
    changeColor: "text-green-500",
    icon: "⚡",
    bg: "bg-gradient-to-br from-green-50 to-white",
  },
  {
    value: "256TB",
    label: "Knowledge Database",
    change: "+12% growth",
    changeColor: "text-orange-500",
    icon: "📈",
    bg: "bg-gradient-to-br from-orange-50 to-white",
  },
];


export const benefits = [
  {
    icon: "🧠",
    title: "24/7 Availability",
    desc: "Your support never sleeps, enhancing customer satisfaction.",
  },
  {
    icon: "❓",
    title: "Scalable Support",
    desc: "Handle more inquiries without proportionally increasing staff.",
  },
  {
    icon: "📚",
    title: "Consistent Quality",
    desc: "AI ensures uniform responses aligned with your brand voice.",
  },
  {
    icon: "💡",
    title: "Reduced Response Times",
    desc: "Immediate answers for common queries, faster ticket creation for complex issues.",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights:",
    desc: "Gain valuable insights from AI-customer interactions to improve your support strategy.",
  },
];
export const versions = [
  {
    icon: "🔒",
    title: "Latest Version",
    desc: "Enhanced security features • Improved indexing algorithm",
    time: "Now",
  },
  {
    icon: "📦",
    title: "Previous Version",
    desc: "Multi-modal AI integration • Cross-platform synchronization",
    time: "2 hours ago",
  },
  {
    icon: "🗂️",
    title: "Archived Version",
    desc: "Semantic search enhancement • Performance optimization",
    time: "1 day ago",
  },
];


export const primaryFeatures = [
  {
    title: "AI Auto-Reply",
    description:
      "Provide 24/7 support in multiple languages and respond to your customers under 10 seconds.",
    icon: MessageSquare,
    iconBg: "bg-green-500",
    cardBg: "bg-green-50",
    previewBg: "bg-green-100",
    accent: "green",
  },
  {
    title: "Helpdesk",
    description:
      "Easily manage a large support team with flexible chat assignment methods and track performance with CSAT reports.",
    icon: Headphones,
    iconBg: "bg-indigo-600",
    cardBg: "bg-indigo-50",
    previewBg: "bg-indigo-100",
    accent: "indigo",
  },
  {
    title: "Ticket Management",
    description:
      "Keep support organized, efficient and stress-free for your team and customers.",
    icon: Ticket,
    iconBg: "bg-sky-500",
    cardBg: "bg-sky-50",
    previewBg: "bg-sky-100",
    accent: "sky",
  },
];

export const journeyStats = [
  {
    value: "8+",
    label: "years in the conversational AI space",
    bg: "bg-green-50",
    border: "border-green-300",
    icon: "🌱",
  },
  {
    value: "800+",
    label: "global brands have worked with us",
    bg: "bg-pink-50",
    border: "border-pink-300",
    icon: "🤝",
  },
  {
    value: "60M+",
    label: "customer conversations automated",
    bg: "bg-blue-50",
    border: "border-blue-300",
    icon: "💬",
  },
  {
    value: "10+",
    label: "countries with deployed AI Agents",
    bg: "bg-purple-50",
    border: "border-purple-300",
    icon: "🌐",
  },
];

export const VendorComparisonFeatures = [
  {
    name: "Internal data ingestion",
    values: [1, 1, 1, 1, 0, 1],
  },
  {
    name: "AI Copilot",
    values: [1, 1, 0, 1, 0, 1],
  },
  {
    name: "Dynamic Pricing",
    values: [1, 1, 1, 0, 0, 1],
  },
  {
    name: "EU-Hosted",
    values: [0, 0, 0, 0, 0, 1],
  },
  {
    name: "AI Writing assistant",
    values: [0, 1, 0, 1, 1, 1],
  },
  {
    name: "AI Agent & MCP",
    values: [1, 0, 1, 1, 0, 1],
  },
];

export  const integrations = [
    {
      icon: "/images/integration/zapier.png",
      title: "Zapier",
      desc: "Connect Landbot with 4000+ apps and automate workflows.",
    },
    {
      icon: "/images/integration/webflow.png",
      title: "Webflow",
      desc: "Integrate your chatbot in a Webflow website.",
    },
    {
      icon: "/images/integration/wordpress.png",
      title: "WordPress",
      desc: "Integrate your chatbot in a WordPress website.",
    },
    {
      icon: "/images/integration/stripe.png",
      title: "Stripe",
      desc: "Process transactions inside your chatbot conversations.",
    },
    {
      icon: "/images/integration/slack.png",
      title: "Slack",
      desc: "Send Slack notifications from your chatbots.",
    },
    {
      icon: "/images/integration/shopify.png",
      title: "Shopify",
      desc: "Integrate your chatbot in a Shopify website.",
    },
    {
      icon: "/images/integration/calendly.png",
      title: "Calendly",
      desc: "Book meetings through your chatbots.",
    },
    {
      icon: "/images/integration/segment.png",
      title: "Segment",
      desc: "Track users & events inside your chatbots.",
    },
    {
      icon: "/images/integration/sendgrid.png",
      title: "SendGrid",
      desc: "Send emails directly from your chatbots.",
    },
    {
      icon: "/images/integration/dialogflow.png",
      title: "Dialogflow",
      desc: "Build sophisticated chatbots using NLP.",
    },
    {
      icon: "/images/integration/googlesheets.png",
      title: "Google Sheets",
      desc: "Add, update, and retrieve data during conversations.",
    },
    {
      icon: "/images/integration/hubspot.png",
      title: "HubSpot",
      desc: "Add, update, and get HubSpot data during conversations.",
    },
    {
      icon: "/images/integration/mailchimp.png",
      title: "Mailchimp",
      desc: "Collect and send user data to Mailchimp in real-time.",
    },
    {
      icon: "/images/integration/airtable.png",
      title: "Airtable",
      desc: "Add, update, and retrieve data during conversations.",
    },
    {
      icon: "/images/integration/carrd.png",
      title: "Carrd",
      desc: "Integrate your chatbot in a Carrd website.",
    },
    {
      icon: "/images/integration/n8n.png",
      title: "n8n",
      desc: "Connect 500+ integrations to power any Workflow.",
    },
  ];


  export const faqs = [
    {
      question: "What is AI Chatbot and how does it work?",
      answer:
        "AI Chatbot is an advanced AI chatbot builder that allows you to train intelligent agents using your website content, files, and documentation. It leverages natural language processing to understand user queries and provide accurate, context-aware responses in real-time. The platform automates customer conversations, provides instant support, and integrates seamlessly into your workflow.",
    },
    {
      question: "Does AI Chatbot support multiple languages?",
      answer:
        "Yes, AI Chatbot supports multiple languages, allowing you to engage with users globally and provide localized support experiences.",
    },
    {
      question: "Do I need coding skills to use AI Chatbot?",
      answer:
        "No coding skills are required. AI Chatbot is designed with a user-friendly interface so anyone can set it up and manage it easily.",
    },
    {
      question: "How do I embed the chatbot into my website?",
      answer:
        "You can embed the chatbot by copying a simple script or iframe provided in your dashboard and pasting it into your website’s HTML.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial so you can explore all features before choosing a plan.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support, live chat, and comprehensive documentation to help you get started and succeed.",
    },
  ];

    export const visitorIntegrations = [
    {
      icon: "/images/visitor/zapier.png",
      title: "Zapier",
      desc: "Connect Landbot with 4000+ apps and automate workflows.",
    },
    {
      icon: "/images/visitor/webflow.png",
      title: "Webflow",
      desc: "Integrate your chatbot in a Webflow website.",
    },
    {
      icon: "/images/visitor/wordpress.png",
      title: "WordPress",
      desc: "Integrate your chatbot in a WordPress website.",
    },
    {
      icon: "/images/visitor/stripe.png",
      title: "Stripe",
      desc: "Process transactions inside your chatbot conversations.",
    },
    {
      icon: "/images/visitor/slack.png",
      title: "Slack",
      desc: "Send Slack notifications from your chatbots.",
    },
    {
      icon: "/images/visitor/shopify.png",
      title: "Shopify",
      desc: "Integrate your chatbot in a Shopify website.",
    },
    {
      icon: "/images/visitor/calendly.png",
      title: "Calendly",
      desc: "Book meetings through your chatbots.",
    },
    {
      icon: "/images/visitor/segment.png",
      title: "Segment",
      desc: "Track users & events inside your chatbots.",
    },
    {
      icon: "/images/visitor/sendgrid.png",
      title: "SendGrid",
      desc: "Send emails directly from your chatbots.",
    },
    {
      icon: "/images/visitor/dialogflow.png",
      title: "Dialogflow",
      desc: "Build sophisticated chatbots using NLP.",
    },
    {
      icon: "/images/visitor/googlesheets.png",
      title: "Google Sheets",
      desc: "Add, update, and retrieve data during conversations.",
    },
    {
      icon: "/images/visitor/hubspot.png",
      title: "HubSpot",
      desc: "Add, update, and get HubSpot data during conversations.",
    },
    {
      icon: "/images/visitor/mailchimp.png",
      title: "Mailchimp",
      desc: "Collect and send user data to Mailchimp in real-time.",
    },
    {
      icon: "/images/visitor/airtable.png",
      title: "Airtable",
      desc: "Add, update, and retrieve data during conversations.",
    },
    {
      icon: "/images/visitor/carrd.png",
      title: "Carrd",
      desc: "Integrate your chatbot in a Carrd website.",
    },
    {
      icon: "/images/visitor/n8n.png",
      title: "n8n",
      desc: "Connect 500+ integrations to power any Workflow.",
    },
  ];



 export const VISITORSTATS = [
  {
    id: 1,
    value: "17+",
    label: "ACTIVE VISITORS TODAY",
    bg: "bg-purple-100",
    icon: Trophy,
    iconColor: "text-purple-600",
  },
  {
    id: 2,
    value: "23+",
    label: "ENGAGEMENT RATE",
    bg: "bg-green-100",
    icon: Users,
    iconColor: "text-green-600",
  },
  {
    id: 3,
    value: "183+",
    label: "AVG. CONVERSATIONS",
    bg: "bg-orange-100",
    icon: Smile,
    iconColor: "text-orange-500",
  },
  {
    id: 4,
    value: "315+",
    label: "HIGH-INTENT LEADS",
    bg: "bg-pink-100",
    icon: Briefcase,
    iconColor: "text-pink-600",
  },
];

export const INSIGHTS = [
  {
    id: 1,
    title: "Support Team Alert",
    desc: "Visitor is experiencing API integration issues with Python. They've spent significant time on documentation pages and show technical expertise.",
    action: "Assign to Senior Support →",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Sales Opportunity",
    desc: "High purchase intent detected. Visitor inquired about enterprise pricing after technical discussion. Estimated deal size: $25K–$50K.",
    action: "Engage Sales Team →",
    icon: Box,
  },
  {
    id: 3,
    title: "Knowledge Gap Identified",
    desc: "Multiple visitors asking similar Django integration questions. Consider creating dedicated tutorial content.",
    action: "Create Documentation →",
    icon:Globe,
  },
  {
    id: 4,
    title: "Upsell Opportunity",
    desc: "Visitor using basic features but showing interest in advanced capabilities. Perfect candidate for premium features demo.",
    action: "Schedule Demo →",
    icon:Database,
  },
];




