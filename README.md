# Aktuelle Wetterlage #

OpenWeatherMap stellt gratis aktuelle Wetterlagen und Vorhersagen gratis zu Verfügung. 
In dieser Aufgabe geht es darum die Temperatur von einem Ort aus zu lesen. Es braucht aber eine OpenWeatherMap ID;

## OpenWeatherMapID ##

1.	Als Erstes ein Konto auf https://openweathermap.org/ einrichten. Ist kostenlos
2.	Nach Anmelden findest du unter API Keys den richtigen Code. Der AppID ist eine lange Zeichenkette.
3.	Zeichenkette kopieren und griffbereit speichern.

### Testen ###
Öffene im Browser `http://api.openweathermap.org/data/2.5/weather?appid=*HIER-DEINE-ID*&units=metric&q=Uri`

## Funktionen ##
Definieren als `function test(){...}` oder `test = function(){...}` oder `test = (e)=>{...}`

1. Für Button-Klick: `doKlick(event) { ... }`
2. Für Abfrage: `sendAnfrage(url) { ... }`
3. Für Ausgabe: `showResultat(resultat) { ... } `

_alternativ mit anonyme functionen_

## Bausteinen ##
DOM mit `document.getElementById()` oder `document.querySelector()` auslesen.
### Ort auslesen ###
    let ortElement = document.getElementById('ort');
    let ort = ortElement.value;

### Events ###
Mit html-Attribute `onclick='doClick()'` oder eine von beide Eventhandlers:
* element.onclick(doKlick);
* element.addEventHandler('click', doKlick);

### Anfrage senden ###
    fetch( url )
    .then( antwort=>antwort.json() ) // in JavaScript-Objekt umwandeln
    .then( showResultat );           // Resultat zeigen
    
### Ausgabe ###
    let messWerte = resultat.main;
    let tempElement = document.querySelector('#temp');
    tempElement.textContent = messWerte.temp;
    
    let wetter = resultat.weather[0];
    let wetterElement = document.querySelector('#wetter');
    wetterElement.textContent = wetter.description;
    
    
