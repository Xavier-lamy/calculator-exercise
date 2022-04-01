# Projet de calculatrice en JavaScript

## Installation de webpack

## Algorithme:
1. Réglages de base: 
    - ✔️Valeur par défaut dans la calculatrice: ``0`` 
    - ✔️``input_zone`` correspond au bas de l'écran d'affichage et sert à afficher soit le nombre tapé actuellement par l'utilisateur, soit le résultat du précédent calcul, il est définit par un id (``input_zone``) et un attribut ``data-type`` égal soit à ``current`` si il s'agit du nombre tapé, soit à ``result`` si c'est le résultat d'une opération, ``temporary`` si c'est un nombre en attente (ex: quand on vient d'entrer un opérateur le nombre tapé précedemment reste dans l'``inputZone`` mais doit être écrasé par un éventuel nouveau nombre) , ou ``error``, s'il y a une erreur, il possède un attribut ``data-value`` pour afficher la valeur réelle du champ (différente de la valeur visuelle, ex: valeur visuelle ``5²`` valeur réelle ``25`` ) 
    - ✔️``current_calc`` correspond au haut de l'écran d'affichage et sert à afficher le calcul en cours 
2. Récupérer:
    - ✔️le click de la souris sur une touche -> déterminer la valeur de cette touche (data-value du bouton) 
    - ✔️ou la pression d'une touche du clavier -> déterminer la valeur de cette touche (valeur de la touche dans l'event) 
3. valeur touche 
    + Si type valeur = chiffre:
        - ✔️Si pas encore de chiffre (= 0) -> Afficher le contenu de cette touche sur l'écran dans la zone affichage ``input_zone`` 
        - ✔️Si chiffre déjà présent -> créer un nombre à partir du ``chiffre précédent`` et du ``chiffre entré`` 
        - Si valeur déjà présente n'est pas un chiffre (contient l'attribut ``data-nan``, c'est à dire le résultat de 1/x, x², √x ou x%) on efface cette donnée déjà présente pour la remplacer par le nombre (qui est de toute façon déjà présent dans ``current_calc``)
        - ✔️Si on a déjà un résultat (``input_zone`` = ``result`` et ``current_calc`` termine par ``=``) alors on efface complètement ``current_calc`` et on affiche le nouveau nombre dans ``input_zone`` avec valeur ``content``
    + Si valeur = ``,`` :
        - ✔️ajouter une virgule au nombre pour en faire un nombre décimal 
    + Si valeur = ``+/-``:
        - Si valeur affichée dans zone affichage ``input_zone`` est ``positive`` -> la rendre négative
        - Si valeur affichée dans zone affichage ``input_zone`` est ``négative`` -> la rendre positive

    + Si type valeur = opérateur(``+ - * /``): 
        - ✔️Si entrée précédente = ``,`` (çàd pas de chiffre après la virgule, ne pas comptabiliser la virgule, ``63,`` compte comme un ``63``)

        - ✔️Afficher le précedent nombre et l'opérateur de calcul dans la zone ``current_calc``, calculer si besoin le précédent nombre si on a déjà plusieurs **tours**,:
            > Exemple on a rentré ``10`` puis ``+`` on a donc ``10 +`` dans la zone ``current_calc`` si on rentre ``15`` puis ``+`` à nouveau, on calcule d'abord le premier calcul ``10+15=25`` puis on affiche ``25 +`` dans la zone ``current_calc`` et ``25`` dans ``input_zone``

            - ✔️on laisse aussi le précédent nombre dans la zone ``input_zone`` tant qu'il n'est pas changé par l'utilisateur:
            > Exemple quand on rentre ``10`` puis ``+`` on a donc ``10 +`` dans la zone ``current_calc`` et ``10`` dans la zone ``input_zone``

        - ✔️Si ``current_calc`` termine par un opérateur(``+ - * /``) -> On change cet opérateur par le nouveau pressé

        - Si ``current_calc`` termine par ``=`` -> on vient de faire un calcul, on passe alors la valeur de ``input_zone`` dans calcul en cours avec l'opérateur

        - Si ``current_calc`` a un calcul non résolu (ex: le système de pourcentage peut laisser un calcul de type ``a + (b% de a)`` et ``(b% de a)`` dans ``input_zone``,  on résout alors le calcul de ``current_calc`` et on affiche ``c +`` dans ``current_calc`` et le résultat ``c`` dans ``input_zone``)

    + Si valeur = ``=``:
        - Si ``current_calc`` termine par un opérateur -> Prend le calcul dans ``current_calc`` et le résout avec la valeur de ``input_zone``, affiche le calcul sous la forme ``'ancien current_calc' 'opérateur' 'dernier nombre inséré' '='`` dans ``current_calc`` et le résultat dans ``input_zone``
        > ex: si on a ``a +`` dans ``current_calc`` et ``b`` dans ``input_zone``, on obtient alors ``a + b =`` dans ``current_calc`` et ``c`` dans ``input_zone``

        - Si ``current_calc`` termine par ``=`` (ç'est à dire qu'on vient de résoudre un calcul et qu'on a donc un résultat à l'écran avec la valeur ``result``) appuyer à nouveau sur = passe la valeur de résultat dans le calcul et le résout à nouveau (fonctionnear surement avec une fonction récursive):
        > ex: dans ``current_calc`` on a : ``a + b =`` et dans ``input_zone`` on a ``c``, si on exécute à nouveau ``=`` on calcule alors: ``c + b`` et affiche alors ``c + b =`` et ``d`` dans ``input_zone``

    + Si valeur = ``CE``
        - Si ``input_zone`` = ``current`` -> On efface le nombre contenu dans ``input_zone`` (on le passe à 0)
        - Si ``input_zone`` = ``result`` -> on met ``input_zone`` à 0 et on efface le calcul dans ``current_calc``
    + Si valeur = ``C``
        - On reset tout
    + Si valeur = ``DEL``
        - On efface le dernier caractère entré (chiffre ou virgule)
    
