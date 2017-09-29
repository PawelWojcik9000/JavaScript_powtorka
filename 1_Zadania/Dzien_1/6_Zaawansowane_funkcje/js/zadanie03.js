/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...stworzenie funkcji
function sortArray() {

    //Twój komentarz ...stworzenie tablicy z intami
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ...przekazanie funckji jako argument, ktora posortuje zawartosc jako liczny anie stringi
    points.sort(function(a, b) {
        //Twój komentarz ...zwrocenie posortowanych liczb do tablicy
        return a-b;
    });

    //Twój komentarz ...zwrocenie zawartosc tablicy
    return points;
}

//Twój komentarz ...wywolanie funkcji
sortArray();
