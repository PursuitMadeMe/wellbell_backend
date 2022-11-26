DROP DATABASE IF EXISTS wellbell_dev;
CREATE DATABASE wellbell_dev;

\c wellbell_dev;

CREATE TABLE bells (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    notification TEXT NOT NULL,
    funfact TEXT NOT NULL
);