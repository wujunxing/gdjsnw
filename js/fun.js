function SetHome(obj, url) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        } else {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
        }
    }
}

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

$(function () {
    /*主要导航菜单*/
    $("#nav .li01").hover(function () {
        $(this).find(".ul02").stop().slideDown(400);
    }, function () {
        $(this).find(".ul02").stop().slideUp(0);
    });

    $("#nav .li02").hover(function () {
        $(this).find(".ul03").stop().slideDown(400);
        $(this).addClass("link02_hover");
    }, function () {
        $(this).find(".ul03").stop().slideUp(0);
        $(this).removeClass("link02_hover");
    });

    /*底部友情链接*/
    $(".footerLink").hover(function () {
        $(this).children(".footerLinkCon").show()
    }, function () {
        $(this).children(".footerLinkCon").hide()
    })

})

$(function () {
    $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs: true });
});
