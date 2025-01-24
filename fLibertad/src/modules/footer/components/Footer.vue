   
<template>
    <v-footer class="footer">
      <v-row justify="center" no-gutters>        
        <v-col class="text-center mt-4" cols="12">
           <strong>&copy; 2025 Santiago Di Colantonio. Todos los derechos reservados.</strong>
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
.footer{
    background-color: green;
}
strong{
    color: white;
}
</style>