<template>
  <div>
    <NavbarView />
    <Home />
    <FooterView />
    <WhatsAppView />
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Home from "../components/Home.vue";
export default {
  name: "HomeView",
  components: {
    NavbarView,
    Home,
    WhatsAppView,
    FooterView,
  },
};
</script>
