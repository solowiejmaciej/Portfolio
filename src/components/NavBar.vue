<template>
    <div>
        <RouterLink to="/" active-class="active"><font-awesome-icon icon="user" /> About</RouterLink>
        <RouterLink to="/projects" active-class="active"><font-awesome-icon icon="code-branch" /> Projects</RouterLink>
        <RouterLink to="/contact" active-class="active"><font-awesome-icon icon="envelope-open" /> Contact</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    div {
        top: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #282c34;
        color: white;
        height: 10vh;
    }
    a {
        color: white;
        text-decoration: none;
    }
    a:hover, .active {
        color: #007bff;
    }
</style>