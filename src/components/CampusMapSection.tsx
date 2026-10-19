import React, { useState } from 'react';
import { 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Info, 
  Layers, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface CampusSpot {
  id: string;
  name: string;
  zone: string;
  tag: string;
  coordinates: { x: number; y: number; width: number; height: number };
  color: string;
  description: string;
  details: string[];
  imageUrl: string;
}

export const CampusMapSection: React.FC = () => {
  const [selectedSpotId, setSelectedSpotId] = useState<string>('gedung-b');

  const campusSpots: CampusSpot[] = [
    {
      id: 'gedung-a',
      name: 'Gedung Rektorat & Tata Usaha',
      zone: 'Zona Administrasi Depan',
      tag: 'Pusat Layanan Siswa',
      coordinates: { x: 50, y: 30, width: 200, height: 90 },
      color: '#059669', // emerald
      description: 'Pusat pelayanan administrasi sekolah, ruang kerja Kepala Sekolah Irnawati Abd. Azis, S.Pd., ruang guru umum, dan resepsionis tamu kedinasan.',
      details: ['Ruang Kepala Sekolah & Pengawas', 'Ruang Tata Usaha (TU)', 'Ruang Guru Muatan Nasional', 'Lobi Resepsionis Tamu'],
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-b',
      name: 'Gedung Laboratorium TKJ Terpadu (DAK 2024)',
      zone: 'Zona Teknologi Informasi',
      tag: 'Lab Komputer & Fiber Optic',
      coordinates: { x: 270, y: 30, width: 220, height: 90 },
      color: '#2563eb', // blue
      description: 'Gedung baru realisasi DAK senilai Rp 2,5 Milyar berisi 40 unit PC Core i5, server Dell PowerEdge, routerboard Mikrotik, dan splicing kit serat optik.',
      details: ['40 PC Core i5 SSD NVMe', 'Pendingin Ruangan (Dual AC)', 'Rack Server & Network Simulator', 'Sertifikasi Mikrotik Academy'],
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-c',
      name: 'Unit Produksi APHP & Bakery Workshop',
      zone: 'Zona Pengolahan Pangan',
      tag: 'Teaching Factory Pangan',
      coordinates: { x: 510, y: 30, width: 200, height: 90 },
      color: '#d97706', // amber
      description: 'Dapur higienis berstandar sanitasi BPOM untuk pengolahan bahan lokal Buol (jagung, kelapa, buah pisang) menjadi roti empuk dan produk kemasan bernilai tinggi.',
      details: ['Oven Deck Industri 2 Deck', 'Mixer Adonan Spiral 10 Kg', 'Ruang Proofer & Fermentasi', 'Packaging Sealer & Display Toko'],
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-d',
      name: 'Smart Greenhouse & Lahan Praktik Hortikultura (2 Ha)',
      zone: 'Zona Agribisnis Terbuka',
      tag: 'Lahan 20.000 m² & Hidroponik',
      coordinates: { x: 50, y: 140, width: 340, height: 110 },
      color: '#10b981', // green
      description: 'Kawasan pertanian presisi 2 hektar dengan instalasi hidroponik NFT dan Greenhouse irigasi tetes otomatis pembudidaya melon emas, sayuran daun, dan tanaman pangan.',
      details: ['Smart Greenhouse Drip Irrigation', 'Instalasi Hidroponik NFT Vertikal', 'Traktor Roda 2 & Roda 4', 'Area Pembibitan Tanaman Buol'],
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-e',
      name: 'Kompleks Kandang Modern Unggas Komersial (ATU)',
      zone: 'Zona Peternakan Unggas',
      tag: 'Farm Broiler & Layer',
      coordinates: { x: 410, y: 140, width: 300, height: 110 },
      color: '#e11d48', // rose
      description: 'Kandang ayam pedaging & petelur modern berkapasitas 2.500 ekor dilengkapi sistem minum otomatis nipple, inkubator penetas digital, dan unit pupuk organik.',
      details: ['Kandang Broiler Tertutup 1.500 Ekor', 'Kandang Layer Baterai Higienis', 'Inkubator Telur Digital 500 Butir', 'Pabrik Pengolahan Kompos Mandiri'],
      imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-f',
      name: 'Perpustakaan Digital Baru & Ruang Konseling BK / UKS',
      zone: 'Zona Layanan Siswa DAK',
      tag: 'Gedung Baru DAK 2024',
      coordinates: { x: 50, y: 270, width: 250, height: 90 },
      color: '#0d9488', // teal
      description: 'Gedung megah hasil DAK 2024 berlantai keramik sejuk dengan ruang baca digital, koleksi ribuan buku kejuruan, serta ruang konseling BK privat dan pos UKS medis.',
      details: ['Koleksi 3.000+ Buku Vokasi & E-Library', 'Ruang Bimbingan Karir & Konseling BK', 'Unit Kesehatan Sekolah (UKS) 3 Ranjang', 'Wi-Fi Area Riset Siswa'],
      imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-g',
      name: 'Lapangan Olahraga Multi-Fungsi & Lapangan Upacara',
      zone: 'Zona Olahraga & Apel',
      tag: 'Futsal & Bola Voli',
      coordinates: { x: 320, y: 270, width: 240, height: 90 },
      color: '#6366f1', // indigo
      description: 'Lapangan beton serbaguna berstandar resmi untuk apel bendera hari Senin, upacara peringatan nasional, latihan rutin futsal, bola voli, dan pentas seni OSIS.',
      details: ['Lapangan Futsal & Voli Bergaris Resmi', 'Tiang Bendera Utama Upacara', 'Penerangan Sorot Malam Hari', 'Tribun Penonton Siswa'],
      imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gedung-h',
      name: 'Musholla As-Salam Kampus SMKN 2 Biau',
      zone: 'Zona Ibadah & Rohani',
      tag: 'Kapasitas 120 Jamaah',
      coordinates: { x: 580, y: 270, width: 130, height: 90 },
      color: '#15803d', // green-700
      description: 'Pusat kegiatan ibadah salat berjamaah zuhur/asar, tadarus Al-Qur’an bersama, dan pembinaan karakter religius siswa di lingkungan kampus Kulango.',
      details: ['Tempat Wudhu Suci Terpisah', 'Jadwal Adzan Digital Otomatis', 'Karpet Sajadah Nyaman', 'Kajian Rohani Islam Rutin'],
      imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const currentSpot = campusSpots.find((s) => s.id === selectedSpotId) || campusSpots[0];

  return (
    <section id="denah" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Tur Virtual & Tata Ruang Kampus
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Denah Lingkungan Kampus SMKN 2 Biau
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Terletak di lahan strategis dan asri seluas 2 Hektar di Kelurahan Kulango, Kecamatan Biau. Klik zona gedung pada peta untuk melihat fasilitas dan ruang belajar.
          </p>
        </div>

        {/* Blueprint & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive SVG Campus Layout (Left 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-300 pb-3 mb-3 border-b border-slate-800">
              <span className="font-bold flex items-center gap-1.5 text-emerald-400">
                <MapPin className="w-4 h-4" />
                Peta Kawasan Kampus (Jl. Anoa No. 32, Kulango)
              </span>
              <span className="text-[11px] text-slate-400">
                Klik blok gedung di bawah
              </span>
            </div>

            {/* SVG Visual Blueprint Map */}
            <div className="relative w-full aspect-[760/390] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 p-2">
              <svg 
                viewBox="0 0 760 390" 
                className="w-full h-full select-none cursor-pointer"
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="campusGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="760" height="390" fill="url(#campusGrid)" />

                {/* Pathway / Walkways lines */}
                <line x1="20" y1="125" x2="740" y2="125" stroke="#334155" strokeWidth="6" strokeDasharray="8 6" />
                <line x1="20" y1="255" x2="740" y2="255" stroke="#334155" strokeWidth="6" strokeDasharray="8 6" />
                <line x1="395" y1="20" x2="395" y2="370" stroke="#334155" strokeWidth="6" strokeDasharray="8 6" />

                {/* Entrance Marker */}
                <rect x="20" y="5" width="100" height="20" rx="4" fill="#047857" />
                <text x="70" y="19" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">GERBANG UTAMA</text>

                {/* Render Spot Rectangles */}
                {campusSpots.map((spot) => {
                  const isSelected = spot.id === selectedSpotId;
                  return (
                    <g 
                      key={spot.id} 
                      onClick={() => setSelectedSpotId(spot.id)}
                      className="transition-transform duration-200 hover:opacity-90"
                    >
                      {/* Box Container */}
                      <rect
                        x={spot.coordinates.x}
                        y={spot.coordinates.y}
                        width={spot.coordinates.width}
                        height={spot.coordinates.height}
                        rx="10"
                        fill={isSelected ? spot.color : '#1e293b'}
                        stroke={isSelected ? '#ffffff' : spot.color}
                        strokeWidth={isSelected ? '3' : '1.5'}
                        opacity={isSelected ? '0.95' : '0.8'}
                      />

                      {/* Text Label */}
                      <text
                        x={spot.coordinates.x + spot.coordinates.width / 2}
                        y={spot.coordinates.y + spot.coordinates.height / 2 - 6}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        {spot.name.split(' (')[0].substring(0, 24)}
                      </text>

                      {/* Sub-label */}
                      <text
                        x={spot.coordinates.x + spot.coordinates.width / 2}
                        y={spot.coordinates.y + spot.coordinates.height / 2 + 12}
                        textAnchor="middle"
                        fill={isSelected ? '#f1f5f9' : '#94a3b8'}
                        fontSize="9"
                        fontWeight="semibold"
                      >
                        {spot.tag}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Map Legend Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-800 text-xs">
              {campusSpots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSpotId(s.id)}
                  className={`p-2 rounded-lg text-left text-[11px] truncate transition-colors ${
                    s.id === selectedSpotId
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  • {s.name.split(' (')[0]}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Active Spot Profile & Photo Preview (Right 5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                {currentSpot.zone}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {currentSpot.tag}
              </span>
            </div>

            {/* Photo Preview */}
            <div className="relative h-48 rounded-xl overflow-hidden shadow-inner">
              <img
                src={currentSpot.imageUrl}
                alt={currentSpot.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-extrabold text-base leading-snug">
                  {currentSpot.name}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentSpot.description}
            </p>

            {/* Sub-facilities bullet points */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Fasilitas & Ruangan di Area Ini:
              </h5>
              <div className="space-y-1.5 text-xs text-slate-700">
                {currentSpot.details.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-800">
              <strong>Info Kunjungan:</strong> Terbuka untuk kunjungan calon siswa dan orang tua setiap hari kerja Senin - Sabtu pukul 08.00 - 14.30 WITA di kampus SMKN 2 Biau.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
