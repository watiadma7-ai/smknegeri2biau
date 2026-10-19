import React, { useState } from 'react';
import { 
  Network, 
  Sprout, 
  UtensilsCrossed, 
  Egg, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Sparkles,
  BookOpen,
  Building
} from 'lucide-react';
import { MAJORS_DATA } from '../data/schoolData';
import { Major } from '../types';

interface MajorsSectionProps {
  onSelectMajor: (major: Major) => void;
  onApplyForMajor: (majorName: string) => void;
}

export const MajorsSection: React.FC<MajorsSectionProps> = ({ 
  onSelectMajor, 
  onApplyForMajor 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'agri'>('all');

  const filteredMajors = MAJORS_DATA.filter((m) => {
    if (activeFilter === 'it') return m.id === 'tkj';
    if (activeFilter === 'agri') return m.id === 'atph' || m.id === 'aphp' || m.id === 'atu';
    return true;
  });

  const getMajorIcon = (id: string) => {
    switch (id) {
      case 'tkj': return <Network className="w-6 h-6 text-blue-600" />;
      case 'atph': return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'aphp': return <UtensilsCrossed className="w-6 h-6 text-amber-600" />;
      case 'atu': return <Egg className="w-6 h-6 text-rose-600" />;
      default: return <BookOpen className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="jurusan" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Kompetensi Kejuruan Unggulan
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Program Keahlian SMKN 2 Biau
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Disusun berdasarkan standar industri nasional dan potensi agribisnis serta teknologi di Kabupaten Buol, menghasilkan lulusan yang siap kerja, berwirausaha mandiri, maupun kuliah.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl text-xs font-semibold self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua (4)
            </button>
            <button
              onClick={() => setActiveFilter('it')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'it'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Teknologi Informasi
            </button>
            <button
              onClick={() => setActiveFilter('agri')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeFilter === 'agri'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Agribisnis & Pangan (3)
            </button>
          </div>
        </div>

        {/* Majors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMajors.map((major) => (
            <div
              key={major.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Header Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={major.imageUrl}
                  alt={major.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                {/* Badge code & capacity */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black bg-white text-slate-900 shadow-md">
                    {major.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-900/80 text-emerald-200 border border-emerald-500/30 backdrop-blur-sm">
                    Kuota: {major.targetCapacity} Siswa
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                  {getMajorIcon(major.id)}
                </div>

                {/* Title inside card cover */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                    {major.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {major.shortDescription}
                </p>

                {/* Top Competencies Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Keahlian Utama:
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {major.competencies.slice(0, 3).map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight Stats Pill */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs">
                  {major.highlightStats.slice(0, 2).map((h, idx) => (
                    <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">{h.label}</span>
                      <span className="font-bold text-slate-800">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectMajor(major)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors"
                  >
                    Detail Kurikulum & Lab
                  </button>
                  <button
                    onClick={() => onApplyForMajor(major.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Pilih Jurusan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
