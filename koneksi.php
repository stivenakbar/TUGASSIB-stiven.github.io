<?php
$koneksi=mysqli_connect("localhost","root","","stupen");
if(mysqli_connect_errno()){
    echo"koneksi database gagal :". mysqli_connect_error();
}
?>