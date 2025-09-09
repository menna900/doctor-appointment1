<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl font-semibold mb-4">Contact</h2>
    <form @submit.prevent="send" class="max-w-xl grid gap-3">
      <input v-model="form.name" placeholder="Name" class="p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" required />
      <input v-model="form.email" type="email" placeholder="Email" class="p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" required />
      <textarea v-model="form.message" placeholder="Message" rows="5" class="p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" required></textarea>
      <div class="flex justify-end">
        <button class="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </div>
    </form>
    <div v-if="sent" class="mt-3 text-green-600">Message sent — thank you!</div>
  </div>
</template>

<script>
export default {
  data(){ return { form:{ name:'', email:'', message:'' }, sent:false } },
  methods:{ send(){ this.sent=true; setTimeout(()=>this.sent=false,3000); this.form={name:'',email:'',message:''} } }
}
</script>