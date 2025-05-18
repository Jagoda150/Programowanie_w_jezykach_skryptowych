let liczbaPunktow = 0;
let aktualnyIndeksPytania = 0;

const listaPytan = [
    ["Z jakiej firmy pochodzi gra Minecraft?", "Mojang"],
    ["Jak nazywa się ostatni boss w grze Minecraft?", "Smok Endu"],
    ["Jaką rudę można znaleźć tylko w Netherze?", "Pradawne Zgliszcza"],
    ["Jakiego narzędzia używa się do zbierania drewna?", "Siekiery"],
    ["Co trzeba mieć, by przejść do Endu?", "Oko Endu"],
    ["Z ilu bloków składa się portal do Netheru (minimalnie)?", "10"],
    ["Jaki mob wybucha, gdy się do Ciebie zbliży?", "Creeper"],
    ["Jakiego bloku używasz do spania?", "Łóżka"],
    ["Jaka komenda teleportuje gracza?", "/tp"],
    ["Jaki blok jest potrzebny do stworzenia stołu zaklęć?", "Obsydian"]
];

const pytanieTekst = document.querySelector('.pytanieTekst');
const poleOdpowiedzi = document.querySelector('.poleOdpowiedzi');
const przyciskNastepne = document.querySelector('.przyciskNastepne');
const komunikatZwrotny = document.querySelector('.komunikatZwrotny');
const wynikContainer = document.querySelector('.wynikContainer');
const wynikTekst = document.querySelector('.wynikTekst');
const pytanieSekcja = document.querySelector('.pytanieSekcja');

function wyswietlPytanie() {
    if (aktualnyIndeksPytania < listaPytan.length) {
        pytanieTekst.textContent = listaPytan[aktualnyIndeksPytania][0];
        poleOdpowiedzi.value = "";
        komunikatZwrotny.textContent = "";
        poleOdpowiedzi.disabled = false;
        przyciskNastepne.disabled = false;
        poleOdpowiedzi.focus();
    } else {
        pokazWynik();
    }
}

function sprawdzOdpowiedz() {
    const odpowiedzUzytkownika = poleOdpowiedzi.value.trim();
    const poprawnaOdpowiedz = listaPytan[aktualnyIndeksPytania][1];

    if (odpowiedzUzytkownika.toLowerCase() === poprawnaOdpowiedz.toLowerCase()) {
        komunikatZwrotny.textContent = "Dobrze!";
        komunikatZwrotny.style.color = "green";
        liczbaPunktow++;
    } else {
        komunikatZwrotny.textContent = "Źle! Poprawna odpowiedź: " + poprawnaOdpowiedz;
        komunikatZwrotny.style.color = "red";
    }

    poleOdpowiedzi.disabled = true;
    przyciskNastepne.disabled = true;

    setTimeout(() => {
        aktualnyIndeksPytania++;
        wyswietlPytanie();
    }, 1200);
}

function pokazWynik() {
    pytanieSekcja.style.display = "none";
    wynikContainer.style.display = "block";
    wynikTekst.textContent = `Twój wynik: ${liczbaPunktow} z ${listaPytan.length} punktów.`;
}

przyciskNastepne.addEventListener('click', function() {
    if (poleOdpowiedzi.value.trim() !== "") {
        sprawdzOdpowiedz();
    } else {
        komunikatZwrotny.textContent = "Najpierw wpisz odpowiedź!";
        komunikatZwrotny.style.color = "orange";
    }
});

poleOdpowiedzi.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        przyciskNastepne.click();
    }
});

wyswietlPytanie();
