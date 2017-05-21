/*! Product by Wu Jun Xing */

$(function () {
    //float ad
    if ($(".floattype01").length > 0) {
        var floatadWidth = $(".floattype01").width();
        var floatadHeight = $(".floattype01").height();
        $(".floattype01").adFloat({ width: floatadWidth, height: floatadHeight, top: 0, left: 0, step: 2 });
    }
    //fixed ad , to fix ie6
    var fixTopArray = new Array();
    var fixItemLength = $(".floattype02").length;
    if (fixItemLength > 0) {
        var browser = navigator.appName
        var b_version = navigator.appVersion
        var version = b_version.split(";");
        var trim_Version = version[1].replace(/[ ]/g, "");
        if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        $(".floattype02").css("position", "absolute");
        for (var i = 0; i < fixItemLength; i++) {
            fixTopArray[i] = $(".floattype02").eq(i).position().top;
            }
            $(document).scroll(function () {
                var d_scrollTop = $(document).scrollTop();
                for (var i = 0; i < fixItemLength; i++) {
                    $(".floattype02").eq(i).css({ "top": (fixTopArray[i] + d_scrollTop + "px") });
                }
            });
        }
    }
    $(".closead").click(function () {
        $(this).parent().remove();
    });
});