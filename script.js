const universes =
    [
        {
            name: "Marvel"
        },
        {
            name: "DC"
        },
        {
            name: "Comix Zone"
        }
    ];

const heroesForm = document.querySelector(`#heroesForm`);
const heroInput = heroesForm.querySelector(`input[data-name="heroName"]`);
const heroesSelect = heroesForm.querySelector(`select[data-name="heroComics"]`);
const heroesFavorite = heroesForm.querySelector(`input[data-name="heroFavourite"]`);
const formSubmit = heroesForm.querySelector(`button`);

const toUpperCase = name => {
    name = name.trim();
    let fullName = "";
    for (let i = 0; i < name.length; i++) {
        letter = name[i];
        fullName += (i === 0 || name[i - 1] === " ") ? letter.toUpperCase() : letter.toLowerCase();
    }
    return fullName;
};
const getStorage = () => localStorage.getItem(`heroes`) ? JSON.parse(localStorage.getItem(`heroes`)) : [];

const renderHero = (hero) => {

    let tr = document.createElement("tr");
    tr.dataset.name= hero.name;
    tr.innerHTML =
        `<td class="${hero.name}">${hero.name}</td>
         <td>${hero.comics}</td>`;

    //MAKE INPUT
    let input = document.createElement(`input`);
    input.setAttribute("type", "checkbox");
    input.dataset.name = hero.name;
    input.checked = hero.favorite;

    let tdInput = document.createElement(`td`);
    let inputLable = document.createElement(`label`);
    inputLable.className = "heroFavouriteInput";
    inputLable.innerHTML = `Favorite:`;
    inputLable.append(input);
    tdInput.append(inputLable);

    input.addEventListener(`click`, ev => {
        let dataHeroes = getStorage();
        input.checked ? false : true;
        let findHero = dataHeroes.find(hero => hero.name === ev.target.dataset.name);
        findHero.favorite= input.checked;
        localStorage.setItem(`heroes`, JSON.stringify(dataHeroes));
    });

    //MAKE BUTTON
    let button = document.createElement(`button`);
    button.dataset.name = hero.name;
    button.innerHTML = `Delete`;
    let tdBtn = document.createElement("td");
    tdBtn.append(button);


    button.addEventListener(`click`, ev => {
        let dataHeroes = getStorage();
        tbody.removeChild(tr);
        let find = dataHeroes.findIndex(hero => hero.name === ev.target.dataset.name);
        dataHeroes.splice(find, 1);
        localStorage.setItem(`heroes`, JSON.stringify(dataHeroes));
    })
    tr.append(tdInput, tdBtn);

    return tr;
}

heroesSelect.innerHTML = universes
    .map(universe => `<option value="${universe.name}">${universe.name}</option>`).join("");

//RENDER FORM
heroesForm.addEventListener(`submit`, evt => {
    evt.preventDefault();
    let heroFullName = heroInput.value;
    if (!heroFullName) {
        heroInput.style.border = `1px solid #FF0000`;
        setTimeout(() => heroInput.style.border = `1px solid black`, 3000);
        alert(`Please enter Name`)
    } else heroFullName = toUpperCase(heroFullName);

    let heroUniverse = heroesSelect.value;
    let heroFavorite = heroesFavorite.checked;
    let userHero = {
        name: heroFullName,
        comics: heroUniverse,
        favorite: heroFavorite
    }

    let storage = getStorage();
    let nameExist = storage.find(item => item.name === userHero.name);
   (nameExist)? alert(`Super hero ${userHero.name} exist`):console.log(userHero);

    if (heroFullName && !nameExist) {
        tbody.append(renderHero(userHero));
        storage.push(userHero);
        localStorage.setItem(`heroes`, JSON.stringify(storage));
    }
});

//Table

let heroesTable = document.querySelector(`#heroesTable`);

let thead = `<thead><tr>
<th>Name Surname</th>
<th>Comics</th>
<th>Favourite</th>
<th>Action</th>
</tr>
</thead>`;

heroesTable.innerHTML = thead;
let tbody = document.createElement(`tbody`);
let dataHeroes = getStorage();
if (dataHeroes) {
    dataHeroes.forEach(hero => {
        tbody.append(renderHero(hero));
        heroesTable.append(tbody);
    });
}