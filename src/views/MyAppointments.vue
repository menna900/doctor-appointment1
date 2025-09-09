<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl font-semibold mb-4">My Appointments</h2>
    <div v-if="appointments.length" class="space-y-3">
      <div v-for="a in appointments" :key="a.id" class="bg-white dark:bg-slate-800 p-4 rounded-xl flex justify-between items-center">
        <div>
          <div class="font-semibold">{{ a.doctorName }} — {{ a.slot }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">{{ a.patientName }} • {{ a.phone }} • {{ a.email }}</div>
        </div>
        <div>
          <button @click="cancel(a.id)" class="px-3 py-1 rounded bg-red-500 text-white">Cancel</button>
        </div>
      </div>
    </div>
    <div v-else class="text-slate-500">No appointments yet.</div>
  </div>
</template>

<script>
import { loadAppointments, saveAppointments } from '../services/storage'

export default {
  data(){ return { appointments: loadAppointments() } },
  methods:{
    cancel(id){
      if(!confirm('Cancel appointment?')) return
      this.appointments = this.appointments.filter(a => a.id !== id)
      saveAppointments(this.appointments)
      alert('Cancelled')
    }
  }
}
</script>

