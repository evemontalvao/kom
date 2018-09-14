<?php
if (isset($_POST['password'])) {
	if($_POST['password'] == "kombuchakom") {
		$output = shell_exec('git clone https://github.com/evemontalvao/kom tmp && cp -rf ./ ../');
		echo "<pre>$output</pre>";
	}
}
?>