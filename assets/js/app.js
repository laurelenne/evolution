//Declaration des variables 
//stat clicks
var totalClick = document.getElementById('nbTotalClic');
var getClick = document.getElementById('jeu'); // temporaire pour mes tests
var scoreClick = 0;
//stat ressources recoltées
var ressourcesCumulees = document.getElementById('nbTotalRessources');
var ressourceUne = 0;
var ressourceDeux = 0;
var ressourceTrois = 0;
var somme = 0;
//stat outils obtenus
var nbTotalOutils = document.getElementById('nbTotalOutils');
//stat batiment obtenus
var nbTotalBatiment = document.getElementById('nbTotalBatiment');
var constructions = 0;


//tableau des eres terminées : 0=> non achevée 1=> achevée
var tabEre = {
    "ere1": 0,
    "ere2": 0,
    "ere3": 0,
    "ere4": 0,
    "ere5": 0
};
var nbEres = 0;
var bgEre = document.getElementById("bgEre");

var nbConstruction = 0;
// incrementation du nombre de batiments construits et catastrophes rencontrées
// var eventConstruct = false;
var eventCastastrophes = false;

var viderCache = document.getElementById('viderCache');


// ----------------------- Debut : Statistiques - options ----------------------- //

//---- Stat total click ----//
/**
 * 
 * Fonction incremenation de total des clicks + maj de l'affichage
 * 
 */
function incrTotalClick() {
    scoreClick++;
    totalClick.innerHTML = scoreClick;
}
getClick.onclick = incrTotalClick;


// ---- eres terminées ---- //
/*boucle sur le tableau pour check le nombre de fois que 1 est présent 
 *le for in me permet de boucler sur le tableau associatif
 */
for (ere in tabEre) {
    if (tabEre[ere] === 1) {
        nbEres++;
    }
}
nbTotalEre.innerHTML = nbEres;


// ---- batiments construits ---- //

function incrConstruction() {
    constructions++;
    nbTotalBatiment.innerHTML = constructions;
}




// ---- castastrophes comptées ---- //
function incrCatastrophe() {
    //if(eventCastastrophes == true){
    //    castastrophes++;
    //    eventCastastrophes = false;  
    //}
}



// ----------------------- Fin : Statistiques - options ----------------------- //




// ----------------------- Debut : gestion webstorage ----------------------- //
var localisation = [];
/**
 * 
 * parcourir le tableau de div ou se trouveront les maisons 
 * indique le niveau de maison a l'indice correspondant
 * 
 */
function localiserMaison() {
    for (let x = 0; x <= bgEre.children.length - 1; x++) {
        if (bgEre.children[x].classList.contains('maison')) {
            localisation[x] = "maison";
        } else if (bgEre.children[x].classList.contains('maison1')) {
            localisation[x] = "maison1";
        } else if ((bgEre.children[x].classList.contains('maison2'))) {
            localisation[x] = "maison2";
        } else {
            localisation[x] = "vide";
        }
    }
    return localisation;
}


/**
 * 
 * fonction de sauvegarde local via le webstorage
 * [https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API]
 * 
 */
