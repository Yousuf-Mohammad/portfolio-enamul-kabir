"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import rokomari from "@/public/assets/Images/rokomari.png";
import book from "@/public/assets/Images/book.jpg";
export function BookSection() {
  return (
    <section id="book" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-slate-400  ">
            <span className=" font-bold  ">Songhojoner</span> <span className="text-orange-600 font-bold mt-2 ">Geetikobita</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-justify mb-6 sm:mb-8">
            In this country, people of different professions and ages often find themselves singing—sometimes without even realizing it. And they sing the songs that feel closest to their hearts. Among these, the most beloved songs are written by lyricists whose works have now been brought together in “Songhojoner Gitikobita” (The Lyric Poetry of the Collective).
<br />
<br />
The Gitikobi Songho (Lyricists’ Association) works selflessly for the honor and interests of both emerging and established lyricists of Bangladesh. For the first time, this compilation presents selected works from the country’s renowned lyricists as well as promising new voices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://www.rokomari.com/book/442351/shonghojoner-geetikobita" target="_blank">
                <Button variant="default" className="rounded-2xl bg-green-600 text-white px-4 sm:px-5 py-3 sm:py-3 shadow-lg shadow-green-950 hover:bg-green-700 transition-all duration-300 text-sm sm:text-base">
                  <Image src={rokomari} alt="Rokomari" width={20} height={20} className=" w-6 h-6  " />
                  View Book
                </Button>
              </Link>
             
            </div>
          </motion.div>

          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center order-1 lg:order-2 w-[350px] h-[550px] mx-auto "
          >
            <Image src={book} alt="Book" width={300} height={300} className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-slate-950 border border-slate-700" />
          </motion.div>
        </div>

     
      </div>
    </section>
  );
}
