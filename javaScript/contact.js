
function fetchContacttext() {
    const contacttextReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/contacttext?fields=description');
    fetch(contacttextReq)
        .then(response => response.json())
        .then(contacttext => {
            let contactText = document.getElementById("contactText");
            Object.values(contacttext).forEach((contacttext) => {
                contactText.innerHTML = Object.values(contacttext)[1].description;
})})};

fetchContacttext();

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
