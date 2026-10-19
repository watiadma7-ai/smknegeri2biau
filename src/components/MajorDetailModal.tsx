import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Briefcase, 
  Building2, 
  BookOpen, 
  Users, 
  ArrowRight,
  Network,
  Sprout,
  UtensilsCrossed,
  Egg
} from 'lucide-react';
import { Major } from '../types';

interface MajorDetailModalProps {
  major: Major | null;
  onClose: () => void;
  onApply: (majorName: string) => void;
}

export const MajorDetailModal: React.FC<MajorDetailModalProps> = ({ 
  major, 
  onClose,
  onApply
}) => {
  if (!major) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header with Hero Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
          <img 
            src={major.imageUrl} 
            alt={major.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-md"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-xs font-black bg-white text-slate-900 shadow">
                {major.code}
              </span>
              <span className="text-xs text-emerald-300 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Daya Tampung: {major.targetCapacity} Siswa
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {major.name}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Tentang Program Keahlian
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {major.fullDescription}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
            {major.highlightStats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Competencies Learned */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded-lg bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Kompetensi Keahlian yang Dikuasai
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {major.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Available */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded-lg bg-blue-100 text-blue-700">
                <Building2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Sarana & Laboratorium Pendukung
              </h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {major.facilities.map((fac, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{fac}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Prospects */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded-lg bg-amber-100 text-amber-800">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Peluang Karir & Dunia Usaha Pasca Lulus
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {major.careerProspects.map((prospect, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200"
                >
                  {prospect}
                </span>
              ))}
            </div>
          </div>

          {/* Semester Curriculum Breakdown */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded-lg bg-teal-100 text-teal-700">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Struktur Pembelajaran (Kurikulum Merdeka)
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {major.curriculumHighlights.map((curr, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="inline-block text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded mb-2">
                    {curr.semester}
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {curr.subjects.map((subj, sIdx) => (
                      <li key={sIdx} className="line-clamp-2">• {subj}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Action */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 rounded-b-2xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Pendaftaran Gratis • Bebas Biaya SPP Sekolah Negeri
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-200 font-semibold text-xs sm:text-sm transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onApply(major.name);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all"
            >
              <span>Daftar Jurusan Ini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
