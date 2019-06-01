<template>
  <div>
    <div
        v-for="message in messages"
        :key="message"
    >{{ message }}
    </div>
    <div>
      <input v-model="messageBody" />
      <button @click="speak">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageBody: '',
      messages: []
    }
  },
  async mounted () {
    try {
      // 購読開始
      this.boardChannel = await this.$cable.subscriptions.create({channel: 'BoardChannel'}, {
        received: async (data) => {
          // 受け取ったらmessagesに詰めるようにする
          await this.messages.push(data['message'])
        }
      })
    } catch (e) {
    }
  },
  methods: {
    speak () {
      // メッセージ入力フォームが空でないときに送信ボタンを押したら
      if (this.messageBody !== '') {
        // フォームの中身を送信
        this.boardChannel.perform('speak', {message: this.messageBody})
        this.messageBody = ''
      }
    }
  }
}
</script>
<style>
</style>
