
let users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

let newArr = [];
users.forEach(function (item) {
    newArr.push(`${item[0]}!`);
});

let anotherNewArr = newArr.map(function (item, index, array) {
    item = item.replace(`!`, `?`);
    return item;
});


function RedRender(arr) {
    let filteredArr = arr.filter(function (item) {
        return item.includes(`red`);
    });

    let result = filteredArr.reduce(function (sum, item) {
        return sum + item[2];
    }, 0);

    let TDs = filteredArr.map(function (item) {
        item = item.flat()
        for (let i = 0; i < item.length; i++) {
            item[i] = `<td>${item[i]}</td>`;
        }
        item.shift(`<tr>`);
        item.push(`</tr>`);
        return item;
    })

    document.write(`
        <style>
        .table,
        td,
        tr {
        border: 1px solid black;
        border-collapse: collapse;
        }
        </style>
        <table>
            <tbody>
                    ${TDs.flat().join(``)}
            </tbody>
            <tfoot>
                <tr>
                    <td>Final summ</td>
                    <td>${result}</td>
                </tr>
            </tfoot>
        </table>
    `);

};

RedRender(users);

