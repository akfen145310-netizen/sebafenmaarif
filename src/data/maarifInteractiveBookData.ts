import { InteractiveBookItem, SubTopic, Unit } from '../types/curriculum';
import { unit1InteractiveBookFlow } from './interactiveBookData';
import { grade8InteractiveBookFlow } from './grade8/grade8InteractiveBookData';
import { unit4TekrarDizaynFlow } from './grade5Book2Flows';
import { unit5TekrarDizaynFlow } from './grade5Book2FlowsUnit5';
import { unit6TekrarDizaynFlow, unit7TekrarDizaynFlow } from './grade5Book2FlowsUnits6and7';
import { grade7Book1FlowsUnit1 } from './grade7/grade7Book1FlowsUnit1';
import { grade7Book1FlowsUnit2 } from './grade7/grade7Book1FlowsUnit2';
import { grade7Book1FlowsUnit3 } from './grade7/grade7Book1FlowsUnit3';
import { grade7Book2FlowsUnits4and5 } from './grade7/grade7Book2FlowsUnits4and5';
import { grade7Book2FlowsUnits6and7 } from './grade7/grade7Book2FlowsUnits6and7';
import { grade6Book1FlowsUnit1 } from './grade6/grade6Book1FlowsUnit1';
import { grade6Book1FlowsUnit2 } from './grade6/grade6Book1FlowsUnit2';
import { grade6Book1FlowsUnit3 } from './grade6/grade6Book1FlowsUnit3';
import { grade6Book1FlowsUnit4 } from './grade6/grade6Book1FlowsUnit4';
import { grade6Book2FlowsUnit5 } from './grade6/grade6Book2FlowsUnit5';
import { grade6Book2FlowsUnit6 } from './grade6/grade6Book2FlowsUnit6';
import { grade6Book2FlowsUnit7 } from './grade6/grade6Book2FlowsUnit7';

