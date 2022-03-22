"use strict";
const appId = "6a53d361a820b4eb6707f27eabb0d759";

function showResponse() {                                    //Ausgabe vom Resultat
    console.log( this.response );
}

var request = new XMLHttpRequest();
request.load = showResponse;
request.open( "GET", "https://api.openweathermap.org/data/2.5/weather?appid=6a53d361a820b4eb6707f27eabb0d759&units=metric&q=Uri" );
request.send();

// get the ok button
let okBtn = document.getElementById('ok');
// wait for a click on the ok button

okBtn.addEventListener("click", okClicked);

// when ok button clicked

function okClicked() {
    // get city field

    let ortInput = document.getElementById("ort-input");
    // get the city name from the city field

    let ortsName = ortInput.value;
    let ortOutput = document.getElementById("ort");
    ortOutput.textContent = ortsName;
    // create a url based on the city

    let url = "http://api.openweathermap.org/data/2.5/weather"
    url += '?q=' + ortsName;
    url += '&appid=' + appId;
    url += '&units=metric';
// send the url out on the internet

    fetch(url)
        .then(antwort => antwort.json()) //in Javascript-objekt umwandeln
        .then(doResult); //Relutat zeigen
}
// interpret the result
// output the result to the user

let doResult = function(resultat) {
    let messWerte = resultat.main;
    let tempElement = document.querySelector('#temp');
    tempElement.textContent = messWerte.temp;
    let humidityWerte = resultat.main;
    let humidityElement = document.querySelector('#humidity');
    humidityElement.textContent = humidityWerte.humidity;
    let wetter = resultat.weather[0];
    let wetterElement = document.querySelector('#wetter');
    wetterElement.textContent = wetter.description;
}
// get temperature, humidity, weather fields
// set the text of temperature, humidity, weather fields
