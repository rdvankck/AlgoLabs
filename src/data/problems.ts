export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  category: string;
  starterCode: string;
  examples?: {
    input: string;
    output: string;
    explanation?: string;
  }[];
}

export const problems: Problem[] = [
  {
    id: "iki-sayinin-toplami",
    title: "İki Sayının Toplamı",
    description:
      "Verilen bir tamsayı dizisi ve bir hedef tamsayı verildiğinde, dizideki iki sayının toplamının hedefe eşit olduğu iki sayının indekslerini döndürün.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function twoSum(nums, target) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [2,7,11,15], target = 9`,
        output: `[0,1]`,
        explanation: `nums[0] + nums[1] == 9 olduğu için, [0, 1] döndürüyoruz.`,
      },
      {
        input: `nums = [3,2,4], target = 6`,
        output: `[1,2]`,
        explanation: `nums[1] + nums[2] == 6 olduğu için, [1, 2] döndürüyoruz.`,
      },
      {
        input: `nums = [3,3], target = 6`,
        output: `[0,1]`,
        explanation: `nums[0] + nums[1] == 6 olduğu için, [0, 1] döndürüyoruz.`,
      },
    ],
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Hisse Senedi Alım Satımı İçin En İyi Zaman",
    description: "Bir dizide, i. gün verilen hisse senedinin fiyatı prices[i] ise, karınızı maksimize etmek için bu hisse senedini bir gün alıp farklı bir günde satarak elde edebileceğiniz maksimum karı bulun. Kar elde edemiyorsanız 0 döndürün.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function maxProfit(prices) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `prices = [7,1,5,3,6,4]`,
        output: `5`,
        explanation: `1. günde (fiyat = 1) al ve 5. günde (fiyat = 6) sat, kar = 6-1 = 5.`,
      },
      {
        input: `prices = [7,6,4,3,1]`,
        output: `0`,
        explanation: `Bu durumda kar elde edilemez, 0 döndürülür.`,
      },
      {
        input: `prices = [2,4,1]`,
        output: `2`,
        explanation: `2. günde (fiyat = 2) al ve 4. günde (fiyat = 4) sat, kar = 4-2 = 2.`,
      },
    ],
  },
  {
    id: "contains-duplicate",
    title: "Tekrar Eden Eleman İçeriyor mu?",
    description: "Bir tamsayı dizisi verildiğinde, dizide herhangi bir değerin en az iki kez görünüp görünmediğini döndürün. Her değerin dizide en az iki kez göründüğü durumda true, tüm elemanların farklı olduğu durumda false döndürün.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function containsDuplicate(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [1,2,3,1]`,
        output: `true`,
      },
      {
        input: `nums = [1,2,3,4]`,
        output: `false`,
      },
      {
        input: `nums = [1,1,1,3,3,4,3,2,4,2]`,
        output: `true`,
      },
    ],
  },
  {
    id: "single-number",
    title: "Tek Sayı",
    description: "Her elemanın iki kez göründüğü, ancak bir elemanın yalnızca bir kez göründüğü boş olmayan bir tamsayı dizisi verildiğinde, yalnızca bir kez görünen elemanı bulun.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function singleNumber(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [2,2,1]`,
        output: `1`,
      },
      {
        input: `nums = [4,1,2,1,2]`,
        output: `4`,
      },
      {
        input: `nums = [1]`,
        output: `1`,
      },
    ],
  },
  {
    id: "intersection-of-two-arrays-ii",
    title: "İki Dizinin Kesişimi II",
    description: "İki tamsayı dizisi verildiğinde, kesişimlerini döndürün. Her eleman, her iki dizide de göründüğü kadar kez görünmelidir. Sonuç, herhangi bir sırada olabilir.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function intersect(nums1, nums2) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums1 = [1,2,2,1], nums2 = [2,2]`,
        output: `[2,2]`,
      },
      {
        input: `nums1 = [4,9,5], nums2 = [9,4,9,8,4]`,
        output: `[4,9]`,
        explanation: `[9,4] da kabul edilir.`,
      },
      {
        input: `nums1 = [1,2], nums2 = [1,1]`,
        output: `[1]`,
      },
    ],
  },
  {
    id: "move-zeroes",
    title: "Sıfırları Sona Taşıma",
    description: "Bir dizi verildiğinde, tüm sıfırları dizinin sonuna taşıyın, diğer elemanların göreceli sırasını koruyarak.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function moveZeroes(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [0,1,0,3,12]`,
        output: `[1,3,12,0,0]`,
      },
      {
        input: `nums = [0]`,
        output: `[0]`,
      },
      {
        input: `nums = [1,0,1]` ,
        output: `[1,1,0]`,
      },
    ],
  },
  {
    id: "plus-one",
    title: "Bir Ekleme",
    description: "Büyük bir tamsayıyı temsil eden, boş olmayan bir tamsayı basamakları dizisi verildiğinde, tamsayıyı bir artırın. Basamaklar, tamsayının en önemli basamağı başta olmak üzere soldan sağa doğru depolanır. Tamsayı, sıfır içermez, ancak 0'ın kendisi hariç.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function plusOne(digits) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `digits = [1,2,3]`,
        output: `[1,2,4]`,
        explanation: `123 + 1 = 124.`,
      },
      {
        input: `digits = [4,3,2,1]`,
        output: `[4,3,2,2]`,
        explanation: `4321 + 1 = 4322.`,
      },
      {
        input: `digits = [9]` ,
        output: `[1,0]`,
        explanation: `9 + 1 = 10.`,
      },
    ],
  },
  {
    id: "remove-duplicates-from-sorted-array",
    title: "Sıralı Diziden Tekrarları Kaldırma",
    description: "Sıralı bir tamsayı dizisi nums verildiğinde, her benzersiz elemanın yalnızca bir kez görünmesi için tekrarları yerinde kaldırın. Elemanların göreceli sırası aynı kalmalıdır. Dizinin uzunluğunu döndürün.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function removeDuplicates(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [1,1,2]`,
        output: `2, nums = [1,2,_]`,
        explanation: `Fonksiyonunuz 2 döndürmelidir, ve nums'un ilk iki elemanı 1 ve 2 olmalıdır.`,
      },
      {
        input: `nums = [0,0,1,1,1,2,2,3,3,4]`,
        output: `5, nums = [0,1,2,3,4,_,_,_,_,_]`,
        explanation: `Fonksiyonunuz 5 döndürmelidir, ve nums'un ilk beş elemanı 0, 1, 2, 3 ve 4 olmalıdır.`,
      },
      {
        input: `nums = [1,1,1]`,
        output: `1, nums = [1,_,_]`,
      },
    ],
  },
  {
    id: "remove-element",
    title: "Elemanı Kaldırma",
    description: "Bir tamsayı dizisi nums ve bir tamsayı val verildiğinde, nums'taki val'ın tüm oluşumlarını yerinde kaldırın. Elemanların sırası değiştirilebilir. Dizinin uzunluğunu döndürün.",
    difficulty: "Kolay",
    category: "diziler",
    starterCode: `function removeElement(nums, val) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [3,2,2,3], val = 3`,
        output: `2, nums = [2,2,_,_]`,
        explanation: `Fonksiyonunuz 2 döndürmelidir, ve nums'un ilk iki elemanı 2 olmalıdır.`,
      },
      {
        input: `nums = [0,1,2,2,3,0,4,2], val = 2`,
        output: `5, nums = [0,1,4,0,3,_,_,_]`,
        explanation: `Fonksiyonunuz 5 döndürmelidir, ve nums'un ilk beş elemanı 0, 1, 4, 0, 3 olmalıdır.`,
      },
      {
        input: `nums = [1], val = 1`,
        output: `0, nums = []`,
      },
    ],
  },
  {
    id: "ters-cevirme",
    title: "String'i Ters Çevirme",
    description: "Verilen bir string'i ters çeviren bir fonksiyon yazın.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function reverseString(s) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = ["h","e","l","l","o"]`,
        output: `["o","l","l","e","h"]`,
      },
      {
        input: `s = ["H","a","n","n","a","h"]`,
        output: `["h","a","n","n","a","H"]`,
      },
      {
        input: `s = ["a","b","c"]`,
        output: `["c","b","a"]`,
      },
    ],
  },
  {
    id: "valid-palindrome",
    title: "Geçerli Palindrom",
    description: "Bir cümlenin palindrom olup olmadığını kontrol edin. Yalnızca alfanümerik karakterleri göz önünde bulundurun ve büyük/küçük harf ayrımını göz ardı edin.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function isPalindrome(s) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "A man, a plan, a canal: Panama"`,
        output: `true`,
        explanation: `"amanaplanacanalpanama" bir palindromdur.`,
      },
      {
        input: `s = "race a car"`,
        output: `false`,
        explanation: `"raceacar" bir palindrom değildir.`,
      },
      {
        input: `s = " "`,
        output: `true`,
        explanation: `Boş string geçerli bir palindrom olarak kabul edilir.`,
      },
    ],
  },
  {
    id: "longest-common-prefix",
    title: "En Uzun Ortak Önek",
    description: "Bir string dizisi verildiğinde, tüm string'lerdeki en uzun ortak öneki bulun.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function longestCommonPrefix(strs) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `strs = ["flower","flow","flight"]`,
        output: `"fl"`,
      },
      {
        input: `strs = ["dog","racecar","car"]`,
        output: `""`,
        explanation: `Ortak önek yoktur.`,
      },
      {
        input: `strs = ["apple","apricot","april"]`,
        output: `"ap"`,
      },
    ],
  },
  {
    id: "valid-anagram",
    title: "Geçerli Anagram",
    description: "t'nin s'nin bir anagramı olup olmadığını belirleyin.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function isAnagram(s, t) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "anagram", t = "nagaram"`,
        output: `true`,
      },
      {
        input: `s = "rat", t = "car"`,
        output: `false`,
      },
      {
        input: `s = "listen", t = "silent"`,
        output: `true`,
      },
    ],
  },
  {
    id: "first-unique-character-in-a-string",
    title: "String'deki İlk Tekrarsız Karakter",
    description: "Bir string verildiğinde, string'deki ilk tekrarsız karakterin indeksini bulun. Yoksa -1 döndürün.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function firstUniqChar(s) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "leetcode"`,
        output: `0`,
      },
      {
        input: `s = "loveleetcode"`,
        output: `2`,
      },
      {
        input: `s = "aabb"`,
        output: `-1`,
      },
    ],
  },
  {
    id: "implement-strstr",
    title: "strstr() Uygulaması",
    description: "haystack string'inde needle string'inin ilk oluşumunun indeksini döndürün, veya needle haystack'in bir parçası değilse -1 döndürün.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function strStr(haystack, needle) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `haystack = "hello", needle = "ll"`,
        output: `2`,
      },
      {
        input: `haystack = "aaaaa", needle = "bba"`,
        output: ` -1`,
      },
      {
        input: `haystack = "", needle = ""`,
        output: `0`,
      },
    ],
  },
  {
    id: "valid-parentheses",
    title: "Geçerli Parantezler",
    description: "Yalnızca '(', ')', '{', '}', '[' ve ']' karakterlerini içeren bir string s verildiğinde, giriş string'inin geçerli olup olmadığını belirleyin.",
    difficulty: "Kolay",
    category: "string",
    starterCode: `function isValid(s) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "()"` ,
        output: `true`,
      },
      {
        input: `s = "()[]{}"`,
        output: `true`,
      },
      {
        input: `s = "(J"`,
        output: `false`,
      },
    ],
  },
  {
    id: "fibonacci-dp",
    title: "Fibonacci Sayıları (Dinamik Programlama)",
    description: "Dinamik programlama kullanarak n. Fibonacci sayısını hesaplayın.",
    difficulty: "Kolay",
    category: "dinamik-programlama",
    starterCode: `function fibonacci(n) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `n = 2`,
        output: `1`,
        explanation: `F(2) = F(1) + F(0) = 1 + 0 = 1.`,
      },
      {
        input: `n = 3`,
        output: `2`,
        explanation: `F(3) = F(2) + F(1) = 1 + 1 = 2.`,
      },
      {
        input: `n = 4`,
        output: `3`,
        explanation: `F(4) = F(3) + F(2) = 2 + 1 = 3.`,
      },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Merdiven Çıkma",
    description: "n basamaklı bir merdivene tırmanıyorsunuz. Zirveye ulaşmak için her seferde 1 veya 2 basamak tırmanabilirsiniz. Zirveye ulaşmak için kaç farklı yol olduğunu hesaplayın.",
    difficulty: "Kolay",
    category: "dinamik-programlama",
    starterCode: `function climbStairs(n) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `n = 2`,
        output: `2`,
        explanation: `1. 1 basamak + 1 basamak\n2. 2 basamak`,
      },
      {
        input: `n = 3`,
        output: `3`,
        explanation: `1. 1 basamak + 1 basamak + 1 basamak\n2. 1 basamak + 2 basamak\n3. 2 basamak + 1 basamak`,
      },
      {
        input: `n = 4`,
        output: `5`,
      },
    ],
  },
  {
    id: "maximum-subarray",
    title: "Maksimum Alt Dizi",
    description: "Bir tamsayı dizisi verildiğinde, en büyük toplamı olan bitişik alt diziyi bulun ve toplamını döndürün.",
    difficulty: "Kolay",
    category: "dinamik-programlama",
    starterCode: `function maxSubArray(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,
        output: `6`,
        explanation: `[4,-1,2,1] alt dizisinin toplamı 6'dır.`,
      },
      {
        input: `nums = [1]`,
        output: `1`,
      },
      {
        input: `nums = [5,4,-1,7,8]`,
        output: `23`,
      },
    ],
  },
  {
    id: "reverse-linked-list",
    title: "Bağlı Listeyi Ters Çevirme",
    description: "Verilen bir bağlı listeyi ters çevirin ve ters çevrilmiş listenin başını döndürün.",
    difficulty: "Kolay",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [1,2,3,4,5]`,
        output: `[5,4,3,2,1]`,
      },
      {
        input: `head = [1,2]`,
        output: `[2,1]`,
      },
      {
        input: `head = []`,
        output: `[]`,
      },
    ],
  },
  {
    id: "delete-node-in-linked-list",
    title: "Bağlı Listede Düğüm Silme",
    description: "Tek bağlı bir listede, sadece silinecek düğüme erişiminiz varsa bir düğümü silin. Düğümün listenin son düğümü olmayacağını garanti ediliyor.",
    difficulty: "Kolay",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [4,5,1,9], node = 5`,
        output: `[4,1,9]`,
        explanation: `Verilen düğüm 5'tir. Düğüm 5'in değeri 1 olarak değiştirilir, ardından düğümün next'i 9'a işaret eder.`,
      },
      {
        input: `head = [4,5,1,9], node = 1`,
        output: `[4,5,9]`,
        explanation: `Verilen düğüm 1'dir. Düğüm 1'in değeri 9 olarak değiştirilir, ardından düğümün next'i null'a işaret eder.`,
      },
      {
        input: `head = [1,2,3,4], node = 3`,
        output: `[1,2,4]`,
      },
    ],
  },
  {
    id: "linked-list-cycle",
    title: "Bağlı Liste Döngüsü",
    description: "Bir bağlı liste verildiğinde, listede bir döngü olup olmadığını belirleyin. Bir döngü varsa true, yoksa false döndürün.",
    difficulty: "Kolay",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [3,2,0,-4], pos = 1`,
        output: `true`,
        explanation: `Döngü, 2. düğümde (0-indeksli) başlar.`,
      },
      {
        input: `head = [1,2], pos = 0`,
        output: `true`,
        explanation: `Döngü, 1. düğümde (0-indeksli) başlar.`,
      },
      {
        input: `head = [1], pos = -1`,
        output: `false`,
        explanation: `Döngü yoktur.`,
      },
    ],
  },
  {
    id: "middle-of-the-linked-list",
    title: "Bağlı Listenin Ortası",
    description: "Verilen bir bağlı listenin orta düğümünü döndürün. Eğer listenin çift sayıda düğümü varsa, iki orta düğümden ikincisini döndürün.",
    difficulty: "Kolay",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [1,2,3,4,5]`,
        output: `[3,4,5]`,
        explanation: `Bu listedeki orta düğüm 3'tür.`,
      },
      {
        input: `head = [1,2,3,4,5,6]`,
        output: `[4,5,6]`,
        explanation: `Bu listede iki orta düğüm vardır, 3 ve 4. İkincisini döndürüyoruz, yani 4.`,
      },
      {
        input: `head = [1]`,
        output: `[1]`,
      },
    ],
  },
  {
    id: "remove-duplicates-from-sorted-list",
    title: "Sıralı Listeden Tekrarları Kaldırma",
    description: "Sıralı bir bağlı listenin başı verildiğinde, her elemanın yalnızca bir kez görünmesi için tüm tekrarları silin. Bağlı listenin sıralı başını döndürün.",
    difficulty: "Kolay",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [1,1,2]`,
        output: `[1,2]`,
      },
      {
        input: `head = [1,1,2,3,3]`,
        output: `[1,2,3]`,
      },
      {
        input: `head = []`,
        output: `[]`,
      },
    ],
  },
  {
    id: "binary-tree-inorder-traversal",
    title: "İkili Ağaçta Inorder Gezinme",
    description: "İkili bir ağacın inorder gezinmesini uygulayın.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [1,null,2,3]`,
        output: `[1,3,2]`,
      },
      {
        input: `root = []`,
        output: `[]`,
      },
      {
        input: `root = [1]`,
        output: `[1]`,
      },
    ],
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "İkili Ağacın Maksimum Derinliği",
    description: "İkili bir ağacın maksimum derinliğini bulun. Maksimum derinlik, kök düğümden en uzak yaprak düğüme kadar olan en uzun yol boyunca düğüm sayısıdır.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [3,9,20,null,null,15,7]`,
        output: `3`,
      },
      {
        input: `root = [1,null,2]`,
        output: `2`,
      },
      {
        input: `root = []`,
        output: `0`,
      },
    ],
  },
  {
    id: "same-tree",
    title: "Aynı Ağaç",
    description: "İki ikili ağaç p ve q verildiğinde, aynı olup olmadıklarını kontrol etmek için yazın. İki ikili ağaç, yapısal olarak özdeşlerse ve düğümleri aynı değere sahiplerse aynıdır.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `p = [1,2,3], q = [1,2,3]`,
        output: `true`,
      },
      {
        input: `p = [1,2], q = [1,null,2]`,
        output: `false`,
      },
      {
        input: `p = [1,2,1], q = [1,1,2]`,
        output: `false`,
      },
    ],
  },
  {
    id: "symmetric-tree",
    title: "Simetrik Ağaç",
    description: "Verilen bir ikili ağacın ayna simetrik olup olmadığını kontrol edin. Yani, kök merkezli olarak sol ve sağ alt ağaçları birbirinin aynası olmalıdır.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [1,2,2,3,4,4,3]`,
        output: `true`,
      },
      {
        input: `root = [1,2,2,null,3,null,3]`,
        output: `false`,
      },
      {
        input: `root = [1]`,
        output: `true`,
      },
    ],
  },
  {
    id: "path-sum",
    title: "Yol Toplamı",
    description: "Kökten yaprağa kadar olan bir yolun, verilen targetSum ile aynı toplamı olup olmadığını belirleyin.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22`,
        output: `true`,
        explanation: `Yol 5 -> 4 -> 11 -> 2, toplamı 22'dir.`,
      },
      {
        input: `root = [1,2,3], targetSum = 5`,
        output: `false`,
      },
      {
        input: `root = [], targetSum = 0`,
        output: `false`,
      },
    ],
  },
  {
    id: "invert-binary-tree",
    title: "İkili Ağacı Ters Çevirme",
    description: "Bir ikili ağacı ters çevirin. Yani, her düğümün sol ve sağ çocuklarını değiştirin.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [4,2,7,1,3,6,9]`,
        output: `[4,7,2,9,6,3,1]`,
      },
      {
        input: `root = [2,1,3]`,
        output: `[2,3,1]`,
      },
      {
        input: `root = []`,
        output: `[]`,
      },
    ],
  },
  {
    id: "balanced-binary-tree",
    title: "Dengeli İkili Ağaç",
    description: "İkili bir ağacın dengeli olup olmadığını belirleyin. Dengeli bir ağaç, her düğümün sol ve sağ alt ağaçlarının yüksekliklerinin farkının hiçbir zaman 1'den fazla olmadığı bir ikili ağaçtır.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [3,9,20,null,null,15,7]`,
        output: `true`,
      },
      {
        input: `root = [1,2,2,3,3,null,null,4,4]`,
        output: `false`,
      },
      {
        input: `root = []`,
        output: `true`,
      },
    ],
  },
  {
    id: "minimum-depth-of-binary-tree",
    title: "İkili Ağacın Minimum Derinliği",
    description: "İkili bir ağacın minimum derinliğini bulun. Minimum derinlik, kök düğümden en yakın yaprak düğüme kadar olan en kısa yol boyunca düğüm sayısıdır.",
    difficulty: "Kolay",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [3,9,20,null,null,15,7]`,
        output: `2`,
      },
      {
        input: `root = [2,null,3,null,4,null,5,null,6]`,
        output: `5`,
      },
      {
        input: `root = [1,2]`,
        output: `2`,
      },
    ],
  },
  {
    id: "bfs-graph-easy",
    title: "BFS ile Graf Gezinmesi (Kolay)",
    description: "Verilen bir graf üzerinde Genişlik Öncelikli Arama (BFS) algoritmasını uygulayın ve başlangıç düğümünden tüm erişilebilir düğümleri döndürün.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function bfs(graph, startNode) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': [] }, startNode = 'A'`,
        output: `['A', 'B', 'C', 'D']`,
      },
      {
        input: `graph = { '1': ['2'], '2': ['3'], '3': [] }, startNode = '1'`,
        output: `['1', '2', '3']`,
      },
      {
        input: `graph = { 'X': ['Y', 'Z'], 'Y': [], 'Z': [] }, startNode = 'X'`,
        output: `['X', 'Y', 'Z']`,
      },
    ],
  },
  {
    id: "dfs-graph-easy",
    title: "DFS ile Graf Gezinmesi (Kolay)",
    description: "Verilen bir graf üzerinde Derinlik Öncelikli Arama (DFS) algoritmasını uygulayın ve başlangıç düğümünden tüm erişilebilir düğümleri döndürün.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function dfs(graph, startNode) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': [] }, startNode = 'A'`,
        output: `['A', 'B', 'D', 'C']`,
      },
      {
        input: `graph = { '1': ['2'], '2': ['3'], '3': [] }, startNode = '1'`,
        output: `['1', '2', '3']`,
      },
      {
        input: `graph = { 'X': ['Y', 'Z'], 'Y': [], 'Z': [] }, startNode = 'X'`,
        output: `['X', 'Y', 'Z']`,
      },
    ],
  },
  {
    id: "has-path-graph",
    title: "Grafda Yol Var mı?",
    description: "Yönlendirilmiş bir graf ve iki düğüm (kaynak ve hedef) verildiğinde, kaynaktan hedefe bir yol olup olmadığını belirleyin.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function hasPath(graph, source, destination) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'f': ['g', 'i'], 'g': ['h'], 'h': [], 'i': ['g', 'k'], 'j': ['i'], 'k': [] }, source = 'f', destination = 'k'`,
        output: `true`,
      },
      {
        input: `graph = { 'f': ['g', 'i'], 'g': ['h'], 'h': [], 'i': ['g', 'k'], 'j': ['i'], 'k': [] }, source = 'f', destination = 'j'`,
        output: `false`,
      },
      {
        input: `graph = { 'a': ['b'], 'b': ['c'], 'c': ['d'], 'd': [] }, source = 'a', destination = 'd'`,
        output: `true`,
      },
    ],
  },
  {
    id: "get-node-degree",
    title: "Düğüm Derecesi",
    description: "Verilen bir graf ve bir düğüm için, o düğümün derecesini (komşu sayısı) bulun.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function getNodeDegree(graph, node) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['A', 'D'], 'C': ['A'], 'D': ['B'] }, node = 'A'`,
        output: `2`,
      },
      {
        input: `graph = { '1': ['2'], '2': ['1', '3'], '3': ['2'] }, node = '3'`,
        output: `1`,
      },
      {
        input: `graph = { 'X': [], 'Y': [], 'Z': [] }, node = 'X'`,
        output: `0`,
      },
    ],
  },
  {
    id: "count-edges-graph",
    title: "Grafda Kenar Sayısı",
    description: "Verilen bir grafın toplam kenar sayısını bulun.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function countEdges(graph) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['A', 'D'], 'C': ['A'], 'D': ['B'] }`,
        output: `3`,
        explanation: `A-B, A-C, B-D kenarları. Yönlendirilmemiş graf olduğu için her kenar bir kez sayılır.`,
      },
      {
        input: `graph = { '1': ['2'], '2': ['3'], '3': [] }`,
        output: `2`,
      },
      {
        input: `graph = { 'X': [], 'Y': [], 'Z': [] }`,
        output: `0`,
      },
    ],
  },
  {
    id: "en-uzun-alt-dizi",
    title: "Tekrarlayan Karakterler Olmayan En Uzun Alt Dize",
    description:
      "Tekrarlayan karakterler içermeyen en uzun alt dizinin uzunluğunu bulun.",
    difficulty: "Orta",
    category: "string",
    starterCode: `function lengthOfLongestSubstring(s) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "abcabcbb"`,
        output: `3`,
        explanation: `Cevap "abc" olup, uzunluğu 3'tür.`,
      },
      {
        input: `s = "bbbbb"`,
        output: `1`,
        explanation: `Cevap "b" olup, uzunluğu 1'dir.`,
      },
      {
        input: `s = "pwwkew"`,
        output: `3`,
        explanation: `Cevap "wke" olup, uzunluğu 3'tür. Not: Cevap bir alt dize olmalıdır, alt sıralama değil.`,
      },
    ],
  },
  {
    id: "bfs-graph",
    title: "BFS ile Graf Gezinmesi",
    description: "Verilen bir graf üzerinde Genişlik Öncelikli Arama (BFS) algoritmasını uygulayın ve başlangıç düğümünden tüm erişilebilir düğümleri döndürün.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function bfs(graph, startNode) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F'], 'D': [], 'E': [], 'F': [] }, startNode = 'A'`,
        output: `['A', 'B', 'C', 'D', 'E', 'F']`,
      },
      {
        input: `graph = { 'A': ['B'], 'B': ['C'], 'C': ['A'] }, startNode = 'A'`,
        output: `['A', 'B', 'C']`,
      },
      {
        input: `graph = { '1': ['2', '3'], '2': ['4'], '3': [], '4': [] }, startNode = '1'`,
        output: `['1', '2', '3', '4']`,
      },
    ],
  },
  {
    id: "dfs-graph",
    title: "DFS ile Graf Gezinmesi",
    description: "Verilen bir graf üzerinde Derinlik Öncelikli Arama (DFS) algoritmasını uygulayın ve başlangıç düğümünden tüm erişilebilir düğümleri döndürün.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function dfs(graph, startNode) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = { 'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F'], 'D': [], 'E': [], 'F': [] }, startNode = 'A'`,
        output: `['A', 'B', 'D', 'E', 'C', 'F']`,
      },
      {
        input: `graph = { '1': ['2', '3'], '2': ['4'], '3': [], '4': [] }, startNode = '1'`,
        output: `['1', '2', '4', '3']`,
      },
      {
        input: `graph = { 'X': ['Y'], 'Y': ['Z'], 'Z': [] }, startNode = 'X'`,
        output: `['X', 'Y', 'Z']`,
      },
    ],
  },
  {
    id: "longest-common-subsequence",
    title: "En Uzun Ortak Alt Dizi",
    description: "İki string verildiğinde, bu iki string'in en uzun ortak alt dizisinin uzunluğunu bulun.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function longestCommonSubsequence(text1, text2) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `text1 = "abcde", text2 = "ace"`,
        output: `3`,
        explanation: `LCS is "ace".`,
      },
      {
        input: `text1 = "abc", text2 = "abc"`,
        output: `3`,
        explanation: `LCS is "abc".`,
      },
      {
        input: `text1 = "abc", text2 = "def"`,
        output: `0`,
        explanation: `No common subsequence.`,
      },
    ],
  },
  {
    id: "merge-two-sorted-lists",
    title: "İki Sıralı Bağlı Listeyi Birleştirme",
    description: "İki sıralı bağlı listeyi tek bir sıralı liste halinde birleştirin. Liste, düğümlerin birleştirilmesiyle yapılmalıdır.",
    difficulty: "Orta",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `l1 = [1,2,4], l2 = [1,3,4]`,
        output: `[1,1,2,3,4,4]`,
      },
      {
        input: `l1 = [], l2 = []`,
        output: `[]`,
      },
      {
        input: `l1 = [], l2 = [0]`,
        output: `[0]`,
      },
    ],
  },
  {
    id: "add-two-numbers",
    title: "İki Sayıyı Toplama (Bağlı Liste)",
    description: "Boş olmayan iki bağlı liste verildiğinde, negatif olmayan iki tamsayıyı temsil eder. Basamaklar ters sırada saklanır ve her düğüm yalnızca tek bir basamak içerir. İki sayıyı toplayın ve toplamı bir bağlı liste olarak döndürün.",
    difficulty: "Orta",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `l1 = [2,4,3], l2 = [5,6,4]`,
        output: `[7,0,8]`,
        explanation: `342 + 465 = 807.`,
      },
      {
        input: `l1 = [0], l2 = [0]`,
        output: `[0]`,
      },
      {
        input: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`,
        output: `[8,9,9,9,0,0,0,1]`,
      },
    ],
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Listenin Sonundan N. Düğümü Kaldırma",
    description: "Bağlı bir listenin başı verildiğinde, listenin sonundan n. düğümü kaldırın ve başını döndürün.",
    difficulty: "Orta",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [1,2,3,4,5], n = 2`,
        output: `[1,2,3,5]`,
      },
      {
        input: `head = [1], n = 1`,
        output: `[]`,
      },
      {
        input: `head = [1,2], n = 1`,
        output: `[1]`,
      },
    ],
  },
  {
    id: "swap-nodes-in-pairs",
    title: "Çiftler Halinde Düğümleri Değiştirme",
    description: "Verilen bir bağlı listedeki her iki düğümü çiftler halinde değiştirin. Listenin başını döndürün.",
    difficulty: "Orta",
    category: "bagli-listeler",
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `head = [1,2,3,4]`,
        output: `[2,1,4,3]`,
      },
      {
        input: `head = []`,
        output: `[]`,
      },
      {
        input: `head = [1]`,
        output: `[1]`,
      },
    ],
  },
  {
    id: "validate-binary-search-tree",
    title: "İkili Arama Ağacını Doğrulama",
    description: "Verilen bir ikili ağacın geçerli bir ikili arama ağacı (BST) olup olmadığını belirleyin.",
    difficulty: "Orta",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [2,1,3]`,
        output: `true`,
      },
      {
        input: `root = [5,1,4,null,null,3,6]`,
        output: `false`,
        explanation: `Kök düğümün değeri 5, sağ çocuğu 4'tür, ancak BST kuralına göre sağ çocuk 5'ten büyük olmalıdır.`,
      },
      {
        input: `root = [0,null,-1]`,
        output: `true`,
      },
    ],
  },
  {
    id: "lowest-common-ancestor-bst",
    title: "BST'de En Küçük Ortak Ata",
    description: "Verilen bir ikili arama ağacında (BST) iki verilen düğümün (p ve q) en küçük ortak atasını (LCA) bulun.",
    difficulty: "Orta",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8`,
        output: `6`,
        explanation: `2 ve 8'in LCA'sı 6'dır.`,
      },
      {
        input: `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4`,
        output: `2`,
        explanation: `2 ve 4'ün LCA'sı 2'dir, çünkü 4, 2'nin torunudur.`,
      },
      {
        input: `root = [2,1], p = 2, q = 1`,
        output: `2`,
      },
    ],
  },
  {
    id: "kth-smallest-element-in-a-bst",
    title: "BST'de K. En Küçük Eleman",
    description: "Bir ikili arama ağacının (BST) kökü ve bir tamsayı k verildiğinde, BST'deki k. en küçük değeri bulun.",
    difficulty: "Orta",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [3,1,4,null,2], k = 1`,
        output: `1`,
      },
      {
        input: `root = [5,3,6,2,4,null,null,1], k = 3`,
        output: `3`,
      },
      {
        input: `root = [1], k = 1`,
        output: `1`,
      },
    ],
  },
  {
    id: "binary-tree-level-order-traversal",
    title: "İkili Ağaç Seviye Sırası Gezinme",
    description: "İkili bir ağacın seviye sırası gezinmesini uygulayın. Yani, düğümleri seviye seviye, soldan sağa doğru ziyaret edin.",
    difficulty: "Orta",
    category: "agaclar",
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `root = [3,9,20,null,null,15,7]`,
        output: `[[3],[9,20],[15,7]]`,
      },
      {
        input: `root = [1]`,
        output: `[[1]]`,
      },
      {
        input: `root = []`,
        output: `[]`,
      },
    ],
  },
  {
    id: "number-of-islands",
    title: "Ada Sayısı",
    description: "Bir '1' (kara) ve '0' (su) ile temsil edilen bir ızgara haritası verildiğinde, ada sayısını döndürün. Bir ada, yatay veya dikey olarak bitişik '1'lerden oluşur ve tüm kenarları suyla çevrilidir.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function numIslands(grid) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
        output: `1`,
      },
      {
        input: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
        output: `3`,
      },
      {
        input: `grid = [["0"]]`,
        output: `0`,
      },
    ],
  },
  {
    id: "clone-graph",
    title: "Grafı Klonlama",
    description: "Yönlendirilmemiş bir grafın derin bir kopyasını (klonunu) döndürün. Graf, her düğümün bir değeri (int) ve komşularının bir listesini (Node nesneleri) içeren bir Node nesnesi olarak temsil edilir.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function cloneGraph(node) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = [[2,4],[1,3],[2,4],[1,3]]`,
        output: `[[2,4],[1,3],[2,4],[1,3]]`,
      },
      {
        input: `graph = [[]]`,
        output: `[[]]`,
      },
      {
        input: `graph = []`,
        output: `[]`,
      },
    ],
  },
  {
    id: "course-schedule",
    title: "Ders Programı",
    description: "n ders vardır, 0'dan n-1'e kadar etiketlenmiştir. Bazı derslerin ön koşulları olabilir, örneğin ders 0'ı almak için önce ders 1'i almanız gerekir, bu bir çift olarak [0,1] olarak ifade edilir. Tüm dersleri tamamlayıp tamamlayamayacağınızı belirlemek için true veya false döndürün.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function canFinish(numCourses, prerequisites) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `numCourses = 2, prerequisites = [[1,0]]`,
        output: `true`,
        explanation: `Ders 0'ı aldıktan sonra ders 1'i alabilirsiniz.`,
      },
      {
        input: `numCourses = 2, prerequisites = [[1,0],[0,1]]`,
        output: `false`,
        explanation: `Ders 0'ı almak için ders 1'i almanız gerekir ve ders 1'i almak için ders 0'ı almanız gerekir. Bu bir döngü oluşturur.`,
      },
      {
        input: `numCourses = 3, prerequisites = [[1,0],[2,1]]`,
        output: `true`,
      },
    ],
  },
  {
    id: "graph-valid-tree",
    title: "Graf Geçerli Ağaç",
    description: "n düğümlü ve n-1 kenarlı bir graf verildiğinde, grafın geçerli bir ağaç olup olmadığını belirleyin.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function validTree(n, edges) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]`,
        output: `true`,
      },
      {
        input: `n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]`,
        output: `false`,
      },
      {
        input: `n = 1, edges = []`,
        output: `true`,
      },
    ],
  },
  {
    id: "find-the-town-judge",
    title: "Kasaba Yargıcını Bulma",
    description: "N kişilik bir kasabada, 1'den N'ye kadar etiketlenmiş. Kasaba yargıcı varsa, o kişi: 1. Kimseye güvenmez. 2. Herkes (kasaba yargıcı hariç) kasaba yargıcına güvenir. 3. Yalnızca bir kişi bu koşulları sağlar. Kasaba yargıcının etiketini döndürün, yoksa -1 döndürün.",
    difficulty: "Kolay",
    category: "graflar",
    starterCode: `function findJudge(N, trust) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `N = 2, trust = [[1,2]]`,
        output: `2`,
      },
      {
        input: `N = 3, trust = [[1,3],[2,3]]`,
        output: `3`,
      },
      {
        input: `N = 3, trust = [[1,3],[2,3],[3,1]]`,
        output: `-1`,
      },
    ],
  },
  {
    id: "all-paths-from-source-to-target",
    title: "Kaynaktan Hedefe Tüm Yollar",
    description: "n düğümlü yönlü bir asiklik grafı (DAG) verildiğinde, 0'dan n-1'e kadar etiketlenmiş, kaynaktan hedefe giden tüm yolları bulun ve döndürün.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function allPathsSourceTarget(graph) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `graph = [[1,2],[3],[3],[]]`,
        output: `[[0,1,3],[0,2,3]]`,
      },
      {
        input: `graph = [[4,3,1],[3,2,4],[3],[4],[]]`,
        output: `[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]`,
      },
      {
        input: `graph = [[1],[]]`,
        output: `[[0,1]]`,
      },
    ],
  },
  {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Yönlendirilmemiş Grafdaki Bağlı Bileşen Sayısı",
    description: "n düğümlü ve kenarlar listesi verilen yönlendirilmemiş bir graf verildiğinde, grafdaki bağlı bileşen sayısını bulun.",
    difficulty: "Orta",
    category: "graflar",
    starterCode: `function countComponents(n, edges) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `n = 5, edges = [[0,1],[1,2],[3,4]]`,
        output: `2`,
      },
      {
        input: `n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]`,
        output: `1`,
      },
      {
        input: `n = 4, edges = [[0,1],[2,3]]`,
        output: `2`,
      },
    ],
  },
  {
    id: "coin-change",
    title: "Madeni Para Değişimi",
    description: "Farklı madeni paralar ve toplam bir miktar verildiğinde, bu miktarı oluşturmak için gereken en az madeni para sayısını hesaplayın. Bu miktarı hiçbir madeni para kombinasyonuyla oluşturmak mümkün değilse -1 döndürün.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function coinChange(coins, amount) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `coins = [1,2,5], amount = 11`,
        output: `3`,
        explanation: `11 = 5 + 5 + 1`,
      },
      {
        input: `coins = [2], amount = 3`,
        output: `-1`,
      },
      {
        input: `coins = [1], amount = 0`,
        output: `0`,
      },
    ],
  },
  {
    id: "word-break",
    title: "Kelime Ayırma",
    description: "Boş olmayan bir string s ve bir kelime sözlüğü wordDict verildiğinde, s'nin wordDict'teki bir veya daha fazla sözcüğün boşlukla ayrılmış bir dizisi olarak segmentlere ayrılıp ayrılamayacağını belirleyin. Sözlükteki aynı kelimenin birden çok kez yeniden kullanılabileceğini unutmayın.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function wordBreak(s, wordDict) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `s = "leetcode", wordDict = ["leet","code"]`,
        output: `true`,
        explanation: `"leetcode" "leet code" olarak segmentlere ayrılabilir.`,
      },
      {
        input: `s = "applepenapple", wordDict = ["apple","pen"]`,
        output: `true`,
        explanation: `"applepenapple" "apple pen apple" olarak segmentlere ayrılabilir.`,
      },
      {
        input: `s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]`,
        output: `false`,
      },
    ],
  },
  {
    id: "longest-increasing-subsequence",
    title: "En Uzun Artan Alt Dizi",
    description: "Verilen bir tamsayı dizisinde, en uzun artan alt dizinin uzunluğunu bulun.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function lengthOfLIS(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [10,9,2,5,3,7,101,18]`,
        output: `4`,
        explanation: `En uzun artan alt dizi [2,3,7,101] veya [2,5,7,101] veya [2,5,7,18] vb.`,
      },
      {
        input: `nums = [0,1,0,3,2,3]`,
        output: `4`,
      },
      {
        input: `nums = [7,7,7,7,7,7,7]`,
        output: `1`,
      },
    ],
  },
  {
    id: "unique-paths",
    title: "Benzersiz Yollar",
    description: "Bir robot m x n ızgarasının sol üst köşesinde bulunur. Robot, her seferde sadece aşağı veya sağa hareket edebilir. Robot, ızgaranın sağ alt köşesine ulaşmak için kaç benzersiz yol olduğunu hesaplayın.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function uniquePaths(m, n) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `m = 3, n = 7`,
        output: `28`,
      },
      {
        input: `m = 3, n = 2`,
        output: `3`,
        explanation: `1. Sağ -> Sağ -> Aşağı\n2. Sağ -> Aşağı -> Sağ\n3. Aşağı -> Sağ -> Sağ`,
      },
      {
        input: `m = 7, n = 3`,
        output: `28`,
      },
    ],
  },
  {
    id: "house-robber",
    title: "Ev Soyguncusu",
    description: "Bir sokağı temsil eden negatif olmayan tamsayıların bir listesi olan nums'u içeren bir dizi verildiğinde, her evde belirli bir miktar para vardır. Aynı gece bitişik evleri soymak, güvenlik sistemini tetikleyecektir. Bu gece maksimum ne kadar para soyabileceğinizi hesaplayın.",
    difficulty: "Orta",
    category: "dinamik-programlama",
    starterCode: `function rob(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [1,2,3,1]`,
        output: `4`,
        explanation: `1. evden (1) ve 3. evden (3) soygun yaparak maksimum 1 + 3 = 4 para elde edilebilir.`,
      },
      {
        input: `nums = [2,7,9,3,1]`,
        output: `12`,
        explanation: `1. evden (2), 3. evden (9) ve 5. evden (1) soygun yaparak maksimum 2 + 9 + 1 = 12 para elde edilebilir.`,
      },
      {
        input: `nums = [0]`,
        output: `0`,
      },
    ],
  },
  {
    id: "two-sum-ii-input-array-is-sorted",
    title: "İki Sayı II - Giriş Dizisi Sıralı",
    description: "1-indeksli tamsayıların sıralı bir dizisi numbers verildiğinde, hedef bir sayıya eşit olan iki sayıyı bulun. Bu iki sayının indekslerini 1-indeksli olarak bir tamsayı dizisi olarak döndürün.",
    difficulty: "Orta",
    category: "diziler",
    starterCode: `function twoSumSorted(numbers, target) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `numbers = [2,7,11,15], target = 9`,
        output: `[1,2]`,
        explanation: `2 + 7 = 9. index1 = 1, index2 = 2.`,
      },
      {
        input: `numbers = [2,3,4], target = 6`,
        output: `[1,3]`,
        explanation: `2 + 4 = 6. index1 = 1, index2 = 3.`,
      },
      {
        input: `numbers = [-1,0], target = -1` ,
        output: `[1,2]`,
        explanation: `-1 + 0 = -1. index1 = 1, index2 = 2.`,
      },
    ],
  },
  {
    id: "duplicate-number",
    title: "Tekrarlayan Sayıyı Bulma",
    description: "n + 1 tamsayı içeren bir dizi verildiğinde, her tamsayı [1, n] aralığındadır. Dizide yalnızca bir tekrarlayan sayı olduğunu kanıtlayın. Tekrarlayan sayıyı bulun.",
    difficulty: "Orta",
    category: "diziler",
    starterCode: `function findDuplicate(nums) {
  // Çözümünüzü buraya yazın
}`,
    examples: [
      {
        input: `nums = [1,3,4,2,2]`,
        output: `2`,
      },
      {
        input: `nums = [3,1,3,4,2]`,
        output: `3`,
      },
      {
        input: `nums = [1,1]`,
        output: `1`,
      },
    ],
  },
];