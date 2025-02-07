<script setup>
import TabbleTextarea from '@/components/TabbleTextarea.vue'
import { ref } from 'vue'

let comment = ref('text value')

// let textarea = ref(null)

// onMounted(() => {
//   console.log(textarea.value.value)
// })

// console.log(textarea)
</script>

<template>
  <form>
    <TabbleTextarea v-model="comment" style="height: 150px; width: 100%" />
  </form>
</template>
