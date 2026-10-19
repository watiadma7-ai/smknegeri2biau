import React, { useState } from 'react';
import { X, Calendar, User, Tag, Share2, MessageSquare, Send, Check } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<string[]>([
    'Keren sekali SMKN 2 Biau, fasilitasnya semakin lengkap dan maju!',
    'Semoga siswa-siswi vokasi Buol semakin berprestasi di tingkat nasional.'
  ]);

  if (!news) return null;

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, commentText.trim()]);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow inline-block mb-2">
              {news.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black leading-tight">
              {news.title}
            </h3>
          </div>
        </div>

        {/* Article Meta Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" />
              {news.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-600" />
              {news.author}
            </span>
          </div>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 font-medium transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin!' : 'Bagikan Berita'}</span>
          </button>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          {news.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-500">Topik Terkait:</span>
            {news.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Comments Section */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Tanggapan & Dukungan Warga Sekolah ({comments.length})</span>
            </div>

            <div className="space-y-2">
              {comments.map((comment, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">Warga Buol / Siswa:</span>
                  <p>{comment}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2 pt-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Tulis ucapan atau apresiasi untuk SMKN 2 Biau..."
                className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim</span>
              </button>
            </form>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