function sauvegardeLocal() {
    //sauvegarde bloc statistiques
    localStorage.setItem('nbTotalClic', totalClick.innerHTML);
    localStorage.setItem('nbTotalRessources', nbTotalRessources.innerHTML);
    localStorage.setItem('nbTotalOutils', nbTotalOutils.innerHTML);
    localStorage.setItem('nbTotalOutils', parseInt(nbTotalOutils.innerHTML));
    localStorage.setItem('nbTotalEre', nbTotalEre.innerHTML);
    localStorage.setItem('nbTotalBatiment', nbTotalBatiment.innerHTML);
    localStorage.setItem('prixMaison1', maisonPrix1);
    localStorage.setItem('prixMaison2', maisonPrix2);
    localStorage.setItem('prixMaison3', maisonPrix3);
    localStorage.setItem('bullePrix', prixMaison.innerHTML);
    var getLocalisation = localiserMaison();
    localStorage.setItem('localisation', getLocalisation);
    //sav item1 lvl1
    localStorage.setItem('prix-item1-lvl1-bouton-shop', affichagePrixItem1Lvl1.innerHTML);
    localStorage.setItem('boutonItem1Lvl1.disabled', boutonItem1Lvl1.disabled);
    localStorage.setItem('boutonItem1Lvl1.style.color', boutonItem1Lvl1.style.color);
    localStorage.setItem('boutonItem1Lvl1.style.border', boutonItem1Lvl1.style.border);
    localStorage.setItem('boutonItem1Lvl1.style.backgroundColor', boutonItem1Lvl1.style.backgroundColor);
    localStorage.setItem('imgitem1lvl1', document.getElementById("imgitem1lvl1Vide").src);

    //sav item1 lvl2
    localStorage.setItem('prix-item1-lvl2-bouton-shop', affichagePrixItem1Lvl2.innerHTML);
    localStorage.setItem('boutonItem1Lvl2.disabled', boutonItem1Lvl2.disabled);
    localStorage.setItem('boutonItem1Lvl2.style.color', boutonItem1Lvl2.style.color);
    localStorage.setItem('boutonItem1Lvl2.style.border', boutonItem1Lvl2.style.border);
    localStorage.setItem('boutonItem1Lvl2.style.backgroundColor', boutonItem1Lvl2.style.backgroundColor);
    localStorage.setItem('imgitem1lvl2', document.getElementById("imgitem1lvl2Vide").src);

    //sav item1 lvl3
    localStorage.setItem('prix-item1-lvl3-bouton-shop', affichagePrixItem1Lvl3.innerHTML);
    localStorage.setItem('boutonItem1Lvl3.disabled', boutonItem1Lvl3.disabled);
    localStorage.setItem('boutonItem1Lvl3.style.color', boutonItem1Lvl3.style.color);
    localStorage.setItem('boutonItem1Lvl3.style.border', boutonItem1Lvl3.style.border);
    localStorage.setItem('boutonItem1Lvl3.style.backgroundColor', boutonItem1Lvl3.style.backgroundColor);
    localStorage.setItem('imgitem1lvl3', document.getElementById("imgitem1lvl3Vide").src);

    //sav item2 lvl1
    localStorage.setItem('prix-item2-lvl1-bouton-shop', affichagePrixItem2Lvl1.innerHTML);
    localStorage.setItem('boutonItem2Lvl1.disabled', boutonItem2Lvl1.disabled);
    localStorage.setItem('boutonItem2Lvl1.style.color', boutonItem2Lvl1.style.color);
    localStorage.setItem('boutonItem2Lvl1.style.border', boutonItem2Lvl1.style.border);
    localStorage.setItem('boutonItem2Lvl1.style.backgroundColor', boutonItem2Lvl1.style.backgroundColor);
    localStorage.setItem('imgitem2lvl1', document.getElementById("imgitem2lvl1Vide").src);
    //sav item2 lvl2
    localStorage.setItem('prix-item2-lvl2-bouton-shop', affichagePrixItem2Lvl2.innerHTML);
    localStorage.setItem('boutonItem2Lvl2.disabled', boutonItem2Lvl2.disabled);
    localStorage.setItem('boutonItem2Lvl2.style.color', boutonItem2Lvl2.style.color);
    localStorage.setItem('boutonItem2Lvl2.style.border', boutonItem2Lvl2.style.border);
    localStorage.setItem('boutonItem2Lvl2.style.backgroundColor', boutonItem2Lvl2.style.backgroundColor);
    localStorage.setItem('imgitem2lvl2', document.getElementById("imgitem2lvl2Vide").src);

    //sav item2 lvl3
    localStorage.setItem('prix-item2-lvl3-bouton-shop', affichagePrixItem2Lvl3.innerHTML);
    localStorage.setItem('boutonItem2Lvl3.disabled', boutonItem2Lvl3.disabled);
    localStorage.setItem('boutonItem2Lvl3.style.color', boutonItem2Lvl3.style.color);
    localStorage.setItem('boutonItem2Lvl3.style.border', boutonItem2Lvl3.style.border);
    localStorage.setItem('boutonItem2Lvl3.style.backgroundColor', boutonItem2Lvl3.style.backgroundColor);
    localStorage.setItem('imgitem2lvl3', document.getElementById("imgitem2lvl3Vide").src);

    //sav item3 lvl1
    localStorage.setItem('prix-item3-lvl1-bouton-shop', affichagePrixItem3Lvl1.innerHTML);
    localStorage.setItem('boutonItem3Lvl1.disabled', boutonItem3Lvl1.disabled);
    localStorage.setItem('boutonItem3Lvl1.style.color', boutonItem3Lvl1.style.color);
    localStorage.setItem('boutonItem3Lvl1.style.border', boutonItem3Lvl1.style.border);
    localStorage.setItem('boutonItem3Lvl1.style.backgroundColor', boutonItem3Lvl1.style.backgroundColor);
    localStorage.setItem('imgitem3lvl1', document.getElementById("imgitem3lvl1Vide").src);

    //sav item3 lvl2
    localStorage.setItem('prix-item3-lvl2-bouton-shop', affichagePrixItem3Lvl2.innerHTML);
    localStorage.setItem('boutonItem3Lvl2.disabled', boutonItem3Lvl2.disabled);
    localStorage.setItem('boutonItem3Lvl2.style.color', boutonItem3Lvl2.style.color);
    localStorage.setItem('boutonItem3Lvl2.style.border', boutonItem3Lvl2.style.border);
    localStorage.setItem('boutonItem3Lvl2.style.backgroundColor', boutonItem3Lvl2.style.backgroundColor);
    localStorage.setItem('imgitem3lvl2', document.getElementById("imgitem3lvl2Vide").src);

    //sav item3 lvl3
    localStorage.setItem('prix-item3-lvl3-bouton-shop', affichagePrixItem3Lvl3.innerHTML);
    localStorage.setItem('boutonItem3Lvl3.disabled', boutonItem3Lvl3.disabled);
    localStorage.setItem('boutonItem3Lvl3.style.color', boutonItem3Lvl3.style.color);
    localStorage.setItem('boutonItem3Lvl3.style.border', boutonItem3Lvl3.style.border);
    localStorage.setItem('boutonItem3Lvl3.style.backgroundColor', boutonItem3Lvl3.style.backgroundColor);
    localStorage.setItem('imgitem3lvl3', document.getElementById("imgitem3lvl3Vide").src);

    //sav coefficientx multiplicateur liés aux items
    localStorage.setItem('clickRessource1', clickRessource1);
    localStorage.setItem('clickRessource2', clickRessource2);
    localStorage.setItem('clickRessource3', clickRessource3);

    localStorage.setItem('nbTotalCata', nbTotalCata.innerHTML);

    //sauvegarde bloc ressources
    localStorage.setItem('ressource1', ressource1.innerHTML);
    localStorage.setItem('ressource2', ressource2.innerHTML);
    localStorage.setItem('ressource3', ressource3.innerHTML);

    //sauvegarde cartes
    localStorage.setItem('cartes1', lis[0].style.display);
    localStorage.setItem('cartes2', lis[1].style.display);
    localStorage.setItem('cartes3', lis[2].style.display);
}