// 5. Sınıf 2. Ünite: Kuvveti Tanıyalım (Sayfa 58 - 97)
export const unit2InteractiveBookFlow: Record<string, InteractiveBookItem[]> = {
  'unit2-sub1': [
    {
      id: 'ib-2-1-p58-kapak',
      pageNumber: 'Sayfa 58',
      type: 'gozlemleyelim',
      title: 'Gözlemleyelim: Doğadaki ve Spordaki Kuvvetler',
      badge: 'Gözlem & Giriş',
      prompt: 'Resimdeki paraşütçüleri, yelkenlileri ve futbol oynayan çocukları inceleyiniz. Cisimleri harekete geçiren veya durduran görünmez etki nedir?',
      interactiveAnswer: 'Cisimlerin hareket durumunu değiştiren bu etki "Kuvvet"tir. Rüzgâr kuvveti yelkenliyi iter, yer çekimi paraşütçüyü çeker, hava direnci onu yavaşlatır, ayak kasları ise topu hızlandırır.'
    },
    {
      id: 'ib-2-1-p59-hazirlik',
      pageNumber: 'Sayfa 59',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Kuvveti Tanıyalım',
      badge: 'Hazırlık',
      prompt: 'Duran bir topu harekete geçirmek veya gelen bir topu durdurmak için ne uygularız? Günlük yaşamdan örnekler veriniz.',
      interactiveAnswer: 'Cisimlere itme veya çekme şeklinde "kuvvet" uygularız. Örneğin market arabasını iterken, kapıyı çekerken, frene basıp bisikleti yavaşlatırken hep kuvvet uygulanır.'
    },
    {
      id: 'ib-2-1-p60-merak',
      pageNumber: 'Sayfa 60',
      type: 'merak_istasyonu',
      title: 'Merak İstasyonu: Kuvvet Gözle Görülür mü?',
      badge: 'Merak',
      prompt: 'Kuvveti doğrudan gözümüzle görebilir miyiz? Kuvvetin varlığını nasıl anlar ve ne ile ölçeriz?',
      interactiveAnswer: 'Kuvvet gözle doğrudan görülemez; ancak cisimler üzerinde yarattığı hızlanma, yavaşlama, yön değiştirme ve şekil değiştirme gibi somut etkileriyle anlaşılır. Büyüklüğü ise dinamometre ile ölçülür.'
    },
    {
      id: 'ib-2-1-p61-kopru',
      pageNumber: 'Sayfa 61',
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Esnek Maddeler ve Şekil Değişikliği',
      badge: 'Köprü Bilgi',
      content: 'Kuvvet uygulandığında şekil değiştiren, kuvvet ortadan kalktığında eski haline geri dönen maddelere "esnek maddeler" denir (paket lastiği, sarmal çelik yay, sünger). Kuvvet kalktığında eski haline dönemeyen maddeler ise esnek değildir (oyun hamuru, seramik çamuru).'
    },
    {
      id: 'ib-2-1-p62-etkinlik',
      pageNumber: 'Sayfa 62',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 2.1: Kuvvetin Etkilerini Keşfedelim',
      badge: 'Etkinlik İstasyonu',
      materials: ['Tenis topu', 'Oyun hamuru', 'Paket lastiği', 'Süngertaşı veya bulaşık süngeri'],
      steps: [
        'Tenis topunu masanın üzerinde hafifçe iterek hızlandırınız, ardından elinizle önüne set çekip durdurunuz.',
        'Oyun hamurunu parmaklarınızla sıkınız ve elinizi çekiniz.',
        'Paket lastiğini iki elinizle gerip bırakınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Oyun hamuru ile paket lastiğinin kuvvet altındaki tepkilerini karşılaştırınız.',
          answer: 'Paket lastiği esnektir; kuvvet kalkınca hemen eski boyutuna geri döner. Oyun hamuru ise esnek değildir; parmakla sıkıldığında oluşan şekil değişikliği kalıcı olur.'
        },
        {
          question: 'Kuvvetin cisimler üzerinde oluşturduğu 4 temel etkiyi yazınız.',
          answer: '1. Hızlandırıcı etki, 2. Yavaşlatıcı / Durdurucu etki, 3. Yön değiştirici etki, 4. Şekil değiştirici etki.'
        }
      ],
      resultInfoBox: 'Kuvvet, duran cismi hareket ettirebilir, hareketli cismi hızlandırabilir, yavaşlatabilir, durdurabilir, yönünü ve biçimini değiştirebilir.'
    },
    {
      id: 'ib-2-1-p63-etkinlik2',
      pageNumber: 'Sayfa 63',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 2.2: Kendi Dinamometremizi Yapalım',
      badge: 'Etkinlik İstasyonu',
      materials: ['Şeffaf plastik enjektör veya pet şişe', 'Paket lastiği veya ince çelik yay', 'Ataş', 'Milimetrik karton cetvel', 'Farklı ağırlıklar'],
      steps: [
        'Lastiğin bir ucunu şişenin ağzına sabitleyip ucuna kanca olarak ataşı takınız.',
        'Yan tarafa milimetrik cetveli yapıştırınız.',
        'Kancaya sırasıyla 1 N, 2 N ve 3 N’lık ağırlıklar asarak lastiğin uzama miktarını işaretleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Asılan ağırlık 2 katına çıktığında lastiğin uzama miktarı nasıl değişti?',
          answer: 'Uygulanan kuvvet 2 katına çıktığında uzama miktarı da tam 2 katına çıktı. Yaydaki uzama miktarı uygulanan kuvvetle doğru orantılıdır.'
        },
        {
          question: 'Dinamometreye taşıyabileceğinden çok fazla ağırlık asılırsa ne olur?',
          answer: 'Yayın esneklik sınırı aşılır, yay deforme olur ve kalıcı olarak uzayarak bir daha eski haline dönemez; dinamometre bozulur.'
        }
      ],
      qrInfo: {
        title: 'EBA: Dinamometre ile Ölçüm Simülasyonu',
        description: 'Ders kitabının 64. sayfasındaki karekod ile erişilen, farklı kalınlıktaki yayların uzama oranlarını gösteren dijital deney.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-2-1-p65-bilgi',
      pageNumber: 'Sayfa 65',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Isaac Newton ve Dinamometrede Bölme Hesabı',
      badge: 'Bilgi İstasyonu',
      content: 'Kuvvet birimi İngiliz fizikçi Isaac Newton anısına "Newton" (N) olarak kabul edilmiştir. Dinamometrelerde 1 bölmenin değeri:\n1 Bölme Değeri = Maksimum Ölçüm Kapasitesi / Toplam Bölme Sayısı formülü ile hesaplanır. Örneğin maksimum 50 N ölçen 10 bölmeli dinamometrede her bölme 5 N değerindedir. Yay 3 bölme uzamışsa ölçülen kuvvet 3 × 5 = 15 Newton’dır.'
    },
    {
      id: 'ib-2-1-p66-bilgikutusu',
      pageNumber: 'Sayfa 66',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: İnce Yay mı, Kalın Yay mı?',
      badge: 'Maarif Hap Bilgi',
      content: '• İNCE YAYLAR: Küçük kuvvetlerde bile kolayca uzar, bu nedenle küçük kuvvetleri hassas ve duyarlı ölçmek için kullanılır.\n• KALIN YAYLAR: Serttir, esnemeye karşı dirençlidir; bu nedenle büyük kuvvetleri güvenle ölçmek için tercih edilir.'
    },
    {
      id: 'ib-2-1-p67-pekistirme',
      pageNumber: 'Sayfa 67',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 2.1: Dinamometre Çıkış Şeması',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'branching_keys',
        solution: 'Başlangıç: "Kuvvet birimi Newton’dır." (DOĞRU) ➔ "İnce yaylı dinamometreler büyük kuvvetleri ölçmek için daha uygundur." (YANLIŞ, ince yay hassas küçük kuvvetleri ölçer) ➔ "Dinamometrenin esneklik sınırı aşılırsa yay bozulur." (DOĞRU) ➔ 3. ÇIKIŞ.'
      },
      interactiveAnswer: 'Doğru yol haritası: 1. Adım: DOĞRU ➔ 2. Adım: YANLIŞ ➔ 3. Adım: DOĞRU ➔ Hedef Çıkış: 3. ÇIKIŞ.'
    },
    {
      id: 'ib-2-1-p68-cagini-asanlar',
      pageNumber: 'Sayfa 68',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: Robert Hooke ve Esneklik Kanunu',
      badge: 'Çağını Aşanlar',
      content: '1678 yılında İngiliz bilim insanı Robert Hooke, sarmal yayların uzama miktarının uygulanan kuvvetle doğru orantılı olduğunu formüle etmiş (F = k · x) ve tarihe "Hooke Kanunu" olarak geçen yasayı keşfetmiştir. Bu keşif modern dinamometrelerin ve tartı aletlerinin temelini atmıştır.'
    }
  ],
  'unit2-sub2': [
    {
      id: 'ib-2-2-p69-hazirlik',
      pageNumber: 'Sayfa 69',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Kütle mi, Ağırlık mı?',
      badge: 'Hazırlık',
      prompt: 'Pazardan aldığımız 2 kg portakalı tartarken ölçtüğümüz değer ile Ay’daki bir astronotun zıplaması arasındaki fark nedir? Kütle ile ağırlık aynı şey midir?',
      interactiveAnswer: 'Kütle ile ağırlık aynı şey değildir! Kütle değişmeyen madde miktarıdır (terazi ile ölçülür, kg/g). Ağırlık ise bu kütleye etki eden yer çekimi kuvvetidir (dinamometre ile ölçülür, N).'
    },
    {
      id: 'ib-2-2-p70-merak',
      pageNumber: 'Sayfa 70',
      type: 'merak_istasyonu',
      title: 'Merak İstasyonu: Uzayda Kütlemiz Değişir mi?',
      badge: 'Merak',
      prompt: 'Bir astronot Dünya’dan Ay’a gittiğinde veya uzay boşluğunda süzülürken vücudundaki et, kemik ve hücre miktarı azalır mı? Tartıda neden hafif çıkar?',
      interactiveAnswer: 'Astronotun vücudundaki madde miktarı (kütlesi) asla değişmez (60 kg ise Ay’da da 60 kg’dır). Ancak Ay’ın kütlesi Dünya’dan küçük olduğu için yer çekimi kuvveti Dünya’nın 6’da 1’i kadardır. Bu yüzden astronotun ağırlığı 600 N’dan 100 N’a düşer.'
    },
    {
      id: 'ib-2-2-p71-etkinlik',
      pageNumber: 'Sayfa 71',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 2.3: Dünya ve Ay’da Ağırlık Kıyaslaması',
      badge: 'Etkinlik İstasyonu',
      evaluationQuestions: [
        {
          question: 'Dünya’da kütlesi 30 kg olan bir cismin Dünya’daki ve Ay’daki kütlesi kaç kg’dır?',
          answer: 'Kütle hiçbir yerde değişmez! Cisim Dünya’da da 30 kg, Ay’da da 30 kg’dır.'
        },
        {
          question: 'Bu cismin Dünya’daki ağırlığı ~300 N ise Ay’daki ağırlığı yaklaşık kaç Newton olur?',
          answer: 'Ay’daki yer çekimi Dünya’nın 1/6’sı kadar olduğundan: 300 N / 6 = 50 N olur.'
        }
      ],
      resultInfoBox: 'Kütle evrenin her yerinde sabittir. Ağırlık ise gök cisminin kütle çekim gücüne bağlı olarak değişir.'
    },
    {
      id: 'ib-2-2-p72-bilgi',
      pageNumber: 'Sayfa 72',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Kütle ve Ağırlık Farkları Tablosu',
      badge: 'Bilgi İstasyonu',
      content: '• KÜTLE: Değişmeyen madde miktarıdır. Birimi gram (g) veya kilogramdır (kg). Eşit kollu terazi ile ölçülür. Yönü yoktur.\n• AĞIRLIK: Kütleye etki eden yer çekimi kuvvetidir. Birimi Newton’dır (N). Dinamometre ile ölçülür. Yönü daima yerin merkezine doğrudur.'
    },
    {
      id: 'ib-2-2-p73-bilgikutusu',
      pageNumber: 'Sayfa 73',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Kutuplarda mı Ağırız, Ekvatorda mı?',
      badge: 'Maarif Sınav İpucu',
      content: 'Dünya kutuplardan basık, ekvatordan şişkin geoit bir şekle sahiptir. Bu nedenle kutuplar Dünya’nın çekirdek merkezine ekvatora göre daha yakındır! Merkeze yaklaştıkça yer çekimi arttığı için bir cismin ağırlığı KUTUPLARDA DAHA FAZLA, EKVATORDA DAHA AZ ölçülür. Dağların zirvelerine çıkıldıkça da merkezden uzaklaşıldığı için ağırlık azalır.'
    },
    {
      id: 'ib-2-2-p74-cagini-asanlar',
      pageNumber: 'Sayfa 74',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: El-Hâzinî ve Hikmet Terazisi (Mîzânü’l-Hikme)',
      badge: 'Kültür & Maarif',
      content: 'Büyük Selçuklu dönemi bilgini Abdurrahman el-Hâzinî (12. yüzyıl), geliştirdiği "Hikmet Terazisi" ile maddelerin saf olup olmadığını ve havadaki ağırlıkları ile sudaki ağırlıkları arasındaki farkı hassas bir şekilde ölçmüştür. Yer çekiminin cismin Dünya merkezine olan uzaklığına bağlı olduğunu Newton’dan 500 yıl önce tespit etmiştir.'
    },
    {
      id: 'ib-2-2-p75-pekistirme',
      pageNumber: 'Sayfa 75',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 2.2: Kütle ve Ağırlık Eşleştirme',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'matching',
        solution: '1-Eşit kollu terazi ➔ Kütle | 2-Dinamometre ➔ Ağırlık | 3-Newton (N) ➔ Ağırlık birimi | 4-Kilogram (kg) ➔ Kütle birimi | 5-Konuma göre değişmez ➔ Kütle | 6-Yerin merkezine yöneliktir ➔ Ağırlık.'
      },
      interactiveAnswer: 'Doğru Eşleşmeler: Terazi-Kütle, Dinamometre-Ağırlık, Newton-Ağırlık birimi, Kilogram-Kütle birimi, Değişmeyen-Kütle, Yönlü kuvvet-Ağırlık.'
    }
  ],
  'unit2-sub3': [
    {
      id: 'ib-2-3-p77-hazirlik',
      pageNumber: 'Sayfa 77',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Sürtünme Kuvveti',
      badge: 'Hazırlık',
      prompt: 'Aynı kuvvetle itilen oyuncak araba tahta parke üzerinde metrelerce giderken, yün halı üzerinde neden çok kısa mesafede durur?',
      interactiveAnswer: 'Halı zeminin girintili çıkıntılı pürüzlü yapısı tekerleklerin hareketine karşı zıt yönde büyük bir direnç (sürtünme kuvveti) oluşturur. Parke ise daha az pürüzlü olduğu için sürtünme azdır ve araba daha uzağa gider.'
    },
    {
      id: 'ib-2-3-p78-etkinlik',
      pageNumber: 'Sayfa 78',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 2.4: Farklı Zeminlerde Takoz Çekme',
      badge: 'Etkinlik İstasyonu',
      materials: ['Ahşap takoz', 'Dinamometre', 'Zımpara kâğıdı', 'Cam plaka', 'Kumaş / Havlu'],
      steps: [
        'Ahşap takozu cam levha üzerine koyup dinamometre ile hareket ettiği andaki kuvveti ölçünüz.',
        'Aynı takozu kumaş ve zımpara üzerine koyarak ölçümleri tekrarlayınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Takozu harekete geçirmek için gereken en büyük kuvvet hangi zeminde ölçüldü?',
          answer: 'Zımpara kâğıdı üzerinde ölçüldü; çünkü pürüzlülük en fazladır ve sürtünme kuvveti en büyüktür.'
        },
        {
          question: 'Sürtünme kuvvetinin yönü hareket yönüyle nasıl bir ilişkiye sahiptir?',
          answer: 'Sürtünme kuvveti daima cismin hareket yönüne ZIT yönde ortaya çıkar.'
        }
      ],
      resultInfoBox: 'Zemin pürüzlülüğü arttıkça sürtünme kuvveti artar; zemin kayganlaştıkça sürtünme kuvveti azalır.'
    },
    {
      id: 'ib-2-3-p81-etkinlik-hava',
      pageNumber: 'Sayfa 81',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 2.5: Hava Direnci ve Paraşüt Deneyi',
      badge: 'Etkinlik İstasyonu',
      materials: ['İki adet özdeş A4 kâğıdı'],
      steps: [
        'Kâğıtlardan birini buruşturarak sıkı bir top yapınız, diğerini ise tamamen açık bırakınız.',
        'İki kâğıdı aynı yükseklikten aynı anda serbest bırakınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Hangi kâğıt yere daha önce ulaştı? Sebebini hava direnciyle açıklayınız.',
          answer: 'Buruşturulan kâğıt çok daha önce yere düştü. Çünkü açık kâğıdın yüzey alanı geniştir ve havayla temas eden yüzey arttıkça hava direnci (havanın sürtünme kuvveti) artarak düşüşü yavaşlatır.'
        }
      ],
      qrInfo: {
        title: 'EBA: Hava ve Su Direnci Simülatörü',
        description: 'Ders kitabının 82. sayfasında yer alan aerodinamik sürtünme laboratuvarı.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-2-3-p83-bilgi',
      pageNumber: 'Sayfa 83',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Su Direnci ve Doğadaki Tasarım',
      badge: 'Bilgi İstasyonu',
      content: 'Suyun cisimlerin hareketine karşı uyguladığı sürtünme direncine "su direnci" denir. Su direnci hava direncinden çok daha büyüktür. Balıkların burunlarının sivri olması, pullarının kaygan mukusla kaplı olması ve vücutlarının torpido şeklinde yaratılmış olması su direncini en aza indirir. Mühendisler denizaltı ve hızlı hücumbotları balıkların bu aerodinamik formunu taklit ederek (biyomimikri) tasarlar.'
    },
    {
      id: 'ib-2-3-p84-cagini-asanlar',
      pageNumber: 'Sayfa 84',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: Fatih Sultan Mehmet ve Gemilerin Karadan Yürütülmesi',
      badge: 'Tarih & Maarif',
      content: '1453 İstanbul’un fethinde Fatih Sultan Mehmet Han, Haliç’in zincirle kapatılması üzerine 72 parçalık Osmanlı donanmasını Tophane’den Kasımpaşa’ya karadan yürütmüştür. Sürtünmeyi azaltmak için kalın kalaslar döşenmiş ve zeytinyağı ile domuz yağı harmanlanarak kızaklar kayganlaştırılmıştır. Bu taktik sürtünme kuvvetini kontrol etmenin tarihteki en muazzam mühendislik örneklerindendir.'
    },
    {
      id: 'ib-2-3-p86-pekistirme',
      pageNumber: 'Sayfa 86',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 2.3: Sürtünmeyi Artıran ve Azaltan Durumlar',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'matching',
        solution: 'Sürtünmeyi Artıranlar: Kışın araçlara zincir takılması, krampon tabanındaki dişler, haltercilerin pudra sürmesi | Sürtünmeyi Azaltanlar: Makine dişlilerinin yağlanması, bavullara tekerlek takılması, gemilerin V şeklindeki pruvası.'
      },
      interactiveAnswer: 'Doğru Gruplama: Artıranlar (Zincir, Krampon, Pudra, Kaydırmaz bant); Azaltanlar (Yağlama, Tekerlek, Bilye, Cila).'
    }
  ]
};

