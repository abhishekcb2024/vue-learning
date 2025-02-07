import { ref, watch } from 'vue'

export function useStorage(key, val = null) {
  let storeValued = read()

  if (storeValued) {
    val = ref(storeValued)
  } else {
    val = ref(val)
    write()
  }

  watch(val, write, { deep: true })

  // watch(val, () => {
  //   write()
  // })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (val.value == '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  return val
}
