'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Beers', [{
      category: 'Porter/Stout',
      beer_name: 'Myshka',
      style: 'Stout',
      abv: 3.5,
      description: 'Rather than a typical Imperial Stout, which quickly decimates you and buries you in the yard, this delicate beauty wraps a warm scarf around your neck and just tightens it, ever… so… gently. Also, we put Russian Serf Stout on the label because we got a lot of emails from people arguing you can not make a 3.5% RIS and we do not feel like going through all that again.',
      brew_id: 1
    }, {
      category: 'Porter/Stout',
      beer_name: 'Dino Smores',
      style: 'Stout',
      abv: 10.5,
      description: 'Every year we team up with a different roaster to make new friends and see how different roasters and small businesses operate. We could not be more excited to be working with Passion House Coffee Roastersthis year. During cupping, we fell in love with two different coffees and how they both added something unique. So we blended them. The first bean, an heirloom varietal hailing from the Sidamo region in Ethiopia, provides floral notes and citrusy acidity. The second bean, a mix of Bourbon and Catuai varietals from a microlot in the La Paz region of Honduras, gives a chocolatey sweetness and heavy body to the coffee. Together, these coffees show great balance, the pinnacle of careful work on the part of farmer, roaster, and brewer.',
      brew_id: 1
    }, {
      category: 'Pilsner',
      beer_name: 'Cappucino Stout',
      style: 'Pilsner',
      abv: 3.8,
      description: 'Table Beer',
      brew_id: 1
    }, {
      category: 'Farmhouse/Saison',
      beer_name: 'Sibling Rivalry',
      style: 'Belgian Style Tripel',
      abv: 8.5,
      description: 'A bright, but strong Belgian Style Tripel with a heavy dose of Sorachi Ace hops brewed with the Chouffe yeast strain producing spicy yeast esters paired with a mandarin orange hop profile.',
      brew_id: 1
    }, {
      category: 'Farmhouse/Saison',
      beer_name: 'Apex Predator',
      style: 'Farmhouse Ale',
      abv: 6.5,
      description: 'When you brew as much as we do, sometimes we get tired of telling the yeast what to do. For Apex Predator Farmhouse Ale, we pitch the yeast cold, turn off the temperature control, and let the yeast do its thing. To our delight, it spat out the sweet scent of juicy fruit wafting from a frothy, white mane. Brewed only with grain and sugar unencumbered by the heat of the kiln, we create a hazy, golden body. Apex Predator gets its teeth from a generous Crystal dry-hopping that completes the dry finish with a fruity bite. Pounce on the opportunity to let it part your lips and you may find yourself at the top of the food chain.',
      brew_id: 1
    }, {
      category: 'Pilsner',
      beer_name: 'Tooth & Claw',
      style: 'Dry Hopped Lager',
      abv: 5.0,
      description: 'John likes bees. Johns like of bees led him to hanging out with other people who like bees. Some of the other people who like bees work at The Field Museum. The Field Museum was opening a bistro and bar. John was opening a brewery. And that is pretty much the story of how Off Color and The Field Museum collaborated to make this crisp, clean pilsner with a dry-hopped bite far inferior to Sues.',
      brew_id: 1
    }, {
      category: 'Porter/Stout',
      beer_name: 'Growl',
      style: 'Belgian Dark Strong',
      abv: 9.5,
      description: 'A big ol dark beer filled with ethanol (and stone fruit esters',
      brew_id: 1
    }, {
      category: 'Wheat Beer',
      beer_name: 'Fierce',
      style: 'Berliner Weisse',
      abv: 3.8,
      description: 'Troublesomes meaner cousin will flail your tongue as hard as he can, but being such a little guy, you will probably just pucker a bit. Spawned through an overnight kettle souring with our house lactobacillus culture, the wort emerges furious at what we did to it. Then, just because, we pitch a saison yeast and allow it to free rise to its further distain. It comes out angrier than... uh, angrier than... well, something really angry. But at 3.8% ABV there is no reason for you to be too afraid.',
      brew_id: 1
    }, {
      category: 'Farmhouse/Saison',
      beer_name: 'Le Predateur',
      style: 'French Style Saison',
      abv: 6.5,
      description: 'A beret-wearing, baguette-eating, mustached farmhouse ale made with French malts, French saison yeast, and Australian hops... what?',
      brew_id: 1
    }, {
      category: 'Porter/Stout',
      beer_name: 'Known Gnome',
      style: 'Porter',
      abv: 6.7,
      description: 'Known Gnome is a throwback to when old timey porter brewers tried to avoid paying hop taxes by (illegally) using quassia as a hop substitute. The bark of quassia came into fashion in the early 19th century as a bitter tonic in herbal medicine.Known Gnome also gets its unusual sweetness from licorice root and the naturally contained chemical glycyrrhizic acid which is 50 times sweeter tasting than sucrose. Notes of nuts and biscuits if they were briefly introduced to a coffee roaster. Sweetness and tannins further complement the biscuit backbone while it finishes dry on the palate with a kiss of fleeting brown malt.',
      brew_id: 1
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