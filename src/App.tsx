/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrincipalWelcome } from './components/PrincipalWelcome';
import { MajorsSection } from './components/MajorsSection';
import { MajorDetailModal } from './components/MajorDetailModal';
import { PpdbSection } from './components/PpdbSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CampusMapSection } from './components/CampusMapSection';
import { NewsSection } from './components/NewsSection';
import { NewsDetailModal } from './components/NewsDetailModal';
import { TeachersSection } from './components/TeachersSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { MAJORS_DATA, SCHOOL_INFO } from './data/schoolData';
import { Major, NewsItem } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [preselectedMajorForPpdb, setPreselectedMajorForPpdb] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectMajorById = (majorId: string) => {
    const found = MAJORS_DATA.find((m) => m.id === majorId);
    if (found) {
      setSelectedMajor(found);
    }
  };

  const handleApplyForMajor = (majorName: string) => {
    setPreselectedMajorForPpdb(majorName);
    scrollToSection('ppdb');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Sticky Header with Navigation & Live Ticker */}
      <Header 
        onNavigate={scrollToSection} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <div id="beranda">
          <Hero 
            onNavigate={scrollToSection}
            onSelectMajor={handleSelectMajorById}
          />
        </div>

        {/* Sambutan Kepala Sekolah (Ibu Irnawati Abd. Azis, S.Pd.) */}
        <PrincipalWelcome />

        {/* 4 Program Keahlian Unggulan (TKJ, ATPH, APHP, ATU) */}
        <MajorsSection 
          onSelectMajor={(major) => setSelectedMajor(major)}
          onApplyForMajor={handleApplyForMajor}
        />

        {/* PPDB Online 2025/2026 Terpadu */}
        <PpdbSection 
          preselectedMajor={preselectedMajorForPpdb}
        />

        {/* Fasilitas & Sarana Prasarana (DAK Rp 2,5 M) */}
        <FacilitiesSection />

        {/* Denah Kampus 2D Interaktif */}
        <CampusMapSection />

        {/* Ekstrakurikuler & Kehidupan Siswa */}
        <StudentLifeSection />

        {/* Berita, Prestasi & Agenda Akademik */}
        <NewsSection 
          onSelectNews={(news) => setSelectedNews(news)}
        />

        {/* Dewan Guru & Tenaga Kependidikan */}
        <TeachersSection />

        {/* Kemitraan DUDI & Testimoni Alumni */}
        <PartnersSection />

        {/* Kontak, Layanan Pesan & FAQ */}
        <ContactSection />

      </main>

      {/* School Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Major Deep-Dive Modal */}
      <MajorDetailModal 
        major={selectedMajor}
        onClose={() => setSelectedMajor(null)}
        onApply={handleApplyForMajor}
      />

      {/* News Article Modal */}
      <NewsDetailModal 
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Layanan Bantuan Cepat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${SCHOOL_INFO.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20PPDB%20SMKN%202%20Biau,%20saya%20ingin%20bertanya`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl shadow-emerald-700/50 hover:scale-105 active:scale-95 transition-all"
          aria-label="Konsultasi WhatsApp SMKN 2 Biau"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">Tanya Panitia PPDB (WA)</span>
        </a>
      </aside>

    </div>
  );
}
