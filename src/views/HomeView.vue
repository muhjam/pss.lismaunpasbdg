<template>
	<div class="w-full">
		<HeaderView/>
		<ListRegister/>
	</div>
  </template>
  
  <script>
  import HeaderView from "@/components/header/HeaderView.vue";
  import ListRegister from "@/components/content/ListRegister.vue";

  export default {
	name: "HomeView",
	components: {
		HeaderView,
		ListRegister,
	},
	mounted() {},
	computed: {},
  };
  </script>
  