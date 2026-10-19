import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  User, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Award,
  Bell
} from 'lucide-react';
import { NEWS_DATA, AGENDA_DATA } from '../data/schoolData';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Berita', 'Prestasi', 'Pengumuman'];

  const filteredNews = activeCategory === 'Semua'
    ? NEWS_DATA
    : NEWS_DATA.filter((n) => n.category === activeCategory);

  const featuredNews = NEWS_DATA.find((n) => n.featured) || NEWS_DATA[0];

  return (
    <section id="berita" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Kabar & Agenda Kampus
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Warta & Agenda SMKN 2 Biau
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Update informasi pembangunan sekolah, panen raya produk siswa, prestasi kejuaraan, dan jadwal kegiatan akademik.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Layout: News Grid (8 cols) & Agenda Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: News Articles (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Featured Article Card */}
            {activeCategory === 'Semua' && (
              <div 
                onClick={() => onSelectNews(featuredNews)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-6 relative h-60 md:h-auto overflow-hidden">
                    <img
                      src={featuredNews.imageUrl}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-md shadow">
                      Sorotan Utama
                    </span>
                  </div>

                  <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {featuredNews.category}
                        </span>
                        <span>•</span>
                        <span>{featuredNews.date}</span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                        {featuredNews.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {featuredNews.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                      <span>Baca Selengkapnya</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other News Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredNews
                .filter((n) => activeCategory !== 'Semua' || n.id !== featuredNews.id)
                .map((news) => (
                  <div
                    key={news.id}
                    onClick={() => onSelectNews(news)}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                        {news.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{news.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                          {news.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {news.excerpt}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-bold">
                        <span>Baca Berita</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

          </div>

          {/* Right Column: Academic Agenda Calendar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Agenda Sekolah
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  2025
                </span>
              </div>

              {/* Agenda List */}
              <div className="space-y-3.5">
                {AGENDA_DATA.map((agenda) => (
                  <div 
                    key={agenda.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {agenda.category}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {agenda.time}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-1">
                      {agenda.title}
                    </h4>

                    <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-700">{agenda.date}</span>
                    </div>

                    <div className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{agenda.location}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Contact Callout Banner */}
            <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded inline-block">
                  Posko Informasi
                </span>
                <h4 className="font-extrabold text-base leading-snug">
                  Punya Pertanyaan Seputar Agenda atau PPDB?
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Hubungi staf humas SMKN 2 Biau melalui WhatsApp untuk konsultasi cepat.
                </p>
                <a
                  href="https://wa.me/6285241009823?text=Halo%20SMKN%202%20Biau,%20saya%20ingin%20bertanya%20seputar%20informasi%20sekolah"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-emerald-900 font-bold text-xs rounded-xl hover:bg-emerald-50 transition-colors shadow"
                >
                  <span>Chat Humas Sekolah</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
