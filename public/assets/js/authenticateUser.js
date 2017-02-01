// Login
$("#authenticateUser").on("click", function(event) {
  event.preventDefault();

  var user = {
    email: $("#userID").val().trim(),
    password: $("#userPasswordID").val().trim()
  };
  
  // Send an AJAX POST-request with jQuery
  $.post("/api/auth", user)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#userID").val("");
  $("#userPasswordID").val("");
  

});