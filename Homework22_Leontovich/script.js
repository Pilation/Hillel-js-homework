const block = document.querySelector(`.block`);
block.style.left = `${block.offsetLeft}px`
block.style.top = `${block.offsetTop}px`
const x = 10;
let step = x;
let bottomWall = document.querySelector(`.wrapper`).clientHeight - block.offsetHeight / 2;
let rightWall = document.querySelector(`.wrapper`).clientWidth - block.offsetWidth / 2;

function move(item, side, direction, range) {
    if (direction == `back`) {
        item.style[side] = `${parseInt(item.style[side]) - range}px`
    } else {
        item.style[side] = `${parseInt(item.style[side]) + range}px`
    }
}
function jump(item) {
    item.style.transition = `all 0.5s`;
    move(item, `top`, `back`, 250);
    setTimeout(() => {
        move(item, `top`, `forvard`, 250);
    }, 300);
    setTimeout(() => {
        item.style.transition = ``;
    }, 800);
}
function doh(item, direction) {
    item.style.transition = `all 0.5s`;
    move(item, `top`, `back`, 150);
    move(item, `left`, direction, 100);
    setTimeout(() => {
        move(item, `top`, `forvard`, 150);
    }, 300);
    setTimeout(() => {
        item.style.transition = ``;
    }, 800);
}
function bems(item) {
    let message = document.createElement(`span`);
    message.append(`Doh`);
    message.classList.add(`doh`)
    item.append(message)
    setTimeout(() => message.remove(), 1200);
}

document.addEventListener('keydown', e => {
    block.style.height = `${block.offsetHeight}px`;
    e.shiftKey ? step *= 2 : ``;
    if (e.key === `Control`) {
        block.style.transition = `all 0.5s`;
        block.style.height = `${block.offsetHeight / 2}px`;
        block.style.width = `${block.offsetWidth * 1.25}px`;
        setTimeout(() => {
            block.style.transition = ``;
        }, 500);
    }

    switch (e.code) {
        case `KeyD`:
            move(block, `left`, `forvard`, step);
            break;
        case `KeyA`:
            move(block, `left`, `back`, step);
            break;
        // vertical move
        case `KeyW`:
            move(block, `top`, `back`, step);
            break;
        case `KeyS`:
            move(block, `top`, `forvard`, step);
            break;
        case `Space`:
            jump(block);
    }
    step = x;
    parseInt(block.style.top) + step >= bottomWall ? (move(block, `top`, `back`, 100), bems(block)) : ``;
    parseInt(block.style.top) - step <= (0 + block.offsetHeight / 2) ? (move(block, `top`, `forvard`, 100), bems(block)) : ``;
    parseInt(block.style.left) + step >= rightWall ? (doh(block, `back`), bems(block)) : ``;
    parseInt(block.style.left) - step <= (0 + block.offsetWidth / 2) ? (doh(block, `forvard`), bems(block)) : ``;
});
document.addEventListener(`keyup`, e => {
    if (e.key === `Control`) {
        block.style.transition = `all 0.5s`;
        block.style.height = `${block.offsetHeight * 2}px`;
        block.style.width = `${block.offsetWidth / 1.25}px`;
        setTimeout(() => {
            block.style.transition = ``;
        }, 500);
    }
})