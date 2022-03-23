let amount = 100;
let monday = [
    ['Write a tutorial', 360],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 60]
];
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно менее 2-х часов или 2 часа ровно.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>
// Используем только методы forEach/map/filter/join (по надобности, все не нужно).


function Table(arr) {
    function copiedArray(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr.push(copiedArray(arr[i]));
            } else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    let arrWork = copiedArray(arr);

    let newArr = arrWork
        .filter(function (item) {
            return item[1] / 60 <= 2;
        })
        .map(function (item) {
            item[1] /= 60;
            item.push(item[1] * amount);
            return item;
        })
        .find(function (item) {
            return Array.isArray(item);
        })
        .map(function (item) {
            item = `<td>${item}</td>`;
            return item;
        })
        .join(``);

    document.write(`<style>
    .table,
    td,
    tr {
    border: 1px solid black;
    border-collapse: collapse;
    }
    </style>`);

    document.write(`
    <table>
	<tbody>
    <tr>${newArr}</tr>
    </tbody>
    </table>`);
}

Table(monday);