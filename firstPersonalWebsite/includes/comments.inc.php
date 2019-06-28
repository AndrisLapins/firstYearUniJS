<?php

function setComment($connCom) {
	if (isset($_POST['commentSubmit'])) {
		$uid = $_POST['uid'];
		$date = $_POST['date'];
		$message = $_POST['message'];

		$sqlCom = "INSERT INTO comments (uid, date, message) VALUES ('$uid', '$date', '$message');";
		//$result = mysqli_query($connCom, $sqlCom);
		$result = $connCom->query($sqlCom);
		//It just refreshes the the page to fix the "resend" :D *bug is fixed*
		header("Location: content.php");
	}
}

function getComments($connCom) {
	$sqlCom = "SELECT * FROM comments;";
	$result = mysqli_query($connCom, $sqlCom);
	while ($row = $result->fetch_assoc()) {
		echo "<div class='comment-box'><p>";
			echo $row['uid']."<br>";
			echo $row['date']."<br>";
			echo nl2br($row['message']);
		echo "</p>
			<form class='delete-form' method='POST' action='".deleteComments($connCom)."'>
				<input type='hidden' name='cid' value='".$row['cid']."'>
				<button type='submit' name='commentDelete'>Delete</button>
			</form>
			<form class='edit-form' method='POST' action='editcomment.php'>
				<input type='hidden' name='cid' value='".$row['cid']."'>
				<input type='hidden' name='uid' value='".$row['uid']."'>
				<input type='hidden' name='date' value='".$row['date']."'>
				<input type='hidden' name='message' value='".$row['message']."'>
				<button>Edit</button>
			</form>
		</div>";
	}
}

function editComments($connCom) {
	if (isset($_POST['commentSubmit'])) {
		$cid = $_POST['cid'];
		$uid = $_POST['uid'];
		$date = $_POST['date'];
		$message = $_POST['message'];

		$sqlCom = "UPDATE comments SET message='$message' WHERE cid='$cid';";
		//$result = mysqli_query($connCom, $sqlCom);
		$result = $connCom->query($sqlCom);
		header("Location: content.php");
	}
}

function deleteComments($connCom) {
	if (isset($_POST['commentDelete'])) {
		$cid = $_POST['cid'];

		$sqlCom = "DELETE FROM comments WHERE cid='$cid';";
		//$result = mysqli_query($connCom, $sqlCom);
		$result = $connCom->query($sqlCom);
		header("Location: content.php");
	}
}


