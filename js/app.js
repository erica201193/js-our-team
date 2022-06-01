const listaMembriTeam = [
    {
        nome: "Joe",
        cognome: "Bastianich",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Mara",
        cognome: "Maionchi",
        ruolo: "General Manager",
    },
    {
        nome: "Bruno",
        cognome: "Barbieri",
        ruolo: "Administration Finance & Control Executive"
    },
    {
        nome: "Francesca",
        cognome: "Michielin",
        ruolo: "HR Admin"
    },
    {
        nome: "Antonino",
        cognome: "Cannavacciuolo",
        ruolo: "Engineering Food Sales Manager"
    },
    {
        nome: "Britney",
        cognome: "Spears",
        ruolo: "Account Manager"
    },
    {
        nome: "Elon",
        cognome: "Musk",
        ruolo: "Engineering Innovation Manager"
    },
    {
        nome: "Jeff",
        cognome: "Bezos",
        ruolo: "Tax consultant"
    },
]

for (let i = 0; i < listaMembriTeam.length; i++) {
    const datiMembri = listaMembriTeam[i];

    console.log(datiMembri.nome, datiMembri.cognome + ` - ${datiMembri.ruolo}`);
}

const teamContainer = document.querySelector(".team-container");

function createCard (member) {
    let teamCard = document.createElement("div");
    teamCard.innerText = "This is a paragraph";
}

