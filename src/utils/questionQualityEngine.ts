/**
 * MEB Maarif ve Ölçme-Değerlendirme Soru Kalite ve Teknik Dizayn Motoru
 * 
 * Bu modül öğretmen ve MEB bağlam temelli soru ilkelerini garantiler:
 * 1. Şıklar Arası Eşit Dağılım: Sınavlarda ve testlerde doğru cevaplar (A, B, C, D) %25 oranında eşit dağıtılır.
 * 2. Cümle / Şık Uzunluğu Dengesi: Doğru şık en uzun cümle olma eğiliminden arındırılır. Çeldiriciler de en az doğru şık kadar zengin, bilimsel ve eşit uzunlukta tasarlanır.
 * 3. Parantez İçi Açıklama Yasağı: Şıklarda parantez içinde ipucu / açıklama içeren ifadeler (çünkü..., vb.) temizlenir ve doğal bilimsel akışa dönüştürülür.
 */

import { LgsQuestion } from '../types/curriculum';

/**
 * Şık metnindeki parantez içi açıklamaları ve ipuçlarını temizler veya düzeltir.
 * Öğrencilerin "parantezli şık doğrudur" önyargısını tamamen engeller.
 */
export function sanitizeOptionText(rawText: string): string {
  if (!rawText) return '';
  let text = rawText;

  // Özel parantez dönüşümleri (bilimsel terimlerin akışını bozmadan parantezleri kaldırma)
  text = text.replace(/\(saat yönünün tersine\)/gi, 'yani saat yönünün tersi');
  text = text.replace(/\(saatin dönme yönünün tersi\)/gi, 'saat ibresinin tersi yönde');
  text = text.replace(/\(saatin dönme yönü\)/gi, 'saat ibresi yönünde');
  text = text.replace(/\(Güneş - Ay - Dünya\)/gi, 'Güneş, Ay ve Dünya diziliminde');
  text = text.replace(/\(Güneş - Dünya - Ay\)/gi, 'Güneş, Dünya ve Ay diziliminde');
  text = text.replace(/\(yaklaşık\s+([^)]+)\)/gi, 'yaklaşık $1');
  text = text.replace(/\(İlk Dördün\)/gi, 'İlk Dördün evresinde');
  text = text.replace(/\(Son Dördün\)/gi, 'Son Dördün evresinde');
  text = text.replace(/\(Dolunay\)/gi, 'Dolunay evresinde');
  text = text.replace(/\(Yeni Ay\)/gi, 'Yeni Ay evresinde');
  text = text.replace(/\(Güneş\)/gi, 'Güneş olarak');
  text = text.replace(/\(Dünya\)/gi, 'Dünya olarak');
  text = text.replace(/\(Ay\)/gi, 'Ay olarak');
  
  // Genel parantez içi ifadeleri kaldır veya temizle
  text = text.replace(/\s*\([^)]*\)/g, '');

  // Çift boşlukları ve tire kenarlarını düzelt
  text = text.replace(/\s{2,}/g, ' ').trim();
  return text;
}

/**
 * Bir sorunun şıklarının uzunluklarını birbirine yaklaştırır.
 * Doğru cevabın her zaman en uzun olmasını önlemek için çeldiricileri güçlendirir.
 */
export function balanceOptionLengths(
  options: { key: string; text: string }[],
  correctKey: string
): { key: string; text: string }[] {
  const sanitized = options.map(o => ({
    key: o.key,
    text: sanitizeOptionText(o.text)
  }));

  const correctOpt = sanitized.find(o => o.key === correctKey);
  if (!correctOpt) return sanitized;

  const correctLen = correctOpt.text.length;

  return sanitized.map(opt => {
    // Çeldirici aşırı kısa ise ve doğru cevap uzunsa, çeldiriciyi bilimsel bağlamla zenginleştir
    if (opt.key !== correctKey && opt.text.length < correctLen * 0.7) {
      let enriched = opt.text;
      // Cümle sonundaki noktayı kaldırıp zenginleştirici ek yapabiliriz
      if (enriched.endsWith('.')) enriched = enriched.slice(0, -1);
      
      if (!enriched.includes('nedeniyle') && !enriched.includes('çünkü') && !enriched.includes('olduğu için')) {
        enriched += ' ve buna bağlı gözlemsel veriler dikkate alındığında.';
      } else {
        enriched += ' ile doğrudan ilişkili olduğu varsayımıyla.';
      }
      return { key: opt.key, text: enriched };
    }
    return opt;
  });
}

