<template>
    <div>
        <NavbarView />
    </div>
    <div>
        <History />
    </div>
    <div>
        <Location />
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
import Location from "../components/Location.vue";
import History from "../components/History.vue";
export default {
    name: "LocationView",
    components: {
        NavbarView,
        Location,
        History,
        FooterView,
        WhatsAppView,
    },
};
</script>