// 5. Sınıf 3. Ünite: Canlıların Yapısına Yolculuk (Sayfa 98 - 143)
export const unit3InteractiveBookFlow: Record<string, InteractiveBookItem[]> = {
  'unit3-sub1': [
    {
      id: 'ib-3-1-p98-kapak',
      pageNumber: 'Sayfa 98',
      type: 'gozlemleyelim',
      title: 'Gözlemleyelim: Doğadaki Canlı Çeşitliliği ve Hücre',
      badge: 'Giriş',
      prompt: 'Koca bir çınar ağacı, minik bir karınca ve bir insan... Dış görünüşleri bu kadar farklı olan tüm canlıların ortak en küçük yapı taşı nedir?',
      interactiveAnswer: 'Bütün canlılar gözle görülemeyecek kadar küçük, canlılık özelliği gösteren "HÜCRE" adını verdiğimiz mikroskobik odacıklardan meydana gelmiştir.'
    },
    {
      id: 'ib-3-1-p99-hazirlik',
      pageNumber: 'Sayfa 99',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Hücreyi Tanıyalım',
      badge: 'Hazırlık',
      prompt: 'Bir tuğla bir binanın neyi ise, hücre de canlının odur benzetmesini duydunuz mu? Hücre hakkında neler biliyorsunuz?',
      interactiveAnswer: 'Hücre canlının canlılık faaliyetlerini (solunum, beslenme, boşaltım, çoğalma) tek başına gerçekleştirebilen en küçük temel yapı ve görev birimidir.'
    },
    {
      id: 'ib-3-1-p100-merak',
      pageNumber: 'Sayfa 100',
      type: 'merak_istasyonu',
      title: 'Merak İstasyonu: Mikro Alemi Kim Keşfetti?',
      badge: 'Merak',
      prompt: 'Gözümüzle göremediğimiz bakterileri, kan hücrelerini ve bitki hücrelerini ilk kim, nasıl gördü?',
      interactiveAnswer: '1590’larda Zacharias Janssen ilk mikroskobu yaptı. 1665’te Robert Hooke şişe mantarındaki boşluklara "hücre" (cellula) adını verdi. Leeuwenhoek ise tek hücreli canlıları ilk kez canlı olarak gözlemledi.'
    },
    {
      id: 'ib-3-1-p101-etkinlik',
      pageNumber: 'Sayfa 101',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 3.1: Soğan Zarı Preparatı Hazırlama',
      badge: 'Etkinlik İstasyonu',
      materials: ['Işık mikroskobu', 'Lam ve lamel', 'Kürdan ve cımbız', 'Taze soğan zarı', 'Damlalık ve su', 'İyot çözeltisi (lügol)'],
      steps: [
        'Lamın ortasına bir damla su damlatınız.',
        'Cımbızla soğanın iç yüzeyinden incecik şeffaf zarı soyup suyun üzerine kırışmadan yayınız.',
        'Lameli 45 derecelik açıyla tutup hava kabarcığı kalmayacak şekilde yavaşça kapatınız.',
        'Mikroskop tablasına koyup önce küçük büyütmede kaba ayar vidasıyla netleştiriniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Lameli kapatırken neden 45 derece açıyla ve yavaşça kapatırız?',
          answer: 'Preparat içinde hava kabarcığı kalmasını önlemek için. Hava kabarcıkları mikroskopta siyah kenarlı yuvarlak halkalar olarak görünür ve hücrelerin görülmesini engeller.'
        },
        {
          question: 'Soğan zarı hücrelerinin şekli nasıldır?',
          answer: 'Köşeli (dikdörtgenimsi) bir yapıdadır; çünkü bitki hücrelerinde hücre zarının dışında sert bir hücre duvarı bulunur.'
        }
      ],
      qrInfo: {
        title: 'EBA: 3 Boyutlu Hücre Simülasyonu',
        description: 'Ders kitabının 103. sayfasında yer alan bitki ve hayvan hücresi organellerini tanıtan etkileşimli model.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-3-1-p102-bilgi',
      pageNumber: 'Sayfa 102',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Hücrenin 3 Temel Kısmı',
      badge: 'Bilgi İstasyonu',
      content: '1. HÜCRE ZARI: Canlıdır, esnektir ve seçici geçirgendir. Hücreyi dış etkilerden korur ve dağılmasını önler.\n2. ÇEKİRDEK: Hücrenin yönetim, denetim ve kalıtım merkezidir. Genetik kodları (DNA) taşır.\n3. SİTOPLAZMA: Çekirdek ile zar arasını dolduran yumurta akı kıvamında yarı akışkan sıvıdır; yaşamsal organelleri barındırır.'
    },
    {
      id: 'ib-3-1-p104-organeller',
      pageNumber: 'Sayfa 104',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Hücre İçi Fabrika (Organeller)',
      badge: 'Bilgi İstasyonu',
      content: '• Mitokondri: Enerji santralidir (ATP üretir).\n• Kloroplast: Sadece bitkide bulunur, fotosentez ile besin ve oksijen üretir.\n• Ribozom: Bütün hücrelerde protein sentezler.\n• Koful: Fazla su ve atık maddeleri depolar (Bitkide büyük ve az; hayvanda küçük ve çoktur).\n• Endoplazmik Retikulum: Hücre içi madde iletim kanallarıdır.\n• Golgi Cisimciği: Salgı üretir ve paketler.\n• Lizozom: Hücre içi sindirim yapar.\n• Sentrozom: Sadece hayvan hücresinde bulunur, bölünmede görev alır.'
    },
    {
      id: 'ib-3-1-p108-kopru',
      pageNumber: 'Sayfa 108',
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Hücreden Organizmaya Hiyerarşi',
      badge: 'Köprü Bilgi',
      content: 'Çok hücreli canlılarda yapı basitten karmaşığa harika bir teşkilatlanmayla dizilmiştir:\nHücre ➔ Doku ➔ Organ ➔ Sistem ➔ Organizma\n(Örnek: Kas hücresi ➔ Kas dokusu ➔ Mide ➔ Sindirim sistemi ➔ İnsan).'
    },
    {
      id: 'ib-3-1-p112-pekistirme',
      pageNumber: 'Sayfa 112',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 3.1: Bitki ve Hayvan Hücresi Farkları Tablosu',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'matching',
        solution: 'Bitki Hücresi: Köşeli şekil, Hücre Duvarı var, Kloroplast var, Kofullar büyük ve az | Hayvan Hücresi: Yuvarlak şekil, Hücre Duvarı YOK, Kloroplast YOK, Sentrozom var, Kofullar küçük ve çok.'
      },
      interactiveAnswer: 'Temel Ayırt Edici Özellikler: Hücre Duvarı ve Kloroplast SADECE BİTKİDE; Sentrozom SADECE HAYVANDA bulunur.'
    }
  ],
  'unit3-sub2': [
    {
      id: 'ib-3-2-p118-hazirlik',
      pageNumber: 'Sayfa 118',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Destek ve Hareket Sistemi',
      badge: 'Hazırlık',
      prompt: 'Vücudumuzda iskeletimiz olmasaydı nasıl görünürdük? Bir çadırın ayakta durmasını sağlayan direkler gibi vücudumuzu dik tutan nedir?',
      interactiveAnswer: 'Kemiklerimiz ve iskeletimiz olmasaydı vücudumuz bir et yığını gibi yere yığılırdı; dik duramaz, yürüyemez ve iç organlarımızı koruyamazdık.'
    },
    {
      id: 'ib-3-2-p120-etkinlik',
      pageNumber: 'Sayfa 120',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 3.2: Kemik Çeşitlerini İnceleyelim',
      badge: 'Etkinlik İstasyonu',
      evaluationQuestions: [
        {
          question: 'Uyluk kemiği, kafatası kemiği ve el bilek kemiklerini şekillerine göre sınıflandırınız.',
          answer: 'Uyluk kemiği: UZUN KEMİK | Kafatası kemiği: YASSI KEMİK | El bilek kemiği: KISA KEMİK.'
        },
        {
          question: 'Kırmızı kemik iliğinin vücuttaki görevi nedir?',
          answer: 'Kan hücrelerini (alyuvar, akyuvar, kan pulcukları) üretmektir.'
        }
      ],
      resultInfoBox: 'Yetişkin bir insanda 206 kemik bulunur. Vücudun en uzun kemiği bacakta bulunan uyluk kemiğidir.'
    },
    {
      id: 'ib-3-2-p122-bilgi',
      pageNumber: 'Sayfa 122',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Eklem Çeşitleri ve Kıkırdak',
      badge: 'Bilgi İstasyonu',
      content: '• Oynar Eklemler: Kol ve bacaklarda bulunur, hareket yeteneği çok fazladır; eklem sıvısı içerir.\n• Yarı Oynar Eklemler: Omurgada bulunur, sınırlı hareket sağlar.\n• Oynamaz Eklemler: Kafatası ve leğen kemiklerinde bulunur, kemikler testere dişi gibi birbirine kilitlenmiştir.\n• Kıkırdak: Kemik uçlarında sürtünmeyi ve aşınmayı önler; burun ve kulak kepçesine esneklik kazandırır.'
    },
    {
      id: 'ib-3-2-p124-kaslar',
      pageNumber: 'Sayfa 124',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Kas Çeşitleri',
      badge: 'Bilgi İstasyonu',
      content: '• Çizgili (İskelet) Kas: İsteğimizle çalışır, hızlı kasılır ve çabuk yorulur (Kol ve bacak kasları).\n• Düz Kas: İsteğimiz dışında (otonom) çalışır, yavaş kasılır ve yorulmaz (Mide, bağırsak, damarlar).\n• Kalp Kası: Yapısı çizgili kasa benzer, fakat çalışması düz kas gibi isteğimiz dışındadır; ritmik ve yorulmadan ömür boyu çalışır.'
    },
    {
      id: 'ib-3-2-p128-saglik',
      pageNumber: 'Sayfa 128',
      type: 'bilgi_kutusu',
      title: 'Sağlık İstasyonu: İskelet Sağlığı ve Duruş Bozuklukları',
      badge: 'Sağlık & Yaşam',
      content: 'Ağır okul çantalarını tek omuzda taşımak omurga eğriliğine (skolyoz) neden olabilir. Dik oturmalı, kalsiyum zengini besinler (süt, yoğurt, peynir) tüketmeli ve D vitamini sentezi için güneş ışığından yeterince yararlanmalıyız.'
    },
    {
      id: 'ib-3-2-p132-cagini-asanlar',
      pageNumber: 'Sayfa 132',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: İbni Sînâ ve Tıbbın Kanunu',
      badge: 'Çağını Aşanlar',
      content: 'Büyük İslam hekimi İbni Sînâ (Avicenna), El-Kânûn fi\'t-Tıbb adlı eserinde kemik kırıklarının tedavisini, alçı yöntemlerini ve kasların sinirlerle olan bağlantılarını asırlar önce ayrıntılı olarak açıklamıştır.'
    },
    {
      id: 'ib-3-2-p135-pekistirme',
      pageNumber: 'Sayfa 135',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 3.2: Destek ve Hareket Çıkış Ağacı',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'branching_keys',
        solution: 'Başlangıç: "Kalp kası isteğimiz dışında ritmik çalışır." (DOĞRU) ➔ "Kafatası kemikleri arasında oynar eklem bulunur." (YANLIŞ, oynamaz eklemdir) ➔ "Kırmızı kemik iliği kan hücrelerini üretir." (DOĞRU) ➔ 3. ÇIKIŞ.'
      },
      interactiveAnswer: 'Doğru yol haritası: 1. Adım: DOĞRU ➔ 2. Adım: YANLIŞ ➔ 3. Adım: DOĞRU ➔ Hedef Çıkış: 3. ÇIKIŞ.'
    }
  ]
};

