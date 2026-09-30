import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Otis Han | Software Engineer",
  description:
    "Personal website of Otis Han — Software Engineer, M.S. Computer Science student at Seattle University.",
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
