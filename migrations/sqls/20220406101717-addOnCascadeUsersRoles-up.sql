/* Replace with your SQL commands */
ALTER TABLE users_roles DROP CONSTRAINT fk_users_id;
ALTER TABLE users_roles ADD CONSTRAINT fk_users_id FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE;
