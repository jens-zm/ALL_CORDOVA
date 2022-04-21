<?php
//Handler Error
set_error_handler(
    function ($severity, $message, $file, $line) {
        throw new ErrorException($message, $severity, $severity, $file, $line);
    }
);

// Coba ambil data
try {
  $DATA_URL = 'https://script.google.com/macros/s/AKfycbxucv-gr2XuZw08Qt1oEVHr7CaiiFCUkLtcBGBfwzrw8t11401b/exec?data=users1';
  $read =  file_get_contents($DATA_URL);
  $response= json_decode($read, true);
  $users=$response['hasil'];
}
// Kalo error
catch (Exception $e) {
    echo "Ups.. Ada yg gak beres <br>";
    echo $e->getMessage();
}
restore_error_handler();
?>