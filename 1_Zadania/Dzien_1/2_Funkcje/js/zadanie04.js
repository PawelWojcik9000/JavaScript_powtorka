function calculateTip(amount, raiting) {
    if(raiting == "Very good service") return amount * 0.25;
    else if(raiting == "Good service") return amount * 0.20;
    else if(raiting == "Neutral service") return amount * 0.15;
    else if(raiting == "Bad service") return 0;
    else return "Opis nieczytelny";
}