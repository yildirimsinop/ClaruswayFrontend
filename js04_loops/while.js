// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i < 10) {
  console.log(i)
  i++
}
console.log("BYE");
//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise kullaniciyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.




// if (not<0 || not>100 ) {
  //   console.log("Not 0'dan kucuk veya 100'den buyu olamaz");
  // }
  
  
  //!---- WHILE -----------
  // let not = prompt ("Lutfen 0-100 arasinda bir not giriniz: ")
  // while (not<0 || not>100 ) {
    //   console.log("Not 0'dan kucuk veya 100'den buyu olamaz");
    //   not = prompt ("Lutfen 0-100 arasinda bir not giriniz :")
    // }
    
    // console.log("Notunuz:", not);
    
    //!----DO- WHILE -----------
    
    let not
    
    do {
      not = prompt ("Lutfen 0-100 arasinda bir not giriniz: ")
      
      if (not<0 || not>100 ) {
        alert ("Not 0'dan kucuk veya 100'den buyuk olamaz")
      }
      
    } while (not<0 || not>100) 
    
    console.log("Notunuz : ", not );


    //!----FOR -----------

    