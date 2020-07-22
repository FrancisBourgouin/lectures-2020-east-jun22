DROP TABLE bottles;
DROP TABLE spirit_types;

CREATE TABLE spirit_types(
   id serial PRIMARY KEY,
   name TEXT NOT NULL,
   description TEXT,
   region TEXT
);

CREATE TABLE bottles(
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    brand text NOT NULL,
    age INT NOT NULL,
    volume INT NOT NULL,
    spirit_type_id INT REFERENCES spirit_types(id) ON DELETE CASCADE
);


INSERT INTO spirit_types (name, description, region) VALUES ('Scotch', 'Whisky made in Scotland on specific principles', 'Scotland'); 
INSERT INTO spirit_types (name, description, region) VALUES ('Aguardiente', 'Anise spirit that isnt aged', 'Colombia'); 
INSERT INTO spirit_types (name, description, region) VALUES ('Vodka', 'Potato based, can be filtered or not', 'Russia'); 
INSERT INTO spirit_types (name, description, region) VALUES ('Grappa', 'Grape spirit, taste great', 'Italy'); 
INSERT INTO spirit_types (name, description, region) VALUES ('Tequila', 'Agave based, memory hog', 'Mexico'); 
INSERT INTO spirit_types (name, description, region) VALUES ('Bourbon', 'Corn & Ryue based, "american whisky"', 'US'); 


INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Macallan 18 Cask', 'Macallan', 18, 40, 1);
INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Nectar', 'Nectar', 0, 40, 2);
INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Jacobo Poli', 'Jacobo Poli', 0, 40, 4);
INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Grey Goose', 'Grey Goose', 0, 40, 3);
INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Patron', 'Patron', 8, 40, 5);
INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Makers Mark', 'Makers Mark', 8, 20, 6);