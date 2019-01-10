'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
        category: 'Farmhouse/Saison',
        beer_name: 'First Lager',
        style: 'LagerA',
        abv: 5.1,
        description: 'A first and a favorite. Delightfully crisp, balancing bready malt with pronounced noble hop aroma. This is a year-round beer, good from the dog days of summer through the never-ending winter. Also available in 6-pack cans!',
        brew_id: 2
      }, {
        category: 'IPA',
        beer_name: 'Swift IPA',
        style: 'IPA',
        abv: 6.9,
        description: 'Swift is our flagship IPA, featuring a substantial crisp bitterness kept in check by a solid malt base. Featuring Amarillo, Simcoe and Centennial hops, Swift is a bright and clean IPA with an intense citrus bouquet and flavor.',
        brew_id: 2
      }, {
        category: 'Sour/Fruit',
        beer_name: 'Ya Filthy Animal',
        style: 'Kettle Sour',
        abv: 6.5,
        description: 'Inspired by the warming flavors of mulled wine. Ya Filthy Animal is a kettle sour brewed with plum, black currants and mulling spices. Keep the change.',
        brew_id: 2
      }, {
        category: 'Pale Ale',
        beer_name: 'Ride or Die',
        style: 'Pale Ale',
        abv: 5.5,
        description: 'A mellow, sessionable pale ale with tropical fruit overtones and an undercurrent of citrus zest. Built for the dog days, but good no matter what.',
        brew_id: 2
      }, {
        category: 'IPA',
        beer_name: 'Clique',
        style: 'Brut IPA',
        abv: 6.5,
        description: 'A Brut IPA with big notes of citrus zest, followed by a bone-dry finish.',
        brew_id: 2
      }, {
        category: 'IPA',
        beer_name: 'There There',
        style: 'Double IPA',
        abv: 7.7,
        description: 'A juicy, dank DIPA soaked with heavy doses of Vic Secret and Wakatu hops and fermented with a fruity Norwegian yeast strain.',
        brew_id: 2
      }, {
        category: 'IPA',
        beer_name: '24:37 Red IPA',
        style: 'IPA',
        abv: 6.5,
        description: 'With a notable red tint from roasted malt, this IPA has a bright, clean hop aroma and bitterness. Dry-hopped with Sorachi Ace for a floral, lemongrass aroma.',
        brew_id: 2
      }, {
        category: 'Porter/Stout',
        beer_name: 'Off-Black',
        style: 'Dark Lager',
        abv: 5.5,
        description: 'A roasty and malty Schwarzbier that is kept in balance with a healthy dose of noble hops.',
        brew_id: 2
      },
      {
        category: 'Pale Ale',
        beer_name: 'People Power',
        style: 'American Pale Ale',
        abv: 5.5,
        description: 'Wakatu hops lead the show here, bringing bright citrus and floral notes atop a soft base of pale malt and wheat. 10% of purchase donated to ACLU.',
        brew_id: 2
      }, {
        category: 'Farmhouse/Saison',
        beer_name: 'Family Saison',
        style: 'Saison',
        abv: 5.9,
        description: 'Focused and simple with classic Belgian yeast character, including notes of banana and earthy spice. Finishes bone-dry with a soft body.',
        brew_id: 2
      }
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