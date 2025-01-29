<template>
  <div>
    <NavbarView />
  </div>
  <div>
    <Recets />
  </div>
  <div>
    <FooterView />
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

<style scoped></style>
