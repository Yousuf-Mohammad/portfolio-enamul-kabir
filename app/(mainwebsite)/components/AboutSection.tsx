"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import aboutImage from "@/public/assets/Images/studio.jpg";

export function AboutSection() {
  const stats = [
    { number: "36M", label: "People Engaged Yearly" },
    { number: "1000+", label: "Artistry Delivered Works" },
    { number: "100", label: "Instrument Total" },
    { number: "90", label: "Performances Annually" },
  ];

  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container mx-auto px-10 ">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-32 pb-16 "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl mb-3 text-slate-400">{stat.number}</h2>
              <p className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-400">About Me</h2>
            <div className="space-y-6 text-slate-400">
              <p className="leading-relaxed text-slate-400">
                Enamul Kabir Sujan is one of Bangladesh&apos;s distinguished creative figures — a lyricist, 
                producer, event organizer, and media entrepreneur with decades of contribution to the 
                country&apos;s entertainment and cultural landscape.
              </p>
              <p className="leading-relaxed text-slate-400">
                As the Owner & CEO of Rupkotha Productions and Rupkotha Music, and Founder of Rupkotha 
                Publications Ltd., he has built a diversified portfolio spanning film, music, and publishing.
              </p>
              <p className="leading-relaxed text-slate-400">
                Sujan&apos;s lyrical works reflect the depth of Bangla emotion and modern musical evolution. 
                Beyond artistry, he is known for his visionary leadership and commitment to cultural development, 
                serving in multiple key national organizations.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-white/20 bg-slate-400 text-black hover:bg-white hover:text-black transition-all rounded mt-6"
              onClick={() => {
                const element = document.getElementById("ventures");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Ventures
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-gray-950"
          >
            <Image
              src={aboutImage}
              alt="Studio"
              width={1080}
              height={1440}
              className="w-full h-full object-cover rounded-lg "
            />
          </motion.div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-16"
        >
          <blockquote className="text-3xl md:text-4xl italic mb-6 leading-relaxed text-slate-400">
            &ldquo;Music, creativity, and compassion are the languages that unite people. 
            My journey has always been about connecting hearts through words, rhythm, 
            and purposeful work.&rdquo;
          </blockquote>
            <p className="text-sm text-slate-400 uppercase tracking-wider">— Enamul Kabir Sujan</p>
        </motion.div>
      </div>
    </section>
  );
}


