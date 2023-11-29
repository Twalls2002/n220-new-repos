function showPassword() {
    var imgSrc = passBtn.getAttribute('src');
    var hidePassImg = imgSrc.indexOf('hide');
    hidePassImg = hidePassImg < 0;

    //Skeleton of if else statement
    if (hidePassImg) {
        //Changes image to showPassIcon
        document.getElementById('pass').setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
        
        //Changes input field to text
        document.getElementById('pass').setAttribute('type', 'text');
    } else {
        //Changes image back to hidePassIcon
        document.getElementById('pass').setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");

        //Changes input field back to password
        document.getElementById('pass').setAttribute('type', 'password');
    }
}