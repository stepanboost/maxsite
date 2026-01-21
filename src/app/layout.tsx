import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Header, Footer } from "@/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxim AI - AI Sales Systems for Local Businesses",
  description:
    "AI-powered sales bots for your website that capture, qualify, and convert leads 24/7 — without hiring new staff.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Maxim AI Integrator",
  openGraph: {
    title: "Maxim AI - AI Sales Systems for Local Businesses",
    description:
      "AI-powered sales bots for your website that capture, qualify, and convert leads 24/7 — without hiring new staff.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Maxim AI - AI Sales Systems",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
