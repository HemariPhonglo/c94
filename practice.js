
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc4cNdj-9Ol_FrBdzw6l2gv4sX-hBBYzY",
    authDomain: "kwitter-6730f.firebaseapp.com",
    projectId: "kwitter-6730f",
    storageBucket: "kwitter-6730f.appspot.com",
    messagingSenderId: "570547043300",
    appId: "1:570547043300:web:e4ec4a40fb96f10cbfa5f1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
      
  function addUser() 
  {
    user_name =document.getElementById("user_name").ariaValueMax;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }