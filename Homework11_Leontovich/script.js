
let animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

let food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

let universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

document.write(`<style>
.table,
td,
tr {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>`);

function getInfo(array = universes, title = `Animals`) {
    let arrA = [];
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            Array.isArray(array[i][j]) ? arrA.push(`<td>`, array[i][j].slice().join(`; `), `</td>`) : arrA.push(`<td>`, array[i].slice(j, j + 1), `</td>
        `);
            //! If вместо тернарного для читабельности 
            //     if (Array.isArray(array[i][j])) {
            //         arrA.push(`<td>`, array[i][j].slice().join(`; `), `</td>`);
            //     } else {
            //         arrA.push(`<td>`, array[i].slice(j, j + 1), `</td>
            // `);
            //     };
        };
        arr.push(`
    <tr>
        `, arrA.join(``), `
    </tr>`);
        arrA.splice(0);
    }
    return `<table>
<caption style="font-weight:bold">${title} info</caption>
<tbody>
${arr.join(``)}
</tbody>
</table>`;
}

document.write(getInfo());