DROP DATABASE IF EXISTS wellbell_dev;
CREATE DATABASE wellbell_dev;

\c wellbell_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    ppoints INTEGER,
    npoints INTEGER,
    scpoints INTEGER,
    session INTEGER,
    user_id INTEGER NOT NULL,
    physical_preferences BOOLEAN,
    nutrition_preferences BOOLEAN,
    selfcare_preferences BOOLEAN

    -- admin BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS bells;

CREATE TABLE bells (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    notification TEXT NOT NULL,
    funfact TEXT NOT NULL,
);

DROP TABLE IF EXISTS rewards;

CREATE TABLE rewards ( 
    id SERIAL PRIMARY KEY, 
    type TEXT,
    content TEXT
);

DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions ( 
    id SERIAL PRIMARY KEY, 
    type TEXT,
    content TEXT
);


DROP TABLE IF EXISTS users_bells;

CREATE TABLE users_bells (
    id SERIAL PRIMARY KEY, 
    bell_id  INTEGER NOT NULL REFERENCES bells (id),
    user_id INTEGER NOT NULL REFERENCES users (id)
    ON DELETE CASCADE,
    created TIMESTAMP DEFAULT NOW(),
    complete BOOLEAN NOT NULL
   

);