<template>
  <nav class="py-4 px-2">
    <transition name="slide">
            <ul v-if="isMenuOpen" class="md:hidden fixed top-0 left-0 mr-10 z-10 w-[250px] sm:w-[400px] h-[100vh]  bg-opacity-80 bg-white shadow-lg pt-5">
              <li class="py-2">
                <a href="#" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400">Home</a>
              </li>
              <li class="py-2">
                <a href="#" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400">About</a>
              </li>
              <li class="py-2">
                <a href="#" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400">Daftar</a>
              </li>
              <li class="py-2">
                <a href="#" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </transition>
    <div class="max-w-[1200px] mx-auto">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img :src="require('../../../public/icon.png')" alt="Pasanggiri Seni Sunda" class="w-[50px] mr-2">
          <h1 class="text-[#FF3D00] text-lg font-semibold">Pasanggiri Seni Sunda</h1>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="block text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none">
            <svg class="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h16M6 12h16M6 18h16"></path>
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex">
          <li class="mr-4">
            <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">Home</a>
          </li>
          <li class="mr-4">
            <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">About</a>
          </li>
          <li class="mr-4">
            <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">Daftar</a>
          </li>
          <li>
            <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
