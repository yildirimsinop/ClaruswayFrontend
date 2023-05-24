//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********")

//! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
}
console.log(car)

//? Objenin okunmasi (Read)
console.log(car.brand) //* 1) . notasyonu ile erişim.
console.log(car.color[0]) //? pink

console.log(car.color)
car.color.forEach((c) => console.log(c))

console.log(car.Engine) //? undefined

//? Objenin degerinin degisitirilmesi (write)
car.speed = 7
car.color = "Morcivert"
car.class = "E"

console.log(car)

//!  Uncaught TypeError: Assignment to constant variable.
// car = {
//   deneme: "1",
// }

//* 2) Square Bracket yontemi ile erisim
//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak
// obje erisimlerinde kullanılabilir.

console.log("ENGINE:", car["engine"]) //? objeAdi["keyAdi"]

// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
// )

// alert(car[myKey])

//* ---------------------------------------------------------
//* 2- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const myCar = new Object()
myCar.brand = "Mercedes"
myCar.model = 2022
myCar.speed = 7

console.log(myCar.speed)
console.log(myCar["model"])
