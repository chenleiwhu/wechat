# wechat

1. Preinstallation
   npm and node.js

2. How to run server?
  (1) npm install                   ----> install dependencies in package.json
  (2) node server.js                ----> start serving

3. Configuration Change
  Saw http://mp.weixin.qq.com
  In development tab, the basic configuration include:
   URL: your service entrypoint in internet. E.g. http://abc.cloudapp.net/chat
   Token: 'your connection identity string'. E.g. \routes\wechat.js var TOKEN = 'jarvis';
