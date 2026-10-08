import { Unit, SubTopic } from '../types/curriculum';
import { balanceQuestionBankAnswers } from '../utils/questionQualityEngine';
import { unit1Data } from './unit1Data';
import { unit2Data } from './unit2Data';
import { unit3Data } from './unit3Data';
import {
  unit1Activities,
  unit1EndQuestions,
  unit2Activities,
  unit2EndQuestions,
  unit3Activities,
  unit3EndQuestions
} from './bookActivitiesData';
import { unit1InteractiveBookFlow, unit1Glossary } from './interactiveBookData';
import { unit1End20LgsQuestions } from './unitEnd20Questions';
import {
  unit2InteractiveBookFlow,
  unit3InteractiveBookFlow,
  unit4InteractiveBookFlow,
  getCompleteInteractiveBookFlow
} from './maarifInteractiveBookData';
import { grade5Unit4Data } from './grade5Unit4Data';
import { grade5Unit5Data } from './grade5Unit5Data';
import { grade5Unit6Data } from './grade5Unit6Data';
import { grade5Unit7Data } from './grade5Unit7Data';
import { grade7Units } from './grade7/grade7Index';
import { grade6Units } from './grade6/grade6Index';
import { grade8Units } from './grade8/grade8Index';

// Enrich unit1Data with %100 Maarif page flow, glossary, and 20 LGS exam questions
const enrichedUnit1: Unit = {
  ...unit1Data,
  grade: 5,
  bookNumber: 1,
  subject: 'Fen Bilimleri',
  unitEndPageRange: 's. 50-56',
  unitEndQuestions: unit1EndQuestions,
  unitEnd20Questions: unit1End20LgsQuestions,
  subTopics: unit1Data.subTopics.map(sub => ({
    ...sub,
    bookActivities: unit1Activities[sub.id] || [],
    interactiveBookFlow: unit1InteractiveBookFlow[sub.id] || [],
    glossary: unit1Glossary[sub.id] || []
  }))
};

// Enrich unit2Data
const enrichedUnit2: Unit = {
  ...unit2Data,
  grade: 5,
  bookNumber: 1,
  subject: 'Fen Bilimleri',
  unitEndPageRange: 's. 90-95',
  unitEndQuestions: unit2EndQuestions,
  unitEnd20Questions: unit2Data.subTopics[0]?.lgsQuestions.slice(0, 20) || [],
  subTopics: unit2Data.subTopics.map(sub => ({
    ...sub,
    bookActivities: unit2Activities[sub.id] || [],
    interactiveBookFlow: unit2InteractiveBookFlow[sub.id] || getCompleteInteractiveBookFlow(unit2Data, sub),
    glossary: [
      { term: 'Kuvvet', definition: 'Duran bir cismi hareket ettirebilen, hareket eden cismi hızlandıran, yavaşlatan veya yönünü değiştirebilen, şekil değişikliği yapabilen etki.' },
      { term: 'Dinamometre', definition: 'Esnek sarmal yayların uzama miktarından yararlanılarak kuvvetin büyüklüğünü hassasiyetle ölçen alet.' },
      { term: 'Newton (N)', definition: 'Kuvvet birimi. Bilim insanı Isaac Newton anısına verilmiştir.' },
      { term: 'Kütle', definition: 'Değişmeyen madde miktarı. Eşit kollu terazi ile ölçülür, birimi gram veya kilogramdır.' },
      { term: 'Ağırlık', definition: 'Kütleye etki eden yer çekimi kuvveti. Dinamometre ile ölçülür, birimi Newton’dır.' },
      { term: 'Sürtünme Kuvveti', definition: 'Birbiriyle temas eden yüzeyler arasında hareketi zorlaştıran veya engelleyen direnç kuvveti.' },
      { term: 'Hava Direnci', definition: 'Havanın cisimlerin hareketine karşı gösterdiği zorluk. Uçak ve kuşların burun kısımları bu direnci azaltacak aerodinamik yapıda yapılmıştır.' },
      { term: 'Su Direnci', definition: 'Suyun cisimlerin hareketine karşı gösterdiği sürtünme direnci. Balıkların vücut hatları ve gemilerin V şeklindeki pruvası bu direnci azaltmak için tasarlanmıştır.' }
    ]
  }))
};

