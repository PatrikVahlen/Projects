$(function () {
    $("button").on('click', function () {
        console.log("Hej");
        $("#toggle").slideToggle();
        $("#toggle").text("Kort Beskrivning:");
        // $(this).hide();
        // $(".toggle1").slideToggle();
        // $(".toggle1").text("Kort Beskrivning");
    })
});