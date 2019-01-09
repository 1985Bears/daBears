'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'Wheat Beer',
      beer_name: 'Lil Sumpin',
      style: 'Ale',
      abv: 5.9,
      description: 'Way smooth and silky with a nice wheatly-esque-ish-ness. A truly unique style featuring a strong hop finish on a silky body. A hoppy pale wheat ale that is great for IPA fans but so smooth that the hefeweizen fans dig it too.',
      brew_id: 5
    }, {
      category: 'IPA',
      beer_name: 'IPA',
      style: 'IPA',
      abv: 6.2,
      description: 'A well-rounded, highly drinkable IPA. A bit of Caramel Malt barley provides the richness that mellows out the twang of the hops.',
      brew_id: 5
    }, {
      category: 'Porter/Stout',
      beer_name: 'Cappucino Stout',
      style: 'Stout',
      abv: 9.1,
      description: 'Brewed with boatloads of roasted coffee in each batch for that extra Krunk… this Mondo Coffee Stout will leave you wondering whether youre coming or going.',
      brew_id: 5
    }, {
      category: 'Porter/Stout',
      beer_name: 'Coffee Stout',
      style: 'Stout',
      abv: 12.9,
      description: 'Our friends over at Kentuckys own Willett Distillery have one kind of barrel: wood. And they put two things in them: Bourbon and Rye. We were fortunate enough to get some of their Bourbon barrels, and we put our Imperial Stout in them. It is a chocolatey, coffee-y, smoky, Bourbon-y beast of a barrel-aged thing. Word.',
      brew_id: 5
    }, {
      category: 'Sour/Fruit',
      beer_name: 'Sumpin Easy',
      style: 'Ale',
      abv: 5.7,
      description: 'A healthy dose of 2-row malted barley, a bit of wheaty-esque-ish-ness and loads of Ekuanot hops to create a super smooth and velvety ale with a fruit and resin-y- finish like biting into a freshly picked peach. Easy!',
      brew_id: 5
    }, {
      category: 'Pale Ale',
      beer_name: 'Super Cluster',
      style: 'Ale',
      abv: 5.7,
      description: 'A healthy dose of 2-row malted barley, a bit of wheaty-esque-ish-ness and loads of Ekuanot hops to create a super smooth and velvety ale with a fruit and resin-y- finish like biting into a freshly picked peach. Easy!',
      brew_id: 5
    }, {
      category: 'Pale Ale',
      beer_name: 'Super Cluster',
      style: 'Ale',
      abv: 8.0,
      description: 'Super Cluster is a Citra-Hopped Mega Ale of intergalactic proportions. Everything weve learned about making hop-forward beer: Pale, cold, alcoholic, and bitter.',
      brew_id: 5
    }, {
      category: 'Porter/Stout',
      beer_name: 'Imperial',
      style: 'Stout',
      abv: 9.9,
      description: 'Made with Highly roasted malted barley, and plenty of it, to give the beer an uncommon richness and smoky, roasty depth…sorta like a hydraulic sandwich in a glass.',
      brew_id: 5
    }, {
      category: 'Barleywine',
      beer_name: 'Brown Shugga',
      style: 'Ale',
      abv: 10,
      description: 'Originally a failed attempt at our 1997 batch of Olde GnarlyWine Ale resulting in an all-new-beer-style we like to call... Irresponsible. We believe this Special Ale is something unique. Feeding brown cane sugar to otherwise cultured brewery yeast is akin to feeding raw shark to your gerbil. It is unlikely to ever occur in nature without human intervention. And it looks weird besides. But it has happened and now its too late',
      brew_id: 5
    }, {
      category: 'Barleywine',
      beer_name: 'Gnarlywine',
      style: 'Ale',
      abv: 5.1,
      description: 'With a light fruity aroma and a bright, crisp finish, Goose Island Summertime Kölsch is the perfect summer session ale.A Kölsch beer brewed in the traditional German fashion, you’ ll find yourself enjoying and savoring each sip of Summertime as much as your do those hot summer days and cool summer nights.',
      brew_id: 5
    }, {
      category: 'Pale Ale',
      beer_name: 'Hop Stoopid',
      style: 'Ale',
      abv: 8.0,
      description: 'The beer with a guarantee built right into the name, this one is destined to blast through the flavors from the night before. Massively dry-hopped for your aromatic pleasure.',
      brew_id: 5
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