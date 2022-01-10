<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <h2>Mentions</h2>
    <p v-if="error">{{ error }}</p>
    <div class="container">
        <div
        v-for="(mention, index) in mentions"
        v-bind:item="mention"
        v-bind:index="index"
        v-bind:key="mention._id"
        >
        {{ `${mention.time.getFullYear()}-${mention.time.getMonth()}-${mention.time.getDate()}` }}
        <p>{{ mention.content.slice(1, 20) }}</p>
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
            this.mentions = await DocService.getDocs()
        } catch(err) {
            this.error = err.message
        }
    }
}
</script>