/**
 * 
 * fonction de sauvegarde auto
 * 
 */
function sauvegardeAuto() {
    setInterval(sauvegardeLocal, 1000);

}
sauvegardeAuto();

// const localiserTest = ['maison','maison1','maison2','vide','vide','vide','vide','vide','vide','vide']
function restorerMaison(getLocalisation) {

    for (let z = 0; z <= getLocalisation.length - 1; z++) {
        if (getLocalisation[z] == 'maison') {
            bgEre.children[z].setAttribute('class', getLocalisation[z])
        } else if (getLocalisation[z] == 'maison1') {
            bgEre.children[z].setAttribute('class', getLocalisation[z])
        } else if (getLocalisation[z] == 'maison2') {
            bgEre.children[z].setAttribute('class', getLocalisation[z])
        } else {

        }
    }
}
/**
 * 
 * fonction restauration des variables aux rechargements de pages
 * 
 */
function restauration() {

    if (localStorage.getItem('nbTotalClic') != null) {
        //restauration bloc stats
        totalClick.innerHTML = localStorage.getItem('nbTotalClic');
        //ne pas repartir avec un scoreClick a zero
        scoreClick = totalClick.innerHTML;
        nbTotalRessources.innerHTML = localStorage.getItem('nbTotalRessources');
        somme = nbTotalRessources.innerHTML
        nbTotalOutils.innerHTML = localStorage.getItem('nbTotalOutils');
        nbTotalEre.innerHTML = localStorage.getItem('nbTotalEre');
        nbTotalBatiment.innerHTML = localStorage.getItem('nbTotalBatiment');
        //gestion de restauration des maisons (emplacement et niveau)
        getLocalisation = localStorage.getItem('localisation')
        // transformer la chaine de caracteres en array
        getArray = getLocalisation.split(',');
        restorerMaison(getArray);
        maisonPrix1 = parseInt(localStorage.getItem('prixMaison1'));
        maisonPrix2 = parseInt(localStorage.getItem('prixMaison2'));
        maisonPrix3 = parseInt(localStorage.getItem('prixMaison3'));
        prixMaison.innerHTML = localStorage.getItem('bullePrix');
        nbTotalCata.innerHTML = localStorage.getItem('nbTotalCata');
        //restauration bloc ressources
        ressource1.innerHTML = localStorage.getItem('ressource1');
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML);
        ressource2.innerHTML = localStorage.getItem('ressource2');
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML);
        ressource3.innerHTML = localStorage.getItem('ressource3');
        compteurRessourcePlateau3 = parseInt(ressource3.innerHTML);
        //restauration item1 lvl1
        affichagePrixItem1Lvl1.innerHTML = localStorage.getItem('prix-item1-lvl1-bouton-shop');
        boutonItem1Lvl1.disabled = localStorage.getItem('boutonItem1Lvl1.disabled');
        boutonItem1Lvl1.style.color = localStorage.getItem('boutonItem1Lvl1.style.color');
        boutonItem1Lvl1.style.border = localStorage.getItem('boutonItem1Lvl1.style.border');
        boutonItem1Lvl1.style.backgroundColor = localStorage.getItem('boutonItem1Lvl1.style.backgroundColor');
        document.getElementById("imgitem1lvl1Vide").src = localStorage.getItem('imgitem1lvl1');
        //restauration item1 lvl2
        affichagePrixItem1Lvl2.innerHTML = localStorage.getItem('prix-item1-lvl2-bouton-shop');
        boutonItem1Lvl2.disabled = localStorage.getItem('boutonItem1Lvl2.disabled');
        boutonItem1Lvl2.style.color = localStorage.getItem('boutonItem1Lvl2.style.color');
        boutonItem1Lvl2.style.border = localStorage.getItem('boutonItem1Lvl2.style.border');
        boutonItem1Lvl2.style.backgroundColor = localStorage.getItem('boutonItem1Lvl2.style.backgroundColor');
        document.getElementById("imgitem1lvl2Vide").src = localStorage.getItem('imgitem1lvl2');
        //restauration item1 lvl3
        affichagePrixItem1Lvl3.innerHTML = localStorage.getItem('prix-item1-lvl3-bouton-shop');
        boutonItem1Lvl3.disabled = localStorage.getItem('boutonItem1Lvl3.disabled');
        boutonItem1Lvl3.style.backgroundColor = localStorage.getItem('boutonItem1Lvl3.style.backgroundColor');
        boutonItem1Lvl3.style.color = localStorage.getItem('boutonItem1Lvl3.style.color');
        boutonItem1Lvl3.style.border = localStorage.getItem('boutonItem1Lvl3.style.border');
        document.getElementById("imgitem1lvl3Vide").src = localStorage.getItem('imgitem1lvl3');
        //restauration item2 lvl1
        affichagePrixItem2Lvl1.innerHTML = localStorage.getItem('prix-item2-lvl1-bouton-shop');
        boutonItem2Lvl1.disabled = localStorage.getItem('boutonItem2Lvl1.disabled');
        boutonItem2Lvl1.style.backgroundColor = localStorage.getItem('boutonItem2Lvl1.style.backgroundColor');
        boutonItem2Lvl1.style.color = localStorage.getItem('boutonItem2Lvl1.style.color');
        boutonItem2Lvl1.style.border = localStorage.getItem('boutonItem2Lvl1.style.border');
        document.getElementById("imgitem2lvl1Vide").src = localStorage.getItem('imgitem2lvl1');
        //restauration item2 lvl2
        affichagePrixItem2Lvl2.innerHTML = localStorage.getItem('prix-item2-lvl2-bouton-shop');
        boutonItem2Lvl2.disabled = localStorage.getItem('boutonItem2Lvl2.disabled');
        boutonItem2Lvl2.style.backgroundColor = localStorage.getItem('boutonItem2Lvl2.style.backgroundColor');
        boutonItem2Lvl2.style.color = localStorage.getItem('boutonItem2Lvl2.style.color');
        boutonItem2Lvl2.style.border = localStorage.getItem('boutonItem2Lvl2.style.border');
        document.getElementById("imgitem2lvl2Vide").src = localStorage.getItem('imgitem2lvl2');
        //restauration item2 lvl3            
        affichagePrixItem2Lvl3.innerHTML = localStorage.getItem('prix-item2-lvl3-bouton-shop');
        boutonItem2Lvl3.disabled = localStorage.getItem('boutonItem2Lvl3.disabled');
        boutonItem2Lvl3.style.backgroundColor = localStorage.getItem('boutonItem2Lvl3.style.backgroundColor');
        boutonItem2Lvl3.style.color = localStorage.getItem('boutonItem2Lvl3.style.color');
        boutonItem2Lvl3.style.border = localStorage.getItem('boutonItem2Lvl3.style.border');
        document.getElementById("imgitem2lvl3Vide").src = localStorage.getItem('imgitem2lvl3');
        //restauration item3 lvl1
        affichagePrixItem3Lvl1.innerHTML = localStorage.getItem('prix-item3-lvl1-bouton-shop');
        boutonItem3Lvl1.disabled = localStorage.getItem('boutonItem3Lvl1.disabled');
        boutonItem3Lvl1.style.backgroundColor = localStorage.getItem('boutonItem3Lvl1.style.backgroundColor');
        boutonItem3Lvl1.style.color = localStorage.getItem('boutonItem3Lvl1.style.color');
        boutonItem3Lvl1.style.border = localStorage.getItem('boutonItem3Lvl1.style.border');
        document.getElementById("imgitem3lvl1Vide").src = localStorage.getItem('imgitem3lvl1');
        //restauration item3 lvl2
        affichagePrixItem3Lvl2.innerHTML = localStorage.getItem('prix-item3-lvl2-bouton-shop');
        boutonItem3Lvl2.disabled = localStorage.getItem('boutonItem3Lvl2.disabled');
        boutonItem3Lvl2.style.backgroundColor = localStorage.getItem('boutonItem3Lvl2.style.backgroundColor');
        boutonItem3Lvl2.style.color = localStorage.getItem('boutonItem3Lvl2.style.color');
        boutonItem3Lvl2.style.border = localStorage.getItem('boutonItem3Lvl2.style.border');
        document.getElementById("imgitem3lvl2Vide").src = localStorage.getItem('imgitem3lvl2');
        //restauration item3 lvl3
        affichagePrixItem3Lvl3.innerHTML = localStorage.getItem('prix-item3-lvl3-bouton-shop');
        boutonItem3Lvl3.disabled = localStorage.getItem('boutonItem3Lvl3.disabled');
        boutonItem3Lvl3.style.backgroundColor = localStorage.getItem('boutonItem3Lvl3.style.backgroundColor');
        boutonItem3Lvl3.style.color = localStorage.getItem('boutonItem3Lvl3.style.color');
        boutonItem3Lvl3.style.border = localStorage.getItem('boutonItem3Lvl3.style.border');
        document.getElementById("imgitem3lvl3Vide").src = localStorage.getItem('imgitem3lvl3');
        //restauration bonus multiplicateurs
        clickRessource1 = parseInt(localStorage.getItem('clickRessource1'));
        clickRessource2 = parseInt(localStorage.getItem('clickRessource2'));
        clickRessource3 = parseInt(localStorage.getItem('clickRessource3'));
        //restauration cartes
        lis[0].style.display = localStorage.getItem('cartes1');
        lis[1].style.display = localStorage.getItem('cartes2');
        lis[2].style.display = localStorage.getItem('cartes3');
        activationItemsShop();
    }

}
window.onload = restauration;

