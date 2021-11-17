$(function () {
    $("#btnOne").on('click', function () {
        console.log("Hej");
        $("#toggle").slideDown("slow");
        $("#toggle").text("Short description: Fly in and invade");
    })
    $("#btnTwo").on('click', function () {
        console.log("Hej");
        $("#toggle1").slideDown("slow");
        $("#toggle1").text("Short description: Walk in and invade");
    })
    $("#btnThree").on('click', function () {
        console.log("Hej");
        $("#toggle2").slideDown("slow");
        $("#toggle2").text("Short description: Walk in and invade");
    })
    $("#btnFour").on('click', function () {
        console.log("Hej");
        $("#toggle3").slideDown("slow");
        $("#toggle3").text("Short description: Service our speeders");
    })
    $("#btnFive").on('click', function () {
        console.log("Hej");
        $("#toggle4").slideDown("slow");
        $("#toggle4").text("Short description: Become an officer");
    })
    $("#btnSix").on('click', function () {
        console.log("Hej");
        $("#toggle5").slideDown("slow");
        $("#toggle5").text("Short description: Walk in and invade");
    })

    $("#submitButton").on('click', function (e) {
        e.preventDefault();
        $("#hideForm").hide(1000);
        $("#submitMessage").slideDown("slow");
        $("#submitMessage").text("Your message has been sent to an intergalactic responder");
    })
});