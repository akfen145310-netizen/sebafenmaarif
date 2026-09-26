import React, { useState } from 'react';
import { allUnits } from './data/unitsIndex';
import { Unit, SubTopic } from './types/curriculum';
import { Header, AppView } from './components/Header';
import { InteractiveBookView } from './components/InteractiveBookView';
import { TopicSummaryView } from './components/TopicSummaryView';
import { TrueFalseQuiz } from './components/TrueFalseQuiz';
import { LgsQuestionBoard } from './components/LgsQuestionBoard';
import { UnitEnd20ExamView } from './components/UnitEnd20ExamView';
import { ExperimentLabView } from './components/ExperimentLabView';
import { SmartBoardDrawingOverlay } from './components/SmartBoardDrawingOverlay';
import { TimerWidget } from './components/TimerWidget';
import { StudentPickerModal } from './components/StudentPickerModal';
import { SimulationsModal } from './components/SimulationsModal';
import { GradeUnitSelectorModal } from './components/GradeUnitSelectorModal';
import { MaarifWelcomeLandingView } from './components/MaarifWelcomeLandingView';
import { GraduationCap, Home, Sparkles, BookOpen } from 'lucide-react';

export const App: React.FC = () => {
  const [isLandingPage, setIsLandingPage] = useState<boolean>(true);
  const [currentGrade, setCurrentGrade] = useState<number>(5);
  const [currentUnit, setCurrentUnit] = useState<Unit>(allUnits[0]);
  const [currentSubTopic, setCurrentSubTopic] = useState<SubTopic>(allUnits[0].subTopics[0]);
  const [activeView, setActiveView] = useState<AppView>('interactive-book');

  // Smartboard Interactive Tool States
  const [isDrawingActive, setIsDrawingActive] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isStudentPickerOpen, setIsStudentPickerOpen] = useState(false);
  const [isSimulationsOpen, setIsSimulationsOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [activeSimId, setActiveSimId] = useState<string>('moon-phases');
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'huge'>('normal');

  // Global "Cevapları Aç" Toggle
  const [globalAnswersRevealed, setGlobalAnswersRevealed] = useState(false);

  const handleOpenSimulation = (simId?: string) => {
    if (simId) setActiveSimId(simId);
    setIsSimulationsOpen(true);
  };

  const handleSelectUnit = (unit: Unit) => {
    setCurrentUnit(unit);
    setCurrentSubTopic(unit.subTopics[0]);
    if (unit.grade) {
      setCurrentGrade(unit.grade);
    }
  };

  const handleSelectGrade = (grade: number) => {
    setCurrentGrade(grade);
    const firstUnitForGrade = allUnits.find(u => (u.grade || 5) === grade);
    if (firstUnitForGrade) {
      setCurrentUnit(firstUnitForGrade);
      setCurrentSubTopic(firstUnitForGrade.subTopics[0]);
      if (activeView === 'unit-end-20' && (!firstUnitForGrade.unitEnd20Questions || firstUnitForGrade.unitEnd20Questions.length === 0)) {
        setActiveView('interactive-book');
      }
    }
    // Sınıf seçilince ana girişten ders ekranına geçiş
    setIsLandingPage(false);
  };

  const getTextSizeClass = () => {
    switch (textSize) {
      case 'large':
        return 'text-lg';
      case 'huge':
        return 'text-xl';
      default:
        return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 ${getTextSizeClass()}`}>
      {/* EN ÜSTTE BELİRGİN SEÇİLEN SINIF BARI */}
      <div className="sticky top-0 z-40 bg-slate-900/95 border-b border-slate-800 shadow-xl px-3 sm:px-6 py-2.5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          {/* Sol: Seçilen Sınıf Belirteci */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-md shadow-cyan-950/60 uppercase tracking-wide border border-cyan-400/40">
              <GraduationCap className="w-4 h-4 text-cyan-200" />
              <span>SEÇİLEN SINIF:</span>
              <span className="text-cyan-200 underline decoration-cyan-400 font-extrabold text-sm sm:text-base">
                {currentGrade}. SINIF FEN BİLİMLERİ
              </span>
            </div>

            <span className="text-[11px] font-bold text-cyan-300/90 hidden md:inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Türkiye Yüzyılı Maarif Modeli • %100 Uyumlu
            </span>

            {!isLandingPage && (
              <span className="text-xs font-semibold text-slate-300 hidden lg:inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                Aktif: {currentUnit.unitNumber}. Ünite • {currentUnit.title}
              </span>
            )}
          </div>

          {/* Sağ: Hızlı Sınıf Değiştirici ve Ana Girişe Dönüş Butonu */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 shadow-inner">
              <span className="text-[11px] font-bold text-slate-400 px-2 hidden sm:inline">
                Sınıf:
              </span>
              {[5, 6, 7, 8].map(g => (
                <button
                  key={g}
                  onClick={() => handleSelectGrade(g)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    currentGrade === g && !isLandingPage
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md ring-1 ring-cyan-300 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
                  }`}
                  title={`${g}. Sınıf Fen Bilimleri dersine geç`}
                >
                  {g}. Sınıf
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsLandingPage(prev => !prev)}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-md transition-all border cursor-pointer ${
                isLandingPage
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 ring-2 ring-cyan-400/50'
                  : 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white border-cyan-400/40 shadow-cyan-950/40'
              }`}
              title="Ana Giriş ve Sınıf Seviyesi Seçim Sayfasına Dön"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{isLandingPage ? 'Ders Ekranına Geç' : 'Ana Giriş / Sınıf Seç'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* DURUM 1: ANA GİRİŞ SAYFASI (YÜZDE 100 MAARİF UYUMLU FEN BİLİMLERİ SİTESİNE HOŞ GELDİNİZ. SINIF SEVİYESİNİ SEÇİNİZ) */}
      {isLandingPage ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 sm:py-8">
          <MaarifWelcomeLandingView
            currentGrade={currentGrade}
            onSelectGrade={handleSelectGrade}
          />
        </main>
      ) : (
        /* DURUM 2: DERS VE AKILLI TAHTA EKRANI */
        <>
          <Header
            units={allUnits}
            currentUnit={currentUnit}
            currentGrade={currentGrade}
            currentSubTopic={currentSubTopic}
            activeView={activeView}
            onSelectUnit={handleSelectUnit}
            onSelectSubTopic={sub => setCurrentSubTopic(sub)}
            onChangeView={view => {
              setActiveView(view);
            }}
            onSelectGrade={handleSelectGrade}
            onGoToLanding={() => setIsLandingPage(true)}
            isDrawingActive={isDrawingActive}
            onToggleDrawing={() => setIsDrawingActive(!isDrawingActive)}
            onToggleTimer={() => setIsTimerOpen(!isTimerOpen)}
            onOpenGradePicker={() => setIsGradeModalOpen(true)}
            globalAnswersRevealed={globalAnswersRevealed}
            onToggleGlobalAnswers={() => setGlobalAnswersRevealed(!globalAnswersRevealed)}
            textSize={textSize}
            onChangeTextSize={setTextSize}
          />

          {/* Main Container Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 sm:py-8">
            {/* Tab 1: Etkileşimli Kitap (Sayfa Sayfa Kitap Akışı) */}
            {activeView === 'interactive-book' && (
              <InteractiveBookView
                unit={currentUnit}
                subTopic={currentSubTopic}
                globalAnswersRevealed={globalAnswersRevealed}
                onGoToSummary={() => setActiveView('summary')}
                onGoToLgs={() => setActiveView('lgs')}
              />
            )}

            {/* Tab 2: Konu Özeti & Sözlük (Maarif) */}
            {activeView === 'summary' && (
              <TopicSummaryView
                unit={currentUnit}
                subTopic={currentSubTopic}
                globalAnswersRevealed={globalAnswersRevealed}
                onOpenSimulation={handleOpenSimulation}
                onStartBookActivities={() => setActiveView('interactive-book')}
                onStartTFQuiz={() => setActiveView('true-false')}
                onStartLGSQuiz={() => setActiveView('lgs')}
              />
            )}

            {/* Tab 3: Doğru / Yanlış (10 Soru) */}
            {activeView === 'true-false' && (
              <TrueFalseQuiz
                unit={currentUnit}
                subTopic={currentSubTopic}
                onBackToSummary={() => setActiveView('summary')}
                onGoToLgs={() => setActiveView('lgs')}
              />
            )}

            {/* Tab 4: LGS Mantık Muhakeme (20 Soru) */}
            {activeView === 'lgs' && (
              <LgsQuestionBoard
                unit={currentUnit}
                subTopic={currentSubTopic}
                onBackToTF={() => setActiveView('true-false')}
                onBackToSummary={() => setActiveView('summary')}
              />
            )}

            {/* Tab 5: Deney İstasyonu (Laboratuvar - Geniş Ekran Deney ve Etkinlikler) */}
            {activeView === 'simulation' && (
              <ExperimentLabView
                unit={currentUnit}
                currentSubTopic={currentSubTopic}
                onSelectSubTopic={sub => setCurrentSubTopic(sub)}
              />
            )}

            {/* Tab 6: Ünite Sonu Sınavı (20 Soru) */}
            {activeView === 'unit-end-20' && (
              <UnitEnd20ExamView
                unit={currentUnit}
                globalAnswersRevealed={globalAnswersRevealed}
                onGoToSummary={() => setActiveView('summary')}
              />
            )}
          </main>
        </>
      )}

      {/* Grade and Unit Selection Modal (Tıklandığında Açılan Sınıf/Ünite Seçici) */}
      <GradeUnitSelectorModal
        isOpen={isGradeModalOpen}
        currentUnit={currentUnit}
        currentGrade={currentGrade}
        allUnits={allUnits}
        onSelectUnit={handleSelectUnit}
        onSelectGrade={g => handleSelectGrade(g)}
        onClose={() => setIsGradeModalOpen(false)}
      />

      {/* Floating Smartboard Interactive Drawing Overlay */}
      <SmartBoardDrawingOverlay
        isActive={isDrawingActive}
        onClose={() => setIsDrawingActive(false)}
      />

      {/* Floating Timer Widget */}
      <TimerWidget
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Random Student Picker Modal (Çark) */}
      <StudentPickerModal
        isOpen={isStudentPickerOpen}
        onClose={() => setIsStudentPickerOpen(false)}
      />

      {/* Interactive Experiments & Simulations Modal */}
      <SimulationsModal
        isOpen={isSimulationsOpen}
        activeSimId={activeSimId}
        onClose={() => setIsSimulationsOpen(false)}
      />

      {/* Akıllı Tahta Alt Bilgi Alanı */}
      <footer className="border-t border-slate-800 bg-slate-900/80 py-4 text-center text-xs text-slate-400 font-medium">
        Türkiye Yüzyılı Maarif Modeli • %100 Maarif Uyumlu {currentGrade}. Sınıf Fen Bilimleri Akıllı Tahta Uygulaması
      </footer>
    </div>
  );
};

export default App;
