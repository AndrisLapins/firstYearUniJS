<?php

	if (isset($_POST['submit'])) {

		//include_once "test_dbh.inc.php";

		$first = $_POST['first'];
		$last = $_POST['last'];
		$email = $_POST['email'];
		$uid = $_POST['uid'];
		$pwd = $_POST['pwd'];


		if (empty($first) || empty($last) || empty($email) || empty($uid) || empty($pwd)) {
			header("Location: ../test_databases.php?signup=empty");
			exit();
		} else {

			if (!preg_match("/^[a-zA-Z]*$/", $first) || !preg_match("/^[a-zA-Z]*$/", $last)) {
				header("Location: ../test_databases.php?signup=char");
				exit();
			} else {

				if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
					header("Location: ../test_databases.php?signup=email&first=$first&last=$last&uid=$uid");
					exit();
				} else {
					header("Location: ../test_databases.php?signup=success");
					exit();
				}
			}
		} else {
			header("Location: ../test_databases.php");
			exit();
		}
