export interface CaseStudy {
    id: string;
    industry: string;
    solution: string;
    result: string;
    shortDescription: string;
    image: string;
    icon: string;
    // Detailed content
    challenges: string[];
    solutionDetails: {
        description: string;
        features: string[];
    };
    howItWorks: string[];
    results: {
        metrics: string[];
        quote: string;
    };
    cta: string;
}

export const testimonialsConfig = {
    title: "Real Results From Real Businesses",
    subtitle: "See how AI sales systems are transforming local businesses.",

    caseStudies: [
        {
            id: "medical-clinic",
            industry: "Medical Clinic",
            solution: "AI Sales Bot on Website",
            result: "+562 leads in 30 days",
            shortDescription: "AI bot replaced manual lead intake, responded instantly to visitors, qualified patients, and saved all leads to CRM automatically.",
            image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
            icon: "🏥",
            challenges: [
                "Slow response to website inquiries",
                "Missed messages outside working hours",
                "High load on administrators",
                "No clear system for lead tracking",
                "Website traffic existed, but conversion into consultations was low"
            ],
            solutionDetails: {
                description: "I integrated an AI sales bot directly into the clinic's website.",
                features: [
                    "Starts conversation with every visitor",
                    "Asks qualifying questions (service needed, urgency, contact info)",
                    "Explains services in simple language",
                    "Automatically saves every lead to CRM",
                    "Works 24/7 without staff involvement"
                ]
            },
            howItWorks: [
                "Patient visits the website",
                "AI bot initiates conversation within seconds",
                "Patient describes their issue",
                "AI qualifies the lead and collects contact details",
                "Lead is saved to CRM and ready for follow-up"
            ],
            results: {
                metrics: [
                    "562 qualified leads in 30 days",
                    "Faster response time (seconds instead of hours)",
                    "Reduced workload on administrators",
                    "Predictable lead flow from website traffic"
                ],
                quote: "The clinic didn't need more traffic. They needed better conversion. AI turned the website into a lead generation asset, not just an information page."
            },
            cta: "Get the same system for your clinic"
        },
        {
            id: "hvac-company",
            industry: "HVAC Company",
            solution: "AI SMS + AI Phone Manager",
            result: "Higher LTV & repeat bookings",
            shortDescription: "AI handled client communication automatically, followed up via SMS, and reduced lost leads significantly.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
            icon: "🔧",
            challenges: [
                "Missed calls during busy hours",
                "No follow-ups after first contact",
                "Leads were lost after initial inquiry",
                "Low repeat service rate",
                "Sales team was overloaded with routine communication"
            ],
            solutionDetails: {
                description: "I implemented an AI communication manager using AI-powered SMS automation and AI phone interactions.",
                features: [
                    "Confirms requests instantly",
                    "Sends follow-up messages automatically",
                    "Reminds clients about services",
                    "Answers basic questions automatically",
                    "Custom scripts based on real client scenarios"
                ]
            },
            howItWorks: [
                "Client contacts the company",
                "AI instantly responds via SMS or phone",
                "AI continues conversation and follow-ups",
                "Sales team receives only qualified requests",
                "AI handles the routine. Humans close deals."
            ],
            results: {
                metrics: [
                    "Reduced number of lost leads",
                    "Faster response time",
                    "Increased repeat bookings",
                    "Higher customer lifetime value (LTV)"
                ],
                quote: "HVAC is about speed and follow-up. AI made both predictable. Instead of hiring more staff, the company automated communication and scaled without increasing payroll."
            },
            cta: "Get the same system for your HVAC business"
        },
    ] as CaseStudy[],
}
