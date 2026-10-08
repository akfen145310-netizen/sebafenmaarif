export interface TrueFalseQuestion {
  id: number;
  statement?: string;
  text?: string;
  isCorrect: boolean;
  explanation: string;
  sourceContext?: string; // Maarif kitabı bağlantısı (ör. sayfa veya kavram)
}

export interface LgsQuestion {
  id: number;
  subTopicId?: string;
  contextTitle?: string;
  context?: string; // Bağlam / Hikâye / Günlük Yaşam / Deney Kurgusu
  scenario?: string; // Gerçek yaşam bağlamı ve problem durumu
  visualData?: {
    type: 'table' | 'diagram' | 'comparison' | 'steps';
    title?: string;
    tableHeaders?: string[];
    tableRows?: (string | number)[][];
    diagramNotes?: string[];
  };
  questionPrompt: string; // Soru Kökü (Örn: "Buna göre araştırmacının ulaştığı sonuçlardan hangisi doğrudur?")
  options: {
    key: 'A' | 'B' | 'C' | 'D' | string;
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | string;
  detailedExplanation?: string; // Adım adım pedagojik Maarif LGS mantık muhakeme çözümü
  explanation?: string; // Çözüm açıklaması
  skillTag?: string; // 'Tablo Yorumlama' | 'Deney & Değişken Analizi' | 'Mantık Muhakeme' | 'Bilimsel Çıkarım' | 'Günlük Yaşam Bağı'
  cognitiveLevel?: string; // Bilişsel düzey
  theme?: string; // Alt tema
}

export interface BookActivity {
  id: string;
  type: 'ogrenelim_arastiralim' | 'etkinlik' | 'bilgi_istasyonu' | 'sira_sizde' | 'dusunelim_tartisalim' | 'deney' | 'cagini_asanlar';
  typeLabel: string;
  pageNumber: string;
  title: string;
  prompt: string;
  steps?: string[];
  materials?: string[];
  interactiveAnswer: string;
  examNote?: string;
  subQuestions?: {
    question: string;
    answer: string;
  }[];
}

export interface UnitEndQuestion {
  id: number;
  pageNumber: string;
  type: 'multiple_choice' | 'open_ended' | 'fill_in_the_blank';
  title: string;
  questionPrompt: string;
  options?: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: string;
  detailedExplanation: string;
  skillTag?: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface InteractiveBookItem {
  id: string;
  pageNumber: string;
  type: 
    | 'gozlemleyelim'
    | 'on_degerlendirme'
    | 'hazirlik_istasyonu'
    | 'merak_istasyonu'
    | 'performans_istasyonu'
    | 'kopru_istasyonu'
    | 'etkinlik_istasyonu'
    | 'karekod'
    | 'bilgi_istasyonu'
    | 'bilgi_kutusu'
    | 'pekistirme_istasyonu'
    | 'cagini_asanlar'
    | 'bilim_guncesi';
  title: string;
  badge?: string;
  prompt?: string;
  content?: string | string[];
  materials?: string[];
  steps?: string[];
  evaluationQuestions?: {
    question: string;
    answer: string;
  }[];
  interactiveAnswer?: string; // Tıklayınca açılan model cevap
  resultInfoBox?: string; // Etkinlik sonunda ulaşılan bilgi kutusu (harika yapılmış / yaratılmış üslubuyla)
  qrInfo?: {
    title: string;
    description: string;
    type: 'video' | 'interactive' | 'music' | 'evaluation';
  };
  reinforcementData?: {
    type: 'maze' | 'branching_keys' | 'puzzle' | 'fishbone' | 'concept_map' | 'matching';
    items?: any;
    solution: string;
  };
}

export interface SubTopic {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  pageRange?: string;
  concepts: string[];
  summarySections: {
    heading: string;
    iconType?: string;
    paragraphs: string[];
    keyPoints?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    scientistBox?: {
      name: string;
      role: string;
      contribution: string;
    };
    experimentBox?: {
      title: string;
      purpose: string;
      variables?: {
        independent: string;
        dependent: string;
        control: string;
      };
      conclusion: string;
    };
    dailyLifeExample?: string;
    examNote?: string; // Sınavlara yönelik hap bilgi kutucuğu
  }[];
  bookActivities?: BookActivity[];
  interactiveBookFlow?: InteractiveBookItem[];
  glossary?: GlossaryItem[]; // Konu sonu anahtar kavramlar sözlüğü
  trueFalseQuestions: TrueFalseQuestion[];
  lgsQuestions: LgsQuestion[];
  simulationId?: 'moon-phases' | 'dynamometer' | 'mass-weight' | 'microscope' | 'skeleton' | 'periscope' | 'density-tower' | 'circuit' | string;
}

export interface Unit {
  id: string;
  unitNumber: number;
  bookNumber?: number; // 1. Kitap veya 2. Kitap
  grade?: number;
  subject?: string;
  title: string;
  colorTheme: {
    primary: string;
    border: string;
    bg: string;
    accent: string;
    text: string;
  };
  subTopics: SubTopic[];
  unitEndPageRange?: string;
  unitEndQuestions?: UnitEndQuestion[];
  unitEnd20Questions?: LgsQuestion[]; // Ünite sonu 20 adet bağlam temelli LGS sorusu
}

