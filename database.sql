-- Create database table
CREATE TABLE food (
	id SERIAL UNIQUE PRIMARY KEY,
	name VARCHAR(100),
	cost INT
);

-- Insert some rows into the db
INSERT INTO food ( name, cost ) VALUES ( 'pizza', 2);
INSERT INTO food ( name, cost ) VALUES ( 'apple', 2);
INSERT INTO food ( name, cost ) VALUES ( 'bread', 1);
INSERT INTO food ( name, cost ) VALUES ( 'grapes', 3);
