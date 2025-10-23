"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function NewsSection() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1661261400335-7dc71eb2b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y2VyfGVufDF8fHx8MTc2MDYyODAzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Enamul Kabir Sujan's Musical Journey Featured in Daily Manab Zamin",
      date: "December 15, 2024",
      link: "https://mzamin.com/news.php?news=43696#gsc.tab=0",
      source: "Daily Manab Zamin"
    },
    {
      image: "https://images.unsplash.com/photo-1732186702796-ecb3c05d1968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwbXVzaWMlMjBjdWx0dXJlfGVufDF8fHx8MTc2MDcwNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cultural Excellence Recognition in Ittefaq Newspaper",
      date: "November 28, 2024",
      link: "https://www.ittefaq.com.bd/210388",
      source: "Daily Ittefaq"
    },
    {
      image: "https://images.unsplash.com/photo-1692930675044-d1309a0e6b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGdhbGxlcnklMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDcwNzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Bangladeshi Music Industry Spotlight in BDNews24",
      date: "October 22, 2024",
      link: "https://bangla.bdnews24.com/glitz/article2031034.bdnews",
      source: "BDNews24"
    },
    {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGV2ZW50fGVufDF8fHx8MTc2MDcwNzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kabir Sumon Vocalises Bangladeshi Lyrics - Bangladesh Post",
      date: "September 18, 2024",
      link: "https://bangladeshpost.net/posts/kabir-sumon-vocalises-bangladeshi-lyrics-42457",
      source: "Bangladesh Post"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8MTc2MDcwNzk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Media Industry Insights in News24BD",
      date: "August 12, 2024",
      link: "https://www.news24bd.tv/details/129519",
      source: "News24BD"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzYwNzA3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Economic Impact Analysis in Dhaka Post",
      date: "July 25, 2024",
      link: "https://www.dhakapost.com/economy/181036",
      source: "Dhaka Post"
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8MTc2MDcwODAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Made in Chittagong Movie Release Coverage",
      date: "June 30, 2024",
      link: "https://www.channelionline.com/made-in-chittagong-movie-release/",
      source: "Channel i Online"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdpb25hbCUyMG5ld3N8ZW58MXx8fHwxNzYwNzA4MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Regional News Coverage in Samakal",
      date: "May 15, 2024",
      link: "https://samakal.com/rangpur/article/2206114728",
      source: "Samakal"
    },
    {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9iYXNoJTIwcG90cm98ZW58MXx8fHwxNzYwNzA4MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Probash Potro Feature in BD Pratidin",
      date: "February 8, 2023",
      link: "https://www.bd-pratidin.com/probash-potro/2023/02/08/856609",
      source: "BD Pratidin"
    }
  ];

  return (
    <section id="news" className="">
      <div className="container px-10  py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            {/* <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Latest Updates</p> */}
            <h2 className="text-5xl md:text-7xl text-slate-400"> News & Articles</h2>
          </div>
          {/* <Button 
            variant="link" 
            className="text-slate-400 hover:text-slate-900 hidden md:block"
          >
            See All →
          </Button> */}
        </motion.div>

        {/* News Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.news-swiper-button-next',
              prevEl: '.news-swiper-button-prev',
            }}
            pagination={{
              el: '.news-swiper-pagination',
              clickable: true,
              bulletClass: 'news-swiper-pagination-bullet',
              bulletActiveClass: 'news-swiper-pagination-bullet-active',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
            }}
            className="news-swiper"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={item.title}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={1080}
                      height={1440}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
                    {item.date}
                  </p>
                  <h3 className="text-xl leading-tight text-slate-700 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    {item.source}
                  </p>
                  <Button 
                    asChild
                    variant="link" 
                    className="text-slate-400 hover:text-slate-900 p-0 h-auto text-sm"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Read More →
                    </a>
                  </Button>
                </motion.div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="news-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="news-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="news-swiper-pagination flex justify-center mt-8 space-x-2"></div>
        </div>

        {/* Mobile See All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:hidden"
        >
          <Button variant="outline" className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-black">
            See All News
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
