<?php

$connCom = mysqli_connect('localhost', 'root', '', 'commentsection');

if (!$connCom) {
	die("Connection failed: ".mysqli_connect_error());

}