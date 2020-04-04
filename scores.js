//when you go to HS page grab local storage and post
var saveScores = document.getElementById("saveScores");
var currentStorage = JSON.parse(localStorage.getItem("scores"));
var clear = document.getElementById("clear");

for (var i=0;i<currentStorage.length;i++) {
    //create a list of names and scores
    var listScores = document.createElement("li");
    listScores.textContent=currentStorage[i].initials + "----" +currentStorage[i].score;
    saveScores.append(listScores);
};

//clear needs to get rid of all "scores" in local storage; and relaod page programaticlly
clear.addEventListener("click", function() {
    //clearcurrentStorage
    localStorage.clear();
    window.location=location.href="scores.html";
});