viderCache.addEventListener('click', recommencer);
/**
 * 
 * fonction d'effacement du webstorage
 * 
 */
function recommencer() {
    localStorage.clear();
    location.reload();

}

// ----------------------- fin : gestion des cookies || webstorage ----------------------- //




// ----------------------- Debut : ouverture / fermeture du shop ----------------------- //

//Cible le bouton ouvrir le shop
var boutonOuvrirShop = document.getElementById('bouton-ouvrir-shop');
var boutonFermerShop = document.getElementById('bouton-fermer-shop');
var blocShop = document.getElementById('bloc-shop');
//Initilisation Styles boutons    
boutonOuvrirShop.style.display = "block";
boutonFermerShop.style.display = "none";
/*
 * 
 * Fonction d'ouverture et de fermeture du shop
 * 
 */
function ouvrirShop() {
    boutonOuvrirShop.style.display = "none";
    boutonFermerShop.style.display = "block";
    blocShop.style.display = "block";
}

function fermerShop() {
    boutonOuvrirShop.style.display = "block";
    boutonFermerShop.style.display = "none";
    blocShop.style.display = "none";
}

//Lance la fonction ouvrir au clic sur le bouton
boutonOuvrirShop.onclick = ouvrirShop;
//Lance la fonction fermer au clic sur le bouton
boutonFermerShop.onclick = fermerShop;

