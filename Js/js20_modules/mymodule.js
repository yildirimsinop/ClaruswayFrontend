console.log("My Module Loaded")

//? Named Export
export const CALISMA_SAATI = 40

export let maas = 20000

let sayac = 0
export const arttir = (miktar) => {
sayac += miktar
return sayac
}
export const azalt = (miktar) => {
sayac -= miktar
return sayac
}

//! Export Default (Her bir modul icin sadece bir tane default export edilebilir.)
export default function selamVer() {
    alert("Merhaba FS14")
}