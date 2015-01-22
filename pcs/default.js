/**
 * Created by mcflie1994 on 1/21/15.
 */
$(document).ready(function() {
    $('.button').on('mousedown', function() {
        $(this).css('border', '3px inset lightgray');
        $(this).on('mouseup', function() {
            $(this).css('border', '3px outset lightgray');
        });
    });
});