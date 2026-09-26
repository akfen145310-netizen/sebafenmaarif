import React, { useState } from 'react';
import { SubTopic } from '../types/curriculum';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Eye,
  EyeOff,
  Table as TableIcon
} from 'lucide-react';

interface Props {
  subTopic: SubTopic;
  onBackToTF: () => void;
  onBackToSummary: () => void;
}

export const LgsQuestionBoard: React.FC<Props> = ({
  subTopic,
  onBackToTF,
  onBackToSummary
}) => {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'unanswered'>('all');

  const questions = subTopic.lgsQuestions || [];
  const currentQ = questions[activeQuestionIdx] || questions[0];

  const handleSelectOption = (key: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: key
    }));
    setShowExplanation(prev => ({
      ...prev,
      [currentQ.id]: true
    }));
  };

  const toggleExplanation = (qId: number) => {
    setShowExplanation(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowExplanation({});
    setActiveQuestionIdx(0);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-12 text-center bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">Bu bölüm için LGS mantık muhakeme soruları henüz eklenmedi.</h3>
        <button
          onClick={onBackToSummary}
          className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white"
        >
          Konu Özetine Dön
        </button>
      </div>
    );
  }

  // Stats
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = questions.filter(
    q => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correctAnswer
  ).length;
  const wrongCount = answeredCount - correctCount;

  const currentAnswer = userAnswers[currentQ.id];
  const isCurrentAnswered = currentAnswer !== undefined;
  const isCurrentCorrect = currentAnswer === currentQ.correctAnswer;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Smartboard Control Bar */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-slate-800 text-cyan-300 border border-slate-700">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-400">20 LGS Mantık Muhakeme Sorusu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-fredoka mt-1">
            Bağlam Temelli Soru Tahtası
          </h2>
        </div>

        {/* Live Scorecard and Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 text-xs font-bold shadow-inner">
            <div className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount} Doğru</span>
            </div>
            <div className="w-px h-4 bg-slate-800 mx-1" />
            <div className="flex items-center gap-1 text-rose-400">
              <XCircle className="w-4 h-4" />
              <span>{wrongCount} Yanlış</span>
            </div>
            <div className="w-px h-4 bg-slate-800 mx-1" />
            <span className="text-slate-400 font-mono">
              {20 - answeredCount} Boş
            </span>
          </div>

          {/* Quick Filter */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs font-semibold border border-slate-700">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tümü (20)
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'wrong' ? 'bg-rose-600 text-white font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yanlışlar ({wrongCount})
            </button>
            <button
              onClick={() => setFilterMode('unanswered')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'unanswered' ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Boşlar ({20 - answeredCount})
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Tümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 20 Questions Navigator Grid for Smartboard */}
      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-2xl">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 px-1">
          <span>Soru Gezgini (1 - 20)</span>
          <span className="text-cyan-400 font-black">
            Aktif Soru: #{activeQuestionIdx + 1}
          </span>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-20 gap-1.5">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined && ans !== null;
            const isCorrect = ans === q.correctAnswer;
            const isActive = activeQuestionIdx === idx;

            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionIdx(idx)}
                className={`h-9 rounded-xl font-mono text-xs font-black transition-all flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-cyan-400 scale-110 z-10 shadow-lg bg-cyan-500 text-slate-950'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    : isCorrect
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-rose-600 text-white font-bold'
                }`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN QUESTION DISPLAY CARD */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
        {/* Question Header & Skill Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-black text-sm flex items-center justify-center">
              {currentQ.id}
            </span>
            <span className="text-sm font-bold text-white">
              LGS Mantık Muhakeme Sorusu
            </span>
          </div>

          {currentQ.skillTag && (
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {currentQ.skillTag}
            </span>
          )}
        </div>

        {/* 1. Context / Scenario (Bağlam & Deney Durumu) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {currentQ.context}
        </div>

        {/* 2. Visual / Table Data (if present) */}
        {currentQ.visualData && currentQ.visualData.type === 'table' && (
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-md">
            <div className="p-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-200">
              <TableIcon className="w-4 h-4 text-cyan-400" />
              {currentQ.visualData.title || 'Deney Veri Tablosu'}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900/90 border-b border-slate-800 text-cyan-300">
                  <tr>
                    {currentQ.visualData.tableHeaders?.map((th, thIdx) => (
                      <th key={thIdx} className="p-3 font-bold">
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200 font-mono">
                  {currentQ.visualData.tableRows?.map((tr, trIdx) => (
                    <tr key={trIdx} className="hover:bg-slate-850">
                      {tr.map((td, tdIdx) => (
                        <td key={tdIdx} className="p-3">
                          {td}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. Main Question Prompt (Soru Kökü) */}
        <div className="pt-2">
          <p className="text-base sm:text-xl font-extrabold text-white leading-relaxed">
            {currentQ.questionPrompt}
          </p>
        </div>

        {/* 4. Large Interactive Options (A, B, C, D) for Smartboard Touch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
          {currentQ.options.map(opt => {
            const isSelected = currentAnswer === opt.key;
            const isCorrectOption = opt.key === currentQ.correctAnswer;

            let buttonStyle = 'bg-slate-950/80 hover:bg-slate-800 border-slate-800 text-slate-200';
            let badgeStyle = 'bg-slate-800 text-cyan-400';

            if (isCurrentAnswered) {
              if (isSelected && isCurrentCorrect) {
                // Correctly chosen
                buttonStyle = 'bg-emerald-950/40 border-emerald-400 text-white ring-2 ring-emerald-500/50';
                badgeStyle = 'bg-emerald-500 text-slate-950 font-black';
              } else if (isSelected && !isCurrentCorrect) {
                // Wrongly chosen
                buttonStyle = 'bg-rose-950/40 border-rose-400 text-white ring-2 ring-rose-500/50';
                badgeStyle = 'bg-rose-600 text-white font-black';
              } else if (!isSelected && isCorrectOption) {
                // Reveal correct option in green
                buttonStyle = 'bg-emerald-950/20 border-emerald-500/60 text-emerald-200 border-dashed';
                badgeStyle = 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 font-black';
              } else {
                // Other options dimmed
                buttonStyle = 'bg-slate-950/40 border-slate-850 text-slate-500 opacity-60';
                badgeStyle = 'bg-slate-850 text-slate-600';
              }
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-start gap-3.5 active:scale-98 shadow-md cursor-pointer ${buttonStyle}`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 transition-colors ${badgeStyle}`}>
                  {opt.key}
                </span>
                <span className="text-xs sm:text-sm font-semibold leading-relaxed pt-1">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* 5. Detailed Pedagogical Maarif Solution Box */}
        {isCurrentAnswered && showExplanation[currentQ.id] && (
          <div
            className={`p-5 sm:p-6 rounded-2xl border-2 animate-in zoom-in-95 duration-200 ${
              isCurrentCorrect
                ? 'bg-emerald-950/30 border-emerald-500/60'
                : 'bg-rose-950/30 border-rose-500/60'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {isCurrentCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-300">Harika! Doğru Seçenek: {currentQ.correctAnswer}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span className="text-rose-300">
                      Yanlış Seçenek! Doğru Cevap: <span className="underline font-mono">{currentQ.correctAnswer}</span>
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={() => toggleExplanation(currentQ.id)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <EyeOff className="w-3.5 h-3.5" /> Gizle
              </button>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                LGS Maarif Çözüm & Mantık Muhakeme Analizi:
              </div>
              <p>{currentQ.detailedExplanation}</p>
            </div>
          </div>
        )}

        {/* Toggle Explanation Button if closed */}
        {isCurrentAnswered && !showExplanation[currentQ.id] && (
          <div className="flex justify-end">
            <button
              onClick={() => toggleExplanation(currentQ.id)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" /> Çözüm Açıklamasını Göster
            </button>
          </div>
        )}

        {/* Stepper Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
            disabled={activeQuestionIdx === 0}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Önceki Soru
          </button>

          <span className="text-xs text-slate-400 font-mono">
            {activeQuestionIdx + 1} / 20 Soru
          </span>

          <button
            onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={activeQuestionIdx === questions.length - 1}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow cursor-pointer"
          >
            Sonraki Soru <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Global Bottom Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBackToTF}
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Doğru/Yanlış Sorularına Dön
        </button>

        <button
          onClick={onBackToSummary}
          className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
        >
          Konu Özetine Dön
        </button>
      </div>
    </div>
  );
};
