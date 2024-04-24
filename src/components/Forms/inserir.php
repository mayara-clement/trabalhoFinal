<?php
include("BD.php");

$teste = $_POST['protocolo'];


$sql = "INSERT INTO teste(teste) VALUES ('$teste')";

if(mysqli_query($mysqli, $sql)){
    echo "nova gravação realizada!";
}else{
    echo "erro";
}



?>