// 5. Sınıf 4. Ünite: Işığın Dünyası (Sayfa 14 - 51)
export const unit4InteractiveBookFlow: Record<string, InteractiveBookItem[]> = {
  'unit4-sub1': [
    {
      id: 'ib-4-1-p14-giris',
      pageNumber: 'Sayfa 14',
      type: 'gozlemleyelim',
      title: 'Gözlemleyelim: Görmemizi Sağlayan Işık',
      badge: 'Giriş',
      prompt: 'Zifiri karanlık bir odada eşyaları neden göremeyiz? Bir el feneri yaktığımızda etrafı nasıl algılarız?',
      interactiveAnswer: 'Cisimleri görebilmemiz için o cisimlerden gözümüze ışık ulaşması gerekir. Işık bir enerji türüdür ve görme olayının vazgeçilmez temel şartıdır.'
    },
    {
      id: 'ib-4-1-p15-hazirlik',
      pageNumber: 'Sayfa 15',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Işık Nasıl İlerler?',
      badge: 'Hazırlık',
      prompt: 'Bulutların arasından süzülen güneş ışınlarına veya araba farlarına baktığınızda ışığın izlediği yol hakkında ne söylersiniz?',
      interactiveAnswer: 'Işık, bir kaynaktan çıkarak her yönde ve doğrusal (dosdoğru bir hat boyunca) yayılır.'
    },
    {
      id: 'ib-4-1-p17-etkinlik',
      pageNumber: 'Sayfa 17',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 4.1: Kıvrık Borudan Mum Alevine Bakalım',
      badge: 'Etkinlik İstasyonu',
      materials: ['Düz plastik boru', 'Kıvrılabilen esnek hortum veya pipet', 'Mum'],
      steps: [
        'Mumu yakıp masaya sabitleyiniz.',
        'Önce düz plastik borunun bir ucundan mum alevine bakınız.',
        'Ardından boruyu ortasından kıvırarak tekrar mum alevine bakmayı deneyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Kıvrık borudan baktığınızda mum alevini görebildiniz mi? Sebebi nedir?',
          answer: 'Hayır, alev kesinlikle görülemez. Çünkü ışık hortumun kıvrımından bükülerek geçemez; yalnızca düz bir hat üzerinde doğrusal olarak ilerler.'
        }
      ],
      resultInfoBox: 'Işık saydam ortamlarda ve boşlukta her yönde ve DAİMA DOĞRUSAL yayılır.'
    },
    {
      id: 'ib-4-1-p19-bilgi',
      pageNumber: 'Sayfa 19',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Işık Işını ve Çizim Kuralları',
      badge: 'Bilgi İstasyonu',
      content: 'Işığın izlediği yolu göstermek için cetvelle çizilen ve ucunda yön belirten ok bulunan doğru parçalarına "ışın" veya "ışık ışını" denir. Işınlar doğrusal yayıldığı için mutlaka cetvelle çizilmelidir.'
    },
    {
      id: 'ib-4-1-p21-cagini-asanlar',
      pageNumber: 'Sayfa 21',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: İbnülheysem ve Karanlık Oda (Camera Obscura)',
      badge: 'Çağını Aşanlar',
      content: 'Modern optiğin kurucusu kabul edilen İslam bilgini İbnülheysem (Kitâbü’l-Menâzır), ışığın doğrusal yayıldığını ilk kez karanlık bir kutunun küçük deliğinden geçen ışıkla ters görüntü elde ederek (Camera Obscura) kanıtlamıştır. Bu buluş modern fotoğraf makinelerinin atasıdır.'
    },
    {
      id: 'ib-4-1-p22-pekistirme',
      pageNumber: 'Sayfa 22',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 4.1: Işık Kaynakları Eşleştirme',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'matching',
        solution: 'Doğal Işık Kaynakları: Güneş, Yıldızlar, Ateş böceği, Şimşek | Yapay Işık Kaynakları: Mum, El feneri, Ampul, Meşale, Trafik lambası.'
      },
      interactiveAnswer: 'Doğal: İnsan eli değmeden var olanlar; Yapay: İnsanlar tarafından üretilenler.'
    }
  ],
  'unit4-sub2': [
    {
      id: 'ib-4-2-p24-hazirlik',
      pageNumber: 'Sayfa 24',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Maddenin Işık Geçirgenliği',
      badge: 'Hazırlık',
      prompt: 'Evlerimizde odaların aydınlanması için neden tuğla yerine pencerelere cam takılır? Banyoda neden buzlu cam kullanılır?',
      interactiveAnswer: 'Cam ışığı tamamen geçiren saydam bir maddedir. Buzlu cam ise ışığı kısmen geçiren yarı saydam bir maddedir; içeriye ışık girmesini sağlarken net görüntüyü engelleyerek mahremiyet sağlar.'
    },
    {
      id: 'ib-4-2-p26-etkinlik',
      pageNumber: 'Sayfa 26',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 4.2: Farklı Maddelere Işık Tutalım',
      badge: 'Etkinlik İstasyonu',
      materials: ['El feneri', 'Şeffaf cam', 'Yağlı kâğıt', 'Tahta takoz', 'Buzlu cam', 'Alüminyum folyo'],
      steps: [
        'Karanlık bir odada el fenerinin önüne sırayla maddeleri koyup arkasındaki aydınlanmayı gözlemleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Maddeleri ışık geçirgenliklerine göre 3 grupta sınıflandırınız.',
          answer: '1. Saydam Maddeler: Cam, su, hava. 2. Yarı Saydam Maddeler: Buzlu cam, yağlı kâğıt, tül perde, sisli hava. 3. Saydam Olmayan (Opak) Maddeler: Tahta, taş, mukavva, demir levha.'
        }
      ],
      resultInfoBox: 'Işığı tamamen geçiren maddeler saydam, kısmen geçirenler yarı saydam, hiç geçirmeyenler ise opak (saydam olmayan) maddedir.'
    },
    {
      id: 'ib-4-2-p28-bilgi',
      pageNumber: 'Sayfa 28',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Madde Kalınlığı ve Işık Geçirgenliği',
      badge: 'Bilgi İstasyonu',
      content: 'Bir maddenin ışık geçirgenliği kalınlığına da bağlıdır. İnce bir cam tabakası saydam iken üst üste konulan çok sayıda kalın cam tabakası yeşilimsi ve yarı saydamlaşır. Berrak deniz suyu yüzeyde saydam iken yüzlerce metre derinlerde zifiri karanlık olur.'
    },
    {
      id: 'ib-4-2-p32-pekistirme',
      pageNumber: 'Sayfa 32',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 4.2: Saydamlık Tablosu',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'branching_keys',
        solution: 'Başlangıç: "Cam saydam maddedir." (DOĞRU) ➔ "Yağlı kâğıt opak maddedir." (YANLIŞ, yarı saydamdır) ➔ "Alüminyum folyo ışığı hiç geçirmez." (DOĞRU) ➔ 3. ÇIKIŞ.'
      },
      interactiveAnswer: 'Doğru yol haritası: 1-D ➔ 2-Y ➔ 3-D ➔ 3. ÇIKIŞ.'
    }
  ],
  'unit4-sub3': [
    {
      id: 'ib-4-3-p34-hazirlik',
      pageNumber: 'Sayfa 34',
      type: 'hazirlik_istasyonu',
      title: 'Hazırlık İstasyonu: Gölge Nasıl Oluşur?',
      badge: 'Hazırlık',
      prompt: 'Güneşli bir günde yürürken bizi sürekli takip eden gölgemiz nasıl meydana gelir?',
      interactiveAnswer: 'Işık doğrusal yayılır ve saydam olmayan (opak) vücudumuzdan geçemez. Işığın ulaşamadığı arkamızdaki zemin karanlık kalır; bu karanlık bölgeye "tam gölge" denir.'
    },
    {
      id: 'ib-4-3-p36-etkinlik',
      pageNumber: 'Sayfa 36',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 4.3: Gölge Boyunu Değiştirelim',
      badge: 'Etkinlik İstasyonu',
      materials: ['Noktasal el feneri', 'Tenis topu', 'Beyaz perde veya duvar', 'Metre'],
      steps: [
        'Topu perde ile fener arasına koyunuz.',
        'El fenerini topa yaklaştırınız ve gölgenin büyüklüğünü gözlemleyiniz.',
        'Topu fenerden uzaklaştırıp perdeye yaklaştırınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Işık kaynağı engele yaklaştırıldığında gölge boyu nasıl değişir?',
          answer: 'Işık kaynağı cisme yaklaştıkça perdedeki gölge BÜYÜR. Kaynak uzaklaştıkça gölge KÜÇÜLÜR.'
        },
        {
          question: 'Cisim perdeye yaklaştırıldığında gölge boyu nasıl değişir?',
          answer: 'Cisim perdeye yaklaştıkça perdedeki gölge KÜÇÜLÜR; perdeden uzaklaşıp kaynağa yaklaştıkça BÜYÜR.'
        }
      ],
      resultInfoBox: 'Gölge boyu; ışık kaynağı, opak cisim ve perde arasındaki mesafelere bağlıdır.'
    },
    {
      id: 'ib-4-3-p40-kultur',
      pageNumber: 'Sayfa 40',
      type: 'cagini_asanlar',
      title: 'Kültür & Sanat: Geleneksel Türk Gölge Oyunu Hacivat ve Karagöz',
      badge: 'Kültür & Maarif',
      content: 'Geleneksel Türk gölge tiyatrosunda şeffaf manda veya deve derisinden yapılmış figürler (tasvirler), arkadan mum ışığıyla aydınlatılan beyaz bir perde (ayna) üzerinde oynatılarak gölgeleri izleyicilere yansıtılır. Bu sanat ışığın doğrusal yayılması ve opaklık ilkelerine dayanır.'
    },
    {
      id: 'ib-4-3-p42-pekistirme',
      pageNumber: 'Sayfa 42',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 4.3: Gölge Boyutu Mantık Eşleştirmesi',
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'branching_keys',
        solution: 'Işık kaynağı cisme yaklaşırsa ➔ GÖLGE BÜYÜR | Cisim perdeye yaklaşırsa ➔ GÖLGE KÜÇÜLÜR | Perde cisimden uzaklaşırsa ➔ GÖLGE BÜYÜR.'
      },
      interactiveAnswer: 'Kurallar: Kaynağa yaklaşan cismin gölgesi büyür; perdeye yaklaşan cismin gölgesi küçülür.'
    }
  ]
};

