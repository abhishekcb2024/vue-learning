<script setup>
// import { ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'salad')
let city = useStorage('city')

let obj = useStorage('obj', { one: 'one' })

setTimeout(() => {
  obj.value.one = 'CHANGED'
}, 3000)

// let food = ref(localStorage.getItem('food'))
// let city = ref(localStorage.getItem('city'))

// watch(city, (value) => {
//   write('city', value)
// })

// setTimeout(() => {
//   city.value = 'changed'
// }, 3000)

// function write(key, value) {
//   localStorage.setItem(key, value)
// }
</script>

<template>
  <main>
    <h3>Your Favorite Food? <input type="text" v-model="food" /></h3>
    <p>{{ food }}</p>

    <h3>Your Favorite city? <input type="text" v-model="city" /></h3>
    <p>{{ city }}</p>
  </main>
</template>
