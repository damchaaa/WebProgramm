$(window).on('load', function(){
    initMobileMenu();
    initPopup();
    initScrollUpButton();
    checkForm();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
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

function initPopup() {
    $('#subscribePopupButton').click(function() {
        $('#overlay').addClass('visible');
        $('#popupWindow').addClass('visible');
    });

    $('#closeButton').click(function() {
        $('#overlay').removeClass('visible');
        $('#popupWindow').removeClass('visible');
    });

    $('#popupWindow').click(function(event){
        if (event.target.id == 'popupWindow') {
            $('#overlay').removeClass('visible');
            $('#popupWindow').removeClass('visible');
        }
    });
}

function initScrollUpButton() {
    $('#scrollUpArrow').click(function() {
        var topOffset = $('#about').offset().top;   
        $('html').animate({
            scrollTop: topOffset
        }, 1000);
    });
}

function checkForm() {
    $('#subscribeForm').submit(function (event) {
        console.log($("#emailField").val());
        if ($("#emailField").val() === ""){
            console.log("qwe");
            $("#emailField").addClass("error");
            $("#errorMessage").removeClass("hidden");
        }
        event.preventDefault();
    })
    $("#emailField").focus(function () {
        $("#emailField").removeClass("error");
        $("#errorMessage").addClass("hidden");
    })
    
}