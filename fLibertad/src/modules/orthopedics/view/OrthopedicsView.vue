<template>
  <div>
    <NavbarView />
    <Orthopedics class="orthopedics-container" />
    <FooterView class="footer-view" />
    <WhatsAppView />
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Orthopedics from "../components/Orthopedics.vue";

export default {
  name: "OrthopedicsView",
  components: {
    NavbarView,
    Orthopedics,
    WhatsAppView,
    FooterView,
  },
};
</script>

<style scoped>
.orthopedics-container {
  margin-bottom: 60px;
  /* Ajusta este valor según sea necesario */
  margin-left: 2%;
}

.footer-view {
  margin-top: 90px;
  /* Ajusta este valor según sea necesario */
}
</style>