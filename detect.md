---
layout: none
---
<html>
<head>
<title>Detect navigator platform</title>
<script>
function setMessage() {
	document.getElementById("message").innerHTML = 'Navigator platform is: <strong>' + navigator.platform + '</strong><br/>User Agent is: <strong>' + navigator.userAgent + '</strong>';
}
</script>
</head>
<body onload="setMessage()">
<div id="message"></div>
</body>
</html>
