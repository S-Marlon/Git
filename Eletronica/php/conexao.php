<?php
try {
    $pdo = new PDO("mysql:dbname=Marlon;host=localhost","root","");    //code...
} catch (PDOExecption $e) {
    echo "Erro com banco de Dados".$e->getMenssage();
} catch (Execption $e){
    echo "erro generico".$e->getMenssage();
}



?>