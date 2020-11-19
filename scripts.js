function highlightName(name, node) {
    console.log(`Trying to look for author: ${name} in ${authorList.innerHtml}`);
    
}

function debugBibTexElement(bibtexEntry) {
    console.log(bibtexEntry.innerHtml);
}

function reactToMessage(message) {
    if (message === "OK") {
        var receiverName = document.getElementById("contact-response-name");
        var receiverEmail = document.getElementById("contact-response-email");
        var text = document.getElementById("contact-text");
        text.value = "";
        receiverName.value = "";
        receiverEmail.value = "";
        alert("Message has been sent!");
    } else {
        alert("Message could not be sent.");
    }

}

function sendMail() {
    var form = document.getElementById("contact-form");
    var receiverName = document.getElementById("contact-response-name");
    var receiverEmail = document.getElementById("contact-response-email");
    var text = document.getElementById("contact-text");
    Email.send({
        SecureToken : "bafe2b53-bf29-486d-a5d5-7634e37f9720",
        To : "nax@live.nl",
        From : "alex-nax@web.de",
        Subject : `Contact from ${receiverName.value} (${receiverEmail.value})`,
        Body : text.value
    }).then(
        (message) => {
            reactToMessage(message);
        }
    ).catch(
        (error) => {
            console.log(error);
            alert("Unable to send Message!");
        }
    );
    return false;
}