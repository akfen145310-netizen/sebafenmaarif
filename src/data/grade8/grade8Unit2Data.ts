import { Unit } from '../../types/curriculum';
import { grade8Unit2End20Questions } from './grade8UnitEndExams';
import { sebahattinDnaQuestions } from './sebahattinQuestions';

export const grade8Unit2Data: Unit = {
  id: 'g8-unit-2',
  unitNumber: 2,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'DNA ve Genetik Kod',
  unitEndPageRange: 'Ünite Sonu',
  colorTheme: {
    primary: 'from-amber-600 to-orange-700',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  unitEnd20Questions: grade8Unit2End20Questions,
  subTopics: [
    {
      id: 'g8-u2-sub1',
      title: '1. Bölüm: DNA ve Genetik Kod',
      shortTitle: 'DNA ve Genetik Kod',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: [
        'Kromozom',
        'DNA (Deoksiribo Nükleik Asit)',
        'Gen',
        'Nükleotid',
        'Organik Bazlar (Adenin, Timin, Guanin, Sitozin)',
        'Deoksiriboz Şekeri',
        'Fosfat',
        'İkili Sarmal Yapı',
        'DNA Eşlenmesi',
        'DNA Onarımı'
      ],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Kalıtsal Yapılar Arasındaki Hiyerarşi',
          paragraphs: [
            'Hücre çekirdeğinde bulunan kalıtsal yapılar karmaşıktan basite yani büyükten küçüğe doğru şu şekilde sıralanır: Kromozom > DNA > Gen > Nükleotid.',
            'Kromozom: DNA’nın özel koruyucu protein kılıfla sarılarak kısalıp kalınlaşmasıyla oluşan yapıdır. Sağlıklı bir insanda 46 kromozom bulunur (23 anneden, 23 babadan). Farklı türlerin kromozom sayıları eşit olabilir (İnsan, moli balığı ve kurtbağrı bitkisi 46 kromozomludur). Kromozom sayısının canlının gelişmişliği veya vücut büyüklüğü ile hiçbir ilişkisi yoktur (Örneğin eğrelti otu 500 kromozomludur ancak insandan gelişmiş değildir).',
            'DNA: Hücrenin yönetici molekülüdür; solunum, beslenme ve üreme gibi yaşamsal faaliyetleri yönetir. Çift zincirli ve sarmal bir döner merdiven yapısındadır.',
            'Gen: DNA üzerindeki anlamlı kalıtsal bilgi parçalarıdır; kalıtsal karakterleri belirler (göz rengi, kan grubu). DNA’nın görev birimidir.',
            'Nükleotid: DNA’nın en küçük yapı birimidir. Bir nükleotid 3 kısımdan oluşur: Fosfat + Deoksiriboz Şekeri + Organik Baz (Adenin, Timin, Guanin veya Sitozin).'
          ],
          keyPoints: [
            'Karmaşıktan basite sıralama: Kromozom > DNA > Gen > Nükleotid.',
            'Nükleotidin adı içerdiği organik baza göre söylenir (Adenin bazı içeriyorsa Adenin nükleotidi).',
            'Bir DNA molekülünde: Toplam Nükleotid Sayısı = Toplam Fosfat Sayısı = Toplam Şeker Sayısı = Toplam Organik Baz Sayısı.',
            'DNA zincirinde daima Adenin karşısına Timin, Guanin karşısına Sitozin gelir.'
          ]
        },
        {
          heading: 'DNA’nın Kendini Eşlemesi ve Onarım Kuralları',
          paragraphs: [
            'Hücre bölünmesi öncesinde yeni hücrelere kalıtsal bilginin eksiksiz aktarılması için DNA kendini kopyalar.',
            'Eşlenme Basamakları: 1. DNA’nın iki zinciri arasındaki zayıf bağlar bir fermuar gibi açılarak zincirler ayrılır. 2. Sitoplazmada serbest dolaşan nükleotidler çekirdek içerisine girer. 3. Ayrılan zincirlerdeki nükleotidlerin karşısına uygun tamamlayıcı nükleotidler yerleşir. 4. Biri eski biri yeni zincirden oluşan birbirinin tıpatıp aynısı 2 yeni DNA molekülü sentezlenir.',
            'DNA Onarımı: Tek bir zincirde meydana gelen yanlış eşleşmeler veya bir zincirdeki boşluklar DNA onarım enzimleri tarafından onarılır. Ancak karşılıklı her iki zincirde aynı anda meydana gelen eksiklikler ve kırılmalar onarılamaz; bu durum mutasyona sebep olur.'
          ],
          examNote: '📌 LGS ÖNEMLİ KURAL: Canlıların birbirinden farklı olmasının nedeni nükleotid çeşitlerinin farklı olması değil; nükleotidlerin diziliş sırası ve sayılarının farklı olmasıdır.'
        }
      ],
      glossary: [
        { term: 'Kromozom', definition: 'DNA ve özel proteinlerin birleşmesiyle oluşan, hücre bölünmesinde belirginleşen gen taşıyıcı yapı.' },
        { term: 'Nükleotid', definition: 'Fosfat, deoksiriboz şekeri ve bir organik bazdan oluşan DNA’nın temel yapı birimi.' },
        { term: 'DNA Eşlenmesi', definition: 'Hücre bölünmesi öncesinde ana DNA’nın kendini kopyalayarak iki özdeş DNA oluşturması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kromozom sayısı fazla olan canlılar diğer canlılara göre daha gelişmiştir.', isCorrect: false, explanation: 'Kromozom sayısı ile canlının gelişmişliği arasında hiçbir bağ yoktur.' },
        { id: 2, statement: 'Bir DNA molekülündeki toplam fosfat sayısı deoksiriboz şekeri sayısına eşittir.', isCorrect: true, explanation: 'Her nükleotidde bir fosfat ve bir şeker bulunur.' },
        { id: 3, statement: 'DNA’da karşılıklı iki zincirde aynı bölgede nükleotid bulunmaması durumunda oluşan hata onarılamaz.', isCorrect: true, explanation: 'Karşılıklı çift zincir boşlukları tamir edilemez.' },
        {"id":4,"statement":"DNA molekülünde Adenin bazı ile Timin bazı arasında ikili zayıf hidrojen bağı bulunur.","isCorrect":true,"explanation":"DNA sarmalında A ile T arasında 2, G ile C arasında 3 zayıf hidrojen bağı kurulur."},
        {"id":5,"statement":"Farklı türe ait sağlıklı iki canlının vücut hücrelerindeki kromozom sayıları kesinlikle birbirinden farklı olmak zorundadır.","isCorrect":false,"explanation":"Örneğin insan ve moli balığının her ikisinde de 46 kromozom bulunur; kromozom sayısı canlı türünü veya gelişmişliğini tek başına belirlemez."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub1'),
        {
          id: 1,
          theme: 'DNA Eşlenmesi ve Nükleotid Değişimi',
          cognitiveLevel: 'Grafik ve Hesaplama',
          contextTitle: 'Sitoplazmadaki Serbest Nükleotidlerin Değişimi',
          scenario: 'Bölünmekte olan bir hücrede DNA eşlenmesi sürecinde çekirdekteki ve sitoplazmadaki nükleotid değişimleri takip edilmiştir.',
          questionPrompt: 'DNA’nın kendini eşlemesi sürecinde gerçekleşen değişimlerle ilgili hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Sitoplazmadaki serbest deoksiriboz şekeri ve fosfat miktarı zamanla azalır.' },
            { key: 'B', text: 'Çekirdekteki toplam nükleotid sayısı işlem bittiğinde yarıya iner.' },
            { key: 'C', text: 'Eşlenme bittiğinde oluşan iki yeni DNA molekülünün dizilimi birbirinden farklıdır.' },
            { key: 'D', text: 'Sitoplazmadaki nükleotid miktarı hücre bölünmesi boyunca sürekli artar.' }
          ],
          correctAnswer: 'A',
          explanation: 'Eşlenme sırasında yeni zincirlerin yapımı için sitoplazmadaki serbest nükleotidler çekirdeğe girer ve sitoplazmadaki miktarları azalır.'
        },
        {
          id: 2,
          theme: 'DNA Bileşenleri ve Sayısal Eşitlikler',
          cognitiveLevel: 'Veri Analizi ve Muhakeme',
          contextTitle: 'Sağlıklı Bir DNA Molekülündeki Yapısal Oranlar',
          scenario: 'Bir laboratuvarda izole edilen 1200 nükleotidlik çift zincirli bir DNA molekülünde 200 adet adenin nükleotidi bulunduğu saptanmıştır.',
          questionPrompt: 'Bu DNA molekülündeki diğer yapıların sayıları ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'DNA molekülünde bulunan toplam deoksiriboz şekeri sayısı 600 adettir.' },
            { key: 'B', text: 'Moleküldeki timin sayısı 200, guanin ve sitozin nükleotidlerinin toplamı ise 800 adettir.' },
            { key: 'C', text: 'Moleküldeki toplam fosfat sayısı nükleotid sayısının iki katına eşittir.' },
            { key: 'D', text: 'Guanin nükleotidi sayısı timin nükleotidi sayısına kesinlikle eşittir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Adenin 200 ise Timin de 200 adettir. Toplam 1200 nükleotidden 400 A-T çıkınca 800 adet Guanin ve Sitozin kalır.'
        },
        {
          id: 3,
          theme: 'DNA Hasarları ve Onarım Mekanizması',
          cognitiveLevel: 'Şema ve Görsel Değerlendirme',
          contextTitle: 'Radyasyona Maruz Kalan Dört Farklı DNA Bölgesi',
          scenario: 'Laboratuvarda ultraviyole ışınlarına maruz bırakılan dört farklı DNA bölgesinde şu hasarlar tespit edilmiştir: 1. bölgede karşılıklı iki zincirde adenin karşısındaki nükleotid kopmuştur, 2. bölgede guanin karşısına yanlışlıkla adenin gelmiştir, 3. bölgede karşılıklı her iki zincirdeki nükleotidler aynı anda koparak boşluk oluşmuştur, 4. bölgede ise tek bir sitozin nükleotidi eksilmiştir.',
          questionPrompt: 'DNA onarım enzimlerinin bu hasarları tamir etme yeteneği dikkate alındığında hangi bölgedeki hasar kesinlikle onarılamaz?',
          options: [
            { key: 'A', text: '1. bölgedeki tek taraflı boşluk DNA enzimleri tarafından onarılamaz.' },
            { key: 'B', text: '2. bölgedeki yanlış eşleşme tespit edilerek hücre tarafından düzeltilemez.' },
            { key: 'C', text: '3. bölgede karşılıklı her iki zincirde aynı anda oluşan boşluk onarılamaz.' },
            { key: 'D', text: '4. bölgedeki tek zincir eksikliği kalıcı mutasyon olarak nesillere aktarılır.' }
          ],
          correctAnswer: 'C',
          explanation: 'DNA karşılıklı çift zincirindeki eş zamanlı boşlukları şifre eksikliği nedeniyle tamir edemez ve kalıcı mutasyon oluşur.'
        },
        {
          id: 4,
          theme: 'Canlı Çeşitliliği ve Nükleotid Dizilimi',
          cognitiveLevel: 'Kavramsal Derinlik',
          contextTitle: 'Farklı Canlı Türlerinin Genetik Materyal Analizi',
          scenario: 'Bir araştırmacı insan, meşe ağacı ve bir bakteri türünden aldığı DNA örneklerini incelemiş; her üç canlı türünde de sadece Adenin, Timin, Guanin ve Sitozin nükleotidlerinin bulunduğunu görmüştür.',
          questionPrompt: 'Bu canlıların dış görünüş, organ yapısı ve yaşamsal özelliklerinin birbirinden tamamen farklı olmasının temel sebebi nedir?',
          options: [
            { key: 'A', text: 'Her canlı türünde kullanılan fosfat ve şeker moleküllerinin atomik yapılarının farklı olması.' },
            { key: 'B', text: 'Bitkilerdeki nükleotidlerin hayvanlardakine göre daha büyük kütleye sahip olması.' },
            { key: 'C', text: 'Canlıların hücre çekirdeğindeki DNA sarmalının dönüş yönünün birbirinden zıt olması.' },
            { key: 'D', text: 'DNA molekülünü oluşturan nükleotidlerin sayı ve diziliş sırasının canlıdan canlıya farklılık göstermesi.' }
          ],
          correctAnswer: 'D',
          explanation: 'Tüm canlılarda nükleotid çeşitleri aynıdır; canlıların farklı olmasını sağlayan temel etken bu nükleotidlerin diziliş sırası ve toplam sayılarıdır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub2',
      title: '2. Bölüm: Kalıtım',
      shortTitle: 'Kalıtım ve Çaprazlamalar',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Gregor Mendel', 'Genotip', 'Fenotip', 'Saf Döl (Homozigot)', 'Melez Döl (Heterozigot)', 'Baskın (Dominant) Alel', 'Çekinik (Resesif) Alel', 'Tek Karakter Çaprazlaması', 'İnsanda Cinsiyet Kalıtımı (XX-XY)', 'Akraba Evliliği'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mendel’in Çalışmaları ve Kalıtım Kavramları',
          paragraphs: [
            'Canlıların kalıtsal özelliklerinin anne ve babadan yavrulara nasıl aktarıldığını inceleyen bilim dalına genetik yani kalıtım bilimi denir. Kurucusu Gregor Mendel’dir.',
            'Mendel’in Bezelye Seçme Nedenleri: Kolay ve kısa sürede yetişmesi, yılda birden fazla ürün vermesi, kendi kendine tozlaşabilmesi (dış döllenmeye kapalı olması) ve gözle ayırt edilebilen çok sayıda zıt karaktere (sarı-yeşil tohum, mor-beyaz çiçek, düzgün-buruşuk) sahip olmasıdır.',
            'Genotip: Canlının sahip olduğu genlerin tümüdür (AA, Aa, aa). Fenotip: Genotip ve çevrenin etkisiyle canlının dış görünüşünde ortaya çıkan özelliklerdir.',
            'Baskın Alel: Etkisini hem saf hem de melez durumda fenotipte gösteren gendir. Çekinik Alel: Etkisini sadece saf çekinik (homozigot) durumda gösterebilen gendir.'
          ],
          keyPoints: [
            'Saf Döl (Homozigot): Bir karakter için anne ve babadan aynı alellerin gelmesi (AA veya aa).',
            'Melez Döl (Heterozigot): Bir karakter için anne ve babadan farklı alellerin gelmesi (Aa).',
            'İki melez bireyin çaprazlanması (Aa x Aa): Fenotip oranı %75 Baskın, %25 Çekiniktir.'
          ]
        },
        {
          heading: 'Cinsiyetin Kalıtımı ve Akraba Evlilikleri',
          paragraphs: [
            'İnsanda 46 kromozomun 44 tanesi vücut kromozomu, 2 tanesi eşey kromozomudur. Dişiler 44+XX, Erkekler 44+XY formülüne sahiptir.',
            'Doğacak çocuğun cinsiyetini babadan gelen sperm hücresi (X veya Y) belirler. Babadan X gelirse kız (XX), Y gelirse erkek (XY) olur. Her doğumda kız veya erkek olma olasılığı daima %50’dir.',
            'Akraba Evlilikleri: Akrabalar arasında genetik benzerlik fazladır. Kalıtsal hastalık genleri genellikle çekinik taşınır. Akraba evliliğinde çekinik hastalık genlerinin (aa) bir araya gelme olasılığı çok artar.'
          ],
          examNote: "📌 LGS ÖNEMLİ KURAL: Bir ailenin daha önce kaç tane kız veya erkek çocuğu olursa olsun, yeni doğacak çocuğun kız veya erkek olma ihtimali her zaman yüzde 50'dir."
        }
      ],
      glossary: [
        { term: 'Alel', definition: 'Bir karakterin kalıtımından sorumlu gen çeşitlerinden her biri.' },
        { term: 'Genotip', definition: 'Canlının genetik kodlarının ve alel çiftlerinin tamamı.' },
        { term: 'Fenotip', definition: 'Genotip ve çevre etkileşimiyle canlının dış görünüşünde beliren özellik.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Doğacak çocuğun cinsiyetini anneden gelen yumurta hücresi belirler.', isCorrect: false, explanation: 'Yumurta daima X taşır; cinsiyeti babadan gelen X veya Y spermi belirler.' },
        { id: 2, statement: 'Akraba evliliği kalıtsal hastalıkların ortaya çıkma olasılığını artırır.', isCorrect: true, explanation: 'Ortak atadan gelen çekinik genlerin yan yana gelme şansı yükselir.' },
        { id: 3, statement: 'Melez iki dölün çaprazlanmasında çekinik fenotip görülme olasılığı %25’tir.', isCorrect: true, explanation: "Aa x Aa çaprazlamasında aa oranı 1/4 yani %25'tir." },
        {"id":4,"statement":"İnsanda yeni doğacak bir bebeğin cinsiyetini anneden gelen yumurta hücresi belirler.","isCorrect":false,"explanation":"Anneden sadece X kromozomu gelir; babanın sperminden X gelirse kız (XX), Y gelirse erkek (XY) olur, cinsiyeti babadan gelen sperm hücresi belirler."},
        {"id":5,"statement":"Saf döl çekinik iki bezelye çaprazlandığında (aa x aa), oluşacak yavruların tamamı kesinlikle çekinik fenotipli olur.","isCorrect":true,"explanation":"Her iki ebeveynden sadece çekinik alel (a) geleceğinden tüm yavrular aa genotipli ve çekinik fenotipli olur."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub2'),
        {
          id: 1,
          theme: 'Mendel Çaprazlamaları ve İhtimal Hesapları',
          cognitiveLevel: 'Uygulama ve Genetik Çıkarım',
          contextTitle: 'Melez Sarı Tohumlu Bezelyelerin Çaprazlanması',
          scenario: 'Bezelyelerde sarı tohum aleli yeşil tohum aleline baskındır. Heterozigot sarı tohumlu iki bezelye bitkisi kendi arasında çaprazlanmış ve 400 adet yeni bezelye tohumu elde edilmiştir.',
          questionPrompt: 'Genetik kurallara göre elde edilen bu tohumların beklenen fenotip dağılımı hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Yaklaşık 300 tanesi sarı tohumlu, yaklaşık 100 tanesi ise yeşil tohumlu olur.' },
            { key: 'B', text: 'Tohumların 400 tanesi de istisnasız melez genotipli sarı tohumlu olur.' },
            { key: 'C', text: 'Yaklaşık 200 tanesi yeşil tohumlu, yaklaşık 200 tanesi sarı tohumlu olur.' },
            { key: 'D', text: 'Tohumların tamamı çekinik karakterli saf döl yeşil tohumlu olarak gelişir.' }
          ],
          correctAnswer: 'A',
          explanation: "Melez iki döl çaprazlandığında (Ss x Ss) fenotip oranı %75 sarı, %25 yeşildir. 400 tohumun 300'ü sarı, 100'ü yeşil beklenir."
        },
        {
          id: 2,
          theme: 'Fenotipten Genotip Belirleme',
          cognitiveLevel: 'Tersine Akıl Yürütme',
          contextTitle: 'Mor Çiçekli Bezelyelerin Beyaz Çiçekli Yavrusu',
          scenario: 'Mor çiçekli iki bezelye bitkisinin çaprazlanması sonucunda beyaz çiçekli bezelyeler elde edilmiştir. Bezelyelerde mor çiçek aleli beyaz çiçek aleline baskındır.',
          questionPrompt: 'Bu çaprazlama ve oluşan yavrular hakkında yapılan aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Çaprazlanan mor çiçekli bezelyelerin her ikisi de homozigot baskın genotiptedir.' },
            { key: 'B', text: 'Çaprazlanan ata bezelyelerin her ikisinde de çekinik beyaz çiçek geni mevcuttur.' },
            { key: 'C', text: 'Oluşan mor çiçekli yavruların tamamı saf döl genotipe sahiptir.' },
            { key: 'D', text: 'Beyaz çiçekli bezelyenin oluşması ortam sıcaklığının değişmesinden kaynaklanan bir modifikasyondur.' }
          ],
          correctAnswer: 'B',
          explanation: 'Çekinik fenotipli (beyaz) yavrunun oluşabilmesi için her iki ebeveynden de küçük alel gelmelidir; bu da ata bezelyelerin heterozigot (melez) olduğunu kanıtlar.'
        },
        {
          id: 3,
          theme: 'İnsanda Cinsiyet Kalıtımı',
          cognitiveLevel: 'Kavramsal Muhakeme',
          contextTitle: 'Üç Erkek Çocuğu Olan Bir Ailenin Dördüncü Çocuğu',
          scenario: 'Bir ailenin art arda doğan ilk üç çocuğu da erkek olmuştur. Anne ve baba dördüncü çocuklarının cinsiyetinin ne olacağını merak etmektedir.',
          questionPrompt: 'İnsanda cinsiyetin kalıtım kuralları dikkate alındığında dördüncü çocuk ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Önceki çocuklar erkek olduğu için dördüncü çocuğun kız olma olasılığı yüzde yüze yakındır.' },
            { key: 'B', text: 'Babanın sperm hücresi sadece Y kromozomu ürettiği için yeni çocuk kesinlikle erkek olur.' },
            { key: 'C', text: "Her gebelik bağımsız bir olaydır ve dördüncü çocuğun kız ya da erkek olma olasılığı daima yüzde 50'dir." },
            { key: 'D', text: 'Anneden gelen yumurta hücresinin türü bebeğin cinsiyetini tek başına belirler.' }
          ],
          correctAnswer: 'C',
          explanation: "Her doğum birbirinden bağımsız bir genetik olaydır. Her seferinde kız veya erkek olma olasılığı %50'dir."
        },
        {
          id: 4,
          theme: 'Akraba Evliliği ve Genetik Riskler',
          cognitiveLevel: 'Toplumsal Sağlık ve Mantık Muhakeme',
          contextTitle: 'Akraba Evliliklerinde Kalıtsal Hastalık Sıklığı',
          scenario: 'Kalıtsal hastalık genleri toplumda genellikle çekinik alellerle taşınır. Bir bireyin hasta olabilmesi için hem anneden hem de babadan bu çekinik hastalık genini alması gerekir.',
          questionPrompt: 'Akraba evliliklerinde kalıtsal hastalıkların daha sık görülmesinin temel bilimsel açıklaması hangisidir?',
          options: [
            { key: 'A', text: 'Akraba evliliği yapan bireylerin DNA sarmalında yeni ve ölümcül nükleotid çeşitlerinin ortaya çıkması.' },
            { key: 'B', text: 'Akraba olan kişilerin kan gruplarının farklı olması sebebiyle embriyonun anne karnında zehirlenmesi.' },
            { key: 'C', text: 'Akrabaların vücut kromozomu sayısının 46 yerine 48 olması.' },
            { key: 'D', text: 'Aynı soydan gelen bireylerin genetik yapılarının benzer olması sebebiyle çekinik hastalık genlerinin bir araya gelme olasılığının artması.' }
          ],
          correctAnswer: 'D',
          explanation: 'Akrabalar ortak atadan benzer genler taşır. Bu durum çekinik hastalık genlerinin (aa) bir araya gelerek fenotipte hastalık oluşturma riskini ciddi biçimde artırır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub3',
      title: '3. Bölüm: Mutasyon ve Modifikasyon',
      shortTitle: 'Mutasyon ve Modifikasyon',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Mutasyon', 'Modifikasyon', 'Kalıtsallık Durumu', 'Genin Yapısı vs Genin İşleyişi', 'Çuha Çiçeği', 'Himalaya Tavşanı', 'Radyasyon ve Kimyasallar', 'Orak Hücre Anemisi ve Albinoluk'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mutasyon ile Modifikasyonun Temel Farkları',
          paragraphs: [
            'Mutasyon: Gen ve kromozomların kimyasal yapısında meydana gelen kalıcı değişikliklerdir. Radyasyon, X ışınları ve zararlı kimyasallar sebep olur. Üreme hücrelerindeki mutasyonlar dölden döle aktarılır.',
            'Modifikasyon: Çevre şartlarının (sıcaklık, ışık, besin) etkisiyle genlerin sadece işleyişinde meydana gelen ve kalıtsal olmayan geçici fenotip değişiklikleridir.',
            'Defter Analojisi: Deftere kurşun kalemle yazı yazıp silmek modifikasyondur; defterin yaprağını yırtıp parçalamak ise mutasyondur!'
          ],
          table: {
            headers: ['Özellik', 'Mutasyon', 'Modifikasyon'],
            rows: [
              ['Etkilenen Kısım', 'Genin kimyasal yapısı bozulur', 'Genin sadece işleyişi değişir'],
              ['Kalıtsallık', 'Üreme hücresinde ise kalıtsaldır', 'Kalıtsal değildir, yavruya geçmez'],
              ['Nedenleri', 'Radyasyon, kimyasal madde, X ışını', 'Sıcaklık, besin, ışık, nem farkı'],
              ['Örnekler', 'Albinoluk, 6 parmaklılık, hemofili', 'Çuha çiçeği, Himalaya tavşanı, kas yapma']
            ]
          }
        }
      ],
      glossary: [
        { term: 'Mutasyon', definition: 'Canlının genetik diziliminde çevresel veya kopyalama hataları sonucu oluşan kalıcı değişim.' },
        { term: 'Modifikasyon', definition: 'Çevresel faktörlerle genin işleyişinin değişmesi sonucu ortaya çıkan kalıtsal olmayan değişim.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Vücut geliştirme yapan bir sporcunun çocukları da kaslı doğar.', isCorrect: false, explanation: 'Kas gelişimi modifikasyondur, gen yapısını değiştirmez.' },
        { id: 2, statement: 'Üreme hücrelerinde meydana gelen mutasyonlar sonraki nesillere aktarılır.', isCorrect: true, explanation: 'Üreme hücresi mutasyonları kalıtsaldır.' },
        { id: 3, statement: 'Çuha çiçeğinin sıcaklığa göre farklı renk çiçek açması mutasyondur.', isCorrect: false, explanation: 'Genin işleyişi değiştiği için modifikasyondur.' },
        {"id":4,"statement":"Radyasyon etkisiyle van kedisinin gözlerinin farklı renkte olması kalıtsal bir mutasyondur.","isCorrect":true,"explanation":"Göz renklerinin farklılığı genetik materyalde meydana gelen mutasyon sonucu ortaya çıkmış ve sonraki nesillere aktarılabilen bir özelliktir."},
        {"id":5,"statement":"Çuha çiçeğinin 15-25 °C sıcaklıkta kırmızı, 30-35 °C sıcaklıkta beyaz çiçek açması DNA yapısının değiştiğini kanıtlar.","isCorrect":false,"explanation":"Bu durum modifikasyondur; DNA yapısı (nükleotid dizilimi) değişmez, yalnızca genin işleyişi sıcaklık etkisiyle değişir."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub3'),
        {
          id: 1,
          theme: 'Çevre Faktörleri ve Gen İşleyişi',
          cognitiveLevel: 'Deney Analizi ve Yorumlama',
          contextTitle: 'Çuha Çiçeğinde Sıcaklığa Bağlı Renk Değişimi',
          scenario: 'Kırmızı çiçekli bir çuha bitkisi 30 derece sıcaklıktaki seraya alındığında açan yeni çiçeklerinin beyaz renkli olduğu gözlemlenmiştir. Bu beyaz çiçekli bitkiden alınan tohumlar 18 derecede çimlendirildiğinde yeniden kırmızı çiçekler açmıştır.',
          questionPrompt: 'Çuha bitkisinde gerçekleşen bu durum ile ilgili aşağıdaki çıkarımlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Çevre sıcaklığı çiçek rengini belirleyen genin işleyişini değiştirmiştir ve bu durum modifikasyondur.' },
            { key: 'B', text: 'Yüksek sıcaklık bitkinin DNA yapısında kalıcı bir mutasyona sebep olmuştur.' },
            { key: 'C', text: 'Bitkinin kromozom sayısı sıcaklık değişimine bağlı olarak yarıya inmiştir.' },
            { key: 'D', text: 'Beyaz renkli çiçek özelliği sonraki tüm nesillere değişmeden kalıtsal olarak aktarılır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıcaklık etkisiyle genin yapısı değil işleyişi değişmiştir. Ortam şartları eski haline dönünce bitki tekrar kırmızı açmıştır; bu klasik bir modifikasyondur.'
        },
        {
          id: 2,
          theme: 'Himalaya Tavşanı ve Modifikasyon',
          cognitiveLevel: 'Kontrollü Deney Değerlendirmesi',
          contextTitle: 'Himalaya Tavşanında Kürk Rengi Deneyi',
          scenario: 'Himalaya tavşanının sırtındaki beyaz tüyler tıraşlanıp üzerine buz torbası bağlandığında çıkan yeni tüylerin siyah olduğu görülmüştür. Daha sonra bu siyah tüyler tıraşlanıp tavşan sıcak ortamda tutulduğunda yeniden beyaz tüyler çıkmıştır.',
          questionPrompt: 'Bu kontrollü deneyden çıkarılacak en temel bilimsel sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Buz torbası tavşanın DNA diziliminde nesilden nesile aktarılan kalıcı bir hasar bırakmıştır.' },
            { key: 'B', text: 'Çevre sıcaklığı tavşanın tüy rengini belirleyen genlerin işleyişini değiştirerek modifikasyon oluşturmuştur.' },
            { key: 'C', text: 'Tavşanın sırtında oluşan siyah tüyler sonraki tüm yavrularına doğrudan aktarılır.' },
            { key: 'D', text: 'Tavşan soğuk ortamda vücut sıcaklığını korumak için yeni bir canlı türüne dönüşmüştür.' }
          ],
          correctAnswer: 'B',
          explanation: 'Soğuk etkisiyle gen işleyişi değişip siyah tüy çıkmış, sıcakta tekrar beyaz çıkmıştır. Bu kalıtsal olmayan bir modifikasyondur.'
        },
        {
          id: 3,
          theme: 'Mutasyonların Kalıtsallık Şartı',
          cognitiveLevel: 'Hücresel Düzeyde Muhakeme',
          contextTitle: 'Röntgen Işınlarına Maruz Kalan İki Birey',
          scenario: 'Hamileliğin ilk haftalarında kontrolsüzce röntgen ışınlarına maruz kalan bir anne adayının üreme hücrelerindeki DNA diziliminde kırılmalar meydana gelmiş ve doğan bebeğinde altı parmaklılık görülmüştür.',
          questionPrompt: 'Bu olay ve mutasyonların kalıtımı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Röntgen ışınları sadece canlının dış görünüşünü geçici olarak etkileyen bir modifikasyon etkenidir.' },
            { key: 'B', text: 'Vücut hücrelerinde meydana gelen tüm mutasyonlar istisnasız çocuklara doğrudan aktarılır.' },
            { key: 'C', text: 'Üreme hücrelerinde gerçekleşen genetik bozulmalar kalıtsaldır ve sonraki kuşaklara aktarılır.' },
            { key: 'D', text: 'Altı parmaklılık durumu bebek büyüdüğünde çevresel etkenlerle kendiliğinden düzelir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Eşey yani üreme hücrelerinde meydana gelen mutasyonlar kalıtsaldır ve döllere aktarılır. Vücut hücresi mutasyonları ise sadece bireyi bağlar.'
        },
        {
          id: 4,
          theme: 'Besin Farklılığı ve Kraliçe Arı Oluşumu',
          cognitiveLevel: 'Kavramsal Sınıflandırma',
          contextTitle: 'Arı Larvalarının Beslenme Farklılığı',
          scenario: 'Genetik olarak tamamen özdeş olan dişi arı larvalarından arı sütü ile beslenenler iri yapılı ve doğurgan kraliçe arıya, çiçek tozu ile beslenenler ise kısır işçi arılara dönüşmektedir.',
          questionPrompt: 'Aynı genetik yapıya sahip arı larvalarının farklı özellikler kazanması aşağıdaki kavramlardan hangisi ile açıklanır?',
          options: [
            { key: 'A', text: 'Kraliçe arının kromozom sayısının işçi arılardan iki kat fazla olması.' },
            { key: 'B', text: 'Arı sütünün larvaların genetik kodunda kalıcı mutasyonlara yol açması.' },
            { key: 'C', text: 'Arıların kurak çevre koşullarına uyum sağlamak için adaptasyon geliştirmesi.' },
            { key: 'D', text: 'Besin türünün genlerin işleyişini değiştirmesi sonucunda ortaya çıkan modifikasyon.' }
          ],
          correctAnswer: 'D',
          explanation: 'Aynı genotipe sahip larvaların besin farkıyla farklı fenotipler oluşturması kalıtsal olmayan bir modifikasyon örneğidir.'
        }
      ]
    },
    {
      id: 'g8-u2-sub4',
      title: '4. Bölüm: Adaptasyon (Çevreye Uyum)',
      shortTitle: 'Adaptasyon ve Doğal Seçilim',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Adaptasyon', 'Doğal Seçilim', 'Varyasyon (Tür İçi Çeşitlilik)', 'Kamuflaj', 'Kutup Ayısı ve Kaktüs Uyumları', 'Yaşama ve Üreme Şansı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Adaptasyon, Doğal Seçilim ve Varyasyon İlişkisi',
          paragraphs: [
            'Adaptasyon: Bir canlının belirli bir çevrede yaşama ve üreme şansını artıran, kalıtsal olarak yeni nesillere aktarılan özelliklerin tamamıdır.',
            'Kutup Uyumları: Kutup ayısı ve tilkisinin beyaz kürk rengi (kamuflaj), deri altında kalın yağ tabakası ve ısı kaybını azaltmak için küçük kulak-burun çıkıntıları vardır.',
            'Çöl Uyumları: Kaktüsün yapraklarının su kaybını önlemek için diken şeklinde olması, gövdesinde su depolaması; çöl tilkisinin ısıyı yaymak için geniş kulaklara sahip olması adaptasyondur.',
            'Doğal Seçilim: Çevre koşullarına uyum sağlayan güçlü bireylerin hayatta kalması, uyum sağlayamayanların ise elenerek yok olması sürecidir.',
            'Varyasyon: Aynı türe ait bireyler arasındaki genetik çeşitliliktir (İnsanların farklı göz renkleri, midyelerin kabuk desenleri).'
          ]
        }
      ],
      glossary: [
        { term: 'Adaptasyon', definition: 'Canlının bulunduğu ortamda hayatta kalma ve neslini devam ettirme şansını artıran kalıtsal uyum.' },
        { term: 'Doğal Seçilim', definition: 'Ortama uyum sağlayan canlıların yaşaması, uyum sağlayamayanların elenmesi süreci.' },
        { term: 'Varyasyon', definition: 'Bir türün kendi bireyleri arasında gözlemlenen genetik çeşitlilik.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Adaptasyonlar çevre etkisiyle kazanılır ve sonraki nesillere aktarılmaz.', isCorrect: false, explanation: 'Adaptasyonlar kalıtsaldır ve yavrulara aktarılır.' },
        { id: 2, statement: 'Kutup ayılarının ayak tabanlarının geniş olması karda batmasını engeller.', isCorrect: true, explanation: 'Geniş yüzey alanı basıncı azaltan kalıtsal bir adaptasyondur.' },
        { id: 3, statement: 'Doğal seçilim sonucunda ortama en iyi uyum sağlayan canlılar hayatta kalır.', isCorrect: true, explanation: 'Uyum sağlayanlar yaşar ve ürer.' },
        {"id":4,"statement":"Kutup tilkilerinin kulak ve burunlarının çöl tilkilerine göre küçük olması vücuttan ısı kaybını azaltmaya yönelik bir adaptasyondur.","isCorrect":true,"explanation":"Soğuk iklimde yaşayan canlıların uç organlarının küçük olması yüzey alanını küçülterek ısı kaybını minimize eder."},
        {"id":5,"statement":"Kamuflaj yeteneği sayesinde çevreye uyum sağlayan bukalemunun bu özelliği kalıtsal olmayıp sonradan öğrenilen bir davranıştır.","isCorrect":false,"explanation":"Kamuflaj nesilden nesile aktarılan kalıtsal bir adaptasyondur."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub4'),
        {
          id: 1,
          theme: 'Doğal Seçilim Mekanizması',
          cognitiveLevel: 'Model ve Popülasyon Muhakemesi',
          contextTitle: 'Kahverengi Toprak Adasındaki Tavşanlar',
          scenario: 'Toprak örtüsü tamamen kahverengi olan bir adaya eşit sayıda beyaz ve kahverengi tüylü tavşanlar bırakılmıştır. Adaya gelen yırtıcı kartal ve tilkilerin avlanma davranışları 5 yıl boyunca izlenmiştir.',
          questionPrompt: 'Beş yıllık süre sonunda bu adadaki tavşan popülasyonunda gerçekleşen değişim hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Beyaz tavşanlar avcılar tarafından kolay fark edilip avlandığı için elenmiş, kahverengi tavşanlar kamufle olarak hayatta kalmıştır.' },
            { key: 'B', text: 'Beyaz tavşanlar soğuktan korunmak için kürk rengini kendi istekleriyle kahverengiye çevirmiştir.' },
            { key: 'C', text: 'Avcılar sadece kahverengi tavşanları tercih ettiği için adada yalnızca beyaz tavşanlar çoğalmıştır.' },
            { key: 'D', text: 'Tavşanların tamamı adadan göç etmiş ve doğal seçilim gerçekleşmemiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kahverengi zeminde kamufle olan kahverengi tavşanlar hayatta kalıp üremiş, belirgin olan beyaz tavşanlar elenmiştir; bu durum doğal seçilimdir.'
        },
        {
          id: 2,
          theme: 'İklim Şartlarına Göre Vücut Çıkıntıları',
          cognitiveLevel: 'Karşılaştırmalı Anatomi Analizi',
          contextTitle: 'Kutup Tilkisi ile Çöl Tilkisinin Fiziksel Özellikleri',
          scenario: 'Kutup tilkilerinin kulak ve burun gibi vücut çıkıntıları oldukça küçük ve basık iken, çöl tilkilerinin kulakları geniş ve uzundur.',
          questionPrompt: 'Aynı canlı grubuna ait bu iki tür arasındaki vücut yapısı farklılığının temel adaptasyon sebebi nedir?',
          options: [
            { key: 'A', text: 'Çöl tilkilerinin daha hızlı koşarak avlarını yakalamak istemesi.' },
            { key: 'B', text: 'Kutup tilkisinin küçük çıkıntılarla ısı kaybını azaltması, çöl tilkisinin ise geniş kulaklarla fazla ısıyı vücuttan atması.' },
            { key: 'C', text: 'Kutuplardaki karların tilkilerin kulaklarını dondurarak zamanla küçültmesi.' },
            { key: 'D', text: 'Çöl tilkilerinin kürk renginin modifikasyon sonucu kalıtsal hale gelmesi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Soğukta yaşayan canlılarda küçük çıkıntılar ısı tasarrufu sağlar; sıcakta yaşayan canlılarda geniş çıkıntılar fazla vücut ısısının atılmasını sağlar.'
        },
        {
          id: 3,
          theme: 'Bitkilerde Su Tasarrufu Adaptasyonları',
          cognitiveLevel: 'Ekolojik Morfoloji Değerlendirmesi',
          contextTitle: 'Kaktüs ve Nilüfer Bitkilerinin Yaprak Yapıları',
          scenario: 'Çölde yaşayan kaktüs bitkisi yapraklarını dikene dönüştürüp gövdesinde su depolarken, sulak alanlarda yaşayan nilüfer bitkisi geniş yapraklara ve bol gözeneklere sahiptir.',
          questionPrompt: 'Bu iki bitkinin yaprak morfolojileri ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kaktüsün diken yaprakları bol miktarda terleme yaparak ortamı nemlendirir.' },
            { key: 'B', text: 'Nilüfer bitkisi yapraklarını geniş tutarak su kaybetmekten tamamen kaçınır.' },
            { key: 'C', text: 'Kaktüs kurak iklimde su kaybını en aza indirmek, nilüfer ise bol sulu ortamda fazla suyu uzaklaştırmak için uyum sağlamıştır.' },
            { key: 'D', text: 'Bir kaktüs göle dikilirse birkaç gün içinde yaprakları nilüfer gibi genişler.' }
          ],
          correctAnswer: 'C',
          explanation: 'Diken yaprak kurak ortamda su kaybını önler; geniş yaprak ise sulak ortamda fazla suyun terlemeyle atılmasını sağlar.'
        },
        {
          id: 4,
          theme: 'Sanayi Melanızmi ve Güve Kelebekleri',
          cognitiveLevel: 'Tarihsel Biyoloji ve Çıkarım',
          contextTitle: 'Sanayi Devrimi Öncesi ve Sonrası Güve Kelebekleri',
          scenario: 'İngiltere’de sanayi devrimi öncesinde ağaç gövdeleri açık renkli likenlerle kaplıyken açık renkli güve kelebeklerinin sayısı fazlaydı. Fabrika bacalarından çıkan kurumlar ağaçları kararttığında açık renkli kelebekler kuşlar tarafından kolayca avlanmış ve siyah güve kelebeklerinin popülasyonu hızla artmıştır.',
          questionPrompt: 'Yaşanan bu süreç ile ilgili aşağıdaki değerlendirmelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Kelebek popülasyonundaki açık ve koyu renk çeşitliliği varyasyona örnektir.' },
            { key: 'B', text: 'Koyu renkli ağaç gövdelerinde siyah kelebeklerin hayatta kalması doğal seçilimdir.' },
            { key: 'C', text: 'Koyu renkli kelebekler ortama kamufle olarak yaşama ve üreme şanslarını artırmıştır.' },
            { key: 'D', text: 'Açık renkli kelebekler fabrika dumanının sıcaklığından etkilenerek siyah renge dönüşmüş birer modifikasyondur.' }
          ],
          correctAnswer: 'D',
          explanation: 'Kelebeklerin rengi sonradan dumanla boyanmamıştır; zaten popülasyonda var olan koyu renk varyantları kamufle olarak hayatta kalmış ve doğal seçilim gerçekleşmiştir.'
        }
      ]
    },
    {
      id: 'g8-u2-sub5',
      title: '5. Bölüm: Biyoteknoloji',
      shortTitle: 'Biyoteknoloji ve Genetik Mühendisliği',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Biyoteknoloji', 'Genetik Mühendisliği', 'Gen Aktarımı', 'Gen Tedavisi', 'Klonlama (Dolly)', 'Aşı ve İnsülin Üretimi', 'GDO (Genetiği Değiştirilmiş Organizmalar)', 'Yapay Seçilim ve Islah'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Biyoteknoloji ve Genetik Mühendisliği Uygulamaları',
          paragraphs: [
            'Biyoteknoloji: Biyolojik sistem ve organizmaların endüstri, sağlık ve tarımda insan yararına ürün elde etmek için kullanılmasıdır.',
            'Genetik Mühendisliği: Canlıların genetik yapısını değiştirerek onlara yeni özellikler kazandıran bilim dalıdır.',
            'Gen Aktarımı: Bir canlıdaki istenen genin virüs veya plazmit aracılığıyla başka bir canlıya aktarılmasıdır (Bakterilere insan insülin geni aktarılarak şeker ilacı üretilmesi).',
            'Klonlama: Bir organizmanın vücut hücresi çekirdeği kullanılarak eşeysiz yolla genetik ikizinin oluşturulmasıdır (Dolly). Klonlanan canlı, çekirdeği alınan bireyin genetik kopyasıdır.',
            'GDO Riskleri: Biyoçeşitliliğin azalması, alerjik reaksiyonlar ve yabani türlere gen kaçışı gibi riskler barındırır.'
          ]
        }
      ],
      glossary: [
        { term: 'Gen Aktarımı', definition: 'Bir canlının belirli bir özelliğini kodlayan genin başka bir organizmaya nakledilmesi.' },
        { term: 'Klonlama', definition: 'Bir canlının genetik kopyasının eşeysiz yöntemlerle üretilmesi.' },
        { term: 'GDO', definition: 'Modern biyoteknolojik yöntemlerle gen dizilimine müdahale edilmiş organizma.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Bakterilere gen aktarılarak insan insülin hormonu üretilebilmektedir.', isCorrect: true, explanation: 'Biyoteknolojik yöntemle bakteriler insülin sentezler.' },
        { id: 2, statement: 'Klonlanan kuzu taşıyıcı annenin genetik özelliklerini taşır.', isCorrect: false, explanation: 'Klonlanan kuzu çekirdeği alınan canlıyla aynı genotiptedir.' },
        { id: 3, statement: 'Geleneksel ıslah çalışmaları genetik mühendisliğine göre çok daha kısa sürede sonuç verir.', isCorrect: false, explanation: 'Geleneksel ıslah nesiller boyu uzun yıllar alır.' },
        {"id":4,"statement":"Ateş böceğinin ışık saçma geninin tütün bitkisine aktarılması sonucunda bitkinin ışık saçması gen aktarımı (gen transferi) yöntemine örnektir.","isCorrect":true,"explanation":"Bir canlı türünden başka bir canlı türüne gen transfer edilerek yeni bir özellik kazandırılmıştır."},
        {"id":5,"statement":"Biyoteknolojik yöntemlerle elde edilen GDO’lu ürünlerin doğaya kontrolsüz salınması ekolojik dengede ve biyoçeşitlilikte bozulmalara yol açabilir.","isCorrect":true,"explanation":"GDO’lu organizmalar doğal türlerle rekabete girerek yerel gen kaynaklarını ve biyoçeşitliliği tehdit edebilir."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub5'),
        {
          id: 1,
          theme: 'Bakteri ile İnsülin Hormonu Üretimi',
          cognitiveLevel: 'Biyoteknolojik Süreç Analizi',
          contextTitle: 'Bakterilere İnsan İnsülin Geni Aktarımı',
          scenario: 'Sağlıklı insan hücrelerinden insülin üretiminden sorumlu gen kesilip çıkarılmış, bakterilerin DNA halkasına eklenmiş ve bu bakterilerin çoğalarak şeker hastaları için saf insülin üretmesi sağlanmıştır.',
          questionPrompt: 'Bu biyoteknolojik çalışma ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Farklı canlı türleri arasında gen aktarımı yapılarak canlıya yeni bir biyolojik özellik kazandırılmıştır.' },
            { key: 'B', text: "Bakterinin tüm DNA yapısı insan DNA'sı ile tamamen yer değiştirmiştir." },
            { key: 'C', text: 'Üretilen insülin hormonu bakterinin kendi hücrelerini yok ederek ölmesine neden olur.' },
            { key: 'D', text: 'Bu işlem geleneksel yöntemlerle yapılan yapay seçilime bir örnektir.' }
          ],
          correctAnswer: 'A',
          explanation: 'İnsandan bakteriye gen aktarılarak bakteriye insülin sentezleme yeteneği kazandırılmıştır.'
        },
        {
          id: 2,
          theme: 'Klonlama Basamakları ve Genetik Benzerlik',
          cognitiveLevel: 'Görsel Şema ve Genetik Eşleştirme',
          contextTitle: "Dolly'nin Klonlanma Aşamaları",
          scenario: 'A koyununun vücut hücresinden çekirdek alınmış, B koyununun çekirdeği çıkartılmış yumurta hücresine yerleştirilmiştir. Gelişen embriyo C koyununun rahmine nakledilmiş ve sağlıklı bir kuzu dünyaya gelmiştir.',
          questionPrompt: 'Dünyaya gelen klon kuzu genetik özellikleri bakımından hangi koyunun birebir kopyasıdır?',
          options: [
            { key: 'A', text: 'Yumurta hücresini sağlayan B koyununun kopyasıdır.' },
            { key: 'B', text: 'Vücut hücresinin çekirdeği alınan A koyununun kopyasıdır.' },
            { key: 'C', text: 'Embriyoyu karnında taşıyan C koyununun kopyasıdır.' },
            { key: 'D', text: 'A, B ve C koyunlarının genetik özelliklerinin eşit orandaki birleşimidir.' }
          ],
          correctAnswer: 'B',
          explanation: "Kalıtsal bilgiler çekirdekteki DNA'da bulunur. Çekirdek A koyunundan alındığı için doğan kuzu A koyununun genetik kopyasıdır."
        },
        {
          id: 3,
          theme: 'Tarımsal Biyoteknoloji ve Besin Zenginleştirme',
          cognitiveLevel: 'Kazanım ve Çıkarım',
          contextTitle: 'A Vitamini Öncülü İçeren Altın Pirinç',
          scenario: 'Genetik mühendisleri nergis çiçeğinden aldıkları beta-karoten üretiminden sorumlu geni pirinç bitkisine aktararak taneleri sarı renkli ve yüksek A vitamini içeren altın pirinç üretmişlerdir.',
          questionPrompt: 'Altın pirinç üretimi ile ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Pirinç bitkisinin genetik yapısı değiştirilmeden sadece gübreleme ile renk değişimi sağlanmıştır.' },
            { key: 'B', text: 'Pirinç bitkisinde meydana gelen bu değişim kalıtsal olmayıp gelecek yıla aktarılmaz.' },
            { key: 'C', text: 'Biyoteknolojik yöntemlerle bitkilerin besin içeriği zenginleştirilerek insan sağlığına yarar sağlanmıştır.' },
            { key: 'D', text: 'Bu işlem sonucunda pirinç bitkisi tamamen farklı bir meyve türüne dönüşmüştür.' }
          ],
          correctAnswer: 'C',
          explanation: 'Gen aktarımıyla pirincin vitamin değeri artırılmış ve yetersiz beslenmeyle mücadelede faydalı bir biyoteknolojik ürün elde edilmiştir.'
        },
        {
          id: 4,
          theme: 'Biyoteknolojinin Olası Ekolojik Riskleri',
          cognitiveLevel: 'Eleştirel Düşünme ve Risk Analizi',
          contextTitle: "GDO'lu Tarım Ürünleri ve Çevre Etkileşimi",
          scenario: 'Böcek ilaçlarına karşı dirençli gen aktarılmış mısır tarlalarından rüzgâr ve böceklerle taşınan polenlerin, tarlanın çevresindeki yabani bitkilerle tozlaştığı ve bu yabani otların da tarım ilaçlarına karşı süper dirençli hale geldiği tespit edilmiştir.',
          questionPrompt: 'Bu durum biyoteknolojik uygulamaların hangi olumsuz yönüne kanıt oluşturur?',
          options: [
            { key: 'A', text: 'Tarımsal üretimde verimin sınırsız şekilde artmasına.' },
            { key: 'B', text: 'İlaç üretiminde kullanılan bitki çeşitliliğinin hızla tükenmesine.' },
            { key: 'C', text: 'Genetiği değiştirilmiş bitkilerin fotosentez yapmayı bırakmasına.' },
            { key: 'D', text: 'Genetik kirlilik oluşarak doğal ekosistemdeki yabani türlerin dengesinin bozulmasına ve kontrolsüz direnç yayılmasına.' }
          ],
          correctAnswer: 'D',
          explanation: "GDO'lu bitkilerden çevreye yayılan genler yabani otlara geçerek süper dirençli otlar oluşturabilir; bu durum genetik kirlilik ve ekolojik risk olarak tanımlanır."
        }
      ]
    }
  ]
};
