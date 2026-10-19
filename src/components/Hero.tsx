import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Building2, 
  Award, 
  Users, 
  Network, 
  Sprout, 
  UtensilsCrossed, 
  Egg,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SCHOOL_INFO, MAJORS_DATA } from '../data/schoolData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onSelectMajor: (majorId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectMajor }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Motto & Accreditation Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                SMK Bisa! SMK Hebat!
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Sekolah Negeri • Akreditasi {SCHOOL_INFO.akreditasi}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                100% Bebas SPP & Uang Gedung
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Mencetak Generasi Vokasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Berkarakter, Kompeten, & Siap Kerja</span>
              </h1>
              <p className="text-emerald-400 font-semibold text-base sm:text-lg">
                SMK Negeri 2 Biau — Kabupaten Buol, Sulawesi Tengah
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Pusat pendidikan vokasi kejuruan terpadu di Kelurahan Kulango. Mengintegrasikan teknologi informasi modern dengan keunggulan agribisnis lokal Buol, didukung dana alokasi khusus (DAK) fasilitas lab komputer dan bengkel praktik bersertifikasi industri.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('ppdb')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Daftar PPDB Online 2025</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('jurusan')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Lihat 4 Jurusan</span>
              </button>

              <button
                onClick={() => onNavigate('fasilitas')}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-colors hover:underline"
              >
                <Building2 className="w-4 h-4 text-teal-400" />
                <span>Tur Fasilitas</span>
              </button>
            </div>

            {/* Core Pillars / Bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Teaching Factory & Lab Modern</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Penyaluran Kerja BKK Mitra DUDI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bebas Biaya Pendaftaran</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Major Highlights & Quick Preview */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card Container */}
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <h3 className="font-bold text-white text-base">4 Program Keahlian Pilihan</h3>
                  <p className="text-xs text-slate-400">Pilih jurusan sesuai minat bakat vokasimu</p>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Siap Kerja & Wirausaha
                </span>
              </div>

              {/* 4 Majors Interactive List */}
              <div className="space-y-2.5 mt-4">
                {MAJORS_DATA.map((major) => {
                  const getIcon = () => {
                    switch (major.id) {
                      case 'tkj': return <Network className="w-5 h-5 text-blue-400" />;
                      case 'atph': return <Sprout className="w-5 h-5 text-emerald-400" />;
                      case 'aphp': return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
                      case 'atu': return <Egg className="w-5 h-5 text-rose-400" />;
                      default: return <BookOpen className="w-5 h-5 text-emerald-400" />;
                    }
                  };

                  return (
                    <div
                      key={major.id}
                      onClick={() => onSelectMajor(major.id)}
                      className="group cursor-pointer p-3 rounded-xl bg-slate-900/60 hover:bg-emerald-950/40 border border-slate-700/50 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {getIcon()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                              {major.code}
                            </span>
                            <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                              Kuota: {major.targetCapacity} Siswa
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 group-hover:text-slate-300">
                            {major.name}
                          </p>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 pt-3 border-t border-slate-700/70 flex items-center justify-between text-xs text-slate-400">
                <span>Kurikulum Merdeka SMK</span>
                <button
                  onClick={() => onNavigate('jurusan')}
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 group"
                >
                  Detail Kompetensi
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* Quick Fact Banner */}
            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-700/40 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-black text-sm">
                DAK
              </div>
              <p className="text-xs text-emerald-200 leading-snug">
                <strong className="text-white">Alokasi DAK Rp 2,5 Milyar:</strong> Pembangunan Lab Komputer TKJ Baru, Gedung Perpustakaan Digital, dan Ruang Bimbingan Konseling.
              </p>
            </div>

          </div>

        </div>

        {/* Global Statistics Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5 text-center hover:border-emerald-500/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
