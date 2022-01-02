<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" 
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    />

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-auto no-scrollbar w-64 lg:w-48 xl:w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <button
          ref="trigger"
          class="lg:hidden text-gray-500 hover:text-gray-400"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
          @click.stop="$emit('close-sidebar')"
        >
          <span class="sr-only">Close sidebar</span>
          <Icon icon="akar-icons:chevron-left" />
        </button>
        <router-link 
        to="/home"
        >
          <!-- App logo -->
          <svg width="48" height="48" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="m32.523 38.981-.132.043.032.135 1.988 8.349-7.163-7.333-.051-.052-.073.008A28.54 28.54 0 0 1 24 40.3c-13.197 0-23.85-9.01-23.85-20.075S10.803.15 24 .15c13.197 0 23.85 9.011 23.85 20.076 0 8.546-6.35 15.863-15.327 18.755Z" fill="#fff" stroke="#000" stroke-width=".3"/>
            <path d="M3.137 20.806H15.66l.642-1.354 1.204 2.322 1.284-3.29 1.445 8.322L21.68 8.42l.883 14.517 1.124-3.484.802 2.903 1.365-1.549h19.103" stroke="#000" stroke-width=".3"/>
          </svg>
        </router-link>
      </div>
      <!-- Links -->
      <div>
        <ul>
          <router-link to="/">
            <li class="px-4 py-4 mb-2">
              <a class="text-gray-300 hover:text-white">
                <!-- Nav item / icon -->
                <div class="flex items-center">
                  <Icon icon="bx:bx-home" />
                  <span class="ml-3">Home</span>
                </div>
              </a>
            </li>
          </router-link>
          <router-link to="/">
            <li class="px-4 py-4 mb-2">
              <a class="text-gray-300 hover:text-white">
                <!-- Nav item / icon -->
                <div class="flex items-center">
                  <Icon icon="ci:settings" />
                  <span class="ml-3">Settings</span>
                </div>
              </a>
            </li>
          </router-link>
          <router-link to="/">
            <li class="px-4 py-4 mb-2">
              <a class="text-gray-300 hover:text-white">
                <!-- Nav item / icon -->
                <div class="flex items-center">
                  <Icon icon="bx:bx-edit" />
                  <span class="ml-3">Edit Query</span>
                </div>
              </a>
            </li>
          </router-link>
          <router-link to="/">
            <li class="px-4 py-4 mb-2">
              <a class="text-gray-300 hover:text-white">
                <!-- Nav item / icon -->
                <div class="flex items-center">
                  <Icon icon="bx:bx-info-circle" />
                  <span class="ml-3">About</span>
                </div>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'Sidebar',
    components: {
        Icon
    },
    props: {
        'sidebarOpen': Boolean
    },
    emits: ['close-sidebar'],
    setup() {
        
    },
}
</script>