## Calculs avancés:
Ces éléments seront considérés comme opérateurs complexes 
+ Si valeur = ``%``:
    - Si ``current_calc`` est vide ou = 0 -> afficher 0 dans ``current_calc`` et ``input_zone``
    - Si ``current_calc`` contient un calcul (ex: ``10 +``) , prendre la valeur du premier nombre de ce calcul et calculer le pourcentage choisi en fonction de ``input_zone``
    > ex: on a ``a +`` dans ``current_calc`` et ``b`` dans ``input_zone``, l'utilisateur presse ``%`` on va donc faire et afficher ``a + (b% de a)`` dans : ``current_calc`` et ``(b% de a)`` (ou ``b%`` en affichage visuel et ``(b% de a)`` en data-value) dans ``input_zone``

+ Si valeur = ``1/x``:
    - On réalise l'inverse du nombre dans ``input_zone``:
    > ex: on a ``a +`` dans ``current_calc`` et ``b`` dans ``input_zone``, l'utilisateur presse ``1/x`` on va donc faire et afficher ``a + 1/b`` (sans ``=``) dans : ``current_calc`` et le résultat de ``1/b`` dans ``input_zone`` (ou ``1/b`` en affichage visuel et le résultat de ``1/b`` en data-value), il faut alors cliquer sur ``=`` pour avoir le résultat 
    - Il faut ajouter un attribut data pour empêcher l'ajout de chiffres au contenu de ``input_zone``

+ Si valeur = ``x²``:
    - On réalise le carré du nombre x dans ``input_zone``:
    > ex: on a ``a +`` dans ``current_calc`` et ``b`` dans ``input_zone``, l'utilisateur presse ``x²`` on va donc faire et afficher ``a + b²`` (sans ``=``) dans : ``current_calc`` et le résultat de ``b²`` dans ``input_zone`` (ou ``b²`` en affichage visuel et le résultat de ``b²`` en data-value), il faut alors cliquer sur ``=`` pour avoir le résultat

+ Si valeur = ``√x``:
    - On réalise le carré du nombre x dans ``input_zone``:
    > ex: on a ``a +`` dans ``current_calc`` et ``b`` dans ``input_zone``, l'utilisateur presse ``√x`` on va donc faire et afficher ``a + √b`` (sans ``=``) dans : ``current_calc`` et le résultat de ``√b`` dans ``input_zone`` (ou ``√b`` en affichage visuel et le résultat de ``√b`` en data-value), il faut alors cliquer sur ``=`` pour avoir le résultat

### Erreurs et détails à prendre en compte:
- Division par zéro -> renvoie un message d'erreur
- Nombre en entrée supérieur à 16 caractères -> ne peut pas écrire plus ✔️
- Nombre en sortie supérieur à 16 caractères -> est transformé en puissance de 10 pour l'affichage: exemple 11 000 000 000 000 000 est transformé en 1.1e+16 (1.1*10^16)
- Résultat trop grand ou trop petit (limite à 9,999999999999488e+8191 et 9,999999999999488e-8191) -> message de dépassement de capacité, à voir si on met une limite en fonction des capacités de js , ou une limite manuelle
- Les nombres à l'affichage doivent être séparés en paquet de 3 chiffres
- Que se passe-t-il si une touche est pressé en même temps qu'une cliquée -> s'assurer que l'une soit prioritaire ✔️
- Si une erreur non prévue par les éléments ci-dessus -> écrire ``ERROR`` dans ``input_zone`` et mettre le ``data-type=error`` ✔️

