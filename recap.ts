const books: string[] = ['book1', 'book2', 'book3'];
const runs: number[] = [10, 20, 30, 40];

const shoppingList: [string, number] = ['milk', 2.5];


const book: {
    name: 'chemistry',
    author: string,
    price: number,
    pages: number,
    isUsed?: boolean  // ? for optional property
} = {
    name: 'chemistry',
    author: 'hajari & naag',
    price: 200,
    pages: 400,
    // isUsed: true
}

// book.name = 'physics'; // not allowed because name is a literal type.