<template>
    <div class="max-w-[1080px] mx-auto p-4 font-bold text-[#413e66]">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-4xl mb-4">Daftar Lomba PSS</h2>
        <h3>Lakukan pembayaran terlebih dahulu</h3>
        <h4 class="text-sm mb-1 font-light"><span class="font-bold">BCA:</span> 2208204824 a/n Ranca Gigih Pramudhita</h4>
        <h4 class="text-sm mb-4 font-light"><span class="font-bold">BNI:</span> 2208204824 a/n Ranca Gigih Pramudhita</h4>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-2">Nama Lengkap</label>
            <input type="text" id="name" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff]">
          </div>
          <div class="mb-4">
            <label for="whatsapp" class="block text-sm font-medium mb-2">No Whatsapp</label>
            <input type="text" id="whatsapp" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff]">
          </div>
          <div class="mb-4">
            <label for="status" class="block text-sm font-medium mb-2">Status Pelajar</label>
            <div class="flex gap-4">
            <div v-for="(v,i) in status" :key="i" class="flex gap-2 items-center border border-[#413e66] rounded px-4 py-2 cursor-pointer">
                <img :src="require('@/assets/icons/icon-'+v+'.png')" class="w-[20px]"/>
                <h5 class="uppercase">{{ v }}</h5>
            </div>
        </div>
        </div>
        <div class="mb-4">
            <label for="status" class="block text-sm font-medium mb-2">Daftar Lomba</label>
            <div class="flex gap-4">
            <div v-for="(v,i) in events" :key="i" class="flex gap-2 items-center border border-[#413e66] rounded px-4 py-2 cursor-pointer">
                <img :src="v.image" class="w-[20px]"/>
                <h5 class="uppercase">{{ v.name }}</h5>
            </div>
        </div>
        </div>
          <!-- Tambahkan input lainnya sesuai kebutuhan -->
          <button type="submit" class="bg-[#413e66] text-white font-bold py-2 px-4 rounded">Daftar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
    data() {
    return {
      status: ['sd', 'smp', 'sma'],
      events: [
          { name: "Jaipong Tunggal", required: ['sd','smp','sma'], image: require('@/assets/images/image1.jpg') },
          { name: "Jaipong Rampak", required: ['sd','smp','sma'], image: require('@/assets/images/image1.jpg') },
          { name: "Pupuh", required: ['smp','sma'], image: require('@/assets/images/image1.jpg') },
          { name: "Sajak", required: ['sd','smp'], image: require('@/assets/images/image1.jpg') },
          { name: "Seni Ibing Pencak Silat", required: ['smp','sma'], image: require('@/assets/images/image1.jpg') }
        ]
    };
  },
  };
  </script>
  