### Exemple
+ L'utilisateur a déjà taper ``6 +`` il est en train d'entrer ``5``
```html
<div class="bg-gray-600 col-span-4 h-24 text-white p-2 flex flex-col justify-between items-end">
    <span id="current_calc">
        <span id="previous_number" data-value="6">6</span>
        <span id="operator">+</span>
    </span>
    <span id="input_zone" data-type="current" data-value="5" class="font-bold text-lg">5</span>
</div>
```
+ S'il presse ``+`` à nouveau on doit donc avoir:
```html
<div class="bg-gray-600 col-span-4 h-24 text-white p-2 flex flex-col justify-between items-end">
    <span id="current_calc">
        <span id="previous_number" data-value="11">11</span>
        <span id="operator">+</span>
    </span>
    <span id="input_zone" data-type="result" data-value="11" class="font-bold text-lg">11</span>
</div>
```
+ S'il presse ``=`` on doit avoir:
```html
<div class="bg-gray-600 col-span-4 h-24 text-white p-2 flex flex-col justify-between items-end">
    <span id="current_calc">
        <span id="previous_number" data-value="6">6</span>
        <span id="operator_sign">+</span>
        <span id="latest_number" data-value="5">5</span>
        <span id="equal_sign">=</span>
    </span>
    <span id="input_zone" data-type="result" data-value="11" class="font-bold text-lg">11</span>
</div>
```

## Pour les boutons:
```html
<div id="calculator_keyboard" class="grid grid-cols-4 gap-1 mt-1">
    <button data-class="complex_operator" data-value="%" class="bg-gray-100 p-2 hover:bg-gray-300">%</button>
    <button data-class="delete_button" data-value="CE" class="bg-gray-100 p-2 hover:bg-gray-300">CE</button>
    <button data-class="delete_button" data-value="C" class="bg-gray-100 p-2 hover:bg-gray-300">C</button>
    <button data-class="delete_button" data-value="DEL" class="bg-gray-100  hover:bg-gray-300">DEL</button>
    <button data-class="complex_operator" data-value="1/x" class="bg-gray-100 p-2 hover:bg-gray-300">1/x</button>
    <button data-class="complex_operator" data-value="x²" class="bg-gray-100 p-2 hover:bg-gray-300">x²</button>
    <button data-class="complex_operator" data-value="√x" class="bg-gray-100 p-2 hover:bg-gray-300">√x</button>
    <button data-class="operator" data-value="/" class="bg-gray-100 p-2 hover:bg-gray-300">/</button>
    <button data-class="numeric" data-value="7" class="bg-white p-2 hover:bg-gray-300">7</button>
    <button data-class="numeric" data-value="8" class="bg-white p-2 hover:bg-gray-300">8</button>
    <button data-class="numeric" data-value="9" class="bg-white p-2 hover:bg-gray-300">9</button>
    <button data-class="operator" data-value="*" class="bg-gray-100 p-2 hover:bg-gray-300">*</button>
    <button data-class="numeric" data-value="4" class="bg-white p-2 hover:bg-gray-300">4</button>
    <button data-class="numeric" data-value="5" class="bg-white p-2 hover:bg-gray-300">5</button>
    <button data-class="numeric" data-value="6" class="bg-white p-2 hover:bg-gray-300">6</button>
    <button data-class="operator" data-value="-" class="bg-gray-100 p-2 hover:bg-gray-300">-</button>
    <button data-class="numeric" data-value="1" class="bg-white p-2 hover:bg-gray-300">1</button>
    <button data-class="numeric" data-value="2" class="bg-white p-2 hover:bg-gray-300">2</button>
    <button data-class="numeric" data-value="3" class="bg-white p-2 hover:bg-gray-300">3</button>
    <button data-class="operator" data-value="+" class="bg-gray-100 p-2 hover:bg-gray-300">+</button>
    <button data-class="switch_sign" data-value="+/-" class="bg-white p-2 hover:bg-gray-300">+/-</button>
    <button data-class="numeric" data-value="0" class="bg-white p-2 hover:bg-gray-300">0</button>
    <button data-class="float" data-value="," class="bg-white p-2 hover:bg-gray-300">,</button>
    <button data-class="equal" data-value="=" class="bg-green-200 p-2 hover:bg-gray-300">=</button>
</div>
```