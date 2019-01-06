'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'IPA',
      beer_name: 'CITRA!CITRA!CITRA!',
      style: 'Double IPA',
      abv: 8.0,
      description: 'Citra Citra Citra Simcoe Citra Citra Citra Centennial Citra Citra…',
      brew_id: 7
    }, {
      category: 'IPA',
      beer_name: 'Dank Grass',
      style: 'Gluten-Free IPA',
      abv: 5.0,
      description: 'Our gluten free IPA made with a mash of maize and Golden Naked Oats, with sorghum and jaggery added to the boil.Most of the hops are added to the whirlpoolfor this beer to limit bitterness, with a massive dry hopping for more hop flavor and aromas.',
      brew_id: 7
    }, {
      category: 'IPA',
      beer_name: 'Double Splash',
      style: 'Double IPA',
      abv: 8.0,
      description: 'Fermented with the same yeast we use for Splash with a different fermentation schedule to keep the fruity esters while creating a sweeter finish.  Many of the hops in this beer are recent releases and add more tropical fruit flavors and aromas.',
      brew_id: 7
    }, {
      category: 'IPA',
      beer_name: 'Liquid Dreams',
      style: 'Double IPA',
      abv: 9.0,
      description: 'Almost malty enough to qualify as an American Barleywine, and very well hopped with Mosaic and many other hops.  Named for our aspirations to open a professional brewery and produce beers people love to drink.',
      brew_id: 7
    }, {
      category: 'IPA',
      beer_name: 'Midway Chipa',
      style: 'Double IPA',
      abv: 8.0,
      description: 'This is our spin on the hazy northeast double IPA style that generally feature huge hop aroma and flavors with a soft bitterness.  We use our own yeast blend to achieve the NE mouth feel with additional fruity esters and complexity.  Every batch of this beer is similar to the last, but with a different dry hop emphasized.  It is a way for us to explore new hops and keep the beer exciting.',
      brew_id: 7
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Lost Lake Piranhanas With Pineapple',
      style: 'APA',
      abv: 7.7,
      description: 'A Marz and Paul McGee collab, Piranhanas is fermented at high temps with a yeast blend that produces an array of tropical fruit flavors and dries out the beer, emphasizing the fermentation and hop flavors.',
      brew_id: 7
    }, {
      category: 'Porter/Stout',
      beer_name: 'Nasal Cavity',
      style: 'Stout',
      abv: 5.5,
      description: 'A collaboration with Against the Grain. Contrary to popular belief, real wasabi root is not nearly as spicy as the green wasabi blob provided at most sushi places — that is actually made with horseradish. In this beer, fresh wasabi root provides an immediate sensation and mouthfeel on the tongue, then changes to  tea-like flavors',
      brew_id: 7
    }, {
      category: 'Pale Ale',
      beer_name: 'The Machine',
      style: 'APA',
      abv: 9.9,
      description: 'With a nod to our hardworking and highly powerful political organizations here in Chicago, Marz made this delicious beer to buy your vote.',
      brew_id: 7
    }, {
      category: 'Sour/Fruit',
      beer_name: 'The Bubbly Creek',
      style: 'Berliner Weiss',
      abv: 3.0,
      description: 'The Bubbly Creek is the first brew in our South Side Sour line. Our Bubbly Creek is a traditional German style top–fermented wheat beer, made with both traditional warm–fermenting yeasts and our own strain of lactobacillus plantarum culture.',
      brew_id: 7
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Duchess De Bridgeport',
      style: 'Sour Red Ale',
      abv: 6.3,
      description: 'A South Side Sour red ale brewed with our proprietary souring bacteria, Duchess De Bridgeport is our take on a Flanders Red. Notes of strawberry, dried fruit, and citric hops intermingle with a round lactic sourness. The Duchess is an homage to our mom, Maria Marszewski.',
      brew_id: 7
    }, {
      category: 'Porter/Stout',
      beer_name: 'What the Pho',
      style: 'Porter',
      abv: 6.2,
      description: 'Inspired by the Vietnamese noodle soup Pho, this Marz — Urban Belly Brew is an experimental spiced porter. We use our Bridgeporter base beer and age it on oak and sassafrass wood staves and infused with Urban Belly soup Pho base. The beer is then dry hopped with a spice blend of coriander, cinnamon, star anise, clove.',
      brew_id: 7
    }, {
      category: 'IPA',
      beer_name: 'Lumen IPA',
      style: 'IPA',
      abv: 6.2,
      description: 'Named after long running counter culture magazine Lumpen, we made this IPA a little different than most. There is plenty of body from caramel malts, a little roast from dark grains, and lots of Falconers Flight hop blend.',
      brew_id: 7
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */

    return queryInterface.bulkDelete('Beers', null, {});
  }
};