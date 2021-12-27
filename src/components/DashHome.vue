<template>
  <div class="home">
    <Header
      :sidebar-open="sidebarOpen"
      @toggle-sidebar="sidebarOpen = !sidebarOpen"
    />
    <button @click="logout">
      Sign Out
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../service/firebase.js';
import { signOut } from 'firebase/auth';
import Header from '../partials/Header.vue';

export default {
  name: 'DashHome',
  components: {
    Header
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen
    }
  },
  methods: {
    logout: function () {
      signOut(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('login');
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>
