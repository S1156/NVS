// Stufe 1: Einfaches Promise
function holeBrief(inhalt) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(inhalt), 1000);
    });
}

// Stufe 2: Promise Chaining
function stempelBrief(brief) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(brief + " [Gestempelt]"), 1000);
    });
}

function versendeBrief(brief) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(brief + " -> Versendet!"), 1000);
    });
}

holeBrief("Hallo, dies ist mein Brief.")
    .then(brief => stempelBrief(brief))
    .then(brief => versendeBrief(brief))
    .then(brief => console.log(brief));
