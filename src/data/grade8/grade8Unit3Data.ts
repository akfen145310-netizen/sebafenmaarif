import { Unit } from '../../types/curriculum';

export const grade8Unit3Data: Unit = {
  id: 'g8-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Basınç',
  unitEndPageRange: 's. 117-125',
  colorTheme: {
    primary: 'from-emerald-600 to-green-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g8-u3-sub1',
      title: '1. Bölüm: Katı Basıncı',
      shortTitle: 'Katı Basıncı',
      badge: 'Sayfa 106-109',
      pageRange: '106 - 109',
      concepts: ['Birim Yüzeye Dik Kuvvet', 'Basınç (P)', 'Pascal (Pa)', 'Yüzey Alanı (S)', 'Ağırlık / Kuvvet (F)', 'Ters Orantı ve Doğru Orantı', 'Bıçak ve Çivi', 'Kar Ayakkabısı ve Palet'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Katı Basıncını Etkileyen Değişkenler ve Formül',
          paragraphs: [
            'Birim yüzeye dik olarak etki eden kuvvete basınç (P) denir. Katıların basınç birimi Pascal’dır (Pa). Katı basıncı formülü: Basınç = Dik Kuvvet (Ağırlık) / Temas Yüzey Alanı (P = G / S).',
            '1. Ağırlık (Kuvvet) ile İlişki: Temas yüzey alanı sabit tutulduğunda, katı bir cismin ağırlığı (kuvveti) arttıkça zemine uyguladığı basınç doğru orantılı olarak artar (Kum zemin üzerine konulan 1 tuğla az batarken, üst üste konulan 2 tuğla kuma daha derin batar).',
            '2. Yüzey Alanı ile İlişki: Ağırlık sabit tutulduğunda, cismin zemine temas eden yüzey alanı küçüldükçe basınç artar; yüzey alanı büyüdükçe basınç azalır (Ters orantı). Örneğin bir tuğla dikey konulduğunda (küçük yüzey) kuma derin batarken, yatay konulduğunda (geniş yüzey) kuma daha az batar.'
          ],
          keyPoints: [
            'Basıncı Artıran Durumlar (Yüzey alanı küçültülür): Bıçakların bilenmesi, çivilerin ve iğnelerin sivri uçlu yapılması, futbolcuların krampon dişleri, buz pateninin altındaki ince çelik hat.',
            'Basıncı Azaltan Durumlar (Yüzey alanı büyütülür): Karda batmamak için geniş tabanlı kar ayakkabısı giyilmesi, ağır iş makineleri ve tanklara geniş palet takılması, kamyonların tekerlek sayısının artırılması, ördeklerin ayaklarının perdeli olması, fillerin geniş tabanlı ayakları.',
            'Katılar üzerlerine uygulanan KUVVETİ yönünü ve büyüklüğünü değiştirmeden AYNEN iletir. Ancak basınç yüzey alanına göre değişir!'
          ],
          examNote: '📌 LGS KURALI: Düzgün geometrik katı cisimler (dikdörtgen prizma vb.) düşey olarak tam ortadan ikiye kesilirse, ağırlık ile yüzey alanı aynı oranda azaldığı için zemine yaptıkları basınç DEĞİŞMEZ!'
        }
      ],
      glossary: [
        { term: 'Basınç', definition: 'Birim yüzeye dik olarak etki eden kuvvet miktarı (P = F / S).' },
        { term: 'Pascal', definition: 'Metrekareye düşen 1 Newton’lık kuvvete denk gelen basınç birimi (1 Pa = 1 N/m²).' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Katı cismin zemine temas eden yüzey alanı arttıkça uyguladığı basınç artar.', isCorrect: false, explanation: 'Yüzey alanı arttıkça basınç azalır (ters orantı).' },
        { id: 2, statement: 'Katılar kendilerine uygulanan kuvveti doğrultusunu ve büyüklüğünü değiştirmeden aynen iletirler.', isCorrect: true, explanation: 'Katılar kuvveti aynen iletir, basıncı ise yüzeye göre değiştirir.' },
        { id: 3, statement: 'Ağır iş makinelerinin tekerlek yerine palet kullanması basıncı azaltmak içindir.', isCorrect: true, explanation: 'Palet yüzey alanını büyüterek batmayı engeller.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Katı Basıncı ve Yüzey Alanı',
          cognitiveLevel: 'Deney Analizi',
          contextTitle: 'Özdeş Tuğlaların Kum Zemindeki Batma Derinliği',
          scenario: 'Özdeş üç tuğla kum zemin üzerine farklı konumlarda yerleştirilmiştir: 1. Tuğla geniş yüzeyi üzerine tek başına, 2. Tuğla dar yüzeyi üzerine tek başına, 3. İki tuğla üst üste dar yüzey üzerine konulmuştur.',
          questionPrompt: 'Bu tuğlaların kum zeminde oluşturduğu batma derinliklerinin (basınçlarının) büyükten küçüğe doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: '3 > 2 > 1' },
            { key: 'B', text: '1 > 2 > 3' },
            { key: 'C', text: '2 > 3 > 1' },
            { key: 'D', text: '3 > 1 > 2' }
          ],
          correctAnswer: 'A',
          explanation: '3. düzenekte ağırlık 2G, yüzey S (Basınç 2P). 2. düzenekte ağırlık G, yüzey S (Basınç P). 1. düzenekte ağırlık G, yüzey 2S (Basınç P/2). Sıralama 3 > 2 > 1 olur.'
        }
      ]
    },
    {
      id: 'g8-u3-sub2',
      title: '2. Bölüm: Sıvı Basıncı ve Pascal Prensibi',
      shortTitle: 'Sıvı Basıncı & Pascal',
      badge: 'Sayfa 110-115',
      pageRange: '110 - 115',
      concepts: ['Sıvı Basıncı', 'Derinlik (h)', 'Yoğunluk (d)', 'Kabın Şeklinden Bağımsızlık', 'Pascal Prensibi', 'Blaise Pascal', 'Su Cenderesi', 'Hidrolik Fren', 'İtfaiye Merdiveni ve Lift'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Sıvı Basıncını Etkileyen Faktörler (P = h · d · g)',
          paragraphs: [
            'Sıvılar ağırlıkları ve akışkan olmaları sebebiyle temas ettikleri kabın tabanına ve yan yüzeylerine basınç uygular.',
            'Sıvı Basıncı Nelere Bağlıdır? 1. Sıvının Derinliği (h): Sıvı yüzeyinden aşağıya doğru inildikçe derinlik artar ve sıvı basıncı doğru orantılı olarak artar. (Ders kitabındaki pet şişe deneyinde en alttaki delikten su en uzağa fışkırır). 2. Sıvının Yoğunluğu (d): Aynı derinlikteki sıvılardan yoğunluğu büyük olanın basıncı daha fazladır (Suyun yoğunluğu d=1 g/cm³, zeytinyağının yoğunluğu d=0,9 g/cm³ olduğundan su daha büyük basınç uygular).',
            'Sıvı Basıncı Nelere BAĞLI DEĞİLDİR? Sıvının miktarına (hacmine), kabın genişliğine ve kabın şekline KESİNLİKLE BAĞLI DEĞİLDİR!'
          ],
          keyPoints: [
            'Sıvı basıncı formülü: P = derinlik (h) × yoğunluk (d).',
            'Baraj duvarları, derinlere indikçe sıvı basıncı arttığı için tabana doğru kalınlaşacak şekilde inşa edilir.',
            'U borusunda veya bileşik kaplarda tabandaki sıvı basınçları sadece h ve d’ye bağlıdır.'
          ]
        },
        {
          heading: 'Pascal Prensibi ve Teknolojik Uygulamaları',
          paragraphs: [
            'Fransız bilim insanı Blaise Pascal tarafından keşfedilen ilkeye göre: "Kapalı bir kapta bulunan sıvıya uygulanan basınç, sıvı tarafından sıvının temas ettiği her noktaya her doğrultuda ve yönde AYNEN iletilir." Buna Pascal Prensibi denir.',
            'Sıvılar sıkıştırılamaz kabul edilir. Bu sayede küçük bir kuvvetle büyük kuvvetler elde edilir.',
            'Pascal Prensibi ile Çalışan Araçlar: Su cendereleri, arabaların hidrolik fren sistemleri, berber ve dişçi koltukları, oto liftleri, itfaiye merdivenleri, hidrolik kepçe ve vinçler, hidrolik presler.'
          ],
          examNote: '📌 LGS AYRIMI: Sıvılar kendilerine uygulanan KUVVETİ değil, BASINCI aynen iletir! Küçük piston alanından büyük piston alanına geçildiğinde kuvvet kat kat büyür.'
        }
      ],
      glossary: [
        { term: 'Pascal Prensibi', definition: 'Kapalı kaplardaki sıvıların üzerlerine uygulanan basıncı her yöne aynen iletmesi ilkesi.' },
        { term: 'Su Cenderesi', definition: 'Farklı kesit alanına sahip silindirlerle küçük kuvvetle devasa yükleri kaldıran hidrolik sistem.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Sıvı basıncı, sıvının konulduğu kabın şekline ve genişliğine bağlıdır.', isCorrect: false, explanation: 'Sıvı basıncı kabın şekline bağlı değildir, sadece derinlik ve yoğunluğa bağlıdır.' },
        { id: 2, statement: 'Kapalı kaptaki sıvılar üzerlerine uygulanan basıncı her yöne eşit büyüklükte iletir.', isCorrect: true, explanation: 'Pascal prensibinin temel kuralıdır.' },
        { id: 3, statement: 'Baraj duvarlarının tabana doğru kalın yapılmasının sebebi derinlere indikçe sıvı basıncının artmasıdır.', isCorrect: true, explanation: 'Derinlik arttıkça su basıncı artar ve kalın duvar gerekir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Sıvı Basıncı Değişkenleri',
          cognitiveLevel: 'Deney ve Değişken Analizi',
          contextTitle: 'Özdeş Kaplardaki Sıvı Basınçları',
          scenario: 'Şekilleri birbirinden tamamen farklı olan K, L ve M kaplarına aynı yükseklikte (h) saf su doldurulmuştur.',
          questionPrompt: 'Kapların tabanlarındaki sıvı basınçları (PK, PL, PM) arasındaki ilişki nasıldır?',
          options: [
            { key: 'A', text: 'PK = PL = PM' },
            { key: 'B', text: 'PK > PL > PM' },
            { key: 'C', text: 'PM > PL > PK' },
            { key: 'D', text: 'Kabı en geniş olanın taban basıncı en büyüktür.' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıvı basıncı kabın şekline ve su miktarına bağlı değildir. Aynı cins sıvı ve aynı yükseklikte (h) oldukları için taban basınçları birbirine eşittir.'
        }
      ]
    },
    {
      id: 'g8-u3-sub3',
      title: '3. Bölüm: Gazların Basıncı ve Açık Hava Basıncı',
      shortTitle: 'Gaz Basıncı & Torricelli',
      badge: 'Sayfa 112-116',
      pageRange: '112 - 116',
      concepts: ['Gaz Basıncı', 'Açık Hava Basıncı (Atmosfer Basıncı)', 'Evangelista Torricelli', 'Barometre ve 76 cm-Hg', 'Ters Çevrilen Su Bardağı Deneyi', 'Magdeburg Küreleri', 'Gazların Sıkıştırılabilirliği'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Açık Hava Basıncı ve Torricelli Deneyi',
          paragraphs: [
            'Hava hem ağırlığından hem de sürekli hareket eden gaz moleküllerinin çarpmasından dolayı yeryüzündeki tüm varlıklara her yönden bir basınç uygular. Buna açık hava basıncı (atmosfer basıncı - P0) denir.',
            'Torricelli Deneyi (1643): İtalyan bilim insanı Evangelista Torricelli, deniz seviyesinde ve 0 °C sıcaklıkta 1 metre uzunluğundaki cam boruyu cıva ile doldurup cıva dolu çanağa ters daldırmıştır. Borudaki cıvanın 76 cm yüksekliğinde dengede kaldığını görmüştür.',
            'Açık Hava Basıncı Değeri: Deniz seviyesinde P0 = 76 cm-Hg (yaklaşık 101.300 Pa = 1 atm) değerindedir. Cam borunun eğik tutulması veya kalınlığı cıva yüksekliğini (76 cm) değiştirmez!',
            'Yükseklik İlişkisi: Deniz seviyesinden dağların zirvesine doğru çıkıldıkça atmosferdeki hava molekülleri seyreldiği ve gaz yoğunluğu azaldığı için açık hava basıncı AZALIR.'
          ],
          keyPoints: [
            'Yükseklere çıkıldıkça açık hava basıncı azalır (Dağcıların kulak tıkanması ve burun kanaması).',
            'Ters çevrilen su bardağının altındaki kâğıdın düşmemesi, açık hava basıncının sıvı basıncından büyük olduğunu kanıtlar.',
            'İçindeki havası çekilen teneke kutu veya pet şişenin içe doğru büzüşmesi açık hava basıncının varlığını ispatlar.',
            'Pipetle meyve suyu içilmesi, vantuzların cama yapışması, elektrik süpürgesi açık hava basıncı prensibiyle çalışır.'
          ]
        },
        {
          heading: 'Kapalı Kaplardaki Gaz Basıncı ve Teknolojik Örnekler',
          paragraphs: [
            'Kapalı kaplardaki gazlar, moleküllerinin sürekli kabın iç çeperlerine çarpması sonucu basınç oluşturur. Gaz kabın her noktasına EŞİT basınç uygular.',
            'Gazlar yüksek basınç altında sıkıştırılarak sıvılaştırılabilir (Mutfak tüpleri, oksijen tüpleri, yangın söndürme tüpleri, deodorantlar).',
            'Otomobillerdeki hava yastıkları (airbag) çarpışma anında kimyasal tepkimeyle gaz üreterek anında şişer ve basınç ile hayat kurtarır.'
          ],
          examNote: '📌 LGS SORUSU: Torricelli deneyinde cıva yerine SU kullanılsaydı, suyun yoğunluğu cıvadan ~13,6 kat daha az olduğu için borunun boyu yaklaşık 10,5 METRE olmak zorundaydı!'
        }
      ],
      glossary: [
        { term: 'Açık Hava Basıncı', definition: 'Atmosferi oluşturan gazların ağırlığı ve hareketiyle yeryüzüne uyguladığı basınç.' },
        { term: 'Barometre', definition: 'Açık hava basıncını ölçen alet.' },
        { term: 'Manometre', definition: 'Kapalı kaplardaki gaz basıncını ölçen alet.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Deniz seviyesinden dağlara doğru çıkıldıkça açık hava basıncı artar.', isCorrect: false, explanation: 'Yükseklere çıkıldıkça hava yoğunluğu azalır ve açık hava basıncı düşer.' },
        { id: 2, statement: 'Torricelli deneyinde cıva yüksekliği cam borunun kalınlığına bağlı değildir.', isCorrect: true, explanation: 'Borunun eğimi ve kesit alanı 76 cm cıva seviyesini etkilemez.' },
        { id: 3, statement: 'Otomobil hava yastıkları ve yangın tüpleri gazların basınç özelliklerinden yararlanılarak geliştirilmiştir.', isCorrect: true, explanation: 'Sıkıştırılmış gaz teknolojisine dayanır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Açık Hava Basıncı ve Yükseklik',
          cognitiveLevel: 'Deney ve Grafik Yorumlama',
          contextTitle: 'Uçan Balonun Dağa Tırmanışı',
          scenario: 'Ders kitabının 122. sayfasındaki soruda olduğu gibi esnek bir çocuk balonu şişirilerek deniz seviyesinden (K noktası) yüksek bir dağın tepesine (L noktası) çıkarılmıştır.',
          questionPrompt: 'Balon L noktasına ulaştığında balona etki eden açık hava basıncı ve balonun hacmi nasıl değişir?',
          options: [
            { key: 'A', text: 'Açık hava basıncı azalır, balonun hacmi artarak şişer.' },
            { key: 'B', text: 'Açık hava basıncı artar, balon küçülür.' },
            { key: 'C', text: 'Açık hava basıncı değişmez, balonun hacmi sabit kalır.' },
            { key: 'D', text: 'Açık hava basıncı azaldığı için balon hemen büzüşür.' }
          ],
          correctAnswer: 'A',
          explanation: 'Yükseğe çıkıldıkça dışarıdaki açık hava basıncı azalır; balonun içindeki gaz dış basınca denge sağlamak için genleşir ve balonun hacmi büyür.'
        }
      ]
    }
  ]
};
