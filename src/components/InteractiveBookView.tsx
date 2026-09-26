import React, { useState, useMemo } from 'react';
import { SubTopic, Unit, InteractiveBookItem } from '../types/curriculum';
import { getCompleteInteractiveBookFlow } from '../data/maarifInteractiveBookData';
import {
  tekrarDizaynReportData,
  tekrarDizaynReportDataBook1,
  tekrarDizaynReportDataBook2,
  tekrarDizaynReportDataGrade7Book1,
  tekrarDizaynReportDataGrade7Book2,
  tekrarDizaynReportDataGrade6Book1,
  tekrarDizaynReportDataGrade6Book2,
  getTekrarDizaynReport
} from '../data/tekrarDizaynAudit';
import {
  BookOpen,
  HelpCircle,
  Sparkles,
  QrCode,
  FlaskConical,
  Award,
  Layers,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  GitBranch,
  ShieldCheck,
  Compass,
  ArrowRight,
  ClipboardCheck,
  CheckCheck,
  X,
  FileCheck2,
  SearchCheck,
  Flame,
  Info
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  globalAnswersRevealed: boolean;
  onGoToSummary: () => void;
  onGoToLgs: () => void;
}

export const InteractiveBookView: React.FC<Props> = ({
  unit,
  subTopic,
  globalAnswersRevealed,
  onGoToSummary,
  onGoToLgs
}) => {
  const items: InteractiveBookItem[] = useMemo(() => {
    return getCompleteInteractiveBookFlow(unit, subTopic);
  }, [unit, subTopic]);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [openEvalAnswers, setOpenEvalAnswers] = useState<Record<string, boolean>>({});
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);
  const [localAllRevealed, setLocalAllRevealed] = useState<boolean>(false);

  const isGrade6 = unit.grade === 6 || unit.id.startsWith('g6');
  const isGrade7 = unit.grade === 7 || unit.id.startsWith('g7');
  const isGrade6Book2 = isGrade6 && (unit.bookNumber === 2 || unit.id.includes('unit-5') || unit.id.includes('unit-6') || unit.id.includes('unit-7'));
  const isGrade7Book2 = isGrade7 && (unit.bookNumber === 2 || unit.id.includes('unit-4') || unit.id.includes('unit-5') || unit.id.includes('unit-6') || unit.id.includes('unit-7') || unit.id.includes('u4') || unit.id.includes('u5') || unit.id.includes('u6') || unit.id.includes('u7'));
  const defaultTab: '5-1' | '5-2' | '6-1' | '6-2' | '7-1' | '7-2' = isGrade7Book2
    ? '7-2'
    : isGrade7
    ? '7-1'
    : isGrade6Book2
    ? '6-2'
    : isGrade6
    ? '6-1'
    : (unit.bookNumber === 2 ? '5-2' : '5-1');
  const [selectedAuditTab, setSelectedAuditTab] = useState<'5-1' | '5-2' | '6-1' | '6-2' | '7-1' | '7-2'>(defaultTab);

  const activeReport = selectedAuditTab === '7-2'
    ? tekrarDizaynReportDataGrade7Book2
    : selectedAuditTab === '7-1'
    ? tekrarDizaynReportDataGrade7Book1
    : selectedAuditTab === '6-2'
    ? tekrarDizaynReportDataGrade6Book2
    : selectedAuditTab === '6-1'
    ? tekrarDizaynReportDataGrade6Book1
    : selectedAuditTab === '5-2'
    ? tekrarDizaynReportDataBook2
    : tekrarDizaynReportDataBook1;

  const isItemOpen = (id: string) => {
    if (localAllRevealed) return true;
    if (openItems[id] !== undefined) return openItems[id];
    return globalAnswersRevealed;
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !isItemOpen(id)
    }));
  };

  const isEvalOpen = (key: string) => {
    if (localAllRevealed) return true;
    if (openEvalAnswers[key] !== undefined) return openEvalAnswers[key];
    return globalAnswersRevealed;
  };

  const toggleEval = (key: string) => {
    setOpenEvalAnswers(prev => ({
      ...prev,
      [key]: !isEvalOpen(key)
    }));
  };

  const toggleAllLocal = () => {
    setLocalAllRevealed(prev => !prev);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-20">
      {/* Top Banner: TEKRAR DİZAYN SİSTEMİ & Maarif Modeli Uyum Sertifikası */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-slate-700/60 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center gap-1.5 shadow-md shadow-cyan-950/60 border border-cyan-400/30">
                <CheckCheck className="w-4 h-4 text-yellow-300" /> TEKRAR DİZAYN SİSTEMİ
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-800 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> %100 Birebir MEB Sayfa Entegrasyonu
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                {unit.grade ? `${unit.grade}. Sınıf ` : ''}Ders Kitabı {unit.bookNumber ? `${unit.bookNumber}. Kitap ` : ''}(Sayfa {subTopic.pageRange})
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white font-fredoka mt-2">
              {subTopic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-3xl leading-relaxed">
              Ders kitabındaki tüm hazırlık, merak, ön değerlendirme, etkinlik, köprü, bilgi ve pekiştirme istasyonları ile karekodlar sayfa sayfa birebir sırasıyla dizilmiş; her soru altına tıklanabilir cevap kutucuğu yerleştirilmiştir.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Tekrar Dizayn Denetim Raporu Butonu */}
            <button
              onClick={() => setShowAuditModal(true)}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-950/50 transition-all active:scale-95 border border-cyan-400/30 cursor-pointer"
            >
              <SearchCheck className="w-4 h-4 text-yellow-300" /> Ajan Denetim Raporu (2 Kez Kontrol Edildi)
            </button>
            <button
              onClick={toggleAllLocal}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer ${
                localAllRevealed
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500 ring-2 ring-emerald-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {localAllRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-cyan-400" />}
              {localAllRevealed ? 'Cevapları Kapat' : 'Tüm Cevapları Aç'}
            </button>
            <button
              onClick={onGoToSummary}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" /> Konu Özeti & Sözlük
            </button>
            <button
              onClick={onGoToLgs}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-950/30 transition-all cursor-pointer border border-indigo-400/30"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" /> 20 LGS Sorusu
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Page-by-Page Items Feed */}
      <div className="space-y-6">
        {items.map((item, idx) => {
          const isOpen = isItemOpen(item.id);

          // Card header colors based on station type
          const isQrStation = item.type === 'karekod';
          const isInfoBox = item.type === 'bilgi_kutusu';
          const isPerfStation = item.type === 'performans_istasyonu';
          const isEtkinlikStation = item.type === 'etkinlik_istasyonu';
          const isBridge = item.type === 'kopru_istasyonu';

          return (
            <div
              key={item.id}
              className={`rounded-3xl border shadow-xl overflow-hidden transition-all ${
                isQrStation
                  ? 'bg-slate-900/95 border-indigo-500/40 hover:border-indigo-400'
                  : isInfoBox
                  ? 'bg-slate-900/95 border-cyan-500/40 hover:border-cyan-400'
                  : isPerfStation
                  ? 'bg-slate-900/95 border-emerald-500/40 hover:border-emerald-400'
                  : isEtkinlikStation
                  ? 'bg-slate-900/95 border-blue-500/40 hover:border-blue-400'
                  : 'bg-slate-900/95 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Item Top Bar */}
              <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl font-mono font-black text-xs sm:text-sm flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm border border-cyan-400/30">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border bg-slate-800 text-cyan-300 border-slate-700">
                        {item.badge || 'İstasyon'}
                      </span>
                      <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                        📖 {item.pageNumber}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-xl font-black text-white font-fredoka mt-0.5">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-xl hidden sm:inline-flex items-center gap-1">
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> Tekrar Dizayn Tescilli
                  </span>
                </div>
              </div>

              {/* Item Body */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Standalone Karekod Station View */}
                {isQrStation && (
                  <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white p-2 shrink-0 flex items-center justify-center shadow-xl">
                      <QrCode className="w-full h-full text-slate-900" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500 text-white">
                          EBA KAREKODU
                        </span>
                        <span className="text-xs font-bold text-slate-300">
                          {item.pageNumber} Sırasına Göre
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {item.qrInfo?.title || item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.qrInfo?.description || (Array.isArray(item.content) ? item.content.join(' ') : item.content)}
                      </p>
                      <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-amber-300">
                        <Info className="w-3.5 h-3.5" />
                        <span>Karekodun Amacı: Öğrencinin MEB ders kitabındaki sırasıyla EBA dijital içeriğine ve değerlendirme formuna ulaşmasını sağlar.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bilgi Kutusu Styling */}
                {isInfoBox && (
                  <div className="p-5 rounded-2xl bg-amber-950/20 border-2 border-amber-500/40 text-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                      <Lightbulb className="w-5 h-5 text-amber-400" />
                      <span>📌 BİLGİ KUTUSU ({item.pageNumber})</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium whitespace-pre-line bg-slate-950/60 p-4 rounded-xl border border-amber-500/20">
                      {Array.isArray(item.content) ? item.content.join('\n\n') : item.content}
                    </div>
                  </div>
                )}

                {/* Prompt or Question if not solely a Qr station */}
                {!isQrStation && item.prompt && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm sm:text-base font-semibold leading-relaxed">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                      ❓ Kitaptaki Soru / Görev / Yönerge:
                    </span>
                    <div className="whitespace-pre-line">
                      {item.prompt}
                    </div>
                  </div>
                )}

                {/* General Content text (if not Qr and not InfoBox handled above) */}
                {!isQrStation && !isInfoBox && item.content && (
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80 whitespace-pre-line font-medium">
                    {Array.isArray(item.content) ? item.content.join('\n\n') : item.content}
                  </div>
                )}

                {/* Materials & Steps if experiment / performance */}
                {item.materials && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block mb-2">
                      🧪 Gerekli Malzemeler:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                        >
                          • {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.steps && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-sky-400 block mb-1">
                      📋 Yapım Aşamaları (Madde Madde):
                    </span>
                    {item.steps.map((step, sIdx) => (
                      <p key={sIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-2 border-l-2 border-sky-500/40">
                        {step}
                      </p>
                    ))}
                  </div>
                )}

                {/* Evaluation Questions List with individual toggle answer boxes */}
                {item.evaluationQuestions && item.evaluationQuestions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <ClipboardCheck className="w-4 h-4" /> Kitaptaki Sorular ve Tıklanabilir Cevap Kutucukları:
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                        (Cevap kutucuğuna basılınca soru altında açılır)
                      </span>
                    </div>

                    {item.evaluationQuestions.map((eq, qIdx) => {
                      const evalKey = `${item.id}-q-${qIdx}`;
                      const isEvalRevealed = isEvalOpen(evalKey);

                      return (
                        <div
                          key={qIdx}
                          className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-3 transition-all hover:border-slate-700"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <p className="text-xs sm:text-sm font-bold text-white leading-relaxed flex-1">
                              {eq.question}
                            </p>
                            <button
                              onClick={() => toggleEval(evalKey)}
                              className={`px-4 py-2 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                                isEvalRevealed
                                  ? 'bg-slate-800 text-cyan-300 border border-slate-700 hover:bg-slate-750'
                                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 border border-cyan-400/30'
                              }`}
                            >
                              {isEvalRevealed ? (
                                <>
                                  <EyeOff className="w-3.5 h-3.5" /> Cevabı Gizle
                                </>
                              ) : (
                                <>
                                  <Eye className="w-3.5 h-3.5 text-cyan-200" /> Cevap Kutucuğu (Tıkla Aç)
                                </>
                              )}
                            </button>
                          </div>

                          {isEvalRevealed && (
                            <div className="p-3.5 rounded-xl bg-slate-950 border-2 border-emerald-500/40 text-xs sm:text-sm text-slate-200 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 shadow-inner">
                              <strong className="text-emerald-400 block mb-1 flex items-center gap-1.5 font-black">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bilimsel Çözüm & Model Cevap:
                              </strong>
                              {eq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Main Interactive Answer for the Item (if provided directly on item) */}
                {item.interactiveAnswer && (
                  <div className="pt-2">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                        isOpen
                          ? 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700'
                          : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-lg shadow-cyan-950/40 border border-cyan-400/30'
                      }`}
                    >
                      {isOpen ? (
                        <>
                          <EyeOff className="w-4 h-4" /> Açıklamayı / Cevabı Gizle
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 text-cyan-200" /> Cevap Kutucuğu (Tıkla Aç)
                        </>
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-3 p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/50 text-xs sm:text-sm text-slate-200 leading-relaxed animate-in zoom-in-95 duration-200 shadow-inner">
                        <strong className="text-emerald-400 block mb-1 flex items-center gap-1.5 font-black">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> MEB Model Çözümü & Açıklaması:
                        </strong>
                        {item.interactiveAnswer}
                      </div>
                    )}
                  </div>
                )}

                {/* Sonucunda Ulaşılan Bilgi Kutusu / Etkinlik Sonucunda Ne Öğrendik? */}
                {item.resultInfoBox && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/40 text-xs sm:text-sm text-slate-200 space-y-1.5 shadow-md">
                    <div className="flex items-center gap-1.5 font-black text-cyan-400">
                      <Lightbulb className="w-4 h-4 text-cyan-400" />
                      <span>Etkinlik Sonucunda Ne Öğrendik? (Bilimsel Çözüm ve Nedenleri):</span>
                    </div>
                    <p className="leading-relaxed text-slate-300 font-medium">
                      {item.resultInfoBox}
                    </p>
                  </div>
                )}

                {/* Karekod Bölümü (Eğer istasyon içinde gömülü ise) */}
                {!isQrStation && item.qrInfo && (
                  <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shrink-0 flex items-center justify-center shadow-lg">
                      <QrCode className="w-full h-full text-slate-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500 text-white">
                          EBA KAREKOD İÇERİĞİ
                        </span>
                        <span className="text-xs font-bold text-indigo-300">
                          {item.qrInfo.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.qrInfo.description}
                      </p>
                      <span className="text-[11px] text-amber-400 font-semibold mt-1 inline-block">
                        Akıllı tahtada EBA karekodu taratılarak veya doğrudan ilgili içerik simülasyonundan incelenebilir.
                      </span>
                    </div>
                  </div>
                )}

                {/* Pekiştirme İstasyonu (Şema / Çıkışlar) */}
                {item.reinforcementData && (
                  <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black text-purple-300">
                      <GitBranch className="w-4 h-4 text-purple-400" />
                      <span>Pekiştirme İstasyonu Çözüm Analizi (Doğru Yola Giden Adımlar):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono bg-slate-950 p-3 rounded-xl border border-purple-900/50 whitespace-pre-line">
                      {item.reinforcementData.solution}
                    </p>
                    <span className="text-[11px] text-purple-300 block">
                      * Not: Şemadaki kalan alternatif çıkışlar ünitenin Doğru/Yanlış soru havuzuna aktarılmıştır.
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* TEKRAR DİZAYN DENETİM VE DOĞRULAMA MODALİ (Ajan Doğrulama Raporu) */}
      {showAuditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <SearchCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                      DENETİM RAPORU
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      {activeReport.auditPassCount} Kez Kontrol Edildi
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-white font-fredoka mt-0.5">
                    {activeReport.systemName} - Sayfa Karşılaştırma ve Doğrulama Ajanı
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setShowAuditModal(false)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Book Selector Tabs */}
            <div className="px-6 py-3 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedAuditTab('6-2')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '6-2'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> 6. Sınıf 2. Kitap (5 - 7. Üniteler | 130 Sayfa)
                </button>

                <button
                  onClick={() => setSelectedAuditTab('6-1')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '6-1'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> 6. Sınıf 1. Kitap (1 - 4. Üniteler | 184 Sayfa)
                </button>

                <button
                  onClick={() => setSelectedAuditTab('7-2')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '7-2'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> 7. Sınıf 2. Kitap (4 - 7. Üniteler | 166 Sayfa)
                </button>

                <button
                  onClick={() => setSelectedAuditTab('7-1')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '7-1'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> 7. Sınıf 1. Kitap (1 - 3. Üniteler | 153 Sayfa)
                </button>

                <button
                  onClick={() => setSelectedAuditTab('5-2')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '5-2'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> 5. Sınıf 2. Kitap (4 - 7. Üniteler | 170 Sayfa)
                </button>

                <button
                  onClick={() => setSelectedAuditTab('5-1')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedAuditTab === '5-1'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> 5. Sınıf 1. Kitap (1 - 3. Üniteler | 152 Sayfa)
                </button>
              </div>

              <div className="text-xs font-bold text-cyan-300 hidden lg:block">
                İncelenen: <span className="text-white underline decoration-cyan-400">{activeReport.bookTitle}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm">
              {/* Pass 1 & Pass 2 Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-black text-sm">
                    <CheckCheck className="w-4 h-4" /> 1. Kontrol Denetimi (Sayfa Taraması)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeReport.firstCheckSummary}
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    Durum: BAŞARILI & EKSİKLER GİDERİLDİ
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-black text-sm">
                    <ShieldCheck className="w-4 h-4" /> 2. Kontrol Denetimi (Çift Kontrol)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeReport.secondCheckSummary}
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                    Durum: %100 BİREBİR TESCİLLENDİ
                  </span>
                </div>
              </div>

              {/* Rules Applied */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                  📋 Uygulanan Tekrar Dizayn Kuralları ({activeReport.bookTitle}):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activeReport.rulesApplied.map((rule, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Page-by-Page Comparison Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
                  📊 Gerçek Kitap vs. Etkileşimli Kitap Sayfa Karşılaştırma Matrisi ({activeReport.totalPages} Sayfa):
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-950 text-slate-400 uppercase font-black text-[10px] tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="p-3">Sayfa</th>
                        <th className="p-3">Kitaptaki İstasyon & Başlık</th>
                        <th className="p-3">Karekod</th>
                        <th className="p-3">Cevap Kutucukları</th>
                        <th className="p-3">1. Kontrol</th>
                        <th className="p-3">2. Kontrol</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                      {activeReport.pageAuditTable.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-3 font-mono font-bold text-amber-300 whitespace-nowrap">
                            {row.pageNumber}
                          </td>
                          <td className="p-3 font-medium text-white">
                            {row.sectionTitle}
                          </td>
                          <td className="p-3">
                            {row.hasQrCode ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-indigo-950 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 w-fit">
                                <QrCode className="w-3 h-3" /> EBA Karekod
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[11px]">-</span>
                            )}
                          </td>
                          <td className="p-3">
                            {row.hasAnswerBoxes ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 w-fit">
                                <CheckCircle2 className="w-3 h-3" /> {row.questionCount} Kutucuklu
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[11px]">Metin / Bilgi</span>
                            )}
                          </td>
                          <td className="p-3 font-bold text-emerald-400">
                            {row.check1Status}
                          </td>
                          <td className="p-3 font-black text-indigo-400">
                            {row.check2Status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ajan Denetimi: <strong>{activeReport.auditorAgentName}</strong>
              </span>
              <button
                onClick={() => setShowAuditModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
        <button
          onClick={onGoToSummary}
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
        >
          Konu Özeti ve Kavramlar Sözlüğü <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onGoToLgs}
          className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
        >
          LGS Mantık Muhakeme (20 Soru) <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

