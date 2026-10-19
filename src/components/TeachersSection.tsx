import React, { useState } from 'react';
import { Sparkles, GraduationCap, Award, BookOpen, Quote } from 'lucide-react';
import { TEACHERS_DATA } from '../data/schoolData';
import { Teacher } from '../types';

export const TeachersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Pimpinan',
    'Guru Produktif TKJ',
    'Guru Produktif Agribisnis',
    'Guru Umum',
    'Tenaga Kependidikan'
  ];

  const filteredTeachers = selectedCategory === 'Semua'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <section id="guru" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Pendidik & Tenaga Kependidikan
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dewan Guru & Tenaga Kependidikan
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Dibina oleh para guru berkualifikasi S1 dan S2 dengan sertifikasi pendidik profesional, asesor kompetensi kejuruan, dan praktisi industri.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={teacher.imageUrl}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded text-white inline-block mb-1">
                    {teacher.category}
                  </span>
                  <h3 className="font-bold text-base leading-tight">
                    {teacher.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <p className="text-xs font-semibold text-emerald-700">
                    {teacher.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {teacher.role}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{teacher.education}</span>
                  </div>
                </div>

                {teacher.quote && (
                  <p className="text-[11px] text-slate-600 italic bg-slate-50 p-2 rounded-lg border border-slate-100 line-clamp-3">
                    "{teacher.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
