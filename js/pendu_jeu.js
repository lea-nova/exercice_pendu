import { words } from "./dico.js";

const TENTATIVES_JOUEUR = 9;
let tentativesRestantes;
// let paragrapheSolution = document.createElement("p"); // permet d'afficher la solution quand je fais des tests
let tableauParagrapheMot = document.getElementById("leMot");
let paragrapheMot = [];
let inputAlphabet = document.getElementsByTagName("input")
let span;
let motChoisi = Math.floor(Math.random() * words.length);
let devineMot
let lettresDejaChoisies = [];
let compteurErreur = 0;
let paragrapheMessage = document.createElement("p");
let aside = document.getElementById("phrase")
let image = document.querySelector(".visible")
let imageWin = 11

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

const btnRecommencer = () => {
    let btnRecommencer
    btnRecommencer = document.createElement('button')
    document.body.appendChild(btnRecommencer)
    btnRecommencer.setAttribute('class', 'btn')
    btnRecommencer.textContent = "Recommencer"
    btnRecommencer.addEventListener("click", () => {
        window.location.reload();
    })
}

const desacBtn = (btn) => {
    btn.style.color = "grey";
    btn.style.backgroundColor = "#876E91"
    btn.style.color = "white"
    btn.style.border = "none";
    btn.setAttribute('disabled', '')
}


image.src = `./images/1.png`
motChoisi = words[motChoisi]
motChoisi = sansAccent(motChoisi)
motChoisi = motChoisi.toUpperCase()
devineMot = motChoisi.split('')// mot à trouver
tentativesRestantes = TENTATIVES_JOUEUR - compteurErreur;
paragrapheMessage.textContent = `Nombres d'erreurs possibles : ${tentativesRestantes}`
aside.append(paragrapheMessage)

// Afficher la solution 
// document.body.append(paragrapheSolution)
// paragrapheSolution.textContent = motChoisi;

devineMot.forEach(element => {
    span = document.createElement("span")
    span.setAttribute('class', 'border')
    span.append(element)
    paragrapheMot.push(span)
    tableauParagrapheMot.append(span)
    if ((span.textContent === " ") || (span.textContent === "-") || (span.textContent === "'")) {
        span.style.borderBottom = 'none'
        lettresDejaChoisies.push(element)
    } else {
        span.textContent = " "
    }
});
// On écoute event sur les boutons représentant l'alphabet.
for (const btnLettre of inputAlphabet) {
    btnLettre.addEventListener('click', (event) => {
        desacBtn(btnLettre)
        if (devineMot.includes(event.target.value)) {
            for (let i = 0; i < devineMot.length; i++) {
                if (devineMot[i] === event.target.value) {
                    paragrapheMot[i].style.borderBottom = "none"
                    paragrapheMot[i].textContent = event.target.value
                    paragrapheMot[i].style.borderBottom = " "
                    lettresDejaChoisies.push(event.target.value)
                }
            }
        }
        else {
            tentativesRestantes = TENTATIVES_JOUEUR - compteurErreur;
            paragrapheMessage.textContent = `Nombres d'erreurs possibles restantes : ${tentativesRestantes - 1}`
            compteurErreur++
            image.src = `./images/${compteurErreur + 1}.png`
        }

        if (compteurErreur >= 9) {
            paragrapheMessage.textContent = "Perdu ! Le mot était : " + motChoisi
            for (const btnLettre of inputAlphabet) {
                desacBtn(btnLettre)
            }
            btnRecommencer()
        } else if (devineMot.length === lettresDejaChoisies.length && compteurErreur < 9) {
            for (const btnLettre of inputAlphabet) {
                desacBtn(btnLettre)
            }
            image.src = `./images/${imageWin}.png`
            paragrapheMessage.textContent = "Bravo ! Vous avez gagné !"
            btnRecommencer()
        }
    })
    console.log(devineMot)
}