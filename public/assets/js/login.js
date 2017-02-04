$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput1 = $("input#email-input");
  var passwordInput1 = $("input#password-input");
  var signUpForm = $("form.signup");
  var emailInput = $("input#signup-email-input");
  var passwordInput = $("input#signup-password-input");

   $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    console.log("CLICK LOGIN")
    var userData = {
      email: emailInput1.val().trim(),
      password: passwordInput1.val().trim()
    };
    console.log(userData.email + " " + userData.password)
    if (!userData.email || !userData.password) {
       
      console.log("THROW MY HANDS UP")
     
      emailInput1.val("");
    passwordInput1.val("");
      return;
      
    }
    else{
    console.log("BEFORE LOGIN USER")
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput1.val("");
    passwordInput1.val("");
    }
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
        console.log(data + " IS THIS UNDEFINED");
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
       $("#badLoginModal").modal("toggle");
      console.log(err);
    });
  }

    // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    console.log("CLICK")
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      console.log("SIGN UP " + data)
      window.location.replace(data);
    }).catch(function(err) {
       $("#badSignupModal").modal("toggle");
      console.log(err);
    });
  }

});
