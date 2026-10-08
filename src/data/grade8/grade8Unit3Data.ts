import { Unit } from '../../types/curriculum';
import { grade8Unit3End20Questions } from './grade8UnitEndExams';
import { sebahattinBasincQuestions } from './sebahattinQuestions';

export const grade8Unit3Data: Unit = {
  id: 'g8-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Basınç',
  unitEndPageRange: 'Ünite Sonu',
  colorTheme: {
    primary: 'from-emerald-600 to-green-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  unitEnd20Questions: grade8Unit3End20Questions,
  subTopics: [
    {
      id: 'g8-u3-sub1',
      title: '1. Bölüm: Katı Basıncı',
      shortTitle: 'Katı Basıncı',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Birim Yüzeye Dik Kuvvet', 'Basınç', 'Pascal (Pa)', 'Yüzey Alanı', 'Ağırlık ve Kuvvet', 'Katıların Kuvveti İletmesi', 'Bıçak ve Çivi', 'Kar Ayakkabısı ve Palet'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Katı Basıncını Etkileyen Değişkenler',
          paragraphs: [
            "Birim yüzeye dik olarak etki eden kuvvete basınç denir. Sembolü P, birimi Pascal'dır (Pa). Katı maddeler ağırlıkları nedeniyle bulundukları zemine basınç uygular.",
            'Basınç ve Ağırlık İlişkisi: Temas yüzey alanı sabit kalmak şartıyla katı bir cismin ağırlığı (kuvveti) arttıkça zemine uyguladığı basınç doğru orantılı olarak artar.',
            'Basınç ve Yüzey Alanı İlişkisi: Cismin ağırlığı sabit kalmak şartıyla zemine temas eden yüzey alanı küçüldükçe basınç ters orantılı olarak artar.',
            'Katıların Kuvveti İletme İlkesi: Katılar kendilerine uygulanan kuvveti hiçbir değişikliğe uğratmadan uygulandığı doğrultuda ve aynı büyüklükte iletir. Ancak yüzey alanı değiştikçe oluşan basınç farklılaşır (Çivinin geniş başına çekiçle vurulan kuvvet sivri ucuna aynen iletilir ancak sivri ucun yüzeyi çok küçük olduğu için ahşapta devasa bir basınç oluşur).'
          ],
          keyPoints: [
            'Basıncı Artırma Örnekleri: Bıçak ve baltaların bilenmesi, krampon tabanındaki dişler, raptiye ve çivinin sivri uçları, iğne uçları, dişlerimizle besinleri parçalamak.',
            'Basıncı Azaltma Örnekleri: Kar ayakkabıları, ördek ve kazların perdeli ayakları, fil ve develerin geniş tabanları, kamyonların çok sayıda tekerleği, tank ve kepçelerin paletleri.'
          ]
        }
      ],
      glossary: [
        { term: 'Katı Basıncı', definition: 'Katı cisimlerin ağırlıklarından dolayı temas ettikleri yüzeye birim alanda uyguladıkları dik kuvvet.' },
        { term: 'Pascal', definition: 'Metrekareye uygulanan bir Newtonluk dik kuvvete karşılık gelen standart basınç birimi.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Katı cisimlerin taban alanı küçüldükçe zemine uyguladıkları basınç artar.",
                "isCorrect": true,
                "explanation": "Katı basıncı temas yüzey alanı ile ters orantılıdır; yüzey azaldıkça birim alana düşen kuvvet artar."
        },
        {
                "id": 2,
                "statement": "Katı basıncı cismin ağırlığından bağımsızdır.",
                "isCorrect": false,
                "explanation": "Katı basıncı cismin zemine dik uyguladığı kuvvet (ağırlık) ile doğru orantılıdır."
        },
        {
                "id": 3,
                "statement": "Bıçağın keskin yüzeyinin ince bilenmesi, yüzey alanını küçülterek basıncı artırma amacına yöneliktir.",
                "isCorrect": true,
                "explanation": "Temas yüzey alanı küçüldüğünde basınç artar ve kesme işlemi kolaylaşır."
        },
        {
                "id": 4,
                "statement": "Kar ayakkabılarının geniş tabanlı olması, yere uygulanan basıncı artırarak batmayı önler.",
                "isCorrect": false,
                "explanation": "Geniş taban yüzey alanını artırır, böylece katı basıncı azalır ve kara batma engellenir."
        },
        {
                "id": 5,
                "statement": "Düzgün prizma şeklindeki homojen bir tuğla düşey doğrultuda tam ortadan ikiye kesilirse, her iki parçanın yere yaptığı basınç ilk tuğlanın basıncına eşit olur.",
                "isCorrect": true,
                "explanation": "Ağırlık yarıya inerken taban alanı da aynı oranda yarıya indiğinden (G/S oranı sabit kaldığından) basınç değişmez."
        },
        {
                "id": 6,
                "statement": "Katılar üzerlerine uygulanan kuvveti temas ettikleri doğrultuda büyüklüğünü değiştirmeden aynen iletirler.",
                "isCorrect": true,
                "explanation": "Katı maddeler sıkıştırılamaz kabul edilir ve üzerlerine uygulanan dik kuvveti aynı yönde ve eşit büyüklükte iletir."
        },
        {
                "id": 7,
                "statement": "Ağır iş makinelerinin paletli tekerleklere sahip olması zemine uygulanan basıncı artırmak içindir.",
                "isCorrect": false,
                "explanation": "Palet tekerlekler geniş yüzey alanı sağlayarak zemine yapılan basıncı azaltır ve batmayı önler."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub1'),
        {
          id: 1,
          theme: 'Katı Basıncında Yüzey Alanı ve Ağırlık',
          cognitiveLevel: 'Kontrollü Deney Analizi',
          contextTitle: 'Özdeş Tuğlaların Kum Zemindeki Batma Derinliği',
          scenario: 'Özdeş tuğlalar kullanılarak kum havuzunda iki aşamalı deney yapılmıştır: 1. aşamada bir tuğla önce yatay sonra dikey konmuştur. 2. aşamada ise yatay duran tuğlanın üzerine özdeş ikinci bir tuğla daha eklenmiştir.',
          questionPrompt: 'Bu deney basamaklarında tuğlaların kumda bıraktığı izlerin derinlikleri ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: '1. aşamada dikey tuğla daha derine batarken, 2. aşamada iki tuğlanın battığı derinlik tek tuğladan fazladır.' },
            { key: 'B', text: 'Yatay tuğlanın yüzey alanı geniş olduğu için kuma dikey tuğladan daha fazla batar.' },
            { key: 'C', text: 'Ağırlık artışı yüzey alanı sabitken katı basıncını ve kumdaki batma derinliğini azaltır.' },
            { key: 'D', text: 'Her iki aşamada da tuğlaların kuma batma derinlikleri tamamen eşit kalır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Dikey tuğlanın temas yüzeyi dar olduğundan basıncı fazladır ve çok batar. Üst üste iki tuğlada ise ağırlık iki katına çıktığından basınç ve batma derinliği artar.'
        },
        {
          id: 2,
          theme: 'Katıların Kuvvet ve Basınç İletimi',
          cognitiveLevel: 'Fiziksel İlke ve Muhakeme',
          contextTitle: 'Çivinin Baş ve Sivri Uç Dinamiği',
          scenario: 'Bir tahta bloğa çivi çakılırken geniş başlı ucuna çekiçle 50 N büyüklüğünde bir kuvvet uygulanmıştır.',
          questionPrompt: 'Çivinin geniş başı ve sivri ucu arasında gerçekleşen kuvvet ve basınç ilişkisi hangisinde doğru ifade edilmiştir?',
          options: [
            { key: 'A', text: 'Çekiçle uygulanan kuvvet sivri uca iletilirken yarıya iner ancak basınç sabit kalır.' },
            { key: 'B', text: 'Geniş başa uygulanan 50 N kuvvet sivri uca aynen iletilir ancak sivri uçta yüzey dar olduğu için çok daha büyük bir basınç oluşur.' },
            { key: 'C', text: 'Çivinin sivri ucundaki basınç geniş baştaki basınçtan daha küçük değerdedir.' },
            { key: 'D', text: 'Katılar kendilerine uygulanan basıncı her doğrultuda eşit büyüklükte iletme özelliğine sahiptir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Katılar kuvveti aynen iletir (50 N). Sivri ucun yüzey alanı çok küçük olduğundan oluşan katı basıncı devasa boyutlara ulaşır.'
        },
        {
          id: 3,
          theme: 'Teknolojide Basıncı Azaltma Tasarımları',
          cognitiveLevel: 'Günlük Yaşam ve Mühendislik Uygulaması',
          contextTitle: 'Ağır İş Makineleri ve Zemin Uyumu',
          scenario: 'Ağır yük taşıyan zırhlı araçlar ve inşaat kepçeleri yumuşak çamurlu arazilerde batmadan ilerleyebilmek için geniş paletlerle donatılmıştır.',
          questionPrompt: 'Aşağıdaki araç ve gereçlerden hangisi paletlerin tasarımında kullanılan temel basınç ilkesiyle aynı amaca hizmet eder?',
          options: [
            { key: 'A', text: 'Et kesmek için kullanılan kasap bıçaklarının ince bilenmesi.' },
            { key: 'B', text: 'Futbolcuların çim sahada kaymamak için krampon tabanına çiviler taktırması.' },
            { key: 'C', text: 'Karlı yollarda batmadan yürümek için tabanı geniş kar ayakkabılarının giyilmesi.' },
            { key: 'D', text: 'Dikiş iğnelerinin kumaşı delmesi için uç kısımlarının sivri yapılması.' }
          ],
          correctAnswer: 'C',
          explanation: 'Paletler ve kar ayakkabıları temas yüzey alanını artırarak katı basıncını azaltmayı ve zemine batmamayı hedefler.'
        },
        {
          id: 4,
          theme: 'Özdeş Küplerle Basınç Sıralaması',
          cognitiveLevel: 'Görsel Matematiksel Analiz',
          contextTitle: 'Özdeş Küplerden Oluşan Üç Farklı Model',
          scenario: 'Ağırlıkları ve boyutları özdeş olan küplerle üç düzenek kurulmuştur: 1. düzenekte tabanda 2 küp üzerinde 1 küp (toplam 3 küp, taban 2S), 2. düzenekte tabanda 1 küp üzerinde 2 küp (toplam 3 küp, taban S), 3. düzenekte tabanda 4 küp yan yana (toplam 4 küp, taban 4S) bulunmaktadır.',
          questionPrompt: 'Bu düzeneklerin zemine uyguladıkları katı basınçlarının büyükten küçüğe doğru sıralaması hangisidir?',
          options: [
            { key: 'A', text: '1. düzenek > 2. düzenek > 3. düzenek' },
            { key: 'B', text: '3. düzenek > 1. düzenek > 2. düzenek' },
            { key: 'C', text: 'Her üç düzeneğin zemine uyguladığı katı basınçları birbirine eşittir.' },
            { key: 'D', text: '2. düzenek > 1. düzenek > 3. düzenek' }
          ],
          correctAnswer: 'D',
          explanation: 'Basınç = Ağırlık/Taban. 2. düzenek: 3G/S = 3P. 1. düzenek: 3G/2S = 1,5P. 3. düzenek: 4G/4S = 1P. Sıralama: 2 > 1 > 3 şeklindedir.'
        },
        {
          id: 5,
          theme: 'Cismin Konum Değişimi ve Basınç Dinamiği',
          cognitiveLevel: 'Durum Değişimi Analizi',
          contextTitle: 'Geniş Tabanlı Vazoda Konum Değişikliği',
          scenario: 'Tabanı geniş, ağız kısmı dar olan homojen dolu bir vazo düz masanın üzerinde tabanı üzerinde durmaktadır. Bu vazo ters çevrilerek dar ağız kısmı üzerine oturtulmuştur.',
          questionPrompt: 'Vazo ters çevrildiğinde masaya uygulanan kuvvet ve basınç nasıl değişir?',
          options: [
            { key: 'A', text: 'Masaya uygulanan toplam kuvvet değişmezken, temas yüzeyi küçüldüğü için katı basıncı artar.' },
            { key: 'B', text: 'Vazonun ağırlığı azaldığı için hem uygulanan kuvvet hem de basınç azalır.' },
            { key: 'C', text: 'Temas yüzey alanı küçüldüğü için uygulanan kuvvet artar ancak basınç sabit kalır.' },
            { key: 'D', text: 'Masa yüzeyine etki eden kuvvet ve basınç değerlerinin her ikisi de yarı yarıya düşer.' }
          ],
          correctAnswer: 'A',
          explanation: 'Katı cismin ağırlığı değişmediği için zemine uygulanan dik kuvvet değişmez. Ancak temas yüzey alanı küçüldüğü için basınç artar.'
        },
        {
          id: 6,
          theme: 'Biyolojik Uyum ve Katı Basıncı',
          cognitiveLevel: 'Canlılar ve Çevre Muhakemesi',
          contextTitle: 'Çamurda Yürüyen Tavuk ve Ördeğin Ayak İzleri',
          scenario: 'Ağırlıkları tamamen eşit olan bir tavuk ile bir ördek ıslak çamurlu arazide yan yana yürümüştür. Tavuğun ayaklarının çamura çok fazla battığı, ördeğin ise batmadan rahatça yürüdüğü gözlenmiştir.',
          questionPrompt: 'Bu gözlem sonucunun temel bilimsel nedeni aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Tavuğun kas gücünün ördeğinkinden daha zayıf olması.' },
            { key: 'B', text: 'Ördeğin ayaklarının perdeli ve geniş yüzeyli olması sebebiyle çamura uyguladığı katı basıncının daha küçük olması.' },
            { key: 'C', text: 'Tavuğun vücut sıcaklığının çamurun donmasına sebep olarak batmayı kolaylaştırması.' },
            { key: 'D', text: 'Ördeğin yer çekimi ivmesinden tavuğa oranla daha az etkilenmesi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Ağırlıklar eşitken ördeğin perdeli ayakları yüzey alanını büyütür ve basıncı düşürür; böylece çamura batması önlenir.'
        },
        {
          id: 7,
          theme: 'Bileme İşlemi ve Basınç Artışı',
          cognitiveLevel: 'Günlük Yaşam Çıkarımı',
          contextTitle: 'Kör Bıçağın Bilenmesi ve Kesme Kolaylığı',
          scenario: 'Mutfakta domatesi kesmekte zorlanan bir aşçı, bıçağını bileyici aletle bileyerek uç kısmını inceltmiş ve ardından aynı domatesi hiç zorlanmadan kolayca dilimlemiştir.',
          questionPrompt: 'Bıçağın bilenmesi ile gerçekleşen fiziksel durum hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Bıçak bilendiğinde uygulanan kuvveti yok ederek işten kazanç sağlamıştır.' },
            { key: 'B', text: 'Bilenme işlemi bıçağın kütlesini artırarak yer çekimi kuvvetini çoğaltmıştır.' },
            { key: 'C', text: 'Bıçağın keskin yüzey alanı küçültülmüş, böylece aynı kuvvetle birim alanda çok daha büyük basınç elde edilmiştir.' },
            { key: 'D', text: 'Bileme işlemi maddenin kimyasal yapısını değiştirerek metali akışkan hale getirmiştir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Bileme işlemi temas yüzey alanını küçültür; P = F/S gereği aynı kuvvetle çok daha büyük kesme basıncı oluşur.'
        }
      ]
    },
    {
      id: 'g8-u3-sub2',
      title: '2. Bölüm: Sıvı Basıncı ve Pascal Prensibi',
      shortTitle: 'Sıvı Basıncı & Pascal',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Sıvı Basıncı Formülü', 'Derinlik (h)', 'Yoğunluk (d)', 'Kabın Şekline Bağlı Olmama', 'Baraj Duvarları', 'Pascal Prensibi', 'Su Cenderesi', 'Hidrolik Fren ve Lift'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Sıvı Basıncının Bağlı Olduğu Faktörler ve Özellikler',
          paragraphs: [
            'Sıvılar akışkandır ve ağırlıklarından dolayı temas ettikleri kabın tüm yüzeylerine (taban ve yan duvarlara) dik olarak basınç uygular.',
            'Derinlik Etkisi: Sıvı basıncı sıvının açık yüzeyine olan dikey derinlikle doğru orantılıdır. Sıvı içinde derinlere inildikçe basınç artar (Pet şişede en alttaki delikten su en uzağa fışkırır; baraj duvarları tabana doğru kalın inşa edilir).',
            'Yoğunluk Etkisi: Derinlikleri eşit olan sıvılardan yoğunluğu büyük olanın tabana yaptığı sıvı basıncı daha büyüktür (Su basıncı > Zeytinyağı basıncı).',
            'KRİTİK KURAL: Sıvı basıncı kabın şekline, genişliğine ve toplam sıvı miktarına KESİNLİKLE bağlı değildir. Farklı şekilli bileşik kaplarda sıvı yükseklikleri eşitse taban basınçları da birbirine eşittir.'
          ]
        },
        {
          heading: 'Pascal Prensibi ve Teknolojik Uygulamaları',
          paragraphs: [
            'Pascal Prensibi: Kapalı bir kapta bulunan sıvıya dışarıdan uygulanan basınç, sıvı tarafından sıvının temas ettiği her noktaya aynen ve dik olarak iletilir.',
            'Su Cenderesi: Kesitleri farklı iki silindirin tabanlarının birleşmesiyle oluşur. Küçük pistona uygulanan küçük bir kuvvetle sıvı basıncı oluşturulur. Bu basınç büyük pistona aynen iletilir ve büyük yüzeyde dev bir kaldırma kuvveti elde edilir (Kuvvetten kazanç sağlanır, yoldan kayıp olur, işten kazanç olmaz).',
            'Uygulama Alanları: Hidrolik araç frenleri, hidrolik direksiyon, berber koltukları, itfaiye merdivenleri, damperli kamyonlar, vinçler, oto liftleri ve hidrolik presler.'
          ]
        }
      ],
      glossary: [
        { term: 'Sıvı Basıncı', definition: 'Sıvıların ağırlıklarından ötürü temas ettikleri tüm yüzeylere uyguladıkları dik basınç.' },
        { term: 'Pascal Prensibi', definition: 'Sıvıların sıkıştırılamaz kabul edilerek üzerlerine uygulanan basıncı her yöne aynen iletmesi kuralı.' },
        { term: 'Su Cenderesi', definition: 'Pascal prensibinden faydalanarak küçük kuvvetle büyük yükleri kaldırmaya yarayan hidrolik sistem.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Sıvı basıncı sadece sıvının derinliğine bağlı olup sıvının cinsinden (yoğunluğundan) etkilenmez.",
                "isCorrect": false,
                "explanation": "Sıvı basıncı formülü P = h.d.g gereğince hem derinliğe (h) hem de sıvının yoğunluğuna (d) doğru orantılı olarak bağlıdır."
        },
        {
                "id": 2,
                "statement": "Aynı derinlikteki saf su ve yoğunluğu sudan büyük olan tuzlu sudan, tuzlu su kabın tabanına daha fazla sıvı basıncı uygular.",
                "isCorrect": true,
                "explanation": "Derinlikler eşit olduğunda yoğunluğu büyük olan sıvının basıncı daha fazladır."
        },
        {
                "id": 3,
                "statement": "Sıvı basıncı kabın şekline ve kaptaki toplam sıvı hacmine bağlı değildir.",
                "isCorrect": true,
                "explanation": "Sıvı basıncı yalnızca ölçüm noktasının serbest sıvı yüzeyine olan dik derinliğine ve sıvı yoğunluğuna bağlıdır."
        },
        {
                "id": 4,
                "statement": "Pascal Prensibine göre sıvılar sıkıştırılamaz ve üzerlerine uygulanan basıncı temas ettikleri her doğrultuda aynen iletirler.",
                "isCorrect": true,
                "explanation": "Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve kabın iç yüzeylerine eşit büyüklükte dik olarak iletilir."
        },
        {
                "id": 5,
                "statement": "Hidrolik fren sistemleri ve berber koltukları gazların basıncı aynen iletmesi ilkesiyle çalışır.",
                "isCorrect": false,
                "explanation": "Hidrolik frenler ve berber koltukları sıvıların basıncı iletmesi olan Pascal Prensibi ile çalışır."
        },
        {
                "id": 6,
                "statement": "Bir baraj duvarının tabanına doğru inildikçe duvar kalınlığının artırılmasının nedeni derinlik arttıkça sıvı basıncının artmasıdır.",
                "isCorrect": true,
                "explanation": "Derinlik arttıkça suyun uyguladığı sıvı basıncı arttığı için baraj duvarları tabanda daha kalın inşa edilir."
        },
        {
                "id": 7,
                "statement": "U borusunda birbiriyle karışmayan iki sıvı dengede olduğunda yoğunluğu büyük olan sıvı daima üst kısımda yer alır.",
                "isCorrect": false,
                "explanation": "Yoğunluğu büyük olan sıvı yerçekimi etkisiyle daima en altta yer alır."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub2'),
        {
          id: 1,
          theme: 'Sıvı Derinliği ve Basınç İlişkisi',
          cognitiveLevel: 'Gözlem ve Menzi̇l Değerlendirmesi',
          contextTitle: 'Su Dolu Şişedeki Üç Farklı Delik Deneyi',
          scenario: 'Su dolu 2 litrelik silindirik pet şişenin yan yüzeyine üstten alta doğru eşit aralıklarla K, L ve M delikleri açılmıştır. Tıkaçlar aynı anda çekildiğinde deliklerden fışkıran suların yatayda aldıkları yollar ölçülmüştür.',
          questionPrompt: 'Deliklerden çıkan suların fışkırma uzaklıkları ile ilgili aşağıdaki karşılaştırmalardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'K deliğindeki su en uzağa fışkırır çünkü açık hava basıncına en yakındır.' },
            { key: 'B', text: 'Her üç delikten fışkıran suların menzilleri birbirine eşittir.' },
            { key: 'C', text: 'L deliği ortada olduğu için en büyük basınç değerine sahiptir.' },
            { key: 'D', text: 'En derinde bulunan M deliğindeki sıvı basıncı en büyük olduğundan buradan çıkan su en uzak mesafeye dökülür.' }
          ],
          correctAnswer: 'D',
          explanation: 'Sıvı basıncı derinlikle (h) doğru orantılıdır. Taban seviyesine en yakın olan M deliğindeki derinlik ve basınç en fazladır; bu yüzden su en uzağa gider.'
        },
        {
          id: 2,
          theme: 'Baraj Duvarlarının Mühendislik Tasarımı',
          cognitiveLevel: 'Mühendislik Uygulaması ve Sebeplendirme',
          contextTitle: 'Su Toplama Barajlarının Taban Duvarları',
          scenario: 'Hidroelektrik santrallerinde inşa edilen dev baraj duvarlarının yukarıdan aşağıya doğru inildikçe kademeli olarak kalınlaştırıldığı görülmektedir.',
          questionPrompt: 'Baraj duvarlarının tabana doğru kalınlaştırılmasının temel fiziksel gerekçesi hangisidir?',
          options: [
            { key: 'A', text: 'Su derinliği arttıkça tabana etki eden sıvı basıncının artması ve kalın duvarların bu basınca dayanması.' },
            { key: 'B', text: 'Baraj gölünün üst kısmındaki suyun buharlaşmasını engellemek.' },
            { key: 'C', text: 'Suyun yoğunluğunun tabana doğru azalarak akışkanlığı yavaşlatması.' },
            { key: 'D', text: 'Baraj gölündeki balıkların tabanda daha rahat yüzmesini sağlamak.' }
          ],
          correctAnswer: 'A',
          explanation: 'Suyun derinliği arttıkça uyguladığı hidrostatik sıvı basıncı artar. Baraj tabanındaki dev basınca dayanabilmek için alt duvarlar çok kalın inşa edilir.'
        },
        {
          id: 3,
          theme: 'Sıvı Yoğunluğu ve Taban Basıncı',
          cognitiveLevel: 'Kontrollü Değişken Deneyi',
          contextTitle: 'Özdeş Kaplarda Su ve Zeytinyağı',
          scenario: 'Özdeş iki silindirik kaba aynı yükseklikte (h) olacak şekilde birine su (yoğunluğu 1 g/cm3), diğerine ise zeytinyağı (yoğunluğu 0,9 g/cm3) konulmuştur.',
          questionPrompt: 'Kapların tabanlarına uygulanan sıvı basınçları karşılaştırıldığında hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Zeytinyağı konulan kabın taban basıncı daha büyüktür çünkü yağ daha kıvamlıdır.' },
            { key: 'B', text: 'Derinlikler eşit olduğundan yoğunluğu büyük olan suyun tabana yaptığı sıvı basıncı zeytinyağından büyüktür.' },
            { key: 'C', text: 'Her iki sıvının da yüksekliği eşit olduğu için taban basınçları birbirine eşittir.' },
            { key: 'D', text: 'Kapların taban alanları iki katına çıkarılırsa sıvı basınçları yarıya iner.' }
          ],
          correctAnswer: 'B',
          explanation: 'Sıvı basıncı derinlik ve yoğunluğun çarpımıdır (P = h.d). Derinlikler (h) eşitken yoğunluğu (d) büyük olan suyun taban basıncı daha fazladır.'
        },
        {
          id: 4,
          theme: 'Kabın Şekline Bağlı Olmama Kuralı',
          cognitiveLevel: 'Kavramsal Yanılgıyı Giderme',
          contextTitle: 'Farklı Şekilli Üç Ayrı Kap Deneyi',
          scenario: 'Taban alanları eşit ancak biri yukarı doğru genişleyen, biri silindirik, biri de yukarı doğru daralan üç farklı kaba aynı cins sıvıdan eşit yükseklikte (h) doldurulmuştur.',
          questionPrompt: 'Kapların tabanlarında oluşan sıvı basınçları arasındaki ilişki hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Genişleyen kapta sıvı miktarı fazla olduğu için taban basıncı en büyüktür.' },
            { key: 'B', text: 'Daralan kapta sıvının uyguladığı basınç diğerlerinden fazladır.' },
            { key: 'C', text: 'Sıvıların cinsi ve derinlikleri eşit olduğu için kapların tabanlarındaki sıvı basınçları birbirine eşittir.' },
            { key: 'D', text: 'Silindirik kabın taban basıncı diğer iki kabın basıncının aritmetik ortalamasına eşittir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Sıvı basıncı kabın şekline ve toplam sıvı miktarına bağlı değildir. Sıvı cinsi ve derinlik eşit olduğundan her üç kabın taban basıncı eşittir.'
        },
        {
          id: 5,
          theme: 'Pascal Prensibi ve Su Cenderesi',
          cognitiveLevel: 'Hidrolik Sistem Analizi',
          contextTitle: 'Oto Liftinde Ağır Bir Aracın Kaldırılması',
          scenario: "Bir tamirhanedeki su cenderesinde küçük pistonun yüzey alanı S, büyük pistonun yüzey alanı ise 50S'dir. Küçük pistona F kuvveti uygulanarak büyük pistondaki 1500 kg ağırlığındaki araç dengelenmiştir.",
          questionPrompt: 'Bu su cenderesinin çalışma prensibi ve elde edilen kazanç hakkında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Sıvıların basıncı aynen iletmesi sayesinde küçük bir kuvvetle çok büyük bir araç kaldırılmış ve kuvvetten kazanç sağlanmıştır.' },
            { key: 'B', text: 'Büyük pistonda elde edilen basınç değeri küçük pistona uygulanan basınçtan 50 kat büyüktür.' },
            { key: 'C', text: 'Bu hidrolik sistem sayesinde yapılan toplam işten yüzde 50 oranında tasarruf edilmiştir.' },
            { key: 'D', text: 'Aracı 1 metre yukarı kaldırmak için küçük pistonun da sadece 1 metre itilmesi yeterlidir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Pascal prensibine göre sıvı basıncı her noktaya aynen iletir. Yüzey büyüdükçe uygulanan kuvvet büyür ve kuvvetten kazanç sağlanır (işten kazanç olmaz).'
        },
        {
          id: 6,
          theme: 'Araba Fren Sistemleri ve Hidrolik Basınç',
          cognitiveLevel: 'Uygulamalı Teknoloji Muhakemesi',
          contextTitle: 'Hidrolik Fren Sisteminde Pedala Basılması',
          scenario: 'Sürücü frene bastığında fren pedalına bağlı merkez silindirindeki fren sıvısı basınç üretir. Bu basınç borular içindeki sıvı ile tekerleklerdeki fren pabuçlarına iletilir ve araç durur.',
          questionPrompt: 'Fren sisteminin çalışması ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Tekerleklere iletilen basınç fren sıvısının rengine ve akışkanlık hızına göre yön değiştirir.' },
            { key: 'B', text: 'Fren boruları içerisindeki sıvı sıkışarak hacmini kaybeder ve gaz haline geçer.' },
            { key: 'C', text: 'Fren sistemi katıların kuvveti tek yönde iletmesi prensibine dayalı mekanik bir çarktır.' },
            { key: 'D', text: 'Pedala uygulanan kuvvetin oluşturduğu sıvı basıncı tekerleklere kadar her doğrultuda eşit değerde iletilir.' }
          ],
          correctAnswer: 'D',
          explanation: 'Sıvılar sıkıştırılamaz kabul edilir ve Pascal prensibine göre üzerlerine uygulanan basıncı tekerleklere kadar her yöne eşit büyüklükte iletir.'
        },
        {
          id: 7,
          theme: 'Dalgıçların Maruz Kaldığı Sıvı Basıncı',
          cognitiveLevel: 'Gerçek Yaşam ve Derinlik Çıkarımı',
          contextTitle: 'Denizde K, L ve M Noktalarında Dalan Bir Dalgıç',
          scenario: 'Bir dalgıç deniz seviyesindeki K noktasından 10 metre derindeki L noktasına inmiş, ardından yatay olarak yüzüp aynı derinlikteki M noktasına ilerlemiştir.',
          questionPrompt: 'Dalgıcın hareketi boyunca vücuduna etki eden sıvı basıncındaki değişim hangisinde doğru belirtilmiştir?',
          options: [
            { key: 'A', text: "K'den L'ye inerken basınç azalır, L'den M'ye giderken basınç artar." },
            { key: 'B', text: "K'den L'ye inerken derinlik arttığı için basınç artar; L'den M'ye yatay yüzerken derinlik değişmediği için basınç sabit kalır." },
            { key: 'C', text: 'Dalgıcın üzerindeki sıvı basıncı hareket ettiği her saniye kesintisiz olarak sürekli yükselir.' },
            { key: 'D', text: 'Yatay yüzdüğü L-M aralığında deniz suyu yoğunluğu arttığı için basınç zirveye çıkar.' }
          ],
          correctAnswer: 'B',
          explanation: 'Derinlere indikçe (K-L) sıvı basıncı artar. Aynı derinlikte yatay hareket ederken (L-M) derinlik değişmediği için sıvı basıncı değişmez.'
        }
      ]
    },
    {
      id: 'g8-u3-sub3',
      title: '3. Bölüm: Gazların Basıncı ve Açık Hava Basıncı',
      shortTitle: 'Gaz Basıncı & Torricelli',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Açık Hava Basıncı (Atmosfer Basıncı)', 'Torricelli Deneyi (76 cm-Hg)', 'Yükseklikle Basınç Değişimi', 'Vantuz ve Pipet İlkeleri', 'Ters Çevrilen Bardak Deneyi', 'Kapalı Kap Gaz Basıncı', 'Mutfak Tüpü ve Oksijen Tüpü'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Açık Hava Basıncı ve Torricelli Deneyi',
          paragraphs: [
            'Hava ağırlığından ve moleküllerinin sürekli hareketinden dolayı yeryüzündeki tüm varlıklara her yönde bir kuvvet uygular. Bu kuvvete açık hava basıncı (atmosfer basıncı) denir.',
            'Torricelli Deneyi: İtalyan bilim insanı Torricelli deniz seviyesinde, 0 °C sıcaklıkta 1 metre uzunluğundaki cıva dolu cam boruyu cıva çanağına ters çevirmiş ve cıva yüksekliğini 76 cm olarak ölçmüştür. Bu değer deniz seviyesindeki açık hava basıncına eşittir.',
            'Borunun eğimi, kalınlığı veya şekli cıva yüksekliğini etkilemez. Cıva yerine su kullanılsaydı suyun yoğunluğu küçük olduğu için yaklaşık 10,5 metrelik dev bir cam boru gerekirdi.',
            'Yükseklik İlişkisi: Deniz seviyesinden yukarılara çıkıldıkça atmosferdeki hava molekülleri seyreldiği ve gaz yoğunluğu azaldığı için açık hava basıncı azalır.'
          ]
        },
        {
          heading: 'Kapalı Kaplarda Gaz Basıncı ve Günlük Örnekler',
          paragraphs: [
            'Kapalı kaplardaki gazlar kabın her noktasına çarparak tüm yüzeylere eşit büyüklükte basınç uygular. Gazın sıcaklığı ve miktarı arttıkça basıncı artar, kabın hacmi küçüldükçe basıncı artar.',
            'Günlük Hayat Örnekleri: Damacana pompaları, elektrik süpürgesi, otomobil hava yastıkları, mutfak ve piknik tüpleri, sprey ve deodorantlar, yangın söndürme tüpleri, bisiklet ve otomobil tekerlekleri.'
          ]
        }
      ],
      glossary: [
        { term: 'Açık Hava Basıncı', definition: 'Atmosferdeki gaz kütlesinin ağırlığı sebebiyle yeryüzündeki nesnelere uyguladığı basınç.' },
        { term: 'Barometre', definition: 'Açık hava basıncını ölçmeye yarayan düzenek.' },
        { term: 'Manometre', definition: 'Kapalı kaplardaki gazların basıncını ölçen aygıt.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Deniz seviyesinden yüksek dağ zirvelerine çıkıldıkça açık hava basıncı artar.",
                "isCorrect": false,
                "explanation": "Yükseklere çıkıldıkça gaz yoğunluğu ve atmosferi oluşturan hava tabakasının kalınlığı azaldığı için açık hava basıncı azalır."
        },
        {
                "id": 2,
                "statement": "Toriçelli deneyinde deniz seviyesinde ve 0 °C sıcaklıkta cıva sütunu yüksekliği 76 cm olarak ölçülmüştür.",
                "isCorrect": true,
                "explanation": "Açık hava basıncı 76 cm-Hg cıva basıncına eşittir."
        },
        {
                "id": 3,
                "statement": "Toriçelli deneyinde cıva yerine yoğunluğu çok daha küçük olan su kullanılsaydı cam borudaki sıvı yüksekliği yaklaşık 10,3 metre olurdu.",
                "isCorrect": true,
                "explanation": "Suyun yoğunluğu cıvadan yaklaşık 13,6 kat küçük olduğu için borudaki sıvı yüksekliği yaklaşık 10,5 metre olmalıdır."
        },
        {
                "id": 4,
                "statement": "Vantuzların pürüzsüz fayans yüzeylere yapışması açık hava basıncının etkisiyle açıklanır.",
                "isCorrect": true,
                "explanation": "Vantuz ile yüzey arasındaki hava boşaltıldığında dışarıdaki açık hava basıncı vantuzu yüzeye kuvvetle bastırır."
        },
        {
                "id": 5,
                "statement": "Şişirilmiş bir esnek balon gökyüzüne doğru yükseldikçe dış ortamdaki açık hava basıncı arttığı için hacmi küçülür.",
                "isCorrect": false,
                "explanation": "Yükseklere çıkıldıkça açık hava basıncı azaldığı için esnek balonun hacmi gittikçe büyür ve patlayabilir."
        },
        {
                "id": 6,
                "statement": "Oksijen tüpleri ve mutfak tüpleri gazların yüksek basınç altında sıkıştırılarak sıvılaştırılması esasına dayanır.",
                "isCorrect": true,
                "explanation": "Gazlar basınç altında yüksek oranda sıkıştırılabilir ve kapalı kapta her yöne eşit basınç uygular."
        },
        {
                "id": 7,
                "statement": "Pipetle meyve suyu içerken kutunun içe doğru büzülmesi açık hava basıncının kutu içindeki gaz basıncından büyük olmasından kaynaklanır.",
                "isCorrect": true,
                "explanation": "Pipetle hava çekildiğinde kutu iç basıncı düşer ve açık hava basıncı kutuyu içeri doğru büzer."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub3'),
        {
          id: 1,
          theme: 'Torricelli Deneyi ve Rakım İlişkisi',
          cognitiveLevel: 'Deney ve Yükseklik Muhakemesi',
          contextTitle: 'Torricelli Düzeneğinin Dağın Tepesine Taşınması',
          scenario: 'Deniz seviyesinde yapılan Torricelli deneyinde cam borudaki cıva seviyesi 76 cm ölçülmüştür. Bu deney düzeneği hiçbir sızıntı olmadan 2500 metre yükseklikteki bir dağın zirvesine çıkarılmıştır.',
          questionPrompt: 'Dağın zirvesinde yapılan ölçümde cıva seviyesindeki değişim ve sebebi hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Zirvede hava sıcaklığı düştüğü için cıva seviyesi 85 cm seviyesine yükselir.' },
            { key: 'B', text: 'Yer çekimi ivmesi azaldığı için borudaki cıva tamamen çanağa boşalır.' },
            { key: 'C', text: "Yükseklere çıkıldıkça atmosfer yoğunluğu ve açık hava basıncı azaldığı için cıva seviyesi 76 cm'nin altına düşer." },
            { key: 'D', text: 'Açık hava basıncı yüksekliğe bağlı olmadığı için cıva seviyesi tam 76 cm kalır.' }
          ],
          correctAnswer: 'C',
          explanation: "Yükseklere çıkıldıkça açık hava basıncı düşer. Dış basınç azaldığı için borudaki cıvayı tutan kuvvet zayıflar ve cıva seviyesi 76 cm'nin altına iner."
        },
        {
          id: 2,
          theme: 'Ters Çevrilen Bardak ve Basınç Dengesi',
          cognitiveLevel: 'Görsel Deney Açıklaması',
          contextTitle: 'Ağzı Kağıtla Kapatılan Su Bardağı Deneyi',
          scenario: 'Tamamen suyla doldurulan bir su bardağının ağzına düz bir kağıt kapatılmış ve bardak dikkatlice ters çevrilmiştir. Kağıdın düşmediği ve suyun dökülmediği gözlenmiştir.',
          questionPrompt: 'Suyun dökülmesini engelleyen temel fiziksel etki aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kağıdın suyu emerek bardağın kenarlarına yapışkan bir madde salgılaması.' },
            { key: 'B', text: 'Suyun yoğunluğunun açık hava basıncından binlerce kat daha büyük olması.' },
            { key: 'C', text: 'Bardağın içindeki vakumun suyu bardağın tabanına doğru kuvvetle çekmesi.' },
            { key: 'D', text: 'Kağıdın alt yüzeyine etki eden açık hava basıncının bardağın içindeki suyun sıvı basıncından büyük olması.' }
          ],
          correctAnswer: 'D',
          explanation: 'Alttan etki eden açık hava basıncı, bardaktaki suyun yaptığı sıvı basıncını dengeleyerek kağıdın ve suyun düşmesini engeller.'
        },
        {
          id: 3,
          theme: 'Esnek Balon ve İç-Dış Basınç Dengesi',
          cognitiveLevel: 'Fiziksel Model Muhakemesi',
          contextTitle: 'Deniz Seviyesinden Dağa Çıkarılan Esnek Balon',
          scenario: 'Ağzı hava sızdırmaz şekilde bağlanan esnek bir çocuk balonu deniz kıyısındaki K noktasından yüksek bir dağın zirvesindeki L noktasına çıkarılmıştır.',
          questionPrompt: 'Balon L noktasına ulaştığında balonda meydana gelen değişim hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Dış ortamdaki açık hava basıncı azaldığı için balon iç basıncını dengelemek amacıyla genleşir ve hacmi büyür.' },
            { key: 'B', text: 'Dış basınç arttığı için balonun hacmi küçülür ve sönük hale gelir.' },
            { key: 'C', text: 'Balonun içindeki gaz molekülleri kaybolduğu için balonun kütlesi yarıya iner.' },
            { key: 'D', text: 'Balonun hacmi ve iç basıncı hiçbir değişikliğe uğramadan sabit kalır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Yükseklerde açık hava basıncı düşer. Esnek balon iç ve dış basıncı eşitlemek için genişler; yani hacmi artar.'
        },
        {
          id: 4,
          theme: 'Akışkanlar ve Basınç Farkı',
          cognitiveLevel: 'Günlük Yaşam Problemi',
          contextTitle: 'Yağ Tenekesinden Sıvı Yağın Akıtılması',
          scenario: 'Hamza Bey tenekedeki zeytinyağını boşaltırken tek delik açtığında yağın kesik kesik aktığını ve zorlandığını görmüş; tenekenin üst kısmına ikinci bir delik açtığında ise yağın pürüzsüz ve hızlı aktığını fark etmiştir.',
          questionPrompt: 'İkinci deliğin açılmasıyla yağın kolayca akmasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Tenekedeki zeytinyağının yoğunluğunun ikinci delikten sonra aniden düşmesi.' },
            { key: 'B', text: 'Açılan ikinci delikten içeri giren açık havanın tenekedeki yağı iterek basınç dengesi sağlaması.' },
            { key: 'C', text: 'İkinci delikten sonra yer çekimi kuvvetinin teneke üzerinde iki katına çıkması.' },
            { key: 'D', text: 'Tenekenin içindeki havanın tamamen dışarı kaçarak içeride vakum oluşturması.' }
          ],
          correctAnswer: 'B',
          explanation: 'İkinci delikten içeri giren açık hava, içerideki basıncı dengeler ve sıvıyı dışarı iterek yağın düzenli akmasını sağlar.'
        },
        {
          id: 5,
          theme: 'Atmosfer Basıncının Varlık Kanıtı',
          cognitiveLevel: 'Deney ve Gözlem Yorumu',
          contextTitle: 'Havası Boşaltılan Pet Şişenin Büzüşmesi',
          scenario: 'İçinde az miktarda ılık su bulunan pet şişenin ağzına vakum pompası bağlanarak içerisindeki hava hızla boşaltılmıştır. Pompa çalıştırıldığı anda plastik şişenin her taraftan içe doğru büzüşüp ezildiği görülmüştür.',
          questionPrompt: 'Pet şişenin ezilmesi olayından çıkarılacak en temel bilimsel sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Plastik maddenin kimyasal bağlarının sıcak su buharıyla tamamen kopması.' },
            { key: 'B', text: 'Havanın sadece yukarıdan aşağıya doğru tek yönlü basınç uygulayabilmesi.' },
            { key: 'C', text: 'Açık hava basıncının atmosferdeki tüm nesnelere her yönden büyük bir kuvvet uyguladığının kanıtlanması.' },
            { key: 'D', text: 'Pet şişenin içindeki sıvı basıncının dışarıdaki gaz basıncını yenmesi.' }
          ],
          correctAnswer: 'C',
          explanation: 'Şişenin içindeki hava çekilince iç basınç düşer. Dışarıdaki açık hava basıncı şişeyi her yönden sıkıştırıp büzüştürür; bu açık hava basıncının varlığını ispatlar.'
        },
        {
          id: 6,
          theme: 'Kapalı Kaplarda Gaz Basıncı Teknolojisi',
          cognitiveLevel: 'Uygulamalı Teknoloji Değerlendirmesi',
          contextTitle: 'Sıkıştırılmış Gaz İçeren Güvenlik Araçları',
          scenario: 'Mutfak tüpleri, yangın söndürme tüpleri ve otomobillerdeki hava yastıkları yüksek basınç altında sıkıştırılmış gaz teknolojisinden yararlanılarak üretilmiştir.',
          questionPrompt: 'Kapalı kaplardaki gazların basınç özellikleri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kapalı kaplardaki gazlar kabın sadece taban kısmına basınç uygular, yan duvarlara uygulamaz.' },
            { key: 'B', text: 'Gazlar sıcaklık arttıkça daha yavaş hareket eder ve uyguladıkları basınç düşer.' },
            { key: 'C', text: 'Kapalı kaptaki gazın hacmi küçüldükçe ve molekül sayısı arttıkça basıncı azalır.' },
            { key: 'D', text: 'Gaz tanecikleri kabın içindeki her noktaya sürekli çarparak tüm yüzeylere eşit büyüklükte basınç uygular.' }
          ],
          correctAnswer: 'D',
          explanation: 'Kapalı kaplardaki gaz molekülleri serbestçe hareket eder ve kabın her noktasına homojen şekilde çarparak her yere eşit basınç uygular.'
        }
      ]
    }
  ]
};
