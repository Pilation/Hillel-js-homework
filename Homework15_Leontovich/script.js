// Создать объект с такой структурой:

// obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// } 
// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

let object = {};
object.x = 10;
object.y = 20;
object.inner = {};
object.inner.x = 20;
object.inner.z = 30;
object.foo2 = { k: 23, p: 13 };
console.log(object);

function flatObj(obj) {
    let newObj = {};
    for (let el in obj) {
        if (typeof obj[el] === `object`) {
            for (let item in obj[el]) {
                newObj[item] = obj[el][item];
            }
        } else {
            newObj[el] = obj[el];
        }
    }
    return newObj;
};

console.log(flatObj(object));
