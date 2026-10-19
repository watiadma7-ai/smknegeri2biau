import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  X, 
  Layers, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/schoolData';
import { Facility } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeFacilityModal, setActiveFacilityModal] = useState<Facility | null>(null);

  const categories = [
    'Semua',
    'Laboratorium & Bengkel',
    'Pertanian & Peternakan',
    'Fasilitas Umum',
    'Olahraga & Ibadah'
  ];

  const filteredFacilities = selectedCategory === 'Semua'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === selectedCategory);

  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Sarana & Prasarana Vokasi
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fasilitas Modern SMKN 2 Biau
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Didukung realisasi Dana Alokasi Khusus (DAK) Rp 2,5 Miliar. Menghadirkan lingkungan praktik berstandar industri dengan teknologi terkini di Kabupaten Buol.
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setActiveFacilityModal(facility)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-slate-800 backdrop-blur-sm shadow">
                  {facility.category}
                </span>
                <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {facility.capacity}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-bold">
                  <span>Lihat Fasilitas Lengkap</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Detail Modal */}
      {activeFacilityModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 text-left">
            <div className="relative h-56">
              <img
                src={activeFacilityModal.imageUrl}
                alt={activeFacilityModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveFacilityModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded text-white inline-block mb-1">
                  {activeFacilityModal.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black">
                  {activeFacilityModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeFacilityModal.description}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Kapasitas Penggunaan:</span>
                <span className="font-bold text-slate-900">{activeFacilityModal.capacity}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Daftar Alat & Sarana Pendukung:
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {activeFacilityModal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveFacilityModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
