var weburl = document.getElementById('WEBURL').innerHTML

var topheader = document.getElementsByClassName('topheader')[0]

var tch = document.createElement('a')
tch.href = weburl + 'pages/core-harvester.html';
tch.innerHTML = 'TMOR : Core Harvester';

topheader.appendChild(document.createElement('hr'))
topheader.appendChild(document.createElement('br'))

topheader.appendChild(tch)

topheader.appendChild(document.createElement('br'))
topheader.appendChild(document.createElement('br'))
