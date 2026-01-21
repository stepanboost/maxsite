import { Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import { ReactNode } from "react";

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export const footerConfig = {
  description:
    "AI-powered sales systems for local businesses. Capture, qualify, and convert leads 24/7.",

  linkGroups: [
    {
      title: "Products",
      links: [
        { label: "AI Sales Bot", href: "#features" },
        { label: "AI SMS Follow-Ups", href: "#features" },
        { label: "AI Phone Assistant", href: "#features" },
        { label: "Custom Solutions", href: "#custom" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Case Studies", href: "#testimonials" },
        { label: "Pricing", href: "#pricing" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Book Consultation", href: "#" },
      ],
    },
  ] as FooterLinkGroup[],

  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],

  location: "📍 Kansas City Metro",
  email: "📧 hello@maxim-ai.com",
};

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Email", href: "mailto:hello@maxim-ai.com", icon: <Mail className="h-5 w-5" /> },
];
