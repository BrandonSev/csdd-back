/* Replace with your SQL commands */
CREATE TABLE province (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
users_id INT NOT NULL
);
ALTER TABLE province ADD CONSTRAINT fk_province_users_id FOREIGN KEY(users_id) REFERENCES users (id);