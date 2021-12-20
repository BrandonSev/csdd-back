/* Replace with your SQL commands */
CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL
);

CREATE TABLE users_roles (
  users_id int NOT NULL,
  roles_id int NOT NULL
);

ALTER TABLE users_roles ADD CONSTRAINT fk_users_id FOREIGN KEY (users_id) REFERENCES users (id);
ALTER TABLE users_roles ADD CONSTRAINT fk_roles_id FOREIGN KEY (roles_id) REFERENCES roles (id);
