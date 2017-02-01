// Login
$("#authenticateUser").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var user = {
    email: $("#userID").val().trim(),
    password: $("#userPasswordID").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/authenticate", user)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#userID").val("");
  $("#userPasswordID").val("");
  alert("User logged in");

});