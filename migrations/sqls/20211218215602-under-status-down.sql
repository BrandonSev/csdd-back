/* Replace with your SQL commands */
ALTER TABLE status DROP CONSTRAINT fk_under_status_id;
ALTER TABLE status DROP under_status_id;
DROP TABLE IF EXISTS `under_status`;