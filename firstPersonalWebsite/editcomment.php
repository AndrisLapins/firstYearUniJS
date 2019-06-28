<?php 
	date_default_timezone_set('Europe/Vilnius');
	include 'includes/dbcom.inc.php';
	include 'includes/comments.inc.php';

?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Comment Editing Section</title>
	<link rel="stylesheet" type="text/css" href="content.css">
	<link rel="shortcut icon" type="image/x-icon" href="Poke-Ball-32.png" />
</head>

<body>


<?php
$cid = $_POST['cid'];
$uid = $_POST['uid'];
$date = $_POST['date'];
$message = $_POST['message'];

echo "<form method='POST' action='".editComments($connCom)."'>
	<input type='hidden' name='cid' value='".$cid."'>
	<input type='hidden' name='uid' value='".$uid."'>
	<input type='hidden' name='date' value='".$date."'>
	<textarea name='message' placeholder='Whats on your mind...'>".$message."</textarea><br>
	<button class='comment-button' type='submit' name='commentSubmit'>Edit</button>
</form>";
?>

</body>

</html>