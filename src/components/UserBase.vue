<template>
  <div>
    <h2>基本情報入力</h2>
    <div class="wrap">
      <div class="label-box"><span class="label">メールアドレス</span><span class="hissu">※必須</span>{{ this.errors['email'] }}</div>
      <input class="text-form text-form-long" v-model="user.email" /><br>

      <div class="label-box"><span class="label">パスワード</span><span class="hissu">※必須</span>{{ this.errors['password'] }}</div>
      <input class="text-form text-form-long" type="password" v-model="user.password" /><br>
      <input class="text-form text-form-long" type="password" placeholder="もう一度入力してください" /><br>

      <button class="btn" type="submit" @click="submitUser">登録</button>
      <button type="submit" @click="newUserSession">ログイン</button>
    </div>
  </div>
</template>

<script>
import http from '../http'
export default {
  data () {
    return {
      // フォームなどで送信する亀の情報を保存
      user: {
        email: '',
        password: ''
      },
      errors: []
    }
  },
  mounted () {
  },
  methods: {
    // ---------------------- ユーザー登録 ----------------------
    async submitUser () {
      // ユーザー登録を行っている。メールアドレス、パスワードが必須で情報は
      // data()のuserに詰めて渡している。
      try {
        const response = await http.post('/api/v1/users/sign_up', this.user)
        // バリデーションのエラーが返ってきた場合の処理。
        // Emailアドレスが既に使われているなど。
        if (response.status === 202) {
          // エラー内容をdataに入れる。
          this.errors = response.data.error
        } else {
          // リダイレクト先指定。
          // await this.$router.go()
          console.log(response)
        }
      } catch (error) {
        // サーバーもしくはネットワークのエラーが返ってきた場合の処理。
        console.log(error)
      }
    },
    // ---------------------- ログイン ----------------------
    async  newUserSession () {
      var response
      try {
        response = await http.post('/api/v1/users/sign_in', this.user)
        // リダイレクト先指定。
        if (response.status === 202) {
          // エラー内容をdataに入れる。
          this.errors = response.data.error
          console.log(response)
        } else {
          // リダイレクト先指定。
          await this.$router.go()
        }
      } catch (error) {
        // サーバーもしくはネットワークのエラーが返ってきた場合の処理。
        console.log(response)
        console.log(error)
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
