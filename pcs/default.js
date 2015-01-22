/**
 * Created by mcflie1994 on 1/21/15.
 */
$(document).ready(function() {
    var pass = prompt('Please enter the password to access the ' + $('title').html());
    if (pass != $('#pass').html()) {
        window.location.replace('index.html');
    }
    $('.button').on('mousedown', function() {
        $(this).css('border', '3px inset lightgray');
        $(this).on('mouseup', function() {
            $(this).css('border', '3px outset lightgray');
        });
    });
});