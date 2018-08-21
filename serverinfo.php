<?php

$access_token = "a86ugar386a3ghaf38jqh8o3fq8";

$host_name = 'db750191748.db.1and1.com';
$database = 'db750191748';
$user_name = 'dbo750191748';
$password = 'Insanicube!1';

$connection  = new mysqli($host_name,
						$user_name,
						$password,
						$database);
						
// if(!$connection){
	// die("DB connection failed! " . mysqli_connect_error());
// }
// else {
	// echo("Connection successful!");
// }
?>