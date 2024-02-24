<template>
    <div class="relative">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/image${index + 1}.jpg`)" :alt="`Image ${index + 1}`" class="w-full h-full object-cover" :class="{ 'hidden': activeImage !== index + 1 }">
      </div>
      <button @click="prevImage" class="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-l-md">Prev</button>
      <button @click="nextImage" class="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-r-md">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeImage: 1,
        images: [1, 2, 3],
        intervalId: null
      };
    },
    mounted() {
      this.intervalId = setInterval(this.nextImage, 5000);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    },
    methods: {
      nextImage() {
        this.activeImage = (this.activeImage % this.images.length) + 1;
      },
      prevImage() {
        this.activeImage = (this.activeImage - 2 + this.images.length) % this.images.length + 1;
      }
    }
  };
  </script>
  