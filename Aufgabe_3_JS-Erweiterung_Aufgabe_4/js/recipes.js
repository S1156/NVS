const rezepte = [
    { name: "Eisenplatte",           zutaten: ["Eisenerz × 1"],                                              zeit: 3.2,  kategorie: "Zwischenprodukte" },
    { name: "Kupferplatte",          zutaten: ["Kupfererz × 1"],                                             zeit: 3.2,  kategorie: "Zwischenprodukte" },
    { name: "Stahlplatte",           zutaten: ["Eisenplatte × 5"],                                           zeit: 16,   kategorie: "Zwischenprodukte" },
    { name: "Elektronische Platine", zutaten: ["Eisenplatte × 1", "Kupferkabel × 3"],                        zeit: 0.5,  kategorie: "Zwischenprodukte" },
    { name: "Kupferkabel",           zutaten: ["Kupferplatte × 1"],                                          zeit: 0.5,  kategorie: "Zwischenprodukte" },
    { name: "Zahnrad",               zutaten: ["Eisenplatte × 2"],                                           zeit: 0.5,  kategorie: "Zwischenprodukte" },
    { name: "Kunststoffriegel",      zutaten: ["Kohle × 1", "Erdöl × 20"],                                   zeit: 1,    kategorie: "Zwischenprodukte" },
    { name: "Magazin",               zutaten: ["Eisenplatte × 4"],                                           zeit: 1,    kategorie: "Militär" },
    { name: "Granate",               zutaten: ["Eisenplatte × 5", "Kohle × 10"],                             zeit: 8,    kategorie: "Militär" },
    { name: "Geschützturm",          zutaten: ["Eisenplatte × 20", "Kupferplatte × 10", "Zahnrad × 10"],     zeit: 5,    kategorie: "Militär" },
    { name: "Raketenwerferturm",     zutaten: ["Stahlplatte × 5", "Elektronische Platine × 5", "Kupferplatte × 5"], zeit: 8, kategorie: "Militär" },
    { name: "Montageautomat Mk.1",   zutaten: ["Eisenplatte × 9", "Zahnrad × 5", "Elektronische Platine × 3"],   zeit: 0.5, kategorie: "Produktion" },
    { name: "Bohrmaschine Mk.1",     zutaten: ["Eisenplatte × 10", "Zahnrad × 5", "Elektronische Platine × 3"],  zeit: 2,   kategorie: "Produktion" },
    { name: "Fließband",             zutaten: ["Eisenplatte × 1", "Zahnrad × 1"],                            zeit: 0.5,  kategorie: "Logistik" },
    { name: "Greifarm",              zutaten: ["Eisenplatte × 1", "Zahnrad × 1", "Elektronische Platine × 1"], zeit: 0.5, kategorie: "Logistik" },
    { name: "Splitter",              zutaten: ["Eisenplatte × 5", "Zahnrad × 4", "Elektronische Platine × 1"], zeit: 1,   kategorie: "Logistik" }
];

let aktiveKategorie = "Alle";

function rezepteAnzeigen() {
    let suchbegriff = document.getElementById("search-input").value.toLowerCase();
    let grid = document.getElementById("recipe-grid");

    // alle bestehenden karten löschen
    grid.innerHTML = "";

    // passendes rausfiltern
    let gefiltert = [];
    for (let i = 0; i < rezepte.length; i++) {
        let passt = true;
        if (aktiveKategorie !== "Alle" && rezepte[i].kategorie !== aktiveKategorie) {
            passt = false;
        }
        if (!rezepte[i].name.toLowerCase().includes(suchbegriff)) {
            passt = false;
        }
        if (passt) {
            gefiltert.push(rezepte[i]);
        }
    }

    if (gefiltert.length === 0) {
        grid.innerHTML = "<p class='text-center col-12 mt-3'>Kein Rezept gefunden.</p>";
        return;
    }

    // karten erstellen und einfügen
    for (let i = 0; i < gefiltert.length; i++) {
        let rezept = gefiltert[i];

        let zutatenHTML = "";
        for (let j = 0; j < rezept.zutaten.length; j++) {
            zutatenHTML += "<li>• " + rezept.zutaten[j] + "</li>";
        }

        let col = document.createElement("div");
        col.className = "col";
        col.innerHTML =
            "<div class='card card-custom h-100 p-3'>" +
            "<span class='badge mb-2' style='background-color: var(--factorio-orange); color: black'>" + rezept.kategorie + "</span>" +
            "<h5 style='color: var(--factorio-orange)'>" + rezept.name + "</h5>" +
            "<p class='mb-1 fw-bold'>Zutaten:</p>" +
            "<ul class='list-unstyled ms-2 mb-2'>" + zutatenHTML + "</ul>" +
            "<p class='mb-0'>Craftingzeit: <strong>" + rezept.zeit + "s</strong></p>" +
            "</div>";

        grid.appendChild(col);
    }
}

// filter buttons
let filterButtons = document.querySelectorAll("#filter-buttons button");
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        aktiveKategorie = this.dataset.cat;

        // alle zurücksetzen, dann den geklickten aktiv machen
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("btn-warning", "active-filter");
            filterButtons[j].classList.add("btn-outline-warning");
        }
        this.classList.remove("btn-outline-warning");
        this.classList.add("btn-warning", "active-filter");

        rezepteAnzeigen();
    });
}

document.getElementById("search-input").addEventListener("input", rezepteAnzeigen);

rezepteAnzeigen();
