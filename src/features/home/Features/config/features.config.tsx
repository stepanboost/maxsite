import { Bot, MessageSquare, Phone } from "lucide-react";
import { ReactNode } from "react";

export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export const featuresConfig = {
  title: "Core AI Solutions",
  subtitle: "AI-powered tools to capture, qualify, and convert more leads",

  features: [
    {
      id: "sales-bot",
      icon: <Bot className="h-5 w-5" />,
      title: "AI Sales Bot for Your Website",
      description:
        "Your always-on sales assistant that engages every visitor, qualifies leads automatically, and saves all data to your CRM.",
      benefits: [
        "Engages every visitor instantly",
        "Qualifies leads automatically",
        "Saves all data to CRM",
        "Works 24/7 without breaks",
      ],
      image: "/images/hero1.webp",
    },
    {
      id: "sms-followups",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "AI SMS Follow-Ups",
      description:
        "Automated SMS responses and follow-ups that keep leads engaged and increase conversion rates.",
      benefits: [
        "Instant responses after form fills",
        "Automated reminders & follow-ups",
        "Higher conversion & LTV",
        "Personalized messaging",
      ],
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "phone-assistant",
      icon: <Phone className="h-5 w-5" />,
      title: "AI Phone Assistant",
      description:
        "Never miss a call again. AI handles calls when your team is busy and routes qualified leads instantly.",
      benefits: [
        "Answers calls when your team is busy",
        "Handles routine questions",
        "Sends qualified leads to your team",
        "Professional voice experience",
      ],
      image:
        "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
    },
  ] as Feature[],
};
