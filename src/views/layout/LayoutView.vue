<template>
  <div>
    <NavbarHome v-if="currentUrl == '/'"/>
    <NavbarView v-else/>
    <div>
    <router-view />
  </div>
   <FooterView/>
  </div>
</template>

<script>
import NavbarHome from "@/components/navbar/NavbarHome.vue";
import NavbarView from "@/components/navbar/NavbarView.vue";
import FooterView from "@/components/footer/FooterView.vue";

export default {
  name: "LayoutDashboard",
  components: {
    NavbarHome,
    NavbarView,
    FooterView,
},
  computed: {
    currentUrl() {
      return this.$route.fullPath;
    },
  },
  methods: {
  },
};
</script>
