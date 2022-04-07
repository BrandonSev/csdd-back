/* Replace with your SQL commands */
ALTER TABLE messages DROP CONSTRAINT fk_messages_users_id;
ALTER TABLE messages ADD CONSTRAINT fk_messages_users_id FOREIGN KEY (users_id) REFERENCES users (id);