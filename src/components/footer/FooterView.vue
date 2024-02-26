<template>
    <footer class="bg-[#F5F8FD] text-[#413e66] py-4">
      <div class="max-w-[1080px] mx-auto flex justify-between flex-col md:flex-row gap-4 px-4 items-start">
        <div class="flex items-start w-full md:w-[80%]">
          <div class="w-[50%] hidden md:block">
            <img :src="require('../../../public/icon.png')" alt="Pasanggiri Seni Sunda" class="object-contain mr-2 object-center">
          </div>
          <div>
            <p class="text-lg mb-2"><strong>PSS</strong></p>
            <p class="text-sm">Pasanggiri Seni Sunda (PSS) merupakan suatu kegiatan yang menyelenggarakan perlombaan dalam bidang kesenian terutama seni Sunda. PSS sendiri berupaya melestarikan kebudayaan Daerah Sunda agar tetap terjaga keseniannya</p>
          </div>
        </div>
        <div>
          <p class="text-lg mb-2"><strong>Contact Us:</strong></p>
          <ul>
            <li><a href="tel:+6281234567890" class="text-sm hover:text-gray-400">Phone: +62 812-3456-7890</a></li>
            <li><a href="mailto:info@pasanggiri.com" class="text-sm hover:text-gray-400">Email: info@pasanggiri.com</a></li>
            <li><a href="#" class="text-sm hover:text-gray-400">Address: Jl. Tamansari No. 6-8 Kota Bandung, Jawa Barat Indonesia</a></li>
          </ul>
          <div class="flex gap-2 mt-2">
          <a href="https://www.instagram.com/pasanggiri.lisma/" target="_blank" class="bg-[#413e66] hover:opacity-[0.8] flex w-fit p-2 rounded-full" >
            <img :src="require('@/assets/icons/icon-instagram.png')" width="14px"/>
          </a>
          <a href="#" target="_blank" class="bg-[#413e66] hover:opacity-[0.8] flex w-fit py-1 px-2 items-center rounded-full">
            <img :src="require('@/assets/icons/icon-youtube.png')" width="14px"/>
          </a>
        </div>
        </div>
      </div>
      <div class="max-w-[1080px] mx-auto flex justify-center items-center text-center text-sm mt-4 border-t-2 border-gray-200 pt-2">
        <p class="mr-4">&copy; 2024 <a href="https://www.instagram.com/muhamadjamaludinpad/" target="_blank" class="hover:font-medium">Jamjam</a>. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Komponen footer
  };
  </script>
  
  <style scoped>
  /* Styling sesuai kebutuhan Anda */
  </style>
  