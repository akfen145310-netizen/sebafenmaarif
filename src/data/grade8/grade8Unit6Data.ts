import { Unit } from '../../types/curriculum';

export const grade8Unit6Data: Unit = {
  id: 'g8-unit-6',
  unitNumber: 6,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Enerji Dönüşümleri ve Çevre Bilimi',
  unitEndPageRange: 's. 264-271',
  colorTheme: {
    primary: 'from-teal-600 to-emerald-700',
    border: 'border-teal-500/40',
    bg: 'bg-teal-950/40',
    accent: 'text-teal-400',
    text: 'text-teal-200'
  },
  subTopics: [
    {
      id: 'g8-u6-sub1',
      title: '1. Bölüm: Besin Zinciri ve Enerji Akışı',
      shortTitle: 'Besin Zinciri & Enerji Akışı',
      badge: 'Sayfa 226-232',
      pageRange: '226 - 232',
      concepts: ['Besin Zinciri', 'Üreticiler (Ototrof)', 'Tüketiciler (Heterotrof)', 'Ayrıştırıcılar (Saprofit)', 'Ekoloji Piramidi', '%10 Enerji Aktarımı Kuralı', 'Biyolojik Birikim (Zehir)', 'Biyokütle'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Besin Zincirinin Canlıları ve Görevleri',
          paragraphs: [
            'Canlılar yaşamlarını sürdürebilmek için enerjiye ihtiyaç duyar. Güneş’ten gelen ışık enerjisini fotosentez ile kimyasal besin enerjisine çeviren canlılar ile diğer canlılar arasındaki beslenme ilişkisine besin zinciri denir.',
            'Üreticiler: Kendi besinini kendi üreten canlılardır (Yeşil bitkiler, siyanobakteriler, algler ve fitoplanktonlar). Besin zincirinin daima İLK basamağında yer alırlar.',
            'Tüketiciler: Kendi besinini üretemeyip hazır alan canlılardır: 1. Otçullar (Birincil Tüketiciler): Doğrudan üreticileri yer (koyun, inek, çekirge, tavşan). 2. Etçiller (İkincil ve Üçüncül Tüketiciler): Otçulları veya diğer etçilleri yer (tilki, yılan, aslan, kartal). 3. Hepçiller: Hem bitki hem et tüketir (insan, ayı, maymun, tavuk).',
            'Ayrıştırıcılar: Ölü bitki ve hayvan kalıntılarını çürüterek inorganik maddelere dönüştüren bakteri ve mantarlardır. Besin zincirinin ve ekoloji piramidinin HER BASAMAĞINDA yer alırlar; madde döngüsünün kilit taşıdırlar.'
          ],
          keyPoints: [
            'Ekoloji Piramidinde Aşağıdan Yukarıya Doğru Çıkıldıkça: 1. Aktarılan enerji miktarı AZALIR (Her basamakta enerjinin yaklaşık %10’u bir üst basamağa aktarılır, %90’ı ısı ve yaşam faaliyetinde harcanır). 2. Toplam canlı sayısı (Birey sayısı) AZALIR. 3. Toplam Biyokütle AZALIR. 4. Canlıların vücudunda biriken zehirli madde miktarı (BİYOLOJİK BİRİKİM) ARTAR. 5. Canlıların vücut büyüklüğü genellikle ARTAR.',
            'Biyolojik Birikim: Suda çözünmeyen ağır metaller (cıva, kurşun) ve tarım ilaçları (DDT) piramidin en tepesindeki canlıda (yırtıcı kartal, insan) EN FAZLA miktarda birikir.'
          ],
          examNote: '📌 LGS SORUSU: Piramidin tepesindeki canlı (üçüncül tüketici) biyolojik birikimi EN FAZLA, aktarılan enerjisi EN AZ olan canlıdır!'
        }
      ],
      glossary: [
        { term: 'Üretici', definition: 'Fotosentez yoluyla kendi organik besinini üreten bitki, alg ve bakteriler.' },
        { term: 'Ayrıştırıcı', definition: 'Ölü canlı kalıntılarını parçalayarak toprağa mineral kazandıran bakteri ve mantarlar.' },
        { term: 'Biyolojik Birikim', definition: 'Besin zinciri boyunca üst basamaklara doğru zehirli kimyasalların artarak birikmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Ayrıştırıcı canlılar besin piramidinin sadece en alt basamağında bulunur.', isCorrect: false, explanation: 'Ayrıştırıcılar besin zincirinin ve piramidinin her basamağında etkilidir.' },
        { id: 2, statement: 'Ekoloji piramidinde yukarı çıkıldıkça aktarılan enerji miktarı her basamakta %10 oranında aktarılır.', isCorrect: true, explanation: '%10 kuralına göre enerjinin %90’ı kaybolur, %10’u üste geçer.' },
        { id: 3, statement: 'Biyolojik birikim (zehir oranı) besin zincirinin başlangıcındaki üreticilerde en fazladır.', isCorrect: false, explanation: 'Zehir birikimi piramidin en üstündeki son tüketicide en fazladır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Ekoloji Piramidinde Değişimler',
          cognitiveLevel: 'Şema Analizi',
          contextTitle: 'Ders Kitabı Sayfa 232 Soru 3',
          scenario: 'Ders kitabındaki besin piramidinde üreticiden son tüketiciye doğru sıralanan canlılarda çeşitli parametreler incelenmiştir.',
          questionPrompt: 'Üreticilerden tepeye doğru çıkıldıkça gerçekleşen değişimlerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Biyolojik birikim artarken, aktarılan enerji miktarı ve birey sayısı azalır.' },
            { key: 'B', text: 'Aktarılan enerji miktarı artarken biyolojik birikim azalır.' },
            { key: 'C', text: 'Birey sayısı ve toplam biyokütle sürekli artış gösterir.' },
            { key: 'D', text: 'Her basamağa aktarılan enerji miktarı tamamen eşit kalır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Piramitte yukarı çıkıldıkça aktarılan enerji ve birey sayısı hızla azalır; vücutta biriken zehirli atık miktarı (biyolojik birikim) ise katlanarak artar.'
        }
      ]
    },
    {
      id: 'g8-u6-sub2',
      title: '2. Bölüm: Enerji Dönüşümleri (Fotosentez ve Solunum)',
      shortTitle: 'Fotosentez & Solunum',
      badge: 'Sayfa 233-241',
      pageRange: '233 - 241',
      concepts: ['Fotosentez', 'Kloroplast ve Klorofil', 'Glikoz ve Oksijen Üretimi', 'Fotosentez Hızını Etkileyen Faktörler', 'Engelmann Deneyi (Işık Rengi)', 'Oksijenli Solunum (Mitokondri)', 'Oksijensiz Solunum', 'Fermantasyon (Etil Alkol ve Laktik Asit)'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Fotosentez Mekanizması ve Hızını Etkileyen Faktörler',
          paragraphs: [
            'Fotosentez: Klorofil bulunduran üretici canlıların, güneş ışığı enerjisini kullanarak su (H2O) ve karbondioksiti (CO2) besin (glikoz) ve oksijene (O2) dönüştürmesi olayıdır: 6CO2 + 6H2O --(Işık/Klorofil)--> C6H12O6 + 6O2.',
            'Işık Şartı: Fotosentez SADECE IŞIKLI ORTAMDA (güneş ışığında veya yeterli enerjideki yapay ışıkta) gerçekleşir. Karanlıkta fotosentez DURUR.',
            'Fotosentez Hızına Etki Eden Faktörler: 1. Işık Rengi (Engelmann Deneyi): Fotosentez en hızlı MOR ve KIRMIZI ışıkta, en yavaş ise YEŞİL ışıkta gerçekleşir (yeşil ışık yansıtıldığı için soğurulmaz). 2. Sıcaklık: En uygun sıcaklık 25-35 °C arasıdır (enzimler 50 °C üzerinde bozulur). 3. Işık Şiddeti ve CO2 Miktarı: Belirli bir değere kadar fotosentez hızını artırır, sonra sabit tutar. 4. Su Miktarı: Hücrede su oranı %15’in altına düşerse fotosentez durur.'
          ]
        },
        {
          heading: 'Solunum Çeşitleri ve Enerji (ATP) Üretimi',
          paragraphs: [
            'Hücresel Solunum: Canlıların besin maddelerini parçalayarak yaşamsal faaliyetleri için gerekli kimyasal bağ enerjisini (ATP) üretmesidir. Solunum GECE VE GÜNDÜZ KESİNTİSİZ devam eder.',
            '1. Oksijenli Solunum: Oksijen kullanılarak glikozun karbondioksit ve suya kadar parçalanmasıdır. Çok hücrelilerde MİTOKONDRİDE gerçekleşir ve bol enerji üretir: Glikoz + Oksijen ➔ Karbondioksit + Su + 30-32 ATP.',
            '2. Oksijensiz Solunum: Oksijen kullanılmadan besinlerin sitoplazmada enzimlerle parçalanmasıdır; bazı bakterilerde görülür.',
            '3. Fermantasyon: Oksijensiz ortamda sitoplazmada enzimlerle sınırlı enerji (2 ATP) üretilmesidir: a) Etil Alkol Fermantasyonu: Maya mantarlarınca yapılır; Karbondioksit (CO2) gazı ve etil alkol çıkar (Hamurun kabarması). b) Laktik Asit Fermantasyonu: Yoğurt bakterileri ve aşırı çalışan çizgili kaslarda gerçekleşir; CO2 ÇIKMAZ, laktik asit kaslarda yorgunluğa sebep olur.'
          ],
          table: {
            headers: ['Özellik', 'Fotosentez', 'Oksijenli Solunum'],
            rows: [
              ['Gerçekleştiği Canlı', 'Sadece üretici (klorofilli) canlılar', 'Tüm canlılar (hayvan, bitki, mantar, bakteri)'],
              ['Zamanı', 'Sadece ışık varlığında (gündüz)', 'Gece ve gündüz kesintisiz'],
              ['Gerçekleştiği Organel', 'Kloroplast', 'Mitokondri'],
              ['Kullanılan Maddeler', 'Karbondioksit (CO2) ve Su (H2O)', 'Besin (Glikoz) ve Oksijen (O2)'],
              ['Üretilen Maddeler', 'Besin (Glikoz) ve Oksijen (O2)', 'Karbondioksit, Su ve Enerji (ATP)'],
              ['Madde Miktarı Değişimi', 'Ağırlık ve kuru madde artar', 'Ağırlık ve besin miktarı azalır']
            ]
          },
          examNote: '📌 LGS SORUSU: Bitkiler gündüz hem fotosentez hem solunum yapar; gece ise SADECE SOLUNUM yapar!'
        }
      ],
      glossary: [
        { term: 'Fotosentez', definition: 'Işık enerjisiyle su ve karbondioksitten besin ve oksijen üretilmesi.' },
        { term: 'ATP', definition: 'Hücrelerin doğrudan kullandığı enerji para birimi (Adenozin Trifosfat).' },
        { term: 'Fermantasyon', definition: 'Oksijensiz ortamda besinin parçalanarak etil alkol veya laktik aside dönüştürülmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Bitkiler geceleri karanlıkta fotosentez yapmaya devam eder.', isCorrect: false, explanation: 'Fotosentez için ışık şarttır; karanlıkta sadece solunum yaparlar.' },
        { id: 2, statement: 'Fotosentez hızı en fazla yeşil ışıkta, en az mor ışıkta gerçekleşir.', isCorrect: false, explanation: 'Tam tersi! En hızlı mor ve kırmızıda, en yavaş yeşil ışıktadır.' },
        { id: 3, statement: 'Yoğurt mayalanması laktik asit fermantasyonu ile gerçekleşir.', isCorrect: true, explanation: 'Süt bakterileri laktik asit üreterek yoğurda dönüştürür.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Fotosentez ve Kireç Suyu Deneyi',
          cognitiveLevel: 'Deney Yorumlama',
          contextTitle: 'Ders Kitabı Sayfa 267 Soru 7',
          scenario: '25 °C’ta ışık alan iki özdeş cam fanustan 1. sine uğur böceği ve yeşil saksı bitkisi, 2. sine ise sadece uğur böceği ve kireç suyu konulmuştur (Kireç suyu CO2 ile bulanır).',
          questionPrompt: '1. düzenekte uğur böceğinin çok daha uzun süre yaşamasının temel nedeni hangisidir?',
          options: [
            { key: 'A', text: 'Bitkinin fotosentez ile ürettiği oksijeni böceğin solunumda kullanması ve böceğin verdiği CO2’yi bitkinin fotosentezde tüketmesi.' },
            { key: 'B', text: 'Bitkinin odadaki ışığı tamamen soğurması.' },
            { key: 'C', text: 'Kireç suyunun oksijen gazını tüketmesi.' },
            { key: 'D', text: 'Uğur böceğinin bitki yapraklarını yiyerek enerji kazanması.' }
          ],
          correctAnswer: 'A',
          explanation: 'Bitki ile böcek arasında fotosentez-solunum dengesi kurulur: Bitki O2 üretir böcek tüketir; böcek CO2 üretir bitki fotosentezde tüketir.'
        }
      ]
    },
    {
      id: 'g8-u6-sub3',
      title: '3. Bölüm: Madde Döngüleri ve Çevre Sorunları',
      shortTitle: 'Madde Döngüleri & İklim',
      badge: 'Sayfa 242-253',
      pageRange: '242 - 253',
      concepts: ['Su Döngüsü', 'Karbon Döngüsü', 'Oksijen Döngüsü', 'Azot Döngüsü', 'Azot Bağlayıcı ve Ayrıştırıcı Bakteriler', 'Sera Gazları ve Küresel Isınma', 'Ozon Tabakası', 'Ekolojik Ayak İzi'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Madde Döngüleri (Su, Karbon, Oksijen, Azot)',
          paragraphs: [
            'Canlılığın sürmesi için gerekli olan inorganik maddelerin canlılar ve cansız çevre arasındaki kesintisiz dolaşımına madde döngüsü denir.',
            'Su Döngüsü: Okyanus, göl ve nehirlerden buharlaşma, canlılardan terleme ve solunumla atmosfere çıkan su buharı soğuyarak yoğuşur ve yağış (yağmur, kar) olarak yer üstü ve yer altı sularına döner.',
            'Karbon ve Oksijen Döngüsü: Birbiriyle doğrudan bağlantılıdır. Karbon fotosentez ile atmosferden alınıp besin zincirine geçer; solunum, yanma ve fosil yakıtların kullanımıyla CO2 olarak atmosfere geri döner. Fotosentez oksijen üretir, solunum ve yanma olayları oksijen tüketir.',
            'Azot Döngüsü: Havanın %78’ini azot (N2) oluşturur ancak canlılar bunu doğrudan soluyamaz. Şimşek ve yıldırım olayları ile baklagil köklerindeki azot bağlayıcı bakteriler azotu toprağa bağlar. Bitkiler bu azotu protein yapımında kullanır. Ayrıştırıcılar ve azot ayrıştırıcı bakteriler azotu tekrar gaza çevirerek atmosfere verir.'
          ]
        },
        {
          heading: 'Çevre Sorunları ve Ekolojik Ayak İzi',
          paragraphs: [
            'Küresel İklim Değişikliği: Sera gazlarının (CO2, CH4) aşırı artması sonucu küresel ortalama sıcaklıkların artması, kuraklık, taşkınlar ve çölleşmedir.',
            'Ekolojik Ayak İzi: Bir insanın veya toplumun tükettiği doğal kaynakları üretmek ve oluşturduğu atıkları yok etmek için gereken verimli toprak ve su alanının ölçüsüdür (Bileşenleri: Karbon, tarım, orman, otlak, yapılaşmış alan, balıkçılık sahası).',
            'Dünya Limit Aşım Günü: İnsanlığın doğadan 1 yıllık kaynak talebinin dünyanın o yılki yenileme kapasitesini (biyokapasite) aştığı tarihtir.'
          ],
          examNote: '📌 LGS SORUSU: Azot gazını toprağa bağlayan canlılar baklagil (fasulye, nohut) köklerinde yaşayan AZOT BAĞLAYICI BAKTERİLERDİR.'
        }
      ],
      glossary: [
        { term: 'Madde Döngüsü', definition: 'Su, karbon, azot ve oksijenin canlı ve cansız ortam arasındaki çevrimi.' },
        { term: 'Ekolojik Ayak İzi', definition: 'Tüketilen kaynaklar ve üretilen atıklar için gezegenden talep edilen biyolojik verimli alan.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'İnsanlar ve hayvanlar havadaki serbest azot gazını doğrudan solunumla alarak kullanabilirler.', isCorrect: false, explanation: 'Azot gazı doğrudan alınamaz; bitkiler aracılığıyla besin zincirinden alınır.' },
        { id: 2, statement: 'Fotosentez atmosferdeki karbon dioksiti azaltırken oksijen oranını artırır.', isCorrect: true, explanation: 'Fotosentez CO2 tüketir, O2 üretir.' },
        { id: 3, statement: 'Ekolojik ayak izinin büyümesi gezegenin sürdürülebilirliğine katkı sağlar.', isCorrect: false, explanation: 'Ayak izi büyüdükçe doğal kaynaklar tükenir ve çevre kirlenir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Azot Döngüsü',
          cognitiveLevel: 'Şema Analizi',
          contextTitle: 'Ders Kitabı Sayfa 268 Soru 12',
          scenario: 'Ders kitabının 246 ve 268. sayfalarında yer alan azot döngüsü şemasında yıldırım, baklagil köklerindeki bakteriler, üreticiler, tüketiciler ve ayrıştırıcılar gösterilmiştir.',
          questionPrompt: 'Azot döngüsü ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Bitki ve hayvanların yapısındaki azot atmosfere dönemediği için atmosferdeki azot miktarı her geçen gün azalır.' },
            { key: 'B', text: 'Yıldırım ve şimşek olayları atmosferdeki azotun toprağa geçmesine yardımcı olur.' },
            { key: 'C', text: 'Baklagillerin köklerinde azot bağlayıcı bakteriler yaşar.' },
            { key: 'D', text: 'Topraktaki azot tuzu besin zinciri yoluyla üreticilerden tüketicilere geçer.' }
          ],
          correctAnswer: 'A',
          explanation: 'Azot ayrıştırıcı bakteriler ölü canlı atıklarındaki azotu tekrar azot gazına dönüştürerek atmosfere verir; döngü sayesinde havadaki %78 azot oranı sabit kalır.'
        }
      ]
    },
    {
      id: 'g8-u6-sub4',
      title: '4. Bölüm: Sürdürülebilir Kalkınma',
      shortTitle: 'Sürdürülebilir Kalkınma & Geri Dönüşüm',
      badge: 'Sayfa 254-263',
      pageRange: '254 - 263',
      concepts: ['Sürdürülebilir Kalkınma (Ekonomik, Sosyal, Çevresel)', 'Kaynakların Tasarruflu Kullanımı', 'Geri Dönüşüm', 'Kaynağında Ayrıştırma', 'Enerji Tasarrufu', 'Sıfır Atık'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Sürdürülebilir Kalkınma ve Geri Dönüşümün Önemi',
          paragraphs: [
            'Sürdürülebilir Kalkınma: Günümüz insanının ihtiyaçlarını, gelecek nesillerin kendi ihtiyaçlarını karşılama hakkını ve doğal kaynakları tehlikeye atmadan karşılayabilme modelidir (Ekonomik, Sosyal ve Çevresel 3 temel ayağı vardır).',
            'Geri Dönüşüm: Kullanım dışı kalan geri dönüştürülebilir atık malzemelerin (cam, metal, plastik, kâğıt, pil, elektronik atık) çeşitli fiziksel veya kimyasal işlemlerden geçirilerek ikincil ham maddeye dönüştürülüp yeniden üretim sürecine kazandırılmasıdır.',
            'Kaynağında Ayrıştırma: Sağlıklı geri dönüşümün İLK ve EN ÖNEMLİ basamağıdır. Çöpler birbirine karışmadan evde ve okulda ayrı kutularda toplanmalıdır.',
            'Tasarruf Oranları: 1 alüminyum kutunun geri dönüşümüyle %90 enerji tasarrufu, 1 ton kâğıdın geri dönüştürülmesiyle 17 ağacın kesilmesi önlenir ve %60 enerji tasarrufu sağlanır.'
          ],
          keyPoints: [
            'Doğada Yok Olma Süreleri: Kâğıt: 3 ay, Metal: 100 yıl, Plastik: 1000 yıl, Cam: 4000 yıl.',
            'Tasarruf Tedbirleri: Suyu boşa akıtmamak, A sınıfı enerji verimli cihazlar kullanmak, bina yalıtımı yapmak, gereksiz lambaları söndürmek, Sıfır Atık projelerine katılmak.'
          ],
          examNote: '📌 LGS KURALI: Geri dönüşüm sürecinde işlenen geri dönüştürülmüş malzemenin üretimi için harcanan enerji, sıfırdan ham maddeden üretime göre ÇOK DAHA AZDIR.'
        }
      ],
      glossary: [
        { term: 'Sürdürülebilir Kalkınma', definition: 'Doğal dengeyi koruyarak kalkınmayı gelecek nesillere aktarabilme stratejisi.' },
        { term: 'Geri Dönüşüm', definition: 'Atık maddelerin yeniden ham maddeye dönüştürülerek üretime kazandırılması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Geri dönüşüm ile üretilen malzemeler enerji tasarrufu sağlamaz.', isCorrect: false, explanation: 'Alüminyumda %90’a varan devasa enerji tasarrufu sağlar.' },
        { id: 2, statement: 'Geri dönüşümün ilk basamağı atıkların kaynağında ayrı kutularda toplanmasıdır.', isCorrect: true, explanation: 'Temiz ayrıştırma için kaynağında ayırma esastır.' },
        { id: 3, statement: 'Plastik atıkların doğada tamamen yok olması bin yılı bulabilmektedir.', isCorrect: true, explanation: 'Plastikler doğada yaklaşık 1000 yılda zor parçalanır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Sürdürülebilir Yaşam ve Tasarruf',
          cognitiveLevel: 'Muhakeme',
          contextTitle: 'Ders Kitabı Sayfa 270 Soru 20',
          scenario: 'Bir okulda sürdürülebilir kalkınma ve kaynakların tasarruflu kullanımı amacıyla önlemler listesi hazırlanmıştır.',
          questionPrompt: 'Aşağıdakilerden hangisi kaynakları tasarruflu kullanmak ve geri dönüşümü desteklemek için uygun bir yöntem DEĞİLDİR?',
          options: [
            { key: 'A', text: 'Tüm atıkların türüne bakılmaksızın tek bir ortak çöp kutusunda toplanması.' },
            { key: 'B', text: 'Kâğıt, plastik, cam ve metallerin ayrı geri dönüşüm kutularına atılması.' },
            { key: 'C', text: 'Bitmiş pillerin diğer çöplerden ayrı atık pil kutularında toplanması.' },
            { key: 'D', text: 'Kullanılmayan elektronik aletlerin fişten çekilmesi.' }
          ],
          correctAnswer: 'A',
          explanation: 'Tüm atıkların tek kutuda toplanması malzemeleri kirletir ve geri dönüştürülebilirliği engeller; atıklar kaynağında ayrıştırılmalıdır.'
        }
      ]
    }
  ]
};
