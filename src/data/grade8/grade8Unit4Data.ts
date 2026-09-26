import { Unit } from '../../types/curriculum';

export const grade8Unit4Data: Unit = {
  id: 'g8-unit-4',
  unitNumber: 4,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Madde ve Endüstri',
  unitEndPageRange: 's. 183-193',
  colorTheme: {
    primary: 'from-cyan-600 to-blue-700',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-950/40',
    accent: 'text-cyan-400',
    text: 'text-cyan-200'
  },
  subTopics: [
    {
      id: 'g8-u4-sub1',
      title: '1. Bölüm: Periyodik Sistem',
      shortTitle: 'Periyodik Sistem',
      badge: 'Sayfa 128-138',
      pageRange: '128 - 138',
      concepts: ['Periyodik Tablo Tarihçesi', 'Johann Döbereiner (Triadlar)', 'John Newlands (Oktavlar)', 'Dmitri Mendeleyev', 'Henry Moseley (Proton Sayısı)', 'Glenn Seaborg', 'Periyotlar (7 Adet)', 'Gruplar (18 Adet)', 'Metaller, Ametaller, Yarı Metaller, Soygazlar'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Periyodik Sistemin Tarihsel Gelişimi ve Düzeni',
          paragraphs: [
            'Elementlerin sınıflandırılmasında önemli bilim insanları: 1. Johann Döbereiner (1829): Benzer özellik gösteren elementleri üçlü gruplar (triadlar) halinde düzenledi. 2. John Newlands (1864): Elementleri artan atom kütlelerine göre sıraladı ve özelliklerin 8. elementte bir tekrar ettiğini müzik notalarına benzeterek (Oktavlar kuralı) açıkladı. 3. Alexandre de Chancourtois: Sarmal silindirik çizelge hazırladı. 4. Dmitri Mendeleyev ve Lothar Meyer: Birbirinden habersiz artan atom ağırlıklarına göre benzer özellikli elementleri alt alta sıraladı. Mendeleyev henüz keşfedilmemiş elementler için tabloda boşluklar bıraktı. 5. Henry Moseley (1913): X ışınları deneyleriyle elementleri artan atom ağırlığına göre değil, ARTAN ATOM NUMARASINA (PROTON SAYISINA) göre sıralayarak modern tablonun temelini attı. 6. Glenn Seaborg: Tablonun altına iki sıra (Lantanit ve Aktinit) ekleyerek periyodik sisteme son şeklini verdi.',
            'Periyodik Tablonun Yapısı: 7 yatay sıra (Periyot) ve 18 dikey sütun (Grup: 8 tane A grubu, 10 tane B grubu) bulunur.'
          ],
          keyPoints: [
            'Aynı gruptaki elementlerin değerlik elektron sayıları eşit olup kimyasal özellikleri GENELLİKLE BENZERDİR (İstisna: 1A grubundaki Hidrojen ametaldir, diğerleri alkali metaldir; 8A’daki Helyum 2 elektrona sahipken diğer soygazlar 8 elektrona sahiptir).',
            'Bir periyotta soldan sağa doğru: Atom numarası (proton sayısı) artar, kütle numarası artar, metalik özellik azalır, ametalik özellik artar, grup numarası artar.',
            'Bir grupta yukarıdan aşağıya doğru: Katman (periyot) sayısı artar, atom numarası artar, metalik özellik artar.'
          ]
        },
        {
          heading: 'Elementlerin Sınıflandırılması: Metal, Ametal, Yarı Metal, Soygaz',
          paragraphs: [
            'Metaller (Sol ve orta kısım): Yüzeyleri parlaktır, ısı ve elektriği çok iyi iletirler, tel ve levha haline getirilebilir (işlenebilir), oda sıcaklığında cıva (Hg) hariç hepsi katıdır. Kendi aralarında bileşik yapmaz, alaşım oluştururlar. Ametallerle iyonik bağlı bileşik yaparlar.',
            'Ametaller (Sağ taraf ve 1A’daki H): Yüzeyleri mattır, ısı ve elektriği iletmezler (grafit hariç), kırılgandırlar ve işlenemezler. Oda sıcaklığında katı, sıvı veya gaz halde bulunabilirler. Kendi aralarında kovalent, metallerle iyonik bileşik yaparlar.',
            'Yarı Metaller (Merdiven hattı): Bor (B) ve Silisyum (Si) en bilinenleridir. Fiziksel özellikleri metallere, kimyasal özellikleri ametallere benzer. Yarı iletken teknolojisinde ve cam sanayisinde kullanılır.',
            'Soygazlar (8A Grubu): He, Ne, Ar, Kr, Xe, Rn. Ametallerin özel grubudur. Kararlı elektron dizilimine sahiptirler, kimyasal tepkimeye girmezler, bileşik oluşturmazlar, oda koşullarında tek atomlu gaz halindedirler.'
          ],
          examNote: '📌 LGS TUZAĞI: 1A grubunun ilk elementi HİDROJEN bir ametaldir! 8A grubunun ilk elementi HELYUM’un son katmanında 2 elektron vardır, ancak kararlı olduğu için 8A grubundadır.'
        }
      ],
      glossary: [
        { term: 'Periyot', definition: 'Periyodik tablodaki 7 adet yatay sıranın her biri (katman sayısını verir).' },
        { term: 'Grup', definition: 'Periyodik tablodaki 18 adet düşey sütun (Aynı gruptakilerin kimyasal özellikleri benzerdir).' },
        { term: 'Soygaz', definition: '8A grubunda yer alan, kararlı yapıda ve tek atomlu gaz halindeki elementler.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Modern periyodik sistem elementlerin artan atom kütlelerine göre dizilmiştir.', isCorrect: false, explanation: 'Modern tablo Henry Moseley tarafından artan atom numaralarına (proton sayılarına) göre dizilmiştir.' },
        { id: 2, statement: '1A grubunda bulunan hidrojen elementi aktif bir metaldir.', isCorrect: false, explanation: 'Hidrojen 1A grubunun tek ametal elementidir.' },
        { id: 3, statement: 'Soygazlar oda koşullarında tek atomlu gaz halinde bulunur ve bileşik oluşturmaz.', isCorrect: true, explanation: 'Kararlı elektron yapısına sahip oldukları için reaksiyona girmezler.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Periyodik Tabloda Kesit Analizi',
          cognitiveLevel: 'Tablo Yorumlama',
          contextTitle: 'Komşu Elementlerin Özellikleri',
          scenario: 'Ders kitabının 190. sayfasındaki periyodik sistem kesitinde yer alan X, Y ve Z elementlerinden X ve Y aynı periyotta yan yana, X ve Z ise aynı grupta alt altadır.',
          questionPrompt: 'Bu elementlerle ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Z elementinin atom numarası (proton sayısı) X elementinden daha büyüktür.' },
            { key: 'B', text: 'X ve Y elementlerinin katman sayıları birbirinden farklıdır.' },
            { key: 'C', text: 'X ve Z elementlerinin kimyasal özellikleri birbirine tamamen zıttır.' },
            { key: 'D', text: 'Y elementinin periyot numarası Z elementinden fazladır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Aynı grupta yukarıdan aşağıya inildikçe atom numarası ve katman sayısı artar; dolayısıyla X’in altında olan Z’nin proton sayısı X’ten kesinlikle büyüktür.'
        }
      ]
    },
    {
      id: 'g8-u4-sub2',
      title: '2. Bölüm: Fiziksel ve Kimyasal Değişimler',
      shortTitle: 'Fiziksel & Kimyasal Değişim',
      badge: 'Sayfa 139-142',
      pageRange: '139 - 142',
      concepts: ['Fiziksel Değişim', 'Kimyasal Değişim', 'İç Yapının Değişmesi', 'Molekül ve Atom Bağları', 'Renk Değişimi, Gaz Çıkışı, Çökelek', 'Hâl Değişimleri ve Çözünme'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Fiziksel ve Kimyasal Değişimin Temel Farkları',
          paragraphs: [
            'Fiziksel Değişim: Maddenin iç yapısı, kimliği ve molekül yapısı DEĞİŞMEDEN sadece dış görünüşünde (şekil, boyut, fiziksel hâl) meydana gelen değişimlerdir. Maddenin kimyasal özellikleri korunur. Örnekler: Camın kırılması, kâğıdın yırtılması, buzun erimesi, suyun buharlaşması, şekerin veya tuzun suda çözünmesi, patatesin dilimlenmesi, odunun talaş yapılması.',
            'Kimyasal Değişim: Maddenin hem dış görünüşünün hem de İÇ YAPISININ (kimliğinin) değişerek yepyeni kimyasal özelliklere sahip farklı maddelere dönüşmesidir. Maddenin atomları arasındaki bağlar kopar veya yeni bağlar oluşur. Kimyasal değişime uğrayan madde eski haline basit fiziksel yollarla geri döndürülemez.',
            'Kimyasal Değişim İpuçları: Renk değişimi, gaz çıkışı (köpürme), koku oluşumu, ısı veya ışık yayılması, tortu (çökelek) oluşumu.',
            'Kimyasal Değişim Örnekleri: Demirin paslanması, kâğıdın veya odunun yanması, ekmeğin küflenmesi, sütün yoğurt veya peynire mayalanması, yumurtanın haşlanması, elmanın kararması, fotosentez ve solunum.'
          ],
          table: {
            headers: ['Özellik', 'Fiziksel Değişim', 'Kimyasal Değişim'],
            rows: [
              ['Maddenin Kimliği', 'Değişmez, aynı maddedir', 'Değişir, yeni özellikte madde oluşur'],
              ['Bağ Durumu', 'Moleküller arası zayıf bağlar değişir', 'Atomlar arası güçlü kimyasal bağlar kopar/oluşur'],
              ['Geri Dönüş', 'Kolaylıkla eski haline döndürülebilir', 'Basit fiziksel yollarla geri döndürülemez'],
              ['Örnekler', 'Erime, donma, kırılma, yırtılma, çözünme', 'Yanma, paslanma, mayalanma, pişme, çürüme']
            ]
          },
          examNote: '📌 LGS KLASİĞİ: Bütün HÂL DEĞİŞİMLERİ (erime, donma, buharlaşma, yoğuşma, süblimleşme) ve ÇÖZÜNME olayları (şekerin suda çözünmesi) FİZİKSEL DEĞİŞİMDİR!'
        }
      ],
      glossary: [
        { term: 'Fiziksel Değişim', definition: 'Maddenin kimliğini kaybetmeden sadece dış görünüşünde meydana gelen değişim.' },
        { term: 'Kimyasal Değişim', definition: 'Maddenin iç yapısının ve bağlarının değişerek yeni kimlikte maddeye dönüşmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Şekerin suda çözünmesi kimyasal değişime örnektir.', isCorrect: false, explanation: 'Çözünme fizikseldir; su buharlaştırıldığında şeker dipte aynen geri kalır.' },
        { id: 2, statement: 'Demirin paslanması sırasında demirin kimyasal özellikleri değişir.', isCorrect: true, explanation: 'Demir havadaki oksijenle tepkimeye girerek pas (demir oksit) bileşiğini oluşturur.' },
        { id: 3, statement: 'Sütün mayalanarak yoğurt olması fiziksel bir olaydır.', isCorrect: false, explanation: 'Mayalanma mikroorganizmaların etkisiyle gerçekleşen kimyasal bir değişimdir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Fiziksel ve Kimyasal Olayların Tespiti',
          cognitiveLevel: 'Kavramsal Eşleştirme',
          contextTitle: 'Mutfaktaki Günlük Olaylar',
          scenario: 'Ders kitabının 192. sayfasındaki örnekte Mert mutfakta şu olayları gözlemlemiştir: 1. Sıcak ekmeğin üzerindeki tereyağının erimesi. 2. Dilimlenmiş elmanın yüzeyinin açıkta kalınca kararması.',
          questionPrompt: 'Bu iki olayla ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: '1. olay fiziksel değişim, 2. olay kimyasal değişimdir.' },
            { key: 'B', text: 'Her iki olayda da maddenin iç yapısı değişmiştir.' },
            { key: 'C', text: '1. olayda yeni bir madde oluşurken 2. olayda sadece şekil değişmiştir.' },
            { key: 'D', text: 'Her iki olay da basitçe tersine çevrilebilen fiziksel olaylardır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Tereyağının erimesi bir hâl değişimidir (fiziksel). Elmanın kararması ise havadaki oksijenle enzimatik reaksiyondur (kimyasal değişim).'
        }
      ]
    },
    {
      id: 'g8-u4-sub3',
      title: '3. Bölüm: Kimyasal Tepkimeler',
      shortTitle: 'Kimyasal Tepkimeler',
      badge: 'Sayfa 143-146',
      pageRange: '143 - 146',
      concepts: ['Kimyasal Tepkime', 'Tepkimeye Girenler', 'Ürünler', 'Bağ Kırılımı ve Bağ Oluşumu', 'Kütlenin Korunumu Kanunu (Lavoisier)', 'Atom Sayısı ve Cinsi Korunumu', 'Yanma Tepkimesi'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Kimyasal Tepkimenin Mantığı ve Kütlenin Korunumu',
          paragraphs: [
            'İki veya daha fazla maddenin birbirleriyle etkileşime girerek kendi özelliklerini kaybedip yepyeni özelliklerde yeni maddeler oluşturması sürecine kimyasal tepkime denir.',
            'Tepkime Denklemi: Girenler (Reaktifler) ➔ Ürünler (Reaktantlar). Ok işareti tepkimenin yönünü gösterir.',
            'Bağ Kırılımı ve Oluşumu: Kimyasal tepkime sırasında giren maddelerin atomları arasındaki bağlar KOPAR (kırılır); atomlar yeniden düzenlenerek aralarında YENİ BAĞLAR oluşur.',
            'Kütlenin Korunumu Kanunu (Antoine Lavoisier): Kapalı bir kapta gerçekleşen tüm kimyasal tepkimelerde tepkimeye giren maddelerin kütleleri toplamı, oluşan ürünlerin kütleleri toplamına DAİMA EŞİTTİR (Giren Kütlesi = Ürün Kütlesi).'
          ],
          keyPoints: [
            'Kimyasal Tepkimelerde KESİNLİKLE KORUNANLAR: 1. Toplam Kütle, 2. Atom Sayısı, 3. Atom Cinsi (Türü), 4. Toplam Proton, Nötron ve Elektron Sayısı, 5. Çekirdek Yapısı.',
            'Kimyasal Tepkimelerde DEĞİŞEBİLENLER: 1. Molekül Sayısı, 2. Maddenin Hacmi ve Basıncı, 3. Fiziksel ve Kimyasal Özellikler, 4. Bağ Sayısı ve Çeşidi.',
            'Yanma Tepkimeleri: Maddelerin oksijen gazı (O2) ile tepkimeye girmesidir (Girenler tarafında tek başına O2 gazı bulunur). Örn: CH4 + 2O2 ➔ CO2 + 2H2O.'
          ],
          examNote: '📌 LGS SORU TİPİ: Grafikte miktarı AZALAN maddeler "GİRENLER", miktarı SIFIRDAN BAŞLAYIP ARTAN maddeler ise "ÜRÜNLERDİR". Azalanların toplam kütlesi oluşanların toplam kütlesine eşit olmak zorundadır.'
        }
      ],
      glossary: [
        { term: 'Kimyasal Tepkime', definition: 'Atomlar arası bağların kopup yeni bağların oluşmasıyla yeni maddelerin meydana gelmesi.' },
        { term: 'Kütlenin Korunumu', definition: 'Kimyasal bir tepkimede yoktan madde var edilemeyeceği ve var olan maddenin yok olamayacağı ilkesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kimyasal tepkimelerde tepkimeye giren maddelerin atom cinsleri değişerek yeni atomlar oluşur.', isCorrect: false, explanation: 'Atom cinsi asla değişmez; sadece atomlar arasındaki bağlar kopup yeniden dizilir.' },
        { id: 2, statement: 'Kapalı kapta gerçekleşen tepkimelerde toplam kütle daima korunur.', isCorrect: true, explanation: 'Lavoisier kütlenin korunumu kanununa göre girenler = ürünler kütlesidir.' },
        { id: 3, statement: 'Kimyasal tepkimelerde molekül sayısı her zaman korunmak zorundadır.', isCorrect: false, explanation: 'Molekül sayısı artabilir, azalabilir veya sabit kalabilir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Kütlenin Korunumu Problemi',
          cognitiveLevel: 'Matematiksel Muhakeme',
          contextTitle: 'Ders Kitabı Sayfa 146 Kütle Problemi',
          scenario: 'Ders kitabının 146. sayfasındaki etkinlikte: A + B ➔ AB tepkimesinde 15 gram A maddesi ile bir miktar B maddesi tamamen tepkimeye girerek 70 gram AB bileşiği oluşturmuştur.',
          questionPrompt: 'Kütlenin korunumu kanununa göre tepkimede kullanılan B maddesi kaç gramdır?',
          options: [
            { key: 'A', text: '55 gram' },
            { key: 'B', text: '85 gram' },
            { key: 'C', text: '70 gram' },
            { key: 'D', text: '50 gram' }
          ],
          correctAnswer: 'A',
          explanation: 'Girenler Kütlesi = Ürünler Kütlesi kuralından: mA + mB = mAB ➔ 15 + mB = 70 ➔ mB = 55 gramdır.'
        }
      ]
    },
    {
      id: 'g8-u4-sub4',
      title: '4. Bölüm: Asitler ve Bazlar',
      shortTitle: 'Asitler & Bazlar',
      badge: 'Sayfa 147-157',
      pageRange: '147 - 157',
      concepts: ['Asitler (H+ İyonu)', 'Bazlar (OH- İyonu)', 'pH Cetveli (0-14)', 'Belirteçler (Turnusol, Fenolftalein, Metil Oranj)', 'Nötrleşme Tepkimesi', 'Asit Yağmurları', 'Tuz Ruhu, Kezzap, Zaç Yağı, Sud-kostik'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Asitlerin ve Bazların Karşılaştırmalı Özellikleri',
          paragraphs: [
            'Asitler: Suda çözündüğünde ortama hidrojen iyonu (H+) veren maddelerdir. Tatları ekşidir (limon, sirke, elma, yoğurt). Mavi turnusol kâğıdını KIRMIZIYA çevirirler. pH değerleri 0 ile 7 arasındadır (0’a yaklaştıkça asitlik kuvveti artar). Metallerle tepkimeye girerek hidrojen (H2) gazı açığa çıkarırlar ve metalleri aşındırırlar. Mermer yüzeyleri aşındırırlar. Sulu çözeltileri elektrik akımını iletir.',
            'Bazlar: Suda çözündüğünde ortama hidroksit iyonu (OH-) veren maddelerdir. Tatları acıdır ve ele kayganlık hissi verirler (sabun, deterjan, diş macunu, şampuan). Kırmızı turnusol kâğıdını MAVİYE çevirirler. pH değerleri 7 ile 14 arasındadır (14’e yaklaştıkça bazlık kuvveti artar). Cam ve porselen eşyaları zamanla aşındırıp matlaştırırlar. Sulu çözeltileri elektrik akımını iletir.'
          ],
          table: {
            headers: ['Özellik', 'Asitler (0 < pH < 7)', 'Bazlar (7 < pH < 14)'],
            rows: [
              ['Tat ve His', 'Ekşidir, tahriş edicidir', 'Acıdır, ele kayganlık hissi verir'],
              ['Suda Verdiği İyon', 'H+ (Hidrojen)', 'OH- (Hidroksit)'],
              ['Turnusol Kâğıdı', 'Maviyi KIRMIZI yapar', 'Kırmızıyı MAVİ yapar'],
              ['Fenolftalein Damlatılınca', 'Renk değişmez (Renksiz)', 'PEMBE / FUŞYA renge döner'],
              ['Metil Oranj Damlatılınca', 'KIRMIZI renge döner', 'SARI renge döner'],
              ['Aşındırdığı Yüzeyler', 'Metaller ve Mermer', 'Cam ve Porselen'],
              ['Önemli Temsilciler', 'HCl (Tuz ruhu), HNO3 (Kezzap), H2SO4 (Zaç yağı)', 'NaOH (Sud-kostik), KOH (Potas-kostik), NH3 (Amonyak)']
            ]
          }
        },
        {
          heading: 'Nötrleşme Tepkimesi, Ev Kimyasalları ve Asit Yağmurları',
          paragraphs: [
            'Nötrleşme Tepkimesi: Bir asit ile bir bazın tepkimeye girerek birbirinin etkisini yok etmesi ve tuz ile su oluşturmasıdır: Asit + Baz ➔ Tuz + Su (HCl + NaOH ➔ NaCl + H2O). pH değeri tam 7 olan saf su ve nötr tuz oluşur.',
            'Ev Kimyasalları Uyarısı: Tuz ruhu (asit) ile çamaşır suyu (baz) ASLA birbirine karıştırılmamalıdır! Karıştırıldığında ölümcül zehirli klor (Cl2) gazı açığa çıkar.',
            'Asit Yağmurları: Fosil yakıtların yanması sonucu bacalardan ve egzozlardan çıkan kükürtdioksit (SO2), azotdioksit (NO2) ve karbondioksit (CO2) gazları atmosferdeki su buharı ile tepkimeye girerek sülfürik asit (H2SO4) ve nitrik asite (HNO3) dönüşür. Yağan asit yağmurları (pH < 5) tarihi mermer heykelleri, metal köprüleri, ormanları tahrip eder ve suları zehirler.'
          ],
          examNote: '📌 LGS BİLGİSİ: Amonyak (NH3) yapısında hidrojen (H) bulunmasına rağmen bir BAZDIR! Suda çözündüğünde ortama OH- verir: NH3 + H2O ➔ NH4+ + OH-.'
        }
      ],
      glossary: [
        { term: 'pH Cetveli', definition: '0 ile 14 arasında maddelerin asitlik (0-7), nötrlük (7) ve bazlık (7-14) derecesini gösteren ölçek.' },
        { term: 'Nötrleşme', definition: 'Asit ve bazın tepkimeye girerek tuz ve su oluşturması.' },
        { term: 'Asit Yağmuru', definition: 'Fosil yakıt gazlarının atmosferde asite dönüşerek yağış şeklinde yeryüzüne inmesi.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'pH değeri 2 olan bir çözelti, pH değeri 5 olan çözeltiye göre daha kuvvetli bir asittir.', isCorrect: true, explanation: 'pH 0’a yaklaştıkça asitlik kuvveti artar.' },
        { id: 2, statement: 'Amonyak (NH3) yapısında H atomu içerdiği için asidik özellik gösterir.', isCorrect: false, explanation: 'Amonyak kuvvetli bir bazdır, suda OH- iyonu oluşturur.' },
        { id: 3, statement: 'Çamaşır suyu ile tuz ruhu birlikte karıştırılarak daha etkili temizlik yapılmalıdır.', isCorrect: false, explanation: 'KESİNLİKLE HAYIR! Zehirli klor gazı çıkar ve ölüme yol açabilir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Ayıraçlar ve pH Belirleme',
          cognitiveLevel: 'Deney Yorumlama',
          contextTitle: 'Ders Kitabı Sayfa 157 Turnusol Deneyi',
          scenario: 'İsmail elindeki P sıvısına mavi turnusol batırdığında kırmızıya döndüğünü, R sıvısına kırmızı turnusol batırdığında ise maviye döndüğünü gözlemlemiştir.',
          questionPrompt: 'P ve R sıvılarının özellikleri ve pH aralıkları ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'P sıvısı asidiktir (pH < 7), R sıvısı ise baziktir (pH > 7).' },
            { key: 'B', text: 'P sıvısı camı matlaştırır, R sıvısı metali aşındırır.' },
            { key: 'C', text: 'Her iki sıvının da pH değeri 7’dir.' },
            { key: 'D', text: 'P sıvısının tadı acı, R sıvısının tadı ekşidir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Maviyi kırmızıya çeviren P asittir (pH 0-7 arası); kırmızıyı maviye çeviren R bazdır (pH 7-14 arası).'
        }
      ]
    },
    {
      id: 'g8-u4-sub5',
      title: '5. Bölüm: Maddenin Isı ile Etkileşimi',
      shortTitle: 'Maddenin Isı ile Etkileşimi',
      badge: 'Sayfa 158-171',
      pageRange: '158 - 171',
      concepts: ['Isı ve Sıcaklık Farkı', 'Öz Isı (c)', 'Sıcaklık Değişimi ve Kütle İlişkisi', 'Erime Isısı (Le)', 'Buharlaşma Isısı (Lb)', 'Isınma ve Soğuma Grafikleri', 'Hâl Değişimi Sabit Sıcaklık Kuralı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Öz Isı Kavramı ve Sıcaklık Artışına Etkisi',
          paragraphs: [
            'Öz Isı (c): Bir maddenin 1 gramının sıcaklığını 1 °C artırmak için gereken ısı enerjisi miktarıdır. Birimi J/g °C’tur. Saf maddeler için AYIRT EDİCİ bir özelliktir (Madde miktarına bağlı değildir).',
            'Öz Isının Fiziksel Anlamı: Öz ısısı büyük olan maddeler GEÇ ISINIR, GEÇ SOĞUR (Su c=4,18 J/g °C). Öz ısısı küçük olan maddeler ise ÇABUK ISINIR, ÇABUK SOĞUR (Demir c=0,46 J/g °C). Bu yüzden denizler karalara göre geç ısınıp geç soğur; çorba tenceresinin metal kısmı hemen ısınırken içindeki su henüz ılıktır.',
            'Kütle ile İlişki: Aynı cins maddeden kütlesi az olan, eşit ısı verildiğinde daha ÇABUK ve ÇOK ısınır (50 ml su, 100 ml sudan daha çabuk kaynar).'
          ],
          keyPoints: [
            'Eşit kütleli farklı sıvılara eşit ısı verildiğinde: Öz ısısı KÜÇÜK olan sıvının sıcaklık artışı en FAZLA olur.',
            'Hâl Değişimi Isıları: Erime ısısı (Le), Donma ısısı (Ld), Buharlaşma ısısı (Lb), Yoğuşma ısısı (Ly). Saf maddeler için ayırt edicidir.',
            'Hâl Değişimi Sırasında Sıcaklık: Saf maddeler hâl değiştirirken (erirken, donarken, kaynarken) sıcaklıkları KESİNLİKLE SABİT KALIR! Alınan veya verilen ısı sıcaklığı artırmaz, tanecikler arası bağların kopmasına veya kurulmasına harcanır.'
          ]
        },
        {
          heading: 'Isınma ve Soğuma Eğrileri & Günlük Yaşam Örnekleri',
          paragraphs: [
            'Sıcaklık-Zaman Grafiğinde Düz Çizgiler: Grafikte sıcaklığın yatay seyrettiği (sabit kaldığı) bölgeler maddenin HÂL DEĞİŞTİRDİĞİ anlardır. Bu aralıklarda madde heterojendir (Katı+Sıvı veya Sıvı+Gaz bir aradadır).',
            'Buharlaşırken Isı Alma Örnekleri: Ele dökülen kolonyanın serinlik vermesi, denizden çıkınca üşümemiz, kesilen karpuzun güneşe konunca soğuması, toprak testideki suyun soğuk kalması, sıcak yaz günlerinde dükkân önlerine su serpilmesi.'
          ],
          examNote: '📌 LGS GRAFİK SORUSU: Grafikte 2 kez sıcaklık sabit kalmışsa (2 plato) madde başlangıçta KATIDIR (1. plato erime, 2. plato kaynamadır).'
        }
      ],
      glossary: [
        { term: 'Öz Isı', definition: '1 gram saf maddenin sıcaklığını 1 °C değiştirmek için gereken ısı miktarı (c).' },
        { term: 'Erime Isısı', definition: 'Erime sıcaklığındaki 1 gram katıyı sıvı yapmak için gereken ısı (Le).' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Öz ısısı büyük olan maddeler öz ısısı küçük olanlara göre daha çabuk ısınır.', isCorrect: false, explanation: 'Öz ısısı büyük olan geç ısınır ve geç soğur.' },
        { id: 2, statement: 'Saf maddeler hâl değiştirirken sıcaklıkları sabit kalır.', isCorrect: true, explanation: 'Alınan ısı tanecikler arası bağları değiştirmeye harcanır.' },
        { id: 3, statement: 'Karpuz kesilip güneşte bekletildiğinde yüzeyindeki su buharlaşırken karpuzdan ısı alır ve karpuz soğur.', isCorrect: true, explanation: 'Buharlaşma ısı alan (endotermik) bir olaydır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Öz Isı ve Sıcaklık Değişimi',
          cognitiveLevel: 'Deney ve Grafik Analizi',
          contextTitle: 'Ders Kitabı Sayfa 171 Deneyi',
          scenario: 'Başlangıç sıcaklıkları 35 °C ve kütleleri eşit olan P, R ve S sıvıları özdeş ısıtıcılarla eşit süre ısıtıldığında son sıcaklıkları sırasıyla 45 °C, 60 °C ve 80 °C olarak ölçülmüştür.',
          questionPrompt: 'Bu sıvıların öz ısılarının (cP, cR, cS) büyükten küçüğe doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: 'cP > cR > cS' },
            { key: 'B', text: 'cS > cR > cP' },
            { key: 'C', text: 'cR > cP > cS' },
            { key: 'D', text: 'Üç sıvının öz ısıları birbirine eşittir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Eşit ısı verildiğinde sıcaklığı en az artan sıvının (P sıvısı 10 °C arttı) öz ısısı en büyüktür. Sıcaklığı en çok artan sıvının (S sıvısı 45 °C arttı) öz ısısı en küçüktür. Sıralama cP > cR > cS şeklindedir.'
        }
      ]
    },
    {
      id: 'g8-u4-sub6',
      title: '6. Bölüm: Türkiye’de Kimya Endüstrisi',
      shortTitle: 'Türkiye’de Kimya Endüstrisi',
      badge: 'Sayfa 172-182',
      pageRange: '172 - 182',
      concepts: ['Kimya Endüstrisi', 'İthalat ve İhracat', 'Ham Madde Bağımlılığı (Petrol)', 'Karabük Demir Çelik (1937)', 'MKE', 'PETKİM', 'TÜBİTAK', 'ETİ Maden (Bor)', 'Kimya Meslekleri'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Türkiye’de Kimya Sektörünün Gelişimi ve Kurumlar',
          paragraphs: [
            'Kimya endüstrisi; plastik, boya, ilaç, deterjan, gübre, kozmetik, tekstil ve otomotiv gibi sanayi kollarının temel ham maddelerini ve ara ürünlerini üreten stratejik bir sektördür.',
            'Cumhuriyet Öncesi ve Sonrası: Osmanlı’da sabun ve barut gibi kısıtlı üretim varken, Cumhuriyet ile planlı ağır sanayi hamlesi başlamıştır. 1937’de Karabük Demir Çelik Fabrikası kurulmuştur.',
            'Önemli Kuruluşlar: MKE (Makine ve Kimya Endüstrisi - savunma sanayisi ve mühimmat), PETKİM (Petrokimya ve plastik ham maddeleri), TÜBİTAK (Bilimsel Ar-Ge), ETİ Maden (Dünya rezervlerinin %73’üne sahip olduğumuz Bor minerali işletmesi), TPAO (Petrol ve doğal gaz arama).',
            'Dış Ticaret Durumu: Türkiye kimya endüstrisinde ham madde bakımından (özellikle ham petrol ve organik kimyasallar) %70 oranında DIŞA BAĞIMLIDIR (ithalat fazladır).'
          ],
          keyPoints: [
            'Kimya Mühendisi: Kimyasal süreçlerin en ekonomik şekilde endüstriyel tesislere dönüştürülmesini tasarlar.',
            'Kimyager: Maddelerin atomik yapısını, yeni bileşikleri ve laboratuvar analizlerini araştıran bilim insanıdır.',
            'Kimya Teknisyeni: Laboratuvarda mühendis ve kimyager gözetiminde analiz ve kontrol yapan ara elemandır.',
            'Metalurji Mühendisi: Maden filizlerinden metal ve alaşımların üretimiyle ilgilenir.'
          ],
          examNote: '📌 LGS ÇIKARIMI: Ülkemizde kimya sanayisinin en büyük sorunu ham madde ithalatı bağımlılığıdır. Çözüm; yerli kaynakların işlenmesi ve yüksek katma değerli Ar-Ge ürünlerinin üretilmesidir.'
        }
      ],
      glossary: [
        { term: 'İthalat', definition: 'Başka ülkelerden mal ve ham madde satın alınması (dış alım).' },
        { term: 'İhracat', definition: 'Ülkede üretilen malların dış ülkelere satılması (dış satım).' },
        { term: 'Petrokimya', definition: 'Petrolden plastik, elyaf ve kimyasallar üreten sanayi dalı.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Türkiye kimya endüstrisi petrol ham maddesi bakımından dışa bağımlıdır.', isCorrect: true, explanation: 'Ham petrolün büyük kısmı ithal edilir.' },
        { id: 2, statement: 'Türkiye dünyadaki bor rezervlerinin yaklaşık %73’üne sahiptir.', isCorrect: true, explanation: 'ETİ Maden bu rezervleri işleten lider kuruluştur.' },
        { id: 3, statement: 'Kimya mühendisleri sadece eczanelerde ilaç satışı yapar.', isCorrect: false, explanation: 'Kimya mühendisleri fabrikaların ve üretim tesislerinin tasarım ve işletmesini yapar.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Kimya Endüstrisi ve Meslekler',
          cognitiveLevel: 'Mesleki Eşleştirme',
          contextTitle: 'Ders Kitabı Sayfa 182 Sorusu',
          scenario: 'Ders kitabında kimya endüstrisindeki meslek dalları incelenmiştir: 1. Kimyasal maddenin en ekonomik biçimde üretilmesini ve fabrika tesislerinin kurulmasını sağlar. 2. Maddenin laboratuvarda kimyasal analizlerini ve yeni molekül tasarımlarını yapar.',
          questionPrompt: 'Bu iki görevi yerine getiren meslekler sırasıyla hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Kimya Mühendisi - Kimyager' },
            { key: 'B', text: 'Eczacı - Kimya Teknisyeni' },
            { key: 'C', text: 'Metalurji Mühendisi - Eczacı' },
            { key: 'D', text: 'Kimyager - Kimya Mühendisi' }
          ],
          correctAnswer: 'A',
          explanation: 'Tesis kurup ekonomik üretim tasarlayan Kimya Mühendisidir; laboratuvar analizi yapan ve yeni madde araştıran Kimyagerdir.'
        }
      ]
    }
  ]
};
