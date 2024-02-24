<template>
  <div>
    <template>
      <NavbarView />
    </template>
    <div
    class="w-full h-full pt-[200px] align-middle text-center"
    >
      <div class="mb-4 text-2xl">
        404
      </div>
      <div class="text-xl">
        Ups... Halaman tidak ditemukan ;
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from "@/components/navbar/NavbarView.vue";

export default {
  metaInfo: {
    title: "Page Not Found",
    titleTemplate: "Devcode - %s",
  },
  name: "PageNotFound",
  components: {
    NavbarView,
  },
};
</script>
