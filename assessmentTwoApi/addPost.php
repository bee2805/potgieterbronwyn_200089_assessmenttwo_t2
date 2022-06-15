<?php 

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$message = $data->message;
$username = $data->username;

if($message === ''){
    echo "Message is Empty";
}else{
    $sql = "INSERT INTO posts (id, username, timestamp, message) VALUES (NULL, '$username', CURRENT_TIMESTAMP, '$message');";
    $result = mysqli_query($conn, $sql);
    
    if(!$result){
        echo ("Error:" . mysqli_error($conn));
    } else {
        echo "true";
    }
}
?>