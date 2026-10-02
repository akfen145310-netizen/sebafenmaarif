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
  AlertCircle,
  Printer
} from 'lucide-react';

interface Props {
  unit: SubTopic extends { unitNumber?: number } ? any : any;
  subTopic: SubTopic;
  onBackToSummary: () => void;
  onGoToLgs: () => void;
  onOpenQuizPdf?: () => void;
}

export const TrueFalseQuiz: React.FC<Props> = ({
  unit,
  subTopic,
  onBackToSummary,
  onGoToLgs,
  onOpenQuizPdf
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
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Bu bölüm için Doğru/Yanlış soruları henüz eklenmedi.</h3>
        <button
          onClick={onBackToSummary}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
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
      
      {/* Quiz Top Navigation Bar - Temel Dinî Bilgiler Teması */}
      <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
              {subTopic.shortTitle}
            </span>
            <span className="text-xs text-slate-500 font-semibold">10 Doğru / Yanlış Sorusu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-fredoka mt-1">
            Doğru / Yanlış Etkinliği
          </h2>
        </div>

        {/* Live Scorecard for Smartboard */}
        <div className="flex items-center gap-3 flex-wrap">
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
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold border border-slate-200">
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'single' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tekli Mod
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Liste Modu
            </button>
          </div>

          {onOpenQuizPdf && (
            <button
              onClick={onOpenQuizPdf}
              className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="PDF Çıktısı Al"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Çıktı</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            title="Tümünü Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Soru Gezgini (1 - 10) */}
      <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 px-1">
          <span>Soru Gezgini (1 - 10)</span>
          <span className="text-emerald-700 font-bold">
            Aktif Soru: #{activeQuestionIdx + 1}
          </span>
        </div>

        <div className="grid grid-cols-10 gap-2">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined;
            const isCorrect = ans === q.isCorrect;
            const isActive = activeQuestionIdx === idx;

            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionIdx(idx)}
                className={`h-10 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-emerald-500 scale-105 z-10 shadow-sm bg-emerald-600 text-white'
                    : ''
                } ${
                  !isAnswered
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* TEKLİ GÖRÜNÜM MODU (Büyük Dokunmatik Ekran Kartı) */}
      {viewMode === 'single' && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-sm flex items-center justify-center">
              {currentQ.id}
            </span>

            {currentQ.sourceContext && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {currentQ.sourceContext}
              </span>
            )}
          </div>

          {/* Soru Metni */}
          <div className="py-2">
            <p className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed">
              {currentQ.statement || currentQ.text}
            </p>
          </div>

          {/* DOĞRU / YANLIŞ BUTONLARI (Akıllı Tahta İri Butonlar) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* DOĞRU Butonu */}
            <button
              onClick={() => handleAnswer(currentQ.id, true)}
              className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 text-lg font-black transition-all active:scale-95 cursor-pointer shadow-xs ${
                userAnswers[currentQ.id] === true
                  ? currentQ.isCorrect
                    ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-400'
                    : 'bg-rose-600 border-rose-700 text-white ring-2 ring-rose-400'
                  : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
              }`}
            >
              <Check className="w-6 h-6 stroke-[3]" />
              <span>DOĞRU</span>
            </button>

            {/* YANLIŞ Butonu */}
            <button
              onClick={() => handleAnswer(currentQ.id, false)}
              className={`p-5 rounded-2xl border-2 flex items-center justify-center gap-3 text-lg font-black transition-all active:scale-95 cursor-pointer shadow-xs ${
                userAnswers[currentQ.id] === false
                  ? !currentQ.isCorrect
                    ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-400'
                    : 'bg-rose-600 border-rose-700 text-white ring-2 ring-rose-400'
                  : 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800'
              }`}
            >
              <X className="w-6 h-6 stroke-[3]" />
              <span>YANLIŞ</span>
            </button>
          </div>

          {/* Çözüm ve Açıklama Kutusu */}
          {userAnswers[currentQ.id] !== undefined && (
            <div className={`p-5 rounded-2xl border-2 animate-in fade-in duration-200 ${
              userAnswers[currentQ.id] === currentQ.isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm mb-1.5">
                {userAnswers[currentQ.id] === currentQ.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>TEBRİKLER! DOĞRU CEVAP</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>DİKKAT! YANITINIZ HATALI</span>
                  </>
                )}
                <span className="text-xs font-mono ml-auto">
                  İfadenin Doğrusu: <strong>{currentQ.isCorrect ? 'DOĞRU' : 'YANLIŞ'}</strong>
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Önceki / Sonraki Butonları */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={activeQuestionIdx === 0}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Önceki Soru
            </button>

            <span className="text-xs font-mono font-bold text-slate-500">
              {activeQuestionIdx + 1} / {questions.length}
            </span>

            <button
              onClick={() => setActiveQuestionIdx(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={activeQuestionIdx === questions.length - 1}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
            >
              Sonraki Soru <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* LİSTE MODU */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isAnswered = ans !== undefined;
            const isCorrect = ans === q.isCorrect;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                      {q.statement || q.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        ans === true
                          ? q.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}
                    >
                      D
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        ans === false
                          ? !q.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      Y
                    </button>
                  </div>
                </div>

                {isAnswered && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-emerald-800 mr-1">
                      {q.isCorrect ? 'Doğru:' : 'Yanlış:'}
                    </strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Alt Yönlendirme */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          onClick={onBackToSummary}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          Konu Özetine Dön
        </button>

        <button
          onClick={onGoToLgs}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          LGS Mantık Muhakeme (20 Soru) ➔
        </button>
      </div>
    </div>
  );
};
