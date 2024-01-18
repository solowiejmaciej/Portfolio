<template>
  <div class="card fade-in" @click="openModal">
    <h1 class="card-title">{{ title }} {{ icon }}</h1>
    <ul>
      <li v-for="(technology, index) in technologies" :key="index">
        <img :src="IconsMap[technology]" class="img" />
      </li>
    </ul>
    <div class="tags-container">
      <h2>Tags</h2>
      <div v-for="(tag, index) in tags" :key="index" class="card-tag">
        {{ tag }}
      </div>
    </div>
    <p class="card-date">Creation Date: {{ creationDate }}</p>
  </div>
  <div v-if="showModal">
    <Modal
      :showModal="showModal"
      :title="title"
      :description="description"
      :url="url"
      :creationDate="creationDate"
      :icon="icon"
      :isLive="isLive"
      :liveUrl="liveUrl"
      :technologies="technologies"
      :images="images"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import IconsMap from "../constants/IconsMap";
export default {
  data() {
    return {
      showModal: false,
      IconsMap: IconsMap,
    };
  },
  name: "Project",
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  props: {
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    creationDate: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    isLive: {
      type: Boolean,
      required: false,
      default: false,
    },
    liveUrl: {
      type: String,
      required: false,
      default: "",
    },
    images: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.card.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.card {
  color: #333; /* Dark grey color for text */
  background-color: #f9f9f9; /* Light grey color for background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
  border-radius: 10px; /* Rounded corners */
  padding: 20px;
  margin: 20px auto;
  min-width: 300px;
  max-width: 800px; /* Limit the width of the card */
  cursor: pointer; /* Add a pointer on hover */
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
}

h1 {
  color: #282c34; /* Blue color for headers */
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px; /* Add some space below the title */
}

.technologies {
  display: flex; /* Display technologies in a row */
  flex-wrap: wrap; /* Allow technologies to wrap to next line */
  margin-top: 10px; /* Add some space above the technologies */
}

.technologies li {
  list-style-type: none; /* Remove bullets */
  margin-right: 10px; /* Add some space between each technology */
}

.img {
  min-width: 90px;
  max-width: 90px;
  border-radius: 10%;
}
.card-tag {
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #007bff;
  color: white;
  padding: 5px 10px; /* Increase horizontal padding */
  border-radius: 15px; /* Increase border radius to make tags more rounded */
  margin: 5px; /* Add margin to all sides */
  display: inline-flex; /* Change to inline-flex for centering text */
  min-width: 50px;
  font-weight: bold; /* Make the text bold */
  transition: all 0.3s ease; /* Add transition for hover effect */
}

.card-tag:hover {
  background-color: #0056b3; /* Darken the background color when hovered over */
  text-shadow: 0 0 10px #fff, 0 0 20px #007bff; /* Increase the glow effect when hovered over */
}
.card-date {
  font-size: 0.8em;
  color: #333;
  margin-top: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tags-container {
  margin-top: auto;
}
</style>
