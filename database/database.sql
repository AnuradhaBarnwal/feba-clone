CREATE DATABASE feba_clone;

--\c into Feba_clone

CREATE TABLE person(
    person_id SERIAl PRIMARY KEY,
    name VARCHAR(50),
    date VARCHAR(50)
);