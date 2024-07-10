// // const fs = require('fs')

// // fs.writeFileSync('hello.txt', 'hello Phạm Ngọc Bảo An');

// const hobbies = ['sport', 'subject'];

// // for( hobby of hobbies ) {
// //     console.log(hobby)
// // }

// // const result = hobbies.map((item) => {
// //     return 'lamo' + item
// // })

// // console.log(result)

// const person = {
//     name : "Phạm Ngọc Bảo An",
//     age: 19,
//     greet() {
//         console.log('hello' + 'my name is' + person.name)
//     }
// }

// const printName = ({ name }) => {
//     console.log(name)
// }

// printName(person);

// const [hobby1 , hobby2] = hobbies
// console.log(hobby1, hobby2);

// // const { name, age } = person;

// // console.log(name, age)

const fetchData = () => {
    const promise = new Promise(( resolve, reject ) => {
        setTimeout(() => {
            resolve('bạn đã bị scam')
        }, 1500)
    })
    return promise; 
}

setTimeout( () => {
    console.log('Em đã gửi acc')
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData();
    })
    .then(text_2 => {
        console.log(text_2)
    })
}, 2000)

console.log('hello');
console.log('hi')