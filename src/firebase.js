import * as firebase from 'firebase';

var config = {
apiKey: "AIzaSyDRohoZyI5njWCN3g6x2ou-7niUKRZfdOI",
authDomain: "deevehealth-ec69c.firebaseapp.com",
databaseURL: "https://deevehealth-ec69c.firebaseio.com",
projectId: "deevehealth-ec69c",
storageBucket: "deevehealth-ec69c.appspot.com",
messagingSenderId: "658523426818"
};
export const firebaseApp =  firebase.initializeApp(config);
