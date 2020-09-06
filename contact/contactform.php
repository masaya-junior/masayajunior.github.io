<?php

if (isset($_POST['submit'])) {
    $subject =$_POST['subject'];
    $contactFirstName =$_POST['contactFirstName'];
    $contactLastName =$_POST['contactLastName'];
    $mailTo =$_POST['mail'];
    $message =$_POST['message'];

    $mailTo = "masayajunior@outlook.com";
    $headers = "From: " .$mail;
    $txt = "You have received an e-mail from " .$contactLastName. ".\n\n" .$message;
    mail ($mailTo, $subject, $message, $headers );
    header ("Location: index.php?mailsend");
}

?>
<!-- 
.$contactLastName. -->