console.log("Js dosyasi bağlandi.");

// ! Atama operatoru, Aritmetiksel operatorler, arastirma ve azaltma operatoru, karsilastirma operatorleri ve Logitcal (Mantiksal) Operatorler*/

var deneme = 5;
varDeneme = 6;

let myVar = 5;

const myVar1 = 6

// ?+ Aritmetiksel Operatorler

// +, -, *, /, %

const num1 = 10;
const num2= 69

const toplam =num1 + num2 // num1 ve num2 operand, +operator olarak adlandiriliyor.

console.log(toplam);

const msg1 = "Hello"
const msg2 = "World!"

const mesaj = msg1 + " " + msg2
console.log(mesaj);

const firstName = "Koray"
const lastName = "Koksal"

const fullName = firstName + " " + lastName /*? Operatoru String oncatenation islemini de yapar*/
console.log(fullName);

//! Template Literals (Es6 ile gelen bir özellik)
// `merhaba``${değişken} ${değişken2}`;
// `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";

console.log(num3 + num4); //67
console.log(num3 + 7); //67
console.log(7 + num3); // 76 operatorunde string degisken ustun gelir ve donusumu stringe yapar. 76 ciktisini verir.

console.log(typeof (7 + num3)); // string


//! - operatörü

const x = 55;
const y = 44;

console.log(x - y); // 11

const myNum = "1";
console.log(x - myNum); //? 54. - operatöründe string değişkeni numbera çevirir.
const yourNum = "one";
console.log(x - yourNum);//? NaN (Not a Number)
//? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.

console.log(x - "a");//? NaN (Not a Number)

//! * operatörü

let carp1 = 7;
let carp2 = 9;

console.log(carp1 * carp2); //63

console.log("a" * "b");
console.log("a" * 3);

console.log("5" * "9"); //? 45  karakterler numeric ise number gibi davranarak islemi gerceklestiriyor.

console.log(typeof ("5" * "9")); // number

//! / operatoru

const bol1 = 81;
const bol2 = 9;

console.log(bol1 / bol2);// 9

console.log(bol1 / "9"); //9

console.log(bol1 / "dokuz"); // Nan

console.log(bol2 / 0); // Infinity
console.log(-61 / 0); // - Infinity 
//? JavaScript ile sonsuzluk-sınır değerini ifade etmek için Infinity veya -Infinity anahtar kelimesi kullanılır. Bir sayının 0'a bölünmesi Infinity veya –Infinity değeri döndürür.

console.log(0 / 5); // 0
console.log(0 / - 5); // -0

console.log(57/9); // 6.333333333333333

//! % (Mod Alma) operatoru (Bolmedeki kalan sayiyi bulur)

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2); //3

const benimSayim = 967;

//Const birlerBas
const birlerBas = benimSayim % 10;
console.log(birlerBas);//7

//Const yuzlerBas

const onlarBas = (benimSayim % 100) / 10; //6.7
console.log(onlarBas);

const yuzlerBas = benimSayim / 100 //9.67
console.log(yuzlerBas);

//?Bazi hazır fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
// toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

console.log(`YuzlerBas: ${Math.trunc}`)

const randomNum = Math.random();
console.log(randomNum);

const randomNum1 = Math.random() * 100;
console.log(randomNum1 + 1);

console.log(Math.round(Math.random ()*10));


