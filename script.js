/* Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.

If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red. */

function Firstname() {
    var value = document.getElementsById("FirstName").value;
    var value1 = document.getElementById("LastName").value;
    var value2 = document.getElementsById("Age")

    let Firstname = "";
    if (value > 5) {
        Firstname = `<p class="green">${value}</p>`
    }
    else { LastName = `<p class="red">${value}</p>` }

    let LastName = "";
    if (value1 > 5) {
        LastName = `<p class="green">${value1}</p>`
    }



    console.log(value)
    document.getElementById("list").innerHTML += `<div>${value}</div>`;
}
document.getElementsById("btn").addEventListener("click", result);