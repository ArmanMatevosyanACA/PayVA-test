import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyAIAmcnqQSLbargvy6ssafAvng2T0gyO1w",
    authDomain: "payva-75116.firebaseapp.com",
    databaseURL: "https://payva-75116.firebaseio.com",
    projectId: "payva-75116",
    storageBucket: "payva-75116.appspot.com",
    messagingSenderId: "771932156826"
};

firebase.initializeApp(config);

const fireData = firebase.database();
const auth = firebase.auth();

fireData.ref('users').on('value', (snapshot) => {
    const users = [];
    snapshot.forEach((child) => {
        users.push({
            uid: child.key,
            ...child.val(),
        })
    });
    console.log(users);
});




export {
    fireData,
    firebase,
    auth
}