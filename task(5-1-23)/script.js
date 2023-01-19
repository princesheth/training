function valform() {
    const name = document.forms["form"]["name"].value;
    const comment = document.forms["form"]["comments"].value;
    const gender = document.forms["form"]["gender"].value;
    console.log(name)
    console.log(comment)
    console.log(gender)
    if (!name || !comment || !gender) {
        alert("All fields are compulsory");
        if (!name) {
            document.forms["form"]["name"].focus();
        }
        else if (!comment) {
            document.forms["form"]["comments"].focus();
        }
        else if (!gender) {
            document.getElementById("male").focus();
        }
    }
    else {
        alert("Form submitted")
        document.getElementById("form").reset();
    }
}