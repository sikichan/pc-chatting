<template>
  <div id="room">
    <div class="header">title</div>
    <div class="list">
      <message :isMe="true" :user="m" v-for="(m, i) of users" :key="i"/>
    </div>
    <msg-input @data="sendData" class="input"></msg-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showEmoji: false,
      users: [],
      list: '',
      socket: null
    }
  },
  created() {
    this.getSocket()
  },
  mounted() {
    this.list = document.querySelector('.list')
  },
  components: {
    message: () => import('../components/Message.vue'),
    MsgInput: () => import('../components/MsgInput.vue')
  },
  methods: {
    getSocket() {
      const socket = new WebSocket('ws://localhost:8080')
      socket.addEventListener('open', (event) => {
        socket.send(
          JSON.stringify({type: 'connect', data: {
            nickname: sessionStorage.getItem('chat-user'),
            color: sessionStorage.getItem('chat-user-color')}
          })
        )
      })
      socket.addEventListener('close', () => {
        console.log('socket 连接断开，正在尝试重新建立连接')
        this.getSocket()
      })
      socket.onerror = (event) => {
        console.log('onerror', event)
      }
      socket.addEventListener('message', (event) => {
        if (event.data) {
          let data = JSON.parse(event.data)
          if (data.type === 'size') {
            this.$emit('online-count', data.size)
          } else if (data.type === 'connect') {
            console.log('conn', data)
            const {onlineList} = data
            this.$emit('online-list', onlineList)
            console.log(onlineList)
          } else {
            const {msg, nickname, color} = data
            this.users.push({
              msg, nickname, 
              isMe: nickname === sessionStorage.getItem('chat-user') ? true: false, 
              color
            })
          }
        }
      })
      this.socket = socket
    },
    sendData(data) {
      let msgData = {
        type: 'data',
        msg: data,
        nickname: sessionStorage.getItem('chat-user'),
        color: sessionStorage.getItem('chat-user-color')
      }
      console.log(this.list.scrollHeight)
      this.$nextTick(() => {
        this.list.scrollTop = this.list.scrollHeight
      })
      console.log(this.socket)
      this.socket.send(JSON.stringify(msgData))
    },
  },
}
</script>
<style lang="less" scoped>
@main-color: #34495e;
#room {
  display: flex;
  flex-direction: column;

  .header {
    height: 40px;
    line-height: 40px;
    color: @main-color;
    font-size: 16px;
    text-align: center;
  }
  .list {
    background: #f2f2f2;
    border-radius: 6px;
    flex: 3;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 10px;
    }
  }
  .input {
    flex: 1;
  }
}
</style>