<script setup lang="ts">
    import Input from "./Input.vue"
    import Select from "./Select.vue"
    import { ref } from "vue"

    const form = ref({
        name: "",
        email: "",
        phone: "",
        code: "+855",
        message: ""
    })

    const errors = ref({
        name: false,
        email: false,
        phone: false,
        message: false
    })

    function formatPhone(){
    let input = form.value.phone.replace(/\D/g,"")
    form.value.phone = input.match(/.{1,3}/g)?.join(" ") || ""
    }

    function validate(){
    errors.value.name = !form.value.name.trim()
    errors.value.email = !form.value.email.trim()
    errors.value.phone = !form.value.phone.trim()
    errors.value.message = !form.value.message.trim()

    return !Object.values(errors.value).includes(true)
    }

async function submitForm() {
//   if (!validate()) return;

  try {
    const res = await $fetch("/api/contact", {
    method: "POST",
    body: form.value
    });

    if (res.success) {
      alert("Message sent successfully!");
      form.value = { name: "", email: "", phone: "", code: "+855", message: "" };
    } else {
      alert(res.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
}
</script>

<template>
    <section class="w-full relative px-10 h-auto mb-5 font-roman">
        <form @submit.prevent="submitForm" class="grid pt-5 w-full lg:pl-16 max-w-4xl gap-5 mx-auto grid-cols-1">
            <div class="lg:mb-5 mt-4 w-fit">
                <div class="flex justify-center">
                    <div class="bg-darkCyan w-[140px] h-[3px]"></div>
                </div>
                <h1 class="py-5 2xl:text-4xl lg:text-3xl text-2xl text-darkCyan">SEND US A MESSAGE</h1>
            </div>

            <div class="grid lg:grid-cols-2 gap-5">
                <!-- NAME -->
                <Input v-model="form.name" name="name" :error="errors.name" label="FULL NAME" />

                <!-- PHONE -->
                <Select v-model="form.phone" v-model:code="form.code" codeName="code" phoneName="phone"/>
                <input v-model="form.phone" type="hidden"  class="w-full rounded-md px-2 border border-darkCyan":class="{ 'border-red-500': errors.email }"/>
            </div>

            <!-- EMAIL -->
            <div>
                <Input v-model="form.email" type="email" :error="errors.email" label="EMAIL" />
            </div>

            <!-- MESSAGE -->
            <div>
                <label class="text-darkCyan text-2xl">YOUR MESSAGE</label>

               <textarea
                v-model="form.message"
                rows="6"
                class="w-full rounded-md px-3 border border-darkCyan"
                :class="{ 'border-red-500': errors.message }"
                ></textarea>
            </div>

            <div class="flex justify-start overflow-hidden">
               <button type="submit" class="text-slate-50 px-5 py-2 flex items-center overflow-hidden p-1 border hover:border-darkCyan hover:bg-transparent hover:text-darkCyan duration-150 bg-darkCyan uppercase lg:text-lg text-sm">
                    SEND MESSAGE
                </button>    
            </div>

        </form>
    </section>
</template>