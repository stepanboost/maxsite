// Site configuration
export const siteConfig = {
    name: "Maxim AI",
    description: "AI-powered sales bots for your website that capture, qualify, and convert leads 24/7 — without hiring new staff.",
    url: "https://maxim-ai.com",

    // Navigation links
    navLinks: [
        { label: "Pricing", href: "#pricing" },
        { label: "Case Studies", href: "#testimonials" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ],

    // Product dropdown items
    productItems: [
        "AI Sales Bot",
        "AI SMS Follow-Ups",
        "AI Phone Assistant",
        "Custom AI Solutions",
    ],

    // Solutions dropdown items
    solutionItems: [
        "Medical Clinics",
        "HVAC Companies",
        "Local Services",
        "Service Businesses",
    ],

    // Footer links
    footerLinks: {
        product: [
            { label: "AI Sales Bot", href: "#" },
            { label: "AI SMS Follow-Ups", href: "#" },
            { label: "AI Phone Assistant", href: "#" },
            { label: "Custom Solutions", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Contact", href: "#" },
        ],
        resources: [
            { label: "How It Works", href: "#" },
            { label: "FAQ", href: "#" },
            { label: "Book Consultation", href: "#" },
        ],
        legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },

    // Social links
    socialLinks: [
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
    ],
}

export type SiteConfig = typeof siteConfig
