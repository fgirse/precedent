import { Bowlby_One_SC, Architects_Daughter, Londrina_Outline } from 'next/font/google'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Wohntraum Andalusia SI",
  description:
    "LandingPage für Wohmtraum Andalusia SI",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

const lontoutline = Londrina_Outline({
  variable: '--font-lontoutline',
  weight: '400',
  preload: false
})
 
const archidaught = Architects_Daughter({
  variable: '--font-archidaught-mono',
  weight: '400',
  preload: false
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lontoutline.variable} ${archidaught.variable}`}>
      
        <div className="fixed h-screen w-full bg-gradient-to-br from-stone-700 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

 

