

function Creatator() {
    let tab = Object.keys(voiture);
    for (i = 0; i < tab.length; i++)
    {
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


//Créez un objet, avec les propriétés ayant pour clé "carosserie", "année" et "contrôle technique", les valeurs peuvent être des chaînes de caractères, des nombres ou des booléens.

let voiture = new Object();
voiture.carosserie = "green";
voiture["année"] = 2000;
voiture["contrôle technique"] = true;

// Modifiez la valeur de la propriété "carosserie"

voiture.carosserie = "red";

// Supprimez les propriétés "année" et "contrôle technique" de l'objet "voiture"

delete voiture.année;
delete voiture["contrôle technique"];

/* Ajoutez à l'objet "voiture" les objets suivants, et donnez leurs comme valeur une couleur :
"groupeFenetres": fGauche, fDroite; 
"groupeRoues": rGauche, rDroite; 
"jantes": jGauche, jDroite */

voiture.groupeFenetres = {
    fGauche: "black",
}

voiture.groupeFenetres.fDroite = "pink";

voiture.groupeRoues = {
   rGauche: "red",
   rDroite : "purple"
}

voiture.jantes = {
   jGauche: "red",
   jDroite: "pink"
}

// Enumérez dans la console de votre navigateur la liste des clés des prioriétés de votre voiture

console.log(Object.keys(voiture));





Creatator();


// voiture.creatator =
// {
//    Creatator()
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
// }