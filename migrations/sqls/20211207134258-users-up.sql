CREATE TABLE `users`(
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL ,
    firstname VARCHAR(100) NOT NULL ,
    lastname varchar(100) NOT NULL ,
    birthday DATE NOT NULL ,
    address VARCHAR(255) NOT NULL ,
    postal_code int(5) NOT NULL ,
    city varchar(150) NOT NULL ,
    email varchar(255) NOT NULL ,
    phone varchar(10) NOT NULL ,
    password varchar(255) NOT NULL ,
    adoption_date DATE NULL ,
    picture VARCHAR(255) NULL ,
    cotisation_payed boolean NOT NULL DEFAULT (true),
    active boolean NOT NULL DEFAULT (false),
    CONSTRAINT uk_users_email UNIQUE (
        email
    )
);
