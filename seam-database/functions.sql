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

CREATE PROCEDURE insertAppointment (
  pid BIGINT UNSIGNED,
  t VARCHAR(50),
  d VARCHAR(255),
  l VARCHAR(255),
  start TIMESTAMP,
  end TIMESTAMP,
  cid BIGINT UNSIGNED
)
BEGIN
  INSERT INTO appointment (
    providerid,
    title,
    description,
    location,
    startTime,
    endTime,
    customerid
  ) VALUES (
    pid,
    t,
    d,
    l,
    start,
    end,
    cid
  );
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

DELIMITER //

CREATE TRIGGER create_provider_trigger 
AFTER INSERT ON user
FOR EACH ROW
BEGIN
  INSERT INTO provider (userid, first_name, last_name, biography, pictureid)
  VALUES (NEW.id, '', '', '', 0);
END //

DELIMITER ;