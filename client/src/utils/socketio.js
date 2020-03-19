const io = require('socket.io-client')
const socket = io.connect('http://localhost:8080')

const login = (data) => {
   socket.emit('login', data)
}
const logout = () => {
  // 通知后端把这个用户移除
  socket.emit('logout', {
    userId: sessionStorage.getItem('chat-user'),
    nickname: sessionStorage.getItem('chat-user-name')
  })
  sessionStorage.clear()
}

// 私聊
const getPrivateChat = (data) => {
  socket.emit('private', data)
}

export {
  login, logout, socket, io,
  getPrivateChat
}