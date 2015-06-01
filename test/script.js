require('../global');

html = GET('example.com')
html.to('example.html')
echo('Saved file to "example.html"')

ip = IP()
echo('Your IP is: ' + ip)