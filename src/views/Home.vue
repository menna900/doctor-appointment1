<template>
  <div>
    <section class="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-6 mb-6 flex flex-col md:flex-row items-center gap-6">
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-2">Book appointments with top doctors</h1>
        <p class="text-slate-600 dark:text-slate-300 mb-4">Search doctors, select a day & time, and confirm your appointment in minutes.</p>
        <router-link to="/doctors" class="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg">Search Doctors</router-link>
      </div>
      <div class="w-full md:w-1/3">
        <img src="https://media.istockphoto.com/id/1459724421/photo/close-up-of-young-asian-woman-doctors-talking-with-the-patient-about-mental-health-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=FTsQxmJw36mA5qrmCWvNrDykbLEeDpUKvEiJ8iKJyiw=" class="rounded-lg shadow-lg" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">Featured doctors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DoctorCard v-for="d in preview" :key="d.id" :doctor="d" />
      </div>
    </section>
  </div>
</template>

<script>
import { doctors } from '../data/doctors'
import DoctorCard from '../components/DoctorCard.vue'

export default {
  components: { DoctorCard },
  data(){ return { preview: doctors.slice(0,6) } }
}
</script>
