import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. ÜNİTE: ENERJİ DÖNÜŞÜMLERİ VE ÇEVRE BİLİMİ - MEBİ LGS DENEME VE SORU HAVUZU
// ============================================================================

export const sebahattinEnerjiCevreQuestions: LgsQuestion[] = [
  // Subtopic 1: Besin Zinciri ve Enerji Akışı
  {
    id: 6101,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Ekoloji Besin Piramidinde Canlı Basamakları',
    scenario: 'Bir ekoloji piramidinde bulunan canlılar K, L, M, N ve O harfleriyle gösterilmiştir:\n• K: En alt basamaktaki canlı (Üreticiler)\n• L: Birinci dereceden tüketiciler (Otçullar)\n• M: İkinci dereceden tüketiciler (Etçiller)\n• N: Tepe yırtıcı (Üçüncü dereceden tüketici)\n• O: Tüm basamakların yanında yer alan ayrıştırıcılar (Saprofitler)',
    questionPrompt: 'Ekoloji piramidi ile ilgili aşağıda yapılan yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K canlısı birinci dereceden tüketicidir.' },
      { key: 'B', text: 'O canlısı hem üreticilerin hem tüketicilerin organik atıklarıyla beslenen ayrıştırıcıdır.' },
      { key: 'C', text: 'L canlısı ikinci dereceden tüketicidir.' },
      { key: 'D', text: 'N canlısı kendi besinini kendisi üreten üreticidir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Piramidin tabanında üreticiler (K), üzerinde otçullar (L), etçiller (M) ve tepe avcılar (N) yer alır. Her basamaktan madde alan O canlısı ise organik atıkları ve leşleri parçalayan ayrıştırıcı (saprofit) canlılardır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Besin Piramidi Basamakları',
    theme: 'Ekoloji Piramidi ve Enerji Akışı'
  },
  {
    id: 6102,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Tarım İlacının Besin Zincirine Etkisi ve Kurbağalar',
    scenario: 'Mısır ➔ Tırtıl ➔ Kurbağa ➔ Yılan ➔ Şahin besin zincirinin bulunduğu bir tarım alanında kullanılan bir böcek ilacının erkek kurbağaların üreme hormonunu baskıladığı ve kurbağaların neslinin tükenmesine neden olduğu belirlenmiştir.',
    questionPrompt: 'Kurbağaların ortamdan yok olması durumunda besin zincirindeki diğer canlıların sayısal değişimi hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Tırtıllarla beslenen kurbağa kalmadığı için tırtıl sayısı aşırı artar ve mısır bitkileri büyük zarar görür.' },
      { key: 'B', text: 'Yılanların besin bulması kolaylaşır ve yılan sayısı artar.' },
      { key: 'C', text: 'Mısır bitkisi üretimi rekor seviyede artış gösterir.' },
      { key: 'D', text: 'Şahin sayısı kurbağaların yok olmasından hiçbir şekilde etkilenmez.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kurbağa popülasyonu çökerse avcısı olan tırtıllar hızla çoğalır. Tırtıl sayısının artması mısır bitkilerinin tüketilmesine yol açar. Aynı zamanda kurbağa ile beslenen yılanların besini azalacağı için yılanlar ve dolaylı olarak şahinler olumsuz etkilenir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Besin Zincirinde Denge Bozulması',
    theme: 'Besin Ağı Dinamikleri'
  },
  {
    id: 6103,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Besin Piramidinde Biyolojik Birikim (Zehirli Madde)',
    scenario: 'Bir besin piramidinin basamaklarında yer alan P, R, S ve T canlılarının dokularında biriken toplam zehirli madde miktarları grafikte verilmiştir: P canlısında zehir miktarı en fazla, S canlısında ise en azdır.',
    questionPrompt: 'Bu canlıların besin piramidindeki konumları ve özellikleri ile ilgili hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'S basamağındaki canlılar kloroplast taşıyan üreticilerdir.' },
      { key: 'B', text: 'T basamağındaki canlılar doğrudan üreticilerle beslenen otçullardır.' },
      { key: 'C', text: 'P basamağındaki canlıların biyokütlesi ve birey sayısı ekosistemde en fazladır.' },
      { key: 'D', text: 'Zehirli madde birikimi üreticiden son tüketiciye doğru gidildikçe katlanarak artar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Biyolojik birikim (zehir) besin piramidinde aşağıdan yukarıya doğru artar. Dolayısıyla dokusunda en çok zehir bulunan P canlısı piramidin en tepesindedir (tepe tüketici). Tepe tüketicilerin birey sayısı ve toplam biyokütlesi en azdır, en fazla olan tabandaki üreticilerdir (C yanlıştır).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Biyolojik Birikim Analizi',
    theme: 'Besin Piramidinde Biyolojik Birikim'
  },
  {
    id: 6104,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Dut Yaprağı, Tırtıl, Keklik, Tilki, Şahin Besin Zinciri',
    scenario: 'Dut yaprağı ➔ Tırtıl ➔ Keklik ➔ Tilki ➔ Şahin besin zincirinde ekosistemdeki dengeler gözlemlenmektedir.',
    questionPrompt: 'Aşağıdaki durumlardan hangisi besin zincirindeki üretici canlı (Dut yaprağı) sayısının zamanla azalmasına doğrudan yol açabilir?',
    options: [
      { key: 'A', text: 'Tilkilerin aşırı avlanması veya göç etmesi (Keklik artar, tırtıl azalır, yaprak artar).' },
      { key: 'B', text: 'Kekliklerin avcılar tarafından aşırı avlanması sonucu tırtıl sayısının kontrolsüzce artması.' },
      { key: 'C', text: 'Tırtılların tarım zararlısı olarak ilaçlanıp öldürülmesi.' },
      { key: 'D', text: 'Şahinlerin tilkileri daha çok avlaması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Keklik sayısı azalırsa tırtılları avlayan canlı sayısı azalır ve tırtıl popülasyonu patlama yapar. Çoğalan tırtıllar daha çok dut yaprağı tüketeceğinden üretici canlı sayısı hızla azalır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Ekolojik Neden-Sonuç Döngüsü',
    theme: 'Besin Zincirinde Popülasyon Değişimi'
  },
  {
    id: 6105,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Su Ekosisteminde Besin Ağı ve Enerji İletimi',
    scenario: 'Görselde bir deniz ekosistemindeki besin ağı modellenmiştir:\n• Üreticiler: Fitoplankton ve deniz yosunları\n• Birincil Tüketiciler: Zooplankton, deniz salyangozu, midye\n• İkincil Tüketiciler: Balık, ahtapot, deniz yıldızı\n• Tepe Tüketiciler: Martı, köpek balığı, insan',
    questionPrompt: 'Bu besin ağı ile ilgili olarak aşağıdaki bilgilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Fitoplankton ve yosun besin ağında bulunan üretici canlılardır.' },
      { key: 'B', text: 'Deniz salyangozu ve zooplanktonlar birinci dereceden tüketici canlılardır.' },
      { key: 'C', text: 'Biyolojik birikimin (zehirli kimyasal) en fazla olduğu canlı piramidin tepesindeki insandır.' },
      { key: 'D', text: 'Yosundan deniz salyangozuna aktarılan enerji, denizyıldızından köpekbalığına aktarılan enerjiden azdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Besin zincirinde enerjinin yalnızca yaklaşık %10\'u bir üst basamağa aktarılır, %90\'ı yaşam faaliyetlerinde ısı olarak kaybolur. Bu nedenle alt basamaklardaki enerji aktarımı (üreticiden birincil tüketiciye), üst basamaklardaki enerji aktarımından (ikincilden üçüncüle) ÇOK DAHA FAZLADIR. D seçeneğindeki "daha azdır" ifadesi yanlıştır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Besin Ağında Enerji Kaybı Prensibi',
    theme: 'Ekosistemde Enerji Akışı'
  },
  {
    id: 6106,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Ovacık Ekosisteminde Kulaklı Orman Baykuşu Popülasyonu',
    scenario: 'Tunceli Ovacık ilçesindeki bir ekosistemde şu besin zinciri bulunmaktadır:\nLahana (Üretici) ➔ Tavşan (1. Tüketici) ➔ Baykuş (2. Tüketici) ➔ Kurt (3. Tüketici)\nKış şartlarının aşırı sert geçmesi nedeniyle ilçede baykuş popülasyonunda hızlı bir azalma gözlemlenmiştir.',
    questionPrompt: 'Ovacık ilçesinde yaşanan bu duruma bağlı olarak;\nI. Lahana sayısı zamanla azalır.\nII. Tavşan sayısı avcısı azaldığı için zamanla artar.\nIII. Kurt sayısı doğrudan besin bulamadığı için hemen anında artar.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız II' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'I ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'Baykuş sayısı azaldığında, baykuşların avladığı tavşanlar üzerindeki av baskısı kalkar ve tavşan popülasyonu artar (II doğru). Artan tavşanlar daha fazla lahana tüketeceği için lahana sayısı zamanla azalır (I doğru). Kurtların besini tavşan da olabildiğinden kurt popülasyonu doğrudan "anında" artışa geçmez.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Popülasyon Dalgalanmaları',
    theme: 'Besin Zincirinde Denge Bozulması'
  },
  {
    id: 6107,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Sebze Bahçesinde Biyolojik Mücadele ve Besin Zinciri',
    scenario: 'Mehmet, bahçesinde yetiştirdiği domates ve maydanoz yapraklarının tırtıllar tarafından yendiğini görünce bahçeye tavuk salmıştır. Bir süre sonra tırtıllar bitmiş ancak tavuklar domatesleri yemeye başlamıştır. Bir gün bahçeye tilki gelerek tavukları avlamıştır.',
    questionPrompt: 'Bu olayla ilgili oluşturulan ekolojik değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Bahçedeki besin zinciri "Maydanoz ➔ Tırtıl ➔ Tavuk ➔ Tilki" şeklinde kurulabilir.' },
      { key: 'B', text: 'Tavuklar hem bitkisel hem hayvansal beslenen hepçil tüketicilerdir.' },
      { key: 'C', text: 'Mehmet tavuk ve sebze yetiştirdiği için ekolojik anlamda bir üretici canlıdır.' },
      { key: 'D', text: 'Tırtıllar üretici bitkiyle beslenen otçul (birincil tüketici) canlılardır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ekolojide "üretici canlı" kavramı, fotosentez veya kemosentez yaparak inorganik maddelerden organik besin üreten canlıları (bitkiler, algler, siyanobakteriler) ifade eder. İnsanlar (Mehmet) tarım yapsalar dahi biyolojik olarak tüketici (heterotrof) canlı sınıfındadır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Ekolojik Rol ve Kavram Ayrımı',
    theme: 'Besin Zincirinde Canlı Rolleri'
  },

  // Subtopic 2: Enerji Dönüşümleri (Fotosentez ve Solunum)
  {
    id: 6201,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Şeffaf ve Işık Geçirmeyen Poşetle Bitki Fotosentez Deneyi',
    scenario: 'Özdeş K, L ve M saksı bitkilerinden K tamamen açık bırakılmış, L\'nin iki yaprağı şeffaf poşetle, M\'nin ise yaprakları ışık geçirmeyen siyah poşetle kapatılmıştır. Eşit sulanıp ışıkta 2 hafta bekletildiklerinde kütle artışı K > M > L şeklinde kaydedilmiştir.',
    questionPrompt: 'Yapılan deneyle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'L ve M bitkileri kullanılarak ışık miktarının fotosenteze etkisi belirlenemez.' },
      { key: 'B', text: 'M bitkisindeki poşet şeffaf olsaydı fotosentez yapabilen yaprak sayısı artacağı için kütle artışı daha fazla olurdu.' },
      { key: 'C', text: 'K bitkisinin kütle artışının sebebi sadece yapraklarının su kaybetmesidir.' },
      { key: 'D', text: 'Siyah poşet yapraklarda solunumu tamamen durdurmuştur.' }
    ],
    correctAnswer: 'B',
    explanation: 'M bitkisinde ışık almayan yaprak fotosentez yapamamış ve besin üretememiştir. Eğer poşet şeffaf olsaydı o yaprak da ışık alıp fotosentez yapacak ve bitkinin kuru kütle artışı daha yüksek olacaktı.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Kütle Artışı',
    theme: 'Fotosentezde Işık Gereksinimi'
  },
  {
    id: 6202,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Etil Alkol ve Laktik Asit Fermantasyonu Balon Deneyi',
    scenario: 'İçinde şekerli su bulunan iki kapalı erlene fermantasyon yapan K ve L canlıları konulmuş ve ağızlarına esnek balon bağlanmıştır:\n• 1. kapta (K canlısı) balon hiç şişmemiştir (Laktik asit fermantasyonu: Besin -> Laktik asit + ATP).\n• 2. kapta (L canlısı) balon gaz birikimiyle şişmiştir (Etil alkol fermantasyonu: Besin -> Etil alkol + CO2 + ATP).',
    questionPrompt: 'Deney sonuçlarına göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K canlısı etil alkol fermantasyonu yapmıştır.' },
      { key: 'B', text: 'K canlısının kabında besin miktarı zamanla artar.' },
      { key: 'C', text: '2. deneyde balonun şişmesinin nedeni fermantasyon sonucu açığa çıkan karbondioksit (CO2) gazıdır.' },
      { key: 'D', text: 'L canlısı solunumunda oksijen gazı tüketmiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Etil alkol fermantasyonunda yan ürün olarak karbondioksit (CO2) gazı açığa çıkar ve bu gaz balonu şişirir. Laktik asit fermantasyonunda ise gaz çıkışı olmaz, bu yüzden balon şişmez.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Fermantasyon Ürünleri Ayrımı',
    theme: 'Fermantasyon Türleri ve Gaz Çıkışı'
  },
  {
    id: 6203,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Fotosentez Hızı ve Sıcaklık Değişkeni Grafiği',
    scenario: 'Bir araştırmacının fotosentez hızını etkileyen bir değişkene bağlı olarak çizdiği grafik başlangıçta sıfırdan yükselerek yaklaşık 25-35 °C arasında tepe noktasına (optimum) ulaşmakta, ardından yüksek değerlerde enzimlerin yapısının bozulması nedeniyle sıfıra düşmektedir (çan eğrisi).',
    questionPrompt: 'Bu grafikte soru işareti yerine yazılması gereken değişken hangisidir?',
    options: [
      { key: 'A', text: 'Sıcaklık' },
      { key: 'B', text: 'Su miktarı' },
      { key: 'C', text: 'Işık şiddeti' },
      { key: 'D', text: 'Karbondioksit miktarı' }
    ],
    correctAnswer: 'A',
    explanation: 'Su, CO2 ve ışık şiddeti arttıkça fotosentez hızı belirli bir doygunluk noktasına kadar artar ve sonra sabit kalır. Ancak sıcaklık arttıkça önce artıp 35 °C civarında maksimuma ulaştıktan sonra enzimlerin denatüre olmasıyla hızla sıfıra düşen tek faktör sıcaklıktır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Enzim ve Sıcaklık Eğrisi',
    theme: 'Fotosentez Hızını Etkileyen Faktörler'
  },
  {
    id: 6204,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Ağaçlarda Fotosentez ve Solunum Hız Grafikleri (Yaz vs Kış)',
    scenario: 'I numaralı grafikte gün doğumundan batımına kadar fotosentez hızı solunum hızından çok yüksektir (24 saat solunum devam eder). II numaralı grafikte kış mevsiminde yaprak dökmeyen bir iğne yapraklıda fotosentez çok düşüktür. III numaralı grafikte ise fotosentez sıfırdır, sadece solunum devam etmektedir.',
    questionPrompt: 'Buna göre fotosentez ve solunum hızları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'I numaralı grafik, ladin ağacının yaz mevsimindeki fotosentez ve solunum hızını gösteriyor olabilir.' },
      { key: 'B', text: 'Bitkiler sadece gündüzleri solunum yapar.' },
      { key: 'C', text: 'Fotosentez hızı daima solunum hızından küçük olmalıdır.' },
      { key: 'D', text: 'III numaralı grafikte fotosentezin sıfır olması bitkinin öldüğünü kanıtlar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yaz mevsiminde fotosentez hızı gündüz saatlerinde solunum hızının katlarca üzerine çıkar (I). Solunum ise canlılığın devamı için 24 saat boyunca kesintisiz sürer.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Günlük Biyolojik Ritim',
    theme: 'Fotosentez vs Solunum Dengesi'
  },
  {
    id: 6205,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Farklı Renklerde Işık ve Fotosentez Hızı İlişkisi',
    scenario: 'Bir bitkinin klorofil moleküllerinin farklı ışıktaki yansıtma oranları şöyledir:\n• Mor ışık: %15 yansıtır (%85 soğurur)\n• Kırmızı ışık: %18 yansıtır (%82 soğurur)\n• Turuncu ışık: %58 yansıtır (%42 soğurur)\n• Yeşil ışık: %92 yansıtır (%8 soğurur)',
    questionPrompt: 'Klorofilin ışığı soğurma oranları dikkate alındığında fotosentez hızı hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Klorofil en çok yeşil ışığı soğurduğu için fotosentez en hızlı yeşil ışıkta gerçekleşir.' },
      { key: 'B', text: 'Mor ve kırmızı ışıkta soğurma oranı çok yüksek olduğu için fotosentez hızı en yüksektir; yeşil ışık büyük oranda yansıtıldığı için fotosentez hızı en düşüktür.' },
      { key: 'C', text: 'Işığın rengi fotosentez hızını hiçbir şekilde etkilemez.' },
      { key: 'D', text: 'Turuncu ışıkta fotosentez hızı mor ışıktan fazladır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Klorofil yeşil rengi yansıttığı için yeşil görünür ve yeşil ışıkta soğurma minimumdur (%8), bu nedenle fotosentez en yavaştır. Kırmızı ve mor ışık ise klorofil tarafından en fazla soğurulan ışıklardır (%80+) ve fotosentez hızı buralarda maksimumdur.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Işık Dalga Boyu ve Soğurma',
    theme: 'Işığın Rengi ve Fotosentez'
  },
  {
    id: 6206,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Elodea Su Bitkisinde Sıcaklık ve Oksijen Üretimi',
    scenario: 'Işıklı bir ortamda su dolu behere konulan Elodea bitkisi deney tüpünün altına yerleştirilmiş ve başlangıçta 0 °C\'de tutulmuştur. Ortam sıcaklığı yavaş yavaş 60 °C\'ye kadar çıkarılmış ve su içindeki gaz kabarcıklarının (oksijen) çıkış hızı gözlemlenmiştir.',
    questionPrompt: 'Deney düzeneğinin sıcaklığı 0 °C\'den 60 °C\'ye çıkarıldığında oksijen üretim hızının sıcaklıkla değişim grafiği hangisidir?',
    options: [
      { key: 'A', text: 'Sıcaklık arttıkça oksijen üretim hızı sürekli doğrusal olarak artar.' },
      { key: 'B', text: '0 °C\'den yaklaşık 25-30 °C\'ye kadar artarak tepe noktasına ulaşır; 35 °C\'den sonra enzimlerin yapısı bozulduğu için hızla azalarak durur (çan eğrisi).' },
      { key: 'C', text: 'Sıcaklık 0 °C iken oksijen üretimi en fazladır, ısıtıldıkça azalır.' },
      { key: 'D', text: 'Sıcaklık değişimi fotosentez ve oksijen çıkış hızını hiç etkilemez.' }
    ],
    correctAnswer: 'B',
    explanation: 'Fotosentez enzimatik bir kimyasal reaksiyondur. 0 °C civarında enzimler inaktif olduğundan fotosentez yavaştır. Optimum sıcaklık olan 25-30 °C\'ye kadar hız artar. Ancak 35-40 °C\'nin üzerinde enzimlerin protein yapısı denatüre olduğu (bozulduğu) için fotosentez hızı aniden düşer ve 50-60 °C\'de tamamen durur.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Enzim ve Sıcaklık Değişkeni',
    theme: 'Fotosentez Hızını Etkileyen Faktörler'
  },
  {
    id: 6207,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Yaprakta Işık ve Nişasta Oluşumu İyot Deneyi',
    scenario: 'Merve, yeterince ışık alan saksı bitkisinin bir yaprağının bir kısmını ışık geçirmeyen siyah bantla kapatıp 3 gün bekletmiştir. Ardından yaprağı koparıp etil alkolde kaynatarak klorofillerini çıkarmış ve üzerine iyot çözeltisi damlatmıştır. Bantla kapatılan alanın sarı/açık renk kaldığı, ışık alan yerlerin ise koyu mavi-mor renk aldığı görülmüştür.',
    questionPrompt: 'Merve’nin yaptığı bu deneyle ilgili olarak;\nI. Fotosentezin gerçekleşmesi için ışığa ihtiyaç vardır.\nII. Bitki fotosentez sonucu nişasta (besin) üretmiştir.\nIII. Bantla kapatılan bölgede fotosentez gerçekleşmemiştir.\nyorumlarından hangileri doğrudur? (İyot, nişasta varlığında mavi-mor renk verir.)',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Siyah bant yaprağın o bölgesinin ışık almasını engellemiştir. Işık almayan bölgede fotosentez gerçekleşmediğinden nişasta üretilememiş ve iyot rengi mavi-mora dönüşmemiştir. Işık alan bölgelerde ise fotosentezle üretilen glikoz nişastaya çevrilmiş ve iyotla mor renk vermiştir. Her 3 öncül de deneyin kanıtladığı kesin doğrulardır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Fotosentez Ürünü Belirteç Deneyi',
    theme: 'Fotosentez ve Nişasta Testi'
  },
  {
    id: 6208,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Renkli Işık Filtreleri ile Bitki Gelişimi Deneyi',
    scenario: 'Güneş ışığı altında bulunan özdeş üç saksı bitkisinin üzerine sırasıyla Mor Filtre, Kırmızı Filtre ve Yeşil Filtre yerleştirilmiştir. Filtreler yalnızca kendi rengindeki ışığın geçmesine izin verir. Bitkiler eşit sulanarak bir ay boyunca gözlemlenmiştir.',
    questionPrompt: 'Belirli bir süre sonunda bitkilerle ilgili yapılan değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Yeşil filtre altındaki bitki fotosentez yapamamış veya çok az yaparak en zayıf gelişimi göstermiştir.' },
      { key: 'B', text: 'Kırmızı ve mor filtre altındaki bitkilerin fotosentez hızları yeşil filtredekinden çok daha fazladır.' },
      { key: 'C', text: 'Yeşil filtre klorofilin en çok sevdiği ışık olduğu için bu bitki diğerlerinden daha hızlı büyür.' },
      { key: 'D', text: 'Bitkilerdeki gelişim farklılıklarının nedeni klorofilin soğurduğu ışık renklerinin fotosentez hızını değiştirmesidir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Klorofil yeşil ışığı soğurmaz, neredeyse tamamını (%90+) yansıtır veya geçirir. Bu yüzden yeşil ışık altında fotosentez minimum seviyededir. Yeşil filtre altındaki bitki yeterli besin üretemez ve yavaş gelişir. C seçeneğindeki "daha hızlı büyür" iddiası yanlıştır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Işık Rengi ve Bitki Gelişimi',
    theme: 'Işık Filtreleri ve Fotosentez'
  },

  // Subtopic 3: Madde Döngüleri ve Çevre Sorunları
  {
    id: 6301,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Azot Döngüsü Şeması ve Yıldırım Olayı',
    scenario: 'Azot döngüsünde havadaki serbest azot gazı (%78) doğrudan solunumla alınamaz. Yıldırım ve şimşek olayları ile havadaki azot yağışla toprağa bağlanır; ayrıca baklagillerin köklerindeki azot bağlayıcı bakteriler azotu toprağa katar. Ayrıştırıcılar ise ölü organizmalardan toprağa azotlu bileşik kazandırır.',
    questionPrompt: 'Görselde verilen azot döngüsü ile ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Üretici bitkiler havadaki serbest azotu doğrudan stomalarıyla alır.' },
      { key: 'B', text: 'Tüm bakteriler topraktaki azotu azaltıp havaya verir.' },
      { key: 'C', text: 'Yıldırım ve şimşek olayları ile topraktaki azotlu bileşik miktarı artar.' },
      { key: 'D', text: 'Tüketiciler azot ihtiyaçlarını doğrudan havayı soluyarak karşılar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Havadaki serbest azot gazının toprağa bağlanması yıldırım/şimşek olaylarıyla ve kökteki azot bağlayıcı bakterilerle gerçekleşir. Canlılar azotu doğrudan havadan soluyamaz; bitkiler kökleriyle nitrat tuzu olarak, tüketiciler ise besin zinciriyle bitkilerden alır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Azot Fiksasyonu Mekanizması',
    theme: 'Azot Döngüsü'
  },
  {
    id: 6302,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Oksijen ve Karbon Döngülerinin Birlikte Şematize Edilmesi',
    scenario: 'Kloroplast organelinde fotosentez ile su ve karbondioksit kullanılarak K (besin ve oksijen) üretilir. Mitokondri organelinde ise L (oksijenli solunum) olayı ile besin ve oksijen parçalanarak M (karbondioksit ve su) ile enerji (ATP) açığa çıkar.',
    questionPrompt: 'Şemada K, L ve M harfleri ile gösterilen kısımlar hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'K: Oksijen — L: Solunum — M: Karbon dioksit' },
      { key: 'B', text: 'K: Karbon dioksit — L: Fermantasyon — M: Oksijen' },
      { key: 'C', text: 'K: Oksijen — L: Solunum — M: Işık' },
      { key: 'D', text: 'K: Enerji — L: Solunum — M: Karbon dioksit' }
    ],
    correctAnswer: 'A',
    explanation: 'Fotosentez ürünü olup solunuma giren gaz K = Oksijen; mitokondride gerçekleşen olay L = Solunum; solunum sonucu açığa çıkıp fotosenteze giren inorganik madde ise M = Karbon dioksittir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Madde Döngüleri Bütünlüğü',
    theme: 'Karbon ve Oksijen Döngüsü'
  },
  {
    id: 6303,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Küresel Isınma Neden-Sonuç İlişkisi Sıralaması',
    scenario: 'Küresel ısınma sürecindeki aşamalar şunlardır:\nI. Sera gazlarının atmosferde birikmesi\nII. Fosil yakıtların kullanımının artması\nIII. Güneş ışınlarının atmosferde daha fazla tutulması\nIV. Dünya’nın ortalama sıcaklığının artması\nV. Buzulların erimesi ve deniz seviyelerinin yükselmesi',
    questionPrompt: 'Bu olayların neden-sonuç ilişkisine göre kronolojik sıralanışı hangisidir?',
    options: [
      { key: 'A', text: 'II - I - III - V - IV' },
      { key: 'B', text: 'I - II - III - V - IV' },
      { key: 'C', text: 'IV - V - II - I - III' },
      { key: 'D', text: 'II - I - III - IV - V' }
    ],
    correctAnswer: 'D',
    explanation: 'Önce fosil yakıtlar yakılır (II) ➔ atmosfere sera gazı salınır ve birikir (I) ➔ yansıyan ışınlar sera gazlarınca tutulur (III) ➔ ortalama küresel sıcaklık yükselir (IV) ➔ kutup buzulları erir ve denizler yükselir (V). Doğru sıra: II - I - III - IV - V.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Süreç ve Neden-Sonuç Sıralaması',
    theme: 'Küresel Isınma Mekanizması'
  },
  {
    id: 6304,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Akvaryum Deneyinde Karbon ve Oksijen Döngüsü',
    scenario: 'Umut, aynı türdeki balıklar için 3 farklı kapalı akvaryum hazırlamıştır:\n• I. Akvaryum: Sadece su ve balık (Işık var, hava motoru veya bitki yok)\n• II. Akvaryum: Su, balık ve canlı su bitkisi (Elodea) (Işık var)\n• III. Akvaryum: Su, balık ve hava motoru (Bitki yok)\nBir süre sonra I. akvaryumdaki balığın öldüğü, II ve III. akvaryumdakilerin yaşadığı görülmüştür.',
    questionPrompt: 'Umut’un hazırladığı düzeneklerle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'II. düzenekte karbon-oksijen döngüsü sağlandığı için balık yaşamaya devam etmiştir; bitki balığın ürettiği CO2\'yi alıp O2 üretmiştir.' },
      { key: 'B', text: 'I. ve III. düzenekler kullanılarak üretici canlıların önemi anlaşılabilir.' },
      { key: 'C', text: 'I. düzenekte balığın ölme nedeni sudaki karbondioksitin tükenmesidir.' },
      { key: 'D', text: 'III. düzenekte fotosentez gerçekleştiği için balık hayatta kalmıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'I. akvaryumda fotosentez yapan üretici veya dışarıdan hava veren motor olmadığı için sudaki çözünmüş oksijen hızla tükenmiş ve balık boğulmuştur. II. akvaryumda su bitkisi balığın solunumuyla oluşan CO2\'yi fotosentezde kullanarak oksijen üretmiş, böylece kendi kendine yeten bir karbon-oksijen döngüsü kurmuştur.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Döngü ve Canlı Yaşamı İlişkisi',
    theme: 'Kapalı Ekosistemde Oksijen Döngüsü'
  },
  {
    id: 6305,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Ozon Tabakası İncelmesi ve Kloroflorokarbon (CFC) Gazları',
    scenario: 'Soğutucu sistemlerde ve deodorantlarda kullanılan kloroflorokarbon (CFC) gazları stratosfere ulaştığında ozon (O3) moleküllerini parçalayarak ozon tabakasında incelmeye neden olur. Ozon tabakasının incelmesi sonucu Güneş’ten gelen yüksek enerjili ultraviyole (UV-B ve UV-C) ışınları yeryüzüne daha yoğun ulaşır.',
    questionPrompt: 'Aşağıdaki durumlardan hangisi ozon tabakasının incelmesi nedeniyle yeryüzünde ortaya çıkan bir sonuçtur?',
    options: [
      { key: 'A', text: 'İnsanlarda cilt kanseri, katarakt ve bağışıklık sistemi zayıflaması vakalarının artması' },
      { key: 'B', text: 'Havadaki sera etkisinin ortadan kalkıp havanın aşırı soğuması' },
      { key: 'C', text: 'Depremlerin ve volkanik patlamaların sayısının artması' },
      { key: 'D', text: 'Bitkilerin fotosentez hızının rekor düzeyde artması ve tarım veriminin yükselmesi' }
    ],
    correctAnswer: 'A',
    explanation: 'Ozon tabakası Dünya’nın UV kalkanıdır. Bu kalkan inceldiğinde yüksek enerjili UV ışınları DNA hasarlarına, cilt kanserine, göz kataraktına ve fitoplanktonların ölümüne yol açar. A seçeneği doğrudan bu etkinin tıbbi ve biyolojik sonucudur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Atmosfer Kirliliği ve Sağlık',
    theme: 'Ozon Tabakası ve UV Radyasyonu'
  },
  {
    id: 6306,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Karbondioksit Oranı ve Sera Etkisi Model Deneyi',
    scenario: 'Işık alan bir ortamda iki özdeş cam fanusun içine eşit kütlede buz kalıpları konulmuştur:\n• I. Fanus: Normal hava (CO2 oranı %0,03)\n• II. Fanus: Karbondioksitçe zenginleştirilmiş hava (CO2 oranı %0,05)\nGüneş ışığı altında belirli süre bekletildiğinde II. fanustaki buzun çok daha hızlı eridiği tespit edilmiştir.',
    questionPrompt: 'Hazırlanan düzenekler ve elde edilen sonuçla ilgili yapılan aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'I. ve II. düzenekler kullanılarak sera etkisinde karbondioksit miktarının rolü araştırılabilir.' },
      { key: 'B', text: 'I. düzenekteki CO2 gazı Güneş ışınlarının buza ulaşmasını tamamen engellemiştir.' },
      { key: 'C', text: 'II. düzenekteki buzun daha hızlı erimesi ortamın daha soğuk olduğunu gösterir.' },
      { key: 'D', text: 'Deneyde bağımsız değişken fanuslara konulan buzların ilk kütlesidir.' }
    ],
    correctAnswer: 'A',
    explanation: 'CO2 bir sera gazıdır ve kızılötesi (ısı) ışınlarını soğurarak tutar. CO2 oranı daha yüksek olan II. fanus ısıyı daha fazla hapsedip ortam sıcaklığını yükseltmiş ve buzun daha hızlı erimesine sebep olmuştur. Bu deney sera gazlarının küresel ısınmadaki rolünü somut olarak ispatlar.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Sera Etkisi',
    theme: 'Sera Gazları ve Küresel Isınma'
  },

  // Subtopic 4: Sürdürülebilir Kalkınma
  {
    id: 6401,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Ekolojik Ayak İzi ve Kaynak Tüketimi',
    scenario: 'Ekolojik ayak izi, bir insanın veya toplumun tükettiği doğal kaynakları üretmek ve oluşturduğu atıkları yok etmek için gereken verimli toprak ve su alanıdır.',
    questionPrompt: 'Aşağıda verilen davranışlardan hangisi ekolojik ayak izimizin büyümesine (çevreye daha çok zarar vermesine) neden olur?',
    options: [
      { key: 'A', text: 'Enerji verimliliği düşük (eski teknoloji) beyaz eşyalar kullanmak' },
      { key: 'B', text: 'Binalarda dış cephe ısı yalıtımı uygulamaları yaptırmak' },
      { key: 'C', text: 'Yer altı ve yer üstü su kaynaklarını tasarruflu kullanmak' },
      { key: 'D', text: 'Geri dönüşümlü ürünleri tercih ederek sıfır atık projesine katılmak' }
    ],
    correctAnswer: 'A',
    explanation: 'Enerji verimliliği düşük araçlar daha fazla elektrik tüketir; bu elektriği üretmek için daha fazla fosil yakıt yakılır ve karbon ayak izi ile ekolojik ayak izi büyür. Diğer seçenekler ise ayak izini küçülten çevre dostu uygulamalardır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sürdürülebilirlik İlkeleri',
    theme: 'Ekolojik Ayak İzi ve Tasarruf'
  },
  {
    id: 6402,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Kyoto Protokolü ve Sera Gazı Salınımları',
    scenario: 'Kyoto Protokolü, küresel ısınma ve iklim değişikliği ile mücadele amacıyla imzalanan uluslararası bir anlaşmadır. Protokole taraf ülkeler, sanayi tesislerinden atmosfere salınan karbondioksit (CO2) ve diğer sera gazlarını azaltmayı taahhüt etmişlerdir.',
    questionPrompt: 'Buna göre aşağıdakilerden hangisi küresel iklim değişikliğini önlemek için Kyoto Protokolü kapsamında alınması gereken tedbirlerden biri değildir?',
    options: [
      { key: 'A', text: 'Fosil yakıtlar (kömür, petrol) yerine güneş ve rüzgâr gibi yenilenebilir enerji kaynaklarının tercih edilmesi' },
      { key: 'B', text: 'Sanayi tesislerinin bacalarına etkili filtreleme ve arıtma sistemlerinin takılması' },
      { key: 'C', text: 'Bireysel motorlu araç kullanımının teşvik edilip toplu taşımanın sınırlandırılması' },
      { key: 'D', text: 'Enerji tasarrufu sağlayan A+++ sınıfı enerji verimli teknolojilere geçilmesi' }
    ],
    correctAnswer: 'C',
    explanation: 'Bireysel motorlu araç kullanımı arttığında kişi başına düşen fosil yakıt tüketimi ve egzoz gazı salınımı katlanarak artar. İklim krizini önlemek için tam aksine toplu taşıma, raylı sistemler ve bisiklet kullanımı yaygınlaştırılmalıdır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Uluslararası Çevre Sözleşmeleri',
    theme: 'İklim Eylemi ve Karbon Salınımı'
  },
  {
    id: 6403,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Dünya Ekolojik Ayak İzi Değişimi ve Gelecek Projeksiyonu',
    scenario: '1960’tan 2018 yılına kadar yapılan ölçümlerde insanlığın doğal kaynak tüketiminin gezegenin biyolojik kapasitesini aştığı görülmüştür. 2018 yılında dünya genelinde sanki "1,7 adet Dünya" varmış gibi kaynak tüketilmektedir. Grafik projeksiyonuna göre mevcut tüketim alışkanlığı sürerse 2050’de 2,5 Dünya gerekecektir.',
    questionPrompt: 'Bu grafiğe göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: '1960-1970 yılları arasında Dünya kaynakları insan nüfusu ile dengede değildi.' },
      { key: 'B', text: 'Ekolojik ayak izi sürdürülebilir yöntemlerle küçültülürse Dünya kaynakları yeniden insanlara yetecek seviyeye gelebilir.' },
      { key: 'C', text: 'Mevcut aşırı tüketim devam ederse 2030 yılında kaynaklar insanlığa sonsuza kadar yetecektir.' },
      { key: 'D', text: '1960-2018 yılları arasında ekolojik ayak izi sürekli azalmıştır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Grafik açıkça göstermektedir ki ekolojik ayak izimizi küçültecek adımlar (tasarruf, yenilenebilir enerji, döngüsel ekonomi) atılırsa tüketim Dünya\'nın biyolojik taşıma kapasitesinin altına indirilebilir ve kaynaklar gelecek nesillere yetecek hale gelir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Biyokapasite ve Tüketim Analizi',
    theme: 'Gezegensel Sınırlar ve Ekolojik Ayak İzi'
  },
  {
    id: 6404,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Sıfır Atık ve Organik Kompost Gübre Üretimi',
    scenario: 'Kompostlaştırma; organik atıkların oksijenli ortamda mikroorganizmalar tarafından parçalanıp mineralce zengin doğal bir gübreye dönüştürülmesi sürecidir. Bu yöntemle evsel atıkların çöp sahalarına gitmesi önlenir.',
    questionPrompt: 'Buna göre aşağıdakilerden hangisi kompost yapımında kesinlikle kullanılamaz?',
    options: [
      { key: 'A', text: 'Sebze ve meyve kabukları' },
      { key: 'B', text: 'Yumurta kabukları ve kuru yapraklar' },
      { key: 'C', text: 'Tek kullanımlık plastik tabak ve poşetler' },
      { key: 'D', text: 'Çay posası ve kahve telvesi' }
    ],
    correctAnswer: 'C',
    explanation: 'Kompostlaştırma yalnızca biyolojik olarak parçalanabilen organik maddeler (sebze kabukları, yaprak, talaş vb.) için geçerlidir. Plastik malzemeler petrol türevi sentetik polimerler olup kompost mikroorganizmaları tarafından parçalanamaz ve toprağı zehirler.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Geri Dönüşüm ve Kompostlama',
    theme: 'Sıfır Atık Projesi'
  }
];
