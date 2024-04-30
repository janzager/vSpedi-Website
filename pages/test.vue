<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="formData.name" id="name" placeholder="eg. John Smith" />
            </div>

            <div>
                <label for="email">Email</label>
                <input type="email" v-model="formData.email" id="email" placeholder="you@example.com" />
            </div>

            <div>
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" placeholder="Your message..." />
            </div>

            <div>
                <button type="submit">Submit Form</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    message: '',
})

const submitForm = async () => {
    const { data: responseData } = await useFetch('http://localhost/tutorial-form-handler/index', {
        method: 'post',
        body: { 
          name: formData.value.name,
          email: formData.value.email,
          message: formData.value.message, 
        }
    })

    console.log(responseData.value)
}
</script>