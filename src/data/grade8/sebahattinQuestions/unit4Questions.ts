import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 4. ÜNİTE: MADDE VE ENDÜSTRİ - SEBAHATTİN LGS SORU HAVUZU
// ============================================================================

export const sebahattinMaddeQuestions: LgsQuestion[] = [
  // Subtopic 1: Periyodik Sistem
  {
    id: 4101,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Periyodik Tablo Kesiti ve Element Türleri',
    scenario: 'Periyodik tablonun sol ve orta kısmında metaller, sağ kısmında ametaller ve soygazlar, ikisi arasındaki basamakta ise yarı metaller yer alır. 1A grubunun en üstündeki Hidrojen (H) ametaldir.',
    questionPrompt: 'Periyodik sistemdeki element sınıfları ile ilgili verilen ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: '1A grubunda yer alan tüm elementler metal sınıfındadır.' },
      { key: 'B', text: 'Soygazlar kararlı yapıda olup bileşik oluşturmazlar ve oda koşullarında gaz haldedir.' },
      { key: 'C', text: 'Yarı metaller fiziksel olarak metallere, kimyasal olarak ametallere benzer.' },
      { key: 'D', text: 'Metaller tel ve levha haline getirilebilirken ametaller kırılgandır ve işlenemez.' }
    ],
    correctAnswer: 'A',
    explanation: '1A grubunun ilk elementi olan Hidrojen (H) bir ametaldir; grubun diğer üyeleri alkali metaldir. Bu nedenle "1A grubundaki tüm elementler metaldir" ifadesi kesinlikle yanlıştır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'İstisna ve Kural Bilgisi',
    theme: 'Periyodik Tablo Element Sınıfları'
  },
  {
    id: 4102,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Tarihsel Gelişim: Mendeleyev ve Moseley',
    scenario: 'Dmitri Mendeleyev elementleri artan atom ağırlıklarına (kütle numaralarına) göre sıralamış ve henüz keşfedilmemiş elementler için tabloda boşluklar bırakmıştır. Henry Moseley ise X ışınları deneyleriyle elementlerin artan atom numaralarına (proton sayılarına) göre dizilmesi gerektiğini ispatlamıştır.',
    questionPrompt: 'Moseley\'in yaptığı bu düzenlemenin günümüz modern periyodik tablosuna sağladığı en büyük katkı hangisidir?',
    options: [
      { key: 'A', text: 'Elementlerin kimyasal benzerliklerinin atom kütlesine değil, çekirdekteki proton sayısına bağlı olduğunu ortaya koyması.' },
      { key: 'B', text: 'Tüm elementlerin soygaz olduğunu kanıtlaması.' },
      { key: 'C', text: 'Periyodik tablodaki grup sayısını 4\'e indirmesi.' },
      { key: 'D', text: 'Elementlerin kütlelerinin hiçbir zaman ölçülemeyeceğini savunması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Modern periyodik sistem elementlerin artan atom numaralarına (proton sayılarına) göre dizilmiştir. Moseley, periyodik özelliklerin proton sayısıyla periyodik olarak tekrarlandığını ispatlamıştır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bilim Tarihi ve Metodoloji',
    theme: 'Periyodik Tablonun Tarihçesi'
  },
  {
    id: 4103,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Elementimi Bul Oyunu ve Özellikleri',
    scenario: 'Ali seçtiği elementin özelliklerini şöyle açıklamıştır:\n• Y ile aynı periyottadır.\n• Oda koşullarında katı halde bulunur.\n• İşlenip tel ya da levha haline getirilemez, kırılgandır.\n• Isı ve elektriği iyi iletmez.',
    questionPrompt: 'Buna göre Ali\'nin seçtiği element hangi element sınıfına aittir?',
    options: [
      { key: 'A', text: 'Metal' },
      { key: 'B', text: 'Ametal' },
      { key: 'C', text: 'Soygaz' },
      { key: 'D', text: 'Yarı Metal' }
    ],
    correctAnswer: 'B',
    explanation: 'Tel ve levha haline getirilemeyen, kırılgan olan, ısı ve elektriği iletmeyen ve oda sıcaklığında katı halde bulunan element (örneğin Karbon veya Kükürt) bir ametaldir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Özellik Eşleştirme',
    theme: 'Elementlerin Fiziksel Özellikleri'
  },
  {
    id: 4104,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Katman Elektron Dağılımı ve Helyum İstisnası',
    scenario: 'Nötr haldeki X, Y ve Z atomlarının katman elektron dağılımları şöyledir:\n• X atomu: 1. katmanda 2 elektron (Toplam 2)\n• Y atomu: 1. katmanda 2, 2. katmanda 8, 3. katmanda 2 elektron (Toplam 12)\n• Z atomu: 1. katmanda 2, 2. katmanda 8 elektron (Toplam 10)',
    questionPrompt: 'Bu atomlarla ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'X ve Y atomlarının son katmanındaki elektron sayıları eşit olduğu için aynı grupta yer alırlar ve benzer kimyasal özellik gösterirler.' },
      { key: 'B', text: 'X atomu Helyumdur (He); son katmanında 2 elektron olmasına rağmen 2A grubunda değil, 8A soygazlar grubunda yer alır.' },
      { key: 'C', text: 'Z atomu 2. periyot 2A grubunda bulunan aktif bir metaldir.' },
      { key: 'D', text: 'Y atomu ametal sınıfında olup kararlı yapıdadır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Atom numarası 2 olan X elementi Helyumdur (He). Helyumun tek katmanında 2 elektron bulunmasına rağmen kararlı bir soygaz olduğu için 2A grubunda değil, en sağdaki 8A grubunda yer alır. Bu periyodik cetvelin en önemli istisnasıdır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'İstisna ve Grup/Periyot Tespiti',
    theme: 'Elektron Dağılımı ve Grup İstisnaları'
  },
  {
    id: 4105,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Periyodik Tabloda Değişen Özellikler Oku',
    scenario: 'Periyodik tabloda soldan sağa doğru gidildikçe (1A -> 8A) ve yukarıdan aşağıya doğru inildikçe (1. periyot -> 7. periyot) bazı özellikler düzenli olarak değişir.',
    questionPrompt: 'Aynı periyotta soldan sağa doğru gidildikçe meydana gelen değişimlerle ilgili hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Katman sayısı (periyot numarası) sürekli artar.' },
      { key: 'B', text: 'Atom numarası (proton sayısı) ve son katmandaki değerlik elektron sayısı genellikle artar.' },
      { key: 'C', text: 'Elementlerin metalik özellikleri sürekli artış gösterir.' },
      { key: 'D', text: 'Elementlerin hepsi oda sıcaklığında gaz hale geçer.' }
    ],
    correctAnswer: 'B',
    explanation: 'Aynı yatay sırada (periyotta) soldan sağa gidildikçe katman sayısı değişmez (aynı periyotta kalırlar). Ancak atom numarası (proton sayısı) 1\'er 1\'er artar ve son katmandaki elektron sayısı 1\'den 8\'e doğru artar.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Periyodik Eğilimler',
    theme: 'Periyodik Özelliklerin Değişimi'
  },
  {
    id: 4106,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Aynı Gruptaki Elementlerin Benzer Kimyasal Özellikleri',
    scenario: 'Fen bilimleri öğretmeni tahtaya şu bilgiyi yazmıştır: "Aynı düşey sütunda (grupta) bulunan elementlerin son katmanlarındaki elektron sayıları eşit olduğu için kimyasal özellikleri genellikle birbirine benzer."',
    questionPrompt: 'Aşağıdaki element çiftlerinden hangisi bu kurala bir istisna oluşturur?',
    options: [
      { key: 'A', text: 'Lityum (3Li) ve Sodyum (11Na)' },
      { key: 'B', text: 'Berilyum (4Be) ve Magnezyum (12Mg)' },
      { key: 'C', text: 'Hidrojen (1H) ve Potasyum (19K)' },
      { key: 'D', text: 'Flor (9F) ve Klor (17Cl)' }
    ],
    correctAnswer: 'C',
    explanation: 'Hidrojen (1H) 1A grubunun en başında yer almasına rağmen bir ametaldir; aynı gruptaki Lityum, Sodyum ve Potasyum ise son derece aktif metallerdir. Dolayısıyla Hidrojen ile Potasyum aynı grupta olmalarına rağmen kimyasal özellikleri kesinlikle benzer değildir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Grup Özellikleri ve İstisna',
    theme: 'Benzer Kimyasal Özellik İstisnası'
  },

  // Subtopic 2: Fiziksel ve Kimyasal Değişimler
  {
    id: 4201,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Ekmeğin Hikâyesi: Biçilmeden Sofraya',
    scenario: 'Buğdayın soframıza ekmek olarak gelene kadar geçirdiği aşamalar:\nI. Tarladaki olgun buğday başaklarının biçilmesi\nII. Buğday tanelerinin değirmende öğütülerek un haline getirilmesi\nIII. Unun su ve maya ile karıştırılarak hamurun mayalanması\nIV. Şekil verilen hamurun fırında pişirilmesi\nV. Fırından çıkan ekmeğin dilimlenmesi',
    questionPrompt: 'Bu aşamalardan hangilerinde maddenin kimliği değişmiş (kimyasal değişim), hangilerinde sadece dış görünüşü değişmiştir (fiziksel değişim)?',
    options: [
      { key: 'A', text: 'Fiziksel: I, II, V — Kimyasal: III, IV' },
      { key: 'B', text: 'Fiziksel: III, IV — Kimyasal: I, II, V' },
      { key: 'C', text: 'Fiziksel: I, V — Kimyasal: II, III, IV' },
      { key: 'D', text: 'Tüm aşamalar kimyasal değişimdir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Biçilme (I), öğütülme (II) ve dilimlenme (V) fiziksel değişimdir; maddenin iç yapısı değişmez. Mayalanma (III) ve pişme (IV) ise yeni maddelerin oluştuğu kimyasal değişimlerdir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Süreç Sınıflandırması',
    theme: 'Fiziksel ve Kimyasal Değişimler'
  },
  {
    id: 4202,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Limon Suyu ve Karbonat Balon Deneyi',
    scenario: 'İçerisinde limon suyu bulunan erlenmayere karbonat tozu dökülmüş ve erlenin ağzına esnek bir balon takılarak teraziye konulmuştur (toplam kütle: 250 g). Karbonat limon suyuna karışınca kabarcıklar çıkmış, balon şişmiş ve deney sonunda terazi yine tam 250 g göstermiştir.',
    questionPrompt: 'Yapılan bu deneyle ilgili,\nI. Gaz çıkışı olması kimyasal bir tepkime gerçekleştiğini kanıtlar.\nII. Toplam kütle kapalı sistemde korunmuştur.\nIII. Deney sırasında yeni cins atomlar oluşmuştur.\nyargılarından hangilerine ulaşılabilir?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'Gaz çıkışı ve köpürme kimyasal değişimin göstergesidir (I doğru). Terazi değeri değişmediğinden kütle korunmuştur (II doğru). Kimyasal tepkimelerde hiçbir zaman yeni atom oluşmaz veya var olan atom yok olmaz; atom türü ve sayısı daima korunur (III yanlış).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kütle Korunumu & Değişim',
    theme: 'Kimyasal Değişim Kanıtları'
  },
  {
    id: 4203,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Mumun Erimesi ve Mumun Yanması Farkı',
    scenario: 'Öğretmen bir mumu yakarak öğrencilerinden gözlem yapmalarını istemiştir. Mumun fitili alevle yanarken altındaki katı parafin eriyerek sıvılaşmış, fitilden uzaklaşan sıvı parafin damlacıkları ise soğuyarak tekrar katılaşmıştır.',
    questionPrompt: 'Mumda meydana gelen bu olaylar hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Parafinin erimesi fiziksel değişim, fitilin yanması ve gaz çıkışı kimyasal değişimdir.' },
      { key: 'B', text: 'Hem erime hem yanma olayları fiziksel değişimdir.' },
      { key: 'C', text: 'Mumun erimesi sırasında parafinin kimyasal yapısı tamamen değişmiştir.' },
      { key: 'D', text: 'Fitilin yanması sırasında hiçbir yeni madde oluşmamıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Katı parafinin ısı alarak sıvılaşması bir hal değişimidir (fiziksel). Fitilin oksijenle reaksiyona girerek karbondioksit ve su buharına dönüşmesi ise yanmadır (kimyasal değişim).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Olay Analizi',
    theme: 'Hal Değişimi vs Yanma'
  },
  {
    id: 4204,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Demir Çivinin Paslanması vs Şekerin Suda Çözünmesi',
    scenario: 'İki ayrı deney tüpünde şu işlemler yapılmıştır:\n• 1. Tüp: Nemli havada bekletilen parlak demir çivinin üzeri kırmızımsı kahverengi pas (Fe2O3) tabakasıyla kaplanmış ve parlaklığı kaybolmuştur.\n• 2. Tüp: Saf su içerisine atılan kesme şeker karıştırılarak tamamen gözden kaybolmuş, su buharlaştırıldığında tüpün dibinde tekrar şeker kristalleri elde edilmiştir.',
    questionPrompt: 'Bu iki işlem sonucunda gerçekleşen değişim türleri hangisinde doğru eşleştirilmiştir?',
    options: [
      { key: 'A', text: '1. Tüp: Fiziksel değişim — 2. Tüp: Kimyasal değişim' },
      { key: 'B', text: '1. Tüp: Kimyasal değişim — 2. Tüp: Fiziksel değişim' },
      { key: 'C', text: 'Her iki tüpte de kimyasal değişim gerçekleşmiştir.' },
      { key: 'D', text: 'Her iki tüpte de sadece fiziksel değişim gerçekleşmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Demirin paslanması havadaki oksijenle yavaş yanma (oksitlenme) tepkimesidir; demir atomları oksijenle yeni bir bileşik oluşturur (kimyasal değişim). Şekerin suda çözünmesi ise şeker moleküllerinin su molekülleri arasına dağılmasıdır; kimlik değişmez, su buharlaştırılınca şeker geri kazanılır (fiziksel değişim).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Oksitlenme vs Çözünme Ayrımı',
    theme: 'Çözünme ve Paslanma Karşılaştırması'
  },
  {
    id: 4205,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Sindirim Sisteminde Mekanik ve Kimyasal Sindirim',
    scenario: 'Biyoloji dersinde sindirim konusu işlenirken;\nI. Ağızda dişler yardımıyla besinlerin küçük parçalara ayrılması\nII. Midede pepsin enzimi ve mide asidi ile proteinlerin yapı taşlarına ayrılması\nIII. İnce bağırsakta karaciğerden gelen safra sıvısı ile yağ damlacıklarına bölünmesi\nIV. Pankreas öz suyundaki enzimlerle karbonhidrat, yağ ve proteinlerin kana geçecek hale gelmesi',
    questionPrompt: 'Yukarıdaki olaylardan hangileri fiziksel, hangileri kimyasal değişime örnektir?',
    options: [
      { key: 'A', text: 'Fiziksel: I ve III — Kimyasal: II ve IV' },
      { key: 'B', text: 'Fiziksel: II ve IV — Kimyasal: I ve III' },
      { key: 'C', text: 'Fiziksel: I ve II — Kimyasal: III ve IV' },
      { key: 'D', text: 'Hepsi kimyasal değişimdir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dişlerle çiğneme (I) ve safranın yağları mekanik parçalaması (III) besinlerin kimliğini değiştirmeyen fiziksel değişimlerdir. Enzim ve asitlerle bağların koparılması (II ve IV) ise kimyasal değişimdir.',
    skillTag: 'Disiplinlerarası Bağlantı',
    cognitiveLevel: 'Biyolojik Süreçlerde Değişim',
    theme: 'Biyolojide Fiziksel ve Kimyasal Değişim'
  },
  {
    id: 4206,
    subTopicId: 'g8-u4-sub2',
    contextTitle: 'Sütün Mayalanması ve Yoğurttan Ayran Yapılması',
    scenario: 'Mutfakta süt ısıtılarak içine bir miktar yoğurt mayası eklenmiş, üzeri sarılarak bekletilmiş ve kıvamlı yoğurt elde edilmiştir. Daha sonra bu yoğurttan bir kase alınıp üzerine su ve tuz eklenerek çırpılmış ve ayran yapılmıştır.',
    questionPrompt: 'Sütten yoğurt yapılması ve yoğurttan ayran yapılması süreçleri sırasıyla hangi değişim türleridir?',
    options: [
      { key: 'A', text: 'Sütten yoğurt: Fiziksel — Yoğurttan ayran: Kimyasal' },
      { key: 'B', text: 'Sütten yoğurt: Kimyasal — Yoğurttan ayran: Fiziksel' },
      { key: 'C', text: 'Her iki süreç de kimyasal değişimdir.' },
      { key: 'D', text: 'Her iki süreç de fiziksel değişimdir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sütün mayalanması bakterilerin laktik asit fermantasyonu yapmasıyla yeni madde üretmesidir (kimyasal). Yoğurda su ve tuz katılıp karıştırılması ise bir homojen/heterojen karışım hazırlamadır, maddelerin kimliği değişmez (fiziksel).',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Mutfak Kimyası Muhakemesi',
    theme: 'Mayalanma ve Karışım Oluşumu'
  },

  // Subtopic 3: Kimyasal Tepkimeler
  {
    id: 4301,
    subTopicId: 'g8-u4-sub3',
    contextTitle: 'Kütle-Zaman Grafiğinde Girenler ve Ürünler',
    scenario: 'Kapalı bir kapta gerçekleşen kimyasal tepkimeye ait kütle-zaman grafiğinde;\n• K maddesi: 26 gramdan 6 grama düşmüştür (20 g harcandı).\n• L maddesi: 16 gramdan 0 grama düşmüştür (16 g harcandı, bitti).\n• M maddesi: 0 gramdan 22 grama çıkmıştır (22 g oluştu).\n• N maddesi: 0 gramdan X grama çıkmıştır.',
    questionPrompt: 'Kütlenin korunumu kanununa göre oluşan N maddesinin kütlesi (X) kaç gramdır?',
    options: [
      { key: 'A', text: '10 gram' },
      { key: 'B', text: '14 gram' },
      { key: 'C', text: '18 gram' },
      { key: 'D', text: '22 gram' }
    ],
    correctAnswer: 'B',
    explanation: 'Girenlerin harcanan kütlesi = Ürünlerin oluşan kütlesi. Harcanan K = 26 - 6 = 20 g; Harcanan L = 16 g. Toplam harcanan = 20 + 16 = 36 g. Oluşan M = 22 g olduğuna göre Oluşan N = 36 - 22 = 14 gramdır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Kütlenin Korunumu Hesabı',
    theme: 'Kütle-Zaman Grafikleri'
  },
  {
    id: 4302,
    subTopicId: 'g8-u4-sub3',
    contextTitle: 'Kimyasal Tepkime Molekül Modelleri',
    scenario: '2H2 (Hidrojen gazı) + O2 (Oksijen gazı) -> 2H2O (Su) tepkimesinde giren ve ürünlerin molekül modelleri inceleniyor.',
    questionPrompt: 'Bu tepkime modeli ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Tepkimede toplam kütle korunmuştur.' },
      { key: 'B', text: 'Giren atomların cinsi (H ve O) ile ürünlerdeki atomların cinsi aynı kalmıştır.' },
      { key: 'C', text: 'Tepkimede toplam atom sayısı korunmuştur.' },
      { key: 'D', text: 'Tepkimede toplam molekül sayısı kesinlikle korunmak zorundadır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kimyasal tepkimelerde atom türü, atom sayısı ve toplam kütle daima korunur. Ancak molekül sayısı korunmak zorunda DEĞİLDİR. Bu tepkimede girenlerde 3 molekül varken ürünlerde 2 molekül oluşmuştur.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kimyasal Tepkime Kuralları',
    theme: 'Tepkimelerde Korunan Özellikler'
  },
  {
    id: 4303,
    subTopicId: 'g8-u4-sub3',
    contextTitle: 'Açık Kaptaki Tepkimede Terazinin Hafiflemesi Yanılgısı',
    scenario: 'Ağzı açık bir cam erlene 100 gram kireç taşı (CaCO3) konulup ısıtılmıştır. Bir süre sonra erlende 56 gram kalsiyum oksit (CaO) katısı kalmış ve terazi 56 gram göstermiştir.',
    questionPrompt: 'Öğrencilerden Can, "Terazi 44 gram azaldığına göre kütle korunmamıştır" demiştir. Can\'ın bu yanılgısının bilimsel açıklaması hangisidir?',
    options: [
      { key: 'A', text: 'Kireç taşı ısıtılınca 44 gram karbondioksit (CO2) gazı oluşmuş ve açık ağızdan havaya uçmuştur; kapalı kapta yapılsaydı terazi tam 100 gram kalırdı.' },
      { key: 'B', text: 'Isıtma deneylerinde kütle yok olur.' },
      { key: 'C', text: 'Kireç taşı kimyasal tepkimeye değil sadece fiziksel değişime uğramıştır.' },
      { key: 'D', text: 'Can haklıdır, kimyasal tepkimelerde kütle korunumu geçerli değildir.' }
    ],
    correctAnswer: 'A',
    explanation: 'CaCO3 -> CaO + CO2 tepkimesinde 44 g karbondioksit gazı gaz fazında ortamdan uzaklaşmıştır. Kapalı kapta yapılsaydı gaz dışarı çıkamayacak ve kütlenin tam korunduğu görülecekti. Kütlenin korunumu doğanın temel kanunudur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kavram Yanılgısı Analizi',
    theme: 'Açık Kapta Kütle Korunumu'
  },
  {
    id: 4304,
    subTopicId: 'g8-u4-sub3',
    contextTitle: 'Artanlı Kimyasal Tepkime ve Kütle Korunumu',
    scenario: 'Kapalı bir kaba 30 gram X maddesi ile 40 gram Y maddesi konularak tepkime başlatılmıştır. Tepkime sonunda X maddesinin tamamı tükenirken, Y maddesinden 10 gram arttığı ve Z maddesinin oluştuğu belirlenmiştir.',
    questionPrompt: 'Buna göre kapta oluşan Z maddesinin kütlesi kaç gramdır ve tepkime sonunda kapta toplam kaç gram madde vardır?',
    options: [
      { key: 'A', text: 'Z maddesi: 60 gram — Kaptaki toplam kütle: 70 gram' },
      { key: 'B', text: 'Z maddesi: 70 gram — Kaptaki toplam kütle: 70 gram' },
      { key: 'C', text: 'Z maddesi: 30 gram — Kaptaki toplam kütle: 40 gram' },
      { key: 'D', text: 'Z maddesi: 50 gram — Kaptaki toplam kütle: 60 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Harcanan X = 30 g. Harcanan Y = 40 - 10 = 30 g. Oluşan Z maddesi = 30 + 30 = 60 gramdır. Tepkime sonunda kapta 60 g Z ve artan 10 g Y maddesi olmak üzere toplam 70 g madde bulunur (başlangıçtaki 30+40=70 g korunur).',
    skillTag: 'Matematiksel Muhakeme',
    cognitiveLevel: 'Artanlı Tepkime Hesabı',
    theme: 'Artanlı Tepkimelerde Kütle Korunumu'
  },
  {
    id: 4305,
    subTopicId: 'g8-u4-sub3',
    contextTitle: 'Kimyasal Tepkime Sırasında Değişen ve Değişmeyen Nicelikler',
    scenario: 'Bir kimyasal tepkime gerçekleşirken mikroskobik boyutta atomlar arası eski bağlar kopar ve atomlar yeniden düzenlenerek yeni kimyasal bağlar oluşturur.',
    questionPrompt: 'Bir kimyasal tepkime süresince aşağıdaki niceliklerden hangisinin değişmesi mümkündür?',
    options: [
      { key: 'A', text: 'Toplam proton sayısı' },
      { key: 'B', text: 'Toplam nötron sayısı' },
      { key: 'C', text: 'Toplam molekül sayısı' },
      { key: 'D', text: 'Atomların cinsi' }
    ],
    correctAnswer: 'C',
    explanation: 'Kimyasal tepkimelerde çekirdekteki proton ve nötron sayıları, atom türü ve atom sayısı ASLA değişmez. Ancak molekül sayısı artabilir, azalabilir veya sabit kalabilir; korunması zorunlu değildir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Temel Tepkime İlkeleri',
    theme: 'Tepkimede Değişebilen Nicelikler'
  },

  // Subtopic 4: Asitler ve Bazlar
  {
    id: 4401,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'Doğal İndikatör Mor Lahana ve pH Renkleri',
    scenario: 'Mor lahana suyu doğal bir asit-baz belirtecidir. Asit çözeltilerinde kırmızı/pembe renge, baz çözeltilerinde ise yeşil/mavi/sarı renge dönüşür; nötr ortamda mor rengini korur.\nBir öğrenci özdeş 3 behere mor lahana suyu eklemiş:\n• 1. kap: Kırmızı renk almıştır.\n• 2. kap: Yeşil renk almıştır.\n• 3. kap: Mor renkte kalmıştır.',
    questionPrompt: 'Buna göre 1, 2 ve 3 numaralı kaplardaki maddeler hangisi olabilir?',
    options: [
      { key: 'A', text: '1: Limon suyu (Asit) — 2: Sabunlu su (Baz) — 3: Saf su (Nötr)' },
      { key: 'B', text: '1: Amonyak — 2: Sirke — 3: Tuzlu su' },
      { key: 'C', text: '1: Çamaşır suyu — 2: Gazoz — 3: Kezzap' },
      { key: 'D', text: '1: Tuz ruhu — 2: Kahve — 3: Kostik' }
    ],
    correctAnswer: 'A',
    explanation: '1. kap kırmızı olduğuna göre asidiktir (Limon suyu, pH ≈ 2.3). 2. kap yeşil olduğuna göre baziktir (Sabunlu su, pH ≈ 9). 3. kap mor kaldığına göre nötrdür (Saf su, pH = 7).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'İndikatör Renk Analizi',
    theme: 'Asit-Baz Belirteçleri'
  },
  {
    id: 4402,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'Mermer ve Cam Yüzeylere Asit-Baz Etkisi',
    scenario: 'K ve L kaplarında bulunan sıvılarla ilgili şu deneyler yapılmıştır:\n• K sıvısı mermer parçası üzerine damlatıldığında köpürme ve aşınma gözlenmiş, çinko metali ile H2 gazı çıkarmıştır.\n• L sıvısı cam bardağa ve porselen tabağa döküldüğünde camın matlaştığı ve porselen deseninin tahriş olduğu görülmüştür.',
    questionPrompt: 'Buna göre K ve L maddeleri ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K maddesi asidik özelliktedir (mermer ve metalleri aşındırır); L maddesi bazik özelliktedir (cam ve porseleni matlaştırır).' },
      { key: 'B', text: 'K maddesi baz, L maddesi asittir.' },
      { key: 'C', text: 'Her iki madde de nötr tuz çözeltisidir.' },
      { key: 'D', text: 'K maddesi cam kaplarda saklanamaz.' }
    ],
    correctAnswer: 'A',
    explanation: 'Asitler mermer ve metallere etki ederek onları aşındırır (K = Asit). Bazlar ise cam ve porselene etki ederek yüzeylerini matlaştırır ve çizer (L = Baz). Asitler cam kaplarda güvenle saklanabilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Asit-Baz Maddesel Etkileri',
    theme: 'Asit ve Bazların Metallere/Cama Etkisi'
  },
  {
    id: 4403,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'Fosil Yakıtlar ve Asit Yağmuru Mekanizması',
    scenario: 'Fabrika bacalarından ve araç egzozlarından havaya salınan kükürtdioksit (SO2), azotdioksit (NO2) ve karbondioksit (CO2) gazları atmosferdeki su buharı ile kimyasal tepkimeye girerek sülfürik asit (H2SO4) ve nitrik asit (HNO3) oluşturur. Bu asitler yağmur ve karla yeryüzüne yağar.',
    questionPrompt: 'Asit yağmurlarının çevreye etkilerini azaltmak için hangisi uygun bir çözüm DEĞİLDİR?',
    options: [
      { key: 'A', text: 'Fabrika bacalarına ve araç egzozlarına filtre takılması.' },
      { key: 'B', text: 'Güneş, rüzgâr gibi yenilenebilir enerji kaynaklarının yaygınlaştırılması.' },
      { key: 'C', text: 'Kömür ve petrol gibi fosil yakıtların kullanımının artırılması.' },
      { key: 'D', text: 'Ağaçlandırma çalışmalarının artırılarak ormanlık alanların korunması.' }
    ],
    correctAnswer: 'C',
    explanation: 'Fosil yakıtların kullanımının artırılması havaya daha çok kükürt ve azot gazı salınmasına yol açarak asit yağmurlarını şiddetlendirir; çözüm değil sorunun kaynağıdır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Çevre ve Teknoloji',
    theme: 'Asit Yağmurları ve Çevre'
  },
  {
    id: 4404,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'pH Ölçeğinde Asitlik ve Bazlık Kuvveti',
    scenario: 'Oda sıcaklığında bulunan X, Y, Z ve T sulu çözeltilerinin pH değerleri ölçülmüştür:\n• X çözeltisi: pH = 1 (Kuvvetli asit)\n• Y çözeltisi: pH = 5 (Zayıf asit)\n• Z çözeltisi: pH = 7 (Nötr)\n• T çözeltisi: pH = 13 (Kuvvetli baz)',
    questionPrompt: 'Bu çözeltilerle ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'X çözeltisindeki H+ iyonu derişimi Y çözeltisinden fazladır.' },
      { key: 'B', text: 'T çözeltisi ele kayganlık hissi verir ve turnusol kağıdını maviye çevirir.' },
      { key: 'C', text: 'Z çözeltisi saf su veya sofra tuzu çözeltisi olabilir.' },
      { key: 'D', text: 'Y çözeltisinin asitliği X çözeltisinden daha kuvvetlidir.' }
    ],
    correctAnswer: 'D',
    explanation: 'pH cetvelinde 7\'den 0\'a doğru gidildikçe asitlik kuvveti artar. pH = 1 olan X çözeltisi, pH = 5 olan Y çözeltisinden çok daha kuvvetli bir asittir. "Y çözeltisinin asitliği daha kuvvetlidir" ifadesi yanlıştır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'pH Ölçeği ve Kuvvet Analizi',
    theme: 'pH Değerleri ve Asit-Baz Kuvveti'
  },
  {
    id: 4405,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'Asit ve Bazın Nötralleşme Tepkimesi',
    scenario: 'İçerisinde hidroklorik asit (tuz ruhu, HCl) çözeltisi bulunan behere fenolftalein damlatılmış ve çözelti renksiz kalmıştır. Bu behere büretten damla damla sodyum hidroksit (kostik baz, NaOH) çözeltisi eklenmiştir. Bir süre sonra karışımın pH\'ı tam 7 olmuş ve sonrasında açık pembe renge dönmüştür.',
    questionPrompt: 'Bu nötralleşme deneyiyle ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Asit ile baz tepkimeye girerek tuz (NaCl) ve su (H2O) oluşturmuştur.' },
      { key: 'B', text: 'Fenolftalein asidik ortamda pembe, bazik ortamda renksizdir.' },
      { key: 'C', text: 'Tepkime süresince kaptaki H+ iyonları sürekli artmıştır.' },
      { key: 'D', text: 'Bu olay fiziksel bir karışım işlemidir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Asit + Baz -> Tuz + Su tepkimesine nötralleşme tepkimesi denir. HCl ve NaOH tepkimeye girerek sofra tuzu (NaCl) ve su (H2O) oluşturur. Fenolftalein asitte renksiz, bazda pembedir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Nötralleşme Tepkimesi',
    theme: 'Asit-Baz Nötralleşmesi'
  },
  {
    id: 4406,
    subTopicId: 'g8-u4-sub4',
    contextTitle: 'Ev Kazaları: Çamaşır Suyu ve Tuz Ruhu Tehlikesi',
    scenario: 'Ev temizliği sırasında banyodaki derzleri ve kireçleri daha hızlı temizlemek isteyen bir kişi, çamaşır suyu (sodyum hipoklorit - bazik) ile tuz ruhunu (hidroklorik asit) aynı kovada karıştırmıştır. Karışım aniden köpürmüş ve ortama keskin kokulu zehirli sarımsı bir gaz yayılmıştır.',
    questionPrompt: 'Bu tehlikeli durumla ilgili yapılan bilimsel uyarı hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Çamaşır suyu ve tuz ruhu karıştırıldığında kimyasal tepkime gerçekleşerek ölümcül klor gazı (Cl2) açığa çıkar; bu temizlik maddeleri asla karıştırılmamalıdır.' },
      { key: 'B', text: 'Her iki madde de nötr olduğu için sadece su buharı oluşmuştur.' },
      { key: 'C', text: 'Karışım temizleme gücünü 10 kat artırdığı için doğru bir yöntemdir.' },
      { key: 'D', text: 'Oluşan gaz sadece hoş bir koku yayar, solunmasında sakınca yoktur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırıldığında şiddetli kimyasal reaksiyonla zehirli klor gazı (Cl2) açığa çıkar. Solunduğunda akciğer hasarına ve ölüme yol açabileceğinden ev temizliğinde asidik ve bazik kimyasallar asla karıştırılmamalıdır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sağlık, Güvenlik ve Kimya',
    theme: 'Temizlik Maddelerinin Güvenli Kullanımı'
  },

  // Subtopic 5: Maddenin Isı ile Etkileşimi
  {
    id: 4501,
    subTopicId: 'g8-u4-sub5',
    contextTitle: 'Eşit Kütleli Farklı Sıvıların Öz Isı Deneyi',
    scenario: 'Kütleleri 100 gram ve ilk sıcaklıkları 20 °C olan su (c_su = 4,18 J/g°C) ve zeytinyağı (c_yağ = 1,96 J/g°C) özdeş ısıtıcılarla 5 dakika boyunca ısıtılmıştır. Deney sonunda suyun sıcaklığı 35 °C\'ye, zeytinyağının sıcaklığı ise 52 °C\'ye ulaşmıştır.',
    questionPrompt: 'Zeytinyağının sıcaklığının suya göre çok daha fazla yükselmesinin temel sebebi hangisidir?',
    options: [
      { key: 'A', text: 'Zeytinyağının öz ısısının suyun öz ısısından daha küçük olması.' },
      { key: 'B', text: 'Zeytinyağının ısıtıcıdan daha fazla ısı enerjisi alması.' },
      { key: 'C', text: 'Suyun kütlesinin ısıtma sırasında azalmış olması.' },
      { key: 'D', text: 'Zeytinyağının kaynama noktasının sudan düşük olması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Özdeş ısıtıcılarla eşit süre ısıtılan eşit kütleli maddeler eşit miktarda ısı alır (Q = m.c.ΔT). Öz ısısı küçük olan maddeler daha çabuk ısınır ve sıcaklık artışı (ΔT) daha büyük olur. Zeytinyağının öz ısısı küçük olduğu için sıcaklığı hızla yükselmiştir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Öz Isı ve Sıcaklık Değişimi',
    theme: 'Öz Isı Kavramı ve Deneyleri'
  },
  {
    id: 4502,
    subTopicId: 'g8-u4-sub5',
    contextTitle: 'Denizlerin Karalardan Geç Isınıp Geç Soğuması',
    scenario: 'Yaz mevsiminde gündüz saatlerinde kumsaldaki kumlar ayakları yakacak kadar sıcakken deniz suyu serindir. Gece olduğunda ise kumlar hızla soğur fakat deniz suyu hala ılıktır.',
    questionPrompt: 'Bu doğa olayının nedeni maddelerin hangi fiziksel özelliğinin farklı olmasıyla açıklanır?',
    options: [
      { key: 'A', text: 'Suyun öz ısısının karaları oluşturan kum ve kayaların öz ısısından çok daha büyük olması.' },
      { key: 'B', text: 'Gündüzleri Güneş ışınlarının sadece kumlara düşmesi.' },
      { key: 'C', text: 'Deniz suyunun buharlaşma ısısının sıfır olması.' },
      { key: 'D', text: 'Kum tanelerinin suyun kaldırma kuvvetini engellemesi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Suyun öz ısısı karaları oluşturan kaya ve kumların öz ısısından yaklaşık 5 kat büyüktür. Öz ısısı büyük olan maddeler geç ısınır ve geç soğur; öz ısısı küçük olan maddeler ise çabuk ısınıp çabuk soğur.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Doğa Olayı ve Öz Isı',
    theme: 'Deniz-Kara Sıcaklık Farkı ve Meltem'
  },
  {
    id: 4503,
    subTopicId: 'g8-u4-sub5',
    contextTitle: 'Saf Maddelerin Isınma Grafiğinde Sıcaklığın Sabit Kalması',
    scenario: 'İlk sıcaklığı -10 °C olan bir miktar saf buz parçası düzenli ısı veren bir ocakta ısıtılmış ve sıcaklık-zaman grafiği çizilmiştir. Grafikte 0 °C\'de (erime süresince) ve 100 °C\'de (kaynama süresince) sıcaklığın bir süre sabit kaldığı görülmüştür.',
    questionPrompt: 'Hal değişimi süresince ocağın ısı vermeye devam etmesine rağmen sıcaklığın sabit kalmasının sebebi hangisidir?',
    options: [
      { key: 'A', text: 'Alınan ısı enerjisinin moleküller arası bağları koparmak ve hal değişimini gerçekleştirmek için kullanılması.' },
      { key: 'B', text: 'Termometrenin hal değişiminde bozulması.' },
      { key: 'C', text: 'Maddenin kütlesinin bu aralıkta sıfıra inmesi.' },
      { key: 'D', text: 'Buzun erirken dışarıya ısı vermesi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Saf maddeler hal değiştirirken (erirken, kaynarken) sıcaklıkları kesinlikle sabit kalır. Isıtıcıdan alınan ısı enerjisi sıcaklığı artırmak yerine tanecikler arası çekim kuvvetlerini yenerek katıdan sıvıya veya sıvıdan gaza geçiş için harcanır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Hal Değişimi ve Sıcaklık Grafiği',
    theme: 'Hal Değişiminde Sıcaklık Sabitliği'
  },
  {
    id: 4504,
    subTopicId: 'g8-u4-sub5',
    contextTitle: 'Donarken Dışarıya Isı Verme ve Meyve Depolarına Su Konulması',
    scenario: 'Kışın çok soğuk günlerde sebze ve meyve depolarının sıcaklığı 0 °C\'nin altına düşüp ürünlerin donmasını engellemek için depolara büyük varillerle su konulur.',
    questionPrompt: 'Depolara su varilleri konulmasının meyvelerin donmasını önlemedeki bilimsel ilkesi hangisidir?',
    options: [
      { key: 'A', text: 'Su donarken çevresine donma ısısı (L_d) kadar ısı verir ve ortamın sıcaklığının aşırı düşmesini engeller.' },
      { key: 'B', text: 'Su buharlaşarak meyveleri ıslatır.' },
      { key: 'C', text: 'Varildeki su meyvelerin öz ısısını artırır.' },
      { key: 'D', text: 'Su depoların açık hava basıncını yükseltir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Maddeler donarken (sıvıdan katıya geçerken) çevrelerine ısı verirler (Q = m.L_d). Depodaki su varilleri 0 °C\'de donarken depoya yüksek miktarda ısı yayar; bu sayede meyvelerin donma sıcaklığına (-2 °C gibi) inmesi engellenir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Hal Değişimi Isısı ve Koruma',
    theme: 'Donma Isısı ve Günlük Yaşam'
  }
];
