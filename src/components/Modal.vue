<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close-button" @click="$emit('closeModal')">&times;</span>
        
        <h2 class="modal-title">{{ title }}</h2>
        
        <div class="modal-images">
          <img class="modal-image" v-for="(image, index) in images" :key="index" :src="image" />
        </div>
        
        <p class="modal-description">{{ description }}</p>
        
        <div class="modal-links">
          <a :href="url" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <a v-if="isLive" :href="liveUrl" target="_blank" rel="noopener noreferrer">View Live Site</a>
        </div>
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

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 80%;
  max-width: 500px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.modal-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.modal-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.modal-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  margin: 5px;
}
.modal-description {
  margin-bottom: 20px;
}

.modal-links {
  display: flex;
  justify-content: space-between;
}

.modal-links a {
  display: inline-block;
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.modal-links a:hover {
  background-color: #0056b3;
}

</style>