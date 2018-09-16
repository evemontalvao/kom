<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
$request = file_get_contents('php://input');
$req_dump = print_r( $request, true );

$arr = json_decode($req_dump);
if($arr->event == "post_publish" && $arr->event == true) {
	shell_exec('git clone https://github.com/evemontalvao/kom');
	shell_exec('cp -af tmp/ ./ > request.log');
	shell_exec('rm -rf tmp');

}


?>