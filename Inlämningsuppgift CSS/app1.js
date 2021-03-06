const events = [
    {
        url: "https://images.unsplash.com/photo-1578374173713-32f6ae6f3971?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Name: TIE-Fighter",
        date: "Date: 2021-12-12",
        category: "Category: Airborne invasion",
        description: "Short description: Fly in and invade",
        link: "details.html",
        btnId: "btnOne",
    },
    {
        url: "https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Name: AT-ST",
        date: "Date: 2021-02-06",
        category: "Category: Land assault",
        description: "Short description: Walk in and invade",
        link: "details.html",
        btnId: "btnTwo",
    },
    {
        url: "https://images.unsplash.com/photo-1591927643618-0b3b8442e3a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Name: Infantry",
        date: "Date: 2022-01-16",
        category: "Category: Land assault",
        description: "Short description: Walk in and invade",
        link: "details.html",
        btnId: "btnThree",
    },
    {
        url: "https://images.unsplash.com/photo-1578374173705-08648798df55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name: "Name: Mechaninc",
        date: "Date: 2021-12-19",
        category: "Category: Maintenance",
        description: "Short description: Maintain our speeders",
        link: "details.html",
        btnId: "btnFour",
    },
    {
        url: "https://images.unsplash.com/photo-1523310636633-9778bc102895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxzdGFyJTIwd2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Name: Officer training",
        date: "Date: 2022-03-01",
        category: "Category: Cadet Schoold",
        description: "Short description: Become an officer",
        link: "details.html",
        btnId: "btnFive",
    },
    {
        url: "https://images.unsplash.com/photo-1547700032-04b5ebe026a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Name: Infantry",
        date: "Date: 2021-06-01",
        category: "Category: Land assault",
        description: "Short description: Walk in and invade",
        link: "details.html",
        btnId: "btnSix",
    },
]

$(function () {

    $.each(events, function (key, value) {
        const eventWrapper = $("<div></div>", { class: "eventframe" }).text("");
        const eventImg = $("<img>", { class: "eventpicture", src: value.url, alt: value.name });
        const eventName = $("<p></p>").text(value.name);
        const eventDate = $("<p></p>").text(value.date);
        const eventCategory = $("<p></p>").text(value.category);
        const eventId = $("<p></p>").text("");
        const eventPtag = $("<p></p>").text("");
        const eventAtag = $("<a></a>", { href: value.link }).text("Details");
        $(eventPtag).append(eventAtag);
        const eventButton = $("<button></button>", { id: value.btnId, class: "btn" }).text("More info");

        $(eventButton).on('click', function () {
            $(eventId).slideDown("");
            $(eventId).text(value.description);
        });

        $(eventWrapper).append(eventImg);
        $(eventWrapper).append(eventName);
        $(eventWrapper).append(eventDate);
        $(eventWrapper).append(eventCategory);
        $(eventWrapper).append(eventId);
        $(eventWrapper).append(eventPtag);
        $(eventWrapper).append(eventButton);
        $("#container-middle").append(eventWrapper);
    });
    $("#submitButton").on('click', function (e) {
        e.preventDefault();
        $("#hideform").hide(1000);
        $("#submitMessage").slideDown("slow");
        $("#submitMessage").text("Your message has been sent to an intergalactic responder");
    })
});