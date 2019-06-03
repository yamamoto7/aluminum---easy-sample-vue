<template>
  <div>
    <h2>基本情報入力</h2>
    <div class="wrap">
      <button type="submit" @click="newUserSession">記事一覧取得</button>
      <p>
        プロフィール更新
        <input type="file" @change="onNext($event.target.files)" />
      </p>
    </div>
    <div class="wrap">
      <h2>投稿</h2>
      <input type="text" v-model="this.post.body" />
      <input type="file" @change="putImageToPost($event.target.files)" />
      <button type="submit" @click="submitPost">投稿</button>
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
        token: 'safkhsdfkjdfkjjksakj'
      },
      post: {
        body: 'aaaaaa'
      },
      posts: [],
      errors: []
    }
  },
  mounted () {
  },
  methods: {
    // ---------------------- トークン送信 ----------------------
    async  newUserSession () {
      var response
      try {
        response = await http.get('/posts')
        console.log(response)
        // リダイレクト先指定。
        // await this.$router.go()
      } catch (error) {
        console.log(response)
        console.log(error)
      }
    },
    async putImageToPost (e) {
      try {
        this.createImage(e[0])
        const data = new FormData()
        data.append('image', e[0])
        this.post.image = data
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async submitPost () {
      var response
      try {
        response = await http.post('/posts', this.post)
        console.log(response)
        // リダイレクト先指定。
        // await this.$router.go()
      } catch (error) {
        console.log(response)
        console.log(error)
      }
    },
    async onNext (e) {
      try {
        this.createImage(e[0])
        const data = new FormData()
        data.append('image', e[0])
        this.image = data
        var response = await http.put('/user', data)
        console.log(response)
        // this.$router.go('/mypage')
      } catch (e) {
        console.log(e)
      }
    },
    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
