export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  description: string;
  difficulty: "Başlangıç" | "Orta" | "İleri";
  category: string; // Yeni eklenen kategori alanı
  qa: QuestionAnswer[];
}

export const learningTopics: LearningTopic[] = [
  {
    id: "iki-sayinin-toplami",
    title: "İki Sayının Toplamı",
    description: "Bir dizideki iki sayının toplamının belirli bir hedefe ulaşıp ulaşmadığını kontrol etme mantığı. Bu problem genellikle hash map (harita) kullanarak O(n) zaman karmaşıklığında çözülür. Her elemanı gezerken, hedeften o elemanı çıkararak 'tamamlayıcı' sayıyı buluruz. Eğer bu tamamlayıcı sayı daha önce gördüğümüz sayılar arasında varsa, çözüm bulunmuştur. Aksi takdirde, mevcut sayıyı haritaya ekleriz.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, dizideki her bir sayıyı gezerken, hedef sayıya ulaşmak için gereken 'tamamlayıcı' sayıyı hesaplamaktır. Bunu yapmanın hızlı bir yolu, bir hash map (JavaScript'te `Map` objesi) kullanmaktır. Eğer tamamlayıcı sayı haritada bulunursa, mevcut sayının indeksi ile haritadaki tamamlayıcı sayının indeksini döndürürüz. Aksi takdirde, mevcut sayıyı ve indeksini haritaya ekleriz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir markette belirli bir tutara (hedef) ulaşmak için iki ürün (sayılar) aradığınızı düşünün. Her ürüne baktığınızda, kalan tutarı hesaplar ve bu tutara sahip bir ürünün daha önce sepetinize eklenip eklenmediğini kontrol edersiniz. Eğer eklendiyse, o iki ürünü bulmuşsunuz demektir. Aksi takdirde, mevcut ürünü sepetinize eklersiniz.\n\n```javascript\nfunction twoSum(nums, target) {\n  const numMap = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (numMap.has(complement)) {\n      return [numMap.get(complement), i];\n    }\n    numMap.set(nums[i], i);\n  }\n  return []; // Çözüm bulunamazsa boş dizi döndür\n}\n```",
      },
    ],
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Hisse Senedi Alım Satımı İçin En İyi Zaman",
    description: "Bir hisse senedinin fiyat geçmişine bakarak maksimum karı elde etme stratejisi. Bu problem, diziyi tek geçişte tarayarak çözülebilir. En düşük alım fiyatını ve şimdiye kadar görülen maksimum karı takip ederiz.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Bu problemin temel mantığı, diziyi baştan sona tek bir geçişte taramaktır. Bir değişkenle şimdiye kadar görülen en düşük hisse senedi fiyatını (minPrice) takip ederiz. Başka bir değişkenle de şimdiye kadar elde edilen maksimum karı (maxProfit) takip ederiz. Her yeni fiyatı (price) değerlendirirken, iki şeyi kontrol ederiz: 1) Eğer mevcut fiyat minPrice'tan daha düşükse, minPrice'ı güncelleriz. 2) Eğer mevcut fiyat ile minPrice arasındaki fark, maxProfit'ten daha büyükse, maxProfit'i güncelleriz. Bu şekilde, her zaman en düşük fiyattan alıp, en yüksek fiyattan satma potansiyelini değerlendirmiş oluruz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir meyve tezgahında dolaşırken, en ucuz elmayı bulup onu satın almak ve daha sonra en yüksek fiyata satmak istediğinizi düşünün. Her elmanın fiyatına baktığınızda, o ana kadar gördüğünüz en ucuz elmanın fiyatını aklınızda tutarsınız. Eğer mevcut elma, aklınızdaki en ucuz elmadan daha pahalıysa, onu satarak ne kadar kar edebileceğinizi hesaplar ve bu karın şimdiye kadarki en yüksek kar olup olmadığını kontrol edersiniz.\n\n```javascript\nfunction maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let i = 0; i < prices.length; i++) {\n    if (prices[i] < minPrice) {\n      minPrice = prices[i];\n    } else if (prices[i] - minPrice > maxProfit) {\n      maxProfit = prices[i] - minPrice;\n    }\n  }\n  return maxProfit;\n}\n```",
      },
    ],
  },
  {
    id: "contains-duplicate",
    title: "Tekrar Eden Eleman İçeriyor mu?",
    description: "Bir tamsayı dizisinde herhangi bir değerin en az iki kez görünüp görünmediğini kontrol etme problemi. Bu problem, bir hash seti (JavaScript'te `Set` objesi) kullanarak veya diziyi sıralayıp ardışık elemanları karşılaştırarak çözülebilir.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Bu problemin temel mantığı, dizideki her bir elemanı bir kez görüp görmediğimizi hızlıca kontrol etmektir. Bunu yapmanın en verimli yollarından biri bir `Set` veri yapısı kullanmaktır. Dizideki her elemanı gezerken, o elemanın `Set` içinde zaten olup olmadığını kontrol ederiz. Eğer varsa, bu bir tekrar demektir ve `true` döndürürüz. Yoksa, elemanı `Set`'e ekler ve devam ederiz. Tüm dizi gezildikten sonra tekrar bulunamazsa `false` döndürürüz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sınıftaki öğrencilerin isimlerinin yazılı olduğu bir listeyi kontrol ettiğinizi düşünün. Her ismi okuduğunuzda, o ismin daha önce listede geçip geçmediğini kontrol edersiniz. Eğer aynı isimle daha önce karşılaştıysanız, bu bir tekrar demektir. Aksi takdirde, o ismi 'görülenler' listenize eklersiniz.\n\n```javascript\nfunction containsDuplicate(nums) {\n  const seen = new Set();\n  for (const num of nums) {\n    if (seen.has(num)) {\n      return true;\n    }\n    seen.add(num);\n  }\n  return false;\n}\n```",
      },
    ],
  },
  {
    id: "single-number",
    title: "Tek Sayı",
    description: "Her elemanın iki kez göründüğü, ancak bir elemanın yalnızca bir kez göründüğü bir dizide, yalnızca bir kez görünen elemanı bulma problemi. Bu problem genellikle XOR (özel veya) bitwise operatörü kullanılarak çözülür.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, XOR (özel veya) bitwise operatörünün özelliklerinden yararlanmaktır. Bir sayının kendisiyle XOR'u 0'dır (a ^ a = 0). Bir sayının 0 ile XOR'u ise sayının kendisidir (a ^ 0 = a). Ayrıca, XOR işlemi birleşmeli ve değişmelidir (a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b). Bu nedenle, dizideki tüm sayıları birbirleriyle XOR'ladığımızda, ikişer kez tekrar eden sayılar birbirini sıfırlayacak ve geriye yalnızca tek olan sayı kalacaktır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir grup arkadaşınızın eşleşen tişörtler giydiğini, ancak bir kişinin farklı bir tişört giydiğini düşünün. Herkesin tişört rengini bir 'toplama' işlemine dahil ediyorsunuz, ancak bu toplama işlemi normal toplama değil, aynı renklerin birbirini götürdüğü özel bir toplama. Sonunda geriye kalan renk, farklı tişört giyen kişinin rengi olacaktır.\n\n```javascript\nfunction singleNumber(nums) {\n  let result = 0;\n  for (const num of nums) {\n    result ^= num; // XOR işlemi\n  }\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "intersection-of-two-arrays-ii",
    title: "İki Dizinin Kesişimi II",
    description: "İki tamsayı dizisi verildiğinde, kesişimlerini (her elemanın her iki dizide de göründüğü kadar kez) döndürme problemi. Bu problem, elemanların frekansını saymak için hash map kullanarak veya dizileri sıralayıp iki işaretçi kullanarak çözülebilir.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her iki dizide de ortak olan elemanları ve bu elemanların kaçar kez tekrar ettiğini bulmaktır. Bunu yapmanın etkili bir yolu, bir dizideki elemanların frekansını bir hash map (sayıcı) kullanarak saymak ve ardından diğer diziyi gezerken bu sayıcıyı kullanmaktır. İkinci dizideki bir eleman sayıcıda bulunursa ve sayımı sıfırdan büyükse, o elemanı sonuca ekler ve sayımını bir azaltırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "İki farklı alışveriş listesindeki ortak ürünleri bulmak istediğinizi düşünün. İlk listedeki her ürünün kaç tane olduğunu not alırsınız (bir harita kullanarak). Sonra ikinci listeyi gezerken, her ürün için not aldığınız miktardan düşersiniz. Eğer bir ürünün miktarı hala sıfırdan büyükse, o ürünü ortak listeye eklersiniz.\n\n```javascript\nfunction intersect(nums1, nums2) {\n  const map = new Map();\n  for (const num of nums1) {\n    map.set(num, (map.get(num) || 0) + 1);\n  }\n\n  const result = [];\n  for (const num of nums2) {\n    if (map.has(num) && map.get(num) > 0) {\n      result.push(num);\n      map.set(num, map.get(num) - 1);\n    }\n  }\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "move-zeroes",
    title: "Sıfırları Sona Taşıma",
    description: "Bir dizideki tüm sıfırları dizinin sonuna taşıma problemi, diğer elemanların göreceli sırasını koruyarak. Bu problem genellikle iki işaretçi (two-pointers) tekniği kullanılarak çözülür.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi tek bir geçişte tararken sıfır olmayan elemanları dizinin başına doğru taşımaktır. İki işaretçi kullanırız: biri sıfır olmayan elemanların yerleştirileceği konumu (insertPos) takip ederken, diğeri diziyi baştan sona (i) tarar. Eğer `nums[i]` sıfır değilse, onu `nums[insertPos]`'a kopyalarız ve `insertPos`'u bir artırırız. Tarama bittikten sonra, `insertPos`'tan dizinin sonuna kadar olan tüm elemanları sıfır yaparız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sınıftaki öğrencileri, yaramaz olanları (sıfırlar) en arkaya, uslu olanları (sıfır olmayanlar) ise öne doğru, kendi aralarındaki sıralarını bozmadan yerleştirdiğinizi düşünün. Sınıfı baştan sona gezerken, uslu bir öğrenci gördüğünüzde onu öne doğru boş bir yere oturtur, yaramazları ise şimdilik yerinde bırakırsınız. Tüm uslu öğrenciler oturduktan sonra, kalan boş yerlere yaramazları oturtursunuz.\n\n```javascript\nfunction moveZeroes(nums) {\n  let insertPos = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      nums[insertPos] = nums[i];\n      insertPos++;\n    }\n  }\n  while (insertPos < nums.length) {\n    nums[insertPos] = 0;\n    insertPos++;\n  }\n}\n```",
      },
    ],
  },
  {
    id: "plus-one",
    title: "Bir Ekleme",
    description: "Büyük bir tamsayıyı temsil eden basamaklar dizisine bir ekleme problemi. Sayı, basamakların en önemli basamağı başta olmak üzere soldan sağa doğru depolanır. Elde (carry) mantığı kullanılarak çözülür.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ilkokulda öğrendiğimiz toplama işlemine benzer: en sağdaki basamaktan başlayarak sola doğru ilerleriz. Her basamağa 1 ekleriz. Eğer basamak 9 ise ve 1 eklersek 0 olur ve bir elde (carry) oluşur. Bu eldeyi bir sonraki sola doğru basamağa ekleriz. Eğer en soldaki basamağa da elde gelirse, dizinin başına yeni bir basamak (1) eklememiz gerekir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterirsiniz?",
        answer: "Bir sayının basamaklarını ayrı ayrı kartlara yazdığınızı düşünün (örneğin 1-2-3). Bu sayıya 1 eklemek istediğinizde, en sağdaki karttan başlarsınız (3). 3'e 1 eklerseniz 4 olur. Eğer kart 9 olsaydı (örneğin 1-2-9), 9'a 1 ekleyince 0 olur ve solundaki karta (2) bir 'elde' (1) eklersiniz. Bu işlem, elde kalmayana kadar devam eder. Eğer en soldaki karta da elde gelirse, en sola yeni bir '1' kartı eklersiniz.\n\n```javascript\nfunction plusOne(digits) {\n  for (let i = digits.length - 1; i >= 0; i--) {\n    if (digits[i] < 9) {\n      digits[i]++;\n      return digits;\n    } else {\n      digits[i] = 0;\n    }\n  }\n  digits.unshift(1); // Tüm basamaklar 9 ise, başına 1 ekle\n  return digits;\n}\n```",
      },
    ],
  },
  {
    id: "remove-duplicates-from-sorted-array",
    title: "Sıralı Diziden Tekrarları Kaldırma",
    description: "Sıralı bir tamsayı dizisinden tekrarlayan elemanları yerinde (in-place) kaldırma problemi. Elemanların göreceli sırası korunmalıdır. Yeni dizinin uzunluğu döndürülür.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi tek bir geçişte tararken benzersiz elemanları dizinin başına doğru taşımaktır. İki işaretçi kullanırız: `i` diziyi tararken, `j` benzersiz elemanların yazılacağı konumu takip eder. Eğer `nums[i]` ile `nums[j]` farklıysa, `j`'yi bir artırır ve `nums[j]`'ye `nums[i]`'yi yazarız. Eğer aynıysa, `i`'yi ilerletiriz. Bu şekilde, `j`'nin son konumu benzersiz elemanların sayısını verir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kitaplıkta aynı kitaptan birden fazla kopyası olduğunu düşünün ve her kitaptan sadece bir tane kalmasını istiyorsunuz, ancak kitapların sırasını bozmadan. Kitapları tek tek incelerken, eğer bir kitap daha önce gördüğünüz bir kitaptan farklıysa, onu yeni bir rafa (dizinin başına) koyarsınız. Eğer aynıysa, o kopyayı atlar ve bir sonraki kitaba geçersiniz. Sonunda, yeni raftaki kitap sayısı, benzersiz kitapların sayısını verir.\n\n```javascript\nfunction removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let j = 0;\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] !== nums[j]) {\n      j++;\n      nums[j] = nums[i];\n    }\n  }\n  return j + 1;\n}\n```",
      },
    ],
  },
  {
    id: "remove-element",
    title: "Elemanı Kaldırma",
    description: "Bir tamsayı dizisinden belirli bir değeri (val) yerinde kaldırma problemi. Kalan elemanların sırası değiştirilebilir. Yeni dizinin uzunluğu döndürülür.",
    difficulty: "Başlangıç",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi tararken kaldırılacak değere eşit olmayan elemanları dizinin başına doğru taşımaktır. Bir işaretçi (k) sıfır olmayan elemanların yerleştirileceği konumu takip ederken, diğer işaretçi (i) diziyi baştan sona tarar. Eğer `nums[i]` kaldırılacak değere eşit değilse, onu `nums[k]`'ye kopyalarız ve `k`'yi bir artırırız. Tarama bittikten sonra, `k`'nin son konumu, kaldırılmayan elemanların sayısını verir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir grup insan arasından belirli bir özelliği olanları (örneğin, gözlüklüleri) çıkarmak istediğinizi düşünün. İnsanları tek tek incelerken, gözlüklü olmayanları bir sıraya alırsınız. Gözlüklü olanları ise sıraya almazsınız. Sonunda, sıraya aldığınız insan sayısı, gözlüklü olmayanların sayısını verir.\n\n```javascript\nfunction removeElement(nums, val) {\n  let k = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== val) {\n      nums[k] = nums[i];\n      k++;\n    }\n  }\n  return k;\n}\n```",
      },
    ],
  },
  {
    id: "ters-cevirme",
    title: "String'i Ters Çevirme",
    description: "Verilen bir string'i (karakter dizisi olarak) yerinde ters çevirme problemi. Genellikle iki işaretçi (two-pointers) tekniği kullanılarak çözülür.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, string'in başından ve sonundan iki işaretçi başlatmaktır. Bu işaretçiler birbirine yaklaşırken, işaretçilerin gösterdiği karakterleri yer değiştiririz. İşaretçiler birbirini geçtiğinde veya karşılaştığında işlem tamamlanır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kelimenin harflerini ayrı ayrı kartlara yazdığınızı ve bu kartları ters çevirmek istediğinizi düşünün. Bir elinizle ilk kartı, diğer elinizle son kartı tutarsınız. Bu iki kartın yerini değiştirirsiniz. Sonra birer adım içeri doğru ilerleyip yeni ilk ve son kartların yerini değiştirirsiniz. Bu işlem, tüm kartların yerini değiştirene kadar devam eder.\n\n```javascript\nfunction reverseString(s) {\n  let left = 0;\n  let right = s.length - 1;\n  while (left < right) {\n    [s[left], s[right]] = [s[right], s[left]]; // Swap characters\n    left++;\n    right--;\n  }\n}\n```",
      },
    ],
  },
  {
    id: "valid-palindrome",
    title: "Geçerli Palindrom",
    description: "Bir cümlenin palindrom olup olmadığını kontrol etme problemi. Yalnızca alfanümerik karakterler göz önünde bulundurulur ve büyük/küçük harf ayrımı göz ardı edilir.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, verilen string'i sadece alfanümerik karakterleri içerecek şekilde temizlemek ve tüm harfleri küçük harfe dönüştürmektir. Daha sonra, temizlenmiş string'in tersinin kendisine eşit olup olmadığını kontrol ederiz. İki işaretçi tekniği de kullanılabilir: bir işaretçi baştan, diğeri sondan başlayarak birbirine doğru ilerler ve her adımda karakterleri karşılaştırır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kelimenin veya cümlenin tersten okunuşunun düzden okunuşuyla aynı olup olmadığını kontrol ettiğinizi düşünün. Örneğin, 'Madam' kelimesi tersten de 'Madam' olarak okunur. Bu kontrolü yaparken noktalama işaretlerini veya boşlukları dikkate almazsınız, sadece harflere bakarsınız ve büyük/küçük harf fark etmez.\n\n```javascript\nfunction isPalindrome(s) {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let left = 0;\n  let right = cleaned.length - 1;\n  while (left < right) {\n    if (cleaned[left] !== cleaned[right]) {\n      return false;\n    }\n    left++;\n    right--;\n  }\n  return true;\n}\n```",
      },
    ],
  },
  {
    id: "longest-common-prefix",
    title: "En Uzun Ortak Önek",
    description: "Bir string dizisi verildiğinde, tüm string'lerdeki en uzun ortak öneki bulma problemi. Bu problem, string'leri karakter karakter karşılaştırarak çözülebilir.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, dizideki ilk string'i referans alarak diğer tüm string'lerle karakter karakter karşılaştırmaktır. Ortak önek, tüm string'lerin aynı karaktere sahip olduğu en uzun başlangıç kısmıdır. Eğer herhangi bir noktada bir karakter uyuşmazlığı olursa veya bir string'in sonuna ulaşılırsa, o noktaya kadar olan kısım en uzun ortak önektir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir grup kelimenin (örneğin 'çiçek', 'çiçekçi', 'çiçeklik') ortak başlangıcını bulmak istediğinizi düşünün. İlk kelimeye bakarsınız ('çiçek'). Sonra ikinci kelimeye ('çiçekçi') bakarsınız ve 'çiçek' kısmının aynı olduğunu görürsünüz. Üçüncü kelimeye ('çiçeklik') bakarsınız ve yine 'çiçek' kısmının aynı olduğunu görürsünüz. Bu durumda en uzun ortak önek 'çiçek'tir.\n\n```javascript\nfunction longestCommonPrefix(strs) {\n  if (strs.length === 0) return \"\";\n  let prefix = strs[0];\n  for (let i = 1; i < strs.length; i++) {\n    while (strs[i].indexOf(prefix) !== 0) {\n      prefix = prefix.substring(0, prefix.length - 1);\n      if (prefix === \"\") return \"\";\n    }\n  }\n  return prefix;\n}\n```",
      },
    ],
  },
  {
    id: "valid-anagram",
    title: "Geçerli Anagram",
    description: "İki string'in birbirinin anagramı olup olmadığını belirleme problemi. Anagram, bir kelimenin harflerinin yerleri değiştirilerek başka bir kelime oluşturulmasıdır (örneğin 'listen' ve 'silent').",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki string'in aynı karakterlere aynı sayıda sahip olup olmadığını kontrol etmektir. Bunu yapmanın en kolay yolu, her iki string'i de alfabetik olarak sıralayıp karşılaştırmak veya her bir string'deki karakterlerin frekansını saymak için bir frekans haritası (hash map) kullanmaktır. Eğer her iki string'in de karakter frekansları aynıysa, anagramdırlar.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kelime oyununda, size verilen harflerle başka bir kelime oluşturup oluşturamayacağınızı kontrol ettiğinizi düşünün. Örneğin, 'elma' harfleriyle 'amel' kelimesini oluşturabilirsiniz. Bu, her iki kelimenin de aynı harfleri aynı sayıda içerdiği anlamına gelir.\n\n```javascript\nfunction isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const charCount = {};\n  for (const char of s) {\n    charCount[char] = (charCount[char] || 0) + 1;\n  }\n  for (const char of t) {\n    if (!charCount[char]) {\n      return false;\n    }\n    charCount[char]--;\n  }\n  return true;\n}\n```",
      },
    ],
  },
  {
    id: "first-unique-character-in-a-string",
    title: "String'deki İlk Tekrarsız Karakter",
    description: "Bir string'deki ilk tekrarsız karakterin indeksini bulma problemi. Eğer böyle bir karakter yoksa -1 döndürülür.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, string'deki her karakterin kaç kez tekrar ettiğini saymaktır. Bunu yapmak için bir frekans haritası (hash map) kullanabiliriz. İlk geçişte her karakterin frekansını sayarız. İkinci geçişte, string'i baştan sona tekrar tararız ve frekansı 1 olan ilk karakterin indeksini döndürürüz. Eğer hiç böyle bir karakter bulunamazsa, -1 döndürürüz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir metindeki kelimeleri incelerken, sadece bir kez kullanılan ilk kelimeyi bulmak istediğinizi düşünün. Metni baştan sona okurken, her kelimenin kaç kez geçtiğini not alırsınız. Sonra metni tekrar okurken, notlarınıza bakarak sadece bir kez geçen ilk kelimeyi bulursunuz.\n\n```javascript\nfunction firstUniqChar(s) {\n  const charCount = {};\n  for (const char of s) {\n    charCount[char] = (charCount[char] || 0) + 1;\n  }\n  for (let i = 0; i < s.length; i++) {\n    if (charCount[s[i]] === 1) {\n      return i;\n    }\n  }\n  return -1;\n}\n```",
      },
    ],
  },
  {
    id: "implement-strstr",
    title: "strstr() Uygulaması",
    description: "Bir 'haystack' (samanlık) string'i içinde bir 'needle' (iğne) string'inin ilk oluşumunun indeksini bulma problemi. Eğer 'needle' bulunamazsa -1 döndürülür.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, 'haystack' string'inin her olası başlangıç noktasından 'needle' string'i ile karşılaştırmaktır. 'haystack' içinde 'needle' uzunluğunda bir pencere oluşturulur ve bu penceredeki alt string ile 'needle' karşılaştırılır. Eğer eşleşme bulunursa, pencerenin başlangıç indeksi döndürülür. Hiçbir eşleşme bulunamazsa, -1 döndürülür.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kitapta belirli bir kelimeyi aradığınızı düşünün. Kitabı baştan sona okurken, her kelimeyi aradığınız kelimeyle karşılaştırırsınız. Eğer kelimeyi bulursanız, o kelimenin başladığı sayfa numarasını not alırsınız. Eğer kitabı bitirmenize rağmen kelimeyi bulamazsanız, kelimenin kitapta olmadığını anlarsınız.\n\n```javascript\nfunction strStr(haystack, needle) {\n  if (needle.length === 0) return 0;\n  if (haystack.length < needle.length) return -1;\n\n  for (let i = 0; i <= haystack.length - needle.length; i++) {\n    let match = true;\n    for (let j = 0; j < needle.length; j++) {\n      if (haystack[i + j] !== needle[j]) {\n        match = false;\n        break;\n      }\n    }\n    if (match) {\n      return i;\n    }\n  }\n  return -1;\n}\n```",
      },
    ],
  },
  {
    id: "valid-parentheses",
    title: "Geçerli Parantezler",
    description: "Yalnızca '(', ')', '{', '}', '[' ve ']' karakterlerini içeren bir string'in geçerli olup olmadığını belirleme problemi. Parantezlerin doğru sırada ve doğru şekilde kapatılıp kapatılmadığı kontrol edilir.",
    difficulty: "Başlangıç",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bir yığın (stack) veri yapısı kullanmaktır. String'i baştan sona tararız. Eğer bir açılış parantezi ('(', '{', '[') görürsek, onu yığına ekleriz. Eğer bir kapanış parantezi (')', '}', ']') görürsek, yığının en üstündeki elemanın ilgili açılış parantezi olup olmadığını kontrol ederiz. Eğer eşleşiyorsa, yığından çıkarırız. Eşleşmiyorsa veya yığın boşsa, string geçersizdir. String'in sonuna ulaştığımızda yığın boşsa, string geçerlidir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kitaplıktaki kitapları (parantezler) raflara yerleştirdiğinizi düşünün. Her açılış parantezi bir kitabı rafa koymak gibidir. Her kapanış parantezi ise raftan bir kitap almak gibidir. Eğer raftan almanız gereken kitap, elinizdeki kapanış paranteziyle eşleşmiyorsa (örneğin, ')' için '{' alıyorsanız) veya raf boşsa, bir hata var demektir. Tüm kitapları yerleştirdikten ve aldıktan sonra raf boşsa, her şey yolundadır.\n\n```javascript\nfunction isValid(s) {\n  const stack = [];\n  const map = {\n    \"(\": \")\",\n    \"{\": \"}\",\n    \"[\": \"]\",\n  };\n\n  for (const char of s) {\n    if (map[char]) { // Açılış parantezi\n      stack.push(char);\n    } else { // Kapanış parantezi\n      if (stack.length === 0) return false; // Yığın boşsa ve kapanış parantezi varsa\n      const lastOpen = stack.pop();\n      if (map[lastOpen] !== char) {\n        return false; // Eşleşme yoksa\n      }\n    }\n  }\n  return stack.length === 0; // Yığın boşsa geçerli\n}\n```",
      },
    ],
  },
  {
    id: "fibonacci-dp",
    title: "Fibonacci Sayıları (Dinamik Programlama)",
    description: "Dinamik programlama kullanarak n. Fibonacci sayısını hesaplama problemi. Fibonacci dizisi, her sayının kendinden önceki iki sayının toplamı olduğu bir dizidir (0, 1, 1, 2, 3, 5, ...).",
    difficulty: "Başlangıç",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, daha küçük alt problemlerin çözümlerini kullanarak daha büyük problemleri çözmektir. Fibonacci dizisinde, F(n) = F(n-1) + F(n-2) formülüyle hesaplanır. Dinamik programlama yaklaşımında, daha önce hesapladığımız Fibonacci sayılarını bir dizide (memoization) saklarız, böylece aynı hesaplamayı tekrar tekrar yapmaktan kaçınırız. Bu, özellikle büyük 'n' değerleri için performansı önemli ölçüde artırır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir merdiveni tırmanırken, her adımda 1 veya 2 basamak atlayabildiğinizi düşünün. Belirli bir basamağa (n) kaç farklı şekilde ulaşabileceğinizi hesaplamak, Fibonacci dizisine benzer. Örneğin, 3. basamağa ulaşmak için (1,1,1), (1,2) veya (2,1) olmak üzere 3 farklı yol vardır. Bu, F(3) = 2 (F(2)) + 1 (F(1)) = 3'e benzer.\n\n```javascript\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  const dp = new Array(n + 1);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}\n```",
      },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Merdiven Çıkma",
    description: "n basamaklı bir merdivene tırmanırken her seferinde 1 veya 2 basamak tırmanarak zirveye ulaşmak için kaç farklı yol olduğunu hesaplama problemi. Bu da bir dinamik programlama problemidir ve Fibonacci dizisiyle yakından ilişkilidir.",
    difficulty: "Başlangıç",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, n. basamağa ulaşmanın yollarının, (n-1). basamağa ulaşmanın yolları ile (n-2). basamağa ulaşmanın yollarının toplamı olmasıdır. Bu, Fibonacci dizisinin tanımına çok benzer. Yani, `climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)`.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir binanın katlarına çıkarken, her seferinde bir veya iki kat atlayabildiğinizi düşünün. Belirli bir kata (n) kaç farklı yolla ulaşabileceğinizi hesaplamak, bu problemin günlük hayattaki karşılığıdır. Örneğin, 3. kata ulaşmak için (1,1,1), (1,2) veya (2,1) olmak üzere 3 farklı yol vardır.\n\n```javascript\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  let dp = new Array(n + 1);\n  dp[1] = 1;\n  dp[2] = 2;\n  for (let i = 3; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}\n```",
      },
    ],
  },
  {
    id: "maximum-subarray",
    title: "Maksimum Alt Dizi",
    description: "Bir tamsayı dizisi verildiğinde, en büyük toplamı olan bitişik alt diziyi bulma problemi. Kadane algoritması ile O(n) zaman karmaşıklığında çözülebilir.",
    difficulty: "Başlangıç",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi baştan sona tararken iki değeri takip etmektir: `currentMax` (mevcut alt dizinin maksimum toplamı) ve `globalMax` (şimdiye kadar görülen tüm alt dizilerin maksimum toplamı). Her elemanı gezerken, `currentMax`'i ya mevcut eleman ya da mevcut eleman artı önceki `currentMax`'ten büyük olanı olarak güncelleriz. `globalMax` ise her zaman `currentMax`'in en büyük değerini tutar.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir gün boyunca kazandığınız ve kaybettiğiniz paraları (pozitif ve negatif sayılar) not aldığınızı düşünün. Günün sonunda, en çok kar ettiğiniz ardışık gün aralığını bulmak istiyorsunuz. Her günün sonunda, o güne kadar olan en yüksek karınızı ve genel olarak en yüksek karınızı hesaplarsınız. Eğer bir gün çok para kaybederseniz, yeni bir 'kar' dönemi başlatmayı düşünebilirsiniz.\n\n```javascript\nfunction maxSubArray(nums) {\n  let currentMax = nums[0];\n  let globalMax = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    currentMax = Math.max(nums[i], currentMax + nums[i]);\n    globalMax = Math.max(globalMax, currentMax);\n  }\n  return globalMax;\n}\n```",
      },
    ],
  },
  {
    id: "reverse-linked-list",
    title: "Bağlı Listeyi Ters Çevirme",
    description: "Verilen bir tek bağlı listeyi ters çevirme problemi. Bu işlem genellikle iteratif veya özyinelemeli yaklaşımlarla yapılır.",
    difficulty: "Başlangıç",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bağlı listedeki her düğümün `next` işaretçisini tersine çevirmektir. İteratif yaklaşımda, üç işaretçi kullanırız: `prev` (önceki düğüm), `current` (mevcut düğüm) ve `nextTemp` (bir sonraki düğümü geçici olarak saklamak için). Her adımda, `current` düğümün `next`'ini `prev`'e ayarlarız, sonra işaretçileri bir adım ileri taşırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir trenin vagonlarını (düğümleri) ters sıraya dizdiğinizi düşünün. Her vagonu ayırır ve bir önceki vagona bağlarsınız. Bu işlemi, tüm vagonları ters sıraya dizene kadar devam ettirirsiniz. Sonunda, en son vagon artık ilk vagon olur.\n\n```javascript\nfunction reverseList(head) {\n  let prev = null;\n  let current = head;\n  while (current !== null) {\n    let nextTemp = current.next;\n    current.next = prev;\n    prev = current;\n    current = nextTemp;\n  }\n  return prev;\n}\n```",
      },
    ],
  },
  {
    id: "delete-node-in-linked-list",
    title: "Bağlı Listede Düğüm Silme",
    description: "Tek bağlı bir listede, sadece silinecek düğüme erişiminiz varken bir düğümü silme problemi. Düğümün listenin son düğümü olmadığı garanti edilir.",
    difficulty: "Başlangıç",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, silinecek düğümün değerini bir sonraki düğümün değeriyle değiştirmek ve ardından bir sonraki düğümü atlamaktır. Bu, aslında silinecek düğümü değil, bir sonraki düğümü silerek düğümün değerini koruruz. Bu yöntem, silinecek düğümün kendisinden önceki düğüme erişimimiz olmadığında kullanışlıdır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir öğrenci listesinden (bağlı liste) belirli bir öğrenciyi (düğüm) çıkarmak istediğinizi düşünün, ancak sadece o öğrencinin kendisine ulaşabiliyorsunuz. Yapabileceğiniz şey, o öğrencinin adını ve bilgilerini bir sonraki öğrencinin adıyla değiştirmek ve sonra bir sonraki öğrenciyi listeden çıkarmaktır. Böylece, aslında 'silmek' istediğiniz öğrenci listeden çıkmış olur.\n\n```javascript\nfunction deleteNode(node) {\n  node.val = node.next.val;\n  node.next = node.next.next;\n}\n```",
      },
    ],
  },
  {
    id: "linked-list-cycle",
    title: "Bağlı Liste Döngüsü",
    description: "Bir bağlı listede döngü olup olmadığını belirleme problemi. Genellikle Floyd'un Kaplumbağa ve Tavşan (Floyd's Tortoise and Hare) algoritması kullanılarak çözülür.",
    difficulty: "Başlangıç",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki işaretçi kullanmaktır: biri yavaş (kaplumbağa) ve diğeri hızlı (tavşan). Yavaş işaretçi her adımda bir düğüm ilerlerken, hızlı işaretçi her adımda iki düğüm ilerler. Eğer listede bir döngü varsa, hızlı işaretçi sonunda yavaş işaretçiyi yakalayacaktır. Eğer döngü yoksa, hızlı işaretçi veya yavaş işaretçi listenin sonuna (null) ulaşacaktır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir koşu parkurunda iki koşucunun (işaretçiler) koştuğunu düşünün. Biri yavaş (kaplumbağa) ve diğeri hızlı (tavşan). Eğer parkur dairesel (döngülü) ise, hızlı koşucu eninde sonunda yavaş koşucuyu yakalayacaktır. Eğer parkur düz ise, hızlı koşucu parkurun sonuna ulaşacak ve yavaş koşucuyu asla yakalayamayacaktır.\n\n```javascript\nfunction hasCycle(head) {\n  if (!head || !head.next) return false;\n  let slow = head;\n  let fast = head.next;\n  while (slow !== fast) {\n    if (!fast || !fast.next) {\n      return false;\n    }\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return true;\n}\n```",
      },
    ],
  },
  {
    id: "middle-of-the-linked-list",
    title: "Bağlı Listenin Ortası",
    description: "Verilen bir bağlı listenin orta düğümünü döndürme problemi. Eğer listenin çift sayıda düğümü varsa, iki orta düğümden ikincisi döndürülür.",
    difficulty: "Başlangıç",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, yine iki işaretçi kullanmaktır: biri yavaş (slow) ve diğeri hızlı (fast). Yavaş işaretçi her adımda bir düğüm ilerlerken, hızlı işaretçi her adımda iki düğüm ilerler. Hızlı işaretçi listenin sonuna ulaştığında, yavaş işaretçi listenin ortasında olacaktır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir ipin (bağlı liste) ortasını bulmak istediğinizi düşünün. İpin bir ucundan yavaşça ilerlerken, diğer ucundan iki kat daha hızlı ilerlersiniz. Hızlı ilerleyen eliniz ipin sonuna ulaştığında, yavaş ilerleyen eliniz ipin tam ortasında olacaktır.\n\n```javascript\nfunction middleNode(head) {\n  let slow = head;\n  let fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\n```",
      },
    ],
  },
  {
    id: "remove-duplicates-from-sorted-list",
    title: "Sıralı Listeden Tekrarları Kaldırma",
    description: "Sıralı bir bağlı listeden tekrarlayan elemanları silme problemi. Her elemanın yalnızca bir kez görünmesi sağlanır.",
    difficulty: "Başlangıç",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bağlı listeyi baştan sona tararken ardışık düğümleri karşılaştırmaktır. Eğer mevcut düğümün değeri bir sonraki düğümün değeriyle aynıysa, bir sonraki düğümü atlarız (yani, mevcut düğümün `next`'ini bir sonraki düğümün `next`'ine ayarlarız). Eğer farklıysa, mevcut düğümü bir adım ileri taşırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sıraya dizilmiş insanları (bağlı liste) düşünün ve aynı isimdeki kişilerin sadece bir tanesinin kalmasını istiyorsunuz. Sırayı baştan sona gezerken, eğer bir kişiyle aynı isimde bir sonraki kişi varsa, o kişiyi sıradan çıkarırsınız. Eğer farklı isimde bir kişi varsa, sıradaki yerini korur ve bir sonraki kişiye geçersiniz.\n\n```javascript\nfunction deleteDuplicates(head) {\n  let current = head;\n  while (current !== null && current.next !== null) {\n    if (current.val === current.next.val) {\n      current.next = current.next.next;\n    } else {\n      current = current.next;\n    }\n  }\n  return head;\n}\n```",
      },
    ],
  },
  {
    id: "binary-tree-inorder-traversal",
    title: "İkili Ağaçta Inorder Gezinme",
    description: "İkili bir ağacın inorder (sol-kök-sağ) gezinmesini uygulama problemi. Bu gezinme, bir İkili Arama Ağacı (BST) için sıralı elemanları verir.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, özyinelemeli (recursive) bir yaklaşımla ağacı gezmektir. Inorder gezinmede, önce sol alt ağacı ziyaret ederiz, sonra mevcut düğümü işleriz (değerini kaydederiz), ardından sağ alt ağacı ziyaret ederiz. Bu işlem, tüm düğümler ziyaret edilene kadar özyinelemeli olarak devam eder.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir aile ağacındaki (ikili ağaç) bireyleri belirli bir sıraya göre listelediğinizi düşünün. Inorder gezinme, önce bir kişinin sol tarafındaki tüm akrabalarını (küçük değerler), sonra o kişiyi, sonra da sağ tarafındaki tüm akrabalarını (büyük değerler) listelemek gibidir. Bu, soy ağacındaki herkesi yaş sırasına göre listelemeye benzer.\n\n```javascript\nfunction inorderTraversal(root) {\n  const result = [];\n  function traverse(node) {\n    if (node === null) return;\n    traverse(node.left);\n    result.push(node.val);\n    traverse(node.right);\n  }\n  traverse(root);\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "İkili Ağacın Maksimum Derinliği",
    description: "İkili bir ağacın maksimum derinliğini bulma problemi. Maksimum derinlik, kök düğümden en uzak yaprak düğüme kadar olan en uzun yol boyunca düğüm sayısıdır.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, özyinelemeli olarak her düğümün sol ve sağ alt ağaçlarının derinliğini hesaplamak ve bu iki derinlikten büyük olanına 1 (mevcut düğüm için) eklemektir. Bir düğüm null ise derinliği 0'dır. Yaprak düğümlerin derinliği 1'dir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir binadaki kat sayısını (derinlik) hesapladığınızı düşünün. Her kat için, o kattan başlayarak en alt kata kadar kaç kat olduğunu sayarsınız. En uzun yolu bulmak için, her bir merdiven boşluğundan (sol ve sağ alt ağaçlar) inebileceğiniz en fazla kat sayısını bulur ve buna mevcut katı eklersiniz.\n\n```javascript\nfunction maxDepth(root) {\n  if (root === null) {\n    return 0;\n  }\n  const leftDepth = maxDepth(root.left);\n  const rightDepth = maxDepth(root.right);\n  return Math.max(leftDepth, rightDepth) + 1;\n}\n```",
      },
    ],
  },
  {
    id: "same-tree",
    title: "Aynı Ağaç",
    description: "İki ikili ağacın yapısal olarak özdeş olup olmadığını ve düğümlerinin aynı değerlere sahip olup olmadığını kontrol etme problemi.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki ağacı özyinelemeli olarak aynı anda gezmektir. Her adımda, mevcut düğümlerin her ikisinin de null olup olmadığını, birinin null diğerinin null olup olmadığını ve her ikisinin de null değilse değerlerinin eşit olup olmadığını kontrol ederiz. Ardından, sol alt ağaçları ve sağ alt ağaçları için aynı kontrolü özyinelemeli olarak yaparız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "İki farklı ağacın (gerçek ağaçlar) tamamen aynı olup olmadığını kontrol ettiğinizi düşünün. Her dalı ve her yaprağı karşılaştırırsınız. Eğer bir dal veya yaprak diğer ağaçta yoksa veya farklıysa, ağaçlar aynı değildir. Tüm dallar ve yapraklar eşleşirse, ağaçlar aynıdır.\n\n```javascript\nfunction isSameTree(p, q) {\n  if (p === null && q === null) return true;\n  if (p === null || q === null || p.val !== q.val) return false;\n  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n}\n```",
      },
    ],
  },
  {
    id: "symmetric-tree",
    title: "Simetrik Ağaç",
    description: "Verilen bir ikili ağacın ayna simetrik olup olmadığını kontrol etme problemi. Yani, kök merkezli olarak sol ve sağ alt ağaçları birbirinin aynası olmalıdır.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ağacın sol alt ağacının, sağ alt ağacının ayna görüntüsü olup olmadığını kontrol etmektir. Bunu yapmak için, iki düğümü (birini sol alt ağaçtan, diğerini sağ alt ağaçtan) karşılaştıran yardımcı bir özyinelemeli fonksiyon kullanırız. Bu fonksiyon, sol düğümün sol çocuğunu sağ düğümün sağ çocuğuyla ve sol düğümün sağ çocuğunu sağ düğümün sol çocuğuyla karşılaştırır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kelebeğin kanatlarının (sol ve sağ alt ağaçlar) simetrik olup olmadığını kontrol ettiğinizi düşünün. Bir kanadın sol tarafındaki deseni, diğer kanadın sağ tarafındaki desenle aynı olmalıdır. Ve bir kanadın sağ tarafındaki deseni, diğer kanadın sol tarafındaki desenle aynı olmalıdır.\n\n```javascript\nfunction isSymmetric(root) {\n  if (root === null) return true;\n  return isMirror(root.left, root.right);\n}\n\nfunction isMirror(node1, node2) {\n  if (node1 === null && node2 === null) return true;\n  if (node1 === null || node2 === null || node1.val !== node2.val) return false;\n  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);\n}\n```",
      },
    ],
  },
  {
    id: "path-sum",
    title: "Yol Toplamı",
    description: "Kökten yaprağa kadar olan bir yolun, verilen `targetSum` ile aynı toplamı olup olmadığını belirleme problemi.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ağacı derinlemesine arama (DFS) kullanarak gezmektir. Her düğümde, mevcut toplamı güncelleriz (mevcut düğümün değerini çıkararak). Eğer bir yaprak düğüme ulaşırsak ve mevcut toplam `targetSum`'a eşitse, böyle bir yol vardır. Aksi takdirde, sol ve sağ çocukları için özyinelemeli olarak aynı işlemi tekrarlarız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir labirentte (ağaç) belirli bir hedefe (targetSum) ulaşmak istediğinizi düşünün. Her kavşakta (düğüm), o kavşağın değerini toplamdan düşersiniz. Eğer bir çıkışa (yaprak düğüm) ulaşırsanız ve elinizdeki toplam sıfırsa, doğru yolu bulmuşsunuz demektir. Aksi takdirde, farklı bir yoldan devam edersiniz.\n\n```javascript\nfunction hasPathSum(root, targetSum) {\n  if (root === null) return false;\n\n  targetSum -= root.val;\n\n  if (root.left === null && root.right === null) {\n    return targetSum === 0;\n  }\n\n  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);\n}\n```",
      },
    ],
  },
  {
    id: "invert-binary-tree",
    title: "İkili Ağacı Ters Çevirme",
    description: "Bir ikili ağacı ters çevirme problemi. Yani, her düğümün sol ve sağ çocukları yer değiştirir.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, özyinelemeli olarak her düğümün sol ve sağ çocuklarını yer değiştirmektir. Bir düğümün çocuklarını yer değiştirdikten sonra, sol ve sağ çocukları için özyinelemeli olarak aynı işlemi tekrarlarız.",
      },
      {
      question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterirsiniz?",
      answer: "Bir aynaya baktığınızda, sol tarafınızın aynada sağda, sağ tarafınızın ise solda göründüğünü düşünün. Bir ikili ağacı ters çevirmek de buna benzer. Her düğümde, sol çocuğunu sağ çocukla, sağ çocuğunu da sol çocukla değiştirirsiniz. Bu işlemi tüm düğümler için tekrarlarsınız.\n\n```javascript\nfunction invertTree(root) {\n  if (root === null) {\n    return null;\n  }\n  const left = invertTree(root.left);\n  const right = invertTree(root.right);\n  root.left = right;\n  root.right = left;\n  return root;\n}\n```",
      },
    ],
  },
  {
    id: "balanced-binary-tree",
    title: "Dengeli İkili Ağaç",
    description: "İkili bir ağacın dengeli olup olmadığını belirleme problemi. Dengeli bir ağaç, her düğümün sol ve sağ alt ağaçlarının yüksekliklerinin farkının hiçbir zaman 1'den fazla olmadığı bir ikili ağaçtır.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her düğüm için sol ve sağ alt ağaçlarının yüksekliklerini hesaplamak ve bu yükseklik farkının mutlak değerinin 1'den büyük olup olmadığını kontrol etmektir. Eğer herhangi bir düğüm için bu fark 1'den büyükse, ağaç dengeli değildir. Bu kontrolü özyinelemeli olarak her düğüm için yaparız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterirsiniz?",
        answer: "Bir terazi (ağaç) düşünün. Her bir kefenin (sol ve sağ alt ağaçlar) ağırlığının (yüksekliğinin) birbirine çok yakın olup olmadığını kontrol ediyorsunuz. Eğer herhangi bir kefenin ağırlığı diğerinden çok farklıysa, terazi dengeli değildir. Tüm teraziler dengeliyse, ağaç dengelidir.\n\n```javascript\nfunction isBalanced(root) {\n  function checkHeight(node) {\n    if (node === null) return 0;\n\n    const leftHeight = checkHeight(node.left);\n    if (leftHeight === -1) return -1;\n\n    const rightHeight = checkHeight(node.right);\n    if (rightHeight === -1) return -1;\n\n    if (Math.abs(leftHeight - rightHeight) > 1) {\n      return -1;\n    }\n    return Math.max(leftHeight, rightHeight) + 1;\n  }\n  return checkHeight(root) !== -1;\n}\n```",
      },
    ],
  },
  {
    id: "minimum-depth-of-binary-tree",
    title: "İkili Ağacın Minimum Derinliği",
    description: "İkili bir ağacın minimum derinliğini bulma problemi. Minimum derinlik, kök düğümden en yakın yaprak düğüme kadar olan en kısa yol boyunca düğüm sayısıdır.",
    difficulty: "Başlangıç",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ağacı seviye seviye arama (BFS) veya özyinelemeli derinlemesine arama (DFS) kullanarak gezmektir. BFS kullanıldığında, bir yaprak düğüme ilk ulaştığımız seviye minimum derinliktir. DFS kullanıldığında ise, sol ve sağ alt ağaçların minimum derinliklerini hesaplar ve bu ikisinden küçük olanına 1 ekleriz. Ancak, bir alt ağaç boşsa, diğer alt ağacın derinliğini döndürmek önemlidir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterirsiniz?",
        answer: "Bir binadaki en yakın çıkışa (yaprak düğüm) ulaşmak için en az kaç kat inmeniz gerektiğini (minimum derinlik) hesapladığınızı düşünün. Her katta, hem sol hem de sağ merdiven boşluklarından inebileceğiniz en kısa yolu bulursunuz. Bu iki yoldan daha kısa olanı seçer ve mevcut katı da sayarak toplamı bulursunuz.\n\n```javascript\nfunction minDepth(root) {\n  if (root === null) return 0;\n  if (root.left === null && root.right === null) return 1; // Yaprak düğüm\n\n  if (root.left === null) {\n    return minDepth(root.right) + 1;\n  }\n  if (root.right === null) {\n    return minDepth(root.left) + 1;\n  }\n\n  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;\n}\n```",
      },
    ],
  },
  {
    id: "bfs-graph-easy",
    title: "BFS ile Graf Gezinmesi (Kolay)",
    description: "Verilen bir graf üzerinde Genişlik Öncelikli Arama (BFS) algoritmasını uygulama problemi. Başlangıç düğümünden tüm erişilebilir düğümler seviye seviye ziyaret edilir.",
    difficulty: "Başlangıç",
    category: "graflar",
    qa: [
      {
        question: "Bu algoritmanın temel mantığı nedir?",
        answer: "BFS, bir grafı seviye seviye gezen bir arama algoritmasıdır. Başlangıç düğümünden başlar, tüm komşularını ziyaret eder, ardından bu komşuların komşularını ziyaret eder ve bu böyle devam eder. Bir kuyruk (queue) veri yapısı kullanır. Ziyaret edilen düğümlerin tekrar ziyaret edilmemesi için bir 'ziyaret edildi' kümesi (set) tutulur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sosyal medya ağında (graf) bir kişiden (başlangıç düğümü) başlayarak tüm arkadaşlarını (komşular), sonra arkadaşlarının arkadaşlarını ve bu böyle devam ederek tüm bağlantılı kişileri bulmak istediğinizi düşünün. Bu, BFS'in çalışma prensibine benzer. Her seviyede, mevcut kişilerin tüm doğrudan bağlantılarını kontrol edersiniz.\n\n```javascript\nfunction bfs(graph, startNode) {\n  const queue = [startNode];\n  const visited = new Set();\n  visited.add(startNode);\n  const result = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    result.push(node);\n\n    for (const neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "dfs-graph-easy",
    title: "DFS ile Graf Gezinmesi (Kolay)",
    description: "Verilen bir graf üzerinde Derinlik Öncelikli Arama (DFS) algoritmasını uygulama problemi. Başlangıç düğümünden mümkün olduğunca derine inerek düğümler ziyaret edilir.",
    difficulty: "Başlangıç",
    category: "graflar",
    qa: [
      {
        question: "Bu algoritmanın temel mantığı nedir?",
        answer: "DFS, bir grafı mümkün olduğunca derine inerek gezen bir arama algoritmasıdır. Başlangıç düğümünden başlar, bir komşusunu ziyaret eder, sonra o komşunun komşusunu ziyaret eder ve bu böyle devam eder. Bir yığın (stack) veri yapısı veya özyineleme kullanır. Ziyaret edilen düğümlerin tekrar ziyaret edilmemesi için bir 'ziyaret edildi' kümesi (set) tutulur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir labirentte (graf) bir çıkış aradığınızı düşünün. Bir yola girer ve o yolun sonuna kadar ilerlersiniz. Eğer çıkışa ulaşamazsanız, geri döner ve başka bir yola girer, onun da sonuna kadar ilerlersiniz. Bu, DFS'in çalışma prensibine benzer. Her zaman mümkün olduğunca derine inmeye çalışırsınız.\n\n```javascript\nfunction dfs(graph, startNode) {\n  const visited = new Set();\n  const result = [];\n\n  function traverse(node) {\n    visited.add(node);\n    result.push(node);\n\n    for (const neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        traverse(neighbor);\n      }\n    }\n  }\n  traverse(startNode);\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "has-path-graph",
    title: "Grafda Yol Var mı?",
    description: "Yönlendirilmiş bir graf ve iki düğüm (kaynak ve hedef) verildiğinde, kaynaktan hedefe bir yol olup olmadığını belirleme problemi. Hem BFS hem de DFS ile çözülebilir.",
    difficulty: "Başlangıç",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, kaynaktan başlayarak hedef düğüme ulaşılıp ulaşılamayacağını kontrol etmek için bir graf arama algoritması (BFS veya DFS) kullanmaktır. Arama sırasında hedef düğüme rastlanırsa, bir yol vardır. Arama tamamlandığında hedef düğüme ulaşılamazsa, bir yol yoktur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki (graf) bir noktadan (kaynak) başka bir noktaya (hedef) ulaşmak için bir yol olup olmadığını kontrol ettiğinizi düşünün. Haritayı kullanarak bir noktadan başlayıp, tüm bağlantılı yolları keşfedersiniz. Eğer hedef noktaya ulaşan bir yol bulursanız, yol vardır. Aksi takdirde, yol yoktur.\n\n```javascript\nfunction hasPath(graph, source, destination) {\n  const queue = [source];\n  const visited = new Set();\n  visited.add(source);\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    if (node === destination) return true;\n\n    if (graph[node]) { // Düğümün komşuları varsa\n      for (const neighbor of graph[node]) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          queue.push(neighbor);\n        }\n      }\n    }\n  }\n  return false;\n}\n```",
      },
    ],
  },
  {
    id: "get-node-degree",
    title: "Düğüm Derecesi",
    description: "Verilen bir graf ve bir düğüm için, o düğümün derecesini (komşu sayısı) bulma problemi. Yönlendirilmiş ve yönlendirilmemiş graflar için farklılık gösterebilir.",
    difficulty: "Başlangıç",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bir düğümün komşularının sayısını saymaktır. Komşuluk listesi (adjacency list) olarak temsil edilen bir graf için, bu sadece ilgili düğümün komşuluk listesindeki eleman sayısını döndürmek anlamına gelir. Yönlendirilmemiş bir graf için, bu düğümün hem gelen hem de giden kenarlarının toplamıdır. Yönlendirilmiş bir graf için ise genellikle sadece giden kenarlar (out-degree) veya hem gelen hem de giden kenarlar (total degree) kastedilir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sosyal medya ağında (graf) bir kişinin (düğüm) kaç tane doğrudan arkadaşı (komşu) olduğunu bulmak istediğinizi düşünün. Bu, o kişinin arkadaş listesindeki kişi sayısını saymak gibidir.\n\n```javascript\nfunction getNodeDegree(graph, node) {\n  if (graph[node]) {\n    return graph[node].length;\n  }\n  return 0; // Düğüm yoksa veya komşusu yoksa 0 döndür\n}\n```",
      },
    ],
  },
  {
    id: "count-edges-graph",
    title: "Grafda Kenar Sayısı",
    description: "Verilen bir grafın toplam kenar sayısını bulma problemi. Yönlendirilmiş ve yönlendirilmemiş graflar için farklı hesaplama yöntemleri vardır.",
    difficulty: "Başlangıç",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, grafın tüm düğümlerinin komşuluk listelerindeki toplam eleman sayısını saymaktır. Eğer graf yönlendirilmişse, bu toplam doğrudan kenar sayısını verir. Eğer graf yönlendirilmemişse, her kenar iki düğümün komşuluk listesinde görüneceği için toplamı 2'ye bölmemiz gerekir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki (graf) tüm yolların (kenarlar) sayısını bulmak istediğinizi düşünün. Her bir kavşaktan (düğüm) çıkan yolları sayar ve tüm kavşaklar için bu sayıları toplarsınız. Eğer yollar çift yönlüyse (yönlendirilmemiş graf), toplamı ikiye bölmeniz gerekir çünkü her yolu iki kez saymış olursunuz.\n\n```javascript\nfunction countEdges(graph) {\n  let edgeCount = 0;\n  for (const node in graph) {\n    edgeCount += graph[node].length;\n  }\n  // Yönlendirilmemiş graf için kenar sayısını 2'ye böl\n  // Bu örnekte grafın yönlendirilmemiş olduğu varsayılıyor.\n  return edgeCount / 2;\n}\n```",
      },
    ],
  },
  {
    id: "en-uzun-alt-dizi",
    title: "Tekrarlayan Karakterler Olmayan En Uzun Alt Dize",
    description: "Tekrarlayan karakterler içermeyen en uzun alt dizinin uzunluğunu bulma problemi. Kayar pencere (sliding window) tekniği kullanılarak çözülebilir.",
    difficulty: "Orta",
    category: "string",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bir 'kayar pencere' kullanmaktır. Pencerenin sol ve sağ kenarlarını temsil eden iki işaretçi (left ve right) kullanırız. Sağ işaretçiyi ilerletirken, pencereye yeni bir karakter ekleriz. Eğer bu karakter pencerede zaten varsa (yani bir tekrar oluşursa), sol işaretçiyi tekrar eden karakterin bir sonraki konumuna kadar ilerleterek pencereyi küçültürüz. Her adımda, pencerenin mevcut uzunluğunu (right - left + 1) hesaplar ve şimdiye kadarki en uzun alt dizinin uzunluğunu güncelleriz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kitaplıktaki kitapları (karakterler) okuduğunuzu düşünün. Her kitaptan sadece bir tane okumak istiyorsunuz. Bir pencere açar ve kitapları okumaya başlarsınız. Eğer daha önce okuduğunuz bir kitabı tekrar görürseniz, pencerenin sol tarafını, tekrar eden kitabı geçene kadar kaydırırsınız. Her adımda, pencerenizdeki benzersiz kitapların sayısını not alırsınız ve en uzun pencereyi bulmaya çalışırsınız.\n\n```javascript\nfunction lengthOfLongestSubstring(s) {\n  const charSet = new Set();\n  let left = 0;\n  let maxLength = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    while (charSet.has(s[right])) {\n      charSet.delete(s[left]);\n      left++;\n    }\n    charSet.add(s[right]);\n    maxLength = Math.max(maxLength, right - left + 1);\n  }\n  return maxLength;\n}\n```",
      },
    ],
  },
  {
    id: "bfs-graph",
    title: "BFS ile Graf Gezinmesi",
    description: "Verilen bir graf üzerinde Genişlik Öncelikli Arama (BFS) algoritmasını uygulama problemi. Başlangıç düğümünden tüm erişilebilir düğümler seviye seviye ziyaret edilir. Daha karmaşık graflar ve bağlantı durumları için genel bir çözüm.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu algoritmanın temel mantığı nedir?",
        answer: "BFS, bir grafı seviye seviye gezen bir arama algoritmasıdır. Başlangıç düğümünden başlar, tüm komşularını ziyaret eder, ardından bu komşuların komşularını ziyaret eder ve bu böyle devam eder. Bir kuyruk (queue) veri yapısı kullanır. Ziyaret edilen düğümlerin tekrar ziyaret edilmemesi için bir 'ziyaret edildi' kümesi (set) tutulur. Bu, en kısa yolu bulmak için idealdir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki (graf) bir noktadan (başlangıç düğümü) başlayarak, en kısa sürede ulaşabileceğiniz tüm yerleri (düğümler) bulmak istediğinizi düşünün. Önce doğrudan ulaşabileceğiniz yerlere gidersiniz, sonra bu yerlerden doğrudan ulaşabileceğiniz yerlere gidersiniz ve bu böyle devam eder. Bu, BFS'in çalışma prensibine benzer. Her seviyede, mevcut kişilerin tüm doğrudan bağlantılarını kontrol edersiniz.\n\n```javascript\nfunction bfs(graph, startNode) {\n  const queue = [startNode];\n  const visited = new Set();\n  visited.add(startNode);\n  const result = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    result.push(node);\n\n    // graph[node] null veya undefined olabilir, kontrol ekle\n    if (graph[node]) {\n      for (const neighbor of graph[node]) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          queue.push(neighbor);\n        }\n      }\n    }\n  }\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "dfs-graph",
    title: "DFS ile Graf Gezinmesi",
    description: "Verilen bir graf üzerinde Derinlik Öncelikli Arama (DFS) algoritmasını uygulama problemi. Başlangıç düğümünden mümkün olduğunca derine inerek düğümler ziyaret edilir. Daha karmaşık graflar ve bağlantı durumları için genel bir çözüm.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu algoritmanın temel mantığı nedir?",
        answer: "DFS, bir grafı mümkün olduğunca derine inerek gezen bir arama algoritmasıdır. Başlangıç düğümünden başlar, bir komşusunu ziyaret eder, sonra o komşunun komşusunu ziyaret eder ve bu böyle devam eder. Bir yığın (stack) veri yapısı veya özyineleme kullanır. Ziyaret edilen düğümlerin tekrar ziyaret edilmemesi için bir 'ziyaret edildi' kümesi (set) tutulur. Bu, tüm yolları keşfetmek için idealdir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir ormanda (graf) kaybolduğunuzu ve bir çıkış aradığınızı düşünün. Bir patikaya girer ve o patikanın sonuna kadar ilerlersiniz. Eğer çıkışa ulaşamazsanız, geri döner ve başka bir patikaya girer, onun da sonuna kadar ilerlersiniz. Bu, DFS'in çalışma prensibine benzer. Her zaman mümkün olduğunca derine inmeye çalışırsınız.\n\n```javascript\nfunction dfs(graph, startNode) {\n  const visited = new Set();\n  const result = [];\n\n  function traverse(node) {\n    visited.add(node);\n    result.push(node);\n\n    if (graph[node]) {\n      for (const neighbor of graph[node]) {\n        if (!visited.has(neighbor)) {\n          traverse(neighbor);\n        }\n      }\n    }\n  }\n  traverse(startNode);\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "longest-common-subsequence",
    title: "En Uzun Ortak Alt Dizi",
    description: "İki string verildiğinde, bu iki string'in en uzun ortak alt dizisinin uzunluğunu bulma problemi. Dinamik programlama ile çözülebilir.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki string'in alt dizilerini karşılaştırarak ortak olan en uzun diziyi bulmaktır. Dinamik programlama yaklaşımında, iki boyutlu bir tablo (DP tablosu) oluşturulur. `dp[i][j]`, `text1`'in ilk `i` karakteri ile `text2`'nin ilk `j` karakteri arasındaki en uzun ortak alt dizinin uzunluğunu temsil eder. Eğer `text1[i-1]` ve `text2[j-1]` karakterleri eşleşiyorsa, `dp[i][j] = 1 + dp[i-1][j-1]` olur. Aksi takdirde, `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])` olur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "İki farklı genetik dizilimdeki (stringler) ortak genetik kodları (alt dizi) bulmak istediğinizi düşünün. Bu, iki dizilimi karşılaştırarak en uzun ortak genetik kodu bulmaya benzer. Her adımda, mevcut genlerin eşleşip eşleşmediğini kontrol eder ve buna göre ortak dizilimin uzunluğunu güncellersiniz.\n\n```javascript\nfunction longestCommonSubsequence(text1, text2) {\n  const m = text1.length;\n  const n = text2.length;\n  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));\n\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = 1 + dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}\n```",
      },
    ],
  },
  {
    id: "merge-two-sorted-lists",
    title: "İki Sıralı Bağlı Listeyi Birleştirme",
    description: "İki sıralı bağlı listeyi tek bir sıralı liste halinde birleştirme problemi. Birleştirilen liste, düğümlerin yeniden düzenlenmesiyle oluşturulmalıdır.",
    difficulty: "Orta",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki sıralı listeyi baştan sona tek bir geçişte tarayarak yeni bir sıralı liste oluşturmaktır. Her adımda, iki listeden küçük değere sahip düğümü seçer ve yeni listeye ekleriz. Bu işlem, her iki liste de bitene kadar devam eder. Kalan düğümler doğrudan yeni listeye eklenebilir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "İki farklı, zaten sıralanmış öğrenci listesini (bağlı listeler) tek bir büyük, sıralanmış listeye birleştirdiğinizi düşünün. Her iki listenin başından başlayarak, her adımda daha küçük isme sahip öğrenciyi seçer ve yeni listeye ekleniz. Bu işlem, tüm öğrenciler yeni listeye eklenene kadar devam eder.\n\n```javascript\nfunction mergeTwoLists(l1, l2) {\n  if (!l1) return l2;\n  if (!l2) return l1;\n\n  let head;\n  if (l1.val <= l2.val) {\n    head = l1;\n    l1 = l1.next;\n  } else {\n    head = l2;\n    l2 = l2.next;\n  }\n\n  let current = head;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) {\n      current.next = l1;\n      l1 = l1.next;\n    } else {\n      current.next = l2;\n      l2 = l2.next;\n    }\n    current = current.next;\n  }\n\n  if (l1) {\n    current.next = l1;\n  } else if (l2) {\n    current.next = l2;\n  }\n\n  return head;\n}\n```",
      },
    ],
  },
  {
    id: "add-two-numbers",
    title: "İki Sayıyı Toplama (Bağlı Liste)",
    description: "Boş olmayan iki bağlı liste verildiğinde, negatif olmayan iki tamsayıyı temsil eder. Basamaklar ters sırada saklanır ve her düğüm yalnızca tek bir basamak içerir. İki sayıyı toplama ve toplamı bir bağlı liste olarak döndürme problemi.",
    difficulty: "Orta",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki bağlı listeyi aynı anda baştan sona tarayarak basamak basamak toplama işlemi yapmaktır. Her adımda, mevcut düğümlerin değerlerini ve varsa önceki adımdan gelen eldeyi (carry) toplarız. Toplamın birler basamağını yeni bir düğüm olarak oluşturur ve eldeyi bir sonraki adıma taşırız. Bu işlem, her iki liste de bitene ve elde kalmayana kadar devam eder.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "İki uzun sayıyı (bağlı listeler) alt alta yazıp topladığınızı düşünün, ancak basamaklar tersten yazılmış. En sağdaki basamaklardan başlayarak toplama yaparsınız. Eğer toplam 10 veya daha büyükse, bir 'elde'yi sol taraftaki basamağa taşırsınız. Bu işlemi, tüm basamakları toplayana ve elde kalmayana kadar devam ettirirsiniz.\n\n```javascript\nfunction addTwoNumbers(l1, l2) {\n  let dummyHead = new ListNode(0);\n  let current = dummyHead;\n  let carry = 0;\n\n  while (l1 !== null || l2 !== null || carry !== 0) {\n    const val1 = l1 ? l1.val : 0;\n    const val2 = l2 ? l2.val : 0;\n\n    const sum = val1 + val2 + carry;\n    carry = Math.floor(sum / 10);\n    current.next = new ListNode(sum % 10);\n    current = current.next;\n\n    if (l1) l1 = l1.next;\n    if (l2) l2 = l2.next;\n  }\n  return dummyHead.next;\n}\n```",
      },
    ],
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Listenin Sonundan N. Düğümü Kaldırma",
    description: "Bağlı bir listenin sonundan n. düğümü kaldırma problemi. Genellikle iki işaretçi (two-pointers) tekniği kullanılarak çözülür.",
    difficulty: "Orta",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, iki işaretçi kullanmaktır: `fast` ve `slow`. `fast` işaretçiyi `n` adım ileri taşırız. Daha sonra `fast` ve `slow` işaretçilerini aynı anda birer adım ileri taşırız, ta ki `fast` listenin sonuna ulaşana kadar. Bu noktada, `slow` işaretçisi silinecek düğümden bir önceki düğümde olacaktır. Böylece `slow.next = slow.next.next` yaparak düğümü listeden çıkarırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kuyrukta (bağlı liste) sondan belirli bir sıradaki kişiyi (n. düğüm) çıkarmak istediğinizi düşünün. İki kişi (işaretçi) kuyruğa girer. Birinci kişi (fast) `n` adım öne geçer. Sonra her iki kişi de aynı anda birer adım ilerler. Birinci kişi kuyruğun sonuna ulaştığında, ikinci kişi (slow) çıkarılacak kişinin bir önünde duracaktır. Böylece ikinci kişi, çıkarılacak kişiyi kuyruktan çıkarabilir.\n\n```javascript\nfunction removeNthFromEnd(head, n) {\n  let dummy = new ListNode(0);\n  dummy.next = head;\n  let first = dummy;\n  let second = dummy;\n\n  for (let i = 0; i <= n; i++) {\n    first = first.next;\n  }\n\n  while (first !== null) {\n    first = first.next;\n    second = second.next;\n  }\n\n  second.next = second.next.next;\n  return dummy.next;\n}\n```",
      },
    ],
  },
  {
    id: "swap-nodes-in-pairs",
    title: "Çiftler Halinde Düğümleri Değiştirme",
    description: "Verilen bir bağlı listedeki her iki düğümü çiftler halinde değiştirme problemi. Listenin başı döndürülür.",
    difficulty: "Orta",
    category: "bagli-listeler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bağlı listeyi ikişerli gruplar halinde ele almaktır. Her gruptaki ilk ve ikinci düğümün yerini değiştiririz. Bu işlemi, listenin sonuna ulaşana kadar veya değiştirilecek çift kalmayana kadar tekrarlarız. Özyinelemeli veya iteratif yaklaşımlar kullanılabilir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sıraya dizilmiş insanları (bağlı liste) düşünün ve her iki kişinin yerini değiştirmek istiyorsunuz (1. ile 2., 3. ile 4. vb.). Sırayı ikişerli gruplar halinde ele alır ve her gruptaki kişilerin yerini değiştirirsiniz. Bu işlem, tüm çiftler yer değiştirene kadar devam eder.\n\n```javascript\nfunction swapPairs(head) {\n  if (!head || !head.next) return head;\n\n  const newHead = head.next;\n  head.next = swapPairs(newHead.next);\n  newHead.next = head;\n\n  return newHead;\n}\n```",
      },
    ],
  },
  {
    id: "validate-binary-search-tree",
    title: "İkili Arama Ağacını Doğrulama",
    description: "Verilen bir ikili ağacın geçerli bir İkili Arama Ağacı (BST) olup olmadığını belirleme problemi. BST'nin özellikleri: sol alt ağaçtaki tüm düğümlerin değerleri kök düğümün değerinden küçüktür, sağ alt ağaçtaki tüm düğümlerin değerleri kök düğümün değerinden büyüktür ve hem sol hem de sağ alt ağaçlar da birer BST'dir.",
    difficulty: "Orta",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ağacı özyinelemeli olarak gezmektir. Her düğüm için, o düğümün değerinin belirli bir minimum ve maksimum aralıkta olup olmadığını kontrol ederiz. Kök düğüm için bu aralık sonsuzdan sonsuza kadardır. Sol alt ağaca geçerken maksimum değeri mevcut düğümün değeriyle güncelleriz. Sağ alt ağaca geçerken ise minimum değeri mevcut düğümün değeriyle güncelleriz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şirketin hiyerarşik yapısını (ikili ağaç) düşünün. Her yöneticinin (düğüm) altında, belirli bir kriteri (değer) karşılayan çalışanlar (sol alt ağaç) ve başka bir kriteri karşılayan çalışanlar (sağ alt ağaç) vardır. Bir yöneticinin altındaki tüm çalışanların, o yöneticinin kriterlerine uygun olup olmadığını kontrol edersiniz. Bu kontrolü yaparken, her bir çalışanın kendi altındaki çalışanlar için de aynı kriterleri karşılayıp karşılamadığını kontrol edersiniz.\n\n```javascript\nfunction isValidBST(root) {\n  function validate(node, min, max) {\n    if (node === null) {\n      return true;\n    }\n    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {\n      return false;\n    }\n    return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n  }\n  return validate(root, null, null);\n}\n```",
      },
    ],
  },
  {
    id: "lowest-common-ancestor-bst",
    title: "BST'de En Küçük Ortak Ata",
    description: "Verilen bir İkili Arama Ağacında (BST) iki verilen düğümün (p ve q) en küçük ortak atasını (LCA) bulma problemi. LCA, her iki düğümün de alt ağacında bulunduğu en derin düğümdür.",
    difficulty: "Orta",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, BST'nin özelliklerinden yararlanmaktır. Kök düğümden başlayarak, `p` ve `q` düğümlerinin değerlerini kök düğümün değeriyle karşılaştırırız. Eğer her iki düğüm de kökten küçükse, LCA sol alt ağaçtadır. Eğer her iki düğüm de kökten büyükse, LCA sağ alt ağaçtadır. Eğer bir düğüm kökten küçük, diğeri kökten büyükse veya düğümlerden biri kökün kendisiyse, kök düğüm LCA'dır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir aile ağacında (BST) iki akrabanın (p ve q) en yakın ortak atasını (LCA) bulmak istediğinizi düşünün. Ağacın en üstünden (kök) başlayarak, her bir atayı incelersiniz. Eğer iki akraba da mevcut atadan 'daha genç' ise, sol tarafa bakarsınız. Eğer ikisi de 'daha yaşlı' ise, sağ tarafa bakarsınız. Eğer birisi 'daha genç', diğeri 'daha yaşlı' ise veya atalardan biri akrabaların kendisiyse, o ata en yakın ortak atadır.\n\n```javascript\nfunction lowestCommonAncestor(root, p, q) {\n  if (root === null) return null;\n\n  if (p.val < root.val && q.val < root.val) {\n    return lowestCommonAncestor(root.left, p, q);\n  } else if (p.val > root.val && q.val > root.val) {\n    return lowestCommonAncestor(root.right, p, q);\n  } else {\n    return root;\n  }\n}\n```",
      },
    ],
  },
  {
    id: "kth-smallest-element-in-a-bst",
    title: "BST'de K. En Küçük Eleman",
    description: "Bir İkili Arama Ağacının (BST) kökü ve bir tamsayı `k` verildiğinde, BST'deki `k`. en küçük değeri bulma problemi. BST'nin inorder gezinme özelliği kullanılarak çözülebilir.",
    difficulty: "Orta",
    category: "agaclar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bir BST'nin inorder gezinmesinin (sol-kök-sağ) elemanları sıralı bir şekilde vermesidir. Bu nedenle, ağacı inorder olarak gezerken, `k` sayacını takip ederiz. `k` sıfıra ulaştığında, o anki düğümün değeri `k`. en küçük elemandır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sınıftaki öğrencileri (BST'deki düğümler) boy sırasına (değer) göre dizdiğinizi düşünün. `k`. en küçük öğrenciyi bulmak için, en kısa öğrenciden başlayarak sırayla ilerlersiniz. `k`. sıradaki öğrenciye ulaştığınızda, o öğrencinin boyu `k`. en küçük boydur.\n\n```javascript\nfunction kthSmallest(root, k) {\n  const stack = [];\n  let current = root;\n\n  while (current !== null || stack.length > 0) {\n    while (current !== null) {\n      stack.push(current);\n      current = current.left;\n    }\n    current = stack.pop();\n    k--;\n    if (k === 0) {\n      return current.val;\n    }\n    current = current.right;\n  }\n}\n```",
      },
    ],
  },
  {
    id: "binary-tree-level-order-traversal",
    title: "İkili Ağaç Seviye Sırası Gezinme",
    description: "İkili bir ağacın seviye sırası gezinmesini uygulama problemi. Yani, düğümler seviye seviye, soldan sağa doğru ziyaret edilir.",
    difficulty: "Orta",
    category: "agaclar",
    qa: [
      {
        question: "Bu algoritmanın temel mantığı nedir?",
        answer: "Temel mantık, bir kuyruk (queue) veri yapısı kullanarak ağacı seviye seviye gezmektir. Kök düğümü kuyruğa ekleriz. Her adımda, kuyruktan bir düğüm çıkarır, değerini kaydeder ve çocuklarını (varsa) kuyruğa ekleriz. Bu işlem, kuyruk boşalana kadar devam eder. Her seviyedeki düğümleri ayrı bir alt dizi olarak saklarız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir binadaki her kattaki (seviye) tüm odaları (düğümler) gezdiğinizi düşünün. Önce zemin kattaki tüm odaları gezersiniz, sonra birinci kattaki tüm odaları, sonra ikinci kattaki tüm odaları ve bu böyle devam eder. Her katta, o kattaki tüm odaları bitirmeden bir üst kata çıkmazsınız.\n\n```javascript\nfunction levelOrder(root) {\n  const result = [];\n  if (root === null) return result;\n\n  const queue = [root];\n\n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevelNodes = [];\n\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevelNodes.push(node.val);\n\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n    }\n    result.push(currentLevelNodes);\n  }\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "number-of-islands",
    title: "Ada Sayısı",
    description: "Bir '1' (kara) ve '0' (su) ile temsil edilen bir ızgara haritası verildiğinde, ada sayısını döndürme problemi. Bir ada, yatay veya dikey olarak bitişik '1'lerden oluşur.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, ızgarayı tararken '1' (kara) olan bir hücre bulduğumuzda, bu hücrenin bir adanın başlangıcı olduğunu varsaymaktır. Bu adayı tamamen keşfetmek ve aynı adanın parçası olan diğer '1'leri işaretlemek için bir graf arama algoritması (BFS veya DFS) kullanırız. Keşfedilen '1'leri '0'a çevirerek veya 'ziyaret edildi' olarak işaretleyerek tekrar sayılmalarını engelleriz. Her yeni ada başlangıcı bulduğumuzda ada sayacını artırırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir harita üzerinde (ızgara) karaları (1) ve suları (0) işaretlediğinizi düşünün. Kaç tane ayrı kara parçası (ada) olduğunu bulmak istiyorsunuz. Haritayı gezerken, bir kara parçası bulduğunuzda, o kara parçasının tüm bağlantılı kısımlarını işaretlersiniz ve bir ada bulduğunuzu not alırsınız. İşaretlediğiniz yerleri tekrar saymamak için üzerini çizersiniz. Yeni bir kara parçası bulduğunuzda, yeni bir ada sayarsınız.\n\n```javascript\nfunction numIslands(grid) {\n  let numRows = grid.length;\n  if (numRows === 0) return 0;\n  let numCols = grid[0].length;\n  let numIslands = 0;\n\n  function dfs(row, col) {\n    if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === '0') {\n      return;\n    }\n    grid[row][col] = '0'; // Ziyaret edildi olarak işaretle\n    dfs(row + 1, col);\n    dfs(row - 1, col);\n    dfs(row, col + 1);\n    dfs(row, col - 1);\n  }\n\n  for (let r = 0; r < numRows; r++) {\n    for (let c = 0; c < numCols; c++) {\n      if (grid[r][c] === '1') {\n        numIslands++;\n        dfs(r, c);\n      }\n    }\n  }\n  return numIslands;\n}\n```",
      },
    ],
  },
  {
    id: "clone-graph",
    title: "Grafı Klonlama",
    description: "Yönlendirilmemiş bir grafın derin bir kopyasını (klonunu) döndürme problemi. Graf, her düğümün bir değeri ve komşularının bir listesini içeren bir `Node` nesnesi olarak temsil edilir.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, grafı gezerek (BFS veya DFS) her düğümü ve kenarlarını kopyalamaktır. Önemli olan, döngüleri önlemek ve zaten kopyalanmış düğümleri tekrar kopyalamamak için bir 'ziyaret edildi' veya 'kopyalandı' haritası (hash map) kullanmaktır. Bu harita, orijinal düğümleri kopyalarıyla eşleştirir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir arkadaş çevrenizin (graf) tam bir kopyasını oluşturmak istediğinizi düşünün. Her arkadaşınızı (düğüm) tek tek kopyalar ve yeni kopyalar arasında da aynı arkadaşlık bağlarını (kenarlar) kurarsınız. Zaten kopyaladığınız bir arkadaşı tekrar kopyalamamak için bir not defteri tutarsınız.\n\n```javascript\nfunction cloneGraph(node) {\n  if (!node) return null;\n\n  const visited = new Map();\n\n  function dfs(n) {\n    if (visited.has(n.val)) {\n      return visited.get(n.val);\n    }\n\n    const clone = new Node(n.val);\n    visited.set(n.val, clone);\n\n    clone.neighbors = n.neighbors.map(dfs);\n    return clone;\n  }\n\n  return dfs(node);\n}\n```",
      },
    ],
  },
  {
    id: "course-schedule",
    title: "Ders Programı",
    description: "Belirli ön koşulları olan derslerin (graf) tümünü tamamlayıp tamamlayamayacağınızı belirleme problemi. Bu, graf içinde döngü olup olmadığını kontrol etme problemine benzer (topolojik sıralama).",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, dersler arasındaki ön koşul ilişkilerini bir yönlü graf olarak modellemektir. Eğer bu graf bir döngü içeriyorsa, dersleri tamamlamak mümkün değildir (çünkü bir dersi almak için kendisini almanız gerekir). Aksi takdirde, dersleri tamamlamak mümkündür. Bu, topolojik sıralama algoritmaları (örneğin, Kahn'ın algoritması veya DFS tabanlı döngü tespiti) kullanılarak çözülebilir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir yemek tarifi (ders programı) hazırladığınızı düşünün. Bazı adımların (derslar) belirli malzemeleri hazırlamadan (ön koşullar) yapılamayacağını biliyorsunuz. Eğer bir tarifte, bir malzemeyi hazırlamak için o malzemeyi zaten kullanmış olmanız gerekiyorsa, bu tarif yapılamaz (döngü). Aksi takdirde, tarifi tamamlayabilirsiniz.\n\n```javascript\nfunction canFinish(numCourses, prerequisites) {\n  const adj = new Array(numCourses).fill(0).map(() => []);\n  const inDegree = new Array(numCourses).fill(0);\n\n  for (const [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) {\n      queue.push(i);\n    }\n  }\n\n  let coursesTaken = 0;\n  while (queue.length > 0) {\n    const course = queue.shift();\n    coursesTaken++;\n\n    for (const neighbor of adj[course]) {\n      inDegree[neighbor]--;\n      if (inDegree[neighbor] === 0) {\n        queue.push(neighbor);\n      }\n    }\n  }\n  return coursesTaken === numCourses;\n}\n```",
      },
    ],
  },
  {
    id: "graph-valid-tree",
    title: "Graf Geçerli Ağaç",
    description: "n düğümlü ve n-1 kenarlı bir grafın geçerli bir ağaç olup olmadığını belirleme problemi. Bir ağaç, döngü içermeyen ve tüm düğümlerin bağlı olduğu bir grafdır.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, bir grafın ağaç olabilmesi için iki koşulu sağlaması gerektiğidir: 1) Bağlı olması (tüm düğümler arasında bir yol olması) ve 2) Döngü içermemesi. Ayrıca, `n` düğümlü bir ağacın her zaman `n-1` kenarı vardır. Bu koşulları kontrol etmek için BFS veya DFS gibi graf arama algoritmaları kullanılabilir.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki yolların (graf) bir ağaç yapısı oluşturup oluşturmadığını kontrol ettiğinizi düşünün. Eğer her yere ulaşabiliyorsanız (bağlılık) ve hiçbir yerde dönüp dolaşmak zorunda kalmıyorsanız (döngü yok), o zaman yollar bir ağaç yapısı oluşturur.\n\n```javascript\nfunction validTree(n, edges) {\n  if (edges.length !== n - 1) return false; // Bir ağaçta n-1 kenar olmalı\n\n  const adj = new Array(n).fill(0).map(() => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  const queue = [0]; // 0'dan başla\n  visited.add(0);\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    for (const neighbor of adj[node]) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return visited.size === n; // Tüm düğümler ziyaret edildi mi?\n}\n```",
      },
    ],
  },
  {
    id: "find-the-town-judge",
    title: "Kasaba Yargıcını Bulma",
    description: "N kişilik bir kasabada, kasaba yargıcını bulma problemi. Yargıç kimseye güvenmez ve herkes (yargıç hariç) yargıca güvenir. Yalnızca bir kişi bu koşulları sağlar.",
    difficulty: "Kolay",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her kişinin 'güvenme' ve 'güvenilme' sayılarını takip etmektir. Bir dizi veya harita kullanarak her kişi için 'güvenilen kişi sayısı' (in-degree) ve 'güvenen kişi sayısı' (out-degree) tutarız. Kasaba yargıcı, `in-degree`'si `N-1` olan (kendisi hariç herkes ona güvenir) ve `out-degree`'si 0 olan (kimseye güvenmez) kişidir. Bu koşulları sağlayan tek bir kişi olmalıdır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir grup arkadaş arasında (N kişi) herkesin güvendiği ama kimseye güvenmeyen tek bir kişi (yargıç) olduğunu düşünün. Herkesin kime güvendiğini ve kimin kime güvendiğini not alırsınız. Sonunda, kendisine en çok güvenilen ve hiç kimseye güvenmeyen kişiyi bulursunuz.\n\n```javascript\nfunction findJudge(N, trust) {\n  const trustScores = new Array(N + 1).fill(0);\n\n  for (const [a, b] of trust) {\n    trustScores[a]--; // Güvenen kişi\n    trustScores[b]++; // Güvenilen kişi\n  }\n\n  for (let i = 1; i <= N; i++) {\n    if (trustScores[i] === N - 1) {\n      return i;\n    }\n  }\n  return -1;\n}\n```",
      },
    ],
  },
  {
    id: "all-paths-from-source-to-target",
    title: "Kaynaktan Hedefe Tüm Yollar",
    description: "n düğümlü yönlü bir asiklik grafı (DAG) verildiğinde, kaynaktan hedefe giden tüm yolları bulma problemi. Genellikle DFS kullanılarak çözülür.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, kaynaktan başlayarak hedef düğüme ulaşana kadar grafı derinlemesine arama (DFS) ile gezmektir. Her adımda, mevcut yolu takip ederiz. Eğer hedef düğüme ulaşırsak, mevcut yolu sonuç listesine ekleriz. Eğer bir düğümden daha fazla ilerleyemezsek, geri döner ve farklı bir yoldan devam ederiz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki (graf) bir noktadan (kaynak) başka bir noktaya (hedef) giden tüm olası rotaları bulmak istediğinizi düşünün. Bir noktadan başlar, bir yola girer ve o yolun sonuna kadar ilerlersiniz. Eğer hedefe ulaşırsanız, o rotayı not alırsınız. Eğer yol çıkmaza girerse, geri döner ve başka bir yoldan devam edersiniz.\n\n```javascript\nfunction allPathsSourceTarget(graph) {\n  const n = graph.length;\n  const result = [];\n\n  function dfs(node, path) {\n    path.push(node);\n\n    if (node === n - 1) {\n      result.push([...path]); // Yolu kopyala\n    }\n\n    for (const neighbor of graph[node]) {\n      dfs(neighbor, path);\n    }\n    path.pop(); // Geri izleme\n  }\n\n  dfs(0, []); // 0'dan başla\n  return result;\n}\n```",
      },
    ],
  },
  {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Yönlendirilmemiş Grafdaki Bağlı Bileşen Sayısı",
    description: "n düğümlü ve kenarlar listesi verilen yönlendirilmemiş bir grafdaki bağlı bileşen sayısını bulma problemi. BFS veya DFS kullanılarak çözülebilir.",
    difficulty: "Orta",
    category: "graflar",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, grafı gezerek her bir bağlı bileşeni bulmaktır. Bir 'ziyaret edildi' kümesi (set) tutarız. Tüm düğümleri gezerken, eğer bir düğüm daha önce ziyaret edilmemişse, bu yeni bir bağlı bileşenin başlangıcı demektir. Bu düğümden başlayarak bir BFS veya DFS yaparız ve bu bileşendeki tüm düğümleri ziyaret edildi olarak işaretleriz. Her yeni bağlı bileşen bulduğumuzda sayacı artırırız.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir şehirdeki (graf) farklı mahallelerin (bağlı bileşenler) sayısını bulmak istediğinizi düşünün. Her mahalleye tek tek bakarsınız. Eğer bir mahalleye daha önce gitmediyseniz, o mahalleye girer ve o mahalledeki tüm sokakları ve evleri gezersiniz. Gezdiğiniz yerleri işaretlersiniz. Yeni bir mahalleye girdiğinizde, yeni bir mahalle sayarsınız.\n\n```javascript\nfunction countComponents(n, edges) {\n  const adj = new Array(n).fill(0).map(() => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  let count = 0;\n\n  function dfs(node) {\n    visited.add(node);\n    for (const neighbor of adj[node]) {\n      if (!visited.has(neighbor)) {\n        dfs(neighbor);\n      }\n    }\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (!visited.has(i)) {\n      dfs(i);\n      count++;\n    }\n  }\n  return count;\n}\n```",
      },
    ],
  },
  {
    id: "coin-change",
    title: "Madeni Para Değişimi",
    description: "Farklı madeni paralar ve toplam bir miktar verildiğinde, bu miktarı oluşturmak için gereken en az madeni para sayısını hesaplama problemi. Dinamik programlama ile çözülür.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her bir miktar için (0'dan hedeflenen miktara kadar) o miktarı oluşturmak için gereken minimum madeni para sayısını hesaplamaktır. Bir `dp` dizisi oluşturulur; `dp[i]`, `i` miktarını oluşturmak için gereken minimum madeni para sayısını temsil eder. Her miktar için, mevcut madeni paraları kullanarak bu miktara nasıl ulaşılabileceğini kontrol eder ve minimumu güncelleriz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir otomat makinesinden (madeni paralar) belirli bir tutarda (miktar) içecek almak istediğinizi düşünün. En az sayıda madeni para kullanarak bu tutarı nasıl ödeyebileceğinizi hesaplarsınız. Örneğin, 11 TL'lik bir içecek için 1, 2 ve 5 TL'lik madeni paralarınız varsa, 5+5+1 = 11 (3 madeni para) en az yoldur.\n\n```javascript\nfunction coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n```",
      },
    ],
  },
  {
    id: "word-break",
    title: "Kelime Ayırma",
    description: "Boş olmayan bir string'in, verilen bir kelime sözlüğündeki bir veya daha fazla sözcüğün boşlukla ayrılmış bir dizisi olarak segmentlere ayrılıp ayrılamayacağını belirleme problemi. Dinamik programlama ile çözülür.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, string'in her bir önekini (prefix) kontrol etmektir. Bir `dp` dizisi oluşturulur; `dp[i]`, string'in ilk `i` karakterinin sözlükteki kelimelerle segmentlere ayrılıp ayrılamayacağını temsil eder. Eğer `dp[j]` doğruysa (yani string'in ilk `j` karakteri segmentlere ayrılabilir) ve `s.substring(j, i)` sözlükte varsa, o zaman `dp[i]` de doğrudur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir cümleyi (string) kelimelere (sözlükteki kelimeler) ayırıp ayırmayacağınızı kontrol ettiğinizi düşünün. Cümleyi baştan sona okurken, her bir kelimeyi sözlükte ararsınız. Eğer bir kelimeyi bulursanız, cümlenin kalan kısmını da aynı şekilde kelimelere ayırıp ayıramayacağınızı kontrol edersiniz.\n\n```javascript\nfunction wordBreak(s, wordDict) {\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && wordDict.includes(s.substring(j, i))) {\n        dp[i] = true;\n        break;\n      }\n    }\n  }\n  return dp[s.length];\n}\n```",
      },
    ],
  },
  {
    id: "longest-increasing-subsequence",
    title: "En Uzun Artan Alt Dizi",
    description: "Verilen bir tamsayı dizisinde, en uzun artan alt dizinin uzunluğunu bulma problemi. Dinamik programlama veya ikili arama (binary search) ile çözülebilir.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi tararken her eleman için, o elemanla biten en uzun artan alt dizinin uzunluğunu bulmaktır. Dinamik programlama yaklaşımında, bir `dp` dizisi oluşturulur; `dp[i]`, `nums[i]` ile biten en uzun artan alt dizinin uzunluğunu temsil eder. Her `nums[i]` için, kendisinden önceki tüm `nums[j]` (j < i) elemanlarına bakarız. Eğer `nums[i] > nums[j]` ise, `dp[i]`'yi `dp[j] + 1` ile güncelleriz.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir dağcı grubunun (dizi) tırmandığı yükseklikleri (sayılar) düşünün. Her dağcı, kendisinden daha alçakta olan ve kendisinden önce tırmanan dağcıların oluşturduğu en uzun artan tırmanış zincirine (alt dizi) katılmaya çalışır. Her dağcı için, o dağcıyla biten en uzun artan zinciri bulursunuz.\n\n```javascript\nfunction lengthOfLIS(nums) {\n  if (nums.length === 0) return 0;\n\n  const dp = new Array(nums.length).fill(1);\n  let maxLength = 1;\n\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) {\n        dp[i] = Math.max(dp[i], dp[j] + 1);\n      }\n    }\n  }\n  return maxLength;\n}\n```",
      },
    ],
  },
  {
    id: "unique-paths",
    title: "Benzersiz Yollar",
    description: "Bir robotun m x n ızgarasının sol üst köşesinden sağ alt köşesine sadece aşağı veya sağa hareket ederek ulaşabileceği benzersiz yolların sayısını bulma problemi. Dinamik programlama ile çözülür.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her hücreye ulaşmak için kaç benzersiz yol olduğunu hesaplamaktır. Bir hücreye (i, j) ulaşmak için, ya üstündeki hücreden (i-1, j) ya da solundaki hücreden (i, j-1) gelmiş olmalıyız. Dolayısıyla, `dp[i][j] = dp[i-1][j] + dp[i][j-1]` formülüyle çözülür. Başlangıç noktası (0,0) için 1 yol vardır ve ilk satır ve sütundaki hücrelere ulaşmak için sadece 1 yol vardır.\n\n```javascript\nfunction uniquePaths(m, n) {\n  const dp = Array(m).fill(0).map(() => Array(n).fill(1));\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}\n```",
      },
    ],
  },
  {
    id: "house-robber",
    title: "Ev Soyguncusu",
    description: "Bir sokağı temsil eden evler dizisi verildiğinde, her evde belirli bir miktar para vardır. Bitişik evleri soymadan maksimum ne kadar para soyabileceğinizi hesaplama problemi. Dinamik programlama ile çözülür.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, her ev için iki seçeneği değerlendirmektir: ya o evi soyarız ya da soymayız. Eğer o evi soyarsak, bir önceki evi soyamayız ve kazancımıza iki önceki evin maksimum kazancını ekleriz. Eğer o evi soymazsak, kazancımız bir önceki evin maksimum kazancıyla aynı olur. Bu, `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` formülüyle çözülür.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir sokaktaki evlerden (dizi) para (değer) topladığınızı düşünün, ancak yan yana iki evi soyamazsınız. Her ev için, o evi soyup soymayacağınıza karar verirsiniz. Eğer soyarsanız, bir önceki evi soyamazsınız. Eğer soymayacaksanız, bir önceki evin kazancını alırsınız. Amacınız, toplamda en çok parayı toplamak.\n\n```javascript\nfunction rob(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n\n  const dp = new Array(nums.length);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0], nums[1]);\n\n  for (let i = 2; i < nums.length; i++) {\n    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);\n  }\n  return dp[nums.length - 1];\n}\n```",
      },
    ],
  },
  {
    id: "two-sum-ii-input-array-is-sorted",
    title: "İki Sayı II - Giriş Dizisi Sıralı",
    description: "1-indeksli tamsayıların sıralı bir dizisi verildiğinde, hedef bir sayıya eşit olan iki sayıyı bulma problemi. İki işaretçi (two-pointers) tekniği kullanılarak çözülebilir.",
    difficulty: "Orta",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, sıralı dizinin avantajından yararlanmaktır. Dizinin başından (sol işaretçi) ve sonundan (sağ işaretçi) iki işaretçi başlatırız. İşaretçilerin gösterdiği sayıların toplamını hesaplarız. Eğer toplam hedeften küçükse, sol işaretçiyi artırırız (toplamı büyütmek için). Eğer toplam hedeften büyükse, sağ işaretçiyi azaltırız (toplamı küçültmek için). Eğer toplam hedefe eşitse, çözüm bulunmuştur.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir kitaplıktaki kitapları (sayılar) boy sırasına göre (sıralı dizi) dizdiğinizi düşünün. Belirli bir toplam boya (hedef) sahip iki kitap bulmak istiyorsunuz. En kısa kitaptan ve en uzun kitaptan başlarsınız. Eğer ikisinin toplam boyu hedefinizden azsa, daha uzun bir kitap aramak için kısa olanı bırakıp bir sonraki kısa kitaba geçersiniz. Eğer toplam boy hedefinizden fazlaysa, daha kısa bir kitap aramak için uzun olanı bırakıp bir önceki uzun kitaba geçersiniz. Eğer toplam boy hedefinizle aynıysa, doğru kitapları bulmuşsunuz demektir.\n\n```javascript\nfunction twoSumSorted(numbers, target) {\n  let left = 0;\n  let right = numbers.length - 1;\n\n  while (left < right) {\n    const sum = numbers[left] + numbers[right];\n    if (sum === target) {\n      return [left + 1, right + 1]; // 1-indeksli sonuç\n    } else if (sum < target) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  return [];\n}\n```",
      },
    ],
  },
  {
    id: "duplicate-number",
    title: "Tekrarlayan Sayıyı Bulma",
    description: "n + 1 tamsayı içeren bir dizide, her tamsayı [1, n] aralığındadır. Dizide yalnızca bir tekrarlayan sayı olduğunu kanıtlayın ve tekrarlayan sayıyı bulun. Floyd'un Kaplumbağa ve Tavşan (Floyd's Tortoise and Hare) algoritması kullanılarak çözülebilir.",
    difficulty: "Orta",
    category: "diziler",
    qa: [
      {
        question: "Bu problemin temel mantığı nedir?",
        answer: "Temel mantık, diziyi bir bağlı liste gibi düşünmektir; burada her `nums[i]` değeri, bir sonraki düğümün indeksini gösterir. Dizideki tekrarlayan sayı, bu 'bağlı liste' içinde bir döngü oluşturur. Floyd'un Kaplumbağa ve Tavşan algoritması, bu döngüyü ve döngünün başlangıç noktasını (yani tekrarlayan sayıyı) bulmak için kullanılır. İki işaretçi (slow ve fast) kullanılır; slow bir adım, fast iki adım ilerler. Döngü varsa karşılaşırlar. Sonra slow'u başa alıp ikisini de birer adım ilerletiriz, tekrar karşılaştıkları nokta döngünün başlangıcıdır.",
      },
      {
        question: "Günlük hayattan bir örnek ve JavaScript koduyla minik bir örnek gösterir misiniz?",
        answer: "Bir grup insanın (dizi) bir labirentte (bağlı liste) dolaştığını düşünün. Herkesin bir sonraki kişiye (indeks) gitmesi gereken bir talimatı var. Eğer bir kişi yanlışlıkla daha önce gittiği bir yere geri dönerse (tekrarlayan sayı), bu bir döngü oluşturur. İki dedektif (işaretçi) bu labirentte dolaşarak döngüyü ve döngünün başladığı noktayı bulmaya çalışır.\n\n```javascript\nfunction findDuplicate(nums) {\n  let tortoise = nums[0];\n  let hare = nums[0];\n\n  // Döngüdeki bir noktayı bul\n  do {\n    tortoise = nums[tortoise];\n    hare = nums[nums[hare]];\n  } while (tortoise !== hare);\n\n  // Döngünün başlangıcını bul\n  let ptr1 = nums[0];\n  let ptr2 = tortoise;\n  while (ptr1 !== ptr2) {\n    ptr1 = nums[ptr1];\n    ptr2 = nums[ptr2];\n  }\n  return ptr1;\n}\n```",
      },
    ],
  }
]