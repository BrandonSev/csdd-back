/* Replace with your SQL commands */
CREATE TABLE assets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  filename VARCHAR(255) NOT NULL,
  type varchar(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP() NOT NULL,
  file_date DATETIME NOT NULL
);

CREATE TABLE roles_assets (
  roles_id int NOT NULL,
  assets_id int NOT NULL
);

ALTER TABLE roles_assets ADD CONSTRAINT fk_roles_assets_roles_id FOREIGN KEY (roles_id) REFERENCES roles (id);
ALTER TABLE roles_assets ADD CONSTRAINT fk_roles_assets_assets_id FOREIGN KEY (assets_id) REFERENCES assets (id);

