<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { onMounted, ref } from 'vue'

let message = ref('hello')

let doSomething = () => {
  alert('abhi')
}
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
    <button @click="doSomething">Submit</button>
  </main>
</template>
