<?php
$hostname = "localhost";
$nomeBD = "enzo";
$usuario = "root";
$senha = "";

$mysqli = new mysqli($hostname, $usuario, $senha, $nomeBD);
if($mysqli -> connect_errno){
    echo "erro ao acessar: (" . $mysqli -> connect_errno . ") " . $mysqli->connect_error;
}


?>