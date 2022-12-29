function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }

    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }

    let z = document.forms["myForm"]["company"].value;
    if (z == "") {
        alert("Company must be filled out");
        return false;
    }

    let p = document.forms["myForm"]["email"].value;
    if (p == "") {
        alert("Email must be filled out");
        return false;
    }

    let q = document.forms["myForm"]["code"].value;
    if (q == "") {
        alert("Area code must be filled out");
        return false;
    }

    let r = document.forms["myForm"]["number"].value;
    if (r == "") {
        alert("Phone number must be filled out");
        return false;
    }

    var mySelect = document.getElementById("select");
    if (mySelect.value === "selectstate"){
        alert('You must select a Subject!');
    return false;
    }

    var gender = form.querySelectorAll('input[name="inlineRadioOptions"]:checked');
        if (!gender.length) {
            alert('You must select yes or no');
            return false;
        }
}

function valid() {
    var p = /^\d{10}$/;
    var val = document.getElementById('pnum');
    if (val.value.length != 10) {
        alert("Plz Enter 10 Digits in phone-number!!");
    }
}

function validation() {

    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
    }

    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please enter valid email";
    }
    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
    }


}