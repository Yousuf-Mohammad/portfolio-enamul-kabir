"use client";
import { motion } from "framer-motion";
import { Building2, Music, BookOpen, Radio, Smartphone, Tv, Users, Globe } from "lucide-react";

export function VenturesSection() {
  const ventures = [
    {
      icon: Building2,
      title: "Rupkotha Productions",
      description: "Film and TV production house creating compelling content for Bangladeshi audiences",
    },
    {
      icon: Music,
      title: "Rupkotha Music",
      description: "Record label nurturing Bangladeshi talent and promoting original Bangla music",
    },
    {
      icon: BookOpen,
      title: "Rupkotha Publications",
      description: "Publishing platform for books, lyrics, and literary works celebrating culture",
    },
    {
      icon: Smartphone,
      title: "Dotara.com",
      description: "Digital OTT music platform promoting Bangla songs globally",
    },
    {
      icon: Globe,
      title: "BdStar24.com",
      description: "Leading online entertainment magazine covering cultural scene",
    },
    {
      icon: Radio,
      title: "E-Radio 16343",
      description: "Bangladesh's innovative IVR-based music radio",
    },
    {
      icon: Users,
      title: "Club 9294 Limited",
      description: "Cultural and networking platform for creative community",
    },
    {
      icon: Tv,
      title: "WE TV",
      description: "Digital media and entertainment channel bringing quality content",
    },
  ];

  return (
    <section id="ventures" className="">
      <div className="container px-10 lg:px-36 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Portfolio</p> */}
          <h2 className="text-5xl md:text-7xl mb-6 text-slate-400">Business Ventures</h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            A visionary entrepreneur leading successful ventures in entertainment, media, and technology
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            
            // Calculate grid position
            const cols = 4; // lg:grid-cols-4
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
              borderClasses.push('border-t');
            }
            
            // Bottom border - only if not last row
            if (!isLastRow) {
              borderClasses.push('border-b');
            }
            
            // Left border - only if not first column
            if (!isFirstCol) {
              borderClasses.push('border-l');
            }
            
            // Right border - only if not last column
            if (!isLastCol) {
              borderClasses.push('border-r');
            }
            
            // If it's the only item in the last row, add all borders
            if (isLastRow && ventures.length % cols === 1) {
              borderClasses.push('border-t', 'border-l', 'border-r');
            }
            
            return (
              <motion.div
                key={venture.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`p-8 hover:text-slate-900 transition-all group bg-black border-none lg:border-slate-400  ${borderClasses.join(' ')}`}
              >
                    <div className="w-12 h-12 flex items-center justify-center transition-all text-slate-400">
                  <Icon size={20} />
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
