"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Habib Wahid",
      role: "Renowned Singer",
      comment: "Enamul Kabir Sujan's lyrics have the power to touch hearts and souls. His words resonate with the deepest emotions of Bengali culture. Working with him has been an incredible journey of artistic collaboration.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Rashid Ahmed",
      role: "Cultural Critic & Writer",
      comment: "Sujan's contribution to Bengali music and culture is unparalleled. His ability to weave contemporary themes with traditional values makes him a true cultural ambassador of Bangladesh.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mila Islam",
      role: "Music Producer",
      comment: "As a producer, I've seen many lyricists, but Sujan's understanding of melody and rhythm is exceptional. His lyrics don't just tell stories; they create musical landscapes that elevate every composition.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Professor Anisul Haque",
      role: "Academic & Literature Scholar",
      comment: "Enamul Kabir Sujan represents the bridge between traditional Bengali literature and modern musical expression. His work preserves our cultural heritage while embracing contemporary artistic sensibilities.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Tahsan Khan",
      role: "Singer & Composer",
      comment: "Sujan's lyrics have given voice to countless emotions that were difficult to express. His words have the rare quality of being both deeply personal and universally relatable. A true master of his craft.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Sharmin Sultana",
      role: "Event Organizer & Media Professional",
      comment: "Working with Enamul Kabir Sujan has been transformative. His vision for cultural events and his commitment to promoting Bengali arts have inspired countless others in the industry. A true leader and visionary.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
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
            What People Say
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
                  "{testimonial.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-600">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
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
