<template>
  <div class="login">
    <h2>Login</h2>
    <input
      v-model="email"
      type="text"
      placeholder="Email"
    ><br>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    ><br>
    <button @click="login">
      Sign in
    </button>
    <p>
      <router-link to="/register">
        Register
      </router-link>
    </p>
    <span>
      <router-link to="/login">login</router-link>
    </span>
  </div>
</template>

<script>
import { auth } from "../service/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 50px;
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
p {
  margin-top: 50px;
  font-size: 16px;
}
p a {
  cursor: pointer;
}
</style>
