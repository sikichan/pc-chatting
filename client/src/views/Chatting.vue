<template>
  <div id="chatting">
    <!-- <header>聊天室</header> -->
    <main>
      <room class="room" @online-count="getOnlineCount" @online-list="getOnlineList"/>
        
      <list class="online-list" :count="onlineCount" :list="onlineList"/>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onlineCount: 0,
      onlineList: []
    }
  },
  mounted() {
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
  beforeRouteLeave (to, from, next) {
    let flag = window.confirm('离开当前页面，聊天记录就没了哦')
    if (!flag) return next({path: '/chatting'})
    next()
  },
}
</script>
<style lang="less" scoped>
#chatting {
  height: 100vh;
  // border: 1px solid orange;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    height: 100%;
    .room {
      flex: 3;
    }
    .online-list {
      flex: 1;
    }
  }
}
  
  
</style>
