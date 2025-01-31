<template>
  <v-footer class="footer">
    <v-row>
      <v-col class="text-center mt-4" cols="12">
        <strong>&copy; <a href="mailto:dicolantoniosantiago@gmail.com" style="color: white; text-decoration: none;">2025
            Santiago Di Colantonio. Todos los derechos reservados.</a></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: green;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  z-index: 1000;
  height: 50px;
  display: flex;
  align-items: center;  
  justify-content: center;  
}


strong {
  color: white;
}
</style>