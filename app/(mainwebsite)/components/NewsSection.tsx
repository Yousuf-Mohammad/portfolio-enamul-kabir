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
      image: "https://mzamin.com/uploads/news/main/43696_en.webp",
      title: "Enamul Kabir Sujan is the coordinator of the USBCCI Bangladesh",
      date: "February 21,  2023",
      link: "https://mzamin.com/news.php?news=43696#gsc.tab=0",
      source: "Daily Manab Zamin"
    },
    {
      image: "https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/a/2020/12/30/image-210388-1609320509.jpg",
      title: "Prince Mahmud composed the music for Enamul Kabir Sujan's song",
      date: "December 30, 2020",
      link: "https://www.ittefaq.com.bd/210388",
      source: "Daily Ittefaq"
    },
    {
      image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2020/09/16/suman-kabir-160920-01.jpg",
      title: "Kabir Suman's song comes on his birthday",
      date: "March 16, 2022",
      link: "https://bangla.bdnews24.com/glitz/article2031034.bdnews",
      source: "BDNews24"
    },
    {
      image: "https://bangladeshpost.net/webroot/uploads/featureimage/2020-09/5f6208d51237f.jpg",
      title: "Kabir Sumon vocalises Bangladeshi lyrics",
      date: "September 16, 2024",
      link: "https://bangladeshpost.net/posts/kabir-sumon-vocalises-bangladeshi-lyrics-42457",
      source: "Bangladesh Post"
    },
    {
      image: "https://asset.news24bd.tv/public/news_images/2023/03/19/1679245951-b916cc93c17f7bfe4db3363a060e6ce0.jpg?w=828&q=100",
      title: "Press conference held on the occasion of USBCCI's Business Expo",
      date: "August 12, 2024",
      link: "https://www.news24bd.tv/details/129519",
      source: "News24BD"
    },
    
    {
      image: "https://i0.wp.com/www.channelionline.com/wp-content/uploads/2023/02/made-in-ctg.jpg?resize=750%2C536&quality=100&ssl=1",
      title: "'Made in Chittagong' is being released in 51 theaters in the United States",
      date: "February 9, 2023",
      link: "https://www.channelionline.com/made-in-chittagong-movie-release/",
      source: "Channel i Online"
    },
    {
      image: "https://samakal.com/media/imgAll/uploads/2022/06/online/photos/086-samakal-6299f441d8c3d.jpg",
      title: "Nachiketa sang an anti-war song to the tune of Sujan",
      date: "June 3, 2022",
      link: "https://samakal.com/rangpur/article/2206114728",
      source: "Samakal"
    },
    {
      image: "https://cdn.bd-pratidin.com/public/news_images/2023/02/08/130112_bangladesh_pratidin_Untitled-1.jpg",
      title: "Made in Chittagong in 51 cinemas in America",
      date: "February 8, 2023",
      link: "https://www.bd-pratidin.com/probash-potro/2023/02/08/856609",
      source: "Bangladesh Pratidin"
    },
    {
      image: "https://samakal.com/media/imgAll/uploads/2022/06/online/photos/086-samakal-6299f441d8c3d.jpg",
      title: "Nachiketa sang an anti-war song to the tune of Sujan",
      date: "June 3, 2022",
      link: "https://samakal.com/rangpur/article/2206114728",
      source: "Samakal"
    }
  ];

  return (
    <section id="news" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
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
            <h2 className="text-5xl md:text-7xl text-slate-400"> News & <span className="text-orange-600 font-bold ">Articles</span></h2>
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
              delay: 3000,
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
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
            }}
            className="news-swiper"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={`news-${index}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
                    {item.date}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-slate-600 transition-colors mb-2 ">
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
                   
                      Read More →
                  
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
