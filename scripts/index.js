function faculty_uebung( eineZahl ) {
var n = 1; // Zum hochzaehlen
var m = 1; // Ergebnis (Fakultät)
while ( n <= eineZahl ) {
m = m * n;
n = n + 1;
console.log(m);
}
return m;
};

var dieZahl = document.getElementById("eingabe").value;
document.getElementById("ausgabe").value = faculty_uebung (dieZahl)

function test(){
    console.log("Test Funktion")
}

document.getElementById("button").addEventListener("click", test);
