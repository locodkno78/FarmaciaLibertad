<template>
    <div class="container">
        <NavbarView />
        <PersonalCare />
        <FooterView class="footer-view" />       
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import PersonalCare from "../components/PersonalCare.vue";
export default {
    name: "PersonalCareView",
    components: {
        NavbarView,
        PersonalCare,       
        FooterView,
    },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}

.footer-view {
  margin-top: 130px;  
}
</style>