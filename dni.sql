CREATE DATABASE IF NOT EXISTS test;
use test;
CREATE TABLE  IF NOT EXISTS letras(id INT NOT NULL AUTO_INCREMENT, letra CHAR(1), PRIMARY KEY(id));
INSERT INTO letras 
VALUES 
(NULL,'T'), (NULL,'R'), (NULL,'W'), (NULL,'A'), (NULL,'G'), (NULL,'M'), (NULL,'Y'), (NULL,'F'), (NULL,'P'), (NULL,'D'),  (NULL,'X'), (NULL,'B'), (NULL,'N'), (NULL,'J'), (NULL,'Z'), 
(NULL,'S'), (NULL,'Q'), (NULL,'V'), (NULL,'H'), (NULL,'L'), (NULL,'C'), (NULL,'K'), (NULL,'E');
DROP PROCEDURE IF EXISTS letra_dni;
DELIMITER //
CREATE PROCEDURE letra_dni(IN dni VARCHAR(9))
BEGIN
     DECLARE dni_num INT DEFAULT LEFT(dni,8);
     DECLARE dni_letra CHAR(1) DEFAULT RIGHT(dni,1); 
     DECLARE n_letra INT;
     SET n_letra = MOD(dni_num,23);
     -- set n_letra = (select letra from letras where id=n_letra+1);
     IF dni_letra = (select letra from letras where id=n_letra+1) THEN
        SELECT "Es correcto";
        ELSE
        SELECT "Es incorrecto";
	END IF;
END //
DELIMITER ;
call letra_dni("23878347E");