<template>
  <div id="chatting">
    <!-- <header>聊天室</header> -->
    <main>
      <room class="room" @online-count="getOnlineCount"/>
      <list class="online-list" :list="onlineList"/>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onlineList: [],
      privateChat: false

    }
  },
  mounted() {
    import('../utils/socketio.js').then(({socket}) => {
      socket.on('online', (data) => {
        console.log('online: ', data.online[0])
        this.onlineList = data.online
      })
    })
  },
  methods: {
    getOnlineCount(count) {
      this.onlineCount = count
    },
    getOnlineList(list) {
      this.onlineList = list
    }
  },
  components: {
    room: () => import('../components/Room.vue'),
    list: () => import('../components/OnlineList.vue'),
  },
}
</script>
<style lang="less" scoped>
#chatting {
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    height: 100%;
    .room {
      flex: 7;
    }
    .online-list {
      flex: 3;
    }
  }
}
  
  
</style>
