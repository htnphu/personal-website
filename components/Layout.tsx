import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phu Han | Software Engineer",
  description:
    "Personal website of Phu Han — Software Engineer, M.S. Computer Science student at Seattle University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
