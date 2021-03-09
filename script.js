/* Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.

If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red. */

function Name() {
    var value = document.getElementById("FirstName").value;
    var value1 = document.getElementById("LastName").value;
    var value2 = document.getElementById("Age").value;
    var value4 = document.getElementById("select").value;

    let Firstname = " ";
    if (value > 5) {

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

    /*     Extend the previous form to have a select option, where your profession can be selected. If you are working in IT, the background of the div displaying the information from the form will turn purple, if you work in hospitality, your div will turn yellow, etc. 

    (Hint: extracting the selection value will work similarly to extracting the input values) */

    let select = " ";
    if (value4 == "IT") {
        select = `<div class="purple">${value4}</div>`
    } else {
        select = `<div class="yellow">${value4}</div>`
    }

    //console.log(value)
    document.getElementById("list").innerHTML += `${Firstname} ${LastName} ${Age} ${select}`;

}
document.getElementById("btn").addEventListener("click", Name);