<template>
    <div class="py-[40px] bg-[#2d2b46]">
      <div class="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-center gap-6 md:justify-between items-center">
        <div>
        <h2 class="text-2xl font-bold text-white text-center md:text-start">Pendaftaran Lomba PSS</h2>
        <h4 class="font-medium uppercase text-white text-center md:text-start">Udah dibuka nih!</h4>
      </div>
      <div>
        <router-link to="/daftar" class="border-2 border-white text-white text-xl font-semibold px-4 py-2 hover:opacity-[0.8]">Daftar ah</router-link>
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
  