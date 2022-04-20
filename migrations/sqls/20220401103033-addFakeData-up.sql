/* Replace with your SQL commands */
INSERT INTO roles SET name="admin";
INSERT INTO users SET firstname="Webmaster", lastname="lastname", birthday="2022-02-02", address="Adresse de test", postal_code=28000, city="La loupe", email="webmaster@csdd.fr", phone="0200221123", password="$argon2i$v=19$m=4096,t=3,p=1$+KzAQYzDOWFhB9Z46aTPDw$LQAmBcXvr/n8laZJiiQgdoI5Oy2DcKAyaXVz5RY6LEo", cotisation_payed=1, adoption_date="2020-04-07", active=1;
INSERT INTO users_roles SET users_id=1, roles_id=1;