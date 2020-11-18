function highlightName(name, node) {
    console.log(`Trying to look for author: ${name} in ${authorList.innerHtml}`);
    
}

function debugBibTexElement(bibtexEntry) {
    console.log(bibtexEntry.innerHtml);
}

function sendMail() {
    var form = document.getElementById("contact-form");
    var receiverEmail = document.getElementById("contact-response-name");
    var receiverName = document.getElementById("contact-response-email");
    var text = document.getElementById("contact-text");
    Email.send({
        SecureToken : "A0628A1131790617A5C6BE76185E3AEA1A75E4C75A8B86581D4B489DF5A00C38B98E266C4F3091BF4CE4F40CBACD6DE1",
        To : 'alex-nax@web.de',
        From : 'nax@live.de',
        Subject : `Contact from ${receiverName} (${receiverEmail})`,
        Body : text
    }).then(
      message => alert(text)
    );
}

/*
var bibtexEntry = function(bibtexEntry) {
    console.log("a");
    var entireThing = bibtexentry.toString();
    console.log(entireThing);
}*/