const bottoneGioca = document.getElementById("gioca");
let risultato;

function numeroRandom() {
    numeroPc = Math.round(Math.random() * 5) + 1;
    return numeroPc
}

bottoneGioca.addEventListener("click", function () {
    const numeroUtente = document.getElementById("numero").value
    const pariDispari = document.getElementById("pari-dispari").value
    

    numeroRandom()
    document.getElementById("pc").innerHTML = "Il numero scelto dal computer è:" + " " + numeroPc;
    
    function sommaDeiNumeri() {
        somma = parseInt(numeroPc) + parseInt(numeroUtente);
        return somma
    }
    sommaDeiNumeri()
    document.getElementById("somma-dei-numeri").innerHTML = "La somma dei numeri è:" + " " + somma;
    if (somma % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    if (pariDispari === risultato) {
        document.getElementById("risultato").innerHTML = "Hai vinto!"
    } else {
        document.getElementById("risultato").innerHTML = "Hai perso!"
    }
});



