use mireia_supermercado;
DROP PROCEDURE IF EXISTS semaforo;
delimiter //
CREATE PROCEDURE IF NOT EXISTS semaforo(IN color VARCHAR(10))
begin
IF color = "rojo" THEN
 SELECT "No puedes pasar";
ELSE
 SELECT "Puedes pasar";
 end if;
end //
delimiter ;
CALL semaforo("rojo");