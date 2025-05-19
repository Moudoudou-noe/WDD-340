-- 1. Insérer Tony Stark dans la table account
INSERT INTO account (
        account_firstname,
        account_lastname,
        account_email,
        account_password
    )
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
-- 2. Mettre à jour Tony Stark en tant qu'Admin
UPDATE account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';
-- 3. Supprimer Tony Stark
DELETE FROM account
WHERE account_email = 'tony@starkent.com';
-- 4. Modifier la description du GM Hummer
UPDATE inventory
SET inv_description = REPLACE(
        inv_description,
        'small interiors',
        'a huge interior'
    )
WHERE inv_make = 'GM'
    AND inv_model = 'Hummer';
-- 5. INNER JOIN pour récupérer les véhicules "Sport"
SELECT inv_make,
    inv_model,
    classification.classification_name
FROM inventory
    INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';
-- 6. Ajouter "/vehicles" dans le chemin des images
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');