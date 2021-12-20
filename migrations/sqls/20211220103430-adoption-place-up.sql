/* Replace with your SQL commands */
CREATE TABLE adoption_place (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    users_id INT NOT NULL
);
ALTER TABLE adoption_place ADD CONSTRAINT fk_adoption_place_users_id FOREIGN KEY(users_id) REFERENCES users(id);