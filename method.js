//  10 methods bawaan javascript

// 1.JSON.parse(): mengubah string JSON menjadi objek JavaScript.
// jenis = string
// sifat = non mutasi
let data = '{"nama": "zikri", "umur": 24}';
let objek = JSON.parse(data);
console.log(objek.nama);

// 2.concat() menggabungkan beberapa array atau nilai menjadi satu array dan mengurutkan nya
// jenis = array
// sifat = -nonmutasi
const array1 = [1, 2, 3];
const array2 = [5, 8, 7];
const newArray = array1.concat(array2);
console.log(newArray);

// 3.unshift() menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang array yang baru.
// jenis = array
// sifat = mutasi
let arr = [5, 6, 7];
arr.unshift(4); // Menambahkan elemen 4 di awal array
console.log(arr);

// 4.pop() menghapus dan mengembalikan elemen terakhir dari sebuah array.
// jenis = array
// sifat = mutasi
const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// 5.slice() memotong string menjadi potongan kecil.
// jenis = string
// sifat = non mutasi
const str = "JavaScript is awesome!";
const slicedStr = str.slice(0, 10);
console.log(slicedStr);

// 6.replace(): mengganti teks dalam sebuah string dengan teks lain.
// jenis = String
// sifat = non mutasi
let myString = "Halo dunia!";
let newString = myString.replace("dunia", "Selamat Pagi");
// console.log(newString);

// 7.splice() untuk menambah, menghapus, dan mengganti elemen pada suatu array. 
// Metode ini mengubah array asli dan mengembalikan array baru yang berisi elemen-elemen yang dihapus.
//  jenis = array
//  sifat = mutasi
const num = [1, 2, 3, 4, 5];
num.splice(2, 1); // Menghapus 1 elemen mulai dari indeks ke-2
// console.log(num);
num.splice(2, 0, 3, 6, 7) // menambahkan elemen dari indeks ke-2
// console.log(num);
num.splice(2, 1, 4, 5,) //  mengganti elemen dari indeks ke-2
// console.log(num);

// 8.includes() memeriksa apakah sebuah string atau elemen tertentu ada di dalam array atau tidak.
// jenis = string dan array
// sifat = non mutasi
const text = "Hallo World!"

const check = text.includes('World')
// console.log(check) // Output: true

const check2 = text.includes('Wellcome')
// console.log(check2) // Output: false

// 9.toFixed() membulatkan sebuah bilangan desimal menjadi jumlah digit desimal tertentu
// jenis = number
// sifat = mutasi
let number = 10.9876;
// console.log(number.toFixed(2));

// 10.Math.random() menghasilkan angka acak antara 0 dan 1.
// pada contoh soal menghasilkan angka acak antara 0 dan 10
// jenis = number
// sifat = non mutasi
let numRandom = Math.random() * 10;
// console.log(numRandom);

// output