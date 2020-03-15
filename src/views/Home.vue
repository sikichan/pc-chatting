<template>
  <div id="Home">
    <div class="main">
      <span class="title">Welcome</span>
      <div class="form">
        <input v-model="nickname" placeholder="Enter your nickname">
        <button>Start</button>
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
  }
}
</script>
<style lang="less" scoped>
  #Home {
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
        }
        button {
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          background: linear-gradient(to right, #c0392b,#e74c3c,#e67e22);
          color: transparent;
          background-clip: text;
          border: 1px solid #e0e0e0;
          &:hover {
            background: #fefefe;
            color: #16a085;
          }
        }
      }
      .title {
        background: linear-gradient(to right, #c0392b,#e74c3c,#e67e22);
        color: transparent;
        background-clip: text;
        font-size: 48px;
        font-weight: 200;
        animation-name: backColor;
        animation-duration: 1.6s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: backwards;
      }
      @keyframes backColor {
        25% {
          background: linear-gradient(to right, #e67e22,#9b59b6,#8e44ad);
          color: transparent;
          font-size: 48px;
          background-clip: text;
          font-weight: 200;
        }
        75% {
          background: linear-gradient(to right,#8e44ad,#9b59b6,#e67e22);
          color: transparent;
          font-size: 48px;
          background-clip: text;
          font-weight: 200;
        }
      }
    }

  }
    
</style>