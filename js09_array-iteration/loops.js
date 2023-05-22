//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]

let sum = 0
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    // console.log(sum);
    
}

console.log("AVG:", (sum / grades.length).toFixed(2));

//?-------------- ÖRNEK -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

const lessThan50 = []
const equalOrBiggerThan50 = []

for (let j =0; j < grades.length; j++) {
    if (grades[j]<50) {
        lessThan50.push(grades[j])
    } else {
        equalOrBiggerThan50.push(grades[j])
    }
}

console.log(lessThan50);
console.log(equalOrBiggerThan50);

const lessThan51 = []
const equalOrBiggerThan51 = []

const grades2 = [55, 77, 23, 89, 100, 44, 33, 45]

for (let i in grades2) {
    grades2 [i] < 51 ? lessThan51.push(grades2[i]) : equalOrBiggerThan51.push(grades2[i])
}
console.log(lessThan51);
console.log(equalOrBiggerThan51);

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

