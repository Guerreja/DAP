onsubmit = (event) => {formSubmitted()};

function formSubmitted (){
    document.write("Thanks you for the feedback");
    document.write("<br><br>");
    document.write("Redirecting to Home Page");
    setTimeout(changePage, 2000);
}

function changePage () {
    window.location.replace(`index.html`);
}