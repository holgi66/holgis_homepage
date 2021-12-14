/*
function test(){
    console.log("Test Funktion")
}

document.getElementById("button").addEventListener("click", test);
*/

document.getElementById("button").addEventListener("click",ausrechnen); 

var Zahlenwerte = ""

document.getElementById("B0").addEventListener("click",appendNull);
document.getElementById("B1").addEventListener("click",appendEins);
document.getElementById("B2").addEventListener("click",appendZwei);
document.getElementById("B3").addEventListener("click",appendDrei);
document.getElementById("B4").addEventListener("click",appendVier);
document.getElementById("B5").addEventListener("click",appendFuenf);
document.getElementById("B6").addEventListener("click",appendSechs);
document.getElementById("B7").addEventListener("click",appendSieben);
document.getElementById("B8").addEventListener("click",appendAcht);
document.getElementById("B9").addEventListener("click",appendNeun);
document.getElementById("Reset").addEventListener("click",appendReset);

function adNumberToTheTextbox (Zahl) {
Zahlenwerte = Zahlenwerte + Zahl;
document.getElementById("eingabe").value = Zahlenwerte;
}

function appendNull() {adNumberToTheTextbox (0);}
function appendEins() {adNumberToTheTextbox (1);}
function appendZwei() {adNumberToTheTextbox (2);}
function appendDrei() {adNumberToTheTextbox (3);}
function appendVier() {adNumberToTheTextbox (4);}
function appendFuenf() {adNumberToTheTextbox (5);}
function appendSechs() {adNumberToTheTextbox (6);}
function appendSieben() {adNumberToTheTextbox (7);}
function appendAcht() {adNumberToTheTextbox (8);}
function appendNeun() {adNumberToTheTextbox (9);}

function appendReset() {
Zahlenwerte = " ";
document.getElementById("eingabe").value = Zahlenwerte;
document.getElementById("ausgabe").value = Zahlenwerte;
}


function faculty( zahl ) {
    var m = 1;
    for(var n = 1; n <= zahl; n++) {
    m = m * n;
    console.log(m);
    };
    return m;
    }

       
        
function ausrechnen() {
        var eingabe = document.getElementById("eingabe").value;
        
        var ausgabe = faculty(eingabe);   
        document.getElementById("ausgabe").value = ausgabe;
}