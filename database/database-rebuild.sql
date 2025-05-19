-- Créer un type personnalisé pour account_type
CREATE TYPE account_type AS ENUM ('Client', 'Admin');
-- Table classification
CREATE TABLE classification (
    classification_id SERIAL PRIMARY KEY,
    classification_name VARCHAR(255) UNIQUE NOT NULL
);
-- Table inventory
CREATE TABLE inventory (
    inv_id SERIAL PRIMARY KEY,
    inv_make VARCHAR(255) NOT NULL,
    inv_model VARCHAR(255) NOT NULL,
    inv_description TEXT NOT NULL,
    inv_image VARCHAR(255) NOT NULL,
    inv_thumbnail VARCHAR(255) NOT NULL,
    inv_price NUMERIC(10, 2) NOT NULL,
    inv_year INT NOT NULL,
    inv_miles INT,
    inv_color VARCHAR(50),
    classification_id INT REFERENCES classification(classification_id)
);
-- Table account
CREATE TABLE account (
    account_id SERIAL PRIMARY KEY,
    account_firstname VARCHAR(50) NOT NULL,
    account_lastname VARCHAR(50) NOT NULL,
    account_email VARCHAR(255) UNIQUE NOT NULL,
    account_password VARCHAR(255) NOT NULL,
    account_type account_type DEFAULT 'Client'
);
-- Insertion des classifications
INSERT INTO classification (classification_name)
VALUES ('Sport'),
    ('SUV'),
    ('Truck');
-- Insertion d'inventaire
INSERT INTO inventory (
        inv_make,
        inv_model,
        inv_description,
        inv_image,
        inv_thumbnail,
        inv_price,
        inv_year,
        inv_miles,
        inv_color,
        classification_id
    )
VALUES (
        'GM',
        'Hummer',
        'The GM Hummer has small interiors',
        '/images/hummer.jpg',
        '/images/hummer-thumb.jpg',
        45000.00,
        2021,
        15000,
        'Black',
        2
    ),
    (
        'Toyota',
        'Supra',
        'Fast and stylish',
        '/images/supra.jpg',
        '/images/supra-thumb.jpg',
        55000.00,
        2023,
        5000,
        'Red',
        1
    );
-- Requête 4 de la Tâche 1
UPDATE inventory
SET inv_description = REPLACE(
        inv_description,
        'small interiors',
        'a huge interior'
    )
WHERE inv_make = 'GM'
    AND inv_model = 'Hummer';
-- Requête 6 de la Tâche 1
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');