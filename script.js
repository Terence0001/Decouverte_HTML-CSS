let elemBoutons = document.getElementsByTagName("button");
let bouton1 = elemBoutons[0] ; 
bouton1.addEventListener(
    "click",
    function calcHypo() {
        let coteA = (Number);
        let coteB = (Number);
        //saisie des paramètres 
        alert("CALCUL HYPOTHENUSE D'UN TRIANGLE RECTANGLE");
        //affichage demande calcul
        coteA = prompt("Entrez la longueur du coté A du triangle"); //entrez la 1e valeur
        coteB = prompt("Entrez la longueur du coté B du triangle"); //*****2e valeur
        //calcul  
        let hypo = (coteA*coteA + coteB*coteB); //formule
        //affichage des résultats 
        alert("L'hypothenuse C vaut " + hypo);
        console.log("L'hypothenuse C vaut " + hypo);
    
    }   
);

let secondBoutons = document.getElementsByTagName("button");
let bouton2 = secondBoutons[1] ; 
bouton2.addEventListener(
    "click", calculDepenses);
    function calculDepenses() {
        let totalDepenses = (Number);
        let nbDepenses = (Number);
        let montantDepenses = (Number); 
        totalDepenses = 0; 
        nbDepenses = 0;

//boucle de saisie , on s'arrete avec une depense 0 ou négative
    montantDepenses = prompt("Entrez le montant de la dépense en € svp "); // saisie montant Depense
    if (montantDepenses > 0) {
        nbDepenses = nbDepenses + 1 
        totalDepenses = totalDepenses + montantDepenses
    }
    
    else montantDepenses <= 0 
        //fin des saisies 
        alert ("BILAN FINAL : \n"+ nbDepenses + " dépenses pour un total de " + totalDepenses + "€");
        console.log("BILAN FINAL : " + nbDepenses + " dépenses pour un total de " + totalDepenses + "€")    
}