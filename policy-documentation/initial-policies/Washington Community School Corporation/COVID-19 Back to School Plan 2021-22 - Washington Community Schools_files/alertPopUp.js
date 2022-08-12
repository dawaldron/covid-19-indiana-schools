var incdec = 0;
var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement("style");
cssNode.type = 'text/css';
cssNode.id = "resizingText";

$('.alertTitle').focus();
$('#alertModal').on("hide.bs.modal", function () {
    var alertID = $('#alertModal').data();
    $('body').focus();
    if (alertID.notification == "True") {
        $('.bottomRightEcxlam').show();
        $('.bottomRightEcxlam').on('click', function () {
            $('#alertModal').modal('show');
        })
    }
    else {
        createCookieAlert('alert' + alertID.id, 1, 0);
    }
})

function createCookieAlert(name, value, days)
{
	if (days > 0)
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name)
{
    createCookieAlert(name, "", -1);
}

function loadAlert()
{
    var alertID = $('#alertModal').data();
    createCookieAlert('alert' + alertID.id, 0, 1);
    $('#alertModal').modal('show');

}

var alertID = $('#alertModal').data();
var cookiename = 'alert' + alertID.id;
var x = readCookie('alert' + alertID.id);


 if (x == null)
{
	loadAlert();
}
var exclamNotification = alertID.notification

if (alertID.notification == "True") {
    $(document).ready(function () {
        $('.bottomRightEcxlam').show();
        $('.bottomRightEcxlam').on('click', function () {
            $('#alertModal').modal('show');
        })
    });


}