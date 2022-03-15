CREATE TABLE events (
    id int  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    event_date DATE NOT NULL,
    description TEXT NOT NULL,
    filename varchar(255) NOT NULL
    );