import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipakshi Pal — CS Student & Developer",
  description:
    "Portfolio of Dipakshi Pal — computer science student, software developer, and builder of cool things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
