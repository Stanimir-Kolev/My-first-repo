$(document).ready(function() {
    $('li.fields').filter(':nth-child(n+4)').hide();

    $('ul').on('click', 'li.title', function() {
        $(this).next().slideDown(200).siblings('li.fields').slideUp(200);
    })
})