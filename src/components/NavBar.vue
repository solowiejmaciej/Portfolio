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
        background-color: #2d2d2d;
        color: white;
        height: 10vh;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Add a shadow to the navbar */
    }
    a {
        color: white;
        text-decoration: none;
        padding: 15px 30px; /* Increase the padding */
        font-size: 1.2em; /* Increase the font size */
        transition: color 0.3s ease, border-bottom 0.3s ease; /* Add a transition effect */
    }
    a:hover, .active {
        color: #007bff; /* Change the color on hover */
        border-bottom: 2px solid #007bff; /* Add an underline on hover */
    }
</style>