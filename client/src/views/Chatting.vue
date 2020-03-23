<template>
  <div id="chatting">
    <!-- <header>聊天室</header> -->
    <main>
      <div class="room">
        <router-view/>
      </div>
      <list class="online-list" :list="onlineList"/>
    </main>
  </div>
</template>
<script>
import {socket, login} from '../utils/socketio.js'
export default {
  data() {
    return {
      onlineList: [],
      privateChat: false

    }
  },
  mounted() {
    socket.on('online', (data) => {
      console.log('online: ', data.online[0])
      this.onlineList = data.online
    }),
    // 每次刷新都要emit login 让后端更新userId对应的socketId
    login()
  },
  methods: {
    getOnlineList(list) {
      this.onlineList = list
    }
  },
  components: {
    list: () => import('../components/OnlineList.vue'),
  },
  //   beforeRouteUpdate(to, from , next) {
  //   console.log('dsffs')
  //   next()
  // }
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
