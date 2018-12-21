create database chicagoBrews_db

use chicagoBrews_db;

CREATE TABLE breweries(
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 name VARCHAR(255),
 location VARCHAR(255),
 PRIMARY KEY (id)
);

CREATE TABLE beers(
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 beer_name VARCHAR(255),
 beer_style VARCHAR(255),
 PRIMARY KEY (id)
);