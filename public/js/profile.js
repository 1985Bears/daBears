let profileCategory = "";

$.get("/api/users").then(res => {
  $("#user-name").text(res.firstName + " " + res.lastName);
});

$.get("/api/newprofile").then(res =>
  res.forEach(profile => {
    let newProfileDiv = $("<div>");
    let newProfileButton = $("<button>");
    newProfileButton.addClass("flavor-profile btn btn-lg");
    newProfileButton.text(profile.profileName);
    newProfileButton.attr("id", profile.category);
    let newDeleteButton = $("<button>");
    newDeleteButton.text("X");
    newDeleteButton.addClass("btn btn-danger btn-lg delete");
    newDeleteButton.attr("id", profile.profileName);

    newProfileDiv.append(newProfileButton, newDeleteButton);
    $("#beer-profiles").append(newProfileDiv);
  })
);

$(document).on("click", ".flavor-profile", function() {
  profileCategory = $(this).attr("id");
  sessionStorage.setItem("category", profileCategory);
  sessionStorage.getItem("category");
  window.location.replace(`/recommendations`);
});

$(document).on("click", ".delete", function() {
  $.ajax({
    method: "DELETE",
    url: "/api/delete-profile/" + $(this).attr("id")
  });

  $(this)
    .closest("div")
    .remove();
});
