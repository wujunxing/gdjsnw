
$(function () {
    if ($("#slider").find("img").length > 1) {
        $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs: true });
    }
    else {
        $("#slider").removeClass("nivoSlider");
    }
});