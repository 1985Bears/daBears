DROP DATABASE IF EXISTS chicagobrews_db;
CREATE DATABASE chicagobrews_db;

USE chicagobrews_db

CREATE TABLE breweries(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255),
  location VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE beers(
  id INT AUTO_INCREMENT NOT NULL,
  beer_name VARCHAR(255),
  style VARCHAR(255),
  score INT, 
  ABV DECIMAL(4,2),
  IBU INT NULL,
  description VARCHAR(255) NULL,
  PRIMARY KEY (id)
);


SELECT title, firstName, lastName
FROM beers
LEFT JOIN breweries ON beers.breweryID = brew.id;