<template>
  <div class="container">
    <NavbarView />
    <Perfumery />
    <FooterView class="footer-view" />
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Perfumery from "../components/Perfumery.vue";

export default {
  name: "PerfumeryView",
  components: {
    NavbarView,
    Perfumery,
    FooterView,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}

.footer-view {
  margin-top: 130px;
}
</style>