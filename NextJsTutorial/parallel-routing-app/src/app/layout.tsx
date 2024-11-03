
import "./globals.css";
import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
  team,
  analytics
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="container mx-auto">
          <div className="flex justify-center text-blue-500 p-6 gap-5">
            <Link href="/">Home</Link>
            <Link href="/visitors">Visitors</Link>
          </div>
          <div className="flex gap-5">
            {team}
            {analytics}
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
