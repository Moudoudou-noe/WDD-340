-- Assignment 2 SQL Queries
-- Task 1: Six SQL statements for CRUD operations

-- 1. Insert Tony Stark record (account_id and account_type handle their own values)
INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- 2. Modify Tony Stark record to change account_type to "Admin"
UPDATE account 
SET account_type = 'Admin' 
WHERE account_email = 'tony@starkent.com';

-- 3. Delete Tony Stark record from database
DELETE FROM account 
WHERE account_email = 'tony@starkent.com';

-- 4. Modify GM Hummer description to change "small interiors" to "a huge interior"
UPDATE inventory 
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior') 
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- 5. Inner join to select make, model from inventory and classification name for "Sport" category
SELECT i.inv_make, i.inv_model, c.classification_name 
FROM inventory i 
INNER JOIN classification c ON i.classification_id = c.classification_id 
WHERE c.classification_name = 'Sport';

-- 6. Update all inventory records to add "/vehicles" to file paths
UPDATE inventory 
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');