<template>
  <div
    class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form
      class="space-y-6"
      action="#"
    >
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to your dashboard
      </h3>
      <div class="text-xl flex flex-wrap justify-center">
        <button class="p-2 inline-flex items-center space-x-2 rounded">
          <span
            aria-label="Sign in with Google"
            title="Sign in with Google"
          >
            <Icon 
              color="#E34133"
              icon="ant-design:google-square-filled"
            />
          </span>
        </button>
        <button class="p-2 inline-flex items-center space-x-2 rounded">
          <span
            aria-label="Sign in with GitHub"
            title="Sign in with GitHub"
          >
            <Icon 
              class="fill-current" 
              icon="fa-brands:github-square"
            />
          </span>
        </button>
      </div>
      <div class="relative mt-10 h-px bg-gray-300">
        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
        </div>
      </div>
      <div>
        <label
          for="email"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >Your email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@example.com"
          required=""
        >
      </div>
      <div>
        <label
          for="password"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >Your password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required=""
        >
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-purple-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
              required=""
            >
          </div>
          <div class="text-sm ml-3">
            <label
              for="remember"
              class="font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label>
          </div>
        </div>
        <a
          href="#"
          class="text-sm text-purple-700 hover:underline ml-auto dark:text-purple-500"
        >Forgot
          Password?</a>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        @click="login"
      >
        Sign in
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? 
        <router-link
          to="/register"
          class="text-purple-700 hover:underline dark:text-purple-500"
        >
          Create account
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '../service/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Icon } from '@iconify/vue';
export default {
  name: 'Login',
  components: {
    Icon
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function () {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('home');
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>
