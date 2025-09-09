<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Book Appointment</h1>

    <div v-if="doctor" class="bg-white dark:bg-slate-800 p-6 rounded shadow-md">
      <div class="flex gap-4 items-center mb-4">
        <img :src="doctor.photo" class="w-28 h-28 rounded object-cover"/>
        <div>
          <h3 class="text-lg font-semibold">{{ doctor.name }}</h3>
          <div class="text-sm text-slate-500 dark:text-slate-400">{{ doctor.specialty }} • {{ doctor.location }}</div>
        </div>
      </div>

      <form @submit.prevent="submitBooking" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="patientName" required placeholder="Your name" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" />
        <input v-model="phone" required placeholder="Phone" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" />
        <input v-model="email" required type="email" placeholder="Email" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300" />
        <select v-model="selectedSlot" required class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500
         bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300">
          <option disabled value="">-- Select Day & Time --</option>
          <option v-for="(s,i) in doctor.slots" :key="i" :value="`${s.day} ${s.time}`">{{ s.day }} - {{ s.time }}</option>
        </select>

        <div class="col-span-1 md:col-span-2 flex justify-end gap-2">
          <button type="button" @click="$router.back()" class="px-4 py-2 border rounded">Back</button>
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Confirm Booking</button>
        </div>
      </form>

      <div v-if="message" class="mt-4 text-green-600">{{ message }}</div>
    </div>

    <div v-else class="text-red-500">Doctor not found</div>
  </div>
</template>

<script>
import { doctors } from '../data/doctors'
import { addAppointment } from '../services/storage'

export default {
  data(){
    const doc = doctors.find(d=>String(d.id)===String(this.$route.params.id))
    return { doctor: doc || null, patientName:'', phone:'', email:'', selectedSlot:'', message:'' }
  },
  methods:{
    submitBooking(){
      if(!this.selectedSlot) { alert('Select a slot'); return }
      const appt = {
        id: Date.now().toString(),
        doctorId: this.doctor.id,
        doctorName: this.doctor.name,
        specialty: this.doctor.specialty,
        patientName: this.patientName,
        phone: this.phone,
        email: this.email,
        slot: this.selectedSlot
      }
      addAppointment(appt)
      // remove selected slot locally for immediate UX
      const idx = doctors.findIndex(d=>d.id===this.doctor.id)
      if(idx>-1){
        const sidx = doctors[idx].slots.findIndex(s => `${s.day} ${s.time}` === this.selectedSlot)
        if(sidx>-1) doctors[idx].slots.splice(sidx,1)
      }
      this.message = `Booked: ${this.selectedSlot} with ${this.doctor.name}`
      setTimeout(()=> this.$router.push('/my-appointments'), 800)
    }
  }
}
</script>
