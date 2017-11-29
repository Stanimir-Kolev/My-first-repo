$(document).ready(function() {
    var but = document.querySelector('#buttonForm');
    but.addEventListener('click', function(event) {
        event.preventDefault();
        var user = {
            firstName: $('#first_name').val(),
            middleName: $('#middle_name').val(),
            lastName: $('#last_name').val(),
            email: $('#email').val(),
            city: $('#city').val(),
            country: $('#country').val(),
            occupation: $('#occupation').val(),
            company: $('#company').val(),
            location: $('#location').val()
        }
        localStorage.setItem('users', JSON.stringify(user));
    })
});