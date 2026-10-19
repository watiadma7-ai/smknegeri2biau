import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { SCHOOL_INFO, FAQ_DATA } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [contactForm, setContactForm] = useState({
    name: '',
    emailOrPhone: '',
    category: 'Pertanyaan PPDB & Pendaftaran',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({
        name: '',
        emailOrPhone: '',
        category: 'Pertanyaan PPDB & Pendaftaran',
        message: ''
      });
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Layanan Komunikasi & Lokasi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi SMK Negeri 2 Biau
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Tim panitia PPDB, humas sekolah, dan tata usaha siap melayani pertanyaan siswa, wali murid, dan mitra dunia industri.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Alamat Kampus</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {SCHOOL_INFO.address.street}, {SCHOOL_INFO.address.subdistrict}, {SCHOOL_INFO.address.regency}, {SCHOOL_INFO.address.province} {SCHOOL_INFO.address.postalCode}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">WhatsApp Resmi</h3>
            <p className="text-xs text-slate-600">
              Konsultasi cepat via chat:
            </p>
            <a
              href={`https://wa.me/${SCHOOL_INFO.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20SMKN%202%20Biau,%20saya%20ingin%20konsultasi`}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              {SCHOOL_INFO.contacts.whatsapp} ↗
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Surat Elektronik</h3>
            <p className="text-xs text-slate-600">
              Pengiriman dokumen & kerjasama:
            </p>
            <a
              href={`mailto:${SCHOOL_INFO.contacts.email}`}
              className="inline-block text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline truncate max-w-full"
            >
              {SCHOOL_INFO.contacts.email}
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Waktu Operasional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {SCHOOL_INFO.contacts.operationalHours}
            </p>
            <span className="text-[11px] font-bold text-emerald-700 block">
              Posko PPDB Buka Setiap Hari Kerja
            </span>
          </div>

        </div>

        {/* Layout: Interactive Message Form & FAQ (6 cols : 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Message & Aspirasi Form (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-1">
              Kirim Pesan / Permohonan Informasi
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Sampaikan pertanyaan mengenai PPDB, kemitraan PKL, atau permohonan kunjungan sekolah.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-sm">
                  Pesan Anda Berhasil Terkirim!
                </h4>
                <p className="text-xs text-emerald-700">
                  Terima kasih telah menghubungi SMKN 2 Biau. Petugas humas atau panitia PPDB kami akan menindaklanjuti pesan Anda.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pak Hidayat (Wali Murid)"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp / Email Aktif *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 085241009823 / email@anda.com"
                    value={contactForm.emailOrPhone}
                    onChange={(e) => setContactForm({ ...contactForm, emailOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Pesan
                  </label>
                  <select
                    value={contactForm.category}
                    onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Pertanyaan PPDB & Pendaftaran">Pertanyaan PPDB & Pendaftaran Siswa Baru</option>
                    <option value="Informasi Jurusan & Kurikulum">Informasi Jurusan & Kurikulum Kejuruan</option>
                    <option value="Kerjasama Industri / PKL (DUDI)">Kerjasama Industri / Penempatan PKL (DUDI)</option>
                    <option value="Layanan Administrasi / Legalisir Ijazah">Layanan Administrasi / Legalisir Ijazah Alumni</option>
                    <option value="Saran & Masukan Pengembangan Sekolah">Saran & Masukan Pengembangan Sekolah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Isi Pesan / Pertanyaan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pesan atau pertanyaan Anda secara rinci..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-black text-slate-900">
                  Pertanyaan Sering Ditanyakan (FAQ)
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Jawaban seputar biaya pendidikan negeri, kuota jurusan, fasilitas, dan kelanjutan karir.
              </p>

              <div className="space-y-3">
                {FAQ_DATA.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-3.5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-800 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-3.5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Google Maps & Location Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  Navigasi Lokasi GPS
                </span>
                <h4 className="font-extrabold text-sm sm:text-base">
                  Kunjungi Kampus SMK Negeri 2 Biau
                </h4>
                <p className="text-xs text-slate-400">
                  Jl. Anoa No. 32, Kelurahan Kulango, Kec. Biau, Kab. Buol
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=SMK+Negeri+2+Biau+Buol"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition-colors shadow"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
