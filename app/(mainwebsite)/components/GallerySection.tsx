"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";


// Productions
import production1 from "@/public/assets/Production/IMG-20230902-WA0001.jpg";
import production2 from "@/public/assets/Production/IMG-20230902-WA0002.jpg";
import production3 from "@/public/assets/Production/IMG-20230902-WA0003.jpg";
import production4 from "@/public/assets/Production/IMG-20230902-WA0004.jpg";
import production5 from "@/public/assets/Production/IMG-20230902-WA0005.jpg";
import production6 from "@/public/assets/Production/IMG-20230902-WA0006.jpg";
import production7 from "@/public/assets/Production/WhatsApp Image 2023-09-02 at 18.14.19e.jpg";

// Awards
import award1 from "@/public/assets/Awards/IMG-20230901-WA0007.jpg"
import award2 from "@/public/assets/Awards/IMG-20230901-WA0016.jpg"
import award3 from "@/public/assets/Awards/IMG-20230901-WA0021.jpg"
import award4 from "@/public/assets/Awards/IMG-20230902-WA0008.jpg"
import award5 from "@/public/assets/Awards/IMG-20230902-WA0010.jpg"
import award6 from "@/public/assets/Awards/IMG-20230902-WA0011.jpg"
import award7 from "@/public/assets/Awards/IMG-20230902-WA0013.jpg"
import award8 from "@/public/assets/Awards/IMG-20230902-WA0014.jpg"
import award9 from "@/public/assets/Awards/IMG-20230902-WA0016.jpg"
import award10 from "@/public/assets/Awards/IMG-20230902-WA0017.jpg";

// Personal
import personal1 from "@/public/assets/Personal/10917922_10152763908683821_5699657828297516384_o.jpg"
import personal2 from "@/public/assets/Personal/13233114_10153844171368821_1091856945645392456_n.jpg"
import personal3 from "@/public/assets/Personal/44328560_10156120142578821_7370183602425823232_n.jpg"
import personal4 from "@/public/assets/Personal/519679081_726370443625853_4347573641347741800_n.jpg"
import personal5 from "@/public/assets/Personal/548221897_773728268890070_8869759387899198366_n.jpg"
import personal6 from "@/public/assets/Personal/550292162_779922431603987_4012121271477884436_n.jpg"
import personal7 from "@/public/assets/Personal/557611987_788473394082224_4857474897026294488_n.jpg"
import personal8 from "@/public/assets/Personal/557695674_788180590778171_2518111243948490733_n.jpg"
import personal9 from "@/public/assets/Personal/56985312_10156473594983821_5018688428045238272_n.jpg"
import personal10 from "@/public/assets/Personal/WhatsApp Image 2023-03-22 at 23.16.57 (2).jpeg"

// Music Events
import musicEvent1 from "@/public/assets/Events/evemt (1).jpg"
import musicEvent2 from "@/public/assets/Events/evemt (2).jpg"
import musicEvent3 from "@/public/assets/Events/evemt (3).jpg"
import musicEvent4 from "@/public/assets/Events/evemt (4).jpg"
// import musicEvent5 from "@/public/assets/Events/evemt (5).jpg"
import musicEvent6 from "@/public/assets/Events/evemt (6).jpg"
import musicEvent7 from "@/public/assets/Events/evemt (7).jpg"
import musicEvent8 from "@/public/assets/Events/evemt (8).jpg"
import musicEvent9 from "@/public/assets/Events/evemt (9).jpg"
import musicEvent10 from "@/public/assets/Events/evemt (10).jpg"


export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("productions");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [ "Productions","Awards",  "Personal", "Music Events","Videos"];



  const mediaItems = [
    {
      type: "image",
      url: production1,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production2,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production3,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production4,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production5,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production6,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: production7,
      category: "productions",
      title: "",
    },
    {
      type: "image",
      url: award1,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award2,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award3,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award4,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award5,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award6,
      category: "awards",
      title: "",
    },
    {
      type: "image",
      url: award7,
      category: "awards",
      title: "",
    },
    {
      type: "image",
        url: award8,
      category: "awards",
      title: "",
    },
     {
       type: "image",
       url: award9,
       category: "awards",
       title: "",
     },
     {
       type: "image",
       url: award10,
       category: "awards",
       title: "",
     },
   {
    type: "image",
    url: personal1,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal2,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal3,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal4,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal5,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal6,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal7,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal8,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal9,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: personal10,
    category: "personal",
    title: "",
   },
   {
    type: "image",
    url: musicEvent1,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent2,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent3,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent4,
    category: "music events",
    title: "",
   },
  //  {
  //   type: "image",
  //   url: musicEvent5,
  //   category: "music events",
  //   title: "",
  //  },
   {
    type: "image",
    url: musicEvent6,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent7,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent8,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent9,
    category: "music events",
    title: "",
   },
   {
    type: "image",
    url: musicEvent10,
    category: "music events",
    title: "",
   },
  {
    type: "video",
    url: "https://www.youtube.com/embed/qOwClkjbYw4",
    category: "videos",
    title: "",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/uVdZxm_3w_I",
    category: "videos",
    title: "",
  }

  ];

  const filteredMedia = mediaItems.filter(item => item.category === activeFilter.toLowerCase());
  
  // Debug: Log the filtering results
  console.log('Active Filter:', activeFilter);
  console.log('Filtered Media Count:', filteredMedia.length);
  console.log('Filtered Media Categories:', filteredMedia.map(item => item.category));

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
     
          <h2 className="text-5xl md:text-7xl mb-8 text-slate-400">Visual <span className="text-orange-600 font-bold ">Journey</span></h2>
          
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
        <div key={activeFilter} className="columns-1 md:columns-2 lg:columns-3 gap-8 mb-12 space-y-8">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={`${activeFilter}-${item.type}-${index}`}
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
                      src={item.url.toString()}
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
                        src={filteredMedia[currentImageIndex]?.url.toString()}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                
                {/* Media Info */}
                {
                filteredMedia[currentImageIndex]?.type !== "video" && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-medium mb-2">
                    {filteredMedia[currentImageIndex]?.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {currentImageIndex + 1} of {filteredMedia.length}
                  </p>
                </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
