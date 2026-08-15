const device = {
    name: "iPhone",
    price: 999,
    color: "black",
    storage: "128GB",
    type: 'smartphone'
};

const {name:deviceName, price:devicePrice, ...DeviceInfo} = device;

const numbers3:number[] = [1, 2, 3, 4, 5];
const NewNumbers:number[] = [8, 9, 10];
const closeFriends:string[] = ['Jodu', 'Modu', 'Kodu'];

const allNumbers:number[] = [...numbers3, ...NewNumbers];
const allFriends:string[] = ['Jodu', 'Modu', 'Kodu', ...closeFriends];

// email? email : 'No email provided'