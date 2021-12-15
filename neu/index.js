// ist nur ein test ob die datei greift!
console.log("ja");

function name_vorname_verknuepfen() {
    // Eingabe
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    // Verknüpfen

    var name = "";

    if ( vorname == "" ){
        name = nachname;
    }
    else {
    name = vorname + " " + nachname;
    }
    
    // Ausgabe
    document.getElementById("name").value = name;
}

// Ausführen
var derButton = document.getElementById("drueck_mich");
derButton.addEventListener("click" , name_vorname_verknuepfen);