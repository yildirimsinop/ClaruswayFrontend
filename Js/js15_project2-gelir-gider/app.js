//? Selectors

const ekleBtn = document.getElementById ("ekle-btn")
const gelirInput = document.getElementById ("gelir-input")
const ekleFormu = document.getElementById ("ekle-formu")


//? Sonuc tablosu

const gelirinizTd = document.getElementById ("geliriniz")

//? Harcama formu

const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//? Variables

let gelirler = "0"


//?Events

//? Formun submit butonuna basildiginda girer

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()
gelirler = Number(gelirler) + Number(gelirInput.value) //? string eklemeyi engelledik.

localStorage.setItem("gelirler", gelirler)

//? Input degerini sifirladik
ekleFormu.reset()

//? Degisiklikleri sonuc tablosuna yazan fonks.
hesaplaVeGuncelle()

})

//! Sayfa her yuklendikten sonra calisan event
window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler"))
    hesaplaVeGuncelle ()
})

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()

    const yeniHarcama = {id : new Date().getTime(), tarih : tarihInput.value, alan : harcamaAlaniInput.value, miktar : miktarInput.value
    }
    harcamaFormu.reset()
    console.log(yeniHarcama);

})


//? Functions

const hesaplaVeGuncelle = () => {

    gelirinizTd.innerText = gelirler

}
