<template>
    <div>
        <NavbarView />
        <PersonalCare class="personalCare-container" />
        <FooterView claa="footer-view" />
        <WhatsAppView />
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import WhatsAppView from "../../whatsapp/view/WhatsAppView.vue";
import PersonalCare from "../components/PersonalCare.vue";
export default {
    name: "PersonalCareView",
    components: {
        NavbarView,
        PersonalCare,
        WhatsAppView,
        FooterView,
    },
};
</script>

<style scoped>
.personalCare-container {
    margin-bottom: 60px;
    /* Ajusta este valor según sea necesario */
    margin-left: 2%;
}

.footer-view {
    margin-top: 90px;
    /* Ajusta este valor según sea necesario */
}
</style>