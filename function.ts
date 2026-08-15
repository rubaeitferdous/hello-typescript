// function add(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }



/* 
function has:
parameter
return

*/
function add(num1: number, num2: number):number/* return type */ {
    let total = num1 + num2;
    return total;
}

// add(5, '10'); // error because of type mismatch

const result: number = add(5, 10); // valid




function calculate(number: number[], tax : number, accountant? : string ): number {
    return 44;
}

calculate([1, 2, 3], 0.1, 'kodu');





function doubleOrHalf(num:number, isDouble:boolean):number {
    return isDouble ? num * 2 : num / 2;
}

function add3(num1: number, num2: number): number[] {
    return [num1 + num2];
}

function add4(num1: number, num2: number): { total?: number } {
    let total = num1 + num2;
    return { total: total };
}
function add5(num1: number, name: string): [string, number] {
    return [name, num1];
}