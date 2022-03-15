ALTER TABLE users
    ADD COLUMN province_id INT NOT NULL,
    ADD COLUMN reception_place_id INT NULL,
    ADD COLUMN room_id INT NULL,
    ADD COLUMN adoption_place_id INT NOT NULL;

ALTER TABLE users ADD CONSTRAINT fk_users_province_id FOREIGN KEY (province_id) REFERENCES province (id);
ALTER TABLE users ADD CONSTRAINT fk_users_reception_place_id FOREIGN KEY (reception_place_id) REFERENCES reception_place (id);
ALTER TABLE users ADD CONSTRAINT fk_users_room_id FOREIGN KEY (room_id) REFERENCES room (id);
ALTER TABLE users ADD CONSTRAINT fk_users_adoption_place_id FOREIGN KEY (adoption_place_id) REFERENCES adoption_place (id);