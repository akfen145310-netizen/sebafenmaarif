import React, { useState } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  BookOpen,
  FlaskConical,
  CheckCircle2,
  Sparkles,
  Table,
  Lightbulb,
  Award,
  Layers,
  Eye,
  EyeOff
} from 'lucide-react';

interface Props {
  unit: Unit;
  subTopic: SubTopic;
  onOpenSimulation: (simId: string) => void;
  onStartTFQuiz: () => void;
  onStartLGSQuiz: () => void;
  onStartBookActivities: () => void;
}

export const TopicSummaryView: React.FC<Props> = ({
  unit,
  subTopic,
  onOpenSimulation,
  onStartTFQuiz,
  onStartLGSQuiz,
  onStartBookActivities
}) => {
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestionReveal = (id: string) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isQuestionRevealed = (id: string) => {
    return !!revealedQuestions[id];
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Hero Subtopic Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-slate-700/60 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400/30 shadow-sm">
              {unit.unitNumber}. Ünite • {subTopic.shortTitle}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
              Ders Kitabı Sayfa: {subTopic.pageRange}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-800 text-cyan-300 border border-cyan-500/30">
              Türkiye Yüzyılı Maarif Modeli
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white font-fredoka tracking-wide">
            {subTopic.title}
          </h1>

          {/* Concepts Pill Row */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {subTopic.concepts.map((concept, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-800/80 text-cyan-200 border border-slate-700"
              >
                #{concept}
              </span>
            ))}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-slate-800">
            <button
              onClick={onStartBookActivities}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-950/40 transition-transform active:scale-95 border border-cyan-400/30 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-200" />
              Kitap Etkinlikleri & Çözümleri ({subTopic.bookActivities?.length || 0})
            </button>

            {subTopic.simulationId && (
              <button
                onClick={() => onOpenSimulation(subTopic.simulationId)}
                className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <FlaskConical className="w-4 h-4 text-cyan-400" />
                İnteraktif Laboratuvarı Aç
              </button>
            )}

            <button
              onClick={onStartTFQuiz}
              className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Doğru / Yanlış (10 Soru)
            </button>

            <button
              onClick={onStartLGSQuiz}
              className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              LGS Soruları (20 Soru)
            </button>
          </div>
        </div>
      </div>

      {/* Structured Summary Sections */}
      <div className="space-y-6">
        {subTopic.summarySections.map((sec, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-colors"
          >
            {/* Section Heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                {idx + 1}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-fredoka">
                {sec.heading}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-slate-200 text-sm sm:text-base leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Key Points Bullet Cards */}
            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Önemli Maarif Kazanım Maddeleri
                </h3>
                <ul className="space-y-2">
                  {sec.keyPoints.map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comparison Table if available */}
            {sec.table && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-md">
                <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Table className="w-4 h-4 text-cyan-400" />
                  Kavram Karşılaştırma Tablosu
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900/90 border-b border-slate-800 text-cyan-300">
                      <tr>
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200 font-medium">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-850 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3.5 leading-relaxed">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Scientist History Spotlight (Çağını Aşanlar) */}
            {sec.scientistBox && (
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-indigo-500/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white font-black flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 px-2 py-0.5 rounded-md bg-indigo-950 border border-indigo-500/40">
                      Çağını Aşanlar
                    </span>
                    <span className="text-xs text-slate-400">{sec.scientistBox.role}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-fredoka mt-1">
                    {sec.scientistBox.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {sec.scientistBox.contribution}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Embedded Sınav Bilgi Notu & Öğrenilmesi Gereken Sorular Bölümü */}
      {subTopic.bookActivities && subTopic.bookActivities.length > 0 && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white font-fredoka">
                  Ders Kitabı Öğrenme İstasyonları & Sınav Bilgi Notları
                </h3>
                <p className="text-xs text-slate-400">
                  Ders kitabında araştırılması gereken temel sorular ve LGS hap notları
                </p>
              </div>
            </div>

            <button
              onClick={onStartBookActivities}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
            >
              Tümünü Gör ({subTopic.bookActivities.length}) ➔
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subTopic.bookActivities.map(act => {
              const isRev = isQuestionRevealed(act.id);
              return (
                <div
                  key={act.id}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                      <span className="text-cyan-400 font-bold">{act.typeLabel}</span>
                      <span className="text-slate-400">📖 {act.pageNumber}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-white">
                      {act.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {act.prompt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleQuestionReveal(act.id)}
                      className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isRev
                          ? 'bg-slate-800 text-slate-200 border border-slate-700'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 border border-cyan-400/30'
                      }`}
                    >
                      {isRev ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" /> Cevabı Gizle
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-cyan-200" /> Cevabı Gör
                        </>
                      )}
                    </button>

                    {isRev && (
                      <div className="mt-2.5 p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-xs text-slate-200 leading-relaxed animate-in fade-in duration-150">
                        <strong className="text-emerald-400 block mb-1">Model Çözüm:</strong>
                        {act.interactiveAnswer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Konu Sonu: Anahtar Kavramlar ve Anlamları Sözlüğü */}
      {subTopic.glossary && subTopic.glossary.length > 0 && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white font-fredoka">
                  Anahtar Kavramlar ve Anlamları Sözlüğü
                </h3>
                <p className="text-xs text-slate-400">
                  MEB Maarif Fen Bilimleri Ders Kitabı Sözlük ve Ünite Kavramları
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-cyan-300 bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl">
              {subTopic.glossary.length} Terim
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {subTopic.glossary.map((item, gIdx) => (
              <div
                key={gIdx}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h4 className="text-sm font-black text-cyan-300 font-fredoka tracking-wide">
                    {item.term}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4 font-medium">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
