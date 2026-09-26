import { Unit } from '../../types/curriculum';

export const grade6Unit3Data: Unit = {
  id: 'g6-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Canlılarda Sistemler',
  unitEndPageRange: 's. 128-133',
  colorTheme: {
    primary: 'from-green-600 to-emerald-600',
    border: 'border-green-500/40',
    bg: 'bg-green-950/40',
    accent: 'text-green-400',
    text: 'text-green-200'
  },
  subTopics: [
    {
      id: 'g6-u3-sub1',
      title: '1. Bitki ve Hayvanlarda Üreme, Büyüme ve Gelişme',
      shortTitle: 'Canlılarda Üreme & Gelişme',
      badge: 'Sayfa 82-107',
      pageRange: '82 - 107',
      concepts: ['Eşeysiz Üreme', 'Vejetatif', 'Bölünme', 'Tomurcuklanma', 'Rejenerasyon', 'Eşeyli Üreme', 'Tozlaşma', 'Döllenme', 'Çimlenme', 'Başkalaşım', 'İnsanda Üreme'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Eşeyli ve Eşeysiz Üreme Çeşitleri',
          paragraphs: [
            'Canlıların nesillerini devam ettirebilmek için kendilerine benzer yeni bireyler meydana getirmesine üreme denir. Üreme eşeyli ve eşeysiz olmak üzere ikiye ayrılır:',
            '• Eşeysiz Üreme: Tek bir ata canlıdan döllenme olmaksızın yeni bireylerin oluşmasıdır. Oluşan yavrular ata canlıyla tamamen aynı kalıtsal yapıdadır.',
            '1) Vejetatif Üreme: Bitkilerin kök, gövde, dal veya yaprak gibi kısımlarından yeni bitki oluşmasıdır (Çilek, patates, gül çeliği, söğüt).',
            '2) Bölünme ile Üreme: Tek hücreli canlıların ikiye bölünmesidir (Amip, bakteri, öglena, paramesyum).',
            '3) Tomurcuklanma ile Üreme: Canlı vücudunda oluşan çıkıntının büyüyüp yeni birey olmasıdır (Hidra, bira mayası mantarı, mercan).',
            '4) Rejenerasyon ile Üreme: Kopan parçanın kendini tamamlayarak yeni canlı oluşturmasıdır (Planarya/yassı solucan, denizyıldızı).',
            '• Eşeyli Üreme: İki ata canlının (dişi ve erkek) üreme hücrelerinin (sperm ve yumurta) birleşmesiyle yeni canlı oluşmasıdır. Yavrular ana ve babadan farklı genetik çeşitlilik gösterir.'
          ]
        },
        {
          heading: 'Çiçekli Bitkilerde Üreme ve Tohumun Çimlenmesi',
          paragraphs: [
            'Çiçeğin Kısımları: Çiçek sapı, Çanak yaprak (yeşil, korur), Taç yaprak (renkli, kokulu, böcekleri çeker), Erkek organ (başçıkta polen üretilir, sapçık taşır), Dişi organ (dişicik tepesi polenleri yapıştırır, yumurtalıkta tohum taslağı döllenir).',
            'Çimlenme İçin Gerekli Şartlar: Uygun Sıcaklık + Su (Nem) + Oksijen (Hava). Kısaca S-O-S formülüdür.',
            'Çok Önemli Not: Çimlenmekte olan bir tohum henüz yeşil yaprak çıkarıp fotosentez yapamadığı için çimlenme evresinde IŞIK VE KARBONDİOKSİT KESİNLİKLE GEREKLİ DEĞİLDİR! Çimlenme karanlık ortamda da başarıyla gerçekleşir.'
          ],
          examNote: 'LGS Püf Noktası: Çimlenme için su, oksijen ve sıcaklık şarttır. Işık ve karbondioksit çimlenme için gerekmez, çimlenmeden sonraki fotosentez ve büyüme için gerekir!'
        },
        {
          heading: 'Hayvanlarda Üreme, Başkalaşım ve İnsanda Yaşam Döngüsü',
          paragraphs: [
            '• Doğurarak Çoğalanlar: Memeliler (kedi, köpek, inek, yarasa, yunus, balina, insan). Yavru bakımı vardır, yavrularını sütle beslerler.',
            '• Yumurta ile Çoğalanlar: Kuşlar (yavru bakımı vardır), balıklar, sürüngenler, kurbağalar (yavru bakımı yoktur).',
            '• Başkalaşım (Metamorfoz): Yumurtadan çıkan yavrunun ana canlıya benzemeyip yapısal değişim geçirerek ergin hâle gelmesidir (Kelebek ve Kurbağa).',
            '• İnsanda Üreme: Yumurtalıkta üretilen yumurta hücresi ile testiste üretilen sperm hücresi yumurta kanalında birleşerek döllenir. Döllenmiş yumurtaya Zigot denir. Zigot döl yatağında (rahim) bölünerek Embriyo, 2. aydan sonra Fetüs ve 9 ay sonra Bebek olarak dünyaya gelir.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u3-s1-tohum-deney',
          pageNumber: 'Sayfa 94-96',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 10: Tohumun Çimlenmesine Etki Eden Faktörler',
          prompt: 'Karanlık ve aydınlık, ıslak ve kuru, 0 °C ve 25 °C ortamlardaki fasulye tohumlarının çimlenme durumlarını inceleyiniz.',
          resultInfoBox: 'Karanlık ortamdaki ıslak pamuklu 25 °C’deki fasulye çimlenirken, kuru pamuktaki veya 0 °C’deki fasulye çimlenemez. Işık çimlenmeyi etkilemez.'
        }
      ],
      glossary: [
        { term: 'Vejetatif Üreme', definition: 'Bitkilerin dal, yaprak veya kök gibi kısımlarından yeni bitki üretilmesi.' },
        { term: 'Tozlaşma', definition: 'Erkek organ başçığındaki polenlerin rüzgâr veya böceklerle dişicik tepesine taşınması.' },
        { term: 'Çimlenme', definition: 'Tohumun uygun su, oksijen ve sıcaklıkta uyku evresinden çıkıp genç fidana dönüşmesi.' },
        { term: 'Başkalaşım', definition: 'Kurbağa ve kelebek gibi canlıların yumurtadan çıktıktan sonra erginleşene kadar geçirdiği evreler.' },
        { term: 'Zigot', definition: 'Sperm ve yumurta hücrelerinin döllenmesiyle oluşan ilk hücre.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Tohumun çimlenebilmesi için güneş ışığı zorunlu bir ihtiyaçtır.', isCorrect: false, explanation: 'Yanlıştır. Tohum çimlenirken yaprağı olmadığı için ışığa ihtiyaç duymaz, karanlıkta da çimlenir.' },
        { id: 2, text: 'Planarya ve denizyıldızı rejenerasyon (yenilenme) ile eşeysiz üreyebilir.', isCorrect: true, explanation: 'Doğrudur. Kopan parçalarından yeni canlılar oluşabilir.' },
        { id: 3, text: 'Kurbağa ve kelebek yaşam döngülerinde başkalaşım geçirir.', isCorrect: true, explanation: 'Doğrudur. Larva/iribaş evresinden ergin bireye dönüşürler.' },
        { id: 4, text: 'İnsanda döllenme olayı döl yatağında değil, yumurta kanalında gerçekleşir.', isCorrect: true, explanation: 'Doğrudur. Sperm ve yumurta yumurta kanalında birleşir.' },
        { id: 5, text: 'Bütün yumurtlayan hayvanlarda yavru bakımı görülür.', isCorrect: false, explanation: 'Yanlıştır. Balık ve kurbağalarda yavru bakımı yoktur, kuşlarda vardır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Dört özdeş kapta fasulye tohumları kullanılarak deneyler hazırlanıyor:\n1. Kap: Karanlık, 25 °C, ıslak pamuk\n2. Kap: Işıklı, 25 °C, ıslak pamuk\n3. Kap: Karanlık, 0 °C, ıslak pamuk\n4. Kap: Karanlık, 25 °C, kuru pamuk\n\nBuna göre hangi kaplardaki tohumların çimlenmesi beklenir?',
          options: [
            { key: 'A', text: 'Yalnız 2. Kap' },
            { key: 'B', text: '1 ve 2. Kap' },
            { key: 'C', text: '1 ve 4. Kap' },
            { key: 'D', text: '2 ve 3. Kap' }
          ],
          correctAnswer: 'B',
          explanation: 'Çimlenme için su, oksijen ve uygun sıcaklık yeterlidir; ışık aranmaz. Bu nedenle hem 1 (karanlık 25°C ıslak) hem 2 (ışıklı 25°C ıslak) çimlenir.'
        }
      ]
    },
    {
      id: 'g6-u3-sub2',
      title: '2. Denetleyici ve Düzenleyici Sistemler (Sinir Sistemi ve İç Salgı Bezleri)',
      shortTitle: 'Denetleyici & Düzenleyici Sistemler',
      badge: 'Sayfa 108-127',
      pageRange: '108 - 127',
      concepts: ['Merkezî Sinir Sistemi', 'Beyin', 'Beyincik', 'Omurilik Soğanı', 'Omurilik', 'Refleks', 'İç Salgı Bezleri', 'Hormon', 'İnsülin & Glukagon', 'Adrenalin', 'Tiroksin', 'Ergenlik'],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'Merkezî ve Çevresel Sinir Sistemi',
          paragraphs: [
            'Vücudumuzdaki sistemlerin düzenli, birbiriyle uyumlu ve kusursuz bir ahenk içinde çalışmasını denetleyici ve düzenleyici sistemler (sinir sistemi ve iç salgı bezleri) sağlar.',
            'Merkezî Sinir Sistemi Organları:',
            '1) Beyin: Öğrenme, hafıza, zekâ, duyu organlarının değerlendirilmesi, istemli hareketlerin kontrolü, acıkma, susama ve uyku merkezidir.',
            '2) Beyincik: Vücudun DENGE ve hareket merkezidir. Kol ve bacak kaslarının birbiriyle uyumlu çalışmasını sağlar.',
            '3) Omurilik Soğanı (Hayat Düğümü): Solunum, dolaşım, sindirim ve boşaltım gibi yaşamsal iç organların çalışmasını; yutma, çiğneme, öksürme, hapşırma ve kusma gibi istemsiz iç refleksleri yönetir.',
            '4) Omurilik: REFLEKS yönetim merkezidir. Beyin ile organlar arasındaki sinir iletim köprüsüdür.'
          ]
        },
        {
          heading: 'İç Salgı Bezleri ve Hormonların Görevleri',
          paragraphs: [
            'İç salgı bezleri ürettikleri kimyasal uyarıcıları (hormonları) doğrudan KANA salgılarlar:',
            '• Hipofiz Bezi: Büyüme hormonu salgılar; büyümeyi yönetir ve diğer iç salgı bezlerini denetler.',
            '• Tiroit Bezi: Tiroksin hormonu salgılar; vücudun enerji üretimini ve metabolizma hızını ayarlar.',
            '• Böbrek Üstü Bezi: Adrenalin hormonu salgılar; korku, coşku, öfke ve tehlike anında kalp atışını, kan basıncını ve solunumu hızlandırır.',
            '• Pankreas: İnsülin (yükselen kan şekerini düşürür) ve Glukagon (düşen kan şekerini normale yükseltir) hormonlarını salgılar.',
            '• Eşeysel Bezler: Erkeklerde testisler (testosteron), dişilerde yumurtalıklar (östrojen) cinsiyete özgü ergenlik özelliklerini oluşturur.'
          ],
          table: {
            headers: ['İç Salgı Bezi', 'Salgılanan Hormon', 'Vücuttaki Temel Görevi'],
            rows: [
              ['Hipofiz Bezi', 'Büyüme Hormonu', 'Büyümeyi sağlar, diğer bezleri orkestra şefi gibi yönetir.'],
              ['Tiroit Bezi', 'Tiroksin', 'Metabolizmayı ve kimyasal hızları düzenler.'],
              ['Böbrek Üstü Bezi', 'Adrenalin', 'Korku ve heyecan anında vücudu alarma geçirir.'],
              ['Pankreas', 'İnsülin & Glukagon', 'Kan şekerini dengede tutar (İnsülin indirir, Glukagon çıkarır).'],
              ['Eşeysel Bezler', 'Testosteron / Östrojen', 'Ergenlik dönemi cinsiyet özelliklerini geliştirir.']
            ]
          }
        },
        {
          heading: 'Çağını Aşanlar: Tıp ve Doğa Bilginleri',
          paragraphs: [
            '• İbnül Avvam (1080-1160): "Kitâbü’l-Filâha" eseriyle tarım, aşılama ve bitki biyolojisine öncülük etmiştir.',
            '• İbnül Baytar (1190-1248): 2000’den fazla şifalı bitki ve ilacı içeren dev botanik ansiklopedisini yazmıştır.',
            '• Sabuncuoğlu Şerefeddin (1385-1468): İlk resimli cerrahi tıp kitabını (Cerrahiyyetü’l-Hâniyye) yazmış, yılan zehirlerine karşı deneyler yapmıştır.',
            '• Hatice Safiye Ali (1894-1952): Türkiye Cumhuriyeti’nin ilk kadın doktorudur; çocuk sağlığı ve Süt Damlası kurumunun öncüsüdür.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u3-s2-sinir-sema',
          pageNumber: 'Sayfa 109',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 18: Sinir Sisteminin Bölümleri',
          prompt: 'Beyin, beyincik, omurilik soğanı ve omuriliğin yerlerini model üzerinde gösteriniz.',
          resultInfoBox: 'Beyin kafatasında, beyincik arka altta, omurilik soğanı boyun kökünde, omurilik ise omurga kanalı boyunca uzanır.'
        }
      ],
      glossary: [
        { term: 'Nöron', definition: 'Sinir sisteminde uyarıları elektriksel ve kimyasal mesajlarla ileten sinir hücresi.' },
        { term: 'Refleks', definition: 'Dıştan gelen tehlike ve uyarılara karşı vücudun omurilik yönetiminde gösterdiği ani istemsiz tepki.' },
        { term: 'İnsülin', definition: 'Pankreas tarafından salgılanıp kanda aşırı yükselen şekeri karaciğer ve hücrelere geçirerek düşüren hormon.' },
        { term: 'Adrenalin', definition: 'Böbrek üstü bezlerinden salgılanıp ani korku veya heyecan anında kalbi hızlandıran hormon.' }
      ],
      trueFalseQuestions: [
        { id: 6, text: 'Vücudun denge ve kas koordinasyonunu sağlayan merkez beyinciktir.', isCorrect: true, explanation: 'Doğrudur. Denge merkezi beyinciktir.' },
        { id: 7, text: 'Yutma, öksürme, hapşırma gibi hayati iç refleksleri omurilik soğanı kontrol eder.', isCorrect: true, explanation: 'Doğrudur. Omurilik soğanı hayat düğümüdür.' },
        { id: 8, text: 'İnsülin hormonu kandaki şeker seviyesini yükseltirken glukagon düşürür.', isCorrect: false, explanation: 'Yanlıştır. İnsülin şekeri düşürür (indirir), glukagon ise yükseltir.' },
        { id: 9, text: 'Limon görünce ağzın sulanması doğuştan gelen bir reflekstir.', isCorrect: false, explanation: 'Yanlıştır. Limonun tadı önceden öğrenildiği için sonradan kazanılan reflekstir.' },
        { id: 10, text: 'Adrenalin hormonu böbrek üstü bezleri tarafından salgılanır.', isCorrect: true, explanation: 'Doğrudur. Korku ve coşku hormonu adrenalindir.' }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Bisiklet süren bir çocuğun aniden önüne köpek fırlamış, çocuk hızla frene basmış, kalbi küt küt atmış ve göz bebekleri büyümüştür.\n\nBu olayda sırasıyla hangi yapılar ve hormonlar doğrudan görev almıştır?',
          options: [
            { key: 'A', text: 'Ani fren: Omurilik (Refleks) / Kalp hızlanması: Böbrek üstü bezi (Adrenalin)' },
            { key: 'B', text: 'Ani fren: Beyincik / Kalp hızlanması: Tiroit (Tiroksin)' },
            { key: 'C', text: 'Ani fren: Beyin / Kalp hızlanması: Pankreas (İnsülin)' },
            { key: 'D', text: 'Ani fren: Omurilik Soğanı / Kalp hızlanması: Hipofiz' }
          ],
          correctAnswer: 'A',
          explanation: 'Ani tehlike karşısında istemsiz frene basmak omurilik refleksidir; kalbin hızlanıp vücudun alarma geçmesi böbrek üstü bezinden salgılanan adrenalindir.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '129',
      type: 'multiple_choice',
      title: 'Tohumun Çimlenmesi',
      questionPrompt: 'Çiçekli bitkilerde tohumun çimlenebilmesi için aşağıdakilerden hangisi ŞART DEĞİLDİR?',
      options: [
        { key: 'A', text: 'Su (Nem)' },
        { key: 'B', text: 'Oksijen' },
        { key: 'C', text: 'Güneş Işığı' },
        { key: 'D', text: 'Uygun Sıcaklık' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Tohum çimlenirken yaprakları olmadığı için fotosentez yapmaz, depoladığı besini oksijenli solunumla yakar. Bu nedenle ışığa ihtiyaç duymaz; karanlıkta da çimlenir.'
    },
    {
      id: 2,
      pageNumber: '131',
      type: 'multiple_choice',
      title: 'Sinir Sistemi Görevleri',
      questionPrompt: 'Kişinin düz bir çizgide yalpalamadan yürümesini ve dans ederken dengede durmasını sağlayan merkezî sinir sistemi bölümü hangisidir?',
      options: [
        { key: 'A', text: 'Beyin' },
        { key: 'B', text: 'Beyincik' },
        { key: 'C', text: 'Omurilik Soğanı' },
        { key: 'D', text: 'Omurilik' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Beyincik kulaktaki yarım daire kanallarıyla birlikte vücudun dengesini ve istemli kas hareketlerinin uyumunu yönetir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Yemekten sonra kanda yükselen şekeri normal seviyeye indiren hormon hangisidir?',
      options: [
        { key: 'A', text: 'Adrenalin' },
        { key: 'B', text: 'İnsülin' },
        { key: 'C', text: 'Glukagon' },
        { key: 'D', text: 'Tiroksin' }
      ],
      correctAnswer: 'B',
      explanation: 'Pankreastan salgılanan insülin hormonu kan şekerini düşürür.'
    }
  ]
};
