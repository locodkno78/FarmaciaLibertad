<template>
    <v-btn icon="mdi-whatsapp" size="x-large" class="btn" href="https://wa.me/5493814150688"></v-btn>
  </template> 
<script>
export default {
  name: "WhatsApp",  
};
</script>

<style scoped>
.btn{
    background-color: green;
    color: white;
}
/* WhatsApp Button */
.btn {
    position: fixed;
    bottom: 30px;
    right: 35px;
    background-color: #25D366;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.btn {
    background-color: green;
}

.btn  {
    font-size: 35px;
}
</style>