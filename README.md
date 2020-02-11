# React Chat API

**_THIS REPOSITORY NOW CONTAINS ONLY THE API FOR THE APPLICATION_**, check the [react-chat](https://github.com/joaopatrocinio/react-chat) repository for the React front-end. Consider this README.md (and repository) as the primary, as the one in _react-chat_ will not be updated.

Real-time chat made with React and WebSockets (socket.io).
Using JSX and ES6 with Babel to compile it into vanilla JS.~~, currently being made in the browser.~~
***
### To-do
* ~~Setup Babel on Node.js to compile on the server, not on the client~~
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
Confirm that the API is running by checking at http://localhost:4050 (port in **.env** file)
