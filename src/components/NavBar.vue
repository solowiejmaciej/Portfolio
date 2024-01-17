<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
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
    a:hover {
        color: #61dafb;
    }
</style>