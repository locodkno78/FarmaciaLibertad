<template>
    <v-btn 
      icon="mdi-whatsapp" 
      class="btn" 
      href="https://wa.me/5493814150688"
      target="_blank"
    ></v-btn>
  </template>
  
  <script>
  export default {
    name: "WhatsApp",  
  };
  </script>
  
  <style scoped>
  /* Botón de WhatsApp fijo */
  .btn {
      position: fixed;
      bottom: 10%;  /* Espaciado desde abajo */
      right: 2%;   /* Espaciado desde la derecha */
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 1000; /* Asegura que esté sobre otros elementos */
      transition: transform 0.2s ease-in-out;
  }
  
  /* Efecto al pasar el mouse */
  .btn:hover {
      transform: scale(1.1);
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
      .btn {
          width: 50px;
          height: 50px;
          bottom: 10%;
          right: 2%;
      }
  }
  
  @media (max-width: 480px) {
      .btn {
          width: 45px;
          height: 45px;
          bottom: 10%;
          right: 2%;
      }
  }
  </style>
  