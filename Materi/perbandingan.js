//equals
var angka1 = 100;
console.log("equals");
console.log(angka1 = 100);
console.log(angka1 = 20);

//not equals
var sifat = "rajin";
console.log("not equals");
console.log(sifat != "malas");//true
console.log(sifat != "bandel");//true

// strict equals
var angka2 = 8;
console.log("strict equals");
console.log(angka2 == "8");//true, padahal "8" adalah string
console.log(angka2 === "8");//false, karena tipe datanya berbeda
console.log(angka2 === 8);//true

//not strict equals
var angka3 = 11;
console.log("not strict equals");
console.log(angka3 != "11");//false,padahal "11" adalah string
console.log(angka3 !== "11");//true,karena tipe datanya berbeda
console.log(angka3 !== 11);//false

//Kurang/lebih dari dan kurang/lebih dari sama dengan
var number = 17;
console.log("Kurang/lebih dari dan kurang/lebih dari sama dengan");
console.log(number < 20);//true
console.log(number > 17);//false
console.log(number >= 17);//true,karena terdapat sama dengan
console.log(number <= 20);//true
