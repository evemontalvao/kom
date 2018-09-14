<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
$request = file_get_contents('php://input');
$req_dump = print_r( $request, true );

$arr = json_decode($req_dump);
if($arr->event == "post_publish" && $arr->event == true) {
	$output = shell_exec('mkdir tmp && git clone https://github.com/evemontalvao/kom tmp && cp -af tmp/ ./ && rm -rf tmp');
	$fp = file_put_contents( 'request.log', $output );
}


?>