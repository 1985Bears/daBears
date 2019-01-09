$.get("/api/favorites").then((res) => res.forEach(favorite => {
    let beerName = {
        beer_name: favorite.beer_name
    }
    $.post("api/getFavorites", beerName).then((res) => res.forEach((favorite) => {
        // console.log(favorite);
        let newFav = $("<div>");
        newFav.addClass("card");
        newFav.attr("id", "card-fave");
        let newFavName = $("<div>");
        newFavName.addClass("card-header");
        newFavName.attr("id", "card-header-fave")
        let newFavBody = $("<div>");
        newFavBody.addClass("card-body");
        newFavBody.attr("id", "card-body-fave")
        newFavName.html(`<h5 class="card-title">${favorite.beer_name}</h5>`);
        newFavBody.html(`<p class="card-text">Style: ${favorite.style}</p>
      <p class="card-text">Description: ${favorite.description}</p>
      <p class="card-text">ABV: ${favorite.abv}</p>`)
        newFav.append(newFavName, newFavBody);
        $(".fav-container").append(newFav);
    }))
}));

