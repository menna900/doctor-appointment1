<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl font-semibold mb-4">Doctor Dashboard</h2>
    <div class="flex items-center justify-between mb-4">
      <div>Welcome, {{ doctorEmail }}</div>
      <button @click="logout" class="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
    </div>

    <div v-if="appointments.length" class="overflow-x-auto bg-white dark:bg-slate-800 p-3 rounded-xl">
      <table class="w-full text-sm">
        <thead><tr class="text-left text-slate-500"><th>Patient</th><th>Doctor</th><th>Slot</th><th>Phone</th><th>Email</th></tr></thead>
        <tbody>
          <tr v-for="a in appointments" :key="a.id" class="border-t">
            <td>{{ a.patientName }}</td>
            <td>{{ a.doctorName }}</td>
            <td>{{ a.slot }}</td>
            <td>{{ a.phone }}</td>
            <td>{{ a.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-slate-500">No bookings yet.</div>
  </div>
</template>

<script>
import { loadAppointments } from '../services/storage'

export default {
  data(){
    const auth = localStorage.getItem('doctor_auth')
    return { appointments: loadAppointments(), doctorEmail: auth ? JSON.parse(auth).email : '' }
  },
  methods:{
    logout(){ localStorage.removeItem('doctor_auth'); this.$router.push({ name: 'Home' }) }
  }
}
</script>