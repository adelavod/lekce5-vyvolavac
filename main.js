let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
let vyherniindex = Math.floor(Math.random() * jmena.length);
    // Získáme výherní jméno na patřičném indexu
let vyherniJmeno = jmena[vyherniindex];
    // Vyřadíme vylosované jméno z osudí
jmena.splice(vyherniindex,1);
    // Výherní jméno si uložíme do pole k ostatním výherním
tazenaJmena.push(vyherniJmeno) ;   
let vyherce = document.querySelector("#vyherka");
vyherce.textContent = vyherniJmeno;
let seznam = document.querySelector("#seznam");
seznam.textContent = tazenaJmena;
}