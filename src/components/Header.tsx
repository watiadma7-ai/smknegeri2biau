import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  ChevronRight,
  Clock,
  BookOpen,
  Award
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'sambutan', label: 'Sambutan' },
    { id: 'jurusan', label: 'Program Keahlian' },
    { id: 'ppdb', label: 'PPDB 2025/2026', highlight: true },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'denah', label: 'Denah Kampus' },
    { id: 'berita', label: 'Berita & Agenda' },
    { id: 'guru', label: 'Guru & Staf' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Ticker / Running News */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider shrink-0">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Info Resmi
            </span>
            <p className="text-slate-300 truncate text-[11px] sm:text-xs">
              <span className="font-semibold text-white">PPDB 2025/2026 Dibuka:</span> Pendaftaran Bebas Biaya SPP & Gedung di SMKN 2 Biau • Realisasi DAK Rp 2,5 Milyar Lab Baru!
            </p>
          </div>

          {/* Quick Contacts */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {SCHOOL_INFO.contacts.operationalHours}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Kulango, Biau, Buol
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${SCHOOL_INFO.contacts.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              WA: {SCHOOL_INFO.contacts.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-md shadow-slate-200/50 py-2.5' 
            : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Title */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Custom School Emblem / Crest */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 p-0.5 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 rounded-[10px] flex flex-col items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-emerald-300" />
                <span className="text-[8px] font-black tracking-widest text-emerald-200">BIAU</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  SMK NEGERI 2 BIAU
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  NPSN: {SCHOOL_INFO.npsn}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Pusat Vokasi Agribisnis & TI • Kab. Buol, Sulawesi Tengah
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg transition-all text-xs font-semibold ${
                  activeSection === link.id
                    ? 'text-emerald-700 bg-emerald-50 font-bold'
                    : link.highlight
                    ? 'text-emerald-700 bg-emerald-500/10 hover:bg-emerald-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('ppdb')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95"
            >
              <span>Daftar PPDB</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="p-2 mb-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Akreditasi {SCHOOL_INFO.akreditasi}</span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Bebas SPP</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-700 font-bold'
                    : link.highlight
                    ? 'bg-emerald-50/70 text-emerald-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    Penting
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => handleNavClick('ppdb')}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm text-center shadow-md shadow-emerald-600/20"
              >
                Formulir Pendaftaran PPDB 2025/2026
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-slate-500">
                <a 
                  href={`tel:${SCHOOL_INFO.contacts.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-1 text-slate-600 hover:text-emerald-600"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Telepon
                </a>
                <span>•</span>
                <a 
                  href={`mailto:${SCHOOL_INFO.contacts.email}`}
                  className="flex items-center gap-1 text-slate-600 hover:text-emerald-600"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Resmi
                </a>
                <span>•</span>
                <button 
                  onClick={() => handleNavClick('kontak')}
                  className="flex items-center gap-1 text-slate-600 hover:text-emerald-600"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Lokasi
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
