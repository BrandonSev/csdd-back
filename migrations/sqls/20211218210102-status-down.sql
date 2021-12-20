/* Replace with your SQL commands */
ALTER TABLE users DROP CONSTRAINT fk_status_id;
ALTER TABLE users DROP status_id;
DROP TABLE IF EXISTS `status`;
