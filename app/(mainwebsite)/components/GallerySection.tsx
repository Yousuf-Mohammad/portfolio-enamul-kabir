"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ["All", "Music Events", "Awards", "Productions", "Personal", "Videos"];

  const mediaItems = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1661261400335-7dc71eb2b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y2VyfGVufDF8fHx8MTc2MDYyODAzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "music events",
      title: "Studio Recording Session",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "videos",
      title: "Music Video Production",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcnRpZmljYXRlJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzYwNzA3NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "awards",
      title: "Award Ceremony",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      category: "videos",
      title: "Live Performance Recording",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjA3MDYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "productions",
      title: "Production Office",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      category: "videos",
      title: "Behind the Scenes",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1692930675044-d1309a0e6b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGdhbGxlcnklMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDcwNzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "music events",
      title: "Cultural Event",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1732186702796-ecb3c05d1968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwbXVzaWMlMjBjdWx0dXJlfGVufDF8fHx8MTc2MDcwNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "music events",
      title: "Live Performance",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1510873660878-bdf8de0ed851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMG1pbmltYWx8ZW58MXx8fHwxNzYwNjQ1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "personal",
      title: "Creative Workspace",
    },
  ];

  const filteredMedia = activeFilter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter.toLowerCase());

  // Navigation functions
  const openFullscreen = (index: number) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredMedia.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredMedia.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      switch (event.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          setCurrentImageIndex((prev) => 
            prev === 0 ? filteredMedia.length - 1 : prev - 1
          );
          break;
        case 'ArrowRight':
          setCurrentImageIndex((prev) => 
            prev === filteredMedia.length - 1 ? 0 : prev + 1
          );
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, filteredMedia.length]);

  return (
        <section id="gallery" className="">
      <div className="container px-10 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
     
          <h2 className="text-5xl md:text-7xl mb-8 text-slate-400">Visual Journey</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-6 py-2 text-sm uppercase tracking-wider border border-border text-slate-400 rounded-2xl transition-all ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-slate-200 text-slate-900"
                    : "hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 mb-12 space-y-8">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.url}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer break-inside-avoid mb-8"
              onClick={() => openFullscreen(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    width={1080}
                    height={1080}
                    style={{ aspectRatio: 'auto' }}
                  />
                ) : (
                  <div className="relative w-full">
                    <iframe
                      src={item.url}
                      className="w-full aspect-video rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-2xl" />
                  </div>
                )}
                {/* Play icon overlay for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <h4 className="text-sm text-slate-400 group-hover:text-slate-900 transition-colors mt-4">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>

   
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Media Container */}
            <div className="relative max-w-7xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {filteredMedia[currentImageIndex]?.type === "image" ? (
                  <Image
                    src={filteredMedia[currentImageIndex]?.url}
                    alt={filteredMedia[currentImageIndex]?.title}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />
                ) : (
                  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                    <div className="aspect-video w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]">
                      <iframe
                        src={filteredMedia[currentImageIndex]?.url}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                
                {/* Media Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-medium mb-2">
                    {filteredMedia[currentImageIndex]?.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {currentImageIndex + 1} of {filteredMedia.length}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
