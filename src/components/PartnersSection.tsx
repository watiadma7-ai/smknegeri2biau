import React from 'react';
import { Sparkles, Building2, Quote, Award, CheckCircle2 } from 'lucide-react';
import { INDUSTRY_PARTNERS } from '../data/schoolData';

export const PartnersSection: React.FC = () => {
  const alumniTestimonials = [
    {
      name: 'Aditya Ramadhan',
      gradYear: 'Lulusan TKJ 2023',
      currentRole: 'Network Support Specialist di Perusahaan ISP Regional & Wirausaha RT-RW Net',
      quote: 'Belajar TKJ di SMKN 2 Biau membuka pintu karir saya. Praktik langsung setting Mikrotik, server Linux, dan splicing fiber optic di lab membuat saya langsung percaya diri bekerja pasca lulus tanpa minder.',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Nurhaliza Paputungan',
      gradYear: 'Lulusan ATPH 2022',
      currentRole: 'Wirausaha Agripreneur Hortikultura & Supplier Sayuran Hidroponik Buol',
      quote: 'Lahan praktik 2 hektar dan Smart Greenhouse di SMKN 2 Biau mengajarkan saya bahwa pertanian bukan lagi cara kuno, melainkan bisnis modern berbasis nutrisi terukur dan irigasi otomatis.',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Fauzi Mokodompit',
      gradYear: 'Lulusan APHP 2023',
      currentRole: 'Staf Quality Control & Pemilik Usaha Bakery Olahan Buol',
      quote: 'Di jurusan APHP, kami dibekali standar sanitasi HACCP dan diajarkan resep aneka roti komersial. Sekarang saya punya usaha produksi kue sendiri di Biau yang rutin menerima pesanan hajatan.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Sinergi Industri & Jejak Lulusan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kemitraan DUDI & Kisah Sukses Alumni
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Link and Match kurikulum SMKN 2 Biau dengan dunia usaha, dunia industri, dan instansi pemerintah guna memastikan kesiapan kerja lulusan.
          </p>
        </div>

        {/* Industry Partners Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {INDUSTRY_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/50 hover:shadow-md transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {partner.badge}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-tight">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Kata Mereka yang Telah Membuktikan
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Lulusan SMKN 2 Biau telah tersebar di berbagai sektor industri dan kewirausahaan mandiri
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniTestimonials.map((alumni, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-emerald-200 absolute top-4 right-4" />

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative z-10">
                "{alumni.quote}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <img
                  src={alumni.imageUrl}
                  alt={alumni.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shadow-sm shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {alumni.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-emerald-700 block">
                    {alumni.gradYear}
                  </span>
                  <span className="text-[10px] text-slate-500 line-clamp-1 block">
                    {alumni.currentRole}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
