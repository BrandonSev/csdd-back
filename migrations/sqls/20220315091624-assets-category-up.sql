CREATE TABLE categories (
    id int  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255)  NOT NULL
);

CREATE TABLE assets_category (
    assets_id int  NOT NULL ,
    category_id int  NOT NULL 
);
ALTER TABLE assets_category ADD CONSTRAINT fk_assets_category_assets_id FOREIGN KEY assets_id REFERENCES assets (id);
ALTER TABLE assets_category ADD CONSTRAINT fk_assets_category_category_id FOREIGN KEY category_id
REFERENCES categories (id);

