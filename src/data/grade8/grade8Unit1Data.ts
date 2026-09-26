import { Unit } from '../../types/curriculum';

export const grade8Unit1Data: Unit = {
  id: 'g8-unit-1',
  unitNumber: 1,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Mevsimler ve İklim',
  unitEndPageRange: 's. 39-47',
  colorTheme: {
    primary: 'from-indigo-600 to-sky-700',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-950/40',
    accent: 'text-indigo-400',
    text: 'text-indigo-200'
  },
  subTopics: [
    {
      id: 'g8-u1-sub1',
      title: '1. Bölüm: Mevsimlerin Oluşumu',
      shortTitle: 'Mevsimlerin Oluşumu',
      badge: 'Sayfa 22-28',
      pageRange: '22 - 28',
      concepts: ['Dünya’nın Dönme Ekseni', 'Eksen Eğikliği (23° 27\')', 'Dolanma Düzlemi', 'Ekvator Düzlemi', 'Güneş Işınlarının Geliş Açısı', 'Aydınlanma Alanı ve Gölge Boyu', '21 Haziran Gün Dönümü', '21 Aralık Gün Dönümü', '21 Mart - 23 Eylül Ekinoksu', 'Yengeç ve Oğlak Dönencesi'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Mevsimlerin Oluşma Sebepleri ve Eksen Eğikliği',
          paragraphs: [
            'Kuzey ve Güney Kutup noktaları ile Dünya’nın merkezinden geçtiği varsayılan hayalî çizgiye Dünya’nın dönme ekseni denir. Dünya’nın dönme ekseni, dolanma düzlemine göre 23° 27\' (23 derece 27 dakika) eğiktir.',
            'Mevsimlerin oluşmasının iki temel sebebi vardır: 1. Dünya’nın dönme eksenindeki 23° 27\'lik eğiklik. 2. Dünya’nın Güneş etrafındaki eliptik dolanma hareketi (365 gün 6 saat).',
            'Dünya’nın Güneş’e olan mesafesinin değişmesi (yaklaşıp uzaklaşması) MEVSİMLERİN OLUŞUMUNDA KESİNLİKLE ETKİLİ DEĞİLDİR! Örneğin Kuzey Yarım Küre kış mevsimini yaşarken Dünya Güneş’e en yakın konumdadır (3 Ocak - Günberi - 147 milyon km).'
          ],
          keyPoints: [
            'Güneş ışınları dik veya dike yakın açılarla (büyük açıyla) geldiğinde dar bir alanı aydınlatır, birim yüzeye düşen ışık enerjisi fazla olur ve sıcaklık yükselir (YAZ mevsimi). Gölge boyu ise cismin boyundan kısa veya sıfır olur.',
            'Güneş ışınları eğik açılarla (küçük açıyla) geldiğinde geniş bir alanı aydınlatır, birim yüzeye düşen ışık enerjisi azalır ve sıcaklık düşük olur (KIŞ mevsimi). Gölge boyu cismin boyundan uzun olur.',
            '45°lik geliş açısında gölge boyu cismin boyuna tam eşit olur.',
            'Dünya kendi ekseni etrafında batıdan doğuya (saatin tersi yönünde) 24 saatte döner ve gece-gündüz oluşur.'
          ]
        },
        {
          heading: 'Mevsimlerin Başlangıç Tarihleri ve Özel Konumlar',
          paragraphs: [
            'Dönence, Güneş ışınlarının yeryüzünde dik açıyla düştüğü en uç sınırlardır. Kuzey Yarım Küre’deki dönenceye Yengeç Dönencesi, Güney Yarım Küre’deki dönenceye Oğlak Dönencesi adı verilir.',
            '21 Haziran: Güneş ışınları öğle vakti Yengeç Dönencesi’ne 90° dik açıyla düşer. Kuzey Yarım Küre’de yaz, Güney Yarım Küre’de kış başlangıcıdır. KYK’de en uzun gündüz, GYK’de en uzun gece yaşanır. Kuzey Kutup Dairesi’nde 24 saat gündüz görülür.',
            '21 Aralık: Güneş ışınları öğle vakti Oğlak Dönencesi’ne 90° dik açıyla düşer. Güney Yarım Küre’de yaz, Kuzey Yarım Küre’de kış başlangıcıdır. GYK’de en uzun gündüz, KYK’de en uzun gece yaşanır. Güney Kutup Dairesi’nde 24 saat gündüz görülür.',
            '21 Mart ve 23 Eylül (Ekinoks): Güneş ışınları öğle vakti Ekvator çizgisine dik açıyla düşer. Eksen eğikliği etkisi ortadan kalkar ve Dünya’nın her yerinde 12 saat gece, 12 saat gündüz (gece-gündüz eşitliği) yaşanır.'
          ],
          table: {
            headers: ['Önemli Tarih', 'Işınların Dik Geldiği Enlem', 'Kuzey Yarım Küre', 'Güney Yarım Küre', 'Gece-Gündüz Durumu'],
            rows: [
              ['21 Haziran (Gün dönümü)', 'Yengeç Dönencesi (23° 27\' K)', 'Yaz başlangıcı', 'Kış başlangıcı', 'KYK en uzun gündüz, GYK en uzun gece'],
              ['21 Aralık (Gün dönümü)', 'Oğlak Dönencesi (23° 27\' G)', 'Kış başlangıcı', 'Yaz başlangıcı', 'KYK en uzun gece, GYK en uzun gündüz'],
              ['21 Mart (Ekinoks)', 'Ekvator (0°)', 'İlkbahar başlangıcı', 'Sonbahar başlangıcı', 'Tüm Dünya’da Gece = Gündüz (12 saat)'],
              ['23 Eylül (Ekinoks)', 'Ekvator (0°)', 'Sonbahar başlangıcı', 'İlkbahar başlangıcı', 'Tüm Dünya’da Gece = Gündüz (12 saat)']
            ]
          },
          examNote: '📌 LGS SINAV ŞİFRESİ: Güneş ışınının geliş açısı arttıkça birim alana aktarılan ısı enerjisi artar, sıcaklık yükselir, gölge boyu küçülür. Ekvator üzerinde gece-gündüz süresi yılın her günü daima 12 saat eşittir.'
        }
      ],
      glossary: [
        { term: 'Dönme Ekseni', definition: 'Kuzey ve Güney kutup noktaları ile Dünya’nın merkezinden geçtiği varsayılan 23° 27\' eğik hayalî hat.' },
        { term: 'Dolanma Düzlemi', definition: 'Dünya’nın Güneş çevresinde dolanırken takip ettiği yörüngenin oluşturduğu düzlem.' },
        { term: 'Yengeç Dönencesi', definition: 'Kuzey Yarım Küre’de Güneş ışınlarının 21 Haziran’da dik açıyla düştüğü 23° 27\' kuzey enlemi.' },
        { term: 'Oğlak Dönencesi', definition: 'Güney Yarım Küre’de Güneş ışınlarının 21 Aralık’ta dik açıyla düştüğü 23° 27\' güney enlemi.' },
        { term: 'Ekinoks', definition: 'Güneş ışınlarının Ekvator’a dik düştüğü, aydınlanma çemberinin kutuplardan geçtiği ve tüm dünyada gece-gündüz sürelerinin eşitlendiği 21 Mart ve 23 Eylül tarihleri.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Mevsimlerin oluşumunda Dünya’nın Güneş’e olan uzaklığının değişmesi belirleyici rol oynar.', isCorrect: false, explanation: 'Mevsimlerin nedeni Güneş’e olan mesafe değil; eksen eğikliği ve Güneş etrafında dolanmadır.' },
        { id: 2, statement: '21 Haziran’da Güneş ışınları öğle vakti Yengeç Dönencesi’ne 90 derecelik dik açıyla düşer.', isCorrect: true, explanation: '21 Haziran yaz gün dönümünde Yengeç Dönencesi dik açı alır.' },
        { id: 3, statement: 'Güneş ışınları eğik açıyla geldiğinde birim yüzeye düşen ışık enerjisi miktarı artar.', isCorrect: false, explanation: 'Işınlar eğik geldiğinde geniş alana dağılır ve birim yüzeye düşen enerji azalır.' },
        { id: 4, statement: '21 Mart ve 23 Eylül tarihlerinde Dünya genelinde gece ve gündüz süreleri birbirine eşittir.', isCorrect: true, explanation: 'Ekinoks tarihlerinde Dünya genelinde 12 saat gündüz, 12 saat gece yaşanır.' },
        { id: 5, statement: 'Güneş ışınlarının geliş açısı büyüdükçe yatay zemine dikilmiş bir çubuğun gölge boyu kısalır.', isCorrect: true, explanation: 'Dik açıda gölge boyu sıfırdır; açı küçüldükçe gölge uzar.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Güneş Işınlarının Açısı ve Gölge Boyu',
          cognitiveLevel: 'Deney ve Grafik Yorumlama',
          contextTitle: 'Özdeş Çubukların Gölge Boyu Deneyi',
          scenario: 'Fen bilimleri öğretmeni, 21 Haziran tarihinde aynı boydaki iki özdeş çubuğu öğle saat 12:00’de biri Türkiye’deki Sinop iline, diğeri ise Avustralya’daki Sidney şehrine dikerek gölge boylarını ölçmüştür.',
          questionPrompt: 'Yapılan bu ölçüm ve elde edilen sonuçlarla ilgili olarak aşağıdakilerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Sinop’ta birim alana düşen ısı enerjisi Sidney’den fazla olup Sinop’taki çubuğun gölge boyu daha kısadır.' },
            { key: 'B', text: 'Sidney’deki çubuğun gölge boyu Sinop’takinden daha kısa olarak ölçülür.' },
            { key: 'C', text: 'Her iki çubuğun gölge boyu 21 Haziran günü birbirine eşit olur.' },
            { key: 'D', text: 'Sidney’de yaz mevsimi başladığı için çubuğun gölgesi öğle vakti oluşmaz.' }
          ],
          correctAnswer: 'A',
          explanation: '21 Haziran’da KYK (Sinop) yaz başlangıcındadır ve ışınları büyük açıyla alır; birim yüzeye düşen enerji fazla, gölge boyu kısadır. GYK (Sidney) ise kış başlangıcındadır ve gölge uzundur.'
        }
      ]
    },
    {
      id: 'g8-u1-sub2',
      title: '2. Bölüm: İklim ve Hava Hareketleri',
      shortTitle: 'İklim ve Hava Hareketleri',
      badge: 'Sayfa 29-38',
      pageRange: '29 - 38',
      concepts: ['Hava Olayı', 'Atmosfer', 'Meteoroloji', 'Meteorolog', 'Higrometre', 'Yağmur, Kar, Dolu, Kırağı, Sis', 'Alçak Basınç Alanı', 'Yüksek Basınç Alanı', 'Rüzgâr Oluşumu', 'İklim', 'Klimatoloji', 'Klimatolog', 'Küresel Isınma ve Sera Etkisi', 'IPCC'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'İklim ve Hava Olayları Arasındaki Temel Farklar',
          paragraphs: [
            'Hava Olayı: Belirli bir yerde ve kısa bir süre (günlük, saatlik) içinde etkili olan atmosfer koşullarıdır. Değişkenlik fazladır ve tahminidir. İnceleyen bilim dalı Meteoroloji, uzmanı meteorologdur.',
            'İklim: Oldukça geniş bir bölgede ve uzun yıllar (en az 35-40 yıl) boyunca değişmeyen hava şartlarının ortalamasıdır. Değişkenlik çok azdır ve kesindir. İnceleyen bilim dalı Klimatoloji (İklim bilimi), uzmanı klimatologdur (iklim bilimci).'
          ],
          table: {
            headers: ['Özellik', 'Hava Olayları', 'İklim'],
            rows: [
              ['Alan Büyüklüğü', 'Dar bir alanda etkilidir (ilçe, şehir)', 'Geniş bir bölgede etkilidir (bölge, ülke)'],
              ['Zaman Dilimi', 'Kısa sürelidir (saatlik, günlük, haftalık)', 'Uzun sürelidir (en az 35-40 yıllık ortalama)'],
              ['Değişkenlik', 'Değişkenlik fazladır, gün içinde değişebilir', 'Değişkenlik azdır, kolay kolay değişmez'],
              ['Kullanılan İfadeler', 'Güneşli, yağmurlu, rüzgârlı, karlı, sisli', 'Sıcak, kurak, ılık, soğuk, yağışlı'],
              ['Bilim Dalı ve Uzmanı', 'Meteoroloji - Meteorolog', 'Klimatoloji - Klimatolog']
            ]
          }
        },
        {
          heading: 'Basınç Alanları ve Rüzgârın Oluşum Mekanizması',
          paragraphs: [
            'Sıcaklık farkları havanın yoğunluğunu ve basıncını değiştirir. Yüksek basınç alanından alçak basınç alanına doğru yatay yönde gerçekleşen hava hareketine rüzgâr denir.',
            'Alçak Basınç (AB) Alanı: Hava sıcaktır. Isınan hava moleküllerinin hareketi artar, birbirinden uzaklaşır, yoğunluğu azalır ve yükselici hava hareketi yapar. Hava bulutludur ve yağış görülme ihtimali fazladır.',
            'Yüksek Basınç (YB) Alanı: Hava soğuktur. Soğuyan hava molekülleri birbirine yaklaşır, yoğunluğu artar ve alçalıcı hava hareketi yapar. Yüzeye uygulanan basınç artar. Hava açıktır, bulut ve yağış görülme ihtimali çok azdır.'
          ],
          keyPoints: [
            'Rüzgâr DAİMA Yüksek Basınç (Soğuk) alanından Alçak Basınç (Sıcak) alanına doğru yatay hareket eder.',
            'İki bölge arasındaki basınç farkı ne kadar büyük olursa rüzgâr o kadar şiddetli ve hızlı eser.',
            'Yağmur: Atmosferdeki su buharının gökyüzünde soğuk havayla karşılaşıp yoğuşarak su damlacıklarına dönüşmesi.',
            'Kar: Su buharının 0 °C altındaki sıcaklıklarda doğrudan buz kristallerine dönüşerek yeryüzüne inmesi.',
            'Dolu: Su damlacıklarının aniden şiddetli soğuk havayla karşılaşıp donarak buz parçaları hâlinde inmesi.',
            'Kırağı: Yeryüzüne yakın yerlerdeki su buharının gece soğuk zemin ve yapraklar üzerinde buz kristallerine dönüşmesi.',
            'Sis: Yeryüzüne yakın su buharının havada asılı minik su damlacıkları oluşturması.'
          ]
        },
        {
          heading: 'Küresel Isınma, Sera Etkisi ve İklim Değişikliği',
          paragraphs: [
            'Fosil yakıtların (kömür, petrol, doğal gaz) aşırı tüketimi sonucu atmosfere salınan karbondioksit (CO2), metan (CH4) ve su buharı gibi sera gazları Güneş’ten gelen ışınları tutarak Dünya’nın gereğinden fazla ısınmasına yol açar. Buna sera etkisi ve küresel ısınma denir.',
            'Küresel ısınma sonucunda buzulların erimesi, deniz seviyelerinin yükselmesi, kuraklık, çölleşme, ekstrem hava olayları ve su kaynaklarının tükenmesi tehlikesi ortaya çıkmaktadır. IPCC raporlarına göre ülkemiz Akdeniz havzasında kuraklık ve su stresi riskine en açık bölgelerdendir.'
          ],
          examNote: '📌 LGS KURALI: Rüzgâr her zaman Soğuk Bölgeden (YB) Sıcak Bölgeye (AB) doğru eser. Gündüz karalar denizlerden daha çabuk ısındığı için rüzgâr Denizden Karaya; gece ise karalar daha hızlı soğuduğu için Karadan Denize eser.'
        }
      ],
      glossary: [
        { term: 'Alçak Basınç', definition: 'Sıcak havanın yükselmesiyle yüzeydeki hava yoğunluğu ve basıncının azaldığı, bulutlu ve yağış ihtimali yüksek alan.' },
        { term: 'Yüksek Basınç', definition: 'Soğuyan havanın alçalmasıyla yüzeydeki gaz yoğunluğu ve basıncının arttığı, açık ve bulutsuz alan.' },
        { term: 'Rüzgâr', definition: 'Yüksek basınç alanından alçak basınç alanına doğru esen yatay hava akımı.' },
        { term: 'Higrometre', definition: 'Havadaki nem (su buharı) miktarını ölçen meteorolojik alet.' },
        { term: 'Sera Etkisi', definition: 'Atmosferdeki sera gazlarının (CO2, CH4) yer yüzeyinden yansıyan kızılötesi ışınları tutarak gezegeni ısıtması olayı.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Rüzgâr, yüksek basınç alanından alçak basınç alanına doğru yatay yönde hareket eder.', isCorrect: true, explanation: 'Hava daima yüksek basınçtan alçak basınca akar.' },
        { id: 2, statement: 'Alçak basınç alanlarında alçalıcı hava hareketleri görülür ve hava genellikle açıktır.', isCorrect: false, explanation: 'Alçak basınçta sıcak hava yükselir (yükselici hava hareketi) ve bulut oluşur.' },
        { id: 3, statement: 'Bir yerin iklimi en az 35-40 yıllık ortalama hava durumu verileriyle belirlenir.', isCorrect: true, explanation: 'İklim uzun yılların ortalamasıdır ve değişkenliği azdır.' },
        { id: 4, statement: 'Kırağılaşma, gökyüzündeki bulutların yağmura dönüşmesi olayıdır.', isCorrect: false, explanation: 'Kırağı yeryüzüne yakın nesnelerin üzerindeki su buharının buz kristallerine dönüşmesidir.' },
        { id: 5, statement: 'Fosil yakıtların kullanımının artması atmosferdeki sera gazlarını artırarak küresel ısınmaya neden olur.', isCorrect: true, explanation: 'Kömür ve petrol yanması CO2 salımını artırarak sera etkisini körükler.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Basınç Merkezleri ve Rüzgâr Yönü',
          cognitiveLevel: 'Mantık Muhakeme',
          contextTitle: 'Komşu İki Şehir Arasındaki Hava Akımı',
          scenario: 'A ve B şehirlerinde yapılan ölçümlerde A şehrinde sıcaklığın 12 °C olduğu, havanın açık ve bulutsuz olduğu; B şehrinde ise sıcaklığın 28 °C olduğu ve gökyüzünde yoğun bulutlanma meydana geldiği tespit edilmiştir.',
          questionPrompt: 'Bu iki şehir arasındaki hava hareketleri ve basınç durumları ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'A şehri Alçak Basınç alanı olup rüzgâr B şehrinden A şehrine doğru eser.' },
            { key: 'B', text: 'A şehri Yüksek Basınç, B şehri Alçak Basınç alanıdır ve rüzgâr A’dan B’ye doğru eser.' },
            { key: 'C', text: 'B şehrinde alçalıcı hava hareketleri görülür ve yağış beklenmez.' },
            { key: 'D', text: 'Her iki şehirde de hava basıncı birbirine eşit olduğu için rüzgâr oluşmaz.' }
          ],
          correctAnswer: 'B',
          explanation: 'Soğuk ve açık olan A şehri Yüksek Basınç, sıcak ve bulutlu olan B şehri Alçak Basınçtır. Rüzgâr her zaman Yüksek Basınçtan Alçak Basınca (A’dan B’ye) doğru eser.'
        }
      ]
    }
  ]
};
