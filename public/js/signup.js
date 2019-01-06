$(document).ready(function () {
    // $("#submitBtn").on("click", function () {
    //     let newUser = {
    //         firstName: $("#first-name-input").val().trim(),
    //         lastName: $("#last-name-input").val().trim(),
    //         email: $("#email-input").val().trim(),
    //         password: $("#password-input").val().trim()
    //     }
    //     console.log(newUser)
    //     $.post("/api/signup", newUser).then(() => console.log(newUser))
    // });

    // Getting references to our form and input
    var signUpForm = $("form.signup");
    let firstName = $("input#first-name-input");
    let lastName = $("input#last-name-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    let confirmpassword = $("input#password-confirm-input")

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {

        event.preventDefault();
        var userData = {
            firstName: $("#first-name-input").val().trim(),
            lastName: $("#last-name-input").val().trim(),
            email: $("#email-input").val().trim(),
            password: $("#password-input").val().trim()
        };
        console.log(userData);
        if (!firstName || !lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
        firstName.val("");
        lastName.val("");
        emailInput.val("");
        passwordInput.val("");
        confirmpassword.val("")
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(first, last, email, password) {
        $.post("/api/signup", {
            firstName: first,
            lastName: last,
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});