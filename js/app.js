/*lisez pas cette fonction :o*/

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

////// Customisation possibles

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

//delete voiture.fenetres;
//delete voiture.roues;
//delete voiture.jantes;

//voiture.groupeFenetres = {
//    fGauche : "red",
//    fDroite : "blue"
//}

//voiture.groupeRoues = {
//    rGauche: "red",
//    rDroite : "purple"
//}

//voiture.groupeJantes = {
//    jGauche: "red",
//    jDroite: "pink"
//}

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
