import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyCYahRLLTsjN5I0x4Su7r1dyedhsiTcr7Y",
  authDomain: "manchestercity-d940d.firebaseapp.com",
  databaseURL: "https://manchestercity-d940d-default-rtdb.firebaseio.com",
  projectId: "manchestercity-d940d",
  storageBucket: "manchestercity-d940d.appspot.com",
  messagingSenderId: "268581625994",
  appId: "1:268581625994:web:658494b2e87ffe54f18d73",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}
