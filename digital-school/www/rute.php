<?php
session_start();
if(!isset($_SESSION['username']) && !isset($_COOKIE['username']) ){
  echo "login.html";
}else {
  if (isset($_SESSION['username']) && !isset($_COOKIE['username'])) {
    ruteUser();
  }elseif (!isset($_SESSION['username']) && isset($_COOKIE['username'])) {
    cookieZ();
    ruteUser();
  }elseif (isset($_SESSION['username']) && isset($_COOKIE['username'])) {
    ruteUser();
  }
}

function cookieZ(){
  $_SESSION['username'] = $_COOKIE['username'];
  $_SESSION['namalengkap'] = $_COOKIE['namalengkap'];
  $_SESSION['kelas'] = $_COOKIE['kelas'];
  $_SESSION['password'] = $_COOKIE['password'];
  $_SESSION['akses'] = $_COOKIE['akses'];
}

function ruteUser(){
  if ($_SESSION['akses'] == "Admin") {
    echo "admin/index.html";
  }elseif ($_SESSION['akses'] == "Wali Kelas") {
    echo "guru/index.html";;
  }elseif ($_SESSION['akses'] == "Murid") {
    echo "murid/index.html";;
  }else {
    echo "location: logout.php";
  }
}

 ?>
