--data for department table--
INSERT INTO department (id, department_name)
VALUES (001, "Sales"), (002, "Finance"), (003, "Engineering");

--data for role table--
INSERT INTO role (id, role_title, role_salary, department_id)
VALUES (001, "Sales Lead", 980000, "Sales"), (002, "Salesperson", 80000, "Sales"), (003, "Lead Engineer", 160000, "Engineering"), (004, "Software Engineer", 130000, "Engineering"), (005, "Account Manager", 170000, "Finance"), (006, "Accountant", 125000, "Finance");


--data for employee table--

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Frodo", "Baggins","Sales Lead", 980000, "Sales"), (002, "Sam", "Gamgee", "Salesperson", 80000, "Sales", "Frodo Baggins"), (003, "Aragorn", "Gondor", "Lead Engineer", 160000, "Engineering"), (004, "Legolas", "Woodland" "Software Engineer", 130000, "Engineering", "Aragorn Gondor"), (005, "Arwen", "Rivendell", "Account Manager", 170000, "Finance"), (006, "Eowyn", "Rhan" "Accountant", 125000, "Finance", "Arween Rivendell");