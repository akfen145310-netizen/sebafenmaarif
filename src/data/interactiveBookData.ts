import { InteractiveBookItem, GlossaryItem } from '../types/curriculum';

export const unit1Glossary: Record<string, GlossaryItem[]> = {
  'unit1-sub1': [
    { term: 'Güneş', definition: 'Samanyolu Galaksisi’nde Dünya’mıza en yakın olan, etrafına muazzam bir nizamla ısı ve ışık saçması için yaratılmış orta büyüklükte sarı bir cüce yıldız.' },
    { term: 'Işık Küre (Fotosfer)', definition: 'Güneş’in gözümüzle görebildiğimiz, yaklaşık 6.000 °C sıcaklıkta kusursuz bir parlaklıkla var edilmiş yüzey katmanı.' },
    { term: 'Güneş Lekesi', definition: 'Güneş yüzeyinde manyetik alanların yoğunlaşması sonucu etrafına göre daha az sıcak (yaklaşık 4.000 °C) olan ve koyu renkli görünen bölgeler.' },
    { term: 'Dönme Hareketi', definition: 'Bir gök cisminin kendi ekseni etrafında tur atması. Güneş kendi ekseni etrafında saat yönünün tersine (batıdan doğuya) döner.' },
    { term: 'Parker Güneş Sondası', definition: 'Güneş’in atmosferini ve harika yapısını yakından incelemek için özel olarak üretilmiş ve uzaya fırlatılmış insan yapımı uzay aracı.' },
    { term: 'Küre', definition: 'Bütün noktaları merkezden eşit uzaklıkta bulunan kusursuz geometrik yuvarlak biçim. Güneş ve Dünya bu muntazam şekilde yapılmıştır.' }
  ],
  'unit1-sub2': [
    { term: 'Doğal Uydu', definition: 'Bir gezegenin etrafındaki yörüngede dönen gök cismi. Ay, Dünya’mızın harika bir uyumla çalışan tek doğal uydusudur.' },
    { term: 'Krater', definition: 'Ay yüzeyine çarpan gök taşlarının (meteorların) oluşturduğu derin çukurlar. Ay’ın atmosferi çok ince olduğu için bu çukurlar silinmeden korunur.' },
    { term: 'Atmosfer', definition: 'Bir gök cismini saran gaz tabakası. Ay’da atmosfer yok denecek kadar ince yaratıldığı için rüzgâr ve yağmur gibi hava olayları görülmez.' },
    { term: 'TUA & AYAP', definition: 'Türkiye Uzay Ajansı tarafından Millî Uzay Programı kapsamında Ay’a uzay aracı göndermek üzere hazırlanan Ay Araştırma Programı.' },
    { term: 'Ali Kuşçu', definition: 'Ay’ın ilk ayrıntılı haritasını çizen, Osmanlı ve Türk-İslam dünyasının büyük matematik ve astronomi âlimi.' }
  ],
  'unit1-sub3': [
    { term: 'Ay’ın Evreleri', definition: 'Ay’ın Dünya etrafında dolanırken Güneş’ten aldığı ışığı farklı açılardan yansıtmasıyla gökyüzünde yaklaşık 29,5 günde bir periyodik olarak tamamlanan harika ışık döngüsü.' },
    { term: 'Yeni Ay', definition: 'Ay’ın Güneş ile Dünya arasına girdiği, karanlık yüzünün Dünya’ya dönük olduğu ve gökyüzünde görünmediği ana evre.' },
    { term: 'İlk Dördün', definition: 'Yeni Ay’dan bir hafta sonra görülen, Ay’ın sağ yarısının aydınlık ve düz "D" harfi şeklinde parladığı ana evre.' },
    { term: 'Dolunay', definition: 'Dünya’nın Güneş ile Ay arasında yer aldığı, Ay’ın Dünya’ya bakan yüzünün eksiksiz bir daire şeklinde ışıldadığı ana evre.' },
    { term: 'Son Dördün', definition: 'Dolunay’dan bir hafta sonra görülen, Ay’ın sol yarısının aydınlık ve ters "D" harfi şeklinde göründüğü ana evre.' },
    { term: 'Hilal & Şişkin Ay', definition: 'Ana evreler arasındaki geçiş dönemlerinde gözlemlenen zarif ara evreler.' },
    { term: 'Terminatör', definition: 'Ay yüzeyinde aydınlık bölge ile karanlık bölgeyi birbirinden ayıran keskin sınır çizgisi.' },
    { term: 'Süper Ay', definition: 'Ay’ın basık çember biçimli yörüngesinde Dünya’ya en yakın olduğu anda Dolunay evresinde bulunmasıyla gökyüzünde normalden daha büyük görünmesi.' }
  ],
  'unit1-sub4': [
    { term: 'Dolanma Hareketi', definition: 'Bir gök cisminin başka bir gök cismi etrafında çizdiği yörüngede hareket etmesi. Dünya Güneş etrafında, Ay ise Dünya etrafında dolanır.' },
    { term: 'Yörünge', definition: 'Bir gök cisminin hareketi boyunca takip ettiği, hassas bir matematiksel nizamla belirlenmiş uzay rotası.' },
    { term: 'Güneş Yılı', definition: 'Dünya’nın Güneş etrafındaki bir tam dolanımını tamamlaması için geçen 365 gün 6 saatlik süre.' },
    { term: 'Uluğ Bey', definition: 'Semerkant Rasathanesi’ni kuran, yıldızların hareket cetvellerini (Zîc-i Uluğ Bey) hazırlayan ve bir yılı 365 gün 6 saat 10 dakika 8 saniye olarak olağanüstü doğrulukla hesaplayan bilge Türk hükümdarı.' }
  ]
};

