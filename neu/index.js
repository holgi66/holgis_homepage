// ist nur ein test ob die datei greift!
console.log("ja");

function empfaenger1( antwort ) {
console.log("die daten wurden empfangen");
console.log(antwort);

var json = antwort.json();
return json;
}

function empfaenger2( json ) {
    console.log(json)
    console.log(json.vorname);
    console.log(json.nachname);
    var vorname = json.vorname;
    var nachname = json.nachname;
    var strasse = json.strasse;

    document.getElementById("vorname").value = vorname;
    document.getElementById("nachname").value = nachname;
    document.getElementById("strasse").value = strasse;
}


function mit_key_namen_abrufen () {
    // eingabe auslesen, ablage in variable
    var key = document.getElementById("eingabe").value;
    // Verarbeitung
    fetch("json/" + key + ".json")
    .then( empfaenger1 )
    .then( empfaenger2 )
}

function verschicken() {

    // URL:
    // http(s): Hypertext Transfer Protocol (s=secure)
    // ://
    // host: Gastgeber - ein Computer im Netzwerk
    // port: 80, 8000 - Nebenstelle
    // pfad/auf/eine - Verzeichnis
    // datei - "Der Endpunkt"
    //
    var url = "https://host:port/pfad/auf/eine/datei";
    
    var vorname = document.getElementById("vorname").value; // statt "Paul" ... ?
    var nachname = document.getElementById("nachname").value;
    var nachname = document.getElementById("strasse").value;

    var data = {
    "vorname": vorname,
    "nachname": nachname,
    "strasse": strasse
    };
    
    var datajson = JSON.stringify( data ); // JSON-Object to String
    
    // Verschicken der Daten
    fetch( url,
    {
    method: "POST", // "GET"
    body: datajson // der body muss ein string sein, deshalb die umsetzung mit "stringify"
    }
    );
    }
// Ausführen

var derButton = document.getElementById("drueck_mich");
derButton.addEventListener("click" , mit_key_namen_abrufen); 

var derButton = document.getElementById("senden");
derButton.addEventListener("click" , verschicken); 
