"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function DotaraAppSection() {


 

  return (
    <section id="dotara-app" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* App Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-slate-400">
              Dotara <span className="text-orange-600 font-bold ">Music</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-justify mb-6 sm:mb-8">
              Dotara Music – your one-stop destination for Bangla songs and podcasts! Dive into a world of limitless music streaming with our comprehensive service. Whether it&apos;s pop, rock, folk, or contemporary beats you crave, our extensive catalog has it all.
            </p>
            <Link href="https://play.google.com/store/apps/details?id=com.dotaramusic.user" target="_blank">
              <Button variant="default" className="rounded-3xl bg-green-600 text-white px-4 sm:px-5 py-2 sm:py-3 shadow-lg shadow-green-950 hover:bg-green-700 transition-all duration-300 text-sm sm:text-base">
                <Download className="w-4 h-4 mr-2" />
                Download from Play Store
              </Button>
            </Link>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col sm:flex-row gap-4 justify-center items-center order-1 lg:order-2"
          >
            <Image 
              src="/assets/Images/dotaraApp2.webp" 
              alt="Dotara Music" 
              width={250} 
              height={250} 
              className="rounded-3xl shadow-lg shadow-slate-950 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto lg:mt-20" 
            />
            <Image 
              src="/assets/Images/dotaraApp.webp" 
              alt="Dotara Music" 
              width={250} 
              height={250} 
              className="rounded-3xl shadow-lg shadow-slate-950 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
