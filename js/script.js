$(function () {

    $("i").draggable({
        containment: "#chess",
        revert: "invalid",
        revertDuration: 1000,
        // scope: function () {
        //     if ($(this).hasClass("black")) {
        //         return "black";
        //     } else
        //         return "white";
        // }
    });

    // $(".black").draggable({
    //     scope: black
    // });

    // $(".white").draggable({
    //     scope: white
    // });

    $("td").droppable({
        drop: function (ev, ui) {
            var source = ui.draggable;
            $(this).children("i").detach().appendTo($("#broken"));
            $(source).detach().css({
                top: 0,
                left: 0,
            }).appendTo($(this));
            $(this).css("background-color", "");
        },
        accept: function (el) {
            if ($(this).children("i").hasClass("black")) {
                var team = "black";
            };
            if ($(this).children("i").hasClass("white")) {
                var team = "white";
            };

            if (el.hasClass(team)) {
                return false;
            } else
                return true;
        },
        over: function () {
            var accept = $(this).droppable("option", "accept");
            if (accept) {
                $(this).css({
                    backgroundColor: "green"
                });
            }
            // else if (accept == false) {
            //     $(this).css({
            //         backgroundColor: "red"
            //     });
            // } else {
            //     $(this).css({
            //         backgroundColor: "green"
            //     });
            // }
        },
        out: function () {
            $(this).css("background-color", "");
        },
    });

});