<template>
 <nav class="py-4">
  <div class="max-w-[1200px] mx-auto">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img :src="require('../../../public/icon.png')" alt="Pasanggiri Seni Sunda" class="w-[50px] mr-2">
        <h1 class="text-[#FF3D00] text-lg font-semibold">Pasanggiri Seni Sunda</h1>
      </div>
      <ul class="flex">
        <li class="mr-4">
          <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">Home</a>
        </li>
        <li class="mr-4">
          <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">About</a>
        </li>
        <li class="mr-4">
          <a href="#" class="text-[#413e66] font-medium hover:text-gray-400">Services</a>
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
	props: {
	},
	mounted() {
	},
	methods: {}
};
</script>
