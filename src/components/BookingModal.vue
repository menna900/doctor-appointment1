<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white dark:bg-slate-800 rounded-xl w-full max-w-2xl p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold">احجز مع {{ doctor.name }}</h3>
        <button @click="$emit('close')" class="text-slate-500">✕</button>
      </div>

      <form @submit.prevent="submit" class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="col-span-2 md:col-span-1">
          <label class="block text-sm">الاسم</label>
          <input v-model="form.name" required class="w-full rounded-md p-2 border" />
        </div>
        <div>
          <label class="block text-sm">الهاتف</label>
          <input v-model="form.phone" required pattern="[0-9+\- ]+" class="w-full rounded-md p-2 border" />
        </div>
        <div>
          <label class="block text-sm">الإيميل</label>
          <input v-model="form.email" required type="email" class="w-full rounded-md p-2 border" />
        </div>

        <div>
          <label class="block text-sm">التاريخ</label>
          <input v-model="form.date" type="date" required class="w-full rounded-md p-2 border" />
        </div>
        <div>
          <label class="block text-sm">الوقت</label>
          <select v-model="form.time" required class="w-full rounded-md p-2 border">
            <option v-for="s in slots" :key="s">{{ s }}</option>
          </select>
        </div>

        <div class="col-span-2 flex gap-2 justify-end">
          <button type="button" @click="$emit('close')" class="px-4 py-2 rounded border">إلغاء</button>
          <button type="submit" class="px-4 py-2 rounded bg-green-500 text-white">تأكيد الحجز</button>
        </div>
      </form>

      <div v-if="message" class="mt-3 text-sm text-green-600">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import { loadAppointments, saveAppointments } from '../services/storage'
import { doctors } from '../data/doctors'
export default {
  props:{ doctor:Object },
  data(){ return { form:{ name:'', phone:'', email:'', date:'', time: (this.doctor?.slots[0]||'') }, message:'', slots: this.doctor?.slots || [] } },
  methods:{ submit(){
      const list = loadAppointments()
      const appt = { id: Date.now().toString(), doctorId: this.doctor.id, doctorName: this.doctor.name, date: this.form.date, time: this.form.time, name: this.form.name, phone: this.form.phone, email: this.form.email }
      list.push(appt)
      saveAppointments(list)
      // remove slot from local doctors list for UX
      const idx = doctors.findIndex(d=>d.id===this.doctor.id)
      if(idx>-1){ const si = doctors[idx].slots.indexOf(this.form.time); if(si>-1) doctors[idx].slots.splice(si,1) }
      this.message =` تم الحجز بنجاح ${this.form.date} — ${this.form.time}`
      this.$emit('booked')
    }
  }
}
</script>
