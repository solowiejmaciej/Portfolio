<template>
    <div class="timeline">
        <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
            <div class="timeline-date">
                <span>{{ item.period }}</span>
            </div>
            <div class="timeline-content">
                <h2>{{ item.title }}</h2>
                <p>{{ item.company }}</p>
                <ul>
                    <li v-for="(skill, i) in item.skills" :key="i">{{ skill }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            timeline: [
                { 
                    title: 'Junior Fullstack Developer', 
                    company: 'Software Studio', 
                    period: '2024.01 - Present',
                    skills: ['Docker', 'Vue.js', 'ASP.NET CORE', 'SQL Server', 'GitLab']
                },
                { 
                    title: 'IT Consultant', 
                    company: 'eFitness', 
                    period: '2021.11 - 2024.01',
                    skills: [ 'SQL Server', 'Azure', 'Azure Devops', 'Python', 'IT Consulting', 'Project Management']
                },
            ],
        };
    },
};
</script>

<style scoped>
.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.timeline-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    font-weight: bold;  /* Makes the text bold */

}

.timeline-date {
    background: #2d2d2d;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    margin-right: 20px;
}

.timeline-content {
    flex-grow: 1;
    border-bottom: 2px solid #2d2d2d;
    padding-bottom: 20px;
}

.timeline-content h2 {
    margin-bottom: 10px;
}
</style>