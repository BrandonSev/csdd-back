/* Replace with your SQL commands */
ALTER TABLE roles_assets DROP CONSTRAINT fk_roles_assets_roles_id;
ALTER TABLE roles_assets DROP CONSTRAINT fk_roles_assets_assets_id;

DROP TABLE IF EXISTS assets;
DROP TABLE IF EXISTS roles_assets;
