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