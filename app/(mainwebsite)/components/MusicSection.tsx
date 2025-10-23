"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Music, Book, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export function MusicSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const featuredSongs = [
    {
      id: "qPU_NuaLBGE",
      title: "Bangladesh Amar",
      channel: "RUPKOTHAMUSIC"
    },
   
    {
      id: "W5KachMJFcs",
      title: "Jacche Jibon",
      channel: "RUPKOTHAMUSIC"
    },
    {
      id: "uVdZxm_3w_I",
      title: "Shanti Ashuk fire",
      channel: "RUPKOTHAMUSIC"
    },
    {
      id: "x8ia2FJLzj0",
      title: "Ami Valo Nei ",
      channel: "RUPKOTHAMUSIC"
    },
   
    {
      id: "yYSaput5ESY",
      title: "Krishnokoli",
      channel: "RUPKOTHAMUSIC"
    },
    {
      id: "5euSxHpsZic",
      title: "Ami Vishon Ekla",
      channel: "MultisourcingLtd"
    },
   
    
    {
      id: "pT7FkyjFpLg",
      title: "Diba Shopno",
      channel: "MultisourcingLtd"
    },
    {
      id: "srxi5tRXBLM",
      title: "Ar Diona Jantrona",
      channel: "RUPKOTHAMUSIC"
    },
    {
      id: "qOwClkjbYw4",
      title: "Mayar Badhon ",
      channel: "RUPKOTHAMUSIC"
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="music" >
      <div className="container mx-auto px-10 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-5xl md:text-7xl mb-4 text-slate-400">
            Notable Contributions
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredSongs.map((song, index) => (
                    <motion.div
                      key={song.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                      onClick={() => openVideo(song.id)}
                    >
                      <div className="relative aspect-video  w-full ">
                        <img
                          src={`https://img.youtube.com/vi/${song.id}/maxresdefault.jpg`}
                          alt={song.title}
                          width={500}
                          height={500}
                          className="object-cover group-hover:scale-105 transition-transform h-full w-full duration-300"
                        />
                        
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-slate-400 mb-1">{song.title}</h4>
                        <p className="text-sm text-slate-500">{song.channel}</p>
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

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={closeVideo}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-slate-700">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white text-xl">Music Video</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video p-6 pt-0">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
