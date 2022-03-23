
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

    let TDs = [];
    function tdArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                tdArr(arr[i]);
            } else {
                TDs.push(`<td>${arr[i]}</td>`);
            }
        }
    }

    for (let i = 0; i < filteredArr.length; i++) {
        TDs.push(`<tr>`)
        tdArr(filteredArr[i]);
        TDs.push(`</tr>`)
    }

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
                    ${TDs.join(``)}
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

