function addUser() {
  let usuario = document.getElementById("nomeUsuario").value;
  localStorage.setItem("usuario", usuario);
  window.location = "kwitter_room.html";
}
