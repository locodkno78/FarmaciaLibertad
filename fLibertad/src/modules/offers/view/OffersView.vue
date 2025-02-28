<template>
    <div>
        <NavbarView />
        <Offers class="offers-container" />
        <FooterView class="footer-view"/>
        <WhatsAppView />
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Offers from "../components/Offers.vue";
export default {
    name: "OffersView",
    components: {
        NavbarView,
        Offers,
        WhatsAppView,
        FooterView,
    },
};
</script>

<style scoped>
.offers-container {
    margin-bottom: 60px;
    /* Ajusta este valor según sea necesario */
    margin-left: 2%;
}

.footer-view {
    margin-top: 90px;
    /* Ajusta este valor según sea necesario */
}
</style>