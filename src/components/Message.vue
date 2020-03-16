<template>
  <div id="message" :style="{flexDirection: isMe ? 'row-reverse': 'row',alignItems: !isMe ? 'flex-end': 'flex-start'}">
    <div class="avatar"></div>
    <div class="bubble" v-if="!isMe">
      <div class="after">
        {{msg}}
      </div>
    </div>
    <div class="right-bubble" v-else>
      <div class="before">
        {{msg}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isMe: {type: Boolean, default: false},
    msg: {type: String, required: true}
  }
}
</script>
<style lang="less" scoped>
@r: 6px;
@avatar-r: 44px;
@bub-color: #6ab04c;
#message {
  display: flex;
  height: auto;
  padding: 20px;
  .avatar {
    width: @avatar-r;
    height: @avatar-r;
    border-radius: 50%;
    border: 1px solid grey;
    order: 1;
  }
  .bubble {
    order: 2;
    display: flex;
    margin-left: 12px;
    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-right: @r solid @bub-color;
      border-bottom: @r solid transparent;
      border-top: @r solid transparent;
      border-left: @r solid transparent;
      margin-top: 10px;
    }
    .after {
      content: "";
      color: #fff;
      display: block;
      min-width: 80px;
      max-width: 400px;
      border-radius: 6px;
      background: @bub-color;
      padding: 10px;
    }

  }
  .right-bubble {
    display: flex;
    margin-right: 12px;
    order: 2;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: @r solid @bub-color;
      border-bottom: @r solid transparent;
      border-top: @r solid transparent;
      border-right: @r solid transparent;
      margin-top: 10px;
    }
    .before {
      .bubble.after
    }
  }
}
</style>