"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import NagarBaulJames from "@/public/assets/review/james.jpeg";
import Asif from "@/public/assets/review/asif_akbar.jpg";
import kabir from "@/public/assets/review/kabir.jpg"
import nachiketa from "@/public/assets/review/Nachiketa_Chakraborty.jpg"
import rathi from "@/public/assets/review/rathi.webp"
import runalaila from "@/public/assets/review/runa.jpg"
export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Nagar Baul James ",
      role: "Renowned Singer",
      comment: "Enamul Kabir Sujan brilliantly blends creativity and entrepreneurship, nurturing talent while maintaining high-quality productions. Truly inspiring for the music industry",
      rating: 5,
      avatar: NagarBaulJames
    },
    {
      id: 2,
      name: "Asif Akbar",
      role: "Cultural Critic & Writer",
      comment: "His lyrics are precise and heartfelt, and his leadership in production shows his respect for the entire creative process. A remarkable contributor to Bengali music.",
      rating: 5,
      avatar: Asif
    },
    {
      id: 3,
      name: "Runa Laila",
      role: "Music Producer",
      comment: "Enamul brings awareness and sensitivity to his projects, valuing the artist’s voice while pushing creative boundaries. His work elevates Bangla music",
      rating: 5,
      avatar: runalaila
    },
    {
      id: 4,
      name: " Nachiketa Chakraborty",
      role: "Academic & Literature Scholar",
      comment: "Enamul’s work fosters cross-border cultural dialogue and engages diverse voices. His vision goes beyond entertainment, uniting Bengali culture.",
      rating: 5,
      avatar: nachiketa
    },
    {
      id: 5,
      name: "Rathindranath Roy",
      role: "Singer & Composer",
      comment: "He articulates themes of identity and aspiration with clarity, creating environments where artists can flourish. His contributions are truly commendable",
      rating: 5,
      avatar: rathi
    },
    {
      id: 6,
      name: "Kabir Suman",
      role: "Event Organizer & Media Professional",
      comment: "Enamul Kabir Sujan values sincerity in both lyrics and production. His respect for artists makes his work stand out in our musical landscape.",
      rating: 5,
      avatar: kabir
    }
  ];

  return (
    <section id="testimonials" className="py-32 ">
      <div className="container mx-auto px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-slate-400">
            What <span className="text-orange-600 font-bold ">People</span> Say
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Testimonials from artists, colleagues, and cultural figures who have worked with Enamul Kabir Sujan
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-slate-400" />
                </div>

                

                {/* Comment */}
                 <blockquote className="text-slate-300 leading-relaxed mb-6 italic">
                   &ldquo;{testimonial.comment}&rdquo;
                 </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-600">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}
