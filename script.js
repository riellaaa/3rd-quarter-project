function Error(){
    event.preventDefault();
    const usernameInput = document.getElementById("username").value; 
    const passwordInput = document.getElementById("password").value; 
  
    let message;
    if (usernameInput === '' && passwordInput === '') {
      message = 'Please enter your username and password.';
      console.log("Login error")
    } else if (usernameInput === '') {
      message = 'Please enter your username.';
      console.log("Login error")
    } else if (passwordInput === '') {
      message = 'Please enter your password.';
      console.log("Login error")
    } else{
      message = "Login successful!"
    }
  
    document.getElementById("error").innerHTML = message;
}