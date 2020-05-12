const socket = io('https://bengavrilov.github.io/Chat-Application:3000');

socket.on('other-client-message', txt => {
    inboundMessage(txt);
})

// call this every time you send a message
function updateScroll () {
    var element = document.getElementById('messagebank');
    element.scrollTop = element.scrollHeight;
    console.log("worked");
}

var numOfMessages = 0;
var messageBank = document.getElementById('messagebank');
var firstNamee;
var lastNamee;


function sendMessage () {
    var txt = document.getElementById('messenger').value;
    var array = [];
    if (txt.length != 0) {
        array[0] = firstNamee;
        array[1] = lastNamee;
        array[2] = txt;
        socket.emit('client-send-message', array);
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
        newHeader.innerHTML = firstNamee[0] + lastNamee[0];

        newDiv2.appendChild(newHeader);

        var newHeader2 = document.createElement('h4');
        newHeader2.className = 'namehome';
        newHeader2.innerHTML = firstNamee + ' ' + lastNamee;

        newDiv.appendChild(newHeader2);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessagehome';
        newHeader3.innerHTML = txt;

        newDiv.appendChild(newHeader3);

        document.getElementById('messenger').value = '';

        updateScroll();
    }
}

function sendFirstMessage (array) {
    if (array[2].length != 0) {
        socket.emit('client-send-message', array);
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
        newHeader.innerHTML = array[0][0] + array[1][0];

        newDiv2.appendChild(newHeader);

        var newHeader2 = document.createElement('h4');
        newHeader2.className = 'namehome';
        newHeader2.innerHTML = array[0] + ' ' + array[1];

        newDiv.appendChild(newHeader2);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessagehome';
        newHeader3.innerHTML = array[2];

        newDiv.appendChild(newHeader3);

        document.getElementById('messenger').value = '';

        updateScroll();
    }
}

function inboundMessage (array) {

    if (array[2].length != 0) {
        numOfMessages++;

        var newDiv = document.createElement('div');
        newDiv.id = 'message' + numOfMessages.toString();
        newDiv.className = 'awaymessage';

        messageBank.appendChild(newDiv);

        var newDiv2 = document.createElement('div');
        newDiv2.id = 'favicon' + numOfMessages.toString();
        newDiv2.className = 'circle messagefaviconaway';

        newDiv.appendChild(newDiv2);

        var newHeader = document.createElement('h4');
        newHeader.innerHTML = array[0][0] + array[1][0];

        newDiv2.appendChild(newHeader);

        var newHeader2 = document.createElement('h4');
        newHeader2.className = 'nameaway';
        newHeader2.innerHTML = array[0] + ' ' + array[1];

        newDiv.appendChild(newHeader2);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessageaway';
        newHeader3.innerHTML = array[2];

        newDiv.appendChild(newHeader3);

        updateScroll();
    }
}

function enterLobby () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName.length != 0 && lastName.length != 0) {
        firstNamee = firstName;
        lastNamee = lastName;

        document.querySelector('.homepage').setAttribute("style", "display: none;");
        document.getElementById('bar-name').innerHTML = firstName + ' ' + lastName;
        document.getElementById('bar-favicon').innerHTML = firstName[0] + lastName[0];

        var array2 = [];
        array2[0] = firstName;
        array2[1] = lastName;
        array2[2] = '--- ' + firstName + ' joined the chat ---';
        sendFirstMessage(array2);
    }
}