import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import getNavLinks from "./links"
import Footer from "@/components/footer";
import { GlobalNav } from '@/components/global-nav';
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.HOME_TITLE,
  description: process.env.DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navResources = await getNavLinks();
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  }) 
  return (
    
    <html lang="en" >
      <body className={inter.className}>
          <GoogleAnalytics />
          <GlobalNav navItems={navItems} siteName={process.env.SITE_NAME as string} siteLogo={process.env.SITE_LOGO as string}/>
          <div className="bg-white pt-20 lg:pl-72 lg:pt-4">
          {children}
          <Footer />
          </div>
          
          
        
      </body>
      
    </html>
  );
}
