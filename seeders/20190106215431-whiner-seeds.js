'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'Farmhouse/Saison',
      beer_name: 'Le Tub',
      style: 'Saison',
      abv: 6.4,
      description: 'White grapes, lemon tarts, funky fresh. You’ll want to bathe your mouth with it.',
      brew_id: 8
    }, {
      category: 'Pale Ale',
      beer_name: 'Hell Kitty Kitty',
      style: 'Belgo-American Pale Ale',
      abv: 10.0,
      description: 'Passion fruit and citrus aromatics, big time juicy fruits with a nice hoppy bite.',
      brew_id: 8
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Rubrique-A-Brac',
      style: 'Dry Hopped Bier de Garde',
      abv: 5.5,
      description: 'Spices, ripe orange, light caramel, wild rustic leather notes after slight aging. Zesty, dry.',
      brew_id: 8
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Miaou',
      style: 'Barrel Aged Belgian Wheat',
      abv: 6.5,
      description: 'Juicy tangerine notes, lightly hoppy, refreshing',
      brew_id: 8
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Bubble Tub',
      style: 'Watermelon Saison Kettle Sour',
      abv: 6.2,
      description: 'This Kettle-Soured Saison is loaded with fresh watermelons. Tart, dry and as the kids say nowadays, refreshing AF.',
      brew_id: 8
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