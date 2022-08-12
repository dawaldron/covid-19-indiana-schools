function btnOKCalendarPicker_Click(containerId, targetId, targetName) {
    //set calendar to the chosen one.
    var cp = $find(containerId);
    if (cp) {
        var list = cp._currentScp.get_selectedCalendarList();
        if (list && list.length > 0) {
            //get the selected calendar id and name
            var selectedCal = list[0];
            var selectedCalId = selectedCal.CalendarId;
            var selectedCalName = selectedCal.DisplayName;
            document.getElementById(targetId).value = selectedCalId;
            document.getElementById(targetName).value = selectedCalName;
            return true;
        }
    }
    document.getElementById(targetId).value = "";
    document.getElementById(targetName).value = "";
}

function btnCancelCalendarPicker_Click(containerId, targetId, targetName) {
    //make sure the calendar is reset back to the chosen one.
    var cp = $find(containerId);
    if (cp) {
        //get chosen id:
        var chosenId = document.getElementById(targetId).value;
        var currentSelectedId = null;
        var list = cp._currentScp.get_selectedCalendarList();
        if (list && list.length > 0) {
            currentSelectedId = list[0].CalendarId;
        }
        //1. no chosen id, and have selected Id: clear
        //2. different id: clear list and set the list

        if (chosenId.length == 0 && currentSelectedId != null) {
            cp._currentScp.set_selectedCalendarList([]);
            cp._currentScp.refreshSelectedCalendar();
        }
        else if (chosenId.length > 0 &&
                ((currentSelectedId != null && chosenId != currentSelectedId) || currentSelectedId == null)) {
            cp._currentScp.set_selectedCalendarList([]);
            if (chosenId!="0")
                cp._currentScp.selectCalendar(chosenId, document.getElementById(targetName).value, "cms");
            cp._currentScp.refreshSelectedCalendar();
            var tv = cp._currentScp.get_tvCms();
            var radNode = tv.findNodeByValue(chosenId);
            if (radNode != null) {
                radNode.set_selected(true);
            }
            if (currentSelectedId != null) {
                radNode = tv.findNodeByValue(currentSelectedId);
                if (radNode != null) {
                    radNode.set_selected(false);
                }
            }
        }
    }
}

$(document).ready(function () {
    $('.ptl_upcomingevents_page').width($('.ptl_upcomingevents').width() + 1);

    $('.ptl_upcomingevents_carousel').each(function () {
        var p = $(this).parents('.ptl_upcomingevents');
        var w = p.width();
        $(this).children('.ptl_upcomingevents_page').width(w + 1);

        $(this).carouFredSel({
            items: 1,
            direction: 'left',
            width: 'variable',
            auto: false,
            scroll: { duration: 1000 },
            prev: {
                button: function () {
                    return $(this).parents('.ptl_upcomingevents').find('.abtnPrev');
                }
            },
            next: {
                button: function () {
                    return $(this).parents('.ptl_upcomingevents').find('.abtnNext');
                }
            }
        });

        w = p.width();
        $(this).children('.ptl_upcomingevents_page').width(w + 1);
    });
});

$(window).resize(function () {
    $('.ptl_upcomingevents_carousel').each(function () {
        var p = $(this).parents('.ptl_upcomingevents');
        var w = p.width();
        $(this).children('.ptl_upcomingevents_page').width(w + 1);

        $(this).trigger('updateSizes');

        w = p.width();
        $(this).children('.ptl_upcomingevents_page').width(w + 1);
    });
});