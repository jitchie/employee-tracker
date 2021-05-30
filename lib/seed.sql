INSERT INTO department (name)
VALUES ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO roles (title, salary, department_id)
VALUES ('operational managment', 120000, 1),
    ('operations clerk', 60000, 1),
    ('marketing manager', 100000, 2),
    ('marketing sales assistent', 70000, 2),
    ('senior accountant', 90000, 3),
    ('junior accountant', 55000, 3),
    ('human resource manager', 100000, 4),
    ('procurment manager', 150000, 5),
    ('legal manager', 200000, 6),
    ('legal admin', 55000, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('john', 'doe', 22, NULL),
    ('jack', 'ritchie', 60, 22),
    ('dan', 'darefoote', 33, null),
    ('will', 'chapman', 70, 33),
    ('chris', 'theo', 44, null),
    ('nick', 'theo', 80, 44),
    ('sam', 'orielly', 90, null),
    ('adam', 'smith', 100, null),
    ('claudia', 'hill', 55, null),
    ('kerry', 'saidsmith', 110, 55);