// Enrich unit3Data
const enrichedUnit3: Unit = {
  ...unit3Data,
  grade: 5,
  bookNumber: 1,
  subject: 'Fen Bilimleri',
  unitEndPageRange: 's. 136-141',
  unitEndQuestions: unit3EndQuestions,
  unitEnd20Questions: unit3Data.subTopics[0]?.lgsQuestions.slice(0, 20) || [],
  subTopics: unit3Data.subTopics.map(sub => ({
    ...sub,
    bookActivities: unit3Activities[sub.id] || [],
    interactiveBookFlow: unit3InteractiveBookFlow[sub.id] || getCompleteInteractiveBookFlow(unit3Data, sub),
    glossary: [
      { term: 'Hücre', definition: 'Canlıların canlılık özelliği gösteren en küçük temel yapı birimi. Canlı vücudu harika bir nizamla trilyonlarca hücreden var edilmiştir.' },
      { term: 'Mikroskop', definition: 'Gözle görülemeyecek kadar küçük mikro alemi mercekler vasıtasıyla büyüterek incelememizi sağlayan optik araç.' },
      { term: 'Çekirdek', definition: 'Hücredeki tüm yaşamsal faaliyetleri yöneten ve kalıtım maddesini (DNA) barındıran yönetim merkezi.' },
      { term: 'Mitokondri', definition: 'Hücrenin besin ve oksijen kullanarak yaşamsal enerji (ATP) ürettiği enerji santrali.' },
      { term: 'Kloroplast', definition: 'Bitki hücrelerinde yeşil kısımlarda bulunan, fotosentez ile besin ve oksijen üreten organel.' },
      { term: 'Hücre Duvarı', definition: 'Sadece bitki hücrelerinde bulunan, hücreyi dış etkilerden koruyan ve köşeli şekil veren sağlam çeper.' },
      { term: 'Doku - Organ - Sistem - Organizma', definition: 'Hücreden organizmaya doğru basitten karmaşığa harika bir teşkilatlanma hiyerarşisi.' },
      { term: 'İskelet & Eklem', definition: 'Vücudumuza dik duruş sağlayan, iç organları koruyan kemik çatısı ve kemikleri birbirine bağlayan hareket noktaları.' }
    ]
  }))
};

const rawUnitsList: Unit[] = [
  enrichedUnit1,
  enrichedUnit2,
  enrichedUnit3,
  grade5Unit4Data,
  grade5Unit5Data,
  grade5Unit6Data,
  grade5Unit7Data,
  ...grade6Units,
  ...grade7Units,
  ...grade8Units
];

export const allUnits: Unit[] = rawUnitsList.map((unit, uIdx) => ({
  ...unit,
  unitEnd20Questions: unit.unitEnd20Questions && unit.unitEnd20Questions.length > 0
    ? balanceQuestionBankAnswers(unit.unitEnd20Questions, uIdx * 13 + 5)
    : undefined,
  subTopics: unit.subTopics.map((sub, sIdx) => ({
    ...sub,
    lgsQuestions: sub.lgsQuestions && sub.lgsQuestions.length > 0
      ? balanceQuestionBankAnswers(sub.lgsQuestions, uIdx * 31 + sIdx * 7 + 11)
      : [],
    interactiveBookFlow: sub.interactiveBookFlow && sub.interactiveBookFlow.length > 0
      ? sub.interactiveBookFlow
      : getCompleteInteractiveBookFlow(unit, sub)
  }))
}));

export interface GradeInfo {
  grade: number;
  label: string;
  description: string;
  units: {
    id: string;
    unitNumber: number;
    bookNumber?: number;
    title: string;
    isAvailable: boolean;
  }[];
}

