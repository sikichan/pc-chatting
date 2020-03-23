<template>
  <div id="home">
    <div class="main">
      <span class="title">Welcome</span>
      <div class="form">
        <input v-model="nickname" placeholder="Enter your nickname">
        <button @click="onStart">Start</button>
        <transition name="fade">
          <div class="tips" v-show="tipShow">
            <span class="iconfont icon-ico-tips icon-size"></span>
            <span>{{tips}}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: '',
      tipShow: false,
      tips: '',
    }
  },
  methods: {
    randomColor() {
      const r = Math.floor(Math.random()*255)
      const g = Math.floor(Math.random()*255)
      const b = Math.floor(Math.random()*255)
      return 'rgba('+ r +','+ g +','+ b +',0.8)'
    },
    onStart() {
      this.nickname = this.nickname.trim()
      if (this.nickname === '') {
        this.tips = '昵称不能为空'
        this.tipShow = true
        return
      }
      this.tipShow = false
      sessionStorage.setItem('chat-user', Date.now() + this.nickname)
      sessionStorage.setItem('chat-user-name', this.nickname)
      sessionStorage.setItem('chat-user-color', this.randomColor())
      setTimeout(() => {
        this.$router.push({name: 'group'})
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  #home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .main {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .form {
        .tips {
          height: 46px;
          position: absolute;
          display: flex;
          align-items: center;
          .icon-size {
            font-size: 24px;
          }
          span {
            color:#833471;
          }
        }
        input {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #efefef;
          border-radius: 6px;
          color: grey;
        }
        button {
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          color: #e74c3c;
          transition: all 0.7s;
          &:hover {
            background: #fefefe;
            color: #16a085;
            border: 1px solid #16a085;
          }
        }
      }
      .mixinTitle {
        font-size: 148px;
        color: transparent;
        background-clip: text;
        font-weight: 200;
      }
      .title {
        background-image: linear-gradient(to right bottom, #ffa801,#f7f1e3);
        .mixinTitle;
        animation-name: backColor;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }

      @keyframes backColor {
        25% {
          background-image: linear-gradient(to right bottom,#ff3f34,pink);
          .mixinTitle;
        }
        75% {
          background-image: linear-gradient(to right bottom,#2c2c54,#D6A2E8);
          .mixinTitle;
        }
      }
    }

  }
    
</style>