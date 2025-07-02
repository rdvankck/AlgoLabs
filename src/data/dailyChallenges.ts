export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  starterCode: {
    [language: string]: string;
  };
  hint: string;
}

export const dailyChallenges: DailyChallenge[] = [
  {
    id: "possible-string-count",
    title: "Olası String Sayısı",
    description: "Bir string içindeki ardışık olmayan, ancak sıralı karakterlerden oluşan alt dizelerin sayısını bulun. Örneğin, 'ace' kelimesi 'apple' kelimesinin bir alt dizesidir çünkü 'a', 'c', 'e' harfleri 'apple' içinde aynı sırada bulunur.",
    examples: [
      {
        input: `word = "apple"`,
        output: "3",
        explanation: `Geçerli alt dizeler: "ale", "ape", "apple".`,
      },
      {
        input: `word = "banana"`,
        output: "4",
        explanation: `Geçerli alt dizeler: "bna", "bana", "bnna", "banana".`,
      },
    ],
    starterCode: {
      JavaScript: `/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    int possibleStringCount(string word) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def possibleStringCount(self, word: str) -> int:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function PossibleStringCount({ word }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>Kelime: {word}</p>
      <p>Olası String Sayısı: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default PossibleStringCount;`,
    },
    hint: "Dinamik programlama kullanmayı düşünün. Her karakter için, o karakterle biten kaç tane geçerli alt dize olduğunu hesaplayabilirsiniz.",
  },
  {
    id: "max-profit-scheduling",
    title: "Maksimum Kârlı İş Planlama",
    description: "Başlangıç zamanları, bitiş zamanları ve kârları verilen bir dizi iş arasından, zamanları birbiriyle çakışmayacak şekilde maksimum toplam kârı getirecek işleri seçin.",
    examples: [
      {
        input: `startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]`,
        output: "120",
        explanation: `1. ve 4. işleri seçerek (zamanları çakışmıyor) 50 + 70 = 120 kâr elde edilir. 1. iş (1-3) ve 4. iş (3-6) çakışmaz.`,
      },
      {
        input: `startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]`,
        output: "150",
        explanation: `1, 4 ve 5 numaralı işleri seçerek 20 + 70 + 60 = 150 kâr elde edebilirsiniz.`
      }
    ],
    starterCode: {
      JavaScript: `/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function JobScheduling({ startTime, endTime, profit }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>Maksimum Kar: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default JobScheduling;`,
    },
    hint: "İşleri bitiş zamanlarına göre sıralayın. Her iş için, o işi yapıp yapmamanın maksimum kârını hesaplayan bir dinamik programlama yaklaşımı kullanın.",
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Tekrarlayan Karakterler Olmayan En Uzun Alt Dize",
    description: "Verilen bir string içinde tekrarlayan karakterler içermeyen en uzun alt dizenin uzunluğunu bulun.",
    examples: [
      {
        input: `s = "abcabcbb"`,
        output: "3",
        explanation: `Cevap "abc" olup, uzunluğu 3'tür.`,
      },
      {
        input: `s = "bbbbb"`,
        output: "1",
        explanation: `Cevap "b" olup, uzunluğu 1'dir.`,
      },
      {
        input: `s = "pwwkew"`,
        output: "3",
        explanation: `Cevap "wke" olup, uzunluğu 3'tür. Not: Cevap bir alt dize olmalıdır, alt sıralama değil.`,
      },
    ],
    starterCode: {
      JavaScript: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function LongestSubstringWithoutRepeatingCharacters({ s }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>String: {s}</p>
      <p>En Uzun Alt Dize Uzunluğu: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default LongestSubstringWithoutRepeatingCharacters;`,
    },
    hint: "Kayar pencere (sliding window) yaklaşımını kullanın. Bir hash seti kullanarak pencere içindeki karakterleri takip edin.",
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "İki Sıralı Dizinin Medyanı",
    description: "Boyutları m ve n olan iki sıralı dizi nums1 ve nums2 verildiğinde, iki dizinin medyanını bulun. Çalışma zamanı karmaşıklığı O(log (m+n)) olmalıdır.",
    examples: [
      {
        input: `nums1 = [1,3], nums2 = [2]`,
        output: "2.0",
        explanation: `Birleştirilmiş dizi = [1,2,3] ve medyan 2'dir.`,
      },
      {
        input: `nums1 = [1,2], nums2 = [3,4]`,
        output: "2.5",
        explanation: `Birleştirilmiş dizi = [1,2,3,4] ve medyan (2 + 3) / 2 = 2.5'tir.`,
      },
    ],
    starterCode: {
      JavaScript: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function MedianOfTwoSortedArrays({ nums1, nums2 }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>Dizi 1: {JSON.stringify(nums1)}</p>
      <p>Dizi 2: {JSON.stringify(nums2)}</p>
      <p>Medyan: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default MedianOfTwoSortedArrays;`,
    },
    hint: "İki diziyi birleştirmeden medyanı bulmak için ikili arama (binary search) kullanın. Medyanın tanımını ve tek/çift eleman sayısına göre nasıl değiştiğini göz önünde bulundurun.",
  },
  {
    id: "container-with-most-water",
    title: "En Çok Su Alan Konteyner",
    description: "n tane negatif olmayan tam sayıdan oluşan bir dizi verildiğinde, her bir sayının koordinat (i, ai) noktasında dikey bir çizgi temsil ettiğini varsayın. (i, 0) ve (i, ai) noktaları arasındaki n dikey çizgi vardır. Koordinat (i, ai) ve (j, aj) noktalarındaki iki çizgi ile x ekseni arasında, en çok su içeren bir konteyner oluşturabilecek şekilde iki çizgi bulun.",
    examples: [
      {
        input: `height = [1,8,6,2,5,4,8,3,7]`,
        output: "49",
        explanation: `Dikey çizgiler [1,8,6,2,5,4,8,3,7] olduğunda, maksimum su alanı 49'dur.`,
      },
      {
        input: `height = [1,1]`,
        output: "1",
        explanation: `Dikey çizgiler [1,1] olduğunda, maksimum su alanı 1'dir.`,
      },
    ],
    starterCode: {
      JavaScript: `/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function ContainerWithMostWater({ height }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>Yükseklikler: {JSON.stringify(height)}</p>
      <p>En Çok Su Alan Konteyner: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default ContainerWithMostWater;`,
    },
    hint: "İki işaretçi (two-pointer) yaklaşımını kullanın. Başlangıçta işaretçileri dizinin en başına ve en sonuna yerleştirin ve alanı hesaplayın. Daha sonra, daha kısa olan çizgiyi içeri doğru hareket ettirerek alanı maksimize etmeye çalışın.",
  },
  {
    id: "longest-palindromic-substring",
    title: "En Uzun Palindromik Alt Dize",
    description: "Verilen bir s string'indeki en uzun palindromik alt dizeyi bulun.",
    examples: [
      {
        input: `s = "babad"`,
        output: "bab",
        explanation: `Ayrıca "aba" da geçerli bir cevaptır.`,
      },
      {
        input: `s = "cbbd"`,
        output: "bb",
        explanation: ``,
      },
    ],
    starterCode: {
      JavaScript: `/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // Çözümünüzü buraya yazın
};`,
      "C++": `class Solution {
public:
    string longestPalindrome(string s) {
        // Çözümünüzü buraya yazın
    }
};`,
      Python: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Çözümünüzü buraya yazın
        pass`,
      React: `import React from 'react';

function LongestPalindromicSubstring({ s }) {
  // Çözümünüzü buraya yazın
  return (
    <div>
      <p>String: {s}</p>
      <p>En Uzun Palindromik Alt Dize: {/* Sonucu buraya render edin */}</p>
    </div>
  );
}

export default LongestPalindromicSubstring;`,
    },
    hint: "Her karakteri veya her iki karakter arasındaki boşluğu merkez alarak genişletme (expand around center) yaklaşımını kullanın. Dinamik programlama da bir başka çözümdür.",
  },
];