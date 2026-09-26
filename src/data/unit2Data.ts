import { Unit } from '../types/curriculum';

export const unit2Data: Unit = {
  id: 'unit-2',
  unitNumber: 2,
  title: 'Kuvveti Tanıyalım',
  colorTheme: {
    primary: 'emerald-500',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    accent: 'emerald-400',
    text: 'text-emerald-400'
  },
  subTopics: [
    {
      id: 'unit2-sub1',
      title: 'Kuvvet ve Kuvvetin Ölçülmesi',
      shortTitle: '2.1 Kuvvet & Dinamometre',
      badge: 'Sayfa 59-68',
      pageRange: '59 - 68',
      concepts: ['Kuvvet', 'Newton (N)', 'Dinamometre', 'Esneklik', 'Sarmal yay', 'Hassas ölçüm', 'Ölçüm sınırı', 'Isaac Newton'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Kuvvet Nedir ve Cisimler Üzerindeki Etkileri Nelerdir?',
          paragraphs: [
            'Duran bir cismi harekete geçirebilen, hareket hâlindeki cisimleri hızlandırabilen, yavaşlatabilen veya durdurabilen, cisimlerin hareket yönünü ve doğrultusunu değiştirebilen ve cisimler üzerinde şekil değişikliği yapabilen etkiye "KUVVET" denir.',
            'Kuvvet gözle doğrudan görülemez; ancak cisimler üzerinde meydana getirdiği etkiler gözlemlenip ölçülebilir. Örneğin futbol topuna vurulması (hızlandırma/yön değiştirme), kalecinin topu tutması (yavaşlatma/durdurma), oyun hamurunun sıkılması (şekil değiştirme) kuvvetin somut etkileridir.'
          ],
          keyPoints: [
            'Duran cismi hareket ettirir, hareketliyi hızlandırır, yavaşlatır veya durdurur.',
            'Hareket yönünü ve doğrultusunu değiştirebilir.',
            'Cisimlerin şeklini değiştirebilir (bükme, sıkma, germe).',
            'Kuvvet birimi İngiliz fizikçi Isaac Newton anısına "Newton" olarak adlandırılmış olup "N" harfi ile gösterilir.'
          ]
        },
        {
          heading: 'Esnek Cisimler ve Dinamometrenin Çalışma İlkesi',
          paragraphs: [
            'Kuvvet uygulandığında şekil değiştiren, kuvvetin etkisi ortadan kalktığında ise tekrar eski orijinal şekline ve boyutuna dönebilen cisimlere "ESNEK CİSİM" denir. Sarmal çelik yaylar, paket lastiği ve sünger esnek cisimlere örnektir. Oyun hamuru veya cam macunu ise kuvvet kalktığında eski şekline dönemediği için esnek değildir.',
            'Kuvvetin büyüklüğünü ölçmek için kullanılan alete "DİNAMOMETRE" denir. Dinamometrelerin içinde sarmal çelik yaylar bulunur. Dinamometrenin çalışma ilkesi, yayların esneklik ve uygulanan kuvvetle doğru orantılı olarak uzama özelliğine dayanır (Kuvvet arttıkça yayın uzama miktarı artar).',
            'Pazar yerlerinde ve marketlerde kullanılan yaylı el kantarları da günlük hayattaki dinamometre modelleridir.'
          ],
          keyPoints: [
            'Dinamometre sarmal çelik yayın uzama prensibine göre çalışır.',
            'Kuvvet arttıkça yayın uzama miktarı doğru orantılı olarak artar.',
            'Her dinamometrenin ölçebileceği maksimum bir kuvvet sınırı vardır; bu sınır aşılırsa yayın esneklik özelliği bozulur ve dinamometre kullanılmaz hale gelir.'
          ],
          table: {
            headers: ['Özellik', 'İnce Yaylı Dinamometre', 'Kalın Yaylı Dinamometre'],
            rows: [
              ['Kesit Alanı (Kalınlık)', 'İnce yay', 'Kalın yay'],
              ['Ölçebileceği Maksimum Kuvvet', 'Küçük kuvvetler (Örn: 5 N - 10 N)', 'Büyük kuvvetler (Örn: 50 N - 100 N)'],
              ['Ölçüm Hassasiyeti', 'Çok hassas (küçük kuvvet değişimlerini gösterir)', 'Düşük hassasiyet (küçük kuvvetlerde yeterince uzamaz)'],
              ['Kullanım Amacı', 'Hafif cisimleri ve küçük kuvvetleri duyarlı ölçmek', 'Ağır cisimleri ve büyük kuvvetleri ölçmek']
            ]
          }
        },
        {
          heading: 'Dinamometrelerde Bölme Hesabı ve Ölçüm Mantığı',
          paragraphs: [
            'Dinamometre üzerinde eşit aralıklı bölmelerden oluşan bir ölçüm skalası bulunur. Bir bölmenin kaç Newton’a karşılık geldiği şu formülle hesaplanır:',
            '1 Bölmenin Değeri (N) = Maksimum Ölçüm Kapasitesi / Toplam Bölme Sayısı',
            'Örnek: En fazla 50 N ölçebilen 10 bölmeli bir dinamometrede 1 bölme = 50 / 10 = 5 N değerindedir. Cisim asıldığında yay 3 bölme dışarı çıkıyorsa: Ölçülen Kuvvet = 3 × 5 N = 15 N olarak bulunur.'
          ],
          scientistBox: {
            name: 'Isaac Newton (1643 - 1727)',
            role: 'İngiliz Fizikçi, Matematikçi ve Astronom',
            contribution: 'Klasik mekaniğin temellerini atmış, kütle çekim kanununu ve hareket yasalarını keşfetmiştir. Bilime katkıları onuruna kuvvet birimine "Newton" (N) adı verilmiştir.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Kuvvetin birimi Newton’dır ve kısaca "N" harfi ile gösterilir.',
          isCorrect: true,
          explanation: 'Kuvvet birimi Isaac Newton anısına Newton olarak kabul edilmiş olup N sembolüyle gösterilir.'
        },
        {
          id: 2,
          statement: 'Kuvvetin büyüklüğünü ölçmek için eşit kollu terazi kullanılır.',
          isCorrect: false,
          explanation: 'Kuvvet dinamometre ile ölçülür; eşit kollu terazi ise kütle ölçümünde kullanılır.'
        },
        {
          id: 3,
          statement: 'Kuvvet uygulandığında şekil değiştiren, kuvvet ortadan kalktığında eski haline dönen cisimlere esnek cisim denir.',
          isCorrect: true,
          explanation: 'Sarmal yay ve paket lastiği esnek cisim tanımına tam olarak uyar.'
        },
        {
          id: 4,
          statement: 'Dinamometrede kullanılan sarmal yayın kalınlığı arttıkça dinamometrenin ölçüm hassasiyeti artar.',
          isCorrect: false,
          explanation: 'Tam tersine, ince yaylar küçük kuvvetlerde daha kolay uzadığı için daha hassas ölçüm yapar.'
        },
        {
          id: 5,
          statement: '10 bölmeli ve en çok 50 N ölçen bir dinamometrede her 1 bölme 5 N kuvvet değerine karşılık gelir.',
          isCorrect: true,
          explanation: '50 N / 10 bölme = 5 N/bölme olur.'
        },
        {
          id: 6,
          statement: 'En fazla 20 N ölçebilen bir dinamometreye 60 N’lık bir yük asılırsa yayın esneklik özelliği bozulur.',
          isCorrect: true,
          explanation: 'Maksimum taşıma kapasitesinin üzerindeki aşırı kuvvet yayın esneklik sınırını aşar ve bozar.'
        },
        {
          id: 7,
          statement: 'Oyun hamuru ve cam macunu esnek cisimlere örnektir.',
          isCorrect: false,
          explanation: 'Oyun hamuru kuvvet kalkınca eski şekline dönemez; bu yüzden esnek cisim değildir.'
        },
        {
          id: 8,
          statement: 'Günlük hayatta pazar yerlerinde kullanılan el kantarları bir çeşit dinamometredir.',
          isCorrect: true,
          explanation: 'El kantarları içerisindeki sarmal yayın uzaması prensibiyle çalışan bir dinamometre türüdür.'
        },
        {
          id: 9,
          statement: 'Aynı cins maddeden yapılmış yaylardan kalın olanı, ince olana göre daha büyük kuvvetleri ölçebilir.',
          isCorrect: true,
          explanation: 'Kalın yayın esnemeye karşı direnci yüksek olduğundan daha büyük kuvvet aralıklarını ölçebilir.'
        },
        {
          id: 10,
          statement: 'Kuvvet hareket eden bir cismin yönünü ve doğrultusunu asla değiştiremez.',
          isCorrect: false,
          explanation: 'Kuvvet cisimlerin hareket yönünü ve doğrultusunu değiştirebilir (örneğin rakete çarpan tenis topu).'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Bir öğrenci özdeş dört sarmal yay kullanarak K, L, M ve N dinamometrelerini tasarlamıştır. Dinamometrelerin taşıma kapasiteleri aşağıda verilmiştir:\n• K: 100 N (10 bölmeli)\n• L: 50 N (10 bölmeli)\n• M: 10 N (10 bölmeli)\n• N: 25 N (10 bölmeli)',
          questionPrompt: 'Ağırlığı 4 N olarak tahmin edilen hafif bir elmanın ağırlığını EN HASSAS ve EN DOĞRU şekilde ölçmek isteyen bir araştırmacı hangi dinamometreyi seçmelidir?',
          options: [
            { key: 'A', text: 'K Dinamometresi' },
            { key: 'B', text: 'L Dinamometresi' },
            { key: 'C', text: 'M Dinamometresi' },
            { key: 'D', text: 'N Dinamometresi' }
          ],
          correctAnswer: 'C',
          detailedExplanation: 'M dinamometresinde her bölme 10 N / 10 = 1 N değerindedir. 4 N’lık elma asıldığında yay 4 tam bölme uzar ve çok hassas okunur. 100 N’lık dinamometrede 1 bölme 10 N olduğundan 4 N fark bile edilemez.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 2,
          context: 'Özdeş yaylara sahip bir dinamometreye farklı kütlelerdeki X ve Y cisimleri asıldığında oluşan uzama miktarları kaydedilmiştir:\n• X cismi asıldığında yay 2 cm uzamıştır.\n• Y cismi asıldığında yay 6 cm uzamıştır.\nX cisminin dinamometreye uyguladığı kuvvet 8 N olduğuna göre;',
          questionPrompt: 'Y cisminin uyguladığı kuvvet kaç Newton’dır?',
          options: [
            { key: 'A', text: '16 N' },
            { key: 'B', text: '24 N' },
            { key: 'C', text: '32 N' },
            { key: 'D', text: '48 N' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dinamometre yayındaki uzama uygulanan kuvvetle doğru orantılıdır. 2 cm uzama için 8 N kuvvet gerekiyorsa (1 cm uzama = 4 N demektir). 6 cm uzama için: 6 × 4 = 24 N kuvvet uygulanmış olur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 3,
          context: 'Bir laboratuvarda maksimum 80 N ölçebilen 10 eşit bölmeli bir dinamometre bulunmaktadır. Bu dinamometreye bir taş bağlandığında göstergenin 4 bölme dışarı çıktığı görülmüştür.',
          questionPrompt: 'Dinamometrede ölçülen taşın ağırlığı kaç N’dır?',
          options: [
            { key: 'A', text: '8 N' },
            { key: 'B', text: '24 N' },
            { key: 'C', text: '32 N' },
            { key: 'D', text: '40 N' }
          ],
          correctAnswer: 'C',
          detailedExplanation: '1 bölmenin değeri = 80 N / 10 bölme = 8 N/bölme. 4 bölme uzadığına göre taşın ağırlığı = 4 × 8 = 32 N’dır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 4,
          context: 'Selin, elindeki 30 N’lık bir cismi ölçmek için laboratuvar dolabındaki şu dinamometreleri incelemiştir:\nI. Dinamometre: Maksimum 20 N\nII. Dinamometre: Maksimum 50 N\nIII. Dinamometre: Maksimum 100 N',
          questionPrompt: 'Selin’in 30 N’lık cismi güvenle ve en uygun hassasiyetle ölçebilmesi için hangi dinamometreyi tercih etmesi gerekir?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'II. Dinamometre, çünkü kapasitesi cismin ağırlığını taşımaya yeterlidir ve III’e göre daha hassastır.' },
            { key: 'C', text: 'III. Dinamometre, çünkü ne kadar büyük kapasite olursa o kadar hassas ölçer.' },
            { key: 'D', text: 'I. Dinamometre, çünkü yayı en ince olandır.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'I. dinamometreye 30 N asılırsa 20 N sınırını aşıp bozulur. III. dinamometre ölçebilir fakat 50 N’lık II. dinamometreye göre hassasiyeti düşüktür. Güvenli ve en duyarlı ölçüm II. dinamometre ile yapılır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 5,
          context: 'Aşağıda bir dinamometreye asılan ağırlıklar ile yaydaki uzama miktarları arasındaki ilişkiyi gösteren tablo verilmiştir:',
          visualData: {
            type: 'table',
            title: 'Yay Uzama Deneyi',
            tableHeaders: ['Uygulanan Kuvvet (N)', 'Uzama Miktarı (cm)'],
            tableRows: [
              ['5 N', '1,5 cm'],
              ['10 N', '3,0 cm'],
              ['15 N', '4,5 cm'],
              ['20 N', '6,0 cm']
            ]
          },
          questionPrompt: 'Tablodaki verileri inceleyen bir öğrencinin varacağı bilimsel sonuç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kuvvet arttıkça yayın esnekliği azalır.' },
            { key: 'B', text: 'Yaydaki uzama miktarı ile uygulanan kuvvet doğru orantılıdır (Kuvvet 2 katına çıkınca uzama da 2 katına çıkar).' },
            { key: 'C', text: 'Yay 20 N’dan sonra esnemez.' },
            { key: 'D', text: 'Uygulanan kuvvet arttıkça uzama miktarı azalır.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Tabloda 5 N’da 1,5 cm, 10 N’da 3 cm, 20 N’da 6 cm uzama görülmektedir. Her 5 N kuvvet yayı tam 1,5 cm uzatmıştır. Bu kusursuz bir doğru orantıdır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 6,
          context: 'Ali, dinamometre yapımında kullanmak üzere paket lastiği, bakır tel ve çelik yay test etmiştir. Bakır teli çektiğinde telin uzadığını ancak kuvveti bıraktığında telin uzamış halde kalarak eski boyuna dönmediğini görmüştür.',
          questionPrompt: 'Bakır telin dinamometre yapımı için UYGUN OLMAMASININ temel sebebi nedir?',
          options: [
            { key: 'A', text: 'Bakır telin esnek cisim özelliği göstermemesi (kuvvet kalktığında eski haline dönmemesi)' },
            { key: 'B', text: 'Bakırın elektriği iletmesi' },
            { key: 'C', text: 'Bakır telin çok ağır olması' },
            { key: 'D', text: 'Bakır telin paslanması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Dinamometreler kuvvet kalktığında ilk konumuna geri dönebilen "esnek cisimler" (sarmal çelik yaylar) ile çalışır. Kalıcı şekil değiştiren maddeler dinamometre yayı olamaz.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 7,
          context: 'Aynı cins çelikten yapılmış X ve Y yaylarından X yayının kalınlığı 2 mm, Y yayının kalınlığı ise 5 mm’dir. Her iki yaya da 15 N’lık özdeş tuğlalar asılmıştır.',
          questionPrompt: 'Yaylardaki uzama durumları ile ilgili aşağıdakilerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'İnce olan X yayı, kalın olan Y yayından daha fazla uzar.' },
            { key: 'B', text: 'Kalın olan Y yayı daha fazla uzar.' },
            { key: 'C', text: 'Her iki yay da eşit miktarda uzar.' },
            { key: 'D', text: 'İnce yay hiç esnemez.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'İnce yaylar esnemeye karşı daha az direnç gösterir ve aynı kuvvet altında kalın yaylara göre çok daha fazla uzar. Kalın yaylar ise daha serttir ve az uzar.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 8,
          context: 'Bir öğrenci 5 bölmeli ve maksimum 25 N ölçen bir dinamometre ile 10 bölmeli ve maksimum 20 N ölçen bir dinamometreyi karşılaştırıyor.',
          questionPrompt: 'İkinci dinamometrenin birinci dinamometreye göre üstünlüğü nedir?',
          options: [
            { key: 'A', text: 'Daha büyük kuvvetleri ölçebilmesi' },
            { key: 'B', text: 'Her bölmesi (20/10 = 2 N) birinci dinamometrenin her bölmesinden (25/5 = 5 N) daha küçük olduğu için daha hassas ölçüm yapabilmesi' },
            { key: 'C', text: 'Yayının daha kalın olması' },
            { key: 'D', text: 'Kütle ölçümünde kullanılabilmesi' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Bölme başına düşen değer ne kadar küçükse (2 N < 5 N), dinamometre o kadar hassastır ve küçük kuvvet farklarını daha net ayırt eder.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 9,
          context: 'Dinamometreye bir cisim asıldığında içindeki yayın esneklik sınırının aşıldığı ve yayın sarmal yapısının açılarak bozulduğu görülmüştür.',
          questionPrompt: 'Bu durumun yaşanmaması için deney öncesinde yapılması gereken en doğru davranış nedir?',
          options: [
            { key: 'A', text: 'Ölçülecek cismin ağırlık tahmini yapılarak dinamometrenin maksimum ölçüm sınırına uygun bir dinamometre seçilmesi' },
            { key: 'B', text: 'Dinamometre yayının yağlanması' },
            { key: 'C', text: 'Cismin eşit kollu terazi ile çekilmesi' },
            { key: 'D', text: 'Dinamometrenin ters tutulması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 61. sayfasında belirtildiği gibi: "Dinamometre seçilirken ölçülecek kuvvetin büyüklüğüne uygun özellikte olmasına dikkat edilir." Kapasite aşılmamalıdır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 10,
          context: 'Özdeş K ve L dinamometrelerine asılan cisimlerden K dinamometresinde ibre 3. çizgiyi, L dinamometresinde ise ibre 7. çizgiyi göstermektedir.',
          questionPrompt: 'K dinamometresine asılan cismin ağırlığı 18 N olduğuna göre L dinamometresine asılan cismin ağırlığı kaç N’dır?',
          options: [
            { key: 'A', text: '21 N' },
            { key: 'B', text: '35 N' },
            { key: 'C', text: '42 N' },
            { key: 'D', text: '54 N' }
          ],
          correctAnswer: 'C',
          detailedExplanation: '3 bölme = 18 N ise 1 bölme = 18 / 3 = 6 N’dır. L dinamometresi 7 bölme uzadığına göre: 7 × 6 = 42 N’dır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 11,
          context: 'Futbol oynarken kalecinin kendisine doğru hızla gelen sert şutu iki eliyle bloke edip tutması kuvvetin hangi etkisine örnektir?',
          questionPrompt: 'Bu olayda kuvvetin hangi özelliği doğrudan gözlemlenmiştir?',
          options: [
            { key: 'A', text: 'Hareket hâlindeki bir cismi durdurma etkisi' },
            { key: 'B', text: 'Duran bir cismi hızlandırma etkisi' },
            { key: 'C', text: 'Cismin kütlesini artırma etkisi' },
            { key: 'D', text: 'Cismin hacmini büyütme etkisi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kalecinin şutu tutması, hareketli bir cismi kuvvet uygulayarak yavaşlatıp tamamen durdurma etkisidir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 12,
          context: 'Bir tasarım yarışmasında öğrenciler pet şişe, ataş, paket lastiği ve karton cetvel kullanarak basit bir dinamometre modeli yapmışlardır.',
          questionPrompt: 'Bu modelde paket lastiğinin üstlendiği temel görev nedir?',
          options: [
            { key: 'A', text: 'Kuvvet etkisiyle esneyip uzayarak kuvvetin büyüklüğünü gösteren esnek ölçüm elemanı olmak' },
            { key: 'B', text: 'Dinamometreyi dış etkenlerden korumak' },
            { key: 'C', text: 'Cismin kütlesini gram cinsinden hesaplamak' },
            { key: 'D', text: 'Ölçüm aletine ağırlık kazandırmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Paket lastiği esnek yapısıyla dinamometre içindeki sarmal yayın işlevini üstlenir; uzama miktarı kuvvet büyüklüğünü ölçmeyi sağlar.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 13,
          context: 'Bir cisim 60 N’lık bir kuvvetle çekildiğinde yay 12 cm uzamaktadır. Aynı yaya 25 N’lık bir cisim asılsaydı yay kaç cm uzardı?',
          questionPrompt: 'Doğru uzama miktarı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: '4 cm' },
            { key: 'B', text: '5 cm' },
            { key: 'C', text: '6 cm' },
            { key: 'D', text: '8 cm' }
          ],
          correctAnswer: 'B',
          detailedExplanation: '60 N / 12 cm = 5 N başına 1 cm uzama gerçekleşir. 25 N kuvvet uygulandığında: 25 / 5 = 5 cm uzama olur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 14,
          context: 'Laboratuvarda kuvvet ölçümü yapan bir öğrenci grubu dinamometrelerin yapısını ve özelliklerini araştırmaktadır.',
          questionPrompt: 'Dinamometreler ile ilgili aşağıda verilen bilgilerden hangisi KESİNLİKLE YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Her dinamometre ile sonsuz büyüklükteki tüm kuvvetler hatasız ölçülebilir.' },
            { key: 'B', text: 'Dinamometrelerin içinde sarmal yaylar bulunur.' },
            { key: 'C', text: 'Ölçülen değerin birimi Newton’dır.' },
            { key: 'D', text: 'Yayın cinsi dinamometrenin esneklik katsayısını belirler.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Her dinamometrenin bir esneklik sınırı ve maksimum taşıma kapasitesi vardır; bu sınır aşıldığında yay bozulur, dolayısıyla sonsuz kuvvet ölçülemez.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 15,
          context: 'Tenis maçında oyuncu gelen topa raketiyle vurduğunda top hem hızlanmakta hem de farklı bir açıya doğru yönelmektedir.',
          questionPrompt: 'Bu durum kuvvetin cisimler üzerindeki hangi iki etkisini aynı anda gösterir?',
          options: [
            { key: 'A', text: 'Hızlandırma ve yön değiştirme' },
            { key: 'B', text: 'Durdurma ve kütle değiştirme' },
            { key: 'C', text: 'Yavaşlatma ve hacim artırma' },
            { key: 'D', text: 'Sadece kalıcı şekil değiştirme' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Topun hızı artmış ve gideceği yön değişmiştir; dolayısıyla kuvvetin hızlandırıcı ve yön değiştirici etkisi bir aradadır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 16,
          context: 'Mühendisler bir araba süspansiyonunda kullanılacak yayları tasarlarken neden ince teller yerine çok kalın çelik helezon yaylar tercih ederler?',
          questionPrompt: 'Bunun temel fen bilimleri gerekçesi nedir?',
          options: [
            { key: 'A', text: 'Kalın çelik yayların tonlarca ağırlıktaki devasa kuvvetlere dayanabilmesi ve esneklik sınırının bozulmaması' },
            { key: 'B', text: 'Kalın yayların daha ucuz olması' },
            { key: 'C', text: 'Kalın yayların arabayı hafifletmesi' },
            { key: 'D', text: 'Kalın yayların hava direncini artırması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Araba gibi ağır araçlarda büyük kuvvetleri karşılamak için kalın ve yüksek taşıma kapasiteli sarmal yaylar kullanılır; ince yaylar anında deforme olur.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 17,
          context: 'Dinamometre üzerinde 0’dan 50 N’a kadar eşit aralıklı 25 bölme bulunmaktadır.',
          questionPrompt: 'Bu dinamometrenin 1 bölmesi kaç Newton’a denk gelir?',
          options: [
            { key: 'A', text: '1 N' },
            { key: 'B', text: '2 N' },
            { key: 'C', text: '5 N' },
            { key: 'D', text: '10 N' }
          ],
          correctAnswer: 'B',
          detailedExplanation: '50 N / 25 bölme = 2 N/bölme.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 18,
          context: 'Bir kâğıt parçasını buruşturup top haline getirdiğimizde kâğıdın şekli değişir. Kuvveti bıraktığımızda ise kâğıt kendiliğinden eski düz haline geri dönmez.',
          questionPrompt: 'Bu durum kâğıt maddesi hakkında neyi ispatlar?',
          options: [
            { key: 'A', text: 'Kâğıdın esnek bir madde olmadığını ve kalıcı şekil değişikliğine uğradığını' },
            { key: 'B', text: 'Kâğıdın kütlesinin sıfır olduğunu' },
            { key: 'C', text: 'Kâğıda kuvvet uygulanmadığını' },
            { key: 'D', text: 'Kâğıdın dinamometre yapımında yay olarak kullanılabileceğini' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kuvvet etkisi kalktığında eski biçimini alamayan maddeler esnek değildir; plastik deformasyona uğrarlar.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 19,
          context: 'Özdeş dinamometrelere asılan üç cismin uzama miktarları:\n• 1. Cisim: 2 bölme\n• 2. Cisim: 5 bölme\n• 3. Cisim: 8 bölme',
          questionPrompt: 'Cisimlerin ağırlıklarının büyükten küçüğe doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: '3. Cisim > 2. Cisim > 1. Cisim' },
            { key: 'B', text: '1. Cisim > 2. Cisim > 3. Cisim' },
            { key: 'C', text: '2. Cisim > 3. Cisim > 1. Cisim' },
            { key: 'D', text: 'Üçünün ağırlığı eşittir' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Yayı en çok uzatan cisim en büyük kuvvete (ağırlığa) sahiptir. Dolayısıyla 8 bölme uzatan 3. cisim en ağırdır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 20,
          context: 'Bir öğrenci dinamometrenin içine yay yerine paket lastiği koymuş, fakat lastiğin zamanla güneş altında kalarak çürüdüğünü ve koptuğunu gözlemlemiştir.',
          questionPrompt: 'Bu gözlemden hareketle bilimsel bir dinamometrede sarmal çelik yay kullanılmasının temel avantajı nedir?',
          options: [
            { key: 'A', text: 'Çeliğin esneklik özelliğini uzun yıllar ve farklı ortam koşullarında kararlı şekilde koruyabilmesi' },
            { key: 'B', text: 'Çeliğin mıknatıs tarafından çekilmesi' },
            { key: 'C', text: 'Çeliğin hafif olması' },
            { key: 'D', text: 'Çeliğin suda yüzebilmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Metaller (çelik alaşımları) esneklik sınırları içinde uzun ömürlü, dayanıklı ve kararlı esneme davranışı sergiler; bu yüzden bilimsel ölçüm aletlerinde tercih edilir.',
          skillTag: 'Bilimsel Çıkarım'
        }
      ]
    },
    {
      id: 'unit2-sub2',
      title: 'Kütle ve Ağırlık İlişkisi',
      shortTitle: '2.2 Kütle & Ağırlık',
      badge: 'Sayfa 69-76',
      pageRange: '69 - 76',
      concepts: ['Kütle', 'Madde miktarı', 'Ağırlık', 'Yer çekimi kuvveti', 'Geoit şekil', 'Kutuplar ve Ekvator', 'Dünya ve Ay yer çekimi (1/6)', 'Eşit kollu terazi', 'Karat'],
      simulationId: 'mass-weight',
      summarySections: [
        {
          heading: 'Kütle ile Ağırlık Arasındaki Temel Farklar',
          paragraphs: [
            'Günlük konuşma dilinde kütle ile ağırlık kavramları sıklıkla birbirinin yerine kullanılsa da fen bilimlerinde bu iki kavram birbirinden tamamen farklıdır:',
            '1. KÜTLE: Bir cismi oluşturan değişmeyen madde miktarıdır. Bulunulan konuma, gezegene veya deniz seviyesinden yüksekliğe göre KESİNLİKLE DEĞİŞMEZ. Eşit kollu terazi veya dijital terazi ile ölçülür. Birimi gram (g) ve kilogramdır (kg).',
            '2. AĞIRLIK: Bir kütleye etki eden yer çekimi kuvvetidir. Bir kuvvet çeşidi olduğu için yönü daima Dünya’nın merkezine doğrudur. Bulunulan konuma ve gök cismine göre DEĞİŞİR. Dinamometre ile ölçülür. Birimi Newton’dır (N).'
          ],
          keyPoints: [
            'Kütle: Madde miktarıdır, hiçbir yerde değişmez, eşit kollu terazi ile ölçülür, birimi g veya kg’dır.',
            'Ağırlık: Kütleye etki eden yer çekimi KUVVETİDİR, konuma göre değişir, dinamometre ile ölçülür, birimi Newton’dır (N).',
            'Dünya 1 kilogramlık kütleye yaklaşık 10 N yer çekimi kuvveti uygular (1 kg ≈ 10 N).'
          ],
          table: {
            headers: ['Karşılaştırma Kriteri', 'Kütle', 'Ağırlık'],
            rows: [
              ['Tanım', 'Değişmeyen madde miktarı', 'Kütleye etki eden yer çekimi kuvveti'],
              ['Ölçüm Aleti', 'Eşit kollu terazi / Elektronik terazi', 'Dinamometre (yaylı ölçer)'],
              ['Birimi', 'Gram (g), Kilogram (kg)', 'Newton (N)'],
              ['Konuma Göre Durumu', 'Dünya’da, Ay’da, uzayda HİÇ DEĞİŞMEZ', 'Yüksekliğe, kutuplara ve gezegene göre DEĞİŞİR'],
              ['Yönü Var mı?', 'Yönsüz büyüklüktür', 'Yönü daima yerin merkezine doğrudur']
            ]
          }
        },
        {
          heading: 'Dünya’nın Şekli (Geoit) ve Ağırlığın Değişimi',
          paragraphs: [
            'Dünya tam bir küre değildir; kutuplardan basık, ekvatordan şişkindir. Bu özel geometrik şekle "GEOİT" denir.',
            'Kutuplar, Dünya’nın merkezine Ekvator’a göre yaklaşık 21 kilometre daha yakındır (Merkeze olan uzaklık: Kutuplarda 6.357 km, Ekvatorda 6.378 km).',
            'Merkeze yakın olundukça yer çekimi kuvveti artar. Bu nedenle aynı bir cismin ağırlığı KUTUPLARDA en fazla, EKVATORDA ise daha az ölçülür.',
            'Ayrıca deniz seviyesinden dağların zirvesine doğru çıkıldıkça Dünya merkezinden uzaklaşıldığı için yer çekimi kuvveti azalır ve cismin ağırlığı AZALIR. Örneğin deniz kenarında 200 N gelen bir taş, yüksek bir dağın zirvesine çıkarıldığında 199 N ölçülür; fakat kütlesi (örneğin 20 kg) her iki noktada da tamamen aynıdır.'
          ],
          keyPoints: [
            'Kutuplarda ağırlık > Ekvatorda ağırlık (Kutuplar merkeze daha yakındır).',
            'Deniz seviyesinde ağırlık > Dağ zirvesinde ağırlık (Yükseklere çıkıldıkça merkeze mesafe artar, ağırlık azalır).',
            'Kütle ise deniz kenarında da, dağın zirvesinde de, kutupta da tamamen aynı kalır.'
          ]
        },
        {
          heading: 'Dünya ve Ay’da Kütle - Ağırlık İlişkisi (1/6 Oranı)',
          paragraphs: [
            'Gök cisimlerinin kütleleri birbirinden farklıdır. Kütlesi büyük olan gök cismi cisimlere daha fazla çekim kuvveti uygular.',
            'Dünya’nın kütlesi Ay’dan çok daha büyük olduğu için Dünya’nın uyguladığı yer çekimi kuvveti, Ay’ın uyguladığı çekim kuvvetinin yaklaşık 6 KATIDIR.',
            'Örnek: Kütlesi 60 kg olan bir astronot düşünelim:',
            '• Dünya’da: Kütlesi = 60 kg, Ağırlığı = 60 × 10 = 600 N',
            '• Ay’da: Kütlesi = 60 kg (DEĞİŞMEZ!), Ağırlığı = 600 / 6 = 100 N',
            'Astronotların Ay yüzeyinde adeta yaylanarak ve zıplayarak yürümelerinin nedeni Ay’daki yer çekimi kuvvetinin Dünya’dakinin altıda biri olmasıdır.'
          ],
          scientistBox: {
            name: 'Karat ve Keçiboynuzu Tarihi',
            role: 'Antik Kütle Ölçüm Birimi',
            contribution: 'Eski çağlarda hassas terazi olmadığı dönemlerde elmas tüccarları keçiboynuzu (Arapça: karrat) tohumlarını kullanırlardı. Çünkü bu tohumların her birinin kütlesi doğada neredeyse birbirinin aynı olup yaklaşık 0,2 gramdır. Günümüzde pırlanta ve değerli taşlarda kullanılan "karat" terimi buradan gelmektedir.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Kütle, bir cismin bulunduğu konuma göre değişmeyen madde miktarıdır.',
          isCorrect: true,
          explanation: 'Kütle evrenin neresine gidilirse gitsin asla değişmez.'
        },
        {
          id: 2,
          statement: 'Ağırlık bir kuvvet çeşididir ve dinamometre ile ölçülür.',
          isCorrect: true,
          explanation: 'Ağırlık kütleye etki eden yer çekimi kuvvetidir, birimi Newton’dır.'
        },
        {
          id: 3,
          statement: 'Marketten alınan 2 kilogram elma ifadesinde ağırlıktan bahsedilmektedir.',
          isCorrect: false,
          explanation: 'Kilogram kütle birimidir; dolayısıyla 2 kg elma kütleyi ifade eder.'
        },
        {
          id: 4,
          statement: 'Aynı cismin ağırlığı kutup noktalarında, Ekvator çizgisine göre daha fazladır.',
          isCorrect: true,
          explanation: 'Dünya kutuplardan basık olduğu için kutuplar yerin merkezine daha yakındır ve yer çekimi daha fazladır.'
        },
        {
          id: 5,
          statement: 'Deniz seviyesinden yüksek dağların zirvesine çıkıldıkça cisimlerin ağırlığı artar.',
          isCorrect: false,
          explanation: 'Yükseklere çıkıldıkça Dünya merkezinden uzaklaşıldığı için yer çekimi ve ağırlık azalır.'
        },
        {
          id: 6,
          statement: 'Kütlesi Dünya’da 60 kg olan bir astronotun Ay’daki kütlesi 10 kg’a düşer.',
          isCorrect: false,
          explanation: 'Kütle hiçbir yerde değişmez, Ay’da da 60 kg’dır. Düşen şey ağırlıktır (600 N’dan 100 N’a).'
        },
        {
          id: 7,
          statement: 'Dünya’nın yer çekimi kuvveti Ay’ın yer çekimi kuvvetinin yaklaşık 6 katıdır.',
          isCorrect: true,
          explanation: 'Dünya Ay’a göre yaklaşık 6 kat daha büyük bir çekim kuvveti uygular.'
        },
        {
          id: 8,
          statement: 'Kütle ölçümünde eşit kollu terazi kullanılır.',
          isCorrect: true,
          explanation: 'Kütle eşit kollu terazi veya hassas elektronik terazi ile ölçülür.'
        },
        {
          id: 9,
          statement: 'Yer çekimi kuvvetinin yönü daima Dünya’nın merkezine doğrudur.',
          isCorrect: true,
          explanation: 'Yerküre üzerindeki tüm varlıkları merkezine doğru çeker.'
        },
        {
          id: 10,
          statement: 'Değerli taşların ölçümünde kullanılan karat birimi adını keçiboynuzu tohumundan almıştır.',
          isCorrect: true,
          explanation: 'Ders kitabının 70. sayfasındaki bilgiye göre karat, keçiboynuzu çekirdeği (karrat) kelimesinden türemiştir.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Bir bilim insanı, Dünya’nın deniz seviyesindeki Ekvator noktasında bir cismin kütlesini eşit kollu terazi ile 12 kg, ağırlığını ise dinamometre ile 118 N olarak ölçmüştür. Ardından aynı cismi alarak Kuzey Kutup Noktası’na götürmüş ve ölçümleri tekrarlamıştır.',
          questionPrompt: 'Kuzey Kutup Noktası’nda yapılan ikinci ölçümün sonuçları aşağıdakilerden hangisi olabilir?',
          options: [
            { key: 'A', text: 'Kütle: 12 kg, Ağırlık: 120 N' },
            { key: 'B', text: 'Kütle: 14 kg, Ağırlık: 118 N' },
            { key: 'C', text: 'Kütle: 10 kg, Ağırlık: 110 N' },
            { key: 'D', text: 'Kütle: 12 kg, Ağırlık: 115 N' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kütle değişmeyen madde miktarı olduğu için kutupta da 12 kg kalır. Kutuplar Dünya merkezine Ekvator’dan 21 km daha yakın olduğundan yer çekimi artar ve ağırlık 118 N’dan daha büyük (örneğin 120 N) ölçülür.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 2,
          context: 'Dünya’da ağırlığı 600 N olarak ölçülen bir uzay keşif aracının kütlesi ve Ay yüzeyindeki ağırlığı araştırılmaktadır (Dünya’da 1 kg ≈ 10 N kabul edilmektedir).',
          questionPrompt: 'Bu keşif aracı ile ilgili aşağıdaki eşleştirmelerden hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Dünya’daki Kütlesi: 60 kg | Ay’daki Kütlesi: 60 kg | Ay’daki Ağırlığı: 100 N' },
            { key: 'B', text: 'Dünya’daki Kütlesi: 600 kg | Ay’daki Kütlesi: 100 kg | Ay’daki Ağırlığı: 60 N' },
            { key: 'C', text: 'Dünya’daki Kütlesi: 60 kg | Ay’daki Kütlesi: 10 kg | Ay’daki Ağırlığı: 100 N' },
            { key: 'D', text: 'Dünya’daki Kütlesi: 600 kg | Ay’daki Kütlesi: 600 kg | Ay’daki Ağırlığı: 600 N' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Dünya’daki ağırlık 600 N ise kütle = 600 / 10 = 60 kg’dır. Kütle Ay’da da 60 kg kalır. Ay’daki ağırlık ise Dünya’dakinin altıda biri olduğundan 600 / 6 = 100 N olur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 3,
          context: 'Aşağıdaki tabloda bir cismin Dünya üzerindeki farklı konumlardaki kütle ve ağırlık değerleri verilmiştir:',
          visualData: {
            type: 'table',
            title: 'Konuma Göre Ölçüm Tablosu',
            tableHeaders: ['Konum', 'Ölçülen Kütle', 'Ölçülen Ağırlık'],
            tableRows: [
              ['Deniz Kenarı (0 m)', '500 g', '5 N'],
              ['Uludağ Zirvesi (2.543 m)', '500 g', '4,98 N'],
              ['Everest Tepesi (8.848 m)', '500 g', '4,95 N']
            ]
          },
          questionPrompt: 'Bu tablodan yararlanılarak aşağıdaki genellemelerden hangisine ulaşılabilir?',
          options: [
            { key: 'A', text: 'Deniz seviyesinden yükseklere çıkıldıkça Dünya merkezine olan uzaklık arttığı için cismin ağırlığı azalır, kütlesi değişmez.' },
            { key: 'B', text: 'Yükseklere çıkıldıkça cismin madde miktarı azalır.' },
            { key: 'C', text: 'Everest’te dinamometre çalışmaz.' },
            { key: 'D', text: 'Ağırlık değişmezken kütle yüksekliğe bağlıdır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Tabloda görüldüğü gibi kütle her üç irtifada da 500 g kalırken, ağırlık 5 N -> 4,98 N -> 4,95 N şeklinde azalmıştır. Yükseklik arttıkça yer çekimi kuvveti zayıflar.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 4,
          context: 'Pazara giden Mehmet amca satıcıya "Bana 3 kilo elma tartar mısın?" demiştir. Satıcı elmaları dijital teraziye koyarak ekranda 3,00 kg değerini okumuştur.',
          questionPrompt: 'Fen bilimleri öğretmeni bu olayı sınıfta tartışmaya açtığında hangi öğrencinin yaptığı yorum bilimsel olarak KUSURSUZDUR?',
          options: [
            { key: 'A', text: 'Zeynep: "Günlük hayatta ağırlık dense de teraziyle ölçülen ve birimi kg olan büyüklük kütledir."' },
            { key: 'B', text: 'Murat: "Satıcı elmaların kuvvetini ölçmüştür."' },
            { key: 'C', text: 'Buse: "Eğer satıcı dinamometre kullansaydı kütleyi ölçmüş olurdu."' },
            { key: 'D', text: 'Emre: "Elmanın birimi Newton olmalıydı çünkü terazi sadece Newton ölçer."' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Günlük hayatta yaygın bir kavram yanılgısı olarak "kilo tartmak/ağırlık" denir; fakat ölçülen büyüklük madde miktarı (kütle) olup birimi kilogramdır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 5,
          context: 'Bir kargo uçağı yer seviyesinde dururken içerisindeki kutuların toplam kütlesi 10.000 kg, dinamometre ile ölçülen toplam ağırlığı 100.000 N gelmektedir. Uçak 10.000 metre irtifaya tırmandığında;',
          questionPrompt: 'Kutuların kütle ve ağırlığındaki değişim nasıl olur?',
          options: [
            { key: 'A', text: 'Kütle değişmez, ağırlık bir miktar azalır.' },
            { key: 'B', text: 'Hem kütle hem ağırlık yarıya iner.' },
            { key: 'C', text: 'Kütle artar, ağırlık sıfır olur.' },
            { key: 'D', text: 'Her iki değer de hiçbir şekilde değişmez.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kutulardaki madde miktarı değişmediği için kütle 10.000 kg kalır. Ancak 10.000 metre yukarıda Dünya merkezine olan uzaklık arttığı için yer çekimi kuvveti (ağırlık) azalır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 6,
          context: 'Apollo görevleri sırasında Ay’a giden astronotların göğüslerinde ve sırtlarındaki ağır yaşam destek çantalarıyla birlikte yaklaşık 140 kg kütleye sahip oldukları bilinmektedir. Dünya’da 140 kg yükü taşımakta çok zorlanan astronotlar, Ay yüzeyinde bu yükle rahatça zıplayabilmişlerdir.',
          questionPrompt: 'Astronotların bu rahat hareket edebilme durumu aşağıdakilerden hangisiyle doğrudan açıklanır?',
          options: [
            { key: 'A', text: 'Ay’da kütlelerinin sıfıra inmesi' },
            { key: 'B', text: 'Ay’ın yer çekimi kuvvetinin Dünya’nınkinin yaklaşık altıda biri olması sebebiyle ağırlıklarının ~1400 N’dan ~233 N’a düşmesi' },
            { key: 'C', text: 'Ay’da havanın çok sıcak olması' },
            { key: 'D', text: 'Astronot giysilerinin manyetik olarak Ay’ı itmesi' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dünya’da 140 kg kütle yaklaşık 1400 N ağırlık oluştururken, Ay’da 1/6 çekim nedeniyle yaklaşık 233 N ağırlık oluşturur. Cisimler 6 kat daha hafif hissedilir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 7,
          context: 'Bir fen laboratuvarında öğretmen öğrencilerine şu soruyu yöneltmiştir: "Elimizde kütlesi 50 gram olan metal bir silindir var. Bu silindiri eşit kollu terazi ile bir dağın eteğinde, ardından dağın zirvesinde ölçersek terazi kefelerinin dengesi bozulur mu?"',
          questionPrompt: 'Öğrencilerden hangisinin cevabı ve gerekçesi doğrudur?',
          options: [
            { key: 'A', text: 'Bozulmaz; çünkü eşit kollu terazinin her iki kefesindeki kütlelere etki eden yer çekimi aynı oranda değiştiği için kütle ölçümü irtifadan etkilenmez.' },
            { key: 'B', text: 'Bozulur; çünkü dağın zirvesinde terazi çalışmaz.' },
            { key: 'C', text: 'Bozulur; metal silindir zirvede daha ağır basar.' },
            { key: 'D', text: 'Bozulur; yer çekimi azaldığı için standart gramlar hafifler ama silindir hafiflemez.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Eşit kollu terazi kütleleri birbiriyle kıyaslar. Her iki kefeye de aynı yer çekimi etki ettiği için yükseklik eşit kollu terazinin ölçüm sonucunu değiştirmez.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 8,
          context: 'Yer çekimi kuvveti ile ilgili bir poster hazırlayan Arda şu maddeleri yazmıştır:\nI. Cisimleri Dünya’nın merkezine doğru çeker.\nII. Temas gerektirmeyen bir kuvvettir.\nIII. Cisimlerin kütlesi arttıkça uygulanan yer çekimi kuvveti de artar.',
          questionPrompt: 'Arda’nın posterindeki maddelerden hangileri bilimsel olarak doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          detailedExplanation: 'Yer çekimi Dünya merkezine doğrudur (I), kütleler arasında boşlukta da etki eden temas gerektirmeyen alansal bir kuvvettir (II) ve kütle ile doğru orantılıdır (III).',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 9,
          context: 'Keçiboynuzu tohumlarının kütlelerinin birbirine çok yakın (yaklaşık 0,2 gram) olması antik çağlarda elmas ve zümrüt gibi değerli taşların alım satımında standart bir ölçü olarak kullanılmıştır.',
          questionPrompt: 'Bu tarihi uygulama günümüz bilimsel ölçüm standartları açısından neyin önemini gösterir?',
          options: [
            { key: 'A', text: 'Ticarette ve bilimde güvenilir, kararlı ve herkesçe kabul edilen standart ölçü birimlerine duyulan ihtiyacı' },
            { key: 'B', text: 'Eski çağlarda dinamometrelerin çok gelişmiş olduğunu' },
            { key: 'C', text: 'Keçiboynuzunun sadece kimyada kullanıldığını' },
            { key: 'D', text: 'Yer çekiminin tohumları etkilemediğini' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 70. sayfasındaki Karat bilgisi, insanlığın tarih boyunca adil ve değişmeyen ölçüm standartları arayışını temsil eder.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 10,
          context: 'Dünya üzerinde bir cisim A noktasından B noktasına taşındığında kütlesinin değişmediği fakat ağırlığının arttığı görülmüştür.',
          questionPrompt: 'Buna göre bu hareket aşağıdakilerden hangisi olabilir?',
          options: [
            { key: 'A', text: 'Ekvatordan Kutuplara doğru gitmek' },
            { key: 'B', text: 'Deniz seviyesinden dağın tepesine çıkmak' },
            { key: 'C', text: 'Kutuplardan Ekvatora doğru gitmek' },
            { key: 'D', text: 'Dünya’dan Ay’a seyahat etmek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ağırlığın artması yerin merkezine yaklaşmak demektir. Ekvatordan kutuplara gidildikçe Dünya’nın basıklığı sebebiyle merkeze yaklaşılır ve ağırlık artar.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 11,
          context: 'Jüpiter gezegeninin kütlesi Dünya’nın kütlesinin yaklaşık 318 katıdır. Bu yüzden Jüpiter’in yüzeyindeki çekim kuvveti Dünya’dakinden yaklaşık 2,4 kat daha fazladır.',
          questionPrompt: 'Dünya’da kütlesi 50 kg ve ağırlığı 500 N olan bir robot Jüpiter’e gönderilirse değerleri ne olur?',
          options: [
            { key: 'A', text: 'Kütle: 50 kg, Ağırlık: 1200 N' },
            { key: 'B', text: 'Kütle: 120 kg, Ağırlık: 500 N' },
            { key: 'C', text: 'Kütle: 50 kg, Ağırlık: 500 N' },
            { key: 'D', text: 'Kütle: 0 kg, Ağırlık: 0 N' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kütle asla değişmez (50 kg kalır). Jüpiter’in çekimi 2,4 kat fazla olduğu için ağırlığı: 500 N × 2,4 = 1200 N olur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Elindeki elmayı havaya fırlatan bir çocuk, elmanın yukarı doğru çıkarken yavaşladığını, en tepe noktada bir an durup ardından yere doğru hızlanarak düştüğünü gözlemlemiştir.',
          questionPrompt: 'Elmanın bu hareketine neden olan etki aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Dünya’nın elmaya uyguladığı yer çekimi kuvvetinin yönünün sürekli aşağıya doğru olması' },
            { key: 'B', text: 'Elmanın kütlesinin tepe noktasında sıfıra düşmesi' },
            { key: 'C', text: 'Havanın elmayı yukarı çekmesi' },
            { key: 'D', text: 'Güneş’in elmayı itmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Yer çekimi kuvveti daima yerin merkezine doğrudur. Yukarı atılan elmaya zıt yönde etki ederek onu yavaşlatıp durdurur, aşağı inerken ise hareket yönünde etki ederek hızlandırır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 13,
          context: 'Eşit kollu terazide sol kefeye 1 kg’lık demir ağırlık, sağ kefeye ise 1 kg pamuk konulduğunda terazi dengede kalmıştır.',
          questionPrompt: 'Bu durum aşağıdakilerden hangisini doğrudan kanıtlar?',
          options: [
            { key: 'A', text: 'Demir ve pamuğun hacimleri farklı olsa bile içerdikleri madde miktarlarının (kütlelerinin) eşit olduğunu' },
            { key: 'B', text: 'Demirin ağırlığının pamuktan fazla olduğunu' },
            { key: 'C', text: 'Pamuğun yer çekiminden etkilenmediğini' },
            { key: 'D', text: 'Terazinin bozuk olduğunu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: '1 kg demir ile 1 kg pamuk aynı kütleye sahiptir. Hacimleri çok farklı olsa da terazi madde miktarlarını kıyaslar ve dengede kalır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 14,
          context: 'Bir dağcı deniz kenarında ölçüm yaptığında çantasının ağırlığını 150 N ölçmüştür. Dağın zirvesine çıktığında ise çantasının ağırlığının 148 N’a düştüğünü görmüştür.',
          questionPrompt: 'Dağcının bu ölçüm farkını azaltması için ne yapması gerekirdi?',
          options: [
            { key: 'A', text: 'Deniz seviyesine geri inmesi' },
            { key: 'B', text: 'Çantayı Ay’a götürmesi' },
            { key: 'C', text: 'Daha yüksek bir tepeye çıkması' },
            { key: 'D', text: 'Çantadaki eşyaları boşaltması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ağırlık deniz seviyesine inildikçe yerin merkezine yaklaşıldığı için artar ve başlangıçtaki 150 N değerine geri döner.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 15,
          context: 'Dünya’nın geoit şekli olmasaydı ve tam mükemmel bir küre olsaydı, deniz seviyesindeki Ekvator ve kutup noktaları yer merkezine tamamen eşit mesafede olurdu.',
          questionPrompt: 'Böyle bir durumda aynı cismin ağırlığı kutupta ve ekvatorda nasıl ölçülürdü?',
          options: [
            { key: 'A', text: 'Her iki noktada da birbirine tamamen eşit ölçülürdü.' },
            { key: 'B', text: 'Kutupta yine daha fazla ölçülürdü.' },
            { key: 'C', text: 'Ekvatorda iki katına çıkardı.' },
            { key: 'D', text: 'Ağırlık sıfır olurdu.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kutup ile ekvator arasındaki ağırlık farkının tek sebebi kutupların merkeze 21 km daha yakın olmasıdır. Mesafeler eşit olsaydı yer çekimi ve ağırlık da eşit olurdu.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 16,
          context: 'Aşağıda kütle ve ağırlık ile ilgili dört ifade verilmiştir:\n1. Birimi kilogramdır.\n2. Dinamometre ile ölçülür.\n3. Yer çekimi kuvvetidir.\n4. Konuma göre değişmez.',
          questionPrompt: 'Bu ifadelerden hangileri "AĞIRLIK" kavramına aittir?',
          options: [
            { key: 'A', text: '1 ve 4' },
            { key: 'B', text: '2 ve 3' },
            { key: 'C', text: '1 ve 3' },
            { key: 'D', text: '2 ve 4' }
          ],
          correctAnswer: 'B',
          detailedExplanation: '2 (dinamometre ile ölçülür) ve 3 (yer çekimi kuvvetidir) ağırlığa aittir. 1 ve 4 ise kütleye aittir.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 17,
          context: 'Astronot Alper Gezeravcı Uluslararası Uzay İstasyonu’nda mikro yerçekimi ortamında görev yapmıştır. Burada su damlaları havada küre şeklinde asılı kalmış ve astronotlar havada süzülmüştür.',
          questionPrompt: 'Bu ortamda astronotların hissettiği durum aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ağırlıksızlık hissi (ağırlığın neredeyse sıfıra yaklaşması fakat kütlenin aynen korunması)' },
            { key: 'B', text: 'Kütlenin yok olması' },
            { key: 'C', text: 'Vücut hacminin iki katına çıkması' },
            { key: 'D', text: 'Kasların kemiklere dönüşmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Uzay istasyonunda serbest düşme hareketi nedeniyle hissedilen ağırlık sıfıra yakındır (ağırlıksızlık). Fakat astronotun vücudundaki madde miktarı (kütle) tamamen aynıdır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 18,
          context: 'Bir laboratuvarda K, L ve M cisimlerinin Dünya ve Ay’daki ağırlıkları test edilmektedir. K cisminin Dünya’daki ağırlığı 30 N’dır.',
          questionPrompt: 'K cisminin Ay’daki ağırlığı kaç Newton ölçülür?',
          options: [
            { key: 'A', text: '5 N' },
            { key: 'B', text: '10 N' },
            { key: 'C', text: '15 N' },
            { key: 'D', text: '180 N' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ay’daki çekim kuvveti Dünya’dakinin 1/6’sıdır. 30 N / 6 = 5 N olarak ölçülür.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 19,
          context: 'Bir kuyumcu müşterisine altın satarken terazinin yanındaki havalandırma fanını kapatmıştır. Müşteri "Neden kapattınız?" diye sorduğunda "Hava akımı terazinin hassasiyetini etkileyebilir." demiştir.',
          questionPrompt: 'Kuyumcunun bu davranışı hassas kütle ölçümünde neye dikkat edildiğini gösterir?',
          options: [
            { key: 'A', text: 'Ölçüm ortamındaki dış kuvvetlerin (rüzgâr/hava basıncı) ölçüm sonucunu yanıltmasını önlemeye' },
            { key: 'B', text: 'Altının sıcaklığını artırmaya' },
            { key: 'C', text: 'Dinamometre yayını korumaya' },
            { key: 'D', text: 'Altının karatını yükseltmeye' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Hassas terazilerde hava akımı bile terazi kefesine kuvvet uygulayarak ölçümü saptırabilir. Dış kuvvetlerin engellenmesi doğru kütle ölçümü için şarttır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 20,
          context: 'Bir öğrenci "Ağırlık Değişir mi?" konusuyla ilgili bir kavram haritası oluşturmuştur:\n[Kütle] ---> birimi [X] ---> [Y] ile ölçülür.\n[Ağırlık] ---> birimi [Z] ---> [T] ile ölçülür.',
          questionPrompt: 'Haritadaki X, Y, Z ve T kutucuklarına sırasıyla hangileri yazılmalıdır?',
          options: [
            { key: 'A', text: 'X: Kilogram / Gram, Y: Eşit kollu terazi, Z: Newton, T: Dinamometre' },
            { key: 'B', text: 'X: Newton, Y: Dinamometre, Z: Kilogram, T: Eşit kollu terazi' },
            { key: 'C', text: 'X: Gram, Y: Dinamometre, Z: Newton, T: Eşit kollu terazi' },
            { key: 'D', text: 'X: Newton, Y: Eşit kollu terazi, Z: Gram, T: Dinamometre' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kütlenin birimi kg/g, aleti eşit kollu terazidir. Ağırlığın birimi Newton, aleti ise dinamometredir.',
          skillTag: 'Tablo Yorumlama'
        }
      ]
    },
    {
      id: 'unit2-sub3',
      title: 'Sürtünme Kuvveti, Hava ve Su Direnci',
      shortTitle: '2.3 Sürtünme Kuvveti & Direnç',
      badge: 'Sayfa 77-97',
      pageRange: '77 - 97',
      concepts: ['Sürtünme kuvveti', 'Harekete zıt yön', 'Pürüzlü yüzey', 'Az pürüzlü yüzey', 'Hava direnci', 'Su direnci', 'Paraşüt ve flaplar', 'KAAN & Aerodinamik', 'Fatih Sultan Mehmet', 'Leonardo da Vinci', 'Cezeri', 'Hazini'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Sürtünme Kuvveti ve Harekete Etkisi',
          paragraphs: [
            'Birbiriyle temas hâlinde olan iki yüzey arasında gerçekleşen ve genellikle cismin HAREKETİNE ZIT YÖNDE ortaya çıkan, hareketi zorlaştıran veya engelleyen kuvvete "SÜRTÜNME KUVVETİ" denir.',
            'Örneğin bir koltuğu halı üzerinde iterken koltuğun tabanı ile halı lifleri arasında harekete ters yönde bir direnç oluşur. Bu direnç sürtünme kuvvetidir.',
            'Yüzeylerin yapısı sürtünme kuvvetinin büyüklüğünü doğrudan belirler: Girintili çıkıntılı yapıdaki yüzeyler "PÜRÜZLÜ", girinti çıkıntısı az olan yüzeyler ise "AZ PÜRÜZLÜ" olarak adlandırılır. Pürüzlü yüzeylerde (halı, zımpara, toprak, çakıl) sürtünme kuvveti çok fazlayken; az pürüzlü yüzeylerde (buz, cam, mermer, cilalı parke) sürtünme kuvveti oldukça düşüktür.'
          ],
          keyPoints: [
            'Sürtünme kuvveti daima temas eden yüzeyler arasında ve genellikle harekete zıt yönde oluşur.',
            'Pürüzlü yüzeylerde sürtünme büyüktür (cisimler zor hareket eder, çabuk durur).',
            'Az pürüzlü ve kaygan yüzeylerde sürtünme küçüktür (cisimler daha az kuvvetle kolayca hareket eder).'
          ],
          table: {
            headers: ['Yüzey Cinsi', 'Pürüzlülük Durumu', 'Sürtünme Kuvveti', 'Cismin Hareketi'],
            rows: [
              ['Zımpara Kâğıdı', 'Çok Pürüzlü', 'Çok Büyük', 'Zor hareket eder, kısa mesafede durur'],
              ['Halı Zemin', 'Pürüzlü', 'Büyük', 'Zor hareket eder'],
              ['Tahta Parke', 'Az Pürüzlü', 'Orta', 'Daha kolay hareket eder'],
              ['Cam / Buz Zemin', 'Çok Az Pürüzlü (Kaygan)', 'Çok Küçük', 'Çok kolay kayar, uzun mesafe gider']
            ]
          }
        },
        {
          heading: 'Sürtünmenin Olumlu ve Olumsuz Etkileri & Yaşamdaki Yeri',
          paragraphs: [
            'Sürtünme kuvveti hayatımızın her anında vardır ve hem olumlu hem de olumsuz sonuçlar doğurur:',
            '1. Olumlu Etkileri: Ayaklarımızın kaymadan yürümesi, araçların frene basıldığında durabilmesi, ellerimizle bardak veya kalem tutabilmemiz, kâğıda yazı yazabilmemiz, kibritin yanması sürtünme kuvveti sayesindedir.',
            '2. Olumsuz Etkileri: Ayakkabı tabanlarımızın ve araç lastiklerinin aşınıp eskimesi, makine dişlilerinin sürtünerek ısınması ve aşınması, kapı menteşelerinin gıcırdaması sürtünmenin olumsuz etkileridir.',
            'Sürtünmeyi Artırmaya Yönelik Uygulamalar: Kışın araba tekerlerine zincir takılması, futbolcuların çivili ayakkabı (krampon) giymesi, haltercilerin ellerine magnezyum tozu (pudra) sürmesi, merdiven kenarlarına kaydırmaz zımpara bant yapıştırılması.',
            'Sürtünmeyi Azaltmaya Yönelik Uygulamalar: Kapı menteşelerinin ve bisiklet zincirlerinin yağlanması, ağır valizlerin altına döner tekerlekler takılması, curling sporunda buzun süpürülmesi, motor yağı kullanılması.'
          ],
          keyPoints: [
            'Sürtünmeyi artırmak: Tutunmayı sağlar, kaymayı önler (zincir, krampon, pudra).',
            'Sürtünmeyi azaltmak: Enerji tasarrufu sağlar, aşınmayı önler (yağlama, tekerlek, cila).'
          ],
          scientistBox: {
            name: 'Fatih Sultan Mehmet’in Bilimsel Dehası (1453)',
            role: 'İstanbul’un Fethi ve Sürtünmenin Azaltılması',
            contribution: 'Bizanslıların Haliç’i kalın zincirlerle kapatması üzerine Fatih Sultan Mehmet, gemileri karadan yürütme emri vermiştir. Gemilerin karada rahatça kayıp ilerleyebilmesi için ağaç kütüklerin yuvarlanma hareketinden faydalanılmış ve sürtünme kuvvetini en aza indirmek için bu kütükler zeytinyağı ve hayvansal yağlarla iyice yağlanmıştır.'
          }
        },
        {
          heading: 'Hava ve Su Direnci (Akışkan Sürtünmesi)',
          paragraphs: [
            'Hava Direnci (Hava Sürtünmesi): Havanın, içinde hareket eden katı cisimlere karşı gösterdiği zorluğa ve dirence "hava direnci" denir.',
            '• Hava direncini azaltmak için: Hızlı trenlerin, yarış arabalarının, uçakların ve Millî Muharip Uçağımız KAAN’ın burun kısımları sivri ve aerodinamik olarak tasarlanır. Böylece yakıttan ve zamandan tasarruf sağlanır.',
            '• Hava direncini artırmak için: Paraşütçüler devasa paraşüt yüzeyi açarak hava direncini maksimuma çıkarır ve yere güvenli hızda yumuşak iniş yapar. Uçaklar iniş yaparken kanatlarındaki "flap (fılap)" adı verilen panelleri açarak hava direncini artırır ve pistte güvenle yavaşlar.',
            'Su Direnci (Su Sürtünmesi): Suyun, içinde hareket eden cisimlere karşı uyguladığı sürtünme kuvvetine "su direnci" denir. Su direnci hava direncinden çok daha büyüktür.',
            '• Gemilerin burun kısımlarının "V" şeklinde yapılması, denizaltıların sivri-yuvarlak torpido biçiminde tasarlanması ve balıkların pullu kaygan vücut hatları su direncini azaltmak içindir.'
          ],
          scientistBox: {
            name: 'Leonardo da Vinci & Hazini & Cezeri & Hezarfen',
            role: 'Tarihe Yön Veren Bilim İnsanları ve Mühendisler',
            contribution: 'Leonardo da Vinci sürtünme kuvveti üzerine deneyler yapmış ve temas yüzeyinin özelliklerini incelemiştir. El-Hazini "Hikmet Terazisi" ile metallerin yoğunluklarını ölçmüştür. El-Cezeri sibernetik ve sürtünmeyi yenen dişli makinelerin öncüsüdür. Hezarfen Ahmed Çelebi ise hava direncini ve kaldırma kuvvetini hesaplayarak kartal kanatlarıyla Galata Kulesi’nden Üsküdar’a uçmuştur.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Sürtünme kuvveti, hareket eden bir cismin hareket yönüyle daima aynı yöndedir.',
          isCorrect: false,
          explanation: 'Sürtünme kuvveti genellikle cismin hareket yönüne ZIT yönde ortaya çıkar.'
        },
        {
          id: 2,
          statement: 'Pürüzlü yüzeylerde sürtünme kuvveti, az pürüzlü ve kaygan yüzeylere göre daha fazladır.',
          isCorrect: true,
          explanation: 'Girintili çıkıntılı zeminler teması zorlaştırır ve sürtünme kuvvetini artırır.'
        },
        {
          id: 3,
          statement: 'Kış aylarında karlı ve buzlu yollarda araç tekerleklerine zincir takılması sürtünmeyi azaltmak içindir.',
          isCorrect: false,
          explanation: 'Zincir takılması sürtünmeyi ARTIRARAK aracın kaymasını ve kaza yapmasını önlemek içindir.'
        },
        {
          id: 4,
          statement: 'Ağır valizlerin ve koltukların altına tekerlek takılması sürtünme kuvvetini azaltır.',
          isCorrect: true,
          explanation: 'Yuvarlanma hareketi sürtünmeyi kayma hareketine göre büyük oranda azaltır.'
        },
        {
          id: 5,
          statement: 'Paraşütle atlayan bir sporcunun paraşütünü açması hava direncini artırmaya yöneliktir.',
          isCorrect: true,
          explanation: 'Geniş paraşüt yüzeyi hava direncini artırarak sporcunun yere güvenle yavaş inmesini sağlar.'
        },
        {
          id: 6,
          statement: 'Millî Muharip Uçak KAAN ve hızlı trenlerin burun kısımlarının sivri tasarlanması hava direncini artırmak içindir.',
          isCorrect: false,
          explanation: 'Sivri burun aerodinamik tasarım hava direncini AZALTMAK ve hızı artırmak içindir.'
        },
        {
          id: 7,
          statement: 'Su direnci, havanın uyguladığı hava direncinden daha küçüktür.',
          isCorrect: false,
          explanation: 'Su havaya göre çok daha yoğundur; bu yüzden su direnci hava direncinden çok daha büyüktür.'
        },
        {
          id: 8,
          statement: 'Kapı menteşelerinin gıcırdamasını önlemek için yağlanması sürtünmeyi azaltan bir uygulamadır.',
          isCorrect: true,
          explanation: 'Yağlama işlemi yüzeyler arasındaki mikroskobik pürüzleri doldurarak sürtünmeyi ve aşınmayı azaltır.'
        },
        {
          id: 9,
          statement: 'Fatih Sultan Mehmet İstanbul’un fethinde gemileri karadan yürütürken kütükleri yağlatarak sürtünmeyi azaltmıştır.',
          isCorrect: true,
          explanation: 'Kütüklerin yağlanması sürtünme kuvvetini düşürerek devasa gemilerin karada kaydırılmasını sağlamıştır.'
        },
        {
          id: 10,
          statement: 'Haltercilerin yarışma öncesi ellerine beyaz pudra (magnezyum tozu) sürmesi sürtünmeyi azaltmak içindir.',
          isCorrect: false,
          explanation: 'Pudra teri emip pürüzlülüğü sağlayarak sürtünmeyi ARTIRIR ve halter barının elden kaymasını önler.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Özdeş üç oyuncak araba, aynı eğim açısına sahip rampaların tepe noktasından aynı anda serbest bırakılmıştır. Rampaların zeminleri sırasıyla zımpara kâğıdı, mukavva karton ve cam yüzey ile kaplanmıştır.',
          visualData: {
            type: 'table',
            title: 'Oyuncak Arabaların Zeminlerde Aldığı Yollar',
            tableHeaders: ['Zemin Türü', 'Arabanın Durana Kadar Aldığı Mesafe'],
            tableRows: [
              ['Zımpara Kâğıdı', '35 cm'],
              ['Mukavva Karton', '75 cm'],
              ['Cam Yüzey', '160 cm']
            ]
          },
          questionPrompt: 'Bu deney verilerine göre ulaşılabilecek en doğru çıkarım aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Zeminlerin pürüzlülüğü arttıkça sürtünme kuvveti artar ve cisimlerin durma mesafesi kısalır.' },
            { key: 'B', text: 'Cam yüzey arabaya en fazla sürtünme kuvveti uygulamıştır.' },
            { key: 'C', text: 'Mukavva kartondaki sürtünme zımparadan fazladır.' },
            { key: 'D', text: 'Arabaların kütleleri farklı olduğu için bu sonuç ortaya çıkmıştır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'En pürüzlü zemin zımpara kâğıdıdır ve en büyük sürtünme kuvvetini uygulayarak arabayı 35 cm’de durdurmuştur. Cam yüzey ise çok az pürüzlü olduğundan araba 160 cm kaymıştır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 2,
          context: 'Curling (körling) sporu kış olimpiyatlarının popüler dallarındandır. Sporcular fırlatılan ağır granit taşın önündeki buzu özel süpürgelerle şiddetle süpürürler. Süpürme sırasında sürtünmeyle buz yüzeyinde anlık mikroskobik bir su tabakası oluşur.',
          questionPrompt: 'Sporcuların buzu süpürmelerindeki asıl amaç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Buz yüzeyindeki pürüzlülüğü ve sürtünme kuvvetini azaltarak taşın daha uzağa ve istenen hedefe gitmesini sağlamak' },
            { key: 'B', text: 'Taşın kütlesini artırarak daha hızlı durdurmak' },
            { key: 'C', text: 'Buzun eriyip tamamen yok olmasını sağlamak' },
            { key: 'D', text: 'Hava direncini maksimum seviyeye çıkarmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 85. sayfasındaki Körling Bilgi İstasyonu’na göre buzun süpürülmesi pürüzlülüğü ve sürtünmeyi azaltır, böylece curling taşı daha az enerji kaybedip çok daha uzağa kayar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 3,
          context: 'Kerem hafta sonu bisikletiyle asfaltta çok rahat ve hızlı ilerlerken orman içindeki taşlı, çakıllı ve çamurlu patikaya girdiğinde pedalları çevirmekte çok zorlanmış ve bisikleti ilerletememiştir.',
          questionPrompt: 'Kerem’in patika yolda zorlanmasının fen bilimleri dilindeki gerekçesi nedir?',
          options: [
            { key: 'A', text: 'Patika yolun pürüzlülüğünün ve dolayısıyla bisiklet tekerleklerine uygulanan sürtünme kuvvetinin asfalta göre çok daha fazla olması' },
            { key: 'B', text: 'Patikada yer çekiminin sıfırlanması' },
            { key: 'C', text: 'Bisikletin kütlesinin patikada kendiliğinden iki katına çıkması' },
            { key: 'D', text: 'Ormanda havanın olmaması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Asfalt yol az pürüzlüdür; taşlı çakıllı zemin ise yüksek pürüzlülüğe sahiptir ve tekerleğin hareketine karşı çok daha büyük bir sürtünme direnci oluşturur.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 4,
          context: 'Uçak mühendisleri yolcu uçaklarının kanatlarına "flap" adı verilen hareketli paneller yerleştirmişlerdir. Uçak seyir halindeyken bu flaplar kapalı dururken, iniş anında aşağı doğru açılarak kanadın yüzey alanını genişletir.',
          questionPrompt: 'İniş anında flapların açılmasının temel işlevi nedir?',
          options: [
            { key: 'A', text: 'Hava direncini artırarak uçağın kontrollü bir şekilde yavaşlamasını ve piste güvenle inmesini sağlamak' },
            { key: 'B', text: 'Uçağın motorunu kapatmak' },
            { key: 'C', text: 'Uçağın kütlesini azaltmak' },
            { key: 'D', text: 'Uçağın aniden hızlanıp tekrar yükselmesini sağlamak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 88. sayfasında açıklandığı gibi uçak kanatlarındaki flaplar açıldığında hava ile temas eden yüzey genişler, hava direnci artar ve uçak güvenli şekilde yavaşlar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 5,
          context: 'Bir öğrenci A4 boyutundaki iki özdeş fon kartonunu almıştır. Birinci kartonu tamamen buruşturup sıkı bir top haline getirmiş, ikinci kartonu ise açık ve düz bırakmıştır. Her iki kartonu aynı anda aynı yükseklikten serbest bırakmıştır.',
          questionPrompt: 'Buruşturulan kartonun açık kartondan çok daha önce yere düşmesinin nedeni hangisidir?',
          options: [
            { key: 'A', text: 'Buruşturulan kartonun hava ile temas eden yüzey alanının küçülmesi ve maruz kaldığı hava direncinin azalması' },
            { key: 'B', text: 'Buruşturulan kartonun kütlesinin artması' },
            { key: 'C', text: 'Açık kartona daha fazla yer çekimi etki etmesi' },
            { key: 'D', text: 'Buruşturulan kartonun ağırlığının iki katına çıkması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Her iki kartonun kütlesi tamamen eşittir. Ancak açık kartonun yüzeyi geniş olduğu için çok daha fazla hava direncine çarparak yavaşlar; top şeklindeki karton ise az hava direncine uğrayıp hızla düşer.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 6,
          context: 'Gemi inşa mühendisleri büyük yük gemilerinin ve feribotların baş kısımlarını (pruvalarını) "V" şeklinde veya sivri burunlu olarak tasarlarlar.',
          questionPrompt: 'Bu tasarımın denizcilikte sağladığı en büyük kazanım nedir?',
          options: [
            { key: 'A', text: 'Suyun uyguladığı su direncini yararak azaltmak, böylece yakıt ve zaman tasarrufu sağlamak' },
            { key: 'B', text: 'Geminin dalgalar üzerinde batmasını kolaylaştırmak' },
            { key: 'C', text: 'Geminin yük kapasitesini sıfırlamak' },
            { key: 'D', text: 'Gemiyi rüzgârın yönüne ters çevirmek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 88. sayfasında gemilerin V şeklindeki pruvasının su direncini ve sürtünmeyi en aza indirerek hem yakıttan hem de zamandan tasarruf sağladığı belirtilmektedir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 7,
          context: 'Aşağıda sürtünme kuvveti ile ilgili günlük hayattan bazı örnekler verilmiştir:\n1. Merdiven basamaklarına kaydırmaz bant yapıştırılması\n2. Bisiklet zincirlerinin düzenli yağlanması\n3. Futbolcuların krampon tabanlarında çiviler bulunması\n4. Ağır eşyaların altına keçe veya tekerlek konulması',
          questionPrompt: 'Bu örneklerden hangileri "sürtünmeyi AZALTMAYA" yöneliktir?',
          options: [
            { key: 'A', text: '1 ve 3' },
            { key: 'B', text: '2 ve 4' },
            { key: 'C', text: '1 ve 4' },
            { key: 'D', text: '2 ve 3' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Yağlama (2) ve tekerlek takma (4) sürtünmeyi azaltır. Kaydırmaz bant (1) ve krampon çivileri (3) ise sürtünmeyi artırır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 8,
          context: 'Fatih Sultan Mehmet, 1453 yılında Haliç’e zincir çekilmesi engeline karşı kütükleri yağlatarak gemileri karadan yürütmüştür.',
          questionPrompt: 'Bu taktik dehası fen bilimlerinin hangi iki temel ilkesini başarıyla birleştirmiştir?',
          options: [
            { key: 'A', text: 'Yuvarlanma hareketinin sürtünmeyi azaltması ve yağlama sayesinde pürüzlerin doldurularak sürtünme kuvvetinin en aza indirilmesi' },
            { key: 'B', text: 'Suyun kaldırma kuvveti ile hava direncinin eşitlenmesi' },
            { key: 'C', text: 'Yer çekiminin tamamen yok edilmesi' },
            { key: 'D', text: 'Gemilerin kütlesinin azaltılması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 82. sayfasındaki Bilgi İstasyonu’na göre yuvarlak kütükler kayma yerine yuvarlanma hareketi sağlamış, yağlama ise sürtünmeyi minimuma indirmiştir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 9,
          context: 'Tarihî Kırkpınar Yağlı Güreşleri’nde pehlivanlar er meydanına çıkmadan önce zeytinyağı ile vücutlarını baştan aşağı yağlarlar.',
          questionPrompt: 'Güreşçilerin vücutlarını yağlamasının güreş müsabakasına olan fiziksel etkisi nedir?',
          options: [
            { key: 'A', text: 'Vücut yüzeyindeki sürtünmeyi azaltarak rakibin kavramasını ve tutmasını zorlaştırmak, güreşi teknik ve usta işine dönüştürmek' },
            { key: 'B', text: 'Pehlivanın ağırlığını iki katına çıkarmak' },
            { key: 'C', text: 'Güreşçinin kütlesini hafifletmek' },
            { key: 'D', text: 'Hava direncini artırmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 86. sayfasında belirtildiği gibi yağlanan vücut kayganlaşır, sürtünme azalır ve rakip tarafından tutulması güçleşir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 10,
          context: 'Su dolu bir şişenin içerisine bir silgi atıldığında silginin tabana inme süresi 1,8 saniye ölçülmüştür. Aynı şişenin suyu boşaltılıp içi hava doluyken silgi bırakıldığında tabana inme süresi 0,2 saniye olarak ölçülmüştür.',
          questionPrompt: 'Bu deneyden elde edilen en önemli bilimsel sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Su direncinin cisimlerin hareketine karşı gösterdiği zorluk, hava direncinden çok daha büyüktür.' },
            { key: 'B', text: 'Hava cisimlere hiçbir direnç uygulamaz.' },
            { key: 'C', text: 'Silginin kütlesi suyun içinde artmıştır.' },
            { key: 'D', text: 'Silgi suda yüzmektedir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 81. sayfasındaki deneyde görüldüğü gibi su yoğun bir akışkandır ve silgiye uyguladığı su direnci hava direncine göre katbekat büyüktür; bu yüzden silgi suda çok daha yavaş iner.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 11,
          context: 'Hacivat ile Karagöz arasındaki diyalogda Hacivat, halı üzerindeki ağır koltukları tek başına çekerken çok zorlandığını ve belini incittiğini söylemektedir. Hekim ona koltukların ayaklarına tekerlek takmasını tavsiye etmiştir.',
          questionPrompt: 'Hacivat’ın belini incitmesinde rol oynayan etkenler arasında aşağıdakilerden hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Halı zeminin sürtünme kuvvetinin mermer zemine göre daha az olması' },
            { key: 'B', text: 'Koltuğu hareket ettirmek için büyük bir kuvvet uygulamak zorunda kalması' },
            { key: 'C', text: 'Koltuk ile halı arasındaki temas yüzeyinde sürtünmenin fazla olması' },
            { key: 'D', text: 'Halı yüzeyinin pürüzlü yapıda olması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Halı zeminin sürtünmesi mermerden AZ değil, tam tersine FAZLADIR. Bu fazla sürtünme Hacivat’ın aşırı kuvvet uygulayarak belini incitmesine neden olmuştur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Türkiye’nin 5. nesil yerli savaş uçağı Millî Muharip Uçak KAAN’ın gövdesi, kanat açıları ve özellikle sivri burun yapısı rüzgâr tünellerinde binlerce saat test edilmiştir.',
          questionPrompt: 'KAAN’ın bu özel gövde geometrisinin temel amacı nedir?',
          options: [
            { key: 'A', text: 'Hava direncini en aza indirerek süpersonik (ses üstü) hızlara daha az yakıt tüketimiyle kolayca ulaşabilmek' },
            { key: 'B', text: 'Uçağın havada durmasını sağlamak' },
            { key: 'C', text: 'Uçağın kütlesini artırmak' },
            { key: 'D', text: 'Uçağı sadece suda yüzdürmek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 77 ve 88. sayfalarında vurgulandığı gibi aerodinamik sivri hatlar hava direncini kırarak uçağın yüksek süratlere minimum dirençle ulaşmasını sağlar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 13,
          context: 'Kış olimpiyatlarında kayak yapan bir sporcu kayak takımlarının altını özel parafin mumlarıyla cilalamaktadır.',
          questionPrompt: 'Sporcunun bu hazırlığı sürtünme kuvveti açısından nasıl açıklanır?',
          options: [
            { key: 'A', text: 'Kar ile kayak arasındaki sürtünmeyi en aza indirerek hızlanmayı sağlamak' },
            { key: 'B', text: 'Sürtünmeyi artırarak hemen durmak' },
            { key: 'C', text: 'Kayakların karda batmasını sağlamak' },
            { key: 'D', text: 'Sporcunun ağırlığını artırmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Cilalama işlemi kayak altındaki mikroskobik pürüzleri kapatır ve sürtünme kuvvetini düşürerek maksimum kayma hızı sağlar.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 14,
          context: 'Bir öğrenci masanın üzerindeki kitabı önce düz olarak itmiş ve 10 N kuvvetle hareket ettirmiştir. Ardından kitabın altına üç adet silindir kurşun kalem koyarak ittiğinde sadece 2 N kuvvetle rahatça hareket ettiğini görmüştür.',
          questionPrompt: 'Bu deney öğrenciye hangi bilimsel gerçeği öğretir?',
          options: [
            { key: 'A', text: 'Yuvarlanma hareketindeki sürtünme kuvvetinin kayma hareketindeki sürtünme kuvvetinden çok daha küçük olduğunu' },
            { key: 'B', text: 'Kalemlerin kitabın kütlesini azalttığını' },
            { key: 'C', text: 'Masanın yer çekimini ortadan kaldırdığını' },
            { key: 'D', text: 'Kitabın esnek bir maddeye dönüştüğünü' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 83. sayfasındaki deneyde görüldüğü gibi silindir kalemler tekerlek gibi dönerek sürtünmeyi 10 N’dan 2 N’a düşürür.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 15,
          context: 'Sürtünme kuvveti olmasaydı dünyamızda ne gibi durumlar yaşanırdı?',
          questionPrompt: 'Aşağıdakilerden hangisi sürtünme kuvvetinin tamamen yok olduğu hayali bir dünyada meydana gelmezdi?',
          options: [
            { key: 'A', text: 'Hareket eden araçlar fren yapsa bile asla duramazdı.' },
            { key: 'B', text: 'İnsanlar adım attıklarında sürekli kayarak yere düşer, yürüyemezdi.' },
            { key: 'C', text: 'Elde tutulan bardaklar kayıp düşerdi.' },
            { key: 'D', text: 'Cisimlerin kütlesi tamamen sıfıra inerdi.' }
          ],
          correctAnswer: 'D',
          detailedExplanation: 'Kütle madde miktarıdır; sürtünme kuvvetiyle hiçbir ilgisi yoktur. Sürtünme olmasa yürüyemez, duramaz, yazı yazamazdık fakat kütlemiz aynen kalırdı.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 16,
          context: 'Denizaltıların gövde tasarımları incelendiğinde balıkların ve yunusların vücut yapısına benzer şekilde pürüzsüz, yuvarlak hatlı ve basık bir geometriye sahip oldukları görülür.',
          questionPrompt: 'Bu durum mühendislikte hangi yaklaşıma örnek gösterilebilir?',
          options: [
            { key: 'A', text: 'Doğadaki canlıların su direncini azaltan anatomik özelliklerinin teknolojik araç tasarımına ilham olması (Biyotaklit)' },
            { key: 'B', text: 'Denizaltıların balık yakalamasını kolaylaştırmak' },
            { key: 'C', text: 'Denizaltının görünmez olmasını sağlamak' },
            { key: 'D', text: 'Su direncini maksimum seviyeye çıkarmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Yunus ve balıkların aerodinamik vücutları su direncini minimize eder. İnsanlar bu formu denizaltılara kopyalayarak su direncini azaltmışlardır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 17,
          context: 'Resim sanatçıları kömür kalem (füzen) çalışması yaparken pürüzlü dokulu resim kâğıtlarını tercih ederken; teknik çizim yapan mimarlar kaygan ve pürüzsüz aydınger kâğıtlarını tercih ederler.',
          questionPrompt: 'Bu tercihin sürtünme kuvveti ile ilişkisi hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Kömür kalemin toz bırakabilmesi için sürtünmenin fazla olması gerekirken, teknik kalemin takılmadan akıcı kayması için az sürtünme gereklidir.' },
            { key: 'B', text: 'Pürüzlü kâğıtlar daha hafiftir.' },
            { key: 'C', text: 'Aydınger kâğıdında yer çekimi daha azdır.' },
            { key: 'D', text: 'Kömür kalemler sadece suda çalışır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 82. sayfasında açıklandığı gibi sanat dallarında yüzey pürüzlülüğü ve sürtünme kasten seçilir; kömürün kâğıda tutunması sürtünme sayesindedir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 18,
          context: 'Bir otomobil kuru asfalt yolda 50 km/h hızla giderken frene basıldığında 15 metrede durabilmiştir. Aynı otomobil yağmurlu ve ıslak yolda aynı hızla frene bastığında ise ancak 30 metrede durabilmiştir.',
          questionPrompt: 'Islak yolda durma mesafesinin iki katına çıkmasının nedeni nedir?',
          options: [
            { key: 'A', text: 'Yoldaki su tabakasının lastik ile asfalt arasındaki pürüzleri doldurarak sürtünme kuvvetini azaltması' },
            { key: 'B', text: 'Otomobilin kütlesinin yağmurda artması' },
            { key: 'C', text: 'Yağmurun hava direncini artırması' },
            { key: 'D', text: 'Otomobilin motor gücünün düşmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Su tabakası zemin ile lastik arasına girerek sürtünmeyi büyük oranda düşürür (kayganlaştırır); sürtünme azaldığı için frenleme mesafesi uzar.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 19,
          context: 'Özdeş K ve L cisimleri dinamometre ile cam yüzeyde, tahta yüzeyde ve halı yüzeyde çekilerek hareket ettirildiğinde dinamometrede okunan değerler karşılaştırılmıştır.',
          questionPrompt: 'Ölçülen kuvvet değerlerinin sıralaması aşağıdakilerden hangisi olmalıdır?',
          options: [
            { key: 'A', text: 'Halı yüzey > Tahta yüzey > Cam yüzey' },
            { key: 'B', text: 'Cam yüzey > Tahta yüzey > Halı yüzey' },
            { key: 'C', text: 'Tahta yüzey > Cam yüzey > Halı yüzey' },
            { key: 'D', text: 'Her üç yüzeyde de eşit kuvvet okunur' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Sürtünme kuvveti yüzeyin pürüzlülüğüne bağlıdır. En pürüzlü olan halıda sürtünme en büyük (en çok kuvvet gerekir), en az pürüzlü olan camda ise en küçüktür.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 20,
          context: 'Hezarfen Ahmed Çelebi, 17. yüzyılda Galata Kulesi’nden havalanarak lodos rüzgârına karşı kanat çırpmış ve boğazı geçerek Üsküdar Doğancılar Meydanı’na inmeyi başarmıştır.',
          questionPrompt: 'Hezarfen’in bu efsanevi uçuşunda tasarladığı kanatların temel fen prensibi nedir?',
          options: [
            { key: 'A', text: 'Geniş kanat yüzeyi sayesinde hava direncini ve havanın kaldırma kuvvetini dengeleyerek havada süzülmeyi sağlamak' },
            { key: 'B', text: 'Yer çekimini tamamen yok etmek' },
            { key: 'C', text: 'Su direncinden kaçmak' },
            { key: 'D', text: 'Rüzgârı durdurmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 93. sayfasında Çağını Aşanlar bölümünde Hezarfen’in rüzgârın şiddetini ve kanatların hava ile etkileşimini hesaplayarak uçuşu gerçekleştirdiği vurgulanır.',
          skillTag: 'Bilimsel Çıkarım'
        }
      ]
    }
  ]
};
