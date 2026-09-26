import React, { useState } from 'react';
import { Sparkles, Users, X, Shuffle, Plus, Trash2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_STUDENTS = [
  'Ahmet', 'Ayşe', 'Ali', 'Zeynep', 'Mehmet', 'Elif', 'Mustafa', 'Fatma',
  'Emir', 'Hiranur', 'Yusuf', 'Ecrin', 'Ömer', 'Defne', 'Kerem', 'Nehir',
  'Eymen', 'Asel', 'Hamza', 'Azra', 'Alperen', 'Meryem', 'Burak', 'İclal'
];

export const StudentPickerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [students, setStudents] = useState<string[]>(() => {
    const saved = localStorage.getItem('smartboard_students');
    return saved ? JSON.parse(saved) : DEFAULT_STUDENTS;
  });
  const [newStudent, setNewStudent] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showListEdit, setShowListEdit] = useState(false);

  if (!isOpen) return null;

  const handlePick = () => {
    if (students.length === 0) return;
    setIsSpinning(true);
    setSelectedStudent(null);

    let count = 0;
    const maxChanges = 22;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[randomIndex]);
      count++;
      if (count >= maxChanges) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 75);
  };

  const addStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.trim()) return;
    const updated = [...students, newStudent.trim()];
    setStudents(updated);
    localStorage.setItem('smartboard_students', JSON.stringify(updated));
    setNewStudent('');
  };

  const removeStudent = (index: number) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    localStorage.setItem('smartboard_students', JSON.stringify(updated));
  };

  const resetToDefault = () => {
    setStudents(DEFAULT_STUDENTS);
    localStorage.setItem('smartboard_students', JSON.stringify(DEFAULT_STUDENTS));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white font-fredoka">
                Rastgele Öğrenci Seçici
              </h3>
              <p className="text-xs text-slate-400">
                Akıllı tahtada söz hakkı & soru çözümü için çark
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Result Card */}
        <div className="my-6">
          <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-950 border border-slate-700/60 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {isSpinning && (
              <div className="absolute inset-0 bg-amber-500/10 animate-pulse pointer-events-none" />
            )}

            {selectedStudent ? (
              <div className="animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                  Sıradaki Öğrenci
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-wide font-fredoka">
                  {selectedStudent}
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-1">
                  Tahtaya gelip soruyu cevaplayabilirsin! 🌟
                </p>
              </div>
            ) : (
              <div className="text-slate-400 text-sm flex flex-col items-center gap-1.5">
                <Shuffle className="w-8 h-8 text-slate-600 mb-1" />
                Öğrenci belirlemek için aşağıdaki butona basın
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePick}
            disabled={isSpinning || students.length === 0}
            className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-98 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            <Shuffle className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            {isSpinning ? 'Seçiliyor...' : 'Öğrenci Seç!'}
          </button>

          <button
            onClick={() => setShowListEdit(!showListEdit)}
            className="px-4 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            <span>({students.length})</span>
          </button>
        </div>

        {/* Student List Editor Drawer */}
        {showListEdit && (
          <div className="mt-5 pt-4 border-t border-slate-800 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300">
                Sınıf Listesi ({students.length} Kişi)
              </span>
              <button
                onClick={resetToDefault}
                className="text-xs text-amber-400 hover:underline"
              >
                Varsayılana Sıfırla
              </button>
            </div>

            <form onSubmit={addStudent} className="flex gap-2 mb-3">
              <input
                type="text"
                value={newStudent}
                onChange={e => setNewStudent(e.target.value)}
                placeholder="Yeni öğrenci adı ekle..."
                className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Ekle
              </button>
            </form>

            <div className="max-h-36 overflow-y-auto flex flex-wrap gap-1.5 p-1 bg-slate-950/60 rounded-xl border border-slate-800">
              {students.map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-800 rounded-lg text-xs text-slate-300"
                >
                  {name}
                  <button
                    onClick={() => removeStudent(i)}
                    className="text-slate-500 hover:text-rose-400 ml-0.5"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
