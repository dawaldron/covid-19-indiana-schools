var incdec = 0;
var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement("style");
cssNode.type = 'text/css';
cssNode.id = "resizingText";

var tickerInterval = 0;
var itemCount = $('.alertList > li').length;
var index = 0;

var target = $('#alertTicker');
var item = $('.alertList > li')[index];
$(target).html($(item).html());

startTheTickerTimer();

$(".nextAlert").click(function () {
    clearInterval(tickerInterval);
    tickerInterval = 0;
    index = (index + 1) % itemCount;
    $(".indexCount").text(index + 1);
    AlerttickerCycle(index);
    startTheTickerTimer();
});

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function loadAlert() {
    $('.alertdiv').show();
    AlerttickerCycle(index);
 
    $('.alertReShow').hide();

    createCookie('alert', 0, 1);
}

function loadAlertShownalready() {
    $('.alertdiv').show();
    AlerttickerCycle(index);
    $('.alertReShow').hide();
  

    createCookie('alert', 0, 1);
}

function hideAlert() {
    $('.alertdiv').hide();
    $('.alertReShow').show();

    createCookie('alert', 1, 1);
}



    function startTheTickerTimer() {

        tickerInterval = setInterval(function () {
         
            index = (index + 1) % itemCount;
            $(".indexCount").text(index + 1);
            AlerttickerCycle(index);
        }, 13000);
    }


function AlerttickerCycle(index) {
    var target = $('#alertTicker');
    var item = $('.alertList > li')[index];

    $(target).html($(item).html());
    }

var x = readCookie('alert');
if (x && x == 0) {
    loadAlertShownalready();
}
else if (x == null) {
    loadAlert();
}
else {
    hideAlert();
}
