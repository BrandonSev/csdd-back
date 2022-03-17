CREATE TABLE job_offers(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reference varchar(50) NOT NULL,
    poste varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP()
);