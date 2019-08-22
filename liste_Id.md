# **Documentation technique des ids**

***un bloc genreral enveloppe l'application***

    Id du bloc parent =>"principal"

***l'application se decoupe en 3 blocs géneraux :***

    Id du bloc gauche => "gauche"
    Id du bloc centre => "central"
    id du bloc droite => "droite"

* Bloc gauche
  * Bloc Statistiques
  * Bloc Personnage
  * Bloc Ressources
* Bloc central
  * Bloc topCentre
  * Bloc bgEre
  * Bloc Jeu
* Bloc droite
  * Bloc Shop
  * Bloc Objets obtenus
  * Bloc Bonus maitre

## **Bloc gauche**

***Liste des id des 3 blocs de la partie gauche :***

    Id bloc statistiques => "statistiques" 
    Id bloc Personnage => "personnage" 
    Id bloc Ressources => "ressources" 

### **bloc Statistiques**

***Liste des id se trouvant dans Statistiques :***

    Id nombre de click total => "nbTotalClic"
    id ressources cumulées =>"nbTotalRessources"
    Id outils obtenus => "nbTotalOutils"
    Id ere terminée => "nbTotalEre"
    Id batiment construit => "nbTotalBatiment"
    Id catastrophe rencontrée => "nbTotalCata"
    id recommencer la partie =>"recommencer"

### **bloc Personnage**

***L'image du hero sera ciblée par l'id suivante :***

    Id personnage => "hero"

### **bloc Ressources**

***Liste des id se trouvant dans Ressources  :***

    id ressource 1 => "ressource1"
    id ressource 2 => "ressource2"
    id ressource 3 => "ressource3"

## **Bloc central**

***Liste des id des 3 blocs centraux***

    Bloc age + barre de connaissances => "topCentre"
    Bloc ere en cours => "bgEre"
    Bloc carte du jeu  => "jeu"

### **bloc age et barre de connaissances**

    Id Ere actuelle => "ereActuelle"
    id barre de connaissance => "barreConnaissance"

### **bloc background de l'ere en cours**

***Ce bloc accueille le background de l'ere en cours***

    id background ere en cours => "bgEre"

### **bloc jeu**

***Ce bloc accueille la grille de la partie***

    intervale d'id =>"x1y1" à "x10y10"

## **Bloc droite**

***Ce bloc contiendra ces 3 sous-blocs :***

    Bloc shop des objets => "shop"
    Bloc objets possédés => "objets"
    Bloc bonus Maitre => "bonusMaitre"

### **bloc shop**

    Bloc shop des objets => "bloc-shop"
    id ouverture du shop = "ouvrirShop"
    id fermeture du shop = "ouvrirShop"

### **bloc objets obtenus**

    Bloc objets possédés => "objets"
    id ouverture des objets obtenus => "ouvrirObjet"

### **bloc bonus clicker**

***Ce bloc contiendra une image a cliquer pour activer un bonus***

    Bloc bonus Maitre => "bonusMaitre"
    id du bonus => "lanceBonusMaitre"
