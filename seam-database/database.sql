DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id SERIAL,
  username VARCHAR(25) NOT NULL UNIQUE,
  email VARCHAR(320) NOT NULL UNIQUE,
  password CHAR(60) NOT NULL,
  registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS contenttype;
CREATE TABLE contenttype (
  id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  type VARCHAR(25),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS content;
CREATE TABLE content (
  id SERIAL,
  ownerid BIGINT UNSIGNED NOT NULL,
  filename VARCHAR(255) NOT NULL,
  extension VARCHAR(10) NOT NULL,
  contenttypeid TINYINT UNSIGNED NOT NULL,
  upload_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (ownerid) REFERENCES user(id),
  FOREIGN KEY (contenttypeid) REFERENCES contenttype(id)
);

DROP TABLE IF EXISTS provider;
CREATE TABLE provider (
  id SERIAL,
  userid BIGINT UNSIGNED NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  biography VARCHAR(255),
  pictureid BIGINT UNSIGNED,
  PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES user(id)
);

DROP TABLE IF EXISTS customer;
CREATE TABLE customer (
  id SERIAL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(320) NOT NULL UNIQUE,
  phone_no VARCHAR(15) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS appointment;
CREATE TABLE appointment (
  id SERIAL,
  providerid BIGINT UNSIGNED NOT NULL,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  startTime TIMESTAMP NOT NULL,
  endTime TIMESTAMP NOT NULL,
  customerid BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (providerid) REFERENCES provider(id)
);

DROP TABLE IF EXISTS question;
CREATE TABLE question(
  appointmentid BIGINT UNSIGNED NOT NULL,
  question VARCHAR(255) NOT NULL,
  FOREIGN KEY (appointmentid) REFERENCES appointment(id)
);