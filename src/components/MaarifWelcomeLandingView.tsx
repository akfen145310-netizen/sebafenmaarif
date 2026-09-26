import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Layers,
  CheckCircle2,
  QrCode,
  PenTool,
  Clock,
  SearchCheck,
  ShieldCheck,
  ArrowRight,
  Atom,
  Flame,
  Globe2,
  Award
} from 'lucide-react';

interface Props {
  onSelectGrade: (grade: number) => void;
  currentGrade?: number;
}

export const MaarifWelcomeLandingView: React.FC<Props> = ({ onSelectGrade, currentGrade }) => {
  const gradeOptions = [
    {
      grade: 5,
      title: '5. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '322 Sayfa • Sayfa Sayfa İnteraktif İstasyonlar',
      color: 'from-cyan-500 via-blue-600 to-indigo-600',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      accentColor: 'text-cyan-400',
      description: 'Güneş, Dünya ve Ay, Kuvvet, Canlılar Dünyası, Işığın Dünyası, Maddenin Doğası, Elektrik ve Geri Dönüşüm.',
      highlights: ['152 Sayfa 1. Kitap (3 Ünite)', '170 Sayfa 2. Kitap (4 Ünite)', 'Açılır-Kapanır Cevap Kutuları', '20 LGS Mantık Sorusu']
    },
    {
      grade: 6,
      title: '6. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '314 Sayfa • Tekrar Dizayn Tescilli',
      color: 'from-emerald-500 via-teal-600 to-cyan-600',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      accentColor: 'text-emerald-400',
      description: 'Güneş Sistemi & Tutulmalar, Kuvvet ve Hareket, Canlılarda Sistemler, Işığın Yansıması & Renkler, Maddenin Özellikleri, Elektrik ve Biyoçeşitlilik.',
      highlights: ['184 Sayfa 1. Kitap (4 Ünite)', '130 Sayfa 2. Kitap (3 Ünite)', 'Gravzant Halkası & Reosta', 'Tüm EBA Karekodları']
    },
    {
      grade: 7,
      title: '7. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '319 Sayfa • Tekrar Dizayn Tescilli',
      color: 'from-indigo-500 via-purple-600 to-pink-600',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      accentColor: 'text-indigo-400',
      description: 'Güneş Sistemi ve Ötesi, Hücre ve Bölünmeler, Kuvvet ve Enerji, Işığın Kırılması & Mercekler, Maddenin Doğası, Elektriklenme ve Sürdürülebilir Yaşam.',
      highlights: ['153 Sayfa 1. Kitap (3 Ünite)', '166 Sayfa 2. Kitap (4 Ünite)', 'İbnü’l-Heysem & Faraday', 'Sayfa Sayfa Çözümlü']
    },
    {
      grade: 8,
      title: '8. Sınıf Fen Bilimleri',
      subtitle: 'LGS Hazırlık & Maarif Formatı',
      booksInfo: 'LGS Odaklı Müfredat (7 Ünite)',
      pagesInfo: 'Kapsamlı Soru Bankası & Deneyler',
      color: 'from-blue-600 via-indigo-600 to-violet-700',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      accentColor: 'text-blue-400',
      description: 'Mevsimler ve İklim, DNA ve Genetik Kod, Basınç, Madde ve Endüstri, Basit Makineler, Enerji Dönüşümleri ve Çevre Bilimi.',
      highlights: ['LGS Beceri Temelli Sorular', 'Yeni Nesil Deney Analizleri', 'Sınav Odaklı Özetler', 'Akıllı Tahta Araçları']
    }
  ];

  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-300">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-slate-700/80 p-6 sm:p-10 shadow-2xl shadow-cyan-950/40">
        {/* Ambient Science Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-indigo-600/15 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-950/60 text-xs sm:text-sm font-black tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>TÜRKİYE YÜZYILI MAARİF MODELİ • AKILLI TAHTA SİSTEMİ</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-fredoka tracking-tight leading-tight">
            Yüzde 100 Maarif Uyumlu Fen Bilimleri Sitesine <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">Hoş Geldiniz</span>
          </h1>

          {/* Prompt Message */}
          <p className="text-base sm:text-xl font-bold text-cyan-200/90 max-w-2xl mx-auto leading-relaxed">
            Lütfen ders işlemek istediğiniz sınıf seviyesini seçiniz:
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            MEB Talim ve Terbiye Kurulu onaylı ders kitapları esas alınarak sayfa sayfa tekrar dizayn edilmiş, açılır-kapanır cevap kutucukları, orijinal EBA karekodları, akıllı tahta çizim araçları ve LGS mantık muhakeme sorularıyla zenginleştirilmiştir.
          </p>
        </div>
      </div>

      {/* Grade Selection Cards Grid (5, 6, 7, 8. Sınıf) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gradeOptions.map((item) => {
          const isSelected = currentGrade === item.grade;

          return (
            <div
              key={item.grade}
              onClick={() => onSelectGrade(item.grade)}
              className={`group relative rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden p-6 sm:p-7 flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 shadow-2xl shadow-cyan-950/70 ring-2 ring-cyan-400/50 scale-[1.01]'
                  : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/40 hover:-translate-y-1'
              }`}
            >
              {/* Card Top Row */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* Big Grade Number Squircle */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform shrink-0`}>
                      {item.grade}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${item.badgeBg}`}>
                          {item.subtitle}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Seçili Sınıf
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-fredoka mt-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700 shrink-0">
                    {item.booksInfo}
                  </span>
                </div>

                {/* Subtitle & Page Count */}
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    {item.pagesInfo}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    %100 Eksiksiz Uyum
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights tags */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400/90 group-hover:text-cyan-300 transition-colors">
                  Ders akışına geçmek için tıklayın
                </span>

                <div className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-md transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/30'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-950/40 group-hover:from-cyan-500 group-hover:to-blue-500'
                }`}>
                  <span>{item.grade}. Sınıfı Aç</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Highlight Bar */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-black text-sm sm:text-base uppercase tracking-wider font-fredoka">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Maarif Modeli Akıllı Tahta Nitelikleri</span>
          </div>
          <span className="text-xs font-bold text-slate-400 hidden sm:block">
            Milli Eğitim Bakanlığı Müfredatı
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-cyan-300">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Sayfa Sayfa İstasyon Akışı</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ön değerlendirme, hazırlık, etkinlik, köprü bilgileri, pekiştirme, performans ve ünite sonu değerlendirmeleri eksiksiz sırasıyla işlenmiştir.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tıklanabilir Cevap Kutuları</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Her sorunun altında öğretmen kontrollü interaktif "Cevabı Gör" kutucukları ve üst barda global "Tüm Cevapları Aç/Kapat" anahtarı bulunur.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-blue-300">
              <QrCode className="w-4 h-4 text-blue-400" />
              <span>Gerçek EBA Karekodları</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kitapların ilgili sayfalarındaki EBA video, deney, simülasyon ve ünite sonu ölçme test karekodları doğrudan tescillenmiştir.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-indigo-300">
              <PenTool className="w-4 h-4 text-indigo-400" />
              <span>Akıllı Tahta Ekran Kalemi</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ders esnasında kitap veya soru üzerine renkli kalem, fosforlu işaretleyici ve silgi ile doğrudan çizim yapılabilir.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Ders İçi Sayaç & Öğrenci Çarkı</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Soru çözümü veya etkinlik sürelerini takip etmek için sayaç ve sınıftan söz hakkı vermek için rastgele öğrenci seçici yer alır.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-purple-300">
              <SearchCheck className="w-4 h-4 text-purple-400" />
              <span>Tekrar Dizayn Kalite Denetimi</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              2 aşamalı kalite denetim ajanı raporuyla tüm sınıfların (5, 6, 7. Sınıflar 1. ve 2. Kitaplar) sayfa karşılaştırması doğrulanmıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
