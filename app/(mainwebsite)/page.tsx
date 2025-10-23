import React from 'react'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { DotaraAppSection } from './components/DotaraAppSection';
import { AwardsSection } from './components/AwardsSection2';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { VenturesSection } from './components/VenturesSection';
import { ContactSection } from './components/ContactUs';

const page = () => {
  return (
    <div className='bg-black'>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <DotaraAppSection />
        <AwardsSection />
        <TestimonialsSection />
        <GallerySection />
        <NewsSection />
        <VenturesSection />
        <ContactSection />
    </div>
  )
}

export default page