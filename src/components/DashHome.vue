<template>
  <div class="home">
    <button @click="logout">Sign Out</button>
  </div>
</template>

<script>
import { logout } from '../service/firebase.js'

export default {
    name: 'DashHome',
    methods: {
        logout: function () {
            logout()
        }
    }
};
</script>
