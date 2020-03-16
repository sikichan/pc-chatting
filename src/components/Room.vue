<template>
  <div id="room">
    <div class="header">title</div>
    <div class="list">

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
    height:8%;
    background: deepskyblue;
  }
  .list {
    height: 65%;
    background: green;
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