sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

fruitsNames = [`apple`, `watermelon`, `lemon`];
winter_sports = [];
summer_sports = [];
fruits = [];
star = `***`;

for (i = 0; i < sports.length; i++) {
    if (i < 5) {
        Array.isArray(sports[i]) ? winter_sports.push(sports[i].slice()) : ``;
    } else {
        Array.isArray(sports[i]) ? summer_sports.push(sports[i].slice()) : ``;
    };
};

for (j = 0; j < fruitsNames.length; j++) {
    for (x = 0; x < winter_sports.length && x < summer_sports.length; x++) {
        winter_sports[x][0] == fruitsNames[j] ? (fruits.push(winter_sports[x].splice(0)), winter_sports.splice(x, 1)) : '';
        summer_sports[x][0] == fruitsNames[j] ? (fruits.push(summer_sports[x].splice(0)), summer_sports.splice(x, 1)) : '';
    };
};

console.log(` ${star} Winter sports ${star}`);
for (i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(`: `));
};
console.log(``);
console.log(` ${star} Summer sports ${star}`);
for (i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(`: `));
};
console.log(``);
console.log(` ${star} Fruits ${star}`);
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(`: `));
};