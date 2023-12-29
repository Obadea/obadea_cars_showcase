import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Helmet } from 'react-helmet';

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
          <Helmet>
          <meta name="theme-color" content="#0000ffc9">
          </Helmet>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
