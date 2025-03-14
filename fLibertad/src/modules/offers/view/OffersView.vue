<template>
    <div class="container">
        <NavbarView />
        <Offers />
        <FooterView class="footer-view"/>        
    </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Offers from "../components/Offers.vue";
export default {
    name: "OffersView",
    components: {
        NavbarView,
        Offers,
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