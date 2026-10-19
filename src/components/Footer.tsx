import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronUp, 
  Heart,
  Globe,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      
      {/* Upper Footer: Branding & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: School Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight">
                  SMK NEGERI 2 BIAU
                </h3>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  Kabupaten Buol, Provinsi Sulawesi Tengah
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Sekolah Menengah Kejuruan Negeri unggulan vokasi Agribisnis & Teknologi Informasi di Kelurahan Kulango, Kecamatan Biau. Membekali siswa dengan kompetensi bersertifikasi, etos kerja tinggi, dan karakter luhur.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                NPSN: {SCHOOL_INFO.npsn}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/70 text-emerald-400 border border-emerald-800/40">
                Akreditasi: {SCHOOL_INFO.akreditasi}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                {SCHOOL_INFO.status}
              </span>
            </div>
          </div>

          {/* Column 2: Program Keahlian (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Program Keahlian
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('jurusan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  • Teknik Komputer dan Jaringan (TKJ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jurusan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  • Agribisnis Tanaman Pangan & Hortikultura (ATPH)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jurusan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  • Agribisnis Pengolahan Hasil Pertanian (APHP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jurusan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  • Agribisnis Ternak Unggas (ATU)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi Cepat (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-emerald-400 transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sambutan')} className="hover:text-emerald-400 transition-colors">
                  Sambutan Kepala
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ppdb')} className="hover:text-emerald-400 transition-colors text-emerald-400 font-bold">
                  PPDB Online 2025
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fasilitas')} className="hover:text-emerald-400 transition-colors">
                  Fasilitas & Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('denah')} className="hover:text-emerald-400 transition-colors">
                  Denah Kampus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('berita')} className="hover:text-emerald-400 transition-colors">
                  Berita & Agenda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontak')} className="hover:text-emerald-400 transition-colors">
                  Kontak & Lokasi
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak & Alamat (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Alamat Kampus
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {SCHOOL_INFO.address.street}, Kel. Kulango, Kec. Biau, Kab. Buol, Sulawesi Tengah 94563
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <p className="text-slate-300 font-medium">
                WA: {SCHOOL_INFO.contacts.whatsapp}
              </p>
              <p className="text-slate-300 font-medium truncate">
                {SCHOOL_INFO.contacts.email}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back-to-Top */}
      <div className="border-t border-slate-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>SMK Negeri 2 Biau</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
            <span className="hidden sm:inline"> • Dinas Pendidikan Provinsi Sulawesi Tengah</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
};
