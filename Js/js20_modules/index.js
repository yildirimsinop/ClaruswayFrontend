console.log("JS Modules is running")

console.log(window);

//? Module kullaniminda this objesi window nesnesini gostermez.
console.log(this); //? undefined

//? named export (import)
import {CALISMA_SAATI, maas} from "./mymodule.js" 
import {arttir, azalt} from "./mymodule.js" 

console.log(CALISMA_SAATI);
console.log(maas);

console.log(arttir(5));
console.log(azalt(15));

//? export default
import selamVer from "./mymodule.js";

selamVer()