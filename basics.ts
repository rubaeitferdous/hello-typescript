/* 
variables
conditionals
loops
object
arrow functions
*/

const brand:string = "Apple";
if (brand === "Samsung") {
  const isExpensive:boolean = true;
}


//inference:implicit type assignment
for (let i:number = 0; i < 5; i++) {

}

const letters:string[] = ['a', 'b', 'c', 'd', 'e'];

for (const letter of letters) {
  console.log(letter.toUpperCase()); // error because toFixed is not a method of string
}