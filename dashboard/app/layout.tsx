import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Credit Risk Dashboard",
  description: "Advanced analytics dashboard for credit risk assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
