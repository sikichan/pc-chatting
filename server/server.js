const Koa = require('koa')
const app = new Koa()
const port = 8080
const WebSocket = require('ws').Server
const server = require('http').createServer(app.callback())
const _ = require('lodash')
const wss = new WebSocket({// 同一个端口监听不同的服务
  server
})
const onlineList = []
wss.on('connection', function (ws) {
  const size = wss.clients.size
  wss.clients.forEach((client) => {
    let data = JSON.stringify({type: 'size', size})
    client.send(data)
    console.log(size)
  })
  ws.on('message', function(data) {
    console.log('message: ', data)
    let _data = JSON.parse(data)
    if (_data.type === 'connect') {
      let obj = _.pick(_data, 'data')
      console.log('obj: ', obj.data)
      if (!_.find(onlineList, (i) => {
        return i.nickname === obj.data.nickname
      })) {
        onlineList.push(obj.data)
      }
      wss.clients.forEach((client) => {
        client.send(JSON.stringify({type: 'connect', onlineList}))
      })
    } else {
      wss.clients.forEach((client) => {
        client.send(JSON.stringify(_data))
      })
    }
    console.log(onlineList)
    
  })
})
app.use(async ctx=> {
  console.log(ctx.url)
  ctx.body = 'hello web'
})
server.listen(port, function() {
  console.log('listening on port:', port)
})
