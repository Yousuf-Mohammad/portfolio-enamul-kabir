"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Music, Book, ArrowRight } from "lucide-react";

export function MusicSection() {
  const featuredSongs = [
    {
      title: "Premer Gaan",
      singer: "Various Artists • Rahman Ahmed",
      year: "2024",
      genre: "Romantic",
    },
    {
      title: "Shadhinota",
      singer: "Habib Wahid • Shayan Chowdhury",
      year: "2023",
      genre: "Patriotic",
    },
    {
      title: "Mon Bojhena",
      singer: "Tahsan Khan • Arnob",
      year: "2023",
      genre: "Pop",
    },
    {
      title: "Rupkotha",
      singer: "Mila Islam • Fuad Almuqtadir",
      year: "2022",
      genre: "Contemporary",
    },
    {
      title: "Shopno Dekhi",
      singer: "Hridoy Khan • Ayon Chaklader",
      year: "2022",
      genre: "Folk Fusion",
    },
    {
      title: "Bhalobasha Chay",
      singer: "Various Artists",
      year: "2021",
      genre: "Romantic",
    },
  ];

  return (
    <section id="music" >
      <div className="container mx-auto px-10 lg:px-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-5xl md:text-7xl mb-4 text-slate-400">
            Music & Lyrics
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Explore a collection of lyrical masterpieces that have become part of Bangladesh&apos;s cultural memory.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] mb-6 rounded-2xl h-[400px] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1581650127213-e72e2271ff15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHJlY29yZGluZyUyMGx5cmljc3xlbnwxfHx8fDE3NjA3MDc5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Music Production"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={580}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-4xl md:text-5xl mb-4">Words that Resonate</h3>
            <p className="text-lg text-white/90 max-w-md">
              Each song reflects poetic vision, emotional depth, and connection to everyday life.
            </p>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Tabs defaultValue="songs" className="w-full border border-border  p-4 rounded-2xl ">
            <TabsList className="grid w-full  grid-cols-2 gap-2 mb-6">
              <TabsTrigger value="songs" className="flex items-center gap-2 border border-border p-3 rounded-2xl ">
                <Music className="w-4 h-4" />
                Songs
              </TabsTrigger>
              <TabsTrigger value="lyrics" className="flex items-center gap-2 border border-border p-3 rounded-2xl ">
                <Book className="w-4 h-4 " />
                Lyrics Archive
              </TabsTrigger>
            </TabsList>

            <TabsContent value="songs" className="space-y-12">
              {/* Popular Songs Section */}
              <div>
                <h3 className="text-3xl md:text-4xl mb-4 text-slate-400">Popular Songs</h3>
                <p className="text-slate-400 mb-8">
                  Lyrical masterpieces performed by Bangladesh&apos;s most beloved voices.
                </p>
                
                <div className="space-y-4 ">
                  {featuredSongs.map((song, index) => (
                    <motion.div
                      key={song.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 hover:bg transition-all group cursor-pointer border border-border border-slate-800 rounded-xl "
                    >
                      <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-slate-400">
                        <Play size={16}  />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-slate-400">{song.title}</h4>
                        <p className="text-sm text-slate-400">{song.singer}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-slate-400 text-slate-400">
                          {song.genre}
                        </Badge>
                        <span className="text-sm text-slate-400">{song.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

             
            </TabsContent>

            <TabsContent value="lyrics" className="space-y-12">
              {/* Digital Lyrics Library */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl text-slate-400 flex items-center gap-3">
                    
                      Digital Lyrics Library
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-lg leading-relaxed">
                      Browse, read, and share lyrical works that have become part of Bangladesh&apos;s cultural memory. 
                     
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="mt-6 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-black"
                    >
                      Explore Library
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
