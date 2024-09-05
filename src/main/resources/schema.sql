--create database dep12_takas;

CREATE TABLE "user"(
    email VARCHAR(300) PRIMARY KEY ,
    name VARCHAR(300) NOT NULL ,
    contact VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE ad(
    id SERIAL  PRIMARY KEY ,
    title VARCHAR(200) NOT NULL ,
    description VARCHAR(2000) NOT NULL ,
    posted_date DATE not null,
    user_email VARCHAR(300) NOT NULL  CONSTRAINT fk_user REFERENCES  "user" (email)
);

CREATE TABLE image(
    image_id SERIAL PRIMARY KEY ,
    ad_id INT NOT NULL CONSTRAINT fk_ad REFERENCES ad(id),
    url VARCHAR(3000) NOT NULL
);