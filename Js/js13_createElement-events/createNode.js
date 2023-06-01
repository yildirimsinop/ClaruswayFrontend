console.log("**** CREATE NODE ****")

const langInput = document.querySelector("#input")

//? 1- olustur
const newP = document.createElement("p")

//? 2-Eger text tabanlı bir element ise text dugumunu olustur
// const text = document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode(langInput.value)

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newP.appendChild(text)

console.log(newP)
//? 4- Yeni elementin DOM tree baglanmasi (append)

//* main bolumun en sonuna yeni elementi ekler.
const main = document.querySelector("main")
main.appendChild(newP)

//* item-list section'nın onune yeni elementi ekler.
const itemListSection = document.querySelector(".item-list")
itemListSection.before(newP)
