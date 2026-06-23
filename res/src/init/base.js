var hiddenurl = document.createElement('p')
hiddenurl.innerHTML = './'
hiddenurl.id = 'WEBURL'
document.head.appendChild(hiddenurl)

console.log(hiddenurl.innerHTML)

var viewport = document.createElement('meta')
viewport.name = "viewport"
viewport.content = 'width=device-width, initial-scale=1.0'
document.head.appendChild(viewport)

var charset = document.createElement('meta')
charset.charset = 'UTF-8'
document.head.appendChild(charset)

var topheader = document.createElement('div')
// <a href="https://www.youtube.com/@sphis-sinco/videos">By Maki</a>

topheader.id = 'content'
topheader.className = 'topheader'
topheader.align = 'center'
topheader.appendChild(document.createElement('br'))

var pagetitle = document.createElement('h1')
pagetitle.innerHTML = document.title
topheader.appendChild(pagetitle)

var credit = document.createElement('a')
credit.href = 'https://www.youtube.com/@sphis-sinco/videos'
credit.innerText = 'By Maki'
topheader.appendChild(credit)

topheader.appendChild(document.createElement('br'))
topheader.appendChild(document.createElement('br'))

document.body.appendChild(topheader)
document.body.appendChild(document.createElement('br'))
