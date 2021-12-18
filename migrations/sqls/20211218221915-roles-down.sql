/* Replace with your SQL commands */
ALTER TABLE users_roles DROP CONSTRAINT fk_users_id;
ALTER TABLE users_roles DROP CONSTRAINT fk_roles_id;

DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users_roles;
