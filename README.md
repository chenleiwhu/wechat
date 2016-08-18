# wechat

1. Preinstallation<br>
   npm and node.js

2. How to run server?<br>
  (1) npm install                   ----> install dependencies in package.json<br>
  (2) node server.js                ----> start serving

3. Configuration Change<br>
  Saw http://mp.weixin.qq.com<br>
  In development tab, the basic configuration include:<br>
   URL: your service entrypoint in internet. E.g. http://abc.cloudapp.net/chat<br>
   Token: 'your connection identity string'. E.g. \routes\wechat.js var TOKEN = 'jarvis';
