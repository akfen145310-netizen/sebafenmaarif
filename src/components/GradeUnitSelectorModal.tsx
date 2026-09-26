import React, { useState } from 'react';
import { Unit } from '../types/curriculum';
import { availableGrades } from '../data/unitsIndex';
import { X, Layers, Sparkles, Check, ChevronRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  currentUnit: Unit;
  currentGrade: number;
  allUnits: Unit[];
  onSelectUnit: (unit: Unit) => void;
  onSelectGrade: (grade: number) => void;
  onClose: () => void;
}

export const GradeUnitSelectorModal: React.FC<Props> = ({
  isOpen,
  currentUnit,
  currentGrade,
  allUnits,
  onSelectUnit,
  onSelectGrade,
  onClose
}) => {
  const [activeGradeTab, setActiveGradeTab] = useState<number>(currentGrade);

  if (!isOpen) return null;

  const currentGradeObj = availableGrades.find(g => g.grade === activeGradeTab) || availableGrades[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1a110c] border-2 border-amber-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/60 bg-[#140c08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-600 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-orange-950/50 border border-amber-400/40">
              {activeGradeTab}
            </div>
            <div>
              <h2 className="text-lg font-black text-white font-fredoka flex items-center gap-2">
                Sınıf ve Ünite Seçimi
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#2c170d] text-amber-300 border border-amber-600/50">
                  Maarif Modeli
                </span>
              </h2>
              <p className="text-xs text-stone-300">
                Ders kitabındaki üniteler ve alt bölümler arasında hızlı geçiş
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-[#28160e] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grade Tabs (5, 6, 7, 8) */}
        <div className="flex items-center gap-2 p-4 bg-[#140c08] border-b border-amber-900/60">
          {availableGrades.map(g => (
            <button
              key={g.grade}
              onClick={() => {
                setActiveGradeTab(g.grade);
                onSelectGrade(g.grade);
              }}
              className={`flex-1 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeGradeTab === g.grade
                  ? 'bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/50 scale-[1.02] ring-2 ring-amber-300'
                  : 'bg-[#251710] hover:bg-[#321e14] text-stone-300 border border-amber-900/40'
              }`}
            >
              <span>{g.label}</span>
              {(g.grade === 5 || g.grade === 6 || g.grade === 7) && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#180e09] text-amber-300 border border-amber-700/40">
                  1. ve 2. Kitap
                </span>
              )}
              {g.grade === 8 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#180e09] text-amber-300 border border-amber-700/40">
                  LGS
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content / Units List */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3 bg-[#170e0a]">
          <div className="flex items-center justify-between text-xs font-bold text-stone-400 mb-2">
            <span>{currentGradeObj.label} Fen Bilimleri Üniteleri</span>
            <span className="text-amber-400">{currentGradeObj.description}</span>
          </div>

          {/* Units for Active Grade */}
          {(() => {
            const gradeUnits = allUnits.filter(u => (u.grade || 5) === activeGradeTab);

            if (gradeUnits.length > 0) {
              return (
                <div className="space-y-3">
                  {gradeUnits.map(unit => {
                    const isSelected = currentUnit.id === unit.id;
                    return (
                      <button
                        key={unit.id}
                        onClick={() => {
                          onSelectGrade(unit.grade || activeGradeTab);
                          onSelectUnit(unit);
                          onClose();
                        }}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 group cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#2e170c] via-[#231209] to-[#1a0d07] border-amber-500 text-white shadow-lg ring-1 ring-amber-400/50'
                            : 'bg-[#1e130c] border-amber-950/80 hover:border-amber-700/70 text-stone-300 hover:text-white hover:bg-[#251710]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-base shrink-0 ${
                            isSelected
                              ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                              : 'bg-[#29170e] text-amber-300 group-hover:bg-amber-500 group-hover:text-stone-950'
                          }`}>
                            {unit.unitNumber}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              {unit.bookNumber && (
                                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#2e190f] text-amber-300 border border-amber-700/50">
                                  {unit.bookNumber}. Kitap
                                </span>
                              )}
                              <span className="text-xs font-bold text-amber-400">
                                {unit.unitNumber}. Ünite
                              </span>
                              <span className="text-[11px] text-stone-400">
                                ({unit.subTopics.length} Alt Bölüm • {unit.unitEndPageRange})
                              </span>
                            </div>
                            <h4 className="text-base font-extrabold text-white font-fredoka mt-0.5">
                              {unit.title}
                            </h4>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {isSelected ? (
                            <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-black text-xs flex items-center gap-1 shadow-sm">
                              <Check className="w-3.5 h-3.5 stroke-[3]" /> Aktif
                            </span>
                          ) : (
                            <div className="p-2 rounded-xl bg-[#29170e] text-amber-300 group-hover:text-stone-950 group-hover:bg-amber-500 transition-all">
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              );
            }

            return (
              <div className="p-8 text-center bg-[#140c08] rounded-2xl border border-amber-900/40 space-y-3">
                <Layers className="w-10 h-10 text-amber-400 mx-auto opacity-70 animate-bounce" />
                <h4 className="text-base font-bold text-white">
                  {currentGradeObj.label} Müfredat Modülü Hazırlanıyor
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                  Şu anda <strong>5., 6. ve 7. Sınıf Fen Bilimleri (1. ve 2. Ders Kitapları)</strong> tam metin, tüm istasyon etkinlikleri, doğru/yanlış ve 20'şer LGS sorusuyla eksiksiz aktiftir.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setActiveGradeTab(5);
                      onSelectGrade(5);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black hover:from-red-500 hover:to-amber-500 transition-colors inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" /> 5. Sınıfa Geç
                  </button>
                  <button
                    onClick={() => {
                      setActiveGradeTab(6);
                      onSelectGrade(6);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black hover:from-red-500 hover:to-amber-500 transition-colors inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" /> 6. Sınıfa Geç
                  </button>
                  <button
                    onClick={() => {
                      setActiveGradeTab(7);
                      onSelectGrade(7);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black hover:from-red-500 hover:to-amber-500 transition-colors inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" /> 7. Sınıfa Geç
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
