<template>
  <div>
    <NavbarView />
  </div>
  <div>
    <Recets />
  </div>
  <div>
    <FooterView />
  </div>
  <WhatsAppView />
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

<style scoped></style>
