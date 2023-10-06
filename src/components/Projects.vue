<template>
    <div class="my-projects">
        <h2>My Projects</h2>
        <div class="project-item" v-for="(project, index) in projects" :key="index">
            <h3>{{ project.projectName }}</h3>
            <p>{{ project.projectDescription }}</p>
            <a :href="project.projectLink" target="_blank" class="project-link">View Project</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProjects',
    data() {
        return {
            projects: [
                {
                    projectName: '2.1p',
                    projectDescription: '2.1p',
                    projectLink: 'https://github.com/s223276883/2.1p'
                },
                {
                    projectName: 'first task',
                    projectDescription: '1.1',
                    projectLink: 'https://github.com/s223276883/first-task'
                },
                {
                    projectName: 'My portfolio',
                    projectDescription: '1.3P',
                    projectLink: 'https://github.com/s223276883/1.3P'
                }

            ]
        };
    }
};
</script>

<style scoped>
.my-projects {
    padding: 20px;
}

.project-item {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
}
</style>
