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
}

function faculty( zahl ) {
    var m = 1;
    for(var n = 1; n <= zahl; n++) {
    m = m * n;
    console.log(m);
    };
    return m;
    }


/* var Zahlenwerte = ""

document.getElementById("B0").addEventListener("click",appendNull);

function appendNull() {
Zahlenwerte = Zahlenwerte + "0";
document.getElementById("ausgabefeld").value = Zahlenwerte;
}
document.getElementById("B1").addEventListener("click",appendEins);

function appendEins() {
Zahlenwerte = Zahlenwerte + "1";
document.getElementById("ausgabefeld").value = Zahlenwerte;
}
document.getElementById("B2").addEventListener("click",appendZwei);

function appendZwei() {
Zahlenwerte = Zahlenwerte + "2";
document.getElementById("ausgabefeld").value = Zahlenwerte;
}
document.getElementById("B3").addEventListener("click",appendDrei);

function appendDrei() {
Zahlenwerte = Zahlenwerte + "3";
document.getElementById("ausgabefeld").value = Zahlenwerte;
}
document.getElementById("B4").addEventListener("click",appendVier);
    
    function appendVier() {
    
    Zahlenwerte = Zahlenwerte + "4";
    document.getElementById("ausgabefeld").value = Zahlenwerte;
    }
    document.getElementById("B5").addEventListener("click",appendFuenf);
    
    function appendFuenf() {
    
    Zahlenwerte = Zahlenwerte + "5";
    document.getElementById("ausgabefeld").value = Zahlenwerte;
    }
    document.getElementById("B6").addEventListener("click",appendSechs);
    
    function appendSechs() {
    Zahlenwerte = Zahlenwerte + "6";
    document.getElementById("ausgabefeld").value = Zahlenwerte;
    }
    document.getElementById("B7").addEventListener("click",appendSieben);
    
    function appendSieben() {
    Zahlenwerte = Zahlenwerte + "7";
    document.getElementById("ausgabefeld").value = Zahlenwerte;
    }
    
    document.getElementById("B8").addEventListener("click",appendAcht);
    
    function appendAcht() {
    Zahlenwerte = Zahlenwerte + "8";
    document.getElementById("ausgabefeld").value = Zahlenwerte;
    }
    document.getElementById("B9").addEventListener("click",appendNeun);
    
    function appendNeun() {
        Zahlenwerte = Zahlenwerte + "9";
        document.getElementById("ausgabefeld").value = Zahlenwerte;
        }
        document.getElementById("Reset").addEventListener("click",appendReset);
        
        function appendReset() {
        Zahlenwerte = " ";
        document.getElementById("ausgabefeld").value = Zahlenwerte;
        }
        
        
        function faculty( zahl ) {
        var m = 1;
        for(var n = 1; n <= zahl; n++) {
        m = m * n;
        console.log(m);
        };
        return m;
        }
        
        /*function faculty( zahl ) {
        var n = 1; // Zum hochzaehlen
        var m = 1; // Ergebnis (Fakultät)
        while ( n <= zahl ) {
        m = m * n;
        n = n + 1;
        console.log(m);
        }
        return m;
        }
        
        
        function ausrechnen() {
        var eingabe = document.getElementById("eingabefeld").value;
        
        var ausgabe = faculty(eingabe);   
        document.getElementById("ausgabefeld").value = ausgabe;
}
/ausrechnen();/

document.getElementById("Rechner").addEventListener("click",ausrechnen); 
*/