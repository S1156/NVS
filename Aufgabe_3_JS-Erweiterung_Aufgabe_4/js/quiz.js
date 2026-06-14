let fragen = [];
let aktuelleFrageNr = 0;
let punkte = 0;

document.getElementById("start-btn").onclick = quizStarten;

async function quizStarten() {
    let container = document.getElementById("quiz-container");
    container.innerHTML = "<div class='card card-custom p-4 text-center'><p>Fragen werden geladen...</p></div>";

    let response = await fetch("fragen.json");
    fragen = await response.json();

    aktuelleFrageNr = 0;
    punkte = 0;
    frageAnzeigen();
}

function frageAnzeigen() {
    let frage = fragen[aktuelleFrageNr];

    // alle antworten in ein array zusammenfassen und mischen
    let antworten = [frage.correct_answer, frage.incorrect_answers[0], frage.incorrect_answers[1], frage.incorrect_answers[2]];
    for (let i = antworten.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = antworten[i];
        antworten[i] = antworten[j];
        antworten[j] = temp;
    }

    let container = document.getElementById("quiz-container");
    container.innerHTML = "";

    let karte = document.createElement("div");
    karte.className = "card card-custom p-4";
    karte.innerHTML =
        "<p class='text-end mb-1' style='color: var(--factorio-orange)'>Frage " + (aktuelleFrageNr + 1) + " / " + fragen.length + "</p>" +
        "<h4 class='mb-4'>" + frage.question + "</h4>";

    for (let i = 0; i < antworten.length; i++) {
        let btn = document.createElement("button");
        btn.className = "btn btn-outline-warning text-start d-block w-100 mb-2";
        btn.textContent = antworten[i];
        btn.onclick = function () {
            antwortPruefen(btn, antworten[i], frage.correct_answer, karte);
        };
        karte.appendChild(btn);
    }

    container.appendChild(karte);
}

function antwortPruefen(geklickt, gewaehlt, richtig, karte) {
    let alleButtons = karte.querySelectorAll("button");

    for (let i = 0; i < alleButtons.length; i++) {
        alleButtons[i].disabled = true;
        if (alleButtons[i].textContent === richtig) {
            alleButtons[i].classList.remove("btn-outline-warning");
            alleButtons[i].classList.add("btn-success");
        }
    }

    if (gewaehlt !== richtig) {
        geklickt.classList.remove("btn-outline-warning");
        geklickt.classList.add("btn-danger");
    } else {
        punkte++;
    }

    let weiterBtn = document.createElement("button");
    weiterBtn.className = "btn btn-warning mt-3 w-100";

    if (aktuelleFrageNr + 1 < fragen.length) {
        weiterBtn.textContent = "Nächste Frage";
    } else {
        weiterBtn.textContent = "Ergebnis anzeigen";
    }

    weiterBtn.onclick = function () {
        aktuelleFrageNr++;
        if (aktuelleFrageNr < fragen.length) {
            frageAnzeigen();
        } else {
            ergebnisAnzeigen();
        }
    };

    karte.appendChild(weiterBtn);
}

function ergebnisAnzeigen() {
    let container = document.getElementById("quiz-container");
    let prozent = Math.round((punkte / fragen.length) * 100);

    let nachricht = "";
    if (prozent >= 80) {
        nachricht = "Exzellent! Du bist ein echtes Factorio-Genie!";
    } else if (prozent >= 50) {
        nachricht = "Gut gemacht! Noch ein bisschen üben.";
    } else {
        nachricht = "Nicht aufgeben – zurück in die Fabrik!";
    }

    container.innerHTML =
        "<div class='card card-custom p-4 text-center'>" +
        "<h2 style='color: var(--factorio-orange)'>Quiz beendet!</h2>" +
        "<p class='fs-4 my-3'>Dein Ergebnis: <strong>" + punkte + " / " + fragen.length + "</strong> (" + prozent + "%)</p>" +
        "<p class='mb-4'>" + nachricht + "</p>" +
        "<button class='btn btn-warning fw-bold py-2 px-4' onclick='quizStarten()'>Nochmal spielen</button>" +
        "</div>";
}
