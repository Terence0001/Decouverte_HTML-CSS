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


/*  
    
let secondBoutons = document.getElementsByTagName("button");
let bouton2 = secondBoutons[1] ; 
bouton2.addEventListener(
    "click", calculDepenses() {
          let totalDepenses = (Number)
        let nbDepenses = (Number) 
        let montantDepense = (Number) 
        totalDepenses = 0 
        nbDepenses = 0 

        *** boucle de saisie , on s'arrete avec une depense 0 ou négative
        FAIRE
	    montantDepense = prompt("Entrez le montant de la dépense en € svp ")
	    if (montantDepense > 0) {
        nbDepenses = nbDepenses + 1 
		totalDepenses = totalDepenses + montantDepense 
    }

    while (montantDepense <= 0) {
    *** fin des saisies 
    alert ("BILAN FINAL :") 
    alert(nbDepenses + " dépenses pour un total de " + totalDepenses + "€")
    }
     
}
    )
 
 */ 




   








/** frigo pkst 1 2 3 4 les bases
 * affichage, saisie, variables, concaténation
 *
// ------------------------------------ 1
 alert("hello");

// ------------------------------------ 2
 prompt("Quel est ton prénom ?");

// ------------------------------------ 3
let pre = prompt("Quel est ton prénom ?");

// ------------------------------------ 4
 let pre ; 
 pre = prompt("Quel est ton prénom ?");
 alert ("Bonjour "+ pre );

 */

/** frigo pkst 5 6 alternative 
 * if else , condition, bloc avec var locale, echap , console log, 
 *
 // ------------------------------------ 5
 let firstname ; 
 firstname = prompt("Quel est ton prénom ?");

 if (firstname =="LUCAS") { 
    alert("Bonjour boss");
 }
else {
    alert ("Bonjour "+ firstname );
}

// ------------------------------------ 6
 let yearOfBirth ; 
 let yearReference = 2022 ;
 yearOfBirth = prompt("En quelle année etes vous né(e)  ?");

 if (yearOfBirth <= yearReference ) { 
    let age = yearReference - yearOfBirth
    alert("Vous avez " + age + " ans" );
 }
else {
    alert("Erreur de saisie : \nvotre année de naissance ne peut pas être " + yearOfBirth  );
    console.log("Erreur de saisie :" +  yearOfBirth  );
}

*/

/** frigo pkst 7 8 repetitive 
 * while, for , var locale
 *
// ------------------------------------ 7
alert("voir la console du navigateur");

let x = 1 ;
console.log("avant répétitive while " + x );

while (x <= 5) {
    console.log( x + " dans la rép");
    x = x+1 ;                                    // ou x++
}

console.log("après répétitive while " + x );

 
// ------------------------------------ 8
alert("voir la console du navigateur");

console.log("avant répétitive for" );

for (let x = 1 ; x <= 5 ; x= x+1 ) {          // ou x++
    console.log( x + " dans rép");
}

console.log("après répétitive for");


*/



/** frigo pkst 9 10  evenementiel (old skill)
 * forme facile à comprendre , mais à ne plus utiliser 
 * function, isolation avec var locale, même nommage
 * 
// ------------------------------------ 9
alert("Hello");

function monAction() {
    let today = "29 aout "  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

// ------------------------------------ 10
let today = "29/08/2022"  ;
let message = " à tous les DEVELOPPEURS" ;
alert("Hello ( " + today + " ) " + message  );

function monAction() {
    let today = "28 aout"  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

*/
