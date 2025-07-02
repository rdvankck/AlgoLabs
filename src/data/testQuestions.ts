export interface TestQuestion {
  id: string;
  type: "classic" | "code";
  question: string;
  options?: string[]; // Sadece klasik sorular için
  correctAnswer: string; // Klasik için doğru seçenek, kod için beklenen çıktı
  starterCode?: string; // Sadece kod soruları için
}

export const testQuestions: TestQuestion[] = [
  {
    id: "klasik-1",
    type: "classic",
    question: "Aşağıdakilerden hangisi bir veri yapısı değildir?",
    options: ["Dizi", "Bağlı Liste", "Algoritma", "Ağaç"],
    correctAnswer: "Algoritma",
  },
  {
    id: "klasik-2",
    type: "classic",
    question: "Bir algoritmanın performansını ölçmek için kullanılan temel metrik nedir?",
    options: ["Bellek Tüketimi", "Zaman Karmaşıklığı", "Kod Satırı Sayısı", "Değişken Sayısı"],
    correctAnswer: "Zaman Karmaşıklığı",
  },
  {
    id: "code-1",
    type: "code",
    question: "Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın.",
    starterCode: "function factorial(n) {\n  // Çözümünüzü buraya yazın\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}",
    correctAnswer: "120", // Örneğin, factorial(5) için beklenen çıktı
  },
  {
    id: "code-2",
    type: "code",
    question: "Verilen bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.",
    starterCode: "function findMax(arr) {\n  // Çözümünüzü buraya yazın\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n      max = arr[i];\n    }\n  }\n  return max;\n}",
    correctAnswer: "10", // Örneğin, findMax([1, 5, 10, 2]) için beklenen çıktı
  },
];