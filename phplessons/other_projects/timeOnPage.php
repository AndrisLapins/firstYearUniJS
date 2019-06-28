<!DOCTYPE html>
<html>
<head>
	<title>Time</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>

<?php
	$dayofweek = date("w");

	switch ($dayofweek) {
		case 1:
			echo "it is monday!";
			break;
		
		case 2:
			echo "<p>it is tuesday!</p>";
			break;
	}

	$timeYear = date("Y");
	$timeDay = date("j");
	$timeMonth = date("m");
	echo "<p>$timeYear _ $timeMonth _ $timeDay</p>";

?>

</body>
</html>