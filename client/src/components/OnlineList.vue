<template>
  <div id="online-list">
    <div class="count">
      <span>在线人数：{{count}}</span>
      <span @click="logout">登出</span>
    </div>
    <div class="items" v-if="list.length">
      <li v-for="(n,i) of list" :key="i">{{n.nickname}}</li>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {type: Number, default: 0},
    list: {type: Array, default: () => ([])}
  },
  methods: {
    logout() {
      sessionStorage.removeItem('chat-user')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
#online-list {
  display: flex;
  flex-direction: column;
  .count {
    height: 40px;
    & span:first-child {
      float: left;
    }
    & span:last-child{
      float: right;
    }
  }
  .items {
    background: #f2f2f2;
    padding: 8px;
    flex: 1;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 10px;
    }
    li {
      border-radius: 4px;
      margin-top: 10px;
      padding: 10px;
      background: #fefefe;
    }
  }
}
</style>