<?php
    session_start();
    
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        displayHomePage();
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
    }
?>

<?php
function displayHomePage()
{
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include 'header/header.php'; ?>
    <?php include 'products/index.php'; ?>
    <?php /*include 'footer/footer.php';*/ ?>
</body>
</html>

<?php
}
?>