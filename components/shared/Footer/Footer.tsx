"use client";
import {
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
  } from "lucide-react";
  
  export function Footer() {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const links = {
      about: [
        { label: "Biography", id: "about" },
        { label: "Philosophy", id: "about" },
        { label: "Leadership", id: "about" },
      ],
      work: [
        { label: "Music & Lyrics", id: "music" },
        { label: "Gallery", id: "gallery" },
        { label: "Awards", id: "awards" },
      ],
      ventures: [
        { label: "Rupkotha Productions", url: "#" },
        { label: "Dotara.com", url: "#" },
        { label: "BdStar24.com", url: "#" },
      ],
    };
  
    const socialLinks = [
      { icon: Facebook, label: "Facebook", url: "#" },
      { icon: Instagram, label: "Instagram", url: "#" },
      { icon: Youtube, label: "YouTube", url: "#" },
      { icon: Linkedin, label: "LinkedIn", url: "#" },
    ];
  
    return (
      <footer className="border-t border-gray-800 bg-black">
        <div className="container py-16">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <h4 className="text-5xl font-beau-rivage mb-4 text-white hover:text-white transition-colors">
                Enamul Kabir Sujan
              </h4>
              <p className="text-sm text-white/70 mb-6 max-w-sm">
                Lyricist, Producer, Visionary, and Philanthropist
                — Celebrating timeless words and visionary
                leadership that shape Bangla culture.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className="w-10 h-10  flex items-center justify-center hover:bg-white text-slate-400 hover:text-black transition-all"
                    >
                      <Icon size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Links */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white hover:text-white transition-colors">
                  About
                </h4>
                <ul className="space-y-3">
                  {links.about.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white hover:text-white transition-colors">
                  Work
                </h4>
                <ul className="space-y-3">
                  {links.work.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white hover:text-white transition-colors">
                  Ventures
                </h4>
                <ul className="space-y-3">
                  {links.ventures.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} Enamul Kabir Sujan.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/70">
              <a
                href="#"
                className="hover:text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }