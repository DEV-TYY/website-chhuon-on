<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { SweetAlert } from './SweetAlert'

const { showAlert } = SweetAlert()

// Form data
const form = reactive({
    name: '',
    phone: '',
    code: '+855',
    email: '',
    message: ''
})

// Errors
const errors = reactive({
    name: '',
    phone: '',
    email: '',
    message: ''
})

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorMessage = ref('')

// Simple validation function
function validate() {
    let valid = true

    errors.name = form.name.trim() === '' ? 'Name is required' : ''
    errors.phone = form.phone.trim() === '' ? 'Phone is required' : ''
    errors.email = form.email.trim() === '' ? 'Email is required' : ''
    errors.message = form.message.trim() === '' ? 'Message is required' : ''


    return valid
}

// Handle form submit
async function handleSubmit() {
    if (!validate()) return // Stop submission if errors exist

    status.value = 'sending'
    errorMessage.value = ''

    try {
        const templateParams = {
            name: form.name,
            email: form.email,
            code: form.code,
            phone: form.phone,
            message: form.message
        }

        await emailjs.send(
            'service_96unqrf',
            'template_s1f4ehw',
            templateParams,
            '1lvBFDUK7FZvQw8OE'
        )

        status.value = 'sent'

        // Clear form
        form.name = ''
        form.phone = ''
        form.code = '+855'
        form.email = ''
        form.message = ''

        showAlert('success', "Message send sucesfully")

    } catch (err: any) {
        status.value = 'error'
        errorMessage.value = 'Failed to send message'
        console.error(err)
    }
}
</script>


<template>
    <section class="w-full relative px-10 h-auto mb-5 font-roman lg:mt-56 mt-40">
        <form @submit.prevent="handleSubmit" class="grid pt-5 w-full lg:pl-16 max-w-4xl gap-5 mx-auto grid-cols-1">
            <div class="lg:mb-5 mt-4 w-fit">
                <div class="flex justify-center">
                    <div class="bg-darkCyan w-[140px] h-[3px]"></div>
                </div>
                <h1 class="py-5 2xl:text-4xl lg:text-3xl text-2xl text-darkCyan">SEND US A MESSAGE</h1>
            </div>

            <div class="grid lg:grid-cols-2 gap-5">
                <!-- NAME -->
                <Input v-model="form.name" id="name" name="name" label="FULL NAME" :error="!!errors.name" />

                <!-- PHONE -->
                <Select v-model="form.phone" v-model:code="form.code" codeName="code" phoneName="phone" />
            </div>

            <!-- EMAIL -->
            <div>
                <Input v-model="form.email" type="email" label="EMAIL" :error="!!errors.email" />
            </div>

            <!-- MESSAGE -->
            <div>
                <label class="text-darkCyan text-2xl">YOUR MESSAGE</label>

               <textarea
                v-model="form.message"
                cols="30" rows="13" class="text-left text-amber rounded-md px-3 w-full bg-transparent border py-2 font-roman placeholder:text-amber text-lg focus:outline-none lg:border-b-2 border-b border-darkCyan outline-none "
                :class="!!errors.message ? 'border-red-500' : 'border-darkCyan'"
                ></textarea>
            </div>

            <div class="flex justify-start overflow-hidden">
               <button type="submit" class="text-slate-50 cursor-pointer px-5 py-2 flex items-center overflow-hidden p-1 border hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 bg-darkCyan uppercase lg:text-lg text-sm">
                    SEND MESSAGE
                </button>
            </div>

        </form>
    </section>
</template>