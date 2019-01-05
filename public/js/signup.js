$(document).ready(function () {
    $("#submitBtn").on("click", function () {
        let newUser = {
            firstName: $("#first-name-input").val().trim(),
            lastName: $("#last-name-input").val().trim(),
            email: $("#email-input").val().trim(),
            password: $("#password-input").val().trim()
        }
        console.log(newUser)
        $.post("/api/signup", newUser).then(() => console.log(newUser))
    });
});