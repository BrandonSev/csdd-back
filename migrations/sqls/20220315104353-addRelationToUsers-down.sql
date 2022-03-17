ALTER TABLE users DROP FOREIGN KEY fk_users_province_id;
ALTER TABLE users DROP FOREIGN KEY fk_users_reception_place_id;
ALTER TABLE users DROP FOREIGN KEY fk_users_room_id;
ALTER TABLE users DROP FOREIGN KEY fk_users_adoption_place_id;

ALTER TABLE users
    DROP COLUMN province_id,
    DROP COLUMN reception_place_id,
    DROP COLUMN room_id,
    DROP COLUMN adoption_place_id;
