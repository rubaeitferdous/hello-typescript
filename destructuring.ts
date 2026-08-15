const user: { name: string, age: number, isAdmin: boolean } = {
    name: "John Doe",
    age: 30,
    isAdmin: true
};

// const age = user.age;
// const name = user.name;

// const {age, name} = { name:"John", age : 30, isAdmin: true};
const { age, isAdmin } = user;

const userInfo = ['Rohomat Ali', 26];

const [ , userAge] = userInfo;

