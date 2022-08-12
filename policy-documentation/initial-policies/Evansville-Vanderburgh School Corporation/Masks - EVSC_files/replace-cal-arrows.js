// CALENDAR ARROWS

// LEFT ARROW
 $('.tbl_mini_calendar input').first().removeAttr( "src" ).addClass('cal-btn-l');
// RIGHT ARROW
 $('.tbl_mini_calendar input').last().removeAttr( "src" ).addClass('cal-btn-r');

$(document).ready(function() {
   $('.cal-btn-l').parent().next().addClass('cal-t-one');
});