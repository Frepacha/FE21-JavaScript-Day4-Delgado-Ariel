/* Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.

If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red. */

function Name() {
    var value = document.getElementById("FirstName").value;
    var value1 = document.getElementById("LastName").value;
<<<<<<< HEAD
    var value2 = document.getElementById("Age").value;
    var value4 = document.getElementById("select").value;
=======
    var value2 = document.getElementsById("Age")
>>>>>>> 3a695c852d9ced2b0585822a275d1f5a20403b3c

    let Firstname = " ";
    if (value > 5) {
<<<<<<< HEAD
        Firstname = `<div class="green">${value}</div>`
    } else { Firstname = `<div class="red">${value}</div>` }


    let LastName = " ";
    if (value1 > 5) {
        LastName = `<div class="green">${value1}</div>`
    } else { LastName = `<div class="red">${value1}</div>` }

    let Age = " ";
    if (value2 > 18) {
        Age = `<div class="green">${value2}</div>`
    } else { Age = `<div class="red">${value2}</div>` }

    let select = " ";
    if (value4 == "IT") {
        select = `<div class="purple">${value4}</div>`
    } else {
        select = `<div class="yellow">${value4}</div>`
    }
=======
        Firstname = `<p class="green">${value}</p>`
    }
    else { LastName = `<p class="red">${value}</p>` }

    let LastName = "";
    if (value1 > 5) {
        LastName = `<p class="green">${value1}</p>`
    }

>>>>>>> 3a695c852d9ced2b0585822a275d1f5a20403b3c

    //console.log(value)
    document.getElementById("list").innerHTML += `${Firstname} ${LastName} ${Age} ${select}`;

<<<<<<< HEAD
=======
    console.log(value)
    document.getElementById("list").innerHTML += `<div>${value}</div>`;
>>>>>>> 3a695c852d9ced2b0585822a275d1f5a20403b3c
}
document.getElementById("btn").addEventListener("click", Name);