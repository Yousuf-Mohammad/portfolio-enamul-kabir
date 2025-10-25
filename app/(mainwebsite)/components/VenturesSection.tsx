"use client";
import { motion } from "framer-motion";
import { Building2, Music, BookOpen, Radio, Smartphone, Globe } from "lucide-react";
import rupkothaProductions from "@/public/assets/Images/rupkotha.png";
import rupkothaMusic from "@/public/assets/Images/rupkothaMusic.png";
import rupkothaPublications from "@/public/assets/Images/rupkothaPub.png";
import dotara from "@/public/assets/Images/dotara.png";
import bdStar24 from "@/public/assets/Images/BDStar24.png";
import eRadio16343 from "@/public/assets/Images/Radio.png";

export function VenturesSection() {
  const ventures = [
    {
      icon: rupkothaProductions,
      title: "Rupkotha Productions",
      description: "Film and TV production house creating compelling content for Bangladeshi audiences",
    },
    {
      icon: rupkothaMusic,
      title: "Rupkotha Music",
      description: "Record label nurturing Bangladeshi talent and promoting original Bangla music",
    },
    {
      icon: rupkothaPublications,
      title: "Rupkotha Publications",
      description: "Publishing platform for books, lyrics, and literary works celebrating culture",
    },
    {
      icon: dotara,
      title: "Dotara.com",
      description: "Digital OTT music platform promoting Bangla songs globally",
    },
    {
      icon: bdStar24,
      title: "BdStar24.com",
      description: "Leading online entertainment magazine covering cultural scene",
    },
    {
      icon: eRadio16343,
      title: "E-Radio 16343",
      description: "Bangladesh's innovative IVR-based music radio",
    },
 
  ];

  return (
    <section id="ventures" className="">
      <div className="container px-10  py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Portfolio</p> */}
            <h2 className="text-5xl md:text-7xl mb-6 text-slate-400"> <span className="text-orange-600 font-bold ">Ventures</span></h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            A visionary entrepreneur leading successful ventures in entertainment, media, and technology
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            
            // Calculate grid position for 3 columns on large screens
            const cols = 3; // lg:grid-cols-3
            const rows = Math.ceil(ventures.length / cols);
            const row = Math.floor(index / cols);
            const col = index % cols;
            
            // Determine which borders to show
            const isFirstRow = row === 0;
            const isLastRow = row === rows - 1;
            const isFirstCol = col === 0;
            const isLastCol = col === cols - 1;
            
            // Build border classes dynamically
            const borderClasses = [];
            
            // Top border - only if not first row
            if (!isFirstRow) {
              borderClasses.push('lg:border-t');
            }
            
            // Bottom border - only if not last row
            if (!isLastRow) {
              borderClasses.push('lg:border-b');
            }
            
            // Left border - only if not first column
            if (!isFirstCol) {
              borderClasses.push('lg:border-l');
            }
            
            // Right border - only if not last column
            if (!isLastCol) {
              borderClasses.push('lg:border-r');
            }
            
            // Special case for last row items (items 4, 5, 6)
            if (isLastRow) {
              // Add top border for all items in last row
              borderClasses.push('lg:border-t');
              
              // For the last row, we have 3 items (4, 5, 6), so add appropriate borders
              if (col === 0) {
                // First item in last row - no left border (leftmost)
              }
              if (col === 1) {
                // Middle item in last row - add left border
                borderClasses.push('lg:border-l');
              }
              if (col === 2) {
                // Last item in last row - add left border only (no right border for rightmost)
                borderClasses.push('lg:border-l');
              }
            }
            
            return (
              <motion.div
                key={venture.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`p-8 hover:text-slate-900 transition-all group bg-black lg:border-slate-400 ${borderClasses.join(' ')}`}
              >
                    <div className="w-12 h-12 flex items-center justify-center transition-all text-slate-400">
                  <img src={Icon.src} alt={venture.title} width={20} height={20} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg mb-2 text-slate-400">{venture.title}</h3>
                <p className="text-sm text-slate-400">
                  {venture.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
