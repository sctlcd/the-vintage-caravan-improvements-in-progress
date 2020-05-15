
function sendEmail(contactForm) {
    emailjs.send("gmail", "test", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    return false;
}
