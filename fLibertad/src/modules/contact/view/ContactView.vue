<template>
    <div class="container">
        <NavbarView />
        <Contact />
        <WhatsAppView />
        <FooterView class="footer-view"/>
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Contact from "../components/Contact.vue";

export default {
    name: "ContactView",
    components: {
        NavbarView,
        Contact,
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
    margin-top: 90px; /* Ajusta este valor según sea necesario */
  }
</style>
