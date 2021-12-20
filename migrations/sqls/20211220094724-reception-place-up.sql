/* Replace with your SQL commands */
CREATE TABLE reception_place (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    users_id INT NOT NULL
    );
ALTER TABLE reception_place ADD CONSTRAINT fk_reception_place_users_id FOREIGN KEY(users_id)
REFERENCES users (id);