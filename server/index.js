const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const onlineMap = new Map()

io.on('connection', (socket) => {
  
  socket.on('login', (data) => {
    onlineMap.set(data.userId, {socketId: socket.id, nickname: data.nickname})
    // 广播在线列表
    io.emit('online', {online: [...onlineMap]})
    console.log('online: ', onlineMap)
  })
  
  // logout
  socket.on('logout', (data) => {
    onlineMap.delete(data.userId)
    console.log('online: ', onlineMap)
  })
  // 群聊消息处理
  socket.on('group-chat', (data) => {
    console.log('groupchat: ', data)
    console.log('rooms: == ', io.sockets.adapter.rooms)

    io.emit('group-chat-all', data)
  })

  // socket.on('private', (data) => {
  //   console.log('创建私聊', data)
  //   const {atSocketId} = data
  //   console.log(atSocketId)
  //   socket.join(atSocketId)
  //   console.log('rooms: == ', io.sockets.adapter.rooms)
  //   io.to(atSocketId).emit('chatting', true)
  // })

})

server.listen(8080)