'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
        category: 'IPA',
        beer_name: 'Anti-Hero',
        style: 'IPA',
        abv: 6.7,
        description: 'Our flagship IPA is supremely aromatic, crisp, and drinkable. This iconic ale features a blend of Citra, Crystal, Centennial, and Chinook to create a crisp clean bitterness and imparts massive floral and citrus aromas.  An American hop assault for all the ambivalent warriors who get the girl in the end. “Look, I aint in this for your revolution, and Im not in it for you, Princess.”',
        brew_id: 4
      }, {
        category: 'Porter/Stout',
        beer_name: 'Eugene',
        style: 'Porter',
        abv: 6.8,
        description: 'A striking, robust porter full of warmth and chocolate malt. An assortment of Belgian specialty malts form a complex structure of toasted grain and caramel flavors. Dark chocolate malt makes this porter black as night and infuses it with its distinct intense, chocolate essence.  Eugene is a robust porter named after Eugene V. Debs, an American union leader and activist who led the Pullman Railroad strike in 1894.',
        brew_id: 4
      }, {
        category: 'Pilsner',
        beer_name: 'Rev',
        style: 'Pilsner',
        abv: 5.5,
        description: 'Our Chicago Pilsner. Brewed traditionally German, with a slightly American approach. All German hops and malts come together for an exceptionally clean, crisp pilsner.  Our can features statues designed by Frank Lloyd Wright, a famous Chicago architect. These sculptures, also known as "Maid in the Mud",  were located in the famous Midway Gardens in Chicago, Illinois.',
        brew_id: 4
      }, {
        category: 'Pale Ale',
        beer_name: 'Fist City',
        style: 'Pale Ale',
        abv: 5.5,
        description: 'A Pale Ale brewed with an abundant amount of 2 row and red wheat with the addition of specialty malt for a beautiful golden hue. Fist City has hints of citrus and grapefruit notes with a solid malt backbone to smooth the light bite of hops. This Chicago Pale Ale is meant to be a supremely drinkable brew for those who love hops. Magnificent California hop aromas play in perfect harmony with this beer’s extremely satisfying finish. The Statue of the Republic, found in Jackson Park, Chicago, is featured on this can. It is a smaller replica of the original Statue of the Republic, which was constructed for the 1893 Worlds Columbian Exposition in Chicago.',
        brew_id: 4
      }, {
        category: 'Wheat Beer',
        beer_name: 'Cross of Gold',
        style: 'Gold Ale',
        abv: 4.8,
        description: 'An easy drinking golden ale for everyone.  Brewed to be crisp and refreshing with a bit of wheat malt for body and a delicate hop finish. William Jennings Bryan delivered one of the most famous political speeches ever at the 1896 Democratic National Convention, in Chicago. The speech was named Cross of Gold, and provided the inspiration for one of Revolutions original beers. Jennings Bryan was a populist, something we craft brewers consider ourselves to be. Cross of Gold was first brewed in Josh Deths basement by Brewmaster Jim Cibak, in June 2009. Two additional batches followed, to dial in the recipe, before becoming one of the initial beers served at the Revolution Brewpub in 2010. Cross of Gold has since taken home Gold at the Great American Beer Festival and the World Beer Cup. It remains a favorite among our employees, and is a top seller at the Brewpub and Tap Room.',
        brew_id: 4
      }, {
        category: 'Pale Ale',
        beer_name: 'A Little Crazy',
        style: 'Belgian Ale',
        abv: 6.8,
        description: 'A Pilsner malt base provides a nice toasty flavor with hints of caramel and enough fermentable sugar to make this a rather substantial beer. The Belgian-Style Pale Ale is brewed with Magnum, Cascade and Citra hops in the brewhouse and then dryhopped with a blend of Citra and Cascade. This drives home the aromas of fresh citrus rind to make this a very drinkable and extremely aromatic beer.',
        brew_id: 4
      }, {
        category: 'Wheat Beer',
        beer_name: 'Sun Crusher',
        style: 'Wheat Ale',
        abv: 6.5,
        description: 'A crushable ale to celebrate the end of winter and rejoice the coming of warm weather! This Hoppy Wheat Ale is brewed with Apollo and Amarillo hops, with a dry-hop blend of Crystal, Amarillo, and Mosaic, resulting in a mellow bitterness and pronounced flowery and citrus aromas.',
        brew_id: 4
      }, {
        category: 'Farmhouse/Saison',
        beer_name: 'Oktoberfest',
        style: 'German Ale',
        abv: 5.7,
        description: 'Our Oktoberfest Bier is a German-style  lager that was brewed in the summer and “cold stored” until late August to celebrate the coming of fall!  Traditional German malts such as Pilsner, Vienna, Carared and Munich lend a beautiful burnt orange color and a pleasant toasty malt flavor and aroma to this lager.  Initial Magnum hopping along with multiple additions of German Saphir and Select hops throughout the boil provide a crisp balanced bitterness and spicy/earthy aroma to round out this robust beer! For fermentation we use a Bavarian Lager yeast and then lower the temperature to 32 °F and store the beer cold for 4 weeks.  This cold maturation time helps provide a smooth round mouthfeel and clean crisp finish.',
        brew_id: 4
      }, {
        category: 'Sour/Fruit',
        beer_name: 'Fistmas',
        style: 'IPA',
        abv: 6.5,
        description: 'Our Holiday Red Ale is steeped with ginger and orange peel. It features notes of fresh-baked bread, caramel, and stone fruit along with holiday cheer.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Galaxy-Hero',
        style: 'IPA',
        abv: 7.0,
        description: 'Brewed for the Chicago Comic and Entertainment Expo, this IPA shoots a raygun blast of Galaxy hops into your mouth and leaves a crisp, dry finish. This IPA has big hop flavors and aromas of tropical fruit and citrus.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Tropic-Hero',
        style: 'IPA',
        abv: 7.0,
        description: 'This American IPA is brewed with 2-row and Pale malts to establish a smooth malt profile and golden color.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Citra-Hero',
        style: 'IPA',
        abv: 7.5,
        description: 'Citra-Hero is an elegant American IPA designed to showcase the Citra Hop variety. This IPA is exploding with citrusy flavors and aromas.',
        brew_id: 4
      },
      {
        category: 'IPA',
        beer_name: 'Crystal-Hero',
        style: 'IPA',
        abv: 7.2,
        description: 'A crisp and refreshing IPA exploding with fresh floral hop character, named for a somewhat forgotten yet amazing hop variety named Crystal. A unique hopping program gives this beer a massive, clean bitterness and fresh hop aroma bursting with hints of citrus and fresh fruit.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Mosaic-Hero',
        style: 'IPA',
        abv: 7.5,
        description: 'An exotic IPA brewed with 100% pale malt to yield a deep golden color and smooth mouthfeel. The dry-hop primarily features Mosaic hops, infusing tropical fruit flavors like mango and pineapple, along with crystal hops to add a touch of fresh pine.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Northwest-Hero',
        style: 'IPA',
        abv: 7.1,
        description: 'IPA brewed to showcase the dank aroma hop varieties grown in the Pacific Northwest, including Columbus, Chinook, Centennial, Cascade and Warrior.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Jukebox-Hero',
        style: 'IPA',
        abv: 7.5,
        description: 'Jukebox Hero, named after the well-known rock song, is a black IPA is bursting with crisp, clean bitterness and layers of wonderful American hop character.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Centennial-Hero',
        style: 'IPA',
        abv: 7.0,
        description: 'This new IPA gives flight to Centennial, the Lord of the “C” hops, allowing the fresh citrus and earthy characteristics to soar.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Local-Hero',
        style: 'IPA',
        abv: 7.5,
        description: 'This immensely drinkable IPA is brewed with Centennial, Cascade, Chinook, and Nugget hops, all from our friends at Hop Heads Farms in Hickory Corners, MI.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Brut-Hero',
        style: 'IPA',
        abv: 9.5,
        description: 'A new hero is soaring in from a completely new direction–the effervescent Brut-Hero, sparkling with white grape, passionfruit, and lemon notes and capped with an extra-dry champagne-like finish.',
        brew_id: 4
      }, {
        category: 'IPA',
        beer_name: 'Cashmere-Hero',
        style: 'IPA',
        abv: 7.0,
        description: 'A mountain of flavors rise above this silky, Cashmere-hopped IPA-lemon, lime, and ripe cantaloupe with a touch of grapefruit.',
        brew_id: 4
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */

    return queryInterface.bulkDelete('Beers', null, {});
  }
};