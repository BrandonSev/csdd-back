/* Replace with your SQL commands */
CREATE TABLE under_status (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150)
);
ALTER TABLE status ADD under_status_id INT NOT NULL;
ALTER TABLE status ADD CONSTRAINT fk_under_status_id FOREIGN KEY (under_status_id) REFERENCES under_status (id);