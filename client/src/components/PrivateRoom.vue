<template>
  <div id="room">
    <div class="header">{{title}}</div>
    <div class="list">
      <message :isMe="true" :user="m" v-for="(m, i) of users" :key="i"/>
    </div>
    <msg-input @data="sendData" class="input"></msg-input>
  </div>
</template>
<script>
import {groupChat, socket, login} from '../utils/socketio.js'
export default {
  props: {
    title: {type: String, default: 'private'}
  },
  data() {
    return {
      showEmoji: false,
      users: [],
      list: '',
    }
  },
  created() {
  },
  mounted() {
    this.list = document.querySelector('.list')
    login({
      userId: sessionStorage.getItem('chat-user'),
      color: sessionStorage.getItem('chat-user-color'),
      nickname: sessionStorage.getItem('chat-user-name')
    })
    // 接送群聊消息
    socket.on('group-chat-all', (data) => {
      console.log('private;:', data)
      Object.assign(data, {isMe: data.userId === sessionStorage.getItem('chat-user')})
      this.users.push(data)
      // 控制滚动条滚到最新的一条消息
      this.$nextTick(() => {
        this.list.scrollTop = this.list.scrollHeight
      })
    })
},
  components: {
    message: () => import('../components/Message.vue'),
    MsgInput: () => import('../components/MsgInput.vue')
  },
  methods: {
    // 发送群聊消息
    sendData(msg) {
      let msgData = {
        msg,
        nickname: sessionStorage.getItem('chat-user-name'),
        userId: sessionStorage.getItem('chat-user'),
        color: sessionStorage.getItem('chat-user-color')
      }
      groupChat(msgData)
    },
  },
}
</script>
<style lang="less" scoped>
@main-color: #34495e;
#room {
  display: flex;
  flex-direction: column;
  height: 100vh;
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