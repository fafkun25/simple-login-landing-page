// "Database" (practice only)
const CORRECT_USERNAME = "Mark Jayson";
const CORRECT_PASSWORD = "092939";
// this part we check if the user type or not
function isEmpty(value) {
  return value.trim() === "";
}

function checkLogin(username, password) {
  // 1) type inputs
  if (isEmpty(username) || isEmpty(password)) { 
    return "⚠️ Please fill in the username and password fields.";
  }

  // 2) Check credentials
  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    return "✅ Welcome, " + username + "!";
  } else {
    return "❌ Wrong input username or password.";
  }
}
// this section showing the message of return
function showMessage(text) { //Receives a message string, Does NOT decide anything Only displays text
  const messageEl = document.getElementById("message"); //Finds the <p id="message">
  messageEl.textContent = text; //Replaces its text with the result
}


// the code will start here and the action will goes back to all function 
// and goes back here the result
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const result = checkLogin(username, password); //Calls the login logic, Receives a message string ,Stores it in result
  showMessage(result); //Sends the message to the screen
});
