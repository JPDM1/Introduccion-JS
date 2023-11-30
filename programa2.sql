DROP DATABASE IF EXISTS instituto;
CREATE DATABASE instituto;
USE instituto;
DROP PROCEDURE IF EXISTS validar_telf; 
DELIMITER //
CREATE PROCEDURE validar_telf (IN num VARCHAR(20))
BEGIN
DECLARE prefijo  CHAR(3) DEFAULT LEFT(num,3);
CASE prefijo
     WHEN "+34" THEN
     SELECT "Número con prefijo correcto";
     ELSE
     SELECT "Número con prefijo incorrecto";
END CASE;
END //
DELIMITER ;
CALL validar_telf("+34640213127");