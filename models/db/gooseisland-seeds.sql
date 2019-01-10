
-- WE CHOSE THE SEEDS FORMAT IN ORDER TO MAKE THE DATABASE MORE MODULAR FOR SCALING PURPOSES
-- BREWERY 3
INSERT INTO breweries (name, location)
VALUES ('Goose Island Brewery', '1800 W Fulton St Chicago, IL 60612');

-- GOOSE ISLAND 

INSERT INTO beers (category, beer_name, style, abv, description, brewery) VALUES
('IPA', 'Goose IPA', 'IPA', 5.9, 'Our India Pale Ale recalls a time when ales shipped from England to India were highly hopped to preserve their distinct taste during the long journey. The result is a hop lover’s dream with a fruity aroma, set off by a dry malt middle, and long hop finish.', 'Goose Island Brewery'),

('Pale Ale', 'Goose Honkers Ale', 'English Bitter', 4.3, 'Inspired by visits to English country pubs, Honker’s Ale combines a spicy hop aroma with a rich malt middle to create a perfectly balanced beer. Immensely drinkable, Honker’s Ale is not only a beer drinkers can trust but one they’ll look forward to.', 'Goose Island Brewery'),

('Wheat Beer', '312 Urban Wheat Ale', 'Wheat Ale', 4.2, 'Inspired by the city of Chicago and densely populated with flavor, 312’s spicy aroma of Cascade hops is followed by a crisp, fruity ale flavor delivered in a smooth, creamy body that is immensely refreshing.',  'Goose Island Brewery'),

('Pale Ale', 'Green Line Pale Ale', 'APA', 5.4, 'Green Line Pale Ale is a honey-colored, immensely sessionable American pale ale with a pronounced, bright, American hop aroma and citrus flavor. Notes of biscuit and lightly toasted malt create the backbone for Green Lines pleasant, crisp bitterness.', 'Goose Island Brewery'),

('Pale Ale', 'Old Man Grumpy', 'APA', 5.8, 'This lighter-bodied ale is dry hopped with Huell Melon and Mosaic hops that give the beer a tropical flavor profile of pineapple followed by pine hop characteristics.  It has subtle malt sweetness, balanced bitterness with a clean finish.', 'Goose Island Brewery'),

('Farmhouse/Saison', 'Sofie', 'Belgian Ale', 6.5, 'Our sparkling Belgian Style Farmhouse Ale is wine barrel-aged with an abundance of hand-zested orange peel. Spicy white pepper notes contrast the citrus tartness. The light, refreshing, creamy vanilla finish will excite those fond of Champagne.', 3),

('Pale Ale', 'Matilda', 'Belgian Ale', 7.0, 'Inspired by great Trappist ales, our complex Belgian Style Pale Ale is fermented with the wild yeast Brettanomyces. Matilda pours a golden sunrise color with dried fruit and clove aromas, a spicy yeast flavor, and a satisfying dry finish.According to legend, a grateful Countess Matilda founded a monastery where, over centuries, monks have been brewing ale unique in character. While in Belgium, we were inspired by the story and the monks’ beer. We returned to Chicago and brewed our homage – a Belgian Style Pale Ale named Matilda.', 'Goose Island Brewery'),

('Farmhouse/Saison', 'Goose Island Oktoberfest', 'Märzen', 6.4, 'Brewed in the traditional Märzen style, our Oktoberfest pours a brilliant copper over rose color with a bone white head. Notes of toffee and burnt sugar in the aroma and flavors of sweet dried apricots are delivered in a dry malty body with the mild earthy bitterness that is the hallmark of Hallertau hops.', 'Goose Island Brewery'),

('Pilsner', 'Goose Summertime Kölsch', 'Kölsch', 5.1, 'With a light fruity aroma and a bright, crisp finish, Goose Island Summertime Kölsch is the perfect summer session ale.  A Kölsch beer brewed in the traditional German fashion, you’ll find yourself enjoying and savoring each sip of Summertime as much as your do those hot summer days and cool summer nights.', 'Goose Island Brewery'),

('Farmhouse/Saison', 'Noël', 'Belgian Ale', 9.5, 'In Belgium, Noël beers were released at the end of the year as a special, limited release to thank loyal brewery customers for their support throughout the year. Goose Island Noël is an un-spiced Belgian-style, Dark Ale with balanced notes of caramelized sugar, toasted bread, black cherry, and dried apricot all in a warm, deep-mahogany body. This beer was brewed to celebrate the past year and toast the new year to come. From our brewers to you and yours, cheers and happy holidays.', 'Goose Island Brewery'),

('Porter/Stout', 'Bourbon County Brand Stout 2018', 'Stout', 15.0, 'Brewed in honor of the 1000th batch at our original Clybourn brewpub. A liquid as dark and dense as a black hole with thick foam the color of a bourbon barrel. The nose is an intense mix of charred oak, chocolate, vanilla, caramel and smoke. One sip has more flavor than your average case of beer.', 'Goose Island Brewery'),

('Barleywine', 'Bourbon County Coffee Barleywine 2018', 'Barleywine', 15.1, 'Working with our friends at Intelligentsia we flew down to Guatemala to source some of the worlds best coffee to use in the first ever release of Bourbon County Coffee Barleywine. A malt forward English-Style Barleywine, the beer aged in 4+ year old Heaven Hill Bourbon barrels before we added La Soledad coffee beans right before packaging to impart a bold coffee flavor and aroma.', 'Goose Island Brewery');