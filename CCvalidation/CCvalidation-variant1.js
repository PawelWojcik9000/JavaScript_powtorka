var cardTypes = ["Visa", "MC", "AE"];
var cardInput = document.getElementById("card");
var cardValidationMessage = document.createElement("span");
var isCardValid = false;

cardInput.addEventListener("keyup", function checkCardType(e) {
	var cardDisplay = this.nextElementSibling;
	switch (this.value.charAt(0)) {
		case '4': cardDisplay.innerHTML = cardTypes[0]; break; // Visa
		case '5': cardDisplay.innerHTML = cardTypes[1]; break; // MasterCard
		case '3': if (this.value.charAt(1) == 4 || this.value.charAt(1) == 7) {
			cardDisplay.innerHTML = cardTypes[2]; break; // American Express
		}
		default: cardDisplay.innerHTML = ''; break;
	}
});

cardInput.addEventListener("keyup", function validateCard(e) {
	var cardDisplay = this.nextElementSibling;
	if (cardDisplay.innerHTML == cardTypes[0]) { // Visa
		isCardValid = false;
		if (this.value.length == 13 || this.value.length == 14 || this.value.length == 15 || this.value.length == 16) isCardValid = true; 
	} else if (cardDisplay.innerHTML == cardTypes[1]) { // MasterCard
		isCardValid = false;
		if (this.value.length == 16) isCardValid = true;
	} else if (cardDisplay.innerHTML == cardTypes[2]) { // American Express
		isCardValid = false;
		if (this.value.length == 15) isCardValid = true;
	}
	if (isCardValid) {
		cardValidationMessage.innerHTML = "Karta poprawna.";
	} else {
		cardValidationMessage.innerHTML = "Karta niepoprawna.";
	}

	this.parentElement.appendChild(cardValidationMessage);
});