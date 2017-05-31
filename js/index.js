/*! Product by Wu Jun Xing */

function adImg(addata) {
    var newdome;
    var linkdom;
    var wdom;
    if (addata.adtype == 1) {
        linkdom = $("<a href='#'><img src='img/floatimg.jpg' /></a>");
        if ($(".floattype01").length > 0) {
            wdom = 1;
        }
        else {
            wdom = $("<div class='floatad floattype01'><div class='closead'>关闭</div></div>");
        }
    }

    if (addata.adtype == 2) {
        linkdom = $("<a href='#'><img src='img/floatimg.jpg' /></a>");
        if ($(".floattype02").length > 0) {
            wdom = 2;
        }
        else {
            wdom = $("<div class='floatad floattype02 fixtype'><div class='closead'>关闭</div></div>");
        }
    }

    if (addata.adtype == 3) {
        linkdom = $("<a href='#'><img src='img/floatimg.jpg' /></a>");
        if ($(".floattype03").length > 0) {
            wdom = 3;
        }
        else {
            wdom = $("<div class='floatad floattype03 fixtype'><div class='closead'>关闭</div></div>");
        }
    }

    if (addata.adtitle.length > 3) {
        linkdom.attr("title", addata.adtitle)
    }
    if (addata.adhref.length > 3) {
        linkdom.attr("href", addata.adhref)
    }
    if (addata.adimgsrc.length > 3) {
        linkdom.find("img").attr("src", addata.adimgsrc)
    }
    if (wdom == 1) {
        $(".floattype01").append(linkdom.clone());
        return false;
    }
    if (wdom == 2) {
        $(".floattype02").append(linkdom.clone());
        return false;
    }
    if (wdom == 3) {
        $(".floattype03").append(linkdom.clone());
        return false;
    }
    wdom.append(linkdom.clone());
    $("body").append(wdom.clone());
}

$(function () {
    //float ad
    if ($(".floattype01").length > 0) {
        $(".floattype01").find('img').load(function () {
            var floatadWidth = $(".floattype01").width();
            var floatadHeight = $(".floattype01").height();
            $(".floattype01").adFloat({ width: floatadWidth, height: floatadHeight, top: 0, left: 0, step: 2 });
        });
    }

    //fixed ad , to fix ie6
    var fixTopArray = new Array();
    var fixItemLength = $(".floattype02").length;
    if (fixItemLength > 0) {
        var b_version = navigator.appVersion;
        if (b_version == null) {
            return false;
        }
        if (b_version.indexOf("MSIE6.0") != -1) {
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