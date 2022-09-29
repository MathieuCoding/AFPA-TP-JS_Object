/*lisez pas cette fonction :o*/

function Creatator() {
    let tab = Object.keys(voiture);
    for (i = 0; i < tab.length; i++)
    {
        let subTab = Object.keys(voiture[tab[i]]);
        switch (tab[i]) {
            case "groupeFenetres":
                for (var j = 0; j < subTab.length; j++) {
                    console.log(voiture.fenetres[j], document.getElementsByClassName(subTab[j])[0].classList[1])
                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.fenetres[subTab[j]];
                }
                break;
            case "groupeRoues":
                for (var j = 0; j < subTab.length; j++) {
                    console.log(voiture.roues[j], document.getElementsByClassName(subTab[j])[0].classList[1])
                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.roues[subTab[j]];
                }
                break;
            case "jantes":
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

/* LES NOMS DES ÉLÉMENT DE LA VOITURE À MURPHY
 * - carosserie
 * - fenetres
 * - roues
 * - jantes
 
 * Couleurs : 
 * - rouge => "red"
 * - bleu => "blue"
 * - rose => "pink" 
 * - blanc => "whiteColor"
 * */


//let voiture = new Object();
//voiture.carosserie = " a";
//voiture.fenetres = " a";
//voiture.roues= "a ";
//voiture.jantes = " a";

let voiture = {
    carosserie: "pink",
    fenetres: "blue",
    roues: "red",
    jantes: "red"
};

//delete voiture.fenetres;
//delete voiture.roues;
//delete voiture.jantes;

//voiture.groupeFenetres = {
//    fGauche : "blue",
//    fDroite : "pink"
//}

//voiture.groupeRoues = {
//    rGauche: "pink",
//    rDroite : "blue"
//}

//voiture.jantes = {
//    jGauche: "pink",
//    jDroite: "blue"
//}


//voiture.creatator =
//{
//    CreerVoiture()
//    {
//        let tab = Object.keys(voiture);
//        for (i = 0; i < tab.length; i++)
//        {
//        let subTab = Object.keys(voiture[tab[i]]);
//        switch (tab[i]) {
//            case "fenetres":
//                for (var j = 0; j < subTab.length; j++) {
//                    console.log(voiture.fenetres[j], document.getElementsByClassName(subTab[j])[0].classList[1])
//                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.fenetres[subTab[j]];
//                }
//                break;
//            case "roues":
//                for (var j = 0; j < subTab.length; j++) {
//                    console.log(voiture.roues[j], document.getElementsByClassName(subTab[j])[0].classList[1])
//                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.roues[subTab[j]];
//                }
//                break;
//            case "jantes":
//                for (var j = 0; j < subTab.length; j++) {
//                    console.log(voiture.jantes[j], document.getElementsByClassName(subTab[j])[0].classList[1])
//                    document.getElementsByClassName(subTab[j])[0].style["background-color"] = voiture.jantes[subTab[j]];
//                }
//            case "creatator":
//                break;
//            default:
//                document.getElementsByClassName(tab[i])[0].style["background-color"] = voiture[tab[i]];
//                break;
//        }
//    }
//    }
//}

Creatator();