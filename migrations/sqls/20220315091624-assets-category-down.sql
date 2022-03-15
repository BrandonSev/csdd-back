ALTER TABLE assets_category DROP CONSTRAINT fk_assets_category_assets_id;
ALTER TABLE assets_category DROP CONSTRAINT fk_assets_category_category_id;


DROP TABLE IF EXISTS assets_category;
DROP TABLE IF EXISTS categories;


