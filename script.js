const socket = io('https://chat-application-ben.herokuapp.com/');

socket.on('other-client-message', txt => {
    inboundMessage(txt);
})

socket.on('update-user-count', usersOnline => {
    document.getElementById('usersOnline').innerHTML = "Current users online: " + usersOnline;
    document.getElementById('usersOnline2').innerHTML = "Current users online: " + usersOnline;
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
var lastMessageMine = false;
var lastAwayMessage;


function sendMessage () {
    var txt = document.getElementById('messenger').value;
    var array = [];
    if (txt.length != 0 && lastMessageMine == false) {
        lastMessageMine = true;
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
        newHeader.innerHTML = firstNamee[0].toUpperCase() + lastNamee[0].toUpperCase();

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
    else if (txt.length != 0 && lastMessageMine == true) {
        var newDiv = document.createElement('div');
        newDiv.id = 'message' + numOfMessages.toString();
        newDiv.className = 'homemessage2';

        messageBank.appendChild(newDiv);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessagehome2';
        newHeader3.innerHTML = txt;

        newDiv.appendChild(newHeader3);

        document.getElementById('messenger').value = '';

        updateScroll();
    }
}

function enterSendMessage (ele) {
    var txt = document.getElementById('messenger').value;
    var array = [];
    if (txt.length != 0 && event.key == 'Enter' && lastMessageMine == false) {
        lastMessageMine = true;
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
        newHeader.innerHTML = firstNamee[0].toUpperCase() + lastNamee[0].toUpperCase();

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
    else if (txt.length != 0 && lastMessageMine == true && event.key == 'Enter') {
        lastMessageMine = true;
        array[0] = firstNamee;
        array[1] = lastNamee;
        array[2] = txt;
        socket.emit('client-send-message', array);
        numOfMessages++;
        
        var newDiv = document.createElement('div');
        newDiv.id = 'message' + numOfMessages.toString();
        newDiv.className = 'homemessage2';

        messageBank.appendChild(newDiv);

        var newHeader3 = document.createElement('h4');
        newHeader3.className = 'actualmessagehome2';
        newHeader3.innerHTML = txt;

        newDiv.appendChild(newHeader3);

        document.getElementById('messenger').value = '';

        updateScroll();
    }
}

function sendFirstMessage (array) {
    if (array[2].length != 0) {
        lastMessageMine = true;
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
        newHeader.innerHTML = array[0][0].toUpperCase() + array[1][0].toUpperCase();

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

function sendLastMessage () {
    var array = [];

    if (firstNamee.length != 0 && lastNamee.length != 0) {
        lastMessageMine = true;
        array[0] = firstNamee;
        array[1] = lastNamee;
        array[2] = '--- ' + firstNamee + ' left the chat ---';

        socket.emit('client-send-message', array);
    }
}

function inboundMessage (array) {

    if (array[2].length != 0 && lastMessageMine == true) {
        lastAwayMessage = array[0] + array[1];
        lastMessageMine = false;
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
        newHeader.innerHTML = array[0][0].toUpperCase() + array[1][0].toUpperCase();

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
    else if (array[2].length != 0 && lastMessageMine == false) {
        if ((array[0] + array[1]) == lastAwayMessage) {
            lastAwayMessage = array[0] + array[1];
            lastMessageMine = false;
            numOfMessages++;

            var newDiv = document.createElement('div');
            newDiv.id = 'message' + numOfMessages.toString();
            newDiv.className = 'awaymessage2';

            messageBank.appendChild(newDiv);

            var newHeader3 = document.createElement('h4');
            newHeader3.className = 'actualmessageaway2';
            newHeader3.innerHTML = array[2];

            newDiv.appendChild(newHeader3);

            updateScroll();
        }
        else {
            lastAwayMessage = array[0] + array[1];
            lastMessageMine = false;
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
            newHeader.innerHTML = array[0][0].toUpperCase() + array[1][0].toUpperCase();

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
}

function enterLobby () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName.length != 0 && lastName.length != 0) {
        firstNamee = firstName;
        lastNamee = lastName;

        document.querySelector('.homepage').setAttribute("style", "display: none;");
        document.getElementById('bar-name').innerHTML = firstName + ' ' + lastName;
        document.getElementById('bar-favicon').innerHTML = firstName[0].toUpperCase() + lastName[0].toUpperCase();

        var array2 = [];
        array2[0] = firstName;
        array2[1] = lastName;
        array2[2] = '--- ' + firstName + ' joined the chat ---';
        sendFirstMessage(array2);
    }
}