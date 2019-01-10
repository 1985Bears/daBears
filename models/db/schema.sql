-- USE oaf5qemb5uomceb1;

-- CREATE TABLE breweries(
--   brew_id INT AUTO_INCREMENT NOT NULL,
--   name VARCHAR(255),
--   location VARCHAR(255),
--   PRIMARY KEY (brew_id)
-- );

-- CREATE TABLE beers(
--   category VARCHAR(255) NOT NULL,
--   beer_id INT AUTO_INCREMENT NOT NULL,
--   beer_name VARCHAR(255),
--   style VARCHAR(255),
--   score INT, 
--   ABV DECIMAL(4,2),
--   description TEXT NULL,
-- PRIMARY KEY(beer_id),
--  FOREIGN KEY (brew_id) REFERENCES breweries(brew_id)
-- );

-- CREATE TABLE Users(
--   email VARCHAR(255) NOT NULL,
--   firstName VARCHAR(255) NOT NULL,
--   lastName VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE favorites(
--   profile_name VARCHAR(255) NULL,
--   beer_style VARCHAR(255) NOT NULL,
--   user_id VARCHAR(255) NOT NULL
-- );



-- INSERT INTO breweries (name, location) 
-- VALUES (“Hopewell”, "2760 N. Milwaukee, Chicago, IL 60647");

