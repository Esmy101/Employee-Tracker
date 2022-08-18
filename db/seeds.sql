
INSERT INTO department ( department_name)
VALUES ( "Sales"), ( "Finance"), ( "Engineering");


INSERT INTO roles (id, role_title, role_salary, department_id)
VALUES (001, "Sales Lead", 980000, 001), (002, "Salesperson", 80000, 001), (003, "Lead Engineer", 160000, 003), (004, "Software Engineer", 130000, 003), (005, "Account Manager", 170000, 002), (006, "Accountant", 125000, 002);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Frodo", "Baggins",001, NULL), (002, "Sam", "Gamgee", 002, 001), (003, "Aragorn", "Gondor", 003, NULL), (004, "Legolas", "Woodland", 004, 003), (005, "Arwen", "Rivendell", 005, NULL ), (006, "Eowyn", "Rhan", 006, 005);