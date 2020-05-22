# Chat-Application
This is a simple web application that allows clients to join a common cloud hosted server and communicate via websockets. To use the app, go to: https://bengavrilov.github.io/Chat-Application/


# About #
What's the worlds most sought after resource? An uninterrupted medium for communication. Our means of communication is often the most overlooked technological tool. Today we are able to communicate via messaging, emailing, video chatting, audio chatting, as well as in plenty of other forms. It is crazy to think that two people at separate locations on earth can communicate over the internet. Although not as complex as many modern day communication platforms, this chat application hosts a server (a main lobby per say) where individuals can log on with their first and last name and chat with anyone else on the server anywhere around the world. This is in principle how a reddit forum works or perhaps a discord chat operates. The app was made with Node.js, express, and websockets to allow different clients to communicate via the server. The client interface always displays the number of current users on the server as well as notifies them when a user has entered or left the main chat.

# How? #
The front end is currently hosted via Github pages. The user interface is also designed to host outgoing and incoming messages differently so that the display can be more aesthetically appealing.
The trickier part was to deploy the server since during development it was only functional on a local host port. To make it usable to everyone via the browser the server must be deployed to a backend server hosting site. My preference: Heroku- This way a cloud backend server can be upheld.

# What's next? #
Currently working on image transfer!
