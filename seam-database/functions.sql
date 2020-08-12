DELIMITER //

CREATE PROCEDURE insertUser (
  IN uname VARCHAR(25),
  IN uemail VARCHAR(320),
  IN upassword CHAR(60)
)
BEGIN
  INSERT INTO user (username, email, password) VALUES (uname, uemail, upassword);
  SELECT LAST_INSERT_ID() AS id;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE getAppointmentsByUserId (
  IN uid BIGINT UNSIGNED
)
BEGIN
  SELECT * FROM appointment WHERE providerid = (SELECT id FROM provider WHERE userid = uid);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getCustomersByUserId (
  IN uid BIGINT UNSIGNED
)
BEGIN
  SELECT * FROM customer WHERE id IN (SELECT customerid FROM appointment WHERE providerid = (SELECT id FROM provider WHERE userid = uid));
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getMonthAppointmentsByUserId (
  IN uid BIGINT UNSIGNED,
  IN year INT UNSIGNED,
  IN month INT UNSIGNED
)
BEGIN
  SELECT * FROM appointment WHERE providerid = (SELECT id FROM provider WHERE userid = uid) AND YEAR(startTime) = year AND MONTH(startTime) = month;
END //

DELIMITER ;