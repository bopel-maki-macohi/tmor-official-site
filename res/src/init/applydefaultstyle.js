var weburl = document.getElementById('WEBURL').innerHTML

var stylesheet = document.createElement('link')
stylesheet.rel = "stylesheet"
stylesheet.href = weburl + "res/style/default.css"
document.head.appendChild(stylesheet)
