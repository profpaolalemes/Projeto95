const firebaseConfig = {
  apiKey: "AIzaSyCSFMLIy68CpzevH4Dct06OVbFufEQ7H-Y",
  authDomain: "projetos-36312.firebaseapp.com",
  databaseURL: "https://projetos-36312-default-rtdb.firebaseio.com",
  projectId: "projetos-36312",
  storageBucket: "projetos-36312.appspot.com",
  messagingSenderId: "770481143424",
  appId: "1:770481143424:web:2a781be55f86ec8f4a7065",
};

firebase.initializeApp(firebaseConfig);

let mostrarUsuario = document.getElementById("usuario");
mostrarUsuario.innerHTML = localStorage.getItem("usuario");

function addRoom() {
  roomName = document.getElementById("nomeSala").value;
  firebase.database().ref("/Kwitter").child(roomName).update({
    purpose: "adicionar nome de sala",
  });
  localStorage.setItem("roomName", roomName);
  window.location = "kwitterPage.html";
}

function getData() {
  firebase
    .database()
    .ref("/Kwitter")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        console.log("Nome da Sala - " + roomNames);
        row =
          "<div class='roomName' id=" +
          roomNames +
          " onclick='redirecionarSala(this.id)' >#" +
          roomNames +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirecionarSala(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  window.location = "index.html";
}
