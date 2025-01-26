<template>
  <div>
    <NavbarView />
    <Home />
    <FooterView />
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Home from "../components/Home.vue";
export default {
  name: "HomeView",
  components: {
    NavbarView,
    Home,
    FooterView,
  },
};
</script>
