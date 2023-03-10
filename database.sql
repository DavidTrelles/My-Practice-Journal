
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "session" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL DEFAULT CURRENT_DATE,
"title" VARCHAR (100) NOT NULL,
"description" VARCHAR (200),
"link" VARCHAR (1000),
"minutes" INT NOT NULL,
"notes" VARCHAR (5000),
"user_id" INT REFERENCES "user"

);