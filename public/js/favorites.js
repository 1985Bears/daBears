$.get("/api/favorites").then((res) => res.forEach(favorite => {
    let beerName = {
        beer_name: favorite.beer_name
    }
    $.post("api/getFavorites", beerName).then((res) => res.forEach((favorite) => {
        let newFav = $("<div>");
        newFav.addClass("card");
        newFav.attr("id", "card-fave");
        let newFavName = $("<div>");
        newFavName.addClass("card-header");
        newFavName.attr("id", "card-header-fave")
        let newFavBody = $("<div>");
        newFavBody.addClass("card-body");
        newFavBody.attr("id", "card-body-fave")
        newFavName.html(`<h5 class="card-title">${favorite.beer_name}</h5>
        <h6>${favorite.brewery}</h6>`);
        newFavBody.html(`<p class="card-text">Style: ${favorite.style}</p>
      <p class="card-text">${favorite.description}</p>
      <p class="card-text">ABV: ${favorite.abv}%</p>`);
        let newDeleteButton = $("<button>");
        newDeleteButton.addClass("delete btn btn-danger fave-delete")
        newDeleteButton.attr("id", favorite.beer_name)
        newDeleteButton.text("Delete From Favorites")
        newFav.append(newFavName, newFavBody, newDeleteButton);
        $(".fav-container").append(newFav);
    }))
}));

$(document).on("click", ".delete", function () {

    $.ajax({
        method: "DELETE",
        url: "/api/delete-favorite/" + $(this).attr("id")
    })

    $(this).closest("div").remove();
});

