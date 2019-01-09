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
  newFavName.html(`<h5 class="card-title">${rec.beer_name}</h5>`);
  newFavBody.html(`<p class="card-text">Style: ${rec.style}</p>
  <p class="card-text">Description: ${rec.description}</p>
  <p class="card-text">ABV: ${rec.abv}</p>
  <a href="#" class="btn btn-warning">Save to favorites</a>`)
  newFav.append(newFavName, newFavBody);
  $("#fav-container").append(newFav);
  console.log(rec);
}));;