<template>
  <div class="container">
    <NavbarView />
    <Recets />
    <FooterView class="footer-view" />
    <WhatsAppView />
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Recets from "../components/Recets.vue";

export default {
  name: "RecetsView",
  components: {
    NavbarView,
    Recets,
    FooterView,
    WhatsAppView,
  },
};
</script>

<style scoped>
.container {
  background-image: url("./farmaciafondo.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}

.footer-view {
  margin-top: 90px; 
}
</style>
