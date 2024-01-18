<template>
  <div class="filters">
    <select v-model="selectedTag">
      <option disabled value="">Please select a tag</option>
      <option v-for="tag in Tags" :key="tag" :value="tag">
        {{ tag }}
      </option>
    </select>
    <button @click="clearFilters">Clear filters</button>
  </div>

  <div class="projects-container">
    <Spinner v-if="isLoading" />
    <Project
      v-for="project in filteredProjects"
      v-if="!isLoading"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :url="project.gitHubUrl"
      :creationDate="project.createdAt"
      :icon="IconsMap[project.icon]"
      :isLive="project.isLive"
      :liveUrl="project.liveUrl"
      :technologies="project.technologies"
      :images="project.images"
      :tags="project.tags"
    />
  </div>
  <button v-show="isScrolled" class="scroll-to-top" @click="scrollToTop">
    ↑
  </button>
</template>

<script>
import Project from "../components/Project.vue";
import ProjectList from "../constants/ProjectList.js";
import TagsList from "../constants/TagsList.js";
import IconsMap from "../constants/IconsMap";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    Project,
    Spinner,
  },
  data() {
    return {
      isLoading: true, // set isLoading to true initially
      ProjectsList: [],
      selectedTag: "",
      Tags: TagsList,
      IconsMap: IconsMap,
      isScrolled: false,
    };
  },
  created() {
    fetch("https://projects-api.solowiejmaciej.com/projects")
      .then((response) => response.json())
      .then((data) => {
        this.ProjectsList = data;
        this.isLoading = false; // Add this line
      })
      .catch((error) => {
        console.error("Error:", error);
        this.isLoading = false; // Add this line
        this.ProjectsList = ProjectList;
      });
    window.addEventListener("scroll", this.checkScroll);
  },
  computed: {
    filteredProjects() {
      if (this.selectedTag) {
        return this.ProjectsList.filter((project) =>
          project.tags.includes(this.selectedTag)
        );
      } else {
        return this.ProjectsList;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    clearFilters() {
      this.selectedTag = "";
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    checkScroll() {
      this.isScrolled = window.scrollY > 200;
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  cursor: pointer;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  position: relative;
}

.projects-container > div {
  align-items: stretch;
}

select,
button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.filters {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
