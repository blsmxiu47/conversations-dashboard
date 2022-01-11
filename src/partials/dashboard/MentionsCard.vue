<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <h2>Mentions</h2>
    <p v-if="error">
      {{ error }}
    </p>
    <div class="container">
      <div
        v-for="(mention, index) in mentions"
        :key="mention._id"
        :item="mention"
        :index="index"
      >
        {{ `${mention.time.getFullYear()}-${('0' + (mention.time.getMonth() + 1)).slice(-2)}-${('0' + (mention.time.getDate() + 1)).slice(-2)}` }}
        <!-- <p>{{ mention.content.slice(1, 20) }}...</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import DocService from '../../service/docservice'
export default {
    name: 'MentionsCard',
    data () {
        return {
            mentions: [],
            error: ''
        }
    },
    async created () {
        try {
            this.mentions = await DocService.getDocs(
              // past 14 days (to the millisecond)
              new Date(
                new Date().setDate(
                  new Date().getDate() - 14)))
        } catch(err) {
            this.error = err.message
        }
    }
}
</script>