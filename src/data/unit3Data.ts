import { Unit } from '../types/curriculum';

export const unit3Data: Unit = {
  id: 'unit-3',
  unitNumber: 3,
  title: 'Canlıların Yapısına Yolculuk',
  colorTheme: {
    primary: 'sky-500',
    border: 'border-sky-500/40',
    bg: 'bg-sky-500/10',
    accent: 'sky-400',
    text: 'text-sky-400'
  },
  subTopics: [
    {
      id: 'unit3-sub1',
      title: 'Hücre ve Organelleri (Hücreden Organizmaya)',
      shortTitle: '3.1 Hücre & Organeller',
      badge: 'Sayfa 99-117',
      pageRange: '99 - 117',
      concepts: ['Mikroskop', 'Preparat (Lam-Lamel)', 'Hücre', 'Hücre zarı', 'Çekirdek', 'Sitoplazma', 'Organeller', 'Bitki ve hayvan hücresi farkları', 'Hücre Duvarı', 'Hücre-Doku-Organ-Sistem-Organizma'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mikroskobun Keşfi ve Preparat Hazırlama',
          paragraphs: [
            'Canlıların en küçük yapı ve görev birimi olan hücreler gözle doğrudan görülemeyecek kadar küçüktür. Bu minik dünyayı keşfetmemizi sağlayan optik araca "MİKROSKOP" denir.',
            '1590’lı yıllarda Hollandalı gözlük üreticileri Hans Janssen ve oğlu Zacharias Janssen, iki merceği bir tüp içerisine yerleştirerek nesneleri 10 kat büyüten tarihteki ilk mikroskobu icat etmişlerdir.',
            '1665 yılında Robert Hooke (Rabırt Huk), kendi yaptığı mikroskopla şişe mantarından aldığı ince kesitleri incelemiş ve gördüğü boş odacıklara "küçük oda" anlamına gelen "CELLULA (HÜCRE)" adını vermiştir.',
            '1670’li yıllarda Antonie van Leeuwenhoek (Lövenhuk) 270 kat büyüten mikroskobuyla diş plağında ve durgun suda ilk kez canlı mikroorganizmaları gözlemlemiştir.',
            'Mikroskopta Örnek (Preparat) Hazırlama: İnce bir cam plaka olan "lam" üzerine bir damla su damlatılır. Örnek (örneğin soğan zarı) lam üzerine konur. Daha sonra küçük ince kare cam olan "lamel", aralarında hava kabarcığı kalmayacak şekilde 45 derecelik açıyla yavaşça kapatılır.'
          ],
          keyPoints: [
            'Mikroskop insan gözünün göremediği mikro alemi merceklerle büyüterek gösterir.',
            'Hans ve Zacharias Janssen: İlk mikroskobun mucitleridir.',
            'Robert Hooke: Şişe mantarındaki odacıklara ilk kez "hücre" adını vermiştir (1665).',
            'Leeuwenhoek: Canlı hücreleri ve bakterileri ilk gözlemleyen bilim insanıdır.',
            'Preparatta hava kabarcığı kalmaması gözlem netliği için şarttır.'
          ]
        },
        {
          heading: 'Hücrenin Temel Kısımları ve Hücre Duvarı',
          paragraphs: [
            'Hem bitki hem de hayvan hücrelerinde ortak olarak bulunan 3 temel kısım vardır:',
            '1. Hücre Zarı: Hücreyi dış ortamdan sararak ona şekil verir, sitoplazmanın dağılmasını önler. Canlıdır, esnektir ve SEÇİCİ GEÇİRGEN (yarı geçirgen) özelliğe sahiptir. Hücreye yararlı maddelerin girişine izin verirken zararlıların girişini engeller.',
            '2. Çekirdek: Hücrenin yönetim, denetim ve kalıtım merkezidir. Canlının tüm genetik kodlarını ve nesilden nesile aktarılan özelliklerini (göz rengi, yaprak şekli vb.) taşır.',
            '3. Sitoplazma: Hücre zarı ile çekirdek arasını dolduran yumurta akı kıvamında, yarı akışkan ve saydam sıvıdır. Yaşamsal faaliyetlerin (solunum, sindirim, boşaltım, sentez) gerçekleştiği organeller sitoplazma içinde yüzer.',
            'Hücre Duvarı (Çeperi): SADECE BİTKİ HÜCRELERİNDE bulunur; hayvan hücrelerinde kesinlikle yoktur! Hücre zarının dışını sarar, cansızdır, tam geçirgendir, serttir ve bitki hücresine köşeli, dik ve dayanıklı bir form kazandırır.'
          ],
          keyPoints: [
            '3 Temel Kısım: Hücre Zarı (seçici geçirgen/canlı), Çekirdek (yönetici), Sitoplazma (yaşamsal sıvı).',
            'Hücre Duvarı: Yalnızca bitkide bulunur, cansızdır, serttir ve köşeli form verir.'
          ]
        },
        {
          heading: 'Organeller ve Görevleri (Hücre İçi Fabrika Benzetmesi)',
          paragraphs: [
            'Sitoplazmada bulunan organeller bir fabrikadaki farklı üretim ve kontrol departmanları gibidir:',
            '• Mitokondri (Enerji Santrali): Besinleri oksijenle parçalayarak hücrenin ihtiyacı olan enerjiyi (ATP) üretir.',
            '• Kloroplast (Besin Fabrikası): Sadece bitki hücrelerinin yeşil kısımlarında bulunur. Güneş ışığını kullanarak fotosentez yapar, besin ve oksijen üretir.',
            '• Ribozom (Protein Üretim Bandı): Tüm hücrelerde ortak bulunur. Hücrenin büyüme ve onarımı için gerekli olan proteinleri sentezler.',
            '• Endoplazmik Retikulum (Taşıma Kanalı/Otoyol): Hücre içi madde iletimini ve taşınmasını sağlayan boru ve kanallar ağıdır.',
            '• Golgi Cisimciği (Paketleme & Salgı): Ter, tükürük, süt gibi salgıları üretir ve bunları paketler.',
            '• Koful (Depo Deposu): Su, besin ve atık maddeleri depolar. BİTKİDE BÜYÜK VE AZ SAYIDA, HAYVANDA KÜÇÜK VE ÇOK SAYIDADIR.',
            '• Sentrozom (Bölünme Şantiye Ekibi): Sadece hayvan hücrelerinde bulunur, hücre bölünmesinde görev alır.',
            '• Lizozom (Geri Dönüşüm/Sindirim): Hücre içi sindirimde ve yaşlanmış yapıların parçalanmasında görev alır.'
          ],
          table: {
            headers: ['Özellik / Organel', 'Bitki Hücresi', 'Hayvan Hücresi'],
            rows: [
              ['Şekil', 'Genellikle KÖŞELİ', 'Genellikle YUVARLAK / OVAL'],
              ['Hücre Duvarı', 'VAR (Sert, cansız)', 'YOK'],
              ['Kloroplast', 'VAR (Yeşil kısımlarda)', 'YOK'],
              ['Sentrozom', 'YOK (Gelişmiş bitkilerde)', 'VAR (Bölünmede rol alır)'],
              ['Koful Yapısı', 'Büyük ve AZ sayıda', 'Küçük ve ÇOK sayıda'],
              ['Hücre Zarı, Sitoplazma, Çekirdek', 'VAR', 'VAR'],
              ['Mitokondri, Ribozom, Golgi, ER', 'VAR', 'VAR']
            ]
          }
        },
        {
          heading: 'Hücreden Organizmaya Hiyerarşik Düzen',
          paragraphs: [
            'Çok hücreli canlılarda trilyonlarca hücre başıboş çalışmaz; muazzam bir iş bölümü ve teşkilatlanma vardır. Bu hiyerarşi basitten karmaşığa doğru şu şekildedir:',
            'HÜCRE ---> DOKU ---> ORGAN ---> SİSTEM ---> ORGANİZMA',
            '• Hücre: Canlının en küçük temel yapı taşıdır (Örn: Kas hücresi).',
            '• Doku: Aynı görevi yapmak üzere bir araya gelen benzer hücreler topluluğudur (Örn: Kas dokusu).',
            '• Organ: Belirli bir görevi yerine getirmek için dokuların birleşmesiyle oluşur (Örn: Kalp, Kol, Mide).',
            '• Sistem: Birlikte çalışan organlar topluluğudur (Örn: Dolaşım sistemi, Destek ve hareket sistemi).',
            '• Organizma: Tüm sistemlerin kusursuz uyum içinde çalıştığı canlı varlıktır (Örn: İnsan, Ağaç, Kuş).',
            'Benzetme: Tuğla (Hücre) -> Duvar (Doku) -> Oda (Organ) -> Ev (Sistem) -> Şehir/Köy (Organizma)'
          ],
          scientistBox: {
            name: 'Akşemseddin & Louis Pasteur',
            role: 'Tıp ve Mikrobiyoloji Öncüleri',
            contribution: 'Fatih Sultan Mehmet’in hocası Akşemseddin, mikroskobun henüz bilinmediği 15. yüzyılda "Hastalıkların insanlarda gözle görülmeyecek kadar küçük canlı tohumlar (mikroplar) vasıtasıyla bulaştığını" yazarak mikrobiyolojinin öncüsü olmuştur. Louis Pasteur ise 19. yüzyılda mikroorganizmaların hastalıklara yol açtığını deneylerle kanıtlamış ve kuduz aşısını geliştirmiştir.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Tarihte şişe mantarındaki küçük boş odacıklara ilk kez "hücre (cellula)" adını veren kişi Robert Hooke’tur.',
          isCorrect: true,
          explanation: '1665 yılında Robert Hooke mantar kesitini inceleyerek hücre terimini literatüre kazandırmıştır.'
        },
        {
          id: 2,
          statement: 'Hücre zarı cansız, sert ve tam geçirgen bir yapıya sahiptir.',
          isCorrect: false,
          explanation: 'Hücre zarı canlı, esnek ve seçici geçirgendir; cansız ve sert olan hücre duvarıdır.'
        },
        {
          id: 3,
          statement: 'Hücre duvarı (çeperi) hem bitki hem de hayvan hücrelerinde ortak olarak bulunur.',
          isCorrect: false,
          explanation: 'Hücre duvarı sadece bitki hücrelerinde bulunur, hayvan hücrelerinde kesinlikle yoktur.'
        },
        {
          id: 4,
          statement: 'Mitokondri, hücrenin ihtiyaç duyduğu enerjiyi üreten organeldir.',
          isCorrect: true,
          explanation: 'Mitokondri hücresel solunumla besinlerden enerji (ATP) üreten enerji santralidir.'
        },
        {
          id: 5,
          statement: 'Bitki hücrelerinde kofullar büyük ve az sayıda iken, hayvan hücrelerinde küçük ve çok sayıdadır.',
          isCorrect: true,
          explanation: 'Ders kitabında açıkça belirtildiği gibi kofullar bitkide büyük-az, hayvanda küçük-çok sayıdadır.'
        },
        {
          id: 6,
          statement: 'Kloroplast organeli hayvan hücrelerinde besin ve oksijen üretir.',
          isCorrect: false,
          explanation: 'Kloroplast sadece yeşil bitki hücrelerinde fotosentez yapar, hayvanlarda bulunmaz.'
        },
        {
          id: 7,
          statement: 'Canlıların basitten karmaşığa organizasyon sıralaması: Hücre -> Doku -> Organ -> Sistem -> Organizma şeklindedir.',
          isCorrect: true,
          explanation: 'Hiyerarşik sıralama kusursuz biçimde hücreden organizmaya doğru ilerler.'
        },
        {
          id: 8,
          statement: 'Çekirdek, hücrenin tüm yaşamsal faaliyetlerini yöneten ve kalıtım maddesini taşıyan merkezdir.',
          isCorrect: true,
          explanation: 'Çekirdek hücrenin beyni gibidir; genetik özellikleri nesilden nesile aktarır.'
        },
        {
          id: 9,
          statement: 'Sentrozom organeli bitki hücrelerinin bölünmesinde görev alır.',
          isCorrect: false,
          explanation: 'Sentrozom hayvan hücrelerinde bölünmeden sorumludur, gelişmiş bitki hücrelerinde bulunmaz.'
        },
        {
          id: 10,
          statement: 'Akşemseddin mikroskop keşfedilmeden asırlar önce hastalıkların gözle görülmeyen mikroplarla bulaştığını yazmıştır.',
          isCorrect: true,
          explanation: 'Ders kitabının 139. sayfasındaki Çağını Aşanlar bölümünde Akşemseddin’in mikrop teorisi anlatılmaktadır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Bir öğrenci mikroskop altında incelediği bilinmeyen bir X hücresinde şu yapıları tespit etmiştir:\n• Kalın ve sert bir hücre duvarı\n• Yeşil renkli kloroplast organelleri\n• Ortada yer alan devasa tek bir koful\n• Köşeli geometrik hücre şekli',
          questionPrompt: 'Öğrencinin incelediği bu X hücresi aşağıdaki canlı dokularının hangisinden alınmış olabilir?',
          options: [
            { key: 'A', text: 'İnsan ağız içi epitel dokusu' },
            { key: 'B', text: 'Ispanak yaprağının yeşil parankima dokusu' },
            { key: 'C', text: 'Koyunun çizgili kas dokusu' },
            { key: 'D', text: 'Kurbağanın kalp kası dokusu' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Hücre duvarı, kloroplast, büyük koful ve köşeli şekil yalnızca BİTKİ hücrelerine özgüdür. Seçeneklerdeki tek bitki örneği ıspanak yaprağıdır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 2,
          context: 'Laboratuvarda iki farklı mikroskopta incelenen K ve L hücrelerinin organel içerikleri tabloda verilmiştir:',
          visualData: {
            type: 'table',
            title: 'K ve L Hücreleri Organel Varlığı',
            tableHeaders: ['Yapı / Organel', 'K Hücresi', 'L Hücresi'],
            tableRows: [
              ['Hücre Zarı', 'Var', 'Var'],
              ['Çekirdek', 'Var', 'Var'],
              ['Mitokondri', 'Var', 'Var'],
              ['Sentrozom', 'Var', 'Yok'],
              ['Hücre Duvarı', 'Yok', 'Var'],
              ['Kloroplast', 'Yok', 'Var']
            ]
          },
          questionPrompt: 'Bu tabloya göre K ve L hücreleri ile ilgili aşağıdaki iddialardan hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'K hücresi fotosentez yaparak oksijen üretebilir.' },
            { key: 'B', text: 'L hücresi köşeli şekle sahip bir bitki hücresidir.' },
            { key: 'C', text: 'K hücresi bitki, L hücresi hayvan hücresidir.' },
            { key: 'D', text: 'L hücresinde enerji üretimi gerçekleşmez.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'L hücresinde hücre duvarı ve kloroplast vardır; sentrozom yoktur. Bu özellikler L’nin bitki hücresi olduğunu ve köşeli yapıya sahip olduğunu kesin olarak kanıtlar.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 3,
          context: 'Fen bilgisi öğretmeni tahtaya şu analojiyi (benzetmeyi) yazmıştır:\n"Bir okulu canlı bir organizmaya benzetirsek;\n• Tek bir öğrenci veya bir tuğla = Hücre\n• Bir sınıf veya bir duvar = Doku\n• Bir kat veya bir kütüphane odası = Organ\n• Okulun idari binası veya tüm sınıflar = Sistem\n• Okulun tamamı = Organizma"',
          questionPrompt: 'Bu benzetmeye göre insan vücudundaki "Mide", "Mide Düz Kası" ve "Sindirim Sistemi" sırasıyla hangi okul birimlerine karşılık gelir?',
          options: [
            { key: 'A', text: 'Mide: Organ (Oda) | Mide Düz Kası: Doku (Duvar) | Sindirim Sistemi: Sistem (Kat/Bölüm)' },
            { key: 'B', text: 'Mide: Doku | Mide Düz Kası: Organ | Sindirim Sistemi: Hücre' },
            { key: 'C', text: 'Mide: Sistem | Mide Düz Kası: Hücre | Sindirim Sistemi: Organizma' },
            { key: 'D', text: 'Mide: Hücre | Mide Düz Kası: Doku | Sindirim Sistemi: Organ' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Mide düz kası dokudur (duvar), mide bir organdır (oda), sindirim sistemi ise organların oluşturduğu sistemdir (kat). Sıralama A seçeneğinde doğrudur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 4,
          context: 'Hücre zarının özellikleri incelenirken şu deney yapılmıştır: İçine yoğun nişasta ve iyot konulmuş yarı geçirgen bir bağırsak zarı saf su dolu kaba bırakılmıştır. Bir süre sonra küçük iyot moleküllerinin zardan geçtiği fakat devasa nişasta moleküllerinin zardan geçemediği görülmüştür.',
          questionPrompt: 'Bu deney hücre zarının hangi temel özelliğini somutlaştırmaktadır?',
          options: [
            { key: 'A', text: 'Hücre zarının tam geçirgen olduğunu' },
            { key: 'B', text: 'Hücre zarının seçici geçirgen olduğunu, küçük molekülleri geçirirken büyükleri geçirmediğini' },
            { key: 'C', text: 'Hücre zarının cansız olduğunu' },
            { key: 'D', text: 'Hücre zarının hücre duvarından sert olduğunu' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Hücre zarı seçici geçirgendir; her maddenin geçişine izin vermez, molekül büyüklüğü ve hücre ihtiyacına göre filtreleme yapar.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 5,
          context: 'Spor yapan bir atletin bacak kas hücrelerinde yoğun enerji ihtiyacı doğar. Bu atletin bacak kas hücreleri incelendiğinde diğer hareketsiz hücrelere kıyasla bir organelin sayısının katbekat fazla olduğu belirlenmiştir.',
          questionPrompt: 'Kas hücrelerinde sayısı artan bu enerji üreten organel aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ribozom' },
            { key: 'B', text: 'Mitokondri' },
            { key: 'C', text: 'Koful' },
            { key: 'D', text: 'Golgi aygıtı' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Mitokondri hücrenin enerji santralidir. Kas, karaciğer ve kalp gibi çok enerji tüketen hücrelerde mitokondri sayısı son derece yüksektir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 6,
          context: 'Bir öğrenci soğan zarı preparatı hazırlarken lam üzerine su damlatmış, soğan zarını koymuş fakat lameli dik bir şekilde aniden bırakmıştır. Mikroskopta baktığında hücrelerin üzerinde siyah halkalı yuvarlak lekeler görmüş ve hücreleri net seçememiştir.',
          questionPrompt: 'Öğrencinin gözlemini bozan bu siyah halkaların nedeni nedir ve nasıl düzeltilmelidir?',
          options: [
            { key: 'A', text: 'Lameli aniden bıraktığı için araya hava kabarcığı sıkışmıştır; lamel 45 derece eğik tutularak yavaşça kapatılmalıdır.' },
            { key: 'B', text: 'Soğan hücresinde çekirdek patlamıştır.' },
            { key: 'C', text: 'Mikroskobun ışığı kapatılmalıdır.' },
            { key: 'D', text: 'Soğan zarı yerine hayvan hücresi konmalıdır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 100 ve 101. sayfalarında preparat hazırlanırken hava kabarcığı oluşmaması için lamelin yavaşça kapatılması gerektiği vurgulanmaktadır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 7,
          context: 'Tükürük bezi, ter bezi ve süt bezi gibi salgı üreten dokulardaki hücreler incelendiğinde salgı maddelerini üreten ve paketleyen bir organelin çok gelişmiş olduğu saptanmıştır.',
          questionPrompt: 'Salgı üretim ve paketlemesinden sorumlu bu organel hangisidir?',
          options: [
            { key: 'A', text: 'Lizozom' },
            { key: 'B', text: 'Golgi Cisimciği (Aygıtı)' },
            { key: 'C', text: 'Kloroplast' },
            { key: 'D', text: 'Sentrozom' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 104. sayfasında Golgi cisimciğinin görevi "Salgı maddelerinin üretimi ve paketlenmesi" olarak tanımlanmıştır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 8,
          context: 'Bir kaza sonucu yaralanan çocuğun dizindeki deri hücreleri hızla bölünerek yarayı kapatmış ve yeni doku oluşturmuştur.',
          questionPrompt: 'Bu yara onarımı sürecinde hücrede yeni yapı maddeleri olan proteinlerin sentezlenmesini sağlayan organel hangisidir?',
          options: [
            { key: 'A', text: 'Ribozom' },
            { key: 'B', text: 'Koful' },
            { key: 'C', text: 'Hücre Duvarı' },
            { key: 'D', text: 'Kloroplast' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ribozom tüm hücrelerde protein sentezini gerçekleştirir; doku onarımı ve büyüme protein senteziyle yürütülür.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 9,
          context: 'Bitkiler sonbaharda yapraklarını dökerken hücrelerindeki zararlı atık maddeleri kofulda biriktirip yaprak dökümüyle vücuttan uzaklaştırırlar.',
          questionPrompt: 'Bu durum koful organelinin hangi temel fonksiyonunu gösterir?',
          options: [
            { key: 'A', text: 'Atık maddeleri depolama ve boşaltıma yardımcı olma' },
            { key: 'B', text: 'Güneş ışığını soğurma' },
            { key: 'C', text: 'Hücreyi yönetme' },
            { key: 'D', text: 'Hücre bölünmesini başlatma' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Koful su, besin ve metabolik atık maddeleri depolar. Bitkiler atıkları kofullarında toplayıp yaprak dökümüyle dışarı atarlar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 10,
          context: 'Robert Hooke 1665 yılında mikroskopta mantar dokusunu incelerken canlı sitoplazma ve çekirdek görmemiş, sadece sert çerçevelerden oluşan boş odacıklar görmüştür.',
          questionPrompt: 'Robert Hooke’un sadece boş çerçeveler görmesinin biyolojik sebebi nedir?',
          options: [
            { key: 'A', text: 'Şişe mantarının ölü bir bitki dokusu olması ve geriye sadece cansız hücre duvarlarının (çeperlerinin) kalmış olması' },
            { key: 'B', text: 'Mantarın hayvan hücresi olması' },
            { key: 'C', text: 'Mikroskobun ters tutulması' },
            { key: 'D', text: 'Hücrelerin ışık hızında kaçması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Şişe mantarı meşe ağacının ölü kabuk dokusudur. Canlı kısımlar (sitoplazma, çekirdek) ölmüş, geriye sadece dayanıklı ve cansız selüloz hücre duvarları kalmıştır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 11,
          context: 'Hücre içinde üretilen zehirli bir atık madde veya yaşlanıp işlevini yitirmiş bir mitokondri parçalanmak üzere bir organelin içine alınır ve orada sindirilir.',
          questionPrompt: 'Hücre içi sindirim ve parçalamayı üstlenen bu organel hangisidir?',
          options: [
            { key: 'A', text: 'Lizozom' },
            { key: 'B', text: 'Ribozom' },
            { key: 'C', text: 'Endoplazmik retikulum' },
            { key: 'D', text: 'Kloroplast' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 104. sayfasında lizozomun görevi "Hücre içi sindirim" olarak belirtilmiştir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Aşağıda bir insanın vücut hiyerarşisine ait yapılar karışık olarak verilmiştir:\nI. Dolaşım Sistemi\nII. Kırmızı Alyuvar Hücresi\nIII. İnsan (Birey)\nIV. Kalp\nV. Kan Dokusu',
          questionPrompt: 'Bu yapıların basitten karmaşığa (en küçükten en büyüğe) doğru doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: 'II -> V -> IV -> I -> III' },
            { key: 'B', text: 'II -> IV -> V -> I -> III' },
            { key: 'C', text: 'V -> II -> IV -> I -> III' },
            { key: 'D', text: 'III -> I -> IV -> V -> II' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Hücre (II: Alyuvar) -> Doku (V: Kan dokusu) -> Organ (IV: Kalp) -> Sistem (I: Dolaşım sistemi) -> Organizma (III: İnsan). Doğru sıra A’dır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 13,
          context: 'Bitki hücrelerinin turgor basıncına (iç su basıncına) dayanarak patlamamasını sağlayan, bitkinin dik ve diri durmasına destek olan yapı hangisidir?',
          questionPrompt: 'Bu koruyucu kalkan aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Hücre Duvarı (Çeperi)' },
            { key: 'B', text: 'Sentrozom' },
            { key: 'C', text: 'Lizozom' },
            { key: 'D', text: 'Ribozom' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Hücre duvarı bitki hücresini dıştan sararak aşırı su aldığında patlamasını önler ve sertlik kazandırır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 14,
          context: 'Laboratuvar deneyinde bir öğretmen ağız içi epitel hücresini ve soğan zarı hücresini aynı mikroskopta öğrencilerine göstermiştir. Öğrenciler soğan zarının tuğla gibi muntazam köşeli dizildiğini, epitel hücrelerinin ise yuvarlak hatlı ve dağınık durduğunu fark etmiştir.',
          questionPrompt: 'Soğan zarı hücrelerinin bu muntazam köşeli yapısının temel sebebi nedir?',
          options: [
            { key: 'A', text: 'Hücre zarının dışında sert ve dayanıklı bir hücre duvarının bulunması' },
            { key: 'B', text: 'Epitel hücrelerinde çekirdek olmaması' },
            { key: 'C', text: 'Soğanın fotosentez yapamaması' },
            { key: 'D', text: 'Ağız içi hücresinde sitoplazmanın katı olması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Bitki hücrelerine köşeli ve muntazam geometrik yapıyı kazandıran temel unsur hücre duvarıdır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 15,
          context: 'Hücre çekirdeği çıkarılan bir amip hücresinin bir süre sonra beslenemediği, bölünemediği ve öldüğü gözlemlenmiştir.',
          questionPrompt: 'Bu deney çekirdek ile ilgili aşağıdaki yargılardan hangisini doğrudan kanıtlar?',
          options: [
            { key: 'A', text: 'Çekirdeğin hücrenin yönetim ve yaşam merkezi olduğunu' },
            { key: 'B', text: 'Çekirdeğin sadece enerji ürettiğini' },
            { key: 'C', text: 'Hücrenin çekirdeksiz daha hızlı çoğaldığını' },
            { key: 'D', text: 'Çekirdeğin hücre duvarını oluşturduğunu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Çekirdek hücrenin yönetim merkezidir; çıkarıldığında hücresel denetim durur ve hücre ölür.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 16,
          context: 'Louis Pasteur, et suyu dolu kuğu boyunlu cam kaplarla yaptığı ünlü deneyinde mikroorganizmaların kendiliğinden cansız maddelerden türemediğini, havadaki tozlarla taşınan canlı mikrop tohumlarından çoğaldığını ispatlamıştır.',
          questionPrompt: 'Pasteur’ün bu keşfi tıp ve hijyen dünyasında hangi devrimi başlatmıştır?',
          options: [
            { key: 'A', text: 'Sterilizasyon, aşı geliştirme ve ameliyatlarda hijyen kurallarının zorunlu hale gelmesini' },
            { key: 'B', text: 'Mikroskopların yasaklanmasını' },
            { key: 'C', text: 'Bütün bitki hücrelerinin yok edilmesini' },
            { key: 'D', text: 'Hücre teorisinin çürütülmesini' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 139. sayfasında Pasteur’ün bakteriler ve mikroplar üzerine çalışmalarının tıpta devrim yarattığı anlatılmaktadır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 17,
          context: 'Hücrede üretilen maddelerin çekirdek ile hücre zarı arasında veya organeller arasında iletilmesini sağlayan borucuklar ağı hangisidir?',
          questionPrompt: 'Bu iletim kanalı organeli aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Endoplazmik Retikulum' },
            { key: 'B', text: 'Kloroplast' },
            { key: 'C', text: 'Sentrozom' },
            { key: 'D', text: 'Lizozom' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Endoplazmik retikulum hücre içi madde iletiminde görevli organeldir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 18,
          context: 'Bir kedi yavrusunun gözlerinin annesi gibi mavi renkli olması veya bir maydanozun yapraklarının kıvrımlı olması canlının hangi hücresel yapısındaki bilgilerle kontrol edilir?',
          questionPrompt: 'Bu kalıtsal özellikler nerede saklanır?',
          options: [
            { key: 'A', text: 'Çekirdekteki kalıtım maddesinde (DNA/Gen)' },
            { key: 'B', text: 'Hücre zarının dış yüzeyinde' },
            { key: 'C', text: 'Kofulun içindeki suda' },
            { key: 'D', text: 'Mitokondrinin yakıtında' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 109. sayfasında çekirdeğin görevi anlatılırken kedi göz rengi ve maydanoz yaprak şeklinin çekirdekteki genetik yapılarla nesilden nesile aktarıldığı belirtilir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 19,
          context: 'Bir mikroskopta görüntüyü kabaca netleştirmek için kaba ayar vidası, çok ince detayları odaklamak için ise ince ayar vidası kullanılır.',
          questionPrompt: 'Örnek incelenirken büyütme oranı daha büyük olan objektife geçildiğinde görüntünün odaklanması için hangi ayar tercih edilmelidir?',
          options: [
            { key: 'A', text: 'İnce ayar vidası nazikçe çevrilerek odaklama netleştirilmelidir.' },
            { key: 'B', text: 'Işık kapatılmalıdır.' },
            { key: 'C', text: 'Lamel çıkarılıp atılmalıdır.' },
            { key: 'D', text: 'Kaba ayar vidası hızla sonuna kadar indirilmelidir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 100. sayfasında büyük büyütmeli objektife geçildiğinde preparatın kırılmaması ve hassas netleme için ince ayar vidasının kullanılması gerektiği belirtilir.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 20,
          context: 'Tek hücreli canlılar (amip, öglena, paramesyum) sadece tek bir hücreden ibaretken, çok hücreli canlılar (insan, meşe ağacı, kedi) trilyonlarca hücrenin organize olmasıyla oluşur.',
          questionPrompt: 'Çok hücreli bir canlıda hücrelerin dokulara, dokuların organlara dönüşmesinin sağladığı en büyük evrimsel avantaj nedir?',
          options: [
            { key: 'A', text: 'Hücreler arasında iş bölümü ve uzmanlaşma sağlanarak canlının karmaşık yaşamsal faaliyetleri verimli şekilde sürdürebilmesi' },
            { key: 'B', text: 'Canlının sadece geceleri yaşaması' },
            { key: 'C', text: 'Hücrelerin kütlesini sıfırlamak' },
            { key: 'D', text: 'Organların çalışmasını engellemek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Hiyerarşik düzen ve uzmanlaşma (kasın kasılması, kalbin kan pompalaması vb.) canlının hayatta kalma ve verimlilik kapasitesini en üst düzeye çıkarır.',
          skillTag: 'Bilimsel Çıkarım'
        }
      ]
    },
    {
      id: 'unit3-sub2',
      title: 'Destek ve Hareket Sistemi & Sağlığı',
      shortTitle: '3.2 Destek & Hareket Sistemi',
      badge: 'Sayfa 118-143',
      pageRange: '118 - 143',
      concepts: ['İskelet', 'Kemik çeşitleri (Uzun, Kısa, Yassı)', 'Kıkırdak', 'Eklem çeşitleri (Oynar, Yarı Oynar, Oynamaz)', 'Kas çeşitleri (Çizgili, Düz, Kalp)', 'Duruş bozuklukları', 'Kalsiyum & D vitamini', 'Röntgen', 'İbni Sina'],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'İskelet Sisteminin Görevleri ve Kemik Çeşitleri',
          paragraphs: [
            'Destek ve hareket sistemi; vücudun dik durmasını sağlayan, iç organları dış darbelerden koruyan, kaslarla birlikte hareketi gerçekleştiren ve vücuda şekil veren muazzam bir sistemdir. Bu sistem İSKELET ve KASLARDAN oluşur.',
            'İskelet; kemik, kıkırdak ve eklemlerden meydana gelir. Kemiklerin görevleri: 1) Vücuda şekil verir ve dik durmasını sağlar. 2) Beyin, kalp, akciğer gibi hayati organları korur. 3) Kalsiyum, fosfor gibi mineralleri depolar. 4) Kırmızı kemik iliğinde kan hücrelerini üretir.',
            'Sağlıklı yeni doğan bir bebekte yaklaşık 300 kemik bulunurken, büyüme sürecinde kemiklerin birbiriyle kaynaşması sonucu yetişkin bir insanda kemik sayısı 206’ya düşer.',
            'Kemikler şekillerine göre 3 gruba ayrılır:',
            '1. Uzun Kemikler: Boyu eninden belirgin şekilde fazla olan silindirik kemiklerdir. Uyluk (vücudun en uzun kemiği), kaval, baldır, pazu, ön kol, dirsek ve el-ayak parmak kemikleri uzun kemiklerdir.',
            '2. Kısa Kemikler: Boyu, eni ve kalınlığı birbirine neredeyse eşit olan küpümsü kemiklerdir. El bilek kemikleri ve ayak bilek kemikleri kısa kemiklerdir.',
            '3. Yassı Kemikler: Levha şeklinde, geniş yüzeyli ve ince kemiklerdir. Kafatası kemikleri, kaburga kemikleri, kürek kemikleri ve leğen kemikleri yassı kemiklerdir.'
          ],
          keyPoints: [
            'İskelet = Kemik + Kıkırdak + Eklem.',
            'Yetişkin insanda 206 kemik bulunur (bebekte ~300 kemik zamanla kaynaşır).',
            'En uzun kemik: Uyluk kemiğidir.',
            'Uzun: Uyluk, baldır, kaval, pazu, parmak kemikleri.',
            'Kısa: El ve ayak bilek kemikleri.',
            'Yassı: Kafatası, kaburga, göğüs kafesi, kürek ve leğen kemikleri.'
          ],
          table: {
            headers: ['Kemik Çeşidi', 'Tanımı & Geometrisi', 'Vücuttaki Örnekleri'],
            rows: [
              ['Uzun Kemikler', 'Boyu eninden fazladır', 'Uyluk, kaval, baldır, pazu, ön kol, parmaklar'],
              ['Kısa Kemikler', 'Eni ve boyu birbirine yakındır', 'El bilek kemikleri, ayak bilek kemikleri'],
              ['Yassı Kemikler', 'Levha şeklinde geniş yüzeylidir', 'Kafatası, kaburga, leğen, kürek kemiği']
            ]
          }
        },
        {
          heading: 'Kıkırdak ve Eklem Çeşitleri',
          paragraphs: [
            'Kıkırdak: Kemik dokuya göre daha yumuşak, elastik ve esnek bir yapıya sahiptir. Görevleri: Uzun kemiklerin uç kısımlarında bulunarak eklem bölgesinde kemiklerin birbirine sürtünüp aşınmasını engeller; kayganlık sağlar. Ayrıca burun ucu, kulak kepçesi ve soluk borusunda bulunarak buralara şekil ve esneklik kazandırır.',
            'Eklemler: İki ya da daha fazla kemiğin birbirine bağlandığı bölgelere "EKLEM" denir. Hareket kabiliyetlerine göre 3 sınıfa ayrılır:',
            '1. Oynar Eklemler: Birbirine bağladıkları kemiklerin her yöne veya geniş açıyla kolayca hareket etmesini sağlar. Kol (omuz, dirsek) ve bacak (kalça, diz, bilek) eklemleri oynar eklemlerdir.',
            '2. Yarı Oynar Eklemler: Hareket yeteneği sınırlı olan eklemlerdir. Omurgayı oluşturan omur kemikleri arasındaki kıkırdak diskli eklemler ile göğüs kafesi eklemleri yarı oynardır.',
            '3. Oynamaz Eklemler: Birbirine bağladığı kemikler dişli çarklar gibi sıkıca kenetlenmiştir, hareket yeteneği kesinlikle yoktur. Kafatası kemikleri ve kuyruk sokumu kemikleri arasındaki eklemler oynamaz eklemlerdir.'
          ],
          keyPoints: [
            'Kıkırdak kemik uçlarında sürtünmeyi önler; kulak kepçesi, burun ucu ve soluk borusunda bulunur.',
            'Oynar Eklem: Kol ve bacaklarda (geniş hareket).',
            'Yarı Oynar Eklem: Omurgada (kısıtlı esneme).',
            'Oynamaz Eklem: Kafatası kemikleri arasında (hareketsiz).'
          ]
        },
        {
          heading: 'Kas Çeşitleri ve Çalışma İlkeleri',
          paragraphs: [
            'Kaslar vücudun motorlarıdır; kasılıp gevşeyerek iskeletin hareket etmesini ve iç organların çalışmasını sağlar. 3 çeşit kas bulunur:',
            '1. Çizgili Kaslar (İskelet Kasları): Kemiklerin üzerini sarar. İsteğimizle (istemli) çalışır. Hızlı kasılır fakat çabuk yorulur. Kırmızı renklidir. Kol, bacak, boyun, parmak ve yüz mimik kasları çizgili kastır.',
            '2. Düz Kaslar: İç organlarımızın (mide, ince bağırsak, kalın bağırsak, kan damarları, idrar kesesi) yapısında bulunur. İsteğimiz dışında (istemsiz) çalışır. Yavaş, ritmik ve yorulmadan sürekli çalışır. Beyazımsı renklidir.',
            '3. Kalp Kası: SADECE KALBİN YAPISINDA bulunur. Yapısı mikroskopta çizgili kasa benzer (çizgili ve kırmızıdır); ancak çalışması düz kas gibidir (istemsiz, ritmik, güçlü ve ömür boyu yorulmadan çalışır).'
          ],
          table: {
            headers: ['Kas Çeşidi', 'Bulunduğu Yer', 'Çalışma Şekli', 'Çalışma Hızı & Yorulma'],
            rows: [
              ['Çizgili Kas', 'İskeletin etrafı (Kol, bacak)', 'İstemli (Bilinçli)', 'Hızlı kasılır, çabuk yorulur'],
              ['Düz Kas', 'İç organlar (Mide, bağırsak)', 'İstemsiz (Otomatik)', 'Yavaş ve ritmik, yorulmaz'],
              ['Kalp Kası', 'Yalnızca kalp duvarı', 'İstemsiz (Otomatik)', 'Ritmik, güçlü ve asla yorulmaz']
            ]
          }
        },
        {
          heading: 'Destek ve Hareket Sisteminin Sağlığı & Maarif Boyutu',
          paragraphs: [
            'Destek ve hareket sistemimizin sağlığını korumak için:',
            '1. Duruş ve Oturuş Alışkanlıkları: Ders çalışırken, bilgisayar başında ve yürürken omurgamızı dik tutmalıyız. Kambur durmak omurga eğriliğine (skolyoz/kifoz) yol açar. Ağır bir eşyayı yerden kaldırırken beli bükerek değil, dizleri büküp çömelerek ağırlığı bacaklara vermeliyiz.',
            '2. Ekran Bağımlılığı ve Hareketsizlik: Telefon, tablet ve televizyon karşısında saatlerce hareketsiz kalmak kasların zayıflamasına, kemik yoğunluğunun azalmasına ve kronik eklem ağrılarına neden olur.',
            '3. Dengeli Beslenme: Kemiklerin sertleşmesi ve güçlenmesi için kalsiyum minerali (süt, yoğurt, peynir), D vitamini (güneş ışığı, balık) ve kas gelişimi için protein (et, yumurta, baklagil) düzenli tüketilmelidir.',
            '4. Tıbbi Teşhis: Kırık ve çıkıklarda Wilhelm Röntgen tarafından keşfedilen röntgen cihazı (X ışınları) ile kemik hasarı teşhis edilir ve kemiğin kaynaması için alçıya alınarak hareketsiz tutulur.'
          ],
          scientistBox: {
            name: 'İbni Sina & Wilhelm Röntgen',
            role: 'Tıp ve Fizik Bilim İnsanları',
            contribution: 'Büyük hekim İbni Sina, başyapıtı "El-Kânûn fî’t-Tıbb" (Tıbbın Kanunu) kitabında kemik kırıkları, eklem çıkıkları ve tedavi metotlarını detaylıca açıklamıştır. Wilhelm Röntgen ise 1895’te X ışınlarını keşfederek tıpta röntgen filmleriyle kırık kemiklerin görüntülenmesini sağlamıştır.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'İskeletimiz kemik, kıkırdak ve eklemlerden meydana gelir.',
          isCorrect: true,
          explanation: 'İskelet sistemi kemik doku, kıkırdak doku ve eklem bağlantılarının birleşimidir.'
        },
        {
          id: 2,
          statement: 'Vücudumuzdaki en uzun kemik bacakta bulunan uyluk kemiğidir.',
          isCorrect: true,
          explanation: 'Uyluk kemiği insan iskeletindeki en uzun ve en güçlü kemiktir.'
        },
        {
          id: 3,
          statement: 'El bilek ve ayak bilek kemikleri yassı kemiklere örnektir.',
          isCorrect: false,
          explanation: 'El ve ayak bilek kemikleri kısa kemiklerdir; kafatası ve kaburga ise yassı kemiktir.'
        },
        {
          id: 4,
          statement: 'Kafatası kemikleri arasında oynar eklemler yer alır.',
          isCorrect: false,
          explanation: 'Kafatası kemikleri beyni korumak için oynamaz (hareketsiz) eklemlerle kenetlenmiştir.'
        },
        {
          id: 5,
          statement: 'Kıkırdak doku, uzun kemiklerin uçlarında bulunarak kemiklerin birbirine sürtünüp aşınmasını engeller.',
          isCorrect: true,
          explanation: 'Kıkırdak pürüzsüz ve kaygan yapısıyla kemik uçlarının sürtünmesini önler.'
        },
        {
          id: 6,
          statement: 'Mide ve bağırsak gibi iç organlarımızın duvarlarında çizgili kaslar bulunur.',
          isCorrect: false,
          explanation: 'İç organlarda istemsiz ve yavaş çalışan düz kaslar bulunur.'
        },
        {
          id: 7,
          statement: 'Kalp kası yapı olarak çizgili kaslara benzerken, çalışma olarak istemsiz ve yorulmadan çalışır.',
          isCorrect: true,
          explanation: 'Kalp kası kırmızı ve çizgili yapılıdır; ancak istemsiz ve ömür boyu ritmik çalışır.'
        },
        {
          id: 8,
          statement: 'Yerden ağır bir cisim kaldırırken dizleri bükmeden sadece beli eğmek omurga sağlığı için en doğru yöntemdir.',
          isCorrect: false,
          explanation: 'Dizler bükülerek çömelmeli ve yük bacak kaslarına verilmelidir; beli eğmek fıtığa ve incinmeye yol açar.'
        },
        {
          id: 9,
          statement: 'Kemik sağlığının korunması için kalsiyum ve D vitamini açısından zengin beslenmek hayati önem taşır.',
          isCorrect: true,
          explanation: 'Kalsiyum kemik sertliğini sağlarken D vitamini kalsiyumun emilmesini sağlar.'
        },
        {
          id: 10,
          statement: 'İbni Sina "El-Kanun Fi’t-Tıbb" adlı tıp eserinde kemik kırık ve çıkıklarının tedavisini incelemiştir.',
          isCorrect: true,
          explanation: 'Ders kitabının 128. sayfasında İbni Sina’nın bu eseri ve kırık-çıkık tedavisi vurgulanmaktadır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Merih, bilgisayar oyunlarına olan aşırı düşkünlüğü yüzünden gün boyu koltukta kambur ve hareketsiz oturmaktadır. Birkaç ay sonra boynunda, sırtında ve belinde şiddetli ağrılar oluşmuş, doktora gitmek zorunda kalmıştır.',
          questionPrompt: 'Merih’in destek ve hareket sistemi sağlığını yeniden kazanabilmesi için hekimin vereceği EN UYGUN tavsiye aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ekran başında geçirdiği süreyi sınırlandırmalı, dik oturma alışkanlığı kazanmalı ve yaş grubuna uygun düzenli egzersizler yapmalıdır.' },
            { key: 'B', text: 'Yalnızca daha yumuşak bir oyun koltuğu alıp günde 14 saat oyun oynamaya devam etmelidir.' },
            { key: 'C', text: 'Hiç hareket etmeden sürekli yatakta yatmalıdır.' },
            { key: 'D', text: 'Sadece şekerli ve gazlı içecekler tüketmelidir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 129. sayfasında Merih’in durumundan yola çıkılarak hareketsizlik ve kötü duruşun olumsuz etkileri anlatılmıştır. Çözüm: Ekran sınırlaması, dik duruş ve düzenli fiziksel aktivitedir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 2,
          context: 'Aşağıdaki tabloda insan vücudundaki bazı kemikler ve kemik çeşitleri verilmiştir:',
          visualData: {
            type: 'table',
            title: 'Kemik Eşleştirme Tablosu',
            tableHeaders: ['Kemik Adı', 'Kemik Çeşidi', 'Özellik'],
            tableRows: [
              ['Uyluk Kemiği', 'Uzun Kemik', 'Vücudun en uzun kemiğidir'],
              ['El Bilek Kemikleri', 'Kısa Kemik', 'Eni ve boyu birbirine yakındır'],
              ['Kafatası Kemiği', 'Yassı Kemik', 'Beyni koruyan levha kemiktir'],
              ['Kaburga Kemiği', 'X', 'İç organları korur']
            ]
          },
          questionPrompt: 'Tabloda "X" ile gösterilen yere aşağıdakilerden hangisi yazılmalıdır?',
          options: [
            { key: 'A', text: 'Yassı Kemik' },
            { key: 'B', text: 'Uzun Kemik' },
            { key: 'C', text: 'Kısa Kemik' },
            { key: 'D', text: 'Oynar Eklem' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 122 ve 124. sayfalarında kaburga kemikleri, kafatası ve leğen kemiği gibi levha şeklindeki geniş yüzeyli "Yassı Kemikler" grubunda yer alır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 3,
          context: 'Bir öğrenci sınıfta bir kukla tasarlamış, kuklanın kollarını ve bacaklarını gövdeye kalın iplerle ve raptiyelerle bağlamıştır. İpleri gevşek bıraktığında kolların her yöne rahatça sallanabildiğini görmüştür.',
          questionPrompt: 'Kuklanın kol ve bacaklarındaki bu hareketli bağlantı noktaları insan iskeletindeki hangi yapıyı modeller?',
          options: [
            { key: 'A', text: 'Oynamaz eklemleri' },
            { key: 'B', text: 'Oynar eklemleri' },
            { key: 'C', text: 'Düz kasları' },
            { key: 'D', text: 'Hücre çekirdeğini' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 126 ve 128. sayfalarındaki kukla etkinliğinde açıklandığı gibi kol ve bacakları bağlayan ve serbest harekete izin veren yapılar oynar eklemlerdir.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 4,
          context: 'Ders kitabında kapı menteşesi ile iskelet sistemi arasında bir benzerlik kurulmuştur: "Kapı menteşesi iki tahta parçayı birbirine bağlayarak kapının açılıp kapanmasını sağlar."',
          questionPrompt: 'Kapı menteşesi insan vücudunda hangi yapının çalışma mekanizmasına doğrudan karşılık gelir?',
          options: [
            { key: 'A', text: 'Eklem' },
            { key: 'B', text: 'Düz Kas' },
            { key: 'C', text: 'Kırmızı kan hücresi' },
            { key: 'D', text: 'Kemik iliği' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 124 ve 125. sayfalarında kapı menteşesinin iki parçayı birleştiren işlevi, kemikleri birbirine bağlayan "eklem" kavramıyla analoji kurularak açıklanmıştır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 5,
          context: 'Üç farklı kas türünün mikroskop altındaki görüntüleri ve çalışma özellikleri incelenmiştir:\n• 1. Kas: İsteğimizle çalışır, mikroskopta enine çizgili görünür, çabuk yorulur.\n• 2. Kas: İsteğimiz dışında çalışır, beyazımsı mekik liflidir, yorulmaz.\n• 3. Kas: Çizgili görünümdedir ama ömür boyu istemsiz ve ritmik çalışır.',
          questionPrompt: 'Bu kas türleri sırasıyla hangi seçenekte doğru adlandırılmıştır?',
          options: [
            { key: 'A', text: '1: Çizgili Kas, 2: Düz Kas, 3: Kalp Kası' },
            { key: 'B', text: '1: Düz Kas, 2: Çizgili Kas, 3: Kalp Kası' },
            { key: 'C', text: '1: Kalp Kası, 2: Düz Kas, 3: Çizgili Kas' },
            { key: 'D', text: '1: Çizgili Kas, 2: Kalp Kası, 3: Düz Kas' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'İstemli çizgili kas kol-bacakta (1), istemsiz yavaş düz kas iç organda (2), çizgili yapılı ama istemsiz çalışan kas ise kalptedir (3).',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 6,
          context: 'Bebeklerin iskeletinde yaklaşık 300 kemik bulunurken, yetişkin bir bireyin iskeletinde 206 kemik sayılmaktadır.',
          questionPrompt: 'Kemik sayısındaki bu azalmanın bilimsel nedeni aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Büyüme sürecinde bazı kıkırdak dokuların sertleşmesi ve bitişik kemiklerin birbiriyle kaynaşarak tek bir kemiğe dönüşmesi' },
            { key: 'B', text: 'Kemiklerin eriyerek kana karışması' },
            { key: 'C', text: 'Yetişkinlikte kasların kemikleri yok etmesi' },
            { key: 'D', text: 'Bebeklerin kemiklerinin düşüp kaybolması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 120. sayfasındaki Bilgi İstasyonu’na göre bebeklikteki yaklaşık 300 kemik, büyüme çağında birbirine kaynayıp bütünleşerek yetişkinde 206 kemiğe iner.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 7,
          context: 'Yaşlı bir teyze merdivenden düşmüş ve bacağında şiddetli acı hissetmiştir. Hastaneye götürüldüğünde doktor bacağın röntgen filmini çekmiş ve kaval kemiğinde çatlak olduğunu belirleyerek bacağını alçıya almıştır.',
          questionPrompt: 'Kırık veya çatlak kemiğin alçıya alınmasının temel tıbbi amacı nedir?',
          options: [
            { key: 'A', text: 'Kırılan kemik uçlarını hareketsiz ve sabit tutarak canlı kemik hücrelerinin hızla yeni doku üretip kaynaşmasını sağlamak' },
            { key: 'B', text: 'Kemiğin rengini beyazlatmak' },
            { key: 'C', text: 'Kemiği yumuşatıp kıkırdağa dönüştürmek' },
            { key: 'D', text: 'Bacağa fazladan ağırlık kazandırmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 131. sayfasında alçıya alınan kemiğin hareketsiz kalması sayesinde dokuların çok daha hızlı ve düzgün iyileştiği vurgulanmaktadır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 8,
          context: 'Kulak kepçemizi veya burun ucumuzu elimizle büktüğümüzde kolayca eğilip büküldüğünü, bıraktığımızda ise eski haline döndüğünü hissederiz. Oysa kol kemiğimize bastırdığımızda sert olduğunu ve bükülemediğini görürüz.',
          questionPrompt: 'Kulak ve burun ucuna bu esnekliği sağlayan doku aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kıkırdak Doku' },
            { key: 'B', text: 'Sert Kemik Dokusu' },
            { key: 'C', text: 'Çizgili Kas' },
            { key: 'D', text: 'Kan Dokusu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 124. sayfasında kıkırdak dokunun esnek ve yumuşak olduğu; burun ucu, kulak kepçesi ve soluk borusunda bulunduğu belirtilmiştir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 9,
          context: 'Bir kargo çalışanı 25 kg’lık ağır bir koliyi yerden kaldırırken belini dik tutmuş, dizlerini bükerek çömelmiş, koliyi göğsüne yakın tutarak bacak kaslarının gücüyle ayağa kalkmıştır.',
          questionPrompt: 'Bu çalışan hakkında yapılabilecek en doğru değerlendirme hangisidir?',
          options: [
            { key: 'A', text: 'Ağırlığı omurgasına değil bacak kaslarına bindirerek bel fıtığı ve omurga hasarını engelleyen doğru duruş tekniğini uygulamıştır.' },
            { key: 'B', text: 'Hatalı hareket etmiştir; kollarıyla hızla savurmalıydı.' },
            { key: 'C', text: 'Dizlerini bükmesi eklemlerine zarar vermiştir.' },
            { key: 'D', text: 'Koliyi başının üstüne fırlatmalıydı.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 132. sayfasında Görsel 3.2.33’te gösterildiği gibi yerden eşya alırken dizler bükülerek ağırlık bacaklara verilmelidir; beli bükmek sakatlanmaya yol açar.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 10,
          context: 'Omurgamızı oluşturan omur kemikleri arasında kıkırdaktan yapılmış diskler ve yarı oynar eklemler yer alır. Bu sayede belimizi öne, arkaya ve yanlara belirli açılarda esnetebiliriz.',
          questionPrompt: 'Eğer omurgamızdaki eklemler yarı oynar değil de kafatasımızdaki gibi tamamen oynamaz eklem olsaydı ne gerçekleşirdi?',
          options: [
            { key: 'A', text: 'Gövdemizi eğip bükemez, dimdik sopa gibi kalırdık; oturmak, ayakkabı bağlamak imkânsızlaşırdı.' },
            { key: 'B', text: 'Kollarımız geriye doğru dönerdi.' },
            { key: 'C', text: 'Kalp kasımız dururdu.' },
            { key: 'D', text: 'Kemiklerimiz kıkırdağa dönüşürdü.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Yarı oynar eklemler omurgaya esneklik kazandırır. Oynamaz olsaydı hiçbir esneme hareketi yapılamaz, vücut tek parça sert bir kütük gibi kalırdı.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 11,
          context: 'Kemik gelişimi geride kalan ve sık sık kemikleri kırılan bir çocuğa doktor süt, peynir, yoğurt tüketmesini ve her gün belirli süre güneş ışığı almasını tavsiye etmiştir.',
          questionPrompt: 'Doktorun bu tavsiyesindeki temel amaç nedir?',
          options: [
            { key: 'A', text: 'Süt ürünlerindeki kalsiyum ile güneş ışığı sayesinde deride üretilen D vitamininin kemikleri sertleştirip güçlendirmesini sağlamak' },
            { key: 'B', text: 'Çocuğun boyunu bir günde iki katına çıkarmak' },
            { key: 'C', text: 'Kemiklerdeki mineralleri yok etmek' },
            { key: 'D', text: 'Kasları kemiklere yapıştırmak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 131. sayfasında dengeli beslenme, kalsiyum, D vitamini ve proteinin kemik sağlığındaki vazgeçilmez rolü vurgulanmaktadır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 12,
          context: 'Bir öğrenci kolunu dirsekten büktüğünde kolun ön tarafındaki pazusunun şişip sertleştiğini, arka tarafındaki kasın ise gevşediğini hissetmiştir.',
          questionPrompt: 'Bu durum iskelet kaslarının çalışma prensibi hakkında neyi kanıtlar?',
          options: [
            { key: 'A', text: 'İskelet kaslarının genellikle birbirine zıt (biri kasılırken diğeri gevşeyen) çiftler halinde çalıştığını' },
            { key: 'B', text: 'Kol kemiklerinin kıkırdağa dönüştüğünü' },
            { key: 'C', text: 'Kolda sadece düz kas bulunduğunu' },
            { key: 'D', text: 'Kasların kemiklere bağlı olmadığını' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 128. sayfasında kolun hareketi incelenirken ön kas kasılırken arka kasın gevşediği, zıt çalışan kas çiftlerinin eklemi hareket ettirdiği gösterilmiştir.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 13,
          context: 'Wilhelm Conrad Röntgen 1895 yılında laboratuvarında çalışırken tesadüfen et dokusunun içinden geçebilen fakat kemik gibi yoğun maddeler tarafından soğurulan görünmez ışınlar keşfetmiştir.',
          questionPrompt: 'X ışınlarının keşfi tıp alanında hangi devrime yol açmıştır?',
          options: [
            { key: 'A', text: 'İnsan vücudunu cerrahi müdahale ile kesmeden kemik kırıklarının, çatlaklarının ve eklem çıkıklarının tespit edilmesini' },
            { key: 'B', text: 'Kemiklerin ameliyatla tamamen çıkarılmasını' },
            { key: 'C', text: 'Kasların mikroskopla incelenmesine son verilmesini' },
            { key: 'D', text: 'D vitamini ihtiyacının sıfırlanmasını' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 131 ve 139. sayfalarında Röntgen cihazının doku ve kemik hasarlarını anında tespit ederek modern ortopediyi başlattığı belirtilir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 14,
          context: 'Öğrenciler fen bilimleri dersinde iskelet ve kas sağlığını korumaya yönelik günlük davranışları sınıflandırmaktadır.',
          questionPrompt: 'Aşağıdakilerden hangisi destek ve hareket sisteminin sağlığını OLUMSUZ etkileyen bir davranıştır?',
          options: [
            { key: 'A', text: 'Tek omuzda aşırı ağır okul çantası taşımak ve sürekli tek tarafa yüklenmek' },
            { key: 'B', text: 'Düzenli olarak yürüyüş ve yüzme yapmak' },
            { key: 'C', text: 'Kalsiyum ve protein bakımından zengin beslenmek' },
            { key: 'D', text: 'Yerden eşya alırken dizleri bükerek çömelmek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ağır çantayı tek omuzda taşımak omurganın bir tarafa eğilmesine (skolyoza), omuz ve sırt kaslarında asimetrik zedelenmeye yol açar.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 15,
          context: 'Bir araştırmacı insan iskeletindeki kemikleri incelemiş ve bazı kemiklerin ortasında sarı kemik iliği, süngerimsi dokularında ise kırmızı kemik iliği tespit etmiştir.',
          questionPrompt: 'Kırmızı kemik iliğinin insan vücudundaki en hayati görevi nedir?',
          options: [
            { key: 'A', text: 'Kan hücrelerini (alyuvar ve akyuvar) üretmek' },
            { key: 'B', text: 'Besinleri fotosentez yapmak' },
            { key: 'C', text: 'Hava direncini azaltmak' },
            { key: 'D', text: 'Kalbin atmasını sağlamak' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 120. sayfasında kemiklerin canlı olduğu, mineral depoladığı ve "kan hücreleri ürettiği" açıkça ifade edilmektedir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 16,
          context: 'İbni Sina, "El-Kânûn fî’t-Tıbb" eserinde kemik kırıklarının tedavisinde iki tahta parçasının (atel) kemik doğrultusunda sıkıca sarılarak kemiğin oynatılmamasını emretmiştir.',
          questionPrompt: 'İbni Sina’nın asırlar önce geliştirdiği bu tedavi yöntemi günümüzdeki hangi uygulamaya denk gelir?',
          options: [
            { key: 'A', text: 'Kırık kemiği sabitleme (atel ve alçıya alma) uygulamasına' },
            { key: 'B', text: 'Röntgen cihazı üretimine' },
            { key: 'C', text: 'Kıkırdak nakline' },
            { key: 'D', text: 'Aşı geliştirme yöntemine' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kırık uçların oynamadan düzgünce kaynaması için sabitlenmesi modern ortopedinin temelidir ve İbni Sina’nın tarif ettiği ilkelerle aynıdır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 17,
          context: 'Bir biyolog laboratuvarda üç farklı organın kas dokusunu incelemektedir:\n• K Organı: Yemek Borusu\n• L Organı: Kalp\n• M Organı: Bacak İskelet Kası',
          questionPrompt: 'Bu kasların çalışma hızları ve yorulma durumları ile ilgili aşağıdakilerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'M kası (çizgili kas) hızlı çalışır ve çabuk yorulurken, K kası (düz kas) ve L kası (kalp kası) yorulmaz.' },
            { key: 'B', text: 'Kalp kası 1 saat sonra yorulup durur.' },
            { key: 'C', text: 'Yemek borusu istemli çalışır.' },
            { key: 'D', text: 'Üç kas da tamamen aynı özelliktedir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'İskelet kası (çizgili) hızlı kasılıp çabuk yorulur; iç organ kasları (düz kas) ve kalp kası ise istemsiz ve yorulmadan çalışır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 18,
          context: 'Diz eklemi incelendiğinde uyluk kemiği ile kaval kemiğinin buluştuğu yerde eklem sıvısı ve pürüzsüz kıkırdak tabakası yer alır.',
          questionPrompt: 'Eklem sıvısı ve kıkırdak olmasaydı ne gibi bir sağlık sorunu ortaya çıkardı?',
          options: [
            { key: 'A', text: 'Kemikler her adım atıldığında birbirine sürtünerek aşınır, şiddetli ağrı ve hareket kaybı oluşurdu.' },
            { key: 'B', text: 'Bacaklar daha hızlı koşardı.' },
            { key: 'C', text: 'Kemikler eriyip kasa dönüşürdü.' },
            { key: 'D', text: 'Vücudun kütlesi sıfırlanırdı.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kıkırdak ve eklem sıvısı kemiklerin sürtünmesini ve aşınmasını önler. Bunlar yıprandığında (kireçlenme) kemikler birbirine sürter ve şiddetli ağrı yapar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 19,
          context: 'Aşağıda bazı kemik örnekleri verilmiştir:\n• I. Kürek kemiği\n• II. Pazu kemiği\n• III. Ayak bilek kemiği\n• IV. Kafatası kemiği',
          questionPrompt: 'Bu kemiklerden hangileri "YASSI KEMİK" grubuna dahildir?',
          options: [
            { key: 'A', text: 'I ve IV' },
            { key: 'B', text: 'II ve III' },
            { key: 'C', text: 'I ve III' },
            { key: 'D', text: 'II ve IV' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Kürek kemiği (I) ve kafatası kemiği (IV) levha şeklinde geniş yassı kemiklerdir. Pazu kemiği uzun, ayak bilek kemiği ise kısadır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 20,
          context: 'Sağlıklı bir yaşam için spor yapan Ece, spordan önce kaslarını ısıtma ve esnetme hareketleri yapmış, ardından kendi yaşına ve gücüne uygun tempoda koşu yapmıştır.',
          questionPrompt: 'Ece’nin spor öncesinde ısınma hareketleri yapmasının fizyolojik yararı nedir?',
          options: [
            { key: 'A', text: 'Kas liflerine ve eklemlere kan akışını artırarak kas yırtılmalarını, zedelenmeleri ve krampları önlemek' },
            { key: 'B', text: 'Kemik sayısını artırmak' },
            { key: 'C', text: 'Dinamometre yayını esnetmek' },
            { key: 'D', text: 'Yassı kemikleri uzun kemiğe çevirmek' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 131. sayfasında aşırı zorlayıcı aktivitelere aniden maruz kalmanın kas zedelenmesine yol açacağı ve spora hazırlıklı başlanması gerektiği belirtilir.',
          skillTag: 'Günlük Yaşam Bağı'
        }
      ]
    }
  ]
};
