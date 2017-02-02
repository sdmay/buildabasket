    // CREATE USER
$("#createAccount").on("click", function(event) {
  event.preventDefault();
console.log("CLICK")
  // Make a newBook object
  var newUser = {
    email: $("#emailID").val().trim(),
    password: $("#passwordID").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/create", newUser)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#emailID").val("");
  $("#passwordID").val("");

});