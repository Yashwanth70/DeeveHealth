import * as firebase from 'firebase';

var config = {
apiKey: "AIzaSyD2NgyL8VYatmMA6UQOq6RnJ48IvytKU5A",
authDomain: "myfeed-55e33.firebaseapp.com",
databaseURL: "https://myfeed-55e33.firebaseio.com",
projectId: "myfeed-55e33",
storageBucket: "",
messagingSenderId: "320015459523"
};
export const firebaseApp =  firebase.initializeApp(config);
