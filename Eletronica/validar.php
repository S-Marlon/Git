<?php

$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

if(empty($dados['usuarioas'])){
    $retorna = ['erro' => true,'msg' => "Errou"];
}else if (empty($dados['senha'])){
    $retorna = ['erro' => true,'msg' => "Errou2"];
}else{
    $retorna = ['erro' => false,'msg' => "Aceltoy"];
}

echo json_encode($retorna);

?>