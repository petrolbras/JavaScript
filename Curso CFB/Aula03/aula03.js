"use strict"

var nome = "petrol"

function teste(){
    if(true) { 
        console.log("dentro de if do teste: " + nome)
    }
    console.log("dentro de teste: " + nome)
}

teste ()

console.log("fora do teste: " + nome)