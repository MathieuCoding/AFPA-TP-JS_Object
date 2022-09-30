

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


//------------ MODIFIEZ LE CODE DANS CETTE ZONE LA ------------//










//------------ MODIFIEZ LE CODE DANS LA ZONE CI-DESSUS ------------//

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