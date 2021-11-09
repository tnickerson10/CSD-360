
var sportsTeams = ["Chargers", "Packers", "Chiefs", "Bears", "Padres", "Mets", "San Jose Sharks", "Toronto Maple Leafs",
"Golden State Warriors", "Nuggets"];

let teamsOrdered = " ";
let teamsReversed = " ";

function listTeamsReversed(teams) {
    for (var i = sportsTeams.length - 1; i >= 0; i--) {
            teamsReversed += sportsTeams[i] + " "
        } return teamsReversed;
    }

function listTeamsOrdered(teams) {
    for (var i = 0; i < sportsTeams.length; i++) {
            teamsOrdered += sportsTeams[i] + " "
        } return teamsOrdered;
    }

document.getElementById("ordered").innerText = listTeamsOrdered(sportsTeams);
document.getElementById("reversed").innerText = listTeamsReversed(sportsTeams);
document.getElementById("reverseTeams1").addEventListener("click", function() {document.getElementById("ordered").innerHTML = teamsReversed});
document.getElementById("reverseTeams2").addEventListener("click", function() {document.getElementById("reversed").innerHTML = teamsOrdered});



