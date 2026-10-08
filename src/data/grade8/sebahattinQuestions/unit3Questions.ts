import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 3. ÜNİTE: BASINÇ - SEBAHATTİN LGS SORU HAVUZU
// ============================================================================

export const sebahattinBasincQuestions: LgsQuestion[] = [
  // Subtopic 1: Katılarda Basınç
  {
    id: 3101,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'K Cisminin Düşey ve Yatay Kesilmesi',
    scenario: 'Taban alanı 3A ve yüksekliği 2a olan homojen K cisminin masa üzerinde oluşturduğu basınç 2P\'dir. Bu cisim farklı şekillerde kesilerek taralı kısımlar atılıyor:\n• 1. Durum: Cisim yatay olarak ortadan kesilip üstteki yarısı atılıyor (Ağırlık yarıya iner, taban alanı 3A sabit kalır).\n• 2. Durum: Cisim düşey olarak tam ortadan kesilip sağ yarısı atılıyor (Ağırlık ve taban alanı aynı oranda yarıya iner).\n• 3. Durum: Cisim düşey olarak 2a ve a olacak şekilde kesilip 2a\'lık kısım atılıyor (Geriye kalan a tabanlı parçanın ağırlık/yüzey oranı değişmez).',
    questionPrompt: 'Buna göre taralı bölgeler atıldıktan sonra geriye kalan parçaların masaya uyguladıkları basınçlar hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: '1. Durum: P, 2. Durum: 2P, 3. Durum: 2P' },
      { key: 'B', text: '1. Durum: 2P, 2. Durum: P, 3. Durum: P' },
      { key: 'C', text: '1. Durum: P, 2. Durum: P, 3. Durum: P' },
      { key: 'D', text: '1. Durum: 2P, 2. Durum: 2P, 3. Durum: P' }
    ],
    correctAnswer: 'A',
    explanation: '1. durumda taban alanı değişmeden ağırlık yarıya indiği için basınç 2P\'den P\'ye düşer. 2. ve 3. durumlarda ise cisim düşey (dik) olarak kesildiğinde ağırlık ile taban alanı aynı oranda azaldığı için birim alana düşen kuvvet (P = G/S) değişmez ve 2P olarak kalır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Katı Basıncı Kesilme Kuralı',
    theme: 'Katı Basıncı ve Boyut İlişkisi'
  },
  {
    id: 3102,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Tartı Üzerinde Ayak Sayısı Değişimi',
    scenario: 'Bir öğrenci Şekil 1\'de iki ayağını birden tartıya basarak tartılıyor. Şekil 2\'de ise bir ayağını havaya kaldırarak tek ayağı üzerinde tartılıyor.',
    questionPrompt: 'Buna göre,\nI. Şekil 2\'de öğrencinin tartıya uyguladığı basınç, Şekil 1\'deki basınçtan fazladır.\nII. Şekil 1\'de tartının yere uyguladığı basınç, Şekil 2\'deki basınçtan fazladır.\nIII. Şekil 1 ve Şekil 2\'de tartının yere uyguladığı basınçlar birbirine eşittir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'Yalnız II' },
      { key: 'C', text: 'I ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'C',
    explanation: 'Öğrencinin ayak tabanı alanı yarıya indiği için öğrencinin tartı yüzeyine yaptığı basınç 2 katına çıkar (I doğru). Ancak tartının kendi tabanı ve üzerindeki toplam ağırlık (öğrenci + tartı) değişmediği için tartının odanın zeminine uyguladığı basınç her iki durumda da tam eşittir (III doğru).',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Çoklu Yüzey Analizi',
    theme: 'Katı Basıncı ve Temas Yüzeyi'
  },
  {
    id: 3103,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Seksek Oyunu ve Zemin Basınç Grafiği',
    scenario: 'Geleneksel çocuk oyunlarımızdan seksekte kurallar şöyledir:\n1, 2, 3 ve 6 numaralı hanelere tek ayakla basılır (Taban alanı S).\n4-5 ve 7-8 numaralı hanelere ise iki ayakla yan yana basılır (Taban alanı 2S).',
    questionPrompt: 'Seksek oynayan bir çocuğun 1. haneden 8. haneye kadar zeminlere uyguladığı basıncın karelere göre grafiği nasıl olmalıdır?',
    options: [
      { key: 'A', text: 'Tüm karelerde basınç eşit ve sabittir.' },
      { key: 'B', text: '1, 2, 3, 6 numaralı karelerde basınç yüksek (2P), 4, 5, 7, 8 numaralı karelerde basınç yarıya inmiştir (P).' },
      { key: 'C', text: 'Tek ayakla basılan karelerde basınç sıfırdır.' },
      { key: 'D', text: 'Çift ayakla basılan karelerde basınç 2 kat daha fazladır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Çocuğun ağırlığı sabittir. Tek ayakla bastığı 1, 2, 3 ve 6. karelerde yüzey alanı küçük olduğu için basınç yüksek (2P), iki ayakla bastığı 4-5 ve 7-8 karelerinde ise yüzey alanı 2 katına çıktığı için basınç yarıya (P) iner.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Günlük Yaşam Modellemesi',
    theme: 'Katı Basıncı Grafikleri'
  },
  {
    id: 3104,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'İnce Topuklu ve Spor Ayakkabı Çamur Deneyi',
    scenario: 'Ağırlıkları birbirine eşit olan iki arkadaştan Ayşe ince topuklu ayakkabı, Elif ise geniş tabanlı spor ayakkabı giyerek çamurlu bir yolda yürümektedir.',
    questionPrompt: 'Ayşe\'nin çamurda Elif\'e göre çok daha fazla batmasının sebebi hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Ayşe\'nin yere uyguladığı toplam dik kuvvetin Elif\'inkinden büyük olması.' },
      { key: 'B', text: 'İnce topuklu ayakkabının temas yüzey alanının çok küçük olması nedeniyle çamura uygulanan basıncın çok büyük olması.' },
      { key: 'C', text: 'Spor ayakkabının çamurun kaldırma kuvvetini artırması.' },
      { key: 'D', text: 'Ayşe\'nin yer çekimi ivmesini artırması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ağırlıklar eşitken katı basıncı temas yüzey alanı ile ters orantılıdır. İnce topuklu ayakkabının yüzeyi çok küçük olduğundan basıncı devasadır ve çamura daha derin batar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Yüzey Alanı ve Katı Basıncı'
  },
  {
    id: 3105,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Özdeş Tuğlalarla Sünger Zemin Deneyi',
    scenario: 'Bir öğrenci özdeş tuğlalar kullanarak sünger zemin üzerinde üç farklı düzenek hazırlamıştır:\n• 1. Düzenek: 1 adet tuğla geniş yüzeyi (2S) üzerine yatay konulmuştur.\n• 2. Düzenek: 1 adet tuğla dar yüzeyi (S) üzerine dikey konulmuştur.\n• 3. Düzenek: 2 adet tuğla üst üste dar yüzeyleri (S) üzerine konulmuştur.\nÖğrenci tuğlaların süngere batma miktarlarını ölçmüştür.',
    questionPrompt: 'Bu deneyde katı basıncının "cismin ağırlığına" ve "yüzey alanına" bağlı olduğunu ispatlamak isteyen öğrenci sırasıyla hangi düzenek çiftlerini karşılaştırmalıdır?',
    options: [
      { key: 'A', text: 'Ağırlık için 1 ve 2; Yüzey alanı için 2 ve 3' },
      { key: 'B', text: 'Ağırlık için 2 ve 3; Yüzey alanı için 1 ve 2' },
      { key: 'C', text: 'Ağırlık için 1 ve 3; Yüzey alanı için 2 ve 3' },
      { key: 'D', text: 'Ağırlık için 1 ve 2; Yüzey alanı için 1 ve 3' }
    ],
    correctAnswer: 'B',
    explanation: 'Kontrollü deneyde incelenen değişken (bağımsız değişken) farklı, diğer değişkenler sabit tutulmalıdır. Katı basıncının cismin ağırlığına bağlı olduğunu kanıtlamak için yüzey alanı aynı (S), ağırlıkları farklı olan 2 ve 3. düzenekler seçilmelidir. Yüzey alanına bağlı olduğunu kanıtlamak için ise ağırlıkları aynı (1 tuğla), yüzey alanları farklı (S ve 2S) olan 1 ve 2. düzenekler seçilmelidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney Tasarımı',
    theme: 'Katı Basıncında Değişkenler'
  },
  {
    id: 3106,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Kesik Koni Şeklindeki Cismin Ters Çevrilmesi',
    scenario: 'Üst taban alanı S, alt taban alanı 3S olan kesik koni biçimindeki homojen bir cisim yatay masa üzerinde durmaktadır (1. Durum). Bu cisim baş aşağı ters çevrilerek masaya konulmuştur (2. Durum).',
    questionPrompt: 'Cisim ters çevrildiğinde masaya uyguladığı katı basıncı ve zemine uyguladığı toplam basınç kuvveti nasıl değişir?',
    options: [
      { key: 'A', text: 'Basınç artar, Basınç kuvveti değişmez.' },
      { key: 'B', text: 'Basınç azalır, Basınç kuvveti artar.' },
      { key: 'C', text: 'Hem basınç hem de basınç kuvveti artar.' },
      { key: 'D', text: 'Basınç değişmez, Basınç kuvveti azalır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Katı basınç kuvveti cismin toplam ağırlığına eşittir. Cisim ters çevrildiğinde ağırlığı değişmediği için masaya uygulanan basınç kuvveti kesinlikle değişmez. Ancak temas yüzey alanı 3S\'ten S\'ye düştüğü için (P = G/S) masaya uygulanan katı basıncı 3 katına çıkar (artar).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kuvvet vs Basınç Ayrımı',
    theme: 'Basınç Kuvveti ve Basınç'
  },
  {
    id: 3107,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Katıların Kuvveti Aynen İletme Prensibi ve Çivi Deneyi',
    scenario: 'Bir marangoz tahtaya çakmak istediği çivinin geniş başına çekiciyle F büyüklüğünde bir dik kuvvet uygulamıştır. Çivinin geniş başının yüzey alanı S1 = 2 cm², tahtaya batan sivri ucunun yüzey alanı ise S2 = 0,02 cm²\'dir.',
    questionPrompt: 'Bu durumla ilgili yapılan değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Çivinin sivri ucundaki basınç kuvveti başındakinden 100 kat daha büyüktür.' },
      { key: 'B', text: 'Katılar kuvveti doğrultusunu ve büyüklüğünü değiştirmeden iletir; sivri uçtaki yüzey çok küçük olduğu için basınç baş kısmına göre katlarca daha büyüktür.' },
      { key: 'C', text: 'Katılar basıncı aynen iletir ancak kuvveti azaltır.' },
      { key: 'D', text: 'Çivinin tahtaya batmasını sağlayan etken çivinin ağırlığının çekicin kuvvetinden büyük olmasıdır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Katı maddeler üzerlerine uygulanan kuvveti hiçbir değişikliğe uğratmadan uygulandığı yönde aynen iletirler (F1 = F2 = F). Ancak çivinin sivri ucunun yüzey alanı çok küçük olduğundan oluşan basınç devasadır (P2 >> P1) ve bu sayede çivi tahtaya kolayca saplanır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Katıların Kuvveti İletmesi',
    theme: 'Katılarda Kuvvet ve Basınç İletimi'
  },
  {
    id: 3108,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Ağır Yük Kamyonlarında Tekerlek Sayısı ve Basınç',
    scenario: 'Maden ocaklarında ve otoyollarda yük taşıyan ağır tonajlı kamyon ve tırlarda standart otomobillerdeki gibi 4 tekerlek yerine 12, 18 hatta 24 tekerlek bulunmaktadır.',
    questionPrompt: 'Ağır tonajlı araçlarda tekerlek sayısının bu kadar çok olmasının temel gerekçesi hangisidir?',
    options: [
      { key: 'A', text: 'Aracın asfalt zemine uyguladığı toplam dik kuvveti artırmak.' },
      { key: 'B', text: 'Yere temas eden toplam yüzey alanını artırarak zemine uygulanan basıncı düşürmek ve yolun çökmesini önlemek.' },
      { key: 'C', text: 'Aracın virajlarda daha hızlı dönmesini sağlamak.' },
      { key: 'D', text: 'Sürtünme kuvvetini sıfıra indirerek yakıt tasarrufu yapmak.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tekerlek sayısının artırılması yere temas eden yüzey alanını (S) katlarca artırır. P = G/S bağıntısına göre yüzey alanı arttıkça asfalt zemine yapılan birim alan basıncı azalır; böylece yolların bozulması, çökmesi ve tekerleklerin batması engellenir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Mühendislikte Basınç Çözümleri',
    theme: 'Basıncı Azaltma Yöntemleri'
  },

  // Subtopic 2: Sıvı Basıncı
  {
    id: 3201,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Farklı Şekilli Kaplarda Sıvı Basıncı',
    scenario: 'Taban alanları sırasıyla 2S, 2S ve 3S olan daralan, genişleyen ve silindirik K, L ve M kaplarına aynı h yüksekliğine kadar su doldurulmuştur.',
    questionPrompt: 'K, L ve M kaplarının tabanında oluşan sıvı basınçları (PK, PL, PM) arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'PM > PL > PK' },
      { key: 'B', text: 'PK > PL > PM' },
      { key: 'C', text: 'PK = PL = PM' },
      { key: 'D', text: 'PL > PK > PM' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıvı basıncı kabın şekline veya içindeki toplam sıvı miktarına bağlı DEĞİLDİR. Sıvı basıncı formülü P = h . d\'dir. Her üç kapta da sıvı cinsi aynı (su) ve sıvı derinliği aynı (h) olduğundan taban sıvı basınçları birbirine eşittir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'P=h.d Prensibi',
    theme: 'Sıvı Basıncını Etkileyen Faktörler'
  },
  {
    id: 3202,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Baraj Duvarlarının Aşağıya Doğru Kalınlaşması',
    scenario: 'Hidroelektrik santrallerinde suyun tutulduğu devasa baraj duvarları inşa edilirken baraj gövdesi yukarıdan aşağıya doğru inildikçe kademeli olarak kalınlaştırılır.',
    questionPrompt: 'Baraj duvarlarının tabana doğru kalın yapılmasının temel fiziksel sebebi hangisidir?',
    options: [
      { key: 'A', text: 'Derinlere inildikçe suyun yoğunluğunun artması.' },
      { key: 'B', text: 'Derinlik arttıkça sıvı basıncının artması ve tabandaki yüksek basınca dayanma zorunluluğu.' },
      { key: 'C', text: 'Baraj gölündeki suyun sıcaklığının derinde daha fazla olması.' },
      { key: 'D', text: 'Suyun kabın şekline bağlı olarak yukarı doğru daha fazla kuvvet uygulaması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sıvı basıncı derinlikle doğru orantılıdır (P = h.d). Barajın en dibinde su derinliği maksimum olduğu için duvarın tabanına etki eden sıvı basıncı çok büyüktür; duvarın yıkılmaması için tabanı kalın inşa edilir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Mühendislik ve Fizik İlişkisi',
    theme: 'Sıvı Derinliği ve Basınç'
  },
  {
    id: 3203,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Dalgıcın Hava Kabarcıklarının Büyümesi',
    scenario: 'Denizin 25 metre derinliğinde tüplü dalış yapan bir dalgıcın ağzından çıkan hava kabarcıkları deniz yüzeyine doğru yükseldikçe hacimleri giderek büyümekte ve geniş halkalara dönüşmektedir.',
    questionPrompt: 'Hava kabarcıklarının yüzeye yaklaştıkça büyümesinin sebebi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Yüzeye yaklaştıkça su derinliği azaldığı için kabarcığa etki eden sıvı basıncı azalır ve içteki gaz genleşir.' },
      { key: 'B', text: 'Yüzeye yaklaştıkça suyun yoğunluğu arttığı için kabarcığı sıkıştırır.' },
      { key: 'C', text: 'Suyun sıcaklığının derinde daha yüksek olması gazı küçültür.' },
      { key: 'D', text: 'Kabarcıkların kütlesi yukarı çıktıkça sürekli artar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Derinlik azaldıkça (h düştükçe) kabarcığa dışarıdan etki eden sıvı basıncı azalır. Dış basınç azaldığında kabarcığın içindeki havanın basıncı baskın gelir ve hacmi genişler.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Gaz-Sıvı Basınç Dengesi',
    theme: 'Sıvı Basıncı Değişimi'
  },
  {
    id: 3204,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Hidrolik Fren ve Pascal Prensibi',
    scenario: 'Sürücü otomobilin fren pedalına küçük bir kuvvetle bastığında fren pedalındaki piston fren hidrolik sıvısını iter. Borulardaki sıvı bu basıncı tekerleklerdeki balatalara aynen ileterek tonlarca ağırlıktaki aracın durmasını sağlar.',
    questionPrompt: 'Bu durum sıvıların hangi temel özelliği ile açıklanır (Pascal Prensibi)?',
    options: [
      { key: 'A', text: 'Sıvıların sıcaklıkla genleşmesi özelliği.' },
      { key: 'B', text: 'Sıvıların sıkıştırılamaz kabul edilmesi ve üzerlerine uygulanan basıncı her yöne aynı büyüklükte iletmesi.' },
      { key: 'C', text: 'Sıvıların yer çekimine karşı ters yönde akması.' },
      { key: 'D', text: 'Sıvıların sadece uygulanan kuvveti iletip basıncı iletmemesi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pascal prensibine göre kapalı kaplardaki sıvılar üzerlerine uygulanan basıncı temas ettikleri tüm yüzeylere her doğrultuda ve aynı büyüklükte iletirler.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Pascal Prensibi Uygulamaları',
    theme: 'Pascal Prensibi'
  },
  {
    id: 3205,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'U-Borusu Manometresi ve Sıvı Yoğunluğu Deneyi',
    scenario: 'İçerisinde su bulunan bir U borusunun bir ucuna esnek hortumla huni bağlanmış, huninin ağzına gergin esnek zar geçirilmiştir. Huni önce d yoğunluklu X sıvısına h kadar daldırılmış, U borusundaki sıvı seviye farkı Δh1 olarak ölçülmüştür. Daha sonra aynı huni 2d yoğunluklu Y sıvısına yine h kadar daldırılmış ve fark Δh2 olarak ölçülmüştür.',
    questionPrompt: 'Bu kontrollü deneyin bağımsız değişkeni ve U borusundaki sıvı kolları farkı (Δh1 ve Δh2) arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'Bağımsız değişken sıvı derinliğidir; Δh1 = Δh2\'dir.' },
      { key: 'B', text: 'Bağımsız değişken sıvının yoğunluğudur; Δh2 > Δh1\'dir.' },
      { key: 'C', text: 'Bağımsız değişken huninin büyüklüğüdür; Δh1 > Δh2\'dir.' },
      { key: 'D', text: 'Bağımsız değişken U borusunun şeklidir; Δh2 = 2Δh1\'dir fakat basınç değişmez.' }
    ],
    correctAnswer: 'B',
    explanation: 'Deneyde huninin batırıldığı derinlik sabit (h), sıvıların yoğunlukları farklıdır (d ve 2d). Bu nedenle bağımsız değişken sıvının yoğunluğudur. Sıvı basıncı formülü P = h.d olduğundan yoğunluğu büyük olan Y sıvısında oluşan basınç daha büyüktür ve U borusundaki cıva kollarındaki seviye farkı daha fazla olur (Δh2 > Δh1).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'U-Borusu Düzeneği ve Yoğunluk',
    theme: 'Sıvı Basıncı ve Yoğunluk İlişkisi'
  },
  {
    id: 3206,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Kademeli Kaba Sabit Debili Muslukla Su Akıtılması',
    scenario: 'Tabanı geniş (2S), üst kısmı dar (S) olan iki kademeli boş bir kaba sabit debili bir musluktan su akıtılmaktadır. Kabın tabanındaki sıvı basıncının zamana bağlı değişimi incelenmektedir.',
    questionPrompt: 'Kabın tabanındaki sıvı basıncının zamana göre değişim grafiği nasıldır?',
    options: [
      { key: 'A', text: 'Basınç başlangıçtan itibaren düzgün ve tek bir eğimle sürekli artar.' },
      { key: 'B', text: 'Önce geniş taban dolarken basınç yavaş artar (eğim az), dar üst kısma geçildiğinde su yüksekliği daha hızlı arttığı için basınç daha dik bir eğimle artar.' },
      { key: 'C', text: 'Basınç önce hızla artar, üst kısımda ise tamamen sabit kalır.' },
      { key: 'D', text: 'Geniş kısımda basınç artar, dar kısımda basınç azalır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sabit debili musluktan birim zamanda eşit hacimde su akar. Kabın alt geniş bölümü dolarken suyun yükselme hızı yavaştır; dolayısıyla taban basıncı artışı yavaş bir eğimle gerçekleşir. Üstteki dar bölüme geçildiğinde aynı hacimdeki su çok daha hızlı yükseklik kazandırır; böylece basınç-zaman grafiğinin eğimi dikleşir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Kademeli Kap Basınç-Zaman Analizi',
    theme: 'Sıvı Basıncı Zamana Bağlı Grafikler'
  },
  {
    id: 3207,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Farklı Yüksekliklerde Açılan Deliklerden Fışkıran Su',
    scenario: 'İçi su dolu silindirik bir pet şişenin üzerinde tabandan h, 2h ve 3h yüksekliklerinde özdeş K, L ve M delikleri açılmıştır. Delikleri kapatan bantlar aynı anda çekildiğinde deliklerden çıkan suların yatayda aldıkları yollar (menziller) gözlemlenmiştir.',
    questionPrompt: 'Deliklerden çıkan suların fışkırma hızları ve yatayda aldıkları yollar hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'En üstteki M deliğinden fışkıran suyun hızı en fazladır çünkü hava ile temas halindedir.' },
      { key: 'B', text: 'Tüm deliklerden fışkıran suların hızları ve menzilleri eşittir.' },
      { key: 'C', text: 'En alttaki K deliğindeki su derinliği en fazla olduğundan üzerindeki sıvı basıncı en büyüktür ve su en büyük hızla fışkırır.' },
      { key: 'D', text: 'Orta seviyedeki L deliğinden fışkıran suyun hızı sıfırdır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıvı basıncı açık yüzeye olan derinlikle (h) doğru orantılıdır. Şişenin en altındaki K deliğinin üzerindeki su derinliği maksimumdur; dolayısıyla buradaki sıvı basıncı en büyüktür ve su en yüksek fışkırma hızıyla çıkarak yatayda en uzağa ulaşır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Derinlik ve Fışkırma Hızı',
    theme: 'Sıvı Basıncında Derinlik ve Basınç'
  },
  {
    id: 3208,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Su Cenderesi ve Berber Koltuğu Prensibi',
    scenario: 'Bir su cenderesinde küçük pistonun yüzey alanı S, büyük pistonun yüzey alanı ise 20S\'tir. Küçük pistona uygulanan 50 N büyüklüğündeki kuvvet ile büyük pistondaki 1000 N ağırlığındaki bir yük dengelenmiştir.',
    questionPrompt: 'Bu su cenderesi düzeneği ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Küçük pistonda oluşturulan sıvı basıncı, büyük pistondaki sıvı basıncına eşittir.' },
      { key: 'B', text: 'Düzenek Pascal prensibine göre çalışır ve kuvvetten kazanç sağlar.' },
      { key: 'C', text: 'Küçük pistona uygulanan kuvvet büyük pistona aynen iletilmiştir.' },
      { key: 'D', text: 'Sıvıların sıkıştırılamaz olması ve basıncı her yöne eşit iletmesi sayesinde küçük kuvvetle büyük yük kaldırılmıştır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıvılar kuvveti DEĞİL, üzerlerine uygulanan BASINCI aynen iletirler! Küçük pistondaki basınç P = F/S = 50/S\'dir; bu basınç büyük pistona aynen iletilir ve 20S yüzeyde 20 x 50 = 1000 N kuvvet üretir. "Kuvvet aynen iletilmiştir" ifadesi yanlıştır, katılar kuvveti iletirken sıvılar basıncı iletir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Çeldirici ve İlke Ayrımı',
    theme: 'Su Cenderesi ve Kuvvet Kazancı'
  },

  // Subtopic 3: Gazlarda Basınç
  {
    id: 3301,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Torricelli Deneyi ve Farklı Sıvılar',
    scenario: 'Torricelli, deniz seviyesinde ve 0 °C sıcaklıkta 1 metre uzunluğundaki cam boruyu cıva ile doldurup cıva dolu çanağa ters daldırdığında borudaki cıva seviyesinin 76 cm\'de dengelendiğini gözlemlemiştir.',
    questionPrompt: 'Torricelli deneyinde cıva yerine yoğunluğu cıvadan yaklaşık 13,6 kat daha küçük olan saf su kullanılsaydı ne olurdu?',
    options: [
      { key: 'A', text: 'Borudaki su seviyesi yine tam 76 cm olurdu.' },
      { key: 'B', text: 'Açık hava basıncını dengelemek için yaklaşık 10,3 metre (1033 cm) uzunluğunda cam boru gerekirdi.' },
      { key: 'C', text: 'Borudaki su seviyesi 5 cm\'ye kadar düşerdi.' },
      { key: 'D', text: 'Su borudan tamamen boşalır ve hiç sıvı kalmazdı.' }
    ],
    correctAnswer: 'B',
    explanation: 'Açık hava basıncı P0 = h . d formülüyle dengelenir. Sıvının yoğunluğu d azaldıkça aynı basıncı oluşturmak için gereken sıvı yüksekliği h o oranda artar. Cıvanın yoğunluğu 13,6 g/cm3 iken suyun yoğunluğu 1 g/cm3 olduğundan h_su = 76 x 13,6 ≈ 1033 cm (yaklaşık 10,3 metre) olurdu.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Torricelli Hesabı ve Muhakemesi',
    theme: 'Açık Hava Basıncı ve Barometre'
  },
  {
    id: 3302,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Ters Çevrilen Bardakta Suyun Dökülmemesi',
    scenario: 'İçi tamamen su dolu bir cam bardağın ağzı sert bir kağıt parçası ile hava almayacak şekilde kapatılmış ve bardak dikkatlice baş aşağı ters çevrilmiştir. Kağıdın düşmediği ve suyun dökülmediği gözlemlenmiştir.',
    questionPrompt: 'Bu deneyle ilgili yapılan yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kağıda alttan yukarı doğru etki eden açık hava basıncı, bardaktaki suyun sıvı basıncından büyük veya eşittir.' },
      { key: 'B', text: 'Suyun dökülmeme sebebi sadece kağıdın yapışkan özelliğidir.' },
      { key: 'C', text: 'Bardak içerisindeki havanın basıncı dışarıdaki açık hava basıncından daha fazladır.' },
      { key: 'D', text: 'Deney havasız bir fanusta yapılsaydı kağıt yine düşmezdi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Açık hava basıncı kağıdın alt yüzeyine yukarı doğru kuvvet uygular (P_açık). Bu basınç bardak içindeki suyun derinlik basıncını (P_sıvı) dengelediği için kağıt düşmez ve su dökülmez.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Açık Hava Basıncı Varlığı',
    theme: 'Açık Hava Basıncı Deneyleri'
  },
  {
    id: 3303,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Haşlanmış Yumurtanın Şişeye Girmesi Deneyi',
    scenario: 'Cam bir süt şişesinin ağzına konulan kabuğu soyulmuş haşlanmış yumurta içeri girmemektedir. Şişenin içine yanan bir kağıt parçası atılıp yumurta tekrar ağzına konulduğunda; ateş sönmüş ve yumurta kendiliğinden şişenin içine çekilmiştir.',
    questionPrompt: 'Yumurtanın şişenin içine girmesini sağlayan temel etken hangisidir?',
    options: [
      { key: 'A', text: 'Şişe içindeki kağıt yanınca içerideki gaz basıncı azalmış ve dıştaki yüksek açık hava basıncı yumurtayı içeri itmiştir.' },
      { key: 'B', text: 'Yumurta ısıyla eriyerek sıvı hale geçmiştir.' },
      { key: 'C', text: 'Şişe içindeki gaz basıncı artarak yumurtayı aşağı çekmiştir.' },
      { key: 'D', text: 'Yumurtanın kütlesi ateşin etkisiyle azalmıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kağıt yanarken şişedeki oksijen tüketilir ve gaz molekülleri dışarı kaçar; ateş söndüğünde şişe içi soğur ve iç basınç hızla düşer. Dışarıdaki açık hava basıncı iç basınçtan büyük hale gelerek yumurtayı şişenin içine iter.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'İç-Dış Basınç Farkı',
    theme: 'Gaz Basıncı ve Vakum'
  },
  {
    id: 3304,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Dağın Yamacında Barometre Ölçümleri',
    scenario: 'Bir araştırmacı bir dağın deniz seviyesindeki K noktası, orta yamacındaki L noktası ve zirvesindeki M noktasında özdeş cıvalı barometrelerle açık hava basıncını ölçmüştür.',
    questionPrompt: 'K, L ve M noktalarında barometrede okunan cıva yükseklikleri (hK, hL, hM) arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'hM > hL > hK' },
      { key: 'B', text: 'hK > hL > hM' },
      { key: 'C', text: 'hK = hL = hM' },
      { key: 'D', text: 'hL > hK > hM' }
    ],
    correctAnswer: 'B',
    explanation: 'Deniz seviyesinden yukarılara çıkıldıkça üzerimizdeki atmosfer hava sütununun yüksekliği ve yoğunluğu azalır; bu nedenle açık hava basıncı düşer. Deniz seviyesindeki K noktasında basınç en yüksek (hK en büyük), zirvedeki M noktasında ise en düşüktür (hM en küçük).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Rakım ve Basınç Değişimi',
    theme: 'Açık Hava Basıncı ve Yükseklik'
  },
  {
    id: 3305,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Torricelli Borusunun Eğik Tutulması ve Kesit Alanı',
    scenario: 'Torricelli deneyinde deniz seviyesinde 0 °C sıcaklıkta özdeş üç düzenek kurulmuştur:\n• 1. Boru: Kesit alanı S, düşey (dik) konumda tutulmaktadır.\n• 2. Boru: Kesit alanı 2S, düşey (dik) konumda tutulmaktadır.\n• 3. Boru: Kesit alanı S, yan tarafa doğru eğik tutulmaktadır.\nHer üç borunun üst kısmında boşluk bulunmaktadır.',
    questionPrompt: 'Çanaktaki cıva seviyesinden itibaren ölçülen dik cıva sütunu yükseklikleri (h1, h2, h3) arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'h1 = h2 = h3 = 76 cm' },
      { key: 'B', text: 'h2 > h1 > h3' },
      { key: 'C', text: 'h3 > h1 = h2' },
      { key: 'D', text: 'h1 > h2 > h3' }
    ],
    correctAnswer: 'A',
    explanation: 'Torricelli deneyinde borudaki dik cıva yüksekliği (h); borunun kalınlığına (kesit alanına), borunun şekline veya borunun eğik tutulmasına bağlı DEĞİLDİR. Açık hava basıncı aynı ortamda aynı değeri dengelediği için her üç borudaki düşey yükseklik tam 76 cm\'dir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Torricelli Bağımsız Değişkenleri',
    theme: 'Barometre Değişkenleri'
  },
  {
    id: 3306,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Magdeburg Yarım Küreleri Deneyi',
    scenario: '1654 yılında Magdeburg belediye başkanı Otto von Guericke, iki büyük metal yarım küreyi birleştirip içindeki havayı vakum pompasıyla boşaltmıştır. Birbirine kilitlenmeyen bu iki yarım küreyi ayırmak için her iki taraftan sekizer tane (toplam 16) güçlü at ters yönlere doğru koşturulmuş fakat küreler birbirinden ayrılamamıştır.',
    questionPrompt: 'Kürelerin atlar tarafından ayrılamamasının sebebi hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Kürelerin metal yüzeylerinin birbirine kimyasal bağlarla kaynamış olması.' },
      { key: 'B', text: 'Kürenin içindeki havanın basıncının dışarıdaki havayı çekmesi.' },
      { key: 'C', text: 'Kürenin içindeki hava boşaltıldığı için iç basıncın sıfıra yakın olması ve dıştaki muazzam açık hava basıncının küreleri birbirine sıkıca yapıştırması.' },
      { key: 'D', text: 'Atların uyguladığı çekme kuvvetlerinin birbirini sıfırlaması.' }
    ],
    correctAnswer: 'C',
    explanation: 'Magdeburg kürelerinin içi boşaltıldığında iç gaz basıncı neredeyse sıfırlanır. Kürenin geniş dış yüzeyine etki eden açık hava basıncı tonlarca kuvvete karşılık gelir ve küreleri birbirine bastırarak ayrılmalarını imkânsız kılar. Bu deney açık hava basıncının büyüklüğünü kanıtlayan tarihi bir deneydir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Tarihi Deney ve Basınç Gücü',
    theme: 'Açık Hava Basıncı Kanıtları'
  },
  {
    id: 3307,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Uçan Balonun Gökyüzünde Yükseldikçe Patlaması',
    scenario: 'İçerisine helyum gazı doldurularak gökyüzüne bırakılan esnek bir çocuk balonu yükseldikçe hacmi giderek büyür ve belirli bir irtifaya ulaştığında aniden patlar.',
    questionPrompt: 'Balonun yükseldikçe hacminin büyümesi ve sonunda patlamasının temel sebebi hangisidir?',
    options: [
      { key: 'A', text: 'Yukarılara çıkıldıkça açık hava basıncının azalması ve esnek balonun iç basıncını dış basınca eşitlemek için sürekli genleşmesi.' },
      { key: 'B', text: 'Yukarılarda Güneş ışığının helyum gazını ısıtıp kütlesini artırması.' },
      { key: 'C', text: 'Atmosferin üst katmanlarında yer çekiminin sıfırlanması.' },
      { key: 'D', text: 'Balonun yüzeyine etki eden rüzgârın balonu yırtması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Esnek balonlarda iç gaz basıncı daima dış basınca eşittir (P_iç = P_dış). Rakım arttıkça açık hava basıncı düşer. Dış basınç azaldıkça balon hacmini genişleterek iç basıncını düşürmeye çalışır. Balonun esneklik sınırı aşıldığında zar yırtılır ve balon patlar.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'İç-Dış Basınç Dengesi ve Rakım',
    theme: 'Esnek Cisimlerde Gaz Basıncı'
  },
  {
    id: 3308,
    subTopicId: 'g8-u3-sub3',
    contextTitle: 'Pipetle Meyve Suyu İçme ve Vantuzlu Askılar',
    scenario: 'Günlük hayatımızda karşılaştığımız;\nI. Pipetle kutudaki meyve suyunu içerken pipetin içindeki havanın çekilmesi ve sıvının ağzımıza yükselmesi\nII. Cama bastırılan vantuzlu plastik askının içerisindeki hava boşaltıldığında cama sıkıca yapışması\nIII. İlaç damlalığının kauçuk ucuna basılıp bırakıldığında sıvının damlalık içine dolması',
    questionPrompt: 'Verilen bu olayların ortak çalışma prensibi hangisidir?',
    options: [
      { key: 'A', text: 'Sıvıların kaldırma kuvveti.' },
      { key: 'B', text: 'Açık hava basıncının etkisiyle iç-dış basınç farkı oluşması.' },
      { key: 'C', text: 'Pascal prensibine göre sıvıların basıncı aynen iletmesi.' },
      { key: 'D', text: 'Katıların uygulanan kuvveti doğrultusunda iletmesi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pipetle içerken iç hava emilerek iç basınç düşürülür, açık hava basıncı sıvıyı yukarı iter. Vantuzda hava boşaltılır ve dış açık hava basıncı vantuzu cama yapıştırır. Damlalıkta kauçuk bırakılınca iç basınç düşer ve açık hava basıncı ilacı içeri iter. Hepsi açık hava basıncının basınç farkı prensibine dayanır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Ortak İlke Tespiti',
    theme: 'Günlük Yaşamda Gaz Basıncı Uygulamaları'
  }
];
