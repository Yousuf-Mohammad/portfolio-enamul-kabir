"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Trophy, X } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<any>(null);

  // Sample awards and certificates data
  const awards = [
    {
      id: 1,
      title: "Best Lyricist Award",
      organization: "Bangladesh Music Awards",
      year: "2023",
      description: "Recognized for outstanding contribution to Bengali music",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      type: "Award"
    },
    {
      id: 2,
      title: "Cultural Excellence Certificate",
      organization: "Ministry of Cultural Affairs",
      year: "2022",
      description: "For promoting Bengali culture through music and arts",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      type: "Certificate"
    },
    {
      id: 3,
      title: "Music Producer Recognition",
      organization: "Bengali Music Society",
      year: "2023",
      description: "Excellence in music production and composition",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      type: "Recognition"
    },
    {
      id: 4,
      title: "Entrepreneur of the Year",
      organization: "Business Excellence Forum",
      year: "2022",
      description: "Outstanding achievement in media entrepreneurship",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      type: "Award"
    },
    {
      id: 5,
      title: "Event Organizer Excellence",
      organization: "Event Management Association",
      year: "2023",
      description: "For organizing exceptional cultural events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      type: "Certificate"
    },
    {
      id: 6,
      title: "Cultural Ambassador",
      organization: "International Cultural Exchange",
      year: "2022",
      description: "Promoting Bengali culture globally",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      type: "Recognition"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Award":
        return <Trophy className="w-6 h-6" />;
      case "Certificate":
        return <Award className="w-6 h-6" />;
      case "Recognition":
        return <Award className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const openModal = (award: any) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <section id="awards" className="py-32">
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
        Certifications & Recognition
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Celebrating achievements and recognition in music, culture, and entrepreneurship
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
            }}
            className="awards-swiper"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                    onClick={() => openModal(award)}
                  >
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-slate-400 mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-1">
                      {award.organization}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-slate-600 uppercase tracking-wider">
                        {award.type}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-600">{award.year}</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>

       
      </div>

      {/* Modal */}
      <Dialog open={!!selectedAward} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black ">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white text-xl flex items-center justify-between">
              <span>{selectedAward?.title}</span>
              {/* <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button> */}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-0">
            <div className="relative aspect-video mb-4">
              <Image
                src={selectedAward?.image || ''}
                alt={selectedAward?.title || ''}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-400 mb-2">
                {selectedAward?.title}
              </h3>
              <p className="text-lg text-slate-500 mb-2">
                {selectedAward?.organization}
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm text-slate-600 uppercase tracking-wider">
                  {selectedAward?.type}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-sm text-slate-600">{selectedAward?.year}</span>
              </div>
              
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}