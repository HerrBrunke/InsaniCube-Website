<?php
require 'serverinfo.php';

if(isset($_GET["token"]) == $access_token){
// INPUT
	if (isset($_GET["user"]) && isset($_GET["score"])){
		$user  = $_GET["user"];
		$score = $_GET["score"];
	
		$query = "INSERT INTO scores (user, score)
				VALUES ('".$user."', '".$score."')";
		$result = mysqli_query($connection, $query);		
	
		if(!$result){
			echo(mysqli_error($connection));
		}
	}
}


// OUTPUT
$query  = "SELECT user, score FROM scores
			ORDER BY score DESC";
$result = mysqli_query($connection, $query);

// var_dump($result);

if (mysqli_num_rows($result) > 0){
	$rows = array();
	
	while($row = mysqli_fetch_assoc($result)){
		$rows[] = $row;
	}
	
	/*
?>
	<table>
<?php
	foreach($rows as $row){
		echo"<tr>";
		echo "<td>" . $row["user"] . "</td>";
		echo "<td>" . $row["score"] . "</td>";
		echo"</tr>";
	}
?>
	</table>
<?php
	*/
	
	$return_array = array(
		"entries" => $rows
	);
	
	echo json_encode($return_array);
	
}

//table output
echo "<style>";
echo "table, th, td {border: 1px solid black;	} ";
echo "</style>";
echo "<table>";

for($i=0; $i < count($rows); $i+=1){
	echo "<tr><td>";
	echo $i+1 . ". </td><td>";
	echo $rows[$i]['user'];
	echo "</td> <td>";
	echo $rows[$i]['score'];
	echo "</td></tr>";
}
echo "</table>";

require 'footer.php';

?>