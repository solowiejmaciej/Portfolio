<template>
    <div class="spinner-container">
        <font-awesome-icon :icon="['fas', 'spinner']" spin size="3x"/>
    </div> 
</template>

<script>
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default  {
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            spinner: faSpinner,
        };
    },
}

</script>

<style scoped>
.spinner-container {
    position: absolute;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100%; 

}
</style>