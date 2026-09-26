import { Unit } from '../types/curriculum';

export const unit1Data: Unit = {
  id: 'unit-1',
  unitNumber: 1,
  title: 'Gökyüzündeki Komşularımız ve Biz',
  colorTheme: {
    primary: 'amber-500',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10',
    accent: 'amber-400',
    text: 'text-amber-400'
  },
  subTopics: [
    {
      id: 'unit1-sub1',
      title: 'Gökyüzündeki Komşumuz: Güneş (Yapısı ve Dönme Hareketi)',
      shortTitle: '1.1 Güneş’in Yapısı & Hareketi',
      badge: 'Sayfa 20-25',
      pageRange: '20 - 25',
      concepts: ['Güneş', 'Küre şekli', 'Katmanlı yapı', 'Sıcak gazlar', 'Güneş lekeleri', 'Dönme hareketi', 'Parker Güneş Sondası', 'Galileo Galilei'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Güneş’in Temel Özellikleri ve Geometrik Şekli',
          paragraphs: [
            'Güneş, çevresine sürekli olarak ısı ve ışık yayan orta büyüklükte bir yıldızdır. Samanyolu Galaksisi’ndeki milyarlarca yıldız arasında Dünya’mıza en yakın olanıdır. Bu nedenle Dünya’mızdaki yaşamın, ısının ve ışığın birincil kaynağıdır.',
            'Güneş’in geometrik şekli bir küreye benzer. Tıpkı Dünya’mız gibi iç içe geçmiş katmanlardan (çekirdek, ışık küre, renk küre ve taç küre) meydana gelir. Güneş katı bir yüzeye sahip değildir; tamamına yakını aşırı sıcak gazlardan (büyük oranda hidrojen ve helyum gazları) oluşur.',
            'Çekirdeğinde sıcaklık yaklaşık 15 milyon °C civarındayken, yüzeyinde bu sıcaklık yaklaşık 6.000 °C’dir. Dolayısıyla çekirdek sıcaklığı, yüzey sıcaklığından çok daha yüksektir.'
          ],
          keyPoints: [
            'Şekli küredir ve tıpkı Dünya gibi katmanlardan oluşur.',
            'Sıcak gazlardan (çoğunlukla hidrojen ve helyum) meydana gelir.',
            'Dünya’ya en yakın yıldızdır; Dünya’nın birincil ısı ve ışık kaynağıdır.',
            'Çekirdek sıcaklığı (~15.000.000 °C), yüzey sıcaklığından (~6.000 °C) katbekat fazladır.'
          ],
          table: {
            headers: ['Özellik', 'Güneş', 'Dünya ile Kıyas'],
            rows: [
              ['Şekil', 'Küre', 'Dünya da küreye benzer (geoit)'],
              ['Yapı', 'Sıcak gazlar', 'Dünya katı taş küre, su ve atmosfer içerir'],
              ['Büyüklük', 'Dünya’dan ~1.300.000 kat büyük hacim', 'Güneş basketbol topu ise Dünya mercimek tanesi gibidir'],
              ['Dönme Yönü', 'Kendi ekseninde batıdan doğuya (saat yönünün tersi)', 'Dünya da kendi ekseninde saat yönünün tersine döner']
            ]
          }
        },
        {
          heading: 'Güneş Lekeleri ve Dönme Hareketi',
          paragraphs: [
            'Güneş yüzeyi tamamen aynı sıcaklıkta değildir. Güneş’in parlak yüzeyinde çevrelerine göre daha soğuk olan bölgeler teleskopla bakıldığında koyu renkli benekler veya noktalar olarak görünür. Bu koyu renkli bölgelere "Güneş Lekeleri" denir.',
            'İtalyan bilim insanı Galileo Galilei, kendi geliştirdiği teleskopla Güneş lekelerini günbegün gözlemlemiştir. Lekelerin her gün aynı yöne (soldan sağa / batıdan doğuya) doğru düzenli olarak kaydığını fark etmiştir. Bu gözlem sayesinde Güneş’in sabit durmadığını, kendi ekseni etrafında saat yönünün tersine (batıdan doğuya) döndüğünü bilimsel olarak ilk ispatlayan kişi olmuştur.'
          ],
          scientistBox: {
            name: 'Galileo Galilei (1564 - 1642)',
            role: 'İtalyan Fizikçi, Astronom ve Matematikçi',
            contribution: 'Teleskopla Güneş lekelerini düzenli inceleyerek lekelerin sürekli batıdan doğuya kaydığını gözlemlemiş ve Güneş’in kendi ekseni etrafında döndüğünü tarihte ilk kez ispatlamıştır.'
          }
        },
        {
          heading: 'Güneş Gözlemi Güvenliği & Görünen Boyut Etkisi',
          paragraphs: [
            'Güneş ışığı yüksek yoğunlukta ultraviyole, kızılötesi ve görünür ışık enerjisi taşır. Güneş’e çıplak gözle, dürbünle, normal teleskopla, kamera merceğiyle veya sıradan güneş gözlüğüyle doğrudan bakmak göz retinasında kalıcı hasara ve anında körlüğe yol açabilir!',
            'Güneş gözlemi mutlaka özel sertifikalı Güneş filtreleri kullanılarak veya teleskoptaki görüntüyü arkadaki beyaz bir ekrana yansıtma tekniği ile yapılmalıdır.',
            'Güneş, Dünya’dan hacim olarak 1 milyon 300 bin kat daha büyük olmasına rağmen gökyüzünde küçük bir daire şeklinde görünür. Bunun nedeni cisimlerin uzaklaştıkça görünen boyutlarının küçülmesidir. Güneş ile Dünya arasında yaklaşık 150 milyon kilometre mesafe vardır.'
          ],
          keyPoints: [
            'Güneş’e asla koruyucu özel filtre olmadan doğrudan ya da optik aletlerle bakılamaz.',
            'Uzakta bulunan cisimler gerçek boyutlarından çok daha küçük algılanır (perspektif etkisi).',
            'Parker Güneş Sondası (NASA, 2018), Güneş’in atmosferine en çok yaklaşan insan yapımı araştırma aracıdır.'
          ],
          dailyLifeExample: 'Uzakta uçan devasa bir yolcu uçağının avucumuzun içi kadar küçük görünmesi, Güneş’in devasa olmasına rağmen gökyüzünde madeni para büyüklüğünde görünmesiyle aynı prensiptir.'
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Güneş, çevresine sürekli ısı ve ışık yayan bir yıldızdır.',
          isCorrect: true,
          explanation: 'Güneş, Dünya’mıza en yakın orta büyüklükte doğal bir yıldızdır; Dünya’nın ısı ve ışık kaynağıdır.'
        },
        {
          id: 2,
          statement: 'Güneş katı kayaçlardan oluşan sert bir kabuğa sahiptir.',
          isCorrect: false,
          explanation: 'Güneş katı maddelerden değil, tamamına yakını aşırı sıcak hidrojen ve helyum gazlarından oluşur.'
        },
        {
          id: 3,
          statement: 'Güneş’in çekirdek bölgesindeki sıcaklık, yüzey sıcaklığından daha düşüktür.',
          isCorrect: false,
          explanation: 'Güneş’in merkezindeki çekirdek yaklaşık 15 milyon °C olup yüzeyindeki 6.000 °C’den kat kat sıcaktır.'
        },
        {
          id: 4,
          statement: 'Güneş lekeleri, Güneş yüzeyinde çevrelerine göre daha soğuk olan koyu renkli bölgelerdir.',
          isCorrect: true,
          explanation: 'Güneş lekeleri yüzeydeki diğer bölgelere göre daha düşük sıcaklıkta oldukları için koyu renkte görünür.'
        },
        {
          id: 5,
          statement: 'Galileo Galilei, Güneş lekelerinin kaydığını gözlemleyerek Güneş’in kendi ekseni etrafında döndüğünü kanıtlamıştır.',
          isCorrect: true,
          explanation: 'Galileo, lekelerin her gün aynı doğrultuda kaymasından yola çıkarak Güneş’in döndüğünü ispat etmiştir.'
        },
        {
          id: 6,
          statement: 'Güneş’in kendi ekseni etrafındaki dönme yönü saat akrebinin dönme yönü ile aynıdır.',
          isCorrect: false,
          explanation: 'Güneş kendi ekseni etrafında saat yönünün TERSİNE (batıdan doğuya doğru) döner.'
        },
        {
          id: 7,
          statement: 'Güneş’e koyu renkli sıradan bir güneş gözlüğü takarak teleskopla doğrudan bakmak tamamen güvenlidir.',
          isCorrect: false,
          explanation: 'Güneş’e asla sıradan güneş gözlüğü veya filtresiz optik araçlarla bakılmaz; körlüğe neden olabilir.'
        },
        {
          id: 8,
          statement: 'Güneş’in Dünya’dan çok küçük görünmesinin temel nedeni Dünya’ya olan aşırı uzaklığıdır.',
          isCorrect: true,
          explanation: 'Aralarındaki yaklaşık 150 milyon km mesafe nedeniyle Güneş gökyüzünde olduğundan çok daha küçük algılanır.'
        },
        {
          id: 9,
          statement: 'Güneş de tıpkı Dünya gibi iç içe geçmiş katmanlardan meydana gelmektedir.',
          isCorrect: true,
          explanation: 'Güneş çekirdek, ışık küre, renk küre ve taç küre gibi katmanlı bir yapıya sahiptir.'
        },
        {
          id: 10,
          statement: 'Parker uzay aracı, Güneş’e en çok yaklaşan ve veri toplayan insan yapımı uzay aracıdır.',
          isCorrect: true,
          explanation: '2018 yılında fırlatılan Parker uzay aracı Güneş atmosferine en çok yaklaşan araştırma sondasıdır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Fen bilimleri dersinde Ayşe, teleskobunun önüne onaylı özel Güneş filtresi takarak beş gün arayla Güneş yüzeyini fotoğraflamıştır. Fotoğraflarda X, Y ve Z olarak adlandırdığı koyu bölgelerin 1. günden 5. güne kadar düzenli olarak aynı doğrultuda batıdan doğuya (soldan sağa) doğru kaydığını tespit etmiştir.',
          questionPrompt: 'Ayşe’nin yaptığı bu kontrollü gözlem ve elde ettiği bulgulara dayanarak aşağıdaki çıkarımlardan hangisine kesin olarak ulaşılır?',
          options: [
            { key: 'A', text: 'Güneş, kendi ekseni etrafında saat yönünün tersine dönme hareketi yapmaktadır.' },
            { key: 'B', text: 'Güneş yüzeyindeki lekelerin sıcaklığı çekirdekteki sıcaklıktan daha fazladır.' },
            { key: 'C', text: 'Güneş katı bir yapıya sahip olduğu için lekeler hareket etmemektedir.' },
            { key: 'D', text: 'Güneş lekeleri sadece Dünya’nın dönme hareketinin bir optik yanılsamasıdır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş lekelerinin beş gün boyunca düzenli biçimde aynı yöne (soldan sağa) kayması, Güneş’in kendi ekseni etrafında saat ibrelerinin tersi yönünde döndüğünün en açık kanıtıdır. Nitekim Galileo da aynı yöntemle bu keşfi yapmıştır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 2,
          context: 'Bir okul bahçesinde fen öğretmeni, öğrencilerine görünen boyut kavramını kavratmak için bir basketbol topu ve bir tenis topu kullanmıştır. Ali tenis topunu öğretmenin 1 metre önünde tutarken, Burak basketbol topunu alarak 50 metre uzaktaki okul duvarının dibine gitmiştir. Gözlemci konumundaki sınıf, 50 metre uzaktaki basketbol topunu öndeki tenis topuyla aynı büyüklükte görmüştür.',
          questionPrompt: 'Bu deney düzeneği ve fen bilimleri ilkeleri düşünüldüğünde kurulan modelleme ile ilgili aşağıdakilerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Tenis topu Güneş’i, basketbol topu Dünya’yı temsil etmektedir.' },
            { key: 'B', text: 'Basketbol topu Güneş’i, tenis topu ise Dünya’ya daha yakın olan gök cisimlerini temsil eder; cisimler uzaklaştıkça görünen boyutları küçülür.' },
            { key: 'C', text: 'Deneyde kullanılan topların gerçek hacimleri eşit olduğu için aynı boyutta algılanmışlardır.' },
            { key: 'D', text: 'Işığın kırılmasından dolayı yakındaki cisimler her zaman gerçek boyutundan küçük görünür.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Perspektif kuralına göre cisimler gözlemciden uzaklaştıkça retinada kapladıkları açı küçülür ve daha küçük görünürler. Basketbol topu (Güneş) çok daha büyük olmasına rağmen çok uzakta olduğu için yakındaki küçük top gibi görünür.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 3,
          context: 'Güneş’in fiziksel ve kimyasal yapısıyla ilgili araştırma yapan bir öğrenci panoya şu bilgileri asmıştır:\nI. Yapısının %98’inden fazlasını hidrojen ve helyum gazları oluşturur.\nII. Şekli tıpkı portakal veya basketbol topu gibi küreseldir.\nIII. Yüzey sıcaklığı yaklaşık 6.000 °C, merkez çekirdek sıcaklığı ise yaklaşık 15 milyon °C’dir.',
          questionPrompt: 'Panoda verilen bu maddelerden hangileri Güneş’in "sıcak gazlardan oluşan katmanlı küresel bir yapı" olduğunu doğrudan doğrular?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          detailedExplanation: 'I. madde gaz yapısını, II. madde geometrik küre şeklini, III. madde ise içten dışa katmanlar arasındaki devasa sıcaklık farkını doğrular. Her üç bilgi de ders kitabındaki Güneş tanımlarıyla eksiksiz örtüşür.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 4,
          context: 'Deniz, fen bilimleri laboratuvarında Güneş gözlemi yapmak istemektedir. Arkadaşı Kerem ona siyah renkli bir röntgen filmi ve deniz gözlüğü teklif etmiştir. Öğretmenleri ise bu teklifi kesin bir dille reddedip laboratuvardaki sertifikalı Güneş filtreli projeksiyon aparatını kullanmalarını istemiştir.',
          questionPrompt: 'Öğretmenin öğrencileri uyarmasının temel bilimsel gerekçesi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Röntgen filminin Güneş’in görüntüsünü ters çevirmesi' },
            { key: 'B', text: 'Güneş ışınlarının içerdiği yüksek enerjili zararlı ışınların sıradan filtrelerle engellenemeyip körlüğe yol açabilmesi' },
            { key: 'C', text: 'Deniz gözlüğünün Güneş lekelerinin rengini açık renge dönüştürmesi' },
            { key: 'D', text: 'Güneş’in dönme hareketinin yalnızca projeksiyon aparatıyla durdurulabilmesi' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Güneş ışığı yüksek enerjili kızılötesi ve ultraviyole ışınlar yayar. Röntgen filmi veya isli cam gibi araçlar bu zararlı ışınları filtreleyemez ve kalıcı görme kaybına sebep olur. Yalnızca profesyonel filtreler veya ekrana yansıtma güvenlidir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 5,
          context: 'Aşağıdaki tabloda Güneş ve Dünya’ya ait bazı özellikler eşleştirilmeye çalışılmıştır:\n• Özellik 1: Geometrik şekli küreye benzer.\n• Özellik 2: Kendi ekseni etrafında saat yönünün tersine döner.\n• Özellik 3: Tamamı sıcak gazlardan oluşur.\n• Özellik 4: İç içe katmanlı bir yapı sergiler.',
          questionPrompt: 'Tabloda verilen özelliklerden hangisi Güneş için geçerli iken Dünya için GEÇERLİ DEĞİLDİR?',
          options: [
            { key: 'A', text: 'Özellik 1' },
            { key: 'B', text: 'Özellik 2' },
            { key: 'C', text: 'Özellik 3' },
            { key: 'D', text: 'Özellik 4' }
          ],
          correctAnswer: 'C',
          detailedExplanation: 'Güneş ve Dünya’nın her ikisi de küreseldir (Özellik 1), her ikisi de saat yönünün tersine döner (Özellik 2), her ikisinin de katmanları vardır (Özellik 4). Fakat Dünya katı kayaçlar, su ve atmosferden oluşurken, Güneş’in tamamına yakını aşırı sıcak gazlardan oluşur.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 6,
          context: '2018 yılında fırlatılan Parker Güneş Sondası, uzay tarihinde Güneş atmosferine (Taç Küre) en çok yaklaşan insan yapımı araçtır. Araç, Güneş yüzeyinden fışkıran sıcak plazma akımlarını ve manyetik alan hareketlerini inceleyerek Dünya’ya veri göndermektedir.',
          questionPrompt: 'Bilim insanlarının Parker uzay aracını Güneş’e göndermelerindeki temel amaç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Güneş üzerinde astronotların yürüyebileceği katı zeminler aramak' },
            { key: 'B', text: 'Güneş’in yapısını, katmanlarını ve hareketlerini yakından inceleyerek Dünya üzerindeki etkilerini anlamak' },
            { key: 'C', text: 'Güneş’in kendi ekseni etrafında dönme yönünü değiştirmek' },
            { key: 'D', text: 'Güneş lekelerini soğutarak Güneş’in ısısını azaltmak' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 24. sayfasındaki Bilgi İstasyonu’na göre Parker sondası, Güneş’in yapısı, katmanları ve manyetik fırtınaları hakkında doğrudan bilimsel veriler toplamak amacıyla gönderilmiştir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 7,
          context: 'Fen öğretmeni sınıfa içi boş bir soğan, bir haşlanmış yumurta ve bir elma getirerek ortadan ikiye kesmiştir. Ardından öğrencilere "Güneş’in yapısını düşününce bu meyve ve yiyeceklerin ortak bir özelliğini Güneş ile ilişkilendirebilir misiniz?" diye sormuştur.',
          questionPrompt: 'Öğretmenin bu benzetmeyle vurgulamak istediği temel kavram aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Güneş’in homojen ve tek parça bir yapıya sahip olması' },
            { key: 'B', text: 'Güneş’in tıpkı Dünya ve bu modeller gibi iç içe katmanlardan oluşması' },
            { key: 'C', text: 'Güneş’in yüzeyinin katı bir kabukla kaplı olması' },
            { key: 'D', text: 'Güneş’in merkezinde su bulunması' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Yumurta (sarı, beyaz, kabuk) ve soğan gibi yapılar iç içe geçmiş katmanları modellemek için kullanılır. Güneş de çekirdek, ışık küre, renk küre ve taç küre olmak üzere katmanlardan meydana gelir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 8,
          context: 'Bir öğrenci Güneş’in dönme hareketiyle ilgili bir deney düzeneği kuruyor. Küre şeklindeki beyaz strafor topun üzerine keçeli kalemle siyah bir nokta koyuyor. Topu saat ibrelerinin tersine (batıdan doğuya) döndürdüğünde noktanın soldan sağa doğru ilerlediğini gözlemliyor.',
          questionPrompt: 'Öğrencinin bu modelinde strafor top ve üzerindeki siyah nokta sırasıyla neleri temsil etmektedir?',
          options: [
            { key: 'A', text: 'Dünya - Ay krateri' },
            { key: 'B', text: 'Güneş - Güneş lekesi' },
            { key: 'C', text: 'Ay - Kutup noktası' },
            { key: 'D', text: 'Teleskop - Mercek' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dönen strafor top Güneş’i, üzerindeki siyah nokta ise Güneş lekesini temsil eder. Galileo da teleskobuyla lekelerin soldan sağa doğru yer değiştirmesini gözlemleyerek Güneş’in dönme hareketini ispatlamıştır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 9,
          context: 'Güneş’in çekirdeğinde gerçekleşen nükleer tepkimeler sonucunda hidrojen atomları helyuma dönüşür ve açığa muazzam bir ısı ve ışık enerjisi çıkar. Bu enerji katmanlar boyunca ilerleyerek yüzeye ve oradan uzay boşluğuna yayılır.',
          questionPrompt: 'Bu açıklamaya göre aşağıdaki ifadelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Güneş kendi enerjisini üretebilen doğal bir gök cismidir.' },
            { key: 'B', text: 'Güneş’in yapısında en çok bulunan gaz hidrojen ve helyumdur.' },
            { key: 'C', text: 'Güneş’in yaydığı enerji Dünya’daki rüzgâr, yağış ve fotosentez gibi olayların temel kaynağıdır.' },
            { key: 'D', text: 'Güneş enerjisini uzaydaki diğer yıldızlardan yansıtarak Dünya’ya iletir.' }
          ],
          correctAnswer: 'D',
          detailedExplanation: 'Güneş ışığı yansıtan bir gök cismi değil, kendi enerjisini kendi merkezinde üreten bir yıldızdır. Işığı yansıtan gök cismi Ay ve gezegenlerdir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 10,
          context: 'Bir araştırmacı Güneş yüzeyindeki lekelerin büyüklüklerini incelemiş ve bazı lekelerin Dünya gezegeninden bile daha geniş bir alanı kaplayabildiğini kaydetmiştir.',
          questionPrompt: 'Bu gözlem Güneş hakkında aşağıdaki yargılardan hangisini doğrudan destekler?',
          options: [
            { key: 'A', text: 'Güneş’in kütlesi ve hacmi Dünya ile kıyaslanamayacak kadar büyüktür.' },
            { key: 'B', text: 'Güneş yüzeyi tamamen soğuk ve karanlık bir yapıdadır.' },
            { key: 'C', text: 'Güneş lekeleri Dünya’ya çarpmak üzere olan gök taşlarıdır.' },
            { key: 'D', text: 'Güneş’in dönüş hızı Dünya’nın dönüş hızından düşüktür.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş’in sadece küçük bir lekesi dahi Dünya’dan büyük olabiliyorsa, bu durum Güneş’in Dünya’dan ne denli devasa bir boyutta (içine yaklaşık 1.300.000 Dünya sığabilecek kadar) olduğunu gösterir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 11,
          context: 'Dört öğrenci Güneş hakkında şu iddialarda bulunmuştur:\n• Efe: "Güneş gökyüzünde sabit durur, ne kendi ekseninde döner ne de başka bir hareket yapar."\n• Zeynep: "Güneş kendi ekseni etrafında saat yönünde döner."\n• Can: "Güneş kendi ekseni etrafında saat yönünün tersine, batıdan doğuya döner."\n• Elif: "Güneş katı bir küredir, lekeler Dünya’nın gölgesidir."',
          questionPrompt: 'Buna göre hangi öğrencinin iddiası MEB Maarif Fen Bilimleri kitabındaki bilimsel gerçeklerle TAMAMEN UYUŞMAKTADIR?',
          options: [
            { key: 'A', text: 'Efe' },
            { key: 'B', text: 'Zeynep' },
            { key: 'C', text: 'Can' },
            { key: 'D', text: 'Elif' }
          ],
          correctAnswer: 'C',
          detailedExplanation: 'Can’ın ifadesi doğrudur: Güneş kendi ekseni etrafında batıdan doğuya doğru, yani saat yönünün tersine dönme hareketi yapar.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Fen bilgisi öğretmeni tahtaya şu akış şemasını çizmiştir:\n1. Aşama: Güneş Dünya’ya en yakın yıldızdır.\n2. Aşama: Dünya’dan yaklaşık 150 milyon km uzaktadır.\n3. Aşama: Bu mesafe sebebiyle gökyüzünde küçük görünür.\n4. Aşama: ?',
          questionPrompt: 'Mantıksal çıkarım zincirini doğru tamamlamak için 4. Aşamaya aşağıdakilerden hangisi yazılmalıdır?',
          options: [
            { key: 'A', text: 'Oysa gerçekte içine yaklaşık 1,3 milyon Dünya sığabilecek kadar devasa bir hacme sahiptir.' },
            { key: 'B', text: 'Bu yüzden Ay’dan daha az ışık saçar.' },
            { key: 'C', text: 'Bu nedenle Güneş kendi etrafında dönemez.' },
            { key: 'D', text: 'Güneş’in sıcaklığı Dünya’nın sıcaklığından daha düşüktür.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş’in küçük görünmesi bir algı/mesafe sonucudur; gerçek boyutu ise Dünya’dan katbekat büyüktür (1,3 milyon Dünya hacmindedir).',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 13,
          context: 'Güneş yüzeyinde gözlemlenen Güneş patlamaları (flare), uzaya yüksek enerjili parçacıklar fırlatır. Bu parçacıklar Dünya’nın manyetik alanına ulaştığında kutup ışıklarını (aurora) oluşturur ve radyo iletişiminde geçici parazitlere yol açabilir.',
          questionPrompt: 'Bu durumdan yola çıkarak Güneş ile ilgili yapılabilecek en kapsamlı çıkarım hangisidir?',
          options: [
            { key: 'A', text: 'Güneş yüzeyindeki olaylar sadece Güneş sistemi dışındaki yıldızları etkiler.' },
            { key: 'B', text: 'Güneş’te meydana gelen dinamik değişimler Dünya’daki fiziksel ve teknolojik sistemleri doğrudan etkileyebilir.' },
            { key: 'C', text: 'Güneş patlamaları Güneş’in kütlesinin her yıl yarıya inmesine sebep olur.' },
            { key: 'D', text: 'Güneş patlamaları Ay’ın evrelerinin değişmesine yol açar.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Güneş durağan değil, çok dinamik bir gaz küresidir; yüzeyindeki patlamalar 150 milyon km uzaktaki Dünya’nın manyetik alanını ve iletişim sistemlerini etkileyebilmektedir.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 14,
          context: 'Bir bilim dergisinde yer alan habere göre: "Gök bilimciler Güneş lekelerinin sayısının yaklaşık 11 yıllık periyotlarla artıp azaldığını tespit etmişlerdir. Lekelerin yoğun olduğu dönemlerde Güneş aktiviteleri zirveye çıkmaktadır."',
          questionPrompt: 'Bu bilgiden hareketle aşağıdakilerden hangisi söylenebilir?',
          options: [
            { key: 'A', text: 'Güneş lekeleri kalıcı ve sabit şekiller değildir, zamanla değişen dinamik bölgelerdir.' },
            { key: 'B', text: 'Güneş lekeleri her 11 yılda bir Güneş’in tamamen sönmesine neden olur.' },
            { key: 'C', text: 'Güneş lekeleri Dünya’dan teleskopla asla görülemez.' },
            { key: 'D', text: 'Lekelerin sayısının değişmesi Güneş’in dönme yönünü tersine çevirir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş lekeleri sabit yapılar olmayıp Güneş’in manyetik döngüsüne bağlı olarak çoğalan veya azalan dinamik soğuk bölgelerdir.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 15,
          context: 'Güneş’in katmanları içten dışa doğru:\n1. Çekirdek (Merkez)\n2. Işık Küre (Fotosfer)\n3. Renk Küre (Kromosfer)\n4. Taç Küre (Korona)\nşeklinde sıralanır. Çıplak gözle filtrelenmiş olarak baktığımızda gördüğümüz parlak katman Işık Küre’dir.',
          questionPrompt: 'Güneş’in katmanlı yapısı incelendiğinde aşağıdaki eşleştirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'En sıcak katman: Taç Küre değil Çekirdek’tir.' },
            { key: 'B', text: 'En dış katman: Çekirdek’tir.' },
            { key: 'C', text: 'Dünya’dan görünen katman: Renk küre değil taç küredir.' },
            { key: 'D', text: 'Güneş’in katmanları arasında sıcaklık farkı bulunmaz.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş’in merkezinde bulunan Çekirdek (~15 milyon °C), termonükleer tepkimelerin gerçekleştiği en sıcak katmandır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 16,
          context: 'Bir araştırmacı, Güneş’in kutup bölgelerindeki dönüş süresi ile ekvator bölgesindeki dönüş süresinin tamamen aynı olmadığını, ekvatorun yaklaşık 25 günde, kutupların ise yaklaşık 35 günde bir tam tur döndüğünü belirlemiştir.',
          questionPrompt: 'Farklı bölgelerin farklı sürelerde dönmesi, Güneş’in hangi temel fiziksel özelliği ile doğrudan açıklanır?',
          options: [
            { key: 'A', text: 'Güneş’in katı bir küre olmayıp akışkan sıcak gazlardan oluşmasıyla' },
            { key: 'B', text: 'Güneş’in Dünya etrafında dolanmasıyla' },
            { key: 'C', text: 'Güneş’in soğuk bir gök cismi olmasıyla' },
            { key: 'D', text: 'Güneş lekelerinin tamamen su buzundan oluşmasıyla' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Katı cisimlerin her noktası aynı sürede döner. Ancak akışkan gaz veya plazma halindeki gök cisimlerinde (diferansiyel rotasyon) ekvator kutuplardan daha hızlı döner. Bu durum Güneş’in gaz yapısının kanıtıdır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 17,
          context: 'Laboratuvar dersinde öğrenciler Güneş ve Dünya modelleri tasarlamaktadır. Grup 1 sarı bir basketbol topu ve küçük bir mercimek tanesi kullanırken; Grup 2 bir elma ve bir karpuz kullanmış, karpuzu Dünya, elmayı Güneş yapmıştır.',
          questionPrompt: 'Hangi grubun modeli bilimsel oranlara ve gerçek boyut ilişkisine daha uygundur?',
          options: [
            { key: 'A', text: 'Grup 2, çünkü Dünya Güneş’ten daha büyüktür.' },
            { key: 'B', text: 'Grup 1, çünkü Güneş basketbol topu kabul edilirse Dünya onun yanında ancak minik bir mercimek tanesi kadar kalır.' },
            { key: 'C', text: 'Her iki grup da tamamen hatalıdır, Güneş ve Dünya eşit boyuttadır.' },
            { key: 'D', text: 'Grup 2, çünkü elma Güneş’ten daha ağırdır.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabındaki boyut karşılaştırmalarında Güneş devasa bir basketbol topuna benzetilirse, Dünya ancak küçük bir mercimek tanesi büyüklüğündedir.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 18,
          context: 'Eski çağlarda insanlar Güneş’in gökyüzünde doğup batmasını izleyerek Güneş’in Dünya etrafında döndüğünü sanmışlardır. Oysa günümüzde sabah, öğle ve akşam saatlerinde Güneş’in farklı konumlarda görünmesinin Dünya’nın kendi ekseni etrafında dönmesinden kaynaklandığı bilinmektedir.',
          questionPrompt: 'Bu durum bilimsel bilginin doğası ve gök cisimlerinin hareketleri açısından neyi gösterir?',
          options: [
            { key: 'A', text: 'Görünürdeki hareketlerin sebebi bazen gözlemcinin bulunduğu sistemin kendi hareketidir.' },
            { key: 'B', text: 'Güneş gün içerisinde kendi ekseni etrafındaki dönüşünü 24 saatte tamamlar.' },
            { key: 'C', text: 'Güneş aslında hiç hareket etmez, uzayda asılı kalır.' },
            { key: 'D', text: 'Dünya’nın dönmesi durursa Güneş yok olur.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş’in gün içindeki konum değişimi, Dünya’nın kendi ekseni etrafında batıdan doğuya dönmesinden kaynaklanan izafi bir harekettir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 19,
          context: 'Bir bulmacada Güneş ile ilgili ipuçları verilmiştir:\n• İpucu 1: Dünya’mızın yaşam kaynağı olan yıldız.\n• İpucu 2: Yüzeyindeki görece soğuk koyu bölgeler.\n• İpucu 3: Kendi ekseni etrafında dönerken izlediği yön.',
          questionPrompt: 'Bu ipuçlarının doğru karşılıkları sırasıyla hangi seçenekte eksiksiz verilmiştir?',
          options: [
            { key: 'A', text: 'Güneş - Krater - Saat yönü' },
            { key: 'B', text: 'Güneş - Güneş Lekesi - Saat yönünün tersi (Batıdan doğuya)' },
            { key: 'C', text: 'Kutup Yıldızı - Güneş Lekesi - Doğudan batıya' },
            { key: 'D', text: 'Ay - Krater - Saat yönünün tersi' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Yaşam kaynağı yıldız: Güneş; soğuk bölgeler: Güneş Lekesi; dönme yönü: Saat yönünün tersi (batıdan doğuya) olarak tanımlanır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 20,
          context: 'Bilimsel bir deneyde üç öğrenci Güneş ışığının gücünü anlamak için büyüteçle kuru bir yaprağın üzerine odaklama yapmış ve saniyeler içinde yaprağın tutuştuğunu görmüştür. Öğretmen: "İşte bu odaklanmış ışık enerjisi, filtresiz bir teleskopla baktığınızda göz bebeğinizden geçip retinanıza ulaşsaydı aynı şeyi gözünüze yapardı." demiştir.',
          questionPrompt: 'Öğretmenin bu çarpıcı uyarısından çıkarılacak en temel ders aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Büyüteçler sadece kâğıt yakmak için üretilmiştir.' },
            { key: 'B', text: 'Güneş gözlemi yapılırken optik araçların önüne必ず özel filtreler takılmalı, aksi halde geri dönüşsüz görme kaybı yaşanır.' },
            { key: 'C', text: 'Güneş ışınları yaprakları yakamaz.' },
            { key: 'D', text: 'Teleskopla Güneş’e bakıldığında sadece geceleri bakılmalıdır.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 24. sayfasında açıkça belirtildiği üzere Güneş ışığı yüksek enerji taşır. Büyüteç etkisi yapan mercekler koruyucu filtre olmadan göze tutulursa kalıcı retina yanığı ve anında körlük meydana gelir.',
          skillTag: 'Günlük Yaşam Bağı'
        }
      ]
    },
    {
      id: 'unit1-sub2',
      title: 'Gökyüzündeki Komşumuz: Ay ve Evreleri',
      shortTitle: '1.2 Ay’ın Özellikleri & Evreleri',
      badge: 'Sayfa 26-43',
      pageRange: '26 - 43',
      concepts: ['Doğal uydu', 'Kraterler', 'Ay atmosferi', 'Sıcaklık farkı (-174°C / 125°C)', 'Dönme ve dolanma süresi', 'Ana ve ara evreler', 'Ali Kuşçu', 'Caca Bey', 'AYAP'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Ay’ın Yapısı, Özellikleri ve Yüzey Şekilleri',
          paragraphs: [
            'Ay, Dünya’mızın tek doğal uydusudur ve Dünya’ya en yakın gök cismidir. Dünya ile Ay arasındaki ortalama mesafe yaklaşık 384.400 kilometredir. Ay da tıpkı Dünya ve Güneş gibi küreye benzer bir geometrik şekle sahiptir.',
            'Ay bir ışık kaynağı DEĞİLDİR. Güneş’ten aldığı ışığı yansıtır. Gündüzleri de gökyüzünde görülebilmesine rağmen geceleri gökyüzü karanlık olduğundan çok daha net ve parlak görünür.',
            'Ay’ın atmosferi yok denecek kadar incedir. Bu ince yapı nedeniyle rüzgâr, yağmur, kar, fırtına gibi hava olayları kesinlikle gerçekleşmez. Bu nedenle 1969 yılında Apollo göreviyle Ay’a ayak basan astronotların ayak izleri ve uzay araçlarının tekerlek izleri milyonlarca yıl boyunca bozulmadan kalır.',
            'Atmosfer tabakası koruyucu bir kalkan oluşturamadığı için uzaydan gelen irili ufaklı meteorlar (gök taşları) doğrudan Ay yüzeyine çarpar. Bu çarpmalar sonucunda açılan dev çukurlara "Krater" adı verilir. Ay yüzeyinde yaklaşık 300.000 krater tespit edilmiştir. Son yedi yılda bile 222 yeni krater oluştuğu saptanmıştır.'
          ],
          keyPoints: [
            'Dünya’nın tek doğal uydusudur, ortalama uzaklığı 384.400 km’dir.',
            'Işık kaynağı değildir, Güneş’ten aldığı ışığı yansıtır.',
            'Atmosferi yok denecek kadar incedir; hava olayları (rüzgar, yağmur) görülmez.',
            'Astronotların ayak izleri silinmez.',
            'Gök taşlarının çarpmasıyla "krater" adı verilen derin çukurlar oluşmuştur.',
            'Gece ile gündüz arasındaki sıcaklık farkı olağanüstüdür (Gündüz 125 °C, Gece -174 °C). Bu şiddetli sıcaklık farkı kayaçların genleşip büzülerek ufalanmasına ve Ay yüzeyinin tozla kaplanmasına yol açar.'
          ],
          table: {
            headers: ['Özellik', 'Ay', 'Dünya'],
            rows: [
              ['Atmosfer', 'Yok denecek kadar ince', 'Kalın, yaşamı destekleyen koruyucu kalkan'],
              ['Hava Olayları', 'Rüzgâr, yağış, erozyon yok', 'Yağmur, rüzgâr, kar, fırtına var'],
              ['Yüzey Sıcaklığı', 'Gündüz +125 °C, Gece -174 °C', 'Canlıların yaşayabileceği ılıman aralık'],
              ['Işık Durumu', 'Işığı yansıtır (Kaynak değil)', 'Işığı yansıtır (Kaynak değil)']
            ]
          }
        },
        {
          heading: 'Ay’ın Hareketleri ve Hep Aynı Yüzünün Görünmesi',
          paragraphs: [
            'Ay üç farklı hareket yapar: 1) Kendi ekseni etrafında döner. 2) Dünya etrafında dolanır. 3) Dünya ile birlikte Güneş etrafında dolanır. Bu hareketlerin tümünün yönü saat yönünün TERSİNE (batıdan doğuya) doğrudur.',
            'Ay’ın kendi ekseni etrafında bir tam dönüş süresi (yaklaşık 27 gün 8 saat) ile Dünya etrafında bir tam dolanma süresi (yaklaşık 27 gün 8 saat) birbirine NEREDEYSE EŞİTTİR.',
            'Bu büyüleyici eşitlik nedeniyle, Dünya’dan Ay’a hangi tarihte bakarsak bakalım Ay’ın daima AYNI YÜZÜNÜ görürüz! Ay’ın arkada kalan yüzüne "Ay’ın karanlık/arka yüzü" denir ve Dünya’dan doğrudan asla görülemez.'
          ],
          keyPoints: [
            'Ay kendi etrafında dönme süresi = Dünya etrafında dolanma süresi (~27 gün 8 saat).',
            'Sonuç: Dünya’dan bakıldığında Ay’ın daima aynı yüzü görünür.',
            'Tüm hareketlerin yönü saat yönünün tersinedir (batıdan doğuya).'
          ]
        },
        {
          heading: 'Ay’ın Evreleri (Ana ve Ara Evreler)',
          paragraphs: [
            'Ay, Dünya etrafında dolanırken Dünya ve Güneş’e göre konumu sürekli değişir. Bu nedenle Ay’ın Güneş ışığını yansıtan aydınlık kısmının Dünya’dan görünümü her gece değişir. Buna "Ay’ın Evreleri" denir.',
            'Ay’ın evrelerinin tamamlanıp tekrar başa dönmesi yaklaşık 29,5 gün sürer. Bu süreye takvimde "1 ay" adı verilir.',
            'Ay’ın 4 ANA EVRESİ ve 2 ARA EVRESİ vardır. İki ana evre arasında geçen süre yaklaşık 1 haftadır (7 gün):'
          ],
          keyPoints: [
            '1. Yeni Ay (Ana Evre): Ay, Güneş ile Dünya arasındadır. Karanlık yüzü Dünya’ya baktığı için Ay gökyüzünde görünmez.',
            '• Hilal (Ara Evre): Yeni Ay’dan İlk Dördün’e geçerken "ters C", Son Dördün’den Yeni Ay’a geçerken "C" harfi gibi görünür.',
            '2. İlk Dördün (Ana Evre): Yeni Ay’dan 1 hafta sonra görülür. Ay’ın sağ yarısı aydınlıktır; gökyüzünde düzgün "D" harfi şeklinde parlar.',
            '• Şişkin Ay (Ara Evre): İlk Dördün ile Dolunay arasında ve Dolunay ile Son Dördün arasında görülen ara evredir.',
            '3. Dolunay (Ana Evre): İlk Dördün’den 1 hafta sonra görülür. Dünya, Güneş ile Ay arasındadır. Ay’ın Dünya’ya bakan yüzü tamamen ışık alır ve tam daire olarak parlar.',
            '4. Son Dördün (Ana Evre): Dolunay’dan 1 hafta sonra görülür. Ay’ın sol yarısı aydınlıktır; gökyüzünde "ters D" harfi şeklinde görünür.',
            'Terminatör Çizgisi: Ay’ın aydınlık bölgesi ile karanlık bölgesini ayıran sınıra verilen addır.',
            'Süper Ay: Ay’ın eliptik yörüngesinde Dünya’ya en yakın olduğu anda Dolunay evresinde olması durumunda daha büyük ve parlak görünmesidir.'
          ],
          scientistBox: {
            name: 'Ali Kuşçu & Caca Bey & Millî Uzay Programı (AYAP)',
            role: 'Türk-İslam Bilim İnsanları ve Türkiye Uzay Ajansı',
            contribution: 'Ali Kuşçu Ay’ın ilk haritalarını çizmiş olup NASA tarafından Ay’daki bir kratere ismi verilmiştir. Kırşehir’deki Caca Bey Medresesi kubbesi açık ve su kuyulu rasathanesiyle astronomi tarihine geçmiştir. Türkiye’nin Millî Uzay Programı (AYAP) ile yerli uzay aracımızın Ay yörüngesine ve yüzeyine ulaşması hedeflenmektedir.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Ay, Dünya’nın tek doğal uydusudur ve Dünya’ya en yakın gök cismidir.',
          isCorrect: true,
          explanation: 'Ay Dünya’nın tek doğal uydusudur; uzaklığı yaklaşık 384.400 km’dir.'
        },
        {
          id: 2,
          statement: 'Ay da Güneş gibi kendi ışığını üreten parlak bir ışık kaynağıdır.',
          isCorrect: false,
          explanation: 'Ay ışık kaynağı değildir; yalnızca Güneş’ten aldığı ışınları yansıtır.'
        },
        {
          id: 3,
          statement: 'Ay’da atmosfer yok denecek kadar ince olduğu için yağmur, rüzgâr ve kar gibi hava olayları görülmez.',
          isCorrect: true,
          explanation: 'Hava olaylarının gerçekleşmesi için yeterli atmosfer ve su buharı bulunmaz.'
        },
        {
          id: 4,
          statement: 'Ay yüzeyine çarpan gök taşlarının açtığı irili ufaklı çukurlara krater denir.',
          isCorrect: true,
          explanation: 'Atmosfer olmadığı için meteorlar yanmadan yüzeye çarpar ve kraterleri oluşturur.'
        },
        {
          id: 5,
          statement: 'Dünya’dan bakıldığında Ay’ın daima aynı yüzünün görülmesinin nedeni, dönme ve dolanma sürelerinin eşit olmasıdır.',
          isCorrect: true,
          explanation: 'Ay kendi ekseninde dönme süresi ile Dünya etrafında dolanma süresi (~27 gün 8 saat) neredeyse eşittir.'
        },
        {
          id: 6,
          statement: 'İlk Dördün evresinde Ay, gökyüzünde "ters D" harfi şeklinde görünür.',
          isCorrect: false,
          explanation: 'İlk dördün evresinde düz "D" harfi görünür; ters "D" harfi ise Son Dördün evresinde görülür.'
        },
        {
          id: 7,
          statement: 'Ay’ın iki ana evresi arasında geçen süre yaklaşık bir haftadır (7 gün).',
          isCorrect: true,
          explanation: 'Yeni ay, ilk dördün, dolunay ve son dördün arasındaki geçiş süresi yaklaşık 7 gündür.'
        },
        {
          id: 8,
          statement: 'Ay’ın evrelerinin baştan sona tamamlanma döngüsü yaklaşık 29,5 gündür.',
          isCorrect: true,
          explanation: 'Bir evrenin tekrar aynı evreye gelmesi yaklaşık 29,5 gün (1 ay) sürer.'
        },
        {
          id: 9,
          statement: 'Ay’ın aydınlık ve karanlık bölgesini ayıran sınıra "Terminatör çizgisi" adı verilir.',
          isCorrect: true,
          explanation: 'Ders kitabının 42. sayfasında belirtildiği üzere aydınlık ve karanlık sınırı Terminatör olarak adlandırılır.'
        },
        {
          id: 10,
          statement: 'Ay’da gece ve gündüz sıcaklıkları birbirine çok yakındır, sıcaklık farkı oluşmaz.',
          isCorrect: false,
          explanation: 'Gündüz 125 °C iken gece -174 °C’ye kadar düşer; yaklaşık 300 derecelik dev bir fark vardır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Apollo 11 astronotu Neil Armstrong’un 1969 yılında Ay yüzeyindeki ince toz tabakasında bıraktığı ilk ayak izi fotoğrafı günümüzde hâlâ ilk günkü netliğini korumaktadır. Oysa Dünya’da kumsala basılan bir ayak izi dakikalar veya saatler içinde silinip kaybolur.',
          questionPrompt: 'Ay’daki ayak izlerinin aradan 50 yıldan fazla zaman geçmesine rağmen hiç bozulmadan kalmasının TEMEL SEBEBİ aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ay yüzeyindeki tozların manyetik olarak yapışkan olması' },
            { key: 'B', text: 'Ay’da atmosfer yok denecek kadar ince olduğu için rüzgâr ve yağış gibi hava olaylarının gerçekleşmemesi' },
            { key: 'C', text: 'Ay’ın kendi ekseni etrafında hiç dönme hareketi yapmaması' },
            { key: 'D', text: 'Ay’ın çekim kuvvetinin Dünya’nınkinden 6 kat daha güçlü olması' },
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dünya’da ayak izlerini rüzgâr, dalgalar ve yağmur siler. Ay’da ise atmosfer yok denecek kadar az olduğu için hava akımı (rüzgâr), yağış veya erozyon yoktur; bu sebeple izler bozulmadan kalır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 2,
          context: 'Bir öğrenci Ay’ın evrelerini takvim üzerinde takip etmektedir. 1 Ekim tarihinde gökyüzünde "Yeni Ay" evresini gözlemlemiştir.',
          visualData: {
            type: 'table',
            title: 'Ekim Ayı Gözlem Takvimi',
            tableHeaders: ['Tarih', 'Beklenen Evre', 'Dünya’dan Görünüm Şekli'],
            tableRows: [
              ['1 Ekim', 'Yeni Ay', 'Karanlık (Görünmez)'],
              ['8 Ekim', 'X Evresi', 'Sağ yarısı aydınlık ("D" harfi)'],
              ['15 Ekim', 'Dolunay', 'Tam daire aydınlık'],
              ['22 Ekim', 'Y Evresi', 'Sol yarısı aydınlık ("ters D" harfi)']
            ]
          },
          questionPrompt: 'Takvimdeki bilgilere ve Maarif fen bilimleri modeline göre X ve Y evreleri sırasıyla aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'X: İlk Dördün, Y: Son Dördün' },
            { key: 'B', text: 'X: Son Dördün, Y: İlk Dördün' },
            { key: 'C', text: 'X: Hilal, Y: Şişkin Ay' },
            { key: 'D', text: 'X: Dolunay, Y: Hilal' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Yeni Ay’dan yaklaşık 7 gün sonra İlk Dördün (D harfi) gelir. Dolunay’dan yaklaşık 7 gün sonra (22 Ekim) ise Son Dördün (ters D harfi) gözlemlenir.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 3,
          context: 'Ay yüzeyinde gündüz sıcaklığı 125 °C’a kadar yükselirken, gece sıcaklığı -174 °C’a kadar düşmektedir. Fen bilimleri uzmanları bu durumun Ay zeminindeki kayaç yapısını doğrudan etkilediğini ifade etmektedir.',
          questionPrompt: 'Bu aşırı sıcaklık farkının Ay yüzeyinde meydana getirdiği fiziksel sonuç aşağıdakilerden hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Kayaçların sürekli ısınıp soğuyarak çatlaması, parçalanması ve yüzeyin kalın bir toz tabakasına dönüşmesi' },
            { key: 'B', text: 'Ay yüzeyinde dev volkanik lav göllerinin oluşması' },
            { key: 'C', text: 'Ay’ın kütlesinin her yıl hızla artması' },
            { key: 'D', text: 'Ay’ın kendi ekseni etrafında dönme yönünün sürekli değişmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 33. sayfasında vurgulandığı gibi, yaklaşık 300 derecelik sıcaklık farkı kayaçların genleşip büzülerek parçalanmasını hızlandırır; kaya taşa, taş kuma, kum da toza dönüşür.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 4,
          context: 'Sınıfta yapılan bir etkinlikte Can, Dünya’yı temsil etmekte ve kendi etrafında yavaşça dönmektedir. Ayşe ise Ay’ı temsil etmekte ve Can’ın etrafında çember çizerek dolanmaktadır. Ayşe dolanırken sürekli yüzünü Can’a dönük tutmuş, Can da Ayşe’nin daima yüzünü görmüştür.',
          questionPrompt: 'Bu canlandırma, Ay’ın hareketleri ile ilgili aşağıdaki doğa olaylarından hangisini somutlaştırmaktadır?',
          options: [
            { key: 'A', text: 'Ay’ın Dünya etrafında dolanırken ışık yaymasını' },
            { key: 'B', text: 'Dünya’dan bakıldığında Ay’ın daima aynı yüzünün görünmesini' },
            { key: 'C', text: 'Ay tutulmasının her hafta tekrarlanmasını' },
            { key: 'D', text: 'Ay’ın Dünya’dan uzaklaşmasını' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ay’ın kendi etrafında dönme süresi ile Dünya etrafında dolanma süresi eşit olduğu için yüzü hep Dünya’ya dönüktür. Canlandırmada Ayşe’nin yüzünü hiç çevirmemesi bu eşitliğin sonucunu modeller.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 5,
          context: 'Bir araştırmacı Ay yüzeyindeki kraterleri inceleyen bir makalede şu ifadeleri okumuştur: "Dünya’ya doğru gelen gök taşlarının çoğu kalın atmosfer tabakasında sürtünmeden dolayı ısınıp yanarak toz olurken, Ay’a gelen gök taşları hiçbir engelle karşılaşmadan doğrudan yüzeye çarpar."',
          questionPrompt: 'Metindeki açıklamaya dayanarak aşağıdaki yargılardan hangisine varılabilir?',
          options: [
            { key: 'A', text: 'Dünya’nın kütlesi Ay’dan küçük olduğu için meteor çekmez.' },
            { key: 'B', text: 'Atmosfer, gök taşlarına karşı koruyucu bir kalkan görevi görür; Ay’da atmosfer olmadığı için krater sayısı çok fazladır.' },
            { key: 'C', text: 'Ay’a çarpan gök taşları Ay’ın Güneş etrafındaki dolanma yönünü tersine çevirir.' },
            { key: 'D', text: 'Ay yüzeyindeki kraterler yalnızca rüzgâr aşındırması ile oluşur.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dünya atmosferi meteorları sürtünmeyle yakarak imha eder. Ay’da atmosfer yok denecek kadar ince olduğundan meteorlar doğrudan yüzeye çarpar ve dev kraterler meydana getirir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 6,
          context: 'Türk Bayrağı üzerindeki hilal motifi incelendiğinde hilalin bir yay şeklinde parladığı görülür. Gökyüzünde hilal iki farklı zamanda oluşur: Yeni Ay’dan hemen sonra (ters C) ve Yeni Ay’a girmeden hemen önce (C harfi).',
          questionPrompt: 'Hilal ve Şişkin Ay için aşağıda yapılan nitelendirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Her ikisi de Ay’ın ana evreleridir.' },
            { key: 'B', text: 'Her ikisi de ana evreler arasındaki geçiş dönemlerinde görülen ara evrelerdir.' },
            { key: 'C', text: 'Yılda yalnızca bir kez Ramazan ayında gözlemlenirler.' },
            { key: 'D', text: 'Güneş ile Dünya arasına başka bir gezegen girdiğinde ortaya çıkarlar.' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Yeni Ay, İlk Dördün, Dolunay ve Son Dördün 4 ana evredir. Hilal ve Şişkin Ay ise ana evreler arasında gerçekleşen ara evrelerdir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 7,
          context: 'Ali Kuşçu, 15. yüzyılda Fatih Sultan Mehmet döneminde Ayasofya Medresesinde başmüderrislik yapmış ve Ay’ın haritasını o günün şartlarında olağanüstü bir hassasiyetle çizmiştir. NASA, bu başarısından ötürü Ay’daki bir kratere Ali Kuşçu’nun adını vermiştir.',
          questionPrompt: 'Bu metinden hareketle Türk-İslam bilginleri ile ilgili ulaşılabilecek en doğru yargı hangisidir?',
          options: [
            { key: 'A', text: 'Astronomi bilimine çağını aşan katkılar sunmuş ve uluslararası alanda saygı görmüşlerdir.' },
            { key: 'B', text: 'Yalnızca Dünya haritaları üzerine çalışmalar yapmışlardır.' },
            { key: 'C', text: 'Ay’ın hareketlerinin incelenmesine ilk karşı çıkan bilim insanlarıdır.' },
            { key: 'D', text: 'Teleskobu ilk bulan ve Ay’a bizzat seyahat eden kişilerdir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 53 ve 55. sayfalarında Çağını Aşanlar bölümünde Ali Kuşçu ve Caca Bey gibi bilginlerin astronomi bilimine katkıları ve uluslararası tescili anlatılmaktadır.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 8,
          context: 'Hasan dede torununa: "Oğlum, Ramazan ayının başlangıcı ve bayram tarihleri her yıl miladi takvime göre 10-11 gün geriye gelir. Çünkü hicri takvim Ay’ın Dünya etrafındaki dolanımına göre hesaplanır." demiştir.',
          questionPrompt: 'Dedesinin verdiği bu bilgi Ay’ın hangi periyoduyla doğrudan bağlantılıdır?',
          options: [
            { key: 'A', text: 'Ay’ın kendi ekseni etrafında 24 saatte dönmesiyle' },
            { key: 'B', text: 'Ay’ın tüm evrelerini tamamlamasının yaklaşık 29,5 gün (1 ay) sürmesi ve 12 ayın 354 gün etmesiyle' },
            { key: 'C', text: 'Ay’ın Dünya’ya olan uzaklığının her yıl 1 metre artmasıyla' },
            { key: 'D', text: 'Ay’da kraterlerin her ay yer değiştirmesiyle' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ay’ın evreler döngüsü yaklaşık 29,5 gündür. 12 Ay yılı = 29,5 × 12 ≈ 354 gün yapar. Güneş yılı (365 gün 6 saat) ile arasındaki yaklaşık 11 günlük fark, dinî günlerin her yıl 11 gün erken gelmesine yol açar.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 9,
          context: 'Ay’ın aydınlık yarısı ile karanlık yarısını ayıran çizgiye "Terminatör" adı verilir. Teleskopla incelendiğinde bu sınır çizgisindeki kraterlerin gölgeleri çok daha belirgin görünür.',
          questionPrompt: 'Terminatör çizgisi üzerindeki yüzey detaylarının daha net görülmesinin fiziksel nedeni nedir?',
          options: [
            { key: 'A', text: 'Güneş ışınlarının bu hatta eğik gelerek derin gölgeler oluşturması ve engebeleri belirginleştirmesi' },
            { key: 'B', text: 'O bölgede havanın çok rüzgarlı olması' },
            { key: 'C', text: 'Terminatör çizgisinin Ay’ın en sıcak bölgesi olması' },
            { key: 'D', text: 'O bölgede Dünya’nın çekim kuvvetinin sıfırlanması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Gündüz ile gecenin kesişim hattında (terminatör) ışık teğet geçer; tıpkı gün batımında yerdeki taşların uzun gölge yapması gibi krater duvarları derin gölgeler oluşturarak kabartıları netleştirir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 10,
          context: 'Bir öğrenci 15 Kasım’da gökyüzünde Dolunay evresini görmüştür. Öğrenci bir sonraki Dolunay evresini ne zaman görebileceğini merak etmektedir.',
          questionPrompt: 'Öğrencinin bir sonraki Dolunay evresini gözlemleyebileceği yaklaşık tarih aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: '22 Kasım (yaklaşık 7 gün sonra)' },
            { key: 'B', text: '14-15 Aralık (yaklaşık 29,5 gün sonra)' },
            { key: 'C', text: '15 Kasım ertesi yılı (365 gün sonra)' },
            { key: 'D', text: '18 Kasım (3 gün sonra)' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'İki aynı evre arasındaki süre tam bir evre döngüsüdür ve yaklaşık 29,5 gün (1 ay) sürer. Dolunaydan 7 gün sonra Son Dördün gelir; tekrar Dolunay olması için bir sonraki aya (yaklaşık 14-15 Aralık) ihtiyaç vardır.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 11,
          context: 'Ay’ın yörüngesi tam bir daire değil, hafif basık bir elipstir. Bu nedenle Ay bazen Dünya’ya 356.000 km kadar yaklaşırken, bazen 406.000 km kadar uzaklaşır. Dünya’ya en yakın olduğu konumda Dolunay evresinde olursa Ay gökyüzünde %14 daha büyük ve %30 daha parlak görünür.',
          questionPrompt: 'Halk arasında bu gök olayına verilen ad aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kızıl Gezegen' },
            { key: 'B', text: 'Süper Ay' },
            { key: 'C', text: 'Güneş Tutulması' },
            { key: 'D', text: 'Mavi Gece' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 42. sayfasındaki Bilgi İstasyonu’na göre Ay’ın Dünya’ya en yakın konumda ve dolunay evresinde olmasına "Süper Ay" denir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Fen öğretmeni sınıfta öğrencilere şu soruyu yöneltmiştir: "Eğer Ay’ın kendi ekseni etrafında dönme süresi, Dünya etrafında dolanma süresinden çok daha hızlı olsaydı gökyüzünde ne gibi bir değişiklik fark ederdik?"',
          questionPrompt: 'Öğrencilerden hangisinin verdiği cevap bilimsel olarak doğrudur?',
          options: [
            { key: 'A', text: 'Ahmet: "Ay’ın hep aynı yüzünü görmezdik, zamanla Ay’ın tüm yüzeyini Dünya’dan izleyebilirdik."' },
            { key: 'B', text: 'Burcu: "Ay tamamen karanlıkta kalır, hiç görünmezdi."' },
            { key: 'C', text: 'Cem: "Ay kendi ekseninde daha hızlı dönerse Güneş’in etrafındaki dolanması dururdu."' },
            { key: 'D', text: 'Derya: "Ay’daki kraterler yok olurdu."' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Şu an hep aynı yüzü görmemizin tek sebebi dönme ve dolanma sürelerinin eşit olmasıdır. Dönme süresi daha hızlı olsaydı Ay Dünya etrafında dönerken fırıldak gibi kendi etrafında daha çok dönecek ve arkasındaki yüzeyi de görebilecektik.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 13,
          context: 'Geçmişte yapılan araştırmalarda Ay’da su bulunmadığı düşünülürken, günümüzde Ay’ın kutup bölgelerindeki krater diplerinde derin buz parçacıklarının varlığı kanıtlanmıştır. Bu buzların Güneş ışığı almayan krater çukurlarında korunduğu anlaşılmıştır.',
          questionPrompt: 'Bu bilimsel gelişme aşağıdakilerden hangisinin önemini ortaya koymaktadır?',
          options: [
            { key: 'A', text: 'Ay’da gelecekte kurulabilecek uzay üsleri için yaşam destek kaynağı oluşturabileceğini' },
            { key: 'B', text: 'Ay’ın artık Güneş ışığına ihtiyaç duymadığını' },
            { key: 'C', text: 'Ay’ın Dünya’dan daha sıcak bir gök cismine dönüştüğünü' },
            { key: 'D', text: 'Ay’ın atmosferinin Dünya atmosferinden daha kalın hale geldiğini' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Su buzunun varlığı içme suyu ve oksijen üretimi için hayati öneme sahiptir; Ay’da kalıcı bilimsel istasyonlar ve üsler kurulması için büyük bir imkândır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 14,
          context: 'Ay’ın evrelerini gösteren bir deneyde karanlık odada bir voleybol topu (Ay), bir el feneri (Güneş) ve gözlemci öğrenci (Dünya) yer almaktadır. Öğrenci topu elinde tutarak kendi etrafında döndüğünde topun ışık alan kısmının şeklinin değiştiğini görmektedir.',
          questionPrompt: 'Bu deneyde "bağımsız değişken" (öğrencinin bilerek değiştirdiği durum) nedir?',
          options: [
            { key: 'A', text: 'Ay’ın (topun) Dünya ve Güneş’e göre konumu' },
            { key: 'B', text: 'El fenerinin ışık şiddeti' },
            { key: 'C', text: 'Voleybol topunun kütlesi' },
            { key: 'D', text: 'Odadaki hava sıcaklığı' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Deneyde öğrenci topu kendi etrafında döndürerek konumunu değiştirmektedir; konumu değiştikçe görünen aydınlık alan (bağımlı değişken) değişir.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 15,
          context: 'Türkiye Uzay Ajansı (TUA) tarafından yürütülen Millî Uzay Programı kapsamındaki AYAP projesinde yerli motor ve aviyoniklerle geliştirilen uzay sondasının Ay yörüngesine girip yüzeye ulaşması planlanmıştır.',
          questionPrompt: 'AYAP projesinin başarıyla tamamlanması ülkemize bilimsel olarak ne kazandıracaktır?',
          options: [
            { key: 'A', text: 'Derin uzay teknolojilerinde bağımsızlık ve Ay yüzeyinden doğrudan bilimsel veri elde etme yetkinliği' },
            { key: 'B', text: 'Ay’ın evrelerinin sayısını artırma gücü' },
            { key: 'C', text: 'Dünya’nın yer çekimini tamamen ortadan kaldırma imkânı' },
            { key: 'D', text: 'Güneş’in yüzeyine insan indirme kolaylığı' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 29. sayfasında açıklandığı gibi AYAP, Türkiye’nin uzay teknolojileri kapasitesini geliştirmesini ve Ay araştırmalarında bağımsız bilimsel veri toplamasını amaçlamaktadır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 16,
          context: 'Ay’ın yüzeyinde koyu renkli görünen geniş düzlüklere antik çağlardan beri "Maria (denizler)" denmektedir. Ancak teleskop ve uzay sondalarıyla yapılan incelemelerde buraların su denizi olmadığı anlaşılmıştır.',
          questionPrompt: 'Ay’daki bu koyu renkli geniş düzlüklerin gerçek yapısı nedir?',
          options: [
            { key: 'A', text: 'Milyarlarca yıl önce volkanik lavların soğuyup katılaşmasıyla oluşan geniş bazaltik düzlükler' },
            { key: 'B', text: 'Buzullarla kaplı dev okyanuslar' },
            { key: 'C', text: 'Güneş lekelerinin Ay üzerindeki izdüşümleri' },
            { key: 'D', text: 'Sadece astronotların bıraktığı ayak izi yığınları' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 33. sayfasında koyu renkli bölgelerin geniş düzlükler olduğu belirtilir. Bunlar jeolojik geçmişte lavların çukurları doldurmasıyla oluşmuş koyu renkli bazalt düzlükleridir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 17,
          context: 'Bir gök gözlem kulübü üyesi arka arkaya dört hafta boyunca çarşamba geceleri Ay fotoğrafları çekmiştir. 1. hafta Yeni Ay evresine denk gelmiş ve gökyüzü karanlık görünmüştür.',
          questionPrompt: 'Bu üyenin 2. ve 3. hafta çekeceği fotoğraflarda sırasıyla hangi ana evreler yer alır?',
          options: [
            { key: 'A', text: '2. Hafta: İlk Dördün - 3. Hafta: Dolunay' },
            { key: 'B', text: '2. Hafta: Dolunay - 3. Hafta: Son Dördün' },
            { key: 'C', text: '2. Hafta: Son Dördün - 3. Hafta: İlk Dördün' },
            { key: 'D', text: '2. Hafta: Şişkin Ay - 3. Hafta: Hilal' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Sıralama: 1. hafta Yeni Ay -> 2. hafta (7 gün sonra) İlk Dördün -> 3. hafta (14 gün sonra) Dolunay -> 4. hafta Son Dördün şeklindedir.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 18,
          context: 'Astronotların Ay yüzeyinde rahatça konuşabilmeleri için kasklarının içinde telsiz mikrofon ve kulaklık sistemi bulunmalıdır. Yan yana dursalar dahi kasklarını çıkarıp bağırsalar birbirlerini duyamazlar.',
          questionPrompt: 'Bu durumun temel sebebi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ay’da atmosfer (hava) olmadığı için ses dalgalarının yayılamaması' },
            { key: 'B', text: 'Ay’daki yer çekiminin sesi emmesi' },
            { key: 'C', text: 'Güneş ışığının ses dalgalarını yok etmesi' },
            { key: 'D', text: 'Ay yüzeyindeki tozların ses üretmesi' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ses mekanik bir dalgadır ve yayılmak için maddesel bir ortama (hava, gaz vb.) ihtiyaç duyar. Ay’da atmosfer yok denecek kadar az olduğu için ses boşlukta iletilemez.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 19,
          context: 'Son Dördün evresinde olan Ay ile ilgili üç öğrenci şu bilgileri paylaşmıştır:\n• Kerem: "Dolunaydan yaklaşık 1 hafta sonra görülür."\n• Aslı: "Dünya’dan bakıldığında sol yarısı aydınlık, yani ters D harfi gibidir."\n• Mert: "Bu evreden 1 hafta sonra Dolunay tekrar oluşur."',
          questionPrompt: 'Buna göre hangi öğrencilerin ifadeleri doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız Kerem' },
            { key: 'B', text: 'Kerem ve Aslı' },
            { key: 'C', text: 'Aslı ve Mert' },
            { key: 'D', text: 'Kerem, Aslı ve Mert' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Kerem ve Aslı doğrudur. Mert ise hatalıdır; Son Dördün’den 1 hafta sonra Dolunay değil, Yeni Ay evresi gelir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 20,
          context: 'Kırşehir’de bulunan Caca Bey Medresesi, 13. yüzyılda Selçuklu döneminde inşa edilmiş dünyanın ilk gök bilimi (astronomi) okullarından biridir. Medresenin tepe kubbesinde bir açıklık ve tam altında su dolu bir gözlem havuzu yer almaktaydı. Bilginler gece vakti suya yansıyan Ay ve yıldızları inceleyerek gözlem yapmışlardır.',
          questionPrompt: 'Caca Bey Medresesi’nin bu mimari tasarımı Türk-İslam medeniyetinin bilime bakış açısıyla ilgili neyi kanıtlar?',
          options: [
            { key: 'A', text: 'Gök cisimlerini doğrudan incelemek için özgün gözlem teknikleri ve rasathane mimarileri geliştirdiklerini' },
            { key: 'B', text: 'Sadece suyun kaldırma kuvvetini araştırdıklarını' },
            { key: 'C', text: 'Ay’ın hareketlerini incelemeyi yasakladıklarını' },
            { key: 'D', text: 'Gök bilimi çalışmalarını yalnızca gündüzleri yaptıklarını' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 55. sayfasında Caca Bey Medresesi’nin su dolu kuyu ve kubbe açıklığı ile tasarlanmış öncü bir rasathane olduğu vurgulanmaktadır.',
          skillTag: 'Bilimsel Çıkarım'
        }
      ]
    },
    {
      id: 'unit1-sub3',
      title: 'Dünya’mız ve Gökyüzündeki Komşularımız (Hareketler ve Boyutlar)',
      shortTitle: '1.3 Hareketler & Boyut Kıyası',
      badge: 'Sayfa 44-57',
      pageRange: '44 - 57',
      concepts: ['Hacim (cm³, m³)', 'Karpuz-elma-erik modeli', 'Dönme süresi', 'Dolanma süresi', 'Saat yönünün tersi', 'Gece-gündüz', 'Yıl ve mevsimler', 'Uluğ Bey', 'Biruni', 'Fergani'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Güneş, Dünya ve Ay’ın Hacimsel Büyüklük Kıyaslaması',
          paragraphs: [
            'Maddelerin ve cisimlerin uzayda (boşlukta) kapladıkları yere "Hacim" denir. Hacim birimleri santimetreküp (cm³) ve metreküp (m³) gibi birimlerle ifade edilir.',
            'Gökyüzündeki komşularımız arasında hacimsel büyüklük sıralaması: Güneş > Dünya > Ay şeklindedir.',
            'Bu büyüklük ilişkisini günlük yaşam modelleriyle somutlaştırmak için:',
            '• Güneş: Karpuz veya büyük bir pilates topu',
            '• Dünya: Elma veya ceviz',
            '• Ay: Küçük bir erik veya leblebi / mercimek tanesi olarak modellenebilir.'
          ],
          keyPoints: [
            'Büyüklük sıralaması: Güneş > Dünya > Ay',
            'Güneş’in içine yaklaşık 1 milyon 300 bin tane Dünya sığabilir.',
            'Dünya’nın içine ise yaklaşık 64 tane Ay sığabilir.'
          ],
          table: {
            headers: ['Gök Cismi', 'Model Meyve / Nesne', 'Kendi Ekseni Dönme', 'Dolanma Hareketi & Süresi'],
            rows: [
              ['Güneş', 'Karpuz / Pilates Topu', 'Batıdan doğuya (~25-35 gün)', 'Samanyolu merkezi etrafında dolanır'],
              ['Dünya', 'Elma / Ceviz', 'Batıdan doğuya (24 saat = 1 gün)', 'Güneş etrafında (365 gün 6 saat = 1 yıl)'],
              ['Ay', 'Erik / Mercimek', 'Batıdan doğuya (~27 gün 8 saat)', 'Dünya etrafında (~27 gün 8 saat) ve Güneş etrafında (365 gün 6 saat)']
            ]
          }
        },
        {
          heading: 'Dönme ve Dolanma Hareketleri & Yönleri',
          paragraphs: [
            'Güneş, Dünya ve Ay’ın tüm dönme ve dolanma hareketleri SAAT YÖNÜNÜN TERSİNE (batıdan doğuya doğru) gerçekleşir.',
            '1. Dünya’nın Hareketleri: Kendi ekseni etrafında döner (24 saatte tamamlanır; gece ve gündüz oluşur). Güneş etrafında dolanır (365 gün 6 saatte tamamlanır; 1 yıl oluşur, mevsimler meydana gelir).',
            '2. Ay’ın Hareketleri: Kendi ekseni etrafında döner (~27 gün 8 saat). Dünya etrafında dolanır (~27 gün 8 saat). Dünya ile birlikte Güneş etrafında dolanır (365 gün 6 saatte tamamlar).',
            '3. Güneş’in Hareketi: Kendi ekseni etrafında batıdan doğuya döner.'
          ],
          keyPoints: [
            'Her üç gök cisminin dönme ve dolanma yönü AYNIDIR: Saat yönünün tersi (Batıdan Doğuya).',
            'Dünya’nın dönme süresi: 24 saat (1 gün).',
            'Dünya’nın Güneş etrafında dolanma süresi: 365 gün 6 saat (1 yıl).',
            'Ay’ın dönme ve Dünya etrafında dolanma süresi: ~27 gün 8 saat.'
          ],
          scientistBox: {
            name: 'Uluğ Bey (1394 - 1449)',
            role: 'Büyük Türk-İslam Astronom ve Matematikçi, Hükümdar',
            contribution: 'Semerkant’ta devasa bir rasathane kurmuş, "Zîc-i Uluğ Bey" adlı yıldız kataloğunu yazmıştır. Bir yılı 365 gün 6 saat 10 dakika 8 saniye olarak hesaplamıştır. Bu değer günümüz modern astronomi ölçümlerine neredeyse birebir uyuşmaktadır.'
          }
        },
        {
          heading: 'Biruni ve Fergani’nin Astronomi Mirası',
          paragraphs: [
            'Fergani, Güneş’in sabit olmadığını ve kendi ekseni etrafında batıdan doğuya doğru döndüğünü Batı dünyasından asırlar önce ileri süren büyük bir bilgindir.',
            'Biruni ise astronomi ve trigonometri alanındaki derin çalışmalarıyla Dünya’nın yarıçapını ve çevresini gerçeğe çok yakın bir hassasiyetle hesaplamış, Dünya’nın döndüğünü savunmuştur.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Güneş, Dünya ve Ay arasında hacimsel olarak en büyük olanı Güneş, en küçük olanı ise Ay’dır.',
          isCorrect: true,
          explanation: 'Hacimsel büyüklük sıralaması Güneş > Dünya > Ay şeklindedir.'
        },
        {
          id: 2,
          statement: 'Dünya ve Ay’ın Güneş etrafındaki dolanma yönleri birbirine zıttır.',
          isCorrect: false,
          explanation: 'Güneş, Dünya ve Ay’ın tüm dönme ve dolanma hareketleri aynı yöndedir: Saat yönünün tersine.'
        },
        {
          id: 3,
          statement: 'Dünya’nın kendi ekseni etrafındaki dönme süresi 24 saat olup bu süreye "bir gün" denir.',
          isCorrect: true,
          explanation: 'Dünya kendi etrafındaki 1 tam dönüşü 24 saatte tamamlar ve gece-gündüz ardalanması gerçekleşir.'
        },
        {
          id: 4,
          statement: 'Dünya’nın Güneş etrafındaki dolanma süresi ile kendi ekseni etrafındaki dönme süresi birbirine eşittir.',
          isCorrect: false,
          explanation: 'Dönme süresi 24 saat, dolanma süresi ise 365 gün 6 saattir; süreler kesinlikle eşit değildir.'
        },
        {
          id: 5,
          statement: 'Ay, Dünya etrafında bir tam tur dolanırken aynı zamanda Dünya ile birlikte Güneş etrafında da dolanır.',
          isCorrect: true,
          explanation: 'Ay, Dünya’nın uydusu olarak Dünya ile birlikte Güneş etrafında 365 gün 6 saatte dolanır.'
        },
        {
          id: 6,
          statement: 'Güneş, Dünya ve Ay’ın büyüklükleri karpuz, elma ve erik modelleri ile temsil edilebilir.',
          isCorrect: true,
          explanation: 'Karpuz (Güneş), elma (Dünya) ve erik (Ay) hacim oranlarını somutlaştırmak için ideal bir modeldir.'
        },
        {
          id: 7,
          statement: 'Güneş kendi ekseni etrafında saat ibrelerinin dönme yönünde döner.',
          isCorrect: false,
          explanation: 'Güneş kendi ekseni etrafında batıdan doğuya, yani saat yönünün TERSİNE döner.'
        },
        {
          id: 8,
          statement: 'Uluğ Bey, bir yılın süresini 365 gün 6 saat 10 dakika olarak günümüz hesaplarına çok yakın hesaplamıştır.',
          isCorrect: true,
          explanation: 'Semerkant Rasathanesi’nde Zîc-i Uluğ Bey eserinde bir yılı olağanüstü doğrulukla hesaplamıştır.'
        },
        {
          id: 9,
          statement: 'Fergani, Güneş’in kendi ekseni etrafında batıdan doğuya döndüğünü ilk ileri süren bilginlerdendir.',
          isCorrect: true,
          explanation: 'Ders kitabının 55. sayfasında Fergani’nin Güneş’in batıdan doğuya döndüğünü ileri sürdüğü belirtilmektedir.'
        },
        {
          id: 10,
          statement: 'Dünya bir kez kendi etrafında dönene kadar Ay 27 kez döner.',
          isCorrect: false,
          explanation: 'Tam tersine, Ay 1 kez dönene kadar (~27 gün) Dünya kendi ekseninde 27 kez döner.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          context: 'Fen bilimleri öğretmeni sınıfa üç farklı meyve getirmiştir: Büyük bir Adana karpuzu, orta boy bir Amasya elması ve küçük bir mürdüm eriği. Öğretmen sınıftan Güneş, Dünya ve Ay’ın hacimsel büyüklüklerini bu meyvelerle eşleştirmelerini istemiştir.',
          questionPrompt: 'Doğru eşleştirme ve gerekçesi aşağıdakilerden hangisinde eksiksiz verilmiştir?',
          options: [
            { key: 'A', text: 'Karpuz: Ay, Elma: Dünya, Erik: Güneş' },
            { key: 'B', text: 'Karpuz: Güneş, Elma: Dünya, Erik: Ay; çünkü uzayda kapladıkları hacim sıralaması Güneş > Dünya > Ay şeklindedir.' },
            { key: 'C', text: 'Karpuz: Dünya, Elma: Güneş, Erik: Ay' },
            { key: 'D', text: 'Karpuz: Güneş, Elma: Ay, Erik: Dünya' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Güneş sistemimizdeki komşularımız arasında hacim olarak en büyük Güneş (karpuz), ardından Dünya (elma), en küçük ise uydumuz olan Ay’dır (erik).',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 2,
          context: 'Aşağıdaki tabloda Güneş, Dünya ve Ay’ın kendi eksenleri etrafındaki dönme yönleri ve dolanma hareketlerinin yönleri listelenmiştir.',
          visualData: {
            type: 'table',
            title: 'Hareket Yönleri Karşılaştırması',
            tableHeaders: ['Gök Cismi', 'Dönme Yönü', 'Dolanma Yönü'],
            tableRows: [
              ['Güneş', 'Saat yönünün tersi (Batıdan doğuya)', '—'],
              ['Dünya', 'Saat yönünün tersi (Batıdan doğuya)', 'Saat yönünün tersi (Güneş etrafında)'],
              ['Ay', 'Saat yönünün tersi (Batıdan doğuya)', 'Saat yönünün tersi (Dünya ve Güneş etrafında)']
            ]
          },
          questionPrompt: 'Tablodaki verileri analiz eden bir öğrencinin yapacağı en kapsamlı genelleme hangisidir?',
          options: [
            { key: 'A', text: 'Güneş, Dünya ve Ay’ın gerek dönme gerekse dolanma hareketlerinin tümü aynı yönde, saat yönünün tersinedir.' },
            { key: 'B', text: 'Yalnızca Dünya saat yönünde hareket etmektedir.' },
            { key: 'C', text: 'Ay’ın dönme yönü ile Güneş’in dönme yönü birbirine zıttır.' },
            { key: 'D', text: 'Dünya dolanma hareketi yaparken Ay sadece dönme hareketi yapar.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Güneş, Dünya ve Ay sisteminde istisnasız tüm dönme ve dolanma hareketleri batıdan doğuya, yani saatin dönme yönünün tersine gerçekleşir.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 3,
          context: 'Uluğ Bey, Semerkant’ta kurduğu rasathanede Güneş ve yıldızların konumlarını hassas aletlerle ölçerek 1 yılın süresini 365 gün 6 saat 10 dakika 8 saniye olarak hesaplamıştır. Günümüz modern atomik saat ve uydu ölçümlerine göre ise bir yıl yaklaşık 365 gün 6 saat 9 dakika 9 saniyedir.',
          questionPrompt: 'Bu veriler kıyaslandığında aşağıdaki sonuçlardan hangisine ulaşılır?',
          options: [
            { key: 'A', text: 'Uluğ Bey’in yaptığı hesaplama günümüz teknolojisinden yüzlerce yıl önce olağanüstü bir doğrulukla gerçekleşmiştir.' },
            { key: 'B', text: 'Eski dönemlerde Dünya Güneş etrafında daha hızlı dönmekteydi.' },
            { key: 'C', text: 'Uluğ Bey sadece Dünya’nın kendi etrafında dönme süresini hesaplamıştır.' },
            { key: 'D', text: 'Modern teknoloji Uluğ Bey’in hesaplamalarını tamamen geçersiz kılmıştır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Uluğ Bey’in 600 yıl önce yaptığı hesap ile bugünkü modern ölçümler arasındaki fark yalnızca 1 dakika civarındadır. Bu durum onun matematik ve astronomi dehasını kanıtlar.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 4,
          context: 'Dünya kendi ekseni etrafında 1 tam tur döndüğünde 24 saat geçer ve buna "1 gün" deriz. Ay ise kendi ekseni etrafındaki bir tam turunu yaklaşık 27 gün 8 saatte tamamlar.',
          questionPrompt: 'Buna göre Dünya bir tam tur dönene kadar geçen sürede Ay’ın hareketi ile ilgili ne söylenebilir?',
          options: [
            { key: 'A', text: 'Ay kendi ekseni etrafındaki dönüşünün sadece yaklaşık 27’de 1’lik kısmını tamamlayabilir.' },
            { key: 'B', text: 'Ay kendi ekseni etrafında 27 tam tur atar.' },
            { key: 'C', text: 'Ay Güneş etrafında tam bir dolanım yapar.' },
            { key: 'D', text: 'Ay’ın tüm evreleri 24 saatte tamamlanır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ay’ın bir tam dönüşü 27 gün sürdüğüne göre, Dünya’nın 1 gününde (24 saatte) Ay kendi ekseni etrafındaki dönüşünün ancak yaklaşık 27’de 1’ini dönebilir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 5,
          context: 'Bir bilim merkezi sergisinde üç boyutlu hareketli Güneş-Dünya-Ay modeli bulunmaktadır. Bir ziyaretçi çarkı çevirdiğinde Dünya’nın Güneş etrafında bir tam tur dolandığını görmüştür.',
          questionPrompt: 'Dünya Güneş etrafında bu 1 tam turu tamamlarken aynı süreçte Ay kaç kez Dünya etrafında dolanma hareketi yapmış olur?',
          options: [
            { key: 'A', text: 'Yalnızca 1 kez' },
            { key: 'B', text: 'Yaklaşık 12-13 kez' },
            { key: 'C', text: '365 kez' },
            { key: 'D', text: 'Hiç dolanmaz' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Dünya’nın Güneş etrafındaki 1 yılı = 365 gündür. Ay’ın Dünya etrafındaki 1 dolanımı ise yaklaşık 27,3 gündür (evre döngüsü 29,5 gün). 365 / 29,5 ≈ 12-13 kez dolanmış olur. Bu yüzden bir yılda 12 ay vardır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 6,
          context: 'Öğretmen tahtaya Güneş, Dünya ve Ay’ın hareketlerini gösteren şu diyagramı çizmiştir:\nI. Hareket: Dünya’nın kendi ekseni etrafında dönmesi\nII. Hareket: Dünya’nın Güneş etrafında dolanması\nIII. Hareket: Ay’ın Dünya etrafında dolanması\nIV. Hareket: Ay’ın kendi ekseni etrafında dönmesi',
          questionPrompt: 'Bu hareketlerden hangilerinin süresi birbirine neredeyse EŞİTTİR?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'III ve IV' },
            { key: 'C', text: 'I ve III' },
            { key: 'D', text: 'II ve IV' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ay’ın Dünya etrafında dolanma süresi (III) ile Ay’ın kendi ekseni etrafında dönme süresi (IV) birbirine neredeyse eşittir (~27 gün 8 saat). Bu eşitlik nedeniyle Dünya’dan hep aynı yüzü görünür.',
          skillTag: 'Tablo Yorumlama'
        },
        {
          id: 7,
          context: 'Bir öğrenci Güneş, Dünya ve Ay modelinde kullanılmak üzere marketten üç farklı büyüklükte bilye satın almıştır. Sarı bilyenin çapı 30 cm, mavi bilyenin çapı 3 cm ve gri bilyenin çapı 0,8 cm’dir.',
          questionPrompt: 'Öğrencinin bu bilyelerle hazırlayacağı doğru eşleştirme hangisidir?',
          options: [
            { key: 'A', text: 'Sarı: Güneş, Mavi: Dünya, Gri: Ay' },
            { key: 'B', text: 'Sarı: Dünya, Mavi: Güneş, Gri: Ay' },
            { key: 'C', text: 'Sarı: Güneş, Mavi: Ay, Gri: Dünya' },
            { key: 'D', text: 'Sarı: Ay, Mavi: Dünya, Gri: Güneş' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Çapı en büyük olan sarı bilye (30 cm) Güneş, orta boy mavi bilye (3 cm) Dünya, en küçük gri bilye (0,8 cm) ise Ay olmalıdır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 8,
          context: 'Ali Kuşçu’nun kaleme aldığı "Fethiye" adlı astronomi eseri, Fatih Sultan Mehmet’e sunulmuş ve Osmanlı medreselerinde yüzyıllar boyunca ders kitabı olarak okutulmuştur. Kitapta gezegenlerin hareketleri ve gök küreleri matematiksel kurallarla açıklanmıştır.',
          questionPrompt: 'Bu tarihsel olay Maarif fen anlayışı doğrultusunda değerlendirildiğinde neye kanıttır?',
          options: [
            { key: 'A', text: 'Bilimsel gelişmelerin toplumların eğitim ve kültür mirasındaki sürekliliğine' },
            { key: 'B', text: 'Osmanlı’da astronomi çalışmalarının yapılmadığına' },
            { key: 'C', text: 'Güneş’in Dünya etrafında döndüğünün savunulduğuna' },
            { key: 'D', text: 'Fethiye kitabının sadece şiirlerden oluştuğuna' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 53. sayfasında Ali Kuşçu’nun "Fethiye" kitabının uzun yıllar başvuru kitabı olarak okutulduğu ve astronomi mirasının temel taşlarından biri olduğu ifade edilmektedir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 9,
          context: 'Dünya Güneş’in etrafında dolanırken yörüngesi üzerinde saat yönünün tersine ilerler. Aynı anda Ay da Dünya’nın etrafında saat yönünün tersine dolanarak Dünya ile birlikte Güneş etrafındaki bu büyük yolculuğu tamamlar.',
          questionPrompt: 'Ay’ın Güneş etrafındaki bir tam dolanımını tamamlama süresi ne kadardır?',
          options: [
            { key: 'A', text: '24 saat' },
            { key: 'B', text: '27 gün 8 saat' },
            { key: 'C', text: '365 gün 6 saat (Dünya ile birlikte)' },
            { key: 'D', text: '12 saat' }
          ],
          correctAnswer: 'C',
          detailedExplanation: 'Ay Dünya’ya bağlı bir uydu olduğundan, Dünya Güneş etrafındaki turunu 365 gün 6 saatte tamamlarken Ay da Dünya ile birlikte bu sürede Güneş etrafında dolanmış olur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 10,
          context: 'Evimizin salonu sabah saatlerinde Güneş alırken, öğleden sonra diğer odaların Güneş alması günlük hayatta sıkça karşılaştığımız bir durumdur.',
          questionPrompt: 'Güneş’in gün içinde gökyüzünde yer değiştiriyor gibi görünmesinin asıl nedeni aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Güneş’in Dünya etrafında hızlıca dönmesi' },
            { key: 'B', text: 'Dünya’nın kendi ekseni etrafında batıdan doğuya doğru dönme hareketi yapması' },
            { key: 'C', text: 'Ay’ın Güneş’in önünü kapatması' },
            { key: 'D', text: 'Güneş lekelerinin sabahları kaybolması' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Ders kitabının 46 ve 54. sayfalarında Bilim Güncesi’nde vurgulandığı gibi odaların farklı saatlerde güneş alması Dünya’nın 24 saatlik kendi ekseni etrafındaki dönme hareketinin bir sonucudur.',
          skillTag: 'Günlük Yaşam Bağı'
        },
        {
          id: 11,
          context: 'Bir araştırmacı Güneş, Dünya ve Ay’ın hareketlerini simüle eden bir bilgisayar programı hazırlamıştır. Programda saat ibresinin dönme yönü "+1", saat ibresinin tersi ise "-1" olarak kodlanmıştır.',
          questionPrompt: 'Programda Güneş’in dönmesi, Dünya’nın dönmesi ve Ay’ın dolanması için hangi kodlar girilmelidir?',
          options: [
            { key: 'A', text: 'Güneş: +1, Dünya: -1, Ay: +1' },
            { key: 'B', text: 'Güneş: -1, Dünya: -1, Ay: -1' },
            { key: 'C', text: 'Güneş: +1, Dünya: +1, Ay: +1' },
            { key: 'D', text: 'Güneş: -1, Dünya: +1, Ay: -1' }
          ],
          correctAnswer: 'B',
          detailedExplanation: 'Her üç gök cisminin tüm hareketleri saat yönünün tersinedir. Bu yüzden hepsi "-1" değeri almalıdır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 12,
          context: 'Biruni, 11. yüzyılda yazdığı eserlerinde Güneş’in gökyüzündeki konumlarından mevsimlerin başlangıç tarihlerini hassas şekilde belirlemiş ve Dünya’nın çapını trigonometrik yöntemlerle hesaplamıştır.',
          questionPrompt: 'Biruni’nin çalışmaları günümüz fen bilimlerinde hangi alanların temelini oluşturmuştur?',
          options: [
            { key: 'A', text: 'Astronomi ve Jeodezi (Yeryüzü ölçümü)' },
            { key: 'B', text: 'Mikrobiyoloji ve aşı üretimi' },
            { key: 'C', text: 'Dinamometre yay üretimi' },
            { key: 'D', text: 'Hücre içi organel sınıflandırması' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Ders kitabının 55. sayfasında Biruni’nin mevsimlerin başlangıcı, astronomik aletler ve Dünya çapının ölçümü üzerine çalıştığı belirtilir.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 13,
          context: 'Uzayda bir cismin kapladığı yere hacim denir. Öğrenciler su dolu dereceli silindire küçük bir erik bıraktıklarında su seviyesinin 15 mL, orta boy bir elma bıraktıklarında ise 180 mL yükseldiğini gözlemlemiştir.',
          questionPrompt: 'Bu deney hacim kavramı ve Dünya-Ay ilişkisi bakımından neyi gösterir?',
          options: [
            { key: 'A', text: 'Elmanın (Dünya) hacminin erikten (Ay) çok daha büyük olduğunu ve uzayda daha fazla yer kapladığını' },
            { key: 'B', text: 'Ay’ın Dünya’dan daha ağır olduğunu' },
            { key: 'C', text: 'Dünya ve Ay’ın hacimlerinin birbirine eşit olduğunu' },
            { key: 'D', text: 'Suyun kaldırma kuvvetinin erikte daha fazla olduğunu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Taşan sıvı hacmi cismin hacmini verir. Elmanın hacmi erikten çok daha fazladır; bu da Dünya’nın hacminin Ay’dan yaklaşık 64 kat büyük olduğunu somutlaştırır.',
          skillTag: 'Deney & Değişken Analizi'
        },
        {
          id: 14,
          context: 'Güneş, Dünya ve Ay modelleri hazırlanırken ölçekleme hatası yapan Mert, Güneş’i tenis topu, Dünya’yı futbol topu, Ay’ı ise basketbol topu olarak çizmiştir.',
          questionPrompt: 'Mert’in modelinin bilimsel olarak doğru olması için nesneleri hangi sırayla eşleştirmesi gerekir?',
          options: [
            { key: 'A', text: 'Güneş: Basketbol topu, Dünya: Futbol topu, Ay: Tenis topu' },
            { key: 'B', text: 'Güneş: Futbol topu, Dünya: Basketbol topu, Ay: Tenis topu' },
            { key: 'C', text: 'Güneş: Tenis topu, Dünya: Basketbol topu, Ay: Futbol topu' },
            { key: 'D', text: 'Güneş: Tenis topu, Dünya: Futbol topu, Ay: Basketbol topu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Büyüklük sırası Güneş > Dünya > Ay olduğundan, mevcut nesneler içinde en büyüğü olan basketbol topu Güneş, futbol topu Dünya, en küçüğü olan tenis topu Ay olmalıdır.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 15,
          context: 'Dünya’nın Güneş etrafında dolanması sırasında mevsimler meydana gelirken, Dünya’nın kendi ekseni etrafında dönmesi sonucunda gece ve gündüz ardalanması gerçekleşir.',
          questionPrompt: 'Buna göre Dünya’nın kendi ekseni etrafında dönme hareketi aniden dursaydı ne gerçekleşirdi?',
          options: [
            { key: 'A', text: 'Güneş’e bakan taraf sürekli gündüz, arkada kalan taraf ise sürekli geceyi yaşardı.' },
            { key: 'B', text: 'Mevsimler tamamen ortadan kalkardı.' },
            { key: 'C', text: 'Ay kendi ekseninde dönmeyi bırakırdı.' },
            { key: 'D', text: 'Dünya Güneş’in içine düşerdi.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Gece ve gündüzün ardalanması dönme hareketiyle sağlanır. Dönme durursa Güneş’i gören yüzey kavurucu sürekli gündüz, diğer yüzey dondurucu sürekli gece olurdu.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 16,
          context: 'Aşağıda üç gök cisminin dönme yönleri verilmiştir:\n• K: Batıdan Doğuya\n• L: Saatin dönme yönünün tersi\n• M: Soldan Sağa',
          questionPrompt: 'Bu tanımlamalar dikkate alındığında K, L ve M ifadeleri için ne söylenebilir?',
          options: [
            { key: 'A', text: 'Üçü de temelde aynı dönme yönünü farklı kelimelerle ifade etmektedir.' },
            { key: 'B', text: 'K ve L birbirine zıt yönlerdir.' },
            { key: 'C', text: 'Yalnızca M ifadesi bilimseldir.' },
            { key: 'D', text: 'L ifadesi sadece Ay için geçerlidir.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Batıdan doğuya, saat yönünün tersi ve karşıdan bakıldığında soldan sağa yön tanımları astronomide aynı dönme hareketini ifade eden eşdeğer betimlemelerdir.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 17,
          context: 'Dünya ile Ay arasındaki çekim kuvveti nedeniyle Dünya’daki okyanuslarda suların yükselip alçalması (gelgit/medcezir) olayı meydana gelir.',
          questionPrompt: 'Bu doğa olayı Güneş, Dünya ve Ay sistemi hakkında neyi kanıtlar?',
          options: [
            { key: 'A', text: 'Gök cisimlerinin birbirlerine kütle çekim kuvveti uyguladıklarını' },
            { key: 'B', text: 'Ay’da su bulunduğunu' },
            { key: 'C', text: 'Dünya’nın Ay’dan daha hızlı soğuduğunu' },
            { key: 'D', text: 'Güneş’in Dünya’ya Ay’dan daha yakın olduğunu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Gelgit olayı, Ay ve Güneş’in Dünya üzerindeki sulara uyguladığı kütle çekim kuvvetinin doğrudan bir sonucudur.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 18,
          context: 'Öğrenciler bir sınıfta 1 yıllık zamanı takvim yapraklarıyla temsil etmişlerdir. Takvim yapraklarının her biri Dünya’nın kendi ekseni etrafındaki 1 tam dönüşünü simgelemektedir.',
          questionPrompt: 'Takvimde toplam kaç yaprak yer almalıdır?',
          options: [
            { key: 'A', text: '24' },
            { key: 'B', text: '29' },
            { key: 'C', text: '365' },
            { key: 'D', text: '12' }
          ],
          correctAnswer: 'C',
          detailedExplanation: 'Dünya 1 yılda kendi ekseni etrafında yaklaşık 365 kez döner; bu nedenle 1 yılda 365 takvim yaprağı (gün) bulunur.',
          skillTag: 'Mantık Muhakeme'
        },
        {
          id: 19,
          context: 'Güneş, Dünya ve Ay’ın birbirlerine göre hareketlerini inceleyen bir öğrenci şu notu almıştır: "Ay, Dünya’nın etrafında 1 tur dolandığında Dünya da uzayda aynı yerde durmaz, Güneş etrafında belirli bir yay çizerek ilerler."',
          questionPrompt: 'Bu not aşağıdaki kavramlardan hangisinin önemini açıklar?',
          options: [
            { key: 'A', text: 'Ay’ın hem Dünya hem de Güneş etrafında eş zamanlı dolanma hareketi yaptığını' },
            { key: 'B', text: 'Güneş’in Dünya etrafında döndüğünü' },
            { key: 'C', text: 'Ay’ın evrelerinin rastgele oluştuğunu' },
            { key: 'D', text: 'Dünya’nın uzayda tamamen hareketsiz olduğunu' }
          ],
          correctAnswer: 'A',
          detailedExplanation: 'Dünya hareket ettiği için Ay da onunla birlikte sürüklenerek Güneş çevresinde dolanır. Dolayısıyla Ay hem Dünya’nın hem de Güneş’in etrafında dolanmaktadır.',
          skillTag: 'Bilimsel Çıkarım'
        },
        {
          id: 20,
          context: 'Maarif fen bilimleri dersinde "Performans İstasyonu: Model Geliştiriyorum" etkinliğinde bir grup öğrenci tel, karton ve küreler kullanarak üç boyutlu dönen bir mekanizma yapmıştır. Düzeneğin kolu 1 tam tur çevrildiğinde Dünya kendi etrafında 365 kez dönerken, Ay da Dünya etrafında yaklaşık 12 tur atmaktadır.',
          questionPrompt: 'Bu model ile ilgili jürinin yapacağı en doğru değerlendirme hangisidir?',
          options: [
            { key: 'A', text: 'Model gerçeğe uygun oran ve hareket süreleriyle tasarlanmış, mühendislik döngüsünü başarıyla yansıtmaktadır.' },
            { key: 'B', text: 'Model hatalıdır çünkü Ay Dünya etrafında yılda 365 kez dönmelidir.' },
            { key: 'C', text: 'Dünya’nın Güneş etrafında dolanmadığı varsayılmıştır.' },
            { key: 'D', text: 'Ay’ın kendi ekseni etrafında dönme süresi dikkate alınmamalıdır.' }
          ],
          correctAnswer: 'A',
          detailedExplanation: '1 yılda 365 gün (Dünya dönüşü) ve yaklaşık 12 Ay döngüsü gerçekleşir. Öğrencilerin dişli çark mekanizması bu orantıyı kusursuz yansıtmaktadır.',
          skillTag: 'Deney & Değişken Analizi'
        }
      ]
    }
  ]
};
