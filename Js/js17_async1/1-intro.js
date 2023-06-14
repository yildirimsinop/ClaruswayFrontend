//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const delay = (waitingTime) => {
//     const startTime = new Date().getTime ()
    
//     while (new Date ().getTime() < startTime + waitingTime) {}
    
// }

// console.timeEnd ("gecikme");
// console.log("Hello")

// // alert("blokked") //? Blocking 

// delay (4000)
// console.log("hi");

//* ASenkron
//* ------------------------------------------------

console.log("start");

setTimeout(() => {
    console.log("Data fetched");
}, 0)

console.log("start");