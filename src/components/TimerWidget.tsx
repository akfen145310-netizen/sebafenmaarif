import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Plus, Minus, Bell } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TimerWidget: React.FC<Props> = ({ isOpen, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(120); // default 2 min
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsFinished(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const addTime = (secs: number) => {
    setSecondsLeft(prev => Math.max(0, prev + secs));
    setIsFinished(false);
  };

  const resetTimer = (secs = 120) => {
    setIsRunning(false);
    setSecondsLeft(secs);
    setIsFinished(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-slate-900/95 border border-amber-500/40 shadow-2xl rounded-2xl p-4 w-72 backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Ders Süreölçeri
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Digits Display */}
      <div className="my-3 text-center">
        <div
          className={`font-mono text-4xl font-extrabold tracking-widest ${
            isFinished
              ? 'text-rose-500 animate-bounce'
              : secondsLeft <= 30
              ? 'text-amber-400 animate-pulse'
              : 'text-white'
          }`}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        {isFinished && (
          <div className="text-xs font-semibold text-rose-400 mt-1 flex items-center justify-center gap-1">
            <Bell className="w-3.5 h-3.5" /> Süre Doldu!
          </div>
        )}
      </div>

      {/* Preset Quick Buttons */}
      <div className="flex items-center justify-center gap-1.5 mb-3 text-xs">
        <button
          onClick={() => resetTimer(60)}
          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono"
        >
          1 Dk
        </button>
        <button
          onClick={() => resetTimer(120)}
          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono"
        >
          2 Dk
        </button>
        <button
          onClick={() => resetTimer(300)}
          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono"
        >
          5 Dk
        </button>
        <button
          onClick={() => resetTimer(600)}
          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono"
        >
          10 Dk
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => addTime(-30)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
            title="-30 saniye"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => addTime(30)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
            title="+30 saniye"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md transition-all ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" /> Duraklat
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" /> Başlat
              </>
            )}
          </button>

          <button
            onClick={() => resetTimer(120)}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl"
            title="Sıfırla"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
