<template>
  <div>
    <NavbarView
    />
    <div class="h-full">
      <div
      class="py-[5px] max-w-[1080px] mx-auto px-[1em]"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/navbar/NavbarView.vue";

export default {
  name: "LayoutDashboard",
  components: {
    NavbarView,
  },
  computed: {
  },
  methods: {
  },
};
</script>
