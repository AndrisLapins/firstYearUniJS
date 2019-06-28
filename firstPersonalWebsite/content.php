<?php
	//To keep being logged in
	session_start();
	//For keeping time in comments
	date_default_timezone_set('Europe/Vilnius');
	//connecting to the 'commentsection' database
	include 'includes/dbcom.inc.php';
	//Link to the 'comments' pad
	include 'includes/comments.inc.php';
	//
	include 'includes/dbh.inc.php';
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Main Content</title>
	<link rel="stylesheet" type="text/css" href="content.css">
	<link rel="shortcut icon" type="image/x-icon" href="Poke-Ball-32.png" />
</head>
<body>
<header>
	<div class="container">
		<div class="welcoming">
		<?php
			//Welcoming sentence
			if (isset($_SESSION['u_id'])) {
				echo 'Welcome, ';
				echo $_SESSION['u_uid'];
				echo '!';
			}
		?>
		</div>
		<div class="logout">
		<?php
			//Log-out button
			if (isset($_SESSION['u_id'])) {
                  echo "<form class='logout-form' action='includes/logout.inc.php' method='POST'>
                    <button class='logout-button' type='submit' name='submit'>Log out</button>
                  </form>";
            }
		?>
		</div>
	</div>
</header>

<br>

	<main>
	<div class="video-container">


		<div class="video-post">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/2SM_A6Wmx2I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		<p>Enjoy some sad music while you are here &#9829 </p>

		<h2>The Thought-Box</h2>
		<?php
			//if (isset($_SESSION['user_uid'])) {
				echo "<form method='POST' action='".setComment($connCom)."'>
					<input type='hidden' name='uid' value='Anonymous'>
					<input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
					<textarea name='message' placeholder='Whats on your mind...''></textarea><br>
					<button class='comment-button' type='submit' name='commentSubmit'>Comment</button>
				</form>";
			//}
		//".$_SESSION['id']."
		?>
		</div>
<div class="bottom">
		<div class="comment-section">
			<?php
				getComments($connCom);
			?>
		</div>


	</div>


		
	</main>

	<footer>
		<h4>&copy Copyright of Andre Feuille</h4>
	</footer>
</div>
</body>
</html>