'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'IPA',
      beer_name: 'Goose IPA',
      style: 'IPA',
      abv: 5.9,
      description: 'Our India Pale Ale recalls a time when ales shipped from England to India were highly hopped to preserve their distinct taste during the long journey. The result is a hop lover’s dream with a fruity aroma, set off by a dry malt middle, and long hop finish.',
      brew_id: 3
    }, {
      category: 'Pale Ale',
      beer_name: 'Goose Honkers Ale',
      style: 'English Bitter',
      abv: 4.3,
      description: 'Inspired by visits to English country pubs, Honker’s Ale combines a spicy hop aroma with a rich malt middle to create a perfectly balanced beer. Immensely drinkable, Honker’s Ale is not only a beer drinkers can trust but one they’ll look forward to.',
      brew_id: 3
    }, {
      category: 'Wheat Beer',
      beer_name: '312 Urban Wheat Ale',
      style: 'Wheat Ale',
      abv: 4.2,
      description: 'Inspired by the city of Chicago and densely populated with flavor, 312’s spicy aroma of Cascade hops is followed by a crisp, fruity ale flavor delivered in a smooth, creamy body that is immensely refreshing.',
      brew_id: 3
    }, {
      category: 'Pale Ale',
      beer_name: 'Green Line Pale Ale',
      style: 'APA',
      abv: 5.4,
      description: 'Green Line Pale Ale is a honey-colored, immensely sessionable American pale ale with a pronounced, bright, American hop aroma and citrus flavor. Notes of biscuit and lightly toasted malt create the backbone for Green Lines pleasant, crisp bitterness.',
      brew_id: 3
    }, {
      category: 'Pale Ale',
      beer_name: 'Old Man Grumpy',
      style: 'APA',
      abv: 5.8,
      description: 'This lighter-bodied ale is dry hopped with Huell Melon and Mosaic hops that give the beer a tropical flavor profile of pineapple followed by pine hop characteristics.  It has subtle malt sweetness, balanced bitterness with a clean finish.',
      brew_id: 3
    }, {
      category: 'Farmhouse/Saison',
      beer_name: 'Sofie',
      style: 'Belgian Ale',
      abv: 6.5,
      description: 'Our sparkling Belgian Style Farmhouse Ale is wine barrel-aged with an abundance of hand-zested orange peel. Spicy white pepper notes contrast the citrus tartness. The light, refreshing, creamy vanilla finish will excite those fond of Champagne.',
      brew_id: 3
    }, {
      category: 'Pale Ale',
      beer_name: 'Matilda',
      style: 'Belgian',
      abv: 7.0,
      description: 'Inspired by great Trappist ales, our complex Belgian Style Pale Ale is fermented with the wild yeast Brettanomyces. Matilda pours a golden sunrise color with dried fruit and clove aromas, a spicy yeast flavor, and a satisfying dry finish.According to legend, a grateful Countess Matilda founded a monastery where, over centuries, monks have been brewing ale unique in character. While in Belgium, we were inspired by the story and the monks’ beer. We returned to Chicago and brewed our homage – a Belgian Style Pale Ale named Matilda.',
      brew_id: 3
    }, {
      category: 'Farmhouse/Saison',
      beer_name: 'Goose Island Oktoberfest ',
      style: 'Märzen',
      abv: 6.4,
      description: 'Brewed in the traditional Märzen style, our Oktoberfest pours a brilliant copper over rose color with a bone white head. Notes of toffee and burnt sugar in the aroma and flavors of sweet dried apricots are delivered in a dry malty body with the mild earthy bitterness that is the hallmark of Hallertau hops.',
      brew_id: 3
    }, {
      category: 'Pilsner',
      beer_name: 'Goose Summertime Kölsch',
      style: 'Kölsch',
      abv: 5.1,
      description: 'With a light fruity aroma and a bright, crisp finish, Goose Island Summertime Kölsch is the perfect summer session ale.A Kölsch beer brewed in the traditional German fashion, you’ ll find yourself enjoying and savoring each sip of Summertime as much as your do those hot summer days and cool summer nights.',
      brew_id: 3
    }, {
      category: 'Farmhouse/Saisone',
      beer_name: 'Noël',
      style: 'Belgian Ale',
      abv: 9.5,
      description: 'In Belgium, Noël beers were released at the end of the year as a special, limited release to thank loyal brewery customers for their support throughout the year. Goose Island Noël is an un-spiced Belgian-style, Dark Ale with balanced notes of caramelized sugar, toasted bread, black cherry, and dried apricot all in a warm, deep-mahogany body. This beer was brewed to celebrate the past year and toast the new year to come. From our brewers to you and yours, cheers and happy holidays.',
      brew_id: 3
    }, {
      category: 'Porter/Stout',
      beer_name: 'Bourbon County Brand Stout 2018',
      style: 'Stout',
      abv: 15.0,
      description: 'Brewed in honor of the 1000th batch at our original Clybourn brewpub. A liquid as dark and dense as a black hole with thick foam the color of a bourbon barrel. The nose is an intense mix of charred oak, chocolate, vanilla, caramel and smoke. One sip has more flavor than your average case of beer.',
      brew_id: 3
    }, {
      category: 'Barleywine',
      beer_name: 'Bourbon County Coffee Barleywine 2018',
      style: 'Barleywine',
      abv: 15.1,
      description: 'Working with our friends at Intelligentsia we flew down to Guatemala to source some of the worlds best coffee to use in the first ever release of Bourbon County Coffee Barleywine.A malt forward English - Style Barleywine, the beer aged in 4 + year old Heaven Hill Bourbon barrels before we added La Soledad coffee beans right before packaging to impart a bold coffee flavor and aroma.',
      brew_id: 3
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