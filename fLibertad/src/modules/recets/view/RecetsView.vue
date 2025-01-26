<template>
  <div>
    <NavbarView />
    <Recets />
    <div class="footer">
      <FooterView />
    </div>
  </div>
</template>

<script>
import FooterView from "../../footer/view/FooterView.vue";
import NavbarView from "../../navbar/view/NavbarView.vue";
import Recets from "../components/Recets.vue";

export default {
  name: "RecetsView",
  components: {
    NavbarView,
    Recets,
    FooterView,
  },
};
</script>

<style scoped>
.footer{
    width: 100%;
    position: fixed;   
    bottom: 0;   
    z-index: 1000;
}
</style>
