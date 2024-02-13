let numbers = [5, 8, 12, 4, 20, 9, 15, 7, 3, 11];


let squareRoots = numbers.map(num => Math.sqrt(num));


let squares = numbers.map(num => Math.pow(num, 2));

let sum = numbers.reduce((acc, num) => acc + num, 0);


let average = sum / numbers.length;


let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

// Sonuçları consola yazdırma
console.log("Karekökler:", squareRoots);
console.log("Kareler:", squares);
console.log("Toplam:", sum);
console.log("Ortalama:", average);
console.log("En Büyük Sayi:", maxNumber);
console.log("En Küçük Sayi:", minNumber);
