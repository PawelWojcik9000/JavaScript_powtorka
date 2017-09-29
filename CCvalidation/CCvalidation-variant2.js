/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var cardInput = document.getElementById('card');
    var cardType = '';
    var errorMessage = document.createElement('span');

    cardInput.addEventListener('keyup', function validateCardType() {
        if (errorMessage.parentElement) {
            errorMessage.innerHTML = '';
            this.parentElement.parentElement.removeChild(errorMessage);
        }
        
        switch(this.value.charAt(0)) {
            case '4': 
                cardType = 'Visa';
                this.nextElementSibling.innerHTML = cardType;
                break;
            case '5': 
                cardType = 'MasterCard';
                this.nextElementSibling.innerHTML = cardType;
                break;
            case '3':
                if (this.value.charAt(1) == '4' || this.value.charAt(1) == '7') {
                    cardType = 'American Express';
                    this.nextElementSibling.innerHTML = cardType;
                } else if (this.value.charAt(1) == '') {
                    this.nextElementSibling.innerHTML = '';
                    break;
                } else {
                    errorMessage.innerHTML = 'Karta nieobsługiwana lub błędna.';
                }
                break;
            case '':
                this.nextElementSibling.innerHTML = '';
                break;
            default: 
                errorMessage.innerHTML = 'Karta nieobsługiwana lub błędna.';
                break;
        }

        this.parentElement.parentElement.appendChild(errorMessage);

        switch(cardType) {
            case 'Visa':
                if(this.value.length < 13) {
                    errorMessage.innerHTML = 'Numer karty jest za krótki';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else if (this.value.length > 16) {
                    errorMessage.innerHTML = 'Numer karty jest za długi';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else {
                    this.style.borderColor = 'green';
                    this.style.borderWidth = '3px';
                }
                break;
            case 'MasterCard':
                if(this.value.length < 16) {
                    errorMessage.innerHTML = 'Numer karty jest za krótki';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else if (this.value.length > 16) {
                    errorMessage.innerHTML = 'Numer karty jest za długi';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else {
                    this.style.borderColor = 'green';
                    this.style.borderWidth = '3px';
                }
                break;
            case 'American Express':
                if(this.value.length < 15) {
                    errorMessage.innerHTML = 'Numer karty jest za krótki';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else if (this.value.length > 15) {
                    errorMessage.innerHTML = 'Numer karty jest za długi';
                    this.style.borderColor = '';
                    this.style.borderWidth = '';
                } else {
                    this.style.borderColor = 'green';
                    this.style.borderWidth = '3px';
                }
                break;
        }
    });
});