import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Users, 
  HeartPulse, 
  Trophy, 
  Monitor, 
  Clock, 
  Award,
  UserCheck
} from 'lucide-react';
import { EXTRACURRICULARS_DATA } from '../data/schoolData';
import { Extracurricular } from '../types';

export const StudentLifeSection: React.FC = () => {
  const [selectedExtra, setSelectedExtra] = useState<Extracurricular>(EXTRACURRICULARS_DATA[0]);

  const getExtraIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-indigo-600" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-cyan-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Karakter & Potensi Siswa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ekstrakurikuler & Kehidupan Siswa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Mengasah kepemimpinan, kepedulian sosial, olahraga, kreativitas digital, dan pelestarian seni budaya tradisional Kabupaten Buol.
          </p>
        </div>

        {/* Layout: Interactive List on Left, Active Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Extracurriculars List (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {EXTRACURRICULARS_DATA.map((extra) => (
              <div
                key={extra.id}
                onClick={() => setSelectedExtra(extra)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedExtra.id === extra.id
                    ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 shrink-0">
                    {getExtraIcon(extra.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {extra.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">
                      {extra.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {extra.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    {extra.schedule}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Detail Spotlight (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                {getExtraIcon(selectedExtra.icon)}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {selectedExtra.category}
                </span>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {selectedExtra.name}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {selectedExtra.description}
            </p>

            {/* Coach & Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                  Pembina / Pelatih
                </span>
                <span className="font-bold text-slate-900">{selectedExtra.coach}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                  Jadwal Latihan
                </span>
                <span className="font-bold text-slate-900">{selectedExtra.schedule}</span>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Prestasi & Rekam Jejak Kegiatan:</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                {selectedExtra.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/80">
                    <span className="text-amber-700 font-bold">🏆</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
              <strong>Info Siswa:</strong> Setiap siswa SMKN 2 Biau diwajibkan mengikuti Gerakan Pramuka (Kelas X) serta dipersilakan memilih 1-2 kegiatan ekstrakurikuler peminatan secara gratis.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
