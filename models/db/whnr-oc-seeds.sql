USE chicagobrews_db

-- INSERT BREWERIES INTO BREWERIES TABLE

INSERT INTO breweries (name, location) VALUES ("Off Color","3925 W. Dickens Ave. Chicago, Il. 60647");
INSERT INTO breweries (name, location) VALUES ("Whiner","1400 W 46th St, Chicago, IL 60609");

-- INSERT BEERS INTO BEERS TABLE
-- OFF COLOR --

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Myshka", "Stout", 3.5, 25, "Rather than a typical Imperial Stout, which quickly decimates you and buries you in the yard, this delicate beauty wraps a warm scarf around your neck and just tightens it, ever… so… gently. Also, we put Russian Serf Stout on the label because we got a lot of emails from people arguing you can't make a 3.5% RIS and we don't feel like going through all that again.", 0);

INSERT INTO beers (beer_name, style, score, ABV, description, brew_id) VALUES ("Coffee Dino Smores", "Stout", 10.5, "Every year we team up with a different roaster to make new friends and see how different roasters and small businesses operate. We couldn't be more excited to be working with Passion House Coffee Roastersthis year. During cupping, we fell in love with two different coffees and how they both added something unique. So we blended them. The first bean, an heirloom varietal hailing from the Sidamo region in Ethiopia, provides floral notes and citrusy acidity. The second bean, a mix of Bourbon and Catuai varietals from a microlot in the La Paz region of Honduras, gives a chocolatey sweetness and heavy body to the coffee. Together, these coffees show great balance, the pinnacle of careful work on the part of farmer, roaster, and brewer.", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Little Friend", "Pilsner", 3.8, 15, "Table Beer", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Sibling Rivalry", "Belgian Style Tripel", 8.5, 25, "A bright, but strong Belgian Style Tripel with a heavy dose of Sorachi Ace hops brewed with the Chouffe yeast strain producing spicy yeast esters paired with a mandarin orange hop profile.", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Apex Predator", "Farmhouse Ale", 6.5, 35, "When you brew as much as we do, sometimes we get tired of telling the yeast what to do. For Apex Predator Farmhouse Ale, we pitch the yeast cold, turn off the temperature control, and let the yeast do it's thing. To our delight, it spat out the sweet scent of juicy fruit wafting from a frothy, white mane. Brewed only with grain and sugar unencumbered by the heat of the kiln, we create a hazy, golden body. Apex Predator gets its teeth from a generous Crystal dry-hopping that completes the dry finish with a fruity bite. Pounce on the opportunity to let it part your lips and you may find yourself at the top of the food chain.", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Tooth & Claw", "Dry Hopped Lager", 5, 35, "John likes bees. John's like of bees led him to hanging out with other people who like bees. Some of the other people who like bees work at The Field Museum. The Field Museum was opening a bistro and bar. John was opening a brewery. And that is pretty much the story of how Off Color and The Field Museum collaborated to make this crisp, clean pilsner with a dry-hopped bite far inferior to Sue's.", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Growl", "Belgian Dark Strong", 9.5, 28,"A big ole' dark beer filled with ethanol (and stone fruit esters)", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Fierce", "Berliner Weisse", 3.8, 3, "Troublesome's meaner cousin will flail your tongue as hard as he can, but being such a little guy, you'll probably just pucker a bit. Spawned through an overnight kettle souring with our house lactobacillus culture, the wort emerges furious at what we did to it. Then, just because, we pitch a saison yeast and allow it to free rise to it's further distain. It comes out angrier than... uh, angrier than... well, something really angry. But at 3.8% ABV there's no reason for you to be too afraid.", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Le Predateur", "French Style Saison", 6.5, 25, "A beret-wearing, baguette-eating, mustached farmhouse ale made with French malts, French saison yeast, and Australian hops... what?", 0);

INSERT INTO beers (beer_name, style, score, ABV, IBU, description,  brew_id) VALUES ("Known Gnome", "Porter", 6.7, 0, "Known Gnome is a throwback to when old timey porter brewers tried to avoid paying hop taxes by (illegally) using quassia as a hop substitute. The bark of quassia came into fashion in the early 19th century as a bitter tonic in herbal medicine.Known Gnome also gets its unusual sweetness from licorice root and the naturally contained chemical glycyrrhizic acid which is 50 times sweeter tasting than sucrose. Notes of nuts and biscuits if they were briefly introduced to a coffee roaster. Sweetness and tannins further complement the biscuit backbone while it finishes dry on the palate with a kiss of fleeting brown malt.", 0);

-- WHINER

INSERT INTO beers (beer_name, style, score, ABV, description,  brew_id) VALUES ("Le Tub", "Wild Farmhouse Ale", 6.4, "A Blended Barrel-Aged Wild Saison. It tastes of white grapes, lemon tarts, funky fresh. You’ll want to bathe your mouth with it.", 0);

INSERT INTO beers (beer_name, style, score, ABV, description,  brew_id) VALUES ("Hell Kitty Kitty", "WBelgian Pale Ale", 7, "A Belgo-American Pale Ale, with notes of passion fruit and citrus aromatics, big time juicy fruits with a nice hoppy bite", 0);

INSERT INTO beers (beer_name, style, score, ABV, description,  brew_id) VALUES ("Rubrique-a-brac", "Wild Farmhouse Ale", 5.5, "A Dry-Hopped Biere de Garde with Brett. It tastes of spices, ripe orange, light caramel, wild rustic leather notes after slight aging. Zesty, dry..", 0);

INSERT INTO beers (beer_name, style, score, ABV, description,  brew_id) VALUES ("Miaou", "A Barrel-Aged, Belgian Wheat", 6.5, "A Blended Barrel-Aged Wild Saison. It has juicy tangerine notes, lightly hoppy, refreshing", 0);


INSERT INTO beers (beer_name, style, score, ABV, description,  brew_id) VALUES ("Bubble Tub", "Wild Farmhouse Ale", 6.2, "Kettle-Soured Saison with watermelons. This Kettle-Soured Saison is loaded with fresh watermelons. Tart, dry and as the kids say nowadays, refreshing AF.", 0);