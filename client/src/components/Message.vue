<template>
  <div id="message" :style="{flexDirection: user.isMe ? 'row-reverse': 'row',alignItems: !user.isMe ? 'flex-end': 'flex-start'}">
    <div class="avatar" :style="{background: user.color}">{{user.nickname[0]}}</div>
    <div class="bubble" v-if="!user.isMe">
      <div class="after">
        {{user.msg}}
      </div>
    </div>
    <div class="right-bubble" v-else>
      <div class="before">
        {{user.msg}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // isMe: {type: Boolean, default: false},
    user: {type: Object, default: () => ({isMe: false, msg: 'xx', nickname: 'S', color: 'pink'})}
  }
}
</script>
<style lang="less" scoped>
@r: 6px;
@avatar-r: 44px;
@bub-color: #fff;
@main-color: #34495e;
#message {
  display: flex;
  height: auto;
  padding: 20px;
  .avatar {
    width: @avatar-r;
    height: @avatar-r;
    border-radius: 50%;
    border: 1px solid @main-color;
    order: 1;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: @main-color;
      display: block;
      min-width: 50px;
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