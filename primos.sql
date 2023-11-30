-- Determina si el número es primo
USE test;
DROP TABLE IF EXISTS numeros;
CREATE TABLE numeros(numero INT NOT NULL);
-- Función
DROP PROCEDURE IF EXISTS es_primo;
DELIMITER //
CREATE PROCEDURE es_primo(IN n INT,OUT sentencia BOOLEAN)
BEGIN
     DECLARE i INT DEFAULT 2;  
     SET sentencia = TRUE;
     IF n > 3 THEN
	    WHILE i < n DO
			 IF MOD(n,i)=0 THEN
				SET sentencia= FALSE;
			 END IF;
             SET i = i +1;
	   END WHILE;
	 END IF;
END 
// DELIMITER ;
-- Insertando con while
DELIMITER //
DROP PROCEDURE IF EXISTS primos;
CREATE PROCEDURE primos(IN numero INT)
BEGIN
DECLARE fila INT DEFAULT 1;
WHILE fila <= numero DO
     CALL es_primo(fila,@sentencia); 
     IF (SELECT @sentencia) = 1 THEN
		 INSERT INTO numeros VALUES (fila);
	 END IF;
	 SET fila = fila +1 ;
END WHILE;
END
// DELIMITER ;
CALL primos(101);
SELECT * FROM numeros;
-- CALL es_primo(10,@sentencia);
-- SELECT @sentencia;
