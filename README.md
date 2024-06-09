## How to create this repo from scratch (firebase todo app setup)
Create npx react app
Create firebase console project (giftextdbsearch)
go to firestore
create new db, test mode, enable.
Add firebase to your web app, "ReactAppTest", dont need firebase hsoting, register app.
Run npm i firebase.
Copy SDK connect info, create firebase.js, paste into file.
Follow tutorial code, add my own auth/table name:
Finally, move SDK connection vars to .env file

## How to run this repo currently:
- Create .env file with firebase auth:
```
REACT_APP_FIREBASE_API_KEY=aaa
REACT_APP_FIREBASE_AUTH_DOMAIN=aaa
REACT_APP_FIREBASE_PROJECT_ID=aaa
REACT_APP_FIREBASE_STORAGE_BUCKET=aaa
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=aaa
REACT_APP_FIREBASE_APP_ID=aaa
```
- Run `npm i` and `npm start` visit: http://localhost:3000/