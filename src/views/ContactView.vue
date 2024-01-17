<template>
    <div class="contact-view">
        <h1>Contact</h1>
        <form @submit.prevent="submitForm" class="animated-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="v$.name.$model" />
                <br>
                <span class="error" v-if="v$.name.$error">Name must be 2-50 characters long and cannot be empty</span>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="v$.fieldEmail.$model" />
                <br>
                <span class="error" v-if="v$.fieldEmail.$error">Please enter a valid email</span>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="v$.message.$model"></textarea>
                <br>
                <span class="error" v-if="v$.message.$error">Message must be 10-400 characters long</span>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <p v-if="showMessage" class="success-message">Thank you for contact, I will respond as soon as I can!</p>
    </div>
    <FunFact />
</template>
<script>
import { ref } from 'vue'
import { required, maxLength, minLength, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import FunFact from '../components/FunFact.vue'

export default {
    components: { FunFact },
    setup() {
        
        const name = ref('');
        const fieldEmail = ref('');
        const message = ref('');
        const showMessage = ref(false);
        const rules = {
            name: { required, maxLength: maxLength(50), minLength: minLength(2) },
            fieldEmail: { required, email },
            message: { required, maxLength: maxLength(400), minLength: minLength(10) }
        };
        const v$ = useVuelidate(rules, { name, fieldEmail, message });
        const submitForm = () => {
            v$.value.$touch();
            if (v$.value.$invalid) {
                // Form is invalid, do not submit it
                return;
            }
            showMessage.value = true; // Set showMessage to true after successful submission
            // Reset the form and validation state
            name.value = '';
            fieldEmail.value = '';
            message.value = '';
            v$.value.$reset();
        };
        return { name, fieldEmail, message, v$, submitForm, showMessage };
    },
}
</script>

<style scoped>
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.animated-form {
    animation: fadeIn 1s;
}
.contact-view {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px; /* Add some padding on smaller screens */
}

@media (max-width: 600px) {
    .contact-view {
        max-width: 100%; /* Allow the form to take up the full width on smaller screens */
    }
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
.error {
    color: red;
    font-weight: bold;
    font-size: 1em;
    margin-top: 0.5em;
}
.success-message {
    color: green;
    font-size: 1.2em;
    margin-top: 20px;
}
</style>
