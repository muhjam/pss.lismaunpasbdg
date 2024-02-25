<template>
  <div>
    <NavbarView  @scroll-to-about="handleScrollToAbout"/>
    <router-view />
   <FooterView/>
  </div>
</template>

<script>
import NavbarView from "@/components/navbar/NavbarView.vue";
import FooterView from "@/components/footer/FooterView.vue";

export default {
  name: "LayoutDashboard",
  components: {
    NavbarView,
    FooterView,
},
  computed: {
  },
  methods: {
  },
};
</script>
