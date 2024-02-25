<template>
    <div class="max-w-[1080px] mx-auto py-20 flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-[50%]">
        <!-- Menambahkan kelas "hover:scale-105" untuk memberikan efek membesar saat dihover -->
        <img :src="require('@/assets/pss.png')" class="w-90 hover:scale-105"/>
      </div>
      <div class="p-4 w-full md:w-[50%]">
        <h2 class="text-4xl font-bold text-[#413e66]">About Us</h2>
        <h3 class="text-xl text-[#696592] my-2"><i>Pasanggiri Seni Sunda, Universitas Pasundan</i></h3>
        <p>Pasanggiri Seni Sunda (PSS) merupakan suatu kegiatan yang menyelenggarakan perlombaan dalam bidang kesenian terutama seni Sunda. PSS sendiri berupaya melestarikan kebudayaan Daerah Sunda agar tetap terjaga keseniannya. <br/><br/>

Kegiatan Pasanggiri Seni Sunda (PSS) yang di selenggarakan oleh Lingkung Seni Mahasiswa (LISMA)  Universitas Pasundan Bandung telah rutin diselenggarakan sebanyak 15 kali. Tahun ini, LISMA kembali mengadakan PSS yang ke-16. <br/><br/>

Lingkung Seni Mahasiswa merupakan Unit Kegiatan Mahasiswa (UKM) di Universitas Pasundan yang bergerak di bidang seni.  Kami berkomitmen untuk melestarikan kebudayaan khususnya di Daerah Sunda salah satunya dengan mengadakan kembali Pasanggiri Seni Sunda yang ke-16 tingkat SD, SMP dan SMA se-Jawa Barat.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .hover\:scale-105:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  
  .hover\:scale-105 {
    transition: transform 0.3s ease;
  }
  </style>
  