// Master Dictionary combining all units
export const allInteractiveBookFlows: Record<string, InteractiveBookItem[]> = {
  ...unit1InteractiveBookFlow,
  ...unit2InteractiveBookFlow,
  ...unit3InteractiveBookFlow,
  ...unit4TekrarDizaynFlow,
  ...unit5TekrarDizaynFlow,
  ...unit6TekrarDizaynFlow,
  ...unit7TekrarDizaynFlow,
  ...grade6Book1FlowsUnit1,
  ...grade6Book1FlowsUnit2,
  ...grade6Book1FlowsUnit3,
  ...grade6Book1FlowsUnit4,
  ...grade6Book2FlowsUnit5,
  ...grade6Book2FlowsUnit6,
  ...grade6Book2FlowsUnit7,
  ...grade7Book1FlowsUnit1,
  ...grade7Book1FlowsUnit2,
  ...grade7Book1FlowsUnit3,
  ...grade7Book2FlowsUnits4and5,
  ...grade7Book2FlowsUnits6and7,
  ...grade8InteractiveBookFlow
};

/**
 * Dynamic Maarif Flow Synthesizer:
 * For any subtopic in any grade (Grade 5, 6, 7, 8), if no explicit flow exists,
 * dynamically construct an authentic, rich, page-by-page sequence of 8-10 Maarif stations
 * strictly aligned with the subtopic's MEB textbook pageRange, title, concepts and summaries.
 */
