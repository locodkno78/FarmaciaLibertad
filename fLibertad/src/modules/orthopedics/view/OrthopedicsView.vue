<template>
  <div class="container">
    <NavbarView />
    <Orthopedics />
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
.container {
  height: 100%;
  width: 100%;
}

.footer-view {
  margin-top: 130px;
}
</style>