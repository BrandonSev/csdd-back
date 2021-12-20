/* Replace with your SQL commands */
CREATE table messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  message TEXT NOT NULL,
  created_at DATETIME default CURRENT_TIMESTAMP() NOT NULL
);
ALTER TABLE messages ADD users_id int NOT NULL;
ALTER TABLE messages ADD CONSTRAINT fk_messages_users_id FOREIGN KEY (users_id) REFERENCES users (id);
