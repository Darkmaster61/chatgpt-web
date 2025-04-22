function toggleLogin() {
  const form = document.getElementById('login-form');
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('login-message');

  if (username === 'admin' && password === 'password123') {
    localStorage.setItem('loggedIn', 'true');
    document.getElementById('logout').style.display = 'inline';
    document.getElementById('login-form').style.display = 'none';
    alert('Login successful!');
  } else {
    message.textContent = 'Invalid credentials!';
    message.style.color = 'red';
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  document.getElementById('logout').style.display = 'none';
  alert('You have been logged out.');
}

window.onload = function() {
  if (localStorage.getItem('loggedIn') === 'true') {
    document.getElementById('logout').style.display = 'inline';
  }
};
