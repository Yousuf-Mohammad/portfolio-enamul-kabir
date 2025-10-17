"use client";
import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";

export function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      year: "2024",
      title: "Best Lyricist Award",
      organization: "Bangladesh Film Awards",
    },
    {
      icon: Award,
      year: "2023",
      title: "Lifetime Achievement in Music",
      organization: "Bangladesh Music Association",
    },
    {
      icon: Medal,
      year: "2023",
      title: "Excellence in Film Production",
      organization: "National Film Board",
    },
    {
      icon: Trophy,
      year: "2023",
      title: "Cultural Ambassador Award",
      organization: "Ministry of Cultural Affairs",
    },
    {
      icon: Award,
      year: "2022",
      title: "Best Song of the Year",
      organization: "Radio Awards Bangladesh",
    },
    {
      icon: Medal,
      year: "2022",
      title: "Community Leadership Recognition",
      organization: "Bangladesh Cultural Forum",
    },
  ];

  return (
    <section id="awards" className="">
      <div className="container px-10 lg:px-36 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Recognition</p>
          <h2 className="text-5xl md:text-7xl mb-6 text-slate-400">Awards & Honors</h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            Honored for remarkable contributions to Bangla music, entertainment, and social service
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title + award.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-8 hover:bg-slate-200 hover:text-slate-900 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:bg-slate-200 group-hover:text-slate-900 transition-all text-slate-400">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm text-slate-400">{award.year}</span>
                </div>
                <h3 className="text-xl mb-2">{award.title}</h3>
                <p className="text-sm text-slate-400">{award.organization}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
