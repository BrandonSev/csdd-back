/* Replace with your SQL commands */
ALTER TABLE under_status DROP CONSTRAINT fk_status_id;
ALTER TABLE under_status DROP status_id;
DROP TABLE IF EXISTS `under_status`;