CREATE TABLE `status` (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL
);
ALTER TABLE users ADD status_id int NOT NULL;
ALTER TABLE users ADD CONSTRAINT fk_status_id FOREIGN KEY (status_id)
REFERENCES status (id);