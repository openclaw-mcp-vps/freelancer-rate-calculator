import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Rate Calculator – Find Your Optimal Hourly Rate",
  description:
    "Analyze your skills, location, and experience to calculate competitive freelance rates with profit margin insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="85a73d62-af20-4fc2-ad4a-15ac113cab9e"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
