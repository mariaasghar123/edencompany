"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Hero from "./HeroSection";
import About from "./About";
import SplashScreen from "./components/SplashScreen";
import PersonTribute from "./PersonTribute";
import ServicesSection from "./Services";
import Consultant from "./Consultant";
import Map from "./Map";
import ContactSection from "./Contact";
import FeesSection from "./FeesSection";

import Footer from "./Footer";
import Cards from "./Cards";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <SplashScreen/>
      <Header />

      <main className="">
       <Hero/>
        <PersonTribute/>
         <section id="about" className="py-20 bg-white">
        <About/>
      </section>
       <section id="services" className="py-20 bg-gray-50">
        <ServicesSection/>
        <FeesSection/>
      </section>
       
        <Consultant/>
        <Cards/>
        <Map/>
         <section id="contact" className="py-20 bg-white">
        <ContactSection/>
      </section>
        <Footer/>
      </main>
    </div>
  );
}
