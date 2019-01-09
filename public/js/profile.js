let profileCategory = '';

$.get("/api/newprofile").then((res) => res.forEach(profile => {
  let newProfileButton = $("<button>");
  newProfileButton.text(profile.profileName);
  newProfileButton.addClass("flavor-profile");
  newProfileButton.attr("id", profile.category);

  $("#beer-profiles").append(newProfileButton);
}));

$(document).on("click", ".flavor-profile", function () {
  profileCategory = {
    category: this.id
  }
  sessionStorage.setItem('category', profileCategory.category);
  sessionStorage.getItem('category');
  console.log(sessionStorage.getItem('category'))
  window.location.replace(`/recommendations`)
});