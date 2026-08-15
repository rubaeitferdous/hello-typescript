function calculateTax(amount: number | string, taxRate: number): number {
    // Convert amount to number if it's a string
    if(typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return numericAmount * taxRate;
}
const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax('200', 0.2);

//null
const myFuture :number | null = null;


// any
const myVariable: any = 'Hello, World!';

// unknown
let myUnknownVariable: unknown = 42;
myUnknownVariable = 'Hello, TypeScript!'; // This is allowed

//never
function myNeverFunction(): never {
    throw new Error('This function never returns.');
}

// undefined
let myUndefinedVariable;