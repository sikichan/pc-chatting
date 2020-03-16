<template>
  <div id="home">
    <div class="main">
      <span class="title">Welcome</span>
      <div class="form">
        <input v-model="nickname" placeholder="Enter your nickname">
        <button @click="onStart">Start</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: ''
    }
  },
  methods: {
    onStart() {
      this.$router.push({path: '/chatting'})
    }
  }
}
</script>
<style lang="less" scoped>
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