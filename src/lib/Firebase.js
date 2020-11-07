import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASvROCAZuwSmviSn3JP6Wq1MyZUCk4Xqg",
    authDomain: "unsplash-2de45.firebaseapp.com",
    databaseURL: "https://unsplash-2de45.firebaseio.com",
    projectId: "unsplash-2de45",
    storageBucket: "unsplash-2de45.appspot.com",
    messagingSenderId: "187137220757",
    appId: "1:187137220757:web:bcec9d77dbc3a3f0dfbb9c"
};

firebase.initializeApp(firebaseConfig);


export default firebase;