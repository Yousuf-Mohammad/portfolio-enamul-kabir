"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/assets/Images/heroImage2.png";

export function HeroSection() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Musician"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top  blur-xs brightness-50 contrast-120"    
        />
        <div className="absolute inset-0  min-h-screen bg-gradient-to-r from-black via-black/10 to-black  blur-sm brightness-50 contrast-120" />
      </div> 

      {/* Content */}
      <div className="container relative z-10  px-10 ">
        <div className="max-w-5xl ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl mb-6 tracking-tight font-playfair-display text-slate-400 ">
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
            Lyricist | Producer | Event Organizer | Entrepreneur 

            </p>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              
              <blockquote className="text-lg md:text-xl leading-relaxed text-slate-300 italic font-light pl-8 pr-4 py-4 border-l-2 border-slate-300/30 bg-slate-800/20 backdrop-blur-sm rounded-r-lg hover:bg-slate-800/30 transition-all duration-300 font-paprika">
                Let your heart be a river, flowing light into the darkest night.<br />
                <p className="text-3xl text-slate-400 font-lavishly-yours mt-4 text-right">
              - Enamul Kabir Sujan
             </p>
              </blockquote>
             
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4"
          >
            {/* <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("about")}
              className="border-white/20 bg-slate-400 text-black hover:bg-white hover:text-black transition-all rounded"
            >
              Learn More
            </Button> */}
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}
