
// Función para mostrar el formulario de registro
function showRegister() {
    document.getElementById('registroForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('remember').style.display = 'none';
    document.getElementById('registrar').style.display = 'none';
    document.getElementById('borrar').style.display = 'none';
    clearMessages();
}
  
  // Función para mostrar el formulario de inicio de sesión
function showLogin() {
    document.getElementById('registroForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('remember').style.display = 'block';
    document.getElementById('registrar').style.display = 'block';
    document.getElementById('borrar').style.display = 'block';
    clearMessages();
}
  
  // Función para registrar un nuevo usuario
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const messageDiv = document.getElementById('registerMessage');
  
    if (!username || !password) {
      messageDiv.textContent = 'Por favor, completa todos los campos.';
      messageDiv.style.color = 'red';
      return;
    }
  
    if (localStorage.getItem(username)) {
      messageDiv.textContent = 'El nombre de usuario ya existe. Por favor, elige otro.';
      messageDiv.style.color = 'red';
      return;
    }
  
    const user = {
      username: username,
      password: password
    };
    localStorage.setItem(username, JSON.stringify(user));
  
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    messageDiv.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    messageDiv.style.color = 'green';
}
  
  // Función para iniciar sesión
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('loginMessage');

  
    if (!username || !password) {
      messageDiv.textContent = 'Por favor, completa todos los campos.';
      messageDiv.style.color = 'red';
      return;
    }
  
  
    const storedUser = localStorage.getItem(username);
  
    if (!storedUser) {
      messageDiv.textContent = 'El usuario no existe. Por favor, regístrate primero.';
      messageDiv.style.color = 'red';
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== password) {
      messageDiv.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
      messageDiv.style.color = 'red';
      return;
    }

    localStorage.setItem('nombre',username);
  
    // Redirigir a index.html de MENU si el inicio de sesión es exitoso
    window.location.href = '/MENU/index.html';
}

  
// Función para limpiar mensajes de error o éxito
function clearMessages() {
    document.getElementById('registerMessage').textContent = '';
    document.getElementById('loginMessage').textContent = '';
}
  
  // Mostrar el formulario de registro por defecto
  showRegister();

function logout() {
    // Eliminar datos específicos del usuario
    localStorage.removeItem('nombreDeUsuario');
  
    // O eliminar todos los datos de localStorage
    localStorage.clear();
  
    // Redirigir a la página de inicio de sesión o registro
    window.location.href = 'index.html';
}
  