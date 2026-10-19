import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ClipboardList, 
  Search, 
  FileText, 
  Printer, 
  HelpCircle, 
  ArrowRight, 
  Calendar, 
  Award, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Phone,
  User,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_APPLICANTS } from '../data/schoolData';
import { PpdbApplicant } from '../types';

interface PpdbSectionProps {
  preselectedMajor?: string | null;
}

export const PpdbSection: React.FC<PpdbSectionProps> = ({ preselectedMajor }) => {
  const [activeTab, setActiveTab] = useState<'form' | 'status' | 'info'>('form');
  const [step, setStep] = useState<number>(1);
  const [applicantsList, setApplicantsList] = useState<PpdbApplicant[]>(SAMPLE_APPLICANTS);
  const [registeredCard, setRegisteredCard] = useState<PpdbApplicant | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    nisn: '',
    nik: '',
    birthPlace: 'Buol',
    birthDate: '2009-05-15',
    gender: 'Laki-laki',
    originSchool: '',
    phone: '',
    firstChoice: preselectedMajor || 'Teknik Komputer dan Jaringan',
    secondChoice: 'Agribisnis Pengolahan Hasil Pertanian',
    track: 'Zonasi' as 'Zonasi' | 'Prestasi' | 'Afirmasi' | 'Minat Bakat Vokasi',
    parentName: '',
    parentPhone: '',
    parentJob: 'Petani / Wiraswasta',
    address: 'Jl. Anoa, Kelurahan Kulango, Kec. Biau, Kab. Buol'
  });

  // Status Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<PpdbApplicant | null>(SAMPLE_APPLICANTS[0]);
  const [hasSearched, setHasSearched] = useState(false);

  // If preselectedMajor changes, update firstChoice
  React.useEffect(() => {
    if (preselectedMajor) {
      setFormData((prev) => ({ ...prev, firstChoice: preselectedMajor }));
      setActiveTab('form');
    }
  }, [preselectedMajor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate Registration Code
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const newRegNum = `PPDB-BIAU-2025-${randomDigits}`;
    
    const newApplicant: PpdbApplicant = {
      registrationNumber: newRegNum,
      fullName: formData.fullName || 'Calon Siswa SMKN 2 Biau',
      nisn: formData.nisn || '0091827364',
      originSchool: formData.originSchool || 'SMP Negeri di Kabupaten Buol',
      firstChoice: formData.firstChoice,
      secondChoice: formData.secondChoice,
      track: formData.track,
      phone: formData.phone || '0852xxxxxxxx',
      parentName: formData.parentName || 'Orang Tua / Wali',
      registrationDate: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      status: 'Terverifikasi',
      notes: 'Pendaftaran online berhasil masuk ke sistem. Silakan bawa berkas fisik ke Ruang Panitia PPDB SMKN 2 Biau.'
    };

    setApplicantsList([newApplicant, ...applicantsList]);
    setRegisteredCard(newApplicant);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const found = applicantsList.find(
      (a) => a.registrationNumber.toLowerCase().includes(query) || a.nisn.includes(query) || a.fullName.toLowerCase().includes(query)
    );
    setSearchResult(found || null);
  };

  const quickSearch = (code: string) => {
    setSearchQuery(code);
    const found = applicantsList.find((a) => a.registrationNumber === code || a.nisn === code);
    setSearchResult(found || null);
    setHasSearched(true);
    setActiveTab('status');
  };

  return (
    <section id="ppdb" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Penerimaan Peserta Didik Baru 2025/2026
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            PPDB Online SMK Negeri 2 Biau
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Pendaftaran terpadu tanpa biaya (100% Bebas SPP & Uang Gedung). Raih masa depan vokasi unggulan di bidang Agribisnis & Teknologi Informasi.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-emerald-600 text-white shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Formulir Pendaftaran</span>
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'status'
                  ? 'bg-emerald-600 text-white shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Cek Status Pendaftar</span>
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'info'
                  ? 'bg-emerald-600 text-white shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Syarat & Alur</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Formulir Pendaftaran */}
        {activeTab === 'form' && (
          <div className="max-w-3xl mx-auto">
            
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span className={step >= 1 ? 'text-emerald-700 font-extrabold' : ''}>1. Data Calon Siswa</span>
                <span className={step >= 2 ? 'text-emerald-700 font-extrabold' : ''}>2. Pilihan Jurusan & Jalur</span>
                <span className={step >= 3 ? 'text-emerald-700 font-extrabold' : ''}>3. Data Orang Tua & Konfirmasi</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Step 1: Data Calon Siswa */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-emerald-600" />
                      Identitas Calon Siswa
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pastikan data sesuai dengan Akta Kelahiran dan Kartu Keluarga (KK).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Lengkap Siswa *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Contoh: Mohamad Rezky Pratama"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NISN (Nomor Induk Siswa Nasional) *
                      </label>
                      <input
                        type="text"
                        name="nisn"
                        required
                        maxLength={10}
                        placeholder="10 digit NISN dari SMP"
                        value={formData.nisn}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NIK (Sesuai Kartu Keluarga) *
                      </label>
                      <input
                        type="text"
                        name="nik"
                        required
                        maxLength={16}
                        placeholder="16 digit NIK"
                        value={formData.nik}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        name="birthPlace"
                        placeholder="Contoh: Buol / Kulango"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jenis Kelamin
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Asal Sekolah (SMP / MTs) *
                      </label>
                      <input
                        type="text"
                        name="originSchool"
                        required
                        placeholder="Contoh: SMPN 1 Biau / MTs Negeri 1 Buol"
                        value={formData.originSchool}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp Aktif Siswa / Wali *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Contoh: 085241009823 (untuk pengiriman info seleksi)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors"
                    >
                      <span>Lanjut: Pilihan Jurusan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Pilihan Jurusan & Jalur */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-emerald-600" />
                      Pilihan Program Keahlian & Jalur PPDB
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pilih jurusan prioritas pertama dan kedua sesuai minat kejuruan.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jurusan Pilihan 1 (Prioritas Utama) *
                      </label>
                      <select
                        name="firstChoice"
                        value={formData.firstChoice}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan (TKJ)</option>
                        <option value="Agribisnis Tanaman Pangan dan Hortikultura">Agribisnis Tanaman Pangan dan Hortikultura (ATPH)</option>
                        <option value="Agribisnis Pengolahan Hasil Pertanian">Agribisnis Pengolahan Hasil Pertanian (APHP)</option>
                        <option value="Agribisnis Ternak Unggas">Agribisnis Ternak Unggas (ATU)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jurusan Pilihan 2 (Alternatif Cadangan) *
                      </label>
                      <select
                        name="secondChoice"
                        value={formData.secondChoice}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Agribisnis Pengolahan Hasil Pertanian">Agribisnis Pengolahan Hasil Pertanian (APHP)</option>
                        <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan (TKJ)</option>
                        <option value="Agribisnis Tanaman Pangan dan Hortikultura">Agribisnis Tanaman Pangan dan Hortikultura (ATPH)</option>
                        <option value="Agribisnis Ternak Unggas">Agribisnis Ternak Unggas (ATU)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jalur Pendaftaran PPDB *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                        {[
                          { id: 'Zonasi', title: 'Jalur Zonasi', desc: 'Domisili Kecamatan Biau & sekitar Kab. Buol' },
                          { id: 'Prestasi', title: 'Jalur Prestasi', desc: 'Nilai rapor SMP atau piagam kejuaraan' },
                          { id: 'Afirmasi', title: 'Jalur Afirmasi', desc: 'Pemegang KIP, PKH, atau keluarga prasejahtera' },
                          { id: 'Minat Bakat Vokasi', title: 'Minat Bakat Vokasi', desc: 'Komitmen wirausaha pertanian/peternakan/IT' },
                        ].map((j) => (
                          <label
                            key={j.id}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                              formData.track === j.id
                                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold text-slate-900">{j.title}</span>
                              <input
                                type="radio"
                                name="track"
                                value={j.id}
                                checked={formData.track === j.id}
                                onChange={handleInputChange}
                                className="text-emerald-600 focus:ring-emerald-500"
                              />
                            </div>
                            <span className="text-[11px] text-slate-500">{j.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm"
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors"
                    >
                      <span>Lanjut: Data Orang Tua</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Data Orang Tua & Konfirmasi */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      Data Orang Tua / Wali & Domisili
                    </h3>
                    <p className="text-xs text-slate-500">
                      Langkah terakhir untuk menerbitkan Kartu Registrasi PPDB.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Orang Tua / Wali *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        placeholder="Nama Ayah atau Ibu"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pekerjaan Orang Tua
                      </label>
                      <input
                        type="text"
                        name="parentJob"
                        placeholder="Contoh: Petani / PNS / Wiraswasta"
                        value={formData.parentJob}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Alamat Tempat Tinggal di Kab. Buol *
                      </label>
                      <textarea
                        name="address"
                        rows={2}
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Jalan, RT/RW, Kelurahan/Desa, Kecamatan di Buol"
                      ></textarea>
                    </div>
                  </div>

                  {/* Agreement checkbox */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5">
                    <input 
                      type="checkbox" 
                      id="ppdb-agree" 
                      required 
                      defaultChecked 
                      className="mt-0.5 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="ppdb-agree" className="text-xs text-slate-700 leading-snug cursor-pointer">
                      Saya menyatakan bahwa data yang diisi adalah benar dan bersedia mengikuti prosedur verifikasi berkas di kampus SMK Negeri 2 Biau tanpa dipungut biaya apapun.
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Kirim Pendaftaran & Terbitkan Bukti</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}

        {/* Tab 2: Cek Status Pendaftaran */}
        {activeTab === 'status' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Search Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Cari Status Pendaftaran PPDB Siswa
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Masukkan Nomor Registrasi (contoh: <code>PPDB-BIAU-2025-0012</code>) atau 10 digit NISN Anda.
              </p>

              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ketik Nomor Registrasi / NISN..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                >
                  Cek Status
                </button>
              </form>

              {/* Sample Quick Lookup Badges */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Contoh Cek Langsung:</span>
                {SAMPLE_APPLICANTS.map((applicant) => (
                  <button
                    key={applicant.registrationNumber}
                    onClick={() => quickSearch(applicant.registrationNumber)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 text-[11px] font-semibold transition-colors"
                  >
                    {applicant.registrationNumber} ({applicant.fullName.split(' ')[0]})
                  </button>
                ))}
              </div>
            </div>

            {/* Search Result Display */}
            {searchResult ? (
              <div className="bg-white border-2 border-emerald-600/30 rounded-2xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {searchResult.registrationNumber}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">
                      {searchResult.fullName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      NISN: {searchResult.nisn} • Asal: {searchResult.originSchool}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div>
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wide inline-flex items-center gap-1.5 ${
                      searchResult.status === 'Diterima'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : searchResult.status === 'Terverifikasi'
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : searchResult.status === 'Jadwal Tes Wawancara'
                        ? 'bg-purple-100 text-purple-800 border border-purple-300'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {searchResult.status}
                    </span>
                  </div>
                </div>

                {/* Tracking Step Timeline */}
                <div className="py-4 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                    Tahapan Seleksi Calon Siswa:
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                      ✓ Formulir Terkirim
                    </div>
                    <div className={`p-2 rounded-lg font-bold border ${
                      searchResult.status !== 'Menunggu Berkas'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      {searchResult.status !== 'Menunggu Berkas' ? '✓ Dokumen Valid' : 'Verifikasi Berkas'}
                    </div>
                    <div className={`p-2 rounded-lg font-bold border ${
                      searchResult.status === 'Jadwal Tes Wawancara' || searchResult.status === 'Diterima'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      Wawancara Bakat
                    </div>
                    <div className={`p-2 rounded-lg font-bold border ${
                      searchResult.status === 'Diterima'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      Daftar Ulang Resmi
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Pilihan Jurusan 1:</span>
                    <span className="font-bold text-slate-900">{searchResult.firstChoice}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Pilihan Jurusan 2:</span>
                    <span className="font-bold text-slate-900">{searchResult.secondChoice}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Jalur Pendaftaran:</span>
                    <span className="font-semibold text-slate-800">{searchResult.track}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Tanggal Registrasi:</span>
                    <span className="font-semibold text-slate-800">{searchResult.registrationDate}</span>
                  </div>
                  <div className="sm:col-span-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-500 font-bold block mb-0.5">Catatan Panitia PPDB:</span>
                    <p className="text-slate-700 italic">{searchResult.notes}</p>
                  </div>
                </div>

                {/* Action button to print slip */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setRegisteredCard(searchResult)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Cetak Bukti Pendaftaran
                  </button>
                </div>
              </div>
            ) : hasSearched ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Data Tidak Ditemukan</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Pastikan Nomor Registrasi atau NISN yang Anda masukkan sudah benar, atau daftar melalui Formulir Pendaftaran Online.
                </p>
              </div>
            ) : null}

          </div>
        )}

        {/* Tab 3: Syarat & Alur PPDB */}
        {activeTab === 'info' && (
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* 4 Steps Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  title: 'Daftar Online',
                  desc: 'Isi formulir online di website ini, simpan nomor registrasi & cetak kartu tanda bukti.'
                },
                {
                  step: '02',
                  title: 'Verifikasi Berkas',
                  desc: 'Bawa fotokopi ijazah/SKL, KK, dan pas foto ke Posko PPDB di kampus Kulango.'
                },
                {
                  step: '03',
                  title: 'Uji Minat & Bakat',
                  desc: 'Wawancara santai pengenalan jurusan (Agribisnis atau Jaringan Komputer).'
                },
                {
                  step: '04',
                  title: 'Daftar Ulang (Gratis)',
                  desc: 'Pengumuman resmi & pembagian seragam praktik. 100% Bebas Biaya SPP.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
                  <span className="text-3xl font-black text-emerald-200 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 mt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Document Checklist & Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Persyaratan Berkas Fisik:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMP/MTs (2 lembar dilegalisir).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fotokopi Kartu Keluarga (KK) dan Akta Kelahiran (2 lembar).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pas Foto terbaru ukuran 3x4 (3 lembar, latar merah/biru).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fotokopi Kartu Indonesia Pintar (KIP/PKH) bagi pendaftar Jalur Afirmasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Piagam/Sertifikat Kejuaraan asli & fotokopi bagi pendaftar Jalur Prestasi.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-950 text-white rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  Jadwal Penting PPDB 2025/2026:
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-emerald-800/80">
                    <span className="text-emerald-200">Pendaftaran Online Gelombang 1</span>
                    <span className="font-bold text-white">05 Jan - 30 April 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-emerald-800/80">
                    <span className="text-emerald-200">Verifikasi Dokumen & Wawancara</span>
                    <span className="font-bold text-white">02 - 15 Mei 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-emerald-800/80">
                    <span className="text-emerald-200">Pengumuman Kelulusan Resmi</span>
                    <span className="font-bold text-white">20 Mei 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-emerald-800/80">
                    <span className="text-emerald-200">Pendaftaran Gelombang 2 (Jika Kuota Tersedia)</span>
                    <span className="font-bold text-white">01 - 30 Juni 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Masa Pengenalan Lingkungan Sekolah (MPLS)</span>
                    <span className="font-bold text-emerald-400">14 - 17 Juli 2025</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('form')}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center transition-colors shadow"
                  >
                    Daftar Sekarang Sebelum Kuota Penuh
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Printable Registration Proof Slip Modal */}
      {registeredCard && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 text-left relative animate-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Bukti Pendaftaran Resmi PPDB
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">
                  SMK NEGERI 2 BIAU - KAB. BUOL
                </h3>
              </div>
              <button
                onClick={() => setRegisteredCard(null)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Slip Content */}
            <div className="py-4 space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                  Nomor Registrasi PPDB
                </span>
                <span className="text-xl font-black font-mono text-emerald-700">
                  {registeredCard.registrationNumber}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Simpan atau catat nomor ini untuk pengecekan status
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Nama Calon Siswa:</span>
                  <span className="font-bold text-slate-900">{registeredCard.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">NISN / Asal Sekolah:</span>
                  <span className="font-semibold text-slate-800">{registeredCard.nisn} ({registeredCard.originSchool})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Pilihan Jurusan 1:</span>
                  <span className="font-bold text-emerald-700">{registeredCard.firstChoice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Pilihan Jurusan 2:</span>
                  <span className="font-semibold text-slate-800">{registeredCard.secondChoice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Jalur Pendaftaran:</span>
                  <span className="font-semibold text-slate-800">{registeredCard.track}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Status Pendaftaran:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {registeredCard.status}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 text-amber-800 rounded-xl text-[11px] border border-amber-200">
                <strong>Langkah Selanjutnya:</strong> Silakan datang ke Posko PPDB Kampus SMKN 2 Biau di Jl. Anoa No. 32 Kel. Kulango, Kec. Biau pada jam kerja (07.30 - 14.00 WITA) dengan membawa fotokopi KK, Ijazah/SKL, dan pas foto.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  try {
                    window.print();
                  } catch {
                    // ignore
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak Lembar Bukti</span>
              </button>

              <button
                onClick={() => setRegisteredCard(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Selesai
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
