<template>
    <div class="py-20 bg-[#F5F8FD]">
      <div class="max-w-[1080px] mx-auto ">
      <div class="p-4">
        <h2 class="text-4xl font-bold text-center text-[#413e66]">Event</h2>
        <h4 class="text-md text-center">Acara PSS memiliki 5 lomba kesenian, sebagai berikut</h4>
      </div>
      <div class="flex justify-center flex-wrap mt-4 px-2">
        <div v-for="(v, i) in events" :key="i" class="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md w-90 h-90 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-2 my-2">
          <img :src="v.image" :alt="v.name" class="w-full object-cover object-center">
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-800">{{ v.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        events: [
          { name: "Jaipong Tunggal", description: "SD, SMP, dan SMA", image: require('@/assets/images/image1.jpg') },
          { name: "Jaipong Rampak", description: "SD, SMP, dan SMA", image: require('@/assets/images/image1.jpg') },
          { name: "Pupuh", description: "SMP dan SMA", image: require('@/assets/images/image1.jpg') },
          { name: "Sajak", description: "SD dan SMP", image: require('@/assets/images/image1.jpg') },
          { name: "Seni Ibing Pencak Silat", description: "SMP dan SMA", image: require('@/assets/images/image1.jpg') }
        ]
      };
    },
    methods: {
      lihatDetail(lomba) {
        console.log("Melihat detail lomba:", lomba);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling sesuai kebutuhan Anda */
  </style>
  