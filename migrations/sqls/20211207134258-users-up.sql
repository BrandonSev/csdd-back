CREATE TABLE `users`(
    `id` int AUTO_INCREMENT NOT NULL ,
    `firstname` varchar(100)  NOT NULL ,
    `lastname` varchar(100)  NOT NULL ,
    `birthday` DATE  NOT NULL ,
    `address` varchar(255)  NOT NULL ,
    `postal_code` varchar(5)  NOT NULL ,
    `city` varchar(255)  NOT NULL ,
    `email` varchar(255)  NOT NULL ,
    `phone` varchar(10)  NOT NULL ,
    `password` varchar(255)  NOT NULL ,
    `adoption_date` DATE  NULL ,
    `picture` VARCHAR(255)  NULL ,
    `cotisation_payed` boolean  NOT NULL DEFAULT (true),
    `status_id` int  NOT NULL ,
    CONSTRAINT `pk_users` PRIMARY KEY (
        `id`
    ),
    CONSTRAINT `uk_users_email` UNIQUE (
        `email`
    )
) ENGINE = InnoDB DEFAULT CHARSET = latin1;