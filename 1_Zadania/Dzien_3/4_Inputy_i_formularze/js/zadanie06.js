/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var team1 = document.getElementById("team1");
    var team1points = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var team2points = document.getElementById("points2");
    var submitBtn = document.querySelector(".btn");
    var table = document.querySelectorAll(".table td");
    var message = document.createElement("span");

    submitBtn.addEventListener("click", function(e) {
        if(team1.value !== team2.value && team1.value.length > 0 && team2.value.length > 0 && team1points.value >= 0 && team2points.value >= 0) {
            table[4].innerHTML = team1.value;
            table[5].innerHTML = team2.value;
            table[6].innerHTML = team1points.value+" - "+team2points.value;
            e.preventDefault();
        } else {
            e.preventDefault();
            message.innerHTML = "zle wypelniony formularz";
            this.parentElement.appendChild(message);
        }
    })
});