function validateForm() {
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].className === 'req' && myform.elements[i].value.length === 0) {
            alert("Please fill in all required fields!");
            return false;
        }
    }
    // check email address
    // var email = document.querySelector('#email').value;
    var email = $('#email').val();
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert('Please type a valid email address');
        return false;
    }
}