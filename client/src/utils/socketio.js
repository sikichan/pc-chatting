const io = require('socket.io-client')
const socket = io.connect('http://localhost:8080')

socket.disconnect = function() {
  socket.emit('disconnect')
}

const login = () => {
  const data = {
    userId: sessionStorage.getItem('chat-user'),
    color: sessionStorage.getItem('chat-user-color'),
    nickname: sessionStorage.getItem('chat-user-name')
  }
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
const privateChat = (data) => {
  socket.emit('private-chat', data)
}

const groupChat = (data) => {
  socket.emit('group-chat', data)
}
export {
  login, logout, socket, io,
  privateChat,groupChat
}