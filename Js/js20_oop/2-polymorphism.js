//* =====================================
//*      OOP -  Polymorphism(ES6)
//*=====================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

console.log("Polymorphism")

class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}
//! Book kalibinda yeni bir ornek (instance) olusturduk.
const book3 = new Book("Stupid Reseaches", "XYZ", 2022)
const book4 = new Book("Dummy Reseaches", "ABC", 2023)
const book5 = new Book("Xcfgr  g gdfg d", "ABC", 2021)

console.log(book3)
console.log(book3.getSummary())
console.log(book4.getSummary())

//? Sub-Class tanimlamasi (Inheritance)

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
    this.month = month
  }
}

const mag1 = new Magazine("Elle", "Allen McElle", 2023, "June")

console.log(mag1)
console.log(mag1.getSummary())
