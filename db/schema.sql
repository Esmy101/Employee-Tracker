DROP DATEBASE IF EXISTS business_db;
CREATE DATEBASE business_db;

USE business_db;

--depatement table--
CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
)

--role table--
CREATE TABLE role (
    id INT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL,
    department_id INT
)

--employee table--
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
)