// ----------------------- Fin : ouverture / fermeture du shop ----------------------- //

// ----------------------- Debut : ressource et compteur ----------------------- //

var plateau = document.getElementById("jeu");
bgEre = document.getElementById("bgEre");

//compteur des ressources
var compteurRessourcePlateau1 = 0;
var compteurRessourcePlateau2 = 0;
var compteurRessourcePlateau3 = 0;

//score de div avant incrémentation dans le compteur des ressources
var i = 0;
var j = 0;
var k = 0;

//Valeur d'un clic
var clickRessource1 = 1;
var clickRessource2 = 1;
var clickRessource3 = 1;

//affichage dans le html
ressource1.innerHTML = compteurRessourcePlateau1;
ressource2.innerHTML = compteurRessourcePlateau2;
ressource3.innerHTML = compteurRessourcePlateau3;

//prix achat maison
var maisonPrix1 = 3;
var maisonPrix2 = 5;
var maisonPrix3 = 4;

//affichage prix maison
var prixMaison = document.getElementById("prixMaison");
prixMaison.innerHTML = "Pour faire évoluer la maison clique dessus si tu as ces ressources <br> " + maisonPrix1 + " : <strong>os</strong> <br>" + maisonPrix2 + " : <strong>bois</strong> <br>" + maisonPrix3 + " : <strong>pierre</strong> <br>";

//compteur changement de niveau de la maison
var compteurChangementMaison = 0;

// nombre de maison dernier niveau
var maisonFixe = 0;

//compteur pour déclencher le changement de place des ressource
var declencheurRessource1 = 0;
var declencheurRessource2 = 0;
var declencheurRessource3 = 0;

//décrémenter catastrophe / dommages subi avec la catastrophe
var dommagesRessource1 = 2;
var dommagesRessource2 = 2;
var dommagesRessource3 = 2;

