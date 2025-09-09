<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold text-center mb-8">Our Doctors</h1>

    <div class="flex gap-3 mb-6">
      <input v-model="query" placeholder="Search by name or specialty" class="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" />
      <select v-model="filter" class="p-2 border rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300">
        <option value="">All specialties</option>
        <option v-for="s in specialties" :key="s">{{ s }}</option>
      </select>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DoctorCard v-for="doc in paginated" :key="doc.id" :doctor="doc" />
    </div>

    <div class="flex justify-center mt-6 gap-2">
      <button @click="page--" :disabled="page<=1" class="px-3 py-1 border rounded">Prev</button>
      <div class="px-3 py-1 border rounded">{{ page }} / {{ totalPages }}</div>
      <button @click="page++" :disabled="page>=totalPages" class="px-3 py-1 border rounded">Next</button>
    </div>
  </div>
</template>

<script>
import { doctors } from '../data/doctors'
import DoctorCard from '../components/DoctorCard.vue'

export default {
  components: { DoctorCard },
  data(){ return { all: doctors, query:'', filter:'', page:1, perPage:6 } },
  computed:{
    specialties(){ return [...new Set(this.all.map(d=>d.specialty))] },
    filtered(){ const q=this.query.trim().toLowerCase(); return this.all.filter(d=>{ const matchQ=!q||d.name.toLowerCase().includes(q)||d.specialty.toLowerCase().includes(q); const matchF = !this.filter || d.specialty===this.filter; return matchQ && matchF }) },
    totalPages(){ return Math.max(1, Math.ceil(this.filtered.length/this.perPage)) },
    paginated(){ const start=(this.page-1)*this.perPage; return this.filtered.slice(start,start+this.perPage) }
  },
  watch:{ filtered(){ this.page=1 } }
}
</script>
