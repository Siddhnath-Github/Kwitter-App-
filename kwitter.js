function addUser() {

    user_name = document.getElementById("user_name").nodeValue;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
    
}

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBZi8Bez-mP9UfNvNPyNapp5HvxE8pYRE8",
    authDomain: "kwitter-31480.firebaseapp.com",
    databaseURL: "https://kwitter-31480-default-rtdb.firebaseio.com",
    projectId: "kwitter-31480",
    storageBucket: "kwitter-31480.appspot.com",
    messagingSenderId: "220684823359",
    appId: "1:220684823359:web:e0068dfd2990c9f4af018a",
    measurementId: "G-MZ7KKPN95T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);