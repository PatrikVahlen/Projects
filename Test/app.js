$(function () {
    $("#btnOne").on('click', function () {
        console.log("Hej");
        $("#toggleOne").slideToggle("slow");
        $("#toggleOne").text("Short description: Fly in and invade");
    })

    $("#btnTwo").on('click', function () {
        console.log("Hej");
        $("#toggleTwo").slideDown("slow");
        $("#toggleTwo").text("Short description: Walk in and invade");
    })

    $("#btnThree").on('click', function () {
        console.log("Hej");
        $("#toggleThree").slideDown("slow");
        $("#toggleThree").text("Short description: Walk in and invade");
    })

    $("#btnFour").on('click', function () {
        console.log("Hej");
        $("#toggleFour").slideDown("slow");
        $("#toggleFour").text("Short description: Service our speeders");
    })

    $("#btnFive").on('click', function () {
        console.log("Hej");
        $("#toggleFive").slideDown("slow");
        $("#toggleFive").text("Short description: Become an officer");
    })

    $("#btnSix").on('click', function () {
        console.log("Hej");
        $("#toggleSix").slideDown("slow");
        $("#toggleSix").text("Short description: Walk in and invade");
    })

    $("#btnSeven").on('click', function () {
        console.log("Hej");
        $("#toggleSeven").slideDown("slow");
        $("#toggleSeven").text("Short description: Become an officer");
    })

    $("#btnEight").on('click', function () {
        console.log("Hej");
        $("#toggleEight").slideDown("slow");
        $("#toggleEight").text("Short description: Guard rebel scum");
    })

    $("#btnNine").on('click', function () {
        console.log("Hej");
        $("#toggleNine").slideDown("slow");
        $("#toggleNine").text("Short description: Service our base");
    })

    $("#btnTen").on('click', function () {
        console.log("Hej");
        $("#toggleTen").slideDown("slow");
        $("#toggleTen").text("Short description: Program in Cobalt");
    })

    $("#submitButton").on('click', function (e) {
        e.preventDefault();
        $("#hideform").hide(1000);
        $("#submitMessage").slideDown("slow");
        $("#submitMessage").text("Your message has been sent to an intergalactic responder");
    })
});