<template>
    <div class="max-w-[1080px] mx-auto py-4">
      <div class="py-2">
        <h2 class="text-4xl font-bold text-center text-[#413e66]">Daftar</h2>
        <h4 class="text-md text-center">Acara PSS memiliki 5 lomba kesenian, sebagai berikut</h4>
      </div>
      <div class="flex justify-center flex-wrap mt-4 px-2">
        <div v-for="(lomba, index) in daftarLomba" :key="index" class="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md w-90 h-90 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-2 my-2">
          <img :src="lomba.gambar" :alt="lomba.nama" class="w-full object-cover object-center">
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-800">{{ lomba.nama }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ lomba.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        daftarLomba: [
          { nama: "Jaipong Tunggal", deskripsi: "SD, SMP, dan SMA", gambar: require('@/assets/images/image1.jpg') },
          { nama: "Jaipong Rampak", deskripsi: "SD, SMP, dan SMA", gambar: require('@/assets/images/image1.jpg') },
          { nama: "Pupuh", deskripsi: "SMP dan SMA", gambar: require('@/assets/images/image1.jpg') },
          { nama: "Sajak", deskripsi: "SD dan SMP", gambar: require('@/assets/images/image1.jpg') },
          { nama: "Seni Ibing Pencak Silat", deskripsi: "SMP dan SMA", gambar: require('@/assets/images/image1.jpg') }
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
  