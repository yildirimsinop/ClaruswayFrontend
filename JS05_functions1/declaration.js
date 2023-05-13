// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
function yazdirMerhaba() {
  // alert("Merhaba FS14")
  console.log("Merhaba FS14")
}

yazdirMerhaba() //! invoke, call
yazdirMerhaba() //! invoke, call
yazdirMerhaba() //! invoke, call

//* ORNEK2:
//*****************************************/

//! Parametre listesi (argüman listesi)
function yazdirParametre(message, name = "Cohort14") {
  console.log(message, name)
}
yazdirParametre("Hello", "FS15")
yazdirParametre("Salut", "FS16")
yazdirParametre("Hola", "FS17")
yazdirParametre(12.4, true)

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Cohort14' atanmistir.

yazdirParametre("Hallo")
yazdirParametre("Ehlen")
yazdirParametre()

//* ORNEK3:
//******************************************/
console.log(new Date()) //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob
  // console.log(`${name} is ${age} years old`)
  return age
}

console.log(calculate("Ahmet", 1990))
const ismetAge = calculate("İsmet", 1890)
console.log("Ismet's Age:", ismetAge)

//* ORNEK4:
//******************************************/

function add(num1, num2) {
  const sum = num1 + num2
  return sum
}

function addShort(num1, num2) {
  return (num1 + num2) / (num1 * num2)
}

const result1 = add(3, 5)
const result2 = add(5, 9)
const result3 = addShort(5, 9)

console.log(result1, result2)
console.log(result3)

//* ORNEK5:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.