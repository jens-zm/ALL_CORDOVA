<?php
    session_start();
    $_SESSION['username'] = '';
    setcookie ("username","");
    unset($_SESSION['username']);
    session_unset();
    session_destroy();
    header("Location: login.html");
?>
