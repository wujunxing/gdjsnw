

$(function () {
    $("#floatimg").adFloat({ width: 252, height: 172, top: 0, left: 0, step: 2 });
    $("#closead").click(function () {
        $("#floatimg").remove();
    });
});