/*! Product by Wu Jun Xing */

function adImg(addata) {
    var newdome;
    if (addata.adtype == 1) {
        newdome = $("<div class='floatad floattype01'><a href='#'><img src='img/floatimg.jpg' /></a><div class='closead'>关闭</div></div>");
    }
    if (addata.adtype == 2) {
        newdome = $("<div class='floatad floattype02'><a href='#'><img src='img/floatimg.jpg' /></a><div class='closead'>关闭</div></div>");
        newdome.css({left:"0px",bottom:"0px"})
    }
    if (addata.adtype == 3) {
        newdome = $("<div class='floatad floattype02'><a href='#'><img src='img/floatimg.jpg' /></a><div class='closead'>关闭</div></div>");
        newdome.css({ right: "0px", bottom: "0px" })
    }
    if (addata.adwidth > 0) {
        newdome.width(addata.adwidth);
    }
    if (addata.adheight > 0) {
        newdome.height(addata.adheight);
    }
    if (addata.adtitle.length > 3) {
        newdome.find("a").attr("title", addata.adtitle)
    }
    if (addata.adhref.length > 3) {
        newdome.find("a").attr("href", addata.adhref)
    }
    if (addata.adimgsrc.length > 3) {
        newdome.find("img").attr("src", addata.adimgsrc)
    }
    $("body").append(newdome.clone());
}
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
        var b_version = navigator.appVersion;
        if (b_version == null) {
            return false;
        }
        if (b_version.indexOf("MSIE6.0") != -1)
        {
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