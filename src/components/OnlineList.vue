<template>
  <div id="online-list">
    <div class="count">在线人数：8</div>
    <div class="items"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#online-list {
  display: flex;
  flex-direction: column;
  .count {
    height: 8%;
    background: yellow;
  }
  .items {
    height: 92%;
    background: grey;
  }
}
</style>