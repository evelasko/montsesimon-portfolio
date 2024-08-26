"use client";
import ScrollToTop from "@/components/ScrollToTop";
import AOS from "aos";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/scss/main.scss";
import { Nunito, Montserrat } from "next/font/google";
import localFont from 'next/font/local';

const nunitoFont = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

const montserratFont = Montserrat({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const helloParisSerifFont = localFont({ 
  src: "../public/assets/scss/fonts/helloparisserif.woff2", 
  variable: "--font-hello-paris-serif" 
});



export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en" className={`${montserratFont.variable} ${helloParisSerifFont.variable}`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
