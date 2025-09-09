<template>
  <div
    class="login-container focus:outline-none focus:ring-2 focus:ring-blue-500
           bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
  >
    <h2 class="text-2xl font-semibold mb-4">Doctor Login</h2>

    <form @submit.prevent="handleLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500
               bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="w-full px-4 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500
               bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
      />
      <button type="submit" class="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Login
      </button>
    </form>

    <p v-if="loading" class="mt-2 text-blue-600">⏳ Loading...</p>
    <p v-if="error" class="error mt-2">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.error = "";
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        // بيانات افتراضية للدخول
        const validEmail = "doctor@test.com";
        const validPassword = "123456";

        if (this.email === validEmail && this.password === validPassword) {
          this.$router.push("/doctor-dashboard"); // صفحة الداشبورد للدكتور
        } else {
          this.error = "❌ The email or password is incorrect.";
        }
      }, 2000); // Loading demo
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 60px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: inherit;
  color: inherit;
}
button {
  width: 100%;
  padding: 10px;
  background: #0077ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #005bb5;
}
.error {
  margin-top: 10px;
  color: red;
}
</style>