

function Creatator() {
    // la variable tab contient toute les clés de notre objet voiture
    let tab = Object.keys(voiture);
    for (i = 0; i < tab.length; i++)
    {
        // la variable subTab contient les clés des éventuels sous objet de voiture
        let subTab = Object.keys(voiture[tab[i]]);
        switch (tab[i]) {
            case "groupeFenetres":
                for (var j = 0; j < subTab.length; j++) {
                    console.log(voiture.groupeFenetres[j], document.getElementsByClassName(subTab[j])[0].classList[1])
                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.groupeFenetres[subTab[j]];
                }
                break;
            case "groupeRoues":
                for (var j = 0; j < subTab.length; j++) {
                    console.log(voiture.groupeRoues[j], document.getElementsByClassName(subTab[j])[0].classList[1])
                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.groupeRoues[subTab[j]];
                }
                break;
            case "groupeJantes":
                for (var j = 0; j < subTab.length; j++) {
                    console.log(voiture.jantes[j], document.getElementsByClassName(subTab[j])[0].classList[1])
                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.jantes[subTab[j]];
                }
            case "creatator":
                break;
            default :
                document.getElementsByClassName(tab[i])[0].style["background-color"] = voiture[tab[i]];
                break;
        }
    }
}


/* LES NOMS DES �L�MENT DE LA VOITURE � MURPHY
 * - carosserie
 * - fenetres
 * - roues
 * - jantes
 * */

///// créer votre objet
let voiture =
{
    carosserie: ""
}


////// Créez des propriétés supplémentaire pour votre objet
voiture.fenetres = "pink";
voiture.roues = "red";
voiture.jantes = "blue";

// voiture.carosserie = "red";

// Supprimez les propriétés "année" et "contrôle technique" de l'objet "voiture"

// delete voiture.année;
// delete voiture["contrôle technique"];

/* Ajoutez à l'objet "voiture" les objets suivants, et donnez leurs comme valeur une couleur :
groupeFenetres: fGauche, fDroite;
groupeRoues: rGauche, rDroite;
jantes: jGauche, jDroite */

// voiture.groupeFenetres = {
//     fGauche: "black",
// }
// voiture.groupeFenetres.fDroite = "pink";

// voiture.groupeRoues = {
//     rGauche: "red",
//     rDroite: "purple"
// }

// voiture.jantes = {
//     jGauche: "red",
//     jDroite: "pink"
// }

// Enumérez dans la console de votre navigateur la liste des clés des prioriétés de votre voiture

// console.log(Object.keys(voiture));

////// Creatator() applique les modification de votre objet voiture
Creatator();

/////// Créez votre fonction dans une propriété
//voiture.fonctionSimple =
//{
//    JeSuisUneFonction()
//    {
//        let i = 5
//        while (i > 0)
//        {
//            console.log("Je suis une fonction")
//            i--;
//        }
//    }
//}


//voiture.fonctionSimple();
