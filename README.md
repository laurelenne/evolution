## Cookie clicker Evolution                                
https://laurelenne.github.io/laurelenne.evolution.github.io/   

#### Etape 1 : Structure de base 
Faire une structure de base HTML / CSS/ JS. Dans le HTML, mettre un bouton avec un identifiant bouton et une div avec un identifiant affichage, dont la valeur initiale sera 0. 

###### Etape 2 : Préparer le JS 
Préparez les variables en tête du JS qui nous permettront de manipuler notre bouton et notre div. Nous aurons également besoin d’une variable score que nous initialiserons à 0. 

#### Etape 3 : Augmenter le score 
Quand on clique sur le bouton, faire augmenter la variable score de 1, puis afficher ce score dans le innerHTML de l’affichage.  

#### Etape 4 : Préparation du multiplicateur 
Ajouter un bouton dont l’identifiant est multiplicateur. Préparer sa variable à côté de l’affichage et du bouton dans le JS. Entretenir un compteur de clics (dont la variable s’appellera compteur et sera initialisé à 1) sur ce bouton. La fonction associée au clic du multiplicateur s’appellera incrementer(). 

#### Etape 5 : Utilisation du multiplicateur  
Faire en sorte que l’augmentation du score via le clic du premier bouton ne soit plus de 1 mais de compteur. Par exemple, si j’ai cliqué une fois sur le bouton multiplicateur, chaque clic sur le premier bouton ajoutera désormais 2 au lieu de 1.  

#### Etape 6 : Prix du multiplicateur 
Le multiplicateur vous permet de gagner du score plus rapidement. Ça ne devrait pas être gratuit ! Faîtes en sorte que cliquer sur le bouton multiplicateur diminue de 50 votre score.  

#### Etape 7 : On ne fait pas de crédit !  
On ne peut faire crédit : pas de score négatif possible. Pensez à mettre à jour l’affichage du score après l’achat. 

#### Etape 8 : Affichage du compteur 
Affichez le compteur de multiplicateur à l’intérieur du bouton. Par exemple, si compteur vaut 5, il faut que le texte du bouton soit « Multiplicateur x5 ».  

#### Etape 9 : Augmentation du prix 
Acheter pleiiins de multiplicateurs est trop simple : il faut que plus on achète de multiplicateurs, plus celui-ci soit cher. Par exemple, le premier vaudrait 50, le second 100, le troisième 200… 
Ne faites pas des conditions en série, trouvez une autre façon de faire évoluer le prix.

#### Etape 10 : Affichage du prix 
Dans le texte du bouton, en plus du « x5 », ajouter le coût du prochain achat.  

#### Etape 11 : Autoclicker 
Nouvelle amélioration à acheter : pour cher, disons 200 de score, un clic sur le premier bouton est fait automatiquement chaque seconde. Pour cela, vous aurez besoin de setInterval() pour exécuter automatiquement la même fonction que le onclick du premier bouton.  

#### Etape 12 : Innovez !  
Trouvez de nouvelles améliorations et refactorisez votre CSS !  
