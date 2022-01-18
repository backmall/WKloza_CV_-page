/* menu dropdown */
function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menubar") {
        x.className += " responsive";
    } else {
        x.className = "menubar";
    }
}



/* form alert */

function alertMessage(){
    alert("Message has been sent");
}

/* scroll down to about me */

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

/* scroll to top of the page after clicking the footer */
$("#press").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top
    }, 2000);
});