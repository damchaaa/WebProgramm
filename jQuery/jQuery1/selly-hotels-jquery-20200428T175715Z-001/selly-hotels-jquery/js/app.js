$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}
$('#subscribePopupButton').click(function () {
    $(".overlay").addClass("visible");
    $(".popup_wrapper").addClass("visible");
});

$('#closeButton').click(function () {
    $(".overlay").removeClass("visible");
    $(".popup_wrapper").removeClass("visible");
});


$("#popupWindow").click(function (event) {
    if ($(event.target).is($("#popupWindow"))){
        $(".overlay").removeClass("visible");
        $(".popup_wrapper").removeClass("visible");
    }
    else {
        console.log("hey");
    }


});