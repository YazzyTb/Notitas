const caesarCipher = (str, shift) => {
  return str
    .split('')
    .map(char => {
      let code = char.charCodeAt(0);

      // Cifrar letras mayúsculas (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } 
      // Cifrar letras minúsculas (a-z)
      else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // Mantener otros caracteres sin cambios
      return char;
    })
    .join('');
};

const saveEncryptedText = (text) => {
  let encryptedText = localStorage.getItem('encryptedText');
  if (encryptedText) {
    encryptedText += '\n' + text; // Agregar nueva línea entre textos
  } else {
    encryptedText = text;
  }
  localStorage.setItem('encryptedText', encryptedText);
};

const clearLocalStorage = () => {
  localStorage.removeItem('encryptedText');
};

const getPassword = () => {
  return document.getElementById('passwordInput').value;
};

const checkPassword = () => {
  const password = getPassword();
  const passwordContainer = document.getElementById('passwordContainer');
  const textContainer = document.getElementById('textContainer');
  const outputText = document.getElementById('outputText');
  
  if (password !== '') {
    const encryptedText = localStorage.getItem('encryptedText');
    if (encryptedText) {
      if (password === getPassword()) {
        outputText.innerText = caesarCipher(encryptedText, -password.length);
      } else {
        outputText.innerText = encryptedText;
      }
    }
    passwordContainer.style.display = 'none';
    textContainer.style.display = 'block';
  }
};

const encryptText = () => {
  const password = getPassword();
  const textInput = document.getElementById('textInput').value;
  const shift = parseInt(password.length); // Convertir la longitud de la contraseña a un número entero
  const encryptedText = caesarCipher(textInput, shift);
  saveEncryptedText(encryptedText);
  
  document.getElementById('passwordInput').value = '';
  document.getElementById('textInput').value = '';
  document.getElementById('passwordContainer').style.display = 'block';
  document.getElementById('textContainer').style.display = 'none';
};

const clearAll = () => {
  clearLocalStorage();
  document.getElementById('passwordInput').value = '';
  document.getElementById('textInput').value = '';
  document.getElementById('outputText').innerText = '';
  document.getElementById('passwordContainer').style.display = 'block';
  document.getElementById('textContainer').style.display = 'none';
};