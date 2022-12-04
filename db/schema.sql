DROP DATABASE IF EXISTS wellbell_dev;
CREATE DATABASE wellbell_dev;

\c wellbell_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    physicalpoints INTEGER NOT NULL,
    nutritionalpoints INTEGER NOT NULL,
    selfcarepoints INTEGER NOT NULL,
    physicalpreferences BOOLEAN DEFAULT false,
    nutritionalpreferences BOOLEAN DEFAULT false,
    mentalpreferences BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS bells;

CREATE TABLE bells (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    message TEXT,
    funfact TEXT
    -- user_id TEXT FOREIGN KEY REFERENCES users(user_id)
);

DROP TABLE IF EXISTS rewards;

CREATE TABLE rewards (
    id SERIAL PRIMARY KEY,
    type TEXT,
    content TEXT,
    code TEXT
    -- user_id TEXT FOREIGN KEY REFERENCES users(user_id)
);

DROP TABLE IF EXISTS users_bells;

CREATE TABLE users_bells (
    bell_id INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    created TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS users_rewards;

CREATE TABLE users_rewards (
    reward_id INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    created TIMESTAMP DEFAULT NOW()
);