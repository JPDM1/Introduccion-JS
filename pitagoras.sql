-- Calcula la hipotenusa del triángulo rectángulo
USE test;
-- tabla
DROP TABLE IF EXISTS triangulo;
CREATE TABLE triangulo(a FLOAT NOT NULL , b FLOAT NOT NULL,c FLOAT );
-- disparador
DROP TRIGGER IF EXISTS tp;
DELIMITER //
CREATE TRIGGER tp BEFORE INSERT ON triangulo FOR EACH ROW
BEGIN
DECLARE h FLOAT;
SET h= SQRT(POW(NEW.a,2)+POW(NEW.b,2));
SET NEW.c=ROUND(h,2);
END
// DELIMITER ;
-- Insertar
INSERT INTO triangulo VALUES 
(2.2,3,DEFAULT),(2.7,7.8,DEFAULT);
-- Consultar
SELECT * FROM triangulo;
