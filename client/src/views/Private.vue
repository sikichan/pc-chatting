<template>
  <div id="private">
    <main>
      <room class="room" @online-count="getOnlineCount" :title="title"/>
      <list class="online-list" :list="onlineList"/>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'private'
    }
  },
  components: {
    room: () => import('../components/Room.vue'),
    list: () => import('../components/OnlineList.vue')
  },
}
</script>
<style lang="less" scoped>
#private {
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