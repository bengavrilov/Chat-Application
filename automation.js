
// call this every time you send a message
function updateScroll () {
    var element = document.getElementById('mainpage');
    element.scrollTop = element.scrollHeight;
    console.log("worked");
}

