<?php 
session_start();
if (!isset( $_SESSION['username']) ) {
	echo 'anonym';
}else{
	echo 'username';
}

 ?>