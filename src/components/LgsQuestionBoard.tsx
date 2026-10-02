import React, { useState } from 'react';
import { SubTopic, Unit } from '../types/curriculum';
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
  Table as TableIcon,
  FlaskConical,
  Lightbulb,
  Printer,
  Compass
} from 'lucide-react';

interface Props {
  unit?: Unit;
  subTopic: SubTopic;
  onBackToTF: () => void;
  onBackToSummary: () => void;
  onOpenQuizPdf?: () => void;
}

export const LgsQuestionBoard: React.FC<Props> = ({
  unit,
  subTopic,
  onBackToTF,
  onBackToSummary,
  onOpenQuizPdf
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
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Bu bölüm için LGS mantık muhakeme soruları henüz eklenmedi.</h3>
        <button
          onClick={onBackToSummary}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold"
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

  const contextText = currentQ.context || currentQ.scenario;
  const solutionText = currentQ.detailedExplanation || currentQ.explanation;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Top Smartboard Control Bar - Temel Dinî Bilgiler Teması */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-500 font-semibold">20 LGS Mantık Muhakeme Sorusu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-fredoka mt-1">
            Bağlam Temelli Soru Tahtası
          </h2>
        </div>

        {/* Live Scorecard and Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200 text-xs font-bold">
            <div className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount} Doğru</span>
            </div>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <div className="flex items-center gap-1 text-rose-600">
              <XCircle className="w-4 h-4" />
              <span>{wrongCount} Yanlış</span>
            </div>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <span className="text-slate-500 font-mono">
              {questions.length - answeredCount} Boş
            </span>
          </div>

          {/* Quick Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold border border-slate-200">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümü ({questions.length})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'wrong' ? 'bg-rose-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yanlışlar ({wrongCount})
            </button>
            <button
              onClick={() => setFilterMode('unanswered')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'unanswered' ? 'bg-amber-500 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Boşlar ({questions.length - answeredCount})
            </button>
          </div>

          {onOpenQuizPdf && (
            <button
              onClick={onOpenQuizPdf}
              className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="PDF Olarak Çıktı Al"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Çıktı</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
            title="Tümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 20 Questions Navigator Grid for Smartboard */}
      <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 px-1">
          <span>Soru Gezgini (1 - {questions.length})</span>
          <span className="text-emerald-700 font-bold">
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
                className={`h-9 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-emerald-500 scale-105 z-10 shadow-xs bg-emerald-600 text-white'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN QUESTION DISPLAY CARD */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        
        {/* Question Header & Skill Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-sm flex items-center justify-center">
              {activeQuestionIdx + 1}
            </span>
            <span className="text-sm font-bold text-slate-900">
              LGS Mantık Muhakeme Sorusu
            </span>
            {currentQ.cognitiveLevel && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {currentQ.cognitiveLevel}
              </span>
            )}
          </div>

          {(currentQ.skillTag || currentQ.theme) && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              {currentQ.skillTag || currentQ.theme}
            </span>
          )}
        </div>

        {/* 1. Context / Scenario (Bağlam & Deney Durumu) */}
        {contextText && (
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
            {contextText}
          </div>
        )}

        {/* 2. Visual Data: Table, Diagram, Steps or Comparison (Eksiksiz Gösterim) */}
        {currentQ.visualData && (
          <div className="my-3 space-y-2">
            {/* Table Type */}
            {currentQ.visualData.type === 'table' && (
              <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-xs">
                {currentQ.visualData.title && (
                  <div className="p-2.5 bg-slate-100 border-b border-slate-300 flex items-center gap-2 text-xs font-bold text-slate-800">
                    <TableIcon className="w-4 h-4 text-emerald-600" />
                    {currentQ.visualData.title}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-800">
                      <tr>
                        {currentQ.visualData.tableHeaders?.map((th, thIdx) => (
                          <th key={thIdx} className="p-3 font-bold border-r border-slate-200 last:border-r-0">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                      {currentQ.visualData.tableRows?.map((tr, trIdx) => (
                        <tr key={trIdx} className="hover:bg-slate-50">
                          {tr.map((td, tdIdx) => (
                            <td key={tdIdx} className="p-3 border-r border-slate-100 last:border-r-0">
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

            {/* Diagram or Apparatus Notes */}
            {(currentQ.visualData.type === 'diagram' || currentQ.visualData.diagramNotes) && (
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-800">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  <span>{currentQ.visualData.title || 'Deney Düzeneği ve Görsel Şema Açıklaması'}:</span>
                </div>
                {currentQ.visualData.diagramNotes && (
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                    {currentQ.visualData.diagramNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}

        {/* 3. Main Question Prompt (Soru Kökü) */}
        <div className="pt-2">
          <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed">
            {currentQ.questionPrompt}
          </p>
        </div>

        {/* 4. Large Interactive Options (A, B, C, D) for Smartboard Touch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
          {currentQ.options.map(opt => {
            const isSelected = currentAnswer === opt.key;
            const isCorrectOption = opt.key === currentQ.correctAnswer;

            let buttonStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700';

            if (isCurrentAnswered) {
              if (isSelected && isCurrentCorrect) {
                // Doğru seçilmiş
                buttonStyle = 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950';
                badgeStyle = 'bg-emerald-600 text-white font-black';
              } else if (isSelected && !isCurrentCorrect) {
                // Yanlış seçilmiş
                buttonStyle = 'bg-rose-50 border-2 border-rose-600 text-rose-950';
                badgeStyle = 'bg-rose-600 text-white font-black';
              } else if (!isSelected && isCorrectOption) {
                // Doğru şıkkı göster
                buttonStyle = 'bg-emerald-50/50 border-2 border-emerald-400 border-dashed text-emerald-900';
                badgeStyle = 'bg-emerald-100 text-emerald-800 font-bold';
              } else {
                // Diğerleri
                buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-500';
              }
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-start gap-3.5 active:scale-98 shadow-xs cursor-pointer ${buttonStyle}`}
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
        {isCurrentAnswered && showExplanation[currentQ.id] && solutionText && (
          <div
            className={`p-5 sm:p-6 rounded-2xl border-2 animate-in zoom-in-95 duration-200 ${
              isCurrentCorrect
                ? 'bg-emerald-50 border-emerald-300'
                : 'bg-amber-50 border-amber-300'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {isCurrentCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-900">Harika! Doğru Seçenek: {currentQ.correctAnswer}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="text-rose-900">
                      Yanlış Seçenek! Doğru Cevap: <span className="underline font-mono">{currentQ.correctAnswer}</span>
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={() => toggleExplanation(currentQ.id)}
                className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer font-bold"
              >
                <EyeOff className="w-3.5 h-3.5" /> Gizle
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-800">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                LGS Maarif Çözüm & Mantık Muhakeme Analizi:
              </div>
              <p className="whitespace-pre-line">{solutionText}</p>
            </div>
          </div>
        )}

        {/* Toggle Explanation Button if closed */}
        {isCurrentAnswered && !showExplanation[currentQ.id] && (
          <div className="flex justify-end">
            <button
              onClick={() => toggleExplanation(currentQ.id)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
            >
              <Eye className="w-4 h-4" /> Çözüm Açıklamasını Göster
            </button>
          </div>
        )}

        {/* Stepper Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
            disabled={activeQuestionIdx === 0}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Önceki Soru
          </button>

          <span className="text-xs text-slate-500 font-mono font-bold">
            {activeQuestionIdx + 1} / {questions.length} Soru
          </span>

          <button
            onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={activeQuestionIdx === questions.length - 1}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
          >
            Sonraki Soru <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Global Bottom Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBackToTF}
          className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-200 shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Doğru/Yanlış Sorularına Dön
        </button>

        <button
          onClick={onBackToSummary}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          Konu Özetine Dön
        </button>
      </div>
    </div>
  );
};
