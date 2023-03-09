function openTab(evt, tabName) {
  // Oculta todo el contenido de la pestaña
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Quita la clase "active" de todos los botones de la pestaña
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Muestra el contenido de la pestaña actual y marca el botón como activo
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}




