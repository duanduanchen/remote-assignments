USE assignment;

CREATE TABLE user (
    id integer PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user (email, `password`)
VALUES
('email1', 'email1Pass'),
('email2', 'email2Pass');