import { Major, NewsItem, AgendaItem, Facility, Teacher, Extracurricular, PpdbApplicant, FAQItem } from '../types';

export const SCHOOL_INFO = {
  name: 'SMK Negeri 2 Biau',
  fullName: 'Sekolah Menengah Kejuruan Negeri 2 Biau',
  kabupaten: 'Kabupaten Buol',
  provinsi: 'Sulawesi Tengah',
  npsn: '69904250',
  status: 'Negeri',
  akreditasi: 'B (Menuju Unggul)',
  skPendirian: 'SK Bupati Buol No. 421.5/456/DIKPORA',
  kurikulum: 'Kurikulum Merdeka (SMK Pusat Keunggulan Berbasis Agribisnis & TI)',
  headmaster: {
    name: 'Irnawati Abd. Azis, S.Pd.',
    nip: '19780512 200501 2 008',
    title: 'Kepala SMK Negeri 2 Biau',
    period: '2022 - Sekarang',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'Mendidik dengan hati, mengasah keahlian vokasi dengan standar industri, serta membekali karakter luhur bagi generasi muda Buol menuju masa depan gemilang.'
  },
  address: {
    street: 'Jl. Anoa No. 32, Kelurahan Kulango',
    subdistrict: 'Kecamatan Biau',
    regency: 'Kabupaten Buol',
    province: 'Sulawesi Tengah',
    postalCode: '94563',
    country: 'Indonesia'
  },
  contacts: {
    phone: '(0453) 211028',
    whatsapp: '+6285241009823',
    email: 'smkn2biau.buol@gmail.com',
    operationalHours: 'Senin - Sabtu: 07.15 - 15.30 WITA'
  },
  socials: {
    facebook: 'https://facebook.com/smkn2biaubuol',
    instagram: 'https://instagram.com/smkn2biau_official',
    youtube: 'https://youtube.com/@smkn2biaubuofficial'
  },
  stats: [
    { label: 'Program Keahlian', value: '4 Kejuruan' },
    { label: 'Alokasi Fasilitas DAK', value: 'Rp 2,5 M' },
    { label: 'Tingkat Kelulusan', value: '100%' },
    { label: 'Mitra DU/DI', value: '28+ Industri' },
    { label: 'Siswa & Alumni Aktif', value: '450+' }
  ]
};

