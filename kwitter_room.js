
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room  Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});

   localStorage.setItem("room_name", room_name);

   window.location  = "kwitter_page.html";
}  

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location = "kwitter.html"
}

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg
    like:0
  });

  document.getElementById("msg").value = "";
}