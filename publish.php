<?php
if (isset($_POST['password'])) {
	if($_POST['password'] == "kombuchakom") {
		$output = shell_exec('mkdir tmp && git clone https://github.com/evemontalvao/kom tmp && cp -af tmp/ ./ && rm -rf tmp');
		echo "<pre>$output</pre>";
	}
}
?>