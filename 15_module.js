// ES6 (ECMAScript 2015) mein "modules" ek feature hain jo JavaScript mein code ko organized aur reusable banane ke liye use hota hai. Modules allow karte hain aapko code ko different files mein divide karne aur phir use import/export statements ke through alag-alag files mein use karne.

// Modules ko use karne se aapka code maintainable, scalable, aur easier to debug ban jata hai.

// Kuch key concepts modules ke baare mein hain:

// Exporting: Modules mein, aap kisi bhi variable, function, ya class ko export kar sakte hain taaki wo dusre files mein use kiya ja sake. Export karne ke liye, export keyword ka use kiya jata hai.

export function add(a, b) {
    return a + b;
  }

//   Importing: Exported modules ko use karne ke liye, aap unhein import kar sakte hain dusre files mein. import keyword ka use kiya jata hai.

import { add } from './exampleModule.js';

console.log(add(2, 3)); // Output: 5

// Default Exports: Ek module mein sirf ek hi default export hota hai. Default export ko import karne ke liye aap import statement mein curly braces ke bina use kar sakte hain.
  
// exampleModule.js file
export default function greet(name) {
    console.log(`Hello, ${name}!`); 
  }
  