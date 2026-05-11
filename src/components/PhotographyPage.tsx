import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar, ArrowLeft, Instagram, Share2 } from 'lucide-react';
import { DATA } from '../data';
import { Link } from 'react-router-dom';

export const PhotographyPage = () => {
  return (
    <div className="min-h-screen bg-black text-slate-300 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-indigo-500 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-black">GN</div>
            <span className="font-mono text-sm font-bold tracking-tighter text-white">PHOTOGRAPHY</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-indigo-500/50" />
            <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase">Visual Journal</span>
            <div className="h-px w-8 bg-indigo-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            Beyond the <span className="text-indigo-500">Lens</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            A collection of moments captured through my lens, exploring the intersection of urban architecture, 
            natural landscapes, and the subtle beauty of everyday life.
          </p>
        </motion.div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DATA.photography.map((photo, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-2xl shadow-indigo-500/5">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{photo.date}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {photo.title}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {photo.description}
                </p>

                <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-indigo-400 transition-colors pt-2">
                  View Story <ArrowLeft className="w-3 h-3 rotate-180" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-black">GN</div>
            <span className="text-slate-500 text-sm">© 2026 Gaurav Najpande. Visual Journal.</span>
          </div>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-slate-500">
            <Link to="/" className="hover:text-indigo-500 transition-colors">Portfolio</Link>
            <a href="#" className="hover:text-indigo-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
