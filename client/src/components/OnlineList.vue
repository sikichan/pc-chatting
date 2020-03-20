<template>
  <div id="online-list">
    <div class="count">
      <span>在线人数：{{list.length || 0}}</span>
      <span @click="logout">登出</span>
    </div>
    <div class="items" v-if="list.length" @click="atTa">
      <li v-for="(n,i) of list" :key="i" :data-socketid="n[1].socketId" :data-userid="n[0]">
        {{n[1].nickname}}
        <span :data-socketid="n[1].socketId" :data-userid="n[0]" v-if="selfUserId !== n[0]">私聊TA</span>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {type: Array, default: () => ([])},
  },
  data () {
    return {
      selfUserId: sessionStorage.getItem('chat-user')
    }
  },
  mounted() {
  },
  methods: {
    logout() {
      import('../utils/socketio.js').then(({logout}) => {
        logout()
      })
      this.$router.go(-1)
    },
    // 发起私聊
    atTa(e) {
      this.$router.push({name: 'private'})
    },
    atTas(e) {
      // e.target.attributes 属性节点 Attr 对象的集合（NamedNodeMap）
      // console.log(e.target.attributes['data-userid'].value)
      // let atUserId = e.target.attributes.getNamedItem('data-userid').value
      // let atSocketId = e.target.attributes.getNamedItem('data-socketid').value
      // if (atUserId === this.selfUserId) return
      // import('../utils/socketio.js').then(({getPrivateChat, socket}) => {
      //   getPrivateChat({atSocketId})
      //   socket.on('chatting', (data) => {
      //     console.log('new chat: ', data)
      //     if (data) {

      //     }
      //   })
      // })

    }
  }
}
</script>
<style lang="less" scoped>
#online-list {
  display: flex;
  flex-direction: column;
  .count {
    height: 40px;
    & span:first-child {
      float: left;
    }
    & span:last-child{
      float: right;
    }
  }
  .items {
    background: #f2f2f2;
    padding: 8px;
    flex: 1;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 10px;
    }
    li {
      border-radius: 4px;
      margin-top: 10px;
      padding: 10px;
      background: #fefefe;
      span {
        float: right;
        cursor: pointer;
        color: #009432;
      }
    }
  }
}
</style>