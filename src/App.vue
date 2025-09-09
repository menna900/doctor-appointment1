<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Navbar -->
      <header class="flex items-center justify-between py-4 relative">
        <router-link to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">TD</div>
          <div>
            <div class="font-semibold">TopDoc</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Book with top doctors</div>
          </div>
        </router-link>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-4">
          <router-link to="/" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Home</router-link>
          <router-link to="/doctors" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Doctors</router-link>
          <router-link to="/my-appointments" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">My Appointments</router-link>
          <router-link to="/contact" class="text-slate-700 dark:text-slate-200 hover:text-blue-600">Contact</router-link>
          <div class="text-slate-700 dark:text-slate-200 hover:text-blue-600">
            <router-link to="/doctor-login" class="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">Doctor Login</router-link>
          </div>
          <!-- Dark mode toggle -->
          <button @click="toggleTheme" class="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700 z-50 relative">🌓</button>
        </nav>

        <!-- Mobile -->
        <div class="md:hidden">
          <button @click="mobile=!mobile" class="p-2 bg-slate-100 dark:bg-slate-700 rounded z-50 relative">
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
            <!-- Dark mode toggle inside mobile menu -->
            <button @click="toggleTheme" class="mt-2 w-full px-3 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200">🌓 Toggle Theme</button>
          </div>
        </div>
      </header>
      
      <!-- Main content -->
      <main class="py-8">
        <router-view />
      </main>

      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-slate-500 dark:text-slate-400">© 2025 TopDoc</footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('td_theme', isDark ? 'dark' : 'light');
    }
  }
}
</script>