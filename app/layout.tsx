import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otis Han — Software Engineer",
  description:
    "Software Engineer specializing in Backend Systems, Distributed Architecture, and Data & AI. M.S. Computer Science student at Seattle University.",
  icons: {
    icon: [
      { url: "/web-icon.png", type: "image/png" },
    ],
    shortcut: "/web-icon.png",
    apple: "/web-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark:bg-zinc-950`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
