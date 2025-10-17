"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/assets/Images/heroImage.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Musician"
          width={1920}
          height={1080}
          className="w-full h-full object-cover  blur-sm brightness-50 contrast-120"    
        />
        <div className="absolute inset-0  min-h-screen bg-gradient-to-r from-black via-black/10 to-black  blur-sm brightness-50 contrast-120" />
      </div> 

      {/* Content */}
      <div className="container relative z-10  px-10 lg:px-36">
        <div className="max-w-5xl ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight font-playfair-display text-slate-400 ">
              ENAMUL<br />KABIR SUJAN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-slate-400">
              The Visionary&apos;s Biggest Musical<br />Event Organizer
            </p>
            <p className="text-base  leading-relaxed text-gray-400">
              Celebrating the timeless words and visionary leadership of a man who continues 
              to shape the rhythm of Bangla culture. A celebrated lyricist, film producer, 
              event organizer, and entrepreneur with decades of contribution to Bangladesh&apos;s 
              entertainment and cultural landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("about")}
              className="border-white/20 bg-slate-400 text-black hover:bg-white hover:text-black transition-all rounded"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}
