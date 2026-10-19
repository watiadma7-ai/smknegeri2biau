import React from 'react';
import { Quote, Award, Sparkles, CheckCircle2, Target, HeartHandshake } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const PrincipalWelcome: React.FC = () => {
  return (
    <section id="sambutan" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Pesan Pimpinan Sekolah
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sambutan Kepala SMK Negeri 2 Biau
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Mengantarkan putra-putri Kabupaten Buol menjadi tenaga vokasi terampil, mandiri, dan berakhlak mulia
          </p>
        </div>

        {/* Principal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Principal Photo & Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition duration-500"></div>
              
              <div className="relative bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg p-3">
                <img
                  src={SCHOOL_INFO.headmaster.imageUrl}
                  alt={SCHOOL_INFO.headmaster.name}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-xl"
                />
                
                <div className="p-4 bg-white rounded-xl mt-3 border border-slate-100 shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Kepala Sekolah
                    </span>
                    <span className="text-xs text-slate-400">Periode: {SCHOOL_INFO.headmaster.period}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {SCHOOL_INFO.headmaster.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    NIP. {SCHOOL_INFO.headmaster.nip}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    "{SCHOOL_INFO.headmaster.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Letter & Vision-Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative">
              <Quote className="w-12 h-12 text-emerald-100 absolute -top-4 -left-4 -z-0 pointer-events-none" />
              <div className="relative z-10 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-900 text-base sm:text-lg">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua,
                </p>
                <p>
                  Puji syukur ke hadirat Tuhan Yang Maha Esa atas segala limpahan rahmat-Nya sehingga SMK Negeri 2 Biau terus berkembang sebagai pusat keunggulan pendidikan vokasi di Kabupaten Buol, Sulawesi Tengah.
                </p>
                <p>
                  Dunia industri hari ini menuntut keahlian nyata yang adaptif. Di SMKN 2 Biau, kami memadukan potensi kekayaan alam agribisnis tanah Buol dengan akselerasi teknologi informasi dan jaringan digital. Siswa kami tidak hanya diajarkan teori di bangku kelas, melainkan langsung terjun di laboratorium komputer fiber optic, Smart Greenhouse pertanian hidroponik, dapur higienis pengolahan hasil pangan, dan kandang modern unggas komersial.
                </p>
                <p>
                  Melalui dukungan <strong>Dana Alokasi Khusus (DAK) senilai Rp 2,5 Miliar</strong>, kami telah memperluas laboratorium komputer modern, perpustakaan digital, serta ruang konseling BK dan UKS demi memastikan setiap siswa belajar dalam iklim yang aman, nyaman, dan berstandar industri.
                </p>
                <p className="font-medium text-slate-800">
                  Kepada seluruh calon peserta didik baru dan masyarakat Buol, pintu SMKN 2 Biau terbuka lebar. Mari bersama kami wujudkan mimpi, raih sertifikasi keahlian, dan melangkah mantap menjadi generasi vokasi yang membanggakan daerah dan bangsa.
                </p>
              </div>
            </div>

            {/* Visi & Misi Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Visi SMKN 2 Biau</span>
                </div>
                <p className="text-xs text-slate-700 leading-normal">
                  "Menjadi Sekolah Menengah Kejuruan yang unggul, berakhlak mulia, berwawasan lingkungan, dan menghasilkan lulusan vokasi mandiri serta kompetitif di tingkat regional maupun nasional."
                </p>
              </div>

              <div className="bg-teal-50/70 border border-teal-200/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-600" />
                  <span>Misi Utama Sekolah</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  <li>Menanamkan keimanan, ketakwaan, dan budi pekerti luhur.</li>
                  <li>Mengembangkan kurikulum vokasi selaras kebutuhan industri (DUDI).</li>
                  <li>Memanfaatkan teknologi modern ramah lingkungan di bidang TI & Pertanian.</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
