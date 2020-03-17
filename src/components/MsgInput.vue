<template>
  <div id="msg-input">
    <div>
      <textarea class="textarea" placeholder="请输入内容" v-model="input" @keyup.ctrl.enter="send" @keydown.meta.enter="send"></textarea>
    </div>
    <VEmojiPicker @select="selectEmoji" v-show="showEmoji" class="emoji"/>
    <div class="handle">
      <span class="iconfont icon-emoji icon-size" @click="handleShowEmoji"></span>
      <button @click="send">发 送</button>
    </div>
  </div>
</template>
<script>
import VEmojiPicker from 'v-emoji-picker'
export default {
  data() {
    return {
      input: '',
      showEmoji: false
    }
  },
  props: {
  },
  mounted() {
    document.querySelector('.textarea').focus()
  },
  methods: {
    selectEmoji(emoji) {
      this.input += emoji.data
    },
    handleShowEmoji() {
      this.showEmoji = !this.showEmoji
    },
    send() {
      if (this.input.trim() === '') {
        return
      } 
      console.log(this.input)
      this.input = ''
    }
  },
  components: {
    VEmojiPicker
  }
}
</script>
<style lang="less" scoped>
@main-color:#34495e;
#msg-input {
  .emoji {
    width: 100%;
    height: 300px;
    float: left;
  }
  .textarea {
    box-sizing: border-box;
    display: block;
    padding: 10px;
    width: 100%;
    height: 110px;
    margin: 8px auto;
    overflow-y: scroll;
    color: @main-color;
    font-size: 14px;
    line-height: 24px;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 10px;
    }
  }
  .handle {
    box-shadow: -2px -2px 2px #eeeeee;
    padding: 8px 14px;
    display: flex;
    justify-content: flex-end;
    .icon-size {
      font-size: 26px;
    }
    button {
      margin-left: 30px;
      font-size: 14px;
      padding: 3px 10px;
      border-radius: 5px;
      color: #fff;
      background: @main-color;
    }
  }
}
</style>