<html>
<head>
<title></title>
</head>
<body>
<form enctype="multipart/form-data" action="http://127.0.0.1:9090/login" method="post">
	username:<input type="text" name="username">
	password:<input type="password" name="password">
	<input type="radio" name="gender" value="1">male
	<input type="radio" name="gender" value="2">female
	<input type="checkbox" name="interest" value="football" >football
	<input type="checkbox" name="interest" value="basketball" >basketball
	<input type="checkbox" name="interest" value="tennis" >tennis
	<input type="hidden" name="token" value="{{.}}" >
	<input type="file" name="uploadfile" >
	<input type="submit" value="login">
</form>
</body>
</html>