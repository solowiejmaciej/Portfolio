<template>
    <div class="about-container">
        <img class="profile-picture" src="../assets/profilepic.png" alt="Profile Picture">
        <h1 class="name">Maciej Sołowiej</h1>
        <p class="bio">
            I'm a Junior FullStack Developer with a passion for learning new things and solving problems.
            My main focus is on .NET and Vue.js, but I'm always open to new technologies.
            I love to work in a team and I'm always eager to learn from more experienced developers.
            I aspecialy enjoy working on the backend side of things, but I'm also comfortable with frontend, but css is a nightmare.
        </p>
        <div class="social-media-links">
        <a href="https://github.com/solowiejmaciej" target="_blank">
            <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/maciej-so%C5%82owiej-9bbb85235/" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <!-- Add more links as needed -->
    </div>
    </div>
</template>

<style scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    padding: 20px;
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    animation: popIn 0.3s ease 0.3s forwards;
    position: relative;

}

.name {
    font-size: 2em;
    font-weight: bold;
}

.bio {
    max-width: 600px;
}

.social-media-links {
    display: flex;
    gap: 10px;
}

.social-media-links a {
    color: #007BFF;
    text-decoration: none;
}

.social-media-links a:hover {
    text-decoration: underline;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.profile-picture {
    /* ...existing styles... */
    transform: scale(0);
    animation: popIn 0.5s ease 0.5s forwards;
}

@keyframes popIn {
    to {
        transform: scale(1);
    }
}
@keyframes slideUpFadeIn {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.name, .bio, .social-media-links a {
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.1s ease;
    animation: slideUpFadeIn 1s ease forwards;

}

.name {
    transition-delay: 0.3s;
}

.bio {
    transition-delay: 0.4s;
}

.social-media-links a {
    transition-delay: 0.9s;
}

.about-container:hover .name, .about-container:hover .bio, .about-container:hover .social-media-links a {
    transform: translateY(0);
    opacity: 1;
}
</style>