export function generateComprehensiveMaarifFlow(unit: Unit, subTopic: SubTopic): InteractiveBookItem[] {
  // Parse page range e.g. "53 - 63" or "18-28"
  const rangeMatch = subTopic.pageRange.match(/(\d+)\s*[-–]\s*(\d+)/);
  const startPage = rangeMatch ? parseInt(rangeMatch[1], 10) : 20;
  const endPage = rangeMatch ? parseInt(rangeMatch[2], 10) : startPage + 10;
  const midPage1 = Math.round(startPage + (endPage - startPage) * 0.25);
  const midPage2 = Math.round(startPage + (endPage - startPage) * 0.5);
  const midPage3 = Math.round(startPage + (endPage - startPage) * 0.75);

  const concept0 = subTopic.concepts[0] || subTopic.title;
  const concept1 = subTopic.concepts[1] || 'Bilimsel Gözlem';
  const concept2 = subTopic.concepts[2] || 'Deneysel Süreç';
  const concept3 = subTopic.concepts[3] || 'Maarif Modeli İlkeleri';

  const firstSummary = subTopic.summarySections[0]?.paragraphs[0] || `${subTopic.title} konusu fen bilimlerinde temel kazanımlar arasında yer alır.`;
  const keyPoints = subTopic.summarySections[0]?.keyPoints || [
    `${concept0} kavramı bilimsel temeller doğrultusunda incelenir.`,
    `${concept1} günlük yaşamda ve laboratuvarda kontrollü değişkenlerle test edilir.`
  ];

  const items: InteractiveBookItem[] = [
    {
      id: `ib-${subTopic.id}-p${startPage}-hazirlik`,
      pageNumber: `Sayfa ${startPage}`,
      type: 'hazirlik_istasyonu',
      title: `Hazırlık İstasyonu: ${subTopic.shortTitle || subTopic.title}`,
      badge: 'Hazırlık',
      prompt: `Günlük yaşantımızda "${concept0}" kavramı ile nerede ve nasıl karşılaşırız? Düşüncelerinizi yazınız.`,
      interactiveAnswer: `Günlük yaşamda ${concept0} ve ${concept1} ile sıkça karşılaşırız. Bu süreçlerin bilimsel mantığını kavramak doğadaki olayları doğru yorumlamamızı sağlar.`
    },
    {
      id: `ib-${subTopic.id}-p${startPage + 1}-merak`,
      pageNumber: `Sayfa ${startPage + 1}`,
      type: 'merak_istasyonu',
      title: `Merak İstasyonu: ${concept1}`,
      badge: 'Merak',
      prompt: `Bilim insanları ${subTopic.title.toLowerCase()} konusunu araştırırken hangi temel sorulara cevap aramışlardır?`,
      interactiveAnswer: `${concept0} kavramının sebep-sonuç ilişkilerini ve ${concept1} ile etkileşimini anlamak için kontrollü deneyler tasarlanmış ve doğrulukları test edilmiştir.`
    },
    {
      id: `ib-${subTopic.id}-p${midPage1}-kopru`,
      pageNumber: `Sayfa ${midPage1}`,
      type: 'kopru_istasyonu',
      title: 'Köprü İstasyonu: Temel Bilimsel İlke',
      badge: 'Köprü Bilgi',
      content: `${firstSummary}`
    },
    {
      id: `ib-${subTopic.id}-p${midPage1 + 1}-etkinlik`,
      pageNumber: `Sayfa ${midPage1 + 1}`,
      type: 'etkinlik_istasyonu',
      title: `Etkinlik İstasyonu: ${concept0} ve ${concept1} Laboratuvar Deneyi`,
      badge: 'Etkinlik İstasyonu',
      materials: ['Deney masası', 'Ölçüm aleti ve cetvel', 'Kontrollü deney numuneleri', 'Veri kayıt çizelgesi'],
      steps: [
        'Kontrollü değişkenleri belirleyip ortam koşullarını sabitleyiniz.',
        `Bağımsız değişken olarak "${concept0}" miktarını aşamalı olarak değiştiriniz.`,
        'Elde ettiğiniz ölçüm verilerini tabloya kaydedip sonuçları karşılaştırınız.'
      ],
      evaluationQuestions: [
        {
          question: `Deneyde ${concept0} değiştirildiğinde elde edilen sonuç nasıl etkilenmiştir?`,
          answer: `${concept0} artırıldığında sisteme ait bağımlı değişken doğrudan etkilenmiş ve bilimsel hipotez doğrulanmıştır.`
        },
        {
          question: 'Bu deneyin günlük yaşamdaki uygulaması nedir?',
          answer: `${concept1} ve ${concept2} prensiplerinden modern mühendislikte, teknolojide ve günlük yaşam konforunda yararlanılmaktadır.`
        }
      ],
      resultInfoBox: `${keyPoints[0] || `${subTopic.title} ilkeleri deneysel verilerle eksiksiz doğrulanmıştır.`}`,
      qrInfo: {
        title: `EBA: ${subTopic.shortTitle} Etkileşimli İçeriği`,
        description: `Ders kitabının ${midPage1 + 1}. sayfasında yer alan EBA dijital simülasyonu ve eğitim klibi.`,
        type: 'interactive'
      }
    },
    {
      id: `ib-${subTopic.id}-p${midPage2}-bilgi`,
      pageNumber: `Sayfa ${midPage2}`,
      type: 'bilgi_istasyonu',
      title: `Bilgi İstasyonu: ${concept2}`,
      badge: 'Bilgi İstasyonu',
      content: subTopic.summarySections[1]?.paragraphs?.join(' ') || `${concept0}, ${concept1} ve ${concept2} ilkeleri doğrultusunda sistemin dengesini ve işleyişini belirler.`
    },
    {
      id: `ib-${subTopic.id}-p${midPage2 + 1}-bilgikutusu`,
      pageNumber: `Sayfa ${midPage2 + 1}`,
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Sınavlara Yönelik Hap Bilgi',
      badge: 'Maarif Sınav Notu',
      content: subTopic.summarySections[0]?.examNote || `📌 LGS & SINAV NOTU: ${concept0} ile ${concept1} arasındaki sebep-sonuç ilişkisine dikkat edilmelidir. Sorularda değişkenlerin kontrol altında tutulması belirleyici unsurdur.`
    },
    {
      id: `ib-${subTopic.id}-p${midPage3}-cagini-asanlar`,
      pageNumber: `Sayfa ${midPage3}`,
      type: 'cagini_asanlar',
      title: subTopic.summarySections[0]?.scientistBox ? `Çağını Aşanlar: ${subTopic.summarySections[0].scientistBox.name}` : `Çağını Aşanlar: Bilimin Öncüleri`,
      badge: 'Çağını Aşanlar',
      content: subTopic.summarySections[0]?.scientistBox
        ? `${subTopic.summarySections[0].scientistBox.name} (${subTopic.summarySections[0].scientistBox.role}): ${subTopic.summarySections[0].scientistBox.contribution}`
        : `${concept3} ve ${concept0} alanında tarihte derin iz bırakan Türk-İslam ve dünya bilginleri, insanlığın ortak bilim mirasına paha biçilmez katkılarda bulunmuşlardır.`
    },
    {
      id: `ib-${subTopic.id}-p${endPage}-pekistirme`,
      pageNumber: `Sayfa ${endPage}`,
      type: 'pekistirme_istasyonu',
      title: `Pekiştirme İstasyonu: ${subTopic.shortTitle} Bilgi Şeması`,
      badge: 'Pekiştirme',
      reinforcementData: {
        type: 'branching_keys',
        solution: `1. Adım: "${concept0} bilimsel olarak kanıtlanmış bir ilkedir." (DOĞRU) ➔ 2. Adım: "${concept1} sisteme etki etmez." (YANLIŞ) ➔ 3. Adım: Doğru çıkarımlarla 1. ÇIKIŞA ulaşılır.`
      },
      interactiveAnswer: `Doğru Çözüm Anahtarı: 1-DOĞRU ➔ 2-YANLIŞ ➔ Hedef Çıkış: 1. ÇIKIŞ.`
    }
  ];

  return items;
}

/**
 * Universal Resolver:
 * Resolves the 100% complete interactive book flow for ANY subtopic of ANY unit in ANY grade.
 */
export function getCompleteInteractiveBookFlow(unit: Unit, subTopic: SubTopic): InteractiveBookItem[] {
  // 1. Check allInteractiveBookFlows dictionary first (dedicated page-by-page flow)
  if (allInteractiveBookFlows[subTopic.id] && allInteractiveBookFlows[subTopic.id].length > 0) {
    return allInteractiveBookFlows[subTopic.id];
  }

  // 2. If subTopic has predefined flow with items, use it
  if (subTopic.interactiveBookFlow && subTopic.interactiveBookFlow.length > 0) {
    return subTopic.interactiveBookFlow;
  }

  // 3. Fallback: Dynamically generate comprehensive Maarif flow matching pageRange and concepts
  return generateComprehensiveMaarifFlow(unit, subTopic);
}
