CREATE DATABASE notesdb;

-- \l

\c notesdb

CREATE TABLE notes (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- \dt

INSERT INTO notes (name, title, content) VALUES ('Naglis', 'Shop list', '1. Milk, 2. Flour, 3. Ice-cream');

-- SELECT * FROM notes;