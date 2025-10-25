"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "@/public/assets/Images/aboutImage.jpg";
import { useState, useEffect, useRef } from "react";

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref };
}

// Counter component
function Counter({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(number, 2000, 0);
  
  return (
    <div ref={ref} className="text-center">
      <h2 className="text-5xl md:text-6xl mb-3 text-slate-400">
        {count.toLocaleString()}{suffix}
      </h2>
      <p className="text-sm text-slate-400 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export function AboutSection() {
  const stats = [
    { number: 500, suffix: "+", label: "Songs Written" },
    { number: 300, suffix: "+", label: "Events Organized" },
    { number: 100, suffix: "+", label: "Musics Recorded" },
    { number: 50, suffix: "+", label: "Movies/Dramas Produced" },
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
            >
              <Counter 
                number={stat.number} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
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
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-400">A Soul&apos;s <span className="text-orange-600 font-bold ">Sketch </span>
            </h2>
            <div className="space-y-6 text-slate-400">
              <p className="leading-relaxed text-slate-400 text-justify ">
                Enamul Kabir Sujan is one of Bangladesh&apos;s distinguished creative figures — a lyricist, 
                producer, event organizer, and media entrepreneur with decades of contribution to the 
                country&apos;s entertainment and cultural landscape.
              </p>
              <p className="leading-relaxed text-slate-400 text-justify ">
                As the Owner & CEO of Rupkotha Productions and Rupkotha Music, and Founder of Rupkotha 
                Publications Ltd., he has built a diversified portfolio spanning film, music, and publishing.
              </p>
              <p className="leading-relaxed text-slate-400 text-justify ">
                Sujan&apos;s lyrical works reflect the depth of Bangla emotion and modern musical evolution. 
                Beyond artistry, he is known for his visionary leadership and commitment to cultural development, 
                serving in multiple key national organizations.
              </p>
            </div>
         
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[85%] w-full rounded-3xl overflow-hidden "
          >
            <Image
              src={aboutImage}
              alt="About Image"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-3xl object-top "
            />
          </motion.div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-16 bg-orange-500 rounded-3xl p-2 shadow-lg shadow-orange-950"
        >
          <blockquote className="text-2xl md:text-3xl italic mb-6 leading-relaxed text-slate-900 font-paprika ">
            &ldquo;Music, creativity, and compassion are the languages that unite people. 
            My journey has always been about connecting hearts through words, rhythm, 
            and purposeful work.&rdquo;
          </blockquote>
            <p className="text-3xl text-slate-950  font-lavishly-yours">— Enamul Kabir Sujan</p>
        </motion.div>
      </div>
    </section>
  );
}


