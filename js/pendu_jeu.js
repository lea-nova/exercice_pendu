////////////////////////////////////////IMPORT DU DICO ///////////////////////////////////////////

import { words } from "./dico.js";

////////////////////////////////////////////DECLARATION CONSTANTE ET VARIABLE///////////////////////////////////////////////////////
///////////////////////////////////////////////// PROGRAMME PRINCIPAL -- Partie : Boucle while pour définir quand une boucle se termine ////////////////////////////////////////////////////////////////////////////////////

const TENTATIVES_JOUEUR = 9;
// let divImages = document.getElementsByClassName("images")
let imageJeu = document.getElementsByTagName("img");
let paragrapheSolution = document.createElement("p");
let tableauParagrapheMot = document.getElementById("leMot");
let paragrapheMot = [];
// let tentativesRestantes = document.getElementById("phrase");
let inputAlphabet = document.getElementsByTagName("input")
// let changerTentativesNb = document.getElementById("tentatives")
// changerTentativesNb = TENTATIVES_JOUEUR
let span;
let imageVisible;
let imageCachee;
let motChoisi = Math.floor(Math.random() * words.length);
let devineMot
let nombreTours = 0;
let test;

let lettresDejaChoisies = [];

let comparerLettre
motChoisi = words[motChoisi]

///////////////////////////////////////////////////////// FONCTIONS /////////////////////////////////////////////////////////////////////////

// const reset = () => {

// }
// reset()

/* ------------------------------ Fonctions pour faire apparaître/disparaître image en fonction des propositions joueurs ------------------------------------- */
// let testMessageFinPartie;

const messageFinPartie = () => {
    let reponse = 'test'
    return reponse
}
// testMessageFinPartie = messageFinPartie()


const faireApparaitreImage = (element, indice, attributUn) => {
    element[indice - 1].setAttribute("class", attributUn)
}

const faireDisparaitreImage = (element, indice, attribut) => {
    element[indice - 2].setAttribute("class", attribut)
}



// const gererImage = (texte, nombreTours) => {
//     let messageFonction = texte;
//     // for (let index = 0; index < nombreTours; index++) {
//     // console.log(index)
//     faireApparaitreImage(imageJeu, nombreTours + 1, "visible")
//     faireDisparaitreImage(imageJeu, nombreTours, "invisible")
//     // }
//     return messageFonction
// }


// let texte = gererImage("bonjour", nombreTours)
// console.log(gererImage(texte))


for (let index = 1; index < nombreTours + 1; index++) {
    faireApparaitreImage(imageJeu, index, "visible")
    faireDisparaitreImage(imageJeu, index, "invisible")

    console.log(" Photo tour : " + index)
}

imageVisible = faireApparaitreImage(imageJeu, 1, "visible");

// // faireDisparaitreImage(imageJeu, 1, "invisible");
// imageVisible = faireApparaitreImage(imageJeu, 1, "visible",);


/* ------------------------------ Fin Fonctions pour faire apparaître/disparaître image en fonction des propositions joueurs ------------------------------------- */


/* ------------------------------Fonctions pour remplacer lettres avec accent ------------------------------------- */
const sansAccent = (str) => {
    let accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    let noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
    for (var i = 0; i < accent.length; i++) {
        str = str.replace(accent[i], noaccent[i]);
    }
    return str
}
/* ------------------------------Fin fonctions pour remplacer lettres avec accent ------------------------------------- */

//////////////////////////////////////////////////// FIN DES FONCTIONS //////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////// Fin de la boucle while////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////  PROGRAMME PRINCIPAL --  Partie : Choix du mot à deviner --  /////////////////////////////////////////////////////////

// imageVisible = faireApparaitreImage(imageJeu, 1 + 1, "visible")
// imageCachee = faireDisparaitreImage(imageJeu, 1, "invisible")




// LE MOT CHOISI DE MANIERE ALEATOIRE
// N'a pas besoin d'être dans la boucle. Car initialisé AVANT que la partie commence vu que les 9 tours 


motChoisi = sansAccent(motChoisi)
motChoisi = motChoisi.toUpperCase()
devineMot = motChoisi.split('')// mot à trouver
// console.log(devineMot)
document.body.append(paragrapheSolution)
paragrapheSolution.textContent = motChoisi;

devineMot.forEach(element => {
    span = document.createElement("span")
    span.setAttribute('class', 'border')
    span.append(element)
    paragrapheMot.push(span)
    tableauParagrapheMot.append(span)
    if ((span.textContent === " ") || (span.textContent === "-") || (span.textContent === "'")) {
        span.style.borderBottom = 'none'

    } else {
        span.textContent = " "
        console.log('enlever commentaire quand fini')
    }
});

// 1- Boucle while pour le nombre de tentatives  lors d'une partie



// do {

// for (let index = 0; index < nombreTours; index++) {
// faireApparaitreImage(imageJeu, index++, "visible")
// faireDisparaitreImage(imageJeu, index, "invisible")
// index++
// //////// --- tentatives à paramètrer
let tourRestant = TENTATIVES_JOUEUR - nombreTours
console.log(nombreTours)
let texteAside = " Il reste, " + tourRestant + " tours."
console.log(texteAside)
nombreTours++
if (tourRestant === 0) {
    console.log('Partie terminée')
    nombreTours = 0;
}

////////////////////////////////////////////



for (let i = 0; i < inputAlphabet.length; i++) {
    // console.log(i)// console 26 boucles pour alphabet
    // La partie ( les tentatives_joueurs  ) commencent au clic ???? ICI ????? Donc c'est ici que la boucle pour le tours devrait commencer. 
    // La boucle ne devrait elle pas être avant l'event ?? 
    inputAlphabet[i].addEventListener("click", () => {
        if (inputAlphabet[i].type === "button") {
            inputAlphabet[i].style.color = "grey";
            inputAlphabet[i].style.backgroundColor = "pink"
            inputAlphabet[i].style.border = "none";
            inputAlphabet[i].setAttribute('disabled', '')
            comparerLettre = document.createElement("span")
            comparerLettre.append(inputAlphabet[i].value)
            lettresDejaChoisies.push(inputAlphabet[i].value)
            let trouveIndice = lettresDejaChoisies.indexOf(inputAlphabet[i].value)
            let indiceLettresChoisies = trouveIndice
            for (let j = 0; j < devineMot.length; j++) {
                if (devineMot[j] === lettresDejaChoisies[indiceLettresChoisies]) {
                    console.log('test')
                    paragrapheMot[j].style.borderBottom = "none"
                    console.log('test')
                    paragrapheMot[j].textContent = lettresDejaChoisies[indiceLettresChoisies]
                    paragrapheMot[j].style.borderBottom = " "
                    console.log(lettresDejaChoisies)
                }
            }
        }
    })
}

// } while (nombreTours < TENTATIVES_JOUEUR);







// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let nombreTours = 0;
// do {
//     console.log("test")
//     nombreTours++
// } while (nombreTours < 9)