/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Twój komentarz ...stworzenie funkcji
function jeden() {

    //Twój komentarz ...stworzenie zmiennej i jej inicjacja
    var zmienna1 = 1;

    //Twój komentarz ...stworzenie funkcji zagniezdzonej
    function dwa() {

        //Twój komentarz ...wypisanie zmiennej widocznej dla calej funkcji
        console.log(zmienna1);

        //Twój komentarz ... zainicjowanie zmiennej lokalnej dla funkcji dwa();
        var zmienna2 = 3;
    }

    //Twój komentarz ...wywolanie funkcji dwa();
    dwa();

    //Twój komentarz ...wypiwanie na konsoli zmiennej lokalnej dla zagniezdzonej funkcji dwa(); nie zadziala, nie jest widoczne poza funkcja dwa();
    console.log(zmienna2)
}

//Twój komentarz ...wywolanie funkcji jeden(), brakuje srednika na koncu
jeden()