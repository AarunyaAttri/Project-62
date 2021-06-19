import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYg2jrDxy-RExrtKWLMgTkclzl5LHLSC8",
    authDomain: "porject-60-71cd5.firebaseapp.com",
    databaseURL: "https://porject-60-71cd5-default-rtdb.firebaseio.com",
    projectId: "porject-60-71cd5",
    storageBucket: "porject-60-71cd5.appspot.com",
    messagingSenderId: "334808266758",
    appId: "1:334808266758:web:b0d618cf68cd11294aab87"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();