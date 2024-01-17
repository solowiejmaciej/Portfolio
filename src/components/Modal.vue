<template>
  <div class="backdrop">
    <div class="myModal">
      <button class="close-button" @click="closeModal"> &times; </button>
      <h1>{{ title }}</h1>
      <p>GitHub URL: <a :href="url" target="_blank">{{ url }}</a></p>
      <p v-if="isLive">Live URL: <a :href="liveUrl">{{ liveUrl }}</a></p>
      <h4>{{ description }}</h4>
      <img v-for="(image, index) in images" :key="index" :src="image" />
    </div>
  </div>
</template>

<script>
export default {

  emits: ['closeModal'],
  props: {
        description: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        icon : {
            type: String,
            required: true
        },
        title : {
            type: String,
            required: true
        },
        isLive: {
            type: Boolean,
            required: false,
            default: false
        },
        liveUrl: {
            type: String,
            required: false,
            default: ''
        },
        images: {
            type: Array,
            required: true,
        }
    },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  },
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
}

.myModal {
    width: 90%; /* 90% of the screen width */
    height: 90%; /* 90% of the screen height */
    background-color: #fff; /* White background */
    border-radius: 10px; /* Rounded corners */
    padding: 20px; /* Some padding */
    box-sizing: border-box; /* Include padding and border in element's total width and height */
    position: relative; /* Position relative to the backdrop */
    overflow: auto; /* Add scrollbars if content overflows */
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 2em;
    cursor: pointer;
}
img {
    width: 40%;
    height: 65%;
}
</style>