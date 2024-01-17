<template>
    <div class="fun-fact-container">
      <h1>Fun Fact</h1>
      <Spinner v-if="loadingFunFuct" />
      <h1 v-else class="fun-fact">{{ funFact }}</h1>
      <h1>Also, did you know that at this very moment the temperature in my room is <br>
        <Spinner v-if="loadingTemp" />
        <span v-else id="temp"> {{ temp }} ℃ </span>    </h1>

    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import Spinner from '../components/Spinner.vue'
  
export default {
    components: {
        Spinner
       },
       setup() {
  const funFact = ref('')
  const loadingFunFuct = ref(true)
  const loadingTemp = ref(true)
  const temp = ref('')

  const fetchFunFact = async () => {
    loadingFunFuct.value = true
    try {
      const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
      funFact.value = response.data.text
    } catch (error) {
      console.error(error)
    } finally {
      loadingFunFuct.value = false
    }
  }

  const fetchTemp = async () => {
  loadingTemp.value = true
  try {
    const response = await axios.get('https://hms.solowiejmaciej.com/Temperature')
    temp.value = parseFloat(response.data.temperature).toFixed(2)
  } catch (error) {
    console.error(error)
  } finally {
    loadingTemp.value = false
  }
}

  onMounted(() => {
    fetchFunFact()
    fetchTemp()
  })

  return { funFact, loadingFunFuct, temp, loadingTemp }
}
  }
  </script>

<style scoped>
.fun-fact-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

h1 {
  text-align: center;
  color: #333;
}

.loading-message {
  text-align: center;
  color: #999;
}

.fun-fact {
  text-align: center;
  color: #333;
  font-size: 1.2em;
  margin-top: 20px;
}
</style>