
$(document).ready(function () {
    // $("#submitBtn").on("click", () => {

    //     const returningUser = {
    //         useremail: $("#email-input").val().trim(),
    //         password: $("#password-input").val().trim()
    //     };

    //     $.ajax({
    //         method: "GET",
    //         url: "/api/users"
    //     }).then(function (res) {
    //         for (var i = 0; i < res.length; i++) {
    //             if (returningUser.useremail === res[i].email) {
    //                 if (returningUser.password === res[i].password) {
    //                     console.log("success")
    //                     //code to send them to profile page.

    //                 }
    //             } else {
    //                 window.alert("Password or username is incorrect")
    //                 $("#email-input").empty();
    //                 $("#password-input").empty();
    //             }
    //         }
    //     });
    // });

    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        console.log("in here")
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData)
        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the profile page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function (err) {
            console.log(err);
        });
    }
});