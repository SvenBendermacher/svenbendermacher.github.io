
(function () {
    emailjs.init("xrJFzsvOI7y7drKHq");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_w8jwsyv', 'template_uzjlk1l', contactParams).then(function (res) {})
            .then(
            message => alert("mail sent successfully")
    );
    
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
    
}
