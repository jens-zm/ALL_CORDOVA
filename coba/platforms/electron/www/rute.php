<?php
session_start();
if(!isset($_SESSION['username']) && !isset($_COOKIE['username']) ){
  header("location: login.html");
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
    header("location: admin/");
  }elseif ($_SESSION['akses'] == "Wali Kelas") {
    header("location: guru/");
  }elseif ($_SESSION['akses'] == "Murid") {
    header("location: murid/");
  }else {
    header("location: logout.php");
  }
}

 ?>
