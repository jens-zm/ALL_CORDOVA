<?php 
//Handler Error
set_error_handler(
    function ($severity, $message, $file, $line) {
        throw new ErrorException($message, $severity, $severity, $file, $line);
    }
);

// Coba ambil data
try {
  $login = $_POST['login'];
  if (!isset($login)) {
	echo "Akses Ditolak";
	}else{
	echo $login.' Diterima';
	}
}
// Kalo error
catch (Exception $e) {
    echo "Ups.. Ada yg gak beres <br>";
    echo "Akses ditolak";
}
restore_error_handler();
?>
