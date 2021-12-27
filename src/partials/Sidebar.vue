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
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
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
        <router-link to="/">
          <!-- App logo -->
        </router-link>
      </div>
      <!-- Links -->
      <div>
        <ul>
          <router-link to="/">
            <li>
              <a>
                <!-- Nav item / icon -->
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

