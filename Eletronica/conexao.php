<?php
$servidor = 'carmine';
$usuario = 'aluno';
$senha =  'etec@147';
$banco = '3dsa_marlon';


        // $servidor2 = 'localhost';
        // $usuario2 = 'root';
        // $senha2 =  '';
        // $banco2 = 'bd_eletronica';


$connect = new mysqli($servidor, $usuario, $senha, $banco);

if($connect->connect_errno){

    echo "Não foi possivel conectar ";
}
else{
    echo "conexao efetuada com Sucesso!";
}

?>
