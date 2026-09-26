import { Unit } from '../../types/curriculum';

export const grade8Unit2Data: Unit = {
  id: 'g8-unit-2',
  unitNumber: 2,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'DNA ve Genetik Kod',
  unitEndPageRange: 's. 91-103',
  colorTheme: {
    primary: 'from-amber-600 to-orange-700',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  subTopics: [
    {
      id: 'g8-u2-sub1',
      title: '1. Bölüm: DNA ve Genetik Kod',
      shortTitle: 'DNA ve Genetik Kod',
      badge: 'Sayfa 50-60',
      pageRange: '50 - 60',
      concepts: ['Kromozom', 'DNA (Deoksiribo Nükleik Asit)', 'Gen', 'Nükleotid', 'Organik Bazlar (Adenin, Timin, Guanin, Sitozin)', 'Deoksiriboz Şekeri', 'Fosfat', 'İkili Sarmal Yapı', 'DNA Eşlenmesi', 'DNA Onarımı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Kalıtsal Yapılar Arasındaki Hiyerarşi (KeDiGeNi)',
          paragraphs: [
            'Hücre çekirdeğinde bulunan kalıtsal yapılar karmaşıktan basite (büyükten küçüğe) doğru şu şekilde sıralanır: Kromozom > DNA > Gen > Nükleotid.',
            'Kromozom: DNA’nın özel koruyucu protein kılıfla sarılarak kısalıp kalınlaşmasıyla oluşan yapıdır. Sağlıklı bir insanda 2n=46 kromozom bulunur (23 anneden, 23 babadan). Farklı türlerin kromozom sayıları eşit olabilir (İnsan, moli balığı, kurtbağrı bitkisi 2n=46). Kromozom sayısının canlının gelişmişliği veya vücut büyüklüğü ile HİÇBİR İLİŞKİSİ YOKTUR (Örneğin eğrelti otu 500 kromozomludur ancak insandan gelişmiş değildir).',
            'DNA: Hücrenin yönetici molekülüdür; solunum, beslenme ve üreme gibi yaşamsal faaliyetleri yönetir. Çift zincirli ve sarmal bir döner merdiven yapısındadır.',
            'Gen: DNA üzerindeki anlamlı kalıtsal bilgi parçalarıdır; kalıtsal karakterleri belirler (göz rengi, kan grubu). DNA’nın GÖREV birimidir.',
            'Nükleotid: DNA’nın en küçük YAPI birimidir. Bir nükleotid 3 kısımdan oluşur: Fosfat (P) + Deoksiriboz Şekeri (D) + Organik Baz (A, T, G, C).'
          ],
          keyPoints: [
            'Karmaşıktan basite: Kromozom > DNA > Gen > Nükleotid (K-D-G-N: KediGenİ).',
            'Nükleotidin adı içerdiği ORGANİK BAZA göre söylenir (Adenin bazı içeriyorsa Adenin nükleotidi).',
            'Bir DNA molekülünde: Toplam Nükleotid Sayısı = Toplam Fosfat Sayısı = Toplam Şeker Sayısı = Toplam Organik Baz Sayısı.',
            'DNA zincirinde daima Adenin karşısına Timin (A=T ikili bağ), Guanin karşısına Sitozin (G≡C üçlü bağ) gelir.'
          ]
        },
        {
          heading: 'DNA’nın Kendini Eşlemesi ve Onarım Kuralları',
          paragraphs: [
            'Hücre bölünmesi öncesinde yeni hücrelere kalıtsal bilginin eksiksiz aktarılması için DNA kendini kopyalar (eşler).',
            'Eşlenme Basamakları: 1. DNA’nın iki zinciri arasındaki zayıf hidrojen bağları bir fermuar gibi açılarak zincirler ayrılır. 2. Sitoplazmada serbest dolaşan nükleotidler çekirdek içerisine girer. 3. Ayrılan zincirlerdeki nükleotidlerin karşısına uygun tamamlayıcı nükleotidler (A-T, G-C) yerleşir. 4. Biri eski biri yeni zincirden oluşan birbirinin tıpatıp aynısı 2 yeni DNA molekülü sentezlenir.',
            'DNA Onarımı: Tek bir zincirde meydana gelen yanlış eşleşmeler veya bir zincirdeki boşluklar DNA onarım enzimleri tarafından ONARILIR. Ancak karşılıklı her iki zincirde aynı anda meydana gelen eksiklikler ve kırılmalar ONARILAMAZ; bu durum mutasyona sebep olur.'
          ],
          examNote: '📌 LGS KURALI: Canlıların birbirinden farklı olmasının nedeni nükleotid çeşitlerinin farklı olması değil (her canlıda sadece A, T, G, C vardır); nükleotidlerin DİZİLİŞ SIRASI ve SAYILARININ farklı olmasıdır.'
        }
      ],
      glossary: [
        { term: 'Kromozom', definition: 'DNA ve özel proteinlerin birleşmesiyle oluşan, hücre bölünmesinde belirginleşen gen taşıyıcı yapı.' },
        { term: 'Nükleotid', definition: 'Fosfat, deoksiriboz şekeri ve bir organik bazdan oluşan DNA’nın temel yapı birimi.' },
        { term: 'DNA Eşlenmesi', definition: 'Hücre bölünmesi öncesinde ana DNA’nın kendini kopyalayarak iki özdeş DNA oluşturması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kromozom sayısı fazla olan canlılar diğer canlılara göre daha gelişmiştir.', isCorrect: false, explanation: 'Kromozom sayısı ile canlının gelişmişliği arasında hiçbir bağ yoktur (Eğrelti otu 500 kromozomludur).' },
        { id: 2, statement: 'Bir DNA molekülündeki toplam fosfat sayısı deoksiriboz şekeri sayısına eşittir.', isCorrect: true, explanation: 'Her nükleotidde bir fosfat ve bir şeker bulunur.' },
        { id: 3, statement: 'DNA’da karşılıklı iki zincirde aynı bölgede nükleotid bulunmaması durumunda oluşan hata onarılamaz.', isCorrect: true, explanation: 'Karşılıklı çift zincir boşlukları tamir edilemez.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'DNA Eşlenmesi ve Nükleotid Sayıları',
          cognitiveLevel: 'Grafik ve Hesaplama',
          contextTitle: 'Sitoplazmadaki Serbest Nükleotidlerin Değişimi',
          scenario: 'Bölünmekte olan bir hücrede DNA eşlenmesi sürecinde çekirdekteki ve sitoplazmadaki nükleotid değişimleri takip edilmiştir.',
          questionPrompt: 'DNA’nın kendini eşlemesi sürecinde gerçekleşen değişimlerle ilgili hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Sitoplazmadaki serbest deoksiriboz şekeri ve fosfat miktarı zamanla azalır.' },
            { key: 'B', text: 'Çekirdekteki toplam nükleotid sayısı yarıya iner.' },
            { key: 'C', text: 'Eşlenme bittiğinde oluşan iki yeni DNA molekülünün nükleotid dizilimi birbirinden farklıdır.' },
            { key: 'D', text: 'Sitoplazmadaki nükleotid miktarı sürekli olarak artış gösterir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Eşlenme sırasında yeni zincirlerin yapımı için sitoplazmadaki serbest nükleotidler (şeker, fosfat ve bazlar) çekirdeğe girer ve sitoplazmadaki miktarları azalır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub2',
      title: '2. Bölüm: Kalıtım',
      shortTitle: 'Kalıtım ve Çaprazlamalar',
      badge: 'Sayfa 61-72',
      pageRange: '61 - 72',
      concepts: ['Gregor Mendel', 'Genotip', 'Fenotip', 'Saf Döl (Homozigot)', 'Melez Döl (Heterozigot)', 'Baskın (Dominant) Alel', 'Çekinik (Resesif) Alel', 'Tek Karakter Çaprazlaması', 'İnsanda Cinsiyet Kalıtımı (XX-XY)', 'Akraba Evliliği'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mendel’in Çalışmaları ve Kalıtım Kavramları',
          paragraphs: [
            'Canlıların kalıtsal özelliklerinin anne ve babadan yavrulara nasıl aktarıldığını inceleyen bilim dalına genetik (kalıtım bilimi) denir. Kurucusu Avusturyalı rahip Gregor Mendel’dir.',
            'Mendel’in Bezelye Seçme Nedenleri: Kolay ve kısa sürede yetişmesi, yılda birden fazla ürün vermesi, kendi kendine tozlaşabilmesi (dış döllenmeye kapalı olması) ve gözle ayırt edilebilen çok sayıda zıt karaktere (sarı-yeşil, mor-beyaz, uzun-kısa) sahip olmasıdır.',
            'Genotip: Canlının genetik yapısıdır (AA, Aa, aa). Fenotip: Genotip ve çevrenin etkisiyle canlının dış görünüşünde ortaya çıkan özelliklerdir (Mor çiçek, sarı tohum).',
            'Baskın Alel (Dominant): Etkisini hem saf (AA) hem de melez (Aa) durumda fenotipte gösteren güçlü gendir; büyük harfle yazılır. Çekinik Alel (Resesif): Etkisini sadece saf homozigot (aa) durumda gösterebilen gendir; küçük harfle yazılır.'
          ],
          keyPoints: [
            'Saf Döl (Homozigot): Bir karakter için anne ve babadan aynı alellerin gelmesi (AA veya aa).',
            'Melez Döl (Heterozigot): Bir karakter için anne ve babadan farklı alellerin gelmesi (Aa).',
            'İki melez bireyin çaprazlanması (Aa x Aa): Genotip oranı %25 AA, %50 Aa, %25 aa; Fenotip oranı %75 Baskın, %25 Çekiniktir.'
          ]
        },
        {
          heading: 'Cinsiyetin Kalıtımı ve Akraba Evlilikleri',
          paragraphs: [
            'İnsanda 2n=46 kromozomun 44 tanesi vücut kromozomu, 2 tanesi eşey (cinsiyet) kromozomudur. Dişiler 44+XX, Erkekler 44+XY kromozom formülüne sahiptir.',
            'Doğacak çocuğun cinsiyetini BABAdan gelen sperm hücresi (X veya Y) belirler. Babadan X gelirse kız (XX), Y gelirse erkek (XY) olur. Her hamilelikte doğacak çocuğun kız veya erkek olma olasılığı daima %50’dir.',
            'Akraba Evlilikleri: Aralarında kan bağı bulunan bireylerin evlenmesidir. Kalıtsal hastalıkların çoğu çekinik genlerle (a) taşınır. Akrabaların genetik benzerliği yüksek olduğundan hastalık taşıyıcısı (Aa) iki bireyin bir araya gelme ve çocuklarında hasta (aa) birey oluşma olasılığı (%25) çok yükselir.'
          ],
          examNote: '📌 LGS KURALI: "Daha önce 3 kızı olan bir ailenin 4. çocuğunun erkek olma ihtimali yine %50’dir!" Önceki doğumlar sonraki doğumun ihtimalini asla etkilemez.'
        }
      ],
      glossary: [
        { term: 'Alel Gen', definition: 'Biri anneden diğeri babadan gelen, aynı karakter üzerinde etkili olan gen çifti.' },
        { term: 'Fenotip', definition: 'Genotipin dışa yansıması olan fiziksel özellik.' },
        { term: 'Akraba Evliliği', definition: 'Aynı soydan gelen bireylerin evlenmesi sonucu çekinik kalıtsal hastalıkların ortaya çıkma riskini artıran birliktelik.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'İnsanda doğacak bebeğin cinsiyetini anneden gelen yumurta hücresi belirler.', isCorrect: false, explanation: 'Anne sadece X verir; babadan X gelirse kız, Y gelirse erkek olur; cinsiyeti baba belirler.' },
        { id: 2, statement: 'Melez sarı tohumlu iki bezelye çaprazlandığında yeşil tohumlu bezelye oluşma ihtimali %25’tir.', isCorrect: true, explanation: 'Aa x Aa çaprazlamasında aa gelme olasılığı 1/4 (%25)’tir.' },
        { id: 3, statement: 'Akraba evlilikleri çocukların kesinlikle engelli doğmasına neden olur.', isCorrect: false, explanation: 'Kesinlik yoktur, ancak çekinik genlerin yan yana gelip hastalık oluşturma riski ciddi oranda artar.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Bezelyelerde Çaprazlama İhtimali',
          cognitiveLevel: 'Problem Çözme',
          contextTitle: 'Melez Bezelyelerin Çaprazlanması',
          scenario: 'Mor çiçekli bezelye (M) beyaz çiçekli bezelyeye (m) baskındır. Fenotipi mor çiçekli olan iki bezelye çaprazlandığında beyaz çiçekli yavru bezelyeler elde edilmiştir.',
          questionPrompt: 'Buna göre çaprazlanan ata bezelyeler ve oluşan yavrular ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Çaprazlanan ata bezelyelerin her ikisi de melez döl (Mm) genotipine sahiptir.' },
            { key: 'B', text: 'Çaprazlanan bezelyelerden biri homozigot baskın (MM) genotiplidir.' },
            { key: 'C', text: 'Oluşan mor çiçekli bezelyelerin tamamı saf döldür.' },
            { key: 'D', text: 'Beyaz çiçekli bezelye oluşma ihtimali %75’tir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Beyaz çiçek (mm) oluşabilmesi için her iki ata bezelyede de çekinik (m) alelinin bulunması şarttır; mor fenotipli olduklarına göre her ikisi de Mm (melez) olmalıdır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub3',
      title: '3. Bölüm: Mutasyon ve Modifikasyon',
      shortTitle: 'Mutasyon & Modifikasyon',
      badge: 'Sayfa 73-77',
      pageRange: '73 - 77',
      concepts: ['Mutasyon', 'Modifikasyon', 'Gen Yapısı Değişimi', 'Gen İşleyişi Değişimi', 'Radyasyon ve Kimyasallar', 'Kalıtsallık Şartı (Üreme Hücresi)', 'Orak Hücreli Anemi', 'Albinizm', 'Çuha Çiçeği', 'Himalaya Tavşanı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mutasyon ile Modifikasyonun Karşılaştırılması',
          paragraphs: [
            'Mutasyon: Çeşitli çevresel etkenlerle (radyasyon, X ışınları, zehirli kimyasallar, aşırı sıcaklık) DNA’nın nükleotid diziliminde veya kromozom yapısında meydana gelen KALICI bozulmalardır. Genin YAPISI değişir.',
            'Kalıtsallık Durumu: Mutasyon üreme hücrelerinde (sperm, yumurta) gerçekleşirse yavru döllere aktarılır (kalıtsaldır). Sadece vücut hücrelerinde (karaciğer, deri vb.) gerçekleşirse sadece o bireyi ilgilendirir, nesillere aktarılmaz.',
            'Mutasyon Örnekleri: Orak hücreli anemi, Albinizm (renk pigmenti yokluğu), Down sendromu (+1 kromozom, 47), Altı parmaklılık, Van kedisinin göz rengi farklılığı, dört boynuzlu keçi, kanser türleri.',
            'Modifikasyon: Çevre şartlarının (ısı, sıcaklık, besin, ışık, nem) etkisiyle canlının fenotipinde ortaya çıkan ve KALITSAL OLMAYAN geçici değişikliklerdir. Genin yapısı değil, yalnızca İŞLEYİŞİ (çalışma şekli) değişir. Çevre şartları normale dönünce canlı da eski haline döner.'
          ],
          table: {
            headers: ['Özellik', 'Mutasyon', 'Modifikasyon'],
            rows: [
              ['Etkilenen Kısım', 'Genin ve DNA’nın YAPISI bozulur', 'Genin İŞLEYİŞİ (çalışması) değişir'],
              ['Kalıtsallık', 'Üreme hücrelerindeyse kalıtsaldır', 'Kesinlikle kalıtsal değildir'],
              ['Nedenleri', 'Radyasyon, X ışınları, kimyasal kanserojenler', 'Sıcaklık, beslenme, ışık, nem, mekanik baskı'],
              ['Geri Dönüş', 'Ortam düzelse de kendiliğinden düzelmez', 'Ortam koşulları değişince eski haline döner'],
              ['Örnekler', 'Albinoluk, 6 parmaklılık, hemofili, orak hücre', 'Çuha çiçeği, arı sütü-polen, kas yapma, bronzlaşma']
            ]
          },
          examNote: '📌 KİTAPTAN BENZETME (s. 76): Defterin üzerine kurşun kalemle yazı yazıp sonra silmek MODİFİKASYON, defterin sayfasını yırtıp parçalamak ise MUTASYONDUR!'
        }
      ],
      glossary: [
        { term: 'Mutasyon', definition: 'DNA ve kromozomların nükleotid diziliminde meydana gelen yapısal, kalıcı değişiklikler.' },
        { term: 'Modifikasyon', definition: 'Çevre etkisiyle genlerin çalışma biçiminde meydana gelen ve kalıtsal olmayan geçici değişimler.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Vücut hücrelerinde meydana gelen mutasyonlar sonraki kuşaklara kalıtım yoluyla aktarılır.', isCorrect: false, explanation: 'Yalnızca üreme hücrelerindeki mutasyonlar yavrulara aktarılır.' },
        { id: 2, statement: 'Modifikasyonlarda genin nükleotid dizilişi ve yapısı tamamen değişir.', isCorrect: false, explanation: 'Modifikasyonda gen yapısı değil, sadece genin işleyişi değişir.' },
        { id: 3, statement: 'Çuha bitkisinin 15-25 °C’ta kırmızı, 25-35 °C’ta beyaz çiçek açması modifikasyondur.', isCorrect: true, explanation: 'Sıcaklığa bağlı olarak genin işleyişi değişmiştir; tohumu soğuğa dikilirse tekrar kırmızı açar.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Mutasyon ve Modifikasyon Ayrımı',
          cognitiveLevel: 'Kavramsal Analiz',
          contextTitle: 'Himalaya Tavşanı Deneyi',
          scenario: 'Himalaya tavşanının sırtındaki beyaz tüyler tıraşlanıp buz torbası bağlandığında çıkan tüyler siyah olmuş; daha sonra siyah tüyler tıraşlanıp sıcak su torbası konulduğunda tekrar beyaz tüyler çıkmıştır.',
          questionPrompt: 'Bu deneyden çıkarılabilecek en doğru bilimsel yargı hangisidir?',
          options: [
            { key: 'A', text: 'Sıcaklık değişimi tavşanın tüy rengini belirleyen genin yapısını kalıcı olarak bozmuştur.' },
            { key: 'B', text: 'Sıcaklık farkı genin işleyişini değiştirmiştir ve bu değişim kalıtsal olmayan bir modifikasyondur.' },
            { key: 'C', text: 'Tavşanın doğacak yavrularının sırtındaki tüyler kesinlikle siyah renkli olacaktır.' },
            { key: 'D', text: 'Buz torbası uygulaması tavşanda yararlı bir mutasyona sebep olmuştur.' }
          ],
          correctAnswer: 'B',
          explanation: 'Himalaya tavşanının tüy rengi sıcaklığa bağlı modifikasyondur; genin yapısı değişmez, işleyişi değişir ve yavrulara aktarılmaz.'
        }
      ]
    },
    {
      id: 'g8-u2-sub4',
      title: '4. Bölüm: Adaptasyon (Çevreye Uyum)',
      shortTitle: 'Adaptasyon & Doğal Seçilim',
      badge: 'Sayfa 78-81',
      pageRange: '78 - 81',
      concepts: ['Adaptasyon', 'Kalıtsal Uyum', 'Yaşama ve Üreme Şansı', 'Kamuflaj', 'Doğal Seçilim', 'Varyasyon (Tür İçi Çeşitlilik)', 'Kutup Ayısı ve Çöl Tilkisi', 'Kaktüs ve Nilüfer'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Adaptasyonun Tanımı ve Canlılardaki Örnekleri',
          paragraphs: [
            'Bir canlının belirli bir çevrede yaşama ve üreme şansını artıran, nesilden nesile aktarılan KALITSAL özelliklerin tümüne adaptasyon denir.',
            'Adaptasyonlar kalıtsaldır, DNA’ya işlenmiştir ve biyolojik çeşitliliğe (varyasyona) katkı sağlar.',
            'Örnekler: Kutup ayılarının beyaz kürk rengi (kamuflaj), geniş ayak tabanları (karda batmama) ve deri altında kalın yağ tabakası (soğuktan korunma). Çöl tilkilerinin vücut ısısını kolay yayabilmek için uzun kulaklı ve burunlu olması. Kaktüslerin su kaybını azaltmak için diken yapraklı ve gövdesinde su depo eden yapıda olması. Nilüferin sulak alanda bol terleme yapabilmek için geniş yapraklı olması. Bukalemunun kamufle olarak avcılardan korunması.'
          ],
          keyPoints: [
            'Doğal Seçilim: Çevre koşullarına uyum sağlayabilen güçlü canlıların hayatta kalıp üremesi, uyum sağlayamayanların ise elenerek yok olması sürecidir (Örn: Sanayi devrimi sonrası açık renkli güve kelebeklerinin avlanması, koyu renklilerin hayatta kalması).',
            'Varyasyon: Aynı türe ait bireyler arasındaki kalıtsal çeşitliliktir (Örn: İnsanların farklı göz renkleri, midyelerin kabuk desenleri).'
          ],
          examNote: '📌 LGS AYRIMI: "Farklı tür canlılar aynı ekosistemde benzer adaptasyonlar geliştirir" (Kutup ayısı ve kutup tilkisinin ikisinin de beyaz olması). "Aynı tür canlılar farklı ekosistemlerde farklı adaptasyonlar gösterir" (Çöl tilkisinin kulakları büyük, kutup tilkisinin kulakları küçüktür).'
        }
      ],
      glossary: [
        { term: 'Adaptasyon', definition: 'Canlının bulunduğu habitatta hayatta kalma ve üreme şansını artıran kalıtsal uyumları.' },
        { term: 'Doğal Seçilim', definition: 'Ortama uyum sağlayanların yaşamını sürdürüp zayıf olanların elenmesi.' },
        { term: 'Kamuflaj', definition: 'Canlının renk ve desenleriyle bulunduğu ortama uyum sağlayarak gizlenmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kutup ayısının beyaz tüylere sahip olması kalıtsal bir adaptasyondur.', isCorrect: true, explanation: 'Kutup ayısının yavruları da kutup ortamında beyaz tüylü doğar.' },
        { id: 2, statement: 'Farklı ekosistemlerde yaşayan aynı tür canlılar tamamen aynı adaptasyonları gösterir.', isCorrect: false, explanation: 'Farklı çevre şartlarında farklı adaptasyonlar geliştirirler (örneğin kutup tilkisi ile çöl tilkisi).' },
        { id: 3, statement: 'Doğal seçilim sonucunda çevreye uyum sağlayamayan canlılar zamanla elenir.', isCorrect: true, explanation: 'Uyum sağlayanlar ürer, sağlayamayanlar yok olur.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Doğal Seçilim ve Adaptasyon',
          cognitiveLevel: 'Mantık Muhakeme',
          contextTitle: 'Kahverengi Toprak Adasındaki Tavşanlar',
          scenario: 'Ders kitabının 80. sayfasındaki örnekte olduğu gibi kahverengi toprağa sahip bir adaya eşit sayıda beyaz ve kahverengi tüylü tavşanlar bırakılmıştır.',
          questionPrompt: 'Yıllar sonra adadaki tavşan popülasyonunda gerçekleşecek değişimle ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Beyaz tavşanlar avcılar tarafından kolay fark edilip avlanacağı için sayıları azalır, kahverengi tavşanlar doğal seçilimle çoğalır.' },
            { key: 'B', text: 'Beyaz tavşanlar sıcak ortamda modifikasyonla kendiliğinden kahverengiye dönüşür.' },
            { key: 'C', text: 'Adadaki tüm tavşanların kürk renkleri eşit sayıda kalmaya devam eder.' },
            { key: 'D', text: 'Beyaz tavşanların genetik yapısı değişerek çevreye adaptasyon sağlamadan da yaşarlar.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kahverengi toprakta beyaz tavşanlar kamuflaj avantajına sahip olmadığı için avcılarca hızla elenir; kahverengiler doğal seçilimle hayatta kalır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub5',
      title: '5. Bölüm: Biyoteknoloji',
      shortTitle: 'Genetik Mühendisliği & Biyoteknoloji',
      badge: 'Sayfa 82-90',
      pageRange: '82 - 90',
      concepts: ['Biyoteknoloji', 'Genetik Mühendisliği', 'Gen Aktarımı', 'Gen Tedavisi', 'Klonlama (Koyun Dolly)', 'GDO (Genetiği Değiştirilmiş Organizma)', 'Islah ve Yapay Seçilim', 'DNA Parmak İzi', 'Türkiye Tohum Gen Bankası'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Genetik Mühendisliği ile Biyoteknoloji İlişkisi',
          paragraphs: [
            'Biyoteknoloji: Biyolojik sistemler ve canlı organizmalar kullanılarak insanlığın yararına yeni ürünler (ilaç, aşı, gıda, enzim) geliştirilmesini sağlayan teknolojilerin tümüdür.',
            'Genetik Mühendisliği: DNA üzerindeki genlerin yapısını değiştiren, genleri bir canlıdan diğerine aktaran, kesen ve kopyalayan biyoloji alt dalıdır. Genetik mühendisliği araştırmacı ve mutfaktaki aşçı, biyoteknoloji ise ortaya çıkan nihai yemektir.',
            'Gen Aktarımı: Bir canlıdaki istenen özelliğin geninin alınıp başka bir canlıya aktarılmasıdır (Örn: İnsandan alınan insülin üretim geninin E. coli bakterisine aktarılarak şeker hastaları için bol ve ucuz insülin hormonu üretilmesi).',
            'Gen Tedavisi: Hastalıklı veya eksik genlerin etkisiz hale getirilmesi ya da yerine sağlıklı genlerin virüsler aracılığıyla aktarılmasıdır (Kanser ve genetik hastalıkların tedavisinde).',
            'Klonlama (Dolly 1997): Bir canlının vücut hücresinden alınan çekirdeğin, çekirdeği çıkarılmış bir yumurtaya aktarılması ve taşıyıcı anneye yerleştirilmesiyle çekirdeği alınan canlının genetik ikizinin üretilmesidir.'
          ],
          keyPoints: [
            'Islah ve Yapay Seçilim: İstenilen üstün özelliklere sahip canlıların insanlar tarafından seçilip eşleştirilmesidir (Süt verimi yüksek inekler, bol ürün veren buğdaylar).',
            'Ata tohumlarını korumak için kurulan Türkiye Tohum Gen Bankası dünyanın 3. büyük gen merkezidir.',
            'Biyoteknolojinin Yararları: Kanser tedavisi, aşı ve antibiyotik üretimi, kuraklığa ve zararlılara dayanıklı tarım bitkileri (altın pirinç).',
            'Biyoteknolojinin Zararları: GDO’lu besinlerin alerjik reaksiyonlara yol açabilmesi, biyoçeşitliliğin azalması ve tohumların kısırlaşması.'
          ],
          examNote: '📌 LGS TUZAĞI: Klonlama ile doğan yavru (Dolly), VÜCUT HÜCRESİNİN ÇEKİRDEĞİ ALINAN canlının genetik kopyasıdır! Taşıyıcı annenin veya yumurtası alınan koyunun kopyası değildir.'
        }
      ],
      glossary: [
        { term: 'Biyoteknoloji', definition: 'Canlıların genetik ve hücresel özelliklerinden yararlanılarak sanayi, sağlık ve tarımda ürün geliştirilmesi.' },
        { term: 'Gen Aktarımı', definition: 'Bir canlıdaki genin başka bir canlının DNA’sına eklenmesi yöntemi.' },
        { term: 'Klonlama', definition: 'Bir ata canlıdan eşeysiz olarak genetik kopyasının üretilmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Klonlanan bir koyun, çekirdeği çıkartılmış yumurta hücresi alınan koyunun genetik ikizidir.', isCorrect: false, explanation: 'Klonlanan birey, vücut hücresinin çekirdeği aktarılan canlının genetik kopyasıdır.' },
        { id: 2, statement: 'Bakterilere insülin üretim geni aktarılarak diyabet ilacı üretilmesi gen aktarımına örnektir.', isCorrect: true, explanation: 'İnsan insülin geni bakteriye aktarılarak saflaştırılır.' },
        { id: 3, statement: 'Geleneksel ıslah çalışmaları genetik mühendisliğine göre çok daha kısa sürede sonuç verir.', isCorrect: false, explanation: 'Geleneksel ıslah nesiller boyu yıllar sürer; genetik mühendisliği çok daha hızlı sonuç alır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Biyoteknolojik Uygulamalar ve Klonlama',
          cognitiveLevel: 'Şema Yorumlama',
          contextTitle: 'Dolly’nin Klonlanma Şeması',
          scenario: 'Ders kitabının 84. sayfasında A koyunundan vücut hücresi çekirdeği alınmış, B koyunundan çekirdeksiz yumurta hücresi alınarak kaynaştırılmış ve C koyununun döl yatağına yerleştirilmiştir.',
          questionPrompt: 'Doğan klon kuzu ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Klon kuzu genetik olarak tamamen A koyununun kopyasıdır.' },
            { key: 'B', text: 'Klon kuzunun genleri B koyununun yumurtasından gelmiştir.' },
            { key: 'C', text: 'Klon kuzu taşıyıcı C koyununun fiziksel özelliklerini taşır.' },
            { key: 'D', text: 'Klon kuzunun oluşumunda döllenme olayı gerçekleşmiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kalıtsal bilgiler hücre çekirdeğindeki DNA’da bulunur. Çekirdek A koyunundan alındığı için doğan kuzu A koyununun genetik ikizidir.'
        }
      ]
    }
  ]
};
