const hobby = ["Makan", "Minum", "Balapan", "Coding"];
let index = hobby.indexOf("Minum");
console.log(index)
//Mengecek index keberapa
let result =  Array.isArray(hobby);
console.log(result)
//Mengecek apakah array
let length = hobby.length;
console.log(length)
//Mengetauhi panjang array
hobby.pop();
console.log(hobby)
//Menghapus array terakhir
hobby.push("Berenang");
console.log(hobby)
//Menambahkan array paling terakhir
hobby.shift();
console.log(hobby)
//Mengahpus array pertama
const potong = hobby.slice(0,2)
console.log(potong)
//Memangil array sesuai dengan index
hobby.sort();
console.log(hobby)
//Mengurutkan array berdasarkan abjad
hobby.splice(2, 0, "Badminton", "Lari");
console.log(hobby)
//Menambahkan array pada element tengah index
let text = hobby.toString();
console.log(text)
//Mengubah nilai dari array menjadi string