//algo qui permet d'incrémenter 
function clicker(plateau) {


    //si tu trouvre une div avec un class qui est os    
    if (plateau.target.getAttribute("class") == "os") {
        if (plateau.target.getAttribute("class", 'os')) {
            //alors tu incrémente le score de la div qui comptien la class os
            i = i + 1;
            //incrementation du total des clics
            incrTotalClick();
            // si la div arrive a un score de 10
            if (i == 4) {
                //tu remet le score a 0
                i = 0;
                // et tu incrémente de x le compteur de ressource
                compteurRessourcePlateau1 = compteurRessourcePlateau1 + clickRessource1;
                //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                declencheurRessource1++;
                //gestion de l'incrementation des ressources cumulées
                somme++;
                if (clickRessource1 > 1) {
                    nbTotalRessources.innerHTML = parseInt(nbTotalRessources.innerHTML) + clickRessource1;

                } else {
                    nbTotalRessources.innerHTML = somme;
                }

                //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                if (declencheurRessource1 == 10) {
                    //tu remets le compteur du déclencheur a 0
                    declencheurRessource1 = 0;
                    //tu appel le changements des places des ressources
                    changeDePlaceRessource1();
                }

            }
        }
        ressource1.innerHTML = compteurRessourcePlateau1;
    }
    activationItemsShop();

    //si tu trouvre une div avec un class qui est bois
    if (plateau.target.getAttribute("class") == "bois") {
        if (plateau.target.getAttribute("class", 'bois')) {
            //alors tu incrémente le score de la div qui comptien la class bois
            j = j + 1;
            //incrementation du total des clics
            incrTotalClick();
            // si la div arrive a un score de 4
            if (j == 3) {
                //tu remet le score a 0
                j = 0;
                // et tu incrémente de x le compteur de ressource
                compteurRessourcePlateau2 = compteurRessourcePlateau2 + clickRessource2;
                //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                declencheurRessource2++;
                //gestion de l'incrementation des ressources cumulées
                somme++;
                if (clickRessource1 > 1) {
                    nbTotalRessources.innerHTML = parseInt(nbTotalRessources.innerHTML) + clickRessource2;

                } else {
                    nbTotalRessources.innerHTML = somme;
                }

                //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                if (declencheurRessource2 == 6) {
                    //tu remets le compteur du déclencheur a 0
                    declencheurRessource2 = 0;
                    //tu appel le changements des places des ressources
                    changeDePlaceRessource2();
                }
            } 
        }
        ressource2.innerHTML = compteurRessourcePlateau2;
    } 
    activationItemsShop();

    //si tu trouvre une div avec un class qui est pierre 
    if (plateau.target.getAttribute("class") == "pierre") {
        if (plateau.target.getAttribute("class", 'pierre')) {
            //alors tu incrémente le score de la div qui comptien la class pierre
            k = k + 1;
            //incrementation du total des clics
            incrTotalClick();
            // si la div arrive a un score de 7
            if (k == 4) {
                //tu remet le score a 0
                k = 0;
                // et tu incrémente de x le compteur de ressource
                compteurRessourcePlateau3 = compteurRessourcePlateau3 + clickRessource3;
                //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                declencheurRessource3++;
                //gestion de l'incrementation des ressources cumulées
                somme++;
                if (clickRessource1 > 1) {
                    nbTotalRessources.innerHTML = parseInt(nbTotalRessources.innerHTML) + clickRessource3;

                } else {
                    nbTotalRessources.innerHTML = somme;
                }

                //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                if (declencheurRessource3 == 8) {
                    //tu remets le compteur du déclencheur a 0
                    declencheurRessource3 = 0;
                    //tu appel le changements des places des ressources
                    changeDePlaceRessource3();
                }
            }
        }
        ressource3.innerHTML = compteurRessourcePlateau3;
    } 
    activationItemsShop();       
}plateau.onclick = clicker;


//fonction qui permet d'appeler le changement de niveau
function clickerMaison(bgEre) {
    //si tu trouvre une div avec un class qui est maison    
    if (bgEre.target.getAttribute("class") == "maison") {

        if (bgEre.target.getAttribute("class", 'maison') && compteurRessourcePlateau1 >= maisonPrix1 && compteurRessourcePlateau2 >= maisonPrix2 && compteurRessourcePlateau3 >= maisonPrix3 && compteurChangementMaison <= 3) {
            compteurChangementMaison = compteurChangementMaison + 1;
            changeNiveauMaison();

        }
    } else if (bgEre.target.getAttribute("class") == "maison1") {

        if (bgEre.target.getAttribute("class", 'maison1') && compteurRessourcePlateau1 >= maisonPrix1 && compteurRessourcePlateau2 >= maisonPrix2 && compteurRessourcePlateau3 >= maisonPrix3 && compteurChangementMaison <= 3) {
            compteurChangementMaison = compteurChangementMaison + 1;
            changeNiveauMaison();
        }
    }

    activationItemsShop();
    //console.log(constructions);   
}
bgEre.onclick = clickerMaison;


//générateur de nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var randTab = 0;


