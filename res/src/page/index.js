var weburl = document.getElementById('WEBURL').innerHTML

var cmvs = document.createElement('div')

cmvs.id = 'content'
cmvs.align = 'center'
cmvs.appendChild(document.createElement('br'))

var cmv_header = document.createElement('h1')
cmv_header.innerHTML = 'Comic Music Videos';
cmvs.appendChild(cmv_header)

var tch = document.createElement('a')
tch.href = weburl + 'pages/tmor-core-harvester.html';
tch.innerHTML = 'TMOR : Core Harvester';
cmvs.appendChild(tch)

cmvs.appendChild(document.createElement('br'))
cmvs.appendChild(document.createElement('br'))

document.body.appendChild(cmvs)
document.body.appendChild(document.createElement('br'))