export const unit1InteractiveBookFlow: Record<string, InteractiveBookItem[]> = {
  'unit1-sub1': [
    {
      id: 'ib-1-1-p17-qr',
      pageNumber: 'Sayfa 17',
      type: 'karekod',
      title: '1. Ünite Giriş Karekodu: Gökyüzündeki Komşularımız ve Biz',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '1. Ünite Tanıtım ve Giriş Videosu',
        description: 'Ders kitabının 17. sayfasındaki karekod ile erişilen; evrenin büyüklüğü, Güneş, Dünya ve Ay’ın uzaydaki harika nizamını ve ünitenin genel hedeflerini tanıtan MEB multimedya içeriği.',
        type: 'video'
      },
      content: '📌 Karekodun İçeriği ve Amacı (Sayfa 17): Ders kitabının 17. sayfasında ünite girişinde yer alan bu karekod, öğrencilerin "Gökyüzündeki Komşularımız ve Biz" ünitesine görsel ve işitsel bir merak duygusuyla başlamalarını sağlamak amacıyla hazırlanmıştır. Güneş, Dünya ve Ay’ın uzaydaki konumlarını ve gök biliminin gelişimini canlandırır.'
    },
    {
      id: 'ib-1-1-p18-gozlem',
      pageNumber: 'Sayfa 18',
      type: 'gozlemleyelim',
      title: 'Gözlemleyelim: 30 Günlük Ay Gözlem Görevi (Sayfa 18)',
      badge: 'Gözlem & Görev',
      prompt: 'Konu başlamadan önce yer alan gözlem görevi:\nAy’ı 30 gün boyunca her akşam aynı saatte düzenli olarak gözlemleyiniz. Ay’ın aydınlık ve karanlık bölümlerine dikkat ederek gözlemlerinizi 36. sayfadaki takvim tablosuna çizerek aktarınız.',
      interactiveAnswer: 'Öğrenci Gözlem Rehberi ve Yapılacaklar: Her akşam aynı saatte gökyüzüne bakarak Ay’ın Dünya’dan görünen aydınlık kısmını defterinize veya 36. sayfadaki takvime çiziniz. Bulutlu günlerde önceki ve sonraki günlerin çizimlerini karşılaştırarak ara geçişi tahmin ediniz. Bu görev, Ay’ın yaklaşık 29,5 günde bir tamamlanan evre döngüsünü bizzat gözlemleyerek keşfetmenizi sağlar.'
    },
    {
      id: 'ib-1-1-p18-on-deg1',
      pageNumber: 'Sayfa 18',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu 1: Dünya’nın Yapısı ve Hareketleri (Sayfa 18)',
      badge: 'Ön Değerlendirme',
      prompt: 'Kitaptaki Ön Değerlendirme İstasyonu-1 soruları aşağıda yer almaktadır. Her sorunun yanındaki "Cevabı Gör" kutucuğuna tıklayarak akıllı tahta çözümünü açabilirsiniz:',
      evaluationQuestions: [
        {
          question: '1. Dünya’nın yapısı ile ilgili görseli inceleyiniz. Dünya’nın yapısı hakkında bildiklerinizi yazınız.',
          answer: 'Dünya’mız iç içe geçmiş katmanlardan (iç çekirdek, dış çekirdek, manto, yer kabuğu) ve onu dıştan saran su küre ile hava küreden (atmosfer) muazzam bir dengeyle yapılmış ve yaratılmıştır. Şekli kutuplardan basık, ekvatordan şişkin geoit bir küredir.'
        },
        {
          question: '2. Dünya’nın dönme hareketi hakkında bildiklerinizi yazınız.',
          answer: 'Dünya kendi ekseni etrafında batıdan doğuya (saatin dönme yönünün tersine) doğru 24 saatte (1 günde) döner. Bu hareket sonucunda gece ve gündüz kusursuz bir düzenle birbirini takip eder ve gün içinde sıcaklık farkları oluşur.'
        },
        {
          question: '3. Dünya’nın dönme hareketi birden durursa günlük yaşamda neler değişebilir?',
          answer: 'Güneş’e bakan yüzü sürekli aşırı sıcak gündüzü yaşarken, arka yüzü sürekli dondurucu karanlık geceyi yaşardı. Gece-gündüz döngüsü bozulur, dev fırtınalar çıkar, okyanus dengesi altüst olur ve canlı yaşamı için gerekli sıcaklık ritmi tamamen yok olurdu.'
        },
        {
          question: '4. Dünya’nın dolanma hareketi hakkında bildiklerinizi yazınız.',
          answer: 'Dünya, Güneş etrafındaki eliptik yörüngesinde saat yönünün tersine (batıdan doğuya) dolanır. Bu dolanma hareketi 365 gün 6 saatte (1 yılda) tamamlanır ve eksen eğikliği ile birlikte mevsimlerin oluşmasını sağlar.'
        },
        {
          question: '5. Dünya’nın dolanma hareketi birden durursa günlük yaşamda neler değişebilir?',
          answer: 'Mevsimler oluşmazdı; Dünya’nın Güneş’e bakan konumu sabit kalacağından tarımsal döngüler, yıllık yağış rejimleri ve mevsimsel sıcaklık ritmi tamamen yok olurdu.'
        }
      ]
    },
    {
      id: 'ib-1-1-p19-on-deg2',
      pageNumber: 'Sayfa 19',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu 2: Gök Cisimlerinin Şekil ve Yapısı (Sayfa 19)',
      badge: 'Ön Değerlendirme',
      prompt: 'Kitaptaki Ön Değerlendirme İstasyonu-2 soruları aşağıda yer almaktadır. Her sorunun yanındaki "Cevabı Gör" kutucuğuna tıklayarak akıllı tahta çözümünü açabilirsiniz:',
      evaluationQuestions: [
        {
          question: '1. Dünya’nın şekli hakkında bildiklerinizi yazınız.',
          answer: 'Dünya’mız küreye benzer. Kutuplardan hafif basık, ekvator bölgesinden ise şişkincedir; bu özel geometrik forma "geoit" adı verilir.'
        },
        {
          question: '2. Ay’ın şekli ve yapısı hakkında bildiklerinizi yazınız.',
          answer: 'Ay da küre biçimindedir. Katı ve kayalık bir yüzeye sahiptir. Üzerinde sayısız gök taşı çarpması sonucu açılmış derin krater çukurları ve geniş toz ovaları bulunur. Atmosferi yok denecek kadar incedir.'
        },
        {
          question: '3. Güneş’in şekli ve yapısı hakkında bildiklerinizi yazınız.',
          answer: 'Güneş harika bir küre şeklindedir. Katı bir yüzeyi yoktur; çekirdeğinden atmosferine kadar tamamı yüksek sıcaklıktaki plazma gazlardan (özellikle hidrojen ve helyum) meydana gelmiştir.'
        }
      ]
    },
    {
      id: 'ib-1-1-p20-baslik',
      pageNumber: 'Sayfa 20',
      type: 'hazirlik_istasyonu',
      title: 'Ana Başlık: GÖKYÜZÜNDEKİ KOMŞUMUZ GÜNEŞ (Sayfa 20)',
      badge: 'Hazırlık & Merak İstasyonu',
      prompt: 'Kitaptaki Hazırlık ve Merak İstasyonu Soruları:',
      evaluationQuestions: [
        {
          question: 'Hazırlık Sorusu: Güneş olmasaydı dünyamızda neler olurdu? Fikirlerinizi yazınız.',
          answer: 'Güneş olmasaydı Dünya zifiri karanlığa ve dondurucu bir soğuğa gömülürdü (-270 °C civarı). Bitkiler fotosentez yapamaz, besin ve oksijen üretilemez, su döngüsü durur ve yeryüzündeki tüm yaşam sona ererdi.'
        },
        {
          question: 'Merak Sorusu: Güneş ile ilgili en çok neleri merak ediyorsunuz? Fikirlerinizi yazınız.',
          answer: 'Güneş’in enerjisini nasıl hiç bitmeden milyarlarca yıldır yayabildiği, yüzeyindeki lekelerin nasıl hareket ettiği ve uzay araçlarının Güneş’e ne kadar yaklaşabildiği en büyüleyici araştırma konularıdır.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Güneş, Dünya’mızdaki yaşamın, iklimlerin, besin zincirinin ve sıcaklığın birincil ve vazgeçilmez kaynağıdır.'
    },
    {
      id: 'ib-1-1-p21-performans',
      pageNumber: 'Sayfa 21',
      type: 'performans_istasyonu',
      title: 'Ana Başlık: GÜNEŞ’İN YAPISI VE DÖNME HAREKETİ (Sayfa 21) - Performans İstasyonu: Güneş Günlüğü',
      badge: 'Performans Görevi',
      prompt: 'Performans Görevinin Tarifi: Bilim insanları gibi bir gözlem günlüğü oluşturarak Güneş hakkında öğrendiğiniz tüm bilgileri, merak ettiklerinizi ve gözlemlerinizi tarih sırasına göre bu günlüğe kaydediniz.',
      materials: ['Üç adet A4 kâğıdı', 'Kurşun kalem ve renkli boya kalemleri', 'Delgeç', 'Şerit kurdele veya ip'],
      steps: [
        '1. Madde: Her bir A4 kâğıdını yatay olarak tutup ortadan ikiye düzgünce katlayınız.',
        '2. Madde: Katladığınız sayfaları sırayla iç içe yerleştirerek küçük bir kitapçık formuna getiriniz.',
        '3. Madde: Kitapçığın sol kenarını delgeç yardımıyla eşit mesafede deliniz ve şerit kurdele ile bağlayınız.',
        '4. Madde: Kapak sayfasına "GÜNEŞ GÜNLÜĞÜ", adınızı, soyadınızı ve tarihi yazınız.',
        '5. Madde: İlk sayfaya "Güneş hakkında neler biliyorum?" başlığını atıp ön bilgilerinizi yazınız.',
        '6. Madde: Konu boyunca öğrendiğiniz Güneş katmanlarını, lekelerini ve dönme yönünü günlüğünüze ekleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Performans sonucunda ne öğrendiniz?',
          answer: 'Bu performans görevi ile bilim insanlarının araştırma basamakları deneyimlenmiş, Güneş’in geometrik şeklinin küreye benzediği, katmanlardan meydana geldiği, aşırı sıcak gazlardan oluştuğu ve kendi ekseni etrafında saat yönünün tersine döndüğü kavranmıştır.'
        }
      ],
      interactiveAnswer: 'Model Cevap: Güneş’in yapısı, katmanları ve dönme hareketi bilimsel kayıt tutma disiplini ile somutlaştırılmıştır.'
    },
    {
      id: 'ib-1-1-p21-kopru',
      pageNumber: 'Sayfa 21',
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Güneş’in Geometrik Şekli ve Katmanları (Sayfa 21)',
      badge: 'Köprü Bilgi',
      content: 'Güneş’in geometrik şekli bir küreye benzer. Güneş de tıpkı Dünya’mız gibi iç içe geçmiş harika katmanlardan (çekirdek, ışık küre, renk küre ve taç küre) yaratılmış ve meydana gelmiştir. Güneş katı bir yüzeye sahip değildir; tamamı plazma halindeki sıcak gazlardan meydana gelir.'
    },
    {
      id: 'ib-1-1-p22-etkinlik',
      pageNumber: 'Sayfa 22',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Güneş Gözlemi (Ayşe’nin Teleskop Deneyi) (Sayfa 22)',
      badge: 'Etkinlik İstasyonu',
      steps: [
        '1. Adım: Ayşe, özel koruyucu filtre takılmış teleskopla Güneş yüzeyini 1., 3. ve 5. günlerde gözlemlemiştir.',
        '2. Adım: Güneş yüzeyinde tespit ettiği A, B ve C lekelerini gözlem kâğıdına çizerek konumlarını kaydetmiştir.',
        '3. Adım: Lekelerin gün geçtikçe soldan sağa (batıdan doğuya) doğru düzenli olarak kaydığını belirlemiştir.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Güneş yüzeyindeki koyu renkli bölgeler ne olabilir? Tahminlerinizi yazınız.',
          answer: 'Güneş lekeleridir. Çevrelerindeki 6.000 °C’lik akkor yüzeye göre daha az sıcak (yaklaşık 4.000 °C) oldukları için koyu renkli görünürler.'
        },
        {
          question: 'b. Güneş yüzeyindeki koyu bölgelerin konumları neden değişmiştir?',
          answer: 'Çünkü Güneş kendi ekseni etrafında dönme hareketi yapmaktadır. Lekeler Güneş yüzeyinde sabit olduğundan, Güneş döndükçe lekeler de onunla birlikte yer değiştirir.'
        },
        {
          question: 'c. A, B ve C bölgelerine bakılarak Güneş’in dönme yönü ile ilgili nasıl bir sonuca ulaşılır?',
          answer: 'Güneş’in kendi ekseni etrafında batıdan doğuya (saatin dönme yönünün tersine) doğru döndüğü sonucuna kesin olarak ulaşılır.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Güneş sabit durmaz; kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) doğru döner. Lekelerin soldan sağa kayması Güneş’in dönme hareketinin en açık bilimsel kanıtıdır.',
      qrInfo: {
        title: 'EBA: Güneş’in Özellikleri Etkileşimli İçeriği',
        description: 'Ders kitabının 22. sayfasındaki karekod ile erişilen; Güneş’in katmanlarını, sıcaklığını ve yapısını 3 boyutlu tanıtan EBA etkileşimli simülasyonu.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-1-1-p23-boyut',
      pageNumber: 'Sayfa 23',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Görünen Boyut (İki Top Deneyi) (Sayfa 23)',
      badge: 'Etkinlik İstasyonu',
      materials: ['Büyük voleybol/basketbol topu (Güneş)', 'Küçük pinpon topu (Dünya veya Ay)', 'Metre veya tebeşir'],
      steps: [
        '1. Adım: Küçük topu tutan arkadaşınız gözlemciden 1 metre uzakta dursun.',
        '2. Adım: Büyük topu tutan arkadaşınız ise aynı hizada 25 metre geriye gitsin.',
        '3. Adım: Gözlemci noktasından her iki topun algılanan büyüklüklerini kıyaslayınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Gözlemlerinizden yola çıkarak Güneş’i olduğundan çok küçük görmenizin sebebi ne olabilir?',
          answer: 'Cisimler gözlemciden uzaklaştıkça görünen boyutları (açısal çapları) küçülür. Güneş, Dünya’dan hacimce yaklaşık 1 milyon 300 bin kat büyük olmasına rağmen, Dünya’ya yaklaşık 150 milyon kilometre uzakta olduğu için gökyüzünde madeni para büyüklüğünde görünür.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Uzaklık arttıkça cisimlerin algılanan boyutu küçülür (perspektif etkisi). Güneş ile Ay gökyüzünde neredeyse aynı boyutta algılansa da Güneş Ay’dan katbekat büyüktür; ancak mesafesi çok daha uzaktır.',
      qrInfo: {
        title: 'EBA: Güneş Şarkısı / Müzik Klibi',
        description: 'Ders kitabının 23. sayfasında yer alan, Güneş’in devasa büyüklüğünü ve özelliklerini melodik ve eğlenceli şekilde pekiştiren MEB eğitim klibi.',
        type: 'music'
      }
    },
    {
      id: 'ib-1-1-p24-bilgikutusu1',
      pageNumber: 'Sayfa 24',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Güneş’in Fiziksel Yapısı ve Sıcaklığı (Sayfa 24 Başı Özeti)',
      badge: 'Bilgi Kutusu',
      content: '• Güneş katı bir yüzeye sahip değildir; tamamı aşırı sıcak gazlardan (yaklaşık %73 hidrojen, %25 helyum, %2 diğer gazlar) meydana gelir.\n• Güneş’in çekirdek sıcaklığı yaklaşık 15 milyon °C civarındayken, yüzey sıcaklığı yaklaşık 6.000 °C’dir.\n• Güneş, Samanyolu Galaksisi’ndeki yüz milyarlarca yıldızdan biridir; Dünya’mıza en yakın yıldız olduğu için bu kadar parlak ve büyük görünür.'
    },
    {
      id: 'ib-1-1-p24-bilgi-parker',
      pageNumber: 'Sayfa 24',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Parker Güneş Sondası (Sayfa 24)',
      badge: 'Bilgi İstasyonu',
      content: '2018 yılında fırlatılan Parker Güneş Sondası, tarihte Güneş’e en çok yaklaşan insan yapımı araştırma aracıdır. 1.400 °C’ye dayanan özel karbon kompozit kalkanıyla Güneş’in taç küresinden (atmosferinden) örnekler toplayarak Güneş rüzgârlarını ve patlamalarını araştırmaktadır.'
    },
    {
      id: 'ib-1-1-p24-bilgikutusu2',
      pageNumber: 'Sayfa 24',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Güneş Lekesi Tanımı ve Özellikleri (Sayfa 24)',
      badge: 'Önemli Tanım',
      content: '• GÜNEŞ LEKESİ: Güneş yüzeyinde manyetik alan yoğunlaşması sonucu çevrelerindeki akkor yüzeye göre daha az sıcak olan (yaklaşık 4.000 °C) ve teleskopla bakıldığında koyu renkli görünen bölgelerdir.\n• Lekeler tek tek veya kümeler hâlinde bulunabilir ve Güneş döndükçe yüzeyde kayarlar.'
    },
    {
      id: 'ib-1-1-p24-bilgi-galileo',
      pageNumber: 'Sayfa 24',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Galileo Galilei ve Güneş Lekeleri (Sayfa 24)',
      badge: 'Bilgi İstasyonu',
      content: 'İtalyan bilim insanı Galileo Galilei, 1610’lu yıllarda teleskopla Güneş lekelerini düzenli olarak gözlemlemiş, lekelerin batıdan doğuya doğru hareket ettiğini çizimlerle kanıtlayarak Güneş’in kendi ekseni etrafında döndüğünü tarihte ilk kez bilim dünyasına ispatlamıştır.'
    },
    {
      id: 'ib-1-1-p24-unutmayalim',
      pageNumber: 'Sayfa 24',
      type: 'bilgi_kutusu',
      title: 'Unutmayalım! Güneş Gözlemi Güvenlik Uyarısı (Sayfa 24)',
      badge: 'Güvenlik Uyarısı',
      content: 'Güneş’e çıplak gözle, dürbünle, kamera merceğiyle veya normal teleskopla doğrudan ASLA bakılmamalıdır! Güneş ışınları göz merceğini yakarak kalıcı görme kaybına ve körlüğe yol açabilir. Gözlemler mutlaka özel sertifikalı Güneş filtreleri veya projeksiyon (yansıtma) yöntemiyle yapılmalıdır.'
    },
    {
      id: 'ib-1-1-p24-qr',
      pageNumber: 'Sayfa 24',
      type: 'karekod',
      title: 'Çalışmayı Değerlendirmek İçin: EBA Öz Değerlendirme Formu (Sayfa 24)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'Güneş Konusu Öz Değerlendirme Formu',
        description: 'Ders kitabının 24. sayfasında yer alan, öğrencinin konudaki kazanımlarını test etmesi için hazırlanmış EBA dijital öz değerlendirme formu.',
        type: 'evaluation'
      },
      content: '📌 Karekodun İçeriği ve Sırası (Sayfa 24): "Çalışmayı Değerlendirmek İçin" başlığı altında verilen bu karekod, öğrencilerin Güneş’in yapısı, katmanları, görünen büyüklüğü ve dönme hareketi konularındaki öğrenmelerini pekiştirmeleri için hazırlanmış dijital değerlendirme formudur.'
    },
    {
      id: 'ib-1-1-p25-pekistirme',
      pageNumber: 'Sayfa 25',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1: Güneş Bilgi Çıkış Şeması (Sayfa 25)',
      badge: 'Pekiştirme İstasyonu',
      reinforcementData: {
        type: 'branching_keys',
        solution: '1. Adım: "Güneş, Dünya’nın ısı ve ışık kaynağıdır." ➔ DOĞRU\n2. Adım: "Güneş, kendi ekseni etrafında dönme hareketi yapar." ➔ DOĞRU\n3. Adım: "Güneş katmanları, Güneş’in yüzeyinde koyu renkli görünen bölgelerdir." ➔ YANLIŞ (Lekeler katman değil, yüzeydeki soğuk bölgelerdir)\nSonuç: Hatasız adımlarla 2. ÇIKIŞA ulaşılır.'
      },
      evaluationQuestions: [
        {
          question: 'Pekiştirme İstasyonu Çıkış Sorusu: Doğru yola giden adımları belirleyerek hangi çıkışa ulaşıldığını bulunuz.',
          answer: '1. Önerme: DOĞRU ➔ 2. Önerme: DOĞRU ➔ 3. Önerme: YANLIŞ ➔ Hedef: 2. ÇIKIŞ. (Kalan alternatif dallar True/False soru havuzuna aktarılmıştır).'
        }
      ],
      interactiveAnswer: 'Doğru Yol Analizi: 1. Adım: DOĞRU ➔ 2. Adım: DOĞRU ➔ 3. Adım: YANLIŞ ➔ 2. ÇIKIŞ.'
    },
    {
      id: 'ib-1-1-p25-qr',
      pageNumber: 'Sayfa 25',
      type: 'karekod',
      title: '1. Bölüm Pekiştirme Karekodu (Sayfa 25)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '1. Bölüm Değerlendirme ve Pekiştirme Testi',
        description: 'Ders kitabının 25. sayfasındaki karekod ile erişilen; Güneş’in yapısı ve dönme hareketi konusu pekiştirme soruları.',
        type: 'evaluation'
      },
      content: '📌 Karekodun İçeriği (Sayfa 25): 1. Bölüm sonu pekiştirme sorularının çözümü ve EBA dijital başarı değerlendirmesi.'
    }
  ],
  'unit1-sub2': [
    {
      id: 'ib-1-2-p26-baslik',
      pageNumber: 'Sayfa 26',
      type: 'hazirlik_istasyonu',
      title: 'Ana Başlık: GÖKYÜZÜNDEKİ KOMŞUMUZ AY (Sayfa 26) - Hazırlık & Merak İstasyonları',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Kitaptaki Hazırlık ve Merak İstasyonu Soruları:',
      evaluationQuestions: [
        {
          question: 'Hazırlık Sorusu: Ay, birer hafta arayla gökyüzünde gözlemlendiğinde neden farklı şekillerde görülür? Fikirlerinizi yazınız.',
          answer: 'Çünkü Ay, Dünya’nın etrafında dolanırken Güneş’ten aldığı ışığı farklı açılarla yansıtır. Dünya’dan bakıldığında Ay’ın aydınlanan kısımlarının görünümü sürekli ve harika bir döngüyle değişir.'
        },
        {
          question: 'Merak Sorusu: Ay’a gidebilseydiniz orada nelerle karşılaşırdınız? Fikirlerinizi yazınız.',
          answer: 'Grimsi tozla kaplı geniş ovalar, yüksek dağlar, derin vadiler ve sayısız meteor çarpması sonucu açılmış dev krater çukurları görürdük. Rüzgâr, yağmur ve su olmadığı için tamamen sessiz ve hareketsiz bir ortam vardır.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Ay, Dünya’mızın tek doğal uydusudur ve geometrik şekli tıpkı Güneş ve Dünya gibi bir küreye benzer.'
    },
    {
      id: 'ib-1-2-p26-qr',
      pageNumber: 'Sayfa 26',
      type: 'karekod',
      title: 'Ay’ın Yapısı ve Keşfi Tanıtım Karekodu (Sayfa 26)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'EBA: Ay’ın Yapısı ve Özellikleri',
        description: 'Ders kitabının 26. sayfasında yer alan, Ay’ın fiziksel özelliklerini ve Dünya’ya olan mesafesini gösteren multimedya animasyonu.',
        type: 'video'
      },
      content: '📌 Karekodun İçeriği (Sayfa 26): Ay’ın kraterli yüzey yapısını, çapını ve Dünya etrafındaki hareketini tanıtan EBA eğitim içeriği.'
    },
    {
      id: 'ib-1-2-p27-etkinlik',
      pageNumber: 'Sayfa 27',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Ay’ın Keşfi (Sayfa 27)',
      badge: 'Etkinlik İstasyonu',
      steps: [
        '1. Adım: Kitaptaki Ay yüzeyi fotoğraflarını ve astronotların gözlem kayıtlarını inceleyiniz.',
        '2. Adım: Ay yüzeyindeki açık ve koyu renkli bölgeleri, derin çukurlukları ve tepeleri karşılaştırınız.',
        '3. Adım: Gök taşlarının Dünya ve Ay atmosferindeki etkilerini analiz ediniz.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Ay’ın geometrik şeklini tanımlayınız.',
          answer: 'Ay, tıpkı Güneş ve Dünya gibi kusursuz bir küre şekline sahiptir.'
        },
        {
          question: 'b. Ay’a gittiğinizi hayal ediniz. Ay yüzeyinde neler görürdünüz?',
          answer: 'Grimsi tozla kaplı geniş düzlükler (Ay denizleri), krater adı verilen sayısız çukur, dik dağlar ve vadiler görürdük. Atmosfer olmadığı için gökyüzü gündüz bile zifiri siyahtır.'
        },
        {
          question: 'c. Ay yüzeyinde gözlemlenen çukur alanlar (kraterler) nasıl oluşmuş olabilir?',
          answer: 'Uzay boşluğundaki gök taşlarının (meteorların) Ay’ın incecik atmosferini kolayca geçerek büyük bir hızla yüzeye çarpması sonucu oluşmuştur.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Ay küre şeklindedir. Atmosferi yok denecek kadar ince olduğu için rüzgâr ve yağmur gibi hava olayları görülmez, sıcaklık farkları çok yüksektir ve çarpan meteorlar silinmeyen kraterler oluşturur.'
    },
    {
      id: 'ib-1-2-p28-bilgikutusu',
      pageNumber: 'Sayfa 28',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Ay’ın Temel Boyutları ve Atmosferi (Sayfa 28 Özeti)',
      badge: 'Bilgi Kutusu',
      content: '• Ay’ın Dünya’ya ortalama uzaklığı yaklaşık 384.000 kilometredir.\n• Ay’ın çapı Dünya’nın çapının yaklaşık 1/4’ü (dörtte biri) kadardır. (Dünya basketbol topuysa Ay tenis topu kadardır).\n• Ay’ın yer çekimi kuvveti Dünya’nın yaklaşık 6’da 1’i kadardır.\n• Ay’da atmosfer yok denecek kadar azdır; bu yüzden hava olayları yaşanmaz ve gece-gündüz sıcaklık farkı 200 °C’yi aşar.'
    },
    {
      id: 'ib-1-2-p28-bilgi-apollo',
      pageNumber: 'Sayfa 28',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Neil Armstrong ve Apollo 11 (Sayfa 28)',
      badge: 'Bilgi İstasyonu',
      content: '1969 yılında Apollo 11 göreviyle Ay’a ilk ayak basan astronot Neil Armstrong olmuştur. Ay’da rüzgâr, yağmur veya akarsu gibi hava ve erozyon olayları gerçekleşmediği için Armstrong’un Ay toprağında bıraktığı ayak izleri aradan onlarca yıl geçmesine rağmen ilk günkü gibi bozulmadan durmaktadır.'
    },
    {
      id: 'ib-1-2-p28-qr',
      pageNumber: 'Sayfa 28',
      type: 'karekod',
      title: 'Ay Yüzeyi ve Kraterler 3 Boyutlu Modeli Karekodu (Sayfa 28)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'EBA: Ay Yüzeyi 3D Simülasyonu',
        description: 'Ders kitabının 28. sayfasındaki karekod ile erişilen; Ay yüzeyindeki kraterleri ve Apollo iniş bölgesini gösteren 3D simülasyon.',
        type: 'interactive'
      },
      content: '📌 Karekodun İçeriği (Sayfa 28): Öğrencilerin Ay’ın dağlarını ve kraterlerini fareyle veya dokunmatik ekranla 360 derece döndürerek incelemelerini sağlayan etkileşimli içeriktir.'
    },
    {
      id: 'ib-1-2-p29-bilgi-tua',
      pageNumber: 'Sayfa 29',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Millî Uzay Programı ve AYAP (Sayfa 29)',
      badge: 'Bilgi İstasyonu',
      content: 'Türkiye Uzay Ajansı (TUA) öncülüğünde yürütülen Millî Uzay Programı kapsamında "Ay Araştırma Programı" (AYAP) hayata geçirilmiştir. Türk mühendis ve bilim insanları tarafından geliştirilen yerli uzay aracımızın Ay yörüngesine ulaştırılması ve Ay yüzeyine sert iniş yaparak bilimsel veriler toplaması hedeflenmektedir.'
    },
    {
      id: 'ib-1-2-p29-bilgikutusu-roket',
      pageNumber: 'Sayfa 29',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Millî Hibrit Roket Motorumuz (Sayfa 29)',
      badge: 'Millî Teknoloji',
      content: 'Türkiye, Ay misyonunda kullanılmak üzere dünyada sayılı ülkenin sahip olduğu ileri hibrit roket motoru teknolojisini başarıyla ateşlemiş ve uzay liginde bağımsız güç olma yolunda tarihi bir adım atmıştır.'
    },
    {
      id: 'ib-1-2-p29-qr',
      pageNumber: 'Sayfa 29',
      type: 'karekod',
      title: 'TUA Millî Uzay Programı Tanıtım Karekodu (Sayfa 29)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'Türkiye Uzay Ajansı AYAP Belgeseli',
        description: 'Ders kitabının 29. sayfasındaki karekod ile izlenen; Millî Uzay Programı ve Ay görevinin basamaklarını anlatan video.',
        type: 'video'
      },
      content: '📌 Karekodun İçeriği (Sayfa 29): TUA tarafından hazırlanan ve Türkiye’nin uzay vizyonunu gençlere aktaran resmi bilgilendirme içeriğidir.'
    },
    {
      id: 'ib-1-2-p30-etkinlik',
      pageNumber: 'Sayfa 30',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Ay’ın Hareketleri ve Görünen Yüzü (Sayfa 30)',
      badge: 'Etkinlik İstasyonu',
      steps: [
        '1. Adım: Bir öğrenci Dünya’yı, diğer öğrenci ise Ay’ı temsil etmek üzere karşılıklı dursun.',
        '2. Adım: Ay’ı temsil eden öğrenci, yüzünü sürekli Dünya’ya dönük tutarak Dünya etrafında bir tam tur dönsün.',
        '3. Adım: Bu hareket sırasında Ay’ın kendi ekseninde dönüp dönmediğini sınıfla birlikte tartışınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Dünya’yı temsil eden arkadaşınız, Ay’ı temsil eden arkadaşının hep aynı yüzünü görmüştür. Bu durum Ay’ın hangi hareket özelliğiyle ilgilidir?',
          answer: 'Ay’ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresinin birbirine tamamen eşit (yaklaşık 27,3 gün) olmasıyla ilgilidir. Bu harika nizam sebebiyle Dünya’dan bakıldığında Ay’ın daima aynı yüzü görülür; arka yüzü hiçbir zaman Dünya’dan doğrudan görülemez.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Ay hem kendi ekseni etrafında döner (27,3 gün) hem de Dünya etrafında dolanır (27,3 gün). Bu iki sürenin eşit olması, Dünya’dan daima Ay’ın aynı yüzünün görülmesini sağlar.'
    },
    {
      id: 'ib-1-2-p31-cagini-asanlar',
      pageNumber: 'Sayfa 31',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: Ali Kuşçu ve Caca Bey (Sayfa 31)',
      badge: 'Çağını Aşanlar',
      content: 'Büyük Türk-İslam gök bilimcisi Ali Kuşçu (1403-1474), Ay’ın ilk ayrıntılı haritasını çizmiştir. NASA bu büyük hizmeti anısına Ay’daki kraterlerden birine "Ali Kuşçu Krateri" adını vermiştir. Kırşehir’deki Caca Bey Medresesi ise kubbesi açık ve altında su kuyusu bulunan dünyanın ilk uygulamalı astronomi okullarındandır.'
    },
    {
      id: 'ib-1-2-p31-pekistirme',
      pageNumber: 'Sayfa 31',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu: Ay Kavram Eşleştirme ve Çıkış Şeması (Sayfa 31)',
      badge: 'Pekiştirme İstasyonu',
      reinforcementData: {
        type: 'branching_keys',
        solution: '1. Ay, Dünya’mızın tek doğal uydusudur ➔ DOĞRU\n2. Ay yüzeyinde hava olayları (rüzgâr, yağmur) görülür ➔ YANLIŞ (Atmosfer olmadığı için hava olayı yoktur)\n3. Ay’ın dönme ve dolanma süreleri birbirine eşittir ➔ DOĞRU\nSonuç: Hatasız adımlarla 1. ÇIKIŞA ulaşılır.'
      },
      evaluationQuestions: [
        {
          question: 'Pekiştirme Çıkış Sorusu: Şemadaki doğru yolu takip ederek hangi çıkışa ulaştığınızı yazınız.',
          answer: '1. Adım: DOĞRU ➔ 2. Adım: YANLIŞ ➔ 3. Adım: DOĞRU ➔ Ulaşılan Çıkış: 1. ÇIKIŞ.'
        }
      ],
      interactiveAnswer: 'Doğru Yol Analizi: 1-DOĞRU ➔ 2-YANLIŞ ➔ 3-DOĞRU ➔ 1. Çıkış. Kalan seçenekler True/False bölümüne aktarılmıştır.'
    },
    {
      id: 'ib-1-2-p31-qr',
      pageNumber: 'Sayfa 31',
      type: 'karekod',
      title: 'Ay’ın Yapısı ve Hareketleri Değerlendirme Karekodu (Sayfa 31)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '2. Bölüm Pekiştirme Etkinliği',
        description: 'Ders kitabının 31. sayfasında yer alan, Ay’ın yapısı ve hareketleri konusunu ölçen EBA dijital testi.',
        type: 'evaluation'
      },
      content: '📌 Karekodun İçeriği (Sayfa 31): 2. Bölüm kazanımlarını değerlendiren interaktif soru bankası.'
    }
  ],
  'unit1-sub3': [
    {
      id: 'ib-1-3-p32-baslik',
      pageNumber: 'Sayfa 32',
      type: 'hazirlik_istasyonu',
      title: 'Ana Başlık: AY’IN EVRELERİ (Sayfa 32) - Hazırlık & Merak İstasyonları',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Kitaptaki Hazırlık ve Merak İstasyonu Soruları:',
      evaluationQuestions: [
        {
          question: 'Hazırlık Sorusu: Ay gökyüzünde neden bazen yuvarlak, bazen yarım, bazen de ince bir hilal şeklinde görünür? Fikirlerinizi yazınız.',
          answer: 'Ay, Dünya etrafında dolanırken Güneş ışığı alan aydınlık kısmının Dünya’dan görülme açısı sürekli değişir. Bu nedenle gökyüzünde farklı şekillerde (evrelerde) algılanır.'
        },
        {
          question: 'Merak Sorusu: Ay ışık kaynağı mıdır? Geceleri nasıl bu kadar parlak ışık saçar?',
          answer: 'Ay bir ışık kaynağı DEĞİLDİR! Tıpkı bir ayna gibi, üzerine düşen Güneş ışınlarını Dünya’ya yansıttığı için geceleri parlak görünür.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Ay doğal bir ışık kaynağı değildir. Evreler, Ay’ın Dünya etrafındaki dolanması sonucu meydana gelir.'
    },
    {
      id: 'ib-1-3-p32-qr',
      pageNumber: 'Sayfa 32',
      type: 'karekod',
      title: 'Ay’ın Evreleri Giriş Animasyonu Karekodu (Sayfa 32)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'EBA: Ay’ın Evreleri Animasyonu',
        description: 'Ders kitabının 32. sayfasındaki karekod ile erişilen; Ay’ın 29,5 günlük evre geçişlerini gösteren görsel animasyon.',
        type: 'video'
      },
      content: '📌 Karekodun İçeriği (Sayfa 32): Ay’ın Yeni Ay, Hilal, İlk Dördün, Şişkin Ay, Dolunay ve Son Dördün evrelerinin gökyüzündeki sıralı görünümünü canlandıran eğitim videosu.'
    },
    {
      id: 'ib-1-3-p33-kopru',
      pageNumber: 'Sayfa 33',
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Işığın Yansıması ve Ay’ın Evreleri (Sayfa 33)',
      badge: 'Köprü Bilgi',
      content: 'Ay, tıpkı Dünya gibi Güneş’ten aldığı ışığı yansıtır. Ay’ın Güneş’e bakan yarısı daima aydınlık, diğer yarısı ise daima karanlıktır. Dünya’dan bakıldığında bu aydınlık bölgenin gördüğümüz kısmı Ay Dünya etrafında dolandıkça değişir; işte bu görünümlere "Ay’ın Evreleri" denir.'
    },
    {
      id: 'ib-1-3-p34-etkinlik',
      pageNumber: 'Sayfa 34-35',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işıldayan Ay ve Evreler Modeli (Sayfa 34-35)',
      badge: 'Etkinlik İstasyonu',
      materials: ['Kürdan takılmış pinpon topu (Ay)', 'Kuvvetli el feneri (Güneş)', 'Gözlemci öğrenci (Dünya)'],
      steps: [
        '1. Adım: El fenerini masanın bir ucuna sabitleyerek odayı karartınız.',
        '2. Adım: Gözlemci öğrenci kendi etrafında yavaşça dönerken pinpon topunu kol mesafesinde tutsun.',
        '3. Adım: Topun aydınlanan kısmının gözlemciye dönük görünümünü sırasıyla (Yeni Ay, İlk Dördün, Dolunay, Son Dördün) çiziniz.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Top Güneş (fener) ile gözlemci arasına girdiğinde gözlemci aydınlık yüzü görebildi mi? Hangi evredir?',
          answer: 'Hayır, topun karanlık yüzü gözlemciye dönüktür; bu evre YENİ AY evresidir.'
        },
        {
          question: 'b. Gözlemci fener ile topun arasına girdiğinde top nasıl göründü? Hangi evredir?',
          answer: 'Topun aydınlık yüzü tamamen gözlemciye bakar, eksiksiz bir daire şeklinde parlar; bu evre DOLUNAY evresidir.'
        },
        {
          question: 'c. Top gözlemcinin sağına veya soluna geldiğinde nasıl göründü?',
          answer: 'Sağ tarafındayken düz "D" biçiminde yarım daire (İLK DÖRDÜN), sol tarafındayken ters "D" biçiminde yarım daire (SON DÖRDÜN) olarak görüldü.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Ay’ın 4 ana evresi (Yeni Ay, İlk Dördün, Dolunay, Son Dördün) ve 2 ara evresi (Hilal, Şişkin Ay) vardır. İki ana evre arası yaklaşık 1 haftadır (7 gün).'
    },
    {
      id: 'ib-1-3-p35-bilgikutusu-bayrak',
      pageNumber: 'Sayfa 35',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Türk Bayrağındaki Hilal ve Hilal Ara Evresi (Sayfa 35)',
      badge: 'Kültür & Maarif',
      content: 'Şanlı bayrağımızda yer alan Hilal, Ay’ın Yeni Ay ile İlk Dördün arasında veya Son Dördün ile Yeni Ay arasında aldığı zarif yay ("C" veya ters "C") biçimidir. Hilal, gökyüzünün en estetik ara evresidir.'
    },
    {
      id: 'ib-1-3-p36-gozlemgunlugu',
      pageNumber: 'Sayfa 36',
      type: 'gozlemleyelim',
      title: 'Gözlem Günlüğü Tablosu ve 30 Günlük Döngü Analizi (Sayfa 36)',
      badge: 'Performans Değerlendirme',
      prompt: '18. sayfada başlatılan 30 günlük Ay gözlemi tablosunun analizi:\nGözlem sonuçlarınızı arkadaşlarınızın takvim çizimleriyle karşılaştırınız. Evrelerin sırasını ve kaç günde bir tekrar ettiğini açıklayınız.',
      interactiveAnswer: 'Öğrenci Analiz Rehberi: Ay yaklaşık 29,5 günde bir tüm evrelerini tamamlayarak yeniden Yeni Ay evresine döner. Evre sırası: Yeni Ay ➔ Hilal ➔ İlk Dördün ➔ Şişkin Ay ➔ Dolunay ➔ Şişkin Ay ➔ Son Dördün ➔ Hilal ➔ Yeni Ay.'
    },
    {
      id: 'ib-1-3-p37-bilgi-evreler',
      pageNumber: 'Sayfa 37',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Ay’ın 4 Ana ve 2 Ara Evresi (Sayfa 37)',
      badge: 'Bilgi İstasyonu',
      content: '1. YENİ AY: Ay, Güneş ile Dünya arasındadır. Karanlık yüzü Dünya’ya dönüktür, gökyüzünde görünmez.\n2. İLK DÖRDÜN: Yeni Ay’dan 1 hafta sonra görülür. Ay’ın sağ yarısı aydınlık düz "D" harfi gibidir.\n3. DOLUNAY: Yeni Ay’dan 2 hafta sonra görülür. Dünya, Güneş ile Ay arasındadır. Ay tam bir daire gibi parlar.\n4. SON DÖRDÜN: Dolunay’dan 1 hafta sonra görülür. Ay’ın sol yarısı aydınlık ters "D" harfi gibidir.\nARA EVRELER: Hilal ("C" şekli) ve Şişkin Ay (yarım daireden büyük, dolunaydan küçük görünüm).'
    },
    {
      id: 'ib-1-3-p37-bilgikutusu-sure',
      pageNumber: 'Sayfa 37',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: İki Ana Evre Arasındaki Süre (Sayfa 37)',
      badge: 'Sınav Hap Notu',
      content: '• İki ana evre arasında geçen süre YAKLAŞIK 1 HAFTADIR (7 GÜN).\n• Örneğin Yeni Ay’dan İlk Dördün’e geçiş 1 hafta, Dolunay’a geçiş 2 hafta, Son Dördün’e geçiş 3 hafta, tekrar Yeni Ay’a dönüş yaklaşık 4 haftadır (29,5 gün).'
    },
    {
      id: 'ib-1-3-p37-qr',
      pageNumber: 'Sayfa 37',
      type: 'karekod',
      title: 'EBA Ay’ın Evreleri İnteraktif Çarkı Karekodu (Sayfa 37)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: 'EBA: Ay Evreleri İnteraktif Çarkı',
        description: 'Ders kitabının 37. sayfasındaki karekod ile erişilen; evreleri sıralama ve eşleştirme dijital oyunu.',
        type: 'interactive'
      },
      content: '📌 Karekodun İçeriği (Sayfa 37): Öğrencilerin Ay’ın evrelerini doğru takvim sırasına dizmelerini sağlayan eğitici EBA oyunu.'
    },
    {
      id: 'ib-1-3-p38-performans',
      pageNumber: 'Sayfa 38-39',
      type: 'performans_istasyonu',
      title: 'Performans İstasyonu: Kendi Evre Çarkımı Tasarlıyorum (Sayfa 38-39)',
      badge: 'Performans Görevi',
      prompt: 'Görevin Tarifi: İki adet dairesel karton ve bir raptiye kullanarak Ay’ın Dünya etrafında dönerken aldığı evreleri gösteren hareketli bir evre çarkı tasarlayınız.',
      steps: [
        '1. Madde: Büyük dairenin kenarlarına sırasıyla 8 evrenin çizimini yapınız.',
        '2. Madde: Küçük dairenin üzerine Dünya’yı çizip evreleri gösteren bir pencere açınız.',
        '3. Madde: Daireleri merkezden birleştirerek çarkı döndürünüz ve pencerelerden sırayla evreleri gözlemleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Performans sonucunda ne öğrendiniz?',
          answer: 'Ay’ın evrelerinin rastgele değil, Dünya etrafındaki dolanma hareketine bağlı olarak periyodik ve kusursuz bir matematiksel sırayla gerçekleştiği kavranmıştır.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Evre çarkı modeli sayesinde evrelerin birbirini takip eden döngüsel yapısı somutlaştırılmıştır.'
    },
    {
      id: 'ib-1-3-p39-bilgikutusu-terminator',
      pageNumber: 'Sayfa 39',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Terminatör Çizgisi (Sayfa 39)',
      badge: 'Önemli Tanım',
      content: 'Ay yüzeyinde aydınlık bölge ile karanlık bölgeyi birbirinden ayıran keskin sınır çizgisine "Terminatör" adı verilir. Teleskopla bu çizginin üzeri incelendiğinde kraterlerin derin gölgeleri en net biçimde görülür.'
    },
    {
      id: 'ib-1-3-p40-bilgi-hicri',
      pageNumber: 'Sayfa 40',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Hicri (Kameri) Takvim ve Ay’ın Hareketi (Sayfa 40)',
      badge: 'Kültür & Maarif',
      content: 'Ramazan ayı, Kurban Bayramı ve kandil geceleri Ay’ın Dünya etrafındaki dolanma hareketini esas alan Hicri (Kameri) takvime göre belirlenir. Yeni Ay’dan sonra gökyüzünde ilk hilalin görülmesiyle yeni bir hicri ay başlar. Bir hicri yıl 354 gündür; bu yüzden dini günler her yıl miladi takvime göre 10-11 gün önce gelir.'
    },
    {
      id: 'ib-1-3-p40-bilgikutusu-superay',
      pageNumber: 'Sayfa 40',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Süper Ay Doğa Olayı (Sayfa 40)',
      badge: 'Gökyüzü Olayı',
      content: 'Ay’ın elips şeklindeki yörüngesinde Dünya’ya en yakın olduğu noktada Dolunay evresinde bulunması olayına "Süper Ay" denir. Süper Ay gerçekleştiğinde Ay gökyüzünde normalden %14 daha büyük ve %30 daha parlak görünür.'
    },
    {
      id: 'ib-1-3-p41-pekistirme',
      pageNumber: 'Sayfa 41',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu: Ay’ın Evreleri Şema ve Eşleştirme İstasyonu (Sayfa 41)',
      badge: 'Pekiştirme İstasyonu',
      reinforcementData: {
        type: 'branching_keys',
        solution: '1. Yeni Ay’dan 1 hafta sonra İlk Dördün görülür ➔ DOĞRU\n2. Dolunay evresinde Ay’ın Dünya’ya bakan yüzü tamamen karanlıktır ➔ YANLIŞ (Tamamen aydınlıktır)\n3. İki ana evre arası yaklaşık 7 gündür ➔ DOĞRU\nSonuç: Hatasız adımlarla 1. ÇIKIŞA ulaşılır.'
      },
      evaluationQuestions: [
        {
          question: 'Pekiştirme Çıkış Sorusu: Evreler şemasında doğru yolu takip ederek ulaşılan çıkışı yazınız.',
          answer: '1. Adım: DOĞRU ➔ 2. Adım: YANLIŞ ➔ 3. Adım: DOĞRU ➔ Hedef: 1. ÇIKIŞ. Kalan dallar True/False bölümüne aktarılmıştır.'
        }
      ],
      interactiveAnswer: 'Doğru Yol Analizi: 1-DOĞRU ➔ 2-YANLIŞ ➔ 3-DOĞRU ➔ 1. Çıkış.'
    },
    {
      id: 'ib-1-3-p41-qr',
      pageNumber: 'Sayfa 41',
      type: 'karekod',
      title: 'Ay’ın Evreleri Öz Değerlendirme ve Pekiştirme Karekodu (Sayfa 41)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '3. Bölüm Pekiştirme ve Değerlendirme',
        description: 'Ders kitabının 41. sayfasında yer alan; Ay’ın evrelerini ve sürelerini ölçen EBA değerlendirme içeriği.',
        type: 'evaluation'
      },
      content: '📌 Karekodun İçeriği (Sayfa 41): 3. Bölüm sonu evre tanıma ve süre hesaplama dijital başarı testi.'
    }
  ],
  'unit1-sub4': [
    {
      id: 'ib-1-4-p42-baslik',
      pageNumber: 'Sayfa 42',
      type: 'hazirlik_istasyonu',
      title: 'Ana Başlık: GÜNEŞ, DÜNYA VE AY’IN BİRBİRİNE GÖRE HAREKETLERİ (Sayfa 42) - Hazırlık & Merak İstasyonları',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Kitaptaki Hazırlık ve Merak İstasyonu Soruları:',
      evaluationQuestions: [
        {
          question: 'Hazırlık Sorusu: Güneş, Dünya ve Ay uzayda aynı anda nasıl bir hareket uyumu içindedir? Fikirlerinizi yazınız.',
          answer: 'Dünya Güneş’in etrafında dolanırken, Ay da hem kendi ekseni etrafında döner hem Dünya etrafında dolanır hem de Dünya ile birlikte Güneş etrafında dolanır. Hepsi saat yönünün tersine hareket eder.'
        },
        {
          question: 'Merak Sorusu: Güneş de uzayda hareket eder mi, yoksa tamamen hareketsiz midir?',
          answer: 'Güneş tamamen hareketsiz DEĞİLDİR! Güneş kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) döner; ayrıca Samanyolu Galaksisi’nin merkezi etrafında devasa bir yörüngede dolanır.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Güneş, Dünya ve Ay’ın hareketleri birbiriyle mükemmel bir ahenk ve matematiksel orantı içindedir.'
    },
    {
      id: 'ib-1-4-p43-kopru',
      pageNumber: 'Sayfa 43',
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Dönme ve Dolanma Hareketleri Arasındaki Fark (Sayfa 43)',
      badge: 'Köprü Bilgi',
      content: '• DÖNME HAREKETİ: Bir gök cisminin kendi ekseni etrafında tur atmasıdır (Örn: Dünya’nın kendi ekseninde dönmesi 24 saat sürer).\n• DOLANMA HAREKETİ: Bir gök cisminin başka bir gök cismi etrafında çizdiği yörüngede tur atmasıdır (Örn: Dünya’nın Güneş etrafında dolanması 365 gün 6 saat sürer).\n• Güneş, Dünya ve Ay’ın dönme ve dolanma hareketlerinin TÜMÜ SAATİN DÖNME YÖNÜNÜN TERSİNE (batıdan doğuya) gerçekleşir!'
    },
    {
      id: 'ib-1-4-p44-etkinlik',
      pageNumber: 'Sayfa 44-45',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Güneş, Dünya ve Ay Modeli (Üç Arkadaşın Hareketi) (Sayfa 44-45)',
      badge: 'Etkinlik İstasyonu',
      steps: [
        '1. Adım: Bir öğrenci Güneş (merkezde sabit dönen), bir öğrenci Dünya, bir öğrenci de Ay olsun.',
        '2. Adım: Güneş kendi ekseninde saat yönünün tersine dönsün.',
        '3. Adım: Dünya kendi ekseninde dönerken aynı zamanda Güneş’in etrafında geniş bir çemberde dolansın.',
        '4. Adım: Ay kendi ekseninde dönerken Dünya’nın etrafında dönsün ve Dünya ile birlikte Güneş etrafındaki tura katılsın.'
      ],
      evaluationQuestions: [
        {
          question: '1. Dünya’nın ve Ay’ın dolanma yönleri nasıldır?',
          answer: 'Her ikisi de saatin dönme yönünün tersine (batıdan doğuya) doğru dolanır.'
        },
        {
          question: '2. Dünya 1 tam dolanımını tamamladığında (1 yılda) Ay Dünya etrafında yaklaşık kaç tur atmış olur?',
          answer: 'Ay, Dünya etrafındaki bir tam dolanımını yaklaşık 27,3 günde tamamladığı için 1 yılda yaklaşık 12-13 kez dolanmış olur.'
        },
        {
          question: '3. Ay’ın yaptığı hareketler kaç tanedir?',
          answer: 'Ay 3 temel hareket yapar: 1) Kendi ekseni etrafında dönme, 2) Dünya etrafında dolanma, 3) Dünya ile birlikte Güneş etrafında dolanma.'
        }
      ],
      resultInfoBox: 'Etkinlik Sonucunda Ne Öğrendik: Güneş, Dünya ve Ay’ın dönme ve dolanma yönleri ortaktır (saat yönünün tersi). Ay 3 farklı hareket icra ederken, Dünya 2 hareket (dönme ve dolanma), Güneş ise kendi ekseninde dönme hareketi yapar.',
      qrInfo: {
        title: 'EBA: Güneş, Dünya ve Ay Hareketi Simülatörü',
        description: 'Ders kitabının 45. sayfasındaki karekod ile erişilen; üç gök cisminin dönme ve dolanma hareketlerini 3 boyutlu hızlandırarak gösteren dijital simülatör.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-1-4-p46-performans',
      pageNumber: 'Sayfa 46-47',
      type: 'performans_istasyonu',
      title: 'Performans İstasyonu: Güneş, Dünya ve Ay Modeli Tasarımı (Sayfa 46-47)',
      badge: 'Performans Görevi',
      prompt: 'Görevin Tarifi: Farklı boyutlardaki strafor köpük küreler, tel veya dişli çarklar kullanarak Güneş, Dünya ve Ay’ın dönme ve dolanma hareketlerini eş zamanlı gösteren bir fen modeli tasarlayınız.',
      steps: [
        '1. Madde: En büyük küreyi sarıya boyayıp Güneş yapınız.',
        '2. Madde: Orta küreyi mavi-yeşile boyayıp Dünya yapınız.',
        '3. Madde: En küçük küreyi griye boyayıp Ay yapınız.',
        '4. Madde: İnce tel veya plastik kollarla Ay’ı Dünya’ya, Dünya’yı Güneş’e bağlayınız ve saat yönünün tersi ok işaretleri çiziniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Performans sonucunda ne öğrendiniz?',
          answer: 'Güneş, Dünya ve Ay’ın büyüklük oranları, yörünge yolları ve hareket yönleri yaparak-yaşayarak 3 boyutlu bir modelle kavranmıştır.'
        }
      ],
      interactiveAnswer: 'Model Çıkarım: Model tasarımıyla uzaydaki devasa nizam sınıfta somut hale getirilmiştir.'
    },
    {
      id: 'ib-1-4-p47-bilgikutusu-boyut',
      pageNumber: 'Sayfa 47',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Büyüklük Kıyaslaması (Sayfa 47)',
      badge: 'Görsel Karşılaştırma',
      content: '• Güneş bir basketbol topu veya devasa bir karpuz büyüklüğünde olsaydı;\n• Dünya küçük bir leblebi veya bilye büyüklüğünde olurdu;\n• Ay ise küçük bir mercimek tanesi büyüklüğünde olurdu.'
    },
    {
      id: 'ib-1-4-p48-bilgi-ulugbey',
      pageNumber: 'Sayfa 48',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Uluğ Bey ve Semerkant Rasathanesi (Sayfa 48)',
      badge: 'Çağını Aşanlar',
      content: 'Büyük Türk astronom ve hükümdarı Uluğ Bey (1394-1449), Semerkant Rasathanesi’ni kurmuş ve 1018 yıldızın konumunu belirlemiştir. Bir Güneş yılını (Dünya’nın Güneş etrafında dolanma süresini) 365 gün 6 saat 10 dakika 8 saniye olarak olağanüstü bir doğrulukla hesaplamıştır. Bu değer günümüz modern atomik ölçümlerine sadece birkaç dakika farkla yakındır!'
    },
    {
      id: 'ib-1-4-p48-bilgikutusu-artikyil',
      pageNumber: 'Sayfa 48',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Bir Güneş Yılı ve Artık Yıl (Sayfa 48)',
      badge: 'Maarif Bilgi Kutusu',
      content: 'Dünya’nın Güneş etrafındaki 1 tam dolanımı 365 gün 6 saat sürer. Artan 6 saatler 4 yılda bir 1 tam gün (6 × 4 = 24 saat) eder. Bu ilave gün Şubat ayına eklenir (Şubat 29 gün çeker). Bu yıla "Artık Yıl" denir.'
    },
    {
      id: 'ib-1-4-p49-bilim-guncesi',
      pageNumber: 'Sayfa 49-51',
      type: 'bilim_guncesi',
      title: 'Bilim Güncesi: Uzay Araştırmaları ve Geleceğin Kolonileri (Sayfa 49-51)',
      badge: 'Bilim Güncesi',
      content: 'İnsanoğlu Ay’a ayak bastıktan sonra hedefi Mars ve derin uzay olmuştur. Ay yüzeyinde kurulması planlanan kalıcı üsler, derin uzay yolculuklarında bir yakıt ikmal ve mola istasyonu vazifesi görecektir. Türk bilim insanları da bu küresel araştırmalara önemli katkılar sunmaktadır.'
    },
    {
      id: 'ib-1-4-p50-qr',
      pageNumber: 'Sayfa 50',
      type: 'karekod',
      title: 'EBA 1. Ünite Özet Animasyonu Karekodu (Sayfa 50)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '1. Ünite Genel Özet Videosu',
        description: 'Ders kitabının 50. sayfasındaki karekod ile erişilen; Güneş, Dünya ve Ay’ın tüm özelliklerini özetleyen MEB eğitim videosu.',
        type: 'video'
      },
      content: '📌 Karekodun İçeriği (Sayfa 50): 1. Ünitenin tüm alt bölümlerini akılda kalıcı infografiklerle toparlayan EBA özet multimedyası.'
    },
    {
      id: 'ib-1-4-p52-pekistirme',
      pageNumber: 'Sayfa 52-53',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu: 10 Maddelik Dönme ve Dolanma Doğruluk Tablosu (Sayfa 52-53)',
      badge: 'Pekiştirme İstasyonu',
      reinforcementData: {
        type: 'branching_keys',
        solution: 'Doğruluk Analizi:\n1. Dünya ve Ay’ın dolanma yönleri aynıdır ➔ DOĞRU\n2. Güneş, Dünya ve Ay aynı yönde döner ➔ DOĞRU\n3. Dünya’nın dönme ve dolanma süresi eşittir ➔ YANLIŞ (24 saat vs 365 gün)\n4. Ay’ın dönme ve dolanma süresi eşittir ➔ DOĞRU (27,3 gün)\n5. Dünya dolanmasını 24 saatte tamamlar ➔ YANLIŞ\n6. Dünya’nın dolanması Ay’ın dolanmasından uzundur ➔ DOĞRU\n7. Ay’ın dönme süresi Dünya’nınkinden kısadır ➔ YANLIŞ\n8. Dünya 1 kez dönene kadar Ay 27 kez döner ➔ YANLIŞ\n9. Ay bir kez dolanana kadar Dünya 2 kez dolanır ➔ YANLIŞ\n10. Dünya Güneş etrafında Ay ile birlikte dolanır ➔ DOĞRU\nSonuç: Çıkış labirentinde hatasız adımlarla 4. ÇIKIŞA ulaşılır.'
      },
      evaluationQuestions: [
        {
          question: 'Pekiştirme İstasyonu Doğruluk Sorusu: Tablodaki ilk 4 maddenin doğruluk durumunu yazınız.',
          answer: '1: DOĞRU, 2: DOĞRU, 3: YANLIŞ, 4: DOĞRU. (Kalan önermelerin tamamı ünitenin True/False soru listesine aktarılmıştır).'
        }
      ],
      interactiveAnswer: 'Doğru Yol Analizi: 1-D, 2-D, 3-Y, 4-D, 5-Y, 6-D, 7-Y, 8-Y, 9-Y, 10-D ➔ Hedef Çıkış: 4. Çıkış.'
    },
    {
      id: 'ib-1-4-p53-qr',
      pageNumber: 'Sayfa 53',
      type: 'karekod',
      title: '1. Ünite Pekiştirme ve Veda Karekodu (Sayfa 53)',
      badge: 'EBA Karekod',
      qrInfo: {
        title: '1. Ünite Değerlendirme Testi',
        description: 'Ders kitabının 53. sayfasında yer alan; 1. Üniteyi tamamlayan öğrencinin genel başarısını ölçen EBA sınavı.',
        type: 'evaluation'
      },
      content: '📌 Karekodun İçeriği (Sayfa 53): 1. Ünite sonu pekiştirme ve değerlendirme sınavı.'
    }
  ]
};
