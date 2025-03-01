<template>
    <div class="container">
        <NavbarView />
        <Contact />
        <FooterView />
        <WhatsAppView />
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
        height: 100vh;
        width: 100%;
    }
</style>
