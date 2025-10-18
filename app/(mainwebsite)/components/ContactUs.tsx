"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="">
      <div className="container px-10  py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-wider text-slate-400 mb-4">Get in Touch</p>
            <h2 className="text-5xl md:text-7xl mb-6 text-slate-400">Contact</h2>
            <p className="text-lg text-slate-400">
              For collaborations, interviews, or partnerships — let&apos;s connect
            </p>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16 pb-4  "
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center  gap-2 mb-3">
                <Mail size={16} className="text-slate-400" />
            <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
              </div>
              <a href="mailto:rupkothait@gmail.com" className="hover:text-white text-slate-400 transition-colors">
                rupkothait@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} className="text-slate-400" />
                <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
              </div>
              <a href="tel:+880197000700" className="hover:text-white text-slate-400 transition-colors">
                +88 0197-0007007
              </a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-slate-400" />
                <p className="text-xs uppercase tracking-wider text-slate-400">Location</p>
              </div>
              <p className="text-slate-400">Dhaka, Bangladesh</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-900 transition-colors "
                />
              </div>
              <div>
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-400 transition-colors "
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-900 transition-colors "
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-900 transition-colors "
                />
              </div>
            </div>

            <div>
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-900 transition-colors "
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-transparent text-slate-400 border-slate-400 focus:border-slate-400 transition-colors resize-none "
              />
            </div>

            <div className="text-center ">
              <Button 
                type="submit" 
                size="lg"
                    className="border-white/20 bg-slate-400 text-black hover:bg-white hover:text-black transition-all rounded w-full "
              >
                Send
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
