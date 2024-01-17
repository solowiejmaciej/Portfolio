<template>
    <div class="contact-view">
        <h1>Contact</h1>
        <form @submit.prevent>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message"></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    }
};
</script>

<style scoped>
.contact-view {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input,
textarea {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
