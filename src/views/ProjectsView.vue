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
</template>

<script>
import Project from '../components/Project.vue'
import ProjectList from '../constants/ProjectList.js'
import TagsList from '../constants/TagsList.js'
import IconsMap from '../constants/IconsMap'
import Spinner from '../components/Spinner.vue'

export default  {
    components: {
        Project,
        Spinner
       },
    data() {
        return {
            isLoading: true,  // set isLoading to true initially
            ProjectsList: [],
            selectedTag: '',
            Tags: TagsList,
            IconsMap: IconsMap,
        };
    },
    created() {
        fetch('http://192.168.1.138:3000/projects')
            .then(response => response.json())
            .then(data => {
                this.ProjectsList = data;
                this.isLoading = false;  // Add this line
            })
            .catch((error) => {
                console.error('Error:', error);
                this.isLoading = false;  // Add this line
                this.ProjectsList = ProjectList;
            });
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
    position: relative; 

}

.projects-container > div {
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