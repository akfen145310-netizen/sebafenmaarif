import React, { useState } from 'react';
import { SubTopic } from '../types/curriculum';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  AlertCircle
} from 'lucide-react';

interface Props {
  subTopic: SubTopic;
  onBackToSummary: () => void;
  onGoToLgs: () => void;
}

export const TrueFalseQuiz: React.FC<Props> = ({
  subTopic,
  onBackToSummary,
  onGoToLgs
}) => {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');

  const questions = subTopic.trueFalseQuestions || [];
  const currentQ = questions[activeQuestionIdx] || questions[0];

  const handleAnswer = (qId: number, answer: boolean) => {
    setUserAnswers(prev => ({
      ...prev,
      [qId]: answer
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setActiveQuestionIdx(0);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-12 text-center bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">Bu bölüm için Doğru/Yanlış soruları henüz eklenmedi.</h3>
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
    q => userAnswers[q.id] !== undefined && userAnswers[q.id] === q.isCorrect
  ).length;
  const wrongCount = answeredCount - correctCount;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Quiz Top Navigation Bar */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-slate-800 text-cyan-300 border border-slate-700">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-400">10 Doğru / Yanlış Sorusu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-fredoka mt-1">
            Doğru / Yanlış Etkinliği
          </h2>
        </div>

        {/* Live Scorecard for Smartboard */}
        <div className="flex items-center gap-3">
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
          </div>

          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs font-semibold border border-slate-700">
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'single' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tekli Mod
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Liste Modu
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

      {/* SINGLE QUESTION MODE */}
      {viewMode === 'single' && (
        <div className="space-y-6">
          {/* Question Stepper */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-2 bg-slate-900/60 rounded-2xl border border-slate-800 justify-center">
            {questions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isAnswered = ans !== undefined;
              const isCorrect = ans === q.isCorrect;

              return (
                <button
                  key={q.id}
                  onClick={() => setActiveQuestionIdx(idx)}
                  className={`w-9 h-9 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeQuestionIdx === idx
                      ? 'ring-2 ring-cyan-400 scale-110 z-10'
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

          {/* Main Question Card */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-xl relative">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 pb-3 border-b border-slate-800">
              <span className="text-cyan-400 uppercase tracking-wider font-black">
                Soru {activeQuestionIdx + 1} / 10
              </span>
              <span>
                {userAnswers[currentQ.id] !== undefined ? 'Cevaplandı' : 'Cevap Bekleniyor'}
              </span>
            </div>

            {/* Question Statement */}
            <div className="min-h-[110px] flex items-center">
              <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                "{currentQ.statement || currentQ.text}"
              </p>
            </div>

            {/* Touch Friendly Big D / Y Buttons */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              <button
                onClick={() => handleAnswer(currentQ.id, true)}
                className={`py-5 sm:py-7 px-6 rounded-2xl sm:rounded-3xl border-2 font-black text-xl sm:text-2xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95 cursor-pointer ${
                  userAnswers[currentQ.id] === true
                    ? currentQ.isCorrect
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950 ring-4 ring-emerald-500/30'
                      : 'bg-rose-600 border-rose-400 text-white ring-4 ring-rose-500/30'
                    : 'bg-slate-950/60 hover:bg-slate-800 border-slate-800 text-emerald-400 hover:border-emerald-500/60'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <span>DOĞRU (D)</span>
              </button>

              <button
                onClick={() => handleAnswer(currentQ.id, false)}
                className={`py-5 sm:py-7 px-6 rounded-2xl sm:rounded-3xl border-2 font-black text-xl sm:text-2xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95 cursor-pointer ${
                  userAnswers[currentQ.id] === false
                    ? !currentQ.isCorrect
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950 ring-4 ring-emerald-500/30'
                      : 'bg-rose-600 border-rose-400 text-white ring-4 ring-rose-500/30'
                    : 'bg-slate-950/60 hover:bg-slate-800 border-slate-800 text-rose-400 hover:border-rose-500/60'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400 flex items-center justify-center text-rose-300">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <span>YANLIŞ (Y)</span>
              </button>
            </div>

            {/* Real-time Feedback & Detailed Explanation Box */}
            {userAnswers[currentQ.id] !== undefined && (
              <div
                className={`mt-8 p-5 sm:p-6 rounded-2xl border-2 animate-in zoom-in-95 duration-200 ${
                  userAnswers[currentQ.id] === currentQ.isCorrect
                    ? 'bg-emerald-950/30 border-emerald-500/60 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-500/60 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-black text-base sm:text-lg mb-2">
                  {userAnswers[currentQ.id] === currentQ.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      <span className="text-emerald-300">Tebrikler, Doğru Cevap! 🎯</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-6 h-6 text-rose-400" />
                      <span className="text-rose-300">
                        Hatalı İşaretlediniz! Doğru Cevap:{' '}
                        {currentQ.isCorrect ? 'DOĞRU (D)' : 'YANLIŞ (Y)'}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-sm sm:text-base leading-relaxed text-slate-200 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">
                    📖 Maarif Konu Çözümü & Açıklaması:
                  </span>
                  {currentQ.explanation}
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
                disabled={activeQuestionIdx === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-700 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki Soru
              </button>

              <span className="text-xs text-slate-400 font-mono font-bold">
                {activeQuestionIdx + 1} / {questions.length}
              </span>

              {activeQuestionIdx < questions.length - 1 ? (
                <button
                  onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md border border-cyan-400/30 cursor-pointer"
                >
                  Sonraki Soru <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onGoToLgs}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-950/40 transition-colors border border-indigo-400/30 cursor-pointer"
                >
                  LGS Sorularına Geç (20 Soru) <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LIST VIEW MODE */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined;
            const isCorrect = ans === q.isCorrect;

            return (
              <div
                key={q.id}
                className={`rounded-2xl border p-5 transition-all ${
                  !isAnswered
                    ? 'bg-slate-900/80 border-slate-800'
                    : isCorrect
                    ? 'bg-slate-900/90 border-emerald-500/50'
                    : 'bg-slate-900/90 border-rose-500/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-base font-semibold text-white leading-relaxed">
                      {q.statement || q.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        ans === true
                          ? q.isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-rose-500 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700'
                      }`}
                    >
                      DOĞRU (D)
                    </button>

                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        ans === false
                          ? !q.isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-rose-500 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700'
                      }`}
                    >
                      YANLIŞ (Y)
                    </button>
                  </div>
                </div>

                {isAnswered && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="font-bold text-cyan-400 shrink-0">Açıklama:</span>
                    <span>{q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Footer Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBackToSummary}
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Konu Özetine Dön
        </button>

        <button
          onClick={onGoToLgs}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
        >
          20 LGS Mantık Muhakeme Sorusuna Geç <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
