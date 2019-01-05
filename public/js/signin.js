
$(document).ready(function () {
    $("#submitBtn").on("click", () => {

        const returningUser = {
            useremail: $("#email-input").val().trim(),
            password: $("#password-input").val().trim()
        };

        $.ajax({
            method: "GET",
            url: "/api/users"
        }).then(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (returningUser.useremail === res[i].email) {
                    if (returningUser.password === res[i].password) {
                        console.log("success")
                        //code to send them to profile page.

                    }
                } else {
                    window.alert("Password or username is incorrect")
                    $("#email-input").empty();
                    $("#password-input").empty();
                }
            }
        });
    })
});