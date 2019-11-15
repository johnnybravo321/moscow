import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATc0OPN6qURvxani5MLnRD_huQN-CxymE",
    authDomain: "web-shop-97c30.firebaseapp.com",
    databaseURL: "https://web-shop-97c30.firebaseio.com",
    projectId: "web-shop-97c30",
    storageBucket: "web-shop-97c30.appspot.com",
    messagingSenderId: "16001328994",
    appId: "1:16001328994:web:3d84874607f30b04a4ae3b",
    measurementId: "G-LJM4F7V50G"
  };
  // Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');
export const dbOrders = db.collection('orderItems');

