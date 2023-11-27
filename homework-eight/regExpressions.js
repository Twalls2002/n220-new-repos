//Event listener for the "String" input field
document.getElementById('string').addEventListener('input', function () {
    var str = this.value;
    //Regular expression for alphanumeric characters, spaces, and hyphens
    var regex = /^[a-zA-Z0-9\s-]+$/;

    //Checks if the input matches the regular expression
    if (regex.test(str)) {
        document.getElementById('stringAns').innerHTML = 'Valid';
        document.getElementById('stringAns').style.color = 'green';
    } else {
        document.getElementById('stringAns').innerHTML = 'Invalid';
        document.getElementById('stringAns').style.color = 'red';
    }

    console.log("test");
});

//Event listener for the "Zip Code" input field
document.getElementById('myzip').addEventListener('input', function () {
    var zip = this.value;
    //Regular expression for a valid zip code format
    var regex = /^\d{5}(-\d{4})?$/;

    //Checks if the input matches the regular expression
    if (regex.test(zip)) {
        document.getElementById('zipAns').innerHTML = 'Valid';
        document.getElementById('zipAns').style.color = 'green';
    } else {
        document.getElementById('zipAns').innerHTML = 'Invalid';
        document.getElementById('zipAns').style.color = 'red';
    }
});

//Event listener for the "Credit Card" input field
document.getElementById('ccard').addEventListener('input', function () {
    var creditCard = this.value;
    //Regular expression for a valid credit card number format
    var regex = /^\d{4}([- ]?\d{4}){3}$/;

    //Checks if the input matches the regular expression
    if (regex.test(creditCard)) {
        document.getElementById('ccAns').innerHTML = 'Valid';
        document.getElementById('ccAns').style.color = 'green';
    } else {
        document.getElementById('ccAns').innerHTML = 'Invalid';
        document.getElementById('ccAns').style.color = 'red';
    }
});

//Event listener for the "Phone Number" input field
document.getElementById('phone').addEventListener('input', function () {
    var phoneNumber = this.value;
    //Regular expression for a valid phone number format
    var regex = /^(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/;

    //Checks if the input matches the regular expression
    if (regex.test(phoneNumber)) {
        document.getElementById('phoneAns').innerHTML = 'Valid';
        document.getElementById('phoneAns').style.color = 'green';
    } else {
        document.getElementById('phoneAns').innerHTML = 'Invalid';
        document.getElementById('phoneAns').style.color = 'red';
    }
});