export const availableGrades: GradeInfo[] = [
  {
    grade: 5,
    label: '5. Sınıf',
    description: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite Tam Uyumlu)',
    units: [
      // 1. Kitap
      { id: 'unit-1', unitNumber: 1, bookNumber: 1, title: 'Gökyüzündeki Komşularımız ve Biz (1. Kitap)', isAvailable: true },
      { id: 'unit-2', unitNumber: 2, bookNumber: 1, title: 'Kuvveti Tanıyalım (1. Kitap)', isAvailable: true },
      { id: 'unit-3', unitNumber: 3, bookNumber: 1, title: 'Canlıların Yapısına Yolculuk (1. Kitap)', isAvailable: true },
      // 2. Kitap
      { id: 'unit-4', unitNumber: 4, bookNumber: 2, title: 'Işığın Dünyası (2. Kitap)', isAvailable: true },
      { id: 'unit-5', unitNumber: 5, bookNumber: 2, title: 'Maddenin Doğası (2. Kitap)', isAvailable: true },
      { id: 'unit-6', unitNumber: 6, bookNumber: 2, title: 'Yaşamımızdaki Elektrik (2. Kitap)', isAvailable: true },
      { id: 'unit-7', unitNumber: 7, bookNumber: 2, title: 'Sürdürülebilir Yaşam ve Geri Dönüşüm (2. Kitap)', isAvailable: true }
    ]
  },
  {
    grade: 6,
    label: '6. Sınıf',
    description: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (7 Ünite Tam Uyumlu)',
    units: [
      // 1. Kitap
      { id: 'g6-unit-1', unitNumber: 1, bookNumber: 1, title: 'Güneş Sistemi ve Tutulmalar (1. Kitap)', isAvailable: true },
      { id: 'g6-unit-2', unitNumber: 2, bookNumber: 1, title: 'Kuvvetin Etkisinde Hareket (1. Kitap)', isAvailable: true },
      { id: 'g6-unit-3', unitNumber: 3, bookNumber: 1, title: 'Canlılarda Sistemler (1. Kitap)', isAvailable: true },
      { id: 'g6-unit-4', unitNumber: 4, bookNumber: 1, title: 'Işığın Yansıması ve Renkler (1. Kitap)', isAvailable: true },
      // 2. Kitap
      { id: 'g6-unit-5', unitNumber: 5, bookNumber: 2, title: 'Maddenin Ayırt Edici Özellikleri (2. Kitap)', isAvailable: true },
      { id: 'g6-unit-6', unitNumber: 6, bookNumber: 2, title: 'Elektriğin İletimi ve Direnç (2. Kitap)', isAvailable: true },
      { id: 'g6-unit-7', unitNumber: 7, bookNumber: 2, title: 'Sürdürülebilir Yaşam ve Etkileşim (2. Kitap)', isAvailable: true }
    ]
  },
  {
    grade: 7,
    label: '7. Sınıf',
    description: 'Türkiye Yüzyılı Maarif Modeli - 1. ve 2. Ders Kitabı (Tam Uyumlu)',
    units: [
      // 1. Kitap
      { id: 'g7-unit-1', unitNumber: 1, bookNumber: 1, title: 'Uzay Çağı (1. Kitap)', isAvailable: true },
      { id: 'g7-unit-2', unitNumber: 2, bookNumber: 1, title: 'Kuvvet ve Enerjiyi Keşfedelim (1. Kitap)', isAvailable: true },
      { id: 'g7-unit-3', unitNumber: 3, bookNumber: 1, title: 'Vücudumuzdaki Sistemler (1. Kitap)', isAvailable: true },
      // 2. Kitap
      { id: 'g7-unit-4', unitNumber: 4, bookNumber: 2, title: 'Işığın Kırılması ve Mercekler (2. Kitap)', isAvailable: true },
      { id: 'g7-unit-5', unitNumber: 5, bookNumber: 2, title: 'Maddenin Doğasına Yolculuk (2. Kitap)', isAvailable: true },
      { id: 'g7-unit-6', unitNumber: 6, bookNumber: 2, title: 'Elektriklenme (2. Kitap)', isAvailable: true },
      { id: 'g7-unit-7', unitNumber: 7, bookNumber: 2, title: 'Sürdürülebilir Yaşam ve Enerji (2. Kitap)', isAvailable: true }
    ]
  },
  {
    grade: 8,
    label: '8. Sınıf',
    description: 'LGS Fen Bilimleri - 7 Ünite (Konu Özeti, Doğru-Yanlış, LGS Mantıksal Muhakeme, Deney İstasyonu, 20 Soruluk Deneme Sınavları)',
    units: [
      { id: 'g8-unit-1', unitNumber: 1, bookNumber: 1, title: 'Mevsimler ve İklim', isAvailable: true },
      { id: 'g8-unit-2', unitNumber: 2, bookNumber: 1, title: 'DNA ve Genetik Kod', isAvailable: true },
      { id: 'g8-unit-3', unitNumber: 3, bookNumber: 1, title: 'Basınç', isAvailable: true },
      { id: 'g8-unit-4', unitNumber: 4, bookNumber: 1, title: 'Madde ve Endüstri', isAvailable: true },
      { id: 'g8-unit-5', unitNumber: 5, bookNumber: 1, title: 'Basit Makineler', isAvailable: true },
      { id: 'g8-unit-6', unitNumber: 6, bookNumber: 1, title: 'Enerji Dönüşümleri ve Çevre Bilimi', isAvailable: true },
      { id: 'g8-unit-7', unitNumber: 7, bookNumber: 1, title: 'Elektrik Yükleri ve Elektrik Enerjisi', isAvailable: true }
    ]
  }
];

export function getUnitById(id: string): Unit | undefined {
  return allUnits.find(u => u.id === id);
}

export function getSubTopicById(unitId: string, subTopicId: string): SubTopic | undefined {
  const unit = getUnitById(unitId);
  if (!unit) return undefined;
  return unit.subTopics.find(s => s.id === subTopicId);
}
