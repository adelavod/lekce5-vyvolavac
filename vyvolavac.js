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
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.push(vyherniJmeno);

    //vypíše výherní jméno
    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = vyherniJmeno;

    // vypíše seznam dosud tažených jmen
    let seznamJmen = document.querySelector('#seznam');
    seznamJmen.innerHTML = ""; //vymaže se předchozí seznam
    tazenaJmena.forEach(vypisTazenaJmena);

    // funkce, která vypíše tažená jména do "předchozí oběti"
    function vypisTazenaJmena(ele, idx) {
        seznamJmen.innerHTML += ele; //připíše každé nové tažené jméno do seznamu
        //přidá čárku za element, jen pokud není poslední
        if (tazenaJmena.length > idx+1) {
            seznamJmen.innerHTML += ", "
        }; 
    }

    // vypíše počet již tažených jmen číslem
    let pocetVyvolanych = tazenaJmena.length;
    let pocetVyvolanychDiv = document.querySelector('#pocet-vyvolanych')
    pocetVyvolanychDiv.innerHTML = pocetVyvolanych;
    console.log(jmena); //jen kontrolni
};

function resetJmena() {

    // Přidáme TazenaJmena zpátky do Jmena
    jmena = jmena.concat(tazenaJmena);

    // Vyprazdnime TazenaJmena
    tazenaJmena = [];

    // Vyprázdnění vepsaných dat na stránce:
    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = "";

    let seznamJmen = document.querySelector('#seznam');
    seznamJmen.innerHTML = "Seznam vyvolaných";

    let pocetVyvolanychDiv = document.querySelector('#pocet-vyvolanych')
    pocetVyvolanychDiv.innerHTML = "Dosud žádná";
    

}