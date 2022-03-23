<template>
  <div class="home">
    <br>
    <br>
    <input placeholder="Insert username" v-model="userName">
    <br>
    <input placeholder="Insert password" v-model="password" type="password">
    <br>
    <br>
    <button v-on:click="logIn()">Log-In</button>
    <br>
    <br>
    <button v-on:click="logOut()">Log-Out</button>
    <br>
    <br>
<table></table>
  </div>
</template>

<script>

export default {
  name: 'LoginTest',
  components: {
    userName:'',
    password:''
  },
  methods: {

      logIn: function () {
        this.$http.get("logiSisse/"+this.userName+"/"+this.password)
            .then(response => {
              let token = response.data
              localStorage.setItem('user-token', token)
              this.$http.defaults.headers.common['Authorization'] = "Bearer "+token
            }).catch(function (response) {

        })
      },

      logOut: function () {
        this.$http.get("logiVälja/")
        .then(response => {
          localStorage.removeItem('user-token')
          location.reload()
        })
      }
  }
}
</script>
