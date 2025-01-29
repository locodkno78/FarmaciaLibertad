<template>
    <div>
        <NavbarView />
    </div>
    <div>
        <Contact />
    </div>
    <div>
        <FooterView />
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Contact from "../components/Contact.vue";

export default {
    name: "ContactView",
    components: {
        NavbarView,
        Contact,
        FooterView,
    },
};
</script>