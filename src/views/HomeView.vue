<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { useFlash } from '@/composables/useFlash'
import { ref } from 'vue'

let message = ref('hello')

let doSomething = () => {
  alert('abhi')
}

let { flash } = useFlash()
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
    <button @click="doSomething">Submit</button>
    <br />
    <button @click="flash('it is worked')">Click here</button>
  </main>
</template>
