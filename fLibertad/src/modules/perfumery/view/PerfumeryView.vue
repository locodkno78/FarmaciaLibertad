<template>
    <div>
        <NavbarView />
        <Perfumery />
        <FooterView />
        <WhatsAppView />
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import Perfumery from "../components/Perfumery.vue";
export default {
    name: "PerfumeryView",
    components: {
        NavbarView,
        Perfumery,
        WhatsAppView,
        FooterView,
    },
};
</script>