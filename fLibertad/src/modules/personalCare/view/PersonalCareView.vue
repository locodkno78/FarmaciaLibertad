<template>
    <div>
        <NavbarView />
        <PersonalCare />
        <FooterView />
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