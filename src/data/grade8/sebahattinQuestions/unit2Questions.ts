import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 2. ÜNİTE: DNA VE GENETİK KOD - SEBAHATTİN LGS SORU HAVUZU
// ============================================================================

export const sebahattinDnaQuestions: LgsQuestion[] = [
  // Subtopic 1: DNA ve Genetik Kod
  {
    id: 2101,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA\'da Meydana Gelen Bozulmalar ve Onarım',
    scenario: 'Bir canlıya ait DNA parçası şöyledir:\n1. Zincir: A - T - 1 - G - S - A - 3 - 4 - A - S - S\n2. Zincir: T - A - A - S - 2 - T - T - A - T - 5 - G\nBilge bu DNA ile ilgili;\nI. Bu sorun DNA\'nın yapısının tamamen bozulmasına neden olur ve düzeltilemez.\nII. Meydana gelen olaya radyasyon neden olmuş olabilir.\nIII. DNA\'nın bu sorunu düzeltmesi için 2 timin, 2 guanin, 1 adenin nükleotidine ihtiyacı vardır.\nIV. Sadece tek zincirdeki boşluklar onarılabilirken karşılıklı boşluklar onarılamaz.\nnotlarını almıştır.',
    questionPrompt: 'Öğretmeni Bilge\'nin notlarını kontrol ettiğinde hangilerinin doğru olduğunu onaylar?',
    options: [
      { key: 'A', text: 'I ve III' },
      { key: 'B', text: 'II, III ve IV' },
      { key: 'C', text: 'I ve V' },
      { key: 'D', text: 'Yalnız I' }
    ],
    correctAnswer: 'B',
    explanation: 'DNA\'da tek zincirde meydana gelen eksiklikler karşı zincirdeki baza göre onarılabilir (1=T, 2=G, 3=A, 4=T, 5=G). Toplamda 2 timin, 2 guanin, 1 adenin gerekir. Radyasyon buna sebep olabilir. Karşılıklı zincirde boşluk olmadığı için bu DNA tamamen onarılabilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'DNA Onarım Mekanizması',
    theme: 'DNA Yapısı ve Eşlenmesi'
  },
  {
    id: 2102,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Hücre Çekirdeğindeki Kalıtsal Yapıların Hiyerarşisi',
    scenario: 'Hücre çekirdeğinde yer alan yapılar incelendiğinde:\n• Kromozom: DNA ve özel protein kılıfın oluşturduğu en büyük yapıdır.\n• DNA: Yönetici molekül olup çift zincirlidir.\n• Gen: DNA üzerindeki görev birimidir.\n• Nükleotid: DNA\'nın en küçük yapı birimidir.',
    questionPrompt: 'Buna göre bu yapılarla ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'DNA bölümleri birleşerek genleri oluşturur.' },
      { key: 'B', text: 'Genler DNA üzerindeki görev birimleridir.' },
      { key: 'C', text: 'Tüm canlıların sahip olduğu genler tamamen aynıdır.' },
      { key: 'D', text: 'Genler doğrudan kromozomlardan oluşur.' }
    ],
    correctAnswer: 'B',
    explanation: 'DNA üzerinde belirli kalıtsal özellikleri şifreleyen anlamlı bölgelere gen denir ve genler DNA\'nın görev birimidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kalıtsal Yapılar Hiyerarşisi',
    theme: 'Genetik Yapılar'
  },
  {
    id: 2103,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'İç İçe Oyuncak Kutular Modeli',
    scenario: 'Elif Öğretmen fen bilimleri dersinde iç içe geçirilebilen 4 farklı renkteki kutuyu tahtaya yansıtmıştır. 1 (en küçük) < 2 < 3 < 4 (en büyük).\nÖğrencilerden DNA, gen, kromozom ve nükleotid kavramlarını bu kutularla eşleştirmelerini istemiştir.',
    questionPrompt: 'Buna göre öğrencilerin söylediği ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: '1 nolu kutu nükleotidi temsil eder; sırası ve sayısı canlıların akrabalık durumları hakkında bilgi verir.' },
      { key: 'B', text: '2 nolu kutu geni temsil eder; yönetici molekülün anlamlı görev birimidir.' },
      { key: 'C', text: '3 nolu kutu DNA\'yı temsil eder; tüm canlılarda 4 farklı çeşidi olup dizilimi canlıdan canlıya değişir.' },
      { key: 'D', text: '4 nolu kutu nükleotidi temsil eder; DNA\'nın en küçük parçasıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'En büyük olan 4 nolu kutu kromozomu temsil eder (protein kılıf + DNA). Nükleotid en küçük olan 1 nolu kutudur.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Görsel Model Eşleştirme',
    theme: 'Kromozom, DNA, Gen, Nükleotid'
  },
  {
    id: 2104,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Düğmelerle DNA Modeli Tasarımı',
    scenario: 'Emre fen bilimleri proje ödevi için DNA modeli hazırlayacaktır:\n• Deoksiriboz şekeri için ayrı bir düğme\n• Fosfat grubu için ayrı bir düğme\n• 4 çeşit organik baz için farklı renkte düğmeler seçecektir.',
    questionPrompt: 'Buna göre Emre yapacağı modelde en az kaç farklı düğme şekli ve rengi kullanmalıdır?',
    options: [
      { key: 'A', text: '3 şekil, 3 renk' },
      { key: 'B', text: '3 şekil, 6 renk (Fosfat, Şeker, A, T, G, C)' },
      { key: 'C', text: '4 şekil, 4 renk' },
      { key: 'D', text: '2 şekil, 4 renk' }
    ],
    correctAnswer: 'B',
    explanation: 'Fosfat, Deoksiriboz şekeri ve Organik baz olmak üzere 3 temel bileşen (3 şekil); fosfat, şeker ve 4 çeşit organik baz için ise toplam 6 farklı renk kullanılmalıdır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Model Tasarımı',
    theme: 'DNA Nükleotid Yapısı'
  },
  {
    id: 2105,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA Eşlenmesi Basamakları Sıralaması',
    scenario: 'DNA\'nın kendini eşleme basamakları şunlardır:\n1. Sitoplazmada serbest halde bulunan nükleotidler çekirdeğe girer.\n2. DNA\'nın çift zincirli yapısı enzimler yardımıyla bir fermuar gibi ikiye ayrılır.\n3. Ayrılan zincirlerin karşısına serbest nükleotidler uygun şekilde (A-T, G-C) yerleşir.\n4. Eşler tamamlandıktan sonra başlangıçtaki ile tıpatıp aynı iki yeni DNA molekülü oluşur.',
    questionPrompt: 'DNA eşlenmesinin gerçekleşme sırası aşağıdakilerden hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: '2 - 1 - 3 - 4' },
      { key: 'B', text: '1 - 2 - 4 - 3' },
      { key: 'C', text: '2 - 3 - 1 - 4' },
      { key: 'D', text: '4 - 1 - 2 - 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Önce DNA fermuar gibi açılır (2), ardından sitoplazmadan çekirdeğe serbest nükleotidler girer (1), açılan zincirlerin karşısına yerleşir (3) ve son olarak başlangıçtaki ile aynı iki yeni DNA oluşur (4). Sıralama 2 - 1 - 3 - 4\'tür.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Süreç Basamaklandırma',
    theme: 'DNA Replikasyonu'
  },
  {
    id: 2106,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA Kendini Eşlerken Sitoplazma ve Çekirdek Madde Değişimi Grafiği',
    scenario: 'Hücre bölünmesi öncesinde çekirdekteki DNA molekülü kendini hatasız olarak eşlemektedir. Bu süreçte sitoplazmada serbest dolaşan maddeler ile çekirdekteki madde miktarları ölçülmüştür.',
    questionPrompt: 'DNA eşlenmesi sırasında sitoplazmadaki serbest nükleotid, deoksiriboz şekeri ve fosfat miktarlarının zamana bağlı değişim grafiği nasıldır?',
    options: [
      { key: 'A', text: 'Sitoplazmadaki serbest nükleotid, şeker ve fosfat miktarları sürekli azalırken çekirdekteki miktarlar artar.' },
      { key: 'B', text: 'Sitoplazmadaki organik baz miktarı artarken fosfat miktarı sabit kalır.' },
      { key: 'C', text: 'Hem sitoplazmada hem çekirdekteki nükleotid miktarı aynı anda artış gösterir.' },
      { key: 'D', text: 'Sitoplazmadaki serbest nükleotid miktarı değişmez çünkü yeni nükleotidler doğrudan çekirdekte sentezlenir.' }
    ],
    correctAnswer: 'A',
    explanation: 'DNA eşlenirken çekirdekteki yeni zincirlerin yapımında kullanılmak üzere sitoplazmadaki serbest nükleotidler, fosfat ve deoksiriboz şekerleri çekirdek zarından içeri alınır. Dolayısıyla sitoplazmadaki miktarları azalır, çekirdekteki toplam nükleotid miktarı 2 katına çıkar.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Hücresel Madde Trafiği ve Eşlenme',
    theme: 'DNA Eşlenmesinde Madde Değişimleri'
  },
  {
    id: 2107,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Tüm Canlılarda Aynı 4 Baz Varken Tür Çeşitliliğinin Sebebi',
    scenario: 'Tüm canlıların (insan, bakteri, meşe ağacı, mantar) DNA\'sında sadece 4 çeşit organik baz (Adenin, Timin, Guanin, Sitozin) bulunmasına rağmen yeryüzünde milyonlarca farklı canlı türü ve aynı türe ait bireyler arasında genetik farklılıklar mevcuttur.',
    questionPrompt: 'Canlıların birbirinden farklı genetik özelliklere sahip olmasının temel sebebi hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Her canlı türünün farklı bir çeşit organik baza sahip olması.' },
      { key: 'B', text: 'DNA üzerindeki nükleotidlerin sayı, sıra ve diziliminin canlıdan canlıya farklılık göstermesi.' },
      { key: 'C', text: 'Fosfat ve şeker moleküllerinin canlı türüne göre farklı kimyasal bağ yapması.' },
      { key: 'D', text: 'Farklı canlıların hücre çekirdeğindeki kromozomların tamamen farklı moleküllerden yapılmış olması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tüm canlılarda nükleotid çeşitleri tamamen aynıdır (A, T, G, C). Canlıların birbirine benzememesinin ve biyolojik çeşitliliğin tek kaynağı, bu nükleotidlerin DNA zinciri üzerindeki sayısı, sırası ve diziliminin farklı olmasıdır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Genetik Kod ve Çeşitlilik',
    theme: 'Nükleotid Dizilimi ve Çeşitlilik'
  },

  // Subtopic 2: Kalıtım
  {
    id: 2201,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Bezelyelerde Tohum Rengi Çaprazlama Deneyi',
    scenario: 'Bir araştırmacı sarı tohum rengindeki iki bezelyeyi kendi aralarında çaprazlamış ve oluşan birinci kuşakta hem sarı tohumlu hem de yeşil tohumlu bezelyeler elde etmiştir (Sarı tohum aleli yeşil tohum aleline baskındır).',
    questionPrompt: 'Araştırmacının yaptığı bu çalışma ile ilgili,\nI. Çaprazlanan sarı tohumlu ata bezelyeler heterozigot (melez) genotiplidir.\nII. Yeşil tohumlu bezelyeler kendi aralarında çaprazlandığında sarı tohumlu bezelye elde edilemez.\nIII. Sarı tohumlu bezelyeler homozigot ya da heterozigot genotipe sahip olabilir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Sarı tohumlu iki bezelyeden çekinik yeşil tohum (ss) çıkması için her iki atanın da melez (Ss x Ss) olması şarttır (I doğru). Yeşil tohum çekinik olduğundan (ss x ss) çaprazlamasında sadece yeşil oluşur (II doğru). Sarı renk ise SS veya Ss olabilir (III doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Mendel Çaprazlama Analizi',
    theme: 'Genotip ve Fenotip Olasılıkları'
  },
  {
    id: 2202,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Mendel F1 ve F2 Kuşakları Çaprazlama Şeması',
    scenario: 'Saf döl mor çiçekli bezelye (MM) ile saf döl beyaz çiçekli bezelye (mm) çaprazlanarak birinci kuşakta (F1) tamamı melez mor çiçekli (Mm) bezelyeler elde edilmiştir. Ardından F1 dölünden iki bezelye kendi arasında çaprazlanarak F2 kuşağı (1 MM, 2 Mm, 1 mm) oluşturulmuştur.',
    questionPrompt: 'Mendel\'in bu çalışması incelendiğinde yapılan yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'F1 dölündeki bezelyelerin fenotipinde çekinik alel etkisini gösterememiştir.' },
      { key: 'B', text: 'F2 dölünde fenotip oranı %75 mor, %25 beyazdır.' },
      { key: 'C', text: 'F2 dölündeki beyaz çiçekli bezelyelerin genotipi heterozigottur.' },
      { key: 'D', text: 'F2 dölünde genotip oranı 1:2:1 (Saf Baskın : Melez : Saf Çekinik) şeklindedir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Beyaz çiçek rengi çekinik özelliktir ve fenotipte ortaya çıkabilmesi için genotipinin kesinlikle saf döl homozigot (mm) olması gerekir; heterozigot olamaz.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Genetik Olasılık',
    theme: 'Kalıtım İlkeleri'
  },
  {
    id: 2203,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Akraba Evliliği ve Kalıtsal Hastalıklar',
    scenario: 'Talasemi (Akdeniz anemisi) vücut kromozomlarında taşınan çekinik bir genle aktarılır. Anne ve babanın hasta olmadığı ancak ikisinin de taşıyıcı (heterozigot) olduğu bir ailede doğacak çocuğun talasemi hastası olma olasılığı %25\'tir. Gazete haberinde akraba evliliği yapan topluluklarda bu hastalığın görülme oranının çok daha yüksek olduğu belirtilmiştir.',
    questionPrompt: 'Akraba evliliğinin sakıncalı olmasının temel gerekçesi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Akraba evliliği doğrudan yeni mutasyonların oluşmasına neden olur.' },
      { key: 'B', text: 'Aynı soydan gelen bireylerde benzer çekinik hastalık genlerinin bir araya gelme olasılığı çok daha yüksektir.' },
      { key: 'C', text: 'Akraba evliliklerinde doğan çocukların tamamı kesinlikle hasta olarak doğar.' },
      { key: 'D', text: 'Hastalık genleri sadece erkek bireyler aracılığıyla aktarılır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Akraba olan bireylerin genetik benzerlikleri yüksektir. Bu nedenle çekinik olarak taşınan kusurlu hastalık alellerinin bir araya gelme (homozigot çekinik olma) ihtimali akraba evliliklerinde belirgin biçimde artar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sağlık ve Kalıtım Muhakemesi',
    theme: 'Akraba Evliliği Riskleri'
  },
  {
    id: 2204,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Soy Ağacı ve Çekinik Karakter Takibi',
    scenario: 'Bir bezelye soy ağacında taralı bireyler yeşil tohumlu (çekinik) olup taralı olmayan bireyler sarı tohumludur. Sarı tohumlu 1 ve 2 nolu ebeveynlerin çocuklarından biri yeşil tohumlu olarak doğmuştur.',
    questionPrompt: 'Buna göre 1 ve 2 numaralı bireylerin genotipleri ile ilgili hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Her iki birey de homozigot sarı tohumludur (SS).' },
      { key: 'B', text: 'Her iki birey de heterozigot melez genotiplidir (Ss).' },
      { key: 'C', text: 'Bireylerden biri homozigot sarı (SS), diğeri homozigot yeşildir (ss).' },
      { key: 'D', text: 'Bireylerin genotipleri hakkında kesin bir yorum yapılamaz.' }
    ],
    correctAnswer: 'B',
    explanation: 'Çocuğun yeşil tohumlu (ss) olabilmesi için alellerden birini anneden, diğerini babadan alması gerekir. Anne ve baba sarı tohumlu olduğuna göre her ikisinde de çekinik s geni bulunmalı, yani her ikisi de melez (Ss) olmalıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Soy Ağacı Çıkarımı',
    theme: 'Soy Ağacı Analizi'
  },
  {
    id: 2205,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Bezelyelerde Düzgün ve Buruşuk Tohum Çaprazlaması',
    scenario: 'Düzgün tohumlu iki bezelye çaprazlandığında 300 adet düzgün tohumlu, 100 adet buruşuk tohumlu bezelye elde edilmiştir (Düzgün tohum aleli D, buruşuk tohum aleli d\'ye baskındır).',
    questionPrompt: 'Oluşan bu bezelyeler ve ata bireylerle ilgili hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Çaprazlanan ata bezelyelerin ikisi de heterozigottur (Dd x Dd).' },
      { key: 'B', text: 'Oluşan bezelyelerdeki fenotip oranı 3 : 1 (Düzgün : Buruşuk) şeklindedir.' },
      { key: 'C', text: 'Oluşan düzgün tohumlu bezelyelerin tamamı kesinlikle saf döldür (DD).' },
      { key: 'D', text: 'Oluşan buruşuk tohumlu bezelyelerin genotipi homozigot çekiniktir (dd).' }
    ],
    correctAnswer: 'C',
    explanation: 'Dd x Dd çaprazlamasında oluşan 300 düzgün bezelyenin yaklaşık 100 tanesi saf döl (DD), 200 tanesi ise melez döldür (Dd). Yani düzgün tohumlu bezelyelerin hepsi saf döl değil, 2/3\'ü melezdir.',
    skillTag: 'Matematiksel Muhakeme',
    cognitiveLevel: 'Fenotip ve Genotip Oranları',
    theme: 'Mendel Oranları ve Tohum Şekli'
  },
  {
    id: 2206,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'İnsanda Cinsiyetin Belirlenmesi ve Kız/Erkek Olasılığı',
    scenario: 'Dört kız çocuğu bulunan bir ailenin beşinci çocuklarının dünyaya gelmesi beklenmektedir.',
    questionPrompt: 'Bu ailenin beşinci çocuklarının erkek olma olasılığı yüzde kaçtır?',
    options: [
      { key: 'A', text: '%100' },
      { key: 'B', text: '%50' },
      { key: 'C', text: '%25' },
      { key: 'D', text: '%10' }
    ],
    correctAnswer: 'B',
    explanation: 'Her doğum birbirinden bağımsız bir genetik olaydır. Anne daima X kromozomu verir, babadan ise %50 ihtimalle X, %50 ihtimalle Y kromozomu gelir. Önceki çocukların cinsiyeti ne olursa olsun, her yeni doğumda kız veya erkek olma olasılığı daima %50\'dir (1/2).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bağımsız Olasılık',
    theme: 'İnsanda Cinsiyet Kalıtımı'
  },
  {
    id: 2207,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Melez ve Saf Çekinik Bireylerin Çaprazlanması',
    scenario: 'Melez döl mor çiçekli bezelye (Mm) ile beyaz çiçekli bezelye (mm) çaprazlanmaktadır.',
    questionPrompt: 'Bu çaprazlama sonucunda oluşacak yeni kuşakla ilgili aşağıdaki olasılıklardan hangisi doğrudur?',
    options: [
      { key: 'A', text: '%100 melez döl mor çiçekli bezelye' },
      { key: 'B', text: '%50 melez mor çiçekli (Mm), %50 saf beyaz çiçekli (mm)' },
      { key: 'C', text: '%75 mor çiçekli, %25 beyaz çiçekli' },
      { key: 'D', text: '%50 saf mor çiçekli (MM), %50 saf beyaz çiçekli (mm)' }
    ],
    correctAnswer: 'B',
    explanation: 'Mm x mm çaprazlamasında genotipler: Mm, Mm, mm, mm şeklinde oluşur. Yani genotip ve fenotip olarak %50 melez mor (Mm), %50 saf çekinik beyaz (mm) bezelye elde edilir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kontrol Çaprazlaması',
    theme: 'Çaprazlama Olasılıkları'
  },

  // Subtopic 3: Mutasyon ve Modifikasyon
  {
    id: 2301,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Mutasyon ve Modifikasyon Seksek Oyunu',
    scenario: 'Öğrenciler mutasyon ve modifikasyon örneklerini içeren bir seksek oyunu tasarlamışlardır:\n1. Keçilerin dört boynuzlu olması (Mutasyon)\n2. Karanlıkta çimlenen bitkilerin sararması (Modifikasyon)\n3. Van kedisinin gözlerinin farklı renkte olması (Mutasyon)\n4. İstiridyelerin suyun akışına göre kabuk şekli alması (Modifikasyon)\n5. Altı parmaklılık (Mutasyon)\n6. Down sendromu (Mutasyon)\n7. Albinoluk (Mutasyon)\n8. Spor yapan kişinin kaslarının gelişmesi (Modifikasyon)\n9. İnsanların güneşte bronzlaşması (Modifikasyon)\nFatma mutasyonlara, Gonca modifikasyonlara basarak ilerleyecektir.',
    questionPrompt: 'Buna göre Fatma ve Gonca\'nın bastığı kutucuklar hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Fatma: 1, 3, 5, 6, 7 — Gonca: 2, 4, 8, 9' },
      { key: 'B', text: 'Fatma: 1, 3, 5, 8 — Gonca: 2, 4, 6, 7, 9' },
      { key: 'C', text: 'Fatma: 2, 4, 8, 9 — Gonca: 1, 3, 5, 6, 7' },
      { key: 'D', text: 'Fatma: 1, 2, 3, 5 — Gonca: 4, 6, 7, 8' }
    ],
    correctAnswer: 'A',
    explanation: 'Gen yapısındaki bozulmalar mutasyondur: Dört boynuzlu keçi (1), Van kedisi (3), Altı parmaklılık (5), Down sendromu (6), Albinoluk (7). Çevre etkisiyle gen işleyişindeki değişimler modifikasyondur: Işıksız ortamda sararma (2), istiridye kabuğu (4), kas gelişimi (8), bronzlaşma (9).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kavram Sınıflandırması',
    theme: 'Mutasyon vs Modifikasyon'
  },
  {
    id: 2302,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Himalaya Tavşanı ve Çuha Çiçeği Deneyleri',
    scenario: 'I. Beyaz kıllara sahip Himalaya tavşanının sırtındaki kıllar kazınıp buz torbası bağlandığında çıkan yeni kılların siyah olduğu görülmüştür. Bu siyah kıllı tavşanın yavruları doğduğunda yine beyaz kıllı olmuştur.\nII. Çuha çiçeği 15-25°C sıcaklıkta kırmızı çiçek açarken, 25-35°C sıcaklıkta yetiştirildiğinde beyaz çiçek açmaktadır.',
    questionPrompt: 'Bu iki gözlem birlikte değerlendirildiğinde aşağıdaki ortak çıkarımlardan hangisine ulaşılır?',
    options: [
      { key: 'A', text: 'Çevresel faktörler genlerin nükleotid dizilimini kalıcı olarak değiştirmiştir.' },
      { key: 'B', text: 'Çevre şartları genlerin yapısını değil, sadece işleyişini değiştirmiştir ve bu değişimler kalıtsal değildir.' },
      { key: 'C', text: 'Oluşan değişimler canlının üreme hücrelerinde mutasyona sebep olmuştur.' },
      { key: 'D', text: 'Canlılar çevreye uyum sağlayabilmek için yeni genler üretmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Her iki örnek de modifikasyondur. Modifikasyonda genin nükleotid yapısı değişmez, sadece çevrenin etkisiyle genin çalışma şekli (işleyişi) değişir ve sonraki nesle aktarılmaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Ortak Prensip Bulma',
    theme: 'Gen İşleyişi Değişimi'
  },
  {
    id: 2303,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Üreme Hücresi ve Vücut Hücresi Mutasyonu Kalıtsallığı',
    scenario: 'Radyasyona maruz kalan iki bireyden Ahmet Bey\'in deri hücrelerinde DNA hasarı oluşarak deri kanseri gelişmiştir. Mehmet Bey\'in ise sperm ana hücresinde DNA eşlenmesi sırasında bir baz dizilimi mutasyona uğramıştır.',
    questionPrompt: 'Bu iki bireyin çocuklarında bu mutasyonların görülme olasılığı hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Her iki bireyin de çocuklarında bu mutasyonlar kesinlikle ortaya çıkar.' },
      { key: 'B', text: 'Ahmet Bey\'in mutasyonu vücut hücresinde olduğu için kalıtsal değildir, yavruya aktarılmaz; Mehmet Bey\'in mutasyonu üreme hücresinde olduğu için çocuğuna aktarılabilir.' },
      { key: 'C', text: 'Sadece deri kanseri genetik olarak çocuklara geçer.' },
      { key: 'D', text: 'Hiçbir mutasyon yeni nesillere aktarılamaz.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vücut hücrelerinde (deri, karaciğer, kemik vb.) meydana gelen mutasyonlar sadece o bireyi bağlar ve kalıtsal değildir. Üreme hücrelerinde (sperm, yumurta veya bunların ana hücreleri) oluşan mutasyonlar ise döllenmeyle yavru döllere aktarılarak kalıtsal hale gelir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Mutasyon Kalıtsallık Kuralı',
    theme: 'Vücut vs Üreme Hücresi Mutasyonları'
  },
  {
    id: 2304,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Karahindiba Bitkisi Ovalık ve Dağlık Bölge Deneyi',
    scenario: 'Aynı kalıtsal yapıya (özdeş genotipe) sahip karahindiba bitkisinden alınan iki tohumdan biri verimli ovada, diğeri ise yüksek dağlık alanda ekilmiştir. Ovada yetişen bitki uzun boylu ve geniş yapraklı olurken, dağda yetişen bitki soğuk ve rüzgâr etkisiyle kısa boylu ve küçük yapraklı kalmıştır. Dağdaki bitkinin tohumları tekrar ovaya ekildiğinde ise yeni bitkiler uzun boylu olarak gelişmiştir.',
    questionPrompt: 'Bu deneyin sonuçları aşağıdakilerden hangisini doğrudan kanıtlar?',
    options: [
      { key: 'A', text: 'Çevre koşulları karahindiba bitkisinde kalıcı mutasyonlara neden olmuştur.' },
      { key: 'B', text: 'Boy uzunluğundaki değişim çevrenin etkisiyle ortaya çıkan ve kalıtsal olmayan bir modifikasyondur.' },
      { key: 'C', text: 'Karahindiba bitkisi dağ ortamında yeni bir türe dönüşmüştür.' },
      { key: 'D', text: 'Bitkinin DNA nükleotid dizilimi dağda tamamen değişmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Dağda yetişen bitkinin tohumu ovaya ekildiğinde tekrar uzun boylu olması, genlerin yapısının değil sadece çevre etkisiyle işleyişinin değiştiğini (modifikasyon) ve kalıtsal olmadığını kesin olarak kanıtlar.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Modifikasyon',
    theme: 'Karahindiba Modifikasyon Deneyi'
  },

  // Subtopic 4: Adaptasyon
  {
    id: 2401,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Yaprak Kuyruklu Geko ve Kamuflaj',
    scenario: 'Madagaskar yağmur ormanlarında yaşayan yaprak kuyruklu geko kertenkelesi, kurumuş yaprakların renk ve şekil yönünden birebir taklidini yaparak hem yırtıcılardan saklanır hem de böcekleri avlar. Bu canlı türünün yavruları da doğduklarında aynı yaprak desenli kuyruğa sahip olurlar.',
    questionPrompt: 'Yaprak kuyruklu gekonun bu özelliği ile ilgili aşağıdaki öğrencilerden hangilerinin ifadesi doğrudur?\n• Ahmet: "Bulundukları ortama adaptasyon sağladıklarını gösterir."\n• Mehmet: "Düşmanları tarafından fark edilmeleri zor olduğu için yaşama ve üreme şansları artar."\n• Ayşe: "Bu özellik kalıtsaldır ve gelecek nesillere aktarılır."',
    options: [
      { key: 'A', text: 'Ahmet ve Ayşe' },
      { key: 'B', text: 'Mehmet ve Ayşe' },
      { key: 'C', text: 'Ahmet ve Mehmet' },
      { key: 'D', text: 'Ahmet, Mehmet ve Ayşe' }
    ],
    correctAnswer: 'D',
    explanation: 'Gekonun kamuflajı bir adaptasyondur (Ahmet doğru), yaşama ve üreme şansını artırır (Mehmet doğru) ve genlerle yavru döllere aktarılan kalıtsal bir özelliktir (Ayşe doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Adaptasyon Nitelikleri',
    theme: 'Kamuflaj ve Doğal Seçilim'
  },
  {
    id: 2402,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Kutup Tilkisi ve Çöl Tilkisi Karşılaştırması',
    scenario: 'Soğuk kutup bölgesinde yaşayan kutup tilkisinin kulak, burun ve kuyruk gibi vücut çıkıntıları oldukça küçüktür ve kürkü beyazdır. Sıcak çöl bölgesinde yaşayan çöl tilkisinin ise kulakları ve kuyruğu vücuduna göre çok uzun ve geniştir, kürkü ise kum rengindedir.',
    questionPrompt: 'Bu iki tilki türünün vücut yapılarındaki farklılıkların temel sebebi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Farklı ekosistemlerde yaşayan aynı türe ait canlıların ısı dengesini sağlamak ve kamufle olmak için farklı adaptasyonlar geliştirmesi.' },
      { key: 'B', text: 'Çöl tilkilerinin beslenme tarzının mutasyona uğramış olması.' },
      { key: 'C', text: 'Kutup tilkilerinin soğuk nedeniyle modifikasyon geçirerek kulaklarının küçülmesi.' },
      { key: 'D', text: 'Çöl tilkilerinin daha hızlı koşma ihtiyacından dolayı kulaklarını uzatması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kutup tilkisinde küçük kulaklar ısı kaybını önler; çöl tilkisinde büyük kulaklar geniş yüzey alanı sayesinde vücuttan fazla ısının atılmasını sağlar. Bu durum farklı ortamlardaki benzer canlıların geliştirdiği kalıtsal adaptasyonlardır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Karşılaştırmalı Analiz',
    theme: 'Çevreye Uyum ve Isı Dengesi'
  },
  {
    id: 2403,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Kaktüslerin Çöl Koşullarına Adaptasyonu',
    scenario: 'Kurak ve sıcak çöl ekosisteminde yaşayan kaktüs bitkilerinin yaprakları su kaybını en aza indirmek için diken şekline dönüşmüş, gövdeleri ise su depo edebilen etli bir yapı kazanmıştır. Kökleri ise yer altı sularına ulaşabilmek için toprakta onlarca metre derinlere ve yanlara doğru yayılır.',
    questionPrompt: 'Kaktüs bitkisinin bu özellikleri ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Bu özellikler kaktüsün çölde yaşama ve üreme şansını artıran kalıtsal adaptasyonlardır.' },
      { key: 'B', text: 'Kaktüs sulak bir bölgeye dikilirse yaprakları bir hafta içinde geniş yapraklara dönüşür.' },
      { key: 'C', text: 'Diken yapraklar fotosentez hızını 10 kat artırmak için geliştirilmiştir.' },
      { key: 'D', text: 'Kaktüsün köklerinin derinlere gitmesi kalıtsal olmayan bir modifikasyondur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kaktüslerin gövdede su depolaması, yapraklarının diken olması ve derin kök sistemine sahip olması çölde hayatta kalmayı sağlayan kalıtsal adaptasyonlardır. Sulak alana ekilseler dahi bu özelliklerini nesiller boyu korurlar.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bitkilerde Kurakçıl Adaptasyonlar',
    theme: 'Kaktüs Adaptasyonları'
  },
  {
    id: 2404,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Sanayi Devrimi Sonrası Güve Kelebeklerinde Doğal Seçilim',
    scenario: 'İngiltere\'de Sanayi Devrimi öncesinde ağaç gövdeleri açık renkli likenlerle kaplıydı ve açık renkli güve kelebekleri kuşlar tarafından fark edilmeyerek hayatta kalıyordu (Koyu renkliler avlanıyordu). Sanayi Devrimi sonrası fabrikalardan çıkan kömür kurumu ağaç gövdelerini siyaha boyadı ve likenler yok oldu. Kısa süre içinde açık renkli güve kelebekleri kuşlar tarafından kolayca avlanarak sayıları azaldı; koyu renkli kelebekler kamufle olarak popülasyonda hakim hale geldi.',
    questionPrompt: 'Bu tarihi süreç aşağıdakilerden hangisinin en somut örneğidir?',
    options: [
      { key: 'A', text: 'Doğal Seçilim ve Varyasyon' },
      { key: 'B', text: 'Klonlama' },
      { key: 'C', text: 'Yapay Döllenme' },
      { key: 'D', text: 'Modifikasyon' }
    ],
    correctAnswer: 'A',
    explanation: 'Çevre koşullarına uyum sağlayan (kamufle olan koyu renkli) bireylerin yaşayıp üremesi, uyum sağlayamayanların (açık renklilerin) ise elenmesi sürecine Doğal Seçilim denir. Kelebeklerin renk çeşitliliği ise popülasyondaki varyasyondur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Tarihi Olay ve Doğal Seçilim',
    theme: 'Güve Kelebekleri ve Doğal Seçilim'
  },

  // Subtopic 5: Biyoteknoloji
  {
    id: 2501,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Bakterilerde Rekombinant DNA ile İnsülin Üretimi',
    scenario: 'Genetik mühendisleri, sağlıklı bir insanın hücresinden insülin hormonu üretimini sağlayan geni izole etmiş ve bu geni bakteri DNA\'sına (plazmit) aktarmışlardır. Gen aktarımı yapılan bu bakteriler çoğaltılarak laboratuvar ortamında bol miktarda saf insülin hormonu üretilmiş ve şeker hastalarının kullanımına sunulmuştur.',
    questionPrompt: 'Yapılan bu çalışma ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'İnsülin geni aktarılan bakterilerin genetik yapısı değiştirilmiştir (Gen aktarımı).' },
      { key: 'B', text: 'Bu işlem gen tedavisi olmayıp genetik mühendisliği ve biyoteknolojinin ortak ürünüdür.' },
      { key: 'C', text: 'Bakteriler insan genini alsa bile kendi orijinal proteinlerinden başka madde üretemez.' },
      { key: 'D', text: 'A ve B seçeneklerindeki değerlendirmeler doğrudur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bakteriye insan insülin geninin aktarılması gen aktarımıdır; bakterinin genetiği değişir ve biyoteknolojik yöntemle endüstriyel boyutta ilaç üretilmiş olur.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Biyoteknoloji Uygulamaları',
    theme: 'Gen Aktarımı ve İlaç Üretimi'
  },
  {
    id: 2502,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Klon Koyun Dolly Aşamaları ve Genetik Benzerlik',
    scenario: 'Koyun klonlama adımları:\n1. A koyununun vücut hücresi (meme hücresi) alınarak çekirdeği çıkarılıyor.\n2. B koyununun yumurta hücresi alınarak çekirdeği atılıyor.\n3. A koyununun çekirdeği, B koyununun çekirdeksiz yumurtasına aktarılıyor ve laboratuvarda çoğaltılarak embriyo elde ediliyor.\n4. Embriyo taşıyıcı C koyununun rahmine yerleştiriliyor ve doğum sonucunda klon kuzu (Dolly) dünyaya geliyor.',
    questionPrompt: 'Buna göre dünyaya gelen klon kuzu Dolly, genetik olarak hangi koyun ile birebir aynı kalıtsal bilgiye sahiptir?',
    options: [
      { key: 'A', text: 'Yumurta hücresi kullanılan B koyunu' },
      { key: 'B', text: 'Çekirdeği (DNA\'sı) kullanılan A koyunu' },
      { key: 'C', text: 'Taşıyıcı anne olan C koyunu' },
      { key: 'D', text: 'A ve B koyununun melez genetik karışımı' }
    ],
    correctAnswer: 'B',
    explanation: 'Hücrenin genetik bilgisini taşıyan DNA çekirdekte yer alır. Klon kuzu, çekirdeği alınan A koyununun genetik kopyasıdır (ikizidir).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Klonlama Prensipleri',
    theme: 'Klonlama ve Genetik Mühendisliği'
  },
  {
    id: 2503,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Gen Tedavisi ile Kalıtsal Hastalıkların İyileştirilmesi',
    scenario: 'Kalıtsal veya sonradan edinilmiş hastalıklarda hücredeki bozuk, kusurlu ya da çalışmayan genlerin tespiti yapılarak bu genlerin yerine sağlıklı ve fonksiyonel genlerin hücreye aktarılması yöntemine gen tedavisi denir.',
    questionPrompt: 'Gen tedavisi yöntemi ile ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sadece bitkilerde ürün verimini artırmak için kullanılır.' },
      { key: 'B', text: 'Hastalığa neden olan kusurlu genlerin etkisiz hale getirilmesi veya onarılması hedeflenir.' },
      { key: 'C', text: 'Klonlama ile birebir aynı anlama gelen bir uygulamadır.' },
      { key: 'D', text: 'İnsanların DNA yapısını tamamen yok edip yapay DNA koymayı amaçlar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Gen tedavisi, kusurlu genlerin tespit edilip onarılmasını veya sağlıklı genlerin hücreye aktarılarak hastalığın tedavi edilmesini amaçlayan ileri bir biyoteknolojik yöntemdir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Genetik Mühendisliği Yöntemleri',
    theme: 'Gen Tedavisi ve Tıp'
  },
  {
    id: 2504,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Genetiği Değiştirilmiş Organizmalar (GDO) ve Tartışmalar',
    scenario: 'Tarımda mısır, pamuk ve soya bitkilerine zararlı böceklere karşı direnç sağlayan ya da kuraklığa dayanıklılığı artıran yabancı genler aktarılarak GDO\'lu ürünler elde edilmiştir.',
    questionPrompt: 'GDO\'lu ürünlerin hem faydaları hem de potansiyel riskleri birlikte değerlendirildiğinde hangisi bu risklerden biri olabilir?',
    options: [
      { key: 'A', text: 'Birim alandan alınan tarımsal ürün veriminin artması' },
      { key: 'B', text: 'Tarım zararlılarına karşı daha az kimyasal ilaç kullanılması' },
      { key: 'C', text: 'Gen kaçışı ile yabani otların kontrol edilemez hale gelmesi ve insanlarda beklenmeyen alerjik reaksiyonlara yol açabilmesi' },
      { key: 'D', text: 'Ürünlerin raf ömrünün uzatılması' }
    ],
    correctAnswer: 'C',
    explanation: 'A, B ve D seçenekleri GDO\'nun faydaları arasındadır. Ancak doğaya gen kaçışı riski, biyolojik çeşitliliğin azalması ve tüketildiğinde insanlarda yeni alerjilerin ortaya çıkabilmesi GDO\'nun en büyük riskleri ve etik tartışma konularıdır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Etik ve Sosyal Boyut Analizi',
    theme: 'GDO Fayda ve Risk Değerlendirmesi'
  }
];
