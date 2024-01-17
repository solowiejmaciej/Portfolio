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
        <Project 
            v-for="project in filteredProjects" 
            :key="project.title" 
            :title="project.title" 
            :description="project.description" 
            :url="project.url" 
            :creationDate="project.creationDate" 
            :icon="project.icon" 
            :isLive="project.isLive" 
            :liveUrl="project.liveUrl" 
            :technologies="project.technologies"
            :images="project.images"
            :tags="project.tags"
        />
    </div>
</template>

<script>
import Project from '../components/Project.vue'
import ProjectsList from '../constants/ProjectList.js'
import TagsList from '../constants/TagsList.js'

export default {
    components: {
        Project
    },
    data() {
        return {
            ProjectsList: ProjectsList,
            selectedTag: '',
            Tags: TagsList
        };
    },
    computed: {
        filteredProjects() {
            if (this.selectedTag) {
                return this.ProjectsList.filter(project => project.tags.includes(this.selectedTag));
            } else {
                return this.ProjectsList;
            }
        }
    },
    methods: {
        clearFilters() {
            this.selectedTag = '';
        }
    }
}
</script>

<style scoped>
.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.projects-container > div {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    width: calc(33% - 20px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    align-items: stretch;
}

select, button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 16px;
}

button {
    background-color: #007BFF;
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