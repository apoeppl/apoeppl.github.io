function highlightName(name, node) {
    console.log(`Trying to look for author: ${name} in ${authorList.innerHtml}`);
    
}

function debugBibTexElement(bibtexEntry) {
    console.log(bibtexEntry.innerHtml);
}

function sendMail() {
    var form = document.getElementById("contact-form");
    var receiverName = document.getElementById("contact-response-name");
    var receiverEmail = document.getElementById("contact-response-email");
    var text = document.getElementById("contact-text");
    var status = Email.send({
        SecureToken : "bafe2b53-bf29-486d-a5d5-7634e37f9720",
        To : "alex-nax@web.de",
        From : "alex-nax@web.de",
        Subject : `Contact from ${receiverName.value} (${receiverEmail.value})`,
        Body : text.value
    });
    status.then(
        message => alert(message)
    );
}