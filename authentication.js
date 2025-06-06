function registerUser(event) {
    event.preventDefault(); // Stop the form from submitting normally
  
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
  
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return false; // prevent submission
    }
  
    // Example: Save user to localStorage
    const user = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));
  
    alert("Registration successful!");
  
    // Optionally redirect after registration
    // window.location.href = "Login.html";
  
    return false; // prevent default form behavior
  }
  
    
  function loginUser(event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    if (!email || !password) {
      alert("Please fill in both fields.");
      return false; // Prevent submission if fields are empty
    }
  
    // Check if the user is registered (simple localStorage check)
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  
    if (!registeredUser) {
      alert("No registered users found.");
      return false;
    }
  
    // If credentials match, proceed
    if (registeredUser.email === email && registeredUser.password === password) {
      alert("Login successful!");
      // Redirect to user dashboard or another page
      // window.location.href = "dashboard.html";
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  }