/**
 * Created by mcflie1994 on 1/21/15.
 */
$(document).ready(function() {
    if ($('#pass').html() != "" || $('#pass').html() !== undefined) {
        var pass = prompt('Please enter the password to access the ' + $('title').html());
        if (pass != $('#pass').html()) {
            window.location.replace('index.html');
        }
    }
    $('.button').on('mousedown', function() {
        $(this).css('border', '3px inset lightgray');
        $(this).on('mouseup', function() {
            $(this).css('border', '3px outset lightgray');
        });
    });
    $('.button').on('click', function() {
        $('#log').prepend('<span class="wrtout">' + $(this).html() + '</span><br />');
        $('#log').prepend('<span class="readin">' + $(this).html() + '</span><br />');
    });
});