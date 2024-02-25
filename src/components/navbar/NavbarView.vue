<template>
  <nav class="fixed stick py-4 px-2 z-20 bg-white w-full">
    <transition name="slide">
            <ul v-if="isMenuOpen" class="md:hidden fixed top-0 left-0 mr-10 z-10 w-[250px] sm:w-[400px] h-[100vh]  bg-opacity-80 bg-white shadow-lg pt-5">
              <li class="py-2">
                <a @click="navigateTo('home')" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400 uppercase">Home</a>
              </li>
              <li class="mr-4">
                <a  @click="navigateTo('about')" class="cursor-pointer block px-4 py-2 font-medium hover:text-gray-400" >About Us</a>
              </li>
              <li class="py-2">
                <a @click="navigateTo('event')" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400 uppercase">Event</a>
              </li>
              <li class="py-2">
                <a @click="navigateTo('coordinator')" class="block px-4 py-2 text-[#413e66] font-medium hover:text-gray-400 uppercase">Coordinator</a>
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
            <a @click="navigateTo('home')" :class="`${ isHomeSectionInView ? 'text-[#FF3D00]' : 'text-[#413e66]' } cursor-pointer font-medium hover:text-[#FF3D00] uppercase`">Home</a>
          </li>
          <li class="mr-4">
            <a @click="navigateTo('about')" :class="`${ isAboutSectionInView ? 'text-[#FF3D00]' : 'text-[#413e66]' } cursor-pointer font-medium transition-colors duration-300 hover:text-[#FF3D00] uppercase`">About Us</a>
          </li>
          <li class="mr-4">
            <a @click="navigateTo('event')" :class="`${ isEventSectionInView ? 'text-[#FF3D00]' : 'text-[#413e66]' } cursor-pointer font-medium hover:text-[#FF3D00] uppercase`">Event</a>
          </li>
          <li>
            <a @click="navigateTo('coordinator')" class="cursor-pointer text-[#413e66] font-medium hover:text-[#FF3D00] uppercase">Coordinator</a>
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
      isMenuOpen: false,
      activeTab: '',
      isHomeSectionInView: false,
      isAboutSectionInView: false,
      isEventSectionInView: false,
      isCommitteeSectionInView: false,
    };
  },
  mounted() {
    const options = {
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(this.handleIntersection, options);
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const eventSection = document.getElementById('event');
    const coordinatorSection = document.getElementById('coordinator');

    observer.observe(homeSection);
    observer.observe(aboutSection);
    observer.observe(eventSection);
    observer.observe(coordinatorSection);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch(entry.target.id) {
            case 'home':
              this.isHomeSectionInView = true;
              break;
            case 'about':
              this.isAboutSectionInView = true;
              break;
            case 'event':
              this.isEventSectionInView = true;
              break;
            case 'coordinator':
              this.isContactSectionInView = true;
              break;
            default:
              break;
          }
        } else {
          switch(entry.target.id) {
            case 'home':
              this.isHomeSectionInView = false;
              break;
            case 'about':
              this.isAboutSectionInView = false;
              break;
            case 'event':
              this.isEventSectionInView = false;
              break;
            case 'coordinator':
              this.isCoordinatorSectionInView = false;
              break;
            default:
              break;
          }
        }
      });
    },
    
    navigateTo(tab) {
      // Metode untuk menavigasi ke bagian yang sesuai dan menandai elemen navbar yang sedang aktif
      this.activeTab = tab;
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
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
