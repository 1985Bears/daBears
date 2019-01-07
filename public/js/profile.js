let profileCategory = '';

$.get("/api/newprofile").then((res) => res.forEach(profile => {
  let newProfileButton = $("<button>");
  newProfileButton.text(profile.profileName);
  newProfileButton.addClass("flavor-profile");
  newProfileButton.attr("id", profile.category);

  $("#beer-profiles").append(newProfileButton);
}));

$(document).on("click", ".flavor-profile", function () {
  console.log("suh")
  profileCategory = this.id
  console.log(profileCategory);
});

