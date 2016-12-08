pome-daemon
========

pome-daemon is a daemon service for [pome](https://github.com/NetEase/pome) to deploy and run
in distributed environment better.  

##Installation
```
npm install -g pome-daemon
```
##Usage
###start pome clusters

- deploy codes in servers 
- config servers.json to the right host instead of '127.0.0.1' etc  
- put daemon.json to the config dir  
daemon.json example
```
{
		"id": "dh37fgj492je",
		"key": "agarxhqb98rpajloaxn34ga8xrunpagkjwlaw3ruxnpaagl29w4rxn",
		"algorithm": "sha256",
		"user": "pome"
}
```
note: pome-daemon use [hawk](https://github.com/hueniverse/hawk/) to provide safety between servers
you can modify daemon.json to your own  

- cd to /game-server path  
- in master server, run  
```
pome-daemon
```
- in other server, run
```
pome-daemon --mode=server
```
note: you can deploy daemon with nohup  
```
nohup pome-daemon --mode=server
```

- in master server, pome-daemon client, run
```
start all
```

- pome clusters are started

###daemon rpc logger collector
pome-daemon provides pome rpc-logs collector to sync to mongodb and can be analysed through [pome-admin-web](https://github.com/NetEase/pome-admin-web)
- put mongo.json into config dir  
mongo.json example
```
{
		"host": "localhost",
		"port": 27017,
		"username": "pome",
		"password": "pome",
		"database": "test",
		"collection": "cpome"
}
```

- enable pome-daemon rpc logger collector
use --pattern param to set rpc-log files start patterns  
```
pome-daemon --mode=server --log --pattern=rpc-log
```

note: rpc-logs collector is just for debug, in production env it is not suggested to enable rpc-logs  

##More Usage
in pome-daemon client, type help for more help information, and enjoy it
![pome-daemon](http://ww2.sinaimg.cn/large/b7bc844fgw1e7u4kzcr2jj20kx0c340d.jpg)

## License

(The MIT License)

Copyright (c) 2012-2013 NetEase, Inc. and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
