import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 7. ÜNİTE: ELEKTRİK YÜKLERİ VE ELEKTRİK ENERJİSİ - MEBİ LGS DENEME VE SORU HAVUZU
// ============================================================================

export const sebahattinElektrikQuestions: LgsQuestion[] = [
  // Subtopic 1: Elektrik Yükleri ve Elektriklenme
  {
    id: 7101,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Sürtünme ve Etki ile Elektriklenme Deneyi',
    scenario: 'Aşamalar:\n1. Nötr cam çubuk, nötr ipek kumaşa sürtülüyor (Cam çubuk pozitif (+) yükle yüklenir).\n2. Pozitif yüklü cam çubuk, birbirine temas eden özdeş ve iletken nötr K, L ve M kürelerinden K küresine yaklaştırılıyor.\n3. Çubuk uzaklaştırılmadan K, L ve M küreleri yalıtkan ayaklarından tutularak birbirinden ayrılıyor.',
    questionPrompt: 'K, L ve M küreleri yalıtkan iplerle asıldığında kürelerin denge durumu hangi seçenekteki gibi olur?',
    options: [
      { key: 'A', text: 'K (+) ve M (-) zıt yüklü olup birbirini çeker; L nötrdür.' },
      { key: 'B', text: 'K (-) negatif yüklü, M (+) pozitif yüklü, L nötrdür; K ve M küreleri birbirini çeker.' },
      { key: 'C', text: 'Her üç küre de pozitif yükle yüklenir ve birbirini iter.' },
      { key: 'D', text: 'Küreler elektriklenmez, düşey dengede kalırlar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pozitif (+) yüklü cam çubuk K küresine yaklaştırıldığında serbest negatif yükleri (elektronları) en yakın K ucuna çeker; en uzaktaki M küresinde ise pozitif yük fazlalığı kalır. Ortadaki L küresi nötr kalır. Küreler ayrıldığında K (-) negatif, L nötr, M (+) pozitif olur. Zıt yüklü K ve M birbirini çeker.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Etki ile Elektriklenme ve Yük Dağılımı',
    theme: 'Etki ile Elektriklenme'
  },
  {
    id: 7102,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Zımpara Kâğıdı Üretiminde Elektrostatik Püskürtme',
    scenario: 'Zımpara kâğıdı yapımında yüzeyi tutkallı kâğıt, negatif (-) yüklü yürüyen bant üzerinde ilerlerken üzerine püskürtme ağzından pozitif (+) yüklü zımpara tozları gönderilir. Zıt yüklerin birbirini çekmesi ve aynı cins zımpara taneciklerinin birbirini itmesi sayesinde tanecikler kâğıda dik ve homojen yapışır.',
    questionPrompt: 'Zımpara kâğıdı üretimi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Yürüyen bant üzerindeki tutkallı kâğıt pozitif yükle yüklenir.' },
      { key: 'B', text: 'Üretim bandından çıkan zımpara kâğıdındaki tozların tamamı pozitif yüklü kalır.' },
      { key: 'C', text: 'Zımpara tozlarının aynı cins yüke sahip olması (birbirini itmesi) tozların kâğıda eşit ve düzgün olarak dağılmasını sağlar.' },
      { key: 'D', text: 'Üretimde sürtünme veya dokunma ile elektriklenme kullanılmaz.' }
    ],
    correctAnswer: 'C',
    explanation: 'Aynı cins (+) yüklü zımpara tanecikleri birbirini iterek üst üste yığılmayı önler ve kâğıdın yüzeyine son derece muntazam, homojen bir şekilde dik olarak dağılmasını sağlar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Endüstride Elektrostatik Uygulamalar',
    theme: 'Elektriklenmenin Teknolojik Uygulamaları'
  },
  {
    id: 7103,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Dokundurma ve Yaklaştırma ile İletken Cisimlerin Yüklenmesi',
    scenario: 'Negatif (-) yüklü küre birbirine temas eden nötr K ve L iletkenlerine dokunduruluyor. Pozitif (+) yüklü küre ise birbirine temas eden nötr M ve N iletkenlerine dokundurulmadan yaklaştırılıp sabit tutuluyor.',
    questionPrompt: 'İşlemler sonucunda K, L ve M, N cisimlerinin son yük durumları nasıl olur?',
    options: [
      { key: 'A', text: 'K ve L her ikisi de negatif (-); M negatif (-), N pozitif (+) yüklü olur.' },
      { key: 'B', text: 'K (+), L (-); M (+), N (+) olur.' },
      { key: 'C', text: 'K nötr, L (-); M nötr, N (+) olur.' },
      { key: 'D', text: 'Tüm cisimler nötr kalır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dokunma ile elektriklenmede negatif küre yükünü K ve L ile paylaşır; her ikisi de negatif (-) yüklenir. Yaklaştırmada ise pozitif küre M\'ye elektron çeker (M negatif olur), N ise pozitif (+) kalır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Dokunma vs Etki ile Elektriklenme',
    theme: 'Yük Dağılım Modelleri'
  },
  {
    id: 7104,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'İletkenlerde Etki ile Elektriklenme ve Topraklama Aşamaları',
    scenario: 'Birbirine temas eden özdeş, nötr ve iletken K, L ve M cisimlerine sırasıyla şu işlemler yapılıyor:\n1. İşlem: Negatif (-) yüklü P cismi K cismine yaklaştırılıyor.\n2. İşlem: P cisminin etkisi sürerken K, L ve M cisimleri birbirinden ayrılıyor.\n3. İşlem: Ayrılan cisimlerden M cismi toprağa bağlanıp yük akışı tamamlanınca toprak bağlantısı kesiliyor.',
    questionPrompt: 'İşlemler tamamlandıktan sonra K, L ve M cisimlerinin son yük durumları hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'K: Pozitif (+), L: Negatif (-), M: Negatif (-)' },
      { key: 'B', text: 'K: Pozitif (+), L: Nötr, M: Nötr' },
      { key: 'C', text: 'K: Pozitif (+), L: Nötr, M: Pozitif (+)' },
      { key: 'D', text: 'K: Negatif (-), L: Nötr, M: Pozitif (+)' }
    ],
    correctAnswer: 'B',
    explanation: 'Negatif (-) yüklü P cismi K\'ye yaklaştığında serbest elektronları en uzağa, yani M\'ye iter. K pozitif (+), M negatif (-) yüklenir; ortadaki L cismi ise nötr kalır. Cisimler birbirinden ayrıldığında K (+), L (nötr), M (-) olur. Son işlemde negatif yüklü M topraklanınca fazla elektronları toprağa akar ve M de nötr hale gelir. Son durum: K (+), L (nötr), M (nötr).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Çok Aşamalı Elektrostatik Analiz',
    theme: 'Etki ile Elektriklenme ve Topraklama'
  },
  {
    id: 7105,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Otomobil ve Beyaz Eşya Boyamada Elektrostatik Yöntem',
    scenario: 'Ahmet fen bilimleri dersinde otomobillerin boyanmasında elektrostatik ilkelerden yararlanıldığını öğrenmiştir. Ahmet negatif (-) yükle yüklediği otomobil kaportasını boya tabancası ile boyamak istemektedir.',
    questionPrompt: 'Buna göre boyama işlemiyle ilgili;\nI. Boya damlacıkları pozitif (+) yüklenirse boya otomobil yüzeyine güçlü bir çekim kuvvetiyle yapışır.\nII. Boya damlacıkları nötr olduğunda elektriklenmeden faydalanılamaz ve boya düzensiz akar.\nIII. Boya damlacıkları aynı cins (+) yüklendiği için birbirini iterek yüzeye homojen bir sis bulutu halinde dağılır.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Elektrostatik boyamada yüzey (-) yüklenirken boya damlacıkları (+) yüklenir. Zıt yükler birbirini çektiği için boya metale mıknatıs gibi yapışır ve havaya savrulup israf olmaz. Ayrıca aynı cins (+) yüklenen boya damlacıkları birbirini ittiğinden tanecikler üst üste topaklanmaz, pürüzsüz ve homojen bir katman oluşturur.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Teknolojide Elektriklenme',
    theme: 'Elektrostatik Püskürtme Teknolojisi'
  },
  {
    id: 7106,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Grafikte İletken Cisimlerin Pozitif ve Negatif Yük Sayıları',
    scenario: 'İletken K, L, M ve N cisimlerinin pozitif ve negatif yük sayıları şöyledir:\n• K: 4 pozitif, 2 negatif (Net yük: +2)\n• L: 2 pozitif, 5 negatif (Net yük: -3)\n• M: 3 pozitif, 3 negatif (Net yük: 0, Nötr)\n• N: 5 pozitif, 1 negatif (Net yük: +4)',
    questionPrompt: 'Bu cisimlerle ilgili yapılan aşağıdaki yorumlardan hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'K ve N cisimleri yan yana konulduğunda birbirine çekme kuvveti uygular.' },
      { key: 'B', text: 'M cismi nötr olduğu için hem K hem de L cismi tarafından çekilebilir.' },
      { key: 'C', text: 'L cismi toprağa bağlandığında topraktan cisme elektron girişi olur.' },
      { key: 'D', text: 'K ve L cisimleri birbirine dokundurulduğunda ikisi de nötrlenir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Yüklü cisimler (+ veya - fark etmeksizin) etkiyle kutuplama yaparak nötr iletken cisimleri daima çekerler. M nötr olduğundan hem pozitif K hem de negatif L tarafından çekilir. (A yanlıştır çünkü K ve N ikisi de (+) olup birbirini iter; C yanlıştır çünkü negatif L\'deki fazla elektronlar toprağa akar; D yanlıştır çünkü toplam yük (+2 - 3 = -1) olup net yük kalır).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Net Yük ve İtme-Çekme Kuralları',
    theme: 'Net Yük Hesabı ve Etkileşimler'
  },
  {
    id: 7107,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Sürtünmeli Rampadan Kayan Plastik Küp Deneyi',
    scenario: 'Emre, yün kumaşla kapladığı rampadan plastik bir küpü kaydırmıştır. Rampanın alt kısmında asılı duran kırmızı renkli nötr yalıtkan topun plastik küp yaklaştığında küpe doğru hareket ettiği (çekildiği) gözlemlenmiştir.',
    questionPrompt: 'Emre’nin karşılaştığı bu durumla ilgili aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Plastik küp yün kumaşa sürtünme sonucu negatif (-) yükle yüklenmiştir.' },
      { key: 'B', text: 'Yün kumaş elektron kaybederek pozitif (+) yük fazlalığına sahip olmuştur.' },
      { key: 'C', text: 'Nötr top ile plastik küp zıt yüklerle yüklü olduğu için küp topu çekmiştir.' },
      { key: 'D', text: 'Plastik küpün yük dengesi sürtünme sırasında elektron almasıyla bozulmuştur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Top başlangıçta nötrdür! Yüklü plastik küp nötr topa yaklaştığında, toptaki yükleri etki ile kutuplayarak (yakın uca zıt yükleri çekerek) nötr topu kendine çeker. Top ve küp başlangıçta "zıt yüklü" değildir (biri negatif, diğeri nötrdür). C seçeneğindeki ifade hatalıdır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Sürtünme ile Elektriklenme ve Nötr Çekimi',
    theme: 'Sürtünmeyle Elektriklenme Mekanizması'
  },

  // Subtopic 2: Elektrik Yüklü Cisimler, Elektroskop ve Topraklama
  {
    id: 7201,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Yüklü Cisimler ve Dinamometre İtme-Çekme Deneyi',
    scenario: 'Özdeş P (- yüklü), R (nötr) ve S (+ yüklü) dinamometrelerine asılı cisimler başlangıçta 3 N göstermektedir. Altlarına K, L ve M küreleri konulduğunda dinamometreler sırasıyla 5 N (çekilmiş), 4 N (çekilmiş) ve 2 N (itilmiş) göstermiştir.',
    questionPrompt: 'Buna göre dinamometrelerin altına yerleştirilen K, L ve M kürelerinin yük cinsleri hangisi olabilir?',
    options: [
      { key: 'A', text: 'P\'nin altındaki (+) yüklüdür; S\'nin altındaki (+) yüklüdür.' },
      { key: 'B', text: 'K (-) yüklü, L nötr, M (+) yüklüdür.' },
      { key: 'C', text: 'P\'nin altındaki (-) yüklüdür; S\'nin altındaki (-) yüklüdür.' },
      { key: 'D', text: 'Tüm küreler nötrdür.' }
    ],
    correctAnswer: 'A',
    explanation: 'P dinamometresi (- yüklü cisim) 3 N\'dan 5 N\'a çıktığına göre aşağı doğru çekilmiştir (altındaki küre + yüklüdür). S dinamometresi (+ yüklü cisim) 3 N\'dan 2 N\'a indiğine göre yukarı itilmiştir (altındaki küre + yüklüdür). R nötr cismi ise yüklü cisimler tarafından daima çekildiği için 3 N\'dan 4 N\'a çıkmıştır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Elektrostatik Kuvvet ve Dinamometre',
    theme: 'Elektrik Yüklerinin İtme-Çekme Kuvveti'
  },
  {
    id: 7202,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Topraklama Uygulamaları ve Elektrik Güvenliği',
    scenario: 'Elektriksel yük fazlalığı olan iletken bir cismin toprağa bağlanarak nötr hale getirilmesine topraklama denir.',
    questionPrompt: 'Aşağıda verilen uygulamalardan hangisi bir topraklama örneği DEĞİLDİR?',
    options: [
      { key: 'A', text: 'Yüksek binalara yıldırım düşmesini güvenle toprağa aktaran paratoner takılması' },
      { key: 'B', text: 'Akaryakıt taşıyan tankerlerden yola sarkan metal zincirle statik elektriğin toprağa boşaltılması' },
      { key: 'C', text: 'Elektrikli ev aletlerinde aşırı akım geçişini kesmek için sigorta kullanılması' },
      { key: 'D', text: 'Ameliyathane zeminlerinin statik elektrik kıvılcımını önlemek için iletken malzeme ile kaplanması' }
    ],
    correctAnswer: 'C',
    explanation: 'Sigorta, devreden geçen akım fazla olduğunda eriyerek devreyi kesen bir akım güvenlik elemanıdır; topraklama değildir. Paratoner, tanker zinciri ve ameliyathane iletken zemini ise doğrudan statik yükü toprağa ileten topraklama sistemleridir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Topraklama vs Sigorta Ayrımı',
    theme: 'Günlük Yaşamda Topraklama'
  },
  {
    id: 7203,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Elektroskop Yapraklarının Açılması ve Topraklama',
    scenario: 'Birbirine temas eden nötr K, L ve M iletken kürelerinden M topraklanmış ve K\'ye pozitif (+) yüklü P çubuğu yaklaştırılmıştır. M\'nin toprak bağlantısı kesilip P çubuğu uzaklaştırıldıktan sonra küreler birbirinden ayrılmıştır. K ve M küreleri nötr elektroskoplara dokundurulmuştur.',
    questionPrompt: 'Buna göre elektroskopların yapraklarının durumu hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K küresi negatif (-) yüklü olduğu için elektroskobun yaprakları açılır; M küresi nötr kaldığı için yaprakları açılmaz.' },
      { key: 'B', text: 'Her iki elektroskobun yaprakları da açılır.' },
      { key: 'C', text: 'Hiçbir elektroskobun yaprağı açılmaz.' },
      { key: 'D', text: 'Yapraklar önce açılır sonra tamamen kapanır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Topraklama bağlıyken (+) yüklü P çubuğu topraktan elektron çeker ve bu elektronlar K\'de toplanır. M ise toprakla nötrlenir. Toprak kesilip çubuk çekilince K negatif (-) yüklü kalır, L ve M nötr kalır. Negatif K elektroskoba dokununca yaprakları açılır; nötr M dokununca elektroskop nötr kalır ve yaprakları açılmaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Elektroskop ve Topraklama Analizi',
    theme: 'Elektroskop ve Yük Tespiti'
  },
  {
    id: 7204,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Yalıtkan İplerde Asılı Yüklü Kürelerin Dengesi',
    scenario: 'Yalıtkan iplerle tavana asılan K, L ve M kürelerinden K ve L birbirini iterken, L ve M birbirini çekmektedir.',
    questionPrompt: 'Buna göre K, L ve M kürelerinin elektriksel yük durumları aşağıdakilerden hangisi olamaz?',
    options: [
      { key: 'A', text: 'K: (+), L: (+), M: (-)' },
      { key: 'B', text: 'K: (-), L: (-), M: (+)' },
      { key: 'C', text: 'K: (-), L: (-), M: Nötr' },
      { key: 'D', text: 'K: (+), L: (-), M: (+)' }
    ],
    correctAnswer: 'D',
    explanation: 'K ve L birbirini ittiğine göre aynı cins yüklü olmak ZORUNDADIR (İkisi de + ya da ikisi de -). D seçeneğinde K (+) ve L (-) zıt yüklü verilmiştir; zıt yükler birbirini iter değil, çeker. Dolayısıyla D seçeneği kesinlikle imkânsızdır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'İtme-Çekme Kuralı Çelişki Tespiti',
    theme: 'Yüklü Cisimler Arası Etkileşim'
  },
  {
    id: 7205,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Özdeş Yaylar ve Yüklü Küreler ile İtme-Çekme Testi',
    scenario: 'Pozitif (+) yüklü P cismi birbirine temas eden nötr iletken K, L ve M cisimlerine yaklaştırılmış, P etkisi sürerken cisimler ayrılmıştır (K negatif, L nötr, M pozitif olmuştur). Ardından X yayının karşısına (-), Y yayının karşısına (+), Z yayının karşısına (+) yüklü sabit küreler konulmuştur.',
    questionPrompt: 'K, L ve M cisimleri yayların serbest ucuna konulduğunda; X yayının çekilerek uzadığı, Y yayının itilerek sıkıştığı görülmüştür. Buna göre X, Y ve Z yaylarının karşısına konulan cisimler hangi seçenekte doğru eşleştirilmiştir?',
    options: [
      { key: 'A', text: 'X: K, Y: M, Z: L' },
      { key: 'B', text: 'X: K, Y: L, Z: M' },
      { key: 'C', text: 'X: L, Y: M, Z: K' },
      { key: 'D', text: 'X: L, Y: K, Z: M' }
    ],
    correctAnswer: 'A',
    explanation: 'X yayının ucunda (-) küre vardır; zıt yüklü K (-) çekilerek yayı uzatır. Y yayının ucunda (+) küre vardır; aynı cins yüklü M (+) itilerek yayı sıkıştırır. Z yayının ucunda (+) küre vardır; nötr L çekilir. Dolayısıyla X: K, Y: M, Z: L doğru eşleştirmedir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kuvvet ve Yay Deformasyonu',
    theme: 'Elektriksel Kuvvet ve Yaylar'
  },
  {
    id: 7206,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Yük Durumu Bilinmeyen Cismin Elektroskoba Dokundurulması',
    scenario: 'Yük cinsi ve miktarı bilinmeyen iletken bir K cismi, negatif (-) yüklü bir elektroskoba dokundurulduğunda elektroskobun yapraklarının biraz kapandığı gözlemlenmiştir.',
    questionPrompt: 'Yapılan bu deneyle ilgili aşağıdaki yorumlardan hangisi kesinlikle yanlıştır?',
    options: [
      { key: 'A', text: 'K cismi elektroskoptan ayrılıp tekrar dokundurulursa yapraklar biraz daha kapanabilir.' },
      { key: 'B', text: 'K cisminde dokunma işleminden sonra yük dengesi bozulmuş (elektriklenmiş) olabilir.' },
      { key: 'C', text: 'K cismi dokunma işleminde elektroskoptan artı (+) yük almış ve eksi (-) yük miktarı azalmıştır.' },
      { key: 'D', text: 'K cismi elektroskoptan negatif yük aldığı için elektroskobun yaprakları biraz kapanmış olabilir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Elektrostatikte katılarda (iletkenlerde) ASLA pozitif (+) yükler (protonlar) hareket etmez veya akmaz! Yük alışverişi daima negatif (-) yüklerin (elektronların) hareketiyle gerçekleşir. C seçeneğindeki "K cisminin elektroskoptan artı yük aldığı" ifadesi temel fizik yasalarına kesinlikle aykırıdır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Yük Hareketi ve Temel Kurallar',
    theme: 'Elektroskop ve Yük Alışverişi'
  },
  {
    id: 7207,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'İki Elektroskop Arasında İletken Tel ve Anahtar Deneyi',
    scenario: 'Nötr K ve L elektroskopları üzerinde kapalı bir anahtar bulunan iletken telle birbirine bağlanmıştır. Negatif (-) yüklü X cismi K elektroskobunun topuzuna yaklaştırılıyor. X cismi uzaklaştırılmadan anahtar açılıyor ve ardından X cismi ortamdan uzaklaştırılıyor.',
    questionPrompt: 'Enes’in yaptığı bu deneyle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'X cismindeki negatif yükler L elektroskobuna geçmiştir.' },
      { key: 'B', text: 'X cismi yaklaştırıldığında K pozitif (+), L negatif (-) yüklenmiş; anahtar açılınca K (+) yüklü, L (-) yüklü kalmıştır.' },
      { key: 'C', text: 'Son durumda anahtar kapatılırsa iki elektroskobun da yaprakları daha fazla açılır.' },
      { key: 'D', text: 'X cismi K elektroskobuna dokundurulsa yapraklar hareket etmezdi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Negatif (-) X cismi K\'nin topuzundaki elektronları iterek tel üzerinden L elektroskobuna sürer. Bu anda K (+), L (-) olur. Anahtar açıldığında bu yükler hapsolur. X uzaklaştırılsa bile K elektroskobu pozitif (+), L elektroskobu negatif (-) yüklü olarak yaprakları açık kalır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Elektroskop ve Etki ile Elektriklenme',
    theme: 'Elektroskoplarda Yük Dağılımı'
  },
  {
    id: 7208,
    subTopicId: 'g8-u7-sub2',
    contextTitle: 'Topraklama ve İletken Cisimler Arası İtme-Çekme Kuvveti',
    scenario: 'İki ayrı deney yapılmıştır:\n• Deney 1: Birbirine temas eden nötr iletken X, Y ve Z cisimlerine (+) yüklü cisim yaklaştırılıp etki devam ederken cisimler ayrılıyor (X(-), Y(nötr), Z(+)).\n• Deney 2: Topraklanmış nötr iletken T cismine (-) yüklü cisim yaklaştırılıyor; etki devam ederken toprak kesilip yüklü cisim uzaklaştırılıyor (T(+)).',
    questionPrompt: 'Deneyler tamamlandıktan sonra bu cisimler yan yana getirildiğinde aralarında oluşan etkileşim (X ve T) ile (Z ve T) için hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'X ve T: Çekme — Z ve T: İtme' },
      { key: 'B', text: 'X ve T: İtme — Z ve T: Çekme' },
      { key: 'C', text: 'X ve T: Çekme — Z ve T: Çekme' },
      { key: 'D', text: 'X ve T: İtme — Z ve T: İtme' }
    ],
    correctAnswer: 'A',
    explanation: 'Deney 1\'de X negatif (-), Z pozitif (+) yüklüdür. Deney 2\'de (-) cisim yaklaştığında toprağa elektron iter; toprak kesilince T cismi pozitif (+) yüklü kalır. Sonuç olarak X(-) ile T(+) zıt yüklü olduğundan birbirini ÇEKER; Z(+) ile T(+) aynı cins yüklü olduğundan birbirini İTER. Doğru seçenek: A.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Çoklu Düzenekte Elektrostatik Kuvvet',
    theme: 'Yüklü Cisimler Arası Etkileşim'
  },

  // Subtopic 3: Elektrik Enerjisinin Dönüşümü, Güç Santralleri ve Tasarruf
  {
    id: 7301,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Elektrik Santrallerinin Ortak Çalışma Prensibi',
    scenario: 'Termik santrallerde kömür yakılarak elde edilen buhar, nükleer santrallerde uranyum çekirdeğinin bölünmesiyle oluşan ısı buharı, hidroelektrik santrallerde ise baraj gölündeki suyun düşüş kinetik enerjisi jeneratör türbinlerini döndürür.',
    questionPrompt: 'Aşağıdaki özelliklerden hangisi bu üç elektrik santral türü için ortaktır?',
    options: [
      { key: 'A', text: 'Türbinlerin dönmesiyle hareket (kinetik) enerjisini jeneratörlerde elektrik enerjisine çevirme' },
      { key: 'B', text: 'Çekim potansiyel enerjisini doğrudan elektrik enerjisine çevirme' },
      { key: 'C', text: 'Suyu buharlaştırmak için sadece fosil yakıt kullanma' },
      { key: 'D', text: 'Atmosfere hiçbir zararlı sera gazı salmama' }
    ],
    correctAnswer: 'A',
    explanation: 'Tüm elektrik santrallerinde (termik, nükleer, rüzgâr, hidroelektrik) temel ortak ilke; bir kaynaktan elde edilen dönme (hareket/kinetik) enerjisinin jeneratör jeneratör bobinleri ve mıknatıslar aracılığıyla elektrik enerjisine dönüştürülmesidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Santral Teknolojileri Ortak İlkesi',
    theme: 'Elektrik Üretim Santralleri'
  },
  {
    id: 7302,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Jeotermal Enerji Kaynakları ve Santralleri Haritası',
    scenario: 'Türkiye fay hatları üzerinde yer aldığından Ege Bölgesi başta olmak üzere birçok ilimizde yer altı sıcak su (jeotermal) kaynakları bulunmaktadır. Haritada jeotermal su kaynaklarının dağılımı ile kurulan jeotermal elektrik santrallerinin yerleri gösterilmiştir.',
    questionPrompt: 'Jeotermal enerji ile ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Jeotermal enerji yenilenemeyen bir enerji kaynağıdır.' },
      { key: 'B', text: 'Tüm sıcak su kaynakları doğrudan elektrik üretimine uygundur (düşük sıcaklıktakiler sadece ısıtmada ve seracılıkta kullanılır).' },
      { key: 'C', text: 'Jeotermal enerji yer altındaki magma sıcaklığından beslenen temiz ve yenilenebilir bir enerji kaynağıdır.' },
      { key: 'D', text: 'Jeotermal santraller nükleer atık oluşturur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Jeotermal enerji, yer kabuğunun derinliklerindeki ısının yer altı sularını ısıtmasıyla elde edilen, çevreye fosil yakıtlar gibi sera gazı yaymayan, tükenmeyen, yenilenebilir bir enerji kaynağıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Yenilenebilir Enerji Kaynakları',
    theme: 'Jeotermal Enerji ve Çevre'
  },
  {
    id: 7303,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Hidroelektrik Santralde Su Basıncı ve Türbin Dönme Hızı',
    scenario: 'Bir hidroelektrik santral modelinde su deposunun tabanındaki A noktasından ve daha yukarıdaki B noktasından jeneratör türbinine boru bağlanmıştır. Su deposu tam doluyken borunun konumu ve suyun akış hızı incelenmektedir.',
    questionPrompt: 'Kurulan sistemle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Boru A noktasından daha yukarıdaki B noktasına kaydırılırsa sıvı basıncı artacağından jeneratör daha hızlı döner.' },
      { key: 'B', text: 'Depoda bulunan su miktarı azaldıkça derinlik azalacağı için jeneratörün birim zamanda ürettiği elektrik artar.' },
      { key: 'C', text: 'Boru en derindeki A noktasındayken sıvı basıncı en büyük olacağından su türbine en yüksek kinetik enerjiyle çarpar ve en fazla elektrik üretilir.' },
      { key: 'D', text: 'Depoya tuz eklenirse sıvının yoğunluğu artacağı için jeneratörün dönme hızı azalır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıvı basıncı derinlikle (h) doğru orantılıdır (P = h.d.g). En dipteki A noktasında sıvı basıncı en yüksek olduğundan su borudan maksimum hız ve kinetik enerjiyle fışkırır; bu da türbinleri en hızlı döndürerek maksimum elektrik enerjisi üretir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Sıvı Basıncı ve Hidroelektrik Dönüşüm',
    theme: 'Hidroelektrik Santrallerde Enerji Dönüşümü'
  },
  {
    id: 7304,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'İletken Direnci ve Isı Enerjisine Dönüşüm Deneyi',
    scenario: 'Halil, bir elektrik devresinde açığa çıkan ısı enerjisinin bağlı olduğu faktörleri test etmek için eşit miktarda su bulunan kaplara nikel ve bakır teller bağlamış, özdeş pillerle eşit süre akım geçirmiştir (Nikel telin direnci bakır telden büyüktür).',
    questionPrompt: 'Deney düzenekleri ile ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Aynı akım ve sürede direnci büyük olan nikel telin bulunduğu kaptaki su daha fazla ısınır (Isı = I² . R . t).' },
      { key: 'B', text: 'Telin cinsi açığa çıkan ısı miktarını hiçbir şekilde etkilemez.' },
      { key: 'C', text: 'Bakır telin direnci daha yüksek olduğu için bakır telli kap daha çok ısınır.' },
      { key: 'D', text: 'Kaplardaki su miktarı artırılırsa son sıcaklık artışı da artar.' }
    ],
    correctAnswer: 'A',
    explanation: 'İletkenden geçen akımın oluşturduğu ısı enerjisi, iletkenin direnciyle doğru orantılıdır (E = I² . R . t). Nikel-krom telin özdirenci bakıra göre katbekat büyüktür; bu nedenle elektrik sobalarında ve fırınlarda direnci yüksek teller kullanılarak elektrik enerjisi yüksek ısıya dönüştürülür.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Elektrik Enerjisinin Isıya Dönüşümü',
    theme: 'Elektrik Akımı ve Isı İlişkisi'
  },
  {
    id: 7305,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Mutfak Aletleri ve Sigorta Akım Değerleri Hesabı',
    scenario: 'Bir mutfakta kullanılan elektrikli aletlerin çektikleri akım değerleri şöyledir:\n• Su ısıtıcısı: 14 A\n• Davlumbaz: 3 A\n• Fırın: 5 A\n• Tost makinesi: 7 A\n• Çırpıcı: 5 A\nMutfağın bağlı olduğu ana sigortanın maksimum akım taşıma kapasitesi 16 A\'dir.',
    questionPrompt: 'Sigortanın atıp devreyi kesmemesi için Bekir hangi aletleri aynı anda BİRLİKTE güvenle çalıştırabilir?',
    options: [
      { key: 'A', text: 'Su ısıtıcısı (14 A) ve Davlumbaz (3 A)' },
      { key: 'B', text: 'Su ısıtıcısı (14 A) ve Fırın (5 A)' },
      { key: 'C', text: 'Fırın (5 A), Çırpıcı (5 A) ve Davlumbaz (3 A) (Toplam 13 A)' },
      { key: 'D', text: 'Tost makinesi (7 A), Fırın (5 A) ve Çırpıcı (5 A) (Toplam 17 A)' }
    ],
    correctAnswer: 'C',
    explanation: 'Sigortanın atmaması için devreden çekilen toplam akımın sigorta kapasitesi olan 16 A\'i aşmaması gerekir. A seçeneğinde 14+3=17 A (atar); B seçeneğinde 14+5=19 A (atar); D seçeneğinde 7+5+5=17 A (atar); C seçeneğinde ise 5+5+3 = 13 A < 16 A olduğundan sigorta atmaz ve aletler güvenle çalışır.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Devre Güvenliği ve Sigorta Seçimi',
    theme: 'Elektrik Güvenliği ve Sigortalar'
  },
  {
    id: 7306,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Dört Farklı Bölgede Sıcaklık Farkı ve Rüzgâr Santrali Kurulumu',
    scenario: 'Komşu dört bölgenin ortalama sıcaklık değerleri ölçülmüştür:\n• K Bölgesi: 23 °C\n• L Bölgesi: 10 °C\n• M Bölgesi: 17 °C\n• N Bölgesi: 20 °C\nRüzgâr santralinde rüzgârın şiddeti arttıkça üretilen elektrik enerjisi artmaktadır.',
    questionPrompt: 'Diğer tüm değişkenleri aynı olan bu bölgeler arasında en fazla elektrik enerjisi üretecek rüzgâr santrali hangi iki bölge arasına kurulmalıdır?',
    options: [
      { key: 'A', text: 'M ve N bölgeleri arasına (Sıcaklık farkı: 3 °C)' },
      { key: 'B', text: 'L ve N bölgeleri arasına (Sıcaklık farkı: 10 °C)' },
      { key: 'C', text: 'K ve L bölgeleri arasına (Sıcaklık farkı: 23 - 10 = 13 °C)' },
      { key: 'D', text: 'K ve M bölgeleri arasına (Sıcaklık farkı: 6 °C)' }
    ],
    correctAnswer: 'C',
    explanation: 'Rüzgâr, yüksek basınçtan (soğuk bölge) alçak basınca (sıcak bölge) doğru havanın yatay hareketidir. İki bölge arasındaki sıcaklık farkı ne kadar büyük olursa basınç farkı ve dolayısıyla rüzgârın esme şiddeti o kadar büyük olur. Sıcaklık farkının en büyük olduğu ikili K (23 °C) ve L (10 °C) olup fark 13 °C\'dir; en şiddetli rüzgâr ve en yüksek enerji burada elde edilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Basınç-Sıcaklık İlişkisi ve Rüzgâr Enerjisi',
    theme: 'Rüzgâr Santralleri ve Meteorolojik İlkeler'
  },
  {
    id: 7307,
    subTopicId: 'g8-u7-sub3',
    contextTitle: 'Dinamo, Elektrik Motoru ve Hoparlör ile Enerji Dönüşüm Zinciri',
    scenario: 'TÜBİTAK Bilim Genç dergisinde yayınlanan bir deney düzeneğinde: Elle dinamo kolu çevrildiğinde kabloya bağlı lamba yanmakta, elektrik motoruna bağlı pervane dönmekte ve hoparlörden ses çıkmaktadır.',
    questionPrompt: 'Bu düzenekle ilgili aşağıdaki enerji dönüşümü değerlendirmelerinden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Düzenekte dinamodan elde edilen elektrik enerjisi; lambada ışık enerjisine, elektrik motorunda hareket enerjisine, hoparlörde ses enerjisine dönüşmüştür.' },
      { key: 'B', text: 'Lamba hareket enerjisini doğrudan ses enerjisine çevirmiştir.' },
      { key: 'C', text: 'Pervanenin dönmesi elektrik motorunun elektrik ürettiğini gösterir.' },
      { key: 'D', text: 'Dinamoda elektrik enerjisi hareket enerjisine dönüştürülür.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dinamo, el koluyla sağlanan hareket (mekanik) enerjisini elektrik enerjisine çevirir. Üretilen bu elektrik enerjisi iletken kablolarla dağıtılarak lambada ışığa/ısıya, elektrik motorunda pervanenin dönme (kinetik) hareketine, hoparlörde ise diyafram titreşimiyle ses enerjisine dönüştürülmüştür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Çoklu Enerji Dönüşüm Ağı',
    theme: 'Elektrik Enerjisinin Farklı Enerji Türlerine Dönüşümü'
  }
];