export const MAJORS_DATA: Major[] = [
  {
    id: 'tkj',
    code: 'TKJ',
    name: 'Teknik Komputer dan Jaringan',
    shortDescription: 'Penguasaan infrastruktur jaringan internet, fiber optic, server cloud, sistem keamanan data, dan perangkat lunak komputer.',
    fullDescription: 'Program Keahlian Teknik Komputer dan Jaringan (TKJ) di SMKN 2 Biau membekali peserta didik dengan kecakapan praktis mutakhir di era transformasi digital. Siswa mempelajari perakitan dan troubleshooting PC, konfigurasi router Mikrotik, perancangan instalasi kabel FO (Fiber Optic), administrasi Linux & Windows Server, manajemen cloud, serta fondasi desain grafis dan multimedia terapan untuk siap bersaing di dunia kerja maupun mendirikan jasa teknologi mandiri.',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    accentBg: 'from-blue-600 to-indigo-700',
    iconName: 'Network',
    competencies: [
      'Perakitan, Pemeliharaan, dan Troubleshooting Komputer & Laptop',
      'Instalasi Jaringan Kabel UTP, Fiber Optic & Wireless Outdoor',
      'Konfigurasi Routerboard Mikrotik & Cisco Switching Dasar',
      'Administrasi Sistem Operasi Server (Debian Linux, Ubuntu, Windows Server)',
      'Cyber Security Dasar & Manajemen Bandwidth Internet',
      'Penerapan Desain Grafis, Web Dasar & Multimedia Kreatif'
    ],
    careerProspects: [
      'Network Administrator & NOC Engineer',
      'Teknisi Jaringan & Fiber Optic ISP (Indihome/Icon+)',
      'IT Support & Hardware Specialist Perkantoran/BUMN',
      'System Administrator Skala Menengah',
      'Wirausahawan Service Komputer & ISP RT-RW Net Mandiri',
      'Desainer Grafis & Asisten Digital Kreatif'
    ],
    facilities: [
      'Laboratorium Komputer Jaringan Ber-AC (36 PC Core i5)',
      'Rack Server Dell PowerEdge dengan UPS Stabilizer',
      'Kit Fiber Optic Splicing & Optical Power Meter (OPM)',
      'Routerboard Mikrotik RB750 & RB951 per-meja praktik',
      'Akses Internet Dedicated Fiber Optic 100 Mbps'
    ],
    targetCapacity: 72,
    highlightStats: [
      { label: 'Unit PC Praktik', value: '40 Unit' },
      { label: 'Lab Komputer', value: '2 Ruangan' },
      { label: 'Sertifikasi', value: 'Mikrotik MTCNA / LSP-P1' }
    ],
    curriculumHighlights: [
      {
        semester: 'Kelas X',
        subjects: ['Dasar-dasar Teknik Komputer', 'Pemrograman Dasar', 'Sistem Komputer & K3LH', 'Pengenalan Jaringan Komputer']
      },
      {
        semester: 'Kelas XI',
        subjects: ['Teknologi Jaringan Kabel & Nirkabel', 'Administrasi Infrastruktur Jaringan', 'Administrasi Sistem Jaringan Server', 'Teknologi Layanan Jaringan']
      },
      {
        semester: 'Kelas XII',
        subjects: ['Praktik Kerja Lapangan (PKL 6 Bulan di Industri)', 'Keamanan Jaringan Lanjut', 'Projek Kreatif dan Kewirausahaan IT', 'Uji Kompetensi Keahlian (UKK LSP-P1)']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'atph',
    code: 'ATPH',
    name: 'Agribisnis Tanaman Pangan dan Hortikultura',
    shortDescription: 'Ilmu budidaya tanaman pangan unggulan lokal, sayuran hortikultura, smart greenhouse modern, dan pertanian berkelanjutan.',
    fullDescription: 'Program Keahlian ATPH mengintegrasikan kearifan tanah subur Kabupaten Buol dengan teknologi agrikultur modern. Siswa dilatih mulai dari persiapan lahan, pembibitan varietas unggul, nutrisi tanaman dengan sistem drip irrigation, pengendalian hama ramah lingkungan (PHT), hingga manajemen pascapanen sayuran hidroponik dan tanaman hortikultura bernilai ekonomi tinggi.',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    accentBg: 'from-emerald-600 to-teal-700',
    iconName: 'Sprout',
    competencies: [
      'Teknik Pembenihan & Kultur Jaringan Tanaman Pangan',
      'Teknologi Budidaya Sayuran & Buah Hortikultura Komersial',
      'Operasional Smart Greenhouse & Sistem Hidroponik NFT/DFT',
      'Pengendalian Organisme Pengganggu Tanaman (OPT) Berkelanjutan',
      'Operasi & Perawatan Alat Mesin Pertanian (Alsintan/Traktor)',
      'Manajemen Agribisnis, Sortasi Panen & Pemasaran Digital Hasil Tani'
    ],
    careerProspects: [
      'Pengusaha Muda Agribisnis (Modern Young Farmer)',
      'Manajer Kebun & Pengawas Lahan Perkebunan/Hortikultura',
      'Penyuluh Pertanian Lapangan (PPL) Swasta & Lembaga Pemerintah',
      'Teknisi Nursery Benih Unggul & Produsen Bibit Bersertifikat',
      'Operator Alsintan & Konsultan Pertanian Berkelanjutan'
    ],
    facilities: [
      'Lahan Praktik Pertanian Terbuka 2 Hektar di Kampus SMKN 2 Biau',
      'Smart Greenhouse Berbasis Irigasi Tetes Otomatis',
      'Instalasi Hidroponik NFT Modern Sayuran Daun',
      'Gudang Sarana Produksi & Alsintan (Traktor Roda 2 & Roda 4)',
      'Lab Pengujian Tanah & Benih Tanaman'
    ],
    targetCapacity: 72,
    highlightStats: [
      { label: 'Luas Lahan Praktik', value: '20.000 m²' },
      { label: 'Kapasitas Greenhouse', value: '2.500 Tanaman' },
      { label: 'Komoditas Unggulan', value: 'Melon, Cabai, Jagung' }
    ],
    curriculumHighlights: [
      {
        semester: 'Kelas X',
        subjects: ['Dasar-dasar Budidaya Tanaman', 'Karakteristik Tanah & Pemupukan', 'Fisiologi Tumbuhan', 'K3 Pertanian Modern']
      },
      {
        semester: 'Kelas XI',
        subjects: ['Agribisnis Tanaman Sayuran & Buah', 'Agribisnis Tanaman Pangan (Padi/Jagung Buol)', 'Sistem Hidroponik & Greenhouse', 'Pembibitan & Kultur Sederhana']
      },
      {
        semester: 'Kelas XII',
        subjects: ['PKL Industri Pertanian & Perkebunan', 'Pengolahan Lahan Berbasis Mesin Alsintan', 'Manajemen Rantai Pasok Pangan', 'Projek Kewirausahaan Hasil Panen']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'aphp',
    code: 'APHP',
    name: 'Agribisnis Pengolahan Hasil Pertanian',
    shortDescription: 'Inovasi pengolahan komoditas pangan lokal Buol menjadi aneka produk kuliner siap saji, bakery, minuman fungsional, dan kemasan ritel.',
    fullDescription: 'Program Keahlian APHP membina siswa menguasai rantai nilai pascapanen. Bahan mentah pertanian dan perkebunan khas Buol (seperti kelapa, jagung, pisang, kakao, dan umbi) diolah melalui teknik fermentasi, pasteurisasi, bakery, dan pengalengan mini dengan standar sanitasi Good Manufacturing Practices (GMP) dan HACCP. Menghasilkan lulusan yang siap menjadi wirausaha pangan kreatif atau staf Quality Control industri makanan.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    accentBg: 'from-amber-600 to-orange-700',
    iconName: 'UtensilsCrossed',
    competencies: [
      'Teknik Pengolahan Hasil Nabati & Hewani Higienis',
      'Pembuatan Produk Roti, Cake & Pastry (Bakery Unit)',
      'Pengolahan Minuman Herbal, Sari Buah & Olahan Berbasis Kelapa Buol',
      'Pengujian Mutu Organoleptik & Keamanan Pangan (GMP/HACCP)',
      'Teknologi Pengemasan Vakum, Labeling & Perhitungan HPP Produk',
      'Strategi Pemasaran Digital & E-Commerce Produk Kuliner Olahan'
    ],
    careerProspects: [
      'Quality Control (QC) & Quality Assurance (QA) Industri Makanan',
      'Baker & Pastry Chef di Bakery Hotel atau Toko Roti',
      'Operator Mesin Produksi Industri Pengolahan Makanan',
      'Wirausahawan Kuliner & Produsen Oleh-oleh Khas Buol',
      'Staf R&D Pengembang Produk Makanan Lokal'
    ],
    facilities: [
      'Dapur Produksi Bersih Standar Higiene Sanitasi BPOM',
      'Mesin Oven Deck Industri & Proofer Roti Otomatis',
      'Mesin Mixer Spiral Kapasitas Besar & Vacuum Sealer Makanan',
      'Peralatan Pasteurisasi & Mesin Ekstraksi Minyak Kelapa Murni (VCO)',
      'Ruang Display Galeri Produk Karya Siswa APHP'
    ],
    targetCapacity: 54,
    highlightStats: [
      { label: 'Produk Olahan Aktif', value: '15+ Jenis' },
      { label: 'Standar Sanitasi', value: 'GMP Certified' },
      { label: 'Unit Produksi', value: 'Teaching Factory' }
    ],
    curriculumHighlights: [
      {
        semester: 'Kelas X',
        subjects: ['Penanganan Pascapanen', 'Dasar Pengolahan Bahan Pangan', 'Sanitasi Industri & Keamanan Pangan', 'Kimia Bahan Pangan Terapan']
      },
      {
        semester: 'Kelas XI',
        subjects: ['Produksi Olahan Nabati (Keripik, Manisan, Sirup)', 'Produksi Roti & Kue (Bakery Production)', 'Teknik Pengawetan Alami', 'Desain Kemasan & Sertifikasi Halal']
      },
      {
        semester: 'Kelas XII',
        subjects: ['PKL di Pabrik Makanan / Bakery / DUDI Mitra', 'Teaching Factory Produksi Komersial', 'Pemasaran Produk & Analisis Finansial Usaha', 'Ujian Sertifikasi Kompetensi']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'atu',
    code: 'ATU',
    name: 'Agribisnis Ternak Unggas',
    shortDescription: 'Manajemen pemeliharaan ayam broiler pedaging & layer petelur dengan teknologi kandang modern, pakan terukur, dan biosecurity ketat.',
    fullDescription: 'Program Keahlian ATU menjawab tingginya kebutuhan protein hewani di wilayah Buol dan Sulawesi Tengah. Siswa dididik dengan praktik langsung di kandang modern SMKN 2 Biau: menguasai tata laksana brooding, formulasi pakan seimbang bernutrisi tinggi, sistem vaksinasi dan pencegahan penyakit (biosecurity), manajemen iklim mikro kandang tertutup, hingga pemasaran telur dan karkas ayam segar.',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
    accentBg: 'from-rose-600 to-red-700',
    iconName: 'Egg',
    competencies: [
      'Tata Laksana Pemeliharaan Ayam Pedaging (Broiler) & Petelur (Layer)',
      'Teknik Formulasi & Pembuatan Pakan Mandiri Ekonomis',
      'Penerapan Biosecurity, Program Vaksinasi & Penanganan Penyakit Unggas',
      'Operasional Mesin Penetas Telur (Inkubator Digital Otomatis)',
      'Penyembelihan Halal, Penanganan Karkas & Pengolahan Daging Unggas',
      'Analisis Finansial, FCR (Feed Conversion Ratio) & Manajemen Farm Komersial'
    ],
    careerProspects: [
      'Manajer Kandang / Farm Supervisor Perusahaan Peternakan Besar',
      'Pengusaha Mandiri Ternak Ayam Broiler & Petelur',
      'Petugas Technical Service (TS) Perusahaan Pakan & Obat Hewan',
      'Supervisor Rumah Potong Unggas (RPU) Higienis',
      'Penyuluh Lapangan Bidang Peternakan'
    ],
    facilities: [
      'Unit Kandang Praktik Ayam Broiler Kapasitas 1.500 Ekor',
      'Unit Kandang Ayam Petelur (Layer) Sistem Baterai Higienis',
      'Inkubator Penetasan Telur Digital Otomatis Kapasitas 500 Butir',
      'Gudang Pakan & Mesin Grinder/Mixer Pakan Ternak',
      'Instalasi Pengolahan Limbah Kotoran menjadi Pupuk Organik Kompos'
    ],
    targetCapacity: 54,
    highlightStats: [
      { label: 'Kapasitas Kandang', value: '2.500 Ekor' },
      { label: 'Inkubator Digital', value: '500 Butir/Cycle' },
      { label: 'Produksi Kompos', value: '3 Ton/Bulan' }
    ],
    curriculumHighlights: [
      {
        semester: 'Kelas X',
        subjects: ['Anatomi & Fisiologi Unggas', 'Dasar Pakan & Nutrisi Ternak', 'K3 Peternakan & Pengenalan Kandang', 'Perilaku Ternak Unggas']
      },
      {
        semester: 'Kelas XI',
        subjects: ['Manajemen Pemeliharaan Ayam Pedaging', 'Manajemen Pemeliharaan Ayam Petelur', 'Program Vaksinasi & Kesehatan Unggas', 'Teknik Penetasan Buatan']
      },
      {
        semester: 'Kelas XII',
        subjects: ['PKL di Farm Komersial Kemitraan', 'Pengolahan Pascapanen Telur & Daging', 'Pengolahan Limbah Menjadi Pupuk Berkualitas', 'Projek Kewirausahaan Mandiri']
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'SMKN 2 Biau Manfaatkan DAK 2,5 Milyar: Resmikan Lab Komputer Baru, Perpustakaan, dan Ruang BK Modern',
    category: 'Berita',
    date: '12 Oktober 2024',
    author: 'Humas SMKN 2 Biau',
    featured: true,
    excerpt: 'Kepala SMKN 2 Biau Irnawati Abd. Azis, S.Pd. menegaskan komitmen sekolah meningkatkan sarana belajar vokasi agar peserta didik di 4 jurusan memiliki fasilitas setara industri nasional.',
    content: [
      'KULANGO, BIAU — SMK Negeri 2 Biau kembali menorehkan langkah maju dalam peningkatan mutu pendidikan kejuruan. Melalui Dana Alokasi Khusus (DAK) Fisik Pendidikan senilai Rp2,5 miliar, sekolah kini merampungkan dan mengoperasikan sejumlah gedung baru yang representatif.',
      'Gedung-gedung baru tersebut meliputi Ruang Bimbingan Konseling (BK), Laboratorium Komputer TKJ dengan peremajaan 40 unit PC modern, Ruang Usaha Kesehatan Sekolah (UKS) standar medis dasar, serta Perpustakaan Sekolah berkonsep digital learning space.',
      'Kepala SMKN 2 Biau, Ibu Irnawati Abd. Azis, S.Pd., menyampaikan rasa syukur atas dukungan pemerintah daerah dan pusat. "Dengan fasilitas ini, anak-anak di jurusan Teknik Komputer dan Jaringan maupun 3 jurusan Agribisnis kita dapat belajar dengan kenyamanan optimal. Kami juga mempersiapkan fasilitas tambahan seiring tingginya antusiasme masyarakat Buol terhadap pendidikan vokasi praktis siap kerja," tegas beliau.'
    ],
    tags: ['DAK 2024', 'Fasilitas Baru', 'Lab Komputer', 'Perpustakaan'],
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'news-2',
    title: 'Siswa Jurusan ATPH Gelar Panen Raya Melon Emas & Sayuran Hidroponik di Smart Greenhouse',
    category: 'Prestasi',
    date: '28 September 2024',
    author: 'Tim Liputan Pertanian',
    featured: true,
    excerpt: 'Hasil praktik budidaya tanaman hortikultura siswa SMKN 2 Biau sukses diserap pasar lokal Kota Buol dan instansi pemerintah dengan kualitas super.',
    content: [
      'KULANGO — Lahan praktik dan Smart Greenhouse SMKN 2 Biau kembali membuktikan kualitas lulusannya. Siswa kelas XI dan XII Program Keahlian Agribisnis Tanaman Pangan dan Hortikultura (ATPH) sukses memanen lebih dari 800 kilogram melon emas varietas premium dan ratusan kilogram sayuran hijau hidroponik.',
      'Sistem irigasi tetes (drip fertigation) yang diaplikasikan para siswa memastikan buah memiliki tingkat kemanisan (brix) di atas standar rata-rata. Seluruh hasil panen dipasarkan melalui unit Teaching Factory sekolah dan ludes terjual dalam kurun waktu dua hari.',
      'Ketua Jurusan ATPH mengungkapkan bahwa keberhasilan panen ini menumbuhkan kepercayaan diri siswa untuk berani menjadi petani muda modern (agripreneur) yang mandiri pasca lulus nanti.'
    ],
    tags: ['Panen Raya', 'Smart Greenhouse', 'ATPH', 'Ketahanan Pangan'],
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'news-3',
    title: 'Jurusan APHP Luncurkan Roti Lembut Berbahan Tepung Jagung Lokal & Keripik Pisang Buol',
    category: 'Berita',
    date: '14 Agustus 2024',
    author: 'Unit Produksi APHP',
    excerpt: 'Inovasi diversifikasi pangan lokal dari siswa pengolahan hasil pertanian berhasil menarik perhatian masyarakat dalam pameran produk kewirausahaan sekolah.',
    content: [
      'BIAU — Unit Teaching Factory Agribisnis Pengolahan Hasil Pertanian (APHP) SMKN 2 Biau kembali melahirkan produk inovatif dengan memanfaatkan komoditas melimpah di Kabupaten Buol, yakni jagung manis dan pisang lokal.',
      'Melalui pengeringan dan penepungan higienis, para siswa meracik tepung jagung menjadi roti tawar dan bolu yang kaya serat tanpa pengawet buatan. Selain itu, varian keripik pisang dengan taburan rempah khas Buol juga dikemas dengan kemasan aluminium foil kedap udara.',
      'Produk olahan siswa ini kini tersedia di kantin sehat sekolah dan rutin dipesan oleh instansi sekitar Kelurahan Kulango untuk kudapan resmi rapat.'
    ],
    tags: ['APHP', 'Inovasi Pangan', 'Kuliner Buol', 'Teaching Factory'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'news-4',
    title: 'Pengumuman Resmi PPDB Tahun Ajaran 2025/2026 Dibuka Secara Daring & Luring',
    category: 'Pengumuman',
    date: '05 Januari 2025',
    author: 'Panitia PPDB SMKN 2 Biau',
    excerpt: 'Pendaftaran Peserta Didik Baru kini dibuka melalui portal resmi website. Bebas uang gedung dan SPP untuk seluruh siswa baru!',
    content: [
      'Panitia Penerimaan Peserta Didik Baru (PPDB) SMK Negeri 2 Biau resmi mengumumkan pembukaan pendaftaran calon siswa untuk Tahun Ajaran 2025/2026.',
      'Pendaftaran dibuka dalam 4 jalur: Jalur Zonasi, Jalur Prestasi Akademik/Non-Akademik, Jalur Afirmasi (KIP/PKH), dan Jalur Minat Bakat Vokasi. Calon siswa lulusan SMP/MTs sederajat dapat mendaftar langsung secara online melalui portal website ini atau datang ke Posko PPDB di kampus SMKN 2 Biau Jl. Anoa No. 32 Kulango.',
      'Sebagai sekolah negeri, SMKN 2 Biau tidak memungut biaya pendaftaran (Gratis 100%). Seluruh siswa baru juga mendapatkan fasilitas praktik langsung di laboratorium dan lahan sekolah.'
    ],
    tags: ['PPDB 2025', 'Pendaftaran Siswa', 'Bebas Biaya', 'SMP ke SMK'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'news-5',
    title: 'SMKN 2 Biau Sabet Juara 2 Lomba Kompetensi Siswa (LKS) Tingkat Provinsi Sulawesi Tengah',
    category: 'Prestasi',
    date: '19 Juli 2024',
    author: 'Kesiswaan SMKN 2 Biau',
    excerpt: 'Delegasi bidang IT Network System Administration membuktikan keunggulan skill jaringan komputer bersaing dengan perwakilan dari seluruh kabupaten di Sulteng.',
    content: [
      'PALU — Prestasi membanggakan kembali dipersembahkan oleh siswa SMKN 2 Biau dalam ajang bergengsi Lomba Kompetensi Siswa (LKS) Tingkat Provinsi Sulawesi Tengah yang digelar di Kota Palu.',
      'Siswa kelas XII TKJ berhasil meraih Juara 2 pada mata lomba IT Network System Administration setelah sukses menyelesaikan skenario instalasi multi-router, routing BGP/OSPF, dan hardening server Linux dalam batas waktu ketat.',
      'Pencapaian ini membuktikan bahwa siswa asal Kabupaten Buol memiliki kapabilitas teknologi tinggi yang mampu bersaing di tingkat regional maupun nasional.'
    ],
    tags: ['Juara LKS', 'Prestasi Vokasi', 'TKJ Sulteng', 'Buol Bangga'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: 'ag-1',
    title: 'Pelaksanaan Uji Kompetensi Keahlian (UKK) Mandiri & LSP-P1',
    date: '24 - 28 Februari 2025',
    time: '08.00 - 15.00 WITA',
    location: 'Lab Komputer TKJ & Bengkel Agribisnis',
    category: 'Ujian Kejuruan',
    description: 'Pengujian keterampilan praktik bagi siswa kelas XII oleh asesor internal dan penguji eksternal dari dunia industri mitra.'
  },
  {
    id: 'ag-2',
    title: 'Pemberangkatan Praktik Kerja Lapangan (PKL) Gelombang 1',
    date: '10 Maret 2025',
    time: '08.30 WITA',
    location: 'Aula Utama SMKN 2 Biau',
    category: 'Industri',
    description: 'Pelepasan resmi siswa kelas XI menuju 25+ instansi dan perusahaan mitra di Kabupaten Buol, Tolitoli, dan Kota Palu.'
  },
  {
    id: 'ag-3',
    title: 'Gelar Karya Vokasi & Expo Produk Hasil Tani Sekolah',
    date: '15 April 2025',
    time: '09.00 - 16.00 WITA',
    location: 'Halaman & Selasar Kampus Kulango',
    category: 'Pameran Sekolah',
    description: 'Pameran tahunan memamerkan karya inovasi IT, instalasi hidroponik, aneka roti & minuman olahan APHP, serta bazaar telur segar ATU.'
  },
  {
    id: 'ag-4',
    title: 'Batas Akhir Verifikasi Berkas PPDB Gelombang I',
    date: '30 Juni 2025',
    time: '14.00 WITA',
    location: 'Sekretariat PPDB SMKN 2 Biau',
    category: 'PPDB',
    description: 'Batas akhir penyerahan berkas fisik bagi calon siswa baru yang mendaftar melalui sistem online.'
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-1',
    name: 'Laboratorium Komputer & Jaringan Komputer Modern',
    category: 'Laboratorium & Bengkel',
    description: 'Dilengkapi 40 unit PC spesifikasi Core i5 dengan monitor IPS, pendingin ruangan (AC), router Mikrotik, switch manageable, dan jaringan internet fiber optic 100 Mbps berkecepatan tinggi.',
    capacity: '40 Siswa / Sesi',
    features: ['Pendingin Ruangan (Dual AC)', '40 PC Core i5 SSD', 'Rak Server Dell', 'Internet Fiber Optic 100 Mbps', 'Perangkat Fiber Optic Splicer'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-2',
    name: 'Smart Greenhouse & Lahan Praktik Hortikultura (2 Ha)',
    category: 'Pertanian & Peternakan',
    description: 'Greenhouse dengan sistem pengkabutan (misting) otomatis dan instalasi fertigasi tetes untuk budidaya sayuran premium serta buah melon emas bernilai jual tinggi.',
    capacity: '3 Kelas Praktik Sekaligus',
    features: ['Sistem Irigasi Tetes Otomatis', 'Instalasi Hidroponik NFT', 'Screen Net Anti Hama', 'Koleksi Benih Varietas Unggul', 'Traktor Roda 2 & 4'],
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-3',
    name: 'Unit Pengolahan Pangan & Bakery (Teaching Factory APHP)',
    category: 'Laboratorium & Bengkel',
    description: 'Ruang produksi higienis berstandar sanitasi BPOM untuk pengolahan komoditas lokal Buol menjadi roti empuk, kue kering, selai buah, keripik, dan aneka minuman kemasan.',
    capacity: '30 Siswa',
    features: ['Oven Deck Industri 2 Tingkat', 'Mixer Spiral 10 Kg', 'Mesin Vacuum Sealer', 'Meja Stainless Steel Food Grade', 'Ruang Fermentasi & Proofer'],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-4',
    name: 'Kandang Modern Ayam Broiler & Layer Peternakan Unggas',
    category: 'Pertanian & Peternakan',
    description: 'Kandang praktik berkapasitas 2.500 ekor unggas dilengkapi sistem tempat minum otomatis (nipple drinker), mesin penetas telur digital, dan unit pengolahan pupuk kompos.',
    capacity: '2.500 Ekor Unggas',
    features: ['Nipple Drinker Otomatis', 'Inkubator Digital 500 Butir', 'Kandang Baterai Ayam Petelur', 'Mesin Penggiling Pakan Mandiri', 'Unit Pengolahan Kompos Organik'],
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-5',
    name: 'Perpustakaan Baru & Digital Learning Space (DAK 2024)',
    category: 'Fasilitas Umum',
    description: 'Gedung perpustakaan baru hasil realisasi DAK senilai Rp2,5 M dengan koleksi ribuan buku kejuruan, referensi digital, ruang diskusi nyaman, dan koneksi internet gratis.',
    capacity: '80 Siswa',
    features: ['Ribuan Judul Buku Vokasi & Umum', 'Komputer Pencarian Digital', 'Ruang Baca Lesehan Berkarpet', 'Area Diskusi & Collab Corner', 'Wi-Fi Edukasi SMKN 2 Biau'],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-6',
    name: 'Ruang Bimbingan Konseling (BK) & UKS Representatif',
    category: 'Fasilitas Umum',
    description: 'Ruang layanan psikologi dan konseling karir siswa yang nyaman dan privat, berdampingan dengan unit kesehatan sekolah lengkap dengan ranjang pasien dan kotak P3K darurat.',
    capacity: '15 Siswa / Ruang',
    features: ['Ruang Konseling Privat Ber-AC', 'Tempat Tidur Pasien UKS', 'Peralatan Cek Tekanan Darah & Gula Darah', 'Konsultasi Karir & Penyaluran Kerja (BKK)'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-7',
    name: 'Lapangan Olahraga Multi-Fungsi & Upacara',
    category: 'Olahraga & Ibadah',
    description: 'Lapangan serbaguna dengan permukaan cor standar yang digunakan untuk upacara bendera, apel pagi, pertandingan futsal, bola voli, dan kegiatan ekstrakurikuler.',
    capacity: '500 Orang',
    features: ['Lapangan Futsal & Bola Voli', 'Tiang Bendera Resmi Upacara', 'Penerangan Lapangan', 'Peralatan Olahraga Atletik & Tenis Meja'],
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fac-8',
    name: 'Musholla As-Salam Kampus SMKN 2 Biau',
    category: 'Olahraga & Ibadah',
    description: 'Tempat ibadah bersih dan sejuk untuk pelaksanaan salat berjamaah zuhur dan asar bagi seluruh warga sekolah, pembinaan rohani Islam, dan kajian keagamaan berkala.',
    capacity: '120 Jamaah',
    features: ['Tempat Wudhu Terpisah Pria & Wanita', 'Al-Qur’an & Jadwal Sholat Digital', 'Sound System Masjid', 'Karpet Sajadah Nyaman'],
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 't-1',
    name: 'Irnawati Abd. Azis, S.Pd.',
    title: 'Kepala Sekolah',
    role: 'Pimpinan & Pembina Mutu Vokasi',
    category: 'Pimpinan',
    education: 'S1 Pendidikan, Universitas Tadulako',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    quote: 'Komitmen kami adalah menghadirkan pendidikan kejuruan yang nyata manfaatnya bagi kemajuan Kabupaten Buol.'
  },
  {
    id: 't-2',
    name: 'Mohamad Fadli, S.Kom., M.T.',
    title: 'Ketua Program Keahlian TKJ',
    role: 'Guru Produktif Jaringan Komputer & Mikrotik Certified',
    category: 'Guru Produktif TKJ',
    education: 'S2 Magister Teknik Informatika',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    quote: 'Teknologi bukan sekadar teori, melainkan solusi nyata yang kita rakit dengan ketelitian dan integritas.'
  },
  {
    id: 't-3',
    name: 'Dra. Nurhayati M. Saleh, S.P.',
    title: 'Ketua Program Keahlian ATPH',
    role: 'Guru Produktif Hortikultura & Smart Farming',
    category: 'Guru Produktif Agribisnis',
    education: 'S1 Agroteknologi Pertanian',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80',
    quote: 'Tanah Buol sangat kaya. Dengan teknologi pertanian presisi, kita buktikan petani muda adalah masa depan bangsa.'
  },
  {
    id: 't-4',
    name: 'Rahmawaty Hasan, S.Pt.',
    title: 'Ketua Program Keahlian ATU',
    role: 'Guru Produktif Ternak Unggas & Biosecurity',
    category: 'Guru Produktif Agribisnis',
    education: 'S1 Ilmu Peternakan',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80',
    quote: 'Kedisiplinan di kandang modern mencetak etos kerja tinggi dan kemandirian wirausaha peternakan.'
  },
  {
    id: 't-5',
    name: 'Siti Maryam Djibran, S.TP.',
    title: 'Ketua Program Keahlian APHP',
    role: 'Guru Produktif Teknologi Pengolahan Hasil Pangan & Bakery',
    category: 'Guru Produktif Agribisnis',
    education: 'S1 Teknologi Pangan',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    quote: 'Menciptakan nilai tambah dari hasil bumi Buol melalui kreasi kuliner higienis berstandar industri.'
  },
  {
    id: 't-6',
    name: 'Ahmad Faisal, S.Pd.',
    title: 'Wakil Kepala Sekolah Bidang Kurikulum',
    role: 'Guru Muatan Nasional & Koordinator Kurikulum Merdeka',
    category: 'Guru Umum',
    education: 'S1 Pendidikan Bahasa Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    quote: 'Kurikulum Merdeka di SMK memberi keleluasaan siswa mengeksplorasi bakat kejuruan mereka secara maksimal.'
  },
  {
    id: 't-7',
    name: 'Zulkifli Usman, S.Sos.',
    title: 'Wakil Kepala Sekolah Kesiswaan & BKK',
    role: 'Koordinator Bursa Kerja Khusus (BKK) & Hubungan Industri',
    category: 'Pimpinan',
    education: 'S1 Ilmu Komunikasi & Manajemen',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    quote: 'Menjembatani setiap lulusan SMKN 2 Biau agar langsung terserap di dunia usaha atau mandiri berwirausaha.'
  },
  {
    id: 't-8',
    name: 'Hj. Rosdiana Patanga, S.E.',
    title: 'Kepala Tata Usaha',
    role: 'Koordinator Administrasi & Layanan Publik Sekolah',
    category: 'Tenaga Kependidikan',
    education: 'S1 Ekonomi Manajemen',
    imageUrl: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=500&q=80',
    quote: 'Pelayanan administrasi yang ramah, transparan, dan cepat untuk siswa, orang tua, dan masyarakat.'
  }
];

export const EXTRACURRICULARS_DATA: Extracurricular[] = [
  {
    id: 'extra-1',
    name: 'Gerakan Pramuka Gugus Depan SMKN 2 Biau',
    category: 'Kepanduan & Karakter',
    description: 'Membina kedisiplinan, kemandirian hidup di alam terbuka, tali temali, pertolongan pertama, dan jiwa kepemimpinan kesatria.',
    schedule: 'Jumat, 15.30 - 17.30 WITA',
    coach: 'Kak Ahmad Faisal, S.Pd.',
    achievements: ['Juara 2 Lomba Tingkat Penegak Kwarcab Buol 2024', 'Peserta Raimuna Daerah Sulawesi Tengah'],
    icon: 'Compass'
  },
  {
    id: 'extra-2',
    name: 'Organisasi Siswa Intra Sekolah (OSIS)',
    category: 'Kepemimpinan & Organisasi',
    description: 'Wadah aspirasi siswa mengelola program kegiatan sekolah, classmeeting, peringatan hari besar nasional, dan aksi sosial lingkungan.',
    schedule: 'Sabtu, 14.00 - 16.00 WITA',
    coach: 'Zulkifli Usman, S.Sos.',
    achievements: ['Penyelenggara Sukses Expo Vokasi Pelajar Buol 2024', 'Aksi Peduli Penghijauan Kulango'],
    icon: 'Users'
  },
  {
    id: 'extra-3',
    name: 'Palang Merah Remaja (PMR Wira)',
    category: 'Kemanusiaan & Kesehatan',
    description: 'Pelatihan pertolongan pertama pada kecelakaan (PPGD), donor darah sukarela, sanitasi lingkungan sekolah, dan kesiapsiagaan bencana.',
    schedule: 'Kamis, 15.30 - 17.00 WITA',
    coach: 'Hj. Rosdiana, S.E. & Pembina PMI Buol',
    achievements: ['Juara 1 Lomba Tandu Darurat Tingkat Remaja Kab. Buol', 'Mitra Utama Posko UKS Sekolah'],
    icon: 'HeartPulse'
  },
  {
    id: 'extra-4',
    name: 'Sanggar Seni Tari & Musik Tradisional Buol',
    category: 'Seni & Budaya',
    description: 'Melestarikan seni tari tradisional khas Buol seperti Tari Motayok, Tari Balatindak, serta musik rebana dan paduan suara sekolah.',
    schedule: 'Rabu, 15.30 - 17.30 WITA',
    coach: 'Ibu Ratna Dewi, S.Pd.',
    achievements: ['Penampil Utama Pembukaan Festival Pesona Buol 2024', 'Juara Harapan 1 FLS2N Tingkat Provinsi'],
    icon: 'Sparkles'
  },
  {
    id: 'extra-5',
    name: 'Klub Olahraga (Futsal & Bola Voli)',
    category: 'Olahraga & Prestasi',
    description: 'Pengembangan fisik, kerja sama tim, dan sportivitas melalui latihan rutin bola voli dan tim futsal SMKN 2 Biau.',
    schedule: 'Selasa & Sabtu, 16.00 - 18.00 WITA',
    coach: 'Bapak Rian Hidayat, S.Pd.',
    achievements: ['Semifinalis Turnamen Futsal Antar-Pelajar SMK/SMA Se-Kabupaten Buol', 'Juara 3 Voli Putri Hari Guru'],
    icon: 'Trophy'
  },
  {
    id: 'extra-6',
    name: 'IT Cyber & Multimedia Club',
    category: 'Teknologi & Kreatif',
    description: 'Eksplorasi coding web, fotografi, videografi konten sekolah, desain canva/photoshop, dan perakitan PC tingkat mahir.',
    schedule: 'Senin, 15.30 - 17.30 WITA',
    coach: 'Mohamad Fadli, S.Kom., M.T.',
    achievements: ['Pengelola Media Sosial & Liputan Video Resmi Sekolah', 'Juara 1 Lomba Desain Poster Edukasi Buol'],
    icon: 'Monitor'
  }
];

export const SAMPLE_APPLICANTS: PpdbApplicant[] = [
  {
    registrationNumber: 'PPDB-BIAU-2025-0012',
    fullName: 'Fikram Pratama Putra',
    nisn: '0078192341',
    originSchool: 'SMP Negeri 1 Biau',
    firstChoice: 'Teknik Komputer dan Jaringan',
    secondChoice: 'Agribisnis Pengolahan Hasil Pertanian',
    track: 'Prestasi',
    phone: '085241908123',
    parentName: 'Baharuddin Putra',
    registrationDate: '08 Februari 2025',
    status: 'Terverifikasi',
    notes: 'Seluruh berkas ijazah, KK, dan piagam prestasi Juara 1 OSN Matematika SMP terverifikasi lengkap.'
  },
  {
    registrationNumber: 'PPDB-BIAU-2025-0027',
    fullName: 'Siti Nur Aisyah',
    nisn: '0089124451',
    originSchool: 'SMP Negeri 2 Biau',
    firstChoice: 'Agribisnis Tanaman Pangan dan Hortikultura',
    secondChoice: 'Agribisnis Pengolahan Hasil Pertanian',
    track: 'Zonasi',
    phone: '082199014321',
    parentName: 'Mansyur A.',
    registrationDate: '10 Februari 2025',
    status: 'Jadwal Tes Wawancara',
    notes: 'Tes wawancara minat bakat dijadwalkan pada hari Sabtu, Ruang 03 Kampus Kulango.'
  },
  {
    registrationNumber: 'PPDB-BIAU-2025-0045',
    fullName: 'Rian Hidayatullah',
    nisn: '0076239102',
    originSchool: 'MTs Negeri 1 Buol',
    firstChoice: 'Agribisnis Ternak Unggas',
    secondChoice: 'Agribisnis Tanaman Pangan dan Hortikultura',
    track: 'Minat Bakat Vokasi',
    phone: '085341239876',
    parentName: 'H. Sudirman',
    registrationDate: '14 Februari 2025',
    status: 'Terverifikasi',
    notes: 'Memiliki komitmen tinggi berwirausaha peternakan mandiri, berkas lengkap.'
  },
  {
    registrationNumber: 'PPDB-BIAU-2025-0061',
    fullName: 'Amanda Zahra',
    nisn: '0081249910',
    originSchool: 'SMP Negeri 3 Biau',
    firstChoice: 'Agribisnis Pengolahan Hasil Pertanian',
    secondChoice: 'Teknik Komputer dan Jaringan',
    track: 'Afirmasi',
    phone: '082390128374',
    parentName: 'Ilyas K.',
    registrationDate: '18 Februari 2025',
    status: 'Diterima',
    notes: 'Diterima resmi di Jalur Afirmasi KIP. Silakan mengambil kelengkapan seragam di koperasi sekolah.'
  }
];

export const INDUSTRY_PARTNERS = [
  {
    name: 'Dinas Pertanian & Ketahanan Pangan Kab. Buol',
    role: 'Mitra Pembinaan & Penempatan PKL Siswa ATPH',
    badge: 'Pemerintah Daerah'
  },
  {
    name: 'PT Telkom Indonesia (Witel Sulteng)',
    role: 'Sertifikasi Jaringan, Fiber Optic & PKL TKJ',
    badge: 'BUMN Telekomunikasi'
  },
  {
    name: 'Asosiasi Peternak Unggas Buol Sejahtera',
    role: 'Mitra Usaha & Penyerapan Lulusan ATU',
    badge: 'Industri Peternakan'
  },
  {
    name: 'Balai Penerapan Standar Instrumen Pertanian (BPSIP Sulteng)',
    role: 'Uji Laboratorium & Pelatihan Kultur Jaringan',
    badge: 'Lembaga Riset'
  },
  {
    name: 'UD Sari Buol Mandiri (Bakery & Olahan Pangan)',
    role: 'Mitra Teaching Factory & PKL APHP',
    badge: 'Industri Pangan Lokal'
  },
  {
    name: 'Buol Media Network / ISP Buol Net',
    role: 'Mitra Kerja Praktik Fiber Optic & Wireless',
    badge: 'Penyedia Jasa Internet'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Apakah bersekolah di SMK Negeri 2 Biau dipungut biaya pendaftaran atau SPP bulanan?',
    answer: 'Tidak ada biaya! Sebagai Sekolah Menengah Kejuruan Negeri di bawah naungan Dinas Pendidikan Provinsi Sulawesi Tengah, SMKN 2 Biau menggratiskan biaya pendaftaran PPDB dan bebas SPP bulanan (Gratis). Siswa didukung dana BOS dan fasilitas praktik modern dari pemerintah.',
    category: 'Biaya & PPDB'
  },
  {
    question: 'Jurusan apa saja yang tersedia di SMK Negeri 2 Biau?',
    answer: 'Terdapat 4 Program Keahlian unggulan: (1) Teknik Komputer dan Jaringan [TKJ], (2) Agribisnis Tanaman Pangan dan Hortikultura [ATPH], (3) Agribisnis Pengolahan Hasil Pertanian [APHP], dan (4) Agribisnis Ternak Unggas [ATU]. Masing-masing jurusan memiliki laboratorium dan lahan praktik tersendiri.',
    category: 'Jurusan'
  },
  {
    question: 'Bagaimana alur pendaftaran PPDB secara online?',
    answer: 'Calon siswa cukup mengisi formulir pada menu "PPDB Online" di website ini dengan memasukkan identitas diri, NISN, asal SMP/MTs, dan pilihan jurusan. Setelah berhasil mendaftar, cetak atau simpan Bukti Pendaftaran digital untuk ditunjukkan saat verifikasi berkas di kampus sekolah.',
    category: 'Biaya & PPDB'
  },
  {
    question: 'Apakah lulusan SMKN 2 Biau bisa melanjutkan kuliah ke perguruan tinggi negeri (PTN)?',
    answer: 'Tentu saja bisa! Lulusan SMK memiliki hak yang sama untuk mengikuti seleksi SNBP (prestasi nilai rapor), SNBT (tes UTBK), maupun jalur mandiri di seluruh perguruan tinggi negeri dan swasta seperti Untad Palu, UNG Gorontalo, Unhas Makassar, Poltek Pertanian, maupun universitas lainnya.',
    category: 'Karir & Kuliah'
  },
  {
    question: 'Apakah sekolah membantu penyaluran kerja setelah lulus?',
    answer: 'Ya, SMKN 2 Biau memiliki unit Bursa Kerja Khusus (BKK) resmi yang bekerjasama dengan puluhan mitra industri (DUDI), Dinas Tenaga Kerja, perusahaan swasta, dan asosiasi pengusaha untuk memfasilitasi informasi lowongan kerja, magang industri, dan seleksi kerja langsung di sekolah.',
    category: 'Karir & Kuliah'
  },
  {
    question: 'Di mana lokasi persis kampus SMK Negeri 2 Biau?',
    answer: 'Kampus SMKN 2 Biau beralamat di Jalan Anoa No. 32, Kelurahan Kulango, Kecamatan Biau, Kabupaten Buol, Sulawesi Tengah 94563. Lokasi sangat strategis, mudah dijangkau transportasi umum, memiliki lingkungan asri dengan udara segar yang mendukung pembelajaran agribisnis dan teknologi.',
    category: 'Lokasi & Kontak'
  }
];
