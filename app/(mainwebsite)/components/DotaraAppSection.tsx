"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function DotaraAppSection() {


 

  return (
    <section id="dotara-app" className="py-32">
      <div className="container mx-auto px-10">
        {/* Header */}
      

  

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* App Info */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          {/* <Badge variant="default" className="mb-2 rounded-3xl  bg-orange-400 text-white px-4 py-2 shadow-lg shadow-orange-950 hover:bg-orange-600 transition-all duration-300">
            Mobile Application
          </Badge> */}
          <h2 className="text-5xl md:text-7xl mb-6 text-slate-400">
            Dotara Music
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed text-justify">
            Dotara Music – your one-stop destination for Bangla songs and podcasts! Dive into a world of limitless music streaming with our comprehensive service. Whether it&apos;s pop, rock, folk, or contemporary beats you crave, our extensive catalog has it all.
          </p>
        <Link href="https://play.google.com/store/apps/details?id=com.dotaramusic.user" target="_blank">
          <Button variant="default" className="rounded-3xl  bg-green-600 text-white px-5 py-3 shadow-lg shadow-green-950 hover:bg-green-700 transition-all duration-300 mt-6">
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
            className="relative flex  gap-4 justify-center items-center"
          >
           <Image src="/assets/Images/dotaraApp2.webp" alt="Dotara Music" width={300} height={300} className="rounded-3xl shadow-lg shadow-slate-950 mt-40 " />
           <Image src="/assets/Images/dotaraApp.webp" alt="Dotara Music" width={300} height={300} className="rounded-3xl shadow-lg shadow-slate-950 " />
          </motion.div>
        </div>

 

   
      </div>
    </section>
  );
}
