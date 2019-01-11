let beerCategory = sessionStorage.getItem('category');

recommendedCategory = {
  category: beerCategory,
};

$.post("/api/recommendations", recommendedCategory).then((res) => res.forEach(rec => {
  let newFav = $("<div>");
  newFav.addClass("card");
  newFav.attr("id", "card-fave");
  let newFavName = $("<div>");
  newFavName.addClass("card-header");
  newFavName.attr("id", "card-header-fave")
  let newFavBody = $("<div>");
  newFavBody.addClass("card-body");
  newFavBody.attr("id", "card-body-fave")
  newFavName.html(`<h5 class="card-title">${rec.beer_name}</h5>
  <h6>${rec.brewery}</h6>`);
  newFavBody.html(`<p id="style" class="card-text">Style: ${rec.style}</p>
  <p id="description" class="card-text">${rec.description}</p>
  <p id="abv" class="card-text">ABV: ${rec.abv}%</p>
  <button id="${rec.beer_name}" class=" favorites btn btn-warning">Save to Favorites</button>`)
  newFav.append(newFavName, newFavBody);
  $("#fav-container").append(newFav);
}));

$(document).on("click", ".favorites", function () {
  $(this).text("SAVED!");
  let beerName = {
    beerName: $(this).attr("id")
  }
  $.post("/api/favorites", beerName)
})