/* Replace with your SQL commands */
CREATE TABLE room (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  users_id INT NOT NULL
  );
ALTER TABLE room ADD CONSTRAINT fk_room_users_id FOREIGN KEY(users_id) REFERENCES users (id);