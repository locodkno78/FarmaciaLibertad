<template>
  <div>
    <NavbarView />
    <Perfumery class="perfumery-container" />
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
.perfumery-container {
  margin-bottom: 60px;
  /* Ajusta este valor según sea necesario */
  margin-left: 2%;
}

.footer-view {
  margin-top: 90px;
  /* Ajusta este valor según sea necesario */
}
</style>