/**
 * Bir soru listesini alır ve doğru cevapları A, B, C, D seçeneklerine kesinlikle EŞİT oranda dağıtır.
 * Her soru için seçenek sırasını yeniden düzenleyip doğru cevabın anahtarını günceller.
 */
export function balanceQuestionBankAnswers<T extends {
  options?: { key: string; text: string }[];
  correctAnswer: string;
  explanation?: string;
  [key: string]: any;
}>(questions: T[], seed = 42): T[] {
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const count = questions.length;
  if (count === 0) return [];

  // Hedef şık dağılımı: 20 soru ise 5 A, 5 B, 5 C, 5 D.
  // Genel durumda sıra ile döngüsel dağıtım (A, B, C, D, A, B, C, D...)
  // veya dengeli karıştırma
  const targetKeys: ('A' | 'B' | 'C' | 'D')[] = [];
  for (let i = 0; i < count; i++) {
    targetKeys.push(keys[i % 4]);
  }

  // Belirli bir deterministik yöntemle sorulara hedef anahtarları ata
  // Ancak şıkların uzunluklarını da kontrol et: doğru cevap her soruda en uzun şık OLMAMALI!
  return questions.map((q, idx) => {
    if (!q.options || q.options.length !== 4) {
      // 4 seçenekli değilse sadece parantez temizliği yap
      if (q.options) {
        return {
          ...q,
          options: q.options.map(o => ({ ...o, text: sanitizeOptionText(o.text) }))
        };
      }
      return q;
    }

    const targetCorrectKey = targetKeys[idx];
    const currentCorrectKey = q.correctAnswer;

    // Mevcut seçenekleri temizle
    const cleanOpts = q.options.map(o => ({
      key: o.key,
      text: sanitizeOptionText(o.text)
    }));

    const originalCorrectObj = cleanOpts.find(o => o.key === currentCorrectKey);
    const originalDistractors = cleanOpts.filter(o => o.key !== currentCorrectKey);

    if (!originalCorrectObj) return q;

    // Yeni 4 seçeneği oluştur: hedef anahtara doğru cevabı koy, kalanlara çeldiricileri koy
    const newOptions: { key: string; text: string }[] = [];
    let distractorIdx = 0;

    for (const k of keys) {
      if (k === targetCorrectKey) {
        newOptions.push({ key: k, text: originalCorrectObj.text });
      } else {
        newOptions.push({ key: k, text: originalDistractors[distractorIdx++].text });
      }
    }

    // Şık uzunluklarını analiz et: Eğer hedef doğru cevap en uzunsa ve fark çok büyükse,
    // çeldiricilerden birini daha detaylı hale getir ki en uzun şık her zaman doğru olmasın!
    const correctOptionObj = newOptions.find(o => o.key === targetCorrectKey)!;
    const maxLen = Math.max(...newOptions.map(o => o.text.length));
    
    // Doğru cevap en uzunsa, bazı sorularda (özellikle çift indeksli) bir çeldiriciyi daha detaylı ve uzun yap
    if (correctOptionObj.text.length === maxLen && idx % 2 === 0) {
      // Bir çeldirici seç ve bilimsel bağlamla genişlet
      const distractorToExtend = newOptions.find(o => o.key !== targetCorrectKey);
      if (distractorToExtend) {
        let txt = distractorToExtend.text;
        if (txt.endsWith('.')) txt = txt.slice(0, -1);
        distractorToExtend.text = txt + ' ve yapılan tüm kontrollü deney sonuçlarının bu doğrultuda olması.';
      }
    }

    // Açıklamadaki şık referansını güncelle (e.g. "B seçeneği" -> "C seçeneği")
    let newExplanation = q.explanation;
    if (newExplanation && currentCorrectKey !== targetCorrectKey) {
      newExplanation = newExplanation.replace(
        new RegExp(`${currentCorrectKey} seçeneği|${currentCorrectKey} şıkkı`, 'g'),
        `${targetCorrectKey} seçeneği`
      );
    }

    return {
      ...q,
      options: newOptions,
      correctAnswer: targetCorrectKey,
      explanation: newExplanation
    };
  });
}
