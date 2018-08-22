DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Man in the High Castle ", "Books", 15, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("A Game of Thrones", "Books", 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("To Kill a Mockingbird", "Books", 10, 20); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("God of War", "Video Games", 30, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars: Battlefront 2", "Video Games", 5, 40); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grand Theft Auto 5", "Video Games", 10, 10); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1984", "Books", 10, 20); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP Laptop", "Electronics", 100, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle E-Reader", "Electronics", 75, 15);


SELECT * FROM products;