<template>
    <div>
        <NavbarView />
        </div>
        <div>
        <Location />
    </div>
    <div>
        <FooterView />
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Location from "../components/Location.vue";
export default {
    name: "LocationView",
    components: {
        NavbarView,
        Location,
        FooterView,
    },
};
</script>