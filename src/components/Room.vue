<template>
  <div id="room">
    <div class="header">title</div>
    <div class="list">
      <slot></slot>
    </div>
    <div class="input"></div>
    <div class="handle"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#room {
  display: flex;
  flex-direction: column;
  .header {
    height:60px;
    line-height: 60px;
    background: #34495e;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
  .list {
    height: 65%;
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
  .input {
    height: 20%;
    background: yellow;
  }
  .handle {
    height: 7%;
    background: violet;
  }
}
</style>