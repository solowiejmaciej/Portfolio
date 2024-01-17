<template>
<div class="content">
    <div class="about-container">
        <h1 id="typed"></h1>
        <img class="profile-picture" src="../assets/profilepic.png" alt="Profile Picture">
        <h1 id="typed-name" class="name"></h1>
        <p class="bio">I'm a Junior FullStack Developer with a passion for learning new things and solving problems. My main focus is on .NET and Vue.js, but I'm always open to new technologies. I love to work in a team and I'm always eager to learn from more experienced developers. I especially enjoy working on the backend side of things, but I'm also comfortable with frontend, but CSS is a nightmare.</p>
        <div class="social-media-links">
            <a href="https://github.com/solowiejmaciej" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/maciej-so%C5%82owiej-9bbb85235/" target="_blank">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            </div>
    </div>
    <div class="timeline-container slide-in-right">
                <WorkHistoryTimeLine/>
        </div>
</div>

</template>

<script>
import Typed from 'typed.js';
import WorkHistoryTimeLine from '../components/WorkHistoryTimeLine.vue';

export default {
    name: 'AboutView',
    components: {
        WorkHistoryTimeLine
    },
    mounted() {
        new Typed('#typed-name', {
            strings: ["Maciej Sołowiej"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            showCursor: false,
        });

        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) {
            greeting = 'Good Morning!';
        } else if (hour < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        new Typed('#typed', {
            strings: [greeting],
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            showCursor: false
        });
    }
};
</script>


<style scoped>
@keyframes slide-in-right {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-right {
    animation: slide-in-right 1s ease-out forwards;
}
.timeline-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.about-container, .timeline-container {
    flex: 1;
    margin-bottom: 20px;  /* Add some space between the elements */
}

@media (min-width: 768px) {
    .content {
        flex-direction: row;
    }

    .about-container {
        margin-right: 20px;  /* Add some space between the elements */
        margin-bottom: 0;
    }
}
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

.about-container{
    padding: 0;
}

.about-container:hover .name, .about-container:hover .bio, .about-container:hover .social-media-links a {
    transform: translateY(0);
    opacity: 1;
}

h1 {
    font-size: 36px;
}
</style>