<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar
      :sidebar-open="sidebarOpen"
      @close-sidebar="sidebarOpen = false"
    />
    
    <!-- Content -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header
        :sidebar-open="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      <!-- Tiles -->
      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div class="grid grid-cols-12 gap-6">
            <!-- Placeholder -->
            <PlaceholderCard />

            <PlaceholderCard />

            <PlaceholderCard />
            <!-- Summary/Mentions -->

            <!-- Sentiment -->

            <!-- Topics -->

            <!-- etc... -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../service/firebase.js';
import { signOut } from 'firebase/auth';
import Sidebar from '../partials/Sidebar.vue';
import Header from '../partials/Header.vue';
import PlaceholderCard from '../partials/dashboard/PlaceholderCard.vue';

export default {
  name: 'DashHome',
  components: {
    Sidebar,
    Header,
    PlaceholderCard
  },
  setup() {
    const sidebarOpen = ref(false)
    console.log("sidebarOpen:", sidebarOpen)

    return {
      sidebarOpen,
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
