/* Replace with your SQL commands */
CREATE TABLE under_status (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150)
);
ALTER TABLE under_status ADD status_id INT NOT NULL;
ALTER TABLE under_status ADD CONSTRAINT fk_to_status_id FOREIGN KEY (status_id) REFERENCES status (id);