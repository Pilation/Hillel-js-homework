const controller = async (file, method = "GET", obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }
    if (obj)
        options.body = JSON.stringify(obj);
    let request = await fetch(file, options);
    if (request.ok) {
        return request.json();
    } else {
        throw new Error(request.statusText);
    }
}

const generateHero = (form) => {
    let currentHero = {
        favourite: false,
    };
    for (let key in form) {
        if (+key >= 0) {
            if (form[key].type === `text`) {
                currentHero.name = form[key].value;
            }
            if (form[key].type === `checkbox`) {
                currentHero.favourite = form[key].checked;
            }
            if (form[key].type === `select-one`) {
                currentHero.comics = form[key].value;
            }

        }
    }
    return currentHero;
}

const CreateRow = (hero) => {
    let parameters = [];
    parameters.push(`<td>${hero.name}</td>`)
    parameters.push(`<td>${hero.comics}</td>`)
    parameters.push(`<td><label class="heroFavouriteInput">Favourite: <input type="checkbox" ${hero.favourite ? `checked` : ``}></label></td>`)
    parameters.push(`<td><button>Delete</button></td>`)
    let row = document.createElement(`tr`);
    row.innerHTML = `\n${parameters.join(`\n`)}\n`;
    row.setAttribute(`row-id`, `${hero.id}`)
    return row;
}

const RenderTable = (receivedHeroes, appendElement) => {
    if (Array.isArray(receivedHeroes)) {
        receivedHeroes.forEach(e => {
            appendElement.append(CreateRow(e));
        });
    } else {
        appendElement.append(CreateRow(receivedHeroes))
    }
}

const RenderOptions = (receivedOptions, appendElement) => {
    receivedOptions.forEach(e => {
        let option = document.createElement(`option`);
        if (+e.id === 1) {
            option.setAttribute(`selected`, `selected`)
        }
        option.setAttribute(`value`, e.name)
        option.innerHTML = `${e.name}`
        appendElement.append(option);
    });
}

const Reset = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const NamesCheck = (heroes) => {
    let namesArray = []
    for (let key in heroes) {
        namesArray.push(heroes[key].name)
    }
    return namesArray
}

const API = "https://61e82024e32cd90017acc076.mockapi.io/comics/";
(async () => {
    try {
        const heroesForm = document.querySelector(`#heroesForm`);
        let universes = await controller(`${API}universes`);
        let heroes = await controller(`${API}heroes`);
        const select = document.querySelector(`select[data-name="heroComics"]`);
        const tableBody = document.querySelector(`#heroesTable tbody`);
        RenderOptions(universes, select)
        RenderTable(heroes, tableBody);
        // !Баловство
        // setInterval(async () => {
        //     universes = await controller(`${API}universes`);
        //     heroes = await controller(`${API}heroes`);
        //     Reset(tableBody);
        //     RenderTable(heroes, tableBody);
        //     Reset(select);
        //     RenderOptions(universes, select)
        // }, 10000);
        // !Баловство
        heroesForm.addEventListener(`submit`, async (e) => {
            e.preventDefault();
            let currentHero = generateHero(heroesForm);
            if (NamesCheck(heroes).includes(currentHero.name)) {
                alert(`${currentHero.name} already exists`)
            } else {
                const PostHero = await controller(`${API}heroes`, `POST`, currentHero);
                heroes = await controller(`${API}heroes`);
                RenderTable(PostHero, tableBody)
            }
        });

        const DeleteButton = document.querySelectorAll(`tr button`);
        DeleteButton.forEach(item => {
            item.addEventListener(`click`, async (e) => {
                const RowToDelete = e.target.closest(`tr`);
                const DeleteHero = await controller(`${API}heroes/${RowToDelete.attributes[`row-id`].value}`, `DELETE`);
                let DeletedRow = RowToDelete.parentNode.removeChild(RowToDelete);
                return DeletedRow;
            })
        })

        const CheckBoxes = document.querySelectorAll(`td input[type="checkbox"]`);
        CheckBoxes.forEach(item => {
            item.addEventListener(`change`, async (e) => {
                const currentTRid = e.target.closest(`tr`).attributes[`row-id`].value;
                if (e.target.checked) {
                    const UpdateFavourite = await controller(`${API}heroes/${currentTRid}`, `PUT`, { favourite: true, });
                } else {
                    const UpdateFavourite = await controller(`${API}heroes/${currentTRid}`, `PUT`, { favourite: false, });
                }
            })
        })
    } catch (err) {
        console.log(err);
    }
})();