<template>
  <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
    <!-- الصورة أكبر -->
    <img :src="doctor.photo" :alt="doctor.name" class="w-full h-72 object-cover"/>
    
    <div class="p-4">
      <h3 class="font-semibold text-lg">{{ doctor.name }}</h3>
      <div class="text-sm text-slate-500 dark:text-slate-400">{{ doctor.specialty }} • {{ doctor.location }}</div>
      <div class="mt-3 flex gap-2 flex-wrap">
        <span v-for="(s,i) in doctor.slots.slice(0,4)" :key="i" class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{{ s.day }} {{ s.time }}</span>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <router-link :to="{ name: 'Booking', params:{ id: doctor.id } }" class="px-4 py-2 bg-blue-600 text-white rounded">Book</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { doctor: Object }
}
</script>