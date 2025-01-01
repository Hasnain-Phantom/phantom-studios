<?php
// Connection
$con = mysqli_connect("localhost", "root", "");

// Create Database Query
$db = "CREATE DATABASE IF NOT EXISTS contact_us";
// Run Database Creating Query
mysqli_query($con, $db);

// Connect With Database
$con = mysqli_connect("localhost", "root", "", "contact_us");

// Table query
$table = "CREATE TABLE IF NOT EXISTS cont_us (
    sno int(5) auto_increment primary key,
    names varchar(20),
    email varchar(20),
    company varchar(20),
    dyp varchar(30)
)";
mysqli_query($con, $table);

$name = $_POST['name'];
$email = $_POST['email'];
$company_name = $_POST['company_name'];
$tell_us = $_POST['tell_us'];

$insert = "INSERT INTO cont_us (names, email, company, dyp) 
           VALUES ('$name', '$email', '$company_name', '$tell_us')";
mysqli_query($con, $insert);

// echo "Thanks for .....";
header("Location: contactus.html"); // Replace with your desired URL
exit();
?>