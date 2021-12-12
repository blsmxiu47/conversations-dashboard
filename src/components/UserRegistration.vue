<template>
  <div class="register">
    <p>Register</p>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="register">Register</button>
    <span>
        <router-link to="/login">login</router-link>
    </span>
  </div>
</template>

<script>
import { auth } from '../service/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
      register: function () {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(
            () => {
                this.$router.replace("home");
            }).catch(err => {
                alert(err.message);
            })
      }
  }
}
</script>

<style scoped>
.register {
  margin-top: 40px;
}
input {
  width: 40%;
  padding: 20px;
  margin: 20px 0;
}
button {
  width: 10%;
  margin-top: 30px;
  padding: 20px;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>