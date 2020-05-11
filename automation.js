/*
// call this every time you send a message
function updateScroll () {
    var element = document.getElementById('messagebank');
    element.scrollTop = element.scrollHeight;
    console.log("worked");
}

var numOfMessages = 0;
var messageBank = document.getElementById('messagebank');


function sendMessage () {
    var txt = document.getElementById('messenger').value;

    if (txt.length != 0) {
        numOfMessages++;

        var newDiv = document.createElement('div');
        newDiv.id = 'message' + numOfMessages.toString();
        newDiv.className = 'homemessage';

        messageBank.appendChild(newDiv);

        var newDiv2 = document.createElement('div');
        newDiv2.id = 'favicon' + numOfMessages.toString();
        newDiv2.className = 'circle messagefaviconhome';

        newDiv.appendChild(newDiv2);

        var newHeader = document.createElement('h4');
        newHeader.innerHTML = 'BG';

        newDiv2.appendChild(newHeader);

        var newHeader2 = document.createElement('h4');
        newHeader2.className = 'namehome';
        newHeader2.innerHTML = 'Ben Gavrilov';

        newDiv.appendChild(newHeader2);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessagehome';
        newHeader3.innerHTML = txt;

        newDiv.appendChild(newHeader3);

        document.getElementById('messenger').value = '';

        updateScroll();
    }
}
*/