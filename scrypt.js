let Tool = function(name){
    this.name=name
}

let nożyce = new Tool("nożyce")
let kamień = new Tool("kamień")
let papier = new Tool("papier")

let tab = [papier, kamień, nożyce]

function losuj (wyborUzytkowniaka ){
    let index = Math.floor(Math.random() * tab.length)
    let p =document.getElementById("losowanie")
    switch(index){
        case 0: p.innerHTML="" + sprawdzWynik(wyborUzytkowniaka , "papier")
        break;
        case 1: p.innerHTML="" + sprawdzWynik(wyborUzytkowniaka , "kamień")
        break;
        case 2: p.innerHTML="" + sprawdzWynik(wyborUzytkowniaka , "nożyce")
        break;
    }
    
    
}
function sprawdzWynik(wyborUzytkowniaka, losKomputera){
    alert (" uzytkownik " + wyborUzytkowniaka + " komputer " + losKomputera)
    if (wyborUzytkowniaka == "papier" && losKomputera == "papier")
        return("Remis")
    if (wyborUzytkowniaka == "papier" && losKomputera == "kamień")
        return("Wygrana użytkownika")
    if (wyborUzytkowniaka == "papier" && losKomputera == "nożyce")
        return("Przegrana użytkownika")
    if (wyborUzytkowniaka == "kamień" && losKomputera == "kamień")
        return("Remis")
    if (wyborUzytkowniaka == "kamień" && losKomputera == "nożyce")
        return("Wygrana użytkownika")
    if (wyborUzytkowniaka == "kamień" && losKomputera == "papier")
        return("Przegrana użytkownika")
    if (wyborUzytkowniaka == "nożyce" && losKomputera == "nożyce")
        return("Remis")
    if (wyborUzytkowniaka == "nożyce" && losKomputera == "papier")
        return("Wygrana użytkownika")
    if (wyborUzytkowniaka == "nożyce" && losKomputera == "kamień")
        return("Przegrana uytkownika")
}