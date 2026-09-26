import { Unit } from '../../types/curriculum';

export const grade8Unit5Data: Unit = {
  id: 'g8-unit-5',
  unitNumber: 5,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Basit Makineler',
  unitEndPageRange: 's. 215-223',
  colorTheme: {
    primary: 'from-orange-600 to-amber-700',
    border: 'border-orange-500/40',
    bg: 'bg-orange-950/40',
    accent: 'text-orange-400',
    text: 'text-orange-200'
  },
  subTopics: [
    {
      id: 'g8-u5-sub1',
      title: '1. Bölüm: Basit Makineler ve Makaralar',
      shortTitle: 'Basit Makineler & Makaralar',
      badge: 'Sayfa 196-201',
      pageRange: '196 - 201',
      concepts: ['Giriş ve Çıkış Kuvveti', 'Kuvvet Kazancı', 'Yoldan Kayıp', 'İş ve Enerjiden Kazanç Olmaz Kuralı', 'Sabit Makara', 'Hareketli Makara', 'Palangalar', 'Kuvvetin Yönünü Değiştirme'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Basit Makinelerin Genel Çalışma İlkeleri',
          paragraphs: [
            'İşlerimizi kolaylaştırmak amacıyla geliştirilen az parçalı araçlara basit makine denir. Basit makinelerde kuvvetten veya yoldan kazanç sağlanabilir.',
            'ALTIN KURAL: Basit makinelerde İŞTEN veya ENERJİDEN KAZANÇ KESİNLİKLE YOKTUR! İş kolaylığı sağlanır, aynı iş daha az kuvvetle veya kuvvetin yönü değiştirilerek yapılır.',
            'Kuvvet Kazancı: Giriş kuvveti (uygulanan kuvvet) yükün ağırlığından (çıkış kuvveti) küçükse KUVVETTEN KAZANÇ vardır. Kuvvetten kazanç ne oranda varsa, YOLDAN AYNI ORANDA KAYIP vardır (Örn: 2 kat kuvvet kazancı varsa yükü 1 metre kaldırmak için ipi 2 metre çekmek gerekir).'
          ],
          keyPoints: [
            'Kuvvet Kazancı Formülü: Yük (P) / Kuvvet (F) > 1 ise kuvvet kazancı vardır.',
            'Aynı anda hem kuvvetten hem de yoldan kazanç ASLA sağlanamaz.',
            'Sabit Makara: Dönme ekseninden bir yere sabitlenmiştir. Yalnızca KUVVETİN YÖNÜNÜ DEĞİŞTİRİR. Kuvvetten veya yoldan kazanç/kayıp yoktur (F = P, ip 1 m çekilirse yük 1 m yükselir). Bayrak direkleri, inşaat makaraları ve stor perdelerde kullanılır.',
            'Hareketli Makara: Yük makaranın eksenine asılır ve makara yükle birlikte hareket eder. 2 kat KUVVET KAZANCI, 2 kat YOLDAN KAYIP vardır (F = P / 2, ip 2 m çekilirse yük 1 m yükselir). Kuvvetin yönü değişmez.',
            'Palangalar: Sabit ve hareketli makaraların birlikte bağlandığı sistemlerdir. Hem kuvvet kazancı sağlar hem de kuvvetin yönünü değiştirebilir.'
          ],
          examNote: '📌 LGS FORMÜLÜ: Palangalarda kuvvet kazancı = Yükü taşıyan ip sayısıdır (İpin çekilme yönü yukarı doğruysa kuvvet ipi de sayılır, aşağı doğruysa sayılmaz).'
        }
      ],
      glossary: [
        { term: 'Kuvvet Kazancı', definition: 'Yükün uygulanan kuvvetten büyük olması durumu (Yük / Kuvvet > 1).' },
        { term: 'Sabit Makara', definition: 'Sadece kuvvetin yönünü değiştirerek iş kolaylığı sağlayan makara.' },
        { term: 'Hareketli Makara', definition: 'Yükle beraber hareket eden ve 2 kat kuvvet kazancı sağlayan makara.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Basit makineler kullanılarak yapılan işten ve enerjiden kazanç sağlanır.', isCorrect: false, explanation: 'Basit makinelerde işten veya enerjiden asla kazanç sağlanmaz.' },
        { id: 2, statement: 'Hareketli makarada yükü 2 metre yukarı çıkarmak için ip 4 metre çekilmelidir.', isCorrect: true, explanation: 'Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır.' },
        { id: 3, statement: 'Sabit makaralarda kuvvetin büyüklüğü yükün ağırlığına eşittir.', isCorrect: true, explanation: 'Sürtünmeler ihmal edildiğinde F = P’dir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Makaralarda İp Çekme ve Yük Hareketi',
          cognitiveLevel: 'Problem Çözme',
          contextTitle: 'Ders Kitabı Sayfa 214 Makara Düzenekleri',
          scenario: 'K düzeneğinde 10 N yük sabit makaraya, L düzeneğinde ise 10 N yük hareketli makaraya bağlanarak dengelenmiştir.',
          questionPrompt: 'Bu düzeneklerle ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'L düzeneğinde yükü 2 metre yukarı çıkarmak için ip 4 metre çekilmelidir.' },
            { key: 'B', text: 'K düzeneğinde uygulanan kuvvet L düzeneğinden daha küçüktür.' },
            { key: 'C', text: 'L düzeneğinde yapılan iş K düzeneğinden daha azdır.' },
            { key: 'D', text: 'K düzeneğinde kuvvetten 2 kat kazanç vardır.' }
          ],
          correctAnswer: 'A',
          explanation: 'L düzeneği hareketli makaradır; kuvvetten 2 kat kazanç (F = 5 N) sağlarken yoldan 2 kat kaybettirir. Yükü 2 m kaldırmak için ip 4 m çekilmelidir.'
        }
      ]
    },
    {
      id: 'g8-u5-sub2',
      title: '2. Bölüm: Kaldıraçlar',
      shortTitle: 'Kaldıraç Çeşitleri',
      badge: 'Sayfa 202-205',
      pageRange: '202 - 205',
      concepts: ['Kaldıraç Dengesi', 'Destek Noktası', 'Kuvvet Kolu', 'Yük Kolu', 'Desteğin Arada Olduğu Kaldıraç', 'Yükün Arada Olduğu Kaldıraç', 'Kuvvetin Arada Olduğu Kaldıraç', 'Archimedes'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Kaldıraç Prensibi ve Denge Şartı',
          paragraphs: [
            'Bir destek noktası etrafında serbestçe dönebilen çubuktan oluşan basit makinelere kaldıraç denir. Kaldıraçlarda denge şartı: Kuvvet × Kuvvet Kolu = Yük × Yük Kolu (F · a = P · b).',
            'Kuvvet Kolu: Kuvvetin destek noktasına olan dik uzaklığıdır. Yük Kolu: Yükün destek noktasına olan dik uzaklığıdır.',
            'Kuvvet Kazancı Kuralı: Kuvvet kolu yük kolundan ne kadar uzunsa (Kuvvet Kolu > Yük Kolu), KUVVETTEN O KADAR KAZANÇ sağlanır.'
          ],
          table: {
            headers: ['Kaldıraç Tipi', 'Ortadaki Eleman', 'Kuvvet Kazancı Durumu', 'Günlük Yaşam Örnekleri'],
            rows: [
              ['Çift Taraflı (1. Tip)', 'DESTEK ortada', 'Kollara bağlıdır (Kazanç, kayıp veya eşit olabilir)', 'Tahterevalli, pense, makas, eşit kollu terazi, keser'],
              ['Tek Taraflı (2. Tip)', 'YÜK ortada', 'DAİMA KUVVETTEN KAZANÇ vardır (Kuvvet kolu > Yük kolu)', 'El arabası, ceviz kıracağı, gazoz açacağı, menteşeli kapı'],
              ['Tek Taraflı (3. Tip)', 'KUVVET ortada', 'DAİMA KUVVETTEN KAYIP, YOLDAN KAZANÇ vardır', 'Cımbız, maşa, kürek, olta, tenis raketi, zımba']
            ]
          },
          examNote: '📌 LGS ŞİFRESİ: Yükün arada olduğu kaldıraçlarda (el arabası, ceviz kıracağı) destek uçta, kuvvet diğer uçtadır; bu yüzden kuvvet kolu daima yük kolundan uzundur ve DAİMA KUVVET KAZANCI vardır!'
        }
      ],
      glossary: [
        { term: 'Kuvvet Kolu', definition: 'Uygulanan kuvvet ile destek noktası arasındaki dik mesafe.' },
        { term: 'Yük Kolu', definition: 'Yük ile destek noktası arasındaki dik mesafe.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kuvvet kolu yük kolundan uzun olan kaldıraçlarda daima kuvvet kazancı vardır.', isCorrect: true, explanation: 'Kuvvet kolu uzadıkça uygulanacak kuvvet küçülür.' },
        { id: 2, statement: 'Cımbız ve maşada kuvvet ortada olduğu için kuvvetten kazanç sağlanır.', isCorrect: false, explanation: 'Kuvvet ortadayken kuvvet kolu kısa kalır; kuvvetten kayıp, yoldan kazanç vardır.' },
        { id: 3, statement: 'El arabasında yük destek ile kuvvet arasında yer alır.', isCorrect: true, explanation: 'Tekerlek destek, hazne yük, kollar kuvvettir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Kaldıraç Tipleri ve Örnekleri',
          cognitiveLevel: 'Sınıflandırma',
          contextTitle: 'Ders Kitabı Sayfa 221 Kaldıraç Sorusu',
          scenario: 'Ders kitabında yer alan kaldıraç çeşitleri incelenmiştir: 1. Desteğin ortada olduğu kaldıraç, 2. Yükün ortada olduğu kaldıraç, 3. Kuvvetin ortada olduğu kaldıraç.',
          questionPrompt: 'Ceviz kıracağı ve cımbız sırasıyla hangi kaldıraç tiplerine örnektir?',
          options: [
            { key: 'A', text: 'Yükün ortada olduğu kaldıraç - Kuvvetin ortada olduğu kaldıraç' },
            { key: 'B', text: 'Desteğin ortada olduğu kaldıraç - Yükün ortada olduğu kaldıraç' },
            { key: 'C', text: 'Kuvvetin ortada olduğu kaldıraç - Desteğin ortada olduğu kaldıraç' },
            { key: 'D', text: 'Her ikisi de desteğin ortada olduğu kaldıraca örnektir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Ceviz kıracağında kırılacak ceviz (yük) ortadadır (daima kuvvet kazancı). Cımbızda ise kuvvet parmaklarla ortadan uygulanır (yoldan kazanç).'
        }
      ]
    },
    {
      id: 'g8-u5-sub3',
      title: '3. Bölüm: Eğik Düzlem, Çıkrık, Vida ve Bileşik Makineler',
      shortTitle: 'Eğik Düzlem & Çıkrık',
      badge: 'Sayfa 205-214',
      pageRange: '205 - 214',
      concepts: ['Eğik Düzlem', 'Rampa Eğimi ve Kuvvet Kazancı', 'Çıkrık (Kuyular, Direksiyon, Tornavida)', 'Vida ve Vida Adımı (a)', 'Dişli Çarklar ve Kasnaklar', 'Bileşik Makine (Bisiklet)'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Eğik Düzlem ve Çıkrık Mekanizmaları',
          paragraphs: [
            'Eğik Düzlem: Ağır bir yükü belirli bir yüksekliğe (h) doğrudan kaldırmak yerine rampa üzerinde (L boyu) iterek veya çekerek çıkarmayı sağlayan düzenektir.',
            'Eğik Düzlem Kuralı: Eğik düzlemde DAİMA KUVVET KAZANCI, DAİMA YOLDAN KAYIP vardır. Kuvvet Kazancı = Eğik Düzlem Boyu (L) / Eğik Düzlem Yüksekliği (h). Rampa boyu uzadıkça ya da eğim açısı azaldıkça kuvvet kazancı artar (daha küçük kuvvetle yük çıkarılır). Yapılan iş asla değişmez.',
            'Çıkrık: Dönme eksenleri aynı, yarıçapları farklı eş merkezli iki silindirden oluşur. Yarıçapı büyük olan kuvvet kolu (R), yarıçapı küçük olan yük koludur (r). Çıkrıkta R > r olduğu için DAİMA KUVVETTEN KAZANÇ vardır. Örnekler: Su kuyusu çıkrığı, araba direksiyonu, tornavida, kapı anahtarı, kahve değirmeni, bisiklet pedalı, musluk başı.'
          ],
          keyPoints: [
            'Vida: Silindirik bir çubuk üzerine sarılmış eğik düzlemdir. Vida döndürüldüğünde iki diş arasındaki mesafe olan vida adımı (a) kadar zemine ilerler. Vida adımı küçüldükçe kuvvet kazancı artar.',
            'Dişli Çarklar ve Kasnaklar: Farklı merkezli dişliler birbirine zıt yönde döner. Yarıçapı (diş sayısı) küçük olan daha çok tur atar (n1 · r1 = n2 · r2). Eş merkezli dişlilerin ise dönme yönleri ve tur sayıları eşittir.',
            'Bileşik Makineler: İki veya daha fazla basit makinenin bir araya getirilmesiyle oluşan mekanizmalardır (Bisiklet: pedal = çıkrık, dişliler, fren kolları = kaldıraç, cıvatalar = vida).'
          ],
          examNote: '📌 LGS KURALI: Eğik düzlemde yükün ağırlığı artarsa KUVVET KAZANCI ORANI DEĞİŞMEZ! Çünkü kazanç sadece L / h oranına bağlıdır.'
        }
      ],
      glossary: [
        { term: 'Eğik Düzlem', definition: 'Bir cismi daha az kuvvetle yüksek bir yere çıkarmak için oluşturulan rampa.' },
        { term: 'Çıkrık', definition: 'Aynı eksen etrafında dönen farklı yarıçaplı silindir sistemi.' },
        { term: 'Bileşik Makine', definition: 'Birden fazla basit makinenin birleşimiyle çalışan düzenek.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Eğik düzlemin boyu sabit tutulup yüksekliği artırılırsa kuvvet kazancı artar.', isCorrect: false, explanation: 'Yükseklik arttıkça eğim artar ve kuvvet kazancı azalır.' },
        { id: 2, statement: 'Tornavida, kapı anahtarı ve araba direksiyonu çıkrık prensibiyle çalışır.', isCorrect: true, explanation: 'Geniş yarıçaplı kısımdan kuvvet uygulanıp dar mil döndürülür.' },
        { id: 3, statement: 'Eğik düzlemde her zaman yoldan kazanç vardır.', isCorrect: false, explanation: 'Eğik düzlemde DAİMA yoldan kayıp, kuvvetten kazanç vardır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Eğik Düzlemde Kuvvet Kazancı',
          cognitiveLevel: 'Deney Karşılaştırma',
          contextTitle: 'Ders Kitabı Sayfa 222 Soru 20',
          scenario: 'Özdeş iki yük sürtünmesiz eğik düzlemlerle çıkarılmaktadır: 1. eğik düzlemin boyu 6 m, yüksekliği 2 m; 2. eğik düzlemin boyu 6 m, yüksekliği 3 m’dir.',
          questionPrompt: 'Bu iki düzenek karşılaştırıldığında hangisi doğrudur?',
          options: [
            { key: 'A', text: '1. düzenekte kuvvet kazancı daha fazladır ve cisme uygulanan kuvvet daha küçüktür.' },
            { key: 'B', text: '2. düzenekte yapılan iş 1. düzenekten daha azdır.' },
            { key: 'C', text: '2. düzenekte kuvvet kazancı daha fazladır.' },
            { key: 'D', text: 'Her iki düzenekte de uygulanan kuvvetler birbirine eşittir.' }
          ],
          correctAnswer: 'A',
          explanation: '1. düzenekte eğim daha azdır (L/h = 6/2 = 3 kat kazanç). 2. düzenekte kazanç 6/3 = 2 kattır. Dolayısıyla 1. düzenekte kuvvet kazancı fazla ve uygulanan kuvvet daha küçüktür.'
        }
      ]
    }
  ]
};
