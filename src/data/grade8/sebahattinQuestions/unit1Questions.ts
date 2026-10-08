import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 1. ÜNİTE: MEVSİMLER VE İKLİM - SEBAHATTİN LGS SORU HAVUZU
// ============================================================================

export const sebahattinMevsimlerQuestions: LgsQuestion[] = [
  {
    id: 1101,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Öğrencilerin Güneş Işınları Geliş Doğrultusu Çizimleri',
    scenario: 'Emine öğretmen öğrencilerine tabloda vermiş olduğu tarihlerde Dünya üzerine Güneş ışınlarının geliş doğrultularını çizmelerini istemiştir:\n• Melike: 21 Haziran - Kuzey Yarım Küre\n• Kağan: 21 Aralık - Kuzey Yarım Küre\n• Ayza: 21 Aralık - Güney Yarım Küre\n• Altuğ: 21 Haziran - Güney Yarım Küre\nÖğrencilerden Melike, Dünya\'nın kuzey kutup noktasının Güneş\'e doğru yöneldiği ve ışınların Yengeç Dönencesi\'ne dik geldiği eksen eğikliğini doğru göstermiştir.',
    questionPrompt: 'Buna göre hangi öğrencinin Dünya eksen eğikliği ve Güneş ışınlarının geliş doğrultusu çizimi doğrudur?',
    options: [
      { key: 'A', text: 'Altuğ\'un Çizimi: Eksen eğikliği yok kabul edilerek ışınlar dik çizilmiştir.' },
      { key: 'B', text: 'Melike\'nin Çizimi: 21 Haziran\'da Kuzey Kutup Noktası Güneş\'e dönük olup ışınlar Kuzey Yarım Küre\'ye dik açıyla gelmektedir.' },
      { key: 'C', text: 'Ayza\'nın Çizimi: 21 Aralık tarihinde Güneş ışınları Kuzey Kutup Dairesi\'ne dik açıyla yönlendirilmiştir.' },
      { key: 'D', text: 'Kağan\'ın Çizimi: 21 Aralık\'ta dönme ekseni eğikliği dik konuma getirilmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: '21 Haziran tarihinde Dünya\'nın Kuzey Kutup kısmı Güneş\'e doğru yöneliktir ve Güneş ışınları Kuzey Yarım Küre\'deki Yengeç Dönencesi\'ne dik açıyla düşer. Melike\'nin çizimi bu durumu eksiksiz yansıtmaktadır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Görsel Analiz & Muhakeme',
    theme: 'Mevsimlerin Oluşumu & Eksen Eğikliği'
  },
  {
    id: 1102,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Doğru-Yanlış Puanlama Etkinliği',
    scenario: 'Ahmet öğretmen fen bilimleri dersinde mevsimler konusundaki bilgileri ölçmek için öğrencilerine üç cümle vermiş ve doğru cevap için 25 puan, yanlış cevap için -10 puan kuralı koymuştur.\nI. Dünya\'nın Güneş\'e en yakın olduğu tarihte Dünya\'nın her yerinde yaz mevsimi yaşanır. (Yanlış - 3 Ocak Günberi)\nII. 21 Haziran tarihinde Kuzey Yarım Küre\'de hiçbir yerde gölge oluşmaz. (Yanlış - Sadece Yengeç Dönencesi\'nde öğle 12.00\'de sıfırdır)\nIII. Ekvatorda gece gündüz süresi yıl boyunca birbirine eşittir. (Doğru - Daima 12 saat gece, 12 saat gündüz)\nAyşe bu cümlelere sırasıyla Doğru, Yanlış, Doğru cevaplarını vermiştir.',
    questionPrompt: 'Etkinlik sonunda yapılan puanlama neticesinde Ayşe kaç puan almıştır?',
    options: [
      { key: 'A', text: '30' },
      { key: 'B', text: '5' },
      { key: 'C', text: '40' },
      { key: 'D', text: '75' }
    ],
    correctAnswer: 'C',
    explanation: 'I. cümle için Yanlış denmeliydi, Ayşe Doğru dediği için (-10 puan). II. cümle için Yanlış denmeliydi, Ayşe Yanlış dedi (+25 puan). III. cümle için Doğru denmeliydi, Ayşe Doğru dedi (+25 puan). Toplam puan: -10 + 25 + 25 = 40 puandır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kavramsal Muhakeme',
    theme: 'Mevsimler ve Kritik Tarihler'
  },
  {
    id: 1103,
    subTopicId: 'g8-u1-sub1',
    contextTitle: '6 Aylık Gece-Gündüz Değişim Grafiği',
    scenario: 'Fen Bilimleri Öğretmeni Nil Asya, belirli bir bölgede yaşanan gece-gündüz sürelerinin Dünya\'nın konumuna bağlı olduğu bilgisini paylaşmıştır. Dünya 21 Aralık konumunda iken başlayan ve 6 ay boyunca bir şehre ait gece ve gündüz sürelerinin zamana bağlı değişim grafiğinde; başlangıçta gece süresi gündüz süresinden uzun olup t anında gece ve gündüz süreleri eşitlenmektedir.',
    questionPrompt: 'Buna göre grafikle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Grafik Kuzey Yarım Küre\'de yer alan bir şehre ait olup 21 Aralık ile 21 Haziran tarihleri aralığını göstermektedir.' },
      { key: 'B', text: 'Grafikteki t zamanı 21 Aralık kış gündönümü tarihini göstermektedir.' },
      { key: 'C', text: 'Grafik Güney Yarım Küre\'deki bir şehre ait olup başlangıçta yaz mevsimi yaşanmaktadır.' },
      { key: 'D', text: 't zamanından sonra şehirde geceler gündüzlerden daha uzun olmaya devam eder.' }
    ],
    correctAnswer: 'A',
    explanation: '21 Aralık\'ta KYK\'de geceler gündüzlerden uzundur. 21 Mart\'a (t anı) gelindiğinde gece-gündüz 12 saat olarak eşitlenir. 21 Mart\'tan 21 Haziran\'a kadar ise gündüzler gecelerden uzun hale gelir. Grafik KYK\'de bir şehri temsil eder.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Veri Analizi',
    theme: 'Gece-Gündüz Süreleri Değişimi'
  },
  {
    id: 1104,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Erasmus Öğrencileri ve Yaşadıkları Yarım Küreler',
    scenario: 'Erasmus kapsamında Türkiye\'ye gelen yabancı öğrenciler yaşadıkları yerler ile ilgili şu bilgileri vermiştir:\n• Li: "Yaşadığımız yerde 21 Aralık\'ta en uzun gündüz yaşanır." (GYK)\n• Anna: "Yaşadığım yerde yılın iki gününde gece ve gündüz süreleri eşittir." (Herhangi bir yarım küre / Ekinoks)\n• Mirela: "Benim yaşadığım yerde 21 Haziran\'da yaz mevsimi başlar." (KYK)\n• Maria: "Yaşadığım yerde yıl boyunca 12 saat gece 12 saat gündüz yaşanır." (Ekvator)\n• David: "Benim yaşadığım yerde 23 Nisan\'da sonbahar mevsimi yaşanır." (GYK)',
    questionPrompt: 'Buna göre hangi iki öğrencinin Güney Yarım Küre\'de yaşadığı kesindir?',
    options: [
      { key: 'A', text: 'Li ve Anna' },
      { key: 'B', text: 'Maria ve Mirela' },
      { key: 'C', text: 'David ve Li' },
      { key: 'D', text: 'Mirela ve David' }
    ],
    correctAnswer: 'C',
    explanation: '21 Aralık\'ta en uzun gündüz GYK\'de yaşanır (Li). 23 Nisan\'da (Nisan ayı) sonbahar mevsimi GYK\'de yaşanır çünkü KYK\'de ilkbahardır (David). Dolayısıyla David ve Li kesinlikle Güney Yarım Küre\'dedir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Çıkarım Yapma',
    theme: 'Yarım Küreler ve Mevsim Başlangıçları'
  },
  {
    id: 1105,
    subTopicId: 'g8-u1-sub1',
    contextTitle: '21 Aralık Konumu ve Güneş Mesafesi Çelişkisi',
    scenario: 'Dünya Güneş etrafında elips şeklindeki yörüngede dolanırken Güneş\'e olan mesafesi sürekli değişir. 3 Ocak tarihinde Dünya Güneş\'e en yakın (günberi) konumda olmasına rağmen Türkiye\'nin de bulunduğu Kuzey Yarım Küre\'de kış mevsimi yaşanmaktadır.',
    questionPrompt: 'Bu durum aşağıdaki yargılardan hangileriyle açıklanabilir?\nI. 21 Aralık\'ta Kuzey Yarım Küre\'de gece süresinin gündüzden uzun olması\nII. Dünya\'nın 23° 27\'lik eksen eğikliğine sahip olması\nIII. 21 Aralık konumunda Güneş ışınlarının Kuzey Yarım Küre\'ye daha eğik açıyla gelmesi',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'C',
    explanation: 'Mevsimlerin oluşması ve sıcaklık farklarının temel sebebi Güneş\'e olan uzaklık değil, eksen eğikliği (II) ve ışınların eğik açıyla gelmesidir (III). I numaralı gece süresi ise bu durumun bir sonucudur, nedeni değildir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Nedensellik Kurma',
    theme: 'Eksen Eğikliği & Güneş Işınlarının Açısı'
  },
  {
    id: 1106,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Dönme Ekseninin Dik Konuma Gelmesi Hipotezi',
    scenario: 'Bilgi: Dünya\'nın dönme ekseni, dolanma düzlemine göre yaklaşık 23,5° eğiktir. Bu eğiklik ortadan kalkarak dönme ekseni dolanma düzlemine tam dik (Görsel 2) hale gelseydi neler yaşanırdı?',
    questionPrompt: 'Eksen eğikliğinin ortadan kalkması durumunda verilen ifadelerden hangileri gerçekleşirdi?\nI. Ekvator ile dolanma düzlemi çakışık hale gelirdi.\nII. Dünya\'nın her yerinde yıl boyunca 12 saat gündüz 12 saat gece yaşanırdı.\nIII. Mevsimler ortadan kalkar, aynı noktada yıl boyu aynı sıcaklık koşulları görülürdü.',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Eksen eğikliği kalkarsa Ekvator dolanma düzlemine çakışır (I), aydınlanma çemberi kutuplardan teğet geçer ve tüm dünyada daimi ekinoks (12-12) yaşanır (II), Güneş ışınlarının geliş açısı yıl boyu sabit kaldığı için mevsimler oluşmazdı (III).',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Hipotetik Düşünme',
    theme: 'Eksen Eğikliğinin Sonuçları'
  },
  {
    id: 1107,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Türkiye, Danimarka ve Arjantin Sıcaklık Grafikleri',
    scenario: 'Dünya 21 Aralık konumundayken üç ülke inceleniyor:\n• Türkiye ve Danimarka Kuzey Yarım Küre\'de yer alır.\n• Arjantin Güney Yarım Küre\'de yer alır.\n• Türkiye Ekvator\'a Danimarka\'dan daha yakındır.',
    questionPrompt: 'Buna göre Dünya 21 Aralık konumundayken bu üç ülkede ölçülen hava sıcaklıkları grafiği hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Arjantin en sıcak (yaz), Türkiye orta sıcaklıkta (kış ama ekvatora yakın), Danimarka en soğuk (kış ve kutba yakın).' },
      { key: 'B', text: 'Türkiye en sıcak, Arjantin orta sıcaklıkta, Danimarka en soğuk.' },
      { key: 'C', text: 'Danimarka en sıcak, Türkiye orta, Arjantin en soğuk.' },
      { key: 'D', text: 'Üç ülkenin de sıcaklıkları birbirine eşit.' }
    ],
    correctAnswer: 'A',
    explanation: '21 Aralık\'ta GYK\'de yer alan Arjantin yaz mevsimini yaşadığı için sıcaklığı en yüksektir (~30°C). KYK kış mevsimindedir; ancak Türkiye Ekvator\'a daha yakın olduğu için Danimarka\'dan daha sıcaktır (~25°C > ~10°C).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Veri Analizi',
    theme: 'Enlem ve Mevsim Sıcaklıkları'
  },
  {
    id: 1108,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Güneş Işınlarının Dik Açıyla Gelme Periyotları',
    scenario: 'Dünya üzerindeki I, II, III ve IV numaralı enlemlere Güneş ışınlarının dik açıyla gelme durumları şöyledir:\n• K şehri: 21 Aralık\'ta yılda bir defa dik gelir (Oğlak Dönencesi).\n• L şehri: 21 Haziran\'da yılda bir defa dik gelir (Yengeç Dönencesi).\n• M şehri: Yılda iki defa dik gelir (Ekvator).\n• N şehri: Hiçbir zaman dik gelmez (Dönenceler dışı / Kutup Dairesi).',
    questionPrompt: 'Buna göre K, L, M ve N şehirlerinin Dünya üzerindeki konum eşleştirmesi hangisinde doğrudur?',
    options: [
      { key: 'A', text: 'K: Yengeç Dönencesi, L: Oğlak Dönencesi, M: Ekvator, N: Kutup Dairesi' },
      { key: 'B', text: 'K: Oğlak Dönencesi (III), L: Yengeç Dönencesi (I), M: Ekvator (II), N: Kutup Dairesi (IV)' },
      { key: 'C', text: 'K: Ekvator, L: Yengeç, M: Oğlak, N: Kutup' },
      { key: 'D', text: 'K: Kutup, L: Ekvator, M: Yengeç, N: Oğlak' }
    ],
    correctAnswer: 'B',
    explanation: '21 Haziran\'da Yengeç Dönencesi (I) yılda 1 kez dik açı alır. 21 Aralık\'ta Oğlak Dönencesi (III) yılda 1 kez dik açı alır. Ekvator (II) ekinokslarda yılda 2 kez dik açı alır. Dönencelerin dışındaki kutup bölgeleri (IV) hiçbir zaman dik açı alamaz.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Harita ve Konum Okuma',
    theme: 'Dönenceler ve Dik Geliş Zamanları'
  },
  {
    id: 1109,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Türkiye Haritasında En Kısa Gölge Boyu Tespiti',
    scenario: 'Fen Bilimleri öğretmeni tahtaya Türkiye haritasını açarak Sinop, Ankara, İzmir ve Hatay illerini işaretlemiştir. Öğrencilerden açık bir günde öğle vakti dikilen özdeş bir çubuğun gölge boyunun en kısa olacağı tarih ve ili seçmelerini istemiştir.',
    questionPrompt: 'Öğrenciler en kısa gölge boyunu elde etmek için aşağıdakilerden hangisini seçmelidir?',
    options: [
      { key: 'A', text: '23 Eylül tarihinde saat 13.00 İzmir' },
      { key: 'B', text: '21 Mart tarihinde saat 12.00 Ankara' },
      { key: 'C', text: '21 Haziran tarihinde saat 12.00 Hatay' },
      { key: 'D', text: '21 Aralık tarihinde saat 14.00 Sinop' }
    ],
    correctAnswer: 'C',
    explanation: 'Gölge boyunun en kısa olması için ışınların en büyük (en dik) açıyla gelmesi gerekir. Türkiye Kuzey Yarım Küre\'de olduğundan en büyük açıyı 21 Haziran\'da öğle saat 12.00\'de alır. En güneydeki ilimiz Hatay, Ekvator\'a ve Yengeç Dönencesi\'ne en yakın il olduğu için gölge boyu en kısa Hatay\'da ölçülür.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Coğrafi Muhakeme',
    theme: 'Gölge Boyu ve Enlem İlişkisi'
  },
  {
    id: 1110,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Güneş Paneli Faturası ve Birim Yüzeye Düşen Enerji',
    scenario: 'Tekin ve Kaçar ailelerinin evlerinin çatısında özdeş güneş panelleri bulunmaktadır. Her iki ailenin de tükettiği elektrik miktarı aynıdır. Elektrik şebekesinden karşılayıp ödedikleri fatura incelendiğinde; Kuzey Yarım Küre\'de yaşayan M şehrindeki ailenin faturası 100 TL iken, Ekvator kuşağındaki N şehrindeki ailenin faturası sadece 50 TL gelmiştir.',
    questionPrompt: 'Buna göre ailelerin yaşadıkları M ve N şehirleri ile ilgili hangisi söylenebilir?',
    options: [
      { key: 'A', text: 'M şehrinde birim yüzeye düşen güneş ışığı miktarı az, N şehrinde birim yüzeye düşen ışık miktarı fazladır.' },
      { key: 'B', text: 'N şehrinde Güneş ışınları daima çok dar ve eğik açılarla düşmektedir.' },
      { key: 'C', text: 'M şehrinde gece-gündüz süreleri yıl boyunca daima eşittir.' },
      { key: 'D', text: 'N şehri kutup dairesine daha yakın bir konumdadır.' }
    ],
    correctAnswer: 'A',
    explanation: 'N şehrindeki evin faturası daha az olduğuna göre güneş panelleri daha çok elektrik üretmiştir. Bu da N şehrine Güneş ışınlarının daha dik açıyla geldiğini ve birim yüzeye düşen enerji miktarının M şehrinden çok daha fazla olduğunu kanıtlar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Uygulama ve Analiz',
    theme: 'Birim Yüzeye Düşen Işık Enerjisi'
  },
  {
    id: 1111,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Öğle Vakti Gölge Boyu ve Işık Geliş Açısı 45° Kuralı',
    scenario: 'Yere dik olarak dikilmiş 100 cm boyundaki bir çubuğun öğle vakti (saat 12.00) gölge boyu farklı tarihlerde ölçülmüştür. 1. tarihte gölge boyu 0 cm, 2. tarihte 100 cm, 3. tarihte ise 173 cm olarak kaydedilmiştir.',
    questionPrompt: 'Bu ölçüm sonuçlarına göre Güneş ışınlarının geliş açıları hakkında aşağıdaki yorumlardan hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: '1. tarihte ışınlar 90° dik açıyla, 2. tarihte 45° açıyla, 3. tarihte 45°\'den daha küçük bir dar açıyla gelmiştir.' },
      { key: 'B', text: 'Gölge boyunun en uzun olduğu 3. tarihte Güneş ışınları en dik açıyla düşmüştür.' },
      { key: 'C', text: '2. tarihte ışınlar 90° dik açıyla düşmüştür.' },
      { key: 'D', text: 'Gölge boyu ile ışığın geliş açısı arasında hiçbir matematiksel ilişki yoktur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işınlar yüzeye 90° dik açıyla düştüğünde gölge oluşmaz (0 cm). Işınlar 45° açıyla geldiğinde ikizkenar dik üçgen kuralı gereğince gölge boyu cismin gerçek boyuna eşit olur (100 cm). Açı 45°\'den daha da küçüldükçe (eğik geldikçe) gölge boyu cismin boyundan daha uzun olur (173 cm).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Gölge-Açı Geometrik Muhakemesi',
    theme: 'Gölge Boyu ve Geliş Açısı'
  },
  {
    id: 1112,
    subTopicId: 'g8-u1-sub1',
    contextTitle: '21 Aralık Kış Gündönümünde Yarım Küreler ve Kutup Daireleri',
    scenario: '21 Aralık tarihinde Dünya üzerindeki konumları incelenen K şehri Kuzey Kutup Dairesi\'nde (66° 33\' K), L şehri Ekvator\'da, M şehri ise Güney Yarım Küre\'de Oğlak Dönencesi üzerindedir.',
    questionPrompt: 'Bu tarihte şehirlerde yaşanan gece-gündüz süreleri ve mevsimler hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K şehrinde 24 saat gündüz yaşanırken, M şehrinde 24 saat gece yaşanır.' },
      { key: 'B', text: 'M şehrinde yaz mevsimi başlar ve yılın en uzun gündüzü yaşanır; K şehrinde ise 24 saat gece yaşanır.' },
      { key: 'C', text: 'L şehrinde gündüz süresi 18 saattir.' },
      { key: 'D', text: 'Her üç şehirde de gece-gündüz süreleri 12\'şer saat olarak birbirine eşittir.' }
    ],
    correctAnswer: 'B',
    explanation: '21 Aralık tarihinde Güneş ışınları Oğlak Dönencesi\'ne dik gelir. Güney Yarım Küre\'de yaz başlangıcıdır ve en uzun gündüz yaşanır. Kuzey Yarım Küre\'de kış başlar, Kuzey Kutup Dairesi\'nde (K şehri) 24 saat boyunca hiç Güneş doğmaz (24 saat gece). Ekvator\'da ise daima 12 saat gece, 12 saat gündüz yaşanır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Özel Tarihler Analizi',
    theme: '21 Aralık Gündönümü'
  },
  {
    id: 1113,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Güneş Işınlarının Dik Geldiği Kuşaklar ve Dönenceler',
    scenario: 'Dünya\'nın 23° 27\'lik eksen eğikliği nedeniyle Güneş ışınları yıl boyunca belirli enlemler arasına dik (90°) açıyla düşebilir.',
    questionPrompt: 'Güneş ışınlarının dik açıyla düşme sıklığı hakkında aşağıdaki bilgilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kutup noktalarına yılda bir kez 21 Haziran\'da dik açıyla düşer.' },
      { key: 'B', text: 'Yengeç ve Oğlak dönenceleri arasına yılda iki kez, dönencelerin tam üzerine yılda bir kez dik düşer; dönenceler dışına ise hiçbir zaman 90° açıyla düşmez.' },
      { key: 'C', text: 'Türkiye gibi orta kuşak ülkelerine yaz aylarında her gün dik açıyla düşer.' },
      { key: 'D', text: 'Ekvator\'a yılın her günü 365 gün boyunca dik açıyla düşer.' }
    ],
    correctAnswer: 'B',
    explanation: 'Güneş ışınları sadece dönenceler arasına dik düşebilir. Yengeç Dönencesi\'ne yılda bir kez (21 Haziran), Oğlak Dönencesi\'ne yılda bir kez (21 Aralık), dönenceler arasındaki bölgelere (ve Ekvator\'a) yılda iki kez dik düşer. Dönencelerin dışındaki orta ve kutup kuşaklarına (örneğin Türkiye\'ye) hiçbir zaman dik açıyla düşmez.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Coğrafi Enlem ve Geliş Açısı',
    theme: 'Dönenceler ve Dik Düşme Aralıkları'
  },
  {
    id: 1114,
    subTopicId: 'g8-u1-sub1',
    contextTitle: 'Dünya’nın Yıllık Dolanma Hareketi ve Mevsimlerin Başlangıç Sırası',
    scenario: 'Dünya Güneş etrafında saat yönünün tersine (batıdan doğuya doğru) eliptik bir yörüngede dolanmaktadır. Yörünge üzerinde 1: 21 Mart, 2: 21 Haziran, 3: 23 Eylül, 4: 21 Aralık konumları işaretlenmiştir.',
    questionPrompt: 'Kuzey Yarım Küre\'de yaşayan bir öğrenci için 1, 2, 3 ve 4 nolu konumlarda başlayan mevsimler sırasıyla hangisidir?',
    options: [
      { key: 'A', text: '1: İlkbahar — 2: Yaz — 3: Sonbahar — 4: Kış' },
      { key: 'B', text: '1: Sonbahar — 2: Kış — 3: İlkbahar — 4: Yaz' },
      { key: 'C', text: '1: Yaz — 2: Sonbahar — 3: Kış — 4: İlkbahar' },
      { key: 'D', text: '1: Kış — 2: İlkbahar — 3: Yaz — 4: Sonbahar' }
    ],
    correctAnswer: 'A',
    explanation: 'Kuzey Yarım Küre için 21 Mart ilkbahar başlangıcı, 21 Haziran yaz başlangıcı, 23 Eylül sonbahar başlangıcı ve 21 Aralık kış başlangıcıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Yörünge Konumlandırma',
    theme: 'Mevsim Başlangıç Tarihleri'
  }
];

export const sebahattinIklimQuestions: LgsQuestion[] = [
  {
    id: 1201,
    subTopicId: 'g8-u1-sub2',
    contextTitle: '20 Mart Mesajlaşması: İklim mi Hava Olayı mı?',
    scenario: '20 Mart tarihinde üç arkadaş mesajlaşıyor:\n• Ayşe: "Bugün hava İzmir\'de çok sıcak, insanlar denize giriyor."\n• Fatma: "Erzurum\'da hava o kadar soğuk ki okullar kar nedeniyle tatil edildi."\n• Melike: "Ordu\'da sabahtan beri yağmur yağıyor, meteorologlar sel uyarısı yaptı."',
    questionPrompt: 'Verilen bilgilere göre aşağıdaki çıkarımlardan hangilerine ulaşılabilir?\nI. Aynı yarım kürede yer alan şehirlerde aynı tarihte farklı hava olayları görülebilir.\nII. Erzurum ve Ordu\'da kış mevsimi devam ederken İzmir yaz mevsimine girmiştir.\nIII. Şehirlerdeki anlık durumlar hava olayını, bölgenin genel yapısı ise iklimi gösterir.',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'Türkiye\'nin tamamı Kuzey Yarım Küre\'dedir ve 20 Mart\'ta henüz kıştan ilkbahara geçiş vardır; hiçbir il yaz mevsimine girmemiştir (II yanlış). Ancak aynı yarım kürede aynı anda farklı hava olayları yaşanabilir (I doğru) ve bunlar anlık hava olaylarıdır (III doğru).',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Kavramsal Ayrım',
    theme: 'İklim vs Hava Olayları'
  },
  {
    id: 1202,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Meltem Rüzgârları ve Basınç Merkezleri',
    scenario: 'Meltem rüzgârları birbirine komşu kara ve denizlerin ya da dağlarla vadilerin gün içindeki farklı ısınmaları sonucu oluşur. Gündüzleri deniz meltemi, geceleri ise kara meltemi eser.',
    questionPrompt: 'Meltem rüzgârları ile ilgili verilen tablodaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Meltem rüzgârları bölgeler arasındaki sıcaklık farkından kaynaklanan basınç farkıyla oluşur.' },
      { key: 'B', text: 'Kara melteminde karada yüksek basınç alanı, denizde ise alçak basınç alanı oluşur.' },
      { key: 'C', text: 'Gündüzleri vadilerin sıcaklığı dağlara göre daha fazladır ve vadiden dağa doğru vadi meltemi eser.' },
      { key: 'D', text: 'Meltem rüzgârları binlerce kilometrelik kıtalar arası alanda etkili olan daimi rüzgârlardır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Meltem rüzgârları günlük sıcaklık farklarıyla oluşan ve etki alanı sahil şeridiyle sınırlı (yerel) rüzgârlardır; kıtalar arası küresel rüzgârlar değildir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kavram Analizi',
    theme: 'Rüzgâr Dinamiği ve Meltemler'
  },
  {
    id: 1203,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Mum Düzeneği ile Rüzgâr Oluşumu Deneyi',
    scenario: 'Bir öğretmen rüzgâr oluşumunu ispatlamak için bir tarafa 5 adet yanan mum koymuş, diğer tarafa ise tek bir mum yerleştirmiştir. Bir süre sonra tek başına duran mumun alevinin 5 mumun olduğu yöne doğru eğildiği gözlemlenmiştir.',
    questionPrompt: 'Buna göre mum alevinin hareketi ile ilgili,\nI. Dört mumun olduğu bölge sıcak olduğu için alçak basınç alanıdır.\nII. Rüzgârın yönü yüksek basınç alanından alçak basınç alanına doğrudur.\nIII. Tek mumun olduğu bölge daha soğuk olup yüksek basınç alanını temsil eder.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: '5 mumun olduğu yer sıcaktır; hava genleşir, yoğunluğu azalır, yükselici hava hareketi yapar ve Alçak Basınç (AB) oluşur. Tek mumun olduğu yer soğuktur; hava yoğunlaşır, alçalıcı hareket yapar ve Yüksek Basınç (YB) oluşur. Rüzgâr YB\'den AB\'ye doğru estiği için alev 5 muma doğru yönelir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Model Muhakemesi',
    theme: 'Basınç Farkı & Rüzgâr Yönü'
  },
  {
    id: 1204,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'İklim ve Hava Olayları Özellikleri Karşılaştırma',
    scenario: 'Aşağıdaki tabloda iklim ve hava olaylarına ait özellikler verilmiştir:\n1. Tahmini sonuçlardır.\n2. Günlük hava olaylarının 35-40 yıllık ortalamasıdır.\n3. İlgilenen bilim dalı meteorolojidir.\n4. Çalışma yapan uzmana klimatolog denir.\n5. Geniş bir bölgede uzun yıllar değişmeyen hava şartlarıdır.\n6. Kesin sonuçlardır.',
    questionPrompt: 'Tabloda yalnızca İKLİME ait olan özellikler işaretlendiğinde hangi numaralar seçilmelidir?',
    options: [
      { key: 'A', text: '1, 3 ve 6' },
      { key: 'B', text: '2, 4, 5 ve 6' },
      { key: 'C', text: '1, 2 ve 4' },
      { key: 'D', text: '3, 5 ve 6' }
    ],
    correctAnswer: 'B',
    explanation: 'İklim: 35-40 yıllık ortalama veri (2), uzmanı klimatolog (4), geniş bölgede uzun yıllar değişmeyen şartlar (5) ve kesinlik bildiren sonuçlardır (6). Tahminilik (1) ve meteoroloji (3) hava olayına aittir.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Kavramsal Sınıflandırma',
    theme: 'Klimatoloji ve Meteoroloji'
  },
  {
    id: 1205,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'K ve L Noktaları Arasındaki Rüzgâr Akımı',
    scenario: 'Verilen şekilde rüzgârın yönü K noktasından L noktasına doğru yatay olarak gösterilmiştir.',
    questionPrompt: 'Buna göre aşağıdaki yorumlardan hangisi KESİNLİKLE YANLIŞTIR?',
    options: [
      { key: 'A', text: 'L noktası alçak basınç alanıdır.' },
      { key: 'B', text: 'K noktası yüksek basınç alanıdır.' },
      { key: 'C', text: 'K noktasında hava yoğunluğu L noktasından daha azdır.' },
      { key: 'D', text: 'L noktasında yükselici hava hareketi görülmektedir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Rüzgâr Yüksek Basınçtan (K) Alçak Basınca (L) eser. Yüksek basınç alanında hava soğuk ve tanecikler birbirine yakın yani gaz yoğunluğu fazladır. "K noktasında hava yoğunluğu daha azdır" ifadesi yanlıştır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Fiziksel Prensipler',
    theme: 'Hava Yoğunluğu & Basınç'
  },
  {
    id: 1206,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Sıcaklık ve Yağış Grafiğinden İklim Belirleme',
    scenario: 'Türkiye\'deki bir ile ait yıllık sıcaklık ve yağış grafiği inceleniyor:\n• En az yağış Haziran, Temmuz, Ağustos aylarında düşmektedir.\n• En fazla yağış Mart ayında kaydedilmiştir.\n• Temmuz-Ağustos ortalama sıcaklığı 24°C civarındadır.\n• Yıllık ortalama sıcaklık 15°C civarındadır.',
    questionPrompt: 'Bu grafik incelendiğinde verilenlerden hangisi söylenemez?',
    options: [
      { key: 'A', text: 'Haziran ayı yılın en az yağış alan ayıdır.' },
      { key: 'B', text: 'Ortalama yağış miktarı en fazla Mart ayında gerçekleşmiştir.' },
      { key: 'C', text: 'Şehrin yıllık sıcaklık ortalaması 20°C\'nin üzerindedir.' },
      { key: 'D', text: 'Temmuz ve Ağustos ayları yılın en sıcak aylarıdır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Grafikte kış aylarında sıcaklık 8-10°C, yaz aylarında 24°C civarındadır. Yıllık sıcaklık ortalaması 14-16°C civarında olup 20°C\'nin üzerinde değildir. C seçeneği söylenemez.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Grafik Okuma',
    theme: 'İklim Grafikleri Analizi'
  },
  {
    id: 1207,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Atmosferdeki Su Buharı ve Yağış Çeşitleri',
    scenario: 'Atmosferdeki nemi oluşturan su buharı soğuyup yoğuşarak yağmur, kar, dolu, çiy veya kırağı olarak yeryüzüne döner.\nTanım: "Isınmalar sonucu yükselen hava içerisindeki su buharının, aşırı soğuma nedeniyle aniden donarak buz toplarına dönüşmesi..."',
    questionPrompt: 'Tanımı verilen yağış türü aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Yağmur' },
      { key: 'B', text: 'Çiy' },
      { key: 'C', text: 'Kırağı' },
      { key: 'D', text: 'Dolu' }
    ],
    correctAnswer: 'D',
    explanation: 'Su damlacıklarının fırtınalı havalarda aniden donması ve katman katman buz kürelerine dönüşerek yeryüzüne düşmesine dolu denir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kavram Tanıma',
    theme: 'Hava Olayları ve Yağış Çeşitleri'
  },
  {
    id: 1208,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Sahildeki Bayrağın Dalgalanma Yönü',
    scenario: 'Deniz kenarında bulunan bir okulun bahçesindeki Türk bayrağının gündüz saatlerinde denizden karaya doğru dalgalandığı görülmektedir.',
    questionPrompt: 'Verilen bilgi ve görsele göre aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Deniz tarafında yükselici hava hareketi görülür.' },
      { key: 'B', text: 'Şehir (kara) bölgesinde ısınan hava yukarı doğru hareket etmiştir.' },
      { key: 'C', text: 'Şehir bölgesinde alçalıcı hava hareketi görülür.' },
      { key: 'D', text: 'Deniz tarafında alçak basınç alanı oluşmuştur.' }
    ],
    correctAnswer: 'B',
    explanation: 'Gündüz karalar denizden daha hızlı ısınır; kara üzerinde hava yükselerek alçak basınç alanı oluşturur (B doğru). Rüzgâr denizdeki yüksek basınçtan karaya doğru eser ve bayrağı karaya doğru dalgalandırır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sebep-Sonuç İlişkisi',
    theme: 'Basınç ve Yerel Rüzgârlar'
  },
  {
    id: 1209,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Akıllı Telefon Gün Doğumu ve Gün Batımı Verisi',
    scenario: 'Ahmet telefonundaki hava durumu uygulamasında şu bilgileri görmüştür:\n• 3 Ekim: Gün doğumu 06.03, Gün batımı 19.19 (Gündüz 13 sa 16 dk)\n• 9 Ekim: Gün doğumu 06.00, Gün batımı 19.21 (Gündüz 13 sa 21 dk)\nAhmet günlerin gittikçe uzadığını gözlemlemiştir.',
    questionPrompt: 'Uygulamada yazan bilgilere göre Ahmet\'in yaşadığı yer ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Ahmet Kuzey Yarım Küre\'de yer alan bir ülkede yaşamaktadır.' },
      { key: 'B', text: 'Ahmet Güney Yarım Küre\'de bir ülkede yaşamaktadır; çünkü Ekim ayında gündüzler uzamaktadır.' },
      { key: 'C', text: 'Ahmet Ekvator çizgisi üzerinde bir adada yaşamaktadır.' },
      { key: 'D', text: 'Ahmet 21 Aralık\'ta yılın en uzun gecesini yaşayacaktır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ekim ayında Kuzey Yarım Küre\'de gündüzler kısalır, geceler uzar. Oysa Ahmet\'in yaşadığı yerde 3 Ekim\'den 9 Ekim\'e gündüz süresi uzamıştır. Ekim ayında gündüzlerin uzadığı yarım küre ilkbahar yaşayan Güney Yarım Küre\'dir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Veri Çıkarımı',
    theme: 'Gündüz Süresi Değişimi & Yarım Küre'
  },
  {
    id: 1210,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Sıcaklık ve Basınç Farkı Rüzgâr Hızı İlişkisi',
    scenario: 'Laboratuvarda 3 farklı bölge arasındaki basınç değerleri barometre ile ölçülmüştür:\n• K bölgesi: 40 mmHg\n• L bölgesi: 10 mmHg\n• M bölgesi: 30 mmHg\n• N bölgesi: 50 mmHg',
    questionPrompt: 'Grafikte bulunan hangi iki nokta arasında rüzgâr şiddeti en fazla olur?',
    options: [
      { key: 'A', text: 'K - N (Fark: 10 mmHg)' },
      { key: 'B', text: 'K - M (Fark: 10 mmHg)' },
      { key: 'C', text: 'M - N (Fark: 20 mmHg)' },
      { key: 'D', text: 'N - L (Fark: 40 mmHg)' }
    ],
    correctAnswer: 'D',
    explanation: 'Rüzgârın hızı ve şiddeti iki bölge arasındaki basınç farkı ile doğru orantılıdır. Basınç farkının en büyük olduğu iki nokta N (50) ve L (10) olup aradaki fark 40 mmHg\'dir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Nicel Karşılaştırma',
    theme: 'Rüzgâr Şiddeti & Basınç Farkı'
  },
  {
    id: 1211,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Alçak ve Yüksek Basınç Alanları Hava Hareketi Modeli',
    scenario: 'X ve Y bölgeleri arasında oluşan hava hareketleri incelenmiştir:\n• X bölgesinde hava sıcaklığı yüksek, hava molekülleri genleşerek yükselici hava hareketi yapmış, gökyüzünde bulutlar oluşmuş ve yağış ihtimali artmıştır.\n• Y bölgesinde hava sıcaklığı düşük, hava molekülleri yoğunlaşarak alçalıcı hava hareketi yapmış, hava açık ve bulutsuzdur.',
    questionPrompt: 'Bu bölgelerdeki basınç türleri ve rüzgârın esiş yönü hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'X: Alçak Basınç — Y: Yüksek Basınç — Rüzgâr Y\'den X\'e doğru eser.' },
      { key: 'B', text: 'X: Yüksek Basınç — Y: Alçak Basınç — Rüzgâr X\'ten Y\'ye doğru eser.' },
      { key: 'C', text: 'X: Yüksek Basınç — Y: Yüksek Basınç — Rüzgâr oluşmaz.' },
      { key: 'D', text: 'X: Alçak Basınç — Y: Alçak Basınç — Rüzgâr her iki yönde de eser.' }
    ],
    correctAnswer: 'A',
    explanation: 'Isınan havanın yükselmesiyle zemindeki hava seyrekleşir ve Alçak Basınç Alanı oluşur (X). Soğuyan havanın alçalmasıyla zeminde hava sıkışır ve Yüksek Basınç Alanı oluşur (Y). Rüzgâr daima yatay yönde yüksek basınçtan (soğuk Y) alçak basınca (sıcak X) doğru eser.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Basınç Merkezleri ve Rüzgâr',
    theme: 'Alçak ve Yüksek Basınç Alanları'
  },
  {
    id: 1212,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Yoğuşma Yeri: Gökyüzünde vs Yeryüzüne Yakın Su Damlacıkları',
    scenario: 'Fen bilimleri öğretmeni tahtaya hava olaylarını oluştukları yerlere göre iki gruba ayırmıştır:\n1. Grup: Yağmur, Kar, Dolu (Gökyüzünde/atmosferin yükseklerinde yoğuşma)\n2. Grup: Sis, Çiy, Kırağı (Yeryüzüne yakın yerlerde yoğuşma)',
    questionPrompt: 'İlkbahar sabahında bahçedeki çimenlerin üzerinde su damlacıklarının (çiy) oluşması ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Gökyüzündeki bulutlardan gece boyu hafif hafif yağmur yağmıştır.' },
      { key: 'B', text: 'Havadaki su buharının yeryüzüne yakın soğuk nesnelere temas ederek yoğuşmasıyla sıvı su damlacıkları haline gelmesidir.' },
      { key: 'C', text: 'Topraktan fışkıran yer altı sularıdır.' },
      { key: 'D', text: 'Havanın aniden donarak gaz halden doğrudan katı hale (kırağı) geçmesidir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Çiy; havadaki su buharının (nemin) gece havanın soğumasıyla yeryüzüne yakın nesneler, yapraklar ve araçlar üzerinde yoğuşarak su damlacıklarına dönüşmesidir. Yağmur gibi gökyüzünden yağmaz, yerde yoğuşur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Hava Olayı Oluşum Mekanizması',
    theme: 'Çiy, Kırağı ve Yağış Türleri'
  },
  {
    id: 1213,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Meteoroloji ve Klimatoloji Karşılaştırma Tablosu',
    scenario: 'Bir panoda iklim ve hava olayları özellikleri listelenmiştir:\nI. Dar bir bölgede kısa süre içinde etkili olan değişken hava şartlarıdır.\nII. Geniş bir bölgede uzun yıllar boyunca (35-40 yıl) değişmeyen ortalama hava koşullarıdır.\nIII. Bu alanda çalışan bilim insanına klimatolog denir.\nIV. Günün belirli saatlerinde yapılan anlık ölçümlere (tahminlere) dayanır.',
    questionPrompt: 'Bu özelliklerden hangileri "İklim", hangileri "Hava Olayları" kavramına aittir?',
    options: [
      { key: 'A', text: 'İklim: II ve III — Hava Olayları: I ve IV' },
      { key: 'B', text: 'İklim: I ve IV — Hava Olayları: II ve III' },
      { key: 'C', text: 'İklim: I ve III — Hava Olayları: II ve IV' },
      { key: 'D', text: 'Tüm özellikler iklime aittir.' }
    ],
    correctAnswer: 'A',
    explanation: 'İklim geniş alanda uzun yıllar süren kesinleşmiş ortalamalardır (II) ve uzmanı klimatologdur (III). Hava olayları ise dar alanda anlık/kısa süreli tahminlerdir (I ve IV).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kavram Eşleştirme',
    theme: 'İklim vs Hava Olayı Farkları'
  },
  {
    id: 1214,
    subTopicId: 'g8-u1-sub2',
    contextTitle: 'Sera Etkisi, Fosil Yakıtlar ve Küresel İklim Değişikliği',
    scenario: 'Sanayi Devrimi\'nden bu yana kömür, petrol ve doğal gaz gibi fosil yakıtların aşırı tüketilmesi atmosferdeki karbondioksit (CO2), metan (CH4) gibi sera gazlarının oranını tarihin en yüksek seviyesine çıkarmıştır. Bu gazlar Güneş\'ten gelip yeryüzünden yansıyan ısı ışınlarını tutarak sera etkisi yaratmakta ve Dünya\'nın ortalama sıcaklığını artırmaktadır.',
    questionPrompt: 'Küresel ısınmanın gelecekte yol açabileceği sonuçlar arasında aşağıdakilerden hangisi sayılamaz?',
    options: [
      { key: 'A', text: 'Kutup buzullarının erimesi ve deniz seviyelerinin yükselmesi' },
      { key: 'B', text: 'Şiddetli kuraklık, çölleşme ve içilebilir tatlı su kaynaklarının tükenmesi' },
      { key: 'C', text: 'Dünya genelinde mevsimlerin ve biyolojik çeşitliliğin tamamen kusursuz bir dengeye kavuşması' },
      { key: 'D', text: 'Kasırga, sel gibi aşırı ve öngörülemez hava olaylarının sıklığının artması' }
    ],
    correctAnswer: 'C',
    explanation: 'Küresel ısınma ekolojik dengeyi bozar, türlerin neslinin tükenmesine, buzulların erimesine ve doğal afetlerin artmasına yol açar. "Kusursuz bir dengeye kavuşması" kesinlikle söz konusu olamaz.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Çevre ve Küresel Sorunlar',
    theme: 'Küresel İklim Değişikliği ve Sera Etkisi'
  }
];
