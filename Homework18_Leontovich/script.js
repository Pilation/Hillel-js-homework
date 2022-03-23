
function Product(name, category, type, price) {
    this.name = name;
    this.category = category;
    this.type = type;
    this.price = price;
}

Product.prototype.getInfo = function () {
    return `
// 	Name: ${this.name}.
// 	Category: ${this.category}.
// 	Type: ${this.type}.
// 	Price: $${this.price}.
// `;
};

function HomeProduct(name, category, type, price) {
}

HomeProduct.prototype = Object.create(Product.prototype);
HomeProduct.prototype.category = `Товары для дома`;

function Dishes(name, price) {
    this.name = name;
    this.price = price;
}

Dishes.prototype = Object.create(HomeProduct.prototype);
Dishes.prototype.type = `Посуда`;

let pan = new Dishes("Сковорода", 10);

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}
Furniture.prototype = Object.create(HomeProduct.prototype);
Furniture.prototype.type = `Мебель`;
let table = new Furniture("Стол", 100);

console.log(table.getInfo());
console.log(pan.getInfo());
