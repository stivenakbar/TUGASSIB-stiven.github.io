<?php
include 'koneksi.php';
$id=$_POST['id'];
$nama=$_POST['nama'];
$jumlah=$_POST['jumlah'];
$harga=$_POST['harga'];
mysqli_query($koneksi, "insert into tbl_daftar_produk VALUE('$id','$nama','$jumlah','$harga')");
header("location:listproduct.php");
?>