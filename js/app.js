const teamContainer = document.querySelector(".team-container");



const listaMembriTeam = [
    {
        nome: "Joe",
        cognome: "Bastianich",
        ruolo: "Founder & CEO",
        immagineProfilo: "img/new-team-member-02.jpg"
    },
    {
        nome: "Mara",
        cognome: "Maionchi",
        ruolo: "General Manager",
        immagineProfilo: "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        nome: "Bruno",
        cognome: "Barbieri",
        ruolo: "Administration Finance & Control Executive",
        immagineProfilo: "img/new-team-member-04.jpg"
    },
    {
        nome: "Francesca",
        cognome: "Michielin",
        ruolo: "HR Admin",
        immagineProfilo: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Antonino",
        cognome: "Cannavacciuolo",
        ruolo: "Engineering Food Sales Manager",
        immagineProfilo: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Britney",
        cognome: "Spears",
        ruolo: "Account Manager",
        immagineProfilo: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Elon",
        cognome: "Musk",
        ruolo: "Engineering Innovation Manager",
        immagineProfilo: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Jeff",
        cognome: "Bezos",
        ruolo: "Tax consultant",
        immagineProfilo: "img/scott-estrada-developer.jpg"
    },
]

for (let i = 0; i < listaMembriTeam.length; i++) {
    const datiMembri = listaMembriTeam[i];

    console.log(datiMembri.nome, datiMembri.cognome + ` - ${datiMembri.ruolo}`);

    const cardHtml = createCard (listaMembriTeam[i]);

    let contentHtml = cardHtml.innerHTML;

    // createCard(listaMembriTeam[i]);

    // console.log(createCard)

    // // teamContainer.append(cardHtml)

}


function createCard (teamMember) {

    let card = document.createElement("div")
    card.classList.add("team-card")

    let cardImage = document.createElement("div")
    cardImage.classList.add("card-image")

    let img = document.createElement("img")
    img.src = teamMember.immagineProfilo

    let cardText = document.createElement("div")
    cardText.classList.add("card-text")

    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    teamContainer.append(card)

    card.append(cardImage)
    card.append(cardText)

    cardImage.append(img)

    cardText.append(h3)
    cardText.append(p)

    h3.append(teamMember.nome, " ", teamMember.cognome)
    p.append(teamMember.ruolo)
}

// function htmlCard () {
//     for (let i = 0; i < listaMembriTeam.length; index++) {
//         let lista;
//         lista.innerHTML = createCard (listaMembriTeam[i])
//     }
// }





