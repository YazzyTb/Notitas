document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el elemento donde se mostrará el nombre del jugador
  const nombreJugador = document.querySelector("#nombre");
  nombreJugador.textContent = localStorage.getItem("nombre") || "Jugador";

  // Función para redirigir a la página correspondiente
  const redirectToNote = (noteId, url) => {
      const noteElement = document.querySelector(`#${noteId}`);
      if (noteElement) {
          noteElement.addEventListener("click", () => {
              location.href = url;
          });
      }
  };

  const getUsername = () => {
    return localStorage.getItem('currentUser');
  };
  
  const setUsername = (username) => {
    localStorage.setItem('currentUser', username);
  };
  

  // Agregar event listeners para cada nota
  redirectToNote("nota1", "../NOTA1/index.html");
  redirectToNote("nota2", "/NOTA2/index.html");
  redirectToNote("nota3", "/NOTA3/index.html");
  redirectToNote("nota4", "/NOTA4/index.html");
  redirectToNote("nota5", "/NOTA5/index.html");
  redirectToNote("nota6", "/NOTA6/index.html");
});

function volverAlBienvenida() {
  // Redirigimos al usuario a la página de inicio
  location.href = "/INICIO/index.html";
}
