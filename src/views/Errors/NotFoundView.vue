<template>
    <div class="not-found">
        <font-awesome-icon icon="exclamation-triangle" size="4x" />
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist. Redirecting to home page in {{ counter }} seconds...</p>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'NotFoundView',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faExclamationTriangle,
            counter: 10
        }
    },
    mounted() {
        const intervalId = setInterval(() => {
            if (this.counter > 0) {
                this.counter--
            } else {
                clearInterval(intervalId)
                this.$router.push('/')
            }
        }, 1000)
    }
}
</script>

<style scoped>
.not-found {
    text-align: center;
    padding: 50px;
}

h1 {
    font-size: 36px;
    color: red;
    margin-top: 20px;
}

p {
    font-size: 24px;
    color: gray;
}
</style>