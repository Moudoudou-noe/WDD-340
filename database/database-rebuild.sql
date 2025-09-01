-- database Rebuild Script
-- here for me file contains all SQL statements to recreate the database structure and data

-- create account_type ENUM 
CREATE TYPE account_type_enum AS ENUM ('Client', 'Employee', 'Admin');

-- create classification table
CREATE TABLE IF NOT EXISTS classification (
    classification_id SERIAL PRIMARY KEY,
    classification_name VARCHAR(30) NOT NULL UNIQUE
);

-- create account table
CREATE TABLE IF NOT EXISTS account (
    account_id SERIAL PRIMARY KEY,
    account_firstname VARCHAR(20) NOT NULL,
    account_lastname VARCHAR(20) NOT NULL,
    account_email VARCHAR(320) NOT NULL UNIQUE,
    account_password VARCHAR(60) NOT NULL,
    account_type account_type_enum DEFAULT 'Client'::account_type_enum
);

-- create inventory table
CREATE TABLE IF NOT EXISTS inventory (
    inv_id SERIAL PRIMARY KEY,
    inv_make VARCHAR(30) NOT NULL,
    inv_model VARCHAR(30) NOT NULL,
    inv_year INT NOT NULL CHECK (inv_year >= 1900),
    inv_description TEXT NOT NULL,
    inv_image VARCHAR(50) NOT NULL,
    inv_thumbnail VARCHAR(50) NOT NULL,
    inv_price NUMERIC(8,2) NOT NULL CHECK (inv_price > 0),
    inv_miles INT NOT NULL CHECK (inv_miles >= 0),
    inv_color VARCHAR(30) NOT NULL,
    classification_id INT REFERENCES classification(classification_id) ON DELETE CASCADE
);

-- insert classification data
INSERT INTO classification (classification_name) VALUES 
('Custom'),
('Sport'),
('SUV'),
('Truck'),
('Sedan');

-- insert sample inventory data
INSERT INTO inventory (
    inv_make, inv_model, inv_year, inv_description, inv_image, inv_thumbnail, 
    inv_price, inv_miles, inv_color, classification_id
) VALUES 
('GM', 'Hummer', 2016, 'Do you have 6 kids and like to go off-roading? The Hummer gives you the small interiors with an engine to get you out of any muddy or rocky situation.', 
 '/images/hummer.jpg', '/images/hummer-tn.jpg', 31999.99, 41205, 'Yellow', 3),

('Lamborghini', 'Aventador', 2022, 'This V-12 engine packs a punch in this sleek sports car. Make sure you wear your seatbelt and obey all traffic laws.', 
 '/images/lambo-aventador.jpg', '/images/lambo-aventador-tn.jpg', 397000.00, 2100, 'Orange', 2),

('Audi', 'R8', 2018, 'This sporty car converts from convertible to coupe in just seconds. You will feel the power of its 10-cylinder engine as you zip along.', 
 '/images/audi-r8.jpg', '/images/audi-r8-tn.jpg', 154900.00, 9500, 'Red', 2);

-- Task 1 Queries 4 and 6 (copied from assignment2.sql)
-- 4. Modify GM Hummer description to change "small interiors" to "a huge interior"
UPDATE inventory 
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior') 
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- 6. Update all inventory records to add "/vehicles" to file paths
UPDATE inventory 
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');