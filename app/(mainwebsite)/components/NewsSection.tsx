"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function NewsSection() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1661261400335-7dc71eb2b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y2VyfGVufDF8fHx8MTc2MDYyODAzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Record-breaking tour brings spectacular musical experience to millions worldwide",
      date: "March 15, 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1732186702796-ecb3c05d1968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwbXVzaWMlMjBjdWx0dXJlfGVufDF8fHx8MTc2MDcwNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Revolutionary collaboration reshapes the future of Bangladeshi music industry",
      date: "March 10, 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1692930675044-d1309a0e6b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGdhbGxlcnklMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDcwNzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Major cultural milestone achieved through innovative artistic programming",
      date: "February 28, 2024",
    },
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
            <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Latest Updates</p>
            <h2 className="text-5xl md:text-7xl text-slate-400">Blogs & News</h2>
          </div>
          {/* <Button 
            variant="link" 
            className="text-slate-400 hover:text-slate-900 hidden md:block"
          >
            See All →
          </Button> */}
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
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
              <h3 className="text-xl leading-tight text-slate-700 transition-colors">
                {item.title}
              </h3>
              <Button 
                variant="link" 
                className="text-slate-400 hover:text-slate-900 p-0 h-auto mt-4 text-sm"
              >
                Read More →
              </Button>
            </motion.div>
          ))}
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
