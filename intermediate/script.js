let mySantas = document.getElementsByClassName("santa");

for (let i in mySantas) {
    mySantas[i].addEventListener("click", function() {
        this.style.visibility = "hidden";
    })
}