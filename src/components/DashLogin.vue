<template>
  <div class="login">
    <h2>Login</h2>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Sign in</button>
  </div>
</template>

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