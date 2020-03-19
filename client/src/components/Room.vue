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
    }
  },
  created() {
  },
  mounted() {
    this.list = document.querySelector('.list')
    import('../utils/socketio.js').then(({login}) => {
      login({
        userId: sessionStorage.getItem('chat-user'),
        color: sessionStorage.getItem('chat-user-color'),
        nickname: sessionStorage.getItem('chat-user-name')
      })
    })
  },
  components: {
    message: () => import('../components/Message.vue'),
    MsgInput: () => import('../components/MsgInput.vue')
  },
  methods: {
    sendData(data) {
      let msgData = {
        msg: data,
        nickname: sessionStorage.getItem('chat-user'),
        color: sessionStorage.getItem('chat-user-color')
      }
      this.$nextTick(() => {
        this.list.scrollTop = this.list.scrollHeight
      })
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