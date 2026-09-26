import { LgsQuestion } from '../types/curriculum';

export const unit1End20LgsQuestions: LgsQuestion[] = [
  {
    id: 101,
    subTopicId: 'unit1-all',
    scenario: 'Bir fen bilimleri öğretmeni, okul bahçesinde Güneş gözlemi yapmak için teleskopunun önüne onaylı özel Güneş filtresi takmış ve öğrencisi Ayşe’ye teleskoptaki görüntüyü beyaz bir kâğıda düşürerek çizim yapmasını istemiştir. Ayşe pazartesi günü saat 12.00’de yaptığı ilk çizimde Güneş’in batı kenarına yakın bir leke grubu (K lekesi) işaretlemiştir. Aynı saatte perşembe günü yapılan ikinci gözlemde K lekesinin Güneş’in doğu kenarına doğru kaydığı ve leke grubunun şeklinin hafifçe basıklaştığı belirlenmiştir.',
    questionPrompt: 'Ayşe’nin yaptığı bu gözlem ve elde ettiği veriler dikkate alındığında aşağıdaki bilimsel çıkarımlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Güneş katı bir yapıya sahip olduğundan yüzeyindeki lekeler Dünya’nın dönme hızıyla aynı oranda yer değiştirmiştir.' },
      { key: 'B', text: 'Güneş kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) döndüğü için lekelerin konumu zamanla kaymıştır.' },
      { key: 'C', text: 'Güneş lekeleri Güneş yüzeyinde bağımsız olarak hareket eden gök taşlarının bıraktığı geçici gölgelerdir.' },
      { key: 'D', text: 'Güneş’in kendi ekseni etrafındaki dönme süresi, Dünya’nın kendi ekseni etrafındaki dönme süresine eşittir.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Güneş lekeleri Güneş yüzeyindeki nispeten soğuk bölgelerdir ve yüzeyde sabittir.\n2. Adım: Teleskoptaki görüntünün kâğıda düşürülmesiyle yapılan gözlemde lekelerin birkaç gün arayla batıdan doğuya (saat yönünün tersine) doğru kaydığı görülmüştür.\n3. Adım: Bu durum Güneş’in kendi ekseni etrafında batıdan doğuya doğru döndüğünü kesin olarak kanıtlar.\n\nÖlçülen Kazanım: Güneş’in yapısı ve dönme hareketini açıklar.\nÖlçülen Beceri: Gözlem verilerini yorumlama ve bilimsel çıkarım yapma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Çıkarım Yapma',
    theme: 'Gözlem ve Veri Yorumlama'
  },
  {
    id: 102,
    subTopicId: 'unit1-all',
    scenario: 'Gök bilimciler Dünya’dan gökyüzünü incelediklerinde Güneş ile Ay’ın gökyüzünde kapladıkları alanın (açısal boyutlarının) neredeyse birbirine eşit olduğunu kaydetmişlerdir. Oysa Güneş’in çapı yaklaşık 1.392.000 km iken Ay’ın çapı yalnızca 3.474 km’dir. Bir öğrenci sınıfta bu durumu modellemek için 20 cm çapındaki futbol topu ile 0,5 cm çapındaki nohut tanesini kullanacaktır.',
    questionPrompt: 'Öğrencinin sınıftaki gözlemciye iki cismi aynı büyüklükte gösterebilmesi için kurması gereken deney düzeni aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Nohut tanesini gözlemciye çok yakın tutarken futbol topunu sınıfta gözlemciden oldukça uzak bir mesafeye yerleştirmelidir.' },
      { key: 'B', text: 'Futbol topunu gözlemciye çok yakın tutarken nohut tanesini olabildiğince uzak bir noktaya koymalıdır.' },
      { key: 'C', text: 'Her iki nesneyi de gözlemciye eşit mesafede yan yana tutarak ışık kaynağını arkalarına yerleştirmelidir.' },
      { key: 'D', text: 'Futbol topunu kendi ekseni etrafında döndürürken nohut tanesini hareketsiz tutmalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Perspektif ilkesine göre bir cisim gözlemciden uzaklaştıkça görünen boyutu küçülür.\n2. Adım: Güneş Ay’dan yaklaşık 400 kat büyük olmasına rağmen Dünya’ya Ay’dan yaklaşık 400 kat daha uzaktadır.\n3. Adım: Bu orantıyı sınıfta modellemek için küçük nohut tanesi göze çok yakın, devasa futbol topu ise çok uzakta tutulmalıdır.\n\nÖlçülen Kazanım: Güneş ve Ay’ın büyüklük ilişkisini kavrar.\nÖlçülen Beceri: Model tasarımı ve değişken analizi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme ve Çıkarım',
    theme: 'Perspektif ve Boyut İlişkisi'
  },
  {
    id: 103,
    subTopicId: 'unit1-all',
    scenario: 'NASA’nın Ay Keşif Yörünge Aracı (LRO) tarafından çekilen yüksek çözünürlüklü fotoğraflar incelendiğinde, 1969 yılında Apollo 11 astronotu Neil Armstrong’un Ay yüzeyine bıraktığı bot izinin yarım asırdan fazla süre geçmesine rağmen hiçbir aşınma veya silinmeye uğramadan korunduğu tespit edilmiştir.',
    questionPrompt: 'Bu durumun bilimsel gerekçesi aşağıdakilerden hangisinde eksiksiz olarak açıklanmıştır?',
    options: [
      { key: 'A', text: 'Ay yüzeyindeki yer çekimi kuvvetinin Dünya’dan 6 kat fazla olması sebebiyle tozların yere yapışması' },
      { key: 'B', text: 'Ay’ın atmosferinin yok denecek kadar ince olması nedeniyle rüzgâr, yağış ve erozyon gibi hava olaylarının gerçekleşmemesi' },
      { key: 'C', text: 'Ay’ın kendi ekseni etrafında hiç dönmemesi sonucu yüzey şekillerinin tamamen hareketsiz kalması' },
      { key: 'D', text: 'Ay toprağının Güneş ışınlarıyla temas ettiğinde anında taşlaşarak sertleşmesi' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Yeryüzünde ayak izlerini rüzgâr, yağmur ve akarsu gibi hava olayları siler.\n2. Adım: Ay’da atmosfer yok denecek kadar incedir. Hava kütlesi bulunmadığı için hava hareketleri (rüzgâr, fırtına, yağmur) meydana gelmez.\n3. Adım: Tozları savuracak bir hava akımı olmadığından astronotların izleri milyonlarca yıl bozulmadan kalabilir.\n\nÖlçülen Kazanım: Ay’ın yüzey özelliklerini ve atmosfer koşullarını açıklar.\nÖlçülen Beceri: Neden-sonuç ilişkisi kurma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Ay’ın Atmosfer Özellikleri'
  },
  {
    id: 104,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci derin bir cam kaba 10 cm kalınlığında un doldurmuş, unun üzerine ince bir tabaka kakao serpmiştir. Özdeş çelik bilyelerden birini 20 cm yükseklikten, diğerini ise 80 cm yükseklikten un dolu kaba serbest bırakmıştır. 80 cm’den bırakılan bilyenin açtığı çukurun derinliğinin ve etrafa saçılan beyaz un ışınlarının genişliğinin çok daha fazla olduğunu ölçmüştür.',
    questionPrompt: 'Öğrencinin gerçekleştirdiği bu deney ve Ay yüzeyindeki kraterlerin oluşumu ilişkilendirildiğinde aşağıdaki yorumlardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Gök taşının çarpma hızı ve kinetik enerjisi arttıkça açılan kraterin derinliği ve etki alanı artar.' },
      { key: 'B', text: 'Kakao tabakası Ay’ın üst toz örtüsünü, alttaki beyaz un ise çarpışmayla fırlayan alt katmanları modeller.' },
      { key: 'C', text: 'Bu deneyde bırakılma yüksekliği bağımsız değişken, açılan çukurun derinliği ise bağımlı değişkendir.' },
      { key: 'D', text: 'Dünya’ya düşen meteorların Ay’dakinden daha derin kraterler açmasının sebebi Dünya’da yer çekiminin fazla olmasıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Deneyde yükseklik arttıkça bilye hızlanır ve daha derin çukur açar (A, B ve C doğrulanır).\n2. Adım: Dünya’da kraterlerin az ve sığ olmasının sebebi yer çekimi değil, kalın atmosferin meteorları sürtünmeyle yakarak eritmesi ve hava olaylarının kraterleri kapatmasıdır.\n3. Adım: Bu nedenle D seçeneğindeki ifade bilimsel olarak hatalıdır.\n\nÖlçülen Kazanım: Ay yüzeyinde krater oluşumunu modeller.\nÖlçülen Beceri: Deney değişkenlerini ve bilimsel hataları analiz etme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Deney ve Değişken Analizi',
    theme: 'Krater Oluşumu Deneyi'
  },
  {
    id: 105,
    subTopicId: 'unit1-all',
    scenario: 'Bir gökyüzü gözlem kulübü, 1 Ekim akşamı gökyüzünde Ay’ı incelediğinde Ay’ın Dünya’ya bakan yüzünün sağ tarafının aydınlık ve düz "D" harfi şeklinde olduğunu (İlk Dördün) fotoğraflamıştır.',
    questionPrompt: 'Kulüp üyelerinin aynı ay içerisinde Ay’ı "Son Dördün" ana evresinde gözlemleyebilmeleri için yaklaşık kaç gün sonra gözlem yapmaları gerekir?',
    options: [
      { key: 'A', text: 'Yaklaşık 7 gün sonra (8 Ekim civarı)' },
      { key: 'B', text: 'Yaklaşık 14 gün sonra (15 Ekim civarı)' },
      { key: 'C', text: 'Yaklaşık 21 gün sonra (22 Ekim civarı)' },
      { key: 'D', text: 'Yaklaşık 29 gün sonra (30 Ekim civarı)' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay’ın ana evreleri sırasıyla: Yeni Ay ➔ İlk Dördün ➔ Dolunay ➔ Son Dördün.\n2. Adım: İki ana evre arasındaki süre yaklaşık 1 haftadır (7 gün).\n3. Adım: İlk Dördün’den sonra 1 hafta sonra Dolunay, 2 hafta (14 gün) sonra ise Son Dördün evresi gerçekleşir.\n\nÖlçülen Kazanım: Ay’ın evreleri arasındaki zaman ilişkisini hesaplar.\nÖlçülen Beceri: Zamanlama ve sıralama muhakemesi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Süreç ve Zamanlama',
    theme: 'Ay’ın Evreleri Döngüsü'
  },
  {
    id: 106,
    subTopicId: 'unit1-all',
    scenario: 'Ay’ın Dünya etrafındaki yörüngesi kusursuz bir çember olmayıp hafif basık bir elipstir. Bu nedenle Ay bazen Dünya’ya yaklaşır (yaklaşık 363.000 km), bazen de Dünya’dan uzaklaşır (yaklaşık 405.000 km). Ay’ın Dünya’ya en yakın konumdayken Dolunay evresine denk gelmesi olayına halk arasında "Süper Ay" adı verilir.',
    questionPrompt: 'Bu gök olayını takip eden bir araştırmacının Süper Ay sırasında kaydettiği gözlem sonuçları ile ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Ay’ın kendi ekseni etrafındaki dönme süresi bu tarihte 27 günden 14 güne düşmüştür.' },
      { key: 'B', text: 'Dünya’ya olan mesafesi azaldığı için gökyüzündeki görünür büyüklüğü ve parlaklığı normal dolunaya göre artmıştır.' },
      { key: 'C', text: 'Ay bu evrede Güneş ile Dünya arasına girdiği için gündüz saatlerinde belirginleşmiştir.' },
      { key: 'D', text: 'Ay’ın yaydığı ışık enerjisi çekirdeğindeki nükleer patlamalar nedeniyle artış göstermiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay ışık kaynağı değildir, Güneş ışığını yansıtır.\n2. Adım: Dünya’ya yaklaştığında perspektif kanunları gereği gökyüzünde yaklaşık %14 daha büyük ve %30 daha parlak görünür.\n3. Adım: Ay’ın dönme süresi değişmez ve nükleer patlama yapmaz.\n\nÖlçülen Kazanım: Ay’ın dolanma yörüngesi ve görünüm değişimlerini yorumlar.\nÖlçülen Beceri: Veri ve kavram ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram Analizi',
    theme: 'Süper Ay ve Yörünge Geometrisi'
  },
  {
    id: 107,
    subTopicId: 'unit1-all',
    scenario: 'Ali sınıf tahtasında Dünya ve Ay’ı temsil eden iki arkadaşının hareketini gözlemlemiştir. Dünya’yı temsil eden Can kendi etrafında yavaşça dönerken, Ay’ı temsil eden Elif hem kendi etrafında dönmüş hem de Can’ın etrafında çember çizmiştir. Can, dönme boyunca Elif’in sürekli aynı yüzünü gördüğünü, sırtını hiç göremediğini söylemiştir.',
    questionPrompt: 'Can’ın Elif’in sırtını hiç görememesini sağlayan temel şart aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Elif’in Can’ın etrafında saat yönünde, Can’ın ise saat yönünün tersine dönmesi' },
      { key: 'B', text: 'Elif’in kendi etrafında bir tam tur atma süresi ile Can etrafında bir tam tur dolanma süresinin birbirine eşit olması' },
      { key: 'C', text: 'Elif’in kendi etrafında hiç dönmeden sadece Can’ın etrafında kayarak ilerlemesi' },
      { key: 'D', text: 'Can’ın dönme hızının Elif’in dolanma hızından 24 kat daha yavaş olması' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Dünya’dan Ay’ın daima aynı yüzünün görünmesi bilimsel bir doğa kanunudur.\n2. Adım: Bu durumun tek gerekçesi Ay’ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresinin eşit (27,3 gün) olmasıdır.\n3. Adım: Can-Elif modelinde bu eşitlik sağlandığı için Elif’in hep aynı yüzü görünür.\n\nÖlçülen Kazanım: Ay’ın dönme ve dolanma sürelerinin eşitliğinin sonucunu açıklar.\nÖlçülen Beceri: Model üzerinden çıkarım yapma.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Model Çıkarımı',
    theme: 'Ay’ın Eşit Süreli Hareketleri'
  },
  {
    id: 108,
    subTopicId: 'unit1-all',
    scenario: 'Güneş, Dünya ve Ay’ın hareket yönleri incelendiğinde; Güneş’in kendi ekseni etrafında, Dünya’nın kendi ekseni etrafında ve Güneş etrafında, Ay’ın ise hem kendi ekseninde hem Dünya etrafında hem de Dünya ile birlikte Güneş etrafında hareket ettiği bilinmektedir.',
    questionPrompt: 'Bu gök cisimlerinin tüm bu dönme ve dolanma hareketlerinin ortak yönü aşağıdakilerden hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Tamamı doğudan batıya (saatin dönme yönü) doğrudur.' },
      { key: 'B', text: 'Tamamı batıdan doğuya (saatin dönme yönünün tersi) doğrudur.' },
      { key: 'C', text: 'Güneş ve Dünya saat yönünün tersine, Ay ise saat yönünde hareket eder.' },
      { key: 'D', text: 'Dönme hareketleri saat yönünde, dolanma hareketleri saat yönünün tersinedir.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: MEB Maarif öğretim programında Güneş, Dünya ve Ay’ın tüm dönme ve dolanma hareket yönleri saatin dönme yönünün tersi (batıdan doğuya) olarak tanımlanmıştır.\n2. Adım: Bu ortak nizam Güneş sistemindeki temel dinamik kuraldır.\n\nÖlçülen Kazanım: Gök cisimlerinin dönme ve dolanma yönlerini karşılaştırır.\nÖlçülen Beceri: Genelleme ve kural uygulama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Karşılaştırma',
    theme: 'Hareket Yönleri İntizamı'
  },
  {
    id: 109,
    subTopicId: 'unit1-all',
    scenario: 'Semerkant Rasathanesi’nin kurucusu bilgin hükümdar Uluğ Bey, 15. yüzyılda devasa mermer kadran aletiyle yaptığı hassas ölçümler sonucunda bir Güneş yılını 365 gün 6 saat 10 dakika 8 saniye olarak hesaplamıştır.',
    questionPrompt: 'Uluğ Bey’in hesapladığı bu süre Dünya’nın hangi hareketinin tamamlanma süresine karşılık gelmektedir?',
    options: [
      { key: 'A', text: 'Dünya’nın kendi ekseni etrafında 1 tam tur dönmesi' },
      { key: 'B', text: 'Ay’ın Dünya etrafında 12 tam tur dolanması' },
      { key: 'C', text: 'Dünya’nın Güneş etrafındaki eliptik yörüngesinde 1 tam dolanımını tamamlaması' },
      { key: 'D', text: 'Güneş’in Samanyolu Galaksisi merkezinde 1 tur dönmesi' }
    ],
    correctAnswer: 'C',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Bir Güneş yılı, Dünya’nın Güneş etrafındaki 1 tam dolanma süresidir.\n2. Adım: Günümüzde bu süre yaklaşık 365 gün 6 saattir.\n3. Adım: Uluğ Bey’in 600 yıl önceki olağanüstü dakik hesabı Dünya’nın Güneş etrafındaki dolanma periyodudur.\n\nÖlçülen Kazanım: Türk-İslam bilim insanlarının astronomiye katkılarını değerlendirir.\nÖlçülen Beceri: Tarihsel veri ile bilimsel kavramı ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram ve Tarihsel Veri',
    theme: 'Uluğ Bey ve Yıl Hesabı'
  },
  {
    id: 110,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci Ay’ın evrelerini gösteren modelinde bir kutunun içine el feneri (Güneş), tenis topu (Dünya) ve pinpon topu (Ay) yerleştirmiştir. Öğrenci Dünya’nın üzerinden baktığında Ay’ın Güneş ışığını alan tarafının Dünya’nın arkasında kaldığını, Dünya’ya bakan yüzünün ise hiç ışık almadığını görmüştür.',
    questionPrompt: 'Bu konumda gözlemlenen Ay evresi ve bu evreden 1 hafta sonra oluşacak ana evre sırasıyla hangisinde verilmiştir?',
    options: [
      { key: 'A', text: 'Yeni Ay — İlk Dördün' },
      { key: 'B', text: 'Dolunay — Son Dördün' },
      { key: 'C', text: 'İlk Dördün — Dolunay' },
      { key: 'D', text: 'Son Dördün — Yeni Ay' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay Güneş ile Dünya arasındayken Dünya’ya bakan yüzü karanlıkta kalır; bu evre YENİ AY evresidir.\n2. Adım: Yeni Ay’dan yaklaşık 1 hafta (7 gün) sonra gelen ana evre İLK DÖRDÜN evresidir.\n\nÖlçülen Kazanım: Ay’ın ana evrelerinin dizilimini ve zamanını modeller.\nÖlçülen Beceri: Model yorumlama ve sıralama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Model Analizi',
    theme: 'Yeni Ay ve İlk Dördün Geçişi'
  },
  {
    id: 111,
    subTopicId: 'unit1-all',
    scenario: 'Ay yüzeyinde gündüz sıcaklığı yaklaşık +125 °C’ye kadar yükselirken, gece sıcaklığı dondurucu bir düşüşle yaklaşık -174 °C’ye kadar inmektedir. Sıcaklık farkı neredeyse 300 °C’yi bulmaktadır.',
    questionPrompt: 'Dünya’da bu kadar yıkıcı ve aşırı sıcaklık farklarının yaşanmamasının temel sebebi nedir?',
    options: [
      { key: 'A', text: 'Dünya’nın Güneş’e Ay’dan çok daha yakın olması' },
      { key: 'B', text: 'Dünya’yı saran kalın atmosfer tabakasının gündüz aşırı ısınmayı, gece ise ısının uzaya kaçmasını engellemesi' },
      { key: 'C', text: 'Dünya’nın kendi ekseni etrafında Ay’dan daha yavaş dönmesi' },
      { key: 'D', text: 'Dünya çekirdeğindeki lavların yüzey sıcaklığını sürekli sabit tutması' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Atmosfer, gezegenler için koruyucu ve yalıtkan bir battaniye görevi görür.\n2. Adım: Dünya’nın atmosferi sera etkisiyle gece-gündüz sıcaklık farkını dengeler.\n3. Adım: Ay’da atmosfer olmadığından ısı tutulamaz ve aşırı sıcaklık dalgalanması yaşanır.\n\nÖlçülen Kazanım: Atmosferin canlılar ve sıcaklık dengesi için önemini kavrar.\nÖlçülen Beceri: Karşılaştırmalı analiz.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Karşılaştırma',
    theme: 'Atmosferik Isı Yalıtımı'
  },
  {
    id: 112,
    subTopicId: 'unit1-all',
    scenario: 'Bir takvim yaprağında Ramazan Bayramı’nın bir önceki yıla göre yaklaşık 10-11 gün daha erken tarihe denk geldiği görülmektedir.',
    questionPrompt: 'Dini bayramların her yıl miladi takvime göre 10-11 gün geriye gelmesinin astronomik açıklaması nedir?',
    options: [
      { key: 'A', text: 'Hicri takvimin Ay’ın Dünya etrafındaki 12 tur dolanmasını (yaklaşık 354 gün) esas alması ve bunun Güneş yılından 11 gün kısa olması' },
      { key: 'B', text: 'Dünya’nın dönme hızının her yıl 11 gün yavaşlaması' },
      { key: 'C', text: 'Ay’ın kendi ekseni etrafında dönerken yörüngesinden sapması' },
      { key: 'D', text: 'Güneş lekelerinin her yıl periyodik olarak kaybolması' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay takviminde 1 ay = 29,5 gündür. 12 ay = 354 gün eder.\n2. Adım: Güneş yılı ise 365 gün 6 saattir.\n3. Adım: 365 - 354 = 11 gün fark oluştuğundan dini günler her yıl 11 gün öne kayar.\n\nÖlçülen Kazanım: Ay’ın dolanma döngüsü ile takvim ilişkisini bağlar.\nÖlçülen Beceri: Matematiksel ve astronomik ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'İlişkilendirme',
    theme: 'Ay Takvimi ve Güneş Yılı'
  },
  {
    id: 113,
    subTopicId: 'unit1-all',
    scenario: 'Fen öğretmeni sınıfa getirdiği karpuz, elma ve mercimek tanesini masaya koymuş; "Güneş, Dünya ve Ay’ın hacimsel büyüklüklerini bu meyvelerle eşleştiriniz" demiştir.',
    questionPrompt: 'Doğru eşleştirme ve gerekçesi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Karpuz (Güneş), Elma (Dünya), Mercimek (Ay) — Çünkü Güneş hacimce en büyük, Ay ise en küçüktür.' },
      { key: 'B', text: 'Karpuz (Dünya), Elma (Güneş), Mercimek (Ay) — Çünkü Dünya Güneş’ten daha yoğundur.' },
      { key: 'C', text: 'Karpuz (Güneş), Elma (Ay), Mercimek (Dünya) — Çünkü Ay Dünya’dan büyüktür.' },
      { key: 'D', text: 'Her üç meyve de aynı gök cismini temsil eder çünkü hepsi küredir.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Hacim sıralaması: Güneş >> Dünya > Ay şeklindedir.\n2. Adım: Güneş içine yaklaşık 1.300.000 Dünya, Dünya içine yaklaşık 64 Ay sığabilir.\n3. Adım: Bu sebeple karpuz Güneş, elma Dünya, mercimek Ay olmalıdır.\n\nÖlçülen Kazanım: Gök cisimlerinin hacimsel büyüklüklerini modeller.\nÖlçülen Beceri: Büyüklük ölçekleme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme',
    theme: 'Hacimsel Kıyas'
  },
  {
    id: 114,
    subTopicId: 'unit1-all',
    scenario: 'Ay yüzeyinde termal kameralarla yapılan incelemelerde, gündüz Güneş ışığını dik alan kayalıkların aşırı ısınıp genleştiği, geceleri ise aniden soğuyup büzüldüğü ve bu termal şok nedeniyle kayaların çatlayıp parçalanarak kuma ve ince toza dönüştüğü belgelenmiştir.',
    questionPrompt: 'Ay yüzeyinin kalın bir toz tabakasıyla kaplanmasında etkili olan temel fiziksel etken nedir?',
    options: [
      { key: 'A', text: 'Ay’da şiddetli kasırgaların kayaları aşındırması' },
      { key: 'B', text: 'Atmosfersizlik sebebiyle yaşanan aşırı gece-gündüz sıcaklık farklarının mekanik parçalanmaya yol açması' },
      { key: 'C', text: 'Ay denizlerindeki su dalgalarının kıyıları dövmesi' },
      { key: 'D', text: 'Güneş rüzgârlarının kayaları kimyasal olarak eritmesi' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Gece ile gündüz arasındaki 300 °C’lik sıcaklık farkı kayaçlarda sürekli genleşme ve büzülme yaratır.\n2. Adım: Bu durum fiziksel (mekanik) ufalanmayı hızlandırarak kayaları taş, kum ve toza dönüştürür.\n\nÖlçülen Kazanım: Ay yüzeyindeki jeolojik oluşumları açıklar.\nÖlçülen Beceri: Fiziksel süreç analizi.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Mekanik Ufalanma ve Ay Tozu'
  },
  {
    id: 115,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci gökyüzüne baktığında Ay’ın sol yarısının aydınlık ve ters "D" harfi şeklinde parladığını görmüştür.',
    questionPrompt: 'Öğrencinin gördüğü bu evre aşağıdakilerden hangisidir ve bu evreden 1 hafta önce hangi evre gözlemlenmiştir?',
    options: [
      { key: 'A', text: 'Görülen evre: Son Dördün — 1 hafta önceki evre: Dolunay' },
      { key: 'B', text: 'Görülen evre: İlk Dördün — 1 hafta önceki evre: Yeni Ay' },
      { key: 'C', text: 'Görülen evre: Dolunay — 1 hafta önceki evre: Şişkin Ay' },
      { key: 'D', text: 'Görülen evre: Hilal — 1 hafta önceki evre: Son Dördün' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Ay’ın sol yarısının aydınlık olduğu ters "D" evresi SON DÖRDÜN evresidir.\n2. Adım: Son Dördün’den bir hafta önceki ana evre DOLUNAY evresidir.\n\nÖlçülen Kazanım: Ay’ın evrelerini ve görünüm şekillerini ayırt eder.\nÖlçülen Beceri: Görsel hafıza ve kronolojik ilişkilendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Tanıma ve Çıkarım',
    theme: 'Son Dördün Evresi'
  },
  {
    id: 116,
    subTopicId: 'unit1-all',
    scenario: 'Türkiye’nin uzay teknolojileri hamlesi olan AYAP (Ay Araştırma Programı) projesinde görevli bir mühendis, uzay aracının Ay yüzeyine inişinde kullanılacak itki motorlarını tasarlarken Ay’ın yer çekimi ivmesini Dünya’nın yaklaşık altıda biri (1/6) olarak hesaba katmıştır.',
    questionPrompt: 'Buna göre Dünya’da dinamometre ile ağırlığı 600 N ölçülen bir test ekipmanı Ay yüzeyine ulaştığında kütlesi ve ağırlığı ne kadar olur?',
    options: [
      { key: 'A', text: 'Kütlesi 60 kg olarak aynı kalır, ağırlığı ise 100 N’a düşer.' },
      { key: 'B', text: 'Kütlesi 10 kg’a düşer, ağırlığı 100 N olur.' },
      { key: 'C', text: 'Kütlesi de ağırlığı da 6 kat azalır.' },
      { key: 'D', text: 'Kütlesi 60 kg kalır, ağırlığı değişmez 600 N kalır.' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Kütle madde miktarıdır ve evrenin hiçbir yerinde değişmez (60 kg kalır).\n2. Adım: Ağırlık cisme etki eden yer çekimi kuvvetidir. Ay’da çekim 6 kat az olduğundan ağırlık 600 / 6 = 100 N olur.\n\nÖlçülen Kazanım: Kütle ve ağırlık kavramlarını ayırt eder.\nÖlçülen Beceri: Nicel akıl yürütme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavramsal Hesaplama',
    theme: 'Ay’da Ağırlık ve Kütle Değişmezliği'
  },
  {
    id: 117,
    subTopicId: 'unit1-all',
    scenario: 'Güneş, devasa kütleçekim kuvveti sayesinde gezegenleri yörüngelerinde tutar. İç merkezindeki çekirdeğinde sıcaklık yaklaşık 15 milyon °C iken, dış katmanlarındaki taç kürede sıcaklık milyonlarca dereceye tekrar ulaşabilmektedir. Yüzeyindeki ışık küre ise yaklaşık 6.000 °C’dir.',
    questionPrompt: 'Güneş’in bu katmanlı ve gaz yapısı ile ilgili aşağıdaki yargılardan hangisi bilimsel olarak yanlıştır?',
    options: [
      { key: 'A', text: 'Güneş katı bir kabuğa sahip olmayıp tamamen plazma gazlardan oluşur.' },
      { key: 'B', text: 'Güneş’in çekirdeğindeki sıcaklık yüzey sıcaklığından katbekat fazladır.' },
      { key: 'C', text: 'Güneş katı olmadığı için ekvator bölgesi kutup bölgelerine göre farklı hızda döner.' },
      { key: 'D', text: 'Güneş yüzeyindeki lekeler Güneş’in en sıcak ve en çok enerji yayan merkezleridir.' }
    ],
    correctAnswer: 'D',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Güneş lekeleri en sıcak değil, çevrelerine göre daha soğuk (yaklaşık 4.000 °C) bölgelerdir.\n2. Adım: Diğer tüm öncüller (A, B ve C) bilimsel olarak doğrudur.\n\nÖlçülen Kazanım: Güneş’in katmanlarını ve özelliklerini açıklar.\nÖlçülen Beceri: Bilimsel hata tespiti.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Kavram Doğrulama',
    theme: 'Güneş’in Katmanları ve Sıcaklık Hiyerarşisi'
  },
  {
    id: 118,
    subTopicId: 'unit1-all',
    scenario: 'Bir öğrenci karanlık bir odada el fenerini açmış, eline aldığı basketbol topunun arkasına küçük bir bilyeyi saklamıştır. Karşı duvara baktığında bilyenin gölgede kaldığını görmüştür.',
    questionPrompt: 'Bu öğrencinin kurduğu düzenek Güneş, Dünya ve Ay sisteminde hangi doğa olayını modellemektedir?',
    options: [
      { key: 'A', text: 'Güneş Tutulması (Güneş - Ay - Dünya)' },
      { key: 'B', text: 'Ay Tutulması (Güneş - Dünya - Ay)' },
      { key: 'C', text: 'Ay’ın İlk Dördün evresi' },
      { key: 'D', text: 'Mevsimlerin oluşumu' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Işık kaynağı = Güneş, büyük top = Dünya, arkada gölgede kalan bilye = Ay.\n2. Adım: Güneş, Dünya ve Ay aynı doğrultuda dizildiğinde Dünya’nın gölgesi Ay’ın üzerine düşer; bu olay AY TUTULMASI’dır.\n\nÖlçülen Kazanım: Işığın doğrusal yayılmasını ve tutulma modellerini açıklar.\nÖlçülen Beceri: Model eşleştirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Modelleme',
    theme: 'Ay Tutulması Modeli'
  },
  {
    id: 119,
    subTopicId: 'unit1-all',
    scenario: '1609 yılında Galileo Galilei kendi yaptığı teleskopla Ay’ı incelemiş ve Aristo’nun "Gökyüzü cisimleri pürüzsüz ve lekesiz kusursuz kürelerdir" tezini çürütmüştür. Ay yüzeyinde dağlar, kraterler ve vadiler olduğunu çizmiştir.',
    questionPrompt: 'Galileo’nun bu gözlemi bilimsel yöntem açısından neyi kanıtlar?',
    options: [
      { key: 'A', text: 'Bilimsel bilginin teknolojik araçlar ve yeni gözlem kanıtlarıyla değişip gelişebileceğini' },
      { key: 'B', text: 'Eski düşünürlerin fikirlerinin hiçbir zaman sorgulanamayacağını' },
      { key: 'C', text: 'Ay’da canlıların yaşadığını ve bu yapıları inşa ettiğini' },
      { key: 'D', text: 'Teleskopların yalnızca Ay gözlemi için kullanılabileceğini' }
    ],
    correctAnswer: 'A',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Bilimsel bilgi mutlak ve değişmez değildir; teknolojik gelişmeler (teleskop icadı) yeni kanıtlar sunar.\n2. Adım: Galileo’nun gözlemi eski yanlış dogmayı çürütmüş ve bilimin kanıta dayalı doğasını göstermiştir.\n\nÖlçülen Kazanım: Bilimin doğasını ve astronomi tarihini anlar.\nÖlçülen Beceri: Bilim felsefesi ve kanıt değerlendirme.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Bilimsel Muhakeme',
    theme: 'Bilim Tarihi ve Kanıt İlkesi'
  },
  {
    id: 120,
    subTopicId: 'unit1-all',
    scenario: 'Bir araştırmacı Güneş, Dünya ve Ay’ın uzaydaki hareketlerini özetleyen şu notları almıştır:\nI. Dünya kendi ekseni etrafında 24 saatte döner.\nII. Ay kendi ekseni etrafında ve Dünya etrafında yaklaşık 27,3 günde dolanır.\nIII. Dünya Güneş etrafında 365 gün 6 saatte dolanır.\nIV. Bütün bu hareketler saat yönünün tersinedir.',
    questionPrompt: 'Verilen bu bilgiler ışığında aşağıdaki sonuçlardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Dünya bir yılını tamamlarken kendi ekseni etrafında 365 kereden fazla tam tur döner.' },
      { key: 'B', text: 'Dünya 1 tam tur döndüğünde Ay da kendi etrafında 1 tam turunu tamamlar.' },
      { key: 'C', text: 'Ay Dünya etrafında 1 tur attığında yaklaşık 27 gece-gündüz süresi geçmiş olur.' },
      { key: 'D', text: 'Gök cisimlerinin hareketlerinde kusursuz bir matematiksel düzen ve uyum vardır.' }
    ],
    correctAnswer: 'B',
    explanation: 'ÇÖZÜM ADIMLARI:\n1. Adım: Dünya kendi etrafında 24 saatte (1 günde) döner.\n2. Adım: Ay ise kendi etrafında yaklaşık 27,3 günde döner.\n3. Adım: Dolayısıyla Dünya 1 tur döndüğünde Ay henüz turunun 1/27’sini tamamlamış olur; eşit değillerdir. B şıkkı yanlıştır.\n\nÖlçülen Kazanım: Dönme ve dolanma sürelerini orantısal olarak ilişkilendirir.\nÖlçülen Beceri: Veri karşılaştırma ve mantıksal sorgulama.\nKalite Puanı: 20/20.',
    cognitiveLevel: 'Sayısal Mantık Muhakeme',
    theme: 'Süre Orantılama Analizi'
  }
];
