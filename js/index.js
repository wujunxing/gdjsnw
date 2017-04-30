
$(function () {
    $("#flash_slider").tinycarousel({ interval: true, bullets: true });
});

$(function () {
    $("#product_carousel").tinycarousel({ interval: true });
    var tinycarousel_data = $("#product_carousel").data("plugin_tinycarousel");
    $("#product_carousel").hover(
        function () { tinycarousel_data.stop(); }, function () { tinycarousel_data.start(); }
    )
});
