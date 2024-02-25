<template>
  <div>
    <NavbarView  @scroll-to-about="handleScrollToAbout"/>
    <div>
    <router-view />
  </div>
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
