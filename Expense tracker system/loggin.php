<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<a href="index.html">Login</a>
<body>
    <h1>Login</h1>
    <form action="submit-login.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Login">
    </form>
    
    <script>
        // Get the URL parameter 'redirect'
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirect');
        
        // If 'redirect' parameter is set, redirect to that URL after login
        if (redirectUrl) {
            // Wait until the page has fully loaded before redirecting
            window.onload = function() {
                window.location.href = redirectUrl;
            }
        }
    </script>
</body>
</html>