var spinnerAlertModule = (function ($) {

    /*
    Note: IE has a bug where it freezes animated GIFs after you've clicked on an anchor. If you need to cater for this, see Web: \cms\portlets\CMSToolbarPageControls.ascx.cs in the 
    RenderDesignModeChangeSpinner() method for appropriate code. 
    */

    //Public methods:

    var initialiseSpinner = function(settings) {

        $('#divSpinnerAlert').attr('title', settings.title);
        $('#divSpinnerAlert').html("<img id='imgSpinnerAlert' src='" + settings.imageURL + "' alt='" + settings.imageAltText + "' />");

        $('#divSpinnerAlert').dialog({
            modal: true,
            resizable: false,
            width: settings.width,
            draggable: false,
            dialogClass: settings.cssClass
        });

        hide();
    }

    var show = function () {
        $('#divSpinnerAlert').dialog("open");
    }

    var hide = function () {
        $('#divSpinnerAlert').dialog("close");
    }

    //Public methods exposed:
    return {
        initialiseSpinner: initialiseSpinner,
        show: show,
        hide: hide
    }

})(jQuery)