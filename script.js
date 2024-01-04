function validateForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform email and password validation (example: simple checks)
    if (email !== 'user@example.com' || password !== 'password123') {
      displayPopup();
    } else {
      // Perform login actions (e.g., redirect, display success message)
      console.log('Login successful!');
      // For the example, let's just redirect to another page after successful login
      window.location.href = 'dashboard.html';
    }
  }
  
  function displayPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  document.getElementById('loginForm').addEventListener('submit', validateForm);
  