function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania

    console.log(randomNumber);
    console.log("Parzyste: ");
    for (var i = 0; i <= randomNumber; i++) {
        if(i % 2 == 0) console.log(i);                
    }

    console.log("Dzielniki: ");
    for (var i = 0; i <= randomNumber; i++) {
        if(randomNumber % i == 0) console.log(i);
    }

    console.log("Potegowanie: ");
    var pow = randomNumber % 5;
    console.log("Do potegi: "+pow)
    console.log(Math.pow(randomNumber, pow));
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
