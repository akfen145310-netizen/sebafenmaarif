import React, { useState, useRef, useEffect } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  Pen,
  Clock,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  Home,
  Award
} from 'lucide-react';

export type AppView = 
  | 'interactive-book'
  | 'summary'
  | 'true-false'
  | 'lgs'
  | 'simulation'
  | 'unit-end-20';

interface Props {
  units: Unit[];
  currentUnit: Unit;
  currentGrade: number;
  currentSubTopic: SubTopic;
  activeView: AppView;
  onSelectUnit: (unit: Unit) => void;
  onSelectSubTopic: (sub: SubTopic) => void;
  onChangeView: (view: AppView) => void;
  onSelectGrade?: (grade: number) => void;
  onGoToLanding?: () => void;
  isDrawingActive: boolean;
  onToggleDrawing: () => void;
  onToggleTimer: () => void;
  onOpenGradePicker: () => void;
  globalAnswersRevealed: boolean;
  onToggleGlobalAnswers: () => void;
  textSize: 'normal' | 'large' | 'huge';
  onChangeTextSize: (size: 'normal' | 'large' | 'huge') => void;
}

export const Header: React.FC<Props> = ({
  units,
  currentUnit,
  currentGrade,
  currentSubTopic,
  activeView,
  onSelectUnit,
  onSelectSubTopic,
  onChangeView,
  onSelectGrade,
  onGoToLanding,
  isDrawingActive,
  onToggleDrawing,
  onToggleTimer,
  onOpenGradePicker,
  globalAnswersRevealed,
  onToggleGlobalAnswers,
  textSize,
  onChangeTextSize
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);
  const [isSubTopicsOpen, setIsSubTopicsOpen] = useState(true);

  const gradeDropdownRef = useRef<HTMLDivElement>(null);
  const unitDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(e.target as Node)) {
        setGradeDropdownOpen(false);
      }
      if (unitDropdownRef.current && !unitDropdownRef.current.contains(e.target as Node)) {
        setUnitDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const currentSubIdx = currentUnit.subTopics.findIndex(s => s.id === currentSubTopic.id);
  const currentSubNum = `${currentUnit.unitNumber}.${currentSubIdx >= 0 ? currentSubIdx + 1 : 1}`;

  const gradesList = [
    { grade: 5, label: '5. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 6, label: '6. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 7, label: '7. Sınıf Fen Bilimleri', desc: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite)', badge: '1. ve 2. Kitap' },
    { grade: 8, label: '8. Sınıf Fen Bilimleri', desc: 'LGS Hazırlık: Mevsimler, DNA, Basınç, Madde, Enerji', badge: 'LGS Odaklı' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 shadow-xl backdrop-blur-md">
      {/* EN ÜSTTE BELİRGİN SEÇİLEN SINIF BARI & ANA GİRİŞ BUTONU */}
      <div className="bg-slate-950/80 border-b border-slate-800 px-3 sm:px-6 py-2 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-md shadow-cyan-950/60 uppercase tracking-wide border border-cyan-400/40">
              <GraduationCap className="w-4 h-4 text-cyan-200" />
              <span>SEÇİLEN SINIF:</span>
              <span className="text-cyan-200 underline decoration-cyan-400 font-extrabold">{currentGrade}. SINIF FEN BİLİMLERİ</span>
            </span>

            <span className="text-[11px] font-bold text-cyan-300/90 hidden sm:inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-0.5 rounded-lg border border-slate-700/60">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Türkiye Yüzyılı Maarif Modeli
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onGoToLanding && (
              <button
                onClick={onGoToLanding}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-950/40 transition-all cursor-pointer border border-cyan-400/30"
                title="Sınıf Seviyesi Seçim Sayfasına / Ana Girişe Dön"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Sınıf Seviyesi Seç / Ana Giriş</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LINE 1: Brand, Title, Unit selector & Teacher Smartboard Toolbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Grade Squircle Badge, Sınıf Seç Button & Unit Title */}
        <div className="flex items-center gap-3">
          {/* SINIF SEÇ BÖLÜMÜ (Dropdown: 5. Sınıf, 6. Sınıf, 7. Sınıf, 8. Sınıf Alt Alta) */}
          <div className="relative" ref={gradeDropdownRef}>
            <div className="flex items-center gap-1.5">
              {/* Grade Number Badge */}
              <button
                onClick={() => {
                  setGradeDropdownOpen(!gradeDropdownOpen);
                  setUnitDropdownOpen(false);
                }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-cyan-950/50 active:scale-95 transition-all group relative shrink-0 border border-cyan-400/40"
                title="Sınıf Seçmek İçin Tıklayın"
              >
                {currentGrade}
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
              </button>

              {/* SINIF SEÇ BUTONU */}
              <button
                onClick={() => {
                  setGradeDropdownOpen(!gradeDropdownOpen);
                  setUnitDropdownOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-cyan-950/40 active:scale-95 transition-all shrink-0 cursor-pointer border border-cyan-400/30"
                title="Sınıf Seçmek İçin Tıklayın (5, 6, 7, 8. Sınıf)"
              >
                <GraduationCap className="w-4 h-4 text-cyan-200" />
                <span>Sınıf Seç</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform ${gradeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* SINIF SEÇME KISMI: Tıklanınca 5. sınıf 6. sınıf 7. sınıf 8. sınıf alt alta açılır */}
            {gradeDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[11px] font-black text-slate-300 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="uppercase tracking-wider flex items-center gap-1.5 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                    FEN BİLİMLERİ SINIF SEÇİMİ
                  </span>
                  <span className="text-[10px] text-cyan-400 font-bold">Seç & Aç</span>
                </div>

                <div className="flex flex-col gap-1.5 pt-2">
                  {gradesList.map(item => {
                    const isCurrent = currentGrade === item.grade;
                    return (
                      <button
                        key={item.grade}
                        onClick={() => {
                          if (onSelectGrade) {
                            onSelectGrade(item.grade);
                          }
                          setGradeDropdownOpen(false);
                        }}
                        className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between group cursor-pointer ${
                          isCurrent
                            ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-black shadow-md shadow-cyan-950/50 ring-2 ring-cyan-300'
                            : 'bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-base font-mono shrink-0 shadow-sm ${
                            isCurrent
                              ? 'bg-slate-950 text-cyan-400'
                              : 'bg-slate-700 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950'
                          }`}>
                            {item.grade}
                          </span>
                          <div>
                            <div className="font-extrabold text-sm flex items-center gap-2">
                              <span>{item.label}</span>
                              {isCurrent && (
                                <span className="text-[10px] bg-slate-950 text-cyan-300 px-1.5 py-0.5 rounded-md font-bold">
                                  ✓ Aktif Sınıf
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] font-normal leading-tight mt-0.5 ${
                              isCurrent ? 'text-cyan-100 font-medium' : 'text-slate-400'
                            }`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                          isCurrent ? 'bg-slate-950/40 text-cyan-200' : 'bg-slate-700 text-cyan-300'
                        }`}>
                          {item.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Unit Title with Dropdown Selector */}
          <div className="relative" ref={unitDropdownRef}>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => {
                  setUnitDropdownOpen(!unitDropdownOpen);
                  setGradeDropdownOpen(false);
                }}
                className="font-extrabold text-white text-base sm:text-lg md:text-xl tracking-tight flex items-center gap-1.5 hover:text-cyan-300 transition-colors group cursor-pointer"
                title="Ünite Değiştirmek İçin Tıklayın"
              >
                <span>
                  {currentGrade}. Sınıf Fen Bilimleri {currentUnit.unitNumber}. Ünite: {currentUnit.title}
                </span>
                <ChevronDown className={`w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-transform ${unitDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm font-mono flex items-center gap-1 border border-cyan-400/40">
                ✓ %100 MAARİF MODELİ UYUMLU
              </span>
            </div>

            <p className="text-[11px] text-slate-400 font-medium">
              Etkileşimli Akıllı Tahta & LGS Mantık Muhakeme Programı ({currentGrade}. Sınıf {currentUnit.bookNumber ? `${currentUnit.bookNumber}. Ders Kitabı` : 'Ders Kitabı'})
            </p>

            {/* Quick Unit Dropdown */}
            {unitDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in duration-150 max-h-[70vh] overflow-y-auto">
                <div className="text-[11px] font-bold text-slate-300 px-3 py-1.5 border-b border-slate-800 flex justify-between items-center">
                  <span>{currentGrade}. Sınıf Fen Bilimleri Üniteleri:</span>
                  <span className="text-[10px] text-cyan-400 font-mono">1. ve 2. Kitap</span>
                </div>
                {units.filter(u => (u.grade || 5) === currentGrade).map(u => (
                  <button
                    key={u.id}
                    onClick={() => {
                      onSelectUnit(u);
                      onSelectSubTopic(u.subTopics[0]);
                      setUnitDropdownOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                      currentUnit.id === u.id
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black shadow-md'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {u.bookNumber && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                          currentUnit.id === u.id ? 'bg-slate-950 text-cyan-300' : 'bg-slate-800 text-cyan-400'
                        }`}>
                          {u.bookNumber}. Kitap
                        </span>
                      )}
                      <span>
                        {u.unitNumber}. Ünite: {u.title}
                      </span>
                    </div>
                    <span className="text-[10px] opacity-75 font-mono shrink-0 ml-2">
                      {u.subTopics.length} Bölüm
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Toolbar: Text Size, Pen, Timer, Answer Toggle, Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Text Size Controls */}
          <div className="flex items-center bg-slate-800 border border-slate-700/60 p-1 rounded-2xl shadow-inner">
            <button
              onClick={() => onChangeTextSize('normal')}
              className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all ${
                textSize === 'normal'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Normal Yazı Boyutu"
            >
              A
            </button>
            <button
              onClick={() => onChangeTextSize('large')}
              className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all ${
                textSize === 'large'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Büyük Yazı Boyutu (A+)"
            >
              A+
            </button>
            <button
              onClick={() => onChangeTextSize('huge')}
              className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all ${
                textSize === 'huge'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Ekstra Büyük Akıllı Tahta Boyutu (A++)"
            >
              A++
            </button>
          </div>

          {/* Tahta Kalemi */}
          <button
            onClick={onToggleDrawing}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              isDrawingActive
                ? 'bg-cyan-500 text-slate-950 font-black ring-2 ring-cyan-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
            title="Akıllı Tahta Kalemi (Ekrana Çiz)"
          >
            <Pen className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Tahta Kalemi</span>
          </button>

          {/* Sayaç */}
          <button
            onClick={onToggleTimer}
            className="px-3.5 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            title="Ders Süreölçeri"
          >
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Sayaç</span>
          </button>

          {/* Cevapları Aç / Kapat Global Toggle Button */}
          <button
            onClick={onToggleGlobalAnswers}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              globalAnswersRevealed
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white ring-2 ring-emerald-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
            title="Tüm Cevapları Ekranda Göster veya Gizle"
          >
            {globalAnswersRevealed ? (
              <>
                <EyeOff className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Cevapları Kapat</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Cevapları Aç</span>
              </>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran Modu'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* LINE 2: ALT BÖLÜMLER - VERTICAL ACCORDION */}
      <div className="border-t border-slate-800 bg-slate-950/90 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto">
          {/* Accordion Toggle Bar */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-cyan-400 shrink-0">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>ALT BÖLÜMLER:</span>
              </div>
              <span className="text-xs font-bold text-slate-300">
                Aktif Bölüm: <strong className="text-white font-mono bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">{currentSubNum} {currentSubTopic.title}</strong>
              </span>
            </div>

            <button
              onClick={() => setIsSubTopicsOpen(!isSubTopicsOpen)}
              className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <span>{isSubTopicsOpen ? 'Bölümleri Gizle' : 'Tüm Bölümleri Aç (Alt Alta)'}</span>
              {isSubTopicsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Vertical Accordion List */}
          {isSubTopicsOpen && (
            <div className="flex flex-col gap-2 pt-1 pb-1">
              {currentUnit.subTopics.map((sub, idx) => {
                const isActive = currentSubTopic.id === sub.id;
                const subNum = `${currentUnit.unitNumber}.${idx + 1}`;

                return (
                  <div
                    key={sub.id}
                    className={`rounded-2xl transition-all border ${
                      isActive
                        ? 'bg-slate-900 border-cyan-500/70 shadow-lg shadow-cyan-950/60 p-3 ring-1 ring-cyan-400/40'
                        : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700 p-2.5'
                    }`}
                  >
                    {/* SubTopic Header Bar */}
                    <div
                      onClick={() => onSelectSubTopic(sub)}
                      className="cursor-pointer flex flex-wrap items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`px-2.5 py-1 rounded-xl font-mono text-xs font-black ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                            : 'bg-slate-800 text-cyan-300 group-hover:text-white'
                        }`}>
                          {subNum}
                        </span>
                        <h3 className={`text-sm sm:text-base font-extrabold tracking-tight ${
                          isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                        }`}>
                          {sub.title}
                        </h3>
                        <span className="text-xs text-slate-400 font-normal">
                          (Ders Kitabı s. {sub.pageRange})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {sub.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-200 border border-slate-700">
                            {sub.badge}
                          </span>
                        )}
                        {isActive ? (
                          <span className="text-[11px] font-black text-cyan-400 flex items-center gap-1 bg-cyan-400/15 px-2.5 py-1 rounded-lg border border-cyan-400/40">
                            ✓ Seçili Bölüm
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-400 hover:text-cyan-300">
                            Seçmek İçin Tıkla ▾
                          </span>
                        )}
                      </div>
                    </div>

                    {/* SEÇİLEN BÖLÜM TIKLANINCA: Altında Etkinlik Butonları */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-slate-800">
                        <div className="text-[11px] font-bold text-cyan-300 mb-2 flex items-center gap-1.5">
                          <span>Bölüm Etkinlikleri & Testleri:</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {/* 1. Etkileşimli Kitap */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('interactive-book');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'interactive-book'
                                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-950/40 ring-2 ring-cyan-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <Layers className="w-3.5 h-3.5" />
                            <span>1. Etkileşimli Kitap (Sayfa Sayfa)</span>
                          </button>

                          {/* 2. Konu Özeti & Sözlük */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('summary');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'summary'
                                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-950/40 ring-2 ring-cyan-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>2. Konu Özeti & Sözlük</span>
                          </button>

                          {/* 3. Doğru / Yanlış (10 Soru) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('true-false');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'true-false'
                                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-950/40 ring-2 ring-cyan-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>3. Doğru / Yanlış (10 Soru)</span>
                          </button>

                          {/* 4. LGS Mantık Muhakeme (20 Soru) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('lgs');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'lgs'
                                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-950/40 ring-2 ring-indigo-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>4. LGS Mantık Muhakeme (20 Soru)</span>
                          </button>

                          {/* 5. Deney İstasyonu (Laboratuvar) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('simulation');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'simulation'
                                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-cyan-950/40 ring-2 ring-teal-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                            <span>5. Deney İstasyonu (Laboratuvar)</span>
                          </button>

                          {/* 6. Ünite Sonu Sınavı (20 Soru) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onChangeView('unit-end-20');
                            }}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                              activeView === 'unit-end-20'
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-950/40 ring-2 ring-purple-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                            <span>6. Ünite Sonu Sınavı (20 Soru)</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* When collapsed: show single-row active subtopic with its buttons wrapped */}
          {!isSubTopicsOpen && (
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-2.5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md font-mono text-xs font-black bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                  {currentSubNum}
                </span>
                <span className="text-sm font-extrabold text-white">
                  {currentSubTopic.title}
                </span>
                <span className="text-xs text-slate-400">
                  (s. {currentSubTopic.pageRange})
                </span>
              </div>

              {/* Action Buttons wrapped */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onChangeView('interactive-book')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'interactive-book'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Etkileşimli Kitap</span>
                </button>
                <button
                  onClick={() => onChangeView('summary')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'summary'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Konu Özeti</span>
                </button>
                <button
                  onClick={() => onChangeView('true-false')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'true-false'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Doğru / Yanlış</span>
                </button>
                <button
                  onClick={() => onChangeView('lgs')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'lgs'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LGS Mantık Muhakeme</span>
                </button>
                <button
                  onClick={() => onChangeView('simulation')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'simulation'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Deney İstasyonu</span>
                </button>
                <button
                  onClick={() => onChangeView('unit-end-20')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeView === 'unit-end-20'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black'
                      : 'bg-slate-800 text-purple-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Ünite Sınavı (20)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
