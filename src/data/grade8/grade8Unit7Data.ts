import { Unit } from '../../types/curriculum';

export const grade8Unit7Data: Unit = {
  id: 'g8-unit-7',
  unitNumber: 7,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Elektrik Yükleri ve Elektrik Enerjisi',
  unitEndPageRange: 's. 306-310',
  colorTheme: {
    primary: 'from-violet-600 to-purple-700',
    border: 'border-violet-500/40',
    bg: 'bg-violet-950/40',
    accent: 'text-violet-400',
    text: 'text-violet-200'
  },
  subTopics: [
    {
      id: 'g8-u7-sub1',
      title: '1. Bölüm: Elektrik Yükleri ve Elektriklenme',
      shortTitle: 'Elektrik Yükleri & Elektriklenme',
      badge: 'Sayfa 274-283',
      pageRange: '274 - 283',
      concepts: ['Proton (+)', 'Elektron (-)', 'Nötr Cisim', 'Elektriklenme Çeşitleri', 'Sürtünme ile Elektriklenme (Ebonit-Yün, Cam-İpek)', 'Dokunma ile Elektriklenme', 'Etki ile Elektriklenme', 'Şimşek ve Yıldırım', 'Fotokopi ve Baca Filtresi'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Elektrik Yükleri ve Etkileşim Kuralları',
          paragraphs: [
            'Maddelerin yapısındaki atomlarda pozitif yüklü protonlar (+), negatif yüklü elektronlar (-) ve yüksüz nötronlar bulunur.',
            'Yük Durumları: 1. Nötr Cisim: (+) yük sayısı = (-) yük sayısı. 2. Pozitif Yüklü Cisim: (+) yük sayısı > (-) yük sayısı (elektron vermiştir). 3. Negatif Yüklü Cisim: (-) yük sayısı > (+) yük sayısı (elektron almıştır).',
            'ALTIN KURAL: Pozitif yükler (protonlar) çekirdekte SABİTTİR, ASLA HAREKET ETMEZ! Elektriklenmede sadece negatif yükler (elektronlar) alınıp verilir.',
            'Kuvvet Kuralları: Aynı yükler birbirini İTER (+ ile +, - ile -). Zıt yükler birbirini ÇEKER (+ ile -). Yüklü bir cisim nötr bir cismi DAİMA ÇEKER. İki nötr cisim birbirini ne iter ne çeker.'
          ],
          keyPoints: [
            'Sürtünme ile Elektriklenme: Yalıtkan iki cisim birbirine sürtüldüğünde elektron geçişi olur. Cisimler ZIT CİNS ve EŞİT MİKTARDA yüklenir: a) Ebonit (Plastik) Çubuk + Yün Kumaş ➔ Ebonit (-) negatif yüklenir, Yün kumaş (+) pozitif yüklenir. b) Cam Çubuk + İpek Kumaş ➔ Cam çubuk (+) pozitif yüklenir, İpek kumaş (-) negatif yüklenir.',
            'Dokunma ile Elektriklenme: Yüklü cisim nötr cisme dokundurulduğunda toplam yük kapasitelerine göre paylaşılır. Dokunan cisimler DAİMA AYNI CİNS yükle yüklenir (ya ikisi de +, ya ikisi de -, ya ikisi de nötr).',
            'Etki (Tesir) ile Elektriklenme: Temas olmadan yaklaştırma ile nötr cisimdeki yüklerin kutuplanmasıdır. Yakın uç zıt yükle, uzak uç aynı yükle kutuplanır. Cisim uzaklaştırılınca nötr cisim eski homojen haline döner.'
          ]
        },
        {
          heading: 'Doğal Elektriklenme ve Teknolojik Uygulamalar',
          paragraphs: [
            'Şimşek: Rüzgârın etkisiyle sürtünerek elektriklenen iki bulut arasında gerçekleşen kıvılcımlı elektrik boşalmasıdır.',
            'Yıldırım: Elektrik yüklü bir bulut ile yeryüzü arasında meydana gelen tehlikeli elektrik akımıdır.',
            'Teknolojideki Örnekler: Fotokopi ve lazer yazıcılar (kâğıt ve tonerin zıt yüklenerek yapışması), fabrika bacalarındaki elektrostatik filtreler (tozların zıt yükle çekilerek tutulması), otomobil ve beyaz eşyaların statik elektrikle boyanması (boya damlacıkları ile yüzeyin zıt yüklenmesi).'
          ],
          examNote: '📌 LGS KODLAMASI: "E-Y-N / C-İ-P" ➔ Ebonit Yüne sürter Negatif olur! Cam İpeğe sürter Pozitif olur!'
        }
      ],
      glossary: [
        { term: 'Elektriklenme', definition: 'Bir cismin elektron alarak veya vererek yük dengesinin bozulması.' },
        { term: 'Şimşek', definition: 'İki yüklü bulut arasında gerçekleşen elektrik yükü geçişi.' },
        { term: 'Yıldırım', definition: 'Yüklü bulut ile yeryüzü arasındaki elektrik boşalması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Elektriklenme olayında protonlar bir cisimden diğerine aktarılır.', isCorrect: false, explanation: 'Protonlar çekirdektedir, hareket etmez; sadece elektronlar aktarılır.' },
        { id: 2, statement: 'İpek kumaşa sürtülen cam çubuk pozitif (+) elektrik yüküyle yüklenir.', isCorrect: true, explanation: 'Cam çubuk elektronlarını ipeğe vererek pozitif yüklenir.' },
        { id: 3, statement: 'Dokunma ile elektriklenen iki cisimden biri pozitif diğeri negatif yüklenebilir.', isCorrect: false, explanation: 'Dokunmada her iki cisim kesinlikle AYNI CİNS yükle yüklenir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Elektriklenme Çeşitleri',
          cognitiveLevel: 'Deney Analizi',
          contextTitle: 'Ders Kitabı Sayfa 309 Soru 11',
          scenario: 'Şekil 1’de yünlü kumaşa sürtülen ebonit çubuk nötr iletken küreye dokunduruluyor. Şekil 2’de ise ipek kumaşa sürtülen cam çubuk diğer nötr iletken küreye dokunduruluyor.',
          questionPrompt: 'Bu işlemlerle ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Şekil 1’de ebonit çubuktan nötr küreye (-) yükler geçer ve her iki küre de kendilerine dokundurulan çubuğun yük cinsiyle yüklenir.' },
            { key: 'B', text: 'Şekil 2’de cam çubuktan nötr küreye (+) yükler akar.' },
            { key: 'C', text: 'Her iki küre de nötr kalmaya devam eder.' },
            { key: 'D', text: 'Kürelerin yük cinsleri dokunma sonrası birbirinin zıttı olur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Ebonit çubuk (-) yüklüdür ve küreye elektron verir. Cam çubuk (+) yüklüdür, nötr küreden çubuğa elektron akar ve küre (+) kalır. Dokunma ile cisimler dokunanın yükünü alır.'
        }
      ]
    },
    {
      id: 'g8-u7-sub2',
      title: '2. Bölüm: Elektrik Yüklü Cisimler, Elektroskop ve Topraklama',
      shortTitle: 'Elektroskop & Topraklama',
      badge: 'Sayfa 284-288',
      pageRange: '284 - 288',
      concepts: ['Elektroskop', 'Metal Topuz ve Metal Yapraklar', 'Yüklü Cisim Yaklaştırma ve Dokundurma', 'Topraklama', 'Nötrlenme Prensibi', 'Paratoner (Yıldırımsavar)', 'Tanker Zinciri ve Topraklı Priz'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Elektroskobun Yapısı ve Çalışma Mantığı',
          paragraphs: [
            'Elektroskop: Bir cismin elektrikle yüklü olup olmadığını, yüklü ise hangi cins (+ veya -) elektrik yüküyle yüklü olduğunu anlamaya yarayan araçtır.',
            'Kısımları: İletken metal topuz, iletken metal çubuk, iletken hafif yapraklar, cam fanus, lastik tıpa ve yalıtkan ayak.',
            'Yaprakların Durumu: Elektroskop NÖTR ise yapraklar tamamen KAPALIDIR. Elektroskop YÜKLÜ ise (ister +, ister - olsun) aynı yükler birbirini iteceği için yapraklar AÇIKTIR. Yük miktarı arttıkça yapraklar daha da çok açılır.'
          ],
          keyPoints: [
            'Nötr elektroskoba (+) yüklü cisim YAKLAŞTIRILIRSA: Topuzda (-) yükler çekilir, yapraklarda (+) yük fazlalığı oluşur ve yapraklar AÇILIR.',
            'Pozitif yüklü elektroskoba (+) yüklü cisim DOKUNDURULURSA: Yapraklardaki pozitif yük miktarı artar ve yapraklar BİRAZ DAHA AÇILIR.',
            'Pozitif yüklü elektroskoba (-) yüklü cisim DOKUNDURULURSA: Yük miktarlarına göre yapraklar; biraz kapanabilir, tamamen kapanabilir veya tamamen kapanıp tekrar açılabilir.'
          ]
        },
        {
          heading: 'Topraklama Olayı ve Hayati Önemi',
          paragraphs: [
            'Topraklama: Elektrik yüklü bir cismin iletken bir telle yerküreye bağlanarak NÖTR HÂLE getirilmesi işlemidir. Toprak devasa bir nötr yük deposudur.',
            '1. Negatif (-) Yüklü Cisim Topraklandığında: Cisimdeki fazla elektronlar iletken tel üzerinden toprağa akar ve cisim nötr olur.',
            '2. Pozitif (+) Yüklü Cisim Topraklandığında: Pozitif yükler hareket edemez! Topraktan cisme doğru elektron (-) akışı gerçekleşir ve cisim nötr olur.',
            'Güvenlik ve Teknolojik Örnekler: Akaryakıt tankerlerinin arkasındaki yere değen metal zincirler sürtünme elektriğini toprağa aktararak patlamayı önler. Uçak tekerleklerindeki iletken katman inişte elektriği boşaltır. Evlerdeki topraklı prizler elektrik kaçaklarını toprağa ileterek insanları çarpmaktan korur. Paratonerler yüksek binaları yıldırımdan korur.'
          ],
          examNote: '📌 LGS KURALI: Topraklanan bir cisim pozitif de olsa negatif de olsa KESİNLİKLE NÖTR OLUR! Yük alışverişinde daima elektronlar hareket eder.'
        }
      ],
      glossary: [
        { term: 'Elektroskop', definition: 'Cismin elektriksel yük durumunu yapraklarının hareketiyle gösteren deney aleti.' },
        { term: 'Topraklama', definition: 'Yüklü cismin iletkenle toprağa bağlanıp nötrlenmesi işlemi.' },
        { term: 'Paratoner', definition: 'Yıldırımı güvenli biçimde toprağa ileten sivri uçlu metal düzenek.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Nötr bir elektroskobun yaprakları birbirini iterek açık durur.', isCorrect: false, explanation: 'Nötr elektroskobun yaprakları tamamen kapalıdır.' },
        { id: 2, statement: 'Pozitif yüklü bir cisim topraklandığında artı yükler toprağa akar.', isCorrect: false, explanation: 'Artı yükler hareket edemez; topraktan cisme elektronlar gelir.' },
        { id: 3, statement: 'Topraklama yapılan bir cisim net yük dengesini kurarak nötr hale gelir.', isCorrect: true, explanation: 'Topraklanan cisim nötrleşir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Topraklama ve Yük Geçişi',
          cognitiveLevel: 'Şema Yorumlama',
          contextTitle: 'Ders Kitabı Sayfa 288 Soru B',
          scenario: 'Ders kitabının 288. sayfasında yer alan 1. şekilde (+) yüklü iletken bir küre, 2. şekilde ise (-) yüklü iletken bir küre anahtar kapatılarak topraklanmıştır.',
          questionPrompt: 'Anahtarlar kapatıldığında gerçekleşen yük hareketleri ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: '1. şekilde topraktan küreye elektron geçer; 2. şekilde küreden toprağa elektron geçer ve her iki küre de nötr olur.' },
            { key: 'B', text: '1. şekildeki küreden toprağa protonlar akar.' },
            { key: 'C', text: 'Her iki şekilde de topraktan küreye yük akar.' },
            { key: 'D', text: '1. küre pozitif kalmaya devam ederken 2. küre nötrlenir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Topraklamada sadece elektronlar hareket eder. (+) küreye topraktan elektron gelir; (-) küreden toprağa elektron akar. Her iki küre de sonuçta nötrlenir.'
        }
      ]
    },
    {
      id: 'g8-u7-sub3',
      title: '3. Bölüm: Elektrik Enerjisinin Dönüşümü, Güç Santralleri ve Tasarruf',
      shortTitle: 'Enerji Dönüşümü & Güç Santralleri',
      badge: 'Sayfa 289-305',
      pageRange: '289 - 305',
      concepts: ['Elektrik Enerjisinin Isıya Dönüşümü', 'Sigorta', 'Işığa Dönüşüm (Filaman ve LED)', 'Elektrik Motoru (Elektrik ➔ Hareket)', 'Jeneratör (Hareket ➔ Elektrik)', 'Hidroelektrik Santral (HES)', 'Termik Santral', 'Rüzgâr Santrali (RES)', 'Jeotermal Santral', 'Nükleer Santral', 'Enerji Verimliliği ve A Sınıfı'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Elektrik Enerjisinin Dönüşümleri (Isı, Işık ve Hareket)',
          paragraphs: [
            'Elektrik enerjisi maddelerden geçerken direnç nedeniyle ısıya, ışığa veya hareket enerjisine dönüştürülebilir.',
            'Isıya Dönüşüm: Yüksek dirençli iletken tellerden akım geçince tel ısınır. Elektrikli soba, su ısıtıcısı, ütü, fırın, ekmek kızartma makinesi ve saç kurutma makinesinde kullanılır.',
            'Sigorta: Elektrik devresinden aşırı akım geçtiğinde eriyip devreyi keserek yangınları ve cihaz hasarlarını önleyen güvenlik elemanıdır. Düşük erime noktalı telden yapılır.',
            'Işığa Dönüşüm: Ampul içindeki yüksek dirençli akkor tungsten filaman akkor hale gelerek ışık yayar. Günümüzde floresan ve LED lambalar enerjiyi ısıya dönüştürmeden doğrudan ışığa çevirdiği için %80 daha tasarrufludur.',
            'Elektrik Motoru: Elektrik enerjisini HAREKET (KİNETİK) ENERJİSİNE dönüştürür (Vantilatör, çamaşır makinesi, mikser, matkap, uzaktan kumandalı araba, robotlar).',
            'Jeneratör: Hareket (kinetik) enerjisini ELEKTRİK ENERJİSİNE dönüştüren araçtır (Elektrik santrallerinde, bisiklet dinamosunda bulunur).'
          ]
        },
        {
          heading: 'Elektrik Üreten Güç Santralleri ve Tasarruf Tedbirleri',
          paragraphs: [
            '1. Hidroelektrik Santral (HES): Barajda toplanan suyun potansiyel enerjisi ➔ Akan suyun kinetik enerjisi ➔ Su türbini ➔ Jeneratör ➔ Elektrik enerjisi. Atık üretmez, ucuzdur ancak baraj yapımı doğal ekosistemi etkiler (Atatürk, Keban Barajı).',
            '2. Termik Santraller: Kömür, linyit veya doğal gazın yanması ➔ Isı enerjisi ➔ Su buharı basıncı ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik. Fosil yakıt yandığı için sera gazı ve asit yağmuru üretir (Çayırhan, Soma).',
            '3. Rüzgâr Santrali (RES): Rüzgârın kinetik enerjisi ➔ Rüzgâr türbini kanatları ➔ Jeneratör ➔ Elektrik. Temiz ve yenilenebilirdir.',
            '4. Jeotermal Santraller: Yerin altındaki sıcak su buharı ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik (Kızıldere, Germencik).',
            '5. Nükleer Santraller: Uranyum atomlarının parçalanması (fisyon) ➔ Yüksek ısı ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik. Sera gazı salmaz ancak nükleer atık ve kaza riski yüksektir (Akkuyu).'
          ],
          table: {
            headers: ['Alet / Cihaz', 'Giriş Enerjisi', 'Dönüşen Çıkış Enerjisi'],
            rows: [
              ['Elektrikli Soba / Ütü', 'Elektrik Enerjisi', 'Isı Enerjisi'],
              ['Ampul / LED Lamba', 'Elektrik Enerjisi', 'Işık ve Isı Enerjisi'],
              ['Elektrik Motoru (Vantilatör)', 'Elektrik Enerjisi', 'Hareket Enerjisi'],
              ['Jeneratör / Dinamo', 'Hareket Enerjisi', 'Elektrik Enerjisi']
            ]
          },
          examNote: '📌 LGS FARKI: Elektrik Motoru "Elektrik ➔ Hareket" üretir. Jeneratör ise tam tersi "Hareket ➔ Elektrik" üretir!'
        }
      ],
      glossary: [
        { term: 'Elektrik Motoru', definition: 'Elektrik enerjisini dönme ve hareket enerjisine çeviren aygıt.' },
        { term: 'Jeneratör', definition: 'Hareket enerjisini elektrik enerjisine çeviren üreteç.' },
        { term: 'Sigorta', definition: 'Aşırı akımda eriyerek elektrik devresini kesen güvenlik aracı.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Elektrik motorları hareket enerjisini elektrik enerjisine dönüştürür.', isCorrect: false, explanation: 'Jeneratör hareketten elektrik üretir; elektrik motoru elektrikten hareket üretir.' },
        { id: 2, statement: 'Sigortalar elektrik devrelerinde yüksek gerilim ve yangın tehlikesine karşı koruma sağlar.', isCorrect: true, explanation: 'Aşırı akımda teli eriyerek akımı keser.' },
        { id: 3, statement: 'Hidroelektrik santrallerde suyun potansiyel enerjisi hareket enerjisine, o da jeneratörle elektriğe dönüşür.', isCorrect: true, explanation: 'HES’lerdeki enerji dönüşüm zinciridir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Enerji Dönüşümleri ve Cihazlar',
          cognitiveLevel: 'Kavramsal Eşleştirme',
          contextTitle: 'Ders Kitabı Sayfa 308 Soru 7 ve 10',
          scenario: 'Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüştüğü cihazlar incelenmektedir.',
          questionPrompt: 'Aşağıdaki cihazlardan hangisi elektrik enerjisini doğrudan hareket enerjisine dönüştürür?',
          options: [
            { key: 'A', text: 'Çamaşır makinesi' },
            { key: 'B', text: 'Elektrikli fırın' },
            { key: 'C', text: 'Tost makinesi' },
            { key: 'D', text: 'Akkor ampul' },
          ],
          correctAnswer: 'A',
          explanation: 'Çamaşır makinesinde bulunan elektrik motoru elektrik enerjisini kazanın dönme (hareket) enerjisine dönüştürür.'
        }
      ]
    }
  ]
};
