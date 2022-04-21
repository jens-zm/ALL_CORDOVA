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
  echo $users;



// menangkap data yang dikirim dari form login
$username = $_POST['username'];
$password = $_POST['password'];
$remember = $_POST['remember'];

// cek apakah username dan password di temukan pada database
// foreach($users as $user) {
//     if ($user["USERNAME"] == $username) {
//         if ($user["PASSWORD"] !== $password) {
//             echo "Password Salah";
//         } else {
//           //CEK REMEMBER ME
//           if(!empty($_POST['remember'])) {
//           			//buat cookie
//           			setcookie ("username",$user['USERNAME'],time()+ (3600 * 365 * 24 * 60 * 60));
//           			setcookie ("password",$user['PASSWORD'],time()+ (3600 * 365 * 24 * 60 * 60));
//           			setcookie ("kelas",$user['KELAS'],time()+ (3600 * 365 * 24 * 60 * 60));
//           			setcookie ("namalengkap",$user['NAMA_LENGKAP'],time()+ (3600 * 365 * 24 * 60 * 60));
//           			setcookie ("akses",$user['AKSES'],time()+ (3600 * 365 * 24 * 60 * 60));
//           		} else {
//           			if(isset($_COOKIE["username"])) {
//           			 setcookie ("username","");
//           		   }
//           		 } //TUTUP CEK SESI
//             session_start();
//         		$_SESSION['username'] = $user['USERNAME'];
//         		$_SESSION['password'] = $user['PASSWORD'];
//         		$_SESSION['kelas'] = $user['KELAS'];
//         		$_SESSION['namalengkap'] = $user['NAMA_LENGKAP'];
//             $_SESSION['jeniskelamin'] = $user['JENIS_KELAMIN'];
//             $_SESSION['tempatlahir'] = $user['TEMPAT_LAHIR'];
//             $_SESSION['tgllahir'] = $user['TANGGAL_LAHIR'];
//             $_SESSION['alamat'] = $user['ALAMAT'];
//             $_SESSION['akses'] = $user['AKSES'];
//             $_SESSION['email'] = $user['EMAIL'];
//             // Alihkan ke index untuk cek
//             echo "Login";

//         }
//     }
//   }


}
// Kalo error
catch (Exception $e) {
    echo "Ups.. Ada yg gak beres, periksa kembali koneksi internet";
}
restore_error_handler();







 ?>