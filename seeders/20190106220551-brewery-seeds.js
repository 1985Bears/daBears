module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Breweries', [{
      name: 'Off Color Mouse Trap Tap Room',
      location: '3925 W. Dickens Ave. Chicago, Il. 60647',
    }, {
      name: 'Hopewell Brewing',
      location: '2760 N. Milwaukee, Chicago, IL 60647',
    }, {
      name: 'Goose Island Brewery',
      location: '1800 W Fulton St Chicago, IL 60612',
    }, {
      name: 'Revolution Brewing',
      location: '3340 N. Kedzie Ave Chicago, IL 60618',
    }, {
      name: 'Lagunitas Brewing Company Chicago',
      location: '607 W 17th St, Chicago, IL 60608',
    }, {
      name: 'Solemn Oath',
      location: '1661 Quincy Ave, Naperville, IL 60540',
    }, {
      name: 'Marz Community Brewing Co.',
      location: '3630 South Iron Street, Chicago, IL 60608',
    }, {
      name: 'Whiner',
      location: '1400 W 46th St, Chicago, IL 60609',
    }, ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */

    return queryInterface.bulkDelete('Breweries', null, {});
  }
};