//fonction de changement de niveau des habitation
function changeNiveauMaison() {
    for (item of bgEre.children) {
        if (item.classList.contains("maison") || item.classList.contains("maison1")) {
            if (item.classList.contains("maison") && compteurChangementMaison == 1) {

                item.classList.remove("maison");
                item.classList.toggle("maison1");

                compteurRessourcePlateau1 = compteurRessourcePlateau1 - maisonPrix1;
                compteurRessourcePlateau2 = compteurRessourcePlateau2 - maisonPrix2;
                compteurRessourcePlateau3 = compteurRessourcePlateau3 - maisonPrix3;
                maisonPrix1 = maisonPrix1 + 10;
                maisonPrix2 = maisonPrix2 + 10;
                maisonPrix3 = maisonPrix3 + 10;

                maisonFixe = maisonFixe + 1;
            } else if (item.classList.contains("maison1") && compteurChangementMaison == 2) {

                compteurRessourcePlateau1 = compteurRessourcePlateau1 - maisonPrix1;
                compteurRessourcePlateau2 = compteurRessourcePlateau2 - maisonPrix2;
                compteurRessourcePlateau3 = compteurRessourcePlateau3 - maisonPrix3;
                maisonPrix1 = maisonPrix1 + 5;
                maisonPrix2 = maisonPrix2 + 5;
                maisonPrix3 = maisonPrix3 + 5;

                item.classList.remove("maison1");
                item.classList.toggle("maison2");

                randTab = parseInt(getRandomArbitrary(0, 10));

                if (bgEre.children[randTab].classList.contains("vide") && maisonFixe < 5) {
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0;
                    incrConstruction();

                } else if (bgEre.children[randTab] != bgEre.children[randTab].classList.contains("vide") && maisonFixe < 5) {
                    randTab = parseInt(getRandomArbitrary(0, 10));
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0;
                    incrConstruction();

                }
            }
        }
        prixMaison.innerHTML = "Pour faire évoluer la maison clique dessus si tu as ces ressources <br> " + maisonPrix1 + " : <strong>os</strong> <br>" + maisonPrix2 + " : <strong>bois</strong> <br>" + maisonPrix3 + " : <strong>pierre</strong> <br>";
    }
    ressource1.innerHTML = compteurRessourcePlateau1;
    ressource2.innerHTML = compteurRessourcePlateau2;
    ressource3.innerHTML = compteurRessourcePlateau3;
    activationItemsShop();
}



//algo de changement des places des ressources
function changeDePlaceRessource1() {

    //tu parcours le plateau de jeu
    for (item of plateau.children) {

        //si une des div contient la class os
        if (item.classList.contains("os")) {
            //alors la class os est supprimer
            item.classList.remove("os");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")) {
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class os
                plateau.children[randTab].classList.add("os");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("bois") || plateau.children[randTab].classList.contains("pierre")) {
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class ow
                plateau.children[randTab].classList.add("os");
            }
        }
    }
}

function changeDePlaceRessource2() {

    //tu parcours le plateau de jeu
    for (item of plateau.children) {

        //si une des div contient la class bois
        if (item.classList.contains("bois")) {
            //alors la class bois est supprimer
            item.classList.remove("bois");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")) {
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class bois
                plateau.children[randTab].classList.add("bois");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("os") || plateau.children[randTab].classList.contains("pierre")) {
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class bois
                plateau.children[randTab].classList.add("bois");
            }
        }
    }
}

function changeDePlaceRessource3() {

    //tu parcours le plateau de jeu
    for (item of plateau.children) {

        //si une des div contient la class pierre
        if (item.classList.contains("pierre")) {
            //alors la class pierre est supprimer
            item.classList.remove("pierre");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")) {
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class pierre
                plateau.children[randTab].classList.add("pierre");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("os") || plateau.children[randTab].classList.contains("bois")) {
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class pierre
                plateau.children[randTab].classList.add("pierre");
            }
        }
    }
}
// ----------------------- Fin : ressource et compteur ----------------------- //

// ----------------------- Debut : carte des Connaissances ----------------------- //
/*------------ fonction vérification outils--------------*/

var outilsNiveau1 = 0;

var outilsNiveau2 = 0;

var outilsNiveau3 = 0;

console.log(outilsNiveau2);

function verificationOutils1() {

    // outils Niveau 1-----------------------------------------

    if (affichagePrixItem1Lvl1.innerHTML == "OBTENU") {
        outilsNiveau1 = outilsNiveau1 + 1;
    } else if (affichagePrixItem2Lvl1.innerHTML == "OBTENU") {
        outilsNiveau1 = outilsNiveau1 + 1;
    } else if (affichagePrixItem3Lvl1.innerHTML == "OBTENU") {
        outilsNiveau1 = outilsNiveau1 + 1;
    }
}

