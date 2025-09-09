import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'
import Booking from '../views/Booking.vue'
import MyAppointments from '../views/MyAppointments.vue'
import Contact from '../views/Contact.vue'
import DoctorLogin from '../views/DoctorLogin.vue'
import DoctorDashboard from '../views/DoctorDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/doctors', name: 'Doctors', component: Doctors },
  { path: '/booking/:id', name: 'Booking', component: Booking, props: true },
  { path: '/my-appointments', name: 'MyAppointments', component: MyAppointments },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/doctor-login', name: 'DoctorLogin', component: DoctorLogin },
  { path: '/doctor-dashboard', name: 'DoctorDashboard', component: DoctorDashboard }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
