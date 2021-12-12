<template>
  <div class="home">
    <button @click="logout">Sign Out</button>
  </div>
</template>

<script>
import { auth } from '../service/firebase.js'
import { signOut } from 'firebase/auth'

export default {
  name: 'DashHome',
  methods: {
    logout: function () {
      signOut(auth, this.email, this.password)
        .then(
          () => {
            this.$router.replace("login");
          })
        .catch(err => {
          alert(err.message);})
    }
  }
}
</script>
