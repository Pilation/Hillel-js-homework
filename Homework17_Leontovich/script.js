
let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];


let Kitchen = { category: `kitchen` };
let Devices = { category: `devices` };
let Cosmetics = { category: `cosmetics` };

let Products =
{
    type: 'desktop',
    price: [100, 1000]
};

const BornFromParent = (arr, parent) => {
    let NewArr = arr.map(item => {
        let newObj = Object.create(parent);
        for (key in item) {
            newObj[key] = Array.isArray(item[key]) ? item[key].join(`-`) : item[key];
        }
        return newObj;
    })
    return NewArr;
}

let NewKitchenProducts = BornFromParent(kitchenProducts, Kitchen);
let NewDevicesProducts = BornFromParent(devicesProducts, Devices);
let NewCosmeticsProducts = BornFromParent(cosmeticsProducts, Cosmetics);



const Render = (...args) => {
    const UppercaseFirstLetter = (...args) => {
        let UppercaseFirstLetterArr =
            args.map(arr => {
                arr.map(item => {
                    item.type = item.type.charAt(0).toUpperCase() + item.type.slice(1);
                    return item;
                });
                return arr;
            });
        return UppercaseFirstLetterArr;
    }
    const RenderObjects = (arr) => {
        let currentArr = arr.map(item => {
            return `<div class="card">
            <img class="picture" src="img/${item.category}/${item.type}.svg"></img>
            <span>Name: <span style="font-weight:bold">${item.type}</span></span>
            <span>Price: <span style="font-weight:bold">${item.price}</span></span>
            </div>`
        })
        return `<div class="product-line">
        <h2 class="category">Category: ${arr[0].category}</h2>
        ${currentArr.join(``)}
        </div>`
    }
    UppercaseFirstLetter(...args);
    let RenderArr = [];
    args.forEach(item => RenderArr.push(RenderObjects(item)));
    return `<div class="wrapper">${RenderArr.join(``)}</div>`;
}
document.write(Render(NewCosmeticsProducts, NewDevicesProducts, NewKitchenProducts));