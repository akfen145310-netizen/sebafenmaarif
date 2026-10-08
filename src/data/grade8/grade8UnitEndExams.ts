import { LgsQuestion } from '../../types/curriculum';

/**
 * 8. Sınıf Fen Bilimleri — Ünite Sonu 20 Soruluk LGS Deneme Sınavları
 * 
 * Standartlar:
 * 1. Her testte tam 20 adet özgün bağlam temelli LGS sorusu
 * 2. Şık dağılımı: Tam olarak 5 A, 5 B, 5 C, 5 D (%25 eşit)
 * 3. Parantez içi açıklama / ipucu içermeyen şıklar
 * 4. Doğru cevap ile çeldiricilerin eşit uzunluk ve bilimsel derinlikte olması
 */

// =========================================================================
// 1. ÜNİTE: MEVSİMLER VE İKLİM (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit1End20Questions: LgsQuestion[] = [
  {
    id: 8101,
    subTopicId: 'g8-u1-all',
    contextTitle: '21 Haziran Tarihinde Gölge Boyu Ölçümü',
    scenario: '21 Haziran tarihinde özdeş dört çubuk öğle saat 12.00’de Dünya üzerindeki farklı konumlara dikilmiştir: 1. çubuk Yengeç Dönencesi’ne, 2. çubuk Ekvator çizgisine, 3. çubuk Oğlak Dönencesi’ne, 4. çubuk ise Kuzey Kutup Dairesi’ne yerleştirilmiştir.',
    questionPrompt: 'Çubukların ölçülen gölge boyları ile ilgili aşağıdaki karşılaştırmalardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Yengeç Dönencesi’ndeki çubuğun gölge boyu sıfır olup Oğlak Dönencesi’ndeki çubuğun gölge boyu en uzundur.' },
      { key: 'B', text: 'Ekvator’daki çubuğun gölge boyu Yengeç Dönencesi’ndeki çubuğun gölge boyundan daha kısa olarak ölçülür.' },
      { key: 'C', text: 'Oğlak Dönencesi’ndeki çubuğun gölgesi öğle vakti Güneş ışınları dik geldiği için tamamen kaybolmuştur.' },
      { key: 'D', text: 'Kuzey Kutup Dairesi’ndeki çubuğun gölge boyu Ekvator üzerindeki çubuğun gölge boyundan daha kısadır.' }
    ],
    correctAnswer: 'A',
    explanation: '21 Haziran’da Güneş ışınları Yengeç Dönencesi’ne 90° dik açıyla düşer ve gölge boyu sıfır olur. GYK’de yer alan Oğlak Dönencesi ise en eğik açıyı aldığı için gölge boyu en uzundur. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Gözlem ve Veri Yorumlama',
    theme: 'Gölge Boyu ve Işık Açısı'
  },
  {
    id: 8102,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Komşu İki Şehir Arasındaki Rüzgâr Yönü',
    scenario: 'Birbirine komşu K ve L şehirlerinde aynı saatte yapılan ölçümlerde K şehrinde hava sıcaklığının 8 derece ve gökyüzünün tamamen bulutsuz olduğu, L şehrinde ise hava sıcaklığının 26 derece ve gökyüzünün yoğun bulutlu olduğu kaydedilmiştir.',
    questionPrompt: 'Bu iki şehir arasındaki hava hareketleri ve atmosfer basıncı ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'L şehri Yüksek Basınç alanı oluşturduğundan rüzgârın yönü L şehrinden K şehrine doğru gerçekleşir.' },
      { key: 'B', text: 'K şehri Yüksek Basınç, L şehri Alçak Basınç alanı olup rüzgâr K şehrinden L şehrine doğru eser.' },
      { key: 'C', text: 'K şehrinde yükselici hava hareketleri görülürken L şehrinde alçalıcı hava hareketleri hakimdir.' },
      { key: 'D', text: 'Her iki şehrin de gaz yoğunlukları eşit olduğundan şehirler arasında rüzgâr oluşumu gözlenmez.' }
    ],
    correctAnswer: 'B',
    explanation: 'Soğuk ve açık hava Yüksek Basınç (K), sıcak ve bulutlu hava Alçak Basınçtır (L). Rüzgâr daima Yüksek Basınçtan Alçak Basınca (K’den L’ye) doğru eser. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Mantık Muhakeme',
    theme: 'Basınç Merkezleri ve Rüzgâr'
  },
  {
    id: 8103,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Ekinoks Tarihinde Gece ve Gündüz Süreleri',
    scenario: '23 Eylül tarihinde Dünya üzerinde yer alan Londra, Kahire, Sidney ve Tokyo şehirlerinde 24 saatlik süre boyunca gece ve gündüz süreleri ölçülerek tabloya kaydedilmiştir.',
    questionPrompt: 'Bu tarihte yapılan ölçüm sonuçları dikkate alındığında aşağıdaki çıkarımlardan hangisine ulaşılır?',
    options: [
      { key: 'A', text: 'Kuzey Yarım Küre’deki şehirlerde gündüz süresi Güney Yarım Küre’deki şehirlere göre daha uzundur.' },
      { key: 'B', text: 'Güney Yarım Küre’de bulunan Sidney şehrinde yılın en uzun gündüz süresi bu tarihte kaydedilmiştir.' },
      { key: 'C', text: 'Güneş ışınları Ekvator’a dik düştüğü için tüm şehirlerde 12 saat gece ve 12 saat gündüz yaşanmıştır.' },
      { key: 'D', text: 'Kutup noktalarındaki eksen eğikliği sebebiyle gece ve gündüz arasındaki fark en yüksek değere ulaşır.' }
    ],
    correctAnswer: 'C',
    explanation: '23 Eylül ekinoks tarihinde aydınlanma çemberi kutuplardan geçer ve Dünya’nın her yerinde 12 saat gece, 12 saat gündüz eşitliği gerçekleşir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Tablo Yorumlama',
    theme: 'Ekinoks ve Gece Gündüz Eşitliği'
  },
  {
    id: 8104,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Sera Etkisi ve Küresel İklim Değişikliği',
    scenario: 'Bilim insanları atmosferdeki sera gazlarının (karbondioksit, metan ve su buharı) son 100 yıldaki artış grafiği ile Dünya’nın ortalama yüzey sıcaklığındaki artış eğrisinin birebir örtüştüğünü ortaya koymuştur.',
    questionPrompt: 'Bu durumun gezegenimiz üzerinde yaratacağı olası sonuçlar arasında aşağıdakilerden hangisi gösterilemez?',
    options: [
      { key: 'A', text: 'Kutuplardaki buzul kütlelerinin erimesiyle birlikte okyanus su seviyelerinde tehlikeli yükselmeler yaşanması.' },
      { key: 'B', text: 'İklim kuşaklarının kayması sonucu kuraklık ve çölleşme tehlikesinin tarımsal üretimi olumsuz etkilemesi.' },
      { key: 'C', text: 'Kasırga, sel ve şiddetli fırtına gibi ekstrem hava olaylarının görülme sıklığının artış göstermesi.' },
      { key: 'D', text: 'Dünya’nın kendi ekseni etrafındaki dönme süresinin uzayarak 24 saatten 30 saate doğru çıkması.' }
    ],
    correctAnswer: 'D',
    explanation: 'Küresel ısınma buzulları eritir, iklimi değiştirir, ekstrem olayları artırır ancak Dünya’nın kendi ekseni etrafındaki 24 saatlik dönme periyodunu etkilemez. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Bilimsel Muhakeme',
    theme: 'Küresel Isınma ve Sonuçları'
  },
  {
    id: 8105,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Özdeş Metal Levhalarla Işık Açısı Deneyi',
    scenario: 'Özdeş iki siyah metal levhadan biri masa üzerine yatay konulurken diğeri 45 derece eğik tutulmuştur. Özdeş fenerlerle eşit mesafeden 10 dakika ışık tutulduğunda yatay levhadaki sıcaklık artışının eğik levhadan daha az olduğu görülmüştür çünkü yatay levha ışığı eğik açıyla almıştır.',
    questionPrompt: 'Bu deneyden çıkarılacak en kapsamlı bilimsel sonuç aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Işığın birim yüzeye düşme açısı büyüdükçe aktarılan enerji miktarı ve sıcaklık artışı artar.' },
      { key: 'B', text: 'Metal levhaların kütlesi arttıkça ışık kaynağından aldıkları toplam foton enerjisi miktarı azalır.' },
      { key: 'C', text: 'Işık kaynağına olan uzaklık değişmese bile ışığın rengi cisimlerin ısınma hızını doğrudan belirler.' },
      { key: 'D', text: 'Gölge boyunun uzun olduğu alanlarda sıcaklık artışı daima daha hızlı ve yüksek değerde gerçekleşir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işınların yüzeye dik veya dike yakın düşmesi birim alandaki ışık enerjisini yoğunlaştırarak sıcaklık artışını hızlandırır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Deney ve Değişken Analizi',
    theme: 'Işığın Geliş Açısı ve Enerji'
  },
  {
    id: 8106,
    subTopicId: 'g8-u1-all',
    contextTitle: '21 Aralık Tarihinde Türkiye ve Brezilya Karşılaştırması',
    scenario: '21 Aralık günü Türkiye’de yaşayan Mehmet kalın montunu giyerek kar yağışını izlerken, Brezilya’daki arkadaşı Carlos deniz kıyısında güneşlendiğini ve yılın en uzun gündüzünü yaşadıklarını söylemiştir.',
    questionPrompt: 'Aynı tarihte iki farklı ülkede birbirine tamamen zıt mevsimlerin yaşanmasının temel sebebi nedir?',
    options: [
      { key: 'A', text: 'Dünya’nın Güneş etrafında dolanırken izlediği yörüngenin elips şeklinde olması ve güneşe yaklaşması.' },
      { key: 'B', text: 'Dünya’nın 23 derece 27 dakikalık eksen eğikliği sebebiyle yarım kürelerin ışığı farklı açılarla alması.' },
      { key: 'C', text: 'Brezilya’nın deniz seviyesinden yüksekliğinin Türkiye’nin ortalama yükseltisinden katbekat fazla olması.' },
      { key: 'D', text: 'Türkiye’nin kendi ekseni etrafında Brezilya’dan daha yavaş dönerek gece süresini uzatmış olması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Eksen eğikliği nedeniyle 21 Aralık’ta Güney Yarım Küre (Brezilya) dik açı alarak yazı başlatırken, Kuzey Yarım Küre (Türkiye) eğik açı alarak kışı başlatır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Eksen Eğikliği ve Zıt Mevsimler'
  },
  {
    id: 8107,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Atmosferdeki Yağış Türlerinin Sınıflandırılması',
    scenario: 'Bir meteoroloji uzmanı televizyon yayınında: "Bu gece hava sıcaklığı sıfır derecenin altına ineceğinden açıkta park edilen araçların camlarında ve yerdeki kuru otların üzerinde buz kristalleri oluşacaktır" uyarısında bulunmuştur.',
    questionPrompt: 'Meteoroloji uzmanının bahsettiği bu hava olayı aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Gökyüzündeki bulut tabakasının aniden dikey hava hareketleriyle yoğuşması sonucu oluşan dolu.' },
      { key: 'B', text: 'Yeryüzündeki sıcak su birikintilerinin buharlaşarak havada asılı kalmasıyla oluşan yoğun sis tabakası.' },
      { key: 'C', text: 'Yeryüzüne yakın temas yüzeylerindeki su buharının doğrudan katılaşmasıyla oluşan kırağı.' },
      { key: 'D', text: 'Gökyüzündeki su buharının 0 derecenin altında buz kristalleri şeklinde yavaşça inmesiyle oluşan kar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıcaklığın 0 °C altına düştüğü gecelerde yerdeki nesneler üzerinde su buharının doğrudan buza dönüşmesi KIRAĞI olayıdır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kavram Tanıma ve Analiz',
    theme: 'Yağış Türleri ve Kırağı'
  },
  {
    id: 8108,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Deniz ve Kara Arasında Rüzgâr Tüneli',
    scenario: 'Yaz mevsiminde bir tatil beldesinde öğleden sonra denizden kumsala doğru serin bir rüzgâr eserken, gece yarısından sonra rüzgârın kumsaldan denize doğru yöneldiği kaydedilmiştir.',
    questionPrompt: 'Bu gözlem verisi doğrultusunda gece saatlerinde kumsal ve deniz üzerindeki hava hareketleri hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kumsal denizden daha sıcaktır ve kumsal üzerinde yükselici hava hareketleri gözlemlenmektedir.' },
      { key: 'B', text: 'Deniz suyu kumsaldan daha soğuk olduğundan deniz üzerinde yüksek basınç alanı meydana gelmiştir.' },
      { key: 'C', text: 'Kumsal ve deniz üzerindeki sıcaklıklar eşitlendiği için rüzgâr tamamen durmuş ve hava durağanlaşmıştır.' },
      { key: 'D', text: 'Kumsal hızla soğuyarak yüksek basınç, deniz ise sıcak kalarak alçak basınç alanı oluşturmuştur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Geceleyin karalar (kumsal) denizlere göre daha hızlı soğur (YB). Deniz ise sıcaktır (AB). Rüzgâr daima YB’den AB’ye (karadan denize) eser. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Gerçek Yaşam Muhakemesi',
    theme: 'Kara ve Deniz Meltemi'
  },
  {
    id: 8109,
    subTopicId: 'g8-u1-all',
    contextTitle: 'İklim Verileri ve Meteoroloji Bültenleri',
    scenario: 'Aşağıda bir bölgeye ait bazı bilimsel gözlem cümleleri sıralanmıştır:\n1. Karadeniz Bölgesi’nde her mevsim bol yağış görülür ve bitki örtüsü zengin ormanlardan oluşur.\n2. Yarın akşam Ankara ve çevresinde şiddetli kar fırtınası beklenmektedir.\n3. Antalya’da yaz ayları genellikle sıcak ve kurak geçer.\n4. Bugün öğle saatlerinde İstanbul’da aniden bastıran dolu sürücülere zor anlar yaşatmıştır.',
    questionPrompt: 'Bu cümlelerden iklim ve hava olayını belirtenler hangisinde doğru gruplandırılmıştır?',
    options: [
      { key: 'A', text: '1 ve 3 numaralı ifadeler iklim özelliği taşırken, 2 ve 4 numaralı ifadeler hava olayını belirtir.' },
      { key: 'B', text: '2 ve 3 numaralı ifadeler iklim özelliği taşırken, 1 ve 4 numaralı ifadeler hava olayını belirtir.' },
      { key: 'C', text: '1 ve 2 numaralı ifadeler iklim özelliği taşırken, 3 ve 4 numaralı ifadeler hava olayını belirtir.' },
      { key: 'D', text: 'Tüm ifadeler yalnızca anlık meteorolojik tahminleri kapsamakta olup iklim verisi içermez.' }
    ],
    correctAnswer: 'A',
    explanation: '1 ve 3 uzun yılların genel durumudur (İklim). 2 ve 4 kısa süreli ve anlık tahminlerdir (Hava Olayı). Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavram Sınıflandırma',
    theme: 'İklim ile Hava Olayı Ayrımı'
  },
  {
    id: 8110,
    subTopicId: 'g8-u1-all',
    contextTitle: '21 Mart Tarihinde Işık Açısı ve Gece Süresi',
    scenario: '21 Mart tarihinde Dünya üzerindeki K (Kuzey Kutup Dairesi), L (Ekvator) ve M (Güney Kutup Dairesi) noktalarında güneş ışınlarının geliş açısı ve gece süreleri incelenmiştir.',
    questionPrompt: 'Bu inceleme sonucunda ulaşılan aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K noktasında 24 saat gündüz yaşanırken M noktasında 24 saat boyunca kesintisiz gece yaşanmaktadır.' },
      { key: 'B', text: 'Her üç noktada da gece ve gündüz süreleri birbirine eşit olup 12 saat gece, 12 saat gündüz yaşanır.' },
      { key: 'C', text: 'L noktasında güneş ışınları eğik açıyla düşerken K ve M noktalarında dik açıyla tepeye ulaşır.' },
      { key: 'D', text: 'M noktasında sonbahar mevsimi sona ererken K noktasında kış mevsiminin en soğuk günleri başlar.' }
    ],
    correctAnswer: 'B',
    explanation: '21 Mart ekinoksunda aydınlanma çemberi kutuplardan geçer; Dünya’nın her yerinde (K, L, M) 12 saat gece, 12 saat gündüz eşitliği görülür. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Veri Analizi',
    theme: 'Ekinoks Özellikleri'
  },
  {
    id: 8111,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Dünya’nın Dönme ve Dolanma Hareketleri Sonuçları',
    scenario: 'Fen bilimleri öğretmeni tahtaya şu tabloyu çizmiştir:\nI. Gece ve gündüzün birbirini takip etmesi\nII. Mevsimlerin oluşması ve yıllık sıcaklık farkları\nIII. Gün içinde gölge boyunun değişmesi\nIV. Yıl içinde gece ve gündüz sürelerinin uzayıp kısalması',
    questionPrompt: 'Bu olaylardan Dünya’nın yıllık hareketine (Güneş etrafında dolanma ve eksen eğikliği) bağlı olanlar hangileridir?',
    options: [
      { key: 'A', text: 'Yalnızca I ve III numaralı olaylar Dünya’nın yıllık hareketi ve eksen eğikliği sonucunda gerçekleşir.' },
      { key: 'B', text: 'I, II ve III numaralı olaylar Dünya’nın kendi ekseni etrafında batıdan doğuya dönmesiyle oluşur.' },
      { key: 'C', text: 'II ve IV numaralı olaylar Dünya’nın yıllık hareketi ve eksen eğikliği sonucunda gerçekleşir.' },
      { key: 'D', text: 'Verilen olayların tamamı Dünya’nın günlük hareketiyle ilgili olup yıllık hareketten bağımsızdır.' }
    ],
    correctAnswer: 'C',
    explanation: 'I ve III günlük hareket (dönme), II ve IV ise yıllık hareket (dolanma + eksen eğikliği) sonucudur. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Karşılaştırmalı Analiz',
    theme: 'Günlük ve Yıllık Hareketler'
  },
  {
    id: 8112,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Mum ve Tütsü ile Hava Akımı Deneyi',
    scenario: 'Öğrenciler şeffaf bir kutunun sol bölmesine buz kalıbı, sağ bölmesine yanan bir mum koymuş ve tam ortadaki delikten kutunun içine tütsü dumanı bırakmışlardır. Dumanın muma doğru yöneldiği ve mumun üzerinden yükseldiği belgelenmiştir.',
    questionPrompt: 'Bu deneyde tütsü dumanının izlediği yol ile ilgili aşağıdaki yorumlardan hangisi yapılamaz?',
    options: [
      { key: 'A', text: 'Buzun bulunduğu taraf soğuk hava nedeniyle yüksek basınç alanı meydana getirmiştir.' },
      { key: 'B', text: 'Mumun bulunduğu tarafta ısınan hava molekülleri yoğunluğunu kaybederek yükselmiştir.' },
      { key: 'C', text: 'Dumanın yatay hareketi yüksek basınçtan alçak basınca doğru esen rüzgârı modeller.' },
      { key: 'D', text: 'Buz kalıbının bulunduğu tarafta yükselici hava hareketi gerçekleşerek alçak basınç oluşmuştur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Buz tarafında hava soğur ve ALÇALICI hava hareketi yapar (Yüksek Basınç). D şıkkı "yükselici hareket ve alçak basınç" dediği için yanlıştır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney Modeli Yorumlama',
    theme: 'Rüzgâr Modeli'
  },
  {
    id: 8113,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Dönenceler Dışındaki Bölgelere Güneş Işığının Gelişi',
    scenario: 'Ankara’da yaşayan bir araştırmacı, yıl boyunca her gün öğle saat 12.00’de dikey bir çubuğun gölge boyunu ölçmüş ve gölge boyunun hiçbir tarihte sıfır olmadığını kaydetmiştir.',
    questionPrompt: 'Bu durumun bilimsel gerekçesi aşağıdakilerden hangisinde eksiksiz ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Güneş ışınlarının yalnızca dönenceler arasına dik gelebilmesi ve Türkiye’nin dönenceler dışında yer alması.' },
      { key: 'B', text: 'Ankara’nın deniz seviyesinden yüksek olması nedeniyle atmosfer tabakasının ışınları kırmış olması.' },
      { key: 'C', text: 'Dünya’nın kendi ekseni etrafındaki dönme hızının ekvatordan kutuplara doğru gidildikçe yavaşlaması.' },
      { key: 'D', text: 'Güneş lekelerinin yıl içinde belirli dönemlerde periyodik olarak kaybolup ışık gücünü azaltması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Güneş ışınları yalnızca Yengeç ve Oğlak dönenceleri arasındaki tropikal kuşağa 90° dik gelebilir. Türkiye dönencelerin kuzeyinde yer aldığından gölge boyu hiçbir zaman sıfır olamaz. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Coğrafi ve Astronomik Muhakeme',
    theme: 'Dönenceler ve Işık Açısı'
  },
  {
    id: 8114,
    subTopicId: 'g8-u1-all',
    contextTitle: '21 Haziran Tarihinde Kutuplarda Aydınlanma',
    scenario: '21 Haziran günü bir araştırma gemisi Kuzey Kutup Dairesi’ne doğru ilerlerken gemideki araştırmacılar gece saat 24.00 olmasına rağmen Güneş’in batmadığını ve ufuk çizgisinin üzerinde parıldadığını fotoğraflamışlardır.',
    questionPrompt: 'Bu doğa olayı ile ilgili aşağıdaki ifadelerden hangisi bilimsel olarak doğrudur?',
    options: [
      { key: 'A', text: 'Bu tarihte Güney Kutup Noktası da Güneş ışınlarını aynı açıyla alarak 24 saat gündüz yaşamaktadır.' },
      { key: 'B', text: 'Kuzey Yarım Küre Güneş’e dönük olduğundan Kuzey Kutup Dairesi aydınlanma çemberinin içinde kalmıştır.' },
      { key: 'C', text: 'Dünya’nın dolanma hızı bu tarihte durma noktasına gelerek Güneş’in gökyüzünde sabit kalmasına yol açmıştır.' },
      { key: 'D', text: 'Ozon tabakasındaki incelme Güneş ışınlarının gece saatlerinde kırılmasını sağlayarak aydınlık yaratmıştır.' }
    ],
    correctAnswer: 'B',
    explanation: '21 Haziran’da eksen eğikliği sebebiyle Kuzey Kutup Dairesi tamamen aydınlanma çemberi içinde kalır ve 24 saat gündüz yaşanır (Geceyarısı Güneşi). Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Aydınlanma Geometrisi',
    theme: 'Kutup Gündüzleri'
  },
  {
    id: 8115,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Atmosferdeki Nem Oranı ve Sis Oluşumu',
    scenario: 'Sonbahar mevsiminde sabahın erken saatlerinde göl kıyısında yürüyüşe çıkan bir öğrenci, göl yüzeyinde ve çevresindeki çayırlarda görüş mesafesini birkaç metreye kadar düşüren yoğun bir sis tabakası ile karşılaşmıştır.',
    questionPrompt: 'Sis oluşumunu sağlayan temel fiziksel olay ve koşul aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Atmosferdeki karbondioksit gazının aniden katılaşarak havada asılı mikro toz zerreciklerine dönüşmesi.' },
      { key: 'B', text: 'Göl suyundaki kimyasal çözünmelerin yüzey gerilimini artırarak buharlaşmayı tamamen engellemesi.' },
      { key: 'C', text: 'Yeryüzüne yakın nemli ve ılık hava kütlesinin soğuk zeminle temas ederek yoğuşması ve havada asılı kalması.' },
      { key: 'D', text: 'Gökyüzündeki yağmur bulutlarının yer çekimi kuvveti etkisiyle aniden parçalanarak yere dökülmesi.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sis, yeryüzüne temas eden nemli havanın soğuk zeminle karşılaşarak mikroskobik su damlacıklarına yoğuşması ve havada asılı kalması olayıdır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Hava Olayı Mekanizması',
    theme: 'Sis Oluşumu'
  },
  {
    id: 8116,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Küresel İklim Değişikliğiyle Mücadele Yöntemleri',
    scenario: 'Bir çevre zirvesinde ülkelerin sera gazı emisyonlarını azaltmak için alabilecekleri acil önlemler maddeler halinde tartışılmıştır.',
    questionPrompt: 'Aşağıda önerilen yöntemlerden hangisi sera gazı salımını azaltmaya yönelik etkili bir çözüm olamaz?',
    options: [
      { key: 'A', text: 'Güneş, rüzgâr ve jeotermal gibi yenilenebilir ve temiz enerji kaynaklarının kullanımının yaygınlaştırılması.' },
      { key: 'B', text: 'Sanayi tesislerinin bacalarına ve motorlu taşıtların egzozlarına standartlara uygun filtreler takılması.' },
      { key: 'C', text: 'Enerji tüketiminde enerji verimliliği yüksek A sınıfı elektrikli ev ve sanayi aletlerinin tercih edilmesi.' },
      { key: 'D', text: 'Elektrik üretiminde termik santrallerde kullanılan linyit ve taş kömürü miktarının iki katına çıkarılması.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kömür (linyit) yakmak atmosfere devasa miktarda karbondioksit (sera gazı) salar ve küresel ısınmayı hızlandırır; bu bir çözüm değil kirlilik kaynağıdır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Çevre Bilinci ve Çözüm Üretme',
    theme: 'Sürdürülebilirlik ve Sera Gazları'
  },
  {
    id: 8117,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Güneş Işınlarının Geliş Açısı ile Aydınlanan Alan Grafiği',
    scenario: 'Özdeş K ve L şehirlerinde öğle saatlerinde Güneş ışınlarının aydınlattığı yüzey alanları ölçülmüştür. K şehrinde bir ışık demetinin aydınlattığı alan 20 metrekare iken, aynı miktardaki ışık demetinin L şehrinde aydınlattığı alan 60 metrekare olarak belirlenmiştir.',
    questionPrompt: 'Bu ölçüm verilerine dayanarak K ve L şehirleri hakkında yapılan aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K şehrine Güneş ışınları daha dik açıyla gelmiş olup birim yüzeye düşen ısı enerjisi L şehrinden fazladır.' },
      { key: 'B', text: 'L şehrinde Güneş ışınları dik açıyla düştüğü için birim alandaki ısı enerjisi K şehrindekinden yüksektir.' },
      { key: 'C', text: 'Her iki şehirde de sıcaklık artışları tamamen eşit olup aydınlanan alan büyüklüğü enerjiyi değiştirmez.' },
      { key: 'D', text: 'K şehrinde kış mevsimi başlangıcı yaşanırken L şehrinde yaz mevsiminin en sıcak günleri hüküm sürmektedir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işınlar dik geldikçe dar alanı (K = 20 m²) aydınlatır ve birim alana düşen enerji fazla olur. Eğik geldikçe geniş alana (L = 60 m²) dağılır ve enerji azalır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Sayısal Veri Muhakemesi',
    theme: 'Aydınlanan Alan ve Enerji Dağılımı'
  },
  {
    id: 8118,
    subTopicId: 'g8-u1-all',
    contextTitle: '21 Aralık Tarihinde Güneye Doğru Seyahat',
    scenario: '21 Aralık tarihinde Türkiye’den yola çıkan bir uçak güneye doğru uçarak Ekvator’u geçmiş ve Güney Afrika Cumhuriyeti’nin Cape Town şehrine iniş yapmıştır. Yolcular gündüz süresinin Türkiye’dekinden çok daha uzun olduğunu ve havanın oldukça sıcak olduğunu gözlemlemiştir.',
    questionPrompt: 'Yolcuların yaşadığı bu gözlem farkının nedeni aşağıdakilerden hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: '21 Aralık tarihinde Dünya’nın Güneş’e en uzak konuma gelerek güney kutbunu doğrudan aydınlatması.' },
      { key: 'B', text: '21 Aralık’ta Güney Yarım Küre’de yaz mevsiminin başlaması ve güneye gidildikçe gündüzlerin uzaması.' },
      { key: 'C', text: 'Ekvator üzerinden geçen rüzgârların sıcak hava dalgasını yalnızca güney yarım küreye taşıması.' },
      { key: 'D', text: 'Cape Town şehrinde Dünya’nın dönme ekseninin sıfır dereceye inerek mevsim etkilerini yok etmesi.' }
    ],
    correctAnswer: 'B',
    explanation: '21 Aralık’ta GYK yaz mevsimine girer. Güneye gidildikçe gündüz süresi uzar, Güneş ışınları daha büyük açıyla gelir ve hava ısınır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Coğrafi Muhakeme',
    theme: '21 Aralık Gün Dönümü'
  },
  {
    id: 8119,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Alçak Basınç Merkezindeki Hava Davranışı',
    scenario: 'Hava durumu haritasında bir bölgenin merkezinde Alçak Basınç (AB) alanı oluştuğu işaretlenmiştir.',
    questionPrompt: 'Bu Alçak Basınç alanı içerisinde gerçekleşen hava hareketleri ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Hava molekülleri aşırı soğuyarak yere doğru alçalır ve gökyüzü tamamen açık kalarak bulutsuzlaşır.' },
      { key: 'B', text: 'Hava akımı merkezden çevreye doğru yayılır ve zemin üzerindeki gaz basıncı en yüksek değere çıkar.' },
      { key: 'C', text: 'Isınan hava yükselici hareket yapar, çevreden merkeze hava akar ve bulut oluşarak yağış ihtimali artar.' },
      { key: 'D', text: 'Yüzeydeki hava yoğunluğu arttığından dolayı bölgede kuvvetli bir kış don olayı gözlemlenmeye başlar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Alçak basınçta hava sıcaktır; ısınan hava yükselir, çevreden merkeze doğru rüzgâr çeker, nem yoğuşarak bulut oluşturur ve yağış ihtimali artar. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kavramsal Süreç Analizi',
    theme: 'Alçak Basınç Dinamiği'
  },
  {
    id: 8120,
    subTopicId: 'g8-u1-all',
    contextTitle: 'Eksen Eğikliğinin İptali Durumunda Olası Senaryo',
    scenario: 'Bir bilim kurgu filminde Dünya’ya çarpan dev bir asteroidin Dünya’nın 23 derece 27 dakikalık dönme ekseni eğikliğini tamamen düzelttiği ve ekseni dolanma düzlemine tam dik hale getirdiği varsayılmıştır.',
    questionPrompt: 'Böyle bir durumun gerçekleşmesi halinde yeryüzünde meydana gelecek değişikliklerle ilgili hangisi kesinlikle söylenir?',
    options: [
      { key: 'A', text: 'Dünya kendi ekseni etrafında dönmeyi tamamen durdurur ve gece-gündüz oluşumu kalıcı olarak biter.' },
      { key: 'B', text: 'Güneş ışınları kutup noktalarına yıl boyunca sürekli dik açıyla gelerek kutup buzullarını buharlaştırır.' },
      { key: 'C', text: 'Ay’ın Dünya etrafındaki dolanma süresi kısalır ve gelgit olayları yeryüzünde tamamen sona erer.' },
      { key: 'D', text: 'Mevsimler ortadan kalkar, bir noktaya gelen güneş açısı değişmez ve tüm dünyada daima gece-gündüz eşitliği yaşanır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Eksen eğikliği olmasaydı: Işık açısı yıl boyu değişmezdi, mevsimler oluşmazdı, yıllık sıcaklık farkları olmazdı ve tüm dünyada her gün 12 saat gece-gündüz eşitliği yaşanırdı. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Hipotetik Muhakeme',
    theme: 'Eksen Eğikliği Yokluğu'
  }
];

// =========================================================================
// 2. ÜNİTE: DNA VE GENETİK KOD (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit2End20Questions: LgsQuestion[] = [
  {
    id: 8201,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Kalıtsal Yapıların Hiyerarşik Sıralaması',
    scenario: 'Öğrenciler hücre çekirdeğinde yer alan kalıtsal yapıları matruşka bebekleri gibi iç içe geçen geometrik kutularla modellemek istemişlerdir.',
    questionPrompt: 'Buna göre en dıştaki en büyük kutudan en içteki en küçük kutuya doğru doğru sıralama hangisidir?',
    options: [
      { key: 'A', text: 'Kromozom kutusu en dışta, sırasıyla DNA, Gen ve en içte Nükleotid kutusu yer almalıdır.' },
      { key: 'B', text: 'DNA kutusu en dışta, sırasıyla Kromozom, Nükleotid ve en içte Gen kutusu yer almalıdır.' },
      { key: 'C', text: 'Gen kutusu en dışta, sırasıyla Nükleotid, DNA ve en içte Kromozom kutusu yer almalıdır.' },
      { key: 'D', text: 'Nükleotid kutusu en dışta, sırasıyla Gen, DNA ve en içte Kromozom kutusu yer almalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Karmaşıktan basite (büyükten küçüğe) kalıtsal hiyerarşi: Kromozom > DNA > Gen > Nükleotid şeklindedir (KeDiGeNi). Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Modelleme ve Hiyerarşi',
    theme: 'Kromozom, DNA, Gen, Nükleotid'
  },
  {
    id: 8202,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Farklı Canlı Türlerinde Kromozom Sayıları',
    scenario: 'Laboratuvarda incelenen türlerin kromozom sayıları verilmiştir: İnsan 46, Moli balığı 46, Patates 48, Eğrelti otu 500 kromozomludur.',
    questionPrompt: 'Bu verilere dayanarak kromozom sayıları ile ilgili aşağıdaki çıkarımlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Eğrelti otu kromozom sayısı en fazla olduğu için listedeki en gelişmiş canlı türüdür.' },
      { key: 'B', text: 'Kromozom sayısının canlının gelişmişlik düzeyi veya vücut büyüklüğü ile doğrudan bir ilişkisi yoktur.' },
      { key: 'C', text: 'İnsan ile moli balığının kromozom sayıları eşit olduğundan tüm genetik dizilimleri aynıdır.' },
      { key: 'D', text: 'Kromozom sayısı çift olan canlıların tamamı yalnızca memeliler sınıfı içerisinde yer almaktadır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kromozom sayısının canlının gelişmişliği veya büyüklüğü ile ilgisi yoktur; eğrelti otu 500 kromozomlu olmasına rağmen insandan gelişmiş değildir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Tablo ve Çıkarım',
    theme: 'Kromozom Sayısı ve Gelişmişlik'
  },
  {
    id: 8203,
    subTopicId: 'g8-u2-all',
    contextTitle: 'DNA Eşlenmesi ve Yeni Zincir Sentezi',
    scenario: 'Hücre bölünmesi öncesinde kendini eşleyen bir DNA molekülünde 1. zincirin nükleotid dizilimi A - T - G - C - C - T şeklindedir.',
    questionPrompt: 'Bu zincirin karşısına sitoplazmadan gelerek bağlanan 2. yeni zincirin nükleotid dizilimi hangisidir?',
    options: [
      { key: 'A', text: 'Yeni sentezlenen zincirin nükleotid dizilimi A - T - G - C - C - T şeklinde birebir aynı kalır.' },
      { key: 'B', text: 'Yeni sentezlenen zincirin nükleotid dizilimi C - C - T - A - G - G şeklinde rastgele oluşur.' },
      { key: 'C', text: 'Yeni sentezlenen zincirin nükleotid dizilimi T - A - C - G - G - A kuralına uygun tamamlanır.' },
      { key: 'D', text: 'Yeni sentezlenen zincirin nükleotid dizilimi G - C - A - T - T - C şeklinde tersine çevrilir.' }
    ],
    correctAnswer: 'C',
    explanation: 'DNA’da Adenin karşısına Timin (A-T), Guanin karşısına Sitozin (G-C) gelir. A-T-G-C-C-T diziliminin karşılığı T-A-C-G-G-A olur. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kural Uygulama',
    theme: 'DNA Eşlenmesi'
  },
  {
    id: 8204,
    subTopicId: 'g8-u2-all',
    contextTitle: 'DNA Hasarlarının Onarılabilirliği',
    scenario: 'X ışınlarına maruz kalan bir DNA molekülünün farklı bölgelerinde şu üç hasar meydana gelmiştir:\nI. Tek zincirdeki Guanin bazının karşısındaki Sitozin kopmuştur (karşısı boş).\nII. Karşılıklı iki zincirdeki Adenin ve Timin bazları aynı anda kopmuştur (çift taraflı boşluk).\nIII. Tek zincirdeki Timin bazının karşısına yanlışlıkla Guanin bazı bağlanmıştır.',
    questionPrompt: 'Hücredeki DNA onarım enzimleri bu hasarlardan hangilerini onarabilir?',
    options: [
      { key: 'A', text: 'Enzimler yalnızca II numaralı hasarı onarabilir çünkü çift zincir kopması daha belirgindir.' },
      { key: 'B', text: 'Enzimler verilen hasarların hiçbirini onaramaz ve hücre anında programlı ölüme gider.' },
      { key: 'C', text: 'Enzimler I, II ve III numaralı hasarların tamamını eksiksiz olarak eski haline getirebilir.' },
      { key: 'D', text: 'Enzimler I ve III numaralı hasarları onarabilirken, II numaralı çift taraflı hasarı onaramaz.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tek zincirdeki boşluklar ve yanlış eşleşmeler karşı zincirdeki şablona bakılarak onarılır. Karşılıklı iki zincirin aynı anda boş kaldığı (II) hasarlar onarılamaz (kalıcı mutasyon). Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Mekanizma Analizi',
    theme: 'DNA Onarımı'
  },
  {
    id: 8205,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Mendel Bezelye Çaprazlaması',
    scenario: 'Melez sarı tohumlu iki bezelye bitkisi (Ss x Ss) çaprazlanmıştır. Sarı tohum geni (S) yeşil tohum genine (s) baskındır.',
    questionPrompt: 'Oluşacak yavru bezelyelerin fenotip ve genotip oranları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Yavruların yüzde 75 olasılıkla sarı tohumlu, yüzde 25 olasılıkla yeşil tohumlu olması beklenir.' },
      { key: 'B', text: 'Yavruların tamamı yüzde 100 oranında melez genotipli sarı tohumlu bezelyelerden meydana gelir.' },
      { key: 'C', text: 'Yavruların yüzde 50’si yeşil tohumlu fenotipe sahip olurken yüzde 50’si sarı tohumlu olur.' },
      { key: 'D', text: 'Yavruların genotipinde çekinik yeşil tohum geninin bulunma ihtimali yüzde sıfırdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ss x Ss çaprazlamasında: SS (%25), Ss (%50), ss (%25) genotipleri oluşur. Fenotip olarak %75 sarı tohumlu (SS, Ss), %25 yeşil tohumlu (ss) bezelye elde edilir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Olasılık ve Çaprazlama',
    theme: 'Kalıtım ve Çaprazlama'
  },
  {
    id: 8206,
    subTopicId: 'g8-u2-all',
    contextTitle: 'İnsanda Cinsiyet Oluşumu ve Babanın Rolü',
    scenario: 'Dört kız çocuğu bulunan bir aile beşinci çocuklarını beklemektedir. Anne 44+XX, baba ise 44+XY kromozom yapısına sahiptir.',
    questionPrompt: 'Doğacak beşinci çocuğun cinsiyeti ve cinsiyetin belirlenmesi ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Daha önce dört kız çocuğu doğduğu için beşinci çocuğun erkek olma olasılığı yüzde seksen beştir.' },
      { key: 'B', text: 'Beşinci çocuğun kız veya erkek olma olasılığı her doğumda olduğu gibi daima yüzde ellidir.' },
      { key: 'C', text: 'Çocuğun cinsiyetini anneden gelen yumurta hücresindeki X kromozomunun türü belirler.' },
      { key: 'D', text: 'Ailede kız çocuk sayısı fazla olduğu için babanın ürettiği spermlerin tamamı X kromozomu taşır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Her doğum bağımsız bir olaydır; kaç kız çocuğu olursa olsun yeni doğacak çocuğun kız veya erkek olma olasılığı daima %50’dir ve cinsiyeti babadan gelen sperm (X veya Y) belirler. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Olasılık ve Biyolojik Muhakeme',
    theme: 'İnsanda Cinsiyet Oluşumu'
  },
  {
    id: 8207,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Akraba Evliliği ve Genetik Riskler',
    scenario: 'Akraba evliliği yapmış iki bireyin çocuklarında kalıtsal hastalıkların görülme sıklığının toplum geneline göre belirgin şekilde yüksek olduğu tespit edilmiştir.',
    questionPrompt: 'Bu durumun temel genetik sebebi aşağıdakilerden hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Akraba bireylerin kan gruplarının aynı olması sebebiyle kan uyuşmazlığının ortaya çıkması.' },
      { key: 'B', text: 'Akraba bireylerin kromozom sayılarının üreme hücrelerinde bölünme sırasında yarıya inmemesi.' },
      { key: 'C', text: 'Aynı soydan gelen bireylerde çekinik hastalık genlerinin bir araya gelme olasılığının artması.' },
      { key: 'D', text: 'Akraba evliliğinin hücre bölünmesi sırasında mutasyon oluşma hızını doğrudan durdurması.' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalıtsal hastalıkların çoğu çekinik genlerle taşınır. Akrabalar ortak atadan geldikleri için aynı çekinik zararlı geni taşıma ihtimalleri yüksektir ve bu genlerin çocukta yan yana gelip hastalığı ortaya çıkarma riski artar. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Akraba Evliliği'
  },
  {
    id: 8208,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Mutasyon ile Modifikasyon Karşılaştırması',
    scenario: 'Aşağıda canlılarda meydana gelen iki farklı değişim verilmiştir:\nI. Radyasyona maruz kalan keçinin dört boynuzlu doğması\nII. Çuha çiçeğinin 15-25 derecede kırmızı, 25-35 derecede beyaz çiçek açması',
    questionPrompt: 'Bu iki durum ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Her iki durum da genlerin nükleotid diziliminde kalıcı değişim yaratan mutasyon örnekleridir.' },
      { key: 'B', text: 'I numaralı olay çevresel etkenlerle oluşan modifikasyon, II numaralı olay ise mutasyondur.' },
      { key: 'C', text: 'Her iki durum da sonraki nesillere aktarılan ve kalıtsal çeşitlilik sağlayan adaptasyonlardır.' },
      { key: 'D', text: 'I numaralı olayda genin yapısı değişirken, II numaralı olayda yalnızca genin işleyişi değişmiştir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Dört boynuzlu keçi gen yapısının bozulmasıyla oluşan mutasyondur. Çuha çiçeğinin sıcaklığa göre renk değiştirmesi genin yapısı değişmeden işleyişinin değiştiği modifikasyondur. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Karşılaştırma',
    theme: 'Mutasyon ve Modifikasyon'
  },
  {
    id: 8209,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Kutup Ayısının Çevreye Uyumu (Adaptasyon)',
    scenario: 'Kutup ayılarının geniş tabanlı ayaklara, kalın deri altı yağ tabakasına, beyaz renkli kürke ve dar burun-kulak yapısına sahip olduğu bilinmektedir.',
    questionPrompt: 'Kutup ayısının bu kalıtsal özellikleri kazanması ve çevreye uyumu ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Bu özellikler canlının soğuk kutup ortamında yaşama ve üreme şansını artıran kalıtsal adaptasyonlardır.' },
      { key: 'B', text: 'Bu özellikler kutup ayısının kış uykusuna yatmasıyla ortaya çıkan geçici modifikasyonlardır.' },
      { key: 'C', text: 'Kutup ayısı sıcak bir iklime götürülürse birkaç gün içinde kürk rengini kahverengiye dönüştürür.' },
      { key: 'D', text: 'Geniş ayak tabanı kutup ayısının kar üzerindeki katı basıncını artırarak kara batmasını sağlar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Adaptasyonlar canlının bulunduğu ekosistemde hayatta kalma ve neslini devam ettirme şansını artıran, DNA ile nesilden nesile aktarılan kalıtsal özelliklerdir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavram Tanıma ve Yorum',
    theme: 'Adaptasyon'
  },
  {
    id: 8210,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Sanayi Devrimi ve Güve Kelebekleri (Doğal Seçilim)',
    scenario: 'İngiltere’de Sanayi Devrimi öncesinde açık renkli ağaç kabukları üzerinde açık renkli güve kelebekleri kuşlardan saklanabiliyordu. Fabrika bacalarından çıkan is ağaç gövdelerini karartınca açık renkli kelebekler kolayca avlanmış, koyu renkli güve kelebeklerinin sayısı hızla artmıştır.',
    questionPrompt: 'Güve kelebeklerinde yaşanan bu popülasyon değişimi hangi biyolojik süreçle açıklanır?',
    options: [
      { key: 'A', text: 'Açık renkli güve kelebeklerinin kömür dumanı etkisiyle yapay mutasyona uğraması süreciyle açıklanır.' },
      { key: 'B', text: 'Çevre şartlarına uyum sağlayan bireylerin hayatta kalıp uyum sağlayamayanların elendiği doğal seçilimle açıklanır.' },
      { key: 'C', text: 'Ağaç gövdelerindeki sıcaklık artışına bağlı olarak ortaya çıkan geri dönüşümlü modifikasyonla açıklanır.' },
      { key: 'D', text: 'Kelebeklerin üreme hızını artırmak amacıyla genetik mühendisleri tarafından yapılan ıslahla açıklanır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ortama uyum sağlayan koyu kelebeklerin hayatta kalması, açık renklilerin avlanarak elenmesi DOĞAL SEÇİLİM mekanizmasının klasik örneğidir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Bilim Tarihi ve Kavram Analizi',
    theme: 'Doğal Seçilim'
  },
  {
    id: 8211,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Biyoteknoloji: Bakterilere İnsülin Geni Aktarımı',
    scenario: 'Genetik mühendisleri insan hücresinden insülin hormonu üretimini sağlayan geni kesmiş, bu geni bir bakterinin plazmit DNA’sına aktarmış ve bakterinin hızla çoğalarak bol miktarda insülin hormonu üretmesini sağlamışlardır.',
    questionPrompt: 'Gerçekleştirilen bu biyoteknolojik çalışma ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Bakteri bu işlem sonucunda insan hücresine dönüşmüş ve tüm hayati özelliklerini kaybetmiştir.' },
      { key: 'B', text: 'İnsülin geni bakteriye aktarıldığında genin nükleotid dizilimi tamamen bozulmuş ve değişmiştir.' },
      { key: 'C', text: 'Bir canlıya ait genin başka bir canlıda da çalışarak istenen proteini üretebileceği gen aktarımıyla kanıtlanmıştır.' },
      { key: 'D', text: 'Bu yöntem sadece bitkiler üzerinde uygulanabilen geleneksel yapay döllenme yöntemidir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Gen aktarımı sayesinde bir canlıya ait genetik kod başka bir canlı hücresine yerleştirilerek aynı işlevi yerine getirmesi sağlanır (biyoteknoloji). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Uygulama ve Bilimsel Muhakeme',
    theme: 'Gen Aktarımı ve Biyoteknoloji'
  },
  {
    id: 8212,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Memeli Bir Canlının Klonlanması (Dolly Modeli)',
    scenario: 'A koyunundan vücut hücresi alınıp çekirdeği çıkarılmıştır. B koyunundan yumurta hücresi alınıp çekirdeği atılmıştır. A koyununun çekirdeği B koyununun çekirdeksiz yumurtasına aktarılmış, laboratuvarda çoğaltılan embriyo C koyununun rahmine yerleştirilmiştir. Süreç sonunda D kuzusu dünyaya gelmiştir.',
    questionPrompt: 'Dünyaya gelen klon kuzu D’nin genetik özellikleri ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'D kuzusu hem A hem B hem de C koyunundan eşit oranda kalıtsal bilgi almıştır.' },
      { key: 'B', text: 'D kuzusu embriyoyu karnında taşıyıp doğuran taşıyıcı anne C koyununun genetik kopyasıdır.' },
      { key: 'C', text: 'D kuzusu yumurta hücresini bağışlayan B koyununun birebir genetik ikizidir.' },
      { key: 'D', text: 'D kuzusu çekirdeğindeki DNA’sı alınan A koyununun birebir genetik ikizi ve kopyasıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kalıtsal bilgi çekirdekteki DNA’da saklıdır. Çekirdeği alınan A koyunu olduğu için klon canlı (D) genetik olarak yalnızca A koyununun kopyasıdır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Model Analizi',
    theme: 'Klonlama'
  },
  {
    id: 8213,
    subTopicId: 'g8-u2-all',
    contextTitle: 'DNA Molekülünde Sayısal Eşitlikler',
    scenario: '1000 nükleotidden oluşan sağlıklı bir DNA molekülünde 200 adet Adenin bazı bulunduğu tespit edilmiştir.',
    questionPrompt: 'Bu DNA molekülündeki Timin, Guanin ve Deoksiriboz şekeri sayıları hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'DNA molekülünde 200 adet Timin, 300 adet Guanin ve toplam 1000 adet Deoksiriboz şekeri bulunur.' },
      { key: 'B', text: 'DNA molekülünde 300 adet Timin, 200 adet Guanin ve toplam 500 adet Deoksiriboz şekeri bulunur.' },
      { key: 'C', text: 'DNA molekülünde 200 adet Timin, 400 adet Guanin ve toplam 2000 adet Deoksiriboz şekeri bulunur.' },
      { key: 'D', text: 'DNA molekülünde 100 adet Timin, 300 adet Guanin ve toplam 1000 adet Deoksiriboz şekeri bulunur.' }
    ],
    correctAnswer: 'A',
    explanation: 'A=T olduğundan 200 Adenin karşısında 200 Timin vardır (Toplam 400). Kalan 600 nükleotid Guanin ve Sitozin arasında eşit paylaşılır: 300 Guanin, 300 Sitozin. Toplam şeker sayısı toplam nükleotide eşittir (1000). Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Nicel Hesaplama',
    theme: 'DNA Bileşenleri'
  },
  {
    id: 8214,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Himalaya Tavşanı ve Modifikasyon Kanıtı',
    scenario: 'Himalaya tavşanının sırtındaki beyaz tüyler tıraşlanıp üzerine buz torbası bağlandığında çıkan yeni tüylerin siyah olduğu görülmüştür. Daha sonra bu siyah tüyler tekrar tıraşlanıp tavşan sıcak ortamda bırakıldığında çıkan tüylerin yeniden beyaz olduğu gözlemlenmiştir.',
    questionPrompt: 'Bu kontrollü deneyden çıkarılacak en temel bilimsel sonuç hangisidir?',
    options: [
      { key: 'A', text: 'Buz torbası tavşanın DNA diziliminde kalıcı ve nesilden nesile aktarılan mutasyona yol açmıştır.' },
      { key: 'B', text: 'Çevre sıcaklığı tavşanın tüy rengini belirleyen genlerin işleyişini değiştirerek modifikasyon oluşturmuştur.' },
      { key: 'C', text: 'Tavşanın sırtında oluşan siyah tüyler sonraki tüm yavrularına doğrudan kalıtsal olarak aktarılır.' },
      { key: 'D', text: 'Tavşan soğuk ortamda vücut sıcaklığını korumak amacıyla yeni bir tür oluşturmuştur.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sıcaklık kalkınca eski haline dönebilen ve genin yapısını değil sadece işleyişini değiştiren bu olay klasik bir MODİFİKASYON örneğidir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Deney Analizi',
    theme: 'Himalaya Tavşanı Deneyi'
  },
  {
    id: 8215,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Tür İçi Çeşitlilik: Varyasyon',
    scenario: 'Aynı anne ve babadan dünyaya gelen kardeşlerin göz rengi, boy uzunluğu, ten rengi ve kan gruplarının birbirinden farklı olduğu görülmektedir.',
    questionPrompt: 'Aynı türe ait bireyler arasında görülen bu kalıtsal çeşitlilik kavramı aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Çevre koşullarına uyum sağlayamayan zayıf bireylerin yok olmasını ifade eden doğal seçilim.' },
      { key: 'B', text: 'Genetik mühendislerinin laboratuvarda canlı DNA’sını değiştirerek yaptığı gen tedavisi.' },
      { key: 'C', text: 'Mayoz bölünme ve döllenme ile sağlanan tür içi kalıtsal zenginlik olan varyasyon.' },
      { key: 'D', text: 'Sıcaklık ve beslenme farklarıyla bireylerde ortaya çıkan kalıtsal olmayan modifikasyon.' }
    ],
    correctAnswer: 'C',
    explanation: 'Aynı türün bireyleri arasındaki kalıtsal çeşitliliğe VARYASYON denir. Mayoz bölünmedeki parça değişimi ve döllenme varyasyonun temelidir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kavram Tanımlama',
    theme: 'Varyasyon'
  },
  {
    id: 8216,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Biyoteknolojinin Olası Zararları ve Riskleri',
    scenario: 'Biyoteknoloji alanındaki hızlı gelişmeler tıp ve tarımda büyük faydalar sağlarken bazı bilim insanları bu uygulamaların potansiyel risklerine dikkat çekmektedir.',
    questionPrompt: 'Aşağıdakilerden hangisi biyoteknolojik uygulamaların yaratabileceği olumsuz durumlardan biridir?',
    options: [
      { key: 'A', text: 'Genetik hastalıkların tedavisinde hasarlı genlerin onarılması veya etkisiz hale getirilmesi.' },
      { key: 'B', text: 'Tarımsal ürünlerin raf ömrünün uzatılması ve soğuğa dayanıklı bitki türlerinin geliştirilmesi.' },
      { key: 'C', text: 'Kanser ve şeker hastalığı gibi kronik rahatsızlıklar için aşı ve antikor üretilmesi.' },
      { key: 'D', text: 'GDO’lu ürünlerin doğal türleri baskılayarak biyolojik çeşitliliği azaltması ve alerjik reaksiyon yaratması.' }
    ],
    correctAnswer: 'D',
    explanation: 'GDO’lu ürünlerin yayılması yerel tohumları yok edebilir, ekolojik dengeyi bozabilir ve insanlarda yeni alerjilere yol açabilir; bu biyoteknolojinin olumsuz yönüdür. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Eleştirel Düşünme',
    theme: 'Biyoteknolojinin Riskleri'
  },
  {
    id: 8217,
    subTopicId: 'g8-u2-all',
    contextTitle: 'DNA Parmak İzi ve Adli Tıp',
    scenario: 'Bir olay yerinde şüpheliye ait olduğu düşünülen bir saç teli ve kan lekesi bulunmuş, adli tıp laboratuvarında DNA parmak izi analizi yapılmıştır.',
    questionPrompt: 'DNA parmak izi analizinin adli vakalarda kesin kanıt olarak kullanılabilmesinin temel gerekçesi nedir?',
    options: [
      { key: 'A', text: 'Tek yumurta ikizleri hariç her insanın DNA nükleotid diziliminin kendine özgü ve benzersiz olması.' },
      { key: 'B', text: 'İnsanların tamamında kromozom sayısının 46 olması sebebiyle analizlerin çok hızlı sonuç vermesi.' },
      { key: 'C', text: 'DNA molekülünün sadece saç teli ve kan hücrelerinde bulunup diğer dokularda yer almaması.' },
      { key: 'D', text: 'DNA’daki fosfat ve şeker oranının her bireyin vücut sıcaklığına göre farklılık göstermesi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Her bireyin (tek yumurta ikizleri hariç) DNA baz dizilişi parmak izi gibi tamamen benzersizdir. Bu nedenle adli tıpta kesin kimlik tespitinde kullanılır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Gerçek Hayat Uygulaması',
    theme: 'DNA Parmak İzi'
  },
  {
    id: 8218,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Genotip ve Fenotip Kavramları',
    scenario: 'Kahverengi göz geni mavi göz genine baskındır. Genotipi melez olan bir anne ile genotipi saf çekinik olan bir baba çaprazlanmıştır.',
    questionPrompt: 'Bu ailenin doğacak çocuklarının genotip ve fenotip olasılıkları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Çocukların tamamı mavi gözlü olur ve genotiplerinde kahverengi göz geni kesinlikle bulunmaz.' },
      { key: 'B', text: 'Yüzde 50 olasılıkla melez kahverengi gözlü, yüzde 50 olasılıkla saf çekinik mavi gözlü çocuk doğar.' },
      { key: 'C', text: 'Doğacak çocukların yüzde 75’i kahverengi gözlü olurken yalnızca yüzde 25’i mavi gözlü olur.' },
      { key: 'D', text: 'Çocukların mavi gözlü doğma olasılığı yüzde sıfırdır çünkü kahverengi göz geni baskındır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Melez kahverengi (Aa) x Saf mavi (aa) çaprazlamasında: Aa (%50), aa (%50) oluşur. %50 melez kahverengi gözlü, %50 saf mavi gözlü çocuk dünyaya gelir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Genetik Hesaplama',
    theme: 'Genotip Fenotip İlişkisi'
  },
  {
    id: 8219,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Farklı Ortamlarda Yaşayan Tilkilerin Kulak Yapısı',
    scenario: 'Çöl tilkilerinin kulak ve kuyrukları uzun ve geniş yüzeyliyken, kutup tilkilerinin kulak ve burunları küçük ve kısa yüzeylidir.',
    questionPrompt: 'Bu iki tilki türünün vücut çıkıntılarındaki bu farklılığın adaptasyonel amacı nedir?',
    options: [
      { key: 'A', text: 'Çöl tilkisinin avlanmasını engellemek, kutup tilkisinin ise karda daha hızlı koşmasını sağlamak.' },
      { key: 'B', text: 'Çöl tilkilerinin gece görmesini kolaylaştırmak, kutup tilkilerinin ise koku alma duyusunu geliştirmek.' },
      { key: 'C', text: 'Çöl tilkisinin ısı kaybını artırarak serinlemesini, kutup tilkisinin ise ısı kaybını azaltıp ısınmasını sağlamak.' },
      { key: 'D', text: 'Her iki tilkinin de besin yetersizliği nedeniyle kulak kıkırdaklarında ortaya çıkan modifikasyondur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çölde geniş kulaklar terleme ve damarlarla ısı atımını artırır (serinleme). Kutupta küçük kulaklar yüzey alanını daraltarak ısı kaybını en aza indirir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Uyum ve Yaşam Stratejisi',
    theme: 'Farklı Ortamlarda Benzer Tür Adaptasyonu'
  },
  {
    id: 8220,
    subTopicId: 'g8-u2-all',
    contextTitle: 'Nükleotidlerin İsimlendirilme Kuralı',
    scenario: 'Bir öğrenci nükleotid modeli hazırlamak için masanın üzerine fosfat, deoksiriboz şekeri ve organik baz kartları koymuştur.',
    questionPrompt: 'Nükleotidlerin adlandırılması ve yapısı ile ilgili aşağıdaki kural ve yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Nükleotidler yapılarında bulunan deoksiriboz şekerinin molekül ağırlığına göre isimlendirilir.' },
      { key: 'B', text: 'Nükleotidler bağlandıkları fosfat grubunun kimyasal elektrik yüküne göre adlandırılır.' },
      { key: 'C', text: 'Nükleotidin adı sitoplazmadaki bulunma sıklığına göre en çok olandan en aza doğru verilir.' },
      { key: 'D', text: 'Nükleotidler yapılarında taşıdıkları azotlu organik bazın çeşidine göre isimlendirilir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bir nükleotid içerdiği organik baza göre adlandırılır; örneğin Adenin bazı içeriyorsa Adenin nükleotidi, Timin bazı içeriyorsa Timin nükleotidi adını alır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Temel Kavram Bilgisi',
    theme: 'Nükleotid İsimlendirme'
  }
];

// =========================================================================
// 3. ÜNİTE: BASINÇ (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit3End20Questions: LgsQuestion[] = [
  {
    id: 8301,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Katı Basıncı ve Tuğlanın Kuma Batma Derinliği',
    scenario: 'Özdeş tuğlalar yumuşak kum zemin üzerine önce geniş yüzeyi (2S) tabanda olacak şekilde, ardından dar yüzeyi (S) tabanda olacak şekilde konulmuştur.',
    questionPrompt: 'Tuğlaların kuma batma derinlikleri ve kuma uyguladıkları katı basınçları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Dar yüzeyi üzerine konulduğunda temas yüzeyi azaldığı için basınç ve kuma batma miktarı artar.' },
      { key: 'B', text: 'Geniş yüzeyi üzerine konulduğunda ağırlığı arttığı için kuma uyguladığı katı basıncı iki katına çıkar.' },
      { key: 'C', text: 'Tuğlanın duruş şekli değişse bile kütlesi sabit kaldığından her iki durumda da basınçlar eşittir.' },
      { key: 'D', text: 'Dar yüzeyi üzerine konulduğunda tuğlanın zemine uyguladığı toplam basınç kuvveti iki katına çıkar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Katı basıncı P = G / S formülüne göre yüzey alanı (S) ile ters orantılıdır. Yüzey daraldığında basınç artar ve kuma batma derinliği artar; basınç kuvveti (G) ise değişmez. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavramsal Uygulama',
    theme: 'Katı Basıncı ve Yüzey Alanı'
  },
  {
    id: 8302,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Çivi ve Raptiyelerde Kuvvet ile Basınç İletimi',
    scenario: 'Bir marangoz çivinin geniş başına çekiçle F büyüklüğünde bir kuvvetle vurarak çivinin sivri ucunun tahta zemine saplanmasını sağlamıştır.',
    questionPrompt: 'Çivinin başı ve sivri ucundaki fiziksel büyüklüklerin iletimi ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Katılar kendilerine uygulanan basıncı aynen iletirken uygulanan kuvveti yüzey alanına göre değiştirir.' },
      { key: 'B', text: 'Çivi çekicin uyguladığı F kuvvetini sivri ucuna aynen iletirken sivri uçtaki basınç baştakinden çok büyüktür.' },
      { key: 'C', text: 'Çivinin sivri ucundaki basınç baş kısmındaki basınçla tamamen eşit olup tahtayı delmeyi kolaylaştırmaz.' },
      { key: 'D', text: 'Çekiçle vurulduğunda çivinin sivri ucundaki kuvvet baş kısmına uygulanan kuvvetten katbekat fazladır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Katılar üzerlerine uygulanan KUVVETİ aynı doğrultuda aynen iletir (F1=F2). Ancak sivri ucun alanı çok küçük olduğundan (P=F/S) sivri uçtaki basınç devasa oranda artar. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Fiziksel İlke Analizi',
    theme: 'Katıların Kuvvet ve Basınç İletimi'
  },
  {
    id: 8303,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Düzgün Geometrik Cismin Boyuna Kesilmesi',
    scenario: 'Taban alanı 2S, ağırlığı 2G olan homojen ve düzgün bir dikdörtgen prizma tahta blok dikey olarak tam ortasından iki eşit parçaya kesilmiştir.',
    questionPrompt: 'Kalan parçalardan birinin zemine uyguladığı katı basıncı ilk duruma göre nasıl değişir?',
    options: [
      { key: 'A', text: 'Ağırlığı yarıya indiği için zemine uygulanan basınç da ilk duruma göre yarı yarıya azalır.' },
      { key: 'B', text: 'Temas yüzeyi yarıya indiği için zemine uygulanan katı basıncı ilk duruma göre iki katına çıkar.' },
      { key: 'C', text: 'Ağırlık ve temas yüzeyi aynı oranda azaldığı için zemine uygulanan katı basıncı kesinlikle değişmez.' },
      { key: 'D', text: 'Tahtanın yoğunluğu değiştiği için basınç değeri ortam sıcaklığına bağlı olarak belirsizleşir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Düzgün cisimler tabana dik (boyuna) kesildiğinde ağırlık ve yüzey alanı aynı oranda (G/S) azalır; dolayısıyla basınç değişmez (P = 2G/2S = G/S). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Geometrik ve Sayısal Muhakeme',
    theme: 'Katılarda Kesme ve Basınç'
  },
  {
    id: 8304,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Sıvı Basıncının Derinlikle İlişkisi ve Fışkırma Mesafesi',
    scenario: 'Su dolu bir pet şişenin üzerinde farklı yüksekliklerde üç özdeş delik açılmıştır: 1. delik yüzeye yakın, 2. delik ortada, 3. delik ise şişenin en dibindedir. Tıkaçlar aynı anda açıldığında suların fışkırma mesafeleri ölçülmüştür.',
    questionPrompt: 'Deliklerden çıkan suların yatayda aldıkları fışkırma mesafeleri arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: '1 numaralı delikten çıkan su en derinde olmadığı halde en uzağa fışkırır.' },
      { key: 'B', text: 'Her üç delikten çıkan suların fışkırma hızları ve aldıkları mesafeler birbirine eşittir.' },
      { key: 'C', text: '2 numaralı delikten çıkan suyun fışkırma mesafesi 3 numaralı delikten fazladır.' },
      { key: 'D', text: 'En derindeki 3 numaralı delikte sıvı basıncı en büyük olduğundan su en uzağa fışkırır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Sıvı basıncı derinlikle (h) doğru orantılıdır (P = h.d). En derindeki 3 numaralı delikte basınç en büyük olduğundan fışkırma hızı ve yatayda aldığı yol en fazladır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney ve Gözlem',
    theme: 'Sıvı Basıncı ve Derinlik'
  },
  {
    id: 8305,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Farklı Yoğunluktaki Sıvıların Taban Basıncı',
    scenario: 'Özdeş iki kaba aynı yüksekliğe (h) kadar biri su (yoğunluk = 1 g/cm3), diğeri zeytinyağı (yoğunluk = 0,9 g/cm3) ile doldurulmuştur.',
    questionPrompt: 'Kap tabanlarındaki sıvı basınçları ve bağımsız değişken ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Suyun yoğunluğu daha büyük olduğu için su dolu kabın tabanındaki sıvı basıncı daha fazladır.' },
      { key: 'B', text: 'Zeytinyağı daha akışkan olduğu için zeytinyağı dolu kabın tabanındaki sıvı basıncı daha fazladır.' },
      { key: 'C', text: 'Sıvı yükseklikleri eşit olduğundan sıvı cinsine bakılmaksızın her iki kabın taban basıncı eşittir.' },
      { key: 'D', text: 'Bu deneyde derinlik bağımsız değişken, kap tabanındaki sıvı basıncı ise kontrol değişkenidir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sıvı basıncı P = h.d bağıntısına göre yoğunlukla doğru orantılıdır. Derinlikler eşitken yoğunluğu büyük olan suyun taban basıncı zeytinyağından büyüktür. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Değişken Analizi',
    theme: 'Sıvı Basıncı ve Yoğunluk'
  },
  {
    id: 8306,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Daralan Kabın Ters Çevrilmesi',
    scenario: 'Tabanı geniş (2S), üst kısmı dar (S) olan kesik koni şeklindeki bir kap yarı yüksekliğine kadar su ile doludur. Kap ters çevrilerek dar tabanı (S) üzerine oturtulmuştur.',
    questionPrompt: 'Kap ters çevrildiğinde kap tabanındaki sıvı basıncı ve kabın zemine uyguladığı katı basıncı nasıl değişir?',
    options: [
      { key: 'A', text: 'Sıvı derinliği azaldığı için sıvı basıncı azalır, zemine temas yüzeyi azaldığı için katı basıncı azalır.' },
      { key: 'B', text: 'Dar kısma geçen suyun derinliği arttığı için sıvı basıncı artar, temas yüzeyi azaldığı için katı basıncı artar.' },
      { key: 'C', text: 'Sıvı hacmi değişmediğinden sıvı basıncı değişmez, toplam ağırlık sabit olduğundan katı basıncı değişmez.' },
      { key: 'D', text: 'Sıvı basıncı artarken kabın zemine uyguladığı toplam katı basıncı temas yüzeyi nedeniyle azalır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Daralan kısma geçen suyun yüksekliği (h) artar, bu yüzden sıvı basıncı artar (P=h.d). Kabın toplam ağırlığı değişmezken zemine temas yüzeyi 2S’ten S’e düştüğü için katı basıncı da artar. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Geometrik Akıl Yürütme',
    theme: 'Kap Ters Çevirme ve Basınç Değişimi'
  },
  {
    id: 8307,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Pascal Prensibi ve Su Cenderesi',
    scenario: 'Bir su cenderesinde küçük pistonun alanı S, büyük pistonun alanı 10S’tir. Küçük pistona F kuvveti uygulanarak büyük piston üzerindeki ağır bir araba dengede tutulmuştur.',
    questionPrompt: 'Bu hidrolik sistemin çalışma prensibi ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sıvılar sıkıştırılarak hacimleri küçültülür ve bu sayede işten ve enerjiden kazanç sağlanır.' },
      { key: 'B', text: 'Küçük pistona uygulanan kuvvet büyük pistona aynen iletilir ancak basınç 10 kat azalır.' },
      { key: 'C', text: 'Sıvılar basıncı her doğrultuda aynen iletir ve yüzey alanı farkı sayesinde kuvvetten kazanç sağlanır.' },
      { key: 'D', text: 'Büyük pistonu 1 metre yükseltmek için küçük pistonun yalnızca 10 santimetre itilmesi yeterlidir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Pascal Prensibine göre kapalı kaplardaki sıvılar üzerlerine uygulanan basıncı her noktaya aynen iletir. P1=P2 olduğundan F/S = G/10S olur ve küçük kuvvetle büyük yük dengelenir (yoldan kayıp vardır). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Prensip ve Mekanizma',
    theme: 'Pascal Prensibi'
  },
  {
    id: 8308,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Toriçelli Deneyi ve Cıva Seviyesi',
    scenario: 'Toriçelli 0 derece sıcaklıkta deniz seviyesinde 1 metre uzunluğundaki içi cıva dolu cam boruyu cıva çanağına ters batırdığında cam borudaki cıva yüksekliğini 76 cm olarak ölçmüştür.',
    questionPrompt: 'Cam borudaki bu 76 cm cıva yüksekliğinin dengede kalmasını sağlayan etken aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Cam borunun içindeki havanın cıva yüzeyine uyguladığı aşağı yönlü mekanik itme kuvveti.' },
      { key: 'B', text: 'Cıvanın yoğunluğunun sudan 13,6 kat daha az olması sebebiyle boru içinde hafiflemesi.' },
      { key: 'C', text: 'Kullanılan cam borunun kesit alanının ve eğim açısının cıva çekimini sabitlemiş olması.' },
      { key: 'D', text: 'Açık hava basıncının çanaktaki cıva yüzeyine uyguladığı basıncın 76 cm cıva sütununu dengelemesi.' }
    ],
    correctAnswer: 'D',
    explanation: 'Açık hava basıncı (P0) çanaktaki cıva yüzeyine etki eder ve cam borudaki 76 cm’lik cıva sütununun yaptığı sıvı basıncına eşitlenerek denge kurar. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney Tarihi ve Basınç Dengesi',
    theme: 'Toriçelli Deneyi'
  },
  {
    id: 8309,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Dağa Tırmanan Dağcının Barometre Ölçümü',
    scenario: 'Bir dağcı deniz seviyesinden başlayarak yüksek bir dağın zirvesine doğru tırmanırken elindeki hassas cıvalı barometredeki cıva sütunu yüksekliğini düzenli aralıklarla kaydetmiştir.',
    questionPrompt: 'Dağcının zirveye yaklaştıkça barometrede gözlemlediği değişim ve gerekçesi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Yukarı çıkıldıkça atmosferdeki hava yoğunluğu azaldığı için açık hava basıncı düşer ve cıva seviyesi azalır.' },
      { key: 'B', text: 'Zirveye yaklaştıkça yer çekimi kuvveti arttığı için açık hava basıncı yükselir ve cıva seviyesi artar.' },
      { key: 'C', text: 'Yükseklik arttıkça rüzgâr hızı arttığı için barometredeki cıva seviyesi hiçbir değişiklik göstermez.' },
      { key: 'D', text: 'Deniz seviyesinden uzaklaşıldıkça açık hava basıncı sabit kalır ancak ortam sıcaklığı cıvayı dondurur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yükseklere çıkıldıkça üzerimizdeki hava tabakasının kalınlığı ve gaz yoğunluğu azalır; bu nedenle açık hava basıncı düşer ve barometredeki sıvı seviyesi azalır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Veri ve Çevre İlişkisi',
    theme: 'Açık Hava Basıncı ve İrtifa'
  },
  {
    id: 8310,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Damacananın İçine Çökmesi (Açık Hava Basıncı Deneyi)',
    scenario: 'İçi boş plastik bir damacananın içine yanan kolonyalı pamuk atılmış, alev söner sönmez damacananın kapağı hava sızdırmaz şekilde sıkıca kapatılmıştır. Kısa bir süre sonra damacananın sanki dışarıdan büyük bir kuvvetle ezilmiş gibi içe doğru büzüldüğü görülmüştür.',
    questionPrompt: 'Damacananın içe doğru çökmesinin fiziksel nedeni aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Plastik malzemenin alev ısısıyla eriyerek kimyasal formülünün tamamen bozulması.' },
      { key: 'B', text: 'İçerideki gazın soğumasıyla iç basıncın düşmesi ve dıştaki açık hava basıncının damacanayı ezmesi.' },
      { key: 'C', text: 'Damacana kapağının aşırı sıkılması sonucu plastik yüzeyde mekanik kırılma oluşması.' },
      { key: 'D', text: 'Atmosferdeki oksijen gazının aniden damacana içine hücum ederek plastiği çekmesi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Alev içteki havayı ısıtıp bir kısmını dışarı atar. Kapak kapatılıp içerideki hava soğuyunca iç gaz basıncı açık hava basıncından küçük hale gelir. Dıştaki büyük açık hava basıncı damacanayı içeri çökerterek büzer. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Deney Mekanizması',
    theme: 'Açık Hava Basıncı Kanıtı'
  },
  {
    id: 8311,
    subTopicId: 'g8-u3-all',
    contextTitle: 'U Borulu Manometre ile Sıvı Basıncı Ölçümü',
    scenario: 'Ucuna esnek balon geçirilmiş bir huni, U borusundaki renkli sıvıya bağlanmıştır. Huni su dolu kaba önce 5 cm derinliğe, ardından 15 cm derinliğe daldırılmıştır.',
    questionPrompt: 'Huni daha derine daldırıldığında U borusundaki sıvı seviyeleri farkı nasıl değişir?',
    options: [
      { key: 'A', text: 'Derinlik arttıkça suyun yoğunluğu azaldığı için U borusundaki sıvı seviye farkı azalır.' },
      { key: 'B', text: 'U borusundaki sıvı seviye farkı değişmez çünkü açık uçtaki açık hava basıncı eşittir.' },
      { key: 'C', text: 'Derinlik arttıkça huniye etki eden sıvı basıncı arttığından U borusundaki kollar arası seviye farkı artar.' },
      { key: 'D', text: 'Huni daha derine indiğinde balon patlayacağı için U borusundaki tüm sıvı dışarı dökülür.' }
    ],
    correctAnswer: 'C',
    explanation: 'Derinlik (h) arttıkça sıvı basıncı artar. Artan basınç balonu içe doğru esnetir, hortumdaki havayı iter ve U borusundaki kollar arasındaki sıvı seviyesi farkını (Δh) artırır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Ölçme Aleti Mantığı',
    theme: 'U Borulu Manometre'
  },
  {
    id: 8312,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Apartman Su Deposu ve Katlardaki Musluk Basıncı',
    scenario: 'Dört katlı bir binanın çatısına yerleştirilen su deposundan borularla tüm dairelere su dağıtılmaktadır. 1. kattaki (en alt kat) ve 4. kattaki (çatıya en yakın kat) özdeş musluklar tam açılmıştır.',
    questionPrompt: 'Katlardaki musluklardan akan suyun akış hızı ve basıncı ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: '4. kattaki musluk depoya daha yakın olduğu için suyun akış hızı ve basıncı en fazladır.' },
      { key: 'B', text: 'Tüm katlardaki musluklar aynı depoya bağlı olduğu için su basınçları tamamen eşittir.' },
      { key: 'C', text: 'Boruların uzunluğu arttıkça suyun yoğunluğu arttığı için 2. katta basınç zirveye çıkar.' },
      { key: 'D', text: 'Su deposuna olan düşey derinlik en fazla 1. katta olduğundan en yüksek su basıncı 1. kattadır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Sıvı basıncı açık sıvı yüzeyinden itibaren olan dikey derinlikle (h) hesaplanır. 1. kat deponun su yüzeyinden en uzakta (en derinde) olduğundan su basıncı ve akış hızı en büyüktür. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Günlük Hayat Problemi',
    theme: 'Bileşik Kaplar ve Şebeke Basıncı'
  },
  {
    id: 8313,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Özdeş K Belteş Küpleriyle Katı Basıncı',
    scenario: 'Özdeş küplerle oluşturulan üç farklı kulede; 1. düzenekte üst üste 3 küp (taban S), 2. düzenekte yan yana 3 küp (taban 3S), 3. düzenekte ise 6 küp 2S taban üzerine dizilmiştir.',
    questionPrompt: 'Düzeneklerin zemine uyguladıkları katı basınçları P1, P2 ve P3 arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'P1 ve P3 basınçları birbirine eşit olup P2 basıncından daha büyüktür.' },
      { key: 'B', text: 'P2 basıncı en büyük, P1 ve P3 basınçları ise birbirine eşit ve daha küçüktür.' },
      { key: 'C', text: 'P3 basıncı toplam küp sayısı en fazla olduğu için diğer tüm düzeneklerden büyüktür.' },
      { key: 'D', text: 'Her üç düzeneğin zemine uyguladığı katı basınçları tamamen birbirine eşittir.' }
    ],
    correctAnswer: 'A',
    explanation: 'P1 = 3G / S = 3P. P2 = 3G / 3S = 1P. P3 = 6G / 2S = 3P. Bu durumda P1 = P3 > P2 olur. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Sayısal Kıyaslama',
    theme: 'Katı Basıncı Matematiksel İlişki'
  },
  {
    id: 8314,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Kapalı Kaptaki Gaz Basıncı ve Piston Hareketi',
    scenario: 'Sürtünmesiz sızdırmaz hareketli bir pistonla kapatılmış silindir içerisinde bir miktar gaz bulunmaktadır. Piston dışarıdan bastırılarak gazın hacmi yarıya indirilmiştir.',
    questionPrompt: 'Gazın hacmi yarıya indirildiğinde silindir içerisindeki gaz basıncı nasıl değişir?',
    options: [
      { key: 'A', text: 'Gaz molekülleri sıkıştığı için kabın tabanındaki basınç artarken tavanındaki basınç azalır.' },
      { key: 'B', text: 'Birim hacme düşen gaz molekülü sayısı ve çarpışma frekansı iki katına çıktığından gaz basıncı iki katına çıkar.' },
      { key: 'C', text: 'Gazın kütlesi değişmediği için hacmi azalsa dahi silindirdeki gaz basıncı sabit kalır.' },
      { key: 'D', text: 'Piston aşağı itildiğinde gaz moleküllerinin sıcaklığı sıfır dereceye inerek basıncı sıfırlar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kapalı kaplarda gaz basıncı hacimle ters orantılıdır (Boyle Yasası). Sıcaklık sabitken hacim yarıya inerse tanecikler daha sık yüzeye çarpar ve gaz basıncı iki katına çıkar. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Tanecik Modeli Muhakemesi',
    theme: 'Kapalı Kapta Gaz Basıncı'
  },
  {
    id: 8315,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Toriçelli Deneyinde Farklı Yoğunlukta Sıvı Kullanımı',
    scenario: 'Toriçelli deneyinde cıva yerine yoğunluğu cıvadan çok daha küçük olan saf su kullanılsaydı açık hava basıncını dengelemek için gereken cam boru boyu nasıl değişirdi?',
    questionPrompt: 'Bu durumla ilgili aşağıdaki bilimsel çıkarımlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Suyun yoğunluğu küçük olduğu için 76 cm’den çok daha kısa bir cam boru yeterli olurdu.' },
      { key: 'B', text: 'Açık hava basıncı değişmediğinden su kullanıldığında da seviye tam 76 cm olurdu.' },
      { key: 'C', text: 'Suyun yoğunluğu cıvadan yaklaşık 13,6 kat az olduğundan yaklaşık 10,3 metrelik dev bir boru gerekirdi.' },
      { key: 'D', text: 'Su buharlaşacağı için cam boru içerisinde hiçbir zaman sıvı yükselmesi gerçekleşmezdi.' }
    ],
    correctAnswer: 'C',
    explanation: 'P0 = h_cıva . d_cıva = h_su . d_su. Cıvanın yoğunluğu 13,6 g/cm³, suyun yoğunluğu 1 g/cm³ olduğundan su sütunu yüksekliği 76 cm x 13,6 ≈ 1033 cm (yaklaşık 10,3 metre) olurdu. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Orantısal Akıl Yürütme',
    theme: 'Sıvı Yoğunluğu ve Barometre Boyu'
  },
  {
    id: 8316,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Günlük Yaşamda Katı Basıncını Azaltma Örnekleri',
    scenario: 'Mühendisler ağır yük taşıyan kamyonların tekerlek sayısını artırmış, karlı zeminlerde kullanılan iş makinelerine ise tekerlek yerine geniş palet takmışlardır.',
    questionPrompt: 'Bu tasarım uygulamalarının ortak mühendislik amacı aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Araçların sürtünme kuvvetini sıfırlayarak yakıt tüketimini en aza indirmek.' },
      { key: 'B', text: 'Yüzey alanını daraltarak zemine uygulanan katı basıncını olabildiğince artırmak.' },
      { key: 'C', text: 'Araçların toplam ağırlığını azaltarak taşıma kapasitesini artırmak.' },
      { key: 'D', text: 'Temas yüzey alanını artırarak zemine uygulanan katı basıncını azaltmak ve batmayı önlemek.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tekerlek sayısını artırmak ve geniş palet kullanmak temas yüzey alanını (S) artırır; böylece zemine etki eden basınç (P=G/S) azalır ve aracın batması engellenir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Mühendislik ve Teknoloji',
    theme: 'Basıncı Azaltan Uygulamalar'
  },
  {
    id: 8317,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Pipetle Meyve Suyu İçerken Gerçekleşen Olaylar',
    scenario: 'Bir çocuk meyve suyu kutusundaki pipetten hava çektiğinde kutunun içe doğru büzüldüğünü ve meyve suyunun pipetten ağzına doğru yükseldiğini gözlemlemiştir.',
    questionPrompt: 'Meyve suyunun pipet içinde yükselmesini sağlayan temel kuvvet nedir?',
    options: [
      { key: 'A', text: 'Kutu dışındaki açık hava basıncının pipet içindeki basınçtan büyük olması ve sıvıyı yukarı itmesi.' },
      { key: 'B', text: 'Meyve suyunun yer çekimi kuvvetini yenerek kendi kendine genleşmesi ve yükselmesi.' },
      { key: 'C', text: 'Pipetin yapıldığı plastik malzemenin sıvıyı emici kimyasal çekim kuvveti uygulaması.' },
      { key: 'D', text: 'Kutu tabanındaki katı basıncının pipet ucundaki sıvı basıncından küçük hale gelmesi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pipetteki hava çekilince pipet içindeki gaz basıncı düşer. Sıvı yüzeyine etki eden dış açık hava basıncı pipet içindeki basınçtan büyük olduğu için sıvıyı pipetin içine doğru iter. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Günlük Yaşam Fiziği',
    theme: 'Pipet ve Açık Hava Basıncı'
  },
  {
    id: 8318,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Haşlanmış Yumurtanın Şişeye Girmesi Deneyi',
    scenario: 'Ağzı yumurtadan biraz dar olan bir cam şişenin içine yanan bir kâğıt parçası atılmış, hemen ardından kabuğu soyulmuş haşlanmış yumurta şişenin ağzına oturtulmuştur. Kâğıt söndükten sonra yumurtanın parçalanmadan şişenin içine çekildiği görülmüştür.',
    questionPrompt: 'Yumurtanın şişenin içine girmesini sağlayan fiziksel süreç hangisinde eksiksiz açıklanmıştır?',
    options: [
      { key: 'A', text: 'Kâğıdın yanmasıyla şişe içindeki oksijenin artması ve yumurtayı içeri çekmesi.' },
      { key: 'B', text: 'Şişe içindeki gaz soğuyunca iç basıncın düşmesi ve dış açık hava basıncının yumurtayı içeri itmesi.' },
      { key: 'C', text: 'Cam şişenin ısınarak ağız çapını iki kat genişletmesi ve yumurtanın serbestçe düşmesi.' },
      { key: 'D', text: 'Yumurtanın protein yapısının ısıyla eriyerek sıvı hale geçip şişeye akması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ateş sönüp gaz soğuyunca şişe içindeki gaz basıncı açık hava basıncının altına iner. Dışarıdaki açık hava basıncı yumurtanın üzerine itici kuvvet uygulayarak şişenin içine iter. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Deney Aşamaları Muhakemesi',
    theme: 'Açık Hava Basıncı Deneyleri'
  },
  {
    id: 8319,
    subTopicId: 'g8-u3-all',
    contextTitle: 'U Borulu Bileşik Kaplarda Sıvı Dengesi',
    scenario: 'Farklı kalınlık ve şekillere sahip beş kollu bir bileşik kaba musluktan su akıtılmıştır.',
    questionPrompt: 'Sıvı akışı tamamlanıp denge sağlandığında kollardaki su yükseklikleri nasıl olur?',
    options: [
      { key: 'A', text: 'En dar olan kolda kılcallık etkisi nedeniyle su seviyesi diğer tüm kollardan daha yüksekte kalır.' },
      { key: 'B', text: 'En geniş olan kolda su kütlesi daha fazla olduğu için taban basıncı en yüksek olur ve seviye yükselir.' },
      { key: 'C', text: 'Kolların şekli, eğimi ve kalınlığı ne olursa olsun tüm kollardaki sıvı seviyeleri birbirine eşit olur.' },
      { key: 'D', text: 'Kollardaki sıvı seviyeleri musluğa olan uzaklıkla ters orantılı olacak şekilde kademeli azalır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bileşik kaplar prensibine göre tabanları birleşik kollarda sıvı basınçları eşitlenene kadar akış sürer; denge anında boruların şekline ve kalınlığına bakılmaksızın tüm kollardaki sıvı seviyeleri eşit olur. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'İlke ve Kural Analizi',
    theme: 'Bileşik Kaplar'
  },
  {
    id: 8320,
    subTopicId: 'g8-u3-all',
    contextTitle: 'Sıvı Basıncının Kabın Şeklinden Bağımsızlığı',
    scenario: 'Taban alanları eşit (S) olan düz, yukarı doğru genişleyen ve yukarı doğru daralan üç farklı kaba aynı yüksekliğe (h) kadar aynı cins zeytinyağı konulmuştur.',
    questionPrompt: 'Kap tabanlarına etki eden sıvı basınçları arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: 'Genişleyen kapta daha fazla sıvı bulunduğu için genişleyen kabın taban basıncı en büyüktür.' },
      { key: 'B', text: 'Daralan kapta sıvı sıkıştığı için daralan kabın tabanındaki sıvı basıncı en büyüktür.' },
      { key: 'C', text: 'Düz kapta duvarlar dik olduğu için tabana etki eden sıvı basıncı diğerlerinden büyüktür.' },
      { key: 'D', text: 'Sıvıların cinsi ve yükseklikleri aynı olduğundan her üç kabın tabanındaki sıvı basınçları eşittir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Sıvı basıncı P = h.d bağıntısına göre yalnızca derinlik ve yoğunluğa bağlıdır; kabın şekline ve toplam sıvı miktarına bağlı DEĞİLDİR. h ve d eşit olduğundan basınçlar eşittir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Kavramsal Netlik',
    theme: 'Kap Şeklinin Etkisi'
  }
];

// =========================================================================
// 4. ÜNİTE: MADDE VE ENDÜSTRİ (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit4End20Questions: LgsQuestion[] = [
  {
    id: 8401,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Periyodik Sistemin Tarihsel Gelişimi',
    scenario: 'Mendeleyev elementleri artan atom kütlelerine göre dizerken, Henry Moseley X ışınları deneyleriyle elementlerin periyodik sistemdeki diziliminin proton sayılarına göre olması gerektiğini ispatlamıştır.',
    questionPrompt: 'Moseley’in bu bilimsel keşfi periyodik sistemin anlaşılmasında neyi kanıtlamıştır?',
    options: [
      { key: 'A', text: 'Elementlerin kimyasal özelliklerini belirleyen temel faktörün atom kütlesi değil atom numarası olduğunu.' },
      { key: 'B', text: 'Periyodik tablonun yalnızca metaller sınıfından oluştuğunu ve ametallerin bulunmadığını.' },
      { key: 'C', text: 'Soygazların tüm periyotlarda en sol sütunda yer alarak en aktif element olduğunu.' },
      { key: 'D', text: 'Elementlerin oda sıcaklığında tamamının sıvı fazda olduğunu ve gazların var olmadığını.' }
    ],
    correctAnswer: 'A',
    explanation: 'Moseley modern periyodik tablonun temelini atmış ve elementlerin artan proton sayısına (atom numarasına) göre dizildiğini kanıtlamıştır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Bilim Tarihi ve Kanıt',
    theme: 'Periyodik Tablo Tarihçesi'
  },
  {
    id: 8402,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Grup ve Periyot Numarası Bulma',
    scenario: 'Nötr haldeki X atomunun katman elektron dağılımı 2 - 8 - 7 şeklindedir.',
    questionPrompt: 'X elementinin periyodik tablodaki yeri ve sınıfı hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: '2. periyot 7A grubunda yer alan parlak görünümlü bir geçiş metalidir.' },
      { key: 'B', text: '3. periyot 7A grubunda yer alan elektriği iyi iletmeyen bir ametaldir.' },
      { key: 'C', text: '3. periyot 2A grubunda yer alan tel ve levha haline gelebilen bir metaldir.' },
      { key: 'D', text: '7. periyot 3A grubunda yer alan kararlı yapıdaki bir soygazdır.' }
    ],
    correctAnswer: 'B',
    explanation: '3 katmanı olduğu için 3. periyot, son katmanda 7 elektron olduğu için 7A grubundadır (Halojen). 7A grubu ametaldir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Kavram Uygulama',
    theme: 'Grup ve Periyot'
  },
  {
    id: 8403,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Fiziksel ve Kimyasal Değişim Tanecik Modeli',
    scenario: 'Bir deneyde küp şekerin suda çözünmesi I. işlem, şekerin tavada ısıtılarak kömürleşmesi II. işlem olarak adlandırılmıştır.',
    questionPrompt: 'Bu iki işlemde maddede meydana gelen değişimlerle ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Her iki işlemde de şekerin iç yapısı ve kimlik özellikleri tamamen değişmiştir.' },
      { key: 'B', text: 'I. işlemde kimyasal tepkime gerçekleşirken II. işlemde yalnızca hal değişimi olmuştur.' },
      { key: 'C', text: 'I. işlemde şekerin kimliği korunurken II. işlemde bağlar kırılarak yeni madde oluşmuştur.' },
      { key: 'D', text: 'Her iki işlem de fiziksel değişim olup basit süzme yöntemiyle eski haline dönebilir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çözünme fiziksel değişimdir (şeker özelliğini korur). Şekerin yanıp kömürleşmesi kimyasal değişimdir (yeni madde oluşur, kimlik değişir). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Model Analizi',
    theme: 'Fiziksel ve Kimyasal Değişim'
  },
  {
    id: 8404,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Kimyasal Tepkimelerde Kütlenin Korunumu',
    scenario: 'Kapalı bir cam kapta 32 gram metan gazı ile 64 gram oksijen gazı yakılmış, tepkime sonucunda 44 gram karbondioksit gazı ile bir miktar su buharı oluşmuştur.',
    questionPrompt: 'Kütlenin korunumu kanununa göre oluşan su buharının kütlesi kaç gramdır?',
    options: [
      { key: 'A', text: 'Tepkimeye giren gazların yarısı buharlaştığı için su kütlesi 16 gram olarak bulunur.' },
      { key: 'B', text: 'Kütle kaybı yaşandığı için kapta oluşan su miktarı tam olarak 28 gramdır.' },
      { key: 'C', text: 'Oksijen gazının tamamı tüketilmediği için oluşan su buharı 36 gram değerindedir.' },
      { key: 'D', text: 'Toplam kütle korunduğu için girenler 96 gram olup oluşan su kütlesi 52 gramdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Lavoisier Kütlenin Korunumu Kanununa göre: Toplam Giren Kütlesi = Toplam Ürün Kütlesi. 32 + 64 = 96 gram. 96 - 44 = 52 gram su buharı oluşur. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Sayısal Hesaplama',
    theme: 'Kütlenin Korunumu'
  },
  {
    id: 8405,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Asit ve Bazların Ayraçlara Etkisi',
    scenario: 'K çözeltisi mavi turnusol kâğıdını kırmızıya çevirmekte, L çözeltisi ise fenolftalein damlatıldığında pembe renge dönüşmektedir.',
    questionPrompt: 'Buna göre K ve L çözeltileri aşağıdakilerden hangisi olabilir?',
    options: [
      { key: 'A', text: 'K çözeltisi limon suyu veya hidroklorik asit, L çözeltisi sabunlu su veya sodyum hidroksittir.' },
      { key: 'B', text: 'K çözeltisi amonyak çözeltisi, L çözeltisi sirke veya sülfürik asit çözeltisidir.' },
      { key: 'C', text: 'K çözeltisi saf su veya sofra tuzu, L çözeltisi çamaşır suyu veya kireçlidir.' },
      { key: 'D', text: 'K çözeltisi deterjanlı su, L çözeltisi elma suyu veya portakal suyudur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Turnusolu kırmızıya çeviren K asittir (limon suyu, HCl). Fenolftalein ile pembe renk veren L bazdır (sabunlu su, NaOH). Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavram Eşleştirme',
    theme: 'Asit ve Baz Belirteçleri'
  },
  {
    id: 8406,
    subTopicId: 'g8-u4-all',
    contextTitle: 'pH Ölçeği ve Kuvvetlilik İlişkisi',
    scenario: 'Özdeş dört sıvının pH değerleri ölçülmüştür: X sıvısı pH=1, Y sıvısı pH=5, Z sıvısı pH=7, T sıvısı pH=13.',
    questionPrompt: 'Bu sıvıların özellikleri ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Y sıvısı X sıvısından daha kuvvetli bir asit olup metalleri daha hızlı aşındırır.' },
      { key: 'B', text: 'X sıvısı kuvvetli asit, T sıvısı kuvvetli baz, Z sıvısı ise nötr bir maddedir.' },
      { key: 'C', text: 'T sıvısı kırmızı turnusol kâğıdını kırmızıda tutarak asidik özellik sergiler.' },
      { key: 'D', text: 'Z sıvısının içine fenolftalein damlatıldığında çözelti koyu mor renge bürünür.' }
    ],
    correctAnswer: 'B',
    explanation: 'pH 0-7 arası asit (0’a yaklaştıkça kuvvetlenir, X=1 kuvvetli asit). pH=7 nötr (Z). pH 7-14 arası baz (14’e yaklaştıkça kuvvetlenir, T=13 kuvvetli baz). Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Ölçek Analizi',
    theme: 'pH Değerleri'
  },
  {
    id: 8407,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Asit Yağmurlarının Çevresel Etkileri',
    scenario: 'Fabrika bacalarından ve araç egzozlarından salınan kükürt dioksit ve azot dioksit gazları bulutlardaki su buharı ile birleşerek asit yağmurlarını oluşturur.',
    questionPrompt: 'Asit yağmurlarının yeryüzündeki tarihi eserler ve doğa üzerindeki tahribatı ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Toprağın mineral dengesini zenginleştirerek tarımsal verimliliği iki katına çıkarır.' },
      { key: 'B', text: 'Plastik ve cam malzemelerle reaksiyona girerek onları anında eritip yok eder.' },
      { key: 'C', text: 'Kalsiyum karbonat içeren mermer heykelleri ve tarihi yapıları kimyasal olarak aşındırır.' },
      { key: 'D', text: 'Göl ve nehirlerdeki suyun pH değerini 12 seviyesine çıkararak aşırı bazikleştirir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Asitler mermer (CaCO3) ve metalleri aşındırır. Tarihi mermer eserler ve antik kentler asit yağmurlarından ciddi zarar görür. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Çevre ve Kimya İlişkisi',
    theme: 'Asit Yağmurları'
  },
  {
    id: 8408,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Öz Isı ve Sıcaklık Değişimi Deneyi',
    scenario: 'Başlangıç sıcaklıkları ve kütleleri eşit olan su (öz ısı = 4,18 J/g°C) ve etil alkol (öz ısı = 2,4 J/g°C) özdeş ısıtıcılarla 5 dakika boyunca ısıtılmıştır.',
    questionPrompt: 'Süre sonunda sıvıların sıcaklık artışları arasındaki ilişki ve gerekçesi hangisinde doğrudur?',
    options: [
      { key: 'A', text: 'Suyun öz ısısı büyük olduğu için sıcaklık artışı alkolden çok daha fazla olmuştur.' },
      { key: 'B', text: 'Her iki sıvının da aldıkları ısı enerjileri farklı olduğu için sıcaklıkları eşitlenmiştir.' },
      { key: 'C', text: 'Alkolün kütlesi ısıtma süresince azalarak suyun sıcaklık artışını doğrudan engellemiştir.' },
      { key: 'D', text: 'Alkolün öz ısısı sudan küçük olduğu için sıcaklık artışı sudan daha fazladır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Öz ısısı küçük olan maddeler daha çabuk ısınır ve sıcaklık artışı daha fazla olur. Alkolün öz ısısı küçük olduğundan sıcaklık artışı sudan büyüktür. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney ve Matematiksel Mantık',
    theme: 'Öz Isı ve Sıcaklık'
  },
  {
    id: 8409,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Buz Kalıpları Üzerine Konulan Sıcak Metaller',
    scenario: 'Kütleleri ve sıcaklıkları (80 °C) eşit olan demir (öz ısı = 0,46 J/g°C) ve bakır (öz ısı = 0,37 J/g°C) bilyeler özdeş buz kalıplarının üzerine bırakılmıştır.',
    questionPrompt: 'Bilyelerin buz kalıplarında erittiği buz miktarları ve ilerleme derinlikleri hangisinde doğrudur?',
    options: [
      { key: 'A', text: 'Demirin öz ısısı daha büyük olduğu için daha fazla ısı verir ve buzda daha derine iner.' },
      { key: 'B', text: 'Bakırın öz ısısı küçük olduğu için buza daha çok ısı aktarır ve daha derine iner.' },
      { key: 'C', text: 'Başlangıç sıcaklıkları eşit olduğundan her iki metal de tamamen eşit miktar buz eritir.' },
      { key: 'D', text: 'Metaller buz üzerinde erime yapamaz çünkü katı basınçları buz yoğunluğundan düşüktür.' }
    ],
    correctAnswer: 'A',
    explanation: 'Q = m.c.Δt. Sıcaklık ve kütle eşitken öz ısısı (c) büyük olan demir çevreye daha çok ısı verir ve buzda daha çok erime yaparak daha derine iner. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavramsal Problem Çözme',
    theme: 'Öz Isı ve Buz Eritme'
  },
  {
    id: 8410,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Hal Değişimi Sırasında Sıcaklık Grafiği',
    scenario: 'Isıtılan saf bir katı maddenin sıcaklık-zaman grafiğinde sıcaklığın bir süre 80 derecede sabit kaldığı, ardından tekrar yükselmeye başladığı görülmektedir.',
    questionPrompt: 'Sıcaklığın 80 derecede sabit kaldığı zaman aralığında maddede gerçekleşen durum hangisidir?',
    options: [
      { key: 'A', text: 'Madde dışarıdan ısı almayı tamamen durdurmuş ve ortama ısı vermeye başlamıştır.' },
      { key: 'B', text: 'Madde hal değiştirmekte olup alınan ısı enerjisi tanecikler arası bağları koparmada kullanılır.' },
      { key: 'C', text: 'Maddenin kimyasal yapısı bozularak yeni bir bileşiğe dönüşüm gerçekleşmektedir.' },
      { key: 'D', text: 'Madde gaz fazına aniden geçmiş ve tüm tanecikler kabı tamamen terk etmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Saf maddeler hal değiştirirken (erime veya kaynama) sıcaklıkları sabit kalır; alınan ısı tanecikler arasındaki çekim bağlarını zayıflatmak için harcanır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Grafik Yorumlama',
    theme: 'Hal Değişimi ve Sıcaklık Sabitliği'
  },
  {
    id: 8411,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Türkiye’de Kimya Endüstrisinin Gelişimi',
    scenario: 'Türkiye’de kimya endüstrisi plastik, kauçuk, boya, gübre ve ilaç gibi birçok sektörde üretim yapmaktadır. Ancak üretimde kullanılan ham maddelerin yaklaşık yüzde 70’i yurt dışından ithal edilmektedir.',
    questionPrompt: 'Bu durumun ülke ekonomisi ve kimya endüstrisi üzerindeki temel etkisi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Ülkemizin kimya alanında dünyada en çok ham madde ihraç eden lider ülke olmasını sağlamıştır.' },
      { key: 'B', text: 'Kimya endüstrisinde çalışan mühendis ve tekniker ihtiyacını tamamen ortadan kaldırmıştır.' },
      { key: 'C', text: 'Sektörün dışa bağımlı olmasına yol açarak döviz kurlarındaki dalgalanmalardan doğrudan etkilenmesine neden olur.' },
      { key: 'D', text: 'Yerli bor madenlerinin kimya sanayisinde kullanımını tamamen gereksiz hale getirmiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ham maddede dışa bağımlılık maliyetleri artırır ve döviz kuruna bağımlılık yaratır. Bu yüzden yerli ham madde üretimi ve AR-GE stratejik önem taşır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Sosyo-Ekonomik Analiz',
    theme: 'Türkiye Kimya Sanayisi'
  },
  {
    id: 8412,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Metaller ile Asitlerin Tepkimesi',
    scenario: 'Bir deney tüpündeki çinko metal parçalarının üzerine hidroklorik asit (tuz ruhu) döküldüğünde tüpten yoğun bir gaz çıkışı olduğu ve tüpün dış yüzeyinin ısındığı belirlenmiştir.',
    questionPrompt: 'Açığa çıkan bu yanıcı gaz ve gerçekleşen tepkime türü hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Açığa çıkan gaz karbondioksit gazıdır ve olay fiziksel bir buharlaşma değişimidir.' },
      { key: 'B', text: 'Açığa çıkan gaz oksijen gazıdır ve çinko metali hiçbir kimyasal değişime uğramamıştır.' },
      { key: 'C', text: 'Açığa çıkan gaz klor gazıdır ve deney ortamında kütle kaybı yaşanmıştır.' },
      { key: 'D', text: 'Açığa çıkan gaz hidrojen gazıdır ve metal ile asit arasında kimyasal tepkime gerçekleşmiştir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Asitler aktif metallerle (Zn, Fe, Mg) tepkimeye girdiğinde tuz ve HİDROJEN (H2) gazı açığa çıkar; bu kimyasal bir tepkimedir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney ve Tepkime Bilgisi',
    theme: 'Asit-Metal Tepkimesi'
  },
  {
    id: 8413,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Soygazların Kararlı Yapısı ve Bileşik Yapmama İlkesi',
    scenario: 'Helyum, Neon ve Argon elementlerinin periyodik tablonun en sağındaki 8A grubunda yer aldıkları ve doğada tek atomlu gaz halinde bulundukları bilinir.',
    questionPrompt: 'Soygazların kararlı elektron dizilimine sahip olmaları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Son katmanları tam dolu olduğu için elektron alışverişi veya ortaklaşması yapmazlar.' },
      { key: 'B', text: 'Oda koşullarında katı halde bulunup tel ve levha haline kolaylıkla getirilebilirler.' },
      { key: 'C', text: 'Asit çözeltileriyle anında reaksiyona girerek patlayıcı hidrojen gazı oluştururlar.' },
      { key: 'D', text: 'Isı ve elektriği metallerden daha iyi ileterek elektronik devrelerde direnç oluştururlar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Soygazların son katmanları elektronla tam doludur (Helyum 2, diğerleri 8). Bu nedenle kararlıdırlar ve kimyasal bağ (bileşik) oluşturmazlar. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavram Tanıma',
    theme: 'Soygazlar'
  },
  {
    id: 8414,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Nötralleşme Tepkimesi ve Tuz Oluşumu',
    scenario: 'Eşit mol sayısındaki hidroklorik asit (HCl) çözeltisi ile sodyum hidroksit (NaOH) bazı karıştırılmıştır.',
    questionPrompt: 'Bu tepkime sonucunda oluşan ürünler ve pH değişimi ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Çözeltinin pH değeri sıfıra düşer ve kapta aşırı asidik bir karışım birikir.' },
      { key: 'B', text: 'Tepkime sonucunda sofra tuzu ve su oluşur, tam nötralleşmede pH 7 değerine ulaşır.' },
      { key: 'C', text: 'Asit ve baz tepkimeye girmeyip iki ayrı faz halinde birbirinden tamamen ayrılır.' },
      { key: 'D', text: 'Çözeltinin pH değeri 14’e fırlar ve çözelti güçlü bir yakıcı baza dönüşür.' }
    ],
    correctAnswer: 'B',
    explanation: 'Asit + Baz -> Tuz + Su nötralleşme tepkimesidir (HCl + NaOH -> NaCl + H2O). Tam nötralleşmede ortam pH=7 nötr olur. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Kimyasal Denklem',
    theme: 'Nötralleşme'
  },
  {
    id: 8415,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Periyodik Tabloda Soldan Sağa ve Yukarıdan Aşağıya Değişimler',
    scenario: 'Periyodik tabloda soldan sağa doğru gidildikçe ve aynı grupta yukarıdan aşağıya doğru inildikçe bazı periyodik özellikler düzenli olarak değişir.',
    questionPrompt: 'Aynı periyotta soldan sağa doğru gidildikçe gerçekleşen değişim hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Elementlerin katman sayısı kademeli olarak artarken proton sayıları sabit kalır.' },
      { key: 'B', text: 'Elementlerin metalik özellikleri artış gösterirken ametalik özellikleri hızla azalır.' },
      { key: 'C', text: 'Atom numarası ve son katmandaki değerlik elektron sayısı artarken katman sayısı değişmez.' },
      { key: 'D', text: 'Tüm elementlerin oda sıcaklığındaki fiziksel halleri sırasıyla gazdan katıya doğru evrilir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Aynı periyotta soldan sağa gidildikçe periyot numarası (katman sayısı) aynı kalır, proton sayısı (atom no) ve grup numarası (değerlik elektronu) artar. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Genelleme ve Kural',
    theme: 'Periyodik Özelliklerin Değişimi'
  },
  {
    id: 8416,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Asitlerin Saklanma Koşulları',
    scenario: 'Bir kimya laboratuvarında yeni gelen asit çözeltilerinin saklanacağı kaplar seçilecektir.',
    questionPrompt: 'Asitlerin kimyasal özellikleri dikkate alındığında hangi malzemeden yapılmış kaplar tercih edilmelidir?',
    options: [
      { key: 'A', text: 'Asitler mermer yüzeyleri koruduğu için saf mermerden oyulmuş kaplar seçilmelidir.' },
      { key: 'B', text: 'Asitler çinko ve demirle tepkime vermediğinden metal kaplar tercih edilmelidir.' },
      { key: 'C', text: 'Asitler alüminyum levhaları sertleştirdiğinden alüminyum tanklar kullanılmalıdır.' },
      { key: 'D', text: 'Asitler cam ve plastik malzemelerle tepkimeye girmediğinden cam veya plastik kaplar seçilmelidir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Asitler metal ve mermeri aşındırır; cam ve plastik kaplarla tepkimeye girmez. Bu yüzden asitler cam veya plastik şişelerde saklanır (Bazlar ise cam ve porseleni matlaştırır/aşındırır). Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Laboratuvar Güvenliği',
    theme: 'Asit Saklama Koşulları'
  },
  {
    id: 8417,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Buharlaşma Isısı ve Serinleme Olayları',
    scenario: 'Elimize kolonya döküldüğünde veya denizden çıktığımızda vücudumuzda belirgin bir serinlik hissederiz.',
    questionPrompt: 'Bu günlük yaşam olayının temel termodinamik gerekçesi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Buharlaşan sıvının buharlaşırken ihtiyaç duyduğu ısıyı cildimizden alarak vücudu soğutması.' },
      { key: 'B', text: 'Kolonyadaki alkolün cildimizin gözeneklerini tıkayarak kan akışını aniden durdurması.' },
      { key: 'C', text: 'Su damlacıklarının cildimizde kimyasal tepkimeye girerek endotermik tuzlar üretmesi.' },
      { key: 'D', text: 'Vücudumuzun rüzgârın etkisiyle dışarıdan yoğun miktarda ısı enerjisi emmeye başlaması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Buharlaşma ısı alan bir olaydır (endotermik). Sıvı buharlaşırken temas ettiği yüzeyden (tenimizden) buharlaşma ısısı (Lb) çeker ve sıcaklığımızın düşmesine neden olur. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Günlük Hayat Muhakemesi',
    theme: 'Buharlaşma ve Isı Alışverişi'
  },
  {
    id: 8418,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Yarı Metallerin Kullanım Alanları',
    scenario: 'Bor ve Silisyum elementleri periyodik tabloda metaller ile ametaller arasında yer alan yarı metaller sınıfındadır.',
    questionPrompt: 'Yarı metallerin günümüz ileri teknolojisinde ve elektronik sanayisinde vazgeçilmez olmasının sebebi nedir?',
    options: [
      { key: 'A', text: 'Oda sıcaklığında yalnızca sıvı fazda bulunarak hidrolik sistemlerde yağ görevi görmeleri.' },
      { key: 'B', text: 'Sıcaklıkla elektrik iletkenliklerinin artması ve yarı iletken mikroçip üretiminde kullanılmaları.' },
      { key: 'C', text: 'Doğadaki tüm elementlerle hiçbir enerji gerektirmeden kendiliğinden bileşik yapmaları.' },
      { key: 'D', text: 'Radyoaktif patlamalara karşı tamamen geçirimsiz devasa kurşun zırhlar oluşturmaları.' }
    ],
    correctAnswer: 'B',
    explanation: 'Yarı metaller elektrik akımını ametallerden iyi, metallerden az iletir (yarı iletken). Bu özellik transistör, mikroçip, bilgisayar işlemcisi ve güneş paneli üretiminde kritik öneme sahiptir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Teknoloji ve Malzeme Bilgisi',
    theme: 'Yarı Metaller'
  },
  {
    id: 8419,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Farklı Kütlelerdeki Aynı Sıvının Isıtılması',
    scenario: 'Özdeş kaplarda bulunan 100 gram su ve 200 gram su özdeş ısıtıcılarla 10 dakika boyunca ısıtılmıştır.',
    questionPrompt: 'Isıtma işlemi sonunda suların aldıkları ısı enerjileri ve sıcaklık artışları hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: '200 gram suyun aldığı ısı enerjisi 100 gram suyun aldığı ısı enerjisinden iki kat fazladır.' },
      { key: 'B', text: 'Her iki suyun da sıcaklık artışları kütleye bakılmaksızın birbirine tamamen eşit olmuştur.' },
      { key: 'C', text: 'Isıtıcılar özdeş ve süre eşit olduğu için aldıkları ısılar eşittir ancak 100 gram suyun sıcaklık artışı fazladır.' },
      { key: 'D', text: 'Kütlesi büyük olan 200 gram suyun öz ısısı artarak sıcaklık artışını iki kat hızlandırmıştır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Özdeş ısıtıcılarla eşit süre ısıtılan maddelerin aldıkları ısılar (Q) eşittir. Q = m.c.Δt bağıntısına göre kütlesi küçük olanın (100 g) sıcaklık artışı daha fazla olur. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Deney ve Matematiksel Mantık',
    theme: 'Kütle ve Sıcaklık Değişimi'
  },
  {
    id: 8420,
    subTopicId: 'g8-u4-all',
    contextTitle: 'Kimyasal Tepkime Grafiği ve Maddelerin Rolü',
    scenario: 'Kapalı kapta gerçekleşen bir tepkimede K ve L maddelerinin kütleleri zamanla azalırken, M maddesinin kütlesi sıfırdan başlayarak artmıştır.',
    questionPrompt: 'Bu tepkime denklemi ve maddelerle ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Tepkimenin denklemi M -> K + L şeklindedir ve M maddesi parçalanmıştır.' },
      { key: 'B', text: 'K maddesi tepkimenin tek ürünüdür ve kimyasal bağları yeniden kurulmuştur.' },
      { key: 'C', text: 'Tepkimede toplam atom sayısı azalmış ve atom cinsleri tamamen değişmiştir.' },
      { key: 'D', text: 'Tepkime denklemi K + L -> M şeklindedir; K ve L girenler, M ise üründür.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kütlesi azalanlar tepkimeye giren maddelerdir (K ve L). Kütlesi artan ise oluşan üründür (M). Denklem K + L -> M şeklindedir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Grafik ve Denklem Çıkarımı',
    theme: 'Tepkime Grafiği'
  }
];

// =========================================================================
// 5. ÜNİTE: BASİT MAKİNELER (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit5End20Questions: LgsQuestion[] = [
  {
    id: 8501,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Basit Makinelerde İş ve Enerji İlkesi',
    scenario: 'Bir öğrenci basit makineler ünitesinde "Hiçbir basit makine işten veya enerjiden kazanç sağlamaz, sadece iş yapma kolaylığı sağlar" kuralını öğrenmiştir.',
    questionPrompt: 'Bu evrensel kural dikkate alındığında basit makinelerle ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kuvvetten ne oranda kazanç sağlanırsa aynı oranda yoldan kayıp yaşanır.' },
      { key: 'B', text: 'Kuvvet kazancı olan makinelerde yapılan toplam iş daima yarı yarıya azalır.' },
      { key: 'C', text: 'Yoldan kazanç sağlanan makinelerde harcanan toplam enerji miktarı sıfıra iner.' },
      { key: 'D', text: 'Basit makineler enerjiyi yok ederek sürtünme kuvvetini ortadan kaldırır.' }
    ],
    correctAnswer: 'A',
    explanation: 'İş = Kuvvet x Yol. İşten ve enerjiden kazanç olamayacağı için kuvvetten kazanç kaç katsa, yoldan kayıp da aynı kattır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Temel İlke Muhakemesi',
    theme: 'Basit Makineler Genel İlkeleri'
  },
  {
    id: 8502,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Sabit Makara ile Hareketli Makara Karşılaştırması',
    scenario: 'Özdeş 100 N ağırlığındaki yüklerden biri sabit makara ile, diğeri ise ağırlıksız sürtünmesiz hareketli makara ile dengelenmiştir.',
    questionPrompt: 'Bu iki makara sisteminde uygulanan kuvvetler ve ip çekilme miktarları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sabit makarada uygulanan kuvvet 50 N iken hareketli makarada uygulanan kuvvet 100 N’dır.' },
      { key: 'B', text: 'Hareketli makarada 50 N kuvvet uygulanır ancak yükü 1 metre kaldırmak için ip 2 metre çekilmelidir.' },
      { key: 'C', text: 'Her iki makarada da uygulanan kuvvetler eşit olup hareketli makarada yoldan kazanç vardır.' },
      { key: 'D', text: 'Sabit makara kuvvetin yönünü değiştirmezken hareketli makara kuvvetin yönünü değiştirir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Hareketli makarada 2 kat kuvvet kazancı vardır (F = P/2 = 50 N). Ancak yoldan 2 kat kayıp olduğundan yükü 1 m kaldırmak için ip 2 m çekilmelidir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Karşılaştırma ve Sayısal Analiz',
    theme: 'Sabit ve Hareketli Makaralar'
  },
  {
    id: 8503,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Kaldıraç Çeşitleri: El Arabası ve Ceviz Kıracağı',
    scenario: 'El arabası ve ceviz kıracağı incelendiğinde desteğin bir uçta, kuvvetin diğer uçta, yükün ise bu ikisinin arasında yer aldığı görülür.',
    questionPrompt: 'Yükün ortada olduğu bu tip kaldıraçların ortak özelliği aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Kuvvet kolu yük kolundan kısa olduğu için daima kuvvetten kayıp ve yoldan kazanç vardır.' },
      { key: 'B', text: 'Kuvvetin yönünü değiştirerek uygulanan kuvveti her zaman yükün iki katına çıkarırlar.' },
      { key: 'C', text: 'Kuvvet kolu yük kolundan her zaman daha uzun olduğu için kesinlikle kuvvet kazancı vardır.' },
      { key: 'D', text: 'Destek tam ortada olduğu için kuvvet kazancı oranı yükün kütlesine bağlı olarak değişir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Yükün arada olduğu kaldıraçlarda (el arabası, ceviz kıracağı, gazoz açacağı) kuvvet kolu daima yük kolundan büyüktür; bu yüzden KESİNLİKLE kuvvet kazancı vardır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kaldıraç Sınıflandırması',
    theme: 'Yükün Arada Olduğu Kaldıraçlar'
  },
  {
    id: 8504,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Eğik Düzlemde Kuvvet Kazancını Artırma',
    scenario: 'Bir nakliye çalışanı ağır bir sandığı kamyon kasasına çıkarmak için tahta kalas kullanarak bir eğik düzlem rampası kurmuştur.',
    questionPrompt: 'Çalışanın sandığı daha küçük bir kuvvet uygulayarak yukarı çıkarabilmesi için ne yapılmalıdır?',
    options: [
      { key: 'A', text: 'Kalasın uzunluğu sabit tutularak kamyon kasasının yerden yüksekliği iki katına çıkarılmalıdır.' },
      { key: 'B', text: 'Kamyon kasası ile zemin arasına daha kısa bir tahta kalas yerleştirilerek eğim dikleştirilmelidir.' },
      { key: 'C', text: 'Sandığın tekerlekleri sökülerek kalas ile sandık arasındaki sürtünme kuvveti artırılmalıdır.' },
      { key: 'D', text: 'Aynı yükseklikte daha uzun bir tahta kalas kullanılarak rampanın eğim açısı küçültülmelidir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Eğik düzlemde kuvvet kazancı = L / h (Boy / Yükseklik). Kalasın boyu (L) uzatılırsa eğim azalır, kuvvet kazancı artar ve sandık daha küçük kuvvetle çıkarılır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Problem Çözme ve Tasarım',
    theme: 'Eğik Düzlem'
  },
  {
    id: 8505,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Çıkrık Prensibi ve Tornavida',
    scenario: 'Bir vidayı sıkmak için kullanılan tornavidanın kalın sapının yarıçapı R, metal milinin yarıçapı ise r ile gösterilmiştir (R > r).',
    questionPrompt: 'Tornavidanın çalışma prensibi ve kuvvet kazancı ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Tornavida bir çıkrık modeli olup kalın sap yarıçapı R arttıkça kuvvet kazancı artar.' },
      { key: 'B', text: 'Tornavida eğik düzlem modeli olup mil boyu uzadıkça yoldan kazanç oranı artar.' },
      { key: 'C', text: 'Tornavidada kuvvet metal mile uygulanırken yük kalın saptan döndürülür.' },
      { key: 'D', text: 'Kalın sapın yarıçapı ile metal milin yarıçapı birbirine eşitlenirse kuvvet kazancı en yüksek olur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tornavida bir çıkrıktır; kuvvet kalın sapa (R) uygulanır, yük mile (r) iletilir. R/r oranı arttıkça kuvvet kazancı artar. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Mekanizma Eşleştirme',
    theme: 'Çıkrık'
  },
  {
    id: 8506,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Dişli Çarklar ve Kasnaklarda Dönme Yönü',
    scenario: 'Birbirine dıştan temas eden iki dişli çarktan K dişlisinin yarıçapı 2r, L dişlisinin yarıçapı r’dir. K dişlisi saat yönünde 1 tam tur döndürülmüştür.',
    questionPrompt: 'L dişlisinin dönme yönü ve tur sayısı ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'L dişlisi saat yönünde 1 tam tur döner ve dişliler aynı yönde hareket eder.' },
      { key: 'B', text: 'L dişlisi saat yönünün tersine 2 tam tur döner ve yarıçapla ters orantılı tur atar.' },
      { key: 'C', text: 'L dişlisi saat yönünün tersine yarım tur döner çünkü yarıçapı daha küçüktür.' },
      { key: 'D', text: 'L dişlisi saat yönünde 4 tam tur döner ve merkezleri çakışık şekilde ilerler.' }
    ],
    correctAnswer: 'B',
    explanation: 'Dıştan temas eden dişliler zıt yönde döner (saat yönünün tersi). Tur sayısı yarıçapla ters orantılıdır: n1.r1 = n2.r2 -> 1 . 2r = n2 . r -> n2 = 2 tur. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Geometrik Hareket Analizi',
    theme: 'Dişli Çarklar'
  },
  {
    id: 8507,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Palanga Sistemlerinde Kuvvet Hesabı',
    scenario: '120 N ağırlığındaki bir yük, 2 sabit ve 2 hareketli makaradan oluşan bir palanga düzeneğinde dengelenmiştir. İpin ucu yukarı doğru çekilmektedir.',
    questionPrompt: 'Sürtünmeler ve makara ağırlıkları ihmal edildiğinde yükü dengeleyen F kuvveti kaç Newton’dur?',
    options: [
      { key: 'A', text: 'F kuvveti yükün ağırlığına eşit olup tam olarak 120 Newton değerindedir.' },
      { key: 'B', text: 'F kuvveti yükün yarısına eşit olup 60 Newton büyüklüğündedir.' },
      { key: 'C', text: 'İp yukarı çekildiği için yükü taşıyan ip sayısı 5 olup F kuvveti 24 Newton’dur.' },
      { key: 'D', text: 'Palanga sisteminde kuvvet kazancı olmadığı için F kuvveti 240 Newton’dur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Palangada ip yukarı çekiliyorsa yükü taşıyan ip sayısı = Makara sayısı + 1 = 4 + 1 = 5’tir. F = P / 5 = 120 / 5 = 24 N. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Sayısal Hesaplama',
    theme: 'Palangalar'
  },
  {
    id: 8508,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Kuvvetin Ortada Olduğu Kaldıraçlar (Cımbız ve Maşa)',
    scenario: 'Cımbız, maşa, olta ve kürek gibi basit makinelerde destek bir uçta, yük diğer uçta, uygulanan kuvvet ise ortadadır.',
    questionPrompt: 'Bu tip kaldıraçların kullanım amacı ve kazanç durumu ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kuvvet kolu yük kolundan daima büyük olduğu için devasa kuvvet kazancı sağlarlar.' },
      { key: 'B', text: 'Ağır cisimleri insan gücünün yetmediği durumlarda çok küçük kuvvetle kaldırmak için üretilmişlerdir.' },
      { key: 'C', text: 'İşten ve enerjiden yüzde elli oranında tasarruf sağlayarak günlük işleri hızlandırırlar.' },
      { key: 'D', text: 'Kuvvetten kayıp vardır ancak yoldan kazanç ve hassas işleri yapmada kolaylık sağlarlar.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kuvvet ortada olduğunda kuvvet kolu yük kolundan küçüktür (kuvvetten kayıp vardır). Amaç ağır yük taşımak değil, cımbız ve maşadaki gibi hassas işlerde kontrol ve yoldan kazanç sağlamaktır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Kaldıraç İşlevi',
    theme: 'Kuvvetin Arada Olduğu Kaldıraçlar'
  },
  {
    id: 8509,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Bileşik Makine Olarak Bisiklet',
    scenario: 'Bir bisiklet incelendiğinde pedalında çıkrık, fren kollarında kaldıraç, tekerlek göbeğinde dişli çark ve zincir kasnak sistemlerinin bir arada çalıştığı görülür.',
    questionPrompt: 'Bisiklet gibi bileşik makineler ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Birden fazla basit makinenin bir araya gelmesiyle oluşur ve iş yapma kolaylığı sağlar.' },
      { key: 'B', text: 'İçerisinde çok sayıda makine bulunduğu için harcanan enerjiden net kazanç sağlar.' },
      { key: 'C', text: 'Bisikletteki tüm basit makineler istisnasız olarak yalnızca kuvvetten kazanç amacıyla tasarlanmıştır.' },
      { key: 'D', text: 'Pedal çevrildiğinde arka tekerlek dişlisi ters yönde dönerek bisikleti geri sürer.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bisiklet iki veya daha fazla basit makinenin birleştiği bileşik makinedir. İş veya enerjiden kazanç sağlamaz; kuvvet veya yoldan kazanç sağlayarak iş kolaylığı sunar. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Bileşik Sistem Analizi',
    theme: 'Bileşik Makineler'
  },
  {
    id: 8510,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Vida Basit Makinesi ve Vida Adımı',
    scenario: 'Bir tahta bloğa vida tornavida yardımıyla döndürülerek vidalanmaktadır. Vidanın iki dişi arasındaki dikey mesafeye vida adımı (a) denir.',
    questionPrompt: 'Vida ile ilgili aşağıdaki teknik ve fiziksel ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Vida silindir etrafına sarılmış bir kaldıraç modelidir ve yoldan kazanç sağlar.' },
      { key: 'B', text: 'Vida silindir üzerine sarılmış bir eğik düzlemdir ve 1 tam tur döndüğünde tahtada 1 vida adımı ilerler.' },
      { key: 'C', text: 'Vida adımı büyüdükçe vidanın tahtaya saplanması için gereken kuvvet miktarı azalır.' },
      { key: 'D', text: 'Vidanın tahtaya batma derinliği uygulanan tur sayısından tamamen bağımsızdır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vida silindirin etrafına sarılmış eğik düzlemdir. Vida n tur döndürüldüğünde tahtada h = n . a kadar (tur sayısı x vida adımı) ilerler. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Kavram Tanımlama',
    theme: 'Vida'
  },
  {
    id: 8511,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Eşit Kollu Terazi ve Destek Ortada Kaldıraç',
    scenario: 'Pazarcı esnafının kullandığı eşit kollu terazi, desteğin tam ortada olduğu, kuvvet kolu ile yük kolunun birbirine eşit olduğu bir kaldıraç örneğidir.',
    questionPrompt: 'Eşit kollu terazide kuvvet kazancı ve kuvvetin yönü ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kuvvet kolu yük kolundan uzun olduğu için iki kat kuvvet kazancı sağlar.' },
      { key: 'B', text: 'Yoldan kazanç sağladığı için kefelerden biri çekildiğinde diğeri iki kat yukarı fırlar.' },
      { key: 'C', text: 'Kuvvet kazancı veya kaybı yoktur, sadece kuvvetin yönünü değiştirerek kütle ölçümü sağlar.' },
      { key: 'D', text: 'Kuvvetten kayıp yaşandığı için kefeye konulan ağırlık gerçek değerinden az ölçülür.' }
    ],
    correctAnswer: 'C',
    explanation: 'Kuvvet kolu = Yük kolu olduğundan kuvvet kazancı 1’dir (kazanç ya da kayıp yoktur). Bir kefe aşağı inerken diğeri yukarı çıkar (kuvvetin yönü değişir). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kaldıraç Dengesi',
    theme: 'Desteğin Ortada Olduğu Kaldıraçlar'
  },
  {
    id: 8512,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Kasnaklarda Düz ve Çapraz Bağlama',
    scenario: 'İki kasnak birbirine bir kayışla bağlanmıştır. 1. düzenekte kayış düz bağlanırken, 2. düzenekte kayış çapraz (8 şeklinde) bağlanmıştır.',
    questionPrompt: 'Kayışların bağlanma şeklinin kasnakların hareketine etkisi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Düz bağlanan kasnaklar zıt yönde dönerken çapraz bağlananlar aynı yönde döner.' },
      { key: 'B', text: 'Çapraz bağlama yapıldığında kasnakların tur sayıları yarıçaplarından bağımsız hale gelir.' },
      { key: 'C', text: 'Düz bağlama kuvvet kazancı sağlarken çapraz bağlama yoldan kazanç sağlar.' },
      { key: 'D', text: 'Düz bağlanan kasnaklar aynı yönde dönerken çapraz bağlanan kasnaklar zıt yönde döner.' }
    ],
    correctAnswer: 'D',
    explanation: 'Düz kayış bağlantısında her iki kasnak da aynı yönde döner. Çapraz bağlandığında ise kayış ters döndüğü için kasnaklar zıt yönlerde döner. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Hareket ve Yön Analizi',
    theme: 'Kasnaklar'
  },
  {
    id: 8513,
    subTopicId: 'g8-u5-all',
    contextTitle: 'İnşaat Vinçlerinde Palanga ve Makara Kullanımı',
    scenario: 'Büyük gökdelen inşaatlarında kullanılan kule vinçlerinde tonlarca ağırlıktaki beton bloklar elektrik motoruna bağlı palanga ve makara sistemleriyle yukarı kaldırılmaktadır.',
    questionPrompt: 'Kule vincinde palanga kullanılmasının mühendislik gerekçesi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Kuvvetten büyük oranda kazanç sağlayarak devasa ağırlıkların daha küçük motor kuvvetiyle kaldırılmasını sağlamak.' },
      { key: 'B', text: 'İşten ve harcanan elektrik enerjisinden yüzde yüz tasarruf sağlayarak maliyeti sıfırlamak.' },
      { key: 'C', text: 'Yükün kaldırılma hızını ışık hızına yaklaştırarak inşaat süresini kısaltmak.' },
      { key: 'D', text: 'Kuvvet kolunu sıfıra indirerek yoldan devasa kazanç elde etmek.' }
    ],
    correctAnswer: 'A',
    explanation: 'Palangalar kuvvet kazancı sağlar; böylece tonlarca ağırlıktaki yükler motorun zorlanmadan kaldırabileceği küçük kuvvet seviyelerine indirilir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Mühendislik Uygulaması',
    theme: 'Vinç ve Palangalar'
  },
  {
    id: 8514,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Eğik Düzlem Yüksekliği ve Yapılan İş',
    scenario: 'Sürtünmesiz iki farklı eğik düzlemde özdeş 60 N ağırlığındaki P yükü 2 metre yüksekliğe çıkarılmıştır. 1. eğik düzlemin boyu 4 metre, 2. eğik düzlemin boyu 6 metredir.',
    questionPrompt: 'Yapılan işler ile uygulanan kuvvetler arasındaki ilişki hangisidir?',
    options: [
      { key: 'A', text: '2. eğik düzlemde yapılan iş 1. eğik düzlemden fazladır ve uygulanan kuvvet daha büyüktür.' },
      { key: 'B', text: 'Yapılan işler birbirine eşit olup ancak 2. eğik düzlemde boy uzun olduğu için uygulanan kuvvet daha küçüktür.' },
      { key: 'C', text: '1. eğik düzlemde uygulanan kuvvet daha küçük olup yapılan iş yarı yarıya düşmüştür.' },
      { key: 'D', text: 'Eğik düzlemlerin boyları farklı olduğu için her iki düzenekte de işten kazanç sağlanmıştır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Aynı yükseklik (2 m) için yapılan yer çekimine karşı iş W = P.h = 60 x 2 = 120 J olup eşittir (W1=W2). F1 = 120/4 = 30 N, F2 = 120/6 = 20 N olduğundan F2 < F1 olur. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'İş ve Kuvvet Dengesi',
    theme: 'Eğik Düzlemde İş Değişmezliği'
  },
  {
    id: 8515,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Tahtarevalli ve Farklı Kütleli Çocukların Dengesi',
    scenario: 'Kütlesi 40 kg olan Ali ile kütlesi 20 kg olan kardeşi Ayşe bir tahtarevallide dengede durmak istemektedir. Desteğin Ali’ye olan uzaklığı 1 metredir.',
    questionPrompt: 'Tahtarevallinin yatay dengede kalabilmesi için Ayşe’nin desteğe olan uzaklığı kaç metre olmalıdır?',
    options: [
      { key: 'A', text: 'Ayşe kütlesi küçük olduğu için desteğe Ali ile aynı mesafede yani 1 metrede oturmalıdır.' },
      { key: 'B', text: 'Ayşe desteğin hemen yanına oturmalı ve mesafe yarım metreye indirilmelidir.' },
      { key: 'C', text: 'Kuvvet x Kuvvet Kolu = Yük x Yük Kolu kuralına göre Ayşe destekten 2 metre uzağa oturmalıdır.' },
      { key: 'D', text: 'Kütleleri farklı bireyler hiçbir basit makinede denge kuramazlar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Kaldıraç bağıntısı: m1 . d1 = m2 . d2. Ali: 40 kg x 1 m = 40. Ayşe: 20 kg x d2 = 40 -> d2 = 2 metre olmalıdır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Kaldıraç Dengesi Hesabı',
    theme: 'Tahtarevalli ve Denge'
  },
  {
    id: 8516,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Merkezleri Çakışık Dişliler ve Kasnaklar',
    scenario: 'Yarıçapları sırasıyla 3r ve r olan iki dişli çark birbirine perçinlenerek merkezleri çakışık hale getirilmiştir.',
    questionPrompt: 'Büyük dişli saat yönünde 2 tam tur döndürüldüğünde küçük dişlinin hareketi hangisidir?',
    options: [
      { key: 'A', text: 'Küçük dişli saat yönünün tersine doğru 6 tam tur döner.' },
      { key: 'B', text: 'Küçük dişli saat yönünün tersine doğru 2 tam tur döner.' },
      { key: 'C', text: 'Küçük dişli saat yönünde döner ancak yarıçapı küçük olduğu için tur atmaz.' },
      { key: 'D', text: 'Merkezleri çakışık olduğu için küçük dişli de saat yönünde tam 2 tur döner.' }
    ],
    correctAnswer: 'D',
    explanation: 'Merkezleri çakışık (eş merkezli) dişliler ve kasnaklar birbirine perçinli olduğundan hem dönme yönleri hem de tur sayıları DAİMA BİRBİRİNE EŞİTTİR. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Eş Merkezli Sistemler',
    theme: 'Eş Merkezli Dişliler'
  },
  {
    id: 8517,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Günlük Hayatta Basit Makinelerin Amacı',
    scenario: 'Gündelik hayatımızda kullandığımız gazoz açacağı, tırnak makası, merdiven ve kapı kolları basit makine örnekleridir.',
    questionPrompt: 'Tüm basit makineler için ortak olan temel özellik aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'İnsanların günlük yaşamlarında uyguladıkları kuvvetin iş yapma kolaylığı sağlaması.' },
      { key: 'B', text: 'Kullanılan elektrik ve yakıt enerjisini yarı yarıya azaltarak tasarruf sağlaması.' },
      { key: 'C', text: 'İstisnasız her durumda hem kuvvetten hem de yoldan aynı anda kazanç sağlaması.' },
      { key: 'D', text: 'Yalnızca dönme hareketi yaparak cisimlerin kütlesini hafifletmesi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Basit makinelerin en temel ortak özelliği İŞ KOLAYLIĞI SAĞLAMAKTIR. İşten/enerjiden kazanç sağlamazlar, kütleyi değiştirmezler. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Genel Tanım ve İlke',
    theme: 'Basit Makine Ortak Özellikleri'
  },
  {
    id: 8518,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Makas Türleri ve Kuvvet Kazancı Değişimi',
    scenario: 'Kumaş kesen terzi makasının bıçak boyu uzun sapı kısa iken, kalın demir kesen demirci makasının sapı çok uzun ağız kısmı ise çok kısadır.',
    questionPrompt: 'Demirci makasında sapın çok uzun, ağız kısmının kısa tasarlanmasının mühendislik sebebi nedir?',
    options: [
      { key: 'A', text: 'Yoldan büyük oranda kazanç sağlayarak demirin tek hamlede hızlıca kesilmesini sağlamak.' },
      { key: 'B', text: 'Kuvvet kolunu uzatıp yük kolunu kısaltarak kuvvet kazancını en üst seviyeye çıkarmak.' },
      { key: 'C', text: 'Makasın ağırlığını artırarak yer çekiminin demiri kendiliğinden ezmesini sağlamak.' },
      { key: 'D', text: 'Demirin kesilirken açığa çıkaracağı sürtünme ısısını tamamen soğurmak.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kuvvet Kazancı = Kuvvet Kolu / Yük Kolu. Sap (kuvvet kolu) uzatılıp bıçak (yük kolu) kısaltıldığında kuvvet kazancı devasa boyuta ulaşır ve sert demir az kuvvetle kesilir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Kaldıraç Tasarımı',
    theme: 'Makas ve Kuvvet Kolu'
  },
  {
    id: 8519,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Kuyu Çıkrığında Kol Uzunluğunun Etkisi',
    scenario: 'Köydeki kuyudan su çeken Ahmet Bey, çıkrığın çevirme kolunu daha uzun bir kol ile değiştirmiştir.',
    questionPrompt: 'Çıkrık kolunun uzatılması sonucunda su kovasını çekerken yaşanan değişim hangisidir?',
    options: [
      { key: 'A', text: 'Su kovasını kaldırmak için uygulanması gereken F kuvveti ilk duruma göre artar.' },
      { key: 'B', text: 'Kovanın kuyudan çıkarken yaptığı toplam iş miktarı ilk duruma göre yarıya iner.' },
      { key: 'C', text: 'Kuvvet kolu büyüdüğü için kuvvet kazancı artar ve kova daha küçük bir kuvvetle çekilir.' },
      { key: 'D', text: 'Kovadaki suyun kütlesi azalarak kuyu silindirinin dönme hızı sıfırlanır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çıkrıkta Kuvvet Kazancı = R / r (Kol Yarıçapı / Silindir Yarıçapı). Çevirme kolu (R) uzatıldığında kuvvet kazancı artar; kova daha küçük kuvvetle yukarı çekilir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Çıkrık Değişken Analizi',
    theme: 'Kuyu Çıkrığı'
  },
  {
    id: 8520,
    subTopicId: 'g8-u5-all',
    contextTitle: 'Ağır Bir Yükü Kaldırırken Yoldan Kayıp',
    scenario: 'Bir işçi hareketli makara sistemi kurarak 400 N ağırlığındaki bir kasayı 200 N kuvvet uygulayarak 3 metre yüksekliğe çıkarmıştır.',
    questionPrompt: 'İşçinin çektiği ip uzunluğu ve harcanan enerji ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'İşçi ipi 1,5 metre çekmiştir ve işten yüzde elli oranında kazanç elde etmiştir.' },
      { key: 'B', text: 'İşçi ipi 3 metre çekmiştir ve sürtünme olmadığı için kuvvetten kayıp yaşamıştır.' },
      { key: 'C', text: 'İşçi ipi 12 metre çekmiştir ve uyguladığı kuvvet yükün iki katı büyüklüğündedir.' },
      { key: 'D', text: 'Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır ve ip tam 6 metre çekilmiştir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Hareketli makarada 2 kat kuvvet kazancı vardır (F = 400/2 = 200 N). Kuvvetten 2 kat kazanç varsa yoldan 2 kat kayıp vardır; yük 3 m yükselmesi için ip 3 x 2 = 6 m çekilmelidir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'İlke ve Sayısal Muhakeme',
    theme: 'Kuvvet Kazancı ve Yoldan Kayıp'
  }
];

// =========================================================================
// 6. ÜNİTE: ENERJİ DÖNÜŞÜMLERİ VE ÇEVRE BİLİMİ (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit6End20Questions: LgsQuestion[] = [
  {
    id: 8601,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Besin Zincirinde Canlıların Rolü',
    scenario: 'Bir göl ekosistemindeki besin zinciri şu şekildedir: Su yosunu -> Su piresi -> Gümüş balığı -> Turna balığı -> Balıkçıl kuş.',
    questionPrompt: 'Bu besin zincirindeki üretici canlı ve besin ağındaki enerji kaynağı hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Üretici canlı su yosunudur ve besin zincirinin temel enerji kaynağı Güneş ışığıdır.' },
      { key: 'B', text: 'Üretici canlı turna balığıdır ve besin zincirindeki enerji balıkçıl kuştan başlar.' },
      { key: 'C', text: 'Üretici canlı su piresidir ve enerjiyi sudaki çözünmüş tuzlardan doğrudan üretir.' },
      { key: 'D', text: 'Tüm canlılar üreticidir ve Güneş enerjisine hiçbir basamakta ihtiyaç duyulmaz.' }
    ],
    correctAnswer: 'A',
    explanation: 'Besin zincirlerinin ilk basamağında fotosentez yapan üreticiler (su yosunu, bitki, fitoplankton) yer alır ve tüm zincirin nihai enerji kaynağı Güneş’tir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavramsal Eşleştirme',
    theme: 'Besin Zinciri'
  },
  {
    id: 8602,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Ekoloji Piramidinde Biyolojik Birikim',
    scenario: 'Tarımda kullanılan zehirli bir böcek ilacı (DDT) toprak ve sulara karışarak bir besin zincirindeki canlıların dokularında birikmiştir: Ot -> Çekirge -> Kurbağa -> Yılan -> Kartal.',
    questionPrompt: 'Dokularında biriken zehirli madde miktarı (biyolojik birikim) en fazla olan canlı hangisidir?',
    options: [
      { key: 'A', text: 'Zehirli madde doğrudan üretici ota bulaştığı için en yüksek birikim ot bitkisindedir.' },
      { key: 'B', text: 'Besin zincirinin en üst basamağında yer alan kartalın vücudundaki biyolojik birikim en fazladır.' },
      { key: 'C', text: 'Çekirge birinci tüketici olduğu için dokularındaki kimyasal birikim en yüksek düzeydedir.' },
      { key: 'D', text: 'Zehirli kimyasallar besin piramidinde yukarı çıkıldıkça parçalanarak tamamen yok olur.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ekoloji piramidinde üreticiden son tüketiciye doğru gidildikçe canlı vücudunda biriken zehirli madde miktarı (biyolojik birikim) katlanarak artar. En üstteki kartalda en fazladır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Piramit Kuralı',
    theme: 'Biyolojik Birikim'
  },
  {
    id: 8603,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Fotosentezde Işığın Rengi ve Hız Grafiği',
    scenario: 'Özdeş üç saksı bitkisinden 1. bitkiye mor ışık, 2. bitkiye yeşil ışık, 3. bitkiye ise kırmızı ışık gönderilerek diğer tüm şartlar (sıcaklık, su, CO2) eşit tutulmuştur.',
    questionPrompt: 'Bitkilerin fotosentez hızları arasındaki ilişki hangisinde doğru olarak verilmiştir?',
    options: [
      { key: 'A', text: 'Klorofil yeşil renkli olduğu için yeşil ışıkta fotosentez hızı en yüksek seviyededir.' },
      { key: 'B', text: 'Her üç bitkinin fotosentez hızları ışığın dalga boyundan bağımsız olarak birbirine eşittir.' },
      { key: 'C', text: 'Fotosentez hızı mor ve kırmızı ışıkta en hızlı, yeşil ışıkta ise en yavaştır.' },
      { key: 'D', text: 'Bitkiler yalnızca mor ışık altında besin üretebilir, kırmızı ve yeşil ışıkta solunum durur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Klorofil yeşil ışığı yansıttığı için yeşil ışıkta fotosentez en yavaştır; mor ve kırmızı ışığı çok iyi soğurduğu için fotosentez hızı bu renklerde en yüksektir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Grafik ve Deney Analizi',
    theme: 'Fotosentez ve Işığın Rengi'
  },
  {
    id: 8604,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Elodea Su Bitkisi ile Fotosentez Deneyi',
    scenario: 'Işıklı ortamda su dolu bir deney tüpünün içine konulan Elodea su bitkisinin yapraklarından düzenli olarak küçük gaz kabarcıklarının çıktığı ve tüpün üst kısmında gaz biriktiği görülmüştür.',
    questionPrompt: 'Bitkinin yapraklarından çıkan ve tüpte biriken bu gaz aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Bitkinin oksijenli solunum yapması sonucu açığa çıkardığı karbondioksit gazıdır.' },
      { key: 'B', text: 'Suyun buharlaşması sonucu tüpün üst kısmında yoğunlaşan saf su buharıdır.' },
      { key: 'C', text: 'Atmosferdeki azot gazının bitki kökleri tarafından parçalanmasıyla oluşan azot monoksittir.' },
      { key: 'D', text: 'Bitkinin fotosentez yapması sonucunda ürettiği ve suya saldığı oksijen gazıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Fotosentez denklemi: CO2 + H2O + Işık -> Besin (Glikoz) + Oksijen. Işık altında su bitkisinin çıkardığı gaz kabarcıkları OKSİJEN (O2) gazıdır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Deney Çıkarımı',
    theme: 'Fotosentezde Oksijen Üretimi'
  },
  {
    id: 8605,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Maya Mantarları ile Fermantasyon Deneyi',
    scenario: 'Ilık şekerli su bulunan bir erlenmayer içine ekmek mayası (bira mayası) eklenmiş ve erlenmayerin ağzına sönük bir balon geçirilmiştir. Bir süre sonra balonun şiştiği ve kabın hafifçe ısındığı gözlemlenmiştir.',
    questionPrompt: 'Balonun şişmesine neden olan gaz ve gerçekleşen biyolojik süreç hangisidir?',
    options: [
      { key: 'A', text: 'Etil alkol fermantasyonu gerçekleşmiştir ve açığa çıkan karbondioksit gazı balonu şişirmiştir.' },
      { key: 'B', text: 'Laktik asit fermantasyonu gerçekleşmiştir ve açığa çıkan oksijen gazı balonu şişirmiştir.' },
      { key: 'C', text: 'Maya mantarları fotosentez yaparak ortama bol miktarda hidrojen gazı salmıştır.' },
      { key: 'D', text: 'Şekerli suyun kaynaması sonucu oluşan yoğun su buharı balonu mekanik olarak şişirmiştir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bira mayası etil alkol fermantasyonu yapar: Glikoz -> Etil Alkol + CO2 + 2 ATP. Açığa çıkan karbondioksit (CO2) gazı balonu şişirir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Deney ve Denklem',
    theme: 'Fermantasyon'
  },
  {
    id: 8606,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Fotosentez ile Oksijenli Solunum Arasındaki Denge',
    scenario: 'Işıklı bir cam fanusun içerisine bir saksı bitkisi ve bir canlı fare birlikte konulmuş, fanusun kapağı hava almayacak şekilde kapatılmıştır.',
    questionPrompt: 'Bu kapalı ekosistemde farenin ve bitkinin uzun süre yaşayabilmesinin temel sebebi nedir?',
    options: [
      { key: 'A', text: 'Farenin fotosentez yaparak bitkinin ihtiyaç duyduğu organik besinleri üretmesi.' },
      { key: 'B', text: 'Bitkinin ürettiği oksijeni farenin, farenin solunumla ürettiği karbondioksiti bitkinin kullanması.' },
      { key: 'C', text: 'Fanus içerisindeki havanın fermantasyon bakterileri tarafından tamamen sterilize edilmesi.' },
      { key: 'D', text: 'Bitkinin gece ve gündüz sadece fotosentez yapıp oksijene hiçbir zaman ihtiyaç duymaması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Fotosentez ve solunum birbirini tamamlayan döngüsel süreçlerdir. Bitki O2 üretir fare solur; fare CO2 üretir bitki fotosentezde kullanır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Ekolojik Döngü Analizi',
    theme: 'Fotosentez ve Solunum İlişkisi'
  },
  {
    id: 8607,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Azot Döngüsünde Bakterilerin ve Şimşeğin Rolü',
    scenario: 'Atmosferin yüzde 78’ini oluşturan serbest azot gazı havadayken bitkiler ve hayvanlar tarafından doğrudan kullanılamaz.',
    questionPrompt: 'Havadaki serbest azotun toprağa bağlanarak canlıların yapısına katılmasını sağlayan etkenler hangileridir?',
    options: [
      { key: 'A', text: 'Güneş ışınlarının şiddeti ve rüzgârların oluşturduğu yüksek sürtünme kuvveti.' },
      { key: 'B', text: 'Fosil yakıtların kontrolsüz yanması ve fabrikalardan çıkan kükürt gazları.' },
      { key: 'C', text: 'Yıldırım ve şimşek olayları ile baklagillerin köklerindeki azot bağlayıcı bakteriler.' },
      { key: 'D', text: 'Topraktaki ayrıştırıcı mantarların fotosentez yaparak azotu oksijene dönüştürmesi.' }
    ],
    correctAnswer: 'C',
    explanation: 'Atmosferdeki azot yıldırım/şimşek ile toprağa geçer ve baklagil (fasulye, nohut) köklerindeki azot bağlayıcı bakteriler tarafından nitrat tuzlarına çevrilir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Döngü Mekanizması',
    theme: 'Azot Döngüsü'
  },
  {
    id: 8608,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Ekolojik Ayak İzi ve Sürdürülebilirlik',
    scenario: 'Ekolojik ayak izi, insanların tüketim alışkanlıkları ve atıklarının doğa tarafından bertaraf edilmesi için gereken toplam verimli toprak ve su alanını ifade eder.',
    questionPrompt: 'Bir bireyin ekolojik ayak izini küçültmesi için aşağıdaki davranışlardan hangisi uygun bir adım değildir?',
    options: [
      { key: 'A', text: 'Kısa mesafelerde motorlu araç yerine yürümeyi veya bisiklet kullanmayı tercih etmek.' },
      { key: 'B', text: 'Evdeki atık kâğıt, cam, plastik ve pilleri geri dönüşüm kutularına ayrı ayrı atmak.' },
      { key: 'C', text: 'Gereksiz su ve elektrik israfından kaçınarak enerji tasarruflu cihazlar kullanmak.' },
      { key: 'D', text: 'Tek kullanımlık plastik tabak, bardak ve ambalaj ürünlerinin tüketimini iki katına çıkarmak.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tek kullanımlık plastik tüketimini artırmak çevre kirliliğini ve karbon salımını katlar; bu ekolojik ayak izini büyütür, küçültmez. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Çevre Bilinci',
    theme: 'Ekolojik Ayak İzi'
  },
  {
    id: 8609,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Kireç Suyunun Karbondioksit ile Bulanması Deneyi',
    scenario: 'Çimlenmekte olan fasulye tohumlarının bulunduğu kapalı bir kaba boru ile berrak kireç suyu bağlanmıştır. Birkaç saat sonra kireç suyunun bulanarak beyaz bir çökelti oluşturduğu görülmüştür.',
    questionPrompt: 'Kireç suyunun bulanması çimlenen tohumlarla ilgili neyi kesin olarak kanıtlar?',
    options: [
      { key: 'A', text: 'Çimlenen tohumların hücresel solunum yaparak ortama karbondioksit gazı verdiğini.' },
      { key: 'B', text: 'Tohumların ışıksız ortamda fotosentez yaparak bol miktarda oksijen gazı ürettiğini.' },
      { key: 'C', text: 'Tohumların yapısındaki klorofil pigmentinin kireç suyundaki kalsiyumu emdiğini.' },
      { key: 'D', text: 'Kireç suyunun tohumları beslemek amacıyla fotosentez reaksiyonu başlattığını.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kireç suyu CO2 ayracıdır ve CO2 varlığında bulanır. Çimlenen tohum klorofilsizdir, fotosentez yapamaz; sadece oksijenli solunum yapar ve açığa çıkan CO2 kireç suyunu bulandırır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Deney Ayraç Analizi',
    theme: 'Solunum Kanıtı'
  },
  {
    id: 8610,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Ekoloji Piramidinde Enerji Aktarımı (%10 Kuralı)',
    scenario: 'Bir ekoloji piramidinde üreticilerin ürettiği toplam enerji miktarı 10.000 kcal olarak ölçülmüştür.',
    questionPrompt: 'Yüzde 10 kuralına göre 3. tüketici basamağındaki yırtıcı hayvana aktarılan enerji kaç kcal’dir?',
    options: [
      { key: 'A', text: 'Her basamağa eşit enerji aktarıldığı için 3. tüketiciye tam 10.000 kcal enerji geçer.' },
      { key: 'B', text: 'Enerjinin yüzde 90’ı her basamakta kaybolduğu için 3. tüketiciye yalnızca 10 kcal enerji aktarılır.' },
      { key: 'C', text: 'Piramitte yukarı çıkıldıkça enerji yoğunlaştığı için 3. tüketiciye 100.000 kcal ulaşır.' },
      { key: 'D', text: 'Üreticilerden doğrudan 3. tüketiciye aktarılan enerji miktarı daima 1.000 kcal düzeyindedir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Üretici: 10.000 kcal -> 1. Tüketici: 1.000 kcal -> 2. Tüketici: 100 kcal -> 3. Tüketici: 10 kcal (%10 kuralı). Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Sayısal Piramit Kuralı',
    theme: 'Enerji Akışı'
  },
  {
    id: 8611,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Laktik Asit Fermantasyonu ve Kas Yorgunluğu',
    scenario: 'Yoğun tempoda koşan bir atletin bacak kaslarında bir süre sonra şiddetli ağrı, kramp ve yorgunluk hissi ortaya çıkmıştır.',
    questionPrompt: 'Kas hücrelerinde yorgunluk ve ağrıya yol açan biyokimyasal süreç hangisidir?',
    options: [
      { key: 'A', text: 'Kas hücrelerinin oksijen fazlalığı nedeniyle hücresel solunumu tamamen durdurması.' },
      { key: 'B', text: 'Kaslarda kloroplast organelinin devreye girerek şeker üretmeye başlaması.' },
      { key: 'C', text: 'Yetersiz oksijen durumunda kas hücrelerinin laktik asit fermantasyonu yaparak laktik asit biriktirmesi.' },
      { key: 'D', text: 'Etil alkol fermantasyonu sonucu kasta biriken alkolün sinirleri uyuşturması.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çizgili kaslar oksijen yetersizliğinde laktik asit fermantasyonu yapar. Biriken laktik asit yorgunluk hissi ve kramplara yol açar. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Biyolojik Süreç',
    theme: 'Laktik Asit Fermantasyonu'
  },
  {
    id: 8612,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Ozon Tabakasının İncelmesi ve CFC Gazları',
    scenario: 'Stratosfer tabakasında bulunan ozon tabakası, Güneş’ten gelen zararlı ultraviyole (UV) ışınlarını soğurarak canlıları koruyan doğal bir kalkan görevi görür.',
    questionPrompt: 'Ozon tabakasının incelmesine neden olan kimyasal maddeler ve sonuçları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Su buharının artması ozon gazını çoğaltarak bitkilerin fotosentezini engeller.' },
      { key: 'B', text: 'Ozon tabakası delindiğinde yeryüzündeki yer çekimi kuvveti önemli ölçüde azalır.' },
      { key: 'C', text: 'Ozon tabakasının incelmesi yalnızca kutup bölgesindeki balık türlerini etkileyen yerel bir sorundur.' },
      { key: 'D', text: 'Kloroflorokarbon gazları ozon moleküllerini parçalayarak cilt kanseri ve katarakt riskini artırır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Klima ve spreylerdeki kloroflorokarbon gazları ozon tabakasını inceltir; zararlı ultraviyole ışınları yeryüzüne ulaşarak cilt kanseri ve katarakt riskini artırır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Çevre Sorunları',
    theme: 'Ozon Tabakası'
  },
  {
    id: 8613,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Fotosentez Hızına Karbondioksit Miktarının Etkisi',
    scenario: 'Ortamdaki karbondioksit miktarı sıfırdan başlanarak sürekli artırılmış ve bitkinin fotosentez hızı ölçülerek grafiğe dökülmüştür.',
    questionPrompt: 'Karbondioksit miktarının fotosentez hızına etkisi grafiği hangisinde doğru özetlenmiştir?',
    options: [
      { key: 'A', text: 'Fotosentez hızı belirli bir değere kadar artar, diğer faktörler sınırlayıcı olduğu için sonra sabit kalır.' },
      { key: 'B', text: 'Karbondioksit arttıkça fotosentez hızı hiçbir sınır tanımadan sürekli ve sonsuza kadar artar.' },
      { key: 'C', text: 'Karbondioksit miktarındaki artış bitkinin kloroplastlarını zehirleyerek fotosentezi anında durdurur.' },
      { key: 'D', text: 'Fotosentez hızı karbondioksit miktarı ile ters orantılı olup gaz arttıkça hız sıfıra yaklaşır.' }
    ],
    correctAnswer: 'A',
    explanation: 'CO2 arttıkça fotosentez hızı belirli bir noktaya kadar artar; ardından ışık, sıcaklık veya su gibi diğer etkenler sınırlayıcı olduğu için sabit kalır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Grafik Analizi',
    theme: 'Fotosentez Hızına Etki Eden Faktörler'
  },
  {
    id: 8614,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Sürdürülebilir Kalkınma İlkeleri',
    scenario: 'Sürdürülebilir kalkınma, bugünün ihtiyaçlarını karşılarken gelecek nesillerin yaşam haklarını ve doğal kaynaklarını tüketmeden kalkınmayı hedefler.',
    questionPrompt: 'Aşağıdaki uygulamalardan hangisi sürdürülebilir kalkınma felsefesine tam uyum gösterir?',
    options: [
      { key: 'A', text: 'Ormanlık alanların hızla kesilerek devasa termik santrallere dönüştürülmesi.' },
      { key: 'B', text: 'Sanayi atıklarının arıtılmadan doğrudan denizlere ve temiz akarsulara akıtılması.' },
      { key: 'C', text: 'Yer altı su kaynaklarının tarımda aşırı ve vahşi sulama ile tamamen tüketilmesi.' },
      { key: 'D', text: 'Güneş ve rüzgâr gibi yenilenebilir enerji kaynaklarına yatırım yapılması ve geri dönüşümün yaygınlaşması.' }
    ],
    correctAnswer: 'D',
    explanation: 'Yenilenebilir enerji kullanmak, geri dönüşüm yapmak ve kaynakları tasarruflu tüketmek sürdürülebilir kalkınmanın temel taşıdır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Çevre Etiği',
    theme: 'Sürdürülebilir Kalkınma'
  },
  {
    id: 8615,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Fotosentez Yapan Canlı Türleri',
    scenario: 'Fen bilimleri dersinde öğretmen öğrencilerden fotosentez yaparak kendi besinini üretebilen canlılara örnekler vermelerini istemiştir.',
    questionPrompt: 'Aşağıda verilen canlılardan hangisi fotosentez yapma yeteneğine kesinlikle sahip değildir?',
    options: [
      { key: 'A', text: 'Hücrelerinde klorofil pigmenti bulunduran yeşil su yosunları ve algler.' },
      { key: 'B', text: 'Kloroplast organeline sahip olmayan, ayrıştırıcı beslenen şapkalı mantarlar ve küf mantarları.' },
      { key: 'C', text: 'Tek hücreli kamçılı bir mikroskobik canlı olan ve kloroplast taşıyan öglena.' },
      { key: 'D', text: 'Klorofilli yaprak hücreleriyle güneş ışığını soğuran kara yosunları ve eğrelti otları.' }
    ],
    correctAnswer: 'B',
    explanation: 'Mantarlar (şapkalı mantar, küf, maya) kloroplast ve klorofil taşımazlar; fotosentez yapamazlar, heterotrof (ayrıştırıcı/tüketici) beslenirler. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Sınıflandırma ve Ayırt Etme',
    theme: 'Fotosentez Yapan Canlılar'
  },
  {
    id: 8616,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Oksijenli Solunum Denklemi ve ATP Üretimi',
    scenario: 'Hücrelerimizin enerji santrali olan mitokondri organelinde glikoz besin molekülü oksijen yardımıyla parçalanır.',
    questionPrompt: 'Oksijenli solunum tepkimesi sonucunda açığa çıkan ürünler hangisinde eksiksiz belirtilmiştir?',
    options: [
      { key: 'A', text: 'Yalnızca laktik asit ve iki molekül adenosin trifosfat enerjisi açığa çıkar.' },
      { key: 'B', text: 'Glikoz parçalanırken etil alkol ve yoğun hidrojen gazı ortama salınır.' },
      { key: 'C', text: 'Karbondioksit, su ve yaşamsal faaliyetlerde kullanılan yüksek miktarda ATP enerjisi.' },
      { key: 'D', text: 'Oksijen molekülleri birleşerek ozon tabakası ve saf glikoz kristalleri üretir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Oksijenli solunum: C6H12O6 + 6O2 -> 6CO2 + 6H2O + 30-32 ATP (Enerji). Ürünler karbondioksit, su ve enerjidir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Denklem Bilgisi',
    theme: 'Oksijenli Solunum'
  },
  {
    id: 8617,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Besin Ağında Bir Canlının Yok Olmasının Etkisi',
    scenario: 'Bir orman ekosistemindeki besin zincirinde yer alan kurbağaların aşırı avlanma ve hastalık nedeniyle nesli tükenme noktasına gelmiştir. Zincir: Bitki -> Çekirge -> Kurbağa -> Yılan -> Kartal.',
    questionPrompt: 'Kurbağa sayısının ani azalması ekosistemdeki diğer canlıları nasıl etkiler?',
    options: [
      { key: 'A', text: 'Çekirge popülasyonu aşırı artarken, kurbağa ile beslenen yılanların sayısı azalır.' },
      { key: 'B', text: 'Bitkilerin sayısı hızla artar çünkü çekirgeler beslenmeyi tamamen durdurur.' },
      { key: 'C', text: 'Kartallar besin bulamadığı için doğrudan bitkilerle beslenmeye başlar.' },
      { key: 'D', text: 'Ekosistemdeki hiçbir canlı bu değişimden etkilenmez ve denge aynen korunur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kurbağa azalırsa onun avladığı çekirgeler artar (otları tüketirler). Kurbağayla beslenen yılanlar besinsiz kalıp azalır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Besin Ağı Dinamiği',
    theme: 'Besin Ağı Etkileşimi'
  },
  {
    id: 8618,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Su Döngüsünde Buharlaşma ve Terleme',
    scenario: 'Güneş enerjisi etkisiyle okyanus, göl ve nehirlerdeki sular buharlaşırken, bitkiler ve hayvanlar da terleme ve solunumla atmosfere su buharı kazandırır.',
    questionPrompt: 'Atmosferdeki su buharının tekrar yeryüzüne sıvı veya katı olarak dönmesini sağlayan temel fiziksel olay nedir?',
    options: [
      { key: 'A', text: 'Güneş ışınlarının kütleçekim kuvveti oluşturarak suyu yere doğru çekmesi.' },
      { key: 'B', text: 'Soğuk hava tabakasıyla karşılaşan su buharının yoğuşarak yağışlara dönüşmesi.' },
      { key: 'C', text: 'Havadaki su buharının azot gazı ile birleşerek kimyasal çökelti oluşturması.' },
      { key: 'D', text: 'Ozon tabakasının ısınarak gökyüzündeki tüm su moleküllerini dondurması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Su döngüsünde yeryüzünden yükselen su buharı soğuk hava katmanında yoğuşur ve yağmur, kar, dolu olarak tekrar yeryüzüne döner. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Madde Döngüsü Mekanizması',
    theme: 'Su Döngüsü'
  },
  {
    id: 8619,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Sıcaklığın Fotosentez Hızına Etkisi',
    scenario: 'Bir serada sıcaklık kademeli olarak -5 dereceden 60 dereceye kadar yükseltilmiş ve bitkinin fotosentez hızı kaydedilmiştir.',
    questionPrompt: 'Fotosentez hızının sıcaklığa bağlı değişim grafiği hakkında aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sıcaklık 60 dereceye ulaştığında fotosentez hızı en yüksek tepe noktasına ulaşır.' },
      { key: 'B', text: 'Sıcaklık arttıkça bitkinin enzimleri güçlenir ve fotosentez durmaksızın katlanır.' },
      { key: 'C', text: 'Optimum sıcaklık 25-35 derece arasıdır; 0 derecenin altında ve 55 derecenin üstünde enzimler bozulur ve hız sıfırlanır.' },
      { key: 'D', text: 'Fotosentez hızı sıcaklıktan hiç etkilenmez; yalnızca topraktaki su miktarına bağlıdır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Fotosentez enzimatiktir. Enzimler 25-35 °C arasında en iyi çalışır; 55 °C üstünde protein yapıları kalıcı olarak bozulur (denatürasyon) ve fotosentez durur. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Enzim ve Sıcaklık Eğrisi',
    theme: 'Sıcaklık ve Fotosentez'
  },
  {
    id: 8620,
    subTopicId: 'g8-u6-all',
    contextTitle: 'Ayrıştırıcıların (Saprofitlerin) Ekosistemdeki Vazgeçilmez Önemi',
    scenario: 'Ekosistemde ölen bitki ve hayvan kalıntıları ile organik atıklar ayrıştırıcı canlılar (çürükçül mantarlar ve bakteriler) tarafından parçalanır.',
    questionPrompt: 'Ayrıştırıcı canlıların besin piramidindeki yeri ve madde döngülerindeki kritik görevi nedir?',
    options: [
      { key: 'A', text: 'Yalnızca üreticiler basamağında yer alıp güneş ışığından vitamin üretirler.' },
      { key: 'B', text: 'Sadece etçil hayvanları avlayarak biyolojik çeşitliliğin artmasını sağlarlar.' },
      { key: 'C', text: 'Atmosferdeki oksijen gazını tüketip yerine kükürt dioksit gazı üretirler.' },
      { key: 'D', text: 'Piramidin her basamağında bulunurlar ve organik atıkları inorganik maddelere çevirerek toprağı zenginleştirirler.' }
    ],
    correctAnswer: 'D',
    explanation: 'Ayrıştırıcılar besin piramidinin her basamağında yer alır. Organik atıkları inorganik maddelere (tuz, mineral) dönüştürerek üreticilerin yeniden kullanmasını sağlarlar. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Ekolojik Rol Analizi',
    theme: 'Ayrıştırıcılar'
  }
];

// =========================================================================
// 7. ÜNİTE: ELEKTRİK YÜKLERİ VE ELEKTRİK ENERJİSİ (20 LGS SORULUK DENEME SINAVI)
// =========================================================================
export const grade8Unit7End20Questions: LgsQuestion[] = [
  {
    id: 8701,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Sürtünme ile Elektriklenme Deneyi',
    scenario: 'Fen laboratuvarında cam çubuk ipek kumaşa, ebonit plastik çubuk ise yün kumaşa sürtülmüştür.',
    questionPrompt: 'Sürtünme sonucunda çubukların ve kumaşların kazandıkları elektrik yükleri hangisinde doğrudur?',
    options: [
      { key: 'A', text: 'Cam çubuk pozitif yüklenirken ipek kumaş negatif, ebonit çubuk negatif yüklenirken yün kumaş pozitif yüklenir.' },
      { key: 'B', text: 'Cam çubuk negatif yüklenirken ipek kumaş pozitif, ebonit çubuk pozitif yüklenirken yün kumaş negatif yüklenir.' },
      { key: 'C', text: 'Her iki çubuk da pozitif yüklenirken kumaşların tamamı nötr kalmaya devam eder.' },
      { key: 'D', text: 'Ebonit çubuk proton kaybederek negatif yüklenir, cam çubuk ise proton kazanarak pozitif olur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Cam çubuk ipek kumaşa elektron vererek (+) yüklenir, ipek (-) olur. Ebonit çubuk yün kumaştan elektron alarak (-) yüklenir, yün (+) olur. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Kavramsal Kural',
    theme: 'Sürtünme ile Elektriklenme'
  },
  {
    id: 8702,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektrik Yüklü İletken Kürelerin Birbirine Dokundurulması',
    scenario: 'Yarıçapları eşit iletken X ve Y kürelerinden X küresi +6q, Y küresi ise -2q yüklüdür. Küreler birbirine dokundurulup ayrılmıştır.',
    questionPrompt: 'Dokundurulup ayrıldıktan sonra kürelerin son elektrik yükleri aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'X küresi +4q yüklenirken Y küresi tamamen nötr hale gelir.' },
      { key: 'B', text: 'Toplam yük +4q olup özdeş küreler eşit paylaşır; her ikisi de +2q yüklenir.' },
      { key: 'C', text: 'X küresi -2q yüklenirken Y küresi +6q yüklenerek yükleri takas ederler.' },
      { key: 'D', text: 'Küreler arasındaki yük alışverişi sonucu her iki küre de negatif yüklenir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Dokunma ile elektriklenmede toplam yük kapasitelerine (yarıçaplarına) göre paylaşılır. Toplam yük = (+6q) + (-2q) = +4q. Özdeş oldukları için (+4q) / 2 = +2q her ikisine dağılır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Nicel Yük Korunumu',
    theme: 'Dokunma ile Elektriklenme'
  },
  {
    id: 8703,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Nötr Cisme Yüklü Çubuk Yaklaştırılması (Etki ile Elektriklenme)',
    scenario: 'Nötr ve iletken bir metal küreye negatif yüklü ebonit bir çubuk temas ettirilmeden yaklaştırılmıştır.',
    questionPrompt: 'Metal küre üzerindeki yük dağılımı ve gerçekleşen kutuplanma ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Pozitif yükler hareket ederek çubuğa yakın uca toplanır, negatifler arkaya kaçar.' },
      { key: 'B', text: 'Ebonit çubuktaki negatif elektronlar metal küreye atlayarak küreyi tamamen negatif yapar.' },
      { key: 'C', text: 'Negatif yükler itilerek çubuğa uzak tarafa kaçar, çubuğa yakın tarafta pozitif yük fazlalığı oluşur.' },
      { key: 'D', text: 'Metal küre anında nötr özelliğini kaybederek kalıcı olarak pozitif mıknatıslanır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Protonlar (+) hareket etmez, sadece elektronlar (-) hareket eder. Negatif çubuk elektronları en uzak noktaya iter; yakın tarafta (+) yük fazlalığı kalır (kutuplanma). Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Tanecik Hareketi Analizi',
    theme: 'Etki ile Elektriklenme'
  },
  {
    id: 8704,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Topraklama Olayı ve Yük Akışı',
    scenario: 'Pozitif (+) elektrik yüklü iletken bir küre, iletken bir telle toprağa bağlanmıştır.',
    questionPrompt: 'Topraklama sırasında gerçekleşen yük akışı ve kürenin son durumu ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Küre üzerindeki pozitif yükler iletken tel üzerinden toprağa akarak nötrlenir.' },
      { key: 'B', text: 'Topraktan küreye gelen pozitif yükler küreyi iki kat daha fazla pozitif yapar.' },
      { key: 'C', text: 'İletken teldeki hava basıncı küre içindeki yükleri tamamen uzay boşluğuna fırlatır.' },
      { key: 'D', text: 'Topraktan küreye negatif elektronlar akar ve küre üzerindeki yük fazlalığı dengelenerek nötr olur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Pozitif yükler (çekirdekteki protonlar) hareket edemez. Topraklamada cisim (+) yüklü ise topraktan cisme elektron (-) gelir ve cisim nötrlenir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'İlke ve Tanecik Fiziği',
    theme: 'Topraklama'
  },
  {
    id: 8705,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektroskobun Yaprak Hareketi',
    scenario: 'Nötr bir elektroskobun iletken topuzuna pozitif yüklü bir cam çubuk dokundurulmuştur.',
    questionPrompt: 'Elektroskobun yapraklarında meydana gelen hareket ve yaprakların son yük durumu hangisidir?',
    options: [
      { key: 'A', text: 'Elektroskop pozitif yüklenir ve aynı cins yükler birbirini ittiği için yapraklar açılır.' },
      { key: 'B', text: 'Elektroskop negatif yüklenir ve zıt yükler birbirini çektiği için yapraklar kapalı kalır.' },
      { key: 'C', text: 'Cam çubuktan yapraklara proton aktığı için yapraklar önce kapanır sonra açılır.' },
      { key: 'D', text: 'Dokundurulan çubuk cam olduğu için elektroskop hiçbir elektriksel tepki vermez.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pozitif çubuk dokununca elektroskoptan çubuğa elektron geçer; elektroskop (+) yüklenir. İki yaprak da (+) yüklendiği için birbirini iter ve yapraklar açılır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Cihaz Çalışma Prensibi',
    theme: 'Elektroskop'
  },
  {
    id: 8706,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Doğa Olayı Olarak Yıldırım ve Şimşek Ayrımı',
    scenario: 'Fırtınalı bir günde gökyüzünde ışık parlamaları ve gök gürültüsü meydana gelmektedir.',
    questionPrompt: 'Yıldırım ile şimşek doğa olayları arasındaki temel fark aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Şimşek yalnızca kışın kar yağarken görülürken yıldırım yalnızca yazın yağmurda oluşur.' },
      { key: 'B', text: 'Şimşek bulut ile bulut arasında, yıldırım ise bulut ile yer yüzeyi arasındaki elektrik boşalmasıdır.' },
      { key: 'C', text: 'Yıldırımda sadece pozitif yükler akarken şimşekte sadece ses dalgaları yayılır.' },
      { key: 'D', text: 'Şimşek yüksek binalara düşerek yangın çıkarırken yıldırım atmosferde kaybolur.' }
    ],
    correctAnswer: 'B',
    explanation: 'İki yüklü bulut arasındaki elektrik boşalmasına ŞİMŞEK, bulut ile yer arasındaki elektrik deşarjına YILDIRIM denir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Tanım ve Ayırt Etme',
    theme: 'Yıldırım ve Şimşek'
  },
  {
    id: 8707,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektrostatik Baca Filtrelerinin Çalışma Mantığı',
    scenario: 'Fabrika bacalarına takılan elektrostatik filtrelerde bacadan yükselen duman ve toz parçacıkları önce negatif elektrikle yüklenir, ardından bacanın içindeki pozitif yüklü metal plakalara çarptırılır.',
    questionPrompt: 'Bu filtrenin tozları tutarak havayı temizlemesini sağlayan fiziksel ilke nedir?',
    options: [
      { key: 'A', text: 'Negatif yüklü toz parçacıklarının yer çekimi kuvvetini yok ederek bacada donması.' },
      { key: 'B', text: 'Plakaların aşırı ısınıp tozları kimyasal olarak yakarak karbondioksite çevirmesi.' },
      { key: 'C', text: 'Zıt elektrik yüklü cisimlerin birbirini çekmesi prensibiyle tozların plakalara yapışması.' },
      { key: 'D', text: 'Toz taneciklerinin havadaki nem ile reaksiyona girip çiy damlacığı oluşturması.' }
    ],
    correctAnswer: 'C',
    explanation: 'Zıt yükler birbirini çeker. Negatif (-) yüklenen tozlar, pozitif (+) yüklü metal levhalar tarafından çekilerek tutulur ve havaya karışması önlenir. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Teknoloji Uygulaması',
    theme: 'Elektrostatik Filtreler'
  },
  {
    id: 8708,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektrik Akımının Isı Etkisi ve Direnç',
    scenario: 'Elektrikli fırın, ütü, su ısıtıcısı ve saç kurutma makinelerinin iç yapısında elektrik akımına karşı yüksek direnç gösteren özel nikel-krom teller (rezistans) kullanılır.',
    questionPrompt: 'Isıtıcı araçlarda yüksek dirençli tellerin tercih edilme sebebi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Direnci yüksek olan tellerin elektrik akımını hiç geçirmeyerek devreyi koruması.' },
      { key: 'B', text: 'Direnç telinin ortamdaki manyetik alanı artırarak mekanik hareket üretmesi.' },
      { key: 'C', text: 'Telin kütlesini azaltarak cihazın hafiflemesini ve taşınmasını kolaylaştırması.' },
      { key: 'D', text: 'Direnç arttıkça akımın geçişi sırasında elektrik enerjisinin daha yüksek oranda ısı enerjisine dönüşmesi.' }
    ],
    correctAnswer: 'D',
    explanation: 'Açığa çıkan ısı enerjisi dirençle doğru orantılıdır (E = I² . R . t). Direnci yüksek nikel-krom teller elektrik enerjisini güçlü ısıya çevirir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Devre ve Enerji Fiziği',
    theme: 'Elektrik Enerjisinin Isıya Dönüşümü'
  },
  {
    id: 8709,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektrik Sigortalarının Güvenlik Rolü',
    scenario: 'Evlerde kullanılan elektrik devrelerine bağlanan sigortalar, devreden aşırı akım geçtiğinde devreyi keserek yangın çıkmasını ve cihazların bozulmasını önler.',
    questionPrompt: 'Çalışma akımı 6 Amper olan bir bulaşık makinesini korumak için hangi sigorta tercih edilmelidir?',
    options: [
      { key: 'A', text: 'Cihazın çalışma akımından biraz büyük olan 7 veya 8 Amperlik sigorta bağlanmalıdır.' },
      { key: 'B', text: 'Cihazın çalışma akımından çok küçük olan 2 Amperlik sigorta bağlanmalıdır.' },
      { key: 'C', text: 'Aşırı akımda bile devreyi hiç kesmeyecek 50 Amperlik çok yüksek bir sigorta seçilmelidir.' },
      { key: 'D', text: 'Sigorta yerine doğrudan kalın bir bakır çubuk takılarak akım sınırsız bırakılmalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sigorta değeri cihazın normal akımından biraz büyük olmalıdır. Çok küçük olursa (2A) makine açılır açılmaz atar; çok büyük olursa (50A) makine yansa bile atmaz. 6A için en uygunu 7-8A’dir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Uygulama ve Güvenlik',
    theme: 'Sigortalar'
  },
  {
    id: 8710,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Akkor Flamanlı Ampul ile Tasarruflu LED Karşılaştırması',
    scenario: 'Akkor flamanlı ampuller aldıkları elektrik enerjisinin yaklaşık yüzde 90’ını ısıya, yalnızca yüzde 10’unu ışığa dönüştürür. LED lambalar ise enerjinin büyük kısmını doğrudan ışığa çevirir.',
    questionPrompt: 'Evlerde akkor ampul yerine LED lamba kullanılmasının temel avantajı hangisidir?',
    options: [
      { key: 'A', text: 'Akkor ampullerin hiç ışık yaymayarak odanın sıcaklığını dondurucu seviyeye indirmesi.' },
      { key: 'B', text: 'LED lambaların aynı ışık miktarını çok daha az elektrik enerjisi tüketerek üretmesi ve verimli olması.' },
      { key: 'C', text: 'LED lambaların elektrik enerjisini nükleer enerjiye çevirerek sınırsız yanması.' },
      { key: 'D', text: 'Akkor ampullerin sadece gündüz saatlerinde ışık verebilen kimyasal yapıda olması.' }
    ],
    correctAnswer: 'B',
    explanation: 'LED ampuller enerji verimliliği çok yüksek ışık kaynaklarıdır; elektrik enerjisini ısıya heba etmeden ışığa çevirerek faturaları ve enerji tüketimini azaltır. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Enerji Verimliliği',
    theme: 'Aydınlatma ve Tasarruf'
  },
  {
    id: 8711,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Elektrik Motoru ile Dinamo Karşılaştırması',
    scenario: 'Elektrik motoru ve dinamo (jeneratör) mekanizmaları incelendiğinde ikisinde de mıknatıs ve bobin tel bulunduğu görülür.',
    questionPrompt: 'Bu iki cihazın gerçekleştirdiği enerji dönüşümleri arasındaki temel fark nedir?',
    options: [
      { key: 'A', text: 'Her iki cihaz da sadece ısı enerjisini ışık enerjisine dönüştürmek amacıyla kullanılır.' },
      { key: 'B', text: 'Elektrik motoru kimyasal enerjiyi rüzgâr enerjisine, dinamo ise sesi ışığa çevirir.' },
      { key: 'C', text: 'Elektrik motoru elektrik enerjisini mekanik harekete çevirirken, dinamo hareket enerjisini elektriğe çevirir.' },
      { key: 'D', text: 'Dinamo elektrik enerjisi tüketerek mikser gibi ev aletlerini döndürmede kullanılır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Elektrik motoru (vantilatör, mikser): Elektrik -> Hareket. Dinamo / Jeneratör (bisiklet dinamosu, baraj türbini): Hareket -> Elektrik. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Dönüşüm Karşılaştırması',
    theme: 'Elektrik Motoru ve Dinamo'
  },
  {
    id: 8712,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Hidroelektrik Santrallerde Enerji Dönüşüm Zinciri',
    scenario: 'Baraj gölünde biriktirilen su yüksekten borularla aşağı düşürülerek türbin çarklarını döndürmekte ve jeneratörden elektrik üretilmektedir.',
    questionPrompt: 'Hidroelektrik santralde gerçekleşen enerji dönüşüm sırası aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Kimyasal Enerji -> Isı Enerjisi -> Işık Enerjisi -> Elektrik Enerjisi' },
      { key: 'B', text: 'Nükleer Enerji -> Işık Enerjisi -> Kinetik Enerji -> Kimyasal Enerji' },
      { key: 'C', text: 'Elektrik Enerjisi -> Potansiyel Enerji -> Isı Enerjisi -> Mekanik Enerji' },
      { key: 'D', text: 'Çekim Potansiyel Enerjisi -> Kinetik Hareket Enerjisi -> Elektrik Enerjisi' }
    ],
    correctAnswer: 'D',
    explanation: 'Yüksekteki su çekim potansiyel enerjisine sahiptir. Akarken kinetik (hareket) enerjiye dönüşür. Türbin ve jeneratör bu kinetik enerjiyi elektrik enerjisine çevirir. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Enerji Zinciri Analizi',
    theme: 'Hidroelektrik Santral'
  },
  {
    id: 8713,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Yüklü İki Cisim Arasındaki İtme ve Çekme Kuvveti',
    scenario: 'Yalıtkan iplerle asılmış K ve L kürelerinin birbirini ittiği, L ve M kürelerinin ise birbirini çektiği gözlemlenmiştir.',
    questionPrompt: 'K küresinin pozitif (+) yüklü olduğu bilindiğine göre L ve M kürelerinin yük cinsleri hangisidir?',
    options: [
      { key: 'A', text: 'L küresi pozitif yüklüdür, M küresi ise negatif veya nötr bir cisimdir.' },
      { key: 'B', text: 'L küresi negatif yüklüdür, M küresi ise kesinlikle pozitif yüklü bir cisimdir.' },
      { key: 'C', text: 'Hem L hem de M küreleri pozitif yüklü olup yükleri birbirine eşittir.' },
      { key: 'D', text: 'L küresi nötr bir cisimdir, M küresi ise sadece elektron yüklü bir cisimdir.' }
    ],
    correctAnswer: 'A',
    explanation: 'K (+), L’yi ittiğine göre L de kesinlikle (+)’dır (aynı cins yükler iter). L (+), M’yi çektiğine göre M cismi zıt yüklü (-) olabilir ya da yüklü cisimler nötr cisimleri çektiği için nötr olabilir. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Mantık Muhakeme',
    theme: 'Elektriksel Kuvvetler'
  },
  {
    id: 8714,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Otomobil Boyamada Elektrostatik Yükleme',
    scenario: 'Otomobil fabrikalarında araç kaportaları pozitif elektrikle yüklenirken, boya tabancasından püskürtülen zerrecikler negatif elektrikle yüklenir.',
    questionPrompt: 'Otomobil boyamada bu elektrostatik yöntemin kullanılmasının sağladığı temel kazanç nedir?',
    options: [
      { key: 'A', text: 'Boyanın kuruma süresini birkaç gün geciktirerek işçilerin dinlenmesini sağlamak.' },
      { key: 'B', text: 'Zıt yüklerin çekimiyle boyanın yüzeye eşit ve pürüzsüz yapışması ile boya israfının önlenmesi.' },
      { key: 'C', text: 'Boyanın kokusunu yok ederek çevreye zararlı kimyasal buharların salınmasını engellemek.' },
      { key: 'D', text: 'Boya damlalarının birbirini çekmesini sağlayarak kaportada kalın tabakalar oluşturmak.' }
    ],
    correctAnswer: 'B',
    explanation: 'Negatif boya damlacıkları pozitif kaportaya homojen ve pürüzsüz yapışır; zıt yüklerin birbirini çekmesiyle boya israfı önlenir. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Sanayi ve Teknoloji',
    theme: 'Elektrostatik Boyama'
  },
  {
    id: 8715,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Nötr Elektroskoba Negatif Yüklü Cisim Yaklaştırılması',
    scenario: 'Nötr bir elektroskobun topuzuna negatif yüklü ebonit bir çubuk dokundurulmadan yaklaştırılmış ve o konumda tutulmuştur.',
    questionPrompt: 'Bu durumda elektroskobun topuzunda ve yapraklarında gözlemlenen durum hangisidir?',
    options: [
      { key: 'A', text: 'Topuz negatif yüklenir, yapraklar pozitif yüklenir ve yapraklar sımsıkı kapanır.' },
      { key: 'B', text: 'Topuz ve yapraklar tamamen nötr kalır ve hiçbir elektriksel hareketlilik gözlenmez.' },
      { key: 'C', text: 'Topuzdaki elektronlar yapraklara itilir; topuz pozitif, yapraklar negatif olur ve yapraklar açılır.' },
      { key: 'D', text: 'Yapraklardan topuza proton göçü gerçekleşir ve elektroskop havaya sıçrar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Negatif çubuk topuzdaki elektronları yapraklara iter. Topuzda (+) yük fazlalığı oluşur. Yapraklar (-) yüklenir ve aynı yükler birbirini ittiği için yapraklar açılır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Etki ile Elektriklenme ve Elektroskop',
    theme: 'Elektroskop Kutuplanması'
  },
  {
    id: 8716,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Plastik Tarağın Su Akıntısını Çekmesi',
    scenario: 'Yün kazağa sürtülen plastik bir tarak, musluktan incecik akan su akıntısına yaklaştırıldığında su akıntısının bükülerek tarağa doğru yöneldiği görülmüştür.',
    questionPrompt: 'Su akıntısının tarağa doğru bükülmesinin nedeni aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Tarağın suyun sıcaklığını aniden düşürerek buz haline getirmesi.' },
      { key: 'B', text: 'Suyun kimyasal yapısının bozularak hidrojen ve oksijen gazına ayrışması.' },
      { key: 'C', text: 'Tarak ile su molekülleri arasında kütleçekim kuvvetinin ışık hızına çıkması.' },
      { key: 'D', text: 'Sürtünmeyle elektriklenen yüklü tarağın nötr su moleküllerini elektriksel olarak çekmesi.' }
    ],
    correctAnswer: 'D',
    explanation: 'Yüklü cisimler (sürtünen tarak) nötr maddeleri (akan su damlacıkları) etkiyle kutuplandırarak kendine doğru çeker. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'Gözlem Muhakemesi',
    theme: 'Yüklü Cismin Nötrü Çekmesi'
  },
  {
    id: 8717,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Nükleer Santrallerde Enerji Üretimi',
    scenario: 'Nükleer santrallerde uranyum gibi ağır atom çekirdeklerinin bölünmesiyle devasa bir ısı enerjisi açığa çıkar ve bu ısıyla su buharlaştırılarak türbinler döndürülür.',
    questionPrompt: 'Nükleer santrallerin enerji üretimi ve çevresel etkileri ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Karbondioksit salımı yapmaz ancak nükleer atıkların depolanması ve kaza riski dikkatli yönetim gerektirir.' },
      { key: 'B', text: 'Çevreye en çok sera gazı salan santral türü olup ozon tabakasını doğrudan eritir.' },
      { key: 'C', text: 'Elektrik üretimi için Güneş ışığına ve rüzgâr hızına yüzde yüz bağımlı olarak çalışır.' },
      { key: 'D', text: 'Reaktör içinde hiçbir ısı açığa çıkmaz ve elektrik doğrudan protonlardan emilir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nükleer santraller fosil yakıt yakmadığı için sera gazı (CO2) salmaz; ancak radyoaktif atıkların güvenli izolasyonu ve nükleer sızıntı güvenliği hayati önem taşır. Doğru cevap A seçeneğidir.',
    cognitiveLevel: 'Santral Türleri Analizi',
    theme: 'Nükleer Santraller'
  },
  {
    id: 8718,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Tankerlerde Zincir Kullanımı ve Statik Elektrik Güvenliği',
    scenario: 'Benzin ve LPG taşıyan yakıt tankerlerinin arkasına takılan metal bir zincirin yola sürterek ilerlediği görülür.',
    questionPrompt: 'Yakıt tankerlerine metal zincir takılmasının güvenlik gerekçesi nedir?',
    options: [
      { key: 'A', text: 'Tankerin yoldaki sürtünmesini artırarak kaygan zeminlerde fren yapmasını kolaylaştırmak.' },
      { key: 'B', text: 'Sürtünmeyle gövdede biriken tehlikeli statik elektriğin toprağa akıtılarak kıvılcım çıkmasını önlemek.' },
      { key: 'C', text: 'Yoldaki manyetik alanları toplayarak yakıtın buharlaşmasını engellemek.' },
      { key: 'D', text: 'Tanker tekerleklerinin elektrik üreterek aracın aküsünü şarj etmesini sağlamak.' }
    ],
    correctAnswer: 'B',
    explanation: 'Hava ve yakıt sürtünmesi tanker gövdesinde statik elektrik biriktirir. Metal zincir topraklama görevi görerek yükü toprağa akıtır ve patlamaya yol açabilecek kıvılcımları önler. Doğru cevap B seçeneğidir.',
    cognitiveLevel: 'Güvenlik ve Topraklama',
    theme: 'Statik Elektrik ve Topraklama'
  },
  {
    id: 8719,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Evlerde Elektrik Tasarrufu Önlemleri',
    scenario: 'Bir aile elektrik faturasını düşürmek ve karbon ayak izini azaltmak için evinde enerji tüketimini incelemiştir.',
    questionPrompt: 'Ailenin yapacağı aşağıdaki uygulamalardan hangisi elektrik tasarrufuna katkı sağlamaz?',
    options: [
      { key: 'A', text: 'Buzdolabının kapısını uzun süre açık bırakmamak ve sıcak yemekleri soğumadan dolaba koymamak.' },
      { key: 'B', text: 'Kullanılmayan televizyon, bilgisayar ve şarj aletlerini bekleme modunda bırakmayıp fişten çekmek.' },
      { key: 'C', text: 'Tüm aydınlatma ampullerini yüksek watt değerine sahip akkor flamanlı ampullerle değiştirmek.' },
      { key: 'D', text: 'Çamaşır ve bulaşık makinelerini tam kapasite dolmadan çalıştırmaktan kaçınmak.' }
    ],
    correctAnswer: 'C',
    explanation: 'Akkor ampuller enerjinin %90’ını ısıya harcar; akkor ampul takmak elektrik tüketimini fırlatır, tasarruf sağlamaz. LED ampul takılmalıdır. Doğru cevap C seçeneğidir.',
    cognitiveLevel: 'Tasarruf ve Bilinçli Kullanım',
    theme: 'Elektrik Tasarrufu'
  },
  {
    id: 8720,
    subTopicId: 'g8-u7-all',
    contextTitle: 'Yüklü İki Elektroskobun Birbirine İletken Telle Bağlanması',
    scenario: 'Özdeş iki elektroskoptan K elektroskobu -8q, L elektroskobu ise -2q yüklüdür. İki elektroskobun topuzları arasına iletken bir tel bağlanıp anahtar kapatılmıştır.',
    questionPrompt: 'Anahtar kapatıldıktan sonra elektroskopların yapraklarının durumu hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Her iki elektroskobun yaprakları da tamamen kapanır ve nötr hale gelirler.' },
      { key: 'B', text: 'K elektroskobunun yaprakları daha çok açılırken L elektroskobunun yaprakları tamamen kapanır.' },
      { key: 'C', text: 'Elektroskoplar arasında proton akışı gerçekleşir ve ikisi de pozitif yüke dönüşür.' },
      { key: 'D', text: 'Toplam negatif yük eşit paylaşılarak K elektroskobunun yaprakları biraz kapanır, L elektroskobunun yaprakları biraz daha açılır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Toplam yük (-8q) + (-2q) = -10q. Özdeş oldukları için son yükler (-5q) olur. K’nin yükü 8’den 5’e indiği için yaprakları biraz kapanır. L’nin yükü 2’den 5’e çıktığı için yaprakları biraz daha açılır. Doğru cevap D seçeneğidir.',
    cognitiveLevel: 'İleri Seviye Mantık Muhakeme',
    theme: 'Elektroskoplar Arası Yük Paylaşımı'
  }
];

