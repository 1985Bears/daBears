'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'Porter/Stout',
      beer_name: 'Goldmund',
      style: 'Chocolate Stout',
      abv: 6.7,
      description: 'So you find yourself surrounded by death and horror in the world, and you escape it into lust. But lust has no duration; it leaves you again in the desert. Our Mexican Hot Chocolate-Style Stout was made with chocolate, cinnamon, chiles, and lots of love.',
      brew_id: 6
    }, {
      category: 'IPA',
      beer_name: 'Death by Viking',
      style: 'Imperial IPA',
      abv: 10.0,
      description: 'Rich caramel malt sweetness is dominated by a ferocious onslaught of resinous bitterness, pine and grapefruit hop character in this American style Imperial IPA.',
      brew_id: 6
    }, {
      category: 'IPA',
      beer_name: 'Kidnapped by Vikingz\a',
      style: 'American IPA',
      abv: 6.0,
      description: 'Bursting with fresh hop aroma, our American IPA has a light malty sweetness to balance the dominant, pine and citrus hop presence.',
      brew_id: 6
    }, {
      category: 'IPA',
      beer_name: 'Celebrated Excellence',
      style: 'Brut IPA',
      abv: 6.5,
      description: 'The French champage has always been celebrated for its excellence, and there is a brewery in Illinois that has joined with their friends in Florida to make a Brut IPA inspired by that same excellence. Celebrated Excellence by Solemn Oath and Cigar City Brewing is fermented in the tank with two strains of yeast, American ale and French Champage and dry hopped with Hallertau Blanc and the coveted Nelson Sauvin. See for yourself why we say, We will sell no beer, until its dear.',
      brew_id: 6
    }, {
      category: 'Pale Ale',
      beer_name: 'Old Faithorn',
      style: 'APA',
      abv: 5.0,
      description: 'Bright citrus, melon and tropical fruit hop notes balanced by a light malt sweetness and a medium body.',
      brew_id: 6
    }, {
      category: 'IPA',
      beer_name: 'Pain Cave',
      style: 'American Double IPA',
      abv: 9.0,
      description: 'Your palate deserves some bitter punishment. Aggressive hop bitterness and aromas that can bludgeon you with passion fruit, berry, orange and grapefruit, with only enough relief from the malt to keep you coming back for more. We promise we wont make your ears bleed.',
      brew_id: 6
    }, {
      category: 'Pale Ale',
      beer_name: 'Shake Senora',
      style: 'Hazy Pale Ale',
      abv: 5.0,
      description: 'SHAKE SHAKE SHAKE! The urge to do the Calypso dance is overwhelming you. It throws your body in the air and rocks you in time with sweet tropical fruits, apple and pear. Left to right is the tempo, it wont leave you in a haze. Just WORK WORK WORK SENORA!',
      brew_id: 6
    }, {
      category: 'Porter/Stout',
      beer_name: 'Barrel Aged Goldmund',
      style: 'Chocolate Stout',
      abv: 10,
      description: 'Our mexican hot chocolate style imperial stout aged with vanilla, Meco Chipotle peppers, and cinnamon that has been aged in bourbon barrels. This Goldmund took the path of world traveler instead of staying home and has come to share its wealth of experience with you.',
      brew_id: 6
    }, {
      category: 'Pale Ale',
      beer_name: 'Superior Stock',
      style: 'Pale Ale',
      abv: 4.0,
      description: 'Thousands of forgotten breweries once dotted the Midwest. We lost them to consolodation, urbanization, and many couldnt survive prohibition. This beer is dedicated to the breweries of our nations past and serves as a reminder that the beer renaissance of today is set on an impermanent foundation that can and will change. Superior Stock is a very easy drinking session pale ale with now classic flavors and aromas of Cascade hops.',
      brew_id: 6
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