function verificationOutils2() {

    // outils Niveau 2-----------------------------------------

    if (affichagePrixItem1Lvl2.innerHTML == "OBTENU") {
        outilsNiveau2 = outilsNiveau2 + 1;
    } else if (affichagePrixItem2Lvl2.innerHTML == "OBTENU") {
        outilsNiveau2 = outilsNiveau2 + 1;
    } else if (affichagePrixItem3Lvl2.innerHTML == "OBTENU") {
        outilsNiveau2 = outilsNiveau2 + 1;
    }
}

function verificationOutils3() {

    // outils Niveau 3-----------------------------------------

    if (affichagePrixItem1Lvl3.innerHTML == "OBTENU") {
        outilsNiveau3 = outilsNiveau3 + 1;
    } else if (affichagePrixItem2Lvl3.innerHTML == "OBTENU") {
        outilsNiveau3 = outilsNiveau3 + 1;
    } else if (affichagePrixItem3Lvl3.innerHTML == "OBTENU") {
        outilsNiveau3 = outilsNiveau3 + 1;
    }
}

/*------------ fonction vérification outils--------------*/

console.log(outilsNiveau1);

/*--système achat carte--*/
var lis = document.getElementsByClassName("1");
var achatCarte = document.getElementById("achatCarte");
var carteConnaissance = document.getElementById("carteConnaissance");

var a = 1;

var cartePosseder = 0;

for (var i = 0; i < lis.length; i++) {
    lis[i].style.display = "none";
}

function achatCarte1() {

    if (cartePosseder == 0 && compteurRessourcePlateau1 >= 10 && compteurRessourcePlateau2 >= 10 && compteurRessourcePlateau3 >= 10 && constructions >= 1 && outilsNiveau1 == 3) {

        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none";
        }
        if (a == 2) {
            a = 0;
        } else {
            a += 1;
        }

        lis[a].style.display = "inline-block";
        cartePosseder = 1;
        document.getElementById("bar").src= "assets/img/progressBar1.png";
        ressource1.innerHTML  = compteurRessourcePlateau1 - 10;
        ressource2.innerHTML  = compteurRessourcePlateau2 - 10;
        ressource3.innerHTML  = compteurRessourcePlateau3 - 10;
        // bonustardis();
    } else if (cartePosseder == 1 && compteurRessourcePlateau1 >= 20 && compteurRessourcePlateau2 >= 20 && compteurRessourcePlateau3 >= 20 && constructions >= 2 && outilsNiveau2 == 3) {

        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none";
        }
        if (a == 2) {
            a = 0;
        } else {
            a += 1;
        }

        lis[a].style.display = "inline-block";
        cartePosseder = 2;
        document.getElementById("bar").src= "assets/img/progressBar2.png";
        ressource1.innerHTML  = compteurRessourcePlateau1 - 20;
        ressource2.innerHTML  = compteurRessourcePlateau2 - 20;
        ressource3.innerHTML  = compteurRessourcePlateau3 - 20;
    } else if (cartePosseder == 2 && compteurRessourcePlateau1 >= 30 && compteurRessourcePlateau2 >= 30 && compteurRessourcePlateau3 >= 30 && constructions >= 3 && outilsNiveau3 == 3) {

        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none";
        }

        if (a == 2) {
            a = 0;
        } else {
            a += 1;
        }

        lis[a].style.display = "inline-block";
        cartePosseder = 3;
        document.getElementById("bar").src= "assets/img/progressBar3.png";
        ressource1.innerHTML  = compteurRessourcePlateau1 - 30;
        ressource2.innerHTML  = compteurRessourcePlateau2 - 30;
        ressource3.innerHTML  = compteurRessourcePlateau3 - 30;
    }
} achatCarte.onclick = achatCarte1;

/*--système achat carte--*/

// ----------------------- Fin : ressource et compteur --------------------------- //

//------------------------- catastrophe -------------------------//

var vieCatastrophe = 15;
var dino = document.getElementById("catastrophe");

function choas() {
    if (compteurRessourcePlateau1 == 20) {
        dino.classList.contains("cacher");
        dino.classList.remove("cacher");
        dino.classList.add("attack");
        compteurRessourcePlateau1 = compteurRessourcePlateau1 - dommagesRessource1;
        compteurRessourcePlateau2 = compteurRessourcePlateau2 - dommagesRessource2;
        compteurRessourcePlateau3 = compteurRessourcePlateau3 - dommagesRessource3;
    }
}

//------------------------- fin catastrophe -------------------------//    

//------------------------- tardis -------------------------//

var bonusclick = 1;
var tardis = document.getElementById("tardis");

function bonustardis(){
    if (tardis.classList.contains("outTime") && cartePosseder == 1) {
        tardis.classList.remove("outTime");
        tardis.classList.add("inTime");
        bonusclick++;
        ressource1.innerHTML = compteurRessourcePlateau1 + 50;
        ressource2.innerHTML = compteurRessourcePlateau2 + 50;
        ressource3.innerHTML = compteurRessourcePlateau3 + 50;
    }
    
}tardis.onclick = bonustardis;

//------------------------- tradis -------------------------//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 