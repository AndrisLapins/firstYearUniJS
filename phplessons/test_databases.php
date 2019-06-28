<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" href="test_style.css">
	</head>
	<body>
			<h2>Signup</h2>
			<form action="includes/test_signup.inc.php" method="POST">
				<?php
					if (isset($_GET['first'])) {
						$first = $_GET['first'];
						echo '<input type="text" name="first" placeholder="Firstname" value="'.$first.'">'
					}
					else {
						echo '<input type="text" name="first" placeholder="Firstname">'
					}
					if (isset($_GET['last'])) {
						$last = $_GET['last'];
						echo '<input type="text" name="last" placeholder="Lastname" value="'.$last.'">'
					}
					else {
						echo '<input type="text" name="last" placeholder="Lastname">'
					}
				?>
				<input type="text" name="email" placeholder="E-mail">
				<?php
				if (isset($_GET['uid'])) {
					$uid = $_GET['uid'];
					echo '<input type="text" name="uid" placeholder="Username" value="'.$uid.'">'
				}
				else {
					echo '<input type="text" name="uid" placeholder="Username">'
				}
				?>
				<input type="password" name="pwd" placeholder="Password">
				<button type="submit" name="submit">Sign Up</button>
			</form>
			<?php
				/*$fullUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

				if (strpos($fullUrl, "signup=empty") == true) {
					echo "<p class='error'>You did not fill in all fields!</p>";
					exit();
				}
				elseif  (strpos($fullUrl, "signup=char") == true) {
					echo "<p class='error'>You used invalid characters!</p>";
					exit();
				}
				elseif  (strpos($fullUrl, "signup=email") == true) {
					echo "<p class='error'>You used an invalid e-mail!</p>";
					exit();
				}
				elseif  (strpos($fullUrl, "signup=success") == true) {
					echo "<p class='error'>You have been signed up!</p>";
					exit();
				}*/

				if (!isset($_GET['signup'])) {
					exit();
				}
				else {
					$signupCheck = $_GET['signup'];

					if ($signupCheck == "empty") {
						echo "<p class='error'>You did not fill in all fields!</p>";
						exit();
					}
					elseif ($signupCheck == "char") {
						echo "<p class='error'>You used invalid characters!</p>";
						exit();
					}
					elseif ($signupCheck == "email") {
						echo "<p class='error'>You used an invalid e-mail!</p>";
						exit();
					}
					elseif ($signupCheck == "success") {
						echo "<p class='error'>You have been signed up!</p>";
						exit();
					}
				}
			?>
	</body>
</html>
