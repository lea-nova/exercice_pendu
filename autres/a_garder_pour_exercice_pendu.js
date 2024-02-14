

let tourCommence = 0
let nombreTours = 0
while (TENTATIVES_JOUEUR > nombreTours) {
    console.log("nombre de tours  : " + nombreTours)
    nombreTours = nombreTours + 1


    let tourRestant = TENTATIVES_JOUEUR - nombreTours
    tourRestant = tourRestant + 1
    console.log(tourRestant)
    if (tourRestant > 1) {
        console.log("Tentatives restantes : " + tourRestant)
    } else {
        console.log("Tentative restante : " + tourRestant)
    }
    for (let i = 0; i < inputAlphabet.length; i++) {
        if (inputAlphabet[i].type === "button") {
            inputAlphabet[i].addEventListener("click", () => {
                inputAlphabet[i].style.color = "grey";
                // inputAlphabet[i].style.backgroundColor = "pink"
                inputAlphabet[i].style.border = "none";
                inputAlphabet[i].setAttribute('disabled', '')
                comparerLettre = document.createElement("span")
                comparerLettre.append(inputAlphabet[i].value)
                lettresDejaChoisies.push(inputAlphabet[i].value)


                let trouveIndice = lettresDejaChoisies.indexOf(inputAlphabet[i].value)
                let indiceLettresChoisies = trouveIndice
                /////////////////////
                for (let j = 0; j < devineMot.length; j++) {
                    //////////////
                    if (devineMot[j] === lettresDejaChoisies[indiceLettresChoisies]) {
                        paragrapheMot[j].style.borderBottom = "none"
                        paragrapheMot[j].textContent = lettresDejaChoisies[indiceLettresChoisies]
                        console.log(tableauParagrapheMot)
                    } else {
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")
                        imageCachee = faireDisparaitreImage(imageJeu, 1, "invisible")
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")

                        console.log("lettre pas dans la solution")
                    }
                    //////////
                }
                /////////////////////
            })
        }
    }
} // FIN BOUCLE WHILE ----------------------------------------------------------------------------






/////////////////////////// add event sur la BOUCLE ???
// let tourCommence = document.createElement("p");
// tourCommence.textContent = 'Appuyez ici pour commencer la partie';
// document.body.appendChild(tourCommence)
// tourCommence.addEventListener('click', () => {
// })// fin addevent


for (let index = 0; index < TENTATIVES_JOUEUR.length; index++) {

    for (let i = 0; i < inputAlphabet.length; i++) {
        if (inputAlphabet[i].type === "button") {
            inputAlphabet[i].addEventListener("click", () => {
                inputAlphabet[i].style.color = "grey";
                // inputAlphabet[i].style.backgroundColor = "pink"
                inputAlphabet[i].style.border = "none";
                inputAlphabet[i].setAttribute('disabled', '')
                comparerLettre = document.createElement("span")
                comparerLettre.append(inputAlphabet[i].value)
                lettresDejaChoisies.push(inputAlphabet[i].value)


                let trouveIndice = lettresDejaChoisies.indexOf(inputAlphabet[i].value)
                let indiceLettresChoisies = trouveIndice
                /////////////////////
                for (let j = 0; j < devineMot.length; j++) {
                    //////////////
                    if (devineMot[j] === lettresDejaChoisies[indiceLettresChoisies]) {
                        paragrapheMot[j].style.borderBottom = "none"
                        paragrapheMot[j].textContent = lettresDejaChoisies[indiceLettresChoisies]
                        console.log(tableauParagrapheMot)
                    } else {
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")
                        imageCachee = faireDisparaitreImage(imageJeu, 1, "invisible")
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")

                        console.log("lettre pas dans la solution")
                    }
                    //////////
                }
                /////////////////////
            })
        }
    }

    console.log("test");


    let tourRestant = TENTATIVES_JOUEUR - nombreTours
    let texteAside = " Il reste, " + tourRestant + " tours."
    console.log(texteAside)
    nombreTours++
    if (tourRestant === 0) {
        console.log('Partie terminée')
        nombreTours = 0;
    }

}
///////////////////////////////////////////////////////////////

let nombreTours = 0;
do {




    for (let i = 0; i < inputAlphabet.length; i++) {
        if (inputAlphabet[i].type === "button") {
            inputAlphabet[i].addEventListener("click", () => {
                inputAlphabet[i].style.color = "grey";
                // inputAlphabet[i].style.backgroundColor = "pink"
                inputAlphabet[i].style.border = "none";
                inputAlphabet[i].setAttribute('disabled', '')
                comparerLettre = document.createElement("span")
                comparerLettre.append(inputAlphabet[i].value)
                lettresDejaChoisies.push(inputAlphabet[i].value)


                let trouveIndice = lettresDejaChoisies.indexOf(inputAlphabet[i].value)
                let indiceLettresChoisies = trouveIndice
                /////////////////////
                for (let j = 0; j < devineMot.length; j++) {
                    //////////////
                    if (devineMot[j] === lettresDejaChoisies[indiceLettresChoisies]) {
                        paragrapheMot[j].style.borderBottom = "none"
                        paragrapheMot[j].textContent = lettresDejaChoisies[indiceLettresChoisies]
                        console.log(tableauParagrapheMot)
                    } else {
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")
                        imageCachee = faireDisparaitreImage(imageJeu, 1, "invisible")
                        imageVisible = faireApparaitreImage(imageJeu, 1, "visible")

                        console.log("lettre pas dans la solution")
                    }
                    //////////
                }
                /////////////////////
            })
        }
    }

    console.log("test");


    let tourRestant = TENTATIVES_JOUEUR - nombreTours
    let texteAside = " Il reste, " + tourRestant + " tours."
    console.log(texteAside)
    nombreTours++
    if (tourRestant === 0) {
        console.log('Partie terminée')
        nombreTours = 0;
    }
} while (nombreTours < TENTATIVES_JOUEUR);



