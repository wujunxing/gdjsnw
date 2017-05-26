$(function () {
    /*主要导航菜单*/
    $("#nav_nw .li01").hover(function () {
        $(this).find(".ul02").stop().slideDown(400);
    }, function () {
        $(this).find(".ul02").stop().slideUp(0);
    });

    $("#nav_nw .li02").hover(function () {
        $(this).find(".ul03").stop().slideDown(400);
        $(this).addClass("link02_hover");
    }, function () {
        $(this).find(".ul03").stop().slideUp(0);
        $(this).removeClass("link02_hover");
    });
})

$(function () {
    /*banner*/
    if ($("#slider").find("img").length > 1) {
        $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs: true });
    }
    else {
        $("#slider").removeClass("nivoSlider");
    }
});