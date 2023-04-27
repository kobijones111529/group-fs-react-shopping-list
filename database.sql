-- Database name currently configured as "fs-react-shopping" in pool.js

-- Create table
CREATE TABLE "groceries" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" REAL NOT NULL,
	"unit" VARCHAR(20) DEFAULT NULL,
	"purchased" BOOLEAN NOT NULL DEFAULT FALSE
);

-- Sample data
INSERT INTO "groceries"
	("name", "quantity", "unit", "purchased")
VALUES
	('Apples', 1, NULL, FALSE),
	('Flour', 2.1, 'meters', TRUE),
	('Beans', 1, 'pounds', FALSE),
	('Zucchini', 4, NULL, TRUE),
	('Beef', 0.3, 'seconds', FALSE);
