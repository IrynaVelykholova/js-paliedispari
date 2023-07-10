const parolaInserita = document.getElementById("parola-inserita");
const risultato = document.getElementById("risultato");
const bottoneControlla = document.getElementById("bottone-controlla");

function palindromo(str) {
	const regex = /[\W_]/g;
	const parola = str.toLowerCase().replace(regex, '');
	const lunghezza = parola.length;

	for (let i = 0; i < lunghezza / 2; i++) {
		if (parola[i] !== parola[lunghezza - 1 - i]) {
			return false;
		}
	}
	return true;
}

bottoneControlla.addEventListener("click", function () {
    const valoreDellaParola = parolaInserita.value;

    if (palindromo(valoreDellaParola)) {
        risultato.innerHTML = "è palindroma";
    } else {
        risultato.innerHTML = "NON è palindroma";
    }
});


