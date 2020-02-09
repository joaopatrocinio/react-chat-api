# React Chat

Real-time chat made with React and WebSockets (socket.io).

Using JSX and ES6 with Babel to compile it into vanilla JS, currently being made in the browser.
***
### To-do
* Setup Babel on Node.js to compile on the server, not on the client
* Store messages (cache and DB)
* Authentication
* Load previous messages to user when logs in
* Chat rooms
* Private messaging
***
### Instalation
Rename **.env.example** file to **.env**, change values if needed.
Type into terminal:
```sh
npm install
node chat.js
```
Open browser at http://localhost:4050 (port in **.env** file)
