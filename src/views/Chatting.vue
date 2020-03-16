<template>
  <div id="chatting">
    <header>聊天室</header>
    <main>
      <room class="room"></room>
      <list class="online-list"></list>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {
    room: () => import('../components/Room.vue'),
    list: () => import('../components/OnlineList.vue')
  }
}
</script>
<style lang="less" scoped>
  header {
    width: 100vw;
    height: 56px;
    background: #fff;
    box-shadow: 2px 2px 3px #efefef;
    line-height: 56px;
    font-size: 20px;
    text-align: center;
  }
  main {
    height: 92vh;
    border: 1px solid grey;
    display: flex;
    .room {
      flex: 3;
      background: pink;
    }
    .online-list {
      flex: 1;
      background: deeppink;
    }
  }
  
</style>
