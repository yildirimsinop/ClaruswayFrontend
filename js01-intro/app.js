// //* Javascript Kodu */
// console.log("Localde bulunan script calisti")

// alert("Bu bir alert dir") //? Alert uygulamayi bloklar. Yani uygulamayi keser.

// karar = confirm ("Emin misiniz E/H") // Bunlar bir (Blocking Code'dir. alert ve confirm gibi)
// console.log(karar)

// console.warn ("Bu bir uyaridir")

// console.error ("Eyvah hata olustu")

console.log ("APP JS RUNNING")

const pi = 3.14
console.log (pi)
console.log(typeof pi);

const sayi1 = "3"
console.log(typeof sayi1);

// ! Bu bir hata
// const deneme
// console.log(denem);

// 
//! const olusturulmus bir degiskene sonradan atama yapilamaz
// const number1 = 5
// number1 = 7


const varMi = true
const isOpen = false

console.log(varMi, typeof varMi);

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let language = "Java"
console.log(language, typeof language);

language = "Javascript"
console.log(language);

language = true
console.log(language);

language = 3.14
console.log(language);

let adet; // Js bir degiskenin turunu atanan degere gore belirler. Eger atama olmadiysa turu undefined olarak belirlenmis olur.
console.log (adet) // undefined

adet = 23
console.log(adet);

{
    // Bir blok icerisinde degisken olusturduk
    let localDegisken = 5
    localDegisken = localDegisken + 1
    console.log(localDegisken);
}

console.log(localDegisken);

