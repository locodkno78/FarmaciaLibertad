<template>
    <div>
        <NavbarView />
        <Offers />
        <FooterView />
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