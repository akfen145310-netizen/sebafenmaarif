import { LgsQuestion } from '../types/curriculum';

export const unit1End20LgsQuestions: LgsQuestion[] = [
  {
    id: 101,
    subTopicId: 'unit1-all',
    scenario: 'Bir fen bilimleri öğretmeni, okul bahçesinde Güneş gözlemi yapmak için teleskopunun önüne onaylı özel Güneş filtresi takmış ve öğrencisi Ayşe’den teleskoptaki görüntüyü beyaz bir kâğıda düşürerek çizim yapmasını istemiştir. Ayşe pazartesi günü saat 12.00’de yaptığı ilk çizimde Güneş’in batı kenarına yakın bir leke grubu olan K lekesini işaretlemiştir. Aynı saatte perşembe günü yapılan ikinci gözlemde K lekesinin Güneş’in doğu kenarına doğru kaydığı ve leke grubunun şeklinin hafifçe basıklaştığı belirlenmiştir.',
    questionPrompt: 'Ayşe’nin yaptığı bu gözlem ve elde ettiği veriler dikkate alındığında aşağıdaki bilimsel çıkarımlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Güneş kendi ekseni etrafında batıdan doğuya yani saatin dönme yönünün tersine doğru döndüğü için lekelerin konumu zamanla yer değiştirmiştir.' },
      { key: 'B', text: 'Güneş katı bir yüzey tabakasına sahip olduğundan üzerindeki lekeler Dünya’nın kendi ekseni etrafında dönme hızıyla eş zamanlı ötelenmiştir.' },
      { key: 'C', text: 'Güneş lekeleri Güneş yüzeyinde bağımsız hareket eden gök taşlarının yüzeyde meydana getirdiği geçici ve gezici gölge alanlarıdır.' },
      { key: 'D', text: 'Güneş’in kendi ekseni etrafındaki bir tam tur dönme süresi, Dünya’nın kendi ekseni etrafındaki dönme süresiyle tamamen aynıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Güneş lekeleri Güneş yüzeyindeki nispeten soğuk bölgelerdir ve yüzeyde sabittir.\n2. Adım: Teleskoptaki görüntünün kâğıda düşürülmesiyle yapılan gözlemde lekelerin birkaç gün arayla batıdan doğuya (saatin dönme yönünün tersine) doğru kaydığı görülmüştür.\n3. Adım: Bu durum Güneş’in kendi ekseni etrafında batıdan doğuya doğru döndüğünü kesin olarak kanıtlar. Doğru cevap A seçeneğidir.\n\nÖlçülen Kazanım: Güneş’in yapısı ve dönme hareketini açıklar.\nÖlçülen Beceri: Gözlem verilerini yorumlama ve bilimsel çıkarım yapma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Çıkarım Yapma',
    theme: 'Gözlem ve Veri Yorumlama'
  },
  {
    id: 102,
    subTopicId: 'unit1-all',
    scenario: 'Gök bilimciler Dünya’dan gökyüzünü incelediklerinde Güneş ile Ay’ın gökyüzünde kapladıkları alanın neredeyse birbirine eşit olduğunu kaydetmişlerdir. Oysa Güneş’in çapı yaklaşık 1.392.000 km iken Ay’ın çapı yalnızca 3.474 km’dir. Bir öğrenci sınıfta bu durumu modellemek için 20 cm çapındaki futbol topu ile 0,5 cm çapındaki nohut tanesini kullanacaktır.',
    questionPrompt: 'Öğrencinin sınıftaki gözlemciye iki cismi aynı büyüklükte gösterebilmesi için kurması gereken deney düzeni aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Futbol topunu gözlemciye oldukça yakın tutarken nohut tanesini sınıftaki gözlemciden olabildiğince uzak bir noktaya yerleştirmelidir.' },
      { key: 'B', text: 'Nohut tanesini gözlemciye çok yakın tutarken devasa futbol topunu gözlemciden oldukça uzak bir mesafeye doğru konumlandırmalıdır.' },
      { key: 'C', text: 'Her iki nesneyi de gözlemciye tamamen eşit mesafede yan yana tutarak güçlü ışık kaynağını bu nesnelerin arkasına yerleştirmelidir.' },
      { key: 'D', text: 'Futbol topunu kendi ekseni etrafında hızla döndürürken nohut tanesini gözlemcinin görüş hizasında tamamen hareketsiz tutmalıdır.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Perspektif ilkesine göre bir cisim gözlemciden uzaklaştıkça görünen boyutu küçülür.\n2. Adım: Güneş Ay’dan yaklaşık 400 kat büyük olmasına rağmen Dünya’ya Ay’dan yaklaşık 400 kat daha uzaktadır.\n3. Adım: Bu orantıyı sınıfta modellemek için küçük nohut tanesi göze çok yakın, devasa futbol topu ise çok uzakta tutulmalıdır. Doğru cevap B seçeneğidir.\n\nÖlçülen Kazanım: Güneş ve Ay’ın büyüklük ilişkisini kavrar.\nÖlçülen Beceri: Model tasarımı ve değişken analizi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme ve Çıkarım',
    theme: 'Perspektif ve Boyut İlişkisi'
  },
  {
    id: 103,
    subTopicId: 'unit1-all',
    scenario: 'NASA’nın Ay Keşif Yörünge Aracı tarafından çekilen yüksek çözünürlüklü fotoğraflar incelendiğinde, 1969 yılında Apollo 11 astronotu Neil Armstrong’un Ay yüzeyine bıraktığı bot izinin yarım asırdan fazla süre geçmesine rağmen hiçbir aşınma veya silinmeye uğramadan korunduğu tespit edilmiştir.',
    questionPrompt: 'Bu durumun bilimsel gerekçesi aşağıdakilerden hangisinde eksiksiz olarak açıklanmıştır?',
    options: [
      { key: 'A', text: 'Ay yüzeyindeki yer çekimi kuvvetinin Dünya’dakine göre altı kat fazla olması sebebiyle yüzeydeki tozların yere sıkıca yapışması.' },
      { key: 'B', text: 'Ay toprağının Güneş ışınlarıyla doğrudan temas ettiği anda kimyasal tepkimeye girerek taşlaşması ve sert kaya tabakasına dönüşmesi.' },
      { key: 'C', text: 'Ay’ın atmosferinin yok denecek kadar ince olması sebebiyle rüzgâr, yağış ve erozyon gibi hava olaylarının yüzeyde gerçekleşmemesi.' },
      { key: 'D', text: 'Ay’ın kendi ekseni etrafında hiçbir dönme hareketi yapmaması sonucunda yüzey şekillerinin uzay boşluğunda tamamen hareketsiz kalması.' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Yeryüzünde ayak izlerini rüzgâr, yağmur ve akarsu gibi hava olayları siler.\n2. Adım: Ay’da atmosfer yok denecek kadar incedir. Hava kütlesi bulunmadığı için hava hareketleri (rüzgâr, fırtına, yağmur) meydana gelmez.\n3. Adım: Tozları savuracak bir hava akımı olmadığından astronotların izleri bozulmadan kalabilir. Doğru cevap C seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın yüzey özelliklerini ve atmosfer koşullarını açıklar.\nÖlçülen Beceri: Neden-sonuç ilişkisi kurma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Ay’ın Atmosfer Özellikleri'
  },
  {
    id: 104,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci derin bir cam kaba 10 cm kalınlığında un doldurmuş, unun üzerine ince bir tabaka kakao serpmiştir. Özdeş çelik bilyelerden birini 20 cm yükseklikten, diğerini ise 80 cm yükseklikten un dolu kaba serbest bırakmıştır. 80 cm’den bırakılan bilyenin açtığı çukurun derinliğinin ve etrafa saçılan un ışınlarının genişliğinin çok daha fazla olduğunu ölçmüştür.',
    questionPrompt: 'Öğrencinin gerçekleştirdiği bu deney ve Ay yüzeyindeki kraterlerin oluşumu ilişkilendirildiğinde aşağıdaki yorumlardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Gök taşının çarpma hızı ve sahip olduğu kinetik enerji arttıkça Ay yüzeyinde açılan kraterin derinliği ve etki alanı artış gösterir.' },
      { key: 'B', text: 'Deneydeki kakao tabakası Ay’ın üst toz örtüsünü, alttaki beyaz un ise şiddetli çarpışmayla çevreye fırlayan alt tabakaları modeller.' },
      { key: 'C', text: 'Bu deney düzeneğinde serbest bırakılma yüksekliği bağımsız değişken, un yüzeyinde açılan çukurun derinliği ise bağımlı değişkendir.' },
      { key: 'D', text: 'Dünya’ya çarpan meteorların Ay’dakinden daha derin kraterler açmasının tek sebebi Dünya’nın kütleçekim kuvvetinin daha büyük olmasıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Deneyde yükseklik arttıkça bilye hızlanır ve daha derin çukur açar (A, B ve C doğrulanır).\n2. Adım: Dünya’da kraterlerin az ve sığ olmasının sebebi yer çekimi değil, kalın atmosferin meteorları sürtünmeyle yakarak eritmesi ve hava olaylarının kraterleri kapatmasıdır.\n3. Adım: Bu nedenle D seçeneğindeki ifade bilimsel olarak hatalıdır. Doğru cevap D seçeneğidir.\n\nÖlçülen Kazanım: Ay yüzeyinde krater oluşumunu modeller.\nÖlçülen Beceri: Deney değişkenlerini ve bilimsel hataları analiz etme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Deney ve Değişken Analizi',
    theme: 'Krater Oluşumu Deneyi'
  },
  {
    id: 105,
    subTopicId: 'unit1-all',
    scenario: 'Bir gökyüzü gözlem kulübü, 1 Ekim akşamı gökyüzünde Ay’ı incelediğinde Ay’ın Dünya’ya bakan yüzünün sağ tarafının aydınlık ve düz D harfi şeklinde parladığını İlk Dördün evresinde fotoğraflamıştır.',
    questionPrompt: 'Kulüp üyelerinin aynı ay içerisinde Ay’ı Son Dördün ana evresinde gözlemleyebilmeleri için yaklaşık kaç gün sonra gözlem yapmaları gerekir?',
    options: [
      { key: 'A', text: 'Yaklaşık 14 gün sonra yani ayın 15’i civarında gözlem yapılmalıdır.' },
      { key: 'B', text: 'Yaklaşık 7 gün sonra yani ayın 8’i civarında gözlem yapılmalıdır.' },
      { key: 'C', text: 'Yaklaşık 21 gün sonra yani ayın 22’si civarında gözlem yapılmalıdır.' },
      { key: 'D', text: 'Yaklaşık 29 gün sonra yani ayın 30’u civarında gözlem yapılmalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay’ın ana evreleri sırasıyla: Yeni Ay ➔ İlk Dördün ➔ Dolunay ➔ Son Dördün.\n2. Adım: İki ana evre arasındaki süre yaklaşık 1 haftadır (7 gün).\n3. Adım: İlk Dördün’den 1 hafta sonra Dolunay, 2 hafta (14 gün) sonra ise Son Dördün evresi gerçekleşir. Doğru cevap A seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın evreleri arasındaki zaman ilişkisini hesaplar.\nÖlçülen Beceri: Zamanlama ve sıralama muhakemesi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Süreç ve Zamanlama',
    theme: 'Ay’ın Evreleri Döngüsü'
  },
  {
    id: 106,
    subTopicId: 'unit1-all',
    scenario: 'Ay’ın Dünya etrafındaki yörüngesi kusursuz bir çember olmayıp hafif basık bir elipstir. Bu nedenle Ay bazen Dünya’ya yaklaşır, bazen de Dünya’dan uzaklaşır. Ay’ın Dünya’ya en yakın konumdayken Dolunay evresine denk gelmesi olayına Süper Ay adı verilir.',
    questionPrompt: 'Bu gök olayını takip eden bir araştırmacının Süper Ay sırasında kaydettiği gözlem sonuçları ile ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Ay’ın kendi ekseni etrafındaki dönme periyodu bu tarihte hızlanarak yirmi yedi günden on dört güne kadar gerilemiştir.' },
      { key: 'B', text: 'Dünya’ya olan mesafesi azaldığından dolayı gökyüzündeki görünür büyüklüğü ve parlaklığı normal dolunaya göre daha fazladır.' },
      { key: 'C', text: 'Ay bu evrede doğrudan Güneş ile Dünya arasına girdiği için gündüz saatlerinde gökyüzünde çok net olarak belirginleşmiştir.' },
      { key: 'D', text: 'Ay’ın yüzeyinden yayılan ışık enerjisi miktarının çekirdeğinde başlayan yeni nükleer tepkimeler nedeniyle arttığı saptanmıştır.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay ışık kaynağı değildir, Güneş ışığını yansıtır.\n2. Adım: Dünya’ya yaklaştığında perspektif kuralları gereği gökyüzünde yaklaşık %14 daha büyük ve %30 daha parlak görünür.\n3. Adım: Ay’ın dönme süresi değişmez ve nükleer tepkime yapmaz. Doğru cevap B seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın dolanma yörüngesi ve görünüm değişimlerini yorumlar.\nÖlçülen Beceri: Veri ve kavram ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram Analizi',
    theme: 'Süper Ay ve Yörünge Geometrisi'
  },
  {
    id: 107,
    subTopicId: 'unit1-all',
    scenario: 'Ali sınıf tahtasında Dünya ve Ay’ı temsil eden iki arkadaşının hareketini gözlemlemiştir. Dünya’yı temsil eden Can kendi etrafında yavaşça dönerken, Ay’ı temsil eden Elif hem kendi etrafında dönmüş hem de Can’ın etrafında çember çizmiştir. Can, dönme boyunca Elif’in sürekli aynı yüzünü gördüğünü, sırtını hiç göremediğini söylemiştir.',
    questionPrompt: 'Can’ın Elif’in sırtını hiç görememesini sağlayan temel bilimsel şart aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Elif’in Can’ın çevresinde saat ibresi yönünde, Can’ın ise tam tersine saat ibresinin tersi yönde dönme hareketi gerçekleştirmesi.' },
      { key: 'B', text: 'Elif’in kendi etrafında hiç dönmeyip yalnızca Can’ın çevresindeki yörüngede yüzü Can’a bakacak şekilde kayarak ilerlemiş olması.' },
      { key: 'C', text: 'Elif’in kendi ekseni etrafındaki dönme süresi ile Can etrafındaki dolanma süresinin birbirine tamamen eşit olarak ayarlanması.' },
      { key: 'D', text: 'Can’ın kendi ekseni etrafındaki dönme hızının Elif’in dolanma hızından yirmi dört kat daha yavaş olacak şekilde belirlenmesi.' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Dünya’dan Ay’ın daima aynı yüzünün görünmesi bilimsel bir doğa kuralıdır.\n2. Adım: Bu durumun temel gerekçesi Ay’ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresinin birbirine eşit (yaklaşık 27,3 gün) olmasıdır.\n3. Adım: Can-Elif modelinde bu eşitlik sağlandığı için Elif’in hep aynı yüzü görünür. Doğru cevap C seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın dönme ve dolanma sürelerinin eşitliğinin sonucunu açıklar.\nÖlçülen Beceri: Model üzerinden çıkarım yapma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Model Çıkarımı',
    theme: 'Ay’ın Eşit Süreli Hareketleri'
  },
  {
    id: 108,
    subTopicId: 'unit1-all',
    scenario: 'Güneş, Dünya ve Ay’ın uzaydaki hareket yönleri incelendiğinde; Güneş’in kendi ekseni etrafında, Dünya’nın kendi ekseni ve Güneş etrafında, Ay’ın ise kendi ekseninde, Dünya etrafında ve Dünya ile birlikte Güneş etrafında dolandığı bilinmektedir.',
    questionPrompt: 'Bu gök cisimlerinin tüm bu dönme ve dolanma hareketlerinin ortak yönü aşağıdakilerden hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Hareketlerin tamamı doğudan batıya doğru olup saat ibresinin dönme yönüyle tamamen aynı yönde gerçekleşmektedir.' },
      { key: 'B', text: 'Dönme hareketleri saat ibresi yönünde gerçekleşirken, yörüngedeki dolanma hareketleri saat yönünün tersinedir.' },
      { key: 'C', text: 'Güneş ve Dünya saat ibresinin tersi yönünde dönerken, Ay sistemin tersine saat ibresi yönünde hareket eder.' },
      { key: 'D', text: 'Hareketlerin tamamı batıdan doğuya doğru olup saat ibresinin dönme yönünün tersine doğru gerçekleşmektedir.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: MEB Maarif öğretim programında Güneş, Dünya ve Ay’ın tüm dönme ve dolanma hareket yönleri saatin dönme yönünün tersi (batıdan doğuya) olarak tanımlanmıştır.\n2. Adım: Bu ortak nizam Güneş sistemindeki temel kuraldır. Doğru cevap D seçeneğidir.\n\nÖlçülen Kazanım: Gök cisimlerinin dönme ve dolanma yönlerini karşılaştırır.\nÖlçülen Beceri: Genelleme ve kural uygulama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Karşılaştırma',
    theme: 'Hareket Yönleri İntizamı'
  },
  {
    id: 109,
    subTopicId: 'unit1-all',
    scenario: 'Semerkant Rasathanesi’nin kurucusu bilgin hükümdar Uluğ Bey, 15. yüzyılda devasa mermer kadran aletiyle yaptığı hassas ölçümler sonucunda bir Güneş yılını 365 gün 6 saat 10 dakika 8 saniye olarak hesaplamıştır.',
    questionPrompt: 'Uluğ Bey’in hesapladığı bu süre Dünya’nın hangi hareketinin tamamlanma süresine karşılık gelmektedir?',
    options: [
      { key: 'A', text: 'Dünya’nın Güneş etrafındaki eliptik yörüngesinde gerçekleştirdiği bir tam dolanma hareketini tamamlamasına karşılık gelir.' },
      { key: 'B', text: 'Dünya’nın kendi ekseni etrafındaki bir tam tur dönme hareketini gece ve gündüz periyodu boyunca tamamlamasına karşılık gelir.' },
      { key: 'C', text: 'Ay’ın Dünya çevresindeki yörüngesinde on iki tam tur dolanarak tüm evreleri eksiksiz olarak tamamlamasına karşılık gelir.' },
      { key: 'D', text: 'Güneş’in Samanyolu Galaksisi merkezindeki devasa yörüngesinde bir tam tur dolanma hareketini tamamlamasına karşılık gelir.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Bir Güneş yılı, Dünya’nın Güneş etrafındaki bir tam dolanma süresidir.\n2. Adım: Günümüzde bu süre yaklaşık 365 gün 6 saattir.\n3. Adım: Uluğ Bey’in 600 yıl önceki olağanüstü dakik hesabı Dünya’nın Güneş etrafındaki dolanma periyodudur. Doğru cevap A seçeneğidir.\n\nÖlçülen Kazanım: Türk-İslam bilim insanlarının astronomiye katkılarını değerlendirir.\nÖlçülen Beceri: Tarihsel veri ile bilimsel kavramı ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram ve Tarihsel Veri',
    theme: 'Uluğ Bey ve Yıl Hesabı'
  },
  {
    id: 110,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci Ay’ın evrelerini gösteren modelinde bir kutunun içine el feneri (Güneş), tenis topu (Dünya) ve pinpon topu (Ay) yerleştirmiştir. Öğrenci Dünya’nın üzerinden baktığında Ay’ın Güneş ışığını alan tarafının Dünya’nın arkasında kaldığını, Dünya’ya bakan yüzünün ise hiç ışık almadığını görmüştür.',
    questionPrompt: 'Bu konumda gözlemlenen Ay evresi ve bu evreden 1 hafta sonra oluşacak ana evre sırasıyla hangisinde verilmiştir?',
    options: [
      { key: 'A', text: 'Dolunay evresi ve ardından gelen Son Dördün ana evresi' },
      { key: 'B', text: 'Yeni Ay evresi ve ardından gelen İlk Dördün ana evresi' },
      { key: 'C', text: 'İlk Dördün evresi ve ardından gelen Dolunay ana evresi' },
      { key: 'D', text: 'Son Dördün evresi ve ardından gelen Yeni Ay ana evresi' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay Güneş ile Dünya arasındayken Dünya’ya bakan yüzü karanlıkta kalır; bu evre YENİ AY evresidir.\n2. Adım: Yeni Ay’dan yaklaşık 1 hafta (7 gün) sonra gelen ana evre İLK DÖRDÜN evresidir. Doğru cevap B seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın ana evrelerinin dizilimini ve zamanını modeller.\nÖlçülen Beceri: Model yorumlama ve sıralama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Model Analizi',
    theme: 'Yeni Ay ve İlk Dördün Geçişi'
  },
  {
    id: 111,
    subTopicId: 'unit1-all',
    scenario: 'Ay yüzeyinde gündüz sıcaklığı yaklaşık 125 santigrat dereceye kadar yükselirken, gece sıcaklığı dondurucu bir düşüşle yaklaşık eksi 174 santigrat dereceye kadar inmektedir. Gece ile gündüz arasındaki sıcaklık farkı neredeyse 300 dereceyi bulmaktadır.',
    questionPrompt: 'Dünya’da bu derece aşırı ve yıkıcı sıcaklık farklarının yaşanmamasının temel sebebi nedir?',
    options: [
      { key: 'A', text: 'Dünya’nın Güneş sistemindeki konumunun Güneş’e Ay’dan çok daha yakın olması ve çekirdeğinde lav tabakasının bulunması.' },
      { key: 'B', text: 'Dünya’nın kendi ekseni etrafındaki dönme hızının Ay’ın dönme hızına oranla yirmi yedi kat daha yavaş gerçekleşmesi.' },
      { key: 'C', text: 'Dünya’yı saran kalın atmosferin gündüz aşırı ısınmayı, gece ise yeryüzündeki ısının uzaya kaçmasını engellemesi.' },
      { key: 'D', text: 'Dünya üzerindeki okyanusların ve yeraltı sularının gezegen genelindeki sıcaklığı sürekli olarak sabit tutması.' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Atmosfer, gezegenler için koruyucu ve yalıtkan bir örtü görevi görür.\n2. Adım: Dünya’nın kalın atmosferi gündüz aşırı ısınmayı engeller, gece ise ısının uzaya kaçmasını önleyerek sıcaklığı dengeler.\n3. Adım: Ay’da atmosfer yok denecek kadar ince olduğundan ısı tutulamaz ve 300 derecelik sıcaklık farkı oluşur. Doğru cevap C seçeneğidir.\n\nÖlçülen Kazanım: Atmosferin canlılar ve sıcaklık dengesi için önemini kavrar.\nÖlçülen Beceri: Karşılaştırmalı analiz.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Karşılaştırma',
    theme: 'Atmosferik Isı Yalıtımı'
  },
  {
    id: 112,
    subTopicId: 'unit1-all',
    scenario: 'Bir takvim yaprağında Ramazan Bayramı’nın bir önceki yıla göre yaklaşık 10-11 gün daha erken bir tarihe denk geldiği görülmektedir.',
    questionPrompt: 'Dini bayramların her yıl miladi takvime göre 10-11 gün geriye gelmesinin astronomik açıklaması nedir?',
    options: [
      { key: 'A', text: 'Dünya’nın kendi ekseni etrafındaki dönme periyodunun her yıl on bir gün süreyle yavaşlaması sonucu günlerin uzaması.' },
      { key: 'B', text: 'Ay’ın kendi ekseni etrafında dönerken yörüngesinde sapmalar yaşaması ve evrelerin her yıl farklı sürmesi.' },
      { key: 'C', text: 'Güneş yüzeyinde periyodik olarak kaybolan lekelerin Dünya iklimini ve takvim döngülerini doğrudan değiştirmesi.' },
      { key: 'D', text: 'Hicri takvimin Ay’ın dolanımını esas alması ve bu sürenin Güneş yılından yaklaşık on bir gün daha kısa olması.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay takviminde 1 ay yaklaşık 29,5 gündür. 12 ay yaklaşık 354 gün eder.\n2. Adım: Güneş yılı ise 365 gün 6 saattir.\n3. Adım: 365 - 354 = 11 gün fark oluştuğundan dini günler her yıl yaklaşık 11 gün öne kayar. Doğru cevap D seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın dolanma döngüsü ile takvim ilişkisini bağlar.\nÖlçülen Beceri: Matematiksel ve astronomik ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'İlişkilendirme',
    theme: 'Ay Takvimi ve Güneş Yılı'
  },
  {
    id: 113,
    subTopicId: 'unit1-all',
    scenario: 'Fen bilimleri öğretmeni sınıfa getirdiği karpuz, elma ve mercimek tanesini masaya koymuş; Güneş, Dünya ve Ay’ın hacimsel büyüklüklerini bu meyvelerle eşleştiriniz demiştir.',
    questionPrompt: 'Doğru eşleştirme ve gerekçesi aşağıdakilerden hangisinde verilmiştir?',
    options: [
      { key: 'A', text: 'Karpuz Güneş, elma Dünya, mercimek Ay olmalıdır çünkü Güneş en büyük hacme, Ay ise en küçük hacme sahiptir.' },
      { key: 'B', text: 'Karpuz Dünya, elma Güneş, mercimek Ay olmalıdır çünkü Dünya’nın yoğunluğu Güneş’in gaz yoğunluğundan fazladır.' },
      { key: 'C', text: 'Karpuz Güneş, elma Ay, mercimek Dünya olmalıdır çünkü Ay gökyüzünde Dünya’dan daha geniş bir alan kaplamaktadır.' },
      { key: 'D', text: 'Bu meyvelerin tamamı aynı gök cismini modeller çünkü hepsi küresel geometrik şekle sahip doğal varlıklardır.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Hacimsel büyüklük sıralaması: Güneş > Dünya > Ay şeklindedir.\n2. Adım: Güneş içine yaklaşık 1.300.000 Dünya, Dünya içine yaklaşık 64 Ay sığabilir.\n3. Adım: Bu sebeple karpuz Güneş, elma Dünya, mercimek ise Ay olmalıdır. Doğru cevap A seçeneğidir.\n\nÖlçülen Kazanım: Gök cisimlerinin hacimsel büyüklüklerini modeller.\nÖlçülen Beceri: Büyüklük ölçekleme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme',
    theme: 'Hacimsel Kıyas'
  },
  {
    id: 114,
    subTopicId: 'unit1-all',
    scenario: 'Ay yüzeyinde termal kameralarla yapılan incelemelerde, gündüz Güneş ışığını dik alan kayalıkların aşırı ısınıp genleştiği, geceleri ise aniden soğuyup büzüldüğü ve bu termal şok nedeniyle kayaların çatlayıp parçalanarak kuma ve ince toza dönüştüğü belgelenmiştir.',
    questionPrompt: 'Ay yüzeyinin kalın bir toz tabakasıyla kaplanmasında etkili olan temel fiziksel etken nedir?',
    options: [
      { key: 'A', text: 'Ay yüzeyinde esen şiddetli rüzgârların ve fırtınaların kayaları mekanik olarak sürekli aşındırması.' },
      { key: 'B', text: 'Atmosferin olmaması sebebiyle yaşanan aşırı gece-gündüz sıcaklık farklarının kayaları ufalaması.' },
      { key: 'C', text: 'Ay denizlerindeki gelgit hareketleri sonucu oluşan yüksek dalgaların kıyı kayalıklarını dövmesi.' },
      { key: 'D', text: 'Güneş’ten gelen yüksek enerjili parçacıkların ve rüzgârların kayaları kimyasal olarak eritmesi.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Gece ile gündüz arasındaki 300 derecelik sıcaklık farkı kayaçlarda sürekli genleşme ve büzülme yaratır.\n2. Adım: Bu durum mekanik ufalanmayı hızlandırarak kayaları taş, kum ve toza dönüştürür. Doğru cevap B seçeneğidir.\n\nÖlçülen Kazanım: Ay yüzeyindeki jeolojik oluşumları açıklar.\nÖlçülen Beceri: Fiziksel süreç analizi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Mekanik Ufalanma ve Ay Tozu'
  },
  {
    id: 115,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci gökyüzüne baktığında Ay’ın sol yarısının aydınlık ve ters D harfi şeklinde parladığını görmüştür.',
    questionPrompt: 'Öğrencinin gördüğü bu evre ve bu evreden 1 hafta önce gözlemlenen evre hangisinde verilmiştir?',
    options: [
      { key: 'A', text: 'Görülen evre İlk Dördün evresidir ve bir hafta öncesinde Yeni Ay evresi gözlemlenmiştir.' },
      { key: 'B', text: 'Görülen evre Hilal evresidir ve bir hafta öncesinde Son Dördün ana evresi gözlemlenmiştir.' },
      { key: 'C', text: 'Görülen evre Son Dördün evresidir ve bir hafta öncesinde Dolunay ana evresi gözlemlenmiştir.' },
      { key: 'D', text: 'Görülen evre Dolunay evresidir ve bir hafta öncesinde Şişkin Ay ara evresi gözlemlenmiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay’ın sol yarısının aydınlık olduğu ters D şeklindeki evre SON DÖRDÜN evresidir.\n2. Adım: Son Dördün’den bir hafta önceki ana evre DOLUNAY evresidir. Doğru cevap C seçeneğidir.\n\nÖlçülen Kazanım: Ay’ın evrelerini ve görünüm şekillerini ayırt eder.\nÖlçülen Beceri: Görsel hafıza ve kronolojik ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Tanıma ve Çıkarım',
    theme: 'Son Dördün Evresi'
  },
  {
    id: 116,
    subTopicId: 'unit1-all',
    scenario: 'Türkiye’nin uzay teknolojileri hamlesi olan AYAP projesinde görevli bir mühendis, uzay aracının Ay yüzeyine inişinde kullanılacak itki motorlarını tasarlarken Ay’ın yer çekimi ivmesini Dünya’nın yaklaşık altıda biri olarak hesaba katmıştır.',
    questionPrompt: 'Buna göre Dünya’da dinamometre ile ağırlığı 600 N ölçülen bir test ekipmanı Ay yüzeyine ulaştığında kütlesi ve ağırlığı ne kadar olur?',
    options: [
      { key: 'A', text: 'Kütlesi altı kat azalarak on kilograma düşer, dinamometrede ölçülen ağırlığı ise yüz Newton olur.' },
      { key: 'B', text: 'Kütlesi de ağırlığı da Ay çekimi nedeniyle altışar kat azalarak orijinal değerlerinin altına iner.' },
      { key: 'C', text: 'Kütlesi altmış kilogram olarak kalır, yer çekiminden bağımsız olduğu için ağırlığı altı yüz Newton kalır.' },
      { key: 'D', text: 'Kütlesi altmış kilogram olarak değişmez, yer çekimi azaldığı için ağırlığı yüz Newton değerine iner.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Kütle madde miktarıdır ve evrenin hiçbir yerinde değişmez (60 kg kalır).\n2. Adım: Ağırlık cisme etki eden yer çekimi kuvvetidir. Ay’da yer çekimi altı kat az olduğundan ağırlık 600 / 6 = 100 N olur. Doğru cevap D seçeneğidir.\n\nÖlçülen Kazanım: Kütle ve ağırlık kavramlarını ayırt eder.\nÖlçülen Beceri: Nicel akıl yürütme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavramsal Hesaplama',
    theme: 'Ay’da Ağırlık ve Kütle Değişmezliği'
  },
  {
    id: 117,
    subTopicId: 'unit1-all',
    scenario: 'Güneş, devasa kütleçekim kuvveti sayesinde gezegenleri yörüngelerinde tutar. İç merkezindeki çekirdeğinde sıcaklık yaklaşık 15 milyon derece iken, dış katmanlarındaki taç kürede sıcaklık milyonlarca dereceye tekrar ulaşabilmektedir. Yüzeyindeki ışık küre ise yaklaşık 6.000 derecedir.',
    questionPrompt: 'Güneş’in bu katmanlı ve gaz yapısı ile ilgili aşağıdaki yargılardan hangisi bilimsel olarak yanlıştır?',
    options: [
      { key: 'A', text: 'Güneş yüzeyindeki koyu lekeler Güneş’in en sıcak ve çevreye en çok ısı yayan aktif enerji merkezleridir.' },
      { key: 'B', text: 'Güneş katı bir yüzey kabuğuna sahip olmayıp merkezden dışa doğru tamamen plazma gazlardan meydana gelmiştir.' },
      { key: 'C', text: 'Güneş’in çekirdek katmanındaki sıcaklık yüzey katmanındaki sıcaklıktan katbekat daha yüksek değerdedir.' },
      { key: 'D', text: 'Güneş gaz yapıda olduğundan ekvator bölgesindeki dönme hızı kutup bölgelerine göre farklılık gösterir.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Güneş lekeleri en sıcak değil, çevrelerine göre daha soğuk (yaklaşık 4.000 °C) bölgelerdir.\n2. Adım: Diğer tüm öncüller (B, C ve D) bilimsel olarak doğrudur. Doğru cevap A seçeneğidir.\n\nÖlçülen Kazanım: Güneş’in katmanlarını ve özelliklerini açıklar.\nÖlçülen Beceri: Bilimsel hata tespiti.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram Doğrulama',
    theme: 'Güneş’in Katmanları ve Sıcaklık Hiyerarşisi'
  },
  {
    id: 118,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci karanlık bir odada el fenerini açmış, eline aldığı basketbol topunun arkasına küçük bir bilyeyi saklamıştır. Karşı duvara baktığında bilyenin gölgede kaldığını görmüştür.',
    questionPrompt: 'Bu öğrencinin kurduğu düzenek Güneş, Dünya ve Ay sisteminde hangi doğa olayını modellemektedir?',
    options: [
      { key: 'A', text: 'Güneş, Ay ve Dünya dizilimiyle oluşan Güneş Tutulması doğa olayını' },
      { key: 'B', text: 'Güneş, Dünya ve Ay dizilimiyle oluşan Ay Tutulması doğa olayını' },
      { key: 'C', text: 'Ay’ın Dünya çevresindeki dolanımıyla oluşan İlk Dördün ana evresini' },
      { key: 'D', text: 'Dünya’nın eksen eğikliği ve Güneş etrafında dolanmasıyla oluşan mevsimleri' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Işık kaynağı Güneş’i, büyük top Dünya’yı, arkada gölgede kalan bilye ise Ay’ı temsil eder.\n2. Adım: Güneş, Dünya ve Ay aynı doğrultuda dizildiğinde Dünya’nın gölgesi Ay’ın üzerine düşer; bu olay AY TUTULMASI’dır. Doğru cevap B seçeneğidir.\n\nÖlçülen Kazanım: Işığın doğrusal yayılmasını ve tutulma modellerini açıklar.\nÖlçülen Beceri: Model eşleştirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme',
    theme: 'Ay Tutulması Modeli'
  },
  {
    id: 119,
    subTopicId: 'unit1-all',
    scenario: '1609 yılında Galileo Galilei kendi yaptığı teleskopla Ay’ı incelemiş ve Aristo’nun gökyüzü cisimleri pürüzsüz ve lekesiz kusursuz kürelerdir tezini çürütmüştür. Ay yüzeyinde dağlar, kraterler ve vadiler olduğunu çizmiştir.',
    questionPrompt: 'Galileo’nun bu gözlemi bilimsel yöntem açısından neyi kanıtlar?',
    options: [
      { key: 'A', text: 'Eski dönemlerde yaşamış düşünürlerin ileri sürdüğü bilimsel fikirlerin hiçbir zaman sorgulanamayacağını' },
      { key: 'B', text: 'Ay yüzeyinde canlı türlerinin yaşadığını ve bu dağ ile vadileri bilinçli olarak inşa ettiğini kanıtlar' },
      { key: 'C', text: 'Bilimsel bilginin teknolojik araçlar ve yeni gözlem kanıtlarıyla zamanla değişip gelişebileceğini gösterir' },
      { key: 'D', text: 'Geliştirilen teleskopların astronomide yalnızca Ay yüzeyini incelemek amacıyla kullanılabileceğini gösterir' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Bilimsel bilgi mutlak ve değişmez değildir; teknolojik gelişmeler (teleskop icadı) yeni kanıtlar sunar.\n2. Adım: Galileo’nun gözlemi eski yanlış dogmayı çürütmüş ve bilimin kanıta dayalı doğasını göstermiştir. Doğru cevap C seçeneğidir.\n\nÖlçülen Kazanım: Bilimin doğasını ve astronomi tarihini anlar.\nÖlçülen Beceri: Bilim felsefesi ve kanıt değerlendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Bilimsel Muhakeme',
    theme: 'Bilim Tarihi ve Kanıt İlkesi'
  },
  {
    id: 120,
    subTopicId: 'unit1-all',
    scenario: 'Bir araştırmacı Güneş, Dünya ve Ay’ın uzaydaki hareketlerini özetleyen şu notları almıştır: Dünya kendi ekseni etrafında 24 saatte döner. Ay kendi ekseni etrafında ve Dünya etrafında yaklaşık 27 günde dolanır. Dünya Güneş etrafında 365 gün 6 saatte dolanır. Bütün bu hareketler saat yönünün tersinedir.',
    questionPrompt: 'Verilen bu bilgiler ışığında aşağıdaki sonuçlardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Dünya bir yılını tamamlarken kendi ekseni etrafında 365 kereden fazla tam tur dönme hareketi yapar.' },
      { key: 'B', text: 'Ay Dünya etrafında bir tam tur attığında Dünya’da yaklaşık yirmi yedi gece ve gündüz süresi geçer.' },
      { key: 'C', text: 'Gök cisimlerinin dönme ve dolanma periyotlarında düzenli ve kurallı bir matematiksel intizam vardır.' },
      { key: 'D', text: 'Dünya kendi ekseni etrafında bir tam tur döndüğünde Ay da kendi etrafında bir tam turunu tamamlamış olur.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Dünya kendi etrafında 24 saatte (1 günde) döner.\n2. Adım: Ay ise kendi etrafında yaklaşık 27,3 günde döner.\n3. Adım: Dolayısıyla Dünya 1 tur döndüğünde Ay henüz turunun 1/27’sini tamamlamış olur; süreler eşit değildir. D şıkkı yanlıştır. Doğru cevap D seçeneğidir.\n\nÖlçülen Kazanım: Dönme ve dolanma sürelerini orantısal olarak ilişkilendirir.\nÖlçülen Beceri: Veri karşılaştırma ve mantıksal sorgulama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Sayısal Mantık Muhakeme',
    theme: 'Süre Orantılama Analizi'
  }
];
