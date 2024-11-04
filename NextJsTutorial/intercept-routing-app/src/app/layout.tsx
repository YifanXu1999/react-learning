
import "./globals.css";
import React from "react";


export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="container mx-auto">
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}
