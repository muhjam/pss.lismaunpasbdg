
import { parseAsync } from '@babel/core';

import { parseAsync } from '@babel/core';
<template>
    <div class="max-w-[1080px] mx-auto py-4 px-2 font-bold text-[#413e66]">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-4xl mb-4">Daftar Lomba PSS</h2>
        <form>
        <h5 class="text-2xl mb-4 mt-4">Data Diri Peserta</h5>
          <div class="mb-4">
            <label for="nama_lengkap" class="block text-sm font-medium mb-2">Nama Lengkap</label>
            <input v-model="params.nama_lengkap" type="text" id="nama_lengkap" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff] font-normal">
          </div>
          <div class="mb-4">
            <label for="no_telp" class="block text-sm font-medium mb-2">No Telp/Hp</label>
            <input v-model="params.no_telp" type="text" id="no_telp" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff] font-normal">
          </div>
          <h5 class="text-2xl mb-4 mt-4">Data Sekolah</h5>
          <div class="mb-4">
            <label for="nama_sekolah" class="block text-sm font-medium mb-2">Nama Sekolah</label>
            <input v-model="params.nama_sekolah" type="text" id="nama_sekolah" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff] font-normal">
          </div>
          <div class="mb-4">
            <label for="email_sekolah" class="block text-sm font-medium mb-2">Email Sekolah</label>
            <input v-model="params.email_sekolah" type="text" id="email_sekolah" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff] font-normal">
          </div>
          <div class="mb-4">
            <label for="alamat_sekolah" class="block text-sm font-medium mb-2">Alamat Sekolah</label>
            <textarea
              id="alamat_sekolah"
              v-model="params.alamat_sekolah"
              rows="3"
              class="leading-[25px] block w-full py-[8px] px-[16px] border border-[#e2e8f0] rounded focus:outline focus:outline-[#80bdff] font-normal"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="lembaga" class="block text-sm font-medium mb-2">Lembaga Pelajar</label>
            <div class="flex gap-4">
            <div v-for="(v,i) in lembaga" :key="i" :class="`${v == params.lembaga ? 'bg-[#E1F3FF] text-[#29AAFE] border-[#29AAFE]' : ''} flex gap-2 items-center border border-[#e2e8f0] rounded px-4 py-2 cursor-pointer hover:bg-[#E1F3FF] hover:text-[#29AAFE] hover:border-[#29AAFE]`" @click="setLembaga(v)">
                <img :src="require('@/assets/icons/icon-'+v.toLowerCase()+'.png')" class="w-[20px]"/>
                <h5 class="uppercase">{{ v }}</h5>
            </div>
        </div>
        </div>
        <div class="mb-4 mt-6">
            <label for="daftar_lomba" class="block text-sm font-medium mb-2">Daftar Lomba</label>
            <div class="flex flex-wrap">
            <div v-for="(v,i) in events" :key="i">
            <div v-if="v.required.includes(params.lembaga)"  :class="`${v.name == params.daftar_lomba ? 'bg-[#E1F3FF] text-[#29AAFE] border-[#29AAFE]' : ''} flex gap-2 mr-4 mb-4 items-center border border-[#e2e8f0] rounded px-4 py-2 cursor-pointer hover:bg-[#E1F3FF] hover:text-[#29AAFE] hover:border-[#29AAFE]`" @click="params.daftar_lomba=v.name">
                <img :src="v.image" class="w-[20px]"/>
                <h5 class="uppercase">{{ v.name }}</h5>
            </div>
        </div>
        </div>
        </div>
        <h5 class="text-2xl mb-2 mt-2">Pembayaran</h5>
        <h6>Lakukan pembayaran terlebih dahulu</h6>
        <h6 class="text-sm mb-1 font-light"><span class="font-bold">BCA:</span> 2208204824 a/n Ranca Gigih Pramudhita</h6>
        <h6 class="text-sm mb-4 font-light"><span class="font-bold">BNI:</span> 2208204824 a/n Ranca Gigih Pramudhita</h6>
        <div class="mb-4">
            <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                required
                ref="fileInput"
                id="fileInput"
                class="hidden"
              />
            <label for="fileInput" class="block text-sm font-medium mb-2">Bukti Bayar</label>
            <div class="flex items-center">
            <label for="fileInput" class="block text-sm font-medium mb-2 relative cursor-pointer w-fit hover:opacity-[0.8]">
                <img :src="    previewImage
                        ? previewImage
                        : require('@/assets/images/empty-file-image.svg')"
                    class="w-[150px] h-[150px] object-contain"        
                >
                    <img
                    :src="require('@/assets/icons/icon-plus.svg')"
                    class="mr-[-5px] mb-[-5px] absolute right-0 bottom-0 text-[12px] rounded-full w-[20px] bg-[#0278B7]"
                  />
            </label>
            <span
                v-if="fileSize"
                class="text-[#F92424] text-sm font-light ml-2"
              >
                File size too large
        </span>
        </div>
        <span class="text-sm font-light">
                  Maximum file size: 5Mb
            </span>
          </div>
        <div class="mb-4">
            <label for="judul_tarian" class="block text-sm font-medium mb-2">Judul Tarian</label>
            <input v-model="params.judul_tarian" type="text" id="judul_tarian" class="border border-[#e2e8f0] rounded px-3 py-2 w-full focus:outline focus:outline-[#80bdff] font-normal">
          </div>

          <div class="flex justify-end">
          <button type="button" :disabled="isLoading || isCompleted() == false" :class="`${isLoading || isCompleted() == false ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#413e66] cursor-pointer hover:opacity-[0.8]'}  text-white font-bold py-2 px-4 rounded mt-4 text-end`"  @click="onSubmit">{{ isLoading ? 'Loading...' : 'Daftar' }}</button>
        </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  export default {
    name: "HomeView",
    data() {
    return {
    isLoading: false,
    previewImage: '',
    fileSize: false,
      params:{
        nama_lengkap: '',
        no_telp: '',
        nama_sekolah: '',
        email_sekolah: '',
        alamat_sekolah: '',
        lembaga: 'SD',
        daftar_lomba: 'Jaipong Tunggal', 
        bukti_bayar: 'jewfojewof',
        judul_tarian: '',

      },
      lembaga: ['SD', 'SMP', 'SMA'],
      events: [
          { name: "Jaipong Tunggal", required: ['SD','SMP','SMA'], image: require('@/assets/images/image1.jpg') },
          { name: "Jaipong Rampak", required: ['SD','SMP','SMA'], image: require('@/assets/images/image1.jpg') },
          { name: "Pupuh", required: ['SMP','SMA'], image: require('@/assets/images/image1.jpg') },
          { name: "Sajak", required: ['SD','SMP'], image: require('@/assets/images/image1.jpg') },
          { name: "Seni Ibing Pencak Silat", required: ['SMP','SMA'], image: require('@/assets/images/image1.jpg') }
        ]
    };
  },
   mounted() {
    this.isCompleted();
  },
  methods: {
    setLembaga(lembaga) {
      this.params.lembaga = lembaga;
      if (!this.events.find(event => event.name === this.params.daftar_lomba)?.required.includes(lembaga)) {
        this.params.daftar_lomba = "Jaipong Tunggal";
      }
    },
    isCompleted() {
  return (
    this.params.nama_lengkap &&
    this.params.no_telp &&
    this.params.nama_sekolah &&
    this.params.email_sekolah &&
    this.params.judul_tarian &&
    this.params.lembaga &&
    this.params.daftar_lomba &&
    !this.fileSize
  );
},

async handleImageUpload(event) {
  const file = event.target.files[0];
  if (file && file.size && file.size <= 5600000) {
    this.previewImage = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Panggil aksi Vuex untuk mengunggah gambar
      const response = await this.$store.dispatch('postImage', formData);
      console.log('Response from Imgur:', response);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  } else if (file.size > 5600000) {
    this.fileSize = true;
  }
},
async onSubmit ()
    {
      this.isLoading = true;
      const phonePattern =  /^[0-9\s]*$/;
      const isValidPhone = phonePattern.test( this.params.no_telp);
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test( this.params.email_sekolah ); 

      if ( !isValidPhone )
      {
        Swal.fire({
          title: "Perhatikan!",
          text: "Nomor telepon hanya dapat berupa angka!",
          icon: "error"
        });
      }

       if ( !isValidEmail )
      {
        Swal.fire({
          title: "Perhatikan!",
          text: "Format email tidak sesuai!",
          icon: "error"
        });
      }
      if(isValidPhone && isValidEmail){
        try{
          await this.$store.dispatch( "postData", this.params );
          Swal.fire({
          title: "Terkirim!",
          text: "Selamat anda berhasil mengirim data, tunggu konfirmasi melalui whatsapp!",
          icon: "success"
        }).then(() => {
            this.$router.push("/").then(() => {
              setTimeout(() => {
                window.location.reload(true);
              }, 0);
            });
          });

        }catch(err){
          Swal.fire({
          title: "Gagal!",
          text: "Coba kirim ulang untuk beberapa waktu!",
          icon: "error"
        });
        }finally{
          this.isLoading = false;
        }
        }
        this.isLoading = false;
    },

  },
  };
  </script>
  