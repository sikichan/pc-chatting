<template>
  <div id="room">
    <div class="header">title</div>
    <div class="list">
      <slot></slot>
    </div>
    <msg-input class="input"></msg-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showEmoji: false
    }
  },
  components: {
    MsgInput: () => import('../components/MsgInput.vue')
  },
  methods: {

  },
}
</script>
<style lang="less" scoped>
@import "//at.alicdn.com/t/font_1694822_ekcy0ukldu9.css";
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
}
</style>