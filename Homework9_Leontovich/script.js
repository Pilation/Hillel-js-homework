
hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = hero.concat(native.reverse(), destination.reverse());

rainbow[0] = `Richard`;
rainbow[rainbow.length - 1] = `Vain`;
rainbow.splice(3, 0, `Gave`, `Battle`);
// console.log(rainbow);

colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`];
colors.reverse();
// console.log(colors);
for (i = 0; i < rainbow.length; i++) {
    console.log(`current rainbow = ${rainbow[i]}`);
    for (j = 0, color = 0; j < colors.length; j++) {
        // console.log(`current colors = ${colors[j][0]}`);
        if (rainbow[i].toLowerCase()[0] === colors[j][0]) {
            color = colors[j];
            // console.log(`color = ${color}`);
            break;
        };
    }
    document.write(`
    <div style="width:fit-content;display:inline-block">
    <div style="margin:0 auto;width:40px;height:40px;border-radius:50%;background-color:${color};"></div>
    <span style="display:inline-block;min-width:40px;text-align:center;margin-right:5px;position:relative;font-size:30px;">${rainbow[i]}</span>
    </div>`
    );
}