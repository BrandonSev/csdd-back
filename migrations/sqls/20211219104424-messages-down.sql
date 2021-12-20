/* Replace with your SQL commands */
ALTER TABLE messages DROP CONSTRAINT fk_messages_users_id;
DROP TABLE IF EXISTS messages;