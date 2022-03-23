Array.prototype.renderList = renderList;

const flowers = ['🪴', '🌷', '🌾', '🌺'];
const animals = [
    {
        name: 'dog',
        icon: '🐶'
    },
    {
        name: 'cat',
        icon: '🐱'
    },
    {
        name: 'hamster',
        icon: '🐹'
    },
    {
        name: 'rabbit',
        icon: '🐰'
    }
];
let panimals = {
    name: 'dog',
    icon: '🐶'
};

function renderList() {
    let object = this;
    let NewArr = [`<ul>`,];
    object.forEach(function (item) {
        if (typeof item === `object`) {
            NewArr.push(`<li>`);
            for (key in item) {
                let x = key.toString();
                x = x.charAt(0).toUpperCase() + x.slice(1);
                NewArr.push(`${x}: ${item[key]}. `)
            }
            NewArr.push(`</li>`);
        } else {
            NewArr.push(`<td>${item}</td>`);
        }
    });
    NewArr.push(`</ul>`);
    return NewArr.join(``);

}

document.write(animals.renderList());
document.write(flowers.renderList());
