/* Replace with your SQL commands */
CREATE TABLE token (
    id INT PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(255) NOT NULL,
    users_id INT NOT NULL
);

ALTER TABLE token ADD CONSTRAINT fk_token_users_id FOREIGN KEY (users_id) REFERENCES users (id);