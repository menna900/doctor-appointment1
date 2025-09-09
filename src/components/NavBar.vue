<template>
  <header class="flex items-center justify-between py-4">
    <router-link to="/" class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">TD</div>
      <div>
        <div class="font-semibold">TopDoc</div>
        <div class="text-xs text-slate-500 dark:text-slate-400">Book with top doctors</div>
      </div>
    </router-link>

    <nav class="hidden md:flex items-center gap-4">
      <router-link to="/" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Home</router-link>
      <router-link to="/doctors" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Doctors</router-link>
      <router-link to="/my-appointments" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">My Appointments</router-link>
      <router-link to="/contact" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Contact</router-link>
      <div class="text-slate-700 dark:text-slate-200 hover:text-blue-600">
        <router-link to="/doctor-login" class="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">Doctor Login</router-link>
      </div>
      <button @click="$emit('toggleTheme')" class="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">🌓</button>
    </nav>

    <!-- mobile -->
    <div class="md:hidden relative">
      <button @click="mobile=!mobile" class="p-2 bg-slate-100 dark:bg-slate-700 rounded">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-width="2"/>
        </svg>
      </button>

      <div v-if="mobile" class="fixed right-4 top-16 bg-white dark:bg-gray-700 p-3 rounded shadow w-48 text-slate-900 dark:text-slate-200 z-50">
        <router-link @click.native="mobile=false" to="/" class="block py-1 hover:bg-slate-100 dark:hover:bg-slate-600 rounded px-2">Home</router-link>
        <router-link @click.native="mobile=false" to="/doctors" class="block py-1 hover:bg-slate-100 dark:hover:bg-slate-600 rounded px-2">Doctors</router-link>
        <router-link @click.native="mobile=false" to="/my-appointments" class="block py-1 hover:bg-slate-100 dark:hover:bg-slate-600 rounded px-2">My Appointments</router-link>
        <router-link @click.native="mobile=false" to="/contact" class="block py-1 hover:bg-slate-100 dark:hover:bg-slate-600 rounded px-2">Contact</router-link>
        <div class="mt-2 border-t border-slate-300 dark:border-slate-600 pt-2">
          <router-link @click.native="mobile=false" to="/doctor-login" class="block py-1 hover:bg-slate-100 dark:hover:bg-slate-600 rounded px-2">Doctor Login</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      mobile: false
    }
  }
}
</script>