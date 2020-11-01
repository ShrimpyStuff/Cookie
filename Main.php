<?php
// Your code here!
$host="sajidmon.heliohost.us";
$port=3306;
$socket="";
$user="sajidmon_Personal";
$password="Monowar2008";
$dbname="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

?>
