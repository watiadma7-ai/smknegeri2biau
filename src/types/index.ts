export interface Major {
  id: string;
  code: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  badgeColor: string;
  accentBg: string;
  iconName: string;
  competencies: string[];
  careerProspects: string[];
  facilities: string[];
  targetCapacity: number;
  highlightStats: { label: string; value: string }[];
  curriculumHighlights: { semester: string; subjects: string[] }[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Berita' | 'Prestasi' | 'Pengumuman' | 'Akademik';
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface AgendaItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Laboratorium & Bengkel' | 'Pertanian & Peternakan' | 'Fasilitas Umum' | 'Olahraga & Ibadah';
  description: string;
  capacity: string;
  features: string[];
  imageUrl: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  role: string;
  category: 'Pimpinan' | 'Guru Produktif TKJ' | 'Guru Produktif Agribisnis' | 'Guru Umum' | 'Tenaga Kependidikan';
  education: string;
  imageUrl: string;
  quote?: string;
}

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  description: string;
  schedule: string;
  coach: string;
  achievements: string[];
  icon: string;
}

export interface PpdbApplicant {
  registrationNumber: string;
  fullName: string;
  nisn: string;
  originSchool: string;
  firstChoice: string;
  secondChoice: string;
  track: 'Zonasi' | 'Prestasi' | 'Afirmasi' | 'Minat Bakat Vokasi';
  phone: string;
  parentName: string;
  registrationDate: string;
  status: 'Terverifikasi' | 'Menunggu Berkas' | 'Jadwal Tes Wawancara